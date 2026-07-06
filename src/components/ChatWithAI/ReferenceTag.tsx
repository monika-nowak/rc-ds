import type { MouseEvent } from 'react';
import { Icon } from '../../icons';
import { IconButton } from '../IconButton';
import { cn } from '../../lib/cn';
import type { Reference } from './ChatWithAI';
import styles from './ChatWithAI.module.css';

export interface ReferenceTagProps {
  reference: Reference;
  onRemove: () => void;
  disabled?: boolean;
  className?: string;
}

export function ReferenceTag({
  reference,
  onRemove,
  disabled = false,
  className,
}: ReferenceTagProps) {
  const handleRemove = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onRemove();
  };

  return (
    <span className={cn(styles.referenceTag, className)}>
      <Icon name="cell-signal-full" size={16} tone="ai" aria-hidden />
      <span className={cn('rc-label-sm', styles.referenceTagLabel)}>{reference.label}</span>
      <IconButton
        type="button"
        variant="aiGhost"
        size="badge"
        label={`Remove ${reference.label}`}
        disabled={disabled}
        className={styles.referenceTagRemove}
        onMouseDown={(event) => event.stopPropagation()}
        onClick={handleRemove}
      >
        <Icon name="x" size={12} tone="ai" />
      </IconButton>
    </span>
  );
}
