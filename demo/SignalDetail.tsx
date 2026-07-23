import {
  CellSignalFull,
  ChartLine,
  ClipboardText,
  Database,
  Target,
} from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Badge } from '../src/components/Badge';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';
import { Divider } from '../src/components/Divider';
import { Icon } from '../src/icons';
import { ROLE_BADGE, STRENGTH_BADGE, roleKeyFromLabel } from '../src/lib/signalBadge';
import {
  RECORDS,
  deriveBreakdown,
  signalMetrics,
  signalStrength,
  type RecordEntry,
  type ScoreMetric,
  type Signal,
} from './data';
import type { ChatScope } from './Dashboard';
import { RecordsMetricCardView, SegmentMetricCardView } from './MetricCards';
import { ProofChart, THEME_BAR_SUBTITLE } from './ProofChart';
import { selectProofPattern } from './proofPatterns';
import styles from './demo.module.css';

// Split the "So What" narrative into up to two points to match the Figma
// two-column layout. First sentence becomes point 1, the remainder point 2.
function splitSoWhat(text: string): string[] {
  const idx = text.indexOf('. ');
  if (idx === -1) return [text];
  return [text.slice(0, idx + 1).trim(), text.slice(idx + 2).trim()].filter(Boolean);
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
              className={`${styles.strengthFill} ${styles.strengthFillGradient}`}
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
  // The three rich metric cards (records / HCPs / institutions), scoped to this
  // signal's own records — same shared views the dashboard uses (Figma 2687:13173).
  const metrics = signalMetrics(signal);

  const RECORDS_PAGE = 8;
  const signalRecords = signal.recs.map((id) => RECORDS[id]).filter(Boolean);
  const proof = signalRecords[0];

  // The signal's stated total can exceed the records we have tagged to it; pad
  // the list with other real records from the pool so "Show more" can page
  // through to the full count.
  const recordTotal = Number.parseInt(signal.records, 10) || signalRecords.length;
  const usedIds = new Set(signalRecords.map((record) => record.id));
  const allRecords = [...signalRecords];
  for (const record of Object.values(RECORDS)) {
    if (allRecords.length >= recordTotal) break;
    if (!usedIds.has(record.id)) allRecords.push(record);
  }

  const [visibleCount, setVisibleCount] = useState(RECORDS_PAGE);
  useEffect(() => setVisibleCount(RECORDS_PAGE), [signal]);
  const visibleRecords = allRecords.slice(0, visibleCount);
  const hasMore = visibleCount < allRecords.length;

  // "Shown When": deterministically pick the chart that best proves this
  // signal from its own real records. Every value is tallied via analytics.ts.
  const proofScope: ChatScope = {
    kind: 'signal',
    label: `Signal ${signal.seq}`,
    shorthand: signal.shorthand,
  };
  const proofPattern = selectProofPattern(proofScope);

  // Strength/role badges — same source of truth (signalBadge) as cards + table.
  // Rule: always show the strength badge; show the role badge only when the
  // signal is a Lead (Supporting/Notable are not surfaced as a type badge).
  const strength = signalStrength(Number.parseFloat(signal.strengthLabel));
  const strengthCfg = STRENGTH_BADGE[strength.tone];
  const isLead = roleKeyFromLabel(signal.role) === 'lead';

  return (
    <div className={styles.signalPage}>
      <section className={styles.signalHero}>
        <div className={styles.signalHeroInner}>
          <span className={`rc-heading-h7 ${styles.signalKicker}`}>Signal {signal.seq}</span>
          <div className={styles.signalBadgeRow}>
            <Badge
              appearance={strengthCfg.appearance}
              color={strengthCfg.color}
              icon={strengthCfg.icon}
              iconTone={strengthCfg.iconTone}
            >
              {strength.label}
            </Badge>
            {isLead ? (
              <Badge
                appearance={ROLE_BADGE.lead.appearance}
                color={ROLE_BADGE.lead.color}
                icon={ROLE_BADGE.lead.icon}
              >
                {ROLE_BADGE.lead.label}
              </Badge>
            ) : null}
          </div>
          <h1 className={styles.signalTitle}>{signal.title}</h1>
          {/* Same two footer chips the signal card shows: KIT + category. */}
          <div className={styles.signalBadgeRow}>
            <Badge appearance="subtle" color="neutral">
              {signal.kit}
            </Badge>
            <Badge appearance="subtle" color="neutral">
              {signal.category}
            </Badge>
          </div>
        </div>
      </section>

      <div className={styles.signalMain}>
        <div className={styles.signalMainInner}>
          <aside className={styles.scoringCol}>
            <ScoringCard signal={signal} />
          </aside>

          <div className={styles.signalContent}>
            <div className={styles.metricGrid}>
              <RecordsMetricCardView card={metrics.records} />
              <div className={styles.metricColumn}>
                <SegmentMetricCardView card={metrics.hcps} />
                <SegmentMetricCardView card={metrics.institutions} />
              </div>
            </div>

            <div className={styles.sectionRow}>
              <section className={styles.signalSection}>
                <SectionHeader
                  icon={<ClipboardText size={16} weight="regular" />}
                  title="What HCPs Report"
                  boxed
                />
                <p className={`rc-body-md ${styles.sectionBody}`}>{signal.report}</p>
              </section>

              <section className={styles.signalSection}>
                <SectionHeader
                  icon={<ChartLine size={16} weight="regular" />}
                  title="Interpretation"
                  boxed
                />
                <p className={`rc-body-md ${styles.sectionBody}`}>{signal.description}</p>
              </section>
            </div>

            <section className={styles.signalSection}>
              <SectionHeader
                icon={<Target size={16} weight="regular" />}
                title="Strategic Relevance"
                boxed
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
              <section className={`${styles.signalSection} ${styles.signalProofSection}`}>
                <SectionHeader
                  icon={<CellSignalFull size={16} weight="regular" />}
                  title="Signal proofs"
                  boxed
                />
                {proofPattern === 'A3' ? (
                  <Card layout="stacked" density="roomy" elevated={false}>
                    <ProofChart
                      type={proofPattern}
                      scope={proofScope}
                      embedded
                      embeddedCaption={THEME_BAR_SUBTITLE}
                      embeddedTitle={false}
                    />
                  </Card>
                ) : (
                  <ProofChart type={proofPattern} scope={proofScope} showHeader />
                )}
                <div className={`${styles.proofCard} ${styles.signalProofCard}`}>
                  <p className={styles.proofQuote}>{proof.quote}</p>
                  <div className={styles.proofMeta}>
                    <button
                      type="button"
                      className={styles.recordRefButton}
                      onClick={() => onOpenRecord(proof)}
                    >
                      <Badge appearance="subtle" color="info">
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
                icon={<Database size={16} weight="regular" />}
                title="Records in this signal"
                boxed
              />
              <span className={`rc-body-sm ${styles.recordsCount}`}>
                Showing {visibleRecords.length} of {recordTotal} records
              </span>
              <div className={styles.recordsTableWrap}>
                <div className={`${styles.recordsTableHead} ${styles.recordsTableColumns}`}>
                  <span className={`rc-body-sm ${styles.recordsHeadCell}`}>Record ID</span>
                  <span className={`rc-body-sm ${styles.recordsHeadCell}`}>Verbatim</span>
                  <span className={`rc-body-sm ${styles.recordsHeadCell}`}>Date</span>
                  <span className={`rc-body-sm ${styles.recordsHeadCell}`}>Institution type</span>
                  <span className={`rc-body-sm ${styles.recordsHeadCell}`}>HCP Specialty</span>
                </div>
                {visibleRecords.map((record) => (
                  <button
                    key={record.id}
                    type="button"
                    className={`${styles.recordsTableRow} ${styles.recordsTableColumns} ${styles.recordsTableRowButton}`}
                    onClick={() => onOpenRecord(record)}
                  >
                    <span className={`rc-label-md ${styles.recordsCell} ${styles.recordsCellId}`}>
                      {record.id}
                    </span>
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
              {hasMore ? (
                <div className={styles.recordsMore}>
                  <Button
                    variant="secondary"
                    size="sm"
                    className={styles.showAll}
                    onClick={() => setVisibleCount((count) => count + RECORDS_PAGE)}
                  >
                    Show more records
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
