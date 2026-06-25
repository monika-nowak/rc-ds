import {
  createContext,
  useContext,
  useId,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import styles from './ChoiceTag.module.css';

interface ChoiceTagGroupContextValue {
  name: string;
  value?: string;
  onSelect: (value: string) => void;
  disabled?: boolean;
}

const ChoiceTagGroupContext = createContext<ChoiceTagGroupContextValue | null>(null);

export interface ChoiceTagGroupProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  'aria-label'?: string;
}

export function ChoiceTagGroup({
  value,
  defaultValue,
  onValueChange,
  disabled,
  className,
  children,
  'aria-label': ariaLabel,
}: ChoiceTagGroupProps) {
  const groupId = useId();
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const selectedValue = isControlled ? value : internalValue;

  const onSelect = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onValueChange?.(nextValue);
  };

  return (
    <ChoiceTagGroupContext.Provider
      value={{
        name: groupId,
        value: selectedValue,
        onSelect,
        disabled,
      }}
    >
      <div
        role="radiogroup"
        aria-label={ariaLabel}
        className={cn(styles.group, className)}
      >
        {children}
      </div>
    </ChoiceTagGroupContext.Provider>
  );
}

export interface ChoiceTagProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  value: string;
  children: ReactNode;
}

export function ChoiceTag({
  value,
  children,
  className,
  disabled,
  onClick,
  ...props
}: ChoiceTagProps) {
  const context = useContext(ChoiceTagGroupContext);
  const selected = context?.value === value;
  const isDisabled = disabled || context?.disabled;

  return (
    <button
      type="button"
      role="radio"
      name={context?.name}
      aria-checked={selected}
      disabled={isDisabled}
      className={cn(styles.tag, selected && styles.selected, className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented && !isDisabled) {
          context?.onSelect(value);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
