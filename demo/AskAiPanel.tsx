import { useCallback, useEffect, useRef, useState } from 'react';
import { ChatWithAI, type Reference, type ReferenceOption } from '../src/components/ChatWithAI';
import { IconButton } from '../src/components/IconButton';
import { Link } from '../src/components/Link';
import { Divider } from '../src/components/Divider';
import { Icon } from '../src/icons';
import type { ChatScope } from './Dashboard';
import type { QuoteRequest } from './App';
import { RECORDS, TRENDS, type RecordEntry } from './data';
import {
  buildAnswer,
  countTokens,
  defaultSuggestions,
  sampleRecords,
  type Answer,
  type AnswerBlock,
  type DataRow,
  type DataView,
} from './aiEngine';
import {
  loadConversations,
  saveConversation,
  type StoredConversation,
} from './history';
import styles from './demo.module.css';

type View = 'conversation' | 'scope' | 'history';
type AssistantStatus = 'thinking' | 'streaming' | 'done';

interface UserMessage {
  id: number;
  role: 'user';
  text: string;
  reference?: { shorthand: string; label: string };
  quote?: string;
}

interface AssistantMessage {
  id: number;
  role: 'assistant';
  answer: Answer;
  status: AssistantStatus;
  revealed: number;
  showData: boolean;
  showProof: boolean;
  showRefs: boolean;
}

type Message = UserMessage | AssistantMessage;

const REFERENCE_OPTIONS: ReferenceOption[] = [
  { id: 'trend-1', kind: 'trend', shorthand: 'T1', label: 'Trend 1' },
  { id: 'trend-2', kind: 'trend', shorthand: 'T2', label: 'Trend 2' },
  { id: 'signal-1', kind: 'signal', shorthand: 'S1', label: 'Signal 1' },
  { id: 'signal-2', kind: 'signal', shorthand: 'S2', label: 'Signal 2' },
  { id: 'signal-3', kind: 'signal', shorthand: 'S3', label: 'Signal 3' },
];

const TYPE_INTERVAL_MS = 22;
const THINKING_MS = 650;

interface AskAiPanelProps {
  scope: ChatScope;
  onScopeChange: (scope: ChatScope) => void;
  onClose: () => void;
  onOpenRecord?: (record: RecordEntry) => void;
  expanded: boolean;
  onToggleExpanded: () => void;
  quote?: QuoteRequest | null;
}

function RecordsDetail({
  row,
  onOpenRecord,
}: {
  row: DataRow;
  onOpenRecord?: (record: RecordEntry) => void;
}) {
  const records = sampleRecords(row.label);

  return (
    <div className={styles.records}>
      <span className={`rc-label-sm ${styles.recordsTitle}`}>Backing records</span>

      <div className={styles.recordsTable}>
        <div className={`${styles.recordsRow} ${styles.recordsHeadRow}`}>
          <span className={`rc-label-sm ${styles.recordsColHead}`}>Record ID</span>
          <span className={`rc-label-sm ${styles.recordsColHead}`}>Verbatim</span>
          <span className={`rc-label-sm ${styles.recordsColHead}`}>Date</span>
        </div>
        {records.map((record) => (
          <div key={record.id} className={styles.recordsRow}>
            <Link
              size="sm"
              className={styles.recordIdLink}
              onClick={() =>
                onOpenRecord?.({
                  id: Number(record.id),
                  specialty: '',
                  institution: '',
                  date: record.date,
                  quote: record.verbatim,
                })
              }
            >
              {record.id}
            </Link>
            <span className={`rc-body-sm ${styles.recordVerbatim}`}>{record.verbatim}</span>
            <span className={`rc-body-sm ${styles.recordDate}`}>{record.date}</span>
          </div>
        ))}
      </div>

      <span className={`rc-body-xs ${styles.recordsNote}`}>
        Showing {records.length} sample {records.length === 1 ? 'record' : 'records'}
      </span>
    </div>
  );
}

