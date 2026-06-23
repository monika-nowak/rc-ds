import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';
import { cn } from '../lib/cn';
import { getPhosphorIcon } from './phosphor';
import styles from './Icon.module.css';

export interface IconProps {
  /**
   * Icon name in kebab-case (Phosphor Regular).
   * The DS ships 116 curated names via `<Icon />`.
   * For any other icon from the 1512-icon library, import directly from `@phosphor-icons/react`.
   */
  name: string;
  size?: number;
  weight?: PhosphorIconProps['weight'];
  className?: string;
  color?: string;
  'aria-label'?: string;
}

export function Icon({
  name,
  size = 24,
  weight = 'regular',
  className,
  color,
  'aria-label': ariaLabel,
}: IconProps) {
  const Component = getPhosphorIcon(name);
  if (!Component) return null;

  return (
    <span className={cn(styles.icon, className)} style={color ? { color } : undefined}>
      <Component
        size={size}
        weight={weight}
        aria-hidden={ariaLabel ? undefined : true}
        aria-label={ariaLabel}
      />
    </span>
  );
}
