import type { CSSProperties } from 'react';
import { cn } from '../../lib/cn';
import styles from './Spinner.module.css';

/**
 * Spinner — compact 3×3 dot grid loader (Figma DS Spinner, Sm/Lg).
 *
 * A soft opacity wave radiates from the center dot — similar to inline loaders
 * in Cursor. Use `xs` (12px) inside Badge; `sm` (18px) inline; `lg` (46px) standalone.
 */
export type SpinnerSize = 'xs' | 'sm' | 'lg';

const SIZE_CONFIG: Record<SpinnerSize, { size: number; dot: number; gap: number }> = {
  xs: { size: 12, dot: 2.5, gap: 2 },
  sm: { size: 18, dot: 4, gap: 3 },
  lg: { size: 46, dot: 10, gap: 8 },
};

/** Center-out wave order for staggered dot animation. */
const WAVE_ORDER = [4, 1, 3, 5, 7, 0, 2, 6, 8] as const;

export interface SpinnerProps {
  size?: SpinnerSize;
  /** Full loop duration in ms. Default: 1200. */
  speed?: number;
  /** Accessible label. Default: "Loading". */
  label?: string;
  className?: string;
  style?: CSSProperties;
}

export function Spinner({
  size = 'sm',
  speed = 1200,
  label = 'Loading',
  className,
  style,
}: SpinnerProps) {
  const { size: px, dot, gap } = SIZE_CONFIG[size];
  const step = speed / WAVE_ORDER.length;

  return (
    <span
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cn(styles.root, className)}
      style={{ width: px, height: px, ...style }}
    >
      <span
        className={styles.grid}
        style={{ width: px, height: px, gap }}
        aria-hidden
      >
        {Array.from({ length: 9 }, (_, index) => {
          const waveIndex = WAVE_ORDER.indexOf(index as (typeof WAVE_ORDER)[number]);
          return (
            <span
              key={index}
              className={styles.dot}
              style={{
                width: dot,
                height: dot,
                animationDuration: `${speed}ms`,
                animationDelay: `${waveIndex * step}ms`,
              }}
            />
          );
        })}
      </span>
    </span>
  );
}
