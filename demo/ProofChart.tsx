import { ChartBarHorizontal } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import {
  BarChart,
  type BarChartData,
  type BarChartDatum,
  type BarChartGroupDatum,
  type BarChartOrientation,
  type BarChartSeries,
} from '../src/components/BarChart';
import { Card } from '../src/components/Card';
import { Icon } from '../src/icons';
import type { ChatScope } from './Dashboard';
import {
  groupBy,
  kitSettingBreakdown,
  magnitude,
  resolveScopeRecords,
  settingSplitByDimension,
  settingVsBaseline,
} from './analytics';
import { formatThemeLabel } from './data';
import { PROOF_PATTERN_META, type ProofPatternType } from './proofPatterns';
import {
  PROOF_BAR_WIDTH,
  PROOF_CATEGORY_LABEL_SIZE,
  proofChartHeight,
} from './proofChartGeometry';
import styles from './ProofChart.module.css';

/**
 * ONE reusable proof-chart renderer for the whole A1–A5 family. It takes a
 * pattern `type` + a `scope`, resolves the scope's real backing records, and
 * computes every value through `analytics.ts` (no invented numbers). Rendering
 * is delegated to the DS `BarChart` (except A2, which is a compact custom
 * stacked bar with a baseline marker), following the `ProjectProof` convention:
 * a static, flat DS `Card` frame, on-bar labels, tooltip disabled, and a short
 * computed interpretation note beneath the chart.
 *
 * Colors: categorical charts deliberately avoid blue and orange — those hues
 * carry meaning on the "Signal Strength" scale (blue = weak → orange = strong).
 * We render our OWN square-swatch legend and disable the DS BarChart built-in
 * legend so each series shows exactly one marker.
 */

const ACADEMIC_COLOR = 'var(--rc-chart-2)';
const COMMUNITY_COLOR = 'var(--rc-background-accent-info)';
/** Match the light-purple bars used in the dashboard theme breakdowns. */
const THEME_BAR_COLOR = 'var(--rc-background-accent-light-purple-strong)';
/** Exact in-card caption for the Figma theme-bar proof treatment. */
export const THEME_BAR_SUBTITLE = 'Records per theme';

/** Academic/Community series, shared by the stacked patterns (A1, A5). */
const SETTING_SERIES: BarChartSeries[] = [
  { id: 'academic', label: 'Academic/KOL', color: ACADEMIC_COLOR, labelColor: 'var(--rc-text-on-color)' },
  { id: 'community', label: 'Community', color: COMMUNITY_COLOR, labelColor: 'var(--rc-text-primary)' },
];

/** Legend entries for the stacked setting series. */
const SETTING_LEGEND: LegendItem[] = [
  { label: 'Academic/KOL', color: ACADEMIC_COLOR },
  { label: 'Community', color: COMMUNITY_COLOR },
];

interface LegendItem {
  label: string;
  color: string;
}

interface ChartConfig {
  data: BarChartData;
  series?: BarChartSeries[];
  /** Our own legend entries (DS built-in legend is always disabled). */
  legend?: LegendItem[];
  orientation: BarChartOrientation;
  stacked: boolean;
  showTotals: boolean;
  /** Force category tick labels even without a full axis (single-series charts). */
  showCategoryAxis?: boolean;
  height: number;
  note: string;
  ariaLabel: string;
  formatValue?: (value: number) => string;
}

function pct(fraction: number): number {
  return Math.round(fraction * 100);
}

const MAX_ROWS = 8;

/** Note for a ranked single-series chart, appending a "+N more" when truncated. */
function rankNote(base: string, shown: number, total: number, noun: string): string {
  if (total > shown) return `${base} Showing the top ${shown} of ${total} ${noun}.`;
  return base;
}

