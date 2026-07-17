import type { ChatScope } from './Dashboard';
import { NOTABLE_SIGNALS, RECORDS, signalStrength, SIGNALS, TRENDS, type RecordEntry } from './data';
import {
  compareSides,
  dimensionLabel,
  distinctHcps,
  evidence,
  filterByTag,
  groupBy,
  magnitude,
  resolveScopeRecords,
  settingLabel,
  type Dimension,
} from './analytics';
import { selectProofPattern, type ProofPatternType } from './proofPatterns';

export interface Token {
  text: string;
  bold?: boolean;
}

export type AnswerBlock =
  | { type: 'p'; tokens: Token[] }
  | { type: 'li'; tokens: Token[] };

export interface DataRow {
  label: string;
  value: string;
  /** Share of the total, 0–100, drives the bar width. */
  share: number;
  /** Real record ids behind this row, so the row can open its verbatims. */
  recordIds?: number[];
  /** Whole-report baseline share (0–100) where a named baseline exists. */
  baseline?: number;
}

export interface DataView {
  /** Filter chip label, e.g. "By HCP specialty". */
  filter: string;
  /** Three column headers: [category, value, share]. */
  columns: [string, string, string];
  rows: DataRow[];
  /** Provenance line shown in the footer, e.g. "From your records". */
  source: string;
  /** Computed interpretation note (baseline / concentration). */
  note?: string;
}

/** A real verbatim record surfaced as evidence (never fabricated). */
export interface EvidenceRecord {
  id: number;
  quote: string;
  specialty: string;
  setting: string;
  date: string;
  hcp?: string;
}

/** Compact sizing stat shown for magnitude answers. */
export interface MagnitudeStat {
  label: string;
  value: string;
}

export type ConfidenceTone = 'success' | 'warning' | 'error' | 'info' | 'neutral';

/** A single deterministic input behind the confidence score (Score expand). */
export interface ConfidenceComponent {
  label: string;
  value: string;
}

export interface Confidence {
  /** Short label, e.g. "Strong" / "Moderate" / "Tentative" / "Low". */
  label: string;
  tone: ConfidenceTone;
  /** Computed coverage score, 0–100 (surfaced inside the Score expand). */
  score?: number;
  /** Short, client-facing reason shown after the tier in the footer. */
  reason?: string;
  /** Deterministic components behind the score, revealed by the "Score" chip. */
  components?: ConfidenceComponent[];
  /** @deprecated coverage detail retained for the LLM path. */
  detail?: string;
}

/** A guardrail banner shown above a declined/limited answer (badge + reason). */
export interface Guardrail {
  /** Uppercase intent chip, e.g. "TEMPORAL" / "OUT OF SCOPE". */
  badge: string;
  /** Reason line, e.g. "Guardrail · needs ≥2 periods". */
  reason: string;
}

/** A chart proof (A1–A5) rendered inline in an answer, computed from records. */
export interface AnswerProofChart {
  type: ProofPatternType;
  scope: ChatScope;
}

export interface Answer {
  blocks: AnswerBlock[];
  /** Guardrail banner for declined / limited answers (temporal, out-of-data). */
  guardrail?: Guardrail;
  /** Chart proof visual, chosen to fit the question's intent/dimension. */
  proofChart?: AnswerProofChart;
  dataView?: DataView;
  proof?: { label: string; quote: string };
  /** Real verbatim evidence cards. */
  records?: EvidenceRecord[];
  /** Compact sizing stats (magnitude answers). */
  magnitude?: MagnitudeStat[];
  /** Beta disclaimer (recommendation / actions answers). */
  disclaimer?: string;
  refs?: string[];
  /** Footer confidence chip (dot + label + score). */
  confidence?: Confidence;
  followUps: string[];
}

/** Split a string with **bold** markers into word/space tokens, preserving bold spans. */
function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  const segments = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  for (const segment of segments) {
    const bold = segment.startsWith('**') && segment.endsWith('**');
    const clean = bold ? segment.slice(2, -2) : segment;
    // Keep whitespace attached to the preceding word so spacing streams naturally.
    const parts = clean.match(/\S+\s*|\s+/g) ?? [clean];
    for (const part of parts) {
      tokens.push({ text: part, bold: bold || undefined });
    }
  }
  return tokens;
}

const p = (text: string): AnswerBlock => ({ type: 'p', tokens: tokenize(text) });
const li = (text: string): AnswerBlock => ({ type: 'li', tokens: tokenize(text) });

/** Total number of streamable tokens (used to drive the typewriter). */
export function countTokens(answer: Answer): number {
  return answer.blocks.reduce((sum, block) => sum + block.tokens.length, 0);
}

// ---------------------------------------------------------------------------
// Intent taxonomy + deterministic detection
// ---------------------------------------------------------------------------

export type Intent =
  | 'drill-down'
  | 'magnitude'
  | 'evidence'
  | 'compare'
  | 'synthesis'
  | 'actions'
  | 'temporal'
  | 'out-of-data';

interface Detection {
  intent: Intent;
  dimension?: Dimension;
}

