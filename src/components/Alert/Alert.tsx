import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import styles from './Alert.module.css';

export type AlertType = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  type?: AlertType;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function Alert({ type = 'info', children, className, icon }: AlertProps) {
  return (
    <div className={cn('rc-body-sm', styles.alert, styles[type], className)} role="status">
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
