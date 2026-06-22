import type { InputHTMLAttributes } from 'react';
import { Check, Minus } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';
import styles from './Checkbox.module.css';

export type CheckboxState = 'unchecked' | 'checked' | 'indeterminate';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  showLabel?: boolean;
  checkboxState?: CheckboxState;
}

export function Checkbox({
  label = 'Label',
  showLabel = true,
  checkboxState = 'unchecked',
  disabled,
  className,
  id,
  ...props
}: CheckboxProps) {
  const inputId = id ?? `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <label
      className={cn(styles.root, !showLabel && styles.iconOnly, disabled && styles.disabled, className)}
      htmlFor={inputId}
    >
      <span
        className={cn(
          styles.box,
          checkboxState === 'checked' && styles.checked,
          checkboxState === 'indeterminate' && styles.indeterminate,
        )}
        aria-hidden
      >
        {checkboxState === 'checked' ? <Check weight="bold" /> : null}
        {checkboxState === 'indeterminate' ? <Minus weight="bold" /> : null}
      </span>
      <input
        id={inputId}
        type="checkbox"
        className={styles.input}
        disabled={disabled}
        checked={checkboxState === 'checked'}
        aria-checked={checkboxState === 'indeterminate' ? 'mixed' : checkboxState === 'checked'}
        {...props}
      />
      {showLabel ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
}
