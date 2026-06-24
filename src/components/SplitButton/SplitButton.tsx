import {
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';
import { Menu, type MenuEntry } from '../Menu';
import styles from './SplitButton.module.css';

export type SplitButtonStyle = 'primary' | 'secondary';
export type SplitButtonSize = 'sm' | 'md';

export type SplitButtonMenuItem = MenuEntry;

export interface SplitButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: SplitButtonStyle;
  size?: SplitButtonSize;
  menuItems: MenuEntry[];
  menuGroupLabel?: string;
  showMenuGroupLabel?: boolean;
  showMenuDivider?: boolean;
  showMenuDelete?: boolean;
  menuIcon?: ReactNode;
  onMainClick?: () => void;
  children: ReactNode;
}


export function SplitButton({
  variant = 'primary',
  size = 'md',
  menuItems,
  menuGroupLabel = 'Actions',
  showMenuGroupLabel = true,
  showMenuDivider = true,
  showMenuDelete = true,
  menuIcon,
  onMainClick,
  className,
  children,
  disabled,
  ...mainProps
}: SplitButtonProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

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

  return (
    <div ref={wrapperRef} className={cn(styles.wrapper, className)}>
      <div
        className={cn(
          styles.root,
          styles[variant],
          styles[size],
          disabled && styles.disabled,
          open && styles.open,
        )}
      >
        <button
          type="button"
          disabled={disabled}
          className={styles.main}
          onClick={onMainClick}
          {...mainProps}
        >
          <span className={styles.label}>{children}</span>
        </button>
        <span className={styles.divider} aria-hidden />
        <button
          type="button"
          disabled={disabled}
          className={styles.caret}
          aria-label="More options"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {menuIcon ?? <CaretDown weight="bold" aria-hidden />}
        </button>
      </div>

      {open && !disabled ? (
        <Menu
          id={menuId}
          className={styles.menu}
          entries={menuItems}
          groupLabel={menuGroupLabel}
          showGroupLabel={showMenuGroupLabel}
          showDivider={showMenuDivider}
          showDelete={showMenuDelete}
          onSelect={() => setOpen(false)}
        />
      ) : null}
    </div>
  );
}
