import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/cn';
import { Icon } from '../../icons';
import { ChoiceTag, ChoiceTagGroup } from '../ChoiceTag';
import { Divider } from '../Divider';
import { IconButton } from '../IconButton';
import { Spinner } from '../Spinner';
import { ReferenceMenu } from './ReferenceMenu';
import { ReferenceTag } from './ReferenceTag';
import styles from './ChatWithAI.module.css';

export type ReferenceOption = {
  id: string;
  kind: 'signal' | 'trend';
  shorthand: string;
  label: string;
  meta?: string;
};

export type Reference = ReferenceOption;

const DEFAULT_PLACEHOLDER =
  'Ask a follow-up... Type @ to reference or select any text to ask about';

function parseMention(value: string) {
  const lastAt = value.lastIndexOf('@');
  if (lastAt === -1) {
    return { open: false, query: '', atIndex: -1 };
  }

  const afterAt = value.slice(lastAt + 1);
  if (/\s/.test(afterAt)) {
    return { open: false, query: '', atIndex: -1 };
  }

  return { open: true, query: afterAt, atIndex: lastAt };
}

function filterReferenceOptions(
  options: ReferenceOption[],
  references: Reference[],
  query: string,
) {
  const selectedIds = new Set(references.map((reference) => reference.id));
  const normalizedQuery = query.trim().toLowerCase();

  return options.filter((option) => {
    if (selectedIds.has(option.id)) return false;
    if (!normalizedQuery) return true;

    return (
      option.label.toLowerCase().includes(normalizedQuery) ||
      option.shorthand.toLowerCase().includes(normalizedQuery) ||
      option.meta?.toLowerCase().includes(normalizedQuery)
    );
  });
}

export interface ChatWithAIProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  suggestions?: string[];
  /** Currently selected suggestion chip. Omit or pass `undefined` when none is selected. */
  activeSuggestion?: string;
  /** Called when a chip is selected or deselected. Pass `undefined` to clear selection. */
  onSuggestionClick?: (suggestion: string | undefined) => void;
  references?: Reference[];
  onReferencesChange?: (references: Reference[]) => void;
  referenceOptions?: ReferenceOption[];
  /** Optional content rendered inside the input frame, above the text row
   *  (e.g. a quoted-context chip). */
  contextSlot?: ReactNode;
  helperText?: string;
  showHelperText?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  suggestionsAriaLabel?: string;
}

