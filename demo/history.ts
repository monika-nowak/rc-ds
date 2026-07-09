import type { ChatScope } from './Dashboard';

export interface StoredConversation {
  id: string;
  title: string;
  scope: ChatScope;
  ts: number;
}

const STORAGE_KEY = 'rc-aquinas-conversations';
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
