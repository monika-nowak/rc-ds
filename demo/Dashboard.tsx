import {
  ChartBar,
  CellSignalFull,
  ChartLine,
  Database,
  FirstAidKit,
  Hospital,
  Syringe,
  TrendUp,
} from '@phosphor-icons/react';
import type { ComponentType } from 'react';
import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';
import { AppHeader } from '../src/components/AppHeader';
import { Avatar } from '../src/components/Avatar';
import { Badge } from '../src/components/Badge';
import { Breadcrumbs, type BreadcrumbTrailItem } from '../src/components/Breadcrumb';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';
import { Divider } from '../src/components/Divider';
import { Logo } from '../src/components/Logo';
import { Icon } from '../src/icons';
import { ROLE_BADGE, STRENGTH_BADGE, roleKeyFromLabel } from '../src/lib/signalBadge';
import { magnitude, resolveScopeRecords } from './analytics';
import { ProjectProof } from './ProjectProof';
import {
  DASHBOARD_METRICS,
  RECORDS,
  SIGNALS,
  TRENDS,
  signalStrength,
  type Signal,
} from './data';
import { RecordsMetricCardView, SegmentMetricCardView } from './MetricCards';
import styles from './demo.module.css';

export interface ChatScope {
  kind: 'whole' | 'signal' | 'trend';
  label: string;
  shorthand?: string;
}

interface DashboardProps {
  onAsk: (scope: ChatScope) => void;
  onOpenSignal: (signal: Signal) => void;
  onOpenTrend: (trend: (typeof TRENDS)[number]) => void;
}

function SignalCard({
  signal,
  onAsk,
  onOpenSignal,
}: {
  signal: Signal;
  onAsk: DashboardProps['onAsk'];
  onOpenSignal: DashboardProps['onOpenSignal'];
}) {
  const strength = signalStrength(Number.parseFloat(signal.strengthLabel));
  return (
    <div
      className={styles.signalCell}
      role="button"
      tabIndex={0}
      onClick={() => onOpenSignal(signal)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpenSignal(signal);
        }
      }}
    >
      <Card
        variant="signal"
        hoverable
        strengthLabel={strength.label}
        strengthTone={strength.tone}
        leadLabel={signal.leadLabel}
        title={signal.title}
        description={signal.description}
        stats={[
          {
            value: signal.records,
            label: 'Records',
            total: String(WHOLE_MAGNITUDE.records),
            icon: <Database size={16} weight="regular" />,
          },
          {
            value: signal.hcps,
            label: 'HCPs',
            total: String(WHOLE_MAGNITUDE.hcps),
            icon: <FirstAidKit size={16} weight="regular" />,
          },
        ]}
        footer={
          <div className={styles.signalTags}>
            <Badge appearance="subtle" color="neutral">
              {signal.kit}
            </Badge>
            <Badge appearance="subtle" color="neutral">
              {signal.category}
            </Badge>
          </div>
        }
      />
      <button
        type="button"
        className={styles.askSparkle}
        aria-label={`Ask AI about ${signal.title}`}
        onClick={(event) => {
          event.stopPropagation();
          onAsk({ kind: 'signal', label: `Signal ${signal.seq}`, shorthand: signal.shorthand });
        }}
      >
        <Icon name="sparkle" size={14} tone="ai" />
      </button>
    </div>
  );
}

