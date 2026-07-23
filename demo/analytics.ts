import type { ChatScope } from './Dashboard';
import {
  KIT_LIST,
  RECORDS,
  SETTING_BASELINE,
  SIGNALS,
  TRENDS,
  type RecordEntry,
  type RecordSetting,
} from './data';

/**
 * Pure aggregation over the materialized RECORDS sample. No LLM, no randomness:
 * every number the chat shows is computed here from real records so answers are
 * traceable back to verbatims. Shares are fractions of the in-scope record set.
 */

export type Dimension =
  | 'specialty'
  | 'setting'
  | 'hcp'
  | 'institution'
  | 'kit'
  | 'month'
  | 'tag'
  | 'period';

export interface GroupRow {
  /** Raw grouping key. */
  key: string;
  /** Human-facing label (e.g. "Community-based" for setting `community`). */
  label: string;
  count: number;
  /** Share of the in-scope record set, 0..1. */
  share: number;
  /** Whole-report baseline share, 0..1 — only where a named baseline exists. */
  baseline?: number;
  /** share − baseline, 0..1 — only where a baseline exists. */
  delta?: number;
  /** Real record ids behind this row, so the row can open its verbatims. */
  recordIds: number[];
}

export interface GroupResult {
  dimension: Dimension;
  /** Denominator: distinct records in scope. */
  total: number;
  rows: GroupRow[];
  /** True when a row can appear in multiple buckets (shares may exceed 100%). */
  multiValued: boolean;
  /** A short, computed baseline/concentration note (interpretation only). */
  note: string;
}

export interface MagnitudeSummary {
  records: number;
  hcps: number;
  specialties: number;
  institutions: number;
  settings: RecordSetting[];
  kits: number;
  /** Share of records attributable to the single most active HCP, 0..1. */
  topHcpShare: number;
  topHcp?: string;
}

// ---------------------------------------------------------------------------
// Scope → record set
// ---------------------------------------------------------------------------

const ALL_RECORDS: RecordEntry[] = Object.values(RECORDS);

function recordsForIds(ids: number[]): RecordEntry[] {
  const seen = new Set<number>();
  const out: RecordEntry[] = [];
  for (const id of ids) {
    if (seen.has(id)) continue;
    const record = RECORDS[id];
    if (record) {
      seen.add(id);
      out.push(record);
    }
  }
  return out;
}

/** Resolve a chat scope (whole / trend / signal) to its backing record set. */
export function resolveScopeRecords(scope: ChatScope): RecordEntry[] {
  if (scope.kind === 'signal') {
    const signal =
      SIGNALS.find((s) => s.shorthand === scope.shorthand) ??
      SIGNALS.find((s) => `Signal ${s.seq}` === scope.label);
    return signal ? recordsForIds(signal.recs) : [];
  }
  if (scope.kind === 'trend') {
    const trend =
      TRENDS.find((t) => t.label === scope.label) ??
      TRENDS.find((t) => t.label.replace('Trend ', 'T') === scope.shorthand);
    if (!trend) return [];
    return recordsForIds(trend.signals.flatMap((s) => s.recs));
  }
  return ALL_RECORDS;
}

// ---------------------------------------------------------------------------
// Dimension helpers
// ---------------------------------------------------------------------------

export function settingLabel(setting: RecordSetting): string {
  return setting === 'academic' ? 'Academic' : 'Community-based';
}

/** Early / Mid / Late buckets computed from the day-of-month in `date`. */
function periodFor(record: RecordEntry): { key: string; label: string } {
  const match = /\b(\d{1,2}),/.exec(record.date);
  const day = match ? Number(match[1]) : 15;
  const month = record.month.split(' ')[0];
  if (day <= 10) return { key: `${month}-early`, label: `Early ${month}` };
  if (day <= 20) return { key: `${month}-mid`, label: `Mid ${month}` };
  return { key: `${month}-late`, label: `Late ${month}` };
}

const PERIOD_ORDER = ['early', 'mid', 'late'];

