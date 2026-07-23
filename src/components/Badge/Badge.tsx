import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Icon, type CuratedIconName, type IconTone } from '../../icons';
import { Spinner } from '../Spinner';
import styles from './Badge.module.css';

/** Visual weight — emphasis (strong tint) or subtle (light tint). */
export type BadgeAppearance = 'emphasis' | 'subtle';

/** Layout density — default label badge or fixed-width shorthand code. */
export type BadgeSize = 'default' | 'compact';

/** Semantic color role aligned with RC token groups. */
export type BadgeColor =
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
  | 'orange'
  | 'info'
  | 'blue'
  | 'purple'
  | 'lightPurple';

function defaultIconTone(appearance: BadgeAppearance, color: BadgeColor): IconTone {
  // Subtle badges: the icon matches the badge text color (accent -800), per Figma DS.
  // `inherit` resolves to the badge's `color` (currentColor) set by the subtle color classes.
  if (appearance === 'subtle') return 'inherit';
  const darkTextEmphasis: BadgeColor[] = ['success', 'warning', 'error', 'orange', 'lightPurple'];
  if (appearance === 'emphasis' && !darkTextEmphasis.includes(color)) {
    return 'on-color';
  }
  if (color === 'purple' || color === 'lightPurple') return 'ai';
  if (color === 'success') return 'success';
  if (color === 'warning') return 'warning';
  if (color === 'error') return 'error';
  if (color === 'orange') return 'orange';
  if (color === 'info' || color === 'blue') return 'info';
  return 'primary';
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  appearance?: BadgeAppearance;
  color?: BadgeColor;
  size?: BadgeSize;
  /** Curated icon on the left — swap via icon name when not loading. */
  icon?: CuratedIconName;
  /** Icon tone; defaults from badge appearance and color. */
  iconTone?: IconTone;
  /** Custom leading icon — overrides `icon` when provided. */
  iconLeft?: ReactNode;
  /** Show a compact dot-grid spinner on the left (e.g. generating state). */
  loading?: boolean;
}

export function Badge({
  appearance = 'emphasis',
  color = 'neutral',
  size = 'default',
  icon,
  iconTone,
  iconLeft,
  loading = false,
  className,
  children,
  ...props
}: BadgeProps) {
  const resolvedIconLeft =
    iconLeft ??
    (icon ? (
      <Icon
        name={icon}
        size={12}
        tone={iconTone ?? defaultIconTone(appearance, color)}
        aria-hidden
      />
    ) : undefined);

  const leading = loading ? (
    <Spinner size="xs" label="Loading" />
  ) : (
    resolvedIconLeft
  );
  const hasLeading = leading != null;

  return (
    <span
      className={cn(
        'rc-label-sm',
        styles.badge,
        styles[appearance],
        styles[color],
        size === 'compact' && styles.compact,
        hasLeading && styles.withIcon,
        className,
      )}
      aria-busy={loading || undefined}
      {...props}
    >
      {hasLeading ? <span className={styles.icon}>{leading}</span> : null}
      <span>{children}</span>
    </span>
  );
}
