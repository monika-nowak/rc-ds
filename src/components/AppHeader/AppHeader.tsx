import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import styles from './AppHeader.module.css';

export interface AppHeaderProps {
  className?: string;
  start?: ReactNode;
  end?: ReactNode;
  children?: ReactNode;
}

export function AppHeader({ className, start, end, children }: AppHeaderProps) {
  return (
    <header className={cn(styles.header, className)}>
      <div className={styles.start}>{start ?? children}</div>
      {end ? <div className={styles.end}>{end}</div> : null}
    </header>
  );
}
