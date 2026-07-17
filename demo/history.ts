import type { ChatScope } from './Dashboard';

export interface ConversationTurn {
  text: string;
  quote?: string;
  /** Signals/trends the user attached to this turn. */
  references?: { shorthand: string; label: string }[];
  /** @deprecated single-reference field kept for reading older stored turns. */
  reference?: { shorthand: string; label: string };
  /** True when `text` already reads naturally with reference labels inline. */
  composed?: boolean;
}

export interface StoredConversation {
  id: string;
  title: string;
  scope: ChatScope;
  ts: number;
  /** Full list of user turns, so a conversation can be replayed verbatim. */
  turns?: ConversationTurn[];
}

const STORAGE_KEY = 'rc-aquinas-conversations';
const ACTIVE_KEY = 'rc-aquinas-active-conversation';
const SESSION_KEY = 'rc-aquinas-session';
const MAX = 20;

const SEED: StoredConversation[] = [
  {
    id: 'seed-1',
    title: 'Compare Trend 1 vs. Trend 2',
    scope: { kind: 'whole', label: 'Whole report' },
    ts: Date.now() - 26 * 60 * 60 * 1000,
  },
  {
    id: 'seed-2',
    title: 'Show me the strongest verbatims',
    scope: { kind: 'whole', label: 'Whole report' },
    ts: Date.now() - 27 * 60 * 60 * 1000,
  },
];

export function loadConversations(): StoredConversation[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return SEED;
    const parsed = JSON.parse(raw) as StoredConversation[];
    if (!Array.isArray(parsed)) return SEED;
    return [...parsed].sort((a, b) => b.ts - a.ts);
  } catch {
    return SEED;
  }
}

export function saveConversation(conversation: StoredConversation): StoredConversation[] {
  const existing = loadConversations().filter((c) => c.id !== conversation.id);
  const next = [conversation, ...existing].sort((a, b) => b.ts - a.ts).slice(0, MAX);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore storage failures in the prototype.
  }
  return next;
}

/** The conversation the user last had open, restored when the chat re-opens. */
export function loadActiveConversationId(): string | null {
  try {
    return localStorage.getItem(ACTIVE_KEY);
  } catch {
    return null;
  }
}

export function saveActiveConversationId(id: string | null): void {
  try {
    if (id) localStorage.setItem(ACTIVE_KEY, id);
    else localStorage.removeItem(ACTIVE_KEY);
  } catch {
    // Ignore storage failures in the prototype.
  }
}

export interface DemoSession {
  signalId: string | null;
  trendId: string | null;
  /** Dashboard viewport position to restore when returning from a detail page. */
  dashboardScrollY: number;
  chatOpen: boolean;
  expanded: boolean;
  scope: ChatScope;
}

/** Snapshot of the current page/panel so a refresh lands the user where they were. */
export function loadSession(): DemoSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<DemoSession>;
    return {
      signalId: parsed.signalId ?? null,
      trendId: parsed.trendId ?? null,
      dashboardScrollY: typeof parsed.dashboardScrollY === 'number' ? parsed.dashboardScrollY : 0,
      chatOpen: Boolean(parsed.chatOpen),
      expanded: Boolean(parsed.expanded),
      scope: parsed.scope ?? { kind: 'whole', label: 'Whole report' },
    };
  } catch {
    return null;
  }
}

export function saveSession(session: DemoSession): void {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    // Ignore storage failures in the prototype.
  }
}
