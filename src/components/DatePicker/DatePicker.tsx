import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import { CalendarBlank, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';
import styles from './DatePicker.module.css';

export type DatePickerState =
  | 'default'
  | 'focus'
  | 'open'
  | 'filled'
  | 'error'
  | 'disabled';

export type DatePickerSize = 'md' | 'sm';

export interface DatePickerProps {
  label?: string;
  helperText?: string;
  /** Show the label row. Matches Figma `Label` boolean property. */
  showLabel?: boolean;
  /** Show helper text below the field. Matches Figma `Helper Text` boolean property. */
  showHelperText?: boolean;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: DatePickerSize;
  /** Static visual state for docs; interactive focus/open still apply when enabled. */
  state?: DatePickerState;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as const;

function parseDateString(value: string | undefined): Date | null {
  if (!value) return null;
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) return null;

  const month = Number(match[1]);
  const day = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function formatDateString(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = String(date.getFullYear());
  return `${month}/${day}/${year}`;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function buildWeeks(viewYear: number, viewMonth: number) {
  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const start = new Date(firstOfMonth);
  start.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());

  const weeks: Array<Array<{ date: Date; outside: boolean }>> = [];
  const cursor = new Date(start);

  for (let week = 0; week < 6; week += 1) {
    const days: Array<{ date: Date; outside: boolean }> = [];
    for (let day = 0; day < 7; day += 1) {
      days.push({
        date: new Date(cursor),
        outside: cursor.getMonth() !== viewMonth,
      });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(days);
  }

  return weeks;
}

function formatMonthYear(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function DatePicker({
  label,
  helperText,
  showLabel = true,
  showHelperText = false,
  placeholder = 'mm/dd/yyyy',
  value: valueProp,
  defaultValue,
  onValueChange,
  size = 'md',
  state = 'default',
  disabled,
  className,
  id,
}: DatePickerProps) {
  const [open, setOpen] = useState(state === 'open');
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const [viewDate, setViewDate] = useState(() => {
    const initial = parseDateString(valueProp ?? defaultValue) ?? new Date();
    return new Date(initial.getFullYear(), initial.getMonth(), 1);
  });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const calendarId = `${fieldId}-calendar`;
  const visibleLabel = showLabel && label;
  const visibleHelper = showHelperText && helperText;
  const labelId = visibleLabel ? `${fieldId}-label` : undefined;
  const helperId = visibleHelper ? `${fieldId}-helper` : undefined;

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolledValue;
  const selectedDate = parseDateString(value);
  const isDisabled = disabled || state === 'disabled';
  const isError = state === 'error';
  const today = useMemo(() => new Date(), []);

  const setValue = useCallback(
    (next: string) => {
      if (!isControlled) {
        setUncontrolledValue(next);
      }
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const closeCalendar = useCallback(() => {
    setOpen(false);
  }, []);

  const selectDate = useCallback(
    (date: Date) => {
      setValue(formatDateString(date));
      setViewDate(new Date(date.getFullYear(), date.getMonth(), 1));
      closeCalendar();
    },
    [closeCalendar, setValue],
  );

  useEffect(() => {
    if (selectedDate) {
      setViewDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1));
    }
  }, [selectedDate]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        closeCalendar();
      }
    };

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCalendar();
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [closeCalendar, open]);

  const weeks = useMemo(
    () => buildWeeks(viewDate.getFullYear(), viewDate.getMonth()),
    [viewDate],
  );

  const shiftMonth = (delta: number) => {
    setViewDate((current) => new Date(current.getFullYear(), current.getMonth() + delta, 1));
  };

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (isDisabled) return;

    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
    }

    if (event.key === 'Escape') {
      closeCalendar();
    }
  };

  const displayValue = selectedDate ? formatDateString(selectedDate) : undefined;

  return (
    <div
      className={cn(
        styles.field,
        isDisabled && styles.disabled,
        size === 'sm' && styles.sm,
        className,
      )}
    >
      {visibleLabel ? (
        <label id={labelId} className={cn('rc-label-md', styles.label)} htmlFor={fieldId}>
          {label}
        </label>
      ) : null}

      <div ref={wrapperRef} className={styles.wrapper}>
        <button
          id={fieldId}
          type="button"
          className={cn(
            'rc-body-sm',
            styles.trigger,
            open && styles.open,
            (state === 'focus' || state === 'open') && styles.focus,
            isError && styles.error,
          )}
          disabled={isDisabled}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={calendarId}
          aria-labelledby={labelId}
          aria-describedby={helperId}
          onClick={() => {
            if (isDisabled) return;
            setOpen((current) => !current);
          }}
          onKeyDown={onTriggerKeyDown}
        >
          <span className={cn(styles.value, !displayValue && styles.placeholder)}>
            {displayValue ?? placeholder}
          </span>
          <span className={styles.icon} aria-hidden>
            <CalendarBlank size={16} weight="regular" />
          </span>
        </button>

        {open && !isDisabled ? (
          <div
            id={calendarId}
            role="dialog"
            aria-label={formatMonthYear(viewDate)}
            className={styles.calendar}
          >
            <div className={styles.header}>
              <button
                type="button"
                className={styles.navButton}
                aria-label="Previous month"
                onClick={() => shiftMonth(-1)}
              >
                <CaretLeft size={16} weight="bold" />
              </button>
              <span className={cn('rc-label-md', styles.monthLabel)}>{formatMonthYear(viewDate)}</span>
              <button
                type="button"
                className={styles.navButton}
                aria-label="Next month"
                onClick={() => shiftMonth(1)}
              >
                <CaretRight size={16} weight="bold" />
              </button>
            </div>

            <div className={styles.weekdays}>
              {WEEKDAYS.map((weekday) => (
                <span key={weekday} className={cn('rc-label-sm', styles.weekday)}>
                  {weekday}
                </span>
              ))}
            </div>

            <div className={styles.days}>
              {weeks.map((week) => (
                <div key={week[0].date.toISOString()} className={styles.week}>
                  {week.map(({ date, outside }) => {
                    const selected = selectedDate ? isSameDay(date, selectedDate) : false;
                    const isToday = isSameDay(date, today);

                    return (
                      <button
                        key={date.toISOString()}
                        type="button"
                        className={cn(
                          'rc-body-sm',
                          styles.day,
                          outside && styles.outside,
                          isToday && styles.today,
                          selected && styles.selected,
                        )}
                        disabled={outside}
                        aria-label={formatDateString(date)}
                        aria-pressed={selected}
                        onClick={() => {
                          if (outside) return;
                          selectDate(date);
                        }}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {visibleHelper ? (
        <span id={helperId} className={cn('rc-body-xs', styles.helper, isError && styles.helperError)}>
          {helperText}
        </span>
      ) : null}
    </div>
  );
}
