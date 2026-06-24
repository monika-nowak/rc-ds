import {
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';
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
  options?: BreadcrumbSelectorOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  menuGroupLabel?: string;
  onClick?: () => void;
}

function MenuPrefix({ letter }: { letter: string }) {
  return <span className={styles.menuPrefix}>{letter}</span>;
}

export function BreadcrumbSelector({
  className,
  label,
  prefix,
  options,
  value,
  onValueChange,
  menuGroupLabel = 'Clients',
  onClick,
}: BreadcrumbSelectorProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const hasMenu = Boolean(options?.length);

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

  return (
    <div ref={wrapperRef} className={cn(styles.selectorWrapper, className)}>
      <button
        type="button"
        className={cn(styles.selector, open && styles.selectorOpen)}
        onClick={handleTriggerClick}
        aria-haspopup={hasMenu ? 'menu' : 'listbox'}
        aria-expanded={hasMenu ? open : undefined}
        aria-controls={hasMenu && open ? menuId : undefined}
      >
        <span className={styles.selectorPrefix}>{prefix}</span>
        <span className={styles.selectorLabel}>{label}</span>
        <CaretDown size={16} weight="regular" className={styles.selectorIcon} aria-hidden />
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
