import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Icon } from '../../icons';
import { Badge } from '../Badge';
import { IconButton } from '../IconButton';
import { Logo } from '../Logo';
import styles from './Banner.module.css';

/** Root orientation. `horizontal` is the Figma default; `stacked` flows top-to-bottom. */
export type BannerLayout = 'horizontal' | 'stacked';

/**
 * Surface treatment.
 * - `subtle` — neutral white surface (Figma base, default)
 * - `branded` — brand/purple gradient tint for a more promotional look
 * - `elevated` — white surface raised with a shadow for a card-like standout
 */
export type BannerEmphasis = 'subtle' | 'branded' | 'elevated';

/** Internal padding and vertical rhythm. `compact` is a tighter inline banner. */
export type BannerDensity = 'default' | 'compact';

export interface BannerProps extends HTMLAttributes<HTMLElement> {
  /** Heading — required. Bold 18/24 (`rc-heading-h7`) in the base design. */
  title: string;
  /** Optional supporting copy below the title. */
  description?: string;
  /**
   * Small label above the title (e.g. "New", "Beta", "Tip"). A string is
   * rendered as a subtle purple `Badge`; pass a node for full control.
   */
  eyebrow?: ReactNode;
  /**
   * Swappable leading illustration slot. When omitted the default brand tile
   * (Figma node 1974:2079) is rendered.
   */
  illustration?: ReactNode;
  /** Toggle the leading region on/off. Layout reflows with no empty gap when false. */
  showIllustration?: boolean;
  /** Trailing actions slot — a primary CTA plus an optional secondary link. */
  actions?: ReactNode;
  /** Root orientation. */
  layout?: BannerLayout;
  /** Surface treatment. */
  emphasis?: BannerEmphasis;
  /** Add a brand-colored leading accent bar. */
  accent?: boolean;
  /** Density — `default` is comfortable, `compact` is a tighter inline banner. */
  density?: BannerDensity;
  /** Render a close (X) button. Visibility is controlled by the consumer. */
  dismissible?: boolean;
  /** Called when the close button is activated. */
  onDismiss?: () => void;
  /** Label for the close button (a11y). */
  dismissLabel?: string;
  className?: string;
}

/** Default 48×48 brand tile with the white RC mark — matches Figma node 1974:2079. */
function BrandTile({ compact }: { compact: boolean }) {
  return (
    <div className={cn(styles.tile, compact && styles.tileCompact)} aria-hidden>
      <Logo className={styles.tileGlyph} />
    </div>
  );
}

function Eyebrow({ eyebrow }: { eyebrow: ReactNode }) {
  if (typeof eyebrow === 'string') {
    return (
      <Badge appearance="subtle" color="purple">
        {eyebrow}
      </Badge>
    );
  }
  return <>{eyebrow}</>;
}

export function Banner({
  title,
  description,
  eyebrow,
  illustration,
  showIllustration = true,
  actions,
  layout = 'horizontal',
  emphasis = 'subtle',
  accent = false,
  density = 'default',
  dismissible = false,
  onDismiss,
  dismissLabel = 'Dismiss',
  role,
  'aria-label': ariaLabel,
  className,
  ...props
}: BannerProps) {
  const compact = density === 'compact';

  const leading = showIllustration ? (illustration ?? <BrandTile compact={compact} />) : null;

  const titleClass = compact ? 'rc-label-lg' : 'rc-heading-h7';
  const descriptionClass = compact ? 'rc-body-md' : 'rc-body-rg';

  return (
    <section
      role={role ?? 'region'}
      aria-label={ariaLabel ?? title}
      className={cn(
        styles.banner,
        layout === 'stacked' ? styles.layoutStacked : styles.layoutHorizontal,
        styles[`emphasis-${emphasis}` as const],
        compact ? styles.densityCompact : styles.densityDefault,
        accent && styles.accent,
        className,
      )}
      {...props}
    >
      {leading ? <div className={styles.leading}>{leading}</div> : null}

      <div className={styles.text}>
        {eyebrow != null ? (
          <div className={styles.eyebrow}>
            <Eyebrow eyebrow={eyebrow} />
          </div>
        ) : null}
        <h3 className={cn(titleClass, styles.title)}>{title}</h3>
        {description ? (
          <p className={cn(descriptionClass, styles.description)}>{description}</p>
        ) : null}
      </div>

      {actions ? <div className={styles.actions}>{actions}</div> : null}

      {dismissible ? (
        <div className={cn(styles.dismiss, layout === 'stacked' && styles.dismissFloating)}>
          <IconButton variant="ghost" size="sm" label={dismissLabel} onClick={onDismiss}>
            <Icon name="x" size={16} tone="secondary" />
          </IconButton>
        </div>
      ) : null}
    </section>
  );
}
