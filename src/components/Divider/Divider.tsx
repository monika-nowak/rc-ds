import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Divider.module.css';

/** Layout axis — matches Figma Divider `Orientation` variant. */
export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  orientation?: DividerOrientation;
}

/** 1px rule using `border/subtle-01` — Figma Divider (node 577:22). */
export function Divider({
  orientation = 'horizontal',
  className,
  ...props
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(styles.vertical, className)}
        {...props}
      />
    );
  }

  return <hr className={cn(styles.horizontal, className)} {...props} />;
}