/** Chart config for the BarChart-backed patterns (A1, A3, A4, A5). */
function buildConfig(type: ProofPatternType, scope: ChatScope): ChartConfig {
  const records = resolveScopeRecords(scope);
  const total = records.length;

  switch (type) {
    case 'A1': {
      const rows = settingSplitByDimension(records, 'specialty').slice(0, MAX_ROWS);
      const result = groupBy(records, 'specialty');
      return {
        data: rows.map((row) => ({
          label: row.label,
          values: { academic: row.academic, community: row.community },
        })),
        series: SETTING_SERIES,
        legend: SETTING_LEGEND,
        orientation: 'horizontal',
        stacked: true,
        showTotals: true,
        height: proofChartHeight(rows.length),
        note: result.note,
        ariaLabel: 'Records per specialty, split Academic/KOL vs Community',
      };
    }

    case 'A3': {
      const result = groupBy(records, 'tag');
      const rows = result.rows.slice(0, MAX_ROWS);
      const base = `${result.note} Records can carry more than one theme, so shares sum to more than 100%.`;
      return {
        data: rows.map((row) => ({
          label: row.label,
          value: row.count,
        })),
        orientation: 'horizontal',
        stacked: false,
        showTotals: false,
        showCategoryAxis: true,
        height: proofChartHeight(rows.length),
        note: rankNote(base, rows.length, result.rows.length, 'themes'),
        ariaLabel: 'Records per theme',
      };
    }

    case 'A4': {
      const result = groupBy(records, 'hcp');
      const rows = result.rows.slice(0, MAX_ROWS);
      const m = magnitude(records);
      const base =
        m.topHcp && total > 0
          ? `${m.topHcp} accounts for ${pct(m.topHcpShare)}% of the ${total} records, across ${
              result.rows.length
            } HCP${result.rows.length === 1 ? '' : 's'} in scope.`
          : result.note;
      return {
        data: rows.map((row) => ({ label: row.label, value: row.count })),
        orientation: 'horizontal',
        stacked: false,
        showTotals: false,
        showCategoryAxis: true,
        height: proofChartHeight(rows.length),
        note: rankNote(base, rows.length, result.rows.length, 'HCPs'),
        ariaLabel: 'Records per HCP',
      };
    }

    case 'A5':
    default: {
      const rows = kitSettingBreakdown(records).filter((row) => row.total > 0);
      const top = rows[0];
      const note = top
        ? `${top.kit} leads with ${top.total} of ${total} records (${pct(
            total > 0 ? top.total / total : 0,
          )}%).`
        : 'No records in scope.';
      return {
        data: rows.map((row) => ({
          label: row.kit,
          values: { academic: row.academic, community: row.community },
        })),
        series: SETTING_SERIES,
        legend: SETTING_LEGEND,
        orientation: 'horizontal',
        stacked: true,
        showTotals: true,
        height: proofChartHeight(rows.length),
        note,
        ariaLabel: 'Records per KIT, split Academic/KOL vs Community',
      };
    }
  }
}

/** A2 data: one 100%-stacked Academic/Community bar + a whole-report baseline marker. */
interface A2Data {
  academicPct: number;
  communityPct: number;
  /** Academic baseline position (0–100) — the Academic/Community boundary at baseline. */
  baselinePct: number;
  legend: LegendItem[];
  note: string;
  ariaLabel: string;
}

function buildA2(scope: ChatScope): A2Data {
  const records = resolveScopeRecords(scope);
  const rows = settingVsBaseline(records);
  const academic = rows.find((row) => row.setting === 'academic')!;
  const community = rows.find((row) => row.setting === 'community')!;
  const academicPct = pct(academic.share);
  const communityPct = pct(community.share);
  const baselinePct = pct(academic.baseline);
  const scopeName = scope.label;

  let note: string;
  if (records.length === 0) {
    note = 'No records in scope.';
  } else if (academicPct === 0) {
    note = `${scopeName} is entirely community-based (0% academic) vs ${baselinePct}% academic across the report.`;
  } else if (communityPct === 0) {
    note = `${scopeName} is entirely academic (0% community) vs ${baselinePct}% academic across the report.`;
  } else {
    const dir = academic.delta >= 0 ? 'over' : 'under';
    note = `Academic is ${dir}-represented in ${scopeName} (${academicPct}% vs ${baselinePct}% across the report).`;
  }

  return {
    academicPct,
    communityPct,
    baselinePct,
    legend: [
      { label: `Academic/KOL ${academicPct}%`, color: ACADEMIC_COLOR },
      { label: `Community ${communityPct}%`, color: COMMUNITY_COLOR },
    ],
    note,
    ariaLabel: `Academic ${academicPct}% vs Community ${communityPct}%, whole-report Academic baseline ${baselinePct}%`,
  };
}

/** Our single legend — square swatches (divs, not `<ul>`, so chat answer
 *  bullet styles never leak onto the markers). */