// Topics the sample genuinely cannot answer (competitor opinions, pricing,
// market/sales, etc.). Kept deliberately narrow so in-scope questions pass.
const OUT_OF_DATA =
  /\b(pricing|price of|cost of|reimburs|formulary|payer rate|market share|sales|revenue|profit|stock|elevidys|sarepta|exondys|vyondys|duvyzat|agamree|deflazacort|prednisone pricing|competitor|weather|salary|nps score)\b/i;

function resolveDimension(q: string): Dimension | undefined {
  if (/special/.test(q)) return 'specialty';
  if (/\b(setting|community|academic|care setting)\b/.test(q)) return 'setting';
  if (/\b(hcp|hcps|physician|prescriber|doctor|clinician)\b|who drives|which hcp/.test(q))
    return 'hcp';
  if (/\bkit\b|knowledge interest|topic area/.test(q)) return 'kit';
  if (/institution/.test(q)) return 'institution';
  if (/\bmonth\b/.test(q)) return 'month';
  if (/\b(theme|themes|tag|tags)\b/.test(q)) return 'tag';
  return undefined;
}

export function detectIntent(text: string): Detection {
  const q = text.toLowerCase();

  if (OUT_OF_DATA.test(q)) return { intent: 'out-of-data' };

  const dimension = resolveDimension(q);

  if (/\b(compare|versus|vs\.?|difference between|contrast)\b/.test(q))
    return { intent: 'compare', dimension };

  if (/\b(over time|timeline|trend over|momentum|recently|when did|by month|earlier|later)\b/.test(q))
    return { intent: 'temporal', dimension: 'period' };

  if (/\b(recommend|action|actions|next step|what should|do about|playbook|tactic|strategy to)\b/.test(q))
    return { intent: 'actions', dimension };

  if (/\b(verbatim|verbatims|quote|quotes|said|saying|strongest|evidence|examples?)\b/.test(q))
    return { intent: 'evidence', dimension };

  if (/\b(how many|how big|how widespread|how much|size|scale|magnitude|concentrated|spread|reach|prevalence|loud)\b/.test(q))
    return { intent: 'magnitude', dimension };

  if (/\b(break ?down|breakdown|distribution|split|across|by )\b/.test(q) || dimension)
    return { intent: 'drill-down', dimension: dimension ?? 'specialty' };

  if (/\b(summary|overview|tl;?dr|story|key takeaway|most important|so what|whats going on|what.?s going on)\b/.test(q))
    return { intent: 'synthesis' };

  return { intent: 'synthesis' };
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

function scopeNoun(scope: ChatScope): string {
  if (scope.kind === 'signal') return scope.label;
  if (scope.kind === 'trend') return scope.label;
  return 'this report';
}

function scopeRefs(scope: ChatScope): string[] {
  if (scope.kind === 'signal' && scope.shorthand) return [scope.shorthand];
  if (scope.kind === 'trend' && scope.shorthand) return [scope.shorthand];
  return [];
}

function pct(fraction: number): number {
  return Math.round(fraction * 100);
}

function recordRefs(records: RecordEntry[], limit = 3): string[] {
  return records.slice(0, limit).map((r) => `R${r.id}`);
}

function toEvidence(record: RecordEntry): EvidenceRecord {
  return {
    id: record.id,
    quote: record.quote,
    specialty: record.specialty,
    setting: settingLabel(record.setting),
    date: record.date,
    hcp: record.hcp,
  };
}

// Sample totals for the queryable record set — used as the denominators the
// coverage score scales against, so "whole report" is the ceiling and a single
// signal is a fraction of it.
const ALL_RECORDS = Object.values(RECORDS);
const SAMPLE_RECORDS = ALL_RECORDS.length || 1;
const SAMPLE_HCPS = distinctHcps(ALL_RECORDS) || 1;
const SAMPLE_SPECIALTIES = new Set(ALL_RECORDS.map((r) => r.specialty)).size || 1;

/**
 * Coverage-based confidence built to DIFFERENTIATE across scopes. Four factors,
 * scaled relative to the whole queryable sample with diminishing returns (sqrt)
 * so a thin single-signal slice never saturates:
 *   • record coverage   — how much of the sample the answer rests on
 *   • HCP coverage       — how many distinct voices back it
 *   • breadth            — how many specialties it spans
 *   • settings spread    — both community + academic > a single setting
 * minus a concentration penalty (an answer resting on one loud HCP is weaker
 * than the same records spread across many). The client footer shows the tier +
 * a short reason; the read-only "Score" chip expands the deterministic inputs.
 */
function coverageConfidence(records: RecordEntry[]): Confidence {
  const n = records.length;
  const hcps = distinctHcps(records);
  const m = magnitude(records);

  const frac = (part: number, whole: number) => (whole > 0 ? Math.min(1, part / whole) : 0);
  const recordsCov = Math.sqrt(frac(n, SAMPLE_RECORDS));
  const hcpCov = Math.sqrt(frac(hcps, SAMPLE_HCPS));
  const breadthCov = Math.sqrt(frac(m.specialties, SAMPLE_SPECIALTIES));
  const settingsSpread = m.settings.length >= 2 ? 1 : m.settings.length === 1 ? 0.5 : 0;
  // Only lopsided concentration is penalised — some clustering is normal, but a
  // result resting mostly on one HCP (share well above a fifth) is discounted.
  const concentrationPenalty = Math.max(0, m.topHcpShare - 0.2);

  const raw =
    0.34 * recordsCov +
    0.24 * hcpCov +
    0.26 * breadthCov +
    0.14 * settingsSpread -
    0.3 * concentrationPenalty;
  const score = Math.max(0.05, Math.min(1, raw));
  const scoreVal = Math.round(score * 100);
  const tier = signalStrength(score);
  const tone: ConfidenceTone =
    tier.tone === 'strong' ? 'success' : tier.tone === 'moderate' ? 'warning' : 'neutral';
  const label = tier.tone === 'weak' ? 'Tentative' : tier.label;
  const coverageWord =
    tier.tone === 'strong'
      ? 'broad coverage'
      : tier.tone === 'moderate'
        ? 'moderate coverage'
        : 'thin coverage';
  const concentrated = m.topHcpShare >= 0.4;
  const settingsValue =
    m.settings.length === 2
      ? 'Both'
      : m.settings.length === 1
        ? settingLabel(m.settings[0])
        : 'None';
  return {
    label,
    tone,
    score: scoreVal,
    reason: `${n} record${n === 1 ? '' : 's'} · ${hcps} HCP${hcps === 1 ? '' : 's'} — ${coverageWord}${
      concentrated ? ', concentrated' : ''
    }`,
    components: [
      { label: 'Coverage score', value: `${scoreVal} / 100` },
      { label: 'Records analyzed', value: `${n} of ${SAMPLE_RECORDS}` },
      { label: 'Distinct HCPs', value: `${hcps} of ${SAMPLE_HCPS}` },
      { label: 'Specialties covered', value: `${m.specialties} of ${SAMPLE_SPECIALTIES}` },
      { label: 'Settings covered', value: settingsValue },
      { label: 'Top-HCP concentration', value: `${pct(m.topHcpShare)}%` },
    ],
  };
}

/** Low-confidence chip for guardrail (declined / limited) answers. */
function guardrailConfidence(reason: string, components: ConfidenceComponent[]): Confidence {
  return { label: 'Low', tone: 'neutral', reason, components };
}

/** The signal with the most backing records inside a given record set. */
function leadSignalFor(records: RecordEntry[]) {
  const ids = new Set(records.map((r) => r.id));
  let best = SIGNALS[0];
  let bestCount = -1;
  for (const signal of SIGNALS) {
    const count = signal.recs.reduce((sum, id) => (ids.has(id) ? sum + 1 : sum), 0);
    if (count > bestCount) {
      bestCount = count;
      best = signal;
    }
  }
  return { signal: best, count: bestCount };
}

const DIM_COL_HEAD: Record<Dimension, string> = {
  specialty: 'Specialty',
  setting: 'Setting',
  hcp: 'HCP',
  institution: 'Institution',
  kit: 'KIT',
  month: 'Month',
  tag: 'Theme',
  period: 'Window',
};

const SIGNAL_FOLLOWUPS = ['Which HCPs drive it?', 'Strongest verbatims', 'How big is this?'];
const WHOLE_FOLLOWUPS = [
  'Break down by specialty',
  'Break down by setting',
  'Compare Trend 1 vs. Trend 2',
];

function followUpsFor(scope: ChatScope): string[] {
  return scope.kind === 'signal' ? SIGNAL_FOLLOWUPS : WHOLE_FOLLOWUPS;
}

// ---------------------------------------------------------------------------
// Answer builders (deterministic intents compute over analytics.ts)
// ---------------------------------------------------------------------------

function buildDrillDown(scope: ChatScope, dimension: Dimension): Answer {
  const records = resolveScopeRecords(scope);
  if (records.length === 0) return emptyScopeAnswer(scope);

  const result = groupBy(records, dimension);
  const top = result.rows.slice(0, 5);
  const rest = result.rows.slice(5);

  const rows: DataRow[] = top.map((row) => ({
    label: row.label,
    value: String(row.count),
    share: pct(row.share),
    recordIds: row.recordIds,
    baseline: row.baseline != null ? pct(row.baseline) : undefined,
  }));
  if (rest.length > 0) {
    const restIds = rest.flatMap((row) => row.recordIds);
    const restCount = rest.reduce((sum, row) => sum + row.count, 0);
    rows.push({
      label: `${rest.length} more ${dimensionLabel(dimension)}${rest.length === 1 ? '' : 's'}`,
      value: String(restCount),
      share: pct(restCount / result.total),
      recordIds: restIds,
    });
  }

  const lead = result.rows[0];
  return {
    blocks: [
      p(`Here's how the ${result.total} records in ${scopeNoun(scope)} break down by ${dimensionLabel(dimension)}:`),
      li(`**${lead.label}** leads with ${lead.count} record${lead.count === 1 ? '' : 's'} (${pct(lead.share)}%).`),
      li(result.note),
    ],
    dataView: {
      filter: `By ${dimensionLabel(dimension)}`,
      columns: [DIM_COL_HEAD[dimension], 'Records', 'Share'],
      rows,
      source: `From ${result.total} records in ${scopeNoun(scope)}`,
      note: result.note,
    },
    refs: [...scopeRefs(scope), ...recordRefs(records.filter((r) => lead.recordIds.includes(r.id)))],
    confidence: coverageConfidence(records),
    followUps: [`Strongest verbatims`, `Break down by ${dimension === 'specialty' ? 'setting' : 'specialty'}`, 'How big is this?'],
  };
}

function buildMagnitude(scope: ChatScope): Answer {
  const records = resolveScopeRecords(scope);
  if (records.length === 0) return emptyScopeAnswer(scope);

  const m = magnitude(records);
  const settingsText =
    m.settings.length === 2
      ? 'both settings'
      : m.settings.length === 1
        ? `${settingLabel(m.settings[0])} only`
        : 'no settings';
  const concentration =
    m.topHcpShare >= 0.4
      ? `concentrated — ${m.topHcp} alone accounts for ${pct(m.topHcpShare)}% of records`
      : 'not a single loud account — the concern is distributed';

  return {
    blocks: [
      p(
        `${scopeNoun(scope)} is backed by **${m.records} records from ${m.hcps} HCPs** across ${m.specialties} specialt${m.specialties === 1 ? 'y' : 'ies'} and ${settingsText}.`,
      ),
      li(`It is ${concentration}.`),
    ],
    magnitude: [
      { label: 'Records', value: String(m.records) },
      { label: 'HCPs', value: String(m.hcps) },
      { label: 'Specialties', value: String(m.specialties) },
      { label: 'Settings', value: String(m.settings.length) },
    ],
    refs: [...scopeRefs(scope), ...recordRefs(evidence(records, 2))],
    confidence: coverageConfidence(records),
    followUps: ['Which HCPs drive it?', 'Break down by specialty', 'Strongest verbatims'],
  };
}

function buildEvidence(scope: ChatScope, text: string): Answer {
  const scoped = resolveScopeRecords(scope);
  if (scoped.length === 0) return emptyScopeAnswer(scope);

  // Narrow to a tag/keyword if the question names one.
  const dim = resolveDimension(text.toLowerCase());
  let pool = scoped;
  if (dim === 'setting') {
    const wantAcademic = /academic/.test(text.toLowerCase());
    const filtered = scoped.filter((r) => (wantAcademic ? r.setting === 'academic' : r.setting === 'community'));
    if (filtered.length > 0) pool = filtered;
  } else {
    for (const tag of ['non-ambulatory', 'cardiac', 'pulmonary', 'gi', 'dosing', 'monitoring', 'outcome-measures', 'gene-therapy', 'combination', 'education']) {
      if (text.toLowerCase().includes(tag.replace('-', ' ')) || text.toLowerCase().includes(tag)) {
        const filtered = filterByTag(scoped, tag);
        if (filtered.length > 0) {
          pool = filtered;
          break;
        }
      }
    }
  }

  const top = evidence(pool, 3);
  return {
    blocks: [
      p(`The strongest verbatims in ${scopeNoun(scope)}, ranked by signal strength:`),
    ],
    records: top.map(toEvidence),
    refs: [...scopeRefs(scope), ...recordRefs(top)],
    confidence: coverageConfidence(pool),
    followUps: ['Why is this happening?', 'Which HCPs drive it?', 'How big is this?'],
  };
}

function recordsForTrendLabel(label: string): RecordEntry[] {
  return resolveScopeRecords({ kind: 'trend', label });
}

function recordsForSignalSeq(seq: number): RecordEntry[] {
  return resolveScopeRecords({ kind: 'signal', label: `Signal ${seq}`, shorthand: `S${seq}` });
}

interface ComparePlan {
  a: { label: string; records: RecordEntry[] };
  b: { label: string; records: RecordEntry[] };
  refs: string[];
}

function resolveComparison(text: string, scope: ChatScope): ComparePlan {
  const q = text.toLowerCase();
  const trendNums = Array.from(q.matchAll(/(?:trend|\bt)\s*(\d)/g)).map((m) => Number(m[1]));
  const signalNums = Array.from(q.matchAll(/(?:signal|\bs)\s*(\d)/g)).map((m) => Number(m[1]));
  const uniqTrends = Array.from(new Set(trendNums)).filter((n) => n >= 1 && n <= TRENDS.length);
  const uniqSignals = Array.from(new Set(signalNums)).filter((n) => n >= 1 && n <= SIGNALS.length);

  if (uniqTrends.length >= 2) {
    const [x, y] = uniqTrends;
    return {
      a: { label: `Trend ${x}`, records: recordsForTrendLabel(`Trend ${x}`) },
      b: { label: `Trend ${y}`, records: recordsForTrendLabel(`Trend ${y}`) },
      refs: [`T${x}`, `T${y}`],
    };
  }
  if (uniqSignals.length >= 2) {
    const [x, y] = uniqSignals;
    return {
      a: { label: `Signal ${x}`, records: recordsForSignalSeq(x) },
      b: { label: `Signal ${y}`, records: recordsForSignalSeq(y) },
      refs: [`S${x}`, `S${y}`],
    };
  }
  if (/community/.test(q) || /academic/.test(q) || scope.kind !== 'whole') {
    const scoped = resolveScopeRecords(scope);
    return {
      a: { label: 'Community-based', records: scoped.filter((r) => r.setting === 'community') },
      b: { label: 'Academic', records: scoped.filter((r) => r.setting === 'academic') },
      refs: scopeRefs(scope),
    };
  }
  return {
    a: { label: 'Trend 1', records: recordsForTrendLabel('Trend 1') },
    b: { label: 'Trend 2', records: recordsForTrendLabel('Trend 2') },
    refs: ['T1', 'T2'],
  };
}

function buildCompare(scope: ChatScope, text: string): Answer {
  const plan = resolveComparison(text, scope);
  const { a, b } = compareSides(plan.a, plan.b);
  const totalRecords = a.magnitude.records + b.magnitude.records;
  const combined = [...a.records, ...b.records];

  const bigger = a.magnitude.records >= b.magnitude.records ? a : b;
  const smaller = bigger === a ? b : a;
  const hcpDelta = Math.abs(a.magnitude.hcps - b.magnitude.hcps);

  return {
    blocks: [
      p(`Comparing **${a.label}** and **${b.label}** across the sample:`),
      li(`**${a.label}** — ${a.magnitude.records} records, ${a.magnitude.hcps} HCPs, ${a.magnitude.specialties} specialties.`),
      li(`**${b.label}** — ${b.magnitude.records} records, ${b.magnitude.hcps} HCPs, ${b.magnitude.specialties} specialties.`),
      li(`**Net.** ${bigger.label} carries more evidence (${bigger.magnitude.records} vs ${smaller.magnitude.records} records${hcpDelta > 0 ? `, +${hcpDelta} HCPs` : ''}).`),
    ],
    dataView: {
      filter: `${a.label} vs. ${b.label}`,
      columns: ['Group', 'Records', 'Share'],
      rows: [
        {
          label: a.label,
          value: String(a.magnitude.records),
          share: totalRecords > 0 ? pct(a.magnitude.records / totalRecords) : 0,
          recordIds: a.records.map((r) => r.id),
        },
        {
          label: b.label,
          value: String(b.magnitude.records),
          share: totalRecords > 0 ? pct(b.magnitude.records / totalRecords) : 0,
          recordIds: b.records.map((r) => r.id),
        },
      ],
      source: `From ${totalRecords} records across both groups`,
    },
    refs: [...plan.refs, ...recordRefs(combined, 2)],
    confidence: coverageConfidence(combined),
    followUps: ['Break down by specialty', 'Strongest verbatims', "What's the most important signal?"],
  };
}

// Temporal is a GUARDRAIL in this slice: only the March 2026 period is loaded,
// so cross-time comparison is honestly declined (no faux "thirds of a month").
// We still ground the decline in the lead-tier concern for the loaded window.
function buildTemporal(scope: ChatScope): Answer {
  const records = resolveScopeRecords(scope);
  if (records.length === 0) return emptyScopeAnswer(scope);

  const { signal: lead, count } = leadSignalFor(records);
  return {
    guardrail: { badge: 'TEMPORAL', reason: 'Guardrail · needs \u22652 periods' },
    blocks: [
      p(
        `Only the March 2026 period is loaded, so I can't compare across time yet. Temporal comparison unlocks once at least two periods are ingested.`,
      ),
      p(
        `For March alone, the lead-tier concern is **${lead.category}** — ${lead.shorthand}, ${count} records.`,
      ),
    ],
    refs: [lead.shorthand],
    confidence: guardrailConfidence('single period loaded — available at \u22652 periods', [
      { label: 'Periods loaded', value: '1 (March 2026)' },
      { label: 'Records in scope', value: String(records.length) },
      { label: 'Temporal comparison', value: 'Locked — needs \u22652 periods' },
    ]),
    followUps: ['Break down by specialty', 'Strongest verbatims', 'How big is this?'],
  };
}

function buildActions(scope: ChatScope): Answer {
  const records = resolveScopeRecords(scope);
  if (records.length === 0) return emptyScopeAnswer(scope);

  const top = evidence(records, 2);
  const topTag = groupBy(records, 'tag').rows[0]?.label ?? 'the evidence gap';
  const [first, second] = top;

  const blocks: AnswerBlock[] = [
    p(`Suggested next steps for ${scopeNoun(scope)}, grounded in the cited records:`),
    li(`**Lead with the named gap.** Proactively address **${topTag}** in MSL exchange — it is the dominant theme HCPs raise${first ? ` (R${first.id})` : ''}.`),
  ];
  if (second) {
    blocks.push(
      li(`**Equip the field.** Give teams tailored materials for the specialties driving this, and pre-empt the concern before it calcifies (R${second.id}).`),
    );
  }

  return {
    blocks,
    disclaimer:
      'Beta — recommendations are AI-generated from the record sample and need MSL review before acting.',
    refs: [...scopeRefs(scope), ...recordRefs(top)],
    confidence: coverageConfidence(records),
    followUps: ['Strongest verbatims', 'Which HCPs drive it?', 'Break down by specialty'],
  };
}

function buildSynthesis(scope: ChatScope): Answer {
  const records = resolveScopeRecords(scope);
  if (records.length === 0) return emptyScopeAnswer(scope);

  const m = magnitude(records);
  const top = evidence(records, 2);
  const tagResult = groupBy(records, 'tag');
  const leadTag = tagResult.rows[0]?.label ?? 'the evidence gap';
  const proof = top[0];

  return {
    blocks: [
      p(`Here's the story for ${scopeNoun(scope)}:`),
      li(`**Scope.** ${m.records} records from ${m.hcps} HCPs across ${m.specialties} specialties.`),
      li(`**Lead theme.** \u201C${leadTag}\u201D dominates the record set${top[0] ? ` (R${top[0].id})` : ''}.`),
      li(`**Implication.** The strongest opening is closing this specific, named gap — not broad promotion.`),
    ],
    proof: proof ? { label: 'Proof', quote: proof.quote } : undefined,
    refs: [...scopeRefs(scope), ...recordRefs(top)],
    confidence: coverageConfidence(records),
    followUps: followUpsFor(scope),
  };
}

// ---------------------------------------------------------------------------
// Out-of-data guardrail
// ---------------------------------------------------------------------------

function nearestSignal(text: string) {
  const words = text.toLowerCase().match(/[a-z]{4,}/g) ?? [];
  let best = SIGNALS[0];
  let bestScore = -1;
  for (const signal of SIGNALS) {
    const hay = `${signal.category} ${signal.title} ${signal.description}`.toLowerCase();
    const score = words.reduce((sum, word) => (hay.includes(word) ? sum + 1 : sum), 0);
    if (score > bestScore) {
      bestScore = score;
      best = signal;
    }
  }
  return best;
}

function buildOutOfData(text: string): Answer {
  const near = nearestSignal(text);
  return {
    guardrail: { badge: 'OUT OF SCOPE', reason: 'Guardrail · not in this dataset' },
    blocks: [
      p(`That's not something this dataset can answer — these records only cover HCP feedback on givinostat for DMD (no pricing, competitor, or market data).`),
      li(`Closest available topic: **${near.shorthand} — ${near.category}**. I can break that down, size it, or pull its strongest verbatims.`),
    ],
    refs: [near.shorthand],
    confidence: guardrailConfidence('outside the loaded records — no matching data', [
      { label: 'Matching records', value: '0' },
      { label: 'Nearest topic', value: `${near.shorthand} — ${near.category}` },
    ]),
    followUps: [`What's ${near.shorthand} about?`, 'Break down by specialty', "What's the most important signal?"],
  };
}

function emptyScopeAnswer(scope: ChatScope): Answer {
  return {
    blocks: [
      p(`I couldn't find any materialized records for ${scopeNoun(scope)} in the queryable sample.`),
    ],
    confidence: { label: 'No data', tone: 'neutral' },
    followUps: followUpsFor(scope),
  };
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

/** Strip a trailing parenthetical qualifier from a group/entity label. */
function groupPhrase(label: string): string {
  return label.replace(/\s*\([^)]*\)\s*$/, '').trim();
}

/** After a drill-down, propose a DIFFERENT dimension to slice next. */
function nextDimension(used: Dimension): Dimension {
  return used === 'setting' ? 'specialty' : 'setting';
}

const normalizeQ = (q: string): string =>
  q.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[?.!]+$/, '');

