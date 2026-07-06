import {
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Icon } from '../../icons';
import { Menu, type MenuEntry } from '../Menu';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbSelectorOption {
  id: string;
  label: string;
  prefix: string;
}

export interface BreadcrumbSelectorProps {
  className?: string;
  label: string;
  prefix: string;
  leadingContent?: ReactNode;
  showLeading?: boolean;
  showDropdown?: boolean;
  dropdownIcon?: ReactNode;
  options?: BreadcrumbSelectorOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  menuGroupLabel?: string;
  onClick?: () => void;
  href?: string;
  isCurrent?: boolean;
}

function MenuPrefix({ letter }: { letter: string }) {
  return <span className={cn('rc-label-sm', styles.menuPrefix)}>{letter}</span>;
}

function LeadingSlot({
  prefix,
  content,
}: {
  prefix: string;
  content?: ReactNode;
}) {
  if (content) {
    return <span className={cn('rc-label-md', styles.selectorPrefix)}>{content}</span>;
  }

  if (!prefix) return null;

  return <span className={cn('rc-label-md', styles.selectorPrefix)}>{prefix}</span>;
}

function DefaultDropdownIcon({ open }: { open: boolean }) {
  return (
    <Icon
      name="caret-down"
      size={16}
      tone="tertiary"
      className={cn(styles.selectorIcon, open && styles.selectorIconOpen)}
      aria-hidden
    />
  );
}

export function BreadcrumbSelector({
  className,
  label,
  prefix,
  leadingContent,
  showLeading = true,
  showDropdown = true,
  dropdownIcon,
  options,
  value,
  onValueChange,
  menuGroupLabel = 'Clients',
  onClick,
  href,
  isCurrent = false,
}: BreadcrumbSelectorProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const hasMenu = Boolean(options?.length);
  const hasLeading = showLeading && Boolean(leadingContent || prefix);
  const showCaret = showDropdown && (hasMenu || onClick || dropdownIcon);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const menuEntries: MenuEntry[] =
    options?.map((option) => ({
      kind: 'item' as const,
      id: option.id,
      label: option.label,
      icon: <MenuPrefix letter={option.prefix} />,
      shortcut: value === option.id ? '✓' : undefined,
      onSelect: () => onValueChange?.(option.id),
    })) ?? [];

  const handleTriggerClick = () => {
    if (hasMenu) {
      setOpen((current) => !current);
      return;
    }
    onClick?.();
  };

  const labelClassName = cn(
    'rc-label-md',
    styles.selectorLabel,
    isCurrent && styles.selectorLabelCurrent,
  );

  const content = (
    <>
      {hasLeading ? <LeadingSlot prefix={prefix} content={leadingContent} /> : null}
      <span className={labelClassName}>{label}</span>
      {showCaret ? (dropdownIcon ?? <DefaultDropdownIcon open={open} />) : null}
    </>
  );

  if (href && !hasMenu) {
    return (
      <a href={href} className={cn(styles.selector, styles.selectorLink, className)}>
        {content}
      </a>
    );
  }

  return (
    <div ref={wrapperRef} className={cn(styles.selectorWrapper, className)}>
      <button
        type="button"
        className={cn(styles.selector, open && styles.selectorOpen, isCurrent && styles.selectorCurrent)}
        onClick={handleTriggerClick}
        aria-haspopup={hasMenu ? 'menu' : showDropdown ? 'listbox' : undefined}
        aria-expanded={hasMenu ? open : undefined}
        aria-controls={hasMenu && open ? menuId : undefined}
        aria-current={isCurrent ? 'page' : undefined}
        disabled={!hasMenu && !onClick && !href}
      >
        {content}
      </button>

      {open && hasMenu ? (
        <Menu
          id={menuId}
          className={styles.selectorMenu}
          entries={menuEntries}
          groupLabel={menuGroupLabel}
          showGroupLabel
          showDivider={false}
          showDelete={false}
          onSelect={() => setOpen(false)}
        />
      ) : null}
    </div>
  );
}
