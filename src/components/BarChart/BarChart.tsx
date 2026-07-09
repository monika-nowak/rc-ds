import { useCallback, useId, useMemo, type CSSProperties, type ReactNode } from 'react';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { GridColumns, GridRows } from '@visx/grid';
import { Group } from '@visx/group';
import { ParentSize } from '@visx/responsive';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Text } from '@visx/text';
import { useTooltip } from '@visx/tooltip';
import { cn } from '../../lib/cn';
import styles from './BarChart.module.css';

/** Orientation of the bars — vertical renders columns, horizontal renders rows. */
export type BarChartOrientation = 'vertical' | 'horizontal';

/**
 * A single-series categorical datum (backward-compatible shape).
 * `color` overrides the resolved bar color for this bar only.
 */
export interface BarChartDatum {
  label: string;
  value: number;
  /** Optional per-bar color — any CSS color or design token, e.g. `var(--rc-chart-2)`. */
  color?: string;
}

/**
 * A multi-series categorical datum. `values` carries one value per series id
 * (keys match `series[].id`). Missing series ids are treated as `0`.
 */
export interface BarChartGroupDatum {
  label: string;
  values: Record<string, number>;
}

/** Chart data — either the simple single-series shape or the multi-series shape. */
export type BarChartData = BarChartDatum[] | BarChartGroupDatum[];

/** A named series used for multi-series (stacked / grouped) charts. */
export interface BarChartSeries {
  /** Stable id — matches the keys in `BarChartGroupDatum.values`. */
  id: string;
  /** Human-readable name shown in the legend and tooltip. */
  label: string;
  /** Series color — any CSS color or token. Defaults to the categorical palette. */
  color?: string;
}

export interface BarChartProps {
  /** Categorical data — single-series (`{ label, value }[]`) or multi-series (`{ label, values }[]`). */
  data: BarChartData;
  /**
   * Series definitions for multi-series charts. When provided (and `data` uses
   * the `values` shape) the chart renders one segment per series per category.
   * Omit for single-series charts.
   */
  series?: BarChartSeries[];
  /** Stack segments within each category (default) vs. render them side-by-side when `false`. */
  stacked?: boolean;
  /** `vertical` = columns (default), `horizontal` = rows. */
  orientation?: BarChartOrientation;
  /** Fixed chart height in px (includes the legend). Width is responsive to the container. */
  height?: number;
  /** Default fill for single-series bars. Overridden per-bar by `datum.color`. Defaults to `var(--rc-chart-bar)`. */
  color?: string;
  /** Show background gridlines along the value axis. */
  showGrid?: boolean;
  /** Render the formatted value on/near each bar (inside for stacked, at the bar end otherwise). */
  showValues?: boolean;
  /** Render category and value axes. */
  showAxis?: boolean;
  /** Render a bold total at the end of each category (sum of its series). */
  showTotals?: boolean;
  /** Render a subtle full-width background track behind each bar. */
  showTrack?: boolean;
  /** Show the series legend. Defaults to `true` when there is more than one series. */
  showLegend?: boolean;
  /** Format values for tooltips, value labels, and the value axis. */
  formatValue?: (value: number) => string;
  /** Format the per-category total. Defaults to `formatValue`. */
  formatTotal?: (value: number) => string;
  /** Cap bar thickness (px) and center bars within their band. */
  maxBarWidth?: number;
  className?: string;
  /** Accessible label for the chart SVG (`role="img"`). Falls back to `title`. */
  ariaLabel?: string;
  /** Short chart title, also used as the accessible label fallback and the single-series name. */
  title?: string;
  /**
   * Normalize each category to 100% of the track (percent / 100%-stacked).
   * Implies a stacked, multi-series chart; value labels default to percentages.
   */
  percent?: boolean;
  /** Optional banner rendered above the chart — e.g. a reference/context note. */
  header?: ReactNode;
  /** Optional muted note rendered on the trailing side of the legend row. */
  footnote?: ReactNode;
}

/**
 * Categorical palette composed from design tokens. Cycle through these for
 * multi-color / grouped charts. Each entry maps to a `--rc-chart-*` token.
 */
