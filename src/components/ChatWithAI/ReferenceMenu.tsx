import {
  useEffect,
  useRef,
  type CSSProperties,
  type KeyboardEvent,
  type Ref,
} from 'react';
import { Badge } from '../Badge';
import { cn } from '../../lib/cn';
import type { ReferenceOption } from './ChatWithAI';
import styles from './ChatWithAI.module.css';

export interface ReferenceMenuProps {
  id: string;
  options: ReferenceOption[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  onSelect: (option: ReferenceOption) => void;
  header?: string;
  emptyMessage?: string;
  className?: string;
  style?: CSSProperties;
  menuRef?: Ref<HTMLDivElement>;
  portaled?: boolean;
  getOptionId?: (optionId: string) => string;
}

function kindBadgeColor(kind: ReferenceOption['kind']) {
  return kind === 'signal' ? 'purple' : 'info';
}

export function ReferenceMenu({
  id,
  options,
  activeIndex,
  onActiveIndexChange,
  onSelect,
  header = 'Reference a trend or signal',
  emptyMessage = 'No matching references',
  className,
  style,
  menuRef,
  portaled = false,
  getOptionId = (optionId) => optionId,
}: ReferenceMenuProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (activeIndex < 0) return;
    const option = options[activeIndex];
    if (!option) return;
    const node = listRef.current?.querySelector<HTMLButtonElement>(
      `[data-reference-id="${option.id}"]`,
    );
    node?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, options]);

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      onActiveIndexChange(Math.min(activeIndex + 1, options.length - 1));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      onActiveIndexChange(Math.max(activeIndex - 1, 0));
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const active = options[activeIndex];
      if (active) onSelect(active);
    }
  };

  return (
    <div
      ref={menuRef}
      className={cn(styles.referenceMenu, portaled && styles.referenceMenuPortaled, className)}
      style={style}
    >
      <ul
        ref={listRef}
        id={id}
        role="listbox"
        aria-label={header}
        className={styles.referenceList}
        onKeyDown={handleKeyDown}
      >
        <li role="presentation" className={cn('rc-label-sm', styles.referenceMenuHeader)}>
          {header}
        </li>
        {options.length === 0 ? (
          <li role="presentation" className={cn('rc-body-sm', styles.referenceMenuEmpty)}>
            {emptyMessage}
          </li>
        ) : null}
        {options.map((option, index) => {
          const active = index === activeIndex;
          return (
            <li key={option.id} role="presentation">
              <button
                type="button"
                role="option"
                id={getOptionId(option.id)}
                data-reference-id={option.id}
                aria-selected={active}
                tabIndex={active ? 0 : -1}
                className={cn(styles.referenceOption, active && styles.referenceOptionActive)}
                onMouseEnter={() => onActiveIndexChange(index)}
                onClick={() => onSelect(option)}
              >
                <Badge
                  appearance="subtle"
                  color={kindBadgeColor(option.kind)}
                  size="compact"
                  className={styles.referenceBadge}
                >
                  {option.shorthand}
                </Badge>
                <span className={cn('rc-label-md', styles.referenceOptionLabel)}>{option.label}</span>
                {option.meta ? (
                  <span className={cn('rc-body-sm', styles.referenceOptionMeta)}>{option.meta}</span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
