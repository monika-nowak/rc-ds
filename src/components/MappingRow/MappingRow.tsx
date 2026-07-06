import { Icon } from '../../icons';
import { cn } from '../../lib/cn';
import { Select, type SelectEntry } from '../Select';
import styles from './MappingRow.module.css';

export type MappingRowState = 'mapped' | 'unmapped';

export interface MappingRowProps {
  /** Source column name from the uploaded file. */
  sourceField: string;
  /** Mapped when a target field is selected; unmapped shows error borders. */
  state?: MappingRowState;
  placeholder?: string;
  options: SelectEntry[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  id?: string;
}

export function MappingRow({
  sourceField,
  state = 'unmapped',
  placeholder = 'Select field',
  options,
  value,
  defaultValue,
  onValueChange,
  className,
  id,
}: MappingRowProps) {
  const isUnmapped = state === 'unmapped';

  return (
    <div className={cn(styles.root, className)}>
      <div
        className={cn(styles.source, isUnmapped && styles.sourceUnmapped)}
        aria-label={`Source column ${sourceField}`}
      >
        <span className={cn('rc-label-md', styles.sourceLabel)}>{sourceField}</span>
      </div>

      <span className={styles.connector} aria-hidden>
        <Icon name="arrow-right" size={16} tone="tertiary" />
      </span>

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
