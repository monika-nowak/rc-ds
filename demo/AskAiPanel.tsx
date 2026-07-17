import { useCallback, useEffect, useRef, useState } from 'react';
import { ChatWithAI, type Reference, type ReferenceOption } from '../src/components/ChatWithAI';
import {
  ArrowsOutSimple,
  CellSignalFull,
  ChartLine,
  Chats,
  PresentationChart,
} from '@phosphor-icons/react';
import { Badge } from '../src/components/Badge';
import { StatusIndicator } from '../src/components/StatusIndicator';
import { Tooltip } from '../src/components/Tooltip';
import { IconButton } from '../src/components/IconButton';
import { Divider } from '../src/components/Divider';
import { Icon } from '../src/icons';
import type { ChatScope } from './Dashboard';
import type { QuoteRequest } from './App';
import { RECORDS, SIGNALS, TRENDS, formatThemeLabel, type RecordEntry } from './data';
import {
  buildAnswer,
  countTokens,
  defaultSuggestions,
  type Answer,
  type AnswerBlock,
  type DataRow,
  type DataView,
  type EvidenceRecord,
} from './aiEngine';
import { generateAnswer, llmConfigured, type ChatTurn } from './llm';
import {
  loadActiveConversationId,
  loadConversations,
  saveActiveConversationId,
  saveConversation,
  type ConversationTurn,
  type StoredConversation,
} from './history';
import {
  clearLlmConfig,
  loadLlmConfig,
  PROVIDER_DEFAULTS,
  PROVIDER_ORDER,
  saveLlmConfig,
  type LlmConfig,
  type LlmProvider,
} from './llmSettings';
import { Input } from '../src/components/Input';
import { Select, type SelectEntry } from '../src/components/Select';
import { Button } from '../src/components/Button';
import { Popover } from '../src/components/Popover';
import { WelcomeHero } from './WelcomeHero';
import { SparkleGlyph } from './SparkleGlyph';
import { ProofChart } from './ProofChart';
import styles from './demo.module.css';

type View = 'conversation' | 'history' | 'settings';
type AssistantStatus = 'thinking' | 'streaming' | 'done';

