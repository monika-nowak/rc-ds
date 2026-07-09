import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
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

// Reference chips are embedded inline in the composer text as atomic tokens.
// The controlled `value` string carries each chip as `\uE100<id>\uE101` at the
// exact position it appears, so the caret order of chips and text is preserved.
const CHIP_OPEN = '\uE100';
const CHIP_CLOSE = '\uE101';
const CHIP_TOKEN_SOURCE = '\uE100([^\uE100\uE101]+)\uE101';
const MENTION_PATTERN = /(?:^|\s)@([^\s@]*)$/;

const chipToken = (id: string) => `${CHIP_OPEN}${id}${CHIP_CLOSE}`;
const chipTokenRegex = () => new RegExp(CHIP_TOKEN_SOURCE, 'g');

type Segment = { type: 'text'; text: string } | { type: 'chip'; id: string };

function parseSegments(value: string): Segment[] {
  const segments: Segment[] = [];
  const regex = chipTokenRegex();
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(value)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', text: value.slice(lastIndex, match.index) });
    }
    segments.push({ type: 'chip', id: match[1] });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < value.length) {
    segments.push({ type: 'text', text: value.slice(lastIndex) });
  }
  return segments;
}

function chipIdsOf(value: string): string[] {
  const ids: string[] = [];
  const regex = chipTokenRegex();
  let match: RegExpExecArray | null;
  while ((match = regex.exec(value)) !== null) ids.push(match[1]);
  return ids;
}

function stripChips(value: string): string {
  return value.replace(chipTokenRegex(), '');
}

function trailingMentionQuery(value: string): string | null {
  const lastClose = value.lastIndexOf(CHIP_CLOSE);
  const lastNewline = value.lastIndexOf('\n');
  const tail = value.slice(Math.max(lastClose + 1, lastNewline + 1));
  if (tail.includes(CHIP_OPEN)) return null;
  const match = MENTION_PATTERN.exec(tail);
  return match ? match[1] : null;
}

function createChipHost(id: string): HTMLElement {
  const host = document.createElement('span');
  host.dataset.chip = id;
  host.contentEditable = 'false';
  host.className = styles.chip;
  return host;
}

