import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { MappingRowGroupContext, type MappingRowGroupLayout } from './MappingRowGroupContext';
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
  /**
   * `validation` — card rows with subgrid column alignment.
   * `list` — flat bordered list for mixed resolved + validation rows.
   */
  layout?: MappingRowGroupLayout;
  className?: string;
}

/**
 * Aligns a stack of `MappingRow`s. Use `layout="validation"` for validation-only
 * groups with aligned columns, or `layout="list"` for review screens that mix
 * resolved mappings and validation issues. Set `context` to wrap them in the
 * error "Validation Context" panel.
 */
export function MappingRowGroup({
  children,
  context = false,
  layout = 'validation',
  className,
}: MappingRowGroupProps) {
  return (
    <MappingRowGroupContext.Provider value={{ inGroup: true, layout }}>
      <div
        className={cn(
          styles.root,
          layout === 'list' && styles.list,
          context && styles.context,
          className,
        )}
        role="list"
      >
        {children}
      </div>
    </MappingRowGroupContext.Provider>
  );
}