interface UserMessage {
  id: number;
  role: 'user';
  text: string;
  references?: { shorthand: string; label: string }[];
  quote?: string;
  /** True when `text` already reads naturally with reference labels inline. */
  composed?: boolean;
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

// Reference options are built from the real report data so the user can @-mention
// (and stack) any signal or trend — e.g. compare Signal 1 with Signal 6.
const REFERENCE_OPTIONS: ReferenceOption[] = [
  ...TRENDS.map<ReferenceOption>((trend) => ({
    id: trend.id,
    kind: 'trend',
    shorthand: trend.label.replace('Trend ', 'T'),
    label: trend.label,
  })),
  ...SIGNALS.map<ReferenceOption>((signal) => ({
    id: signal.id,
    kind: 'signal',
    shorthand: signal.shorthand,
    label: `Signal ${signal.seq}`,
  })),
];


const TYPE_INTERVAL_MS = 22;
const THINKING_MS = 650;

/** Time-of-day greeting for the welcome state. */
function greetingForNow(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning!';
  if (h < 18) return 'Good afternoon!';
  return 'Good evening!';
}

/** Flatten an answer into plain text so it can be fed back as chat history. */
function answerToText(answer: Answer): string {
  return answer.blocks
    .map((block) => {
      const text = block.tokens.map((token) => token.text).join('').trim();
      return block.type === 'li' ? `- ${text}` : text;
    })
    .join('\n');
}

/** A minimal answer shown when the live model call fails. */
function errorAnswer(message: string): Answer {
  return {
    blocks: [
      { type: 'p', tokens: [{ text: "Sorry — I couldn't reach the model. " }] },
      { type: 'p', tokens: [{ text: message }] },
    ],
    followUps: [],
  };
}

interface AskAiPanelProps {
  scope: ChatScope;
  /** A "switch context to this card" request from a card's Ask AI button. When
   * its nonce changes, the panel starts a fresh conversation scoped to it. */
  scopeRequest?: { scope: ChatScope; nonce: number } | null;
  onScopeChange: (scope: ChatScope) => void;
  onClose: () => void;
  onOpenRecord?: (record: RecordEntry) => void;
  /** Open a signal detail page from a clicked S<n> citation. */
  onOpenSignal?: (signalId: string) => void;
  /** Reveal a trend's section from a clicked T<n> citation. */
  onOpenTrend?: (trendId: string) => void;
  expanded: boolean;
  onToggleExpanded: () => void;
  quote?: QuoteRequest | null;
}

/** Resolve a T<n>/S<n>/R<id> citation to a click handler, or undefined. */
function refHandler(
  ref: string,
  handlers: {
    onOpenRecord?: (record: RecordEntry) => void;
    onOpenSignal?: (signalId: string) => void;
    onOpenTrend?: (trendId: string) => void;
  },
): (() => void) | undefined {
  const record = /^R(\d+)$/.exec(ref);
  if (record) {
    const id = Number(record[1]);
    if (handlers.onOpenRecord && RECORDS[id]) return () => handlers.onOpenRecord!(RECORDS[id]);
    return undefined;
  }
  const signal = /^S(\d+)$/.exec(ref);
  if (signal) {
    const match = SIGNALS.find((s) => s.shorthand === ref);
    if (handlers.onOpenSignal && match) return () => handlers.onOpenSignal!(match.id);
    return undefined;
  }
  const trend = /^T(\d+)$/.exec(ref);
  if (trend) {
    const target = TRENDS[Number(trend[1]) - 1];
    if (handlers.onOpenTrend && target) return () => handlers.onOpenTrend!(target.id);
    return undefined;
  }
  return undefined;
}

/** Blue for records, purple (AI) for signal/trend citations. */
function refColor(ref: string): 'info' | 'lightPurple' {
  return /^R\d+$/.test(ref) ? 'info' : 'lightPurple';
}

/** Reference-tag leading glyph, per Figma 2261:7448 (16px, type-specific). */
function ScopeGlyph({ kind }: { kind: ChatScope['kind'] }) {
  if (kind === 'signal') return <CellSignalFull size={16} weight="regular" />;
  if (kind === 'trend') return <ChartLine size={16} weight="regular" />;
  return <PresentationChart size={16} weight="regular" />;
}

/** Per-type leading glyph for a trend/signal citation chip (records get none). */
function CitationGlyph({ refId }: { refId: string }) {
  if (/^T\d+$/.test(refId)) return <ChartLine size={16} weight="regular" />;
  if (/^S\d+$/.test(refId)) return <CellSignalFull size={16} weight="regular" />;
  return null;
}

const RECORDS_PREVIEW = 4;

type CompactRecord = Pick<RecordEntry, 'id' | 'quote' | 'specialty'>;

/** Shared narrow record table used for backing records and verbatim evidence. */
function CompactRecordsTable({
  records,
  onOpenRecord,
  flat = false,
}: {
  records: CompactRecord[];
  onOpenRecord?: (record: RecordEntry) => void;
  /** Avoid a second card outline when rendered inside an expanded data row. */
  flat?: boolean;
}) {
  return (
    <div className={`${styles.recordsTableWrap} ${flat ? styles.recordsTableFlat : ''}`}>
      <div className={`${styles.recordsTableHead} ${styles.recordsTableColumnsCompact}`}>
        <span className={`rc-body-xs ${styles.recordsHeadCell}`}>ID</span>
        <span className={`rc-body-xs ${styles.recordsHeadCell}`}>Verbatim</span>
      </div>
      {records.map((record) => {
        const full = RECORDS[record.id];
        return (
          <button
            key={record.id}
            type="button"
            className={`${styles.recordsTableRow} ${styles.recordsTableColumnsCompact} ${styles.recordsTableRowButton}`}
            onClick={() => full && onOpenRecord?.(full)}
          >
            <span className={styles.recordsCell}>
              <Badge appearance="subtle" color="info">
                R{record.id}
              </Badge>
            </span>
            <span className={`rc-body-xs ${styles.recordsCell}`}>
              <span className={styles.recordsCellVerbatim}>{record.quote}</span>
              <span className={`rc-body-xs ${styles.recordsCellSpecialty}`}>{record.specialty}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function RecordsDetail({
  row,
  onOpenRecord,
}: {
  row: DataRow;
  onOpenRecord?: (record: RecordEntry) => void;
}) {
  // Resolve to REAL records from the row's backing ids (no fabrication). The
  // LLM path may omit ids — in that case we show a graceful note.
  const records = (row.recordIds ?? [])
    .map((id) => RECORDS[id])
    .filter((record): record is RecordEntry => Boolean(record));
  const shown = records.slice(0, RECORDS_PREVIEW);

  if (shown.length === 0) {
    return (
      <div className={styles.records}>
        <span className={`rc-body-xs ${styles.recordsNote}`}>
          No linked records for this row.
        </span>
      </div>
    );
  }

  return (
    <div className={styles.records}>
      <span className={`rc-label-sm ${styles.recordsTitle}`}>Backing records</span>

      {/* The Ask AI panel is substantially narrower than Signal detail, so
          specialty lives beneath the verbatim and the date remains in record
          detail instead of taking table width. */}
      <CompactRecordsTable records={shown} onOpenRecord={onOpenRecord} flat />

      <span className={`rc-body-xs ${styles.recordsNote}`}>
        Showing {shown.length} of {records.length} {records.length === 1 ? 'record' : 'records'}
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
            const displayLabel = data.columns[0] === 'Theme' ? formatThemeLabel(row.label) : row.label;
            return (
              <div key={row.label} className={styles.dataRowGroup}>
                <button
                  type="button"
                  className={`${styles.dataRow} ${styles.dataRowButton} ${isOpen ? styles.dataRowOpen : ''}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenRow(isOpen ? null : row.label)}
                >
                  <span className={`rc-body-xs ${styles.dataCell}`}>
                    <Icon name="caret-right" size={12} tone="tertiary" className={styles.dataCaret} />
                    {displayLabel}
                  </span>
                  <span className={`rc-body-xs ${styles.dataValue}`}>{row.value}</span>
                  <span className={styles.dataShare}>
                    <span className={styles.dataBarTrack}>
                      <span
                        className={styles.dataBarFill}
                        style={{ width: grown ? `${row.share}%` : 0 }}
                      />
                    </span>
                    <span className={`rc-body-xs ${styles.dataPct}`}>{row.share}%</span>
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

      {data.note ? (
        <div className={styles.dataNote}>
          <Icon name="info" size={14} tone="tertiary" />
          <span className="rc-body-xs">{data.note}</span>
        </div>
      ) : null}

      <div className={styles.dataViewFoot}>
        <span className={styles.dataSource}>
          <span className={styles.dataSourceDot} aria-hidden />
          <span className="rc-body-xs">{data.source}</span>
        </span>
      </div>
    </div>
  );
}

function EvidenceRecordsTable({
  records,
  onOpenRecord,
}: {
  records: EvidenceRecord[];
  onOpenRecord?: (record: RecordEntry) => void;
}) {
  return (
    <div className={styles.evidenceRecordsTable}>
      <CompactRecordsTable records={records} onOpenRecord={onOpenRecord} />
    </div>
  );
}

function MagnitudeStrip({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className={styles.magnitudeStrip}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.magnitudeStat}>
          <span className={`rc-heading-h7 ${styles.magnitudeValue}`}>{stat.value}</span>
          <span className={`rc-body-xs ${styles.magnitudeLabel}`}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Screen-reader summary for the compact confidence chip (score + reason live in the tooltip). */
function confidenceAriaLabel(confidence: {
  label: string;
  score?: number;
  reason?: string;
}): string {
  const parts = [`Confidence: ${confidence.label}`];
  if (confidence.score != null) parts.push(`${confidence.score} out of 100`);
  if (confidence.reason) parts.push(confidence.reason);
  return parts.join(' · ');
}

function AnswerView({
  message,
  onOpenRecord,
  onOpenSignal,
  onOpenTrend,
}: {
  message: AssistantMessage;
  onOpenRecord?: (record: RecordEntry) => void;
  onOpenSignal?: (signalId: string) => void;
  onOpenTrend?: (trendId: string) => void;
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

  const hasRefs = Boolean(answer.refs && answer.refs.length > 0);
  const showFooter = showRefs && (hasRefs || Boolean(answer.confidence));

  return (
    <div className={styles.answer} data-selectable-ask>
      {answer.guardrail ? (
        <div className={styles.guardrailHead}>
          <Badge appearance="subtle" color="neutral">
            {answer.guardrail.badge}
          </Badge>
          <span className={`rc-body-sm ${styles.guardrailReason}`}>{answer.guardrail.reason}</span>
        </div>
      ) : null}

      <div className={styles.answerContent}>
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

        {showData && answer.magnitude ? <MagnitudeStrip stats={answer.magnitude} /> : null}

        {showData && answer.proofChart ? (
          <ProofChart
            type={answer.proofChart.type}
            scope={answer.proofChart.scope}
            compact
          />
        ) : null}

        {showData && answer.dataView ? (
          <DataViewCard data={answer.dataView} onOpenRecord={onOpenRecord} />
        ) : null}

        {showData && answer.records && answer.records.length > 0 ? (
          <EvidenceRecordsTable records={answer.records} onOpenRecord={onOpenRecord} />
        ) : null}

        {showProof && answer.proof ? (
          <div className={styles.proof}>
            <span className={`rc-label-sm ${styles.proofLabel}`}>{answer.proof.label}</span>
            <span className={`rc-body-sm ${styles.answerProofQuote}`}>{answer.proof.quote}</span>
          </div>
        ) : null}

        {showProof && answer.disclaimer ? (
          <div className={styles.disclaimer}>
            <Icon name="warning" size={14} tone="warning" />
            <span className={`rc-body-xs ${styles.disclaimerText}`}>{answer.disclaimer}</span>
          </div>
        ) : null}
      </div>

      {showFooter ? (
        <>
          <div className={styles.answerFooter}>
            {hasRefs ? (
              <div className={styles.answerSources}>
                {(answer.refs ?? []).map((ref) => {
                  const onClick = refHandler(ref, { onOpenRecord, onOpenSignal, onOpenTrend });

                  // Records keep the existing blue accent Badge.
                  if (/^R\d+$/.test(ref)) {
                    const badge = (
                      <Badge appearance="subtle" color={refColor(ref)}>
                        {ref}
                      </Badge>
                    );
                    return onClick ? (
                      <button
                        key={ref}
                        type="button"
                        className={styles.recordRefButton}
                        onClick={onClick}
                      >
                        {badge}
                      </button>
                    ) : (
                      <span key={ref}>{badge}</span>
                    );
                  }

                  // Trend/Signal citations render as reference tags (Figma
                  // 2261:7448): purple accent + type-specific leading glyph.
                  const tagInner = (
                    <>
                      <span className={styles.citationTagIcon} aria-hidden>
                        <CitationGlyph refId={ref} />
                      </span>
                      <span className={`rc-label-sm ${styles.citationTagLabel}`}>{ref}</span>
                    </>
                  );
                  return onClick ? (
                    <button key={ref} type="button" className={styles.citationTag} onClick={onClick}>
                      {tagInner}
                    </button>
                  ) : (
                    <span key={ref} className={styles.citationTag}>
                      {tagInner}
                    </span>
                  );
                })}
              </div>
            ) : null}

            <div className={styles.answerConfidenceRow}>
              {answer.confidence ? (
                <Tooltip
                  placement="right"
                  multiline
                  content={
                    <span className={styles.confidenceTip}>
                      {answer.confidence.score != null ? (
                        <span className={`rc-label-sm ${styles.confidenceTipScore}`}>
                          {answer.confidence.score}/100
                        </span>
                      ) : null}
                      {answer.confidence.reason ? (
                        <span className={styles.confidenceTipReason}>{answer.confidence.reason}</span>
                      ) : null}
                    </span>
                  }
                >
                  <span
                    className={styles.confidenceChip}
                    tabIndex={0}
                    aria-label={confidenceAriaLabel(answer.confidence)}
                  >
                    <StatusIndicator
                      variant={answer.confidence.tone}
                      label={answer.confidence.label}
                    />
                  </span>
                </Tooltip>
              ) : (
                <span />
              )}

            </div>
          </div>
        </>
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

// Rebuild the full set of messages for a stored conversation by replaying each
// user turn through the (deterministic) answer engine.
function buildMessagesFromConversation(
  conversation: StoredConversation,
  nextId: () => number,
): { messages: Message[]; suggestions: string[] } {
  const turns: ConversationTurn[] =
    conversation.turns && conversation.turns.length > 0
      ? conversation.turns
      : [{ text: conversation.title }];

  const messages: Message[] = [];
  let lastAnswer: Answer | null = null;
  const priorQuestions: string[] = [];
  for (const turn of turns) {
    const turnRefs = turn.references ?? (turn.reference ? [turn.reference] : undefined);
    // Newer turns store `text` with reference labels already inline; older turns
    // kept a bare text plus a separate reference list that we prefix on replay.
    const isComposed = turn.composed === true;
    const refLabels = turnRefs?.map((reference) => reference.label) ?? [];
    const refPhrase =
      !isComposed && refLabels.length > 0 ? `Regarding ${refLabels.join(' and ')}: ` : '';
    const composedText = `${refPhrase}${turn.text}`;
    const intent = turn.quote ? `${composedText} ${turn.quote}` : composedText;
    const answer = buildAnswer(intent, conversation.scope, priorQuestions);
    priorQuestions.push(turn.text);
    lastAnswer = answer;
    messages.push({
      id: nextId(),
      role: 'user',
      text: turn.text,
      references: turnRefs,
      quote: turn.quote,
      composed: isComposed,
    });
    messages.push({
      id: nextId(),
      role: 'assistant',
      answer,
      status: 'done',
      revealed: countTokens(answer),
      showData: true,
      showProof: true,
      showRefs: true,
    });
  }

  return {
    messages,
    suggestions: lastAnswer ? lastAnswer.followUps : defaultSuggestions(conversation.scope),
  };
}

// On mount, look up the conversation the user last had open and rebuild it so
// closing/re-opening the panel (or refreshing) resumes the same conversation.
function loadInitialConversation(): {
  id: string;
  scope: ChatScope;
  messages: Message[];
  suggestions: string[];
  nextId: number;
} | null {
  const activeId = loadActiveConversationId();
  if (!activeId) return null;
  const conversation = loadConversations().find((c) => c.id === activeId);
  if (!conversation || !conversation.turns || conversation.turns.length === 0) return null;
  let counter = 0;
  const { messages, suggestions } = buildMessagesFromConversation(
    conversation,
    () => (counter += 1),
  );
  return { id: conversation.id, scope: conversation.scope, messages, suggestions, nextId: counter };
}

export function AskAiPanel({
  scope,
  scopeRequest,
  onScopeChange,
  onClose,
  expanded,
  onToggleExpanded,
  quote,
  onOpenRecord,
  onOpenSignal,
  onOpenTrend,
}: AskAiPanelProps) {
  // When the panel is opened by a card's "Ask AI" (scopeRequest present), skip
  // restoring the last conversation and start fresh, scoped to that card.
  const [initialConversation] = useState(() =>
    scopeRequest ? null : loadInitialConversation(),
  );
  const [view, setView] = useState<View>('conversation');
  // Controls the anchored scope Popover in the context bar (replaces the old
  // full-page 'scope' view).
  const [scopeMenuOpen, setScopeMenuOpen] = useState(false);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<Message[]>(
    () => initialConversation?.messages ?? [],
  );
  const [generating, setGenerating] = useState(false);
  const [attachedQuote, setAttachedQuote] = useState<string | null>(null);
  // The composer starts empty; the current scope is shown separately ("Conversation
  // scoped to…" / header), matching Figma. Only @-mentions become reference tags.
  const [references, setReferences] = useState<Reference[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>(
    () => initialConversation?.suggestions ?? defaultSuggestions(scope),
  );
  const [suggestionsOpen, setSuggestionsOpen] = useState(true);
  // Live availability is reactive: saving a key in settings flips it on without
  // a reload; clearing the key flips it back off (falling back to the demo engine).
  const [llmAvailable, setLlmAvailable] = useState(() => llmConfigured());
  const [useLLM, setUseLLM] = useState(() => llmConfigured());
  const [previousView, setPreviousView] = useState<View>('conversation');
  const [conversations, setConversations] = useState<StoredConversation[]>(() =>
    loadConversations(),
  );

  const openSettings = () => {
    setPreviousView((current) => (view === 'settings' ? current : view));
    setView('settings');
  };

  const closeSettings = () => {
    setView(previousView === 'settings' ? 'conversation' : previousView);
  };

  const handleSaveConfig = (config: LlmConfig) => {
    saveLlmConfig(config);
    setLlmAvailable(true);
    setUseLLM(true);
    closeSettings();
  };

  const handleClearConfig = () => {
    clearLlmConfig();
    setLlmAvailable(false);
    setUseLLM(false);
    closeSettings();
  };

  const idRef = useRef(initialConversation?.nextId ?? 0);
  const messagesRef = useRef<Message[]>(messages);
  const conversationIdRef = useRef<string>(initialConversation?.id ?? `c-${Date.now()}`);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const lastQuoteNonce = useRef<number>(0);
  // Seed with the mount nonce so opening via a card (handled by the fresh-start
  // init above) doesn't re-trigger the effect; only later clicks switch context.
  const lastScopeReqNonce = useRef<number | null>(scopeRequest?.nonce ?? null);

  const isSignalScope = scope.kind === 'signal';

  // A new highlighted-text request arrives from the page: attach it as a quoted
  // context chip, make sure we're on the conversation view, and focus the input.
  useEffect(() => {
    if (!quote || quote.nonce === lastQuoteNonce.current) return;
    lastQuoteNonce.current = quote.nonce;
    setAttachedQuote(quote.text);
    setView('conversation');
    const timer = window.setTimeout(() => {
      footerRef.current?.querySelector<HTMLElement>('[data-chat-input]')?.focus();
    }, 60);
    return () => window.clearTimeout(timer);
  }, [quote]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => () => clearTimers(), []);

  // Align the parent scope with the restored conversation so follow-ups keep
  // the same focus after a refresh / re-open.
  useEffect(() => {
    if (initialConversation) onScopeChange(initialConversation.scope);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset suggestions when scope changes and no conversation is in progress.
  useEffect(() => {
    if (messages.length === 0) setSuggestions(defaultSuggestions(scope));
  }, [scope, messages.length]);

  // The Suggested rail is expanded for a fresh/empty conversation and collapses
  // once the conversation is underway. Manual toggles are preserved until the
  // empty/started state flips again.
  const conversationEmpty = messages.length === 0;
  useEffect(() => {
    setSuggestionsOpen(conversationEmpty);
  }, [conversationEmpty]);

  // Entering the New chat (scope) or Conversations (history) views should start
  // at the very top, not the middle of the scroll container.
  useEffect(() => {
    if (view === 'history') {
      const el = bodyRef.current;
      if (el) el.scrollTop = 0;
    }
  }, [view]);

  // Auto-scroll to the newest content while a conversation is visible.
  useEffect(() => {
    if (view !== 'conversation') return;
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  });

  // Keep a ref of the current messages so `send` can build chat history for the
  // live model without re-creating the callback on every keystroke.
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  // Clear any composer reference tags when the scope changes (new page / new
  // conversation). Within a conversation the scope is stable, so tags persist.
  useEffect(() => {
    setReferences([]);
    setValue('');
  }, [scope.kind, scope.label, scope.shorthand]);

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
    (finalMessages: Message[], scopeOverride?: ChatScope) => {
      const users = finalMessages.filter((m): m is UserMessage => m.role === 'user');
      if (users.length === 0) return;
      const conversation: StoredConversation = {
        id: conversationIdRef.current,
        title: users[0].text,
        scope: scopeOverride ?? scope,
        ts: Date.now(),
        turns: users.map((u) => ({
          text: u.text,
          quote: u.quote,
          references: u.references,
          composed: u.composed,
        })),
      };
      const next = saveConversation(conversation);
      setConversations(next);
      saveActiveConversationId(conversation.id);
    },
    [scope],
  );

  // Persist as soon as a user turn is added (not on every streamed token) so an
  // in-progress conversation survives closing the panel or refreshing. Skip the
  // first run so re-opening a restored conversation doesn't rewrite it.
  const userTurnCount = messages.filter((m) => m.role === 'user').length;
  const didMountPersist = useRef(false);
  useEffect(() => {
    if (!didMountPersist.current) {
      didMountPersist.current = true;
      return;
    }
    if (userTurnCount > 0) persist(messages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTurnCount]);

  const streamAnswer = useCallback(
    (answer: Answer, startDelay: number = THINKING_MS) => {
      const total = countTokens(answer);

      const thinkingTimer = setTimeout(() => {
        updateLastAssistant((message) => ({ ...message, answer, status: 'streaming' }));

        let revealedCount = 0;
        const step = () => {
          revealedCount = Math.min(revealedCount + 1, total);
          updateLastAssistant((message) => ({ ...message, revealed: revealedCount }));

          if (revealedCount >= total) {
            let delay = 0;
            if (
              answer.dataView ||
              answer.magnitude ||
              answer.proofChart ||
              (answer.records && answer.records.length > 0)
            ) {
              delay += 240;
              const dataTimer = setTimeout(
                () => updateLastAssistant((message) => ({ ...message, showData: true })),
                delay,
              );
              timers.current.push(dataTimer);
            }
            if (answer.proof || answer.disclaimer) {
              delay += 300;
              const proofTimer = setTimeout(
                () => updateLastAssistant((message) => ({ ...message, showProof: true })),
                delay,
              );
              timers.current.push(proofTimer);
            }
            if (answer.refs || answer.confidence) {
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
      }, startDelay);

      timers.current.push(thinkingTimer);
    },
    [persist, updateLastAssistant],
  );

  const send = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || generating) return;

      // The composer already interleaves reference labels inline (e.g. "compare
      // Signal 1 to Signal 3"), so the question reads naturally as typed. Any
      // highlighted text is folded in as extra context.
      const intentText = attachedQuote ? `${trimmed} ${attachedQuote}` : trimmed;
      const userId = (idRef.current += 1);
      const assistantId = (idRef.current += 1);

      const turnReferences =
        references.length > 0
          ? references.map((reference) => ({ shorthand: reference.shorthand, label: reference.label }))
          : undefined;

      const userMessage: UserMessage = {
        id: userId,
        role: 'user',
        text: trimmed,
        references: turnReferences,
        quote: attachedQuote ?? undefined,
        composed: true,
      };

      // Placeholder answer; replaced with the real one before streaming.
      const placeholder: Answer = { blocks: [], followUps: [] };
      const assistantMessage: AssistantMessage = {
        id: assistantId,
        role: 'assistant',
        answer: placeholder,
        status: 'thinking',
        revealed: 0,
        showData: false,
        showProof: false,
        showRefs: false,
      };

      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setValue('');
      setAttachedQuote(null);
      // Clear the composer tags; they were consumed by this turn.
      setReferences([]);
      setGenerating(true);

      if (useLLM) {
        // Build history from prior turns (before this one) for context.
        const history: ChatTurn[] = messagesRef.current.map((message) => {
          if (message.role !== 'user') {
            return { role: 'assistant', content: answerToText(message.answer) };
          }
          const labels = message.references?.map((reference) => reference.label) ?? [];
          const prefix =
            !message.composed && labels.length > 0 ? `Regarding ${labels.join(' and ')}: ` : '';
          const base = `${prefix}${message.text}`;
          return { role: 'user', content: message.quote ? `${base}\n\n> ${message.quote}` : base };
        });

        generateAnswer({ question: intentText, scope, history })
          .then((answer) => streamAnswer(answer, 0))
          .catch((error: unknown) => {
            const message = error instanceof Error ? error.message : 'Unknown error.';
            streamAnswer(errorAnswer(message), 0);
          });
      } else {
        // Deterministic demo engine — pass prior user questions so the
        // follow-up rail reacts to the thread and avoids repeats.
        const priorQuestions = messagesRef.current
          .filter((message) => message.role === 'user')
          .map((message) => message.text);
        const answer = buildAnswer(intentText, scope, priorQuestions);
        updateLastAssistant((message) => ({ ...message, answer }));
        streamAnswer(answer);
      }
    },
    [attachedQuote, generating, references, scope, streamAnswer, updateLastAssistant, useLLM],
  );

  const startNewChat = () => {
    clearTimers();
    setGenerating(false);
    setMessages([]);
    setValue('');
    setReferences([]);
    conversationIdRef.current = `c-${Date.now()}`;
    saveActiveConversationId(null);
    setSuggestions(defaultSuggestions(scope));
    setView('conversation');
    // Land on the empty state with the scope picker CLOSED — the popover only
    // opens when the user actually clicks the scope pill.
    setScopeMenuOpen(false);
  };

  const chooseScope = (next: ChatScope) => {
    clearTimers();
    setGenerating(false);
    onScopeChange(next);
    setMessages([]);
    setReferences([]);
    conversationIdRef.current = `c-${Date.now()}`;
    saveActiveConversationId(null);
    setSuggestions(defaultSuggestions(next));
    setView('conversation');
  };

  // Clicking a card's "Ask AI" while the panel is already open switches the
  // conversation context to that card (fresh scoped conversation) and keeps the
  // panel open. The mount case is handled by the fresh-start init above.
  useEffect(() => {
    if (!scopeRequest || scopeRequest.nonce === lastScopeReqNonce.current) return;
    lastScopeReqNonce.current = scopeRequest.nonce;
    chooseScope(scopeRequest.scope);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scopeRequest]);

  // Rescope the CURRENT conversation WITHOUT clearing it (approved decision):
  // update the scope, keep every existing message, and — if a conversation is
  // already underway — persist the new scope against the same turns so history
  // and reloads keep the new focus. An empty conversation just adopts the new
  // scope; the scope-change effect refreshes the welcome suggestions. This is
  // deliberately different from `chooseScope` (the card "Ask AI" flow), which
  // starts a fresh conversation.
  const rescope = (next: ChatScope) => {
    setScopeMenuOpen(false);
    onScopeChange(next);
    if (messages.some((message) => message.role === 'user')) {
      persist(messages, next);
    }
  };

  // The scope pill's trailing X: clear back to the whole-report scope.
  const clearScope = () => rescope({ kind: 'whole', label: 'Whole report' });

  const openHistoryItem = (conversation: StoredConversation) => {
    clearTimers();
    setGenerating(false);
    onScopeChange(conversation.scope);
    conversationIdRef.current = conversation.id;
    saveActiveConversationId(conversation.id);
    const { messages: restored, suggestions: restoredSuggestions } = buildMessagesFromConversation(
      conversation,
      () => (idRef.current += 1),
    );
    setMessages(restored);
    setSuggestions(restoredSuggestions);
    setView('conversation');
  };

  const headerTitle =
    view === 'history'
      ? 'Conversations'
      : view === 'settings'
        ? 'LLM settings'
        : 'Ask AI';
  const headerSubtitle =
    view === 'history'
      ? 'Saved to this project'
      : view === 'settings'
        ? 'Bring your own key'
        : isSignalScope
          ? scope.label
          : undefined;

  return (
    <aside className={`${styles.panel} ${expanded ? styles.panelExpanded : ''}`} aria-label="Ask AI">
      <header className={styles.panelHeader}>
        {view === 'settings' ? (
          <IconButton variant="ghost" size="sm" label="Back" onClick={closeSettings}>
            <Icon name="caret-left" size={16} tone="primary" />
          </IconButton>
        ) : view !== 'history' ? (
          <IconButton
            variant="ghost"
            size="sm"
            label="Conversations"
            onClick={() => setView('history')}
          >
            <Icon name="caret-left" size={16} tone="primary" />
          </IconButton>
        ) : null}
        <span
          className={`${styles.panelAiMark} ${view === 'conversation' ? styles.panelAiMarkMesh : ''}`}
          aria-hidden
        >
          {view === 'history' ? (
            <Chats size={20} weight="regular" />
          ) : view === 'settings' ? (
            <Icon name="gear" size={20} tone="on-color" />
          ) : (
            <SparkleGlyph size={20} className={styles.panelAiSparkle} />
          )}
        </span>
        <div className={styles.panelTitleBlock}>
          <span className={`rc-heading-h8 ${styles.panelTitle}`}>{headerTitle}</span>
          {headerSubtitle ? (
            <span className={`rc-body-xs ${styles.panelSubtitle}`}>{headerSubtitle}</span>
          ) : null}
        </div>
        <div className={styles.panelHeaderActions}>
          {view !== 'settings' && llmAvailable ? (
            <button
              type="button"
              className={`rc-label-sm ${styles.modeToggle} ${useLLM ? styles.modeToggleLive : ''}`}
              onClick={() => setUseLLM((value) => !value)}
              title={
                useLLM
                  ? 'Live model answers — click to switch to demo answers'
                  : 'Demo answers — click to switch to the live model'
              }
            >
              {useLLM ? 'Live' : 'Demo'}
            </button>
          ) : null}
          <IconButton
            variant="ghost"
            size="sm"
            label="LLM settings"
            onClick={openSettings}
          >
            <Icon name="gear" size={16} tone="primary" />
          </IconButton>
          <IconButton variant="ghost" size="sm" label="New chat" onClick={startNewChat}>
            <Icon name="plus" size={16} tone="primary" />
          </IconButton>
          <IconButton variant="ghost" size="sm" label="Expand" onClick={onToggleExpanded}>
            <ArrowsOutSimple size={16} weight="regular" />
          </IconButton>
          <IconButton variant="ghost" size="sm" label="Close" onClick={onClose}>
            <Icon name="x" size={16} tone="primary" />
          </IconButton>
        </div>
      </header>

      {view === 'conversation' ? (
        <div className={styles.scopeBar}>
          <span className={`rc-body-sm ${styles.scopeBarLabel}`}>Chat scoped to:</span>
          <span className={styles.scopePill}>
            <Popover
              open={scopeMenuOpen}
              onOpenChange={setScopeMenuOpen}
              placement="bottom"
              align="start"
              caret={false}
              content={
                <div className={styles.scopeMenu}>
                  <ScopePicker onPick={rescope} />
                </div>
              }
            >
              <button
                type="button"
                className={styles.scopePillTrigger}
                aria-label={`Change chat scope (currently ${scope.label})`}
              >
                <span className={styles.scopePillGlyph} aria-hidden>
                  <ScopeGlyph kind={scope.kind} />
                </span>
                <span className={`rc-label-md ${styles.scopePillLabel}`}>{scope.label}</span>
              </button>
            </Popover>
            {scope.kind !== 'whole' ? (
              <button
                type="button"
                className={styles.scopePillClear}
                aria-label="Clear scope — back to whole report"
                onClick={clearScope}
              >
                <Icon name="x" size={16} tone="ai" />
              </button>
            ) : null}
          </span>
        </div>
      ) : null}

      <div className={styles.panelBody} ref={bodyRef}>
        {view === 'settings' ? (
          <LlmSettings onSave={handleSaveConfig} onClear={handleClearConfig} />
        ) : view === 'history' ? (
          <History conversations={conversations} onOpen={openHistoryItem} />
        ) : messages.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.welcomeIntro}>
              <WelcomeHero />
              <div className={styles.welcomeText}>
                <span className={`rc-heading-h6 ${styles.welcomeGreeting}`}>{greetingForNow()}</span>
                <span className={`rc-body-sm ${styles.welcomeSubtitle}`}>
                  Ask a question below, or use a suggestion.
                  <br />
                  Reference signals, trends or records anytime with{' '}
                  <span className={styles.welcomeAt}>@</span>.
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.messages}>
            {messages.map((message) =>
              message.role === 'user' ? (
                <div key={message.id} className={`rc-body-sm ${styles.userBubble}`}>
                  {message.quote ? (
                    <span className={`rc-body-xs ${styles.userQuote}`}>{message.quote}</span>
                  ) : null}
                  {!message.composed
                    ? message.references?.map((reference) => (
                        <span key={reference.label} className={styles.refToken}>
                          {reference.label}
                        </span>
                      ))
                    : null}
                  {!message.composed && message.references && message.references.length > 0
                    ? ' '
                    : null}
                  {message.text}
                </div>
              ) : message.status === 'thinking' ? (
                <ThinkingBubble key={message.id} />
              ) : (
                <AnswerView
                  key={message.id}
                  message={message}
                  onOpenRecord={onOpenRecord}
                  onOpenSignal={onOpenSignal}
                  onOpenTrend={onOpenTrend}
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

      {view !== 'history' && view !== 'settings' ? (
        <div className={styles.panelFooter} ref={footerRef}>
          <ChatWithAI
            value={value}
            onChange={setValue}
            onSubmit={send}
            references={references}
            onReferencesChange={setReferences}
            referenceOptions={REFERENCE_OPTIONS}
            loading={generating}
            placeholder="Ask anything... Type @ to reference."
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

function LlmSettings({
  onSave,
  onClear,
}: {
  onSave: (config: LlmConfig) => void;
  onClear: () => void;
}) {
  const [existing] = useState(() => loadLlmConfig());
  const [provider, setProvider] = useState<LlmProvider>(existing?.provider ?? 'anthropic');
  const [apiKey, setApiKey] = useState(existing?.apiKey ?? '');
  const [model, setModel] = useState(existing?.model ?? PROVIDER_DEFAULTS[provider].model);
  // Track whether the model was hand-edited so switching providers can safely
  // refresh the prefilled default without clobbering a user's custom model.
  const [modelDirty, setModelDirty] = useState(Boolean(existing?.model));

  const providerOptions: SelectEntry[] = PROVIDER_ORDER.map((id) => ({
    kind: 'option',
    id,
    label: PROVIDER_DEFAULTS[id].label,
  }));

  const changeProvider = (next: LlmProvider) => {
    setProvider(next);
    if (!modelDirty) setModel(PROVIDER_DEFAULTS[next].model);
  };

  const trimmedKey = apiKey.trim();
  const canSave = trimmedKey.length > 0 && model.trim().length > 0;

  const save = () => {
    if (!canSave) return;
    onSave({ provider, apiKey: trimmedKey, model: model.trim() });
  };

  return (
    <div className={styles.settings}>
      <p className={`rc-body-sm ${styles.settingsIntro}`}>
        Use your own LLM for live answers. Pick a provider, paste an API key, and pick a model.
      </p>

      <Select
        label="Provider"
        options={providerOptions}
        value={provider}
        onValueChange={(value) => changeProvider(value as LlmProvider)}
        showHelperText={false}
      />

      <Input
        label="API key"
        type="password"
        placeholder={provider === 'anthropic' ? 'sk-ant-…' : 'sk-…'}
        value={apiKey}
        autoComplete="off"
        showHelperText={false}
        onChange={(event) => setApiKey(event.target.value)}
      />

      <Input
        label="Model"
        placeholder={PROVIDER_DEFAULTS[provider].model}
        value={model}
        showHelperText
        helperText={`Default: ${PROVIDER_DEFAULTS[provider].model}`}
        onChange={(event) => {
          setModel(event.target.value);
          setModelDirty(true);
        }}
      />

      <p className={`rc-body-xs ${styles.settingsReassure}`}>
        <Icon name="lock" size={14} tone="tertiary" />
        Your key is stored only in this browser and sent directly to the provider — never to our
        servers.
      </p>

      <div className={styles.settingsActions}>
        <Button variant="ai" size="sm" onClick={save} disabled={!canSave}>
          Save &amp; connect
        </Button>
        {existing ? (
          <Button variant="tertiary" size="sm" onClick={onClear}>
            Disconnect
          </Button>
        ) : null}
      </div>
    </div>
  );
}

function ScopePicker({ onPick }: { onPick: (scope: ChatScope) => void }) {
  return (
    <>
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
        <div key={trend.id} className={styles.scopeGroup}>
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
