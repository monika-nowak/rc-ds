import { useState } from 'react';
import {
  BarChart,
  type BarChartGroupDatum,
  type BarChartSeries,
} from '../src/components/BarChart';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';
import { settingSplitByTag } from './analytics';
import { formatThemeLabel } from './data';
import {
  PROOF_BAR_WIDTH,
  PROOF_CATEGORY_LABEL_SIZE,
  proofChartHeight,
} from './proofChartGeometry';
import styles from './ProjectProof.module.css';

/**
 * Project-level proof: a stacked horizontal bar chart answering
 * "what did HCPs actually talk about most this period?" — one bar per INSIGHT
 * TAG, each split into Academic/KOL vs Community. Tags are multi-valued, so a
 * record contributes to every tag it carries and bar totals can sum to more
 * than the record count (expected). Every count is tallied straight from the
 * real RECORDS sample via `settingSplitByTag` (no estimates), then handed to
 * the DS `BarChart` component for rendering.
 */

// Categorical setting colors.
const ACADEMIC_COLOR = 'var(--rc-chart-2)';
const COMMUNITY_COLOR = 'var(--rc-background-accent-info)';

const SERIES: BarChartSeries[] = [
  { id: 'academic', label: 'Academic/KOL', color: ACADEMIC_COLOR, labelColor: 'var(--rc-text-on-color)' },
  { id: 'community', label: 'Community', color: COMMUNITY_COLOR, labelColor: 'var(--rc-text-primary)' },
];

// Default number of tag rows shown before the list is expanded.
const DEFAULT_ROWS = 8;

export function ProjectProof() {
  const rows = settingSplitByTag().filter((row) => row.total > 0);
  const [expanded, setExpanded] = useState(false);

  const visibleRows = expanded ? rows : rows.slice(0, DEFAULT_ROWS);
  const canExpand = rows.length > DEFAULT_ROWS;

  const data: BarChartGroupDatum[] = visibleRows.map((row) => ({
    label: row.label,
    values: { academic: row.academic, community: row.community },
  }));

  // Shared proof-chart geometry so this matches every other proof chart 1:1.
  const chartHeight = proofChartHeight(visibleRows.length);

  return (
    <>
      {/* Static DS Card frame — flat (no elevation) since it is non-clickable.
          From the top: chart heading → chart → legend. */}
      <Card layout="stacked" density="roomy" elevated={false}>
        <p className={`rc-label-lg ${styles.cardHeading}`}>
          Records by insight tag, academic vs community
        </p>
        <BarChart
          data={data}
          series={SERIES}
          orientation="horizontal"
          stacked
          barRadius={0}
          maxBarWidth={PROOF_BAR_WIDTH}
          categoryLabelSize={PROOF_CATEGORY_LABEL_SIZE}
          formatCategoryLabel={formatThemeLabel}
          enableTooltip={false}
          showValues
          showTotals
          showLegend={false}
          showAxis={false}
          showGrid={false}
          height={chartHeight}
          ariaLabel="Records by insight tag, split into Academic/KOL and Community"
        />
        {/* Our single legend (square swatches). The DS BarChart built-in legend
            is disabled above so each series shows exactly one marker. */}
        <ul className={styles.legend}>
          {SERIES.map((s) => (
            <li key={s.id} className={styles.legendItem}>
              <span className={styles.swatch} style={{ background: s.color }} aria-hidden />
              <span className="rc-body-xs">{s.label}</span>
            </li>
          ))}
        </ul>
        {canExpand ? (
          <div className={styles.showMore}>
            <Button variant="secondary" size="sm" onClick={() => setExpanded((v) => !v)}>
              {expanded ? 'Show fewer' : `Show all ${rows.length} tags`}
            </Button>
          </div>
        ) : null}
      </Card>
    </>
  );
}
