import type { MouseEvent } from 'react';
import { CellSignalFull, ChartLine } from '@phosphor-icons/react';
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

  // Type-specific leading glyph (Figma 2261:7448): trend → chart-line,
  // signal → cell-signal-full. Uses currentColor (the tag's AI-purple text).
  const Glyph = reference.kind === 'trend' ? ChartLine : CellSignalFull;

  return (
    <span className={cn(styles.referenceTag, className)}>
      <Glyph size={16} weight="regular" className={styles.referenceTagGlyph} aria-hidden />
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
