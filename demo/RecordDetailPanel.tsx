import { ArrowsOutSimple, Database, Rows } from '@phosphor-icons/react';
import { IconButton } from '../src/components/IconButton';
import { Icon } from '../src/icons';
import type { RecordEntry } from './data';
import styles from './demo.module.css';

interface RecordDetailPanelProps {
  record: RecordEntry;
  /** When opened from the chat, show a back arrow that returns to the conversation. */
  fromChat: boolean;
  onBack: () => void;
  onClose: () => void;
  expanded: boolean;
  onToggleExpanded: () => void;
}

interface MetaRow {
  label: string;
  value: string;
}

export function RecordDetailPanel({
  record,
  fromChat,
  onBack,
  onClose,
  expanded,
  onToggleExpanded,
}: RecordDetailPanelProps) {
  const meta: MetaRow[] = [
    { label: 'Date', value: record.date },
    { label: 'Specialty', value: record.specialty },
    { label: 'Institution type', value: record.institution },
  ].filter((row) => row.value.trim().length > 0);

  return (
    <aside
      className={`${styles.panel} ${expanded ? styles.panelExpanded : ''}`}
      aria-label={`Record ${record.id}`}
    >
      <header
        className={`${styles.recordHeader} ${fromChat ? styles.recordHeaderWithBack : ''}`}
      >
        {fromChat ? (
          <IconButton variant="ghost" size="sm" label="Back to chat" onClick={onBack}>
            <Icon name="caret-left" size={18} tone="primary" />
          </IconButton>
        ) : null}
        <span className={styles.recordFeaturedIcon} aria-hidden>
          <Rows size={20} weight="regular" />
        </span>
        <span className={`rc-heading-h7 ${styles.recordHeaderTitle}`}>Record {record.id}</span>
        <div className={styles.recordHeaderButtons}>
          <IconButton variant="ghost" size="sm" label="Open in data source">
            <Database size={18} weight="regular" />
          </IconButton>
          <IconButton
            variant="ghost"
            size="sm"
            label={expanded ? 'Collapse' : 'Expand'}
            onClick={onToggleExpanded}
          >
            <ArrowsOutSimple size={18} weight="regular" />
          </IconButton>
          <IconButton variant="ghost" size="sm" label="Close" onClick={onClose}>
            <Icon name="x" size={18} tone="primary" />
          </IconButton>
        </div>
      </header>

      <div className={styles.recordBody}>
        <div className={styles.recordVerbatimCard}>
          <p className={`rc-body-md ${styles.recordVerbatim}`}>{record.quote}</p>
        </div>
        <dl className={styles.recordMeta}>
          {meta.map((row) => (
            <div key={row.label} className={styles.recordMetaItem}>
              <dt className={`rc-label-sm ${styles.recordMetaLabel}`}>{row.label}</dt>
              <dd className={`rc-label-md ${styles.recordMetaValue}`}>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
