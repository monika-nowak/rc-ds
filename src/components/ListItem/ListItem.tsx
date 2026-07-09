import { useState, type InputHTMLAttributes, type ReactNode, type KeyboardEvent } from 'react';
import { Table } from '@phosphor-icons/react';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';
import { Divider } from '../Divider';
import { cn } from '../../lib/cn';
import styles from './ListItem.module.css';

export type ListItemType = 'selectable' | 'radio' | 'file';
export type ListItemRadioVariant = 'default' | 'add-new';

interface ListItemBaseProps {
  className?: string;
}

export interface ListItemSelectableProps extends ListItemBaseProps {
  type?: 'selectable';
  label: string;
  metaValue?: string;
  metaLabel?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Shown below the header when the checkbox is checked. */
  children?: ReactNode;
}

export interface ListItemRadioProps extends ListItemBaseProps {
  type: 'radio';
  variant?: ListItemRadioVariant;
  label: string;
  metaValue?: string;
  metaLabel?: string;
  name: string;
  value: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
  /** Called when the add-new row is activated (variant `add-new` only). */
  onAddNewClick?: () => void;
  disabled?: boolean;
}

export interface ListItemFileProps extends ListItemBaseProps {
  type: 'file';
  /** File name, rendered in text-primary. */
  fileName: string;
  /** File size (e.g. "87.2 KB"). Rendered in text-secondary next to the name. Omit to hide. */
  fileSize?: string;
  /** Leading icon shown inside the gray tile. Defaults to a table icon. */
  icon?: ReactNode;
  /** Row-count column (e.g. "248 rows"). Omit to hide. */
  rows?: ReactNode;
  /** Date column (e.g. "May 5, 2026"). Omit to hide. */
  date?: ReactNode;
}

export type ListItemProps = ListItemSelectableProps | ListItemRadioProps | ListItemFileProps;

export function ListItem(props: ListItemProps) {
  const { className } = props;

  if (props.type === 'file') {
    const { fileName, fileSize, icon, rows, date } = props;

    return (
      <div className={cn(styles.file, className)}>
        <div className={styles.fileTile} aria-hidden>
          {icon ?? <Table size={24} weight="regular" />}
        </div>
        <div className={styles.fileContent}>
          <span className={cn('rc-label-lg', styles.fileName)}>{fileName}</span>
          {fileSize != null ? (
            <span className={cn('rc-body-sm', styles.fileSize)}>{fileSize}</span>
          ) : null}
        </div>
        {rows != null ? (
          <span className={cn('rc-body-sm', styles.fileColumn)}>{rows}</span>
        ) : null}
        {date != null ? (
          <span className={cn('rc-body-sm', styles.fileColumn)}>{date}</span>
        ) : null}
      </div>
    );
  }

  if (props.type === 'radio') {
    return <ListItemRadio {...props} className={className} />;
  }

  return <ListItemSelectable {...props} className={className} />;
}

function ListItemSelectable({
  className,
  label,
  metaValue,
  metaLabel = 'records',
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  children,
}: ListItemSelectableProps) {
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked ?? false);
  const isChecked = checked ?? uncontrolledChecked;
  const isExpanded = Boolean(children) && isChecked;

  const handleCheckedChange = (next: boolean) => {
    if (checked === undefined) {
      setUncontrolledChecked(next);
    }
    onCheckedChange?.(next);
  };

  const toggleChecked = () => {
    if (!disabled) {
      handleCheckedChange(!isChecked);
    }
  };

  const handleHeaderKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      toggleChecked();
    }
  };

  const checkboxProps: InputHTMLAttributes<HTMLInputElement> = {
    checked: isChecked,
    onChange: (event) => handleCheckedChange(event.target.checked),
  };

  return (
    <div
      className={cn(
        styles.card,
        isChecked && styles.cardChecked,
        isExpanded && styles.cardExpanded,
        disabled && styles.disabled,
        className,
      )}
    >
      <div
        className={styles.header}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-pressed={isChecked}
        aria-expanded={children ? isExpanded : undefined}
        onClick={toggleChecked}
        onKeyDown={handleHeaderKeyDown}
      >
        <div className={styles.controlSlot} onClick={(event) => event.stopPropagation()}>
          <Checkbox showLabel={false} disabled={disabled} {...checkboxProps} />
        </div>
        <span className={cn('rc-label-lg', styles.selectableLabel)}>{label}</span>
        {metaValue ? (
          <div className={styles.meta}>
            <span className={cn('rc-label-md', styles.metaValue)}>{metaValue}</span>
            <span className={cn('rc-body-sm', styles.metaLabel)}>{metaLabel}</span>
          </div>
        ) : null}
      </div>
      {isExpanded ? (
        <>
          <Divider />
          <div className={styles.panel}>{children}</div>
        </>
      ) : null}
    </div>
  );
}

function ListItemRadio({
  className,
  variant = 'default',
  label,
  metaValue,
  metaLabel = 'records',
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  onAddNewClick,
  disabled,
}: ListItemRadioProps) {
  const isAddNew = variant === 'add-new';
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked ?? false);
  const isSelected = !isAddNew && (checked ?? uncontrolledChecked);

  const select = () => {
    if (disabled || isAddNew) return;
    if (checked === undefined) {
      setUncontrolledChecked(true);
    }
    onChange?.(value);
  };

  const handleAddNew = () => {
    if (disabled) return;
    onAddNewClick?.();
  };

  const handleHeaderClick = () => {
    if (isAddNew) {
      handleAddNew();
      return;
    }
    select();
  };

  const handleHeaderKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleHeaderClick();
    }
  };

  const radioProps: InputHTMLAttributes<HTMLInputElement> = {
    name,
    value,
    checked: isSelected,
    onChange: () => (isAddNew ? handleAddNew() : select()),
    tabIndex: isAddNew ? -1 : undefined,
  };

  return (
    <div
      className={cn(
        styles.card,
        isSelected && styles.cardChecked,
        isAddNew && styles.cardAddNew,
        disabled && styles.disabled,
        className,
      )}
    >
      <div
        className={styles.header}
        role={isAddNew ? 'button' : undefined}
        aria-pressed={!isAddNew ? isSelected : undefined}
        tabIndex={disabled ? -1 : 0}
        onClick={handleHeaderClick}
        onKeyDown={handleHeaderKeyDown}
      >
        <div className={styles.controlSlot} onClick={(event) => event.stopPropagation()}>
          <Radio showLabel={false} disabled={disabled} {...radioProps} />
        </div>
        <span
          className={cn(
            isAddNew ? cn('rc-body-md', styles.addNewLabel) : cn('rc-label-lg', styles.selectableLabel),
            isAddNew && styles.addNewLabelPrefix,
          )}
        >
          {label}
        </span>
        {!isAddNew && metaValue ? (
          <div className={styles.meta}>
            <span className={cn('rc-label-md', styles.metaValue)}>{metaValue}</span>
            <span className={cn('rc-body-sm', styles.metaLabel)}>{metaLabel}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
