import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Icon } from '../../icons';
import { IconButton } from '../IconButton';
import { BreadcrumbSelector, type BreadcrumbSelectorOption } from './BreadcrumbSelector';
import styles from './Breadcrumb.module.css';

export type { BreadcrumbSelectorOption };

/** Avatar / client icon shown before the first trail item. */
export interface BreadcrumbLeading {
  /** Letter shown in the brand square, e.g. "A". */
  prefix?: string;
  /** Custom leading content; overrides the prefix square when set. */
  content?: ReactNode;
}

/** Flat item config — add, remove, or edit entries by changing the array. */
export interface BreadcrumbItemData {
  id?: string;
  label: string;
  href?: string;
  onClick?: () => void;
  /** Marks the current page. When omitted, the last item is treated as current. */
  isCurrent?: boolean;
  /** Shows a caret (and optional menu) on this item only. */
  showDropdown?: boolean;
  /** Custom dropdown icon; defaults to caret-down (tertiary). */
  dropdownIcon?: ReactNode;
  dropdownOptions?: BreadcrumbSelectorOption[];
  dropdownValue?: string;
  onDropdownValueChange?: (value: string) => void;
  dropdownMenuGroupLabel?: string;
}

/** @deprecated Prefer {@link BreadcrumbItemData} for new usage. */
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

export type BreadcrumbTrailItem = BreadcrumbItemData | BreadcrumbEntry;

interface NormalizedBreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  isCurrent: boolean;
  isBack: boolean;
  showDropdown: boolean;
  dropdownIcon?: ReactNode;
  dropdownOptions?: BreadcrumbSelectorOption[];
  dropdownValue?: string;
  onDropdownValueChange?: (value: string) => void;
  dropdownMenuGroupLabel?: string;
  showLeading: boolean;
  leadingPrefix?: string;
  leadingContent?: ReactNode;
}

function isLegacyEntry(item: BreadcrumbTrailItem): item is BreadcrumbEntry {
  return 'kind' in item;
}

function normalizeItems(
  items: BreadcrumbTrailItem[],
  leading?: BreadcrumbLeading,
  showLeading?: boolean,
): NormalizedBreadcrumbItem[] {
  const hasExplicitCurrent = items.some((item) =>
    isLegacyEntry(item) ? item.kind === 'current' : item.isCurrent === true,
  );

  const leadingVisible = showLeading !== false && Boolean(leading?.prefix || leading?.content);

  return items.map((item, index) => {
    if (isLegacyEntry(item)) {
      if (item.kind === 'back') {
        return {
          id: item.id,
          label: item.label,
          href: item.href,
          onClick: item.onClick,
          isCurrent: false,
          isBack: true,
          showDropdown: false,
          showLeading: false,
        };
      }

      if (item.kind === 'current') {
        return {
          id: item.id,
          label: item.label,
          isCurrent: true,
          isBack: false,
          showDropdown: false,
          showLeading: false,
        };
      }

      if (item.kind === 'selector') {
        return {
          id: item.id,
          label: item.label,
          onClick: item.onClick,
          isCurrent: false,
          isBack: false,
          showDropdown: true,
          dropdownOptions: item.options,
          dropdownValue: item.value,
          onDropdownValueChange: item.onValueChange,
          dropdownMenuGroupLabel: item.menuGroupLabel,
          showLeading: true,
          leadingPrefix: item.prefix,
        };
      }

      return {
        id: item.id,
        label: item.label,
        href: item.href,
        onClick: item.onClick,
        isCurrent: false,
        isBack: false,
        showDropdown: false,
        showLeading: false,
      };
    }

    const isCurrent = item.isCurrent ?? (!hasExplicitCurrent && index === items.length - 1);
    const isFirst = index === 0;

    return {
      id: item.id ?? `breadcrumb-${index}`,
      label: item.label,
      href: item.href,
      onClick: item.onClick,
      isCurrent,
      isBack: false,
      showDropdown: Boolean(item.showDropdown),
      dropdownIcon: item.dropdownIcon,
      dropdownOptions: item.dropdownOptions,
      dropdownValue: item.dropdownValue,
      onDropdownValueChange: item.onDropdownValueChange,
      dropdownMenuGroupLabel: item.dropdownMenuGroupLabel,
      showLeading: isFirst && leadingVisible,
      leadingPrefix: isFirst ? leading?.prefix : undefined,
      leadingContent: isFirst ? leading?.content : undefined,
    };
  });
}

