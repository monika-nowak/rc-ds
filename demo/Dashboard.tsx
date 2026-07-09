import { Database, FirstAidKit, Hospital, Tag, TrendUp } from '@phosphor-icons/react';
import type { ComponentType } from 'react';
import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';
import { AppHeader } from '../src/components/AppHeader';
import { Avatar } from '../src/components/Avatar';
import { Badge } from '../src/components/Badge';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';
import { Divider } from '../src/components/Divider';
import { IconButton } from '../src/components/IconButton';
import { Logo } from '../src/components/Logo';
import { Icon } from '../src/icons';
import {
  NOTABLE_SIGNALS,
  STATS,
  TRENDS,
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
}

function StatCard({ stat }: { stat: (typeof STATS)[number] }) {
  const StatIconCmp = STAT_ICONS[stat.icon];
  return (
    <Card
      variant="dataSource"
      elevated={false}
      showStats={false}
      showDescription={false}
      className={styles.statCard}
      style={{ padding: 'var(--rc-spacing-6)' }}
    >
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

export function ReportHeader({
  signalLabel,
  onBack,
}: {
  signalLabel?: string;
  onBack?: () => void;
}) {
  return (
    <AppHeader
      className={styles.stickyHeader}
      start={
        <div className={styles.headerStart}>
          <Logo className={styles.logo} />
          <Divider orientation="vertical" className={styles.headerDivider} />
          <span className={styles.clientBadge}>G</span>
          <span className={styles.clientName}>Givinostat / DMD</span>
          <span className={styles.slash}>/</span>
          <span className={`rc-label-md ${styles.reportTitle}`}>MSL Insights – March 2026</span>
          {signalLabel ? (
            <>
              <span className={styles.slash}>/</span>
              <IconButton variant="ghost" size="sm" label="Back to report" onClick={onBack}>
                <Icon name="arrow-left" size={16} tone="primary" />
              </IconButton>
              <span className={`rc-label-md ${styles.reportTitle}`}>{signalLabel}</span>
            </>
          ) : null}
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

export function Dashboard({ onAsk, onOpenSignal }: DashboardProps) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
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
      </section>

      <main className={styles.main}>
        <div className={styles.signalGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}>
          {STATS.map((stat, index) => (
            <StatCard key={`${stat.emphasis}-${index}`} stat={stat} />
          ))}
        </div>

        <div className={styles.trendGroup}>
          <div className={styles.sectionHeader}>
            <TrendUp size={20} weight="regular" color="var(--rc-text-primary)" />
            <span className={`rc-heading-h8 ${styles.sectionHeaderTitle}`}>Key trends</span>
            <Divider className={styles.sectionRule} />
          </div>

          {TRENDS.map((trend) => (
            <div key={trend.id} className={styles.trendGroup}>
              <span className={`rc-heading-h7 ${styles.trendLabel}`}>{trend.label}</span>

              <div className={styles.cardWrap}>
                <Card
                  variant="trend"
                  hoverable
                  title={trend.title}
                  description={trend.description}
                  considerationsLabel="Strategic considerations"
                  considerations={trend.considerations.slice(0, 2)}
                />
                <button
                  type="button"
                  className={styles.askSparkle}
                  aria-label={`Ask AI about ${trend.label}`}
                  onClick={() => onAsk({ kind: 'trend', label: trend.label, shorthand: trend.label.replace('Trend ', 'T') })}
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
          ))}
        </div>

        <div className={styles.notableGroup}>
          <div className={styles.sectionHeader}>
            <span className={`rc-heading-h7 ${styles.sectionHeaderTitle}`}>Notable signals</span>
            <Icon name="info" size={20} tone="tertiary" />
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
        </div>
      </main>
    </div>
  );
}
