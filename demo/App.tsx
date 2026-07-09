import { useEffect, useState } from 'react';
import { Icon } from '../src/icons';
import { Dashboard, ReportHeader, type ChatScope } from './Dashboard';
import { SignalDetail } from './SignalDetail';
import { AskAiPanel } from './AskAiPanel';
import { RecordDetailPanel } from './RecordDetailPanel';
import { SelectionAsk } from './SelectionAsk';
import { findSignal, type RecordEntry, type Signal } from './data';
import { loadSession, saveSession } from './history';
import styles from './demo.module.css';

const DEFAULT_SCOPE: ChatScope = { kind: 'whole', label: 'Whole report' };

export interface QuoteRequest {
  text: string;
  nonce: number;
}

export function App() {
  // Restore the last session once, so a refresh keeps the user on the same page
  // and re-opens the chat panel they had open.
  const [initialSession] = useState(() => loadSession());
  const [chatOpen, setChatOpen] = useState(initialSession?.chatOpen ?? false);
  const [expanded, setExpanded] = useState(initialSession?.expanded ?? false);
  const [scope, setScope] = useState<ChatScope>(initialSession?.scope ?? DEFAULT_SCOPE);
  const [activeSignal, setActiveSignal] = useState<Signal | null>(() =>
    initialSession?.signalId ? findSignal(initialSession.signalId) ?? null : null,
  );
  const [quote, setQuote] = useState<QuoteRequest | null>(null);
  const [activeRecord, setActiveRecord] = useState<RecordEntry | null>(null);
  const [recordFromChat, setRecordFromChat] = useState(false);

  // Persist the current page/panel snapshot whenever it changes.
  useEffect(() => {
    saveSession({
      signalId: activeSignal?.id ?? null,
      chatOpen,
      expanded,
      scope,
    });
  }, [activeSignal, chatOpen, expanded, scope]);

  const openChat = (nextScope: ChatScope) => {
    setScope(nextScope);
    setChatOpen(true);
  };

  // Open the record detail panel. `fromChat` decides whether a back arrow
  // (returning to the conversation) is shown in the panel header.
  const openRecord = (record: RecordEntry, fromChat: boolean) => {
    setActiveRecord(record);
    setRecordFromChat(fromChat);
  };

  const closeRecord = () => setActiveRecord(null);

  const closePanel = () => {
    setActiveRecord(null);
    setChatOpen(false);
  };

  // Open the chat (keeping the current page's scope) and attach the highlighted
  // text as a quoted context chip.
  const askAboutSelection = (text: string) => {
    setChatOpen(true);
    setQuote({ text, nonce: Date.now() });
  };

  const openSignal = (signal: Signal) => {
    setActiveSignal(signal);
    setChatOpen(false);
    setActiveRecord(null);
  };

  const backToReport = () => {
    setActiveSignal(null);
    setActiveRecord(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSignal]);

  return (
    <div className={styles.appShell}>
      <ReportHeader
        signalLabel={activeSignal ? `Signal ${activeSignal.seq}` : undefined}
        onBack={backToReport}
      />

      <div className={styles.appBody}>
        <div
          data-selectable-ask
          className={`${styles.appMain} ${chatOpen || activeRecord ? styles.appMainCompact : ''}`}
        >
          {activeSignal ? (
            <SignalDetail signal={activeSignal} onOpenRecord={(record) => openRecord(record, false)} />
          ) : (
            <Dashboard onAsk={openChat} onOpenSignal={openSignal} />
          )}
        </div>

        <SelectionAsk onAsk={askAboutSelection} />

        {/* Keep the chat mounted (state preserved) but hidden while a record
            opened from it is shown, so the back arrow returns exactly where the
            user left off. */}
        {chatOpen ? (
          <div style={{ display: activeRecord ? 'none' : 'contents' }}>
            <AskAiPanel
              scope={scope}
              onScopeChange={setScope}
              onClose={() => setChatOpen(false)}
              expanded={expanded}
              onToggleExpanded={() => setExpanded((value) => !value)}
              quote={quote}
              onOpenRecord={(record) => openRecord(record, true)}
            />
          </div>
        ) : null}

        {activeRecord ? (
          <RecordDetailPanel
            record={activeRecord}
            fromChat={recordFromChat && chatOpen}
            onBack={closeRecord}
            onClose={closePanel}
            expanded={expanded}
            onToggleExpanded={() => setExpanded((value) => !value)}
          />
        ) : null}

        {!chatOpen && !activeRecord ? (
          <button
            type="button"
            className={styles.fab}
            aria-label="Open Ask AI"
            onClick={() =>
              openChat(
                activeSignal
                  ? {
                      kind: 'signal',
                      label: `Signal ${activeSignal.seq}`,
                      shorthand: activeSignal.shorthand,
                    }
                  : DEFAULT_SCOPE,
              )
            }
          >
            <Icon name="sparkle" size={20} tone="on-color" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
