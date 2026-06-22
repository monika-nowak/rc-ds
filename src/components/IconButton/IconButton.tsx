import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';
import styles from './IconButton.module.css';
import type { ButtonSize, ButtonStyle } from '../Button';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonStyle;
  size?: ButtonSize;
  label: string;
  children: ReactNode;
}

export function IconButton({
  variant = 'primary',
  size = 'md',
  label,
  children,
  className,
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      className={cn(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      <span className={styles.icon}>{children}</span>
    </button>
  );
}
