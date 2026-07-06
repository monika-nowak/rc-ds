import { useEffect, useId, useRef, type InputHTMLAttributes } from 'react';
import { Check, Minus } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  showLabel?: boolean;
  indeterminate?: boolean;
}

export function Checkbox({
  label = 'Label',
  showLabel = true,
  disabled,
  className,
  id,
  indeterminate = false,
  ...props
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const generatedId = useId();
  const inputId = id ?? generatedId;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      className={cn(styles.root, !showLabel && styles.iconOnly, disabled && styles.disabled, className)}
    >
      <input
        ref={inputRef}
        id={inputId}
        type="checkbox"
        className={styles.input}
        disabled={disabled}
        {...props}
      />
      <span className={styles.box} aria-hidden>
        <Check className={styles.checkIcon} weight="bold" />
        <Minus className={styles.minusIcon} weight="bold" />
      </span>
      {showLabel ? <span className={cn('rc-body-sm', styles.label)}>{label}</span> : null}
    </label>
  );
}
