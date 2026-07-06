import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';
import styles from './Link.module.css';

export type LinkSize = 'sm' | 'md';

type LinkBaseProps = {
  size?: LinkSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
};

export type LinkProps = LinkBaseProps &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkBaseProps>)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof LinkBaseProps>)
  );

export function Link({
  size = 'md',
  iconLeft,
  iconRight,
  children,
  className,
  href,
  ...props
}: LinkProps) {
  const classes = cn(styles.link, size === 'sm' ? 'rc-label-sm' : 'rc-label-md', className);

  const content = (
    <>
      {iconLeft ? <span className={styles.icon}>{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className={styles.icon}>{iconRight}</span> : null}
    </>
  );

  if (href != null) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
