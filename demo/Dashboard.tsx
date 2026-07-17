import {
  ChartBar,
  CellSignalFull,
  ChartBarHorizontal,
  ChartLine,
  Database,
  FirstAidKit,
  Hospital,
  Tag,
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
import { ProjectProof } from './ProjectProof';
import { ProofChart } from './ProofChart';
import {
  NOTABLE_SIGNALS,
  STATS,
  TRENDS,
  formatThemeLabel,
  signalStrength,
  type Signal,
  type StatIcon,
} from './data';
import styles from './demo.module.css';

/** Stat-card icons — sourced directly from Phosphor to match the Figma design. */
const STAT_ICONS: Record<StatIcon, ComponentType<PhosphorIconProps>> = {
  database: Database,
  'first-aid-kit': FirstAidKit,
  hospital: Hospital,
  tag: Tag,
};

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

function StatCard({ stat }: { stat: (typeof STATS)[number] }) {
  const StatIconCmp = STAT_ICONS[stat.icon];
  return (
    <Card
      variant="dataSource"
      elevated={false}
      showStats={false}
      showDescription={false}
      style={{ padding: 'var(--rc-spacing-6)' }}
    >
      <div className={styles.statMeasure}>
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
      </div>
    </Card>
  );
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
        strengthLabel={signalStrength(Number.parseFloat(signal.strengthLabel)).label}
        leadLabel={signal.leadLabel}
        title={signal.title}
        description={signal.description}
        stats={[
          { value: signal.records, label: 'Records' },
          { value: signal.hcps, label: 'HCPs' },
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

function TrendTwoCard({ trend }: { trend: (typeof TRENDS)[number] }) {
  const themes = trend.themeBreakdown ?? [];
  const maxThemeRecords = Math.max(1, ...themes.map((theme) => theme.records));

  return (
    <Card
      variant="trend"
      hoverable
      className={styles.trendTwoCard}
      showTitle={false}
      showDescription={false}
      showDivider={false}
      showConsiderations={false}
    >
      <div className={styles.trendTwoContent}>
        <div className={styles.trendTwoHeader}>
          <h3 className="rc-heading-h5">{trend.title}</h3>
          <p className="rc-body-md">{trend.description}</p>
        </div>
        <Divider />

        <div className={styles.trendTwoColumns}>
          <section className={styles.trendTwoThemes} aria-label="Which themes carry this trend">
            <div className={styles.trendTwoSectionHeader}>
              <ChartBarHorizontal size={16} weight="regular" aria-hidden />
              <span className="rc-label-lg">Which themes carry this trend</span>
            </div>
            <div className={styles.trendTwoThemeBody}>
              <p className={`rc-label-md ${styles.trendTwoSubhead}`}>Records per theme</p>
              <div className={styles.trendTwoThemeRows}>
                {themes.map((theme) => (
                  <div key={theme.label} className={styles.trendTwoThemeRow}>
                    <span className={`rc-body-sm ${styles.trendTwoThemeLabel}`}>
                      {formatThemeLabel(theme.label)}
                    </span>
                    <div className={styles.trendTwoThemeValue}>
                      <span className={styles.trendTwoThemeTrack}>
                        <span
                          className={styles.trendTwoThemeBar}
                          style={{ width: `${(theme.records / maxThemeRecords) * 100}%` }}
                        />
                      </span>
                      <span className="rc-label-md">{theme.records}</span>
                    </div>
                  </div>
                ))}
              </div>
              {trend.themeCoverageNote ? (
                <div className={styles.trendTwoCoverage}>
                  <Icon name="info" size={16} tone="tertiary" aria-hidden />
                  <span className="rc-body-xs">{trend.themeCoverageNote}</span>
                </div>
              ) : null}
            </div>
          </section>

          <Divider orientation="vertical" className={styles.trendTwoDivider} />

          <section className={styles.trendTwoConsiderations} aria-label="Strategic considerations">
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
        <div className={styles.signalGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}>
          {STATS.map((stat, index) => (
            <StatCard key={`${stat.emphasis}-${index}`} stat={stat} />
          ))}
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
                    {trend.id === 'trend-2' ? (
                      <TrendTwoCard trend={trend} />
                    ) : (
                      <Card
                        variant="trend"
                        hoverable
                        title={trend.title}
                        description={trend.description}
                        considerationsLabel="Strategic considerations"
                        considerations={trend.considerations.slice(0, 2)}
                        extraContent={
                          <ProofChart
                            type="A3"
                            scope={{
                              kind: 'trend',
                              label: trend.label,
                              shorthand: trend.label.replace('Trend ', 'T'),
                            }}
                            embedded
                          />
                        }
                      />
                    )}
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
              </section>
            ))}
          </div>
        </section>

        <section className={styles.notableGroup} aria-labelledby="notable-signals-title">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionFeaturedIcon} aria-hidden>
              <CellSignalFull size={16} weight="regular" />
            </span>
            <span className={styles.sectionHeaderTitleWithInfo}>
              <span id="notable-signals-title" className={`rc-heading-h7 ${styles.sectionHeaderTitle}`}>
                Notable signals
              </span>
              <Icon name="question" size={16} tone="tertiary" aria-label="About notable signals" />
            </span>
            <Divider className={styles.sectionRule} />
          </div>
          <div className={styles.signalGrid}>
            {NOTABLE_SIGNALS.map((signal) => (
              <SignalCard
                key={signal.id}
                signal={signal}
                onAsk={onAsk}
                onOpenSignal={onOpenSignal}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