function serialize(root: HTMLElement): string {
  let out = '';
  const walk = (node: ChildNode) => {
    if (node.nodeType === Node.TEXT_NODE) {
      out += node.nodeValue ?? '';
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as HTMLElement;
    if (el.dataset.chip) {
      out += chipToken(el.dataset.chip);
      return;
    }
    if (el.tagName === 'BR') {
      out += '\n';
      return;
    }
    el.childNodes.forEach(walk);
    if (el.tagName === 'DIV' || el.tagName === 'P') out += '\n';
  };
  root.childNodes.forEach(walk);
  return out;
}

function placeCaretAtEnd(el: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
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
  const editorRef = useRef<HTMLDivElement>(null);
  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const menuAnchorRef = useRef<HTMLDivElement>(null);
  const referenceMenuRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const listId = `${generatedId}-reference-list`;

  const lastValueRef = useRef<string | null>(null);
  const lastRefsKeyRef = useRef<string>('');
  const mentionAnchorRef = useRef<{ node: Text; start: number; end: number } | null>(null);
  const composingRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [menuStyle, setMenuStyle] = useState<CSSProperties | undefined>();
  const [mentionQuery, setMentionQuery] = useState<string | null>(null);
  const [suppressMenu, setSuppressMenu] = useState(false);
  const [chipHosts, setChipHosts] = useState<{ id: string; el: HTMLElement }[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const referenceMap = useMemo(() => {
    const map = new Map<string, Reference>();
    for (const option of referenceOptions) map.set(option.id, option);
    for (const reference of references) map.set(reference.id, reference);
    return map;
  }, [referenceOptions, references]);

  const hasSuggestions = suggestions != null && suggestions.length > 0;

  const filteredOptions = useMemo(() => {
    if (mentionQuery == null) return [];
    const activeIds = new Set(chipHosts.map((chip) => chip.id));
    const query = mentionQuery.trim().toLowerCase();
    return referenceOptions.filter((option) => {
      if (activeIds.has(option.id)) return false;
      if (!query) return true;
      return (
        option.label.toLowerCase().includes(query) ||
        option.shorthand.toLowerCase().includes(query) ||
        option.meta?.toLowerCase().includes(query)
      );
    });
  }, [mentionQuery, referenceOptions, chipHosts]);

  const referenceMenuOpen =
    mentionQuery != null && !suppressMenu && referenceOptions.length > 0 && !disabled;

  const canSubmit = !disabled && !loading && !isEmpty;

  const valueToDisplay = useCallback(
    (raw: string) =>
      raw.replace(chipTokenRegex(), (_match, id: string) => referenceMap.get(id)?.label ?? ''),
    [referenceMap],
  );

  const syncFromDom = useCallback(() => {
    const root = editorRef.current;
    if (!root) return;

    const serialized = serialize(root);
    lastValueRef.current = serialized;

    const hosts = Array.from(root.querySelectorAll<HTMLElement>('[data-chip]')).map((el) => ({
      id: el.dataset.chip as string,
      el,
    }));
    setChipHosts((prev) => {
      if (prev.length === hosts.length && prev.every((chip, index) => chip.el === hosts[index].el)) {
        return prev;
      }
      return hosts;
    });

    const chips = chipIdsOf(serialized);
    setIsEmpty(chips.length === 0 && stripChips(serialized).trim() === '');

    onChange(serialized);

    if (onReferencesChange) {
      const key = chips.join('\u0001');
      if (key !== lastRefsKeyRef.current) {
        lastRefsKeyRef.current = key;
        const refs = chips
          .map((id) => referenceMap.get(id))
          .filter((reference): reference is Reference => reference != null);
        onReferencesChange(refs);
      }
    }
  }, [onChange, onReferencesChange, referenceMap]);

  useLayoutEffect(() => {
    const root = editorRef.current;
    if (!root) return;
    if (value === lastValueRef.current) return;

    const tokenIds = new Set(chipIdsOf(value));
    const prepend = references.filter((reference) => !tokenIds.has(reference.id));
    const effectiveValue =
      prepend.length > 0 ? prepend.map((reference) => chipToken(reference.id)).join('') + value : value;

    while (root.firstChild) root.removeChild(root.firstChild);
    for (const segment of parseSegments(effectiveValue)) {
      if (segment.type === 'text') {
        const lines = segment.text.split('\n');
        lines.forEach((line, index) => {
          if (index > 0) root.appendChild(document.createElement('br'));
          if (line) root.appendChild(document.createTextNode(line));
        });
      } else {
        root.appendChild(createChipHost(segment.id));
      }
    }

    lastValueRef.current = effectiveValue;
    const hosts = Array.from(root.querySelectorAll<HTMLElement>('[data-chip]')).map((el) => ({
      id: el.dataset.chip as string,
      el,
    }));
    setChipHosts(hosts);

    const chips = chipIdsOf(effectiveValue);
    setIsEmpty(chips.length === 0 && stripChips(effectiveValue).trim() === '');
    lastRefsKeyRef.current = chips.join('\u0001');

    if (effectiveValue !== value) {
      onChange(effectiveValue);
      if (onReferencesChange) {
        const refs = chips
          .map((id) => referenceMap.get(id))
          .filter((reference): reference is Reference => reference != null);
        onReferencesChange(refs);
      }
    }

    if (document.activeElement === root) placeCaretAtEnd(root);
    setMentionQuery(trailingMentionQuery(effectiveValue));
  }, [value, references, referenceMap, onChange, onReferencesChange]);

  const updateMention = useCallback(() => {
    const root = editorRef.current;
    const selection = window.getSelection();
    if (!root || !selection || selection.rangeCount === 0 || !selection.isCollapsed) return;

    const range = selection.getRangeAt(0);
    if (!root.contains(range.startContainer)) return;
    if (range.startContainer.nodeType !== Node.TEXT_NODE) {
      mentionAnchorRef.current = null;
      setMentionQuery(null);
      return;
    }

    const textNode = range.startContainer as Text;
    const textBefore = (textNode.nodeValue ?? '').slice(0, range.startOffset);
    const match = MENTION_PATTERN.exec(textBefore);
    if (!match) {
      mentionAnchorRef.current = null;
      setMentionQuery(null);
      return;
    }

    const end = range.startOffset;
    mentionAnchorRef.current = { node: textNode, start: end - match[1].length - 1, end };
    setMentionQuery(match[1]);
  }, []);

  const handleInput = useCallback(() => {
    if (composingRef.current) return;
    setSuppressMenu(false);
    syncFromDom();
    updateMention();
  }, [syncFromDom, updateMention]);

  const addReference = useCallback(
    (option: ReferenceOption) => {
      const root = editorRef.current;
      if (!root) return;

      if (chipHosts.some((chip) => chip.id === option.id)) {
        mentionAnchorRef.current = null;
        setMentionQuery(null);
        setSuppressMenu(true);
        return;
      }

      root.focus();
      const anchor = mentionAnchorRef.current;
      const host = createChipHost(option.id);
      const space = document.createTextNode(' ');

      if (anchor && root.contains(anchor.node) && anchor.start >= 0) {
        const range = document.createRange();
        range.setStart(anchor.node, anchor.start);
        range.setEnd(anchor.node, Math.min(anchor.end, anchor.node.nodeValue?.length ?? anchor.end));
        range.deleteContents();
        range.insertNode(space);
        range.insertNode(host);
      } else {
        root.appendChild(host);
        root.appendChild(space);
      }

      const caret = document.createRange();
      caret.setStartAfter(space);
      caret.collapse(true);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(caret);

      mentionAnchorRef.current = null;
      setMentionQuery(null);
      setSuppressMenu(true);
      setActiveIndex(0);
      syncFromDom();
    },
    [chipHosts, syncFromDom],
  );

  const removeReference = useCallback(
    (id: string) => {
      const root = editorRef.current;
      if (!root) return;
      const host = root.querySelector<HTMLElement>(`[data-chip="${CSS.escape(id)}"]`);
      if (host) {
        const next = host.nextSibling;
        host.remove();
        root.focus();
        const selection = window.getSelection();
        const range = document.createRange();
        if (next) {
          range.setStartBefore(next);
          range.collapse(true);
        } else {
          range.selectNodeContents(root);
          range.collapse(false);
        }
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      syncFromDom();
    },
    [syncFromDom],
  );

  const handleSubmit = useCallback(() => {
    if (!canSubmit) return;
    const root = editorRef.current;
    const serialized = root ? serialize(root) : value;
    onSubmit?.(valueToDisplay(serialized).trim());
  }, [canSubmit, onSubmit, value, valueToDisplay]);

  const insertLineBreak = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    range.deleteContents();
    const br = document.createElement('br');
    range.insertNode(br);
    const caret = document.createRange();
    caret.setStartAfter(br);
    caret.collapse(true);
    selection.removeAllRanges();
    selection.addRange(caret);
    syncFromDom();
  }, [syncFromDom]);

  const chipBeforeCaret = useCallback((range: Range): HTMLElement | null => {
    const { startContainer, startOffset } = range;
    if (startContainer.nodeType === Node.TEXT_NODE) {
      if (startOffset > 0) return null;
      const prev = startContainer.previousSibling as HTMLElement | null;
      return prev && prev.dataset?.chip ? prev : null;
    }
    if (startContainer === editorRef.current) {
      const prev = startContainer.childNodes[startOffset - 1] as HTMLElement | undefined;
      return prev && prev.dataset?.chip ? prev : null;
    }
    return null;
  }, []);

  const handleSuggestionChange = useCallback(
    (suggestion: string) => {
      if (suggestion === activeSuggestion) {
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
  }, [referenceMenuOpen, chipHosts.length, value]);

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
      mentionAnchorRef.current = null;
      setSuppressMenu(true);
      setMentionQuery(null);
    };

    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [referenceMenuOpen]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (composingRef.current) return;

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
        mentionAnchorRef.current = null;
        setSuppressMenu(true);
        setMentionQuery(null);
        return;
      }
    }

    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
      return;
    }

    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();
      insertLineBreak();
      return;
    }

    if (event.key === 'Backspace') {
      const selection = window.getSelection();
      if (selection && selection.isCollapsed && selection.rangeCount > 0) {
        const chip = chipBeforeCaret(selection.getRangeAt(0));
        if (chip?.dataset.chip) {
          event.preventDefault();
          removeReference(chip.dataset.chip);
        }
      }
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

              <div className={styles.inputRow}>
                <div
                  ref={editorRef}
                  role="textbox"
                  aria-multiline="true"
                  aria-label={placeholder}
                  aria-expanded={referenceMenuOpen}
                  aria-controls={referenceMenuOpen ? listId : undefined}
                  data-chat-input
                  data-placeholder={placeholder}
                  data-empty={isEmpty ? 'true' : undefined}
                  contentEditable={!disabled}
                  suppressContentEditableWarning
                  spellCheck
                  className={cn('rc-body-sm', styles.editor)}
                  onInput={handleInput}
                  onKeyDown={handleKeyDown}
                  onKeyUp={updateMention}
                  onMouseUp={updateMention}
                  onFocus={updateMention}
                  onCompositionStart={() => {
                    composingRef.current = true;
                  }}
                  onCompositionEnd={() => {
                    composingRef.current = false;
                    handleInput();
                  }}
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

      {chipHosts.map(({ id, el }) => {
        const reference = referenceMap.get(id);
        if (!reference) return null;
        return createPortal(
          <ReferenceTag
            reference={reference}
            disabled={disabled}
            onRemove={() => removeReference(id)}
          />,
          el,
          id,
        );
      })}
    </div>
  );
}
