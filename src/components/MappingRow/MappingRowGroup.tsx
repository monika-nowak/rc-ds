import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { MappingRowGroupContext } from './MappingRowGroupContext';
import styles from './MappingRowGroup.module.css';

export interface MappingRowGroupProps {
  /**
   * Validation `MappingRow` children. The group establishes shared column tracks
   * so every row's chip, status pill, and message align vertically.
   */
  children: ReactNode;
  /**
   * Wrap the rows in an error-tinted "Validation Context" panel for a set of
   * related issues (matches the Figma component).
   */
  context?: boolean;
  className?: string;
}

/**
 * Aligns a stack of validation `MappingRow`s into consistent columns:
 * `[ chip ] [ arrow ] [ status badge ] [ message ]`. Chips share the widest
 * chip's width, badges share the widest badge's track (and stretch to fill it so
 * they are all equal width), and messages start at the same x across rows. Set
 * `context` to wrap them in the error "Validation Context" panel.
 */
export function MappingRowGroup({ children, context = false, className }: MappingRowGroupProps) {
  return (
    <MappingRowGroupContext.Provider value={true}>
      <div className={cn(styles.root, context && styles.context, className)} role="list">
        {children}
      </div>
    </MappingRowGroupContext.Provider>
  );
}
