import { CellSignalFull, Database, FirstAidKit, Hospital, Tag } from '@phosphor-icons/react';
import type { ComponentType } from 'react';
import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';
import type {
  MetricPalette,
  MetricSegmentTone,
  RecordsMetricCard,
  SegmentMetricCard,
  SignalsMetricCard,
  StatIcon,
} from './data';
import styles from './demo.module.css';

/**
 * Shared rich metric cards (Figma RC-Designs 2638:4830 / 2687:13173).
 *
 * These render the report's headline metrics as: a wide "records by specialty"
 * bar card, and two segmented "share" cards (HCP engagement tiers + care-setting
 * split). Both the Dashboard home page and the Signal Details page consume these
 * views — the Dashboard feeds them whole-report `DASHBOARD_METRICS`, the Signal
 * page feeds them a per-signal `signalMetrics(signal)` slice. Keeping a single
 * implementation guarantees the two surfaces stay visually identical.
 */

/** Stat-card icons — sourced directly from Phosphor to match the Figma design. */
const STAT_ICONS: Record<StatIcon, ComponentType<PhosphorIconProps>> = {
  database: Database,
  'first-aid-kit': FirstAidKit,
  hospital: Hospital,
  tag: Tag,
  'cell-signal-full': CellSignalFull,
};

/**
 * Segment bar + legend-dot colors per card palette (Figma 2641:7331). Both the
 * HCP-tier and institutions cards draw from the blue ramp:
 *  - `blueTiers` (HCP tiers): 3-step 500 / 300 / 100; dots mirror the bar.
 *  - `blue` (institutions): 2-step 500 / 100, but the soft legend dot steps up
 *    to blue-200 so it stays visible next to the pale blue-100 bar.
 */
const SEGMENT_BAR: Record<MetricPalette, Record<MetricSegmentTone, string>> = {
  blue: {
    strong: 'var(--rc-blue-500)',
    mid: 'var(--rc-blue-200)',
    soft: 'var(--rc-blue-100)',
  },
  blueTiers: {
    strong: 'var(--rc-blue-500)',
    mid: 'var(--rc-blue-300)',
    soft: 'var(--rc-blue-100)',
  },
};

const SEGMENT_DOT: Record<MetricPalette, Record<MetricSegmentTone, string>> = {
  blue: { ...SEGMENT_BAR.blue, soft: 'var(--rc-blue-200)' },
  blueTiers: SEGMENT_BAR.blueTiers,
};

export function MetricHeader({
  card,
}: {
  card: { icon: StatIcon; value: string; total?: string; emphasis: string; label: string };
}) {
  const StatIconCmp = STAT_ICONS[card.icon];
  return (
    <div className={styles.metricHeader}>
      <span className={styles.statIcon} aria-hidden>
        <StatIconCmp size={16} weight="regular" />
      </span>
      <span className={styles.metricHeadline}>
        <span className="rc-heading-h6">{card.value}</span>
        <span className={styles.metricHeadlineText}>
          {card.total ? (
            <span className={`rc-body-sm ${styles.metricOf}`}>of {card.total}</span>
          ) : null}
          <strong className={`rc-label-md ${styles.metricEmphasis}`}>{card.emphasis}</strong>
          <span className={`rc-body-sm ${styles.metricLabel}`}>{card.label}</span>
        </span>
      </span>
    </div>
  );
}

