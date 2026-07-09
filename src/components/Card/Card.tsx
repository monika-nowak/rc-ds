import type { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../../icons';
import { cn } from '../../lib/cn';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Divider } from '../Divider';
import { IconButton } from '../IconButton';
import styles from './Card.module.css';

/** @deprecated Use `layout` + `density` + `show*` props. Presets still apply defaults when set. */
export type CardVariant = 'project' | 'dataSource' | 'signal' | 'trend';

/** Structural layout — `project` bottom-aligns metadata; `stacked` flows top-to-bottom. */
export type CardLayout = 'project' | 'stacked';

/** Internal padding and vertical rhythm. */
export type CardDensity = 'compact' | 'default' | 'roomy';

export type CardTitleSize = 'h5' | 'h6' | 'h7';
export type CardDescriptionSize = 'sm' | 'base' | 'md' | 'lg';
export type CardStatsSpacing = 'default' | 'compact';

/** @deprecated Use `CardStatsSpacing` instead. */
export type CardStatsAppearance = CardStatsSpacing;

export interface CardStat {
  value: string;
  label: string;
}

type VisibilityKey =
  | 'showTitle'
  | 'showDescription'
  | 'showHeader'
  | 'showActions'
  | 'showCreatedDate'
  | 'showAuthor'
  | 'showDivider'
  | 'showStats'
  | 'showStrengthBadge'
  | 'showLeadBadge'
  | 'showCategory'
  | 'showConsiderations';

type LayoutConfig = {
  layout: CardLayout;
  density: CardDensity;
  titleSize: CardTitleSize;
  descriptionSize: CardDescriptionSize;
  statsSpacing: CardStatsSpacing;
};

type VisibilityDefaults = Record<VisibilityKey, boolean>;

const VARIANT_LAYOUT: Record<CardVariant, LayoutConfig> = {
  project: {
    layout: 'project',
    density: 'compact',
    titleSize: 'h6',
    descriptionSize: 'sm',
    statsSpacing: 'default',
  },
  dataSource: {
    layout: 'stacked',
    density: 'default',
    titleSize: 'h6',
    descriptionSize: 'sm',
    statsSpacing: 'default',
  },
  signal: {
    layout: 'stacked',
    density: 'roomy',
    titleSize: 'h6',
    descriptionSize: 'sm',
    statsSpacing: 'compact',
  },
  trend: {
    layout: 'stacked',
    density: 'roomy',
    titleSize: 'h5',
    descriptionSize: 'base',
    statsSpacing: 'default',
  },
};

const VARIANT_VISIBILITY: Record<CardVariant, VisibilityDefaults> = {
  project: {
    showTitle: true,
    showDescription: false,
    showHeader: true,
    showActions: true,
    showCreatedDate: true,
    showAuthor: true,
    showDivider: false,
    showStats: false,
    showStrengthBadge: false,
    showLeadBadge: false,
    showCategory: false,
    showConsiderations: false,
  },
  dataSource: {
    showTitle: true,
    showDescription: true,
    showHeader: false,
    showActions: false,
    showCreatedDate: false,
    showAuthor: false,
    showDivider: true,
    showStats: true,
    showStrengthBadge: false,
    showLeadBadge: false,
    showCategory: false,
    showConsiderations: false,
  },
  signal: {
    showTitle: true,
    showDescription: true,
    showHeader: false,
    showActions: false,
    showCreatedDate: false,
    showAuthor: false,
    showDivider: false,
    showStats: true,
    showStrengthBadge: true,
    showLeadBadge: true,
    showCategory: true,
    showConsiderations: false,
  },
  trend: {
    showTitle: true,
    showDescription: true,
    showHeader: false,
    showActions: false,
    showCreatedDate: false,
    showAuthor: false,
    showDivider: false,
    showStats: false,
    showStrengthBadge: false,
    showLeadBadge: false,
    showCategory: false,
    showConsiderations: true,
  },
};

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** @deprecated Maps to layout, density, and visibility defaults. Explicit props override. */
  variant?: CardVariant;
  layout?: CardLayout;
  density?: CardDensity;
  titleSize?: CardTitleSize;
  descriptionSize?: CardDescriptionSize;
  statsSpacing?: CardStatsSpacing;
  /** @deprecated Use `statsSpacing` instead. */
  statsAppearance?: CardStatsSpacing;
  className?: string;
  elevated?: boolean;
  /** Enable an interactive hover/focus state that raises the card with a larger shadow. */
  hoverable?: boolean;
  /** Top slot — project: top-left badge row; stacked: replaces default badge row when set. */
  header?: ReactNode;
  /** Default header badge label for project layout when `header` is not provided. */
  badgeLabel?: string;
  /** Bottom slot — replaces auto-generated footer content when provided. */
  footer?: ReactNode;
  children?: ReactNode;
  title?: string;
  description?: string;
  stats?: CardStat[];
  strengthLabel?: string;
  leadLabel?: string;
  category?: string;
  considerationsLabel?: string;
  considerations?: string[];
  createdLabel?: string;
  createdDate?: string;
  authorName?: string;
  authorInitials?: string;
  actions?: ReactNode;
  onMenuClick?: () => void;
  menuLabel?: string;
  showTitle?: boolean;
  showDescription?: boolean;
  showHeader?: boolean;
  showActions?: boolean;
  showCreatedDate?: boolean;
  showAuthor?: boolean;
  showDivider?: boolean;
  showStats?: boolean;
  showStrengthBadge?: boolean;
  showLeadBadge?: boolean;
  showCategory?: boolean;
  showConsiderations?: boolean;
}

