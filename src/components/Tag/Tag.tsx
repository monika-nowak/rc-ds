import type { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Icon } from '../../icons';
import styles from './Tag.module.css';

/** Accent color role for the reference tag. */
export type TagColor = 'purple' | 'blue';

export interface TagProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  /** Accent color — purple (trend/signal) or blue (records). */
  color?: TagColor;
  /** Optional leading icon (rendered at 16px, colored to match the text accent -800). */
  icon?: ReactNode;
  /** When provided, renders a trailing dismiss "×" affordance (accent -800). */
  onRemove?: () => void;
  /** Accessible label for the dismiss affordance. */
  removeLabel?: string;
  /** When provided, the tag becomes interactive (rendered as a <button> with hover). */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Reference tag — the unified answer-source / record chip (Figma 2286:4322).
 * Radius-sm, 4px/8px padding, `rc-label-md` (700 14/18) label. Purple for
 * trends/signals, blue for records. Optional leading icon and dismiss "×".
 * Renders as a <button> (hover + focus-visible) when `onClick` is set, else a
 * <span>. When `onRemove` is set the root is a container with an inner "×"
 * button so the two actions don't nest.
 */
export function Tag({
  color = 'purple',
  icon,
  onRemove,
  removeLabel = 'Remove',
  onClick,
  className,
  children,
  ...props
}: TagProps) {
  const clickable = Boolean(onClick);
  const hasRemove = Boolean(onRemove);

  const body = (
    <>
      {icon != null ? (
        <span className={styles.icon} aria-hidden>
          {icon}
        </span>
      ) : null}
      <span className={styles.label}>{children}</span>
    </>
  );

  // Compound variant: an interactive/removable chip needs a container (the
  // dismiss "×" is its own button and cannot nest inside a button).
  if (hasRemove) {
    return (
      <span
        className={cn(
          'rc-label-md',
          styles.tag,
          styles[color],
          (clickable || hasRemove) && styles.clickable,
          className,
        )}
        {...props}
      >
        {clickable ? (
          <button type="button" className={styles.body} onClick={onClick}>
            {body}
          </button>
        ) : (
          <span className={styles.body}>{body}</span>
        )}
        <button
          type="button"
          className={styles.remove}
          aria-label={removeLabel}
          onClick={() => onRemove?.()}
        >
          <Icon name="x" size={16} tone="inherit" />
        </button>
      </span>
    );
  }

  if (clickable) {
    return (
      <button
        type="button"
        className={cn('rc-label-md', styles.tag, styles[color], styles.clickable, className)}
        onClick={onClick}
        {...(props as HTMLAttributes<HTMLButtonElement>)}
      >
        {body}
      </button>
    );
  }

  return (
    <span className={cn('rc-label-md', styles.tag, styles[color], className)} {...props}>
      {body}
    </span>
  );
}
