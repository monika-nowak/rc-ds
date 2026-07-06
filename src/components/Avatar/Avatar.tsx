import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Avatar.module.css';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  size?: AvatarSize;
  /** Full name used to derive initials when `initials` is not provided. */
  name?: string;
  /** Explicit initials override. */
  initials?: string;
}

const maxInitials: Record<AvatarSize, number> = {
  sm: 1,
  md: 2,
  lg: 2,
};

const typeClass: Record<AvatarSize, string> = {
  sm: 'rc-label-sm',
  md: 'rc-label-sm',
  lg: 'rc-label-md',
};

function getInitials(name: string, max: number) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '';

  if (max === 1) {
    return parts[0].charAt(0).toUpperCase();
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
}

export function Avatar({
  size = 'sm',
  name,
  initials,
  className,
  ...props
}: AvatarProps) {
  const label = initials ?? (name ? getInitials(name, maxInitials[size]) : '');
  const ariaLabel = name ?? (label ? `Avatar ${label}` : 'Avatar');

  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={cn(styles.avatar, styles[size], typeClass[size], className)}
      {...props}
    >
      {label}
    </span>
  );
}
