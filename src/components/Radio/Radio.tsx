import { useId, type InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  showLabel?: boolean;
}

export function Radio({
  label = 'Label',
  showLabel = true,
  disabled,
  className,
  id,
  ...props
}: RadioProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label
      className={cn(styles.root, !showLabel && styles.iconOnly, disabled && styles.disabled, className)}
    >
      <input
        id={inputId}
        type="radio"
        className={styles.input}
        disabled={disabled}
        {...props}
      />
      <span className={styles.circle} aria-hidden>
        <span className={styles.dot} />
      </span>
      {showLabel ? <span className={cn('rc-body-sm', styles.label)}>{label}</span> : null}
    </label>
  );
}
