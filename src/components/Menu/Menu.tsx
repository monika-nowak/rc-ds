import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Divider } from '../Divider';
import styles from './Menu.module.css';

export type MenuEntry =
  | { kind: 'group'; id: string; label: string }
  | { kind: 'separator'; id: string }
  | {
      kind: 'item';
      id: string;
      label: string;
      icon?: ReactNode;
      shortcut?: string;
      destructive?: boolean;
      disabled?: boolean;
      onSelect?: () => void;
    };

export interface MenuProps {
  id?: string;
  className?: string;
  entries: MenuEntry[];
  /** Section title copy when `showGroupLabel` is true. */
  groupLabel?: string;
  showGroupLabel?: boolean;
  showDivider?: boolean;
  showDelete?: boolean;
  onSelect?: (id: string) => void;
}

function resolveEntries(
  entries: MenuEntry[],
  groupLabel?: string,
  showGroupLabel = true,
): MenuEntry[] {
  const withoutGroups = entries.filter((entry) => entry.kind !== 'group');

  if (!showGroupLabel || !groupLabel) {
    return withoutGroups;
  }

  return [{ kind: 'group', id: 'menu-group', label: groupLabel }, ...withoutGroups];
}

function applyVisibility(
  entries: MenuEntry[],
  showDivider = true,
  showDelete = true,
): MenuEntry[] {
  return entries.filter((entry) => {
    if (entry.kind === 'separator' && !showDivider) return false;
    if (entry.kind === 'item' && entry.destructive && !showDelete) return false;
    return true;
  });
}

export function Menu({
  id,
  className,
  entries,
  groupLabel = 'Actions',
  showGroupLabel = true,
  showDivider = true,
  showDelete = true,
  onSelect,
}: MenuProps) {
  const resolvedEntries = applyVisibility(
    resolveEntries(entries, groupLabel, showGroupLabel),
    showDivider,
    showDelete,
  );

  return (
    <ul id={id} className={cn(styles.menu, className)} role="menu">
      {resolvedEntries.map((entry) => {
        if (entry.kind === 'group') {
          return (
            <li key={entry.id} role="presentation" className={cn('rc-label-sm', styles.groupLabel)}>
              {entry.label}
            </li>
          );
        }

        if (entry.kind === 'separator') {
          return (
            <li key={entry.id} role="presentation" className={styles.separator}>
              <Divider />
            </li>
          );
        }

        return (
          <li key={entry.id} role="none">
            <button
              type="button"
              role="menuitem"
              disabled={entry.disabled}
              className={cn('rc-body-sm', styles.item, entry.destructive && styles.destructive)}
              onClick={() => {
                if (entry.disabled) return;
                entry.onSelect?.();
                onSelect?.(entry.id);
              }}
            >
              {entry.icon ? (
                <span className={styles.icon}>{entry.icon}</span>
              ) : (
                <span className={styles.iconPlaceholder} aria-hidden />
              )}
              <span className={styles.label}>{entry.label}</span>
              {entry.shortcut ? (
                <span className={cn('rc-body-xs', styles.shortcut)}>{entry.shortcut}</span>
              ) : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