export const chartPalette = [
  'var(--rc-chart-1)',
  'var(--rc-chart-2)',
  'var(--rc-chart-3)',
  'var(--rc-chart-4)',
  'var(--rc-chart-5)',
  'var(--rc-chart-6)',
] as const;

/** Neutral series color token — handy for a "rest"/secondary series. */
export const chartNeutral = 'var(--rc-chart-neutral)';

const SINGLE_SERIES_ID = '__value__';
const DEFAULT_BAR_COLOR = 'var(--rc-chart-bar)';
const DEFAULT_TRACK_COLOR = 'var(--rc-chart-track)';
const BAND_PADDING = 0.3;
const GROUP_PADDING = 0.15;
const CATEGORY_CHAR_W = 7.2;
const TOTAL_CHAR_W = 8;
const CATEGORY_LABEL_MAX = 260;
const CATEGORY_LABEL_MIN = 56;

interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface ResolvedSeries {
  id: string;
  label: string;
  color: string;
}

interface RowSegment {
  seriesId: string;
  seriesLabel: string;
  value: number;
  color: string;
}

interface ResolvedRow {
  label: string;
  segments: RowSegment[];
  total: number;
}

interface TooltipDatum {
  category: string;
  series: string;
  value: number;
  showSeries: boolean;
}

function defaultFormat(value: number): string {
  return value.toLocaleString();
}

function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}

function isGroupDatum(
  datum: BarChartDatum | BarChartGroupDatum,
): datum is BarChartGroupDatum {
  return (datum as BarChartGroupDatum).values !== undefined;
}

/** Normalize either data shape into a common `{ series, rows }` model. */
function normalize(
  data: BarChartData,
  series: BarChartSeries[] | undefined,
  color: string,
  title: string | undefined,
): { series: ResolvedSeries[]; rows: ResolvedRow[] } {
  const paletteColor = (i: number) => chartPalette[i % chartPalette.length];
  const groupMode = data.length > 0 && isGroupDatum(data[0]);

  let resolvedSeries: ResolvedSeries[];
  if (series && series.length > 0) {
    resolvedSeries = series.map((s, i) => ({
      id: s.id,
      label: s.label,
      color: s.color ?? paletteColor(i),
    }));
  } else if (groupMode) {
    const ids: string[] = [];
    for (const datum of data as BarChartGroupDatum[]) {
      for (const key of Object.keys(datum.values)) {
        if (!ids.includes(key)) ids.push(key);
      }
    }
    resolvedSeries = ids.map((id, i) => ({ id, label: id, color: paletteColor(i) }));
  } else {
    resolvedSeries = [{ id: SINGLE_SERIES_ID, label: title ?? 'Value', color }];
  }

  const rows: ResolvedRow[] = data.map((datum) => {
    let segments: RowSegment[];
    if (isGroupDatum(datum)) {
      segments = resolvedSeries.map((s) => ({
        seriesId: s.id,
        seriesLabel: s.label,
        value: datum.values[s.id] ?? 0,
        color: s.color,
      }));
    } else {
      const s = resolvedSeries[0];
      segments = [
        {
          seriesId: s.id,
          seriesLabel: s.label,
          value: datum.value,
          color: datum.color ?? s.color,
        },
      ];
    }
    const total = segments.reduce((sum, seg) => sum + seg.value, 0);
    return { label: datum.label, segments, total };
  });

  return { series: resolvedSeries, rows };
}

function resolveMargin(
  orientation: BarChartOrientation,
  opts: {
    showAxis: boolean;
    showValues: boolean;
    showCategoryAxis: boolean;
    showTotals: boolean;
    outsideLabels: boolean;
    longestCategoryPx: number;
    longestTotalPx: number;
  },
): Margin {
  const {
    showAxis,
    showValues,
    showCategoryAxis,
    showTotals,
    outsideLabels,
    longestCategoryPx,
    longestTotalPx,
  } = opts;

  if (orientation === 'vertical') {
    return {
      top: showTotals || (showValues && outsideLabels) ? 24 : 16,
      right: 16,
      bottom: showCategoryAxis ? 40 : 8,
      left: showAxis ? 48 : 8,
    };
  }

  const rightForTotals = showTotals ? longestTotalPx + 16 : 0;
  const rightForValues = showValues && outsideLabels ? 52 : 0;
  return {
    top: 8,
    right: Math.max(rightForTotals, rightForValues, showAxis ? 16 : 8, 8),
    bottom: showAxis ? 40 : 8,
    left: showCategoryAxis
      ? Math.min(Math.max(longestCategoryPx + 12, CATEGORY_LABEL_MIN), CATEGORY_LABEL_MAX)
      : 8,
  };
}

