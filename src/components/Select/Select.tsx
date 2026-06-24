import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { Icon } from '../../icons';
import { cn } from '../../lib/cn';
import styles from './Select.module.css';

export type SelectState = 'default' | 'focus' | 'error' | 'disabled';
export type SelectSize = 'md' | 'sm';

export type SelectEntry =
  | { kind: 'group'; id: string; label: string }
  | { kind: 'separator'; id: string }
  | {
      kind: 'option';
      id: string;
      label: string;
      disabled?: boolean;
    };

export interface SelectProps {
  label?: string;
  helperText?: string;
  /** Show the label row. Matches Figma `Label` boolean property. */
  showLabel?: boolean;
  /** Show helper text below the field. Matches Figma `Helper Text` boolean property. */
  showHelperText?: boolean;
  placeholder?: string;
  options: SelectEntry[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: SelectSize;
  /** Static visual state for docs; interactive focus/open still apply when enabled. */
  state?: SelectState;
  disabled?: boolean;
  className?: string;
  id?: string;
}

function getOptionEntries(options: SelectEntry[]) {
  return options.filter(
    (entry): entry is Extract<SelectEntry, { kind: 'option' }> => entry.kind === 'option',
  );
}

function getOptionLabel(options: SelectEntry[], value?: string) {
  if (!value) return undefined;
  return getOptionEntries(options).find((option) => option.id === value)?.label;
}

export function Select({
  label,
  helperText,
  showLabel = true,
  showHelperText = false,
  placeholder = 'Select an option...',
  options,
  value: valueProp,
  defaultValue,
  onValueChange,
  size = 'md',
  state = 'default',
  disabled,
  className,
  id,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const listId = `${fieldId}-listbox`;
  const visibleLabel = showLabel && label;
  const visibleHelper = showHelperText && helperText;
  const labelId = visibleLabel ? `${fieldId}-label` : undefined;
  const helperId = visibleHelper ? `${fieldId}-helper` : undefined;

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolledValue;
  const optionEntries = getOptionEntries(options);
  const selectedLabel = getOptionLabel(options, value);
  const isDisabled = disabled || state === 'disabled';
  const isError = state === 'error';

  const setValue = useCallback(
    (next: string) => {
      if (!isControlled) {
        setUncontrolledValue(next);
      }
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const closeList = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  const selectOption = useCallback(
    (optionId: string) => {
      setValue(optionId);
      closeList();
    },
    [closeList, setValue],
  );

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        closeList();
      }
    };

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeList();
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [closeList, open]);

  useEffect(() => {
    if (!open || activeIndex < 0) return;
    const option = optionEntries[activeIndex];
    if (!option) return;
    const node = listRef.current?.querySelector<HTMLButtonElement>(
      `[data-option-id="${option.id}"]`,
    );
    node?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, open, optionEntries]);

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (isDisabled) return;

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
    }

    if (event.key === 'ArrowDown') {
      if (!open) {
        setOpen(true);
        const selectedIndex = optionEntries.findIndex((option) => option.id === value);
        setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
        return;
      }
      setActiveIndex((index) => {
        const next = index < 0 ? 0 : Math.min(index + 1, optionEntries.length - 1);
        while (optionEntries[next]?.disabled && next < optionEntries.length - 1) {
          return next + 1;
        }
        return next;
      });
      return;
    }

    if (event.key === 'ArrowUp') {
      if (!open) {
        setOpen(true);
        const selectedIndex = optionEntries.findIndex((option) => option.id === value);
        setActiveIndex(selectedIndex >= 0 ? selectedIndex : optionEntries.length - 1);
        return;
      }
      setActiveIndex((index) => {
        const next = index < 0 ? optionEntries.length - 1 : Math.max(index - 1, 0);
        while (optionEntries[next]?.disabled && next > 0) {
          return next - 1;
        }
        return next;
      });
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      if (!open) {
        setOpen(true);
        const selectedIndex = optionEntries.findIndex((option) => option.id === value);
        setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
        return;
      }
      const active = optionEntries[activeIndex];
      if (active && !active.disabled) {
        selectOption(active.id);
      }
      return;
    }

    if (event.key === 'Escape') {
      closeList();
    }
  };

  const onListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, optionEntries.length - 1));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const active = optionEntries[activeIndex];
      if (active && !active.disabled) {
        selectOption(active.id);
      }
    }
  };

  return (
    <div
      className={cn(styles.field, isDisabled && styles.disabled, size === 'sm' && styles.sm, className)}
    >
      {visibleLabel ? (
        <label id={labelId} className={styles.label} htmlFor={fieldId}>
          {label}
        </label>
      ) : null}

      <div ref={wrapperRef} className={styles.wrapper}>
        <button
          id={fieldId}
          type="button"
          className={cn(
            styles.trigger,
            open && styles.open,
            state === 'focus' && styles.focus,
            isError && styles.error,
          )}
          disabled={isDisabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={labelId}
          aria-describedby={helperId}
          onClick={() => {
            if (isDisabled) return;
            setOpen((current) => !current);
            if (!open) {
              const selectedIndex = optionEntries.findIndex((option) => option.id === value);
              setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
            }
          }}
          onKeyDown={onTriggerKeyDown}
        >
          <span className={cn(styles.value, !selectedLabel && styles.placeholder)}>
            {selectedLabel ?? placeholder}
          </span>
          <span className={styles.caret} aria-hidden>
            {open ? <CaretUp size={16} weight="bold" /> : <CaretDown size={16} weight="bold" />}
          </span>
        </button>

        {open && !isDisabled ? (
          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            className={styles.list}
            aria-labelledby={labelId}
            onKeyDown={onListKeyDown}
          >
            {options.map((entry) => {
              if (entry.kind === 'group') {
                return (
                  <li key={entry.id} role="presentation" className={styles.groupLabel}>
                    {entry.label}
                  </li>
                );
              }

              if (entry.kind === 'separator') {
                return (
                  <li key={entry.id} role="separator" className={styles.separator}>
                    <div className={styles.separatorLine} />
                  </li>
                );
              }

              const selected = entry.id === value;
              const active =
                activeIndex >= 0 && optionEntries[activeIndex]?.id === entry.id;

              return (
                <li key={entry.id} role="presentation">
                  <button
                    type="button"
                    role="option"
                    data-option-id={entry.id}
                    disabled={entry.disabled}
                    aria-selected={selected}
                    className={cn(styles.option, selected && styles.selected)}
                    onMouseEnter={() => {
                      const index = optionEntries.findIndex((option) => option.id === entry.id);
                      if (index >= 0) setActiveIndex(index);
                    }}
                    onClick={() => {
                      if (entry.disabled) return;
                      selectOption(entry.id);
                    }}
                    tabIndex={active ? 0 : -1}
                  >
                    <span className={styles.optionLabel}>{entry.label}</span>
                    <span className={styles.check} aria-hidden>
                      <Icon name="check" size={16} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>

      {visibleHelper ? (
        <span id={helperId} className={cn(styles.helper, isError && styles.helperError)}>
          {helperText}
        </span>
      ) : null}
    </div>
  );
}
