import {
  FirstAidKit,
  Heartbeat,
  Hospital,
  Megaphone,
  Sparkle,
  Syringe,
  TrendUp,
  WifiMedium,
} from '@phosphor-icons/react';
import { useEffect } from 'react';
import type { ComponentType, ReactNode } from 'react';
import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';
import { Badge } from '../src/components/Badge';
import { Card } from '../src/components/Card';
import { Divider } from '../src/components/Divider';
import { Icon } from '../src/icons';
import { evidence, magnitude, resolveScopeRecords } from './analytics';
import {
  RECORDS,
  signalStrength,
  type RecordEntry,
  type Signal,
  type Trend,
} from './data';
import type { ChatScope } from './Dashboard';
import { ProofChart, THEME_BAR_SUBTITLE } from './ProofChart';
import { selectProofPattern } from './proofPatterns';
import styles from './demo.module.css';

type TrendStatIcon = 'wifi-medium' | 'first-aid-kit' | 'hospital' | 'syringe';

const TREND_STAT_ICONS: Record<TrendStatIcon, ComponentType<PhosphorIconProps>> = {
  'wifi-medium': WifiMedium,
  'first-aid-kit': FirstAidKit,
  hospital: Hospital,
  syringe: Syringe,
};

interface TrendStat {
  icon: TrendStatIcon;
  value: string;
  emphasis: string;
  label: string;
}

function TrendStatCard({ stat }: { stat: TrendStat }) {
  const StatIconCmp = TREND_STAT_ICONS[stat.icon];
  return (
    <article className={styles.statCardStandalone}>
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
    </article>
  );
}

function SectionHeader({
  icon,
  title,
  boxed = false,
  trailing,
}: {
  icon?: ReactNode;
  title: string;
  boxed?: boolean;
  trailing?: ReactNode;
}) {
  return (
    <div className={styles.signalSectionHead}>
      {icon ? (
        boxed ? (
          <span className={styles.featuredIcon}>{icon}</span>
        ) : (
          <span className={styles.signalSectionIcon}>{icon}</span>
        )
      ) : null}
      <span className={`rc-heading-h7 ${styles.signalSectionTitle}`}>{title}</span>
      {trailing}
      <Divider className={styles.signalSectionRule} />
    </div>
  );
}

/** Spread real trend record ids across consideration cards for the Figma badge row. */
function chunkRecordIds(ids: number[], buckets: number): number[][] {
  if (buckets <= 0) return [];
  const out = Array.from({ length: buckets }, () => [] as number[]);
  ids.forEach((id, index) => {
    out[index % buckets].push(id);
  });
  return out;
}

function TrendSignalCard({
  signal,
  onOpenSignal,
}: {
  signal: Signal;
  onOpenSignal: (signal: Signal) => void;
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
              {signal.category}
            </Badge>
          </div>
        }
      />
    </div>
  );
}

