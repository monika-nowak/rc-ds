import { useEffect, useState } from 'react';
import { Icon } from '../src/icons';
import { Dashboard, ReportHeader, type ChatScope } from './Dashboard';
import { SignalDetail } from './SignalDetail';
import { AskAiPanel } from './AskAiPanel';
import { SelectionAsk } from './SelectionAsk';
import type { Signal } from './data';
import styles from './demo.module.css';

const DEFAULT_SCOPE: ChatScope = { kind: 'whole', label: 'Whole report' };

export interface QuoteRequest {
  text: string;
  nonce: number;
}

export function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [scope, setScope] = useState<ChatScope>(DEFAULT_SCOPE);
  const [activeSignal, setActiveSignal] = useState<Signal | null>(null);
  const [quote, setQuote] = useState<QuoteRequest | null>(null);

  const openChat = (nextScope: ChatScope) => {
    setScope(nextScope);
    setChatOpen(true);
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
  };

  const backToReport = () => setActiveSignal(null);

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
          className={`${styles.appMain} ${chatOpen ? styles.appMainCompact : ''}`}
        >
          {activeSignal ? (
            <SignalDetail signal={activeSignal} />
          ) : (
            <Dashboard onAsk={openChat} onOpenSignal={openSignal} />
          )}
        </div>

        <SelectionAsk onAsk={askAboutSelection} />

        {chatOpen ? (
          <AskAiPanel
            scope={scope}
            onScopeChange={setScope}
            onClose={() => setChatOpen(false)}
            expanded={expanded}
            onToggleExpanded={() => setExpanded((value) => !value)}
            quote={quote}
          />
        ) : (
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
        )}
      </div>
    </div>
  );
}
