import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';
import styles from './Button.module.css';

export type ButtonStyle =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'danger'
  | 'ai'
  | 'aiSecondary'
  | 'aiTertiary'
  | 'aiGhost';
export type ButtonSize = 'badge' | 'xs' | 'sm' | 'md' | 'lg';

const labelTypeClass: Record<ButtonSize, string> = {
  badge: 'rc-label-sm',
  xs: 'rc-label-sm',
  sm: 'rc-label-sm',
  md: 'rc-label-md',
  lg: 'rc-label-lg',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonStyle;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {iconLeft ? <span className={styles.icon}>{iconLeft}</span> : null}
      <span className={labelTypeClass[size]}>{children}</span>
      {iconRight ? <span className={styles.icon}>{iconRight}</span> : null}
    </button>
  );
}