export function TrendDetail({
  trend,
  onOpenRecord,
  onOpenSignal,
}: {
  trend: Trend;
  onOpenRecord: (record: RecordEntry) => void;
  onOpenSignal: (signal: Signal) => void;
}) {
  const proofScope: ChatScope = {
    kind: 'trend',
    label: trend.label,
    shorthand: trend.label.replace('Trend ', 'T'),
  };
  const scopeRecords = resolveScopeRecords(proofScope);
  const mag = magnitude(scopeRecords);
  const proofPattern = selectProofPattern(proofScope);
  const proof = evidence(scopeRecords, 1)[0] ?? scopeRecords[0];

  const stats: TrendStat[] = [
    {
      icon: 'wifi-medium',
      value: String(trend.signalCount),
      emphasis: 'signals',
      label: 'in this trend',
    },
    {
      icon: 'first-aid-kit',
      value: String(mag.hcps),
      emphasis: 'HCPs',
      label: 'contributing',
    },
    {
      icon: 'hospital',
      value: String(mag.institutions),
      emphasis: 'institutions',
      label: 'represented',
    },
    {
      icon: 'syringe',
      value: String(mag.specialties),
      emphasis: 'specialties',
      label: 'represented',
    },
  ];

  const leadSignals = trend.signals.filter((signal) => signal.role === 'Lead Signal');
  const supportingSignals = trend.signals.filter((signal) => signal.role !== 'Lead Signal');

  const uniqueRecIds = Array.from(new Set(trend.signals.flatMap((signal) => signal.recs))).filter(
    (id) => RECORDS[id],
  );
  const considerationRecordChunks = chunkRecordIds(uniqueRecIds, trend.considerations.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [trend.id]);

  return (
    <div className={styles.signalPage}>
      <section className={`${styles.signalHero} ${styles.trendHero}`}>
        <div className={`${styles.heroContent} ${styles.trendHeroContent}`}>
          <span className={`rc-heading-h6 ${styles.signalKicker}`}>{trend.label}</span>
          <h1 className={styles.signalTitle}>{trend.title}</h1>
        </div>
      </section>

      {/* Single centred content column — trend details have no scoring sidebar. */}
      <div className={`${styles.signalMain} ${styles.trendMain}`}>
        <div className={styles.signalContent}>
          <div className={styles.signalStatGrid}>
            {stats.map((stat) => (
              <TrendStatCard key={stat.emphasis} stat={stat} />
            ))}
          </div>

          <div className={styles.sectionRow}>
            <section className={styles.signalSection}>
              <SectionHeader
                icon={<FirstAidKit size={20} weight="regular" />}
                title="What HCPs Report"
              />
              <p className={`rc-body-md ${styles.sectionBody}`}>{trend.report}</p>
            </section>

            <section className={styles.signalSection}>
              <SectionHeader
                icon={<Sparkle size={20} weight="regular" />}
                title="What This Suggests"
              />
              <p className={`rc-body-md ${styles.sectionBody}`}>{trend.description}</p>
            </section>
          </div>

          <section className={styles.signalSection}>
            <SectionHeader
              icon={<Heartbeat size={20} weight="regular" />}
              title="So What – Strategic Relevance"
            />
            <div className={styles.relevanceList}>
              {trend.relevance.map((point, i) => (
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
                icon={<TrendUp size={16} weight="regular" />}
                title="Trend proofs"
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
              <div className={styles.proofCard}>
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

          <section className={styles.signalSection}>
            <SectionHeader
              icon={<Megaphone size={20} weight="regular" />}
              title="Strategic considerations"
            />
            <div className={styles.considerationGrid}>
              {trend.considerations.map((text, index) => (
                <article key={index} className={styles.considerationCard}>
                  <p className={`rc-body-sm ${styles.considerationText}`}>{text}</p>
                  {considerationRecordChunks[index]?.length ? (
                    <div className={styles.considerationRefs}>
                      {considerationRecordChunks[index].slice(0, 5).map((id) => (
                        <button
                          key={id}
                          type="button"
                          className={styles.recordRefButton}
                          onClick={() => onOpenRecord(RECORDS[id])}
                        >
                          <Badge appearance="subtle" color="neutral">
                            R–{id}
                          </Badge>
                        </button>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          {leadSignals.length > 0 ? (
            <section className={styles.signalSection}>
              <SectionHeader
                title="Lead signals"
                trailing={<Icon name="question" size={16} tone="tertiary" />}
              />
              <div className={styles.signalGrid}>
                {leadSignals.map((signal) => (
                  <TrendSignalCard
                    key={signal.id}
                    signal={signal}
                    onOpenSignal={onOpenSignal}
                  />
                ))}
              </div>
            </section>
          ) : null}

          {supportingSignals.length > 0 ? (
            <section className={styles.signalSection}>
              <SectionHeader
                title="Supporting signals"
                trailing={<Icon name="question" size={16} tone="tertiary" />}
              />
              <div className={styles.signalGrid}>
                {supportingSignals.map((signal) => (
                  <TrendSignalCard
                    key={signal.id}
                    signal={signal}
                    onOpenSignal={onOpenSignal}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
