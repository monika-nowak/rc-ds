import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './StatusIndicator.module.css';

export type StatusIndicatorVariant =
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'neutral';

export interface StatusIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  variant: StatusIndicatorVariant;
  /** Optional count prefix shown before the label (e.g. 7 in "7 Auto-mapped"). Omit for a label-only status. */
  count?: number;
  label: string;
}

export function StatusIndicator({
  variant,
  count,
  label,
  className,
  ...props
}: StatusIndicatorProps) {
  return (
    <span
      className={cn('rc-label-md', styles.root, styles[variant], className)}
      role="status"
      {...props}
    >
      <span className={styles.dot} aria-hidden />
      <span>{count != null ? `${count} ${label}` : label}</span>
    </span>
  );
}
