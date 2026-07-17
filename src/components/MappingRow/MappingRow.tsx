import { useContext, type ReactNode } from 'react';
import { Icon, type CuratedIconName, type IconTone } from '../../icons';
import { cn } from '../../lib/cn';
import { Badge, type BadgeColor } from '../Badge';
import { Select, type SelectEntry } from '../Select';
import { MappingRowGroupContext } from './MappingRowGroupContext';
import styles from './MappingRow.module.css';

export type MappingRowState = 'mapped' | 'unmapped';

/** Semantic tone for the validation status badge. */
export type MappingRowStatusTone = 'error' | 'warning' | 'success' | 'neutral';

export interface MappingRowStatus {
  label: string;
  tone: MappingRowStatusTone;
}

interface MappingRowBaseProps {
  /** Source column name from the uploaded file. */
  sourceField: string;
  className?: string;
  id?: string;
}

export interface MappingRowMappingProps extends MappingRowBaseProps {
  variant?: 'mapping';
  /** Mapped when a target field is selected; unmapped shows error borders. */
  state?: MappingRowState;
  placeholder?: string;
  options: SelectEntry[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export interface MappingRowValidationProps extends MappingRowBaseProps {
  variant: 'validation';
  /** Status badge shown after the connector (e.g. "Missing", "Wrong name"). */
  status: MappingRowStatus;
  /** Descriptive message; pass `<strong>` for emphasized key terms. */
  message: ReactNode;
}

export interface MappingRowResolvedProps extends MappingRowBaseProps {
  variant: 'resolved';
  /** Mapped target field name shown after the connector. */
  targetField: string;
  /** Match confidence as a percentage (0–100). */
  matchPercent: number;
}

export type MappingRowProps =
  | MappingRowMappingProps
  | MappingRowValidationProps
  | MappingRowResolvedProps;

const statusBadgeColor: Record<MappingRowStatusTone, BadgeColor> = {
  error: 'error',
  warning: 'warning',
  success: 'success',
  neutral: 'neutral',
};

const statusBadgeIcon: Record<MappingRowStatusTone, CuratedIconName> = {
  error: 'warning',
  warning: 'warning',
  success: 'check-circle',
  neutral: 'info',
};

const statusIconTone: Record<MappingRowStatusTone, IconTone> = {
  error: 'error',
  warning: 'warning',
  success: 'success',
  neutral: 'secondary',
};

function FieldBadge({
  label,
  variant = 'source',
  className,
  'aria-label': ariaLabel,
}: {
  label: string;
  variant?: 'source' | 'target';
  className?: string;
  'aria-label'?: string;
}) {
  return (
    <Badge
      appearance="subtle"
      color="neutral"
      className={cn(
        styles.fieldBadge,
        variant === 'source' ? styles.fieldBadgeSource : styles.fieldBadgeTarget,
        className,
      )}
      aria-label={ariaLabel}
    >
      {label}
    </Badge>
  );
}

function SourceChip({
  sourceField,
  unmapped,
  compact,
}: {
  sourceField: string;
  unmapped?: boolean;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <FieldBadge
        label={sourceField}
        variant="source"
        aria-label={`Source column ${sourceField}`}
      />
    );
  }

  return (
    <div
      className={cn(styles.source, unmapped && styles.sourceUnmapped)}
      aria-label={`Source column ${sourceField}`}
    >
      <span className={cn('rc-label-md', styles.sourceLabel)}>{sourceField}</span>
    </div>
  );
}

function RowArrow({ className }: { className?: string }) {
  return (
    <span className={cn(styles.rowArrow, className)} aria-hidden>
      <Icon name="arrow-right" size={16} color="var(--rc-border-subtle-03)" />
    </span>
  );
}

function Connector() {
  return (
    <span className={styles.connector} aria-hidden>
      <Icon name="arrow-right" size={16} tone="tertiary" />
    </span>
  );
}

function MatchBadge({ matchPercent }: { matchPercent: number }) {
  return (
    <Badge
      appearance="subtle"
      color="success"
      className={styles.matchBadge}
      iconLeft={
        <Icon name="check-circle" size={16} tone="success" weight="fill" aria-hidden />
      }
      aria-label={`${matchPercent}% match`}
    >
      {matchPercent}%
    </Badge>
  );
}

function StatusBadge({ status }: { status: MappingRowStatus }) {
  return (
    <Badge
      appearance="subtle"
      color={statusBadgeColor[status.tone]}
      className={cn(styles.valueSlot, styles.statusBadge)}
      iconLeft={
        <Icon
          name={statusBadgeIcon[status.tone]}
          size={16}
          tone={statusIconTone[status.tone]}
          aria-hidden
        />
      }
    >
      {status.label}
    </Badge>
  );
}

export function MappingRow(props: MappingRowProps) {
  const { sourceField, className, id } = props;
  const group = useContext(MappingRowGroupContext);
  const inGroup = group.inGroup;
  const listLayout = inGroup && group.layout === 'list';

  if (props.variant === 'resolved') {
    const { targetField, matchPercent } = props;

    return (
      <div
        className={cn(listLayout ? styles.listRow : styles.resolvedRoot, className)}
        id={id}
        role={inGroup ? 'listitem' : undefined}
      >
        <SourceChip sourceField={sourceField} compact />
        <RowArrow />
        <FieldBadge
          label={targetField}
          variant="target"
          className={styles.valueSlot}
          aria-label={`Mapped to ${targetField}`}
        />
        {listLayout ? (
          <>
            <span className={styles.listTrailing} aria-hidden />
            <MatchBadge matchPercent={matchPercent} />
          </>
        ) : (
          <MatchBadge matchPercent={matchPercent} />
        )}
      </div>
    );
  }

  if (props.variant === 'validation') {
    const { status, message } = props;

    if (listLayout) {
      return (
        <div
          className={cn(styles.listRow, className)}
          id={id}
          role={inGroup ? 'listitem' : undefined}
        >
          <SourceChip sourceField={sourceField} compact />
          <RowArrow />
          <StatusBadge status={status} />
          <span className={cn('rc-body-sm', styles.message)}>{message}</span>
          <span className={styles.listTrailing} aria-hidden />
        </div>
      );
    }

    return (
      <div
        className={cn(styles.validationRoot, inGroup && styles.validationRowGrouped, className)}
        id={id}
        role={inGroup ? 'listitem' : undefined}
      >
        <SourceChip sourceField={sourceField} compact />
        <RowArrow />
        <StatusBadge status={status} />
        <span className={cn('rc-body-sm', styles.message)}>{message}</span>
      </div>
    );
  }

  const {
    state = 'unmapped',
    placeholder = 'Select field',
    options,
    value,
    defaultValue,
    onValueChange,
  } = props;
  const isUnmapped = state === 'unmapped';

  return (
    <div className={cn(styles.root, className)}>
      <SourceChip sourceField={sourceField} unmapped={isUnmapped} />
      <Connector />
      <Select
        id={id}
        className={styles.select}
        showLabel={false}
        showHelperText={false}
        placeholder={placeholder}
        options={options}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        state={isUnmapped ? 'error' : 'default'}
        caretTone={isUnmapped ? 'tertiary' : 'secondary'}
      />
    </div>
  );
}
