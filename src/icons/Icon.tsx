import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';
import { cn } from '../lib/cn';
import { getPhosphorIcon } from './phosphor';
import styles from './Icon.module.css';

export type IconTone =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'warning'
  | 'success'
  | 'orange'
  | 'info'
  | 'ai'
  /** Icon colored to match accent TEXT (-800) on subtle accent surfaces. */
  | 'accentPurple'
  | 'accentBlue'
  | 'accentOrange'
  | 'inverse'
  | 'disabled'
  | 'on-color'
  /** Inherit the surrounding text color (e.g. subtle badges: icon matches -800 text). */
  | 'inherit';

export interface IconProps {
  /**
   * Icon name in kebab-case (Phosphor Regular).
   * The DS ships 116 curated names via `<Icon />`.
   * For any other icon from the 1512-icon library, import directly from `@phosphor-icons/react`.
   */
  name: string;
  size?: number;
  weight?: PhosphorIconProps['weight'];
  tone?: IconTone;
  className?: string;
  color?: string;
  'aria-label'?: string;
}

export function Icon({
  name,
  size = 24,
  weight = 'regular',
  tone = 'primary',
  className,
  color,
  'aria-label': ariaLabel,
}: IconProps) {
  const Component = getPhosphorIcon(name);
  if (!Component) return null;

  return (
    <span
      className={cn(styles.icon, styles[tone], className)}
      style={color ? { color } : undefined}
    >
      <Component
        size={size}
        weight={weight}
        aria-hidden={ariaLabel ? undefined : true}
        aria-label={ariaLabel}
      />
    </span>
  );
}
