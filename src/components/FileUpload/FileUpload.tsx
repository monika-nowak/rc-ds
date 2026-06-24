import { FileX, SquareSplitHorizontal, SquareSplitVertical } from '@phosphor-icons/react';
import { Button } from '../Button';
import { cn } from '../../lib/cn';
import styles from './FileUpload.module.css';

export interface FileUploadProps {
  className?: string;
  fileName: string;
  fileSize: string;
  replaceLabel?: string;
  onReplace?: () => void;
  columnsFound?: number;
  rowsFound?: number;
  /** When false, hides the columns/rows metadata row. Defaults to true when counts are provided. */
  showMetadata?: boolean;
}

function formatCount(value: number) {
  return new Intl.NumberFormat('en-US').format(value);
}

function MetadataStat({
  icon,
  label,
  value,
}: {
  icon: 'columns' | 'rows';
  label: string;
  value: number;
}) {
  const Icon = icon === 'columns' ? SquareSplitHorizontal : SquareSplitVertical;

  return (
    <div className={styles.stat}>
      <div className={styles.statLabelGroup}>
        <span className={styles.statIcon} aria-hidden>
          <Icon size={16} weight="regular" />
        </span>
        <span className={styles.statLabel}>{label}</span>
      </div>
      <span className={styles.statValue}>{formatCount(value)}</span>
    </div>
  );
}

export function FileUpload({
  className,
  fileName,
  fileSize,
  replaceLabel = 'Replace file',
  onReplace,
  columnsFound,
  rowsFound,
  showMetadata,
}: FileUploadProps) {
  const hasMetadata =
    showMetadata !== false && (columnsFound !== undefined || rowsFound !== undefined);

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.fileRow}>
        <div className={styles.iconPanel}>
          <FileX size={24} weight="regular" aria-hidden />
        </div>

        <div className={styles.content}>
          <span className={styles.fileName}>{fileName}</span>
          <span className={styles.fileSize}>{fileSize}</span>
        </div>

        {onReplace ? (
          <div className={styles.actions}>
            <Button variant="ghost" size="md" className={styles.replaceButton} onClick={onReplace}>
              {replaceLabel}
            </Button>
          </div>
        ) : null}
      </div>

      {hasMetadata ? (
        <div className={styles.stats}>
          {columnsFound !== undefined ? (
            <MetadataStat icon="columns" label="columns found:" value={columnsFound} />
          ) : null}
          {rowsFound !== undefined ? (
            <MetadataStat icon="rows" label="rows found:" value={rowsFound} />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
