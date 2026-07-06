import {
  cloneElement,
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import styles from './Popover.module.css';

export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';
export type PopoverAlign = 'start' | 'center' | 'end';
export type PopoverAppearance = 'default' | 'inverse';
export type PopoverOpenOn = 'click' | 'hover';

export interface PopoverContentProps {
  title?: ReactNode;
  description?: ReactNode;
  showTitle?: boolean;
  showDescription?: boolean;
  children?: ReactNode;
  className?: string;
}

export function PopoverContent({
  title,
  description,
  showTitle = true,
  showDescription = true,
  children,
  className,
}: PopoverContentProps) {
  const hasTitle = showTitle && title != null && title !== '';
  const hasDescription =
    showDescription && description != null && description !== '';

  return (
    <span className={cn(styles.content, className)}>
      {hasTitle ? <span className={cn('rc-label-md', styles.contentTitle)}>{title}</span> : null}
      {hasDescription ? (
        <span className={cn('rc-body-xs', styles.contentDescription)}>{description}</span>
      ) : null}
      {children}
    </span>
  );
}

export interface PopoverBubbleProps {
  children?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  showTitle?: boolean;
  showDescription?: boolean;
  placement?: PopoverPlacement;
  align?: PopoverAlign;
  caret?: boolean;
  appearance?: PopoverAppearance;
  className?: string;
}

const placementSurfaceClass: Record<PopoverPlacement, string> = {
  top: styles.surfaceTop,
  bottom: styles.surfaceBottom,
  left: styles.surfaceLeft,
  right: styles.surfaceRight,
};

const placementCaretClass: Record<PopoverPlacement, string> = {
  top: styles.caretTop,
  bottom: styles.caretBottom,
  left: styles.caretLeft,
  right: styles.caretRight,
};

const alignCaretClass: Record<PopoverAlign, string> = {
  start: styles.caretAlignStart,
  center: styles.caretAlignCenter,
  end: styles.caretAlignEnd,
};

const caretFirst: Record<PopoverPlacement, boolean> = {
  top: false,
  bottom: true,
  left: false,
  right: true,
};

const panelConnectClass: Record<PopoverPlacement, string> = {
  top: styles.panelConnectBottom,
  bottom: styles.panelConnectTop,
  left: styles.panelConnectRight,
  right: styles.panelConnectLeft,
};

function resolvePopoverPanelContent({
  children,
  title,
  description,
  showTitle,
  showDescription,
}: Pick<
  PopoverBubbleProps,
  'children' | 'title' | 'description' | 'showTitle' | 'showDescription'
>) {
  const hasStructuredContent = title != null || description != null;

  if (hasStructuredContent) {
    return (
      <PopoverContent
        title={title}
        description={description}
        showTitle={showTitle}
        showDescription={showDescription}
      >
        {children}
      </PopoverContent>
    );
  }

  return children;
}

export function PopoverBubble({
  children,
  title,
  description,
  showTitle,
  showDescription,
  placement = 'top',
  align = 'center',
  caret = true,
  appearance = 'default',
  className,
}: PopoverBubbleProps) {
  const panelContent = resolvePopoverPanelContent({
    children,
    title,
    description,
    showTitle,
    showDescription,
  });

  const panel = (
    <span
      className={cn(
        styles.panel,
        styles[appearance],
        caret && panelConnectClass[placement],
      )}
    >
      {panelContent}
    </span>
  );
  const caretNode = caret ? (
    <span
      className={cn(
        styles.caret,
        placementCaretClass[placement],
        alignCaretClass[align],
        appearance === 'inverse' ? styles.caretInverse : styles.caretDefault,
      )}
      aria-hidden
    />
  ) : null;

  return (
    <span
      className={cn(
        styles.surface,
        placementSurfaceClass[placement],
        !caret && styles.surfaceNoCaret,
        className,
      )}
    >
      {caretFirst[placement] ? (
        <>
          {caretNode}
          {panel}
        </>
      ) : (
        <>
          {panel}
          {caretNode}
        </>
      )}
    </span>
  );
}

export interface PopoverProps {
  children: ReactElement;
  content?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  showTitle?: boolean;
  showDescription?: boolean;
  placement?: PopoverPlacement;
  align?: PopoverAlign;
  caret?: boolean;
  appearance?: PopoverAppearance;
  openOn?: PopoverOpenOn;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Popover({
  children,
  content,
  title,
  description,
  showTitle,
  showDescription,
  placement = 'top',
  align = 'center',
  caret = true,
  appearance = 'default',
  openOn = 'click',
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  className,
}: PopoverProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = openProp ?? uncontrolledOpen;
  const rootRef = useRef<HTMLSpanElement>(null);
  const popoverId = useId();

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  useEffect(() => {
    if (!open || openOn !== 'click') return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open, openOn]);

  const show = () => setOpen(true);
  const hide = () => setOpen(false);
  const toggle = () => setOpen(!open);

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

  const alignClass = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
  }[align];

  const triggerProps =
    openOn === 'click'
      ? {
          onClick: toggle,
          'aria-expanded': open,
          'aria-controls': open ? popoverId : undefined,
        }
      : {};

  const trigger = cloneElement(children, triggerProps);

  return (
    <span
      ref={rootRef}
      className={cn(styles.root, className)}
      onMouseEnter={openOn === 'hover' ? show : undefined}
      onMouseLeave={openOn === 'hover' ? hide : undefined}
      onFocus={openOn === 'hover' ? show : undefined}
      onBlur={openOn === 'hover' ? handleBlur : undefined}
    >
      <span className={styles.trigger}>{trigger}</span>
      {open ? (
        <span
          id={popoverId}
          role="dialog"
          className={cn(styles.popup, placementClass, alignClass)}
        >
          <PopoverBubble
            placement={placement}
            align={align}
            caret={caret}
            appearance={appearance}
            title={title}
            description={description}
            showTitle={showTitle}
            showDescription={showDescription}
          >
            {content}
          </PopoverBubble>
        </span>
      ) : null}
    </span>
  );
}
