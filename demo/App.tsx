import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Dashboard, ReportHeader, type ChatScope } from './Dashboard';
import { SignalDetail } from './SignalDetail';
import { TrendDetail } from './TrendDetail';
import { AskAiPanel } from './AskAiPanel';
import { RecordDetailPanel } from './RecordDetailPanel';
import { SelectionAsk } from './SelectionAsk';
import { SparkleGlyph } from './SparkleGlyph';
import { findSignal, findTrend, type RecordEntry, type Signal, type Trend } from './data';
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
  const [dashboardScrollY, setDashboardScrollY] = useState(initialSession?.dashboardScrollY ?? 0);
  const restoreDashboardScrollRef = useRef(false);
  const [activeSignal, setActiveSignal] = useState<Signal | null>(() =>
    initialSession?.signalId ? findSignal(initialSession.signalId) ?? null : null,
  );
  const [activeTrend, setActiveTrend] = useState<Trend | null>(() => {
    if (initialSession?.signalId) return null;
    return initialSession?.trendId ? findTrend(initialSession.trendId) ?? null : null;
  });
  const [quote, setQuote] = useState<QuoteRequest | null>(null);
  const [activeRecord, setActiveRecord] = useState<RecordEntry | null>(null);
  const [recordFromChat, setRecordFromChat] = useState(false);
  // A "switch context to this card" request. Set when a card's "Ask AI" button
  // is clicked so the panel starts a fresh conversation scoped to it (rather
  // than restoring the last one). The nonce lets an already-open panel react.
  const [scopeRequest, setScopeRequest] = useState<{ scope: ChatScope; nonce: number } | null>(
    null,
  );

  // Persist the current page/panel snapshot whenever it changes.
  useEffect(() => {
    saveSession({
      signalId: activeSignal?.id ?? null,
      trendId: activeTrend?.id ?? null,
      dashboardScrollY,
      chatOpen,
      expanded,
      scope,
    });
  }, [activeSignal, activeTrend, chatOpen, dashboardScrollY, expanded, scope]);

  // Capture the dashboard only when leaving it. Detail-to-detail navigation
  // keeps the original dashboard position intact for the eventual return.
  const saveDashboardScrollPosition = () => {
    if (!activeSignal && !activeTrend) {
      setDashboardScrollY(window.scrollY);
    }
  };

  // Open the chat and restore the last conversation (FAB / general entry point).
  const openChat = (nextScope: ChatScope) => {
    setScope(nextScope);
    setScopeRequest(null);
    setChatOpen(true);
  };

  // A card's "Ask AI" button: switch the conversation context to that card and
  // keep the panel open if it already is (instead of closing it). Starts a
  // fresh conversation scoped to the clicked signal/trend.
  const askAboutScope = (nextScope: ChatScope) => {
    setScope(nextScope);
    setScopeRequest({ scope: nextScope, nonce: Date.now() });
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
    setScopeRequest(null);
    setChatOpen(true);
    setQuote({ text, nonce: Date.now() });
  };

  const openSignal = (signal: Signal) => {
    saveDashboardScrollPosition();
    setActiveSignal(signal);
    setActiveTrend(null);
    setActiveRecord(null);
  };

  const openTrend = (trend: Trend) => {
    saveDashboardScrollPosition();
    setActiveTrend(trend);
    setActiveSignal(null);
    setActiveRecord(null);
  };

  // Open a signal detail page from a chat S<n> citation — keep the chat panel
  // open so the conversation is still there when the user navigates back.
  const openSignalFromChat = (signalId: string) => {
    const signal = findSignal(signalId);
    if (!signal) return;
    saveDashboardScrollPosition();
    setActiveSignal(signal);
    setActiveTrend(null);
    setActiveRecord(null);
  };

  // Open a trend detail page from a chat T<n> citation — keep the chat open.
  const openTrendFromChat = (trendId: string) => {
    const trend = findTrend(trendId);
    if (!trend) return;
    saveDashboardScrollPosition();
    setActiveTrend(trend);
    setActiveSignal(null);
    setActiveRecord(null);
  };

  const backToReport = () => {
    restoreDashboardScrollRef.current = true;
    setActiveSignal(null);
    setActiveTrend(null);
    setActiveRecord(null);
  };

  useEffect(() => {
    if (activeSignal || activeTrend) window.scrollTo(0, 0);
  }, [activeSignal, activeTrend]);

  // Wait until the dashboard (and its optional chat layout) has rendered
  // before returning the viewport to the position saved on navigation away.
  useLayoutEffect(() => {
    if (activeSignal || activeTrend || !restoreDashboardScrollRef.current) return;

    restoreDashboardScrollRef.current = false;
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: dashboardScrollY, behavior: 'auto' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeSignal, activeTrend, chatOpen, dashboardScrollY]);

  const detailLabel = activeSignal
    ? `Signal ${activeSignal.seq}`
    : activeTrend
      ? activeTrend.label
      : undefined;

  const fabScope = (): ChatScope => {
    if (activeSignal) {
      return {
        kind: 'signal',
        label: `Signal ${activeSignal.seq}`,
        shorthand: activeSignal.shorthand,
      };
    }
    if (activeTrend) {
      return {
        kind: 'trend',
        label: activeTrend.label,
        shorthand: activeTrend.label.replace('Trend ', 'T'),
      };
    }
    return DEFAULT_SCOPE;
  };

  return (
    <div className={styles.appShell}>
      <ReportHeader detailLabel={detailLabel} onBack={backToReport} />

      <div className={styles.appBody}>
        <div
          data-selectable-ask
          className={`${styles.appMain} ${activeRecord ? styles.appMainCompact : ''}`}
        >
          {activeSignal ? (
            <SignalDetail signal={activeSignal} onOpenRecord={(record) => openRecord(record, false)} />
          ) : activeTrend ? (
            <TrendDetail
              trend={activeTrend}
              onOpenRecord={(record) => openRecord(record, false)}
              onOpenSignal={openSignal}
            />
          ) : (
            <Dashboard onAsk={askAboutScope} onOpenSignal={openSignal} onOpenTrend={openTrend} />
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
              scopeRequest={scopeRequest}
              onScopeChange={setScope}
              onClose={() => setChatOpen(false)}
              expanded={expanded}
              onToggleExpanded={() => setExpanded((value) => !value)}
              quote={quote}
              onOpenRecord={(record) => openRecord(record, true)}
              onOpenSignal={openSignalFromChat}
              onOpenTrend={openTrendFromChat}
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
            style={{ color: 'var(--rc-text-on-color)' }}
            aria-label="Open Ask AI"
            onClick={() => openChat(fabScope())}
          >
            <SparkleGlyph size={24} className={styles.fabSparkleBig} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
