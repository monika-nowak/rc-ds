import { useContext, type ReactNode } from 'react';
import { Icon, type CuratedIconName, type IconTone } from '../../icons';
import { cn } from '../../lib/cn';
import { Select, type SelectEntry } from '../Select';
import { MappingRowGroupContext } from './MappingRowGroupContext';
import styles from './MappingRow.module.css';

export type MappingRowState = 'mapped' | 'unmapped';

/** Semantic tone for the validation status pill. */
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
  /** Status pill shown after the connector (e.g. "Missing", "Wrong name"). */
  status: MappingRowStatus;
  /** Descriptive message; pass `<strong>` for emphasized key terms. */
  message: ReactNode;
}

export type MappingRowProps = MappingRowMappingProps | MappingRowValidationProps;

/** Visual mapping for each status tone: leading icon, icon tone, and pill class. */
const statusToneMeta: Record<
  MappingRowStatusTone,
  { icon: CuratedIconName; iconTone: IconTone; className: string }
> = {
  error: { icon: 'warning', iconTone: 'error', className: styles.pillError },
  warning: { icon: 'warning', iconTone: 'warning', className: styles.pillWarning },
  success: { icon: 'check-circle', iconTone: 'success', className: styles.pillSuccess },
  neutral: { icon: 'info', iconTone: 'secondary', className: styles.pillNeutral },
};

function SourceChip({
  sourceField,
  unmapped,
  compact,
}: {
  sourceField: string;
  unmapped?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(styles.source, unmapped && styles.sourceUnmapped, compact && styles.sourceCompact)}
      aria-label={`Source column ${sourceField}`}
    >
      <span className={cn('rc-label-md', styles.sourceLabel)}>
        {sourceField}
      </span>
    </div>
  );
}

function Connector() {
  return (
    <span className={styles.connector} aria-hidden>
      <Icon name="arrow-right" size={16} tone="tertiary" />
    </span>
  );
}

export function MappingRow(props: MappingRowProps) {
  const { sourceField, className, id } = props;
  const inGroup = useContext(MappingRowGroupContext);

  if (props.variant === 'validation') {
    const { status, message } = props;
    const tone = statusToneMeta[status.tone];

    // Each validation row is a self-contained bordered card laid out as
    // [ chip ] [ arrow ] [ status badge ] [ message ]. Inside a group it becomes
    // a subgrid so chips / arrows / badges / messages align across rows while
    // every row keeps its own card border. The status badge is equal-width
    // across rows (min-width standalone, stretches to the shared column in a
    // group) so all badges line up in a clean column.
    return (
      <div
        className={cn(styles.validationRoot, inGroup && styles.validationRowGrouped, className)}
        id={id}
        role={inGroup ? 'listitem' : undefined}
      >
        <SourceChip sourceField={sourceField} compact />
        <span className={styles.validationArrow} aria-hidden>
          <Icon name="arrow-right" size={16} color="var(--rc-border-subtle-03)" />
        </span>
        <span className={cn(styles.pill, tone.className)}>
          <Icon name={tone.icon} size={16} tone={tone.iconTone} aria-hidden />
          <span className={cn('rc-label-md', styles.pillLabel)}>{status.label}</span>
        </span>
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