export function RecordsMetricCardView({
  card,
  fillHeight = false,
}: {
  card: RecordsMetricCard;
  /**
   * When true (Trend Details' tall specialties card), the bar rows spread to
   * fill the card's extra vertical height so the gaps grow to use the room.
   * Left false everywhere else so the Dashboard/Signal cards keep their compact
   * 12px row gap.
   */
  fillHeight?: boolean;
}) {
  const max = Math.max(1, ...card.bars.map((bar) => bar.value));
  // Append the optional unit, singularising a trailing "s" for a value of 1
  // (e.g. "1 HCP" not "1 HCPs").
  const unitFor = (value: number): string => {
    if (!card.valueUnit) return '';
    const unit =
      value === 1 && card.valueUnit.endsWith('s') ? card.valueUnit.slice(0, -1) : card.valueUnit;
    return ` ${unit}`;
  };
  return (
    <div className={`${styles.metricCard} ${styles.metricCardWide}`}>
      <MetricHeader card={card} />
      {card.caption ? (
        <p className={`rc-body-xs ${styles.metricCaption}`}>{card.caption}</p>
      ) : null}
      <div className={`${styles.metricBars} ${fillHeight ? styles.metricBarsFill : ''}`}>
        {card.bars.map((bar) => (
          <div key={bar.label} className={styles.metricBarRow}>
            <div className={styles.metricBarMeta}>
              <span className={`rc-label-md ${styles.metricBarLabel}`}>{bar.label}</span>
              <span className={`rc-body-sm ${styles.metricBarValue}`}>
                {bar.value}
                {unitFor(bar.value)}
              </span>
            </div>
            <div className={styles.metricBarTrack}>
              <span
                className={styles.metricBarFill}
                style={{ width: `${(bar.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SegmentMetricCardView({ card }: { card: SegmentMetricCard }) {
  const filled = card.barStyle === 'filled';
  const bar = SEGMENT_BAR[card.palette];
  const dot = SEGMENT_DOT[card.palette];
  return (
    <div className={styles.metricCard}>
      <MetricHeader card={card} />
      <div className={styles.metricSegmentGroup}>
        {filled ? (
          <div className={styles.metricSegmentBarFilled}>
            {/* Skip 0%-width segments so their padding doesn't show as a sliver
                (e.g. a signal whose records are entirely one care setting). */}
            {card.segments
              .filter((seg) => seg.percent > 0)
              .map((seg) => (
              <span
                key={seg.label}
                className={styles.metricSegmentFilled}
                style={{ width: `${seg.percent}%`, background: bar[seg.tone] }}
              >
                <span
                  className={`rc-label-sm ${
                    seg.tone === 'strong' ? styles.metricSegmentOnColor : styles.metricSegmentOnLayer
                  }`}
                >
                  {seg.percent}%
                </span>
              </span>
            ))}
          </div>
        ) : (
          <div className={styles.metricSegmentBarThin}>
            {card.segments.map((seg) => (
              <span
                key={seg.label}
                style={{ width: `${seg.percent}%`, background: bar[seg.tone] }}
              />
            ))}
          </div>
        )}
        <div className={`${styles.metricLegend} ${filled ? '' : styles.metricLegendThin}`}>
          {card.segments.map((seg) => (
            <span key={seg.label} className={styles.metricLegendItem}>
              <span className={styles.metricLegendDot} style={{ background: dot[seg.tone] }} />
              <span className={`rc-label-md ${styles.metricLegendLabel}`}>{seg.label}</span>
              {!filled && seg.count != null ? (
                <>
                  <span className={`rc-body-sm ${styles.metricLegendDash}`} aria-hidden>
                    –
                  </span>
                  <span className={`rc-label-md ${styles.metricLegendCount}`}>{seg.count}</span>
                  <span className={styles.metricLegendDivider} aria-hidden />
                  <span className={`rc-body-sm ${styles.metricLegendPercent}`}>{seg.percent}%</span>
                </>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * "Signals + avg strength" card (Figma 2703:9479, Trend Details left column).
 * Header row + an "Avg strength" label/value and the gradient strength meter
 * reused from the Signal-details ScoringCard (`.strengthMeter` classes). The avg
 * value is tier-coloured (strong = orange, moderate/weak = purple).
 */
export function SignalsMetricCardView({ card }: { card: SignalsMetricCard }) {
  const pct = Math.max(0, Math.min(100, Math.round(card.strength * 100)));
  const toneClass =
    card.strengthTone === 'strong'
      ? styles.scoreStrengthStrong
      : card.strengthTone === 'moderate'
        ? styles.scoreStrengthModerate
        : styles.scoreStrengthWeak;
  return (
    <div className={styles.metricCard}>
      <MetricHeader card={card} />
      <div className={styles.metricStrengthBlock}>
        <div className={styles.metricStrengthRow}>
          <span className={`rc-body-xs ${styles.metricStrengthLabel}`}>Avg strength</span>
          <span className={`rc-label-md ${toneClass}`}>{card.strengthLabel}</span>
        </div>
        <div className={styles.strengthMeter}>
          <span
            className={`${styles.strengthFill} ${styles.strengthFillGradient}`}
            style={{ width: `${pct}%` }}
          />
          <span className={styles.strengthKnob} style={{ left: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}
