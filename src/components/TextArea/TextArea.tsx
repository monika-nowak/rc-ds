import { useId, type TextareaHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './TextArea.module.css';

export type TextAreaState = 'default' | 'focus' | 'filled' | 'error' | 'disabled';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  showLabel?: boolean;
  showHelperText?: boolean;
  state?: TextAreaState;
  rows?: number;
}

export function TextArea({
  label,
  helperText,
  showLabel = true,
  showHelperText = true,
  state = 'default',
  rows = 4,
  className,
  id,
  disabled,
  ...props
}: TextAreaProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const visibleLabel = showLabel && label;
  const visibleHelper = showHelperText && helperText;
  const isDisabled = disabled || state === 'disabled';
  const isError = state === 'error';

  return (
    <div className={cn(styles.field, isDisabled && styles.disabled, className)}>
      {visibleLabel ? (
        <label className={cn('rc-label-md', styles.label)} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <textarea
        id={inputId}
        rows={rows}
        disabled={isDisabled}
        className={cn(
          'rc-body-sm',
          styles.textarea,
          state === 'focus' && styles.focus,
          isError && styles.error,
        )}
        {...props}
      />
      {visibleHelper ? (
        <span className={cn('rc-helper-sm', styles.helper, isError && styles.helperError)}>{helperText}</span>
      ) : null}
    </div>
  );
}