/**
 * Conversation-reactive follow-ups: logical next steps derived from the last
 * turn's intent + resolved dimension + the answer's actual dominant entity,
 * phrased along the PM intent taxonomy. Guardrail/action intents keep the
 * builder's own follow-ups.
 */
function reactiveFollowUps(
  intent: Intent,
  dimension: Dimension | undefined,
  answer: Answer,
): string[] {
  const rows = answer.dataView?.rows ?? [];
  const dominant = rows[0]?.label ? groupPhrase(rows[0].label) : undefined;
  const isSettingGroup = (label?: string) => !!label && /community|academic/i.test(label);

  switch (intent) {
    case 'drill-down': {
      const used = dimension ?? 'specialty';
      const next = nextDimension(used);
      const list: string[] = [];
      if (dominant) list.push(`Why is ${dominant} over-represented?`);
      if (dominant) list.push(`Strongest verbatims from ${dominant}`);
      list.push(used === 'setting' ? 'Compare community vs academic' : `Break down by ${next}`);
      list.push(used === 'setting' ? `Break down by ${next}` : 'Compare community vs academic');
      return list;
    }
    case 'magnitude':
      return ['Break down by specialty', 'Strongest verbatims', 'Compare community vs academic'];
    case 'evidence':
      return ['Why are HCPs raising this?', 'Break down by specialty', 'How big is this?'];
    case 'compare': {
      // rows[0] = side A, rows[1] = side B; the larger side is the higher count.
      const bigger =
        rows.length >= 2 && Number(rows[1].value) > Number(rows[0].value)
          ? groupPhrase(rows[1].label)
          : dominant;
      const list: string[] = [];
      if (bigger) list.push(`Why does ${bigger} carry more?`);
      list.push(isSettingGroup(bigger) ? `Strongest verbatims from ${bigger}` : 'Strongest verbatims');
      list.push('Break down by specialty');
      return list;
    }
    case 'synthesis':
      return ['Break down by specialty', 'Strongest verbatims', 'How big is this?'];
    case 'actions':
    case 'temporal':
    case 'out-of-data':
    default:
      return answer.followUps;
  }
}

