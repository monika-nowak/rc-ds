import {
  Database,
  FirstAidKit,
  Heartbeat,
  Hospital,
  Sparkle,
  Tag,
  TrendUp,
} from '@phosphor-icons/react';
import { useState } from 'react';
import type { ComponentType, ReactNode } from 'react';
import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';
import { Badge } from '../src/components/Badge';
import { Divider } from '../src/components/Divider';
import { Icon } from '../src/icons';
import {
  RECORDS,
  deriveBreakdown,
  signalStrength,
  type RecordEntry,
  type ScoreMetric,
  type Signal,
  type StatIcon,
} from './data';
import styles from './demo.module.css';

const STAT_ICONS: Record<StatIcon, ComponentType<PhosphorIconProps>> = {
  database: Database,
  'first-aid-kit': FirstAidKit,
  hospital: Hospital,
  tag: Tag,
};

// Split the "So What" narrative into up to two points to match the Figma
// two-column layout. First sentence becomes point 1, the remainder point 2.
function splitSoWhat(text: string): string[] {
  const idx = text.indexOf('. ');
  if (idx === -1) return [text];
  return [text.slice(0, idx + 1).trim(), text.slice(idx + 2).trim()].filter(Boolean);
}

interface SignalStat {
  icon: StatIcon;
  value: string;
  emphasis: string;
  label: string;
}

