import {
  useId,
  useState,
  type FocusEvent,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import styles from './Tooltip.module.css';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipBubbleProps {
  className?: string;
  content: ReactNode;
  placement?: TooltipPlacement;
  multiline?: boolean;
}

const placementSurfaceClass: Record<TooltipPlacement, string> = {
  top: styles.surfaceTop,
  bottom: styles.surfaceBottom,
  left: styles.surfaceLeft,
  right: styles.surfaceRight,
};

const placementCaretClass: Record<TooltipPlacement, string> = {
  top: styles.caretTop,
  bottom: styles.caretBottom,
  left: styles.caretLeft,
  right: styles.caretRight,
};

const caretFirst: Record<TooltipPlacement, boolean> = {
  top: false,
  bottom: true,
  left: false,
  right: true,
};

export function TooltipBubble({
  className,
  content,
  placement = 'top',
  multiline = false,
}: TooltipBubbleProps) {
  const bubble = (
    <span className={cn('rc-body-xs', styles.bubble, multiline && styles.multiline)}>{content}</span>
  );
  const caret = <span className={cn(styles.caret, placementCaretClass[placement])} aria-hidden />;

  return (
    <span className={cn(styles.surface, placementSurfaceClass[placement], className)}>
      {caretFirst[placement] ? (
        <>
          {caret}
          {bubble}
        </>
      ) : (
        <>
          {bubble}
          {caret}
        </>
      )}
    </span>
  );
}

export interface TooltipProps {
  className?: string;
  content: ReactNode;
  placement?: TooltipPlacement;
  multiline?: boolean;
  children: ReactElement;
}

export function Tooltip({
  className,
  content,
  placement = 'top',
  multiline = false,
  children,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();

  const show = () => setOpen(true);
  const hide = () => setOpen(false);

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      hide();
    }
  };

  const placementClass = {
    top: styles.placementTop,
    bottom: styles.placementBottom,
    left: styles.placementLeft,
    right: styles.placementRight,
  }[placement];

  return (
    <span
      className={cn(styles.root, className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={handleBlur}
    >
      <span className={styles.trigger} aria-describedby={open ? tooltipId : undefined}>
        {children}
      </span>
      {open ? (
        <span id={tooltipId} role="tooltip" className={cn(styles.popup, placementClass)}>
          <TooltipBubble content={content} placement={placement} multiline={multiline} />
        </span>
      ) : null}
    </span>
  );
}