/** De-dupe candidates against prior questions (and each other); top up from the
 *  scope defaults so the rail always offers a few options. Cap at 4. */
function finalizeFollowUps(
  candidates: string[],
  scope: ChatScope,
  priorQuestions: string[],
): string[] {
  const seen = new Set(priorQuestions.map(normalizeQ));
  const out: string[] = [];
  const push = (item: string) => {
    const key = normalizeQ(item);
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push(item);
  };
  candidates.forEach(push);
  if (out.length < 3) defaultSuggestions(scope).forEach(push);
  return out.slice(0, 4);
}

/** Map a resolved dimension to the chart proof pattern that visualizes it. */
function dimensionToPattern(dimension: Dimension | undefined): ProofPatternType | undefined {
  switch (dimension) {
    case 'specialty':
      return 'A1';
    case 'setting':
      return 'A2';
    case 'tag':
      return 'A3';
    case 'hcp':
      return 'A4';
    case 'kit':
      return 'A5';
    default:
      return undefined;
  }
}

/**
 * Pick the chart proof to attach to an answer, based on the question's intent
 * and dimension. Drill-downs visualize the sliced dimension; magnitude ("how
 * big / who drives it") shows HCP concentration (A4); a synthesis shows the
 * scope's best proof via the same deterministic selector used on the pages.
 * Only attached when the scope actually has records to chart.
 */
