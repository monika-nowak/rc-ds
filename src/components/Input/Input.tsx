import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Input.module.css';

export type InputState = 'default' | 'focus' | 'filled' | 'error' | 'disabled';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  state?: InputState;
}

export function Input({
  label,
  helperText,
  state = 'default',
  className,
  id,
  disabled,
  ...props
}: InputProps) {
  const inputId = id ?? (label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const isDisabled = disabled || state === 'disabled';
  const isError = state === 'error';

  return (
    <div className={cn(styles.field, isDisabled && styles.disabled, className)}>
      {label ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        disabled={isDisabled}
        className={cn(styles.input, state === 'focus' && styles.focus, isError && styles.error)}
        {...props}
      />
      {helperText ? (
        <span className={cn(styles.helper, isError && styles.helperError)}>{helperText}</span>
      ) : null}
    </div>
  );
}
