import type { SVGProps } from 'react';
import { cn } from '../../lib/cn';
import styles from './Logo.module.css';

export interface LogoProps extends SVGProps<SVGSVGElement> {
  title?: string;
  /** Compact size for 64px side nav (32px wide). */
  compact?: boolean;
}

export function Logo({ className, title = 'Real Chemistry', compact = false, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 50 29.5505"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn(styles.logo, compact && styles.compact, className)}
      {...props}
    >
      <path
        d="M17.016 12.7074C17.016 10.4797 15.4248 9.71484 13.6683 9.71484H9.25049L9.25673 19.8223H11.7808V16.328H13.0911C13.8992 16.328 14.2767 16.5841 14.3173 17.6471V19.8188H16.86V17.4472C16.8038 16.1842 16.5761 15.4755 15.6183 15.079C16.4731 14.6861 17.0285 13.7459 17.016 12.7074ZM13.2939 14.2581H11.7808V11.9321H13.2939C14.0396 11.9321 14.4171 12.3566 14.4171 13.0933C14.4171 13.8757 14.0396 14.2581 13.2939 14.2581Z"
        fill="currentColor"
      />
      <path
        d="M26.2698 0.0105249V0H0V29.54H23.7302V29.5505H50V0.0105249H26.2698ZM2.53962 2.85576H23.7302V26.6842H2.53962V2.85576ZM47.4604 26.6947H26.2698V2.86629H47.4604V26.6947Z"
        fill="currentColor"
      />
      <path
        d="M36.9118 20.0585C39.3921 20.0585 41.1361 18.4657 41.5386 15.9362H38.8586C38.6464 16.9466 37.829 17.6447 36.9086 17.6026C35.4329 17.6026 34.812 16.2695 34.812 14.782C34.812 13.0208 35.6295 11.9578 36.9055 11.9543C37.8103 11.9192 38.6152 12.5928 38.8461 13.5751H41.5292C41.1143 11.0596 39.3796 9.49845 36.9024 9.50196C34.0508 9.50196 32.1851 11.5789 32.1851 14.7855C32.1851 17.978 34.0695 20.062 36.9086 20.062"
        fill="currentColor"
      />
    </svg>
  );
}
