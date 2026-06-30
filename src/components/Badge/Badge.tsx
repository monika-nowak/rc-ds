import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Spinner } from '../Spinner';
import styles from './Badge.module.css';

/** Visual weight — emphasis (strong tint) or subtle (light tint). */
export type BadgeAppearance = 'emphasis' | 'subtle';

/** Semantic color role aligned with RC token groups. */
export type BadgeColor =
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'purple'
  | 'lightPurple';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  appearance?: BadgeAppearance;
  color?: BadgeColor;
  /** Optional leading icon — omit or leave unset to hide. */
  iconLeft?: ReactNode;
  /** Show a compact dot-grid spinner on the left (e.g. generating state). */
  loading?: boolean;
}

export function Badge({
  appearance = 'emphasis',
  color = 'neutral',
  iconLeft,
  loading = false,
  className,
  children,
  ...props
}: BadgeProps) {
  const leading = loading ? (
    <Spinner size="xs" label="Loading" />
  ) : (
    iconLeft
  );
  const hasLeading = leading != null;

  return (
    <span
      className={cn(
        styles.badge,
        styles[appearance],
        styles[color],
        hasLeading && styles.withIcon,
        className,
      )}
      aria-busy={loading || undefined}
      {...props}
    >
      {hasLeading ? <span className={styles.icon}>{leading}</span> : null}
      <span className={styles.label}>{children}</span>
    </span>
  );
}