/** Emit the (key,label) buckets a record contributes to for a dimension. */
function bucketsFor(record: RecordEntry, dimension: Dimension): { key: string; label: string }[] {
  switch (dimension) {
    case 'specialty':
      return [{ key: record.specialty, label: record.specialty }];
    case 'setting':
      return [{ key: record.setting, label: settingLabel(record.setting) }];
    case 'hcp':
      return [{ key: record.hcp, label: record.hcp }];
    case 'institution':
      return [{ key: record.institution, label: record.institution }];
    case 'kit':
      return [{ key: record.kit, label: record.kit }];
    case 'month':
      return [{ key: record.month, label: record.month }];
    case 'tag':
      return record.tags.map((tag) => ({ key: tag, label: tag }));
    case 'period':
      return [periodFor(record)];
    default:
      return [];
  }
}

function baselineFor(dimension: Dimension, key: string): number | undefined {
  if (dimension === 'setting') {
    return SETTING_BASELINE[key as RecordSetting];
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// Aggregations
// ---------------------------------------------------------------------------

const DIMENSION_LABEL: Record<Dimension, string> = {
  specialty: 'specialty',
  setting: 'care setting',
  hcp: 'HCP',
  institution: 'institution type',
  kit: 'KIT',
  month: 'month',
  tag: 'insight tag',
  period: 'collection window',
};

export function dimensionLabel(dimension: Dimension): string {
  return DIMENSION_LABEL[dimension];
}

function pct(fraction: number): number {
  return Math.round(fraction * 100);
}

/** Group an in-scope record set by a dimension, with baseline comparison. */
export function groupBy(records: RecordEntry[], dimension: Dimension): GroupResult {
  const total = records.length;
  const multiValued = dimension === 'tag';

  const buckets = new Map<string, { label: string; ids: number[] }>();
  for (const record of records) {
    for (const { key, label } of bucketsFor(record, dimension)) {
      const entry = buckets.get(key) ?? { label, ids: [] };
      entry.ids.push(record.id);
      buckets.set(key, entry);
    }
  }

  const rows: GroupRow[] = Array.from(buckets.entries()).map(([key, { label, ids }]) => {
    const share = total > 0 ? ids.length / total : 0;
    const baseline = baselineFor(dimension, key);
    return {
      key,
      label,
      count: ids.length,
      share,
      baseline,
      delta: baseline != null ? share - baseline : undefined,
      recordIds: ids,
    };
  });

  // Sort by count desc; period keeps chronological order for a readable timeline.
  if (dimension === 'period') {
    rows.sort(
      (a, b) =>
        PERIOD_ORDER.indexOf(a.key.split('-')[1]) - PERIOD_ORDER.indexOf(b.key.split('-')[1]),
    );
  } else {
    rows.sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }

  return { dimension, total, rows, multiValued, note: buildNote(dimension, rows, total) };
}

function buildNote(dimension: Dimension, rows: GroupRow[], total: number): string {
  if (rows.length === 0 || total === 0) return 'No records in scope.';

  // Baseline-anchored note where a real baseline exists (setting).
  const withBaseline = rows.find((row) => row.baseline != null && Math.abs(row.delta ?? 0) >= 0.05);
  if (withBaseline && withBaseline.delta != null) {
    const dir = withBaseline.delta > 0 ? 'over' : 'under';
    return `${withBaseline.label} is ${dir}-represented in this sample (${pct(
      withBaseline.share,
    )}% vs ${pct(withBaseline.baseline ?? 0)}% whole-report baseline).`;
  }

  const top = rows[0];
  const topN = rows.slice(0, 2);
  const concentration = topN.reduce((sum, row) => sum + row.share, 0);
  if (rows.length <= 2) {
    return `${top.label} leads with ${top.count} of ${total} records (${pct(top.share)}%).`;
  }
  return `Top ${topN.length} ${dimensionLabel(dimension)} groups (${topN
    .map((r) => r.label)
    .join(', ')}) cover ${pct(concentration)}% of the ${total} records in scope.`;
}

/** Sizing summary for a scope: distinct HCPs, specialties, settings, spread. */
export function magnitude(records: RecordEntry[]): MagnitudeSummary {
  const hcpCounts = new Map<string, number>();
  for (const record of records) {
    hcpCounts.set(record.hcp, (hcpCounts.get(record.hcp) ?? 0) + 1);
  }
  const settings = Array.from(new Set(records.map((r) => r.setting)));
  let topHcp: string | undefined;
  let topCount = 0;
  for (const [hcp, count] of hcpCounts) {
    if (count > topCount) {
      topCount = count;
      topHcp = hcp;
    }
  }
  return {
    records: records.length,
    hcps: hcpCounts.size,
    specialties: new Set(records.map((r) => r.specialty)).size,
    institutions: new Set(records.map((r) => r.institution)).size,
    settings,
    kits: new Set(records.map((r) => r.kit)).size,
    topHcpShare: records.length > 0 ? topCount / records.length : 0,
    topHcp,
  };
}

// Precompute each record's strongest backing-signal score for evidence ranking.
const RECORD_STRENGTH: Record<number, number> = (() => {
  const map: Record<number, number> = {};
  for (const signal of SIGNALS) {
    const score = Number.parseFloat(signal.strengthLabel);
    for (const id of signal.recs) {
      map[id] = Math.max(map[id] ?? 0, score);
    }
  }
  return map;
})();

export function recordStrength(id: number): number {
  return RECORD_STRENGTH[id] ?? 0;
}

/** Optionally filter a record set to those matching a tag/keyword. */
export function filterByTag(records: RecordEntry[], tag: string): RecordEntry[] {
  const needle = tag.toLowerCase();
  return records.filter(
    (r) => r.tags.some((t) => t.toLowerCase() === needle) || r.quote.toLowerCase().includes(needle),
  );
}

/** Top-N real verbatim records for a scope, ranked by backing-signal strength. */
export function evidence(records: RecordEntry[], limit = 3): RecordEntry[] {
  return [...records]
    .sort((a, b) => recordStrength(b.id) - recordStrength(a.id) || a.id - b.id)
    .slice(0, limit);
}

export interface CompareSide {
  label: string;
  records: RecordEntry[];
  magnitude: MagnitudeSummary;
}

/** Compare two labeled record sets, returning per-side magnitude summaries. */
export function compareSides(
  a: { label: string; records: RecordEntry[] },
  b: { label: string; records: RecordEntry[] },
): { a: CompareSide; b: CompareSide } {
  return {
    a: { label: a.label, records: a.records, magnitude: magnitude(a.records) },
    b: { label: b.label, records: b.records, magnitude: magnitude(b.records) },
  };
}

/** Distinct-HCP count behind a record set (used for confidence scoring). */
export function distinctHcps(records: RecordEntry[]): number {
  return new Set(records.map((r) => r.hcp)).size;
}

/**
 * Per-KIT split of records into Academic vs Community, computed directly from
 * the real `RECORDS` sample. Every count is a straight tally of records whose
 * `kit` matches and whose derived `setting` is `academic` / `community` — no
 * estimates, no rounding. `recordIds` lists the exact backing records so any
 * bar segment traces back to verbatims.
 */
export interface KitSettingBreakdown {
  kit: string;
  academic: number;
  community: number;
  total: number;
  academicIds: number[];
  communityIds: number[];
  recordIds: number[];
}

export function kitSettingBreakdown(
  records: RecordEntry[] = ALL_RECORDS,
  kits: string[] = KIT_LIST,
): KitSettingBreakdown[] {
  const byKit = new Map<string, KitSettingBreakdown>();
  const ensure = (kit: string): KitSettingBreakdown => {
    let entry = byKit.get(kit);
    if (!entry) {
      entry = {
        kit,
        academic: 0,
        community: 0,
        total: 0,
        academicIds: [],
        communityIds: [],
        recordIds: [],
      };
      byKit.set(kit, entry);
    }
    return entry;
  };

  // Seed with the canonical KIT list so every KIT is represented (including a
  // truthful 0 for any KIT with no records in scope).
  for (const kit of kits) ensure(kit);

  for (const record of records) {
    const entry = ensure(record.kit);
    entry.total += 1;
    entry.recordIds.push(record.id);
    if (record.setting === 'academic') {
      entry.academic += 1;
      entry.academicIds.push(record.id);
    } else {
      entry.community += 1;
      entry.communityIds.push(record.id);
    }
  }

  return Array.from(byKit.values()).sort(
    (a, b) => b.total - a.total || a.kit.localeCompare(b.kit),
  );
}

// ---------------------------------------------------------------------------
// Proof-pattern data helpers (NEW — additive; existing signatures untouched)
// ---------------------------------------------------------------------------

/** A single group split into Academic vs Community, straight-tallied. */
export interface SettingSplitRow {
  key: string;
  label: string;
  academic: number;
  community: number;
  total: number;
  academicIds: number[];
  communityIds: number[];
  recordIds: number[];
}

/** Single-valued dimensions we can split by setting (excludes multi-valued `tag`). */
export type SettingSplitDimension = 'specialty' | 'hcp' | 'institution' | 'kit';

/**
 * Generic Academic vs Community split per group of a single-valued dimension,
 * computed directly from the real `RECORDS` sample (every count is a straight
 * tally, `recordIds` traces each bar back to verbatims). Mirrors
 * `kitSettingBreakdown` but for any single-valued dimension — used by the
 * specialty-distribution proof pattern (A1).
 */
export function settingSplitByDimension(
  records: RecordEntry[],
  dimension: SettingSplitDimension,
): SettingSplitRow[] {
  const keyOf = (r: RecordEntry): string =>
    dimension === 'specialty'
      ? r.specialty
      : dimension === 'hcp'
        ? r.hcp
        : dimension === 'institution'
          ? r.institution
          : r.kit;

  const rows = new Map<string, SettingSplitRow>();
  for (const record of records) {
    const key = keyOf(record);
    let row = rows.get(key);
    if (!row) {
      row = {
        key,
        label: key,
        academic: 0,
        community: 0,
        total: 0,
        academicIds: [],
        communityIds: [],
        recordIds: [],
      };
      rows.set(key, row);
    }
    row.total += 1;
    row.recordIds.push(record.id);
    if (record.setting === 'academic') {
      row.academic += 1;
      row.academicIds.push(record.id);
    } else {
      row.community += 1;
      row.communityIds.push(record.id);
    }
  }

  return Array.from(rows.values()).sort(
    (a, b) => b.total - a.total || a.label.localeCompare(b.label),
  );
}

/**
 * Academic vs Community split per INSIGHT TAG. Tags are MULTI-VALUED, so each
 * record contributes to every tag in its `record.tags` — a record is counted
 * once per tag it carries. Consequently bar totals can (and do) sum to MORE
 * than the number of records in scope; that is expected and truthful. Shape
 * mirrors `SettingSplitRow` (straight tallies; `*Ids` trace back to verbatims),
 * sorted by descending total.
 */
export function settingSplitByTag(records: RecordEntry[] = ALL_RECORDS): SettingSplitRow[] {
  const rows = new Map<string, SettingSplitRow>();
  for (const record of records) {
    for (const tag of record.tags) {
      let row = rows.get(tag);
      if (!row) {
        row = {
          key: tag,
          label: tag,
          academic: 0,
          community: 0,
          total: 0,
          academicIds: [],
          communityIds: [],
          recordIds: [],
        };
        rows.set(tag, row);
      }
      row.total += 1;
      row.recordIds.push(record.id);
      if (record.setting === 'academic') {
        row.academic += 1;
        row.academicIds.push(record.id);
      } else {
        row.community += 1;
        row.communityIds.push(record.id);
      }
    }
  }

  return Array.from(rows.values()).sort(
    (a, b) => b.total - a.total || a.label.localeCompare(b.label),
  );
}

/** One care-setting's sample share vs its whole-report baseline. */
export interface SettingBaselineRow {
  setting: RecordSetting;
  label: string;
  count: number;
  share: number;
  baseline: number;
  delta: number;
  recordIds: number[];
}

/**
 * Community/Academic share of the in-scope records vs the whole-report
 * `SETTING_BASELINE` (community .68 / academic .32). Always returns both
 * settings (a setting absent from scope reports a truthful 0 share) so the
 * baseline-comparison proof pattern (A2) can show over/under-representation.
 */
export function settingVsBaseline(records: RecordEntry[]): SettingBaselineRow[] {
  const total = records.length;
  const order: RecordSetting[] = ['community', 'academic'];
  return order.map((setting) => {
    const ids = records.filter((r) => r.setting === setting).map((r) => r.id);
    const share = total > 0 ? ids.length / total : 0;
    const baseline = SETTING_BASELINE[setting];
    return {
      setting,
      label: settingLabel(setting),
      count: ids.length,
      share,
      baseline,
      delta: share - baseline,
      recordIds: ids,
    };
  });
}
