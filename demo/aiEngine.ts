import type { ChatScope } from './Dashboard';

export interface Token {
  text: string;
  bold?: boolean;
}

export type AnswerBlock =
  | { type: 'p'; tokens: Token[] }
  | { type: 'li'; tokens: Token[] };

export interface RecordItem {
  id: string;
  verbatim: string;
  date: string;
}

export interface DataRow {
  label: string;
  value: string;
  /** Share of the total, 0–100, drives the bar width. */
  share: number;
}

export interface DataView {
  /** Filter chip label, e.g. "By HCP specialty". */
  filter: string;
  /** Three column headers: [category, value, share]. */
  columns: [string, string, string];
  rows: DataRow[];
  /** Provenance line shown in the footer, e.g. "From your records". */
  source: string;
}

export interface Answer {
  blocks: AnswerBlock[];
  dataView?: DataView;
  proof?: { label: string; quote: string };
  refs?: string[];
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

type Intent =
  | 'specialty'
  | 'hcps'
  | 'why'
  | 'verbatims'
  | 'compare'
  | 'summary'
  | 'generic';

function detectIntent(text: string): Intent {
  const q = text.toLowerCase();
  if (/(special|specialty|breakdown|break down|by segment)/.test(q)) return 'specialty';
  if (/(hcp|physician|prescriber|doctor|who drives|which hcps)/.test(q)) return 'hcps';
  if (/(why|driver|cause|reason|happening)/.test(q)) return 'why';
  if (/(verbatim|quote|said|voice|what are they saying|strongest)/.test(q)) return 'verbatims';
  if (/(compare|vs\.?|versus|difference|trend 1.*trend 2)/.test(q)) return 'compare';
  if (/(summary|overview|tl;?dr|what.?s the story|key takeaway|most important)/.test(q))
    return 'summary';
  return 'generic';
}

function scopeNoun(scope: ChatScope): string {
  if (scope.kind === 'signal') return scope.label;
  if (scope.kind === 'trend') return scope.label;
  return 'this report';
}

function buildIntentAnswer(intent: Intent, scope: ChatScope): Answer {
  const noun = scopeNoun(scope);

  switch (intent) {
    case 'specialty':
      return {
        blocks: [p(`Here's how the cited records for ${noun} break down across HCP specialties:`)],
        dataView: {
          filter: 'By HCP specialty',
          columns: ['Specialty', 'Records', 'Share'],
          rows: [
            { label: 'Neuromuscular Medicine (Neurology)', value: '11', share: 38 },
            { label: 'Child Neurology', value: '7', share: 24 },
            { label: 'Physical Therapy', value: '3', share: 10 },
            { label: 'Nurse Practitioner', value: '2', share: 7 },
            { label: 'Other specialties', value: '6', share: 21 },
          ],
          source: 'From cited records',
        },
        followUps: ['Why does the top group dominate?', 'Strongest verbatims', 'Compare Trend 1 vs. Trend 2'],
      };

    case 'hcps':
      return {
        blocks: [
          p(`The 39 contributing HCPs cluster into a few neuromuscular specialties and skew community-based:`),
          li('**Neuromuscular Medicine & Child Neurology lead.** Together they account for most cited records.'),
          li('**Community-based settings dominate.** Roughly three in four records come from community clinics, not academic centers.'),
          li('**Academic voices are fewer but sharper.** They flag the higher-risk subgroup gaps (post-transplant, complex cardiac).'),
        ],
        dataView: {
          filter: 'By institution type',
          columns: ['Institution type', 'Records', 'Share'],
          rows: [
            { label: 'Community-based', value: '22', share: 76 },
            { label: 'Academic', value: '7', share: 24 },
          ],
          source: 'From cited records',
        },
        refs: ['R71', 'R72', 'R80'],
        followUps: ['Why is this happening?', 'Strongest verbatims', 'Break down by specialty'],
      };

    case 'why':
      return {
        blocks: [
          p(`The dominant driver across ${noun} is a subpopulation-specific evidence gap:`),
          li('**Non-ambulatory data gap.** HCPs lack PUL and long-term cardiac/pulmonary data to prescribe confidently (R21, R71).'),
          li("**Outcome measures fall short.** One-year windows and averaged data don't meet clinical decision standards (R59, R79)."),
          li('**Tolerability & monitoring friction.** GI events and lab-monitoring burden deter starts before MSL engagement (R62, R77).'),
        ],
        proof: {
          label: 'Proof',
          quote:
            '"We know that it works in the ambulatory population, but we don\'t have the efficacy data to support the non-ambulatory population."',
        },
        refs: ['R21', 'R71', 'R62'],
        followUps: ['Which HCPs drive it?', 'Strongest verbatims', "What's the most important signal?"],
      };

    case 'verbatims':
      return {
        blocks: [
          p(`The strongest verbatims in ${noun}, ranked by signal strength:`),
          li('**On the evidence gap.** "We know that it works in the ambulatory population, but we don\'t have the efficacy data to support the non-ambulatory population." (R21)'),
          li('**On tolerability.** "Over 90% of our patients needed multiple dose adjustments... Any time someone brings up starting it, I cringe." (R62)'),
          li('**On awareness.** "Gene therapy and exon-skipping technologies have sucked all the air out of the room." (R3)'),
        ],
        refs: ['R21', 'R62', 'R3'],
        followUps: ['Why is this happening?', 'Which HCPs drive it?', 'Break down by specialty'],
      };

    case 'compare':
      return {
        blocks: [
          p('Comparing Trend 1 and Trend 2, both center on evidence — but the leverage differs:'),
          li('**Trend 1 — non-ambulatory evidence gap.** A cluster trend (2 signals, score 1.55). Best lever: proactive OLE/PROVIDUS data delivery.'),
          li('**Trend 2 — evidence-structure gap.** A solo-signal trend (1 signal, score 0.86). Best lever: longitudinal, patient-level data by genotype.'),
          li('**Net.** Trend 1 is about missing subpopulation data; Trend 2 is about the methodology of the evidence itself.'),
        ],
        dataView: {
          filter: 'Trend 1 vs. Trend 2',
          columns: ['Trend', 'Signals', 'Share'],
          rows: [
            { label: 'Trend 1 — non-ambulatory gap', value: '2', share: 67 },
            { label: 'Trend 2 — evidence structure', value: '1', share: 33 },
          ],
          source: 'From this report',
        },
        refs: ['T1', 'T2'],
        followUps: ['Break Trend 1 down by specialty', 'Strongest verbatims', "What's the most important signal?"],
      };

    case 'summary':
      return {
        blocks: [
          p('The most important signal is the non-ambulatory evidence gap (S1, score 0.92):'),
          li("**Active demand.** Non-ambulatory patients are requesting givinostat, but HCPs can't act without PUL and long-term cardiac data."),
          li('**Named barrier.** Multiple HCPs call it "the missing link" for their clinics (R71, R87).'),
          li('**The opening.** Proactive delivery of OLE/PROVIDUS data — paired with payer-access support — could unlock this population.'),
        ],
        proof: {
          label: 'Proof',
          quote:
            '"Without data in these higher-risk groups, the true benefit-risk profile remains unclear."',
        },
        refs: ['S1', 'R21', 'R71'],
        followUps: ['Which HCPs drive it?', 'Break down by specialty', 'Compare Trend 1 vs. Trend 2'],
      };

    default:
      return {
        blocks: [
          p(`Here's what the data shows for ${noun}:`),
          li('**Scope.** 114 records from 39 HCPs across 13 specialties and 5 KITs.'),
          li('**Lead signal.** Non-ambulatory patients lack PUL and long-term efficacy data to prescribe confidently (S1).'),
          li('**Implication.** The strongest opening is closing subpopulation-specific evidence gaps, not broad promotion.'),
        ],
        proof: {
          label: 'Proof',
          quote:
            '"PUL and cardiac data would be the missing link for their clinic to help drive clinical conviction across neuromuscular specialists."',
        },
        refs: ['S1', 'R87'],
        followUps: ['Why is this happening?', 'Which HCPs drive it?', 'Strongest verbatims'],
      };
  }
}

export function buildAnswer(userText: string, scope: ChatScope): Answer {
  return buildIntentAnswer(detectIntent(userText), scope);
}

interface VerbatimItem {
  text: string;
  /** Lowercase keywords used to match a drill-down row to relevant quotes. */
  topics: string[];
}

const VERBATIM_POOL: VerbatimItem[] = [
  {
    text: 'We know it works in the ambulatory population, but we lack efficacy data for the non-ambulatory population',
    topics: ['non-ambulatory', 'evidence', 'pul', 'cardiac', 'trend 1'],
  },
  {
    text: 'PUL and long-term cardiac data would be the missing link for our clinic',
    topics: ['non-ambulatory', 'evidence', 'pul', 'cardiac', 'trend 1'],
  },
  {
    text: 'One year of PUL data is not long enough — I need at least three',
    topics: ['evidence', 'outcome', 'pul', 'trend 2'],
  },
  {
    text: 'Averaged group data does not help me — I need patient-level results by genotype',
    topics: ['evidence', 'outcome', 'trend 2'],
  },
  {
    text: 'If you mention GI stuff, patients turn their heads the other way',
    topics: ['gi', 'tolerability', 'trend 3'],
  },
  {
    text: 'Over 90% of our patients needed multiple dose adjustments',
    topics: ['gi', 'dosing', 'tolerability', 'trend 3'],
  },
  {
    text: 'Lab monitoring is an enormous lift; families don\u2019t send labs or return calls',
    topics: ['monitoring', 'burden'],
  },
  {
    text: 'Non-steroidal components are crucial — givinostat is a foundational building block',
    topics: ['combination', 'building block', 'education'],
  },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function formatSampleDate(dayOffset: number): string {
  const base = new Date(2026, 2, 3);
  const date = new Date(base.getTime() + dayOffset * 86400000);
  return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

/** Deterministic mock records for a drill-down row (prototype data). */
export function sampleRecords(seed: string, shown = 4): RecordItem[] {
  const hash = hashString(seed);
  const baseId = 980796000 + (hash % 900);
  const lower = seed.toLowerCase();
  const relevant = VERBATIM_POOL.filter((v) => v.topics.some((topic) => lower.includes(topic)));
  // Prefer topic-matched quotes; fall back to the full pool so every row has records.
  const pool = (relevant.length > 0 ? relevant : VERBATIM_POOL).map((v) => v.text);
  const count = Math.min(shown, pool.length);
  return Array.from({ length: count }, (_, index) => ({
    id: String(baseId + index * 7 + (hash % 13)),
    verbatim: pool[index],
    date: formatSampleDate(index),
  }));
}

export function defaultSuggestions(scope: ChatScope): string[] {
  if (scope.kind === 'signal') {
    return ['Which HCPs drive it?', 'Why is this happening?', 'Strongest verbatims'];
  }
  return ['Compare Trend 1 vs. Trend 2', 'Break down by specialty', "What's the most important signal?"];
}