/** A single signal row inside the All-signals table. */
function SignalRow({
  signal,
  onOpenSignal,
}: {
  signal: Signal;
  onOpenSignal: DashboardProps['onOpenSignal'];
}) {
  const strength = signalStrength(Number.parseFloat(signal.strengthLabel));
  const strengthCfg = STRENGTH_BADGE[strength.tone];
  const roleKey = roleKeyFromLabel(signal.role);
  const role = ROLE_BADGE[roleKey];
  return (
    <button
      type="button"
      className={`${styles.recordsTableRow} ${styles.signalsTableColumns} ${styles.recordsTableRowButton}`}
      onClick={() => onOpenSignal(signal)}
    >
      <span className={`${styles.recordsCell} ${styles.signalsTitleCell}`}>
        <span className={`rc-heading-h7 ${styles.signalsTitleText}`}>{signal.title}</span>
      </span>
      <span className={`${styles.recordsCell} ${styles.signalsTypeCell}`}>
        {roleKey === 'lead' ? (
          <Badge appearance={role.appearance} color={role.color} icon={role.icon}>
            {role.label}
          </Badge>
        ) : (
          <span className={`rc-body-sm ${styles.signalsTypeText}`}>{role.label}</span>
        )}
      </span>
      <span className={`rc-body-sm ${styles.recordsCell} ${styles.signalsNumCell}`}>{signal.records}</span>
      <span className={`rc-body-sm ${styles.recordsCell} ${styles.signalsNumCell}`}>{signal.hcps}</span>
      <span className={`${styles.recordsCell} ${styles.signalsStrengthCell}`}>
        <Badge
          appearance={strengthCfg.appearance}
          color={strengthCfg.color}
          icon={strengthCfg.icon}
          iconTone={strengthCfg.iconTone}
        >
          {strength.label}
        </Badge>
      </span>
    </button>
  );
}

/**
 * Full index of every signal, using the shared records-table pattern (bordered
 * layer surface, header row, hover rows). Rows are grouped by the trend they
 * belong to — each trend gets a clickable group header (opens the trend), and
 * signals that aren't part of any trend fall into a final "standalone" group.
 * Columns: signal (role + title), records, HCPs, and the strength badge.
 */
