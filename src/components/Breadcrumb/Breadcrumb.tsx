import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Icon } from '../../icons';
import { IconButton } from '../IconButton';
import { BreadcrumbSelector, type BreadcrumbSelectorOption } from './BreadcrumbSelector';
import styles from './Breadcrumb.module.css';

export type { BreadcrumbSelectorOption };

export type BreadcrumbEntry =
  | {
      kind: 'link';
      id: string;
      label: string;
      href?: string;
      onClick?: () => void;
    }
  | {
      kind: 'current';
      id: string;
      label: string;
    }
  | {
      kind: 'back';
      id: string;
      /** Accessible label, e.g. "Back to projects". */
      label: string;
      onClick?: () => void;
      href?: string;
    }
  | {
      kind: 'selector';
      id: string;
      label: string;
      prefix: string;
      onClick?: () => void;
      options?: BreadcrumbSelectorOption[];
      value?: string;
      onValueChange?: (value: string) => void;
      menuGroupLabel?: string;
    };

export interface BreadcrumbSeparatorProps {
  className?: string;
}

export function BreadcrumbSeparator({ className }: BreadcrumbSeparatorProps) {
  return <span className={cn(styles.separator, className)} aria-hidden>/</span>;
}

export interface BreadcrumbItemProps {
  className?: string;
  entry: BreadcrumbEntry;
}

export function BreadcrumbItem({ className, entry }: BreadcrumbItemProps) {
  if (entry.kind === 'back') {
    if (entry.href) {
      return (
        <a
          href={entry.href}
          className={cn(styles.backButton, styles.backLink)}
          aria-label={entry.label}
        >
          <Icon name="arrow-left" size={16} aria-hidden />
        </a>
      );
    }

    return (
      <IconButton
        variant="ghost"
        size="sm"
        label={entry.label}
        className={cn(styles.backButton, className)}
        onClick={entry.onClick}
      >
        <Icon name="arrow-left" size={16} />
      </IconButton>
    );
  }

  if (entry.kind === 'current') {
    return (
      <span className={cn(styles.item, styles.itemCurrent, className)} aria-current="page">
        {entry.label}
      </span>
    );
  }

  if (entry.kind === 'selector') {
    return (
      <BreadcrumbSelector
        className={className}
        label={entry.label}
        prefix={entry.prefix}
        options={entry.options}
        value={entry.value}
        onValueChange={entry.onValueChange}
        menuGroupLabel={entry.menuGroupLabel}
        onClick={entry.onClick}
      />
    );
  }

  if (entry.href) {
    return (
      <a href={entry.href} className={cn(styles.item, styles.itemLink, className)}>
        {entry.label}
      </a>
    );
  }

  return (
    <button type="button" className={cn(styles.item, styles.itemLink, className)} onClick={entry.onClick}>
      {entry.label}
    </button>
  );
}

export interface BreadcrumbsProps {
  className?: string;
  items: BreadcrumbEntry[];
}

export function Breadcrumbs({ className, items }: BreadcrumbsProps) {
  return (
    <nav className={cn(styles.trail, className)} aria-label="Breadcrumb">
      {items.map((entry, index) => {
        const previous = items[index - 1];
        const showSeparator =
          index > 0 && !(previous?.kind === 'back' && entry.kind === 'current');

        return (
          <span key={entry.id} style={{ display: 'contents' }}>
            {showSeparator ? <BreadcrumbSeparator /> : null}
            <BreadcrumbItem entry={entry} />
          </span>
        );
      })}
    </nav>
  );
}

export interface BreadcrumbBarProps {
  className?: string;
  items: BreadcrumbEntry[];
  end?: ReactNode;
}

export function BreadcrumbBar({ className, items, end }: BreadcrumbBarProps) {
  return (
    <div className={cn(styles.bar, className)}>
      <Breadcrumbs items={items} />
      {end ? <div style={{ marginLeft: 'auto' }}>{end}</div> : null}
    </div>
  );
}