function SignalStatCard({ stat }: { stat: SignalStat }) {
  const StatIconCmp = STAT_ICONS[stat.icon];
  return (
    <article className={`${styles.statCard} ${styles.statCardStandalone}`}>
      <div className={styles.statBody}>
        <span className={styles.statIcon}>
          <StatIconCmp size={16} weight="regular" />
        </span>
        <div className={styles.statText}>
          <span className="rc-heading-h6">{stat.value}</span>
          <span className="rc-body-sm">
            <strong style={{ color: 'var(--rc-text-primary)' }}>{stat.emphasis}</strong>{' '}
            <span style={{ color: 'var(--rc-text-secondary)' }}>{stat.label}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

function SectionHeader({
  icon,
  title,
  boxed = false,
}: {
  icon: ReactNode;
  title: string;
  boxed?: boolean;
}) {
  return (
    <div className={styles.signalSectionHead}>
      {boxed ? (
        <span className={styles.featuredIcon}>{icon}</span>
      ) : (
        <span className={styles.signalSectionIcon}>{icon}</span>
      )}
      <span className={`rc-heading-h7 ${styles.signalSectionTitle}`}>{title}</span>
      <Divider className={styles.signalSectionRule} />
    </div>
  );
}

/**
 * Bars use only the three signal-strength tier colors, chosen by value:
 * Strong (≥0.8) = orange, Moderate (0.6–0.79) = purple, Weak (<0.6) = dark purple.
 */
function tierFillClass(fraction: number): string {
  if (fraction >= 0.8) return styles.scoreFillOrange;
  if (fraction >= 0.6) return styles.scoreFillPurple;
  return styles.scoreFillWeak;
}

function ScoreMetricRow({ metric, fillClass }: { metric: ScoreMetric; fillClass: string }) {
  return (
    <div className={styles.scoreMetric}>
      <div className={styles.scoreMetricHead}>
        <span className={styles.scoreMetricLabel}>
          <span className="rc-label-md">{metric.label}</span>
          <Icon name="question" size={16} tone="secondary" />
        </span>
        <span className={`rc-label-sm ${styles.scoreValue}`}>{metric.value}</span>
      </div>
      <div className={styles.scoreTrack}>
        <span
          className={`${styles.scoreTrackFill} ${fillClass}`}
          style={{ width: `${Math.round(metric.fraction * 100)}%` }}
        />
      </div>
      <div className={styles.scoreSubRow}>
        {metric.sub.map((sub) => (
          <span key={sub.label} className={styles.scoreSub}>
            <span className={`rc-body-xs ${styles.scoreSubLabel}`}>{sub.label}</span>
            <span className={`rc-label-sm ${styles.scoreSubValue}`}>{sub.value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ScoringCard({ signal }: { signal: Signal }) {
  const [expanded, setExpanded] = useState(false);
  const score = Number.parseFloat(signal.strengthLabel);
  const strength = signalStrength(score);
  const strengthClass =
    strength.tone === 'strong'
      ? styles.scoreStrengthStrong
      : strength.tone === 'moderate'
        ? styles.scoreStrengthModerate
        : styles.scoreStrengthWeak;
  const breakdown = deriveBreakdown(signal);

  return (
    <div className={styles.scoringCard}>
      <div className={styles.scoreBlock}>
        <div className={styles.scoreStrengthTop}>
          <div className={styles.scoreRow}>
            <span className="rc-label-md">Signal Strength</span>
            <span className={`rc-heading-h7 ${strengthClass}`}>{strength.label}</span>
          </div>
          <div className={styles.strengthMeter}>
            <span
              className={`${styles.strengthFill} ${tierFillClass(score)}`}
              style={{ width: `${Math.round(score * 100)}%` }}
            />
            <span
              className={styles.strengthKnob}
              style={{ left: `${Math.round(score * 100)}%` }}
            />
          </div>
        </div>
        <span className={`rc-body-sm ${styles.scoreNote}`}>
          The signal is both coherent and highly relevant to the client&rsquo;s priorities.
          Supporting evidence is currently limited in volume.
        </span>
      </div>

      {expanded ? (
        <>
          <div className={styles.scoreBlock2}>
            <div className={styles.scoreBreakdown}>
              <ScoreMetricRow
                metric={breakdown.distribution}
                fillClass={tierFillClass(breakdown.distribution.fraction)}
              />
              <ScoreMetricRow
                metric={breakdown.narrative}
                fillClass={tierFillClass(breakdown.narrative.fraction)}
              />
              <div className={styles.scoreMetric}>
                <div className={styles.scoreMetricHead}>
                  <span className={styles.scoreMetricLabel}>
                  <span className="rc-label-md">Strategic Fit</span>
                  <Icon name="question" size={16} tone="secondary" />
                  </span>
                  <span className={`rc-label-sm ${styles.scoreValue}`}>
                    {breakdown.strategicFit.value}
                  </span>
                </div>
                <div className={styles.scoreTrack}>
                  <span
                    className={`${styles.scoreTrackFill} ${tierFillClass(breakdown.strategicFit.fraction)}`}
                    style={{ width: `${Math.round(breakdown.strategicFit.fraction * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            <Divider />

            <div className={styles.scoreRow}>
              <span className={styles.scoreMetricLabel}>
              <span className="rc-label-md">Signal score</span>
              <Icon name="question" size={16} tone="secondary" />
              </span>
              <span className={`rc-label-sm ${styles.scoreValue}`}>{signal.strengthLabel}</span>
            </div>
          </div>

          <span className={`rc-body-xs ${styles.scoreFootnote}`}>
            Logic evolves with model training. Frozen once a report is generated (snapshot).
          </span>
        </>
      ) : null}

      <button
        type="button"
        className={styles.scoreToggle}
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
      >
        <span className="rc-label-md">{expanded ? 'Hide breakdown' : 'See full breakdown'}</span>
        <Icon name={expanded ? 'caret-up' : 'caret-down'} size={16} tone="primary" />
      </button>
    </div>
  );
}

export function SignalDetail({
  signal,
  onOpenRecord,
}: {
  signal: Signal;
  onOpenRecord: (record: RecordEntry) => void;
}) {
  const stats: SignalStat[] = [
    { icon: 'database', value: signal.records, emphasis: 'records', label: 'analyzed' },
    { icon: 'first-aid-kit', value: signal.hcps, emphasis: 'HCPs', label: 'contributing' },
    { icon: 'hospital', value: signal.specialties, emphasis: 'specialties', label: 'represented' },
    { icon: 'tag', value: signal.instTypes, emphasis: 'institution', label: 'types' },
  ];

  const records = signal.recs.map((id) => RECORDS[id]).filter(Boolean);
  const proof = records[0];

  return (
    <div className={styles.signalPage}>
      <section className={styles.signalHero}>
        <span className={`rc-heading-h6 ${styles.signalKicker}`}>Signal {signal.seq}</span>
        <h1 className={styles.signalTitle}>{signal.title}</h1>
        <div className={styles.signalBadgeRow}>
          <Badge appearance="subtle" color="neutral">
            {signal.category}
          </Badge>
        </div>
      </section>

      <div className={styles.signalMain}>
        <aside className={styles.scoringCol}>
          <ScoringCard signal={signal} />
        </aside>

        <div className={styles.signalContent}>
          <div className={styles.signalStatGrid}>
            {stats.map((stat) => (
              <SignalStatCard key={stat.emphasis} stat={stat} />
            ))}
          </div>

          <div className={styles.sectionRow}>
            <section className={styles.signalSection}>
              <SectionHeader
                icon={<FirstAidKit size={20} weight="regular" />}
                title="What HCPs Report"
              />
              <p className={`rc-body-md ${styles.sectionBody}`}>{signal.report}</p>
            </section>

            <section className={styles.signalSection}>
              <SectionHeader
                icon={<Sparkle size={20} weight="regular" />}
                title="What This Suggests"
              />
              <p className={`rc-body-md ${styles.sectionBody}`}>{signal.description}</p>
            </section>
          </div>

          <section className={styles.signalSection}>
            <SectionHeader
              icon={<Heartbeat size={20} weight="regular" />}
              title="So What – Strategic Relevance"
            />
            <div className={styles.relevanceList}>
              {splitSoWhat(signal.soWhat).map((point, i) => (
                <div className={styles.relevanceItem} key={i}>
                  <Badge appearance="subtle" color="lightPurple">
                    {i + 1}
                  </Badge>
                  <p className={`rc-body-md ${styles.relevanceText}`}>{point}</p>
                </div>
              ))}
            </div>
          </section>

          {proof ? (
            <section className={styles.signalSection}>
              <SectionHeader
                icon={<TrendUp size={18} weight="regular" />}
                title="Signal proof"
                boxed
              />
              <div className={styles.proofCard}>
                <p className={styles.proofQuote}>{proof.quote}</p>
                <div className={styles.proofMeta}>
                  <button
                    type="button"
                    className={styles.recordRefButton}
                    onClick={() => onOpenRecord(proof)}
                  >
                    <Badge appearance="subtle" color="lightPurple">
                      Record {proof.id}
                    </Badge>
                  </button>
                  <span className={styles.proofMetaDivider} />
                  <span className={`rc-body-xs ${styles.proofMetaText}`}>{proof.specialty}</span>
                  <span className={styles.proofMetaDivider} />
                  <span className={`rc-body-xs ${styles.proofMetaText}`}>{proof.institution}</span>
                  <span className={styles.proofMetaDivider} />
                  <span className={`rc-body-xs ${styles.proofMetaText}`}>{proof.date}</span>
                </div>
              </div>
            </section>
          ) : null}

          <div className={styles.recordsBlock}>
            <SectionHeader
              icon={<Database size={20} weight="regular" />}
              title="Records in this signal"
            />
            <span className={`rc-body-sm ${styles.recordsCount}`}>
              Showing {records.length} of {signal.records} records
            </span>
            <div className={styles.recordsTableWrap}>
              <div className={`${styles.recordsTableHead} ${styles.recordsTableColumns}`}>
                <span className={`rc-body-sm ${styles.recordsHeadCell}`}>Record ID</span>
                <span className={`rc-body-sm ${styles.recordsHeadCell}`}>Verbatim</span>
                <span className={`rc-body-sm ${styles.recordsHeadCell}`}>Date</span>
                <span className={`rc-body-sm ${styles.recordsHeadCell}`}>Institution type</span>
                <span className={`rc-body-sm ${styles.recordsHeadCell}`}>HCP Specialty</span>
              </div>
              {records.map((record) => (
                <button
                  key={record.id}
                  type="button"
                  className={`${styles.recordsTableRow} ${styles.recordsTableColumns} ${styles.recordsTableRowButton}`}
                  onClick={() => onOpenRecord(record)}
                >
                  <span className={`rc-label-md ${styles.recordsCell}`}>{record.id}</span>
                  <span className={`rc-body-sm ${styles.recordsCell}`}>
                    <span className={styles.recordsCellVerbatim}>{record.quote}</span>
                  </span>
                  <span className={`rc-body-sm ${styles.recordsCell} ${styles.recordsCellMuted}`}>
                    {record.date}
                  </span>
                  <span className={`rc-body-sm ${styles.recordsCell} ${styles.recordsCellMuted}`}>
                    {record.institution}
                  </span>
                  <span className={`rc-body-sm ${styles.recordsCell} ${styles.recordsCellMuted}`}>
                    {record.specialty}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