function AllSignalsTable({
  onOpenSignal,
  onOpenTrend,
}: {
  onOpenSignal: DashboardProps['onOpenSignal'];
  onOpenTrend: DashboardProps['onOpenTrend'];
}) {
  const trendSignalIds = new Set(TRENDS.flatMap((trend) => trend.signals.map((s) => s.id)));
  const standaloneSignals = SIGNALS.filter((signal) => !trendSignalIds.has(signal.id));

  return (
    <div className={`${styles.recordsTableWrap} ${styles.signalsTableWrap}`}>
      <div className={`${styles.recordsTableHead} ${styles.signalsTableColumns}`}>
        <span className={`rc-label-md ${styles.recordsHeadCell}`}>Signal</span>
        <span className={`rc-label-md ${styles.recordsHeadCell}`}>Type</span>
        <span className={`rc-label-md ${styles.recordsHeadCell}`}>Records</span>
        <span className={`rc-label-md ${styles.recordsHeadCell}`}>HCPs</span>
        <span className={`rc-label-md ${styles.recordsHeadCell}`}>Strength</span>
      </div>

      {TRENDS.map((trend) => (
        <div key={trend.id} className={styles.signalsGroup}>
          <button
            type="button"
            className={styles.signalsGroupHeader}
            onClick={() => onOpenTrend(trend)}
          >
            <ChartLine size={16} weight="regular" className={styles.signalsGroupIcon} aria-hidden />
            <span className={`rc-label-md ${styles.signalsGroupLabel}`}>{trend.label}</span>
            <span className={`rc-body-sm ${styles.signalsGroupTitle}`}>{trend.title}</span>
          </button>
          {trend.signals.map((signal) => (
            <SignalRow key={signal.id} signal={signal} onOpenSignal={onOpenSignal} />
          ))}
        </div>
      ))}

      {standaloneSignals.length > 0 ? (
        <div className={styles.signalsGroup}>
          <div className={`${styles.signalsGroupHeader} ${styles.signalsGroupHeaderStatic}`}>
            <span className={`rc-label-md ${styles.signalsGroupLabelMuted}`}>Standalone signals</span>
          </div>
          {standaloneSignals.map((signal) => (
            <SignalRow key={signal.id} signal={signal} onOpenSignal={onOpenSignal} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** Whole-report magnitude — denominator for each trend card's "X of Y" stats. */
export const WHOLE_MAGNITUDE = magnitude(Object.values(RECORDS));

/**
 * Dashboard trend card (Figma RC-Designs 2641:7495): stacked title + description,
 * a strategic-considerations preview, a divider, then a reach row showing how
 * much of the whole report each trend touches ("X of Y HCPs / Institutions /
 * Specialties"). All counts are real — the trend's own reach comes from its
 * backing records via `magnitude`, the totals from the whole-report sample.
 */
function DashboardTrendCard({ trend }: { trend: (typeof TRENDS)[number] }) {
  const mag = magnitude(
    resolveScopeRecords({
      kind: 'trend',
      label: trend.label,
      shorthand: trend.label.replace('Trend ', 'T'),
    }),
  );

  const reach: { Icon: ComponentType<PhosphorIconProps>; value: number; total: number; unit: string }[] = [
    { Icon: FirstAidKit, value: mag.hcps, total: WHOLE_MAGNITUDE.hcps, unit: 'HCPs' },
    { Icon: Hospital, value: mag.institutions, total: WHOLE_MAGNITUDE.institutions, unit: 'Institutions' },
    { Icon: Syringe, value: mag.specialties, total: WHOLE_MAGNITUDE.specialties, unit: 'Specialties' },
  ];

  return (
    <Card
      variant="trend"
      hoverable
      className={styles.trendCard}
      showTitle={false}
      showDescription={false}
      showDivider={false}
      showConsiderations={false}
    >
      <div className={styles.trendCardContent}>
        <div className={styles.trendCardHeader}>
          <h3 className="rc-heading-h5">{trend.title}</h3>
          <p className="rc-body-md">{trend.description}</p>
        </div>

        <section className={styles.trendCardConsiderations} aria-label="Strategic considerations">
          <div className={styles.trendTwoSectionHeader}>
            <TrendUp size={16} weight="regular" aria-hidden />
            <span className="rc-label-lg">Strategic considerations</span>
          </div>
          <ul className={styles.trendTwoConsiderationList}>
            {trend.considerations.slice(0, 2).map((consideration) => (
              <li key={consideration}>
                <Icon name="arrow-elbow-down-right" size={16} tone="secondary" aria-hidden />
                <span className="rc-body-sm">{consideration}</span>
              </li>
            ))}
          </ul>
        </section>

        <Divider />

        <div className={styles.trendCardStats}>
          {reach.map(({ Icon: StatIconCmp, value, total, unit }) => (
            <div key={unit} className={styles.trendCardStat}>
              <span className={styles.trendCardStatIcon} aria-hidden>
                <StatIconCmp size={16} weight="regular" />
              </span>
              <span className={styles.trendCardStatText}>
                <span className="rc-heading-h6">{value}</span>
                <span className={`rc-body-sm ${styles.trendCardStatOf}`}>of {total}</span>
                <span className={`rc-label-md ${styles.trendCardStatUnit}`}>{unit}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function ReportHeader({
  detailLabel,
  onBack,
}: {
  /** Current detail page label, e.g. "Signal 1" or "Trend 1". */
  detailLabel?: string;
  onBack?: () => void;
}) {
  const breadcrumbItems: BreadcrumbTrailItem[] = [
    { id: 'client', label: 'Givinostat / DMD', showDropdown: true, onClick: () => {} },
    {
      id: 'report',
      label: 'MSL Insights – March 2026',
      isCurrent: !detailLabel,
      onClick: detailLabel ? onBack : undefined,
    },
  ];

  if (detailLabel) {
    breadcrumbItems.push({ kind: 'back', id: 'back', label: 'Back to report', onClick: onBack });
    breadcrumbItems.push({ id: 'detail', label: detailLabel, isCurrent: true });
  }

  return (
    <AppHeader
      className={styles.stickyHeader}
      start={
        <div className={styles.headerStart}>
          <Logo className={styles.logo} />
          <Divider orientation="vertical" className={styles.headerDivider} />
          <Breadcrumbs
            className={styles.reportBreadcrumb}
            leading={{ prefix: 'G' }}
            items={breadcrumbItems}
          />
        </div>
      }
      end={
        <div className={styles.headerEnd}>
          <Button
            variant="secondary"
            size="sm"
            iconLeft={<Icon name="copy" size={16} tone="primary" />}
          >
            Copy prompt
          </Button>
          <Button
            variant="primary"
            size="sm"
            iconLeft={<Icon name="download-simple" size={16} tone="on-color" />}
          >
            Download html.
          </Button>
          <Avatar name="Monika Nowak" initials="MN" size="md" className={styles.avatarBlue} />
        </div>
      }
    />
  );
}

export function Dashboard({ onAsk, onOpenSignal, onOpenTrend }: DashboardProps) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroMeta}>
            <Icon name="calendar" size={16} tone="secondary" />
            <span className={`rc-body-sm ${styles.heroMetaMuted}`}>Generated:</span>
            <span className={`rc-body-sm ${styles.heroMetaStrong}`}>9 June 2026, 12:36</span>
          </div>
          <h1 className={styles.heroTitle}>MSL Insights – March 2026</h1>
          <div className={styles.heroMeta}>
            <Icon name="database" size={16} tone="secondary" />
            <span className={`rc-body-sm ${styles.heroMetaMuted}`}>Data source:</span>
            <span className={`rc-label-md ${styles.heroMetaStrong}`}>MSL Records · March 2026</span>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.metricGrid}>
          <RecordsMetricCardView card={DASHBOARD_METRICS.records} />
          <div className={styles.metricColumn}>
            <SegmentMetricCardView card={DASHBOARD_METRICS.hcps} />
            <SegmentMetricCardView card={DASHBOARD_METRICS.institutions} />
          </div>
        </div>

        <section className={styles.projectProofSection} aria-labelledby="project-proof-title">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionFeaturedIcon} aria-hidden>
              <ChartBar size={16} weight="regular" />
            </span>
            <span id="project-proof-title" className={`rc-heading-h7 ${styles.sectionHeaderTitle}`}>
              Where the conversation concentrated
            </span>
            <Divider className={styles.sectionRule} />
          </div>
          <ProjectProof />
        </section>

        <section className={styles.trendsSection} aria-labelledby="key-trends-title">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionFeaturedIcon} aria-hidden>
              <ChartLine size={16} weight="regular" />
            </span>
            <span id="key-trends-title" className={`rc-heading-h7 ${styles.sectionHeaderTitle}`}>
              Key trends
            </span>
            <Divider className={styles.sectionRule} />
          </div>

          <div className={styles.trendList}>
            {TRENDS.map((trend) => (
              <section key={trend.id} id={trend.id} className={styles.trendGroup}>
                <span className={`rc-heading-h7 ${styles.trendLabel}`}>{trend.label}</span>

                <div className={styles.trendContent}>
                  <div
                    className={`${styles.cardWrap} ${styles.trendCardHit}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => onOpenTrend(trend)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        onOpenTrend(trend);
                      }
                    }}
                  >
                    <DashboardTrendCard trend={trend} />
                    <button
                      type="button"
                      className={styles.askSparkle}
                      aria-label={`Ask AI about ${trend.label}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        onAsk({
                          kind: 'trend',
                          label: trend.label,
                          shorthand: trend.label.replace('Trend ', 'T'),
                        });
                      }}
                    >
                      <Icon name="sparkle" size={14} tone="ai" />
                    </button>
                  </div>

                  <div className={styles.signalsSubsection}>
                    <div className={styles.signalsHeader}>
                      <Icon name="arrow-elbow-down-right" size={16} tone="secondary" />
                      <span className={`rc-heading-h8 ${styles.signalsHeaderTitle}`}>Signals</span>
                      <span className={`rc-heading-h8 ${styles.signalsHeaderCount}`}>({trend.signalCount})</span>
                    </div>

                    <div className={styles.signalGrid}>
                      {trend.signals.map((signal) => (
                        <SignalCard
                          key={`${trend.id}-${signal.id}`}
                          signal={signal}
                          onAsk={onAsk}
                          onOpenSignal={onOpenSignal}
                        />
                      ))}
                    </div>

                    {trend.signals.length > 3 ? (
                      <Button variant="secondary" size="sm" className={styles.showAll}>
                        Show all signals
                      </Button>
                    ) : null}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className={styles.allSignalsSection} aria-labelledby="all-signals-title">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionFeaturedIcon} aria-hidden>
              <CellSignalFull size={16} weight="regular" />
            </span>
            <span id="all-signals-title" className={`rc-heading-h7 ${styles.sectionHeaderTitle}`}>
              All signals
            </span>
            <span className={`rc-heading-h7 ${styles.sectionHeaderCount}`}>({SIGNALS.length})</span>
            <Divider className={styles.sectionRule} />
          </div>
          <AllSignalsTable onOpenSignal={onOpenSignal} onOpenTrend={onOpenTrend} />
        </section>
      </main>
    </div>
  );
}
