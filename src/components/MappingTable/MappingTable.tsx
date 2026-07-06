import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import styles from './MappingTable.module.css';

export interface MappingTableProps {
  /** Label above the source column. */
  sourceColumnLabel?: string;
  /** Label above the target select column. */
  targetColumnLabel?: string;
  /** Show the column header row. */
  showColumnHeaders?: boolean;
  /**
   * Any number of `MappingRow` children — render one per source column from the uploaded file.
   * Map over your column list in the parent and pass `state="mapped"` when a target is selected.
   */
  children: ReactNode;
  className?: string;
}

export function MappingTable({
  sourceColumnLabel = 'Field from file',
  targetColumnLabel = 'Map to field',
  showColumnHeaders = true,
  children,
  className,
}: MappingTableProps) {
  return (
    <div className={cn(styles.root, className)}>
      {showColumnHeaders ? (
        <div className={styles.header} role="row">
          <span className={cn('rc-label-md', styles.columnLabel)}>{sourceColumnLabel}</span>
          <span className={styles.connectorSpacer} aria-hidden />
          <span className={cn('rc-label-md', styles.columnLabel)}>{targetColumnLabel}</span>
        </div>
      ) : null}
      <div className={styles.rows}>{children}</div>
    </div>
  );
}
