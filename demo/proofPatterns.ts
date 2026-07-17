import type { ChatScope } from './Dashboard';
import { groupBy, magnitude, resolveScopeRecords, settingVsBaseline } from './analytics';

/**
 * The five "chart proof patterns" (A1–A5). Each is a visual proof for an
 * insight, always computed from raw records — never invented.
 *   A1 — Specialty distribution (stacked Academic/Community)
 *   A2 — Care-setting mix vs. whole-report baseline (over/under-representation)
 *   A3 — Theme (tag) breakdown (multi-valued; shares can exceed 100%)
 *   A4 — HCP concentration (how much rests on the loudest voice)
 *   A5 — KIT breakdown for a narrower scope (stacked Academic/Community)
 */
export type ProofPatternType = 'A1' | 'A2' | 'A3' | 'A4' | 'A5';

export interface ProofPatternMeta {
  type: ProofPatternType;
  /** Section heading used above the chart. */
  title: string;
  /** One-line "what this proves" caption. */
  caption: string;
}

export const PROOF_PATTERN_META: Record<ProofPatternType, ProofPatternMeta> = {
  A1: {
    type: 'A1',
    title: 'Where the evidence sits, by specialty',
    caption: 'Records per specialty, split Academic/KOL vs Community',
  },
  A2: {
    type: 'A2',
    title: 'Care-setting mix vs. the report baseline',
    caption: 'Academic vs Community share compared to the whole-report baseline',
  },
  A3: {
    type: 'A3',
    title: 'Which themes carry the signal',
    caption: 'Records per theme (records can carry more than one theme)',
  },
  A4: {
    type: 'A4',
    title: 'How concentrated the HCP voices are',
    caption: 'Records per HCP — is this one loud voice or many?',
  },
  A5: {
    type: 'A5',
    title: 'What HCPs focused on, by topic (KIT)',
    caption: 'Records per KIT, split Academic/KOL vs Community',
  },
};

// ---------------------------------------------------------------------------
// Selector thresholds ("Shown When" rule) — documented + deterministic.
// ---------------------------------------------------------------------------

/**
 * A2 fires when the scope's care-setting mix is clearly skewed from the
 * whole-report baseline (academic .32). |academic share − baseline| ≥ 0.20 is
 * a ~6-of-9-records swing — a genuinely striking over/under-representation.
 */
const SETTING_SKEW_MIN = 0.2;
/**
 * A4 fires when a single HCP carries a third or more of a non-trivial record
 * set — enough voices present that "concentrated vs distributed" is a real,
 * chartable story rather than a small-N artifact.
 */
const HCP_CONCENTRATION_MIN = 1 / 3;
const HCP_CONCENTRATION_MIN_RECORDS = 6;
/**
 * A3 fires when a non-trivial record set spans a rich set of themes — a tag
 * breakdown is only informative once several distinct themes are present.
 */
const TAG_RICHNESS_MIN_TAGS = 5;
const TAG_RICHNESS_MIN_RECORDS = 4;

/**
 * Deterministic "AI picks the pattern" rule for SIGNAL and TREND proof. Picks
 * the single BEST chart proof for a scope from its real backing records, in
 * strict priority order:
 *
 *   1. A2 — care setting skewed ≥0.20     → show it vs the report baseline
 *   2. A4 — one HCP ≥⅓ of ≥6 records      → show HCP concentration
 *   3. A3 — ≥5 themes over ≥4 records      → show the theme breakdown
 *   4. A1 — otherwise (fallback)          → show the specialty distribution
 *
 * A5 (KIT breakdown) is intentionally NOT selectable here: it duplicates the
 * project-level "Where the conversation concentrated" section (same KIT ×
 * Academic/Community view) and collapses to a single bar for a single-signal
 * scope. KIT breakdown lives only at project level. A1 is the always-available
 * default so every scope resolves to exactly one pattern.
 */
export function selectProofPattern(scope: ChatScope): ProofPatternType {
  const records = resolveScopeRecords(scope);
  if (records.length === 0) return 'A1';

  // 1. Care-setting strongly over/under-represented vs baseline. Guard: A2
  // compares a scope AGAINST the whole-report baseline, so it is meaningless
  // for the whole report itself (report vs itself) — never pick it there.
  const academic = settingVsBaseline(records).find((row) => row.setting === 'academic');
  if (scope.kind !== 'whole' && academic && Math.abs(academic.delta) >= SETTING_SKEW_MIN) return 'A2';

  // 2. A single HCP carries a large share of a non-trivial set.
  const m = magnitude(records);
  if (records.length >= HCP_CONCENTRATION_MIN_RECORDS && m.topHcpShare >= HCP_CONCENTRATION_MIN) {
    return 'A4';
  }

  // 3. A rich spread of themes across enough records.
  const tags = groupBy(records, 'tag').rows.length;
  if (records.length >= TAG_RICHNESS_MIN_RECORDS && tags >= TAG_RICHNESS_MIN_TAGS) return 'A3';

  // 4. Default: specialty distribution.
  return 'A1';
}
