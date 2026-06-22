import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Badge.module.css';

export type BadgeStyle = 'primary' | 'subtle';
export type BadgeType =
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'purple'
  | 'blue';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeStyle;
  type?: BadgeType;
}

export function Badge({
  variant = 'primary',
  type = 'neutral',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(styles.badge, styles[variant], styles[type], className)} {...props}>
      {children}
    </span>
  );
}