function ProofLegend({ items }: { items: LegendItem[] }) {
  return (
    <div className={styles.legend} role="list">
      {items.map((item) => (
        <div key={item.label} className={styles.legendItem} role="listitem">
          <span className={styles.swatch} style={{ background: item.color }} aria-hidden />
          <span className="rc-body-xs">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function ProofCardHeader({
  title,
  caption,
  icon,
  boxedIcon = false,
  headingId,
}: {
  title: string;
  caption: string;
  icon?: ReactNode;
  boxedIcon?: boolean;
  headingId?: string;
}) {
  return (
    <div className={styles.cardHeader}>
      <div className={styles.cardHeadingRow}>
        {icon ? (
          <span
            className={boxedIcon ? styles.cardHeaderFeaturedIcon : styles.cardHeaderIcon}
            aria-hidden
          >
            {icon}
          </span>
        ) : null}
        <h3 id={headingId} className="rc-heading-h7">
          {title}
        </h3>
      </div>
      <p className="rc-body-sm">{caption}</p>
    </div>
  );
}

interface CompactRow {
  label: string;
  total: number;
  segments: { id: string; value: number; color: string; labelColor: string }[];
}

/** Normalize BarChart data into rows the compact (label-above) renderer can draw. */
function compactRows(config: ChartConfig): CompactRow[] {
  const series = config.series ?? [
    {
      id: 'value',
      label: 'Value',
      color: THEME_BAR_COLOR,
      labelColor: 'var(--rc-text-on-color)',
    },
  ];

  return config.data.map((datum) => {
    if ('values' in datum) {
      const group = datum as BarChartGroupDatum;
      const segments = series
        .map((s) => ({
          id: s.id,
          value: group.values[s.id] ?? 0,
          color: s.color ?? THEME_BAR_COLOR,
          labelColor: s.labelColor ?? 'var(--rc-text-on-color)',
        }))
        .filter((seg) => seg.value > 0);
      const total = segments.reduce((sum, seg) => sum + seg.value, 0);
      return { label: group.label, total, segments };
    }
    const single = datum as BarChartDatum;
    return {
      label: single.label,
      total: single.value,
      segments: [
        {
          id: 'value',
          value: single.value,
          color: single.color ?? series[0]?.color ?? THEME_BAR_COLOR,
          labelColor: series[0]?.labelColor ?? 'var(--rc-text-on-color)',
        },
      ],
    };
  });
}

/**
 * In-card theme breakdown (Figma Card 2334:6729): chart-bar-horizontal header,
 * “Records per theme” subline, right-aligned 120px labels, 20px light-purple
 * bars, 14px values, info note. Used when a ProofChart is embedded in a trend Card.
 */
function ThemeBarList({
  config,
  title,
  showTitle,
  caption,
  headerIcon,
  headerIconBoxed = false,
}: {
  config: ChartConfig;
  title: string;
  showTitle: boolean;
  caption?: string;
  headerIcon?: ReactNode;
  headerIconBoxed?: boolean;
}) {
  const rows = compactRows(config).map((row) => ({
    label: formatThemeLabel(row.label),
    total: row.total,
  }));
  const maxTotal = Math.max(1, ...rows.map((row) => row.total));

  return (
    <div className={styles.themeBlock} role="img" aria-label={config.ariaLabel}>
      {showTitle ? (
        <div className={styles.themeHeader}>
          {headerIcon ? (
            <span
              className={headerIconBoxed ? styles.cardHeaderFeaturedIcon : styles.themeHeaderIcon}
              aria-hidden
            >
              {headerIcon}
            </span>
          ) : (
            <ChartBarHorizontal size={16} weight="regular" aria-hidden className={styles.themeHeaderIcon} />
          )}
          <span className={`rc-heading-h7 ${styles.themeHeaderTitle}`}>{title}</span>
        </div>
      ) : null}
      <div className={styles.themeBody}>
        <p className={`rc-label-md ${styles.themeSub}`}>{caption ?? THEME_BAR_SUBTITLE}</p>
        <div className={styles.themeRows}>
          {rows.map((row) => (
            <div key={row.label} className={styles.themeRow}>
              <span className={`rc-body-sm ${styles.themeLabel}`}>{row.label}</span>
              <div className={styles.themeBarWrap}>
                <div className={styles.themeBarTrack}>
                  <div
                    className={styles.themeBar}
                    style={{ width: `${(row.total / maxTotal) * 100}%` }}
                  />
                </div>
                <span className={`rc-label-md ${styles.themeValue}`}>{row.total}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.note}>
          <span className={styles.noteIcon}>
            <Icon name="info" size={16} tone="tertiary" />
          </span>
          <span className="rc-body-xs">{config.note}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Narrow-column chart — same row grammar as the chat Data view:
 * label | count | share bar. Typography and column rhythm match so the two
 * cards read as one family when they appear back-to-back in an answer.
 */
function CompactBarList({ config }: { config: ChartConfig }) {
  const rows = compactRows(config);
  const maxTotal = Math.max(1, ...rows.map((row) => row.total));

  return (
    <div className={styles.compactList} role="img" aria-label={config.ariaLabel}>
      {rows.map((row) => (
        <div key={row.label} className={styles.compactRow}>
          <span className={`rc-body-xs ${styles.compactLabel}`}>{row.label}</span>
          <span className={`rc-body-xs ${styles.compactTotal}`}>{row.total}</span>
          <span className={styles.compactShare}>
            <span className={styles.compactTrack}>
              <span
                className={styles.compactBar}
                style={{ width: `${(row.total / maxTotal) * 100}%` }}
              >
                {row.segments.map((seg) => (
                  <span
                    key={seg.id}
                    className={styles.compactSeg}
                    style={{ flexGrow: seg.value, background: seg.color }}
                  />
                ))}
              </span>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

/** The compact A2 bar: a single full-width stacked row + baseline marker. */
function SettingBaselineBar({ data }: { data: A2Data }) {
  return (
    <div className={styles.a2}>
      <div className={styles.a2Track} role="img" aria-label={data.ariaLabel}>
        {data.academicPct > 0 ? (
          <div className={styles.a2Academic} style={{ width: `${data.academicPct}%` }}>
            {data.academicPct >= 12 ? (
              <span className={styles.a2SegLabelOnDark}>{data.academicPct}%</span>
            ) : null}
          </div>
        ) : null}
        {data.communityPct > 0 ? (
          <div className={styles.a2Community} style={{ width: `${data.communityPct}%` }}>
            {data.communityPct >= 12 ? (
              <span className={styles.a2SegLabelOnLight}>{data.communityPct}%</span>
            ) : null}
          </div>
        ) : null}
        <div className={styles.a2Marker} style={{ left: `${data.baselinePct}%` }} aria-hidden>
          <span className={styles.a2MarkerLabel}>baseline {data.baselinePct}%</span>
        </div>
      </div>
      <ProofLegend items={data.legend} />
    </div>
  );
}

export interface ProofChartProps {
  type: ProofPatternType;
  scope: ChatScope;
  /** Render the proof title and caption in the card header. */
  showHeader?: boolean;
  /** Override the proof card title (defaults to the pattern's title). */
  title?: string;
  /**
   * Wrap the chart in its own DS `Card` frame (default). Set `false` to render
   * frameless — e.g. when embedding inside another card (the trend card), so the
   * chart shares that card's single border/background/shadow instead of nesting.
   */
  framed?: boolean;
  /**
   * Compact shell for the narrow chat column: 16px inner padding (and matching
   * internal gaps). Page/dashboard contexts leave this off so the DS Card
   * default of 32px applies.
   */
  compact?: boolean;
  /**
   * In-card trend layout (Figma 2334:6729): chart-bar-horizontal header +
   * light-purple theme bars. Implies frameless; ignores the outer section header.
   */
  embedded?: boolean;
  /** Hide the embedded chart title when its parent section already supplies it. */
  embeddedTitle?: boolean;
  /** Optional subline under an embedded chart title. */
  embeddedCaption?: string;
  /** Optional icon shown beside an in-card proof title. */
  headerIcon?: ReactNode;
  /** Match the prior boxed section icon treatment for a proof header. */
  headerIconBoxed?: boolean;
  className?: string;
}

/**
 * Scope-aware section heading. Some pattern titles reference the scope
 * ("...carry the signal"), which is wrong when the same pattern renders for a
 * trend or the whole report. Only A3 embeds a scope noun; the rest are neutral.
 */
function patternTitle(type: ProofPatternType, scope: ChatScope): string {
  if (type === 'A3') {
    if (scope.kind === 'trend') return 'Which themes carry this trend';
    if (scope.kind === 'signal') return 'Which themes carry this signal';
    return 'Which themes carry the most weight';
  }
  return PROOF_PATTERN_META[type].title;
}

export function ProofChart({
  type,
  scope,
  showHeader = false,
  title,
  framed = true,
  compact = false,
  embedded = false,
  embeddedTitle = true,
  embeddedCaption,
  headerIcon,
  headerIconBoxed = false,
  className,
}: ProofChartProps) {
  // Guard: A2 compares a scope to the whole-report baseline, which is
  // meaningless for the whole report itself (report vs itself). If A2 is ever
  // requested for the whole scope, fall back to the specialty distribution.
  // Embedded trend cards always render the A3 theme breakdown (Figma 2334:6729).
  const effectiveType: ProofPatternType = embedded
    ? 'A3'
    : type === 'A2' && scope.kind === 'whole'
      ? 'A1'
      : type;
  const meta = PROOF_PATTERN_META[effectiveType];
  const isA2 = effectiveType === 'A2';
  const config = isA2 ? null : buildConfig(effectiveType, scope);
  const a2 = isA2 ? buildA2(scope) : null;
  const note = isA2 ? a2!.note : config!.note;
  const legend = isA2 ? null : config!.legend;
  const resolvedTitle = title ?? patternTitle(effectiveType, scope);
  const headingId = `proof-${effectiveType}-${scope.kind}-${scope.shorthand ?? scope.label}`.replace(
    /\s+/g,
    '-',
  );

  if (embedded && config) {
    return (
      <div className={`${styles.frameless} ${className ?? ''}`}>
        <ThemeBarList
          config={config}
          title={resolvedTitle}
          showTitle={embeddedTitle}
          caption={embeddedCaption}
          headerIcon={headerIcon}
          headerIconBoxed={headerIconBoxed}
        />
      </div>
    );
  }

  const chartBlock = (
    <>
      {isA2 ? (
        <SettingBaselineBar data={a2!} />
      ) : compact ? (
        /* Narrow chat column: label | count | share bar (matches Data view). */
        <>
          <CompactBarList config={config!} />
          {legend ? <ProofLegend items={legend} /> : null}
        </>
      ) : (
        <>
          <BarChart
            data={config!.data}
            series={config!.series}
            color={THEME_BAR_COLOR}
            orientation={config!.orientation}
            stacked={config!.stacked}
            barRadius={0}
            maxBarWidth={PROOF_BAR_WIDTH}
            categoryLabelSize={PROOF_CATEGORY_LABEL_SIZE}
            formatCategoryLabel={effectiveType === 'A3' ? formatThemeLabel : undefined}
            enableTooltip={false}
            showValues
            showTotals={config!.showTotals}
            showLegend={false}
            showAxis={false}
            showCategoryAxis={config!.showCategoryAxis}
            showGrid={false}
            height={config!.height}
            formatValue={config!.formatValue}
            ariaLabel={config!.ariaLabel}
          />
          {legend ? <ProofLegend items={legend} /> : null}
        </>
      )}
      <div className={styles.note}>
        <span className={styles.noteIcon}>
          <Icon name="info" size={14} tone="tertiary" />
        </span>
        <span className="rc-body-xs">{note}</span>
      </div>
    </>
  );

  /* Chat packs chart/legend/note in one column with a fixed 16px rhythm;
     page/dashboard leave children unwrapped so the DS Card spacing applies. */
  const body = compact ? <div className={styles.compactBody}>{chartBlock}</div> : chartBlock;
  const cardBody = showHeader ? (
    <div className={styles.cardBody}>
      <ProofCardHeader
        title={resolvedTitle}
        caption={meta.caption}
        icon={headerIcon}
        boxedIcon={headerIconBoxed}
        headingId={headingId}
      />
      {body}
    </div>
  ) : (
    body
  );

  return (
    <section className={styles.section} aria-labelledby={showHeader ? headingId : undefined}>
      {framed ? (
        /* Static, non-clickable proof card → flat (no elevation). A shadow would
           wrongly imply interactivity. Page contexts keep the DS Card 32px shell;
           chat passes `compact` for a tighter 16px shell. */
        <Card
          layout="stacked"
          density="roomy"
          elevated={false}
          className={className}
          style={compact ? { padding: 'var(--rc-spacing-4)' } : undefined}
        >
          {cardBody}
        </Card>
      ) : (
        /* Frameless: no own card — the host frame (e.g. the trend card) provides
           the single border/background/shadow. */
        <div className={`${styles.frameless} ${className ?? ''}`}>{body}</div>
      )}
    </section>
  );
}
