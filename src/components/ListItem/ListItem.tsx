import type { InputHTMLAttributes } from 'react';
import { File } from '@phosphor-icons/react';
import { Checkbox } from '../Checkbox';
import { cn } from '../../lib/cn';
import styles from './ListItem.module.css';

export type ListItemType = 'selectable' | 'file';

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
}

export interface ListItemFileProps extends ListItemBaseProps {
  type: 'file';
  fileName: string;
  fileSize: string;
}

export type ListItemProps = ListItemSelectableProps | ListItemFileProps;

export function ListItem(props: ListItemProps) {
  const { className } = props;

  if (props.type === 'file') {
    return (
      <div className={cn(styles.file, className)}>
        <File size={24} weight="regular" className={styles.fileIcon} aria-hidden />
        <div className={styles.fileContent}>
          <span className={styles.fileName}>{props.fileName}</span>
          <span className={styles.fileSize}>{props.fileSize}</span>
        </div>
      </div>
    );
  }

  const {
    label,
    metaValue,
    metaLabel = 'records',
    checked,
    defaultChecked,
    onCheckedChange,
    disabled,
  } = props;

  const checkboxProps: InputHTMLAttributes<HTMLInputElement> = {};
  if (checked !== undefined) {
    checkboxProps.checked = checked;
  }
  if (defaultChecked !== undefined) {
    checkboxProps.defaultChecked = defaultChecked;
  }
  if (onCheckedChange) {
    checkboxProps.onChange = (event) => onCheckedChange(event.target.checked);
  }

  return (
    <div className={cn(styles.selectable, disabled && styles.disabled, className)}>
      <Checkbox showLabel={false} disabled={disabled} {...checkboxProps} />
      <span className={styles.selectableLabel}>{label}</span>
      {metaValue ? (
        <div className={styles.meta}>
          <span className={styles.metaValue}>{metaValue}</span>
          <span className={styles.metaLabel}>{metaLabel}</span>
        </div>
      ) : null}
    </div>
  );
}