function resolveVisibility(
  variant: CardVariant | undefined,
  props: CardProps,
): VisibilityDefaults {
  const preset = variant ? VARIANT_VISIBILITY[variant] : null;
  const contentDefaults: VisibilityDefaults = {
    showTitle: Boolean(props.title ?? props.children),
    showDescription: Boolean(props.description),
    showHeader: Boolean(props.header),
    showActions: Boolean(props.actions ?? props.onMenuClick),
    showCreatedDate: Boolean(props.createdDate),
    showAuthor: Boolean(props.authorName),
    showDivider:
      Boolean(props.title || props.description || props.children) &&
      Boolean(props.stats && props.stats.length > 0),
    showStats: Boolean(props.stats && props.stats.length > 0),
    showStrengthBadge: Boolean(props.strengthLabel),
    showLeadBadge: Boolean(props.leadLabel),
    showCategory: Boolean(props.category),
    showConsiderations: Boolean(props.considerations && props.considerations.length > 0),
  };

  const base = preset ?? contentDefaults;

  return {
    showTitle: props.showTitle ?? base.showTitle,
    showDescription: props.showDescription ?? base.showDescription,
    showHeader: props.showHeader ?? base.showHeader,
    showActions: props.showActions ?? base.showActions,
    showCreatedDate: props.showCreatedDate ?? base.showCreatedDate,
    showAuthor: props.showAuthor ?? base.showAuthor,
    showDivider: props.showDivider ?? base.showDivider,
    showStats: props.showStats ?? base.showStats,
    showStrengthBadge: props.showStrengthBadge ?? base.showStrengthBadge,
    showLeadBadge: props.showLeadBadge ?? base.showLeadBadge,
    showCategory: props.showCategory ?? base.showCategory,
    showConsiderations: props.showConsiderations ?? base.showConsiderations,
  };
}

function resolveLayout(variant: CardVariant | undefined, props: CardProps): LayoutConfig {
  const preset = variant ? VARIANT_LAYOUT[variant] : VARIANT_LAYOUT.project;

  return {
    layout: props.layout ?? preset.layout,
    density: props.density ?? preset.density,
    titleSize: props.titleSize ?? preset.titleSize,
    descriptionSize: props.descriptionSize ?? preset.descriptionSize,
    statsSpacing:
      props.statsSpacing ?? props.statsAppearance ?? preset.statsSpacing,
  };
}

function DefaultMenuAction({
  onMenuClick,
  menuLabel = 'Open menu',
}: {
  onMenuClick?: () => void;
  menuLabel?: string;
}) {
  if (!onMenuClick) return null;

  return (
    <IconButton variant="ghost" size="sm" label={menuLabel} onClick={onMenuClick}>
      <Icon name="dots-three-vertical" size={16} tone="primary" />
    </IconButton>
  );
}

function ProjectMeta({
  createdLabel = 'Created:',
  createdDate,
  authorName,
  authorInitials,
  showCreatedDate = true,
  showAuthor = true,
}: Pick<
  CardProps,
  'createdLabel' | 'createdDate' | 'authorName' | 'authorInitials' | 'showCreatedDate' | 'showAuthor'
>) {
  const showCreated = showCreatedDate && Boolean(createdDate);
  const showAuthorRow = showAuthor && Boolean(authorName);

  if (!showCreated && !showAuthorRow) return null;

  return (
    <div className={styles.meta}>
      {showCreated ? (
        <div className={styles.metaItem}>
          <span className="rc-label-md">{createdLabel}</span>
          <span className="rc-body-sm">{createdDate}</span>
        </div>
      ) : null}
      {showAuthorRow ? (
        <div className={styles.author}>
          <Avatar size="sm" name={authorName} initials={authorInitials} />
          <span className={cn('rc-label-md', styles.authorName)}>{authorName}</span>
        </div>
      ) : null}
    </div>
  );
}