interface BarChartInnerProps
  extends Required<
    Pick<
      BarChartProps,
      | 'orientation'
      | 'stacked'
      | 'showGrid'
      | 'showValues'
      | 'showAxis'
      | 'showTotals'
      | 'showTrack'
      | 'formatValue'
      | 'formatTotal'
    >
  > {
  series: ResolvedSeries[];
  rows: ResolvedRow[];
  width: number;
  height: number;
  maxBarWidth?: number;
  ariaLabel: string;
}

function BarChartInner({
  series,
  rows,
  width,
  height,
  orientation,
  stacked,
  showGrid,
  showValues,
  showAxis,
  showTotals,
  showTrack,
  formatValue,
  formatTotal,
  maxBarWidth,
  ariaLabel,
}: BarChartInnerProps) {
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip<TooltipDatum>();

  const clipId = useId();
  const isMulti = series.length > 1;
  const useGrouped = isMulti && !stacked;
  const insideLabels = !useGrouped && (stacked || isMulti);
  const showCategoryAxis = showAxis || isMulti;
  const isVertical = orientation === 'vertical';

  const longestCategoryPx =
    Math.max(0, ...rows.map((r) => r.label.length)) * CATEGORY_CHAR_W;
  const longestTotalPx =
    Math.max(0, ...rows.map((r) => formatTotal(r.total).length)) * TOTAL_CHAR_W;

  const margin = resolveMargin(orientation, {
    showAxis,
    showValues,
    showCategoryAxis,
    showTotals,
    outsideLabels: !insideLabels,
    longestCategoryPx,
    longestTotalPx,
  });
  const innerWidth = Math.max(0, width - margin.left - margin.right);
  const innerHeight = Math.max(0, height - margin.top - margin.bottom);

  const labels = useMemo(() => rows.map((r) => r.label), [rows]);
  const maxValue = useMemo(() => {
    if (stacked) return Math.max(0, ...rows.map((r) => r.total));
    return Math.max(0, ...rows.flatMap((r) => r.segments.map((s) => s.value)));
  }, [rows, stacked]);

  const categoryScale = useMemo(
    () =>
      scaleBand<string>({
        domain: labels,
        range: isVertical ? [0, innerWidth] : [0, innerHeight],
        padding: BAND_PADDING,
      }),
    [labels, isVertical, innerWidth, innerHeight],
  );

  const valueScale = useMemo(
    () =>
      scaleLinear<number>({
        domain: [0, maxValue || 1],
        range: isVertical ? [innerHeight, 0] : [0, innerWidth],
        // Keep the track exactly data-length when there is no value axis.
        nice: showAxis,
      }),
    [maxValue, isVertical, innerWidth, innerHeight, showAxis],
  );

  const seriesScale = useMemo(
    () =>
      scaleBand<string>({
        domain: series.map((s) => s.id),
        range: [0, categoryScale.bandwidth()],
        padding: GROUP_PADDING,
      }),
    [series, categoryScale],
  );

  const emitTooltip = useCallback(
    (row: ResolvedRow, seg: RowSegment, left: number, top: number) => {
      showTooltip({
        tooltipData: {
          category: row.label,
          series: seg.seriesLabel,
          value: seg.value,
          showSeries: isMulti,
        },
        tooltipLeft: margin.left + left,
        tooltipTop: margin.top + top,
      });
    },
    [showTooltip, margin.left, margin.top, isMulti],
  );

  if (innerWidth <= 0 || innerHeight <= 0) return null;

  const band = categoryScale.bandwidth();
  const barThickness = maxBarWidth ? Math.min(band, maxBarWidth) : band;
  const bandOffset = (band - barThickness) / 2;
  const radius = Math.min(barThickness / 2, 8);
  const trackLength = isVertical ? innerHeight : innerWidth;
  const fitsInside = (segLen: number, text: string) => {
    const textPx = text.length * CATEGORY_CHAR_W + 8;
    // Dimension the text runs along vs. the perpendicular (line height).
    const across = isVertical ? barThickness : segLen;
    const along = isVertical ? segLen : barThickness;
    return across >= textPx && along >= 14;
  };

  return (
    <div className={styles.inner}>
      <svg
        className={styles.svg}
        width={width}
        height={height}
        role="img"
        aria-label={ariaLabel}
      >
        <Group left={margin.left} top={margin.top}>
          {showGrid ? (
            isVertical ? (
              <GridRows
                scale={valueScale}
                width={innerWidth}
                numTicks={5}
                className={styles.grid}
              />
            ) : (
              <GridColumns
                scale={valueScale}
                height={innerHeight}
                numTicks={5}
                className={styles.grid}
              />
            )
          ) : null}

          {rows.map((row, rowIndex) => {
            const bandStart = categoryScale(row.label) ?? 0;

            // Background track — full value-axis length behind the bar.
            const track = showTrack ? (
              <rect
                className={styles.track}
                x={isVertical ? bandStart + bandOffset : 0}
                y={isVertical ? 0 : bandStart + bandOffset}
                width={isVertical ? barThickness : trackLength}
                height={isVertical ? trackLength : barThickness}
                rx={radius}
                ry={radius}
                style={{ fill: DEFAULT_TRACK_COLOR }}
              />
            ) : null;

            // Grouped (side-by-side) rendering.
            if (useGrouped) {
              const subThickness = maxBarWidth
                ? Math.min(seriesScale.bandwidth(), maxBarWidth)
                : seriesScale.bandwidth();
              const subOffset = (seriesScale.bandwidth() - subThickness) / 2;

              return (
                <Group key={`${row.label}-${rowIndex}`}>
                  {track}
                  {row.segments.map((seg) => {
                    const sub = (seriesScale(seg.seriesId) ?? 0) + subOffset;
                    const len = valueScale(seg.value);
                    const x = isVertical ? bandStart + sub : 0;
                    const y = isVertical ? valueScale(seg.value) : bandStart + sub;
                    const w = isVertical ? subThickness : len;
                    const h = isVertical ? innerHeight - valueScale(seg.value) : subThickness;
                    const text = formatValue(seg.value);
                    return (
                      <Group key={seg.seriesId}>
                        <rect
                          className={styles.bar}
                          x={x}
                          y={y}
                          width={Math.max(0, w)}
                          height={Math.max(0, h)}
                          style={{ fill: seg.color }}
                          onMouseMove={() =>
                            emitTooltip(
                              row,
                              seg,
                              isVertical ? x + w / 2 : x + w,
                              isVertical ? y : y + h / 2,
                            )
                          }
                          onMouseLeave={hideTooltip}
                        />
                        {showValues && seg.value > 0 ? (
                          <Text
                            className={styles.valueLabel}
                            x={isVertical ? x + w / 2 : w + 6}
                            y={isVertical ? y - 6 : y + h / 2}
                            textAnchor={isVertical ? 'middle' : 'start'}
                            verticalAnchor={isVertical ? 'end' : 'middle'}
                          >
                            {text}
                          </Text>
                        ) : null}
                      </Group>
                    );
                  })}
                </Group>
              );
            }

            // Stacked (and single-series) rendering — segments share one bar,
            // clipped by a rounded rect so only the outer corners are rounded.
            const rowClip = `${clipId}-${rowIndex}`;
            const barLen = valueScale(row.total);
            const barBandStart = bandStart + bandOffset;
            let cursor = 0;

            return (
              <Group key={`${row.label}-${rowIndex}`}>
                {track}
                <clipPath id={rowClip}>
                  <rect
                    x={isVertical ? barBandStart : 0}
                    y={isVertical ? valueScale(row.total) : barBandStart}
                    width={isVertical ? barThickness : barLen}
                    height={isVertical ? innerHeight - valueScale(row.total) : barThickness}
                    rx={radius}
                    ry={radius}
                  />
                </clipPath>
                <g clipPath={`url(#${rowClip})`}>
                  {row.segments.map((seg) => {
                    const start = cursor;
                    cursor += seg.value;
                    const p0 = valueScale(start);
                    const p1 = valueScale(cursor);
                    const x = isVertical ? barBandStart : Math.min(p0, p1);
                    const y = isVertical ? Math.min(p0, p1) : barBandStart;
                    const w = isVertical ? barThickness : Math.abs(p1 - p0);
                    const h = isVertical ? Math.abs(p1 - p0) : barThickness;
                    if (seg.value <= 0) return null;
                    return (
                      <rect
                        key={seg.seriesId}
                        className={styles.segment}
                        x={x}
                        y={y}
                        width={Math.max(0, w)}
                        height={Math.max(0, h)}
                        style={{ fill: seg.color }}
                        onMouseMove={() =>
                          emitTooltip(row, seg, x + w / 2, y + h / 2)
                        }
                        onMouseLeave={hideTooltip}
                      />
                    );
                  })}
                </g>

                {showValues
                  ? (() => {
                      let labelCursor = 0;
                      return row.segments.map((seg) => {
                        const start = labelCursor;
                        labelCursor += seg.value;
                        if (seg.value <= 0) return null;
                        const p0 = valueScale(start);
                        const p1 = valueScale(labelCursor);
                        const mid = (p0 + p1) / 2;
                        const segLen = Math.abs(p1 - p0);
                        const text = formatValue(seg.value);

                        if (insideLabels) {
                          if (!fitsInside(segLen, text)) return null;
                          return (
                            <Text
                              key={seg.seriesId}
                              className={styles.valueLabelOnBar}
                              x={isVertical ? barBandStart + barThickness / 2 : mid}
                              y={isVertical ? mid : barBandStart + barThickness / 2}
                              textAnchor="middle"
                              verticalAnchor="middle"
                            >
                              {text}
                            </Text>
                          );
                        }

                        // Single-series: label at the end of the bar (outside).
                        return (
                          <Text
                            key={seg.seriesId}
                            className={styles.valueLabel}
                            x={isVertical ? barBandStart + barThickness / 2 : p1 + 6}
                            y={isVertical ? p1 - 6 : barBandStart + barThickness / 2}
                            textAnchor={isVertical ? 'middle' : 'start'}
                            verticalAnchor={isVertical ? 'end' : 'middle'}
                          >
                            {text}
                          </Text>
                        );
                      });
                    })()
                  : null}

                {showTotals ? (
                  <Text
                    className={styles.totalLabel}
                    x={isVertical ? barBandStart + barThickness / 2 : innerWidth + 12}
                    y={isVertical ? valueScale(row.total) - 8 : barBandStart + barThickness / 2}
                    textAnchor={isVertical ? 'middle' : 'start'}
                    verticalAnchor={isVertical ? 'end' : 'middle'}
                  >
                    {formatTotal(row.total)}
                  </Text>
                ) : null}
              </Group>
            );
          })}

          {showCategoryAxis ? (
            isVertical ? (
              <AxisBottom
                scale={categoryScale}
                top={innerHeight}
                hideTicks
                hideAxisLine={!showAxis}
                tickLabelProps={() => ({
                  className: styles.tickLabel,
                  textAnchor: 'middle',
                  dy: '0.6em',
                })}
              />
            ) : (
              <AxisLeft
                scale={categoryScale}
                hideAxisLine
                hideTicks
                tickLabelProps={() => ({
                  className: styles.tickLabel,
                  textAnchor: 'end',
                  dx: '-0.4em',
                  dy: '0.28em',
                })}
              />
            )
          ) : null}

          {showAxis ? (
            isVertical ? (
              <AxisLeft
                scale={valueScale}
                numTicks={5}
                hideAxisLine
                hideTicks
                tickFormat={(v) => formatValue(Number(v))}
                tickLabelProps={() => ({
                  className: styles.tickLabel,
                  textAnchor: 'end',
                  dx: '-0.4em',
                  dy: '0.28em',
                })}
              />
            ) : (
              <AxisBottom
                scale={valueScale}
                top={innerHeight}
                numTicks={5}
                hideTicks
                tickFormat={(v) => formatValue(Number(v))}
                tickLabelProps={() => ({
                  className: styles.tickLabel,
                  textAnchor: 'middle',
                  dy: '0.6em',
                })}
              />
            )
          ) : null}
        </Group>
      </svg>

      {tooltipOpen && tooltipData ? (
        <div
          className={styles.tooltip}
          style={
            {
              left: tooltipLeft ?? 0,
              top: tooltipTop ?? 0,
            } as CSSProperties
          }
        >
          <span className={cn('rc-label-sm', styles.tooltipLabel)}>
            {tooltipData.showSeries
              ? `${tooltipData.category} · ${tooltipData.series}`
              : tooltipData.category}
          </span>
          <span className={cn('rc-body-xs', styles.tooltipValue)}>
            {formatValue(tooltipData.value)}
          </span>
        </div>
      ) : null}
    </div>
  );
}

