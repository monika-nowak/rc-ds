import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
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
  /** Optional section title. Omit or pass `""` to hide. */
  groupLabel?: string;
  onSelect?: (id: string) => void;
}

function resolveEntries(entries: MenuEntry[], groupLabel?: string): MenuEntry[] {
  if (groupLabel === undefined) {
    return entries;
  }

  const withoutGroups = entries.filter((entry) => entry.kind !== 'group');
  if (!groupLabel) {
    return withoutGroups;
  }

  return [{ kind: 'group', id: 'menu-group', label: groupLabel }, ...withoutGroups];
}

export function Menu({ id, className, entries, groupLabel, onSelect }: MenuProps) {
  const resolvedEntries = resolveEntries(entries, groupLabel);

  return (
    <ul id={id} className={cn(styles.menu, className)} role="menu">
      {resolvedEntries.map((entry) => {
        if (entry.kind === 'group') {
          return (
            <li key={entry.id} role="presentation" className={styles.groupLabel}>
              {entry.label}
            </li>
          );
        }

        if (entry.kind === 'separator') {
          return (
            <li key={entry.id} role="separator" className={styles.separator}>
              <div className={styles.separatorLine} />
            </li>
          );
        }

        return (
          <li key={entry.id} role="none">
            <button
              type="button"
              role="menuitem"
              disabled={entry.disabled}
              className={cn(styles.item, entry.destructive && styles.destructive)}
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
                <span className={styles.shortcut}>{entry.shortcut}</span>
              ) : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
