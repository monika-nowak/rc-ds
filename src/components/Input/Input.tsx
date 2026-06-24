import { useId, type InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Input.module.css';

export type InputState = 'default' | 'focus' | 'filled' | 'error' | 'disabled';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  /** Show the label row. Matches Figma `Label` boolean property. */
  showLabel?: boolean;
  /** Show helper text below the field. Matches Figma `Helper Text` boolean property. */
  showHelperText?: boolean;
  state?: InputState;
}

export function Input({
  label,
  helperText,
  showLabel = true,
  showHelperText = true,
  state = 'default',
  className,
  id,
  disabled,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const visibleLabel = showLabel && label;
  const visibleHelper = showHelperText && helperText;
  const isDisabled = disabled || state === 'disabled';
  const isError = state === 'error';

  return (
    <div className={cn(styles.field, isDisabled && styles.disabled, className)}>
      {visibleLabel ? (
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
      {visibleHelper ? (
        <span className={cn(styles.helper, isError && styles.helperError)}>{helperText}</span>
      ) : null}
    </div>
  );
}
