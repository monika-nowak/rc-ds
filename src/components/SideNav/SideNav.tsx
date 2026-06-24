import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';
import styles from './SideNav.module.css';

interface SideNavItemBaseProps {
  className?: string;
  icon: ReactNode;
  label: string;
  active?: boolean;
}

export type SideNavItemProps =
  | (SideNavItemBaseProps & {
      href: string;
    } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>)
  | (SideNavItemBaseProps & {
      href?: undefined;
      onClick?: () => void;
    } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>);

export function SideNavItem(props: SideNavItemProps) {
  const { className, icon, label, active = false, href, ...rest } = props;
  const itemClassName = cn(styles.item, active && styles.itemActive, className);

  if (href) {
    return (
      <a
        href={href}
        className={itemClassName}
        aria-label={label}
        aria-current={active ? 'page' : undefined}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span className={styles.itemIcon}>{icon}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={itemClassName}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span className={styles.itemIcon}>{icon}</span>
    </button>
  );
}

export interface SideNavProps {
  className?: string;
  logo?: ReactNode;
  children: ReactNode;
}

export function SideNav({ className, logo, children }: SideNavProps) {
  return (
    <aside className={cn(styles.rail, className)}>
      {logo ? <div className={styles.logo}>{logo}</div> : null}
      <nav className={styles.nav} aria-label="Main navigation">
        {children}
      </nav>
    </aside>
  );
}