function CardStats({
  stats,
  spacing,
}: {
  stats: CardStat[];
  spacing: CardStatsSpacing;
}) {
  if (stats.length === 0) return null;

  const isCompact = spacing === 'compact';
  const statsClass = isCompact ? styles.statsCompact : styles.stats;
  const statClass = isCompact ? styles.statCompact : styles.stat;

  return (
    <div className={statsClass}>
      {stats.map((stat) => (
        <div key={`${stat.label}-${stat.value}`} className={statClass}>
          <span className={cn('rc-heading-h7', styles.statValue)}>{stat.value}</span>
          <span className={cn('rc-label-md', styles.statLabel)}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

function DefaultProjectBadge({ label = 'Badge' }: { label?: string }) {
  return (
    <div className={styles.badgeSlot}>
      <Badge appearance="subtle" color="neutral">
        {label}
      </Badge>
    </div>
  );
}

function SignalBadges({
  strengthLabel,
  leadLabel,
  showStrengthBadge,
  showLeadBadge,
}: {
  strengthLabel?: string;
  leadLabel?: string;
  showStrengthBadge: boolean;
  showLeadBadge: boolean;
}) {
  const showStrength = showStrengthBadge && Boolean(strengthLabel);
  const showLead = showLeadBadge && Boolean(leadLabel);

  if (!showStrength && !showLead) return null;

  return (
    <div className={styles.signalBadges}>
      {showStrength ? (
        <Badge
          appearance="emphasis"
          color="purple"
          iconLeft={<Icon name="cell-signal-full" size={12} tone="on-color" aria-hidden />}
        >
          {strengthLabel}
        </Badge>
      ) : null}
      {showLead ? (
        <Badge
          appearance="subtle"
          color="lightPurple"
          iconLeft={<Icon name="flag" size={12} tone="ai" aria-hidden />}
        >
          {leadLabel}
        </Badge>
      ) : null}
    </div>
  );
}

function ConsiderationsSection({
  label = 'Strategic considerations',
  items = [],
}: {
  label?: string;
  items?: string[];
}) {
  if (items.length === 0) return null;

  return (
    <div className={styles.considerations}>
      <p className={cn('rc-label-lg', styles.considerationsLabel)}>{label}</p>
      <ul className={styles.considerationsList}>
        {items.map((item) => (
          <li key={item} className={styles.considerationsItem}>
            <Icon
              name="arrow-elbow-down-right"
              size={16}
              tone="secondary"
              className={styles.considerationsIcon}
              aria-hidden
            />
            <span className={cn('rc-body-sm', styles.considerationsText)}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Card({
  variant = 'project',
  layout: layoutProp,
  density: densityProp,
  titleSize: titleSizeProp,
  descriptionSize: descriptionSizeProp,
  statsAppearance: statsAppearanceProp,
  statsSpacing: statsSpacingProp,
  className,
  elevated = true,
  hoverable = false,
  header,
  badgeLabel,
  footer,
  children,
  title,
  description,
  stats = [],
  strengthLabel,
  leadLabel,
  category,
  considerationsLabel,
  considerations = [],
  createdLabel,
  createdDate,
  authorName,
  authorInitials,
  actions,
  onMenuClick,
  menuLabel,
  showTitle,
  showDescription,
  showHeader,
  showActions,
  showCreatedDate,
  showAuthor,
  showDivider,
  showStats,
  showStrengthBadge,
  showLeadBadge,
  showCategory,
  showConsiderations,
  ...props
}: CardProps) {
  const layoutConfig = resolveLayout(variant, {
    layout: layoutProp,
    density: densityProp,
    titleSize: titleSizeProp,
    descriptionSize: descriptionSizeProp,
    statsSpacing: statsSpacingProp ?? statsAppearanceProp,
  } as CardProps);

  const visibility = resolveVisibility(variant, {
    title,
    description,
    header,
    actions,
    onMenuClick,
    createdDate,
    authorName,
    stats,
    strengthLabel,
    leadLabel,
    category,
    considerations,
    children,
    showTitle,
    showDescription,
    showHeader,
    showActions,
    showCreatedDate,
    showAuthor,
    showDivider,
    showStats,
    showStrengthBadge,
    showLeadBadge,
    showCategory,
    showConsiderations,
  });

  const densityClass =
    layoutConfig.density === 'compact'
      ? styles.densityCompact
      : layoutConfig.density === 'roomy'
        ? styles.densityRoomy
        : styles.densityDefault;

  const titleClass =
    layoutConfig.titleSize === 'h5'
      ? cn('rc-heading-h5', styles.titleH5)
      : layoutConfig.titleSize === 'h7'
        ? cn('rc-heading-h7', styles.titleH7)
        : cn('rc-heading-h6', styles.titleH6);

  const descriptionClass =
    layoutConfig.descriptionSize === 'lg'
      ? cn('rc-body-lg', styles.descriptionLg)
      : layoutConfig.descriptionSize === 'md'
        ? cn('rc-body-rg', styles.descriptionMd)
        : layoutConfig.descriptionSize === 'base'
          ? cn('rc-body-md', styles.descriptionBase)
          : cn('rc-body-sm', styles.description);

  if (layoutConfig.layout === 'project') {
    const resolvedActions = visibility.showActions
      ? (actions ?? <DefaultMenuAction onMenuClick={onMenuClick} menuLabel={menuLabel} />)
      : null;
    const headerStart =
      visibility.showHeader && header
        ? header
        : visibility.showHeader
          ? <DefaultProjectBadge label={badgeLabel} />
          : null;
    const hasHeaderStart = Boolean(headerStart);
    const hasHeaderEnd = visibility.showActions && Boolean(actions ?? onMenuClick);
    const showHeaderRow = hasHeaderStart || hasHeaderEnd;

    const bodyContent =
      children ??
      (visibility.showTitle && title ? <h3 className={titleClass}>{title}</h3> : null);

    const footerContent =
      footer ??
      (visibility.showCreatedDate || visibility.showAuthor ? (
        <ProjectMeta
          createdLabel={createdLabel}
          createdDate={createdDate}
          authorName={authorName}
          authorInitials={authorInitials}
          showCreatedDate={visibility.showCreatedDate}
          showAuthor={visibility.showAuthor}
        />
      ) : null);

    return (
      <article
        className={cn(
          styles.card,
          styles.layoutProject,
          densityClass,
          elevated && styles.elevated,
          hoverable && styles.hoverable,
          hasHeaderStart && styles.projectWithHeaderStart,
          className,
        )}
        {...props}
      >
        {showHeaderRow ? (
          <div
            className={cn(
              styles.header,
              hasHeaderStart && hasHeaderEnd && styles.headerBetween,
              hasHeaderStart && !hasHeaderEnd && styles.headerStartOnly,
            )}
          >
            {hasHeaderStart ? headerStart : null}
            {resolvedActions}
          </div>
        ) : null}

        <div className={styles.body}>
          {bodyContent}
          {footerContent ? <div className={styles.footer}>{footerContent}</div> : null}
        </div>
      </article>
    );
  }

  const customHeader = visibility.showHeader && header ? header : null;
  const signalBadges =
    !customHeader && (visibility.showStrengthBadge || visibility.showLeadBadge) ? (
      <SignalBadges
        strengthLabel={strengthLabel}
        leadLabel={leadLabel}
        showStrengthBadge={visibility.showStrengthBadge}
        showLeadBadge={visibility.showLeadBadge}
      />
    ) : null;
  const badgeRow = customHeader ?? signalBadges;
  const showBadgeRow = Boolean(badgeRow);
  const showTitleBlock =
    visibility.showTitle || (visibility.showDescription && Boolean(description)) || Boolean(children);
  const visibleStats = visibility.showStats ? stats : [];
  const showDividerLine =
    visibility.showDivider && showTitleBlock && visibleStats.length > 0;
  const visibleConsiderations = visibility.showConsiderations ? considerations : [];

  const categoryFooter =
    footer ??
    (visibility.showCategory && category ? (
      <Badge appearance="subtle" color="neutral">
        {category}
      </Badge>
    ) : null);

  return (
    <article
      className={cn(
        styles.card,
        styles.layoutStacked,
        densityClass,
        elevated && styles.elevated,
        hoverable && styles.hoverable,
        Boolean(categoryFooter) && styles.layoutStackedWithFooter,
        className,
      )}
      {...props}
    >
      <div className={styles.stackedContent}>
        {showBadgeRow ? badgeRow : null}

        {showTitleBlock ? (
          <div className={styles.stackedHeader}>
            {children ??
              (visibility.showTitle && title ? <h3 className={titleClass}>{title}</h3> : null)}
            {visibility.showDescription && description ? (
              <p className={descriptionClass}>{description}</p>
            ) : null}
          </div>
        ) : null}

        {showDividerLine ? <Divider /> : null}

        {visibleStats.length > 0 ? (
          <CardStats stats={visibleStats} spacing={layoutConfig.statsSpacing} />
        ) : null}

        {visibleConsiderations.length > 0 ? (
          <ConsiderationsSection label={considerationsLabel} items={visibleConsiderations} />
        ) : null}
      </div>

      {categoryFooter ? <div className={styles.footer}>{categoryFooter}</div> : null}
    </article>
  );
}