export function ChatWithAI({
  placeholder = DEFAULT_PLACEHOLDER,
  value,
  onChange,
  onSubmit,
  suggestions,
  activeSuggestion,
  onSuggestionClick,
  references = [],
  onReferencesChange,
  referenceOptions = [],
  contextSlot,
  helperText,
  showHelperText = false,
  disabled = false,
  loading = false,
  className,
  suggestionsAriaLabel = 'Suggested prompts',
}: ChatWithAIProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const menuAnchorRef = useRef<HTMLDivElement>(null);
  const referenceMenuRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const listId = `${generatedId}-reference-list`;
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuStyle, setMenuStyle] = useState<CSSProperties | undefined>();
  const [localReferences, setLocalReferences] = useState(references);
  const isReferencesControlled = onReferencesChange != null;
  const resolvedReferences = isReferencesControlled ? references : localReferences;

  useEffect(() => {
    if (!isReferencesControlled) {
      setLocalReferences(references);
    }
  }, [isReferencesControlled, references]);

  const updateReferences = useCallback(
    (nextReferences: Reference[]) => {
      if (isReferencesControlled) {
        onReferencesChange(nextReferences);
      } else {
        setLocalReferences(nextReferences);
      }
    },
    [isReferencesControlled, onReferencesChange],
  );

  const hasSuggestions = suggestions != null && suggestions.length > 0;
  const hasReferenceSupport = referenceOptions.length > 0 || resolvedReferences.length > 0;
  const mention = parseMention(value);
  const filteredOptions = filterReferenceOptions(referenceOptions, resolvedReferences, mention.query);
  const referenceMenuOpen =
    mention.open && referenceOptions.length > 0 && !disabled;
  const canSubmit =
    !disabled && !loading && (value.trim().length > 0 || resolvedReferences.length > 0);

  const closeReferenceMenu = useCallback(() => {
    if (!mention.open) return;
    const nextValue = `${value.slice(0, mention.atIndex)}${value.slice(mention.atIndex + 1 + mention.query.length)}`;
    onChange(nextValue);
  }, [mention.atIndex, mention.open, mention.query, onChange, value]);

  const addReference = useCallback(
    (option: ReferenceOption) => {
      if (resolvedReferences.some((reference) => reference.id === option.id)) return;

      const nextReferences = [...resolvedReferences, option];
      updateReferences(nextReferences);

      if (mention.open) {
        const nextValue = `${value.slice(0, mention.atIndex)}${value.slice(mention.atIndex + 1 + mention.query.length)}`;
        onChange(nextValue);
      }

      setActiveIndex(0);
      textareaRef.current?.focus();
    },
    [mention.atIndex, mention.open, mention.query, onChange, resolvedReferences, updateReferences, value],
  );

  const removeReference = useCallback(
    (id: string) => {
      updateReferences(resolvedReferences.filter((reference) => reference.id !== id));
      textareaRef.current?.focus();
    },
    [resolvedReferences, updateReferences],
  );

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit?.(value.trim());
  };

  const handleSuggestionChange = useCallback(
    (suggestion: string) => {
      if (suggestion === activeSuggestion) {
        // Deselect: clear input only when it still matches the chip text.
        // If the user edited after selecting, leave their text intact.
        if (value === activeSuggestion) {
          onChange('');
        }
        onSuggestionClick?.(undefined);
      } else {
        onChange(suggestion);
        onSuggestionClick?.(suggestion);
      }
    },
    [activeSuggestion, onChange, onSuggestionClick, value],
  );

  useEffect(() => {
    if (activeSuggestion == null) return;
    if (value === '' || value === activeSuggestion) {
      if (value !== activeSuggestion) {
        onChange(activeSuggestion);
      }
    }
  }, [activeSuggestion, onChange, value]);

  useEffect(() => {
    if (!referenceMenuOpen) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex((index) => {
      if (filteredOptions.length === 0) return 0;
      if (index < filteredOptions.length) return index;
      return 0;
    });
  }, [filteredOptions.length, referenceMenuOpen]);

  useLayoutEffect(() => {
    if (!referenceMenuOpen) {
      setMenuStyle(undefined);
      return;
    }

    const updateMenuPosition = () => {
      const anchor = menuAnchorRef.current;
      if (!anchor) return;

      const rect = anchor.getBoundingClientRect();
      setMenuStyle({
        position: 'fixed',
        left: rect.left,
        width: rect.width,
        top: rect.top - 8,
        transform: 'translateY(-100%)',
      });
    };

    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);
    window.addEventListener('scroll', updateMenuPosition, true);
    return () => {
      window.removeEventListener('resize', updateMenuPosition);
      window.removeEventListener('scroll', updateMenuPosition, true);
    };
  }, [referenceMenuOpen, resolvedReferences.length, value]);

  useEffect(() => {
    if (!referenceMenuOpen) return;

    const onMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        inputWrapperRef.current?.contains(target) ||
        referenceMenuRef.current?.contains(target)
      ) {
        return;
      }
      closeReferenceMenu();
    };

    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [closeReferenceMenu, referenceMenuOpen]);

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (referenceMenuOpen) {
      if (event.key === 'ArrowDown' && filteredOptions.length > 0) {
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, filteredOptions.length - 1));
        return;
      }

      if (event.key === 'ArrowUp' && filteredOptions.length > 0) {
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, 0));
        return;
      }

      if (event.key === 'Enter' && !event.shiftKey && filteredOptions.length > 0) {
        event.preventDefault();
        const active = filteredOptions[activeIndex];
        if (active) addReference(active);
        return;
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        closeReferenceMenu();
        return;
      }
    }

    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={cn(styles.root, className)}>
      <div ref={inputWrapperRef} className={styles.inputWrapper}>
        {referenceMenuOpen
          ? createPortal(
              <ReferenceMenu
                id={listId}
                options={filteredOptions}
                activeIndex={activeIndex}
                onActiveIndexChange={setActiveIndex}
                onSelect={addReference}
                getOptionId={(optionId) => `${listId}-${optionId}`}
                menuRef={referenceMenuRef}
                portaled
                style={menuStyle}
              />,
              document.body,
            )
          : null}

        <div className={cn(styles.frame, disabled && styles.frameDisabled)}>
          {hasSuggestions ? (
            <div className={styles.suggestionsSection}>
              <ChoiceTagGroup
                value={activeSuggestion ?? ''}
                onValueChange={handleSuggestionChange}
                disabled={disabled}
                size="md"
                aria-label={suggestionsAriaLabel}
                className={styles.suggestions}
              >
                {suggestions.map((suggestion) => (
                  <ChoiceTag key={suggestion} value={suggestion}>
                    {suggestion}
                  </ChoiceTag>
                ))}
              </ChoiceTagGroup>
            </div>
          ) : null}

          {hasSuggestions ? <Divider /> : null}

          <div ref={menuAnchorRef} className={styles.menuAnchor}>
            <div className={cn(styles.bar, disabled && styles.barDisabled)}>
              {contextSlot}

              {resolvedReferences.length > 0 ? (
                <div
                  className={styles.referenceRow}
                  role={hasReferenceSupport ? 'group' : undefined}
                  aria-label={hasReferenceSupport ? 'References' : undefined}
                >
                  {resolvedReferences.map((reference) => (
                    <ReferenceTag
                      key={reference.id}
                      reference={reference}
                      disabled={disabled}
                      onRemove={() => removeReference(reference.id)}
                    />
                  ))}
                </div>
              ) : null}

              <div className={styles.inputRow}>
                <textarea
                  ref={textareaRef}
                  rows={1}
                  value={value}
                  disabled={disabled}
                  placeholder={placeholder}
                  aria-label={placeholder}
                  aria-expanded={referenceMenuOpen}
                  aria-controls={referenceMenuOpen ? listId : undefined}
                  aria-activedescendant={
                    referenceMenuOpen && filteredOptions[activeIndex]
                      ? `${listId}-${filteredOptions[activeIndex].id}`
                      : undefined
                  }
                  className={cn('rc-body-sm', styles.input)}
                  onChange={(event) => onChange(event.target.value)}
                  onKeyDown={handleKeyDown}
                />

                <IconButton
                  type="button"
                  variant="ai"
                  size="sm"
                  label="Send message"
                  disabled={!canSubmit}
                  className={styles.sendButton}
                  onClick={handleSubmit}
                >
                  {loading ? (
                    <Spinner size="xs" label="Sending" />
                  ) : (
                    <Icon name="arrow-right" size={16} tone="on-color" />
                  )}
                </IconButton>
              </div>
            </div>
          </div>

          {showHelperText && helperText ? (
            <p className={cn('rc-body-xs', styles.helperText)}>{helperText}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