export interface BreadcrumbSeparatorProps {
  className?: string;
  children?: ReactNode;
}

export function BreadcrumbSeparator({ className, children = '/' }: BreadcrumbSeparatorProps) {
  return (
    <span className={cn('rc-body-sm', styles.separator, className)} aria-hidden>
      {children}
    </span>
  );
}

export interface BreadcrumbItemProps {
  className?: string;
  item: NormalizedBreadcrumbItem;
}

export function BreadcrumbItem({ className, item }: BreadcrumbItemProps) {
  if (item.isBack) {
    if (item.href) {
      return (
        <a
          href={item.href}
          className={cn(styles.backButton, styles.backLink)}
          aria-label={item.label}
        >
          <Icon name="arrow-left" size={16} aria-hidden />
        </a>
      );
    }

    return (
      <IconButton
        variant="ghost"
        size="sm"
        label={item.label}
        className={cn(styles.backButton, className)}
        onClick={item.onClick}
      >
        <Icon name="arrow-left" size={16} />
      </IconButton>
    );
  }

  if (item.showDropdown || item.showLeading) {
    return (
      <BreadcrumbSelector
        className={className}
        label={item.label}
        prefix={item.leadingPrefix ?? ''}
        leadingContent={item.leadingContent}
        showLeading={item.showLeading}
        showDropdown={item.showDropdown}
        dropdownIcon={item.dropdownIcon}
        options={item.dropdownOptions}
        value={item.dropdownValue}
        onValueChange={item.onDropdownValueChange}
        menuGroupLabel={item.dropdownMenuGroupLabel}
        onClick={item.onClick}
        href={item.href}
        isCurrent={item.isCurrent}
      />
    );
  }

  if (item.isCurrent) {
    return (
      <span className={cn('rc-label-md', styles.item, styles.itemCurrent, className)} aria-current="page">
        {item.label}
      </span>
    );
  }

  if (item.href) {
    return (
      <a href={item.href} className={cn('rc-label-md', styles.item, styles.itemLink, className)}>
        {item.label}
      </a>
    );
  }

  return (
    <button type="button" className={cn('rc-label-md', styles.item, styles.itemLink, className)} onClick={item.onClick}>
      {item.label}
    </button>
  );
}

/** @deprecated Use {@link BreadcrumbItemProps} with `item` instead. */
export interface LegacyBreadcrumbItemProps {
  className?: string;
  entry: BreadcrumbEntry;
}

export function BreadcrumbItemFromEntry({ className, entry }: LegacyBreadcrumbItemProps) {
  const [normalized] = normalizeItems([entry]);
  return <BreadcrumbItem className={className} item={normalized} />;
}

export interface BreadcrumbsProps {
  className?: string;
  items: BreadcrumbTrailItem[];
  /** Avatar / client icon rendered before the first item. */
  leading?: BreadcrumbLeading;
  /** When false, hides the leading slot even if `leading` is set. Default: true when `leading` is provided. */
  showLeading?: boolean;
  /** Separator between items. Default: `/`. */
  separator?: ReactNode;
}

export function Breadcrumbs({
  className,
  items,
  leading,
  showLeading,
  separator,
}: BreadcrumbsProps) {
  const normalized = normalizeItems(items, leading, showLeading);

  return (
    <nav className={cn(styles.trail, className)} aria-label="Breadcrumb">
      {normalized.map((item, index) => {
        const previous = normalized[index - 1];
        const showSeparator =
          index > 0 && !(previous?.isBack && item.isCurrent);

        return (
          <span key={item.id} style={{ display: 'contents' }}>
            {showSeparator ? <BreadcrumbSeparator>{separator}</BreadcrumbSeparator> : null}
            <BreadcrumbItem item={item} />
          </span>
        );
      })}
    </nav>
  );
}

export interface BreadcrumbBarProps {
  className?: string;
  items: BreadcrumbTrailItem[];
  leading?: BreadcrumbLeading;
  showLeading?: boolean;
  separator?: ReactNode;
  end?: ReactNode;
}

export function BreadcrumbBar({
  className,
  items,
  leading,
  showLeading,
  separator,
  end,
}: BreadcrumbBarProps) {
  return (
    <div className={cn(styles.bar, className)}>
      <Breadcrumbs
        items={items}
        leading={leading}
        showLeading={showLeading}
        separator={separator}
      />
      {end ? <div style={{ marginLeft: 'auto' }}>{end}</div> : null}
    </div>
  );
}
