import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
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
}

export function Badge({
  appearance = 'emphasis',
  color = 'neutral',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(styles.badge, styles[appearance], styles[color], className)}
      {...props}
    >
      {children}
    </span>
  );
}
