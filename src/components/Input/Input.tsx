import { useId, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Badge } from '../Badge';
import { IconButton } from '../IconButton';
import { Icon } from '../../icons';
import styles from './Input.module.css';

export type InputState = 'default' | 'focus' | 'filled' | 'error' | 'disabled';
export type InputVariant = 'default' | 'ai';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  /** Default field or AI-assisted field styling and chrome. */
  variant?: InputVariant;
  /** Show the label row. Matches Figma `Label` boolean property. */
  showLabel?: boolean;
  /** Show helper text below the field. Matches Figma `Helper Text` boolean property. */
  showHelperText?: boolean;
  /** AI badge beside the label. Only applies when `variant="ai"`. */
  showAiBadge?: boolean;
  aiBadgeText?: string;
  /** Compact AI action trigger beside the label. Only applies when `variant="ai"`. */
  showAiAction?: boolean;
  aiActionLabel?: string;
  onAiAction?: () => void;
  /** Trailing `IconButton` (or other control) beside the field with a 4px gap. */
  trailingAction?: ReactNode;
  state?: InputState;
}

export function Input({
  label,
  helperText,
  variant = 'default',
  showLabel = true,
  showHelperText = true,
  showAiBadge = false,
  aiBadgeText = 'AI generated',
  showAiAction = false,
  aiActionLabel = 'Ask AI to redraft',
  onAiAction,
  trailingAction,
  state = 'default',
  className,
  id,
  disabled,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const isAi = variant === 'ai';
  const visibleLabel = showLabel && label;
  const visibleHelper = showHelperText && helperText;
  const isDisabled = disabled || state === 'disabled';
  const isError = state === 'error';
  const showAiChrome = isAi && visibleLabel;
  const showTrailing = trailingAction != null;

  const inputElement = (
    <input
      id={inputId}
      disabled={isDisabled}
      className={cn(
        'rc-body-sm',
        styles.input,
        showTrailing && styles.inputInRow,
        isAi && styles.ai,
        state === 'focus' && styles.focus,
        isError && styles.error,
      )}
      {...props}
    />
  );

  return (
    <div className={cn(styles.field, isDisabled && styles.disabled, className)}>
      {showAiChrome ? (
        <div className={styles.labelRow}>
          <div className={styles.labelGroup}>
            <label className={cn('rc-label-md', styles.label)} htmlFor={inputId}>
              {label}
            </label>
            {showAiBadge ? (
              <Badge appearance="subtle" color="purple">
                {aiBadgeText}
              </Badge>
            ) : null}
          </div>
          {showAiAction ? (
            <IconButton
              type="button"
              variant="aiGhost"
              size="badge"
              label={aiActionLabel}
              disabled={isDisabled}
              onClick={onAiAction}
              className={styles.aiAction}
            >
              <Icon name="sparkle" size={12} tone="ai" />
            </IconButton>
          ) : null}
        </div>
      ) : visibleLabel ? (
        <label className={cn('rc-label-md', styles.label)} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      {showTrailing ? (
        <div className={styles.inputRow}>
          {inputElement}
          {trailingAction}
        </div>
      ) : (
        inputElement
      )}
      {visibleHelper ? (
        <span className={cn('rc-helper-sm', styles.helper, isError && styles.helperError)}>{helperText}</span>
      ) : null}
    </div>
  );
}