function proofChartFor(
  intent: Intent,
  dimension: Dimension | undefined,
  scope: ChatScope,
): AnswerProofChart | undefined {
  if (resolveScopeRecords(scope).length === 0) return undefined;
  let type: ProofPatternType | undefined;
  if (intent === 'drill-down') type = dimensionToPattern(dimension);
  else if (intent === 'magnitude') type = 'A4';
  else if (intent === 'synthesis') type = selectProofPattern(scope);
  // Guard: A2 compares a scope to the whole-report baseline, which is
  // meaningless for the whole report itself — the DataView table already
  // carries the setting split there, so just skip the chart.
  if (type === 'A2' && scope.kind === 'whole') return undefined;
  return type ? { type, scope } : undefined;
}

export function buildAnswer(
  userText: string,
  scope: ChatScope,
  priorQuestions: string[] = [],
): Answer {
  const { intent, dimension } = detectIntent(userText);
  let answer: Answer;
  switch (intent) {
    case 'drill-down':
      answer = buildDrillDown(scope, dimension ?? 'specialty');
      break;
    case 'magnitude':
      answer = buildMagnitude(scope);
      break;
    case 'evidence':
      answer = buildEvidence(scope, userText);
      break;
    case 'compare':
      answer = buildCompare(scope, userText);
      break;
    case 'temporal':
      answer = buildTemporal(scope);
      break;
    case 'actions':
      answer = buildActions(scope);
      break;
    case 'out-of-data':
      answer = buildOutOfData(userText);
      break;
    case 'synthesis':
    default:
      answer = buildSynthesis(scope);
      break;
  }

  // Attach a chart proof where it fits the intent (drill-down / magnitude /
  // synthesis), computed from the same real records the text rests on.
  const proofChart = proofChartFor(intent, dimension, scope);
  if (proofChart) answer = { ...answer, proofChart };

  // Guardrail / action intents keep their own curated follow-ups; everything
  // else gets conversation-reactive next steps, de-duped against the thread.
  if (intent !== 'actions' && intent !== 'temporal' && intent !== 'out-of-data') {
    answer = {
      ...answer,
      followUps: finalizeFollowUps(reactiveFollowUps(intent, dimension, answer), scope, [
        ...priorQuestions,
        userText,
      ]),
    };
  }
  return answer;
}