function DataViewCard({
  data,
  onOpenRecord,
}: {
  data: DataView;
  onOpenRecord?: (record: RecordEntry) => void;
}) {
  const [grown, setGrown] = useState(false);
  const [openRow, setOpenRow] = useState<string | null>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setGrown(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.dataView}>
      <div className={styles.dataViewHead}>
        <Icon name="arrows-left-right" size={16} tone="ai" />
        <span className={`rc-label-md ${styles.dataViewHeadText}`}>Data view</span>
      </div>

      <div className={styles.dataViewBody}>
        <div className={styles.dataTable}>
          <div className={`${styles.dataRow} ${styles.dataHeadRow}`}>
            <span className={`rc-label-sm ${styles.dataColHead}`}>{data.columns[0]}</span>
            <span className={`rc-label-sm ${styles.dataColHead}`}>{data.columns[1]}</span>
            <span className={`rc-label-sm ${styles.dataColHead}`}>{data.columns[2]}</span>
          </div>
          {data.rows.map((row) => {
            const isOpen = openRow === row.label;
            return (
              <div key={row.label} className={styles.dataRowGroup}>
                <button
                  type="button"
                  className={`${styles.dataRow} ${styles.dataRowButton} ${isOpen ? styles.dataRowOpen : ''}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenRow(isOpen ? null : row.label)}
                >
                  <span className={`rc-body-sm ${styles.dataCell}`}>
                    <Icon name="caret-right" size={12} tone="ai" className={styles.dataCaret} />
                    {row.label}
                  </span>
                  <span className={`rc-body-sm ${styles.dataValue}`}>{row.value}</span>
                  <span className={styles.dataShare}>
                    <span className={styles.dataBarTrack}>
                      <span
                        className={styles.dataBarFill}
                        style={{ width: grown ? `${row.share}%` : 0 }}
                      />
                    </span>
                    <span className={`rc-body-sm ${styles.dataPct}`}>{row.share}%</span>
                  </span>
                </button>
                {isOpen ? (
                  <>
                    <Divider />
                    <RecordsDetail row={row} onOpenRecord={onOpenRecord} />
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.dataViewFoot}>
        <span className={styles.dataSource}>
          <span className={styles.dataSourceDot} aria-hidden />
          <span className="rc-body-xs">{data.source}</span>
        </span>
        <span className={styles.dataActions}>
          <span className={styles.dataAction}>
            <Icon name="magnifying-glass" size={14} tone="tertiary" />
            <span className="rc-body-xs">Trace</span>
          </span>
          <span className={styles.dataAction}>
            <Icon name="flag" size={14} tone="tertiary" />
            <span className="rc-body-xs">Flag</span>
          </span>
        </span>
      </div>
    </div>
  );
}

function AnswerView({
  message,
  onOpenRecord,
}: {
  message: AssistantMessage;
  onOpenRecord?: (record: RecordEntry) => void;
}) {
  const { answer, revealed, showData, showProof, showRefs, status } = message;
  const streaming = status === 'streaming';
  const total = countTokens(answer);

  let remaining = revealed;
  const rendered: { block: AnswerBlock; count: number }[] = [];
  for (const block of answer.blocks) {
    if (remaining <= 0) break;
    const count = Math.min(remaining, block.tokens.length);
    rendered.push({ block, count });
    remaining -= count;
  }

  const lastIndex = rendered.length - 1;

  const renderContent = (block: AnswerBlock, count: number, index: number) => {
    const tokens = block.tokens.slice(0, count);
    const withCursor = streaming && index === lastIndex && revealed < total;
    return (
      <>
        {tokens.map((token, tokenIndex) =>
          token.bold ? (
            <strong key={tokenIndex}>{token.text}</strong>
          ) : (
            <span key={tokenIndex}>{token.text}</span>
          ),
        )}
        {withCursor ? <span className={styles.cursor} /> : null}
      </>
    );
  };

  // Group consecutive list items into a single <ul> so bullets sit tight
  // together (8px), while paragraphs keep the larger block gap.
  type RenderGroup =
    | { kind: 'p'; index: number; block: AnswerBlock; count: number }
    | { kind: 'ul'; items: { index: number; block: AnswerBlock; count: number }[] };
  const groups: RenderGroup[] = [];
  rendered.forEach(({ block, count }, index) => {
    if (block.type === 'li') {
      const last = groups[groups.length - 1];
      if (last && last.kind === 'ul') {
        last.items.push({ index, block, count });
      } else {
        groups.push({ kind: 'ul', items: [{ index, block, count }] });
      }
    } else {
      groups.push({ kind: 'p', index, block, count });
    }
  });

  return (
    <div className={styles.answer} data-selectable-ask>
      {groups.map((group, groupIndex) =>
        group.kind === 'ul' ? (
          <ul key={groupIndex} className="rc-body-sm">
            {group.items.map((item) => (
              <li key={item.index}>{renderContent(item.block, item.count, item.index)}</li>
            ))}
          </ul>
        ) : (
          <p key={groupIndex} className="rc-body-sm">
            {renderContent(group.block, group.count, group.index)}
          </p>
        ),
      )}

      {showData && answer.dataView ? (
        <DataViewCard data={answer.dataView} onOpenRecord={onOpenRecord} />
      ) : null}

      {showProof && answer.proof ? (
        <div className={styles.proof}>
          <span className={`rc-label-sm ${styles.proofLabel}`}>{answer.proof.label}</span>
          <span className={`rc-body-sm ${styles.answerProofQuote}`}>{answer.proof.quote}</span>
        </div>
      ) : null}

      {showRefs && answer.refs ? (
        <div className={styles.refChips}>
          {answer.refs.map((ref) => {
            const match = /^R(\d+)$/.exec(ref);
            const id = match ? Number(match[1]) : Number.NaN;
            const clickable = onOpenRecord && !Number.isNaN(id) && Boolean(RECORDS[id]);
            return clickable ? (
              <button
                key={ref}
                type="button"
                className={`rc-label-sm ${styles.refChip} ${styles.refChipButton}`}
                onClick={() => onOpenRecord(RECORDS[id])}
              >
                {ref}
              </button>
            ) : (
              <span key={ref} className={`rc-label-sm ${styles.refChip}`}>
                {ref}
              </span>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function ThinkingBubble() {
  return (
    <div className={`${styles.answer} ${styles.thinkingCard}`}>
      <span className={styles.thinking} aria-label="Assistant is thinking">
        <span />
        <span />
        <span />
      </span>
    </div>
  );
}

export function AskAiPanel({
  scope,
  onScopeChange,
  onClose,
  expanded,
  onToggleExpanded,
  quote,
  onOpenRecord,
}: AskAiPanelProps) {
  const [view, setView] = useState<View>('conversation');
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [generating, setGenerating] = useState(false);
  const [attachedQuote, setAttachedQuote] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>(() => defaultSuggestions(scope));
  const [suggestionsOpen, setSuggestionsOpen] = useState(true);
  const [conversations, setConversations] = useState<StoredConversation[]>(() =>
    loadConversations(),
  );

  const idRef = useRef(0);
  const conversationIdRef = useRef<string>(`c-${Date.now()}`);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const lastQuoteNonce = useRef<number>(0);

  const isSignalScope = scope.kind === 'signal';

  // A new highlighted-text request arrives from the page: attach it as a quoted
  // context chip, make sure we're on the conversation view, and focus the input.
  useEffect(() => {
    if (!quote || quote.nonce === lastQuoteNonce.current) return;
    lastQuoteNonce.current = quote.nonce;
    setAttachedQuote(quote.text);
    setView('conversation');
    const timer = window.setTimeout(() => {
      footerRef.current?.querySelector('textarea')?.focus();
    }, 60);
    return () => window.clearTimeout(timer);
  }, [quote]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => () => clearTimers(), []);

  // Reset suggestions when scope changes and no conversation is in progress.
  useEffect(() => {
    if (messages.length === 0) setSuggestions(defaultSuggestions(scope));
  }, [scope, messages.length]);

  // Auto-scroll to the newest content.
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  });

  const references: Reference[] =
    scope.kind === 'whole'
      ? []
      : [
          {
            id: scope.kind === 'signal' ? 'signal-2' : 'trend-1',
            kind: scope.kind === 'signal' ? 'signal' : 'trend',
            shorthand: scope.shorthand ?? 'S2',
            label: scope.label,
          },
        ];

  const updateLastAssistant = useCallback(
    (updater: (message: AssistantMessage) => AssistantMessage) => {
      setMessages((prev) => {
        const next = [...prev];
        for (let i = next.length - 1; i >= 0; i -= 1) {
          const message = next[i];
          if (message.role === 'assistant') {
            next[i] = updater(message);
            break;
          }
        }
        return next;
      });
    },
    [],
  );

  const persist = useCallback(
    (finalMessages: Message[]) => {
      const firstUser = finalMessages.find((m): m is UserMessage => m.role === 'user');
      if (!firstUser) return;
      const conversation: StoredConversation = {
        id: conversationIdRef.current,
        title: firstUser.text,
        scope,
        ts: Date.now(),
      };
      const next = saveConversation(conversation);
      setConversations(next);
    },
    [scope],
  );

  const streamAnswer = useCallback(
    (answer: Answer) => {
      const total = countTokens(answer);

      const thinkingTimer = setTimeout(() => {
        updateLastAssistant((message) => ({ ...message, status: 'streaming' }));

        const step = () => {
          let done = false;
          updateLastAssistant((message) => {
            const revealed = Math.min(message.revealed + 1, total);
            if (revealed >= total) done = true;
            return { ...message, revealed };
          });

          if (done) {
            let delay = 0;
            if (answer.dataView) {
              delay += 240;
              const dataTimer = setTimeout(
                () => updateLastAssistant((message) => ({ ...message, showData: true })),
                delay,
              );
              timers.current.push(dataTimer);
            }
            if (answer.proof) {
              delay += 300;
              const proofTimer = setTimeout(
                () => updateLastAssistant((message) => ({ ...message, showProof: true })),
                delay,
              );
              timers.current.push(proofTimer);
            }
            if (answer.refs) {
              delay += 280;
              const refsTimer = setTimeout(
                () => updateLastAssistant((message) => ({ ...message, showRefs: true })),
                delay,
              );
              timers.current.push(refsTimer);
            }
            delay += 260;
            const doneTimer = setTimeout(() => {
              updateLastAssistant((message) => ({ ...message, status: 'done' }));
              setSuggestions(answer.followUps);
              setGenerating(false);
              setMessages((current) => {
                persist(current);
                return current;
              });
            }, delay);
            timers.current.push(doneTimer);
          } else {
            const nextTimer = setTimeout(step, TYPE_INTERVAL_MS);
            timers.current.push(nextTimer);
          }
        };

        const first = setTimeout(step, TYPE_INTERVAL_MS);
        timers.current.push(first);
      }, THINKING_MS);

      timers.current.push(thinkingTimer);
    },
    [persist, updateLastAssistant],
  );

  const send = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || generating) return;

      // Fold any attached highlight into intent detection so the simulated
      // answer reflects what the user is asking about.
      const intentText = attachedQuote ? `${trimmed} ${attachedQuote}` : trimmed;
      const answer = buildAnswer(intentText, scope);
      const userId = (idRef.current += 1);
      const assistantId = (idRef.current += 1);

      const userMessage: UserMessage = {
        id: userId,
        role: 'user',
        text: trimmed,
        reference: isSignalScope
          ? { shorthand: scope.shorthand ?? 'S2', label: scope.label }
          : undefined,
        quote: attachedQuote ?? undefined,
      };
      const assistantMessage: AssistantMessage = {
        id: assistantId,
        role: 'assistant',
        answer,
        status: 'thinking',
        revealed: 0,
        showData: false,
        showProof: false,
        showRefs: false,
      };

      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setValue('');
      setAttachedQuote(null);
      setGenerating(true);
      streamAnswer(answer);
    },
    [attachedQuote, generating, isSignalScope, scope, streamAnswer],
  );

  const startNewChat = () => {
    clearTimers();
    setGenerating(false);
    setMessages([]);
    setValue('');
    conversationIdRef.current = `c-${Date.now()}`;
    setSuggestions(defaultSuggestions(scope));
    setView('scope');
  };

  const chooseScope = (next: ChatScope) => {
    clearTimers();
    setGenerating(false);
    onScopeChange(next);
    setMessages([]);
    conversationIdRef.current = `c-${Date.now()}`;
    setSuggestions(defaultSuggestions(next));
    setView('conversation');
  };

  const openHistoryItem = (conversation: StoredConversation) => {
    clearTimers();
    setGenerating(false);
    onScopeChange(conversation.scope);
    conversationIdRef.current = conversation.id;
    const answer = buildAnswer(conversation.title, conversation.scope);
    setMessages([
      {
        id: (idRef.current += 1),
        role: 'user',
        text: conversation.title,
        reference:
          conversation.scope.kind === 'signal'
            ? { shorthand: conversation.scope.shorthand ?? 'S2', label: conversation.scope.label }
            : undefined,
      },
      {
        id: (idRef.current += 1),
        role: 'assistant',
        answer,
        status: 'done',
        revealed: countTokens(answer),
        showData: true,
        showProof: true,
        showRefs: true,
      },
    ]);
    setSuggestions(answer.followUps);
    setView('conversation');
  };

  const headerTitle =
    view === 'scope' ? 'New chat' : view === 'history' ? 'Conversations' : 'Ask AI';
  const headerSubtitle =
    view === 'scope'
      ? 'Choose a scope to begin'
      : view === 'history'
        ? 'Saved to this project'
        : isSignalScope
          ? scope.label
          : undefined;

  return (
    <aside className={`${styles.panel} ${expanded ? styles.panelExpanded : ''}`} aria-label="Ask AI">
      <header className={styles.panelHeader}>
        <IconButton
          variant="ghost"
          size="sm"
          label="Back to conversations"
          onClick={() => setView('history')}
        >
          <Icon name="caret-left" size={18} tone="primary" />
        </IconButton>
        <span className={styles.panelAiMark} aria-hidden>
          <Icon name="sparkle" size={20} tone="on-color" />
        </span>
        <div className={styles.panelTitleBlock}>
          <span className={`rc-heading-h9 ${styles.panelTitle}`}>{headerTitle}</span>
          {headerSubtitle ? (
            <span className={`rc-body-xs ${styles.panelSubtitle}`}>{headerSubtitle}</span>
          ) : null}
        </div>
        <div className={styles.panelHeaderActions}>
          <IconButton variant="ghost" size="sm" label="New chat" onClick={startNewChat}>
            <Icon name="plus" size={18} tone="primary" />
          </IconButton>
          <IconButton variant="ghost" size="sm" label="Expand" onClick={onToggleExpanded}>
            <Icon name="arrow-square-out" size={18} tone="primary" />
          </IconButton>
          <IconButton variant="ghost" size="sm" label="Close" onClick={onClose}>
            <Icon name="x" size={18} tone="primary" />
          </IconButton>
        </div>
      </header>

      <div className={styles.panelBody} ref={bodyRef}>
        {view === 'scope' ? (
          <ScopePicker onPick={chooseScope} />
        ) : view === 'history' ? (
          <History conversations={conversations} onOpen={openHistoryItem} />
        ) : messages.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.scopedTo}>
              <span className="rc-body-sm">Conversation scoped to:</span>
              <span className={`rc-label-md ${styles.scopeChip}`}>
                {isSignalScope ? (
                  <span className="rc-label-sm">{scope.shorthand}</span>
                ) : (
                  <Icon name="arrow-up-right" size={12} tone="ai" />
                )}
                {scope.label}
              </span>
            </div>
            <p className={`rc-body-sm ${styles.emptyHelper}`}>
              Ask a question below, or use a suggestion. Reference signals, trends or records anytime
              with <strong>@</strong>.
            </p>
          </div>
        ) : (
          <div className={styles.messages}>
            {messages.map((message) =>
              message.role === 'user' ? (
                <div key={message.id} className={`rc-body-sm ${styles.userBubble}`}>
                  {message.quote ? (
                    <span className={`rc-body-xs ${styles.userQuote}`}>{message.quote}</span>
                  ) : null}
                  {message.reference ? (
                    <>
                      <span className={styles.refToken}>{message.reference.label}</span>{' '}
                    </>
                  ) : null}
                  {message.text}
                </div>
              ) : message.status === 'thinking' ? (
                <ThinkingBubble key={message.id} />
              ) : (
                <AnswerView
                  key={message.id}
                  message={message}
                  onOpenRecord={onOpenRecord}
                />
              ),
            )}
          </div>
        )}
      </div>

      {view === 'conversation' ? (
        <div className={styles.suggested}>
          <button
            type="button"
            className={styles.suggestedHeader}
            onClick={() => setSuggestionsOpen((open) => !open)}
            aria-expanded={suggestionsOpen}
          >
            <span className={`rc-label-sm ${styles.suggestedLabel}`}>Suggested</span>
            <Icon
              name="caret-down"
              size={16}
              tone="tertiary"
              className={suggestionsOpen ? styles.suggestedCaretOpen : styles.suggestedCaret}
            />
          </button>
          {suggestionsOpen ? (
            <div className={styles.suggestionList}>
              {suggestions
                .filter((suggestion, index, all) => all.indexOf(suggestion) === index)
                .map((suggestion, index) => (
                  <button
                    key={`${suggestion}-${index}`}
                    type="button"
                    className={styles.suggestionRow}
                    disabled={generating}
                    onClick={() => send(suggestion)}
                  >
                    <span className={`rc-heading-h8 ${styles.suggestionText}`}>{suggestion}</span>
                    <Icon name="arrow-right" size={16} tone="tertiary" />
                  </button>
                ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {view !== 'history' ? (
        <div className={styles.panelFooter} ref={footerRef}>
          <ChatWithAI
            value={value}
            onChange={setValue}
            onSubmit={send}
            references={references}
            referenceOptions={REFERENCE_OPTIONS}
            loading={generating}
            placeholder="Ask a follow-up. Type @ to reference or select any text to ask about"
            contextSlot={
              attachedQuote ? (
                <div className={styles.composerQuote}>
                  <span className={`rc-body-xs ${styles.composerQuoteText}`}>{attachedQuote}</span>
                  <button
                    type="button"
                    className={styles.composerQuoteClose}
                    aria-label="Remove quoted text"
                    onClick={() => setAttachedQuote(null)}
                  >
                    <Icon name="x" size={12} tone="ai" />
                  </button>
                </div>
              ) : null
            }
          />
        </div>
      ) : null}
    </aside>
  );
}

function ScopePicker({ onPick }: { onPick: (scope: ChatScope) => void }) {
  return (
    <>
      <div className={styles.pickerIntro}>
        <span className={`rc-heading-h7 ${styles.pickerHeading}`}>Where do you want to start?</span>
        <span className={`rc-body-sm ${styles.pickerSub}`}>
          Pick a scope to focus the conversation or start broad with the whole report.
        </span>
      </div>

      <button
        type="button"
        className={styles.scopeRow}
        onClick={() => onPick({ kind: 'whole', label: 'Whole report' })}
      >
        <span className={styles.scopeGlyph}>
          <Icon name="arrow-up-right" size={18} tone="ai" />
        </span>
        <span className={styles.scopeRowText}>
          <span className={`rc-heading-h9 ${styles.scopeRowTitle}`}>Whole report</span>
          <span className={`rc-body-xs ${styles.scopeRowSub}`}>3 trends · 9 signals</span>
        </span>
      </button>

      {TRENDS.map((trend, trendIndex) => (
        <div key={trend.id} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button
            type="button"
            className={styles.scopeRow}
            onClick={() => onPick({ kind: 'trend', label: trend.label, shorthand: `T${trendIndex + 1}` })}
          >
            <span className={styles.scopeGlyph}>{`T${trendIndex + 1}`}</span>
            <span className={styles.scopeRowText}>
              <span className={`rc-heading-h9 ${styles.scopeRowTitle}`}>{trend.label}</span>
              <span className={`rc-body-xs ${styles.scopeRowSub}`}>{trend.title}</span>
            </span>
          </button>
          <div className={styles.signalsSubhead}>
            <Icon name="arrow-elbow-down-right" size={16} tone="tertiary" />
            <span className="rc-body-xs">Signals</span>
          </div>
          {trend.signals.map((signal) => (
            <button
              key={`${trend.id}-${signal.id}`}
              type="button"
              className={`${styles.scopeRow} ${styles.scopeRowIndented}`}
              onClick={() =>
                onPick({ kind: 'signal', label: `Signal ${signal.seq}`, shorthand: signal.shorthand })
              }
            >
              <span className={styles.scopeGlyph}>{signal.shorthand}</span>
              <span className={styles.scopeRowText}>
                <span className={`rc-heading-h9 ${styles.scopeRowTitle}`}>{`Signal ${signal.seq}`}</span>
                <span className={`rc-body-xs ${styles.scopeRowSub}`}>{signal.title}</span>
              </span>
            </button>
          ))}
        </div>
      ))}
    </>
  );
}

function timeAgo(ts: number): string {
  const minutes = Math.max(1, Math.round((Date.now() - ts) / 60000));
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return `${days}d ago`;
}

function History({
  conversations,
  onOpen,
}: {
  conversations: StoredConversation[];
  onOpen: (conversation: StoredConversation) => void;
}) {
  const dayMs = 24 * 60 * 60 * 1000;
  const now = Date.now();
  const today = conversations.filter((c) => now - c.ts < dayMs);
  const earlier = conversations.filter((c) => now - c.ts >= dayMs);

  const groups: [string, StoredConversation[]][] = [
    ['Today', today],
    ['Earlier', earlier],
  ];

  return (
    <>
      <span className="rc-heading-h7" style={{ color: 'var(--rc-text-primary)' }}>
        Conversations history
      </span>
      {conversations.length === 0 ? (
        <p className={`rc-body-sm`} style={{ color: 'var(--rc-text-tertiary)' }}>
          No saved conversations yet. Ask a question to start one.
        </p>
      ) : null}
      {groups.map(([group, items]) =>
        items.length === 0 ? null : (
          <div key={group} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span className={`rc-label-md ${styles.historyGroupLabel}`}>{group}</span>
            {items.map((conversation) => (
              <button
                key={conversation.id}
                type="button"
                className={styles.historyRow}
                onClick={() => onOpen(conversation)}
              >
                <span className={styles.historyRowText}>
                  <span className={`rc-label-lg ${styles.historyRowTitle}`}>{conversation.title}</span>
                  <span className={`rc-body-xs ${styles.historyRowTime}`}>{timeAgo(conversation.ts)}</span>
                </span>
                <Icon name="arrow-right" size={16} tone="tertiary" />
              </button>
            ))}
          </div>
        ),
      )}
    </>
  );
}
