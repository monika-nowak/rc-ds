import { useEffect, useRef, useState } from 'react';
import { Icon } from '../src/icons';
import styles from './demo.module.css';

interface Placement {
  top: number;
  left: number;
  below: boolean;
}

const MIN_CHARS = 3;
const NAV_HEIGHT = 56;

/**
 * Watches text selections inside any region marked `data-selectable-ask` (the
 * main content and AI answer bubbles — never the composer or user messages) and
 * surfaces a floating "Ask AI" pill above the selection. Clicking it hands the
 * selected text to `onAsk`.
 */
export function SelectionAsk({ onAsk }: { onAsk: (text: string) => void }) {
  const [state, setState] = useState<{ text: string; place: Placement } | null>(null);

  useEffect(() => {
    const evaluate = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
        setState(null);
        return;
      }

      const text = selection.toString().trim();
      if (text.length < MIN_CHARS) {
        setState(null);
        return;
      }

      const range = selection.getRangeAt(0);
      const node = range.commonAncestorContainer;
      const element =
        node.nodeType === Node.ELEMENT_NODE
          ? (node as Element)
          : node.parentElement;
      if (!element || !element.closest('[data-selectable-ask]')) {
        setState(null);
        return;
      }

      const rect = range.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) {
        setState(null);
        return;
      }

      const below = rect.top < NAV_HEIGHT + 16;
      setState({
        text,
        place: {
          top: below ? rect.bottom + 8 : rect.top - 8,
          left: Math.min(Math.max(rect.left + rect.width / 2, 72), window.innerWidth - 72),
          below,
        },
      });
    };

    const onMouseUp = () => window.setTimeout(evaluate, 0);
    const onSelectionChange = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) setState(null);
    };
    const dismiss = () => setState(null);

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('selectionchange', onSelectionChange);
    window.addEventListener('scroll', dismiss, true);
    window.addEventListener('resize', dismiss);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('selectionchange', onSelectionChange);
      window.removeEventListener('scroll', dismiss, true);
      window.removeEventListener('resize', dismiss);
    };
  }, []);

  const pending = useRef<string>('');
  pending.current = state?.text ?? '';

  if (!state) return null;

  return (
    <button
      type="button"
      className={styles.selectionAsk}
      style={{
        top: state.place.top,
        left: state.place.left,
        transform: state.place.below ? 'translate(-50%, 0)' : 'translate(-50%, -100%)',
      }}
      // Keep the selection alive: don't let mousedown collapse it before click.
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => {
        onAsk(pending.current);
        setState(null);
        window.getSelection()?.removeAllRanges();
      }}
    >
      <Icon name="sparkle" size={14} tone="ai" />
      <span className="rc-label-sm">Ask AI</span>
    </button>
  );
}