// ---------------------------------------------------------------------------
// LLM (BYOK) normalization — unchanged shape, tolerant of missing fields.
// ---------------------------------------------------------------------------

/** Loose shape returned by an LLM, before it's normalized into an `Answer`. */
export interface RawAnswer {
  blocks?: { type?: string; text?: string }[];
  dataView?: {
    filter?: string;
    columns?: string[];
    rows?: { label?: string; value?: string; share?: number }[];
    source?: string;
  } | null;
  proof?: { label?: string; quote?: string } | null;
  refs?: string[] | null;
  confidence?: { label?: string; tone?: string } | null;
  followUps?: string[] | null;
}

const CONFIDENCE_TONES: ConfidenceTone[] = ['success', 'warning', 'error', 'info', 'neutral'];

function clampShare(value: unknown): number {
  const num = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(num)) return 0;
  return Math.max(0, Math.min(100, Math.round(num)));
}

/** Normalize a (possibly messy) LLM JSON payload into a render-ready `Answer`. */
export function answerFromRaw(raw: RawAnswer, scope: ChatScope): Answer {
  const blocks: AnswerBlock[] = (raw.blocks ?? [])
    .filter((block) => typeof block?.text === 'string' && block.text.trim().length > 0)
    .map((block) => (block.type === 'li' ? li(block.text as string) : p(block.text as string)));

  let dataView: DataView | undefined;
  if (raw.dataView && Array.isArray(raw.dataView.rows) && raw.dataView.rows.length > 0) {
    const cols = raw.dataView.columns ?? [];
    dataView = {
      filter: raw.dataView.filter ?? '',
      columns: [cols[0] ?? 'Category', cols[1] ?? 'Value', cols[2] ?? 'Share'],
      rows: raw.dataView.rows
        .filter((row) => typeof row?.label === 'string')
        .map((row) => ({
          label: row.label as string,
          value: String(row.value ?? ''),
          share: clampShare(row.share),
        })),
      source: raw.dataView.source ?? 'From this report',
    };
  }

  const proof =
    raw.proof && typeof raw.proof.quote === 'string' && raw.proof.quote.trim().length > 0
      ? { label: raw.proof.label ?? 'Proof', quote: raw.proof.quote }
      : undefined;

  const refs = Array.isArray(raw.refs)
    ? raw.refs.filter((ref): ref is string => typeof ref === 'string' && ref.trim().length > 0)
    : undefined;

  let confidence: Confidence | undefined;
  if (raw.confidence && typeof raw.confidence.label === 'string' && raw.confidence.label.trim().length > 0) {
    const tone = CONFIDENCE_TONES.includes(raw.confidence.tone as ConfidenceTone)
      ? (raw.confidence.tone as ConfidenceTone)
      : 'neutral';
    confidence = { label: raw.confidence.label.trim(), tone };
  }

  const followUps = Array.isArray(raw.followUps)
    ? raw.followUps.filter((f): f is string => typeof f === 'string' && f.trim().length > 0)
    : [];

  return {
    blocks: blocks.length > 0 ? blocks : [p('I could not generate a response for that. Try rephrasing.')],
    dataView,
    proof,
    refs: refs && refs.length > 0 ? refs : undefined,
    confidence,
    followUps: followUps.length > 0 ? followUps.slice(0, 4) : defaultSuggestions(scope),
  };
}

