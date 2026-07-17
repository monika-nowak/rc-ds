/**
 * ONE shared geometry rule for every proof chart in the app — the dashboard
 * `ProjectProof` and every `ProofChart` variant (A1/A3/A4/A5, framed or
 * embedded, stacked or single-series). Centralizing these values guarantees
 * identical bar thickness, identical gaps between bars, and identical vertical
 * footprint everywhere, instead of each call site inventing its own numbers.
 */

/** Bar thickness cap, in px. Bars never grow wider than this. */
export const PROOF_BAR_WIDTH = 16;

/** Category (row) tick-label font size, in px. */
export const PROOF_CATEGORY_LABEL_SIZE = 14;

/**
 * Center-to-center distance between adjacent bars, in px. With PROOF_BAR_WIDTH
 * (16) this leaves a constant ~14px gap between bar edges.
 */
export const PROOF_ROW_STEP = 30;

/**
 * Total vertical space the BarChart reserves for its top + bottom margins on a
 * horizontal chart with no value axis (BarChart's `resolveMargin` returns
 * top: 8, bottom: 8). Kept here so the height math below stays in sync.
 */
const CHART_VERTICAL_MARGIN = 16;

/**
 * BarChart's scaleBand uses paddingInner === paddingOuter === 0.3, so the real
 * per-row step is `innerHeight / (n + 0.3)`. We invert that so the step stays
 * pinned to PROOF_ROW_STEP regardless of how many rows a chart has — that is
 * what makes two charts with different row counts read as the same "density".
 */
const BAND_PADDING = 0.3;

/** Pixel height for a horizontal proof chart with `rowCount` bars. */
export function proofChartHeight(rowCount: number): number {
  const n = Math.max(1, rowCount);
  return Math.round(PROOF_ROW_STEP * (n + BAND_PADDING)) + CHART_VERTICAL_MARGIN;
}