export function BarChart({
  data,
  series,
  stacked = true,
  orientation = 'vertical',
  height = 320,
  color = DEFAULT_BAR_COLOR,
  showGrid = true,
  showValues = false,
  showAxis = true,
  showTotals = false,
  showTrack = false,
  showLegend,
  percent = false,
  header,
  footnote,
  formatValue,
  formatTotal,
  maxBarWidth,
  className,
  ariaLabel,
  title,
}: BarChartProps) {
  const resolvedLabel = ariaLabel ?? title ?? 'Bar chart';
  const { series: resolvedSeries, rows } = useMemo(
    () => normalize(data, series, color, title),
    [data, series, color, title],
  );

  // Percent (100%-stacked): normalize each category to its own total so every
  // row fills the track; labels/axis then read as percentages.
  const displayRows = useMemo(() => {
    if (!percent) return rows;
    return rows.map((row) => {
      if (row.total <= 0) return row;
      return {
        ...row,
        segments: row.segments.map((seg) => ({
          ...seg,
          value: (seg.value / row.total) * 100,
        })),
        total: 100,
      };
    });
  }, [rows, percent]);

  const isMulti = resolvedSeries.length > 1;
  const legendVisible = showLegend ?? isMulti;
  const effectiveStacked = percent ? true : stacked;
  const resolvedFormatValue = formatValue ?? (percent ? formatPercent : defaultFormat);
  const resolvedFormatTotal = formatTotal ?? resolvedFormatValue;
  const showFooter = (legendVisible && isMulti) || footnote != null;

  return (
    <div
      className={cn(styles.root, className)}
      style={{ height }}
      role="group"
      aria-label={title ?? ariaLabel}
    >
      {header != null ? (
        <div className={cn('rc-body-sm', styles.header)}>{header}</div>
      ) : null}

      <div className={styles.chartArea}>
        <ParentSize>
          {({ width, height: areaHeight }) =>
            width > 0 && areaHeight > 0 ? (
              <BarChartInner
                series={resolvedSeries}
                rows={displayRows}
                width={width}
                height={areaHeight}
                orientation={orientation}
                stacked={effectiveStacked}
                showGrid={showGrid}
                showValues={showValues}
                showAxis={showAxis}
                showTotals={showTotals}
                showTrack={showTrack}
                formatValue={resolvedFormatValue}
                formatTotal={resolvedFormatTotal}
                maxBarWidth={maxBarWidth}
                ariaLabel={resolvedLabel}
              />
            ) : null
          }
        </ParentSize>
      </div>

      {showFooter ? (
        <div className={styles.footer}>
          {legendVisible && isMulti ? (
            <ul className={styles.legend}>
              {resolvedSeries.map((s) => (
                <li key={s.id} className={styles.legendItem}>
                  <span
                    className={styles.legendSwatch}
                    style={{ background: s.color }}
                    aria-hidden
                  />
                  <span className={cn('rc-body-xs', styles.legendLabel)}>{s.label}</span>
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
          {footnote != null ? (
            <span className={cn('rc-body-xs', styles.footnote)}>{footnote}</span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
