import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import styles from './AppShell.module.css';

export interface AppShellProps {
  className?: string;
  sidebar: ReactNode;
  header: ReactNode;
  children: ReactNode;
}

export function AppShell({ className, sidebar, header, children }: AppShellProps) {
  return (
    <div className={cn(styles.shell, className)}>
      {sidebar}
      <div className={styles.main}>
        {header}
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