/** A concise topic phrase for a signal, drawn from its real category badge. */
function signalTopic(signal: { category: string }): string {
  // Drop any trailing parenthetical qualifier so it reads cleanly mid-sentence.
  return signal.category.replace(/\s*\([^)]*\)\s*$/, '').trim();
}

/**
 * Scope-aware, data-grounded starter questions phrased along the PM intent
 * taxonomy (drill-down / evidence / magnitude / synthesis / compare). Whole
 * report → cross-cutting; trend/signal → about that specific trend/signal,
 * using its real title/category/signals. De-duplicated, capped at 4.
 */
export function defaultSuggestions(scope: ChatScope): string[] {
  if (scope.kind === 'signal') {
    const signal =
      SIGNALS.find((s) => s.shorthand === scope.shorthand) ??
      NOTABLE_SIGNALS.find((s) => s.shorthand === scope.shorthand);
    if (signal) {
      const topic = signalTopic(signal);
      return dedupe([
        `Break ${scope.label} down by specialty`,
        `Strongest verbatims on ${topic}`,
        `How big and broad is ${scope.label}?`,
        `Why are HCPs raising ${topic}?`,
      ]);
    }
    return ['Which HCPs drive it?', 'Strongest verbatims', 'How big is this signal?'];
  }

  if (scope.kind === 'trend') {
    const trend = TRENDS.find((t) => t.label === scope.label);
    if (trend) {
      const compare =
        trend.signals.length >= 2
          ? `Compare ${trend.signals[0].shorthand} vs ${trend.signals[1].shorthand}`
          : `What's the most important signal in ${trend.label}?`;
      return dedupe([
        `Break ${trend.label} down by setting`,
        `How broad is ${trend.label}?`,
        `Why is ${trend.label} emerging?`,
        compare,
      ]);
    }
  }

  // Whole report — cross-cutting questions over the full report.
  return dedupe([
    'Compare Trend 1 vs Trend 2',
    'Break the report down by specialty',
    'Which is the biggest signal?',
    'Why do non-ambulatory data gaps keep surfacing?',
  ]);
}

function dedupe(items: string[]): string[] {
  return items.filter((item, index, all) => all.indexOf(item) === index);
}
