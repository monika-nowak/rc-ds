import type { ChatScope } from './Dashboard';
import { answerFromRaw, type Answer, type RawAnswer } from './aiEngine';
import { RECORDS, STATS, TRENDS } from './data';

/**
 * Optional live-LLM backend for the chat. The prototype ships with a
 * deterministic mock engine (aiEngine.ts); when an API key is configured via
 * `.env.local` this module lets the same UI render real, unpredictable answers
 * so we can stress-test the design.
 *
 * Config (Vite env, all optional except the key):
 *   VITE_LLM_API_KEY   — provider key (required to enable live mode)
 *   VITE_LLM_PROVIDER  — 'openai' (default) | 'anthropic'
 *   VITE_LLM_MODEL     — model id (sensible per-provider default otherwise)
 *   VITE_LLM_BASE_URL  — override for OpenAI-compatible gateways
 */

type Provider = 'openai' | 'anthropic';

const API_KEY = import.meta.env.VITE_LLM_API_KEY as string | undefined;
const PROVIDER = ((import.meta.env.VITE_LLM_PROVIDER as string | undefined) ?? 'openai') as Provider;
const MODEL =
  (import.meta.env.VITE_LLM_MODEL as string | undefined) ??
  (PROVIDER === 'anthropic' ? 'claude-3-5-haiku-latest' : 'gpt-4o-mini');
const BASE_URL = (
  (import.meta.env.VITE_LLM_BASE_URL as string | undefined) ?? 'https://api.openai.com/v1'
).replace(/\/+$/, '');

// Google's Gemini OpenAI-compatible layer rejects some OpenAI-only fields
// (e.g. response_format), so detect it to keep the request minimal.
const IS_GEMINI = /generativelanguage\.googleapis\.com/.test(BASE_URL);

export function llmConfigured(): boolean {
  return typeof API_KEY === 'string' && API_KEY.trim().length > 0;
}

export interface ChatTurn {
  role: 'user' | 'assistant';
  content: string;
}

// ---------------------------------------------------------------------------
// Grounding context — a compact snapshot of the report so answers stay factual.
// ---------------------------------------------------------------------------

function truncate(text: string, max = 260): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length > max ? `${clean.slice(0, max - 1)}…` : clean;
}

let cachedContext: string | null = null;

function buildReportContext(): string {
  if (cachedContext) return cachedContext;

  const overview = STATS.map((s) => `${s.value} ${s.emphasis} ${s.label}`).join(', ');

  const trends = TRENDS.map((trend, index) => {
    const signals = trend.signals
      .map(
        (signal) =>
          `    - ${signal.shorthand} (Signal ${signal.seq}, score ${signal.strengthLabel}): ${signal.title} — ${truncate(signal.description, 160)}`,
      )
      .join('\n');
    return `  T${index + 1} — ${trend.title} (score ${trend.score}, ${trend.signalCount} signals): ${truncate(trend.description, 180)}\n${signals}`;
  }).join('\n');

  const records = Object.values(RECORDS)
    .map((r) => `  R${r.id} [${r.specialty}, ${r.institution}, ${r.date}]: ${truncate(r.quote, 220)}`)
    .join('\n');

  cachedContext = [
    'REPORT: MSL Insights — Givinostat / DMD, March 2026.',
    `OVERVIEW: ${overview}.`,
    'TRENDS & SIGNALS:',
    trends,
    'RECORDS (cite as R<id>):',
    records,
  ].join('\n');

  return cachedContext;
}

function scopeInstruction(scope: ChatScope): string {
  if (scope.kind === 'signal') return `The user is focused on ${scope.label}. Prioritise records and findings for that signal.`;
  if (scope.kind === 'trend') return `The user is focused on ${scope.label}. Prioritise that trend's signals.`;
  return 'The user is looking at the whole report.';
}

const SCHEMA_INSTRUCTIONS = `Respond with ONLY a JSON object (no markdown fences, no prose outside the JSON) in this exact shape:
{
  "blocks": [ { "type": "p" | "li", "text": "string, may use **bold** for emphasis" } ],
  "dataView": {                      // OPTIONAL — include only when a small breakdown/table genuinely helps
    "filter": "short label, e.g. By HCP specialty",
    "columns": ["Category", "Value", "Share"],
    "rows": [ { "label": "string", "value": "string", "share": 0-100 } ],
    "source": "e.g. From cited records"
  },
  "proof": { "label": "Proof", "quote": "a single verbatim quote from the records" },  // OPTIONAL
  "refs": ["R21", "S1", "T2"],       // OPTIONAL — record/signal/trend ids you relied on
  "confidence": { "label": "Strong" | "Moderate" | "Tentative", "tone": "success" | "warning" | "neutral" },  // how well-grounded the answer is
  "followUps": ["short follow-up question", "another", "a third"]  // 2-3 items
}
Guidelines:
- Keep it concise: a 1-sentence intro paragraph, then 2-4 "li" bullets when listing points.
- Ground every claim in the provided data and cite ids inline like (R21, R71) where relevant.
- Only include dataView / proof when they add value; omit otherwise.
- Always include "confidence": use "Strong"/success when many records back the claim, "Moderate"/warning when partial, "Tentative"/neutral when thin.
- Never invent records or numbers that aren't supported by the context.`;

function extractJson(text: string): RawAnswer {
  let body = text.trim();
  // Strip ```json ... ``` fences if the model added them.
  const fence = body.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) body = fence[1].trim();
  // Fall back to the outermost { ... }.
  const first = body.indexOf('{');
  const last = body.lastIndexOf('}');
  if (first !== -1 && last !== -1 && last > first) body = body.slice(first, last + 1);
  return JSON.parse(body) as RawAnswer;
}

async function callOpenAI(system: string, turns: ChatTurn[]): Promise<string> {
  const response = await fetch(`${BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.5,
      ...(IS_GEMINI ? {} : { response_format: { type: 'json_object' } }),
      messages: [{ role: 'system', content: system }, ...turns],
    }),
  });
  if (!response.ok) {
    throw new Error(`OpenAI request failed (${response.status}): ${await response.text()}`);
  }
  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? '';
}

async function callAnthropic(system: string, turns: ChatTurn[]): Promise<string> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY as string,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      temperature: 0.5,
      system,
      messages: turns,
    }),
  });
  if (!response.ok) {
    throw new Error(`Anthropic request failed (${response.status}): ${await response.text()}`);
  }
  const data = await response.json();
  return data.content?.[0]?.text ?? '';
}

export async function generateAnswer(params: {
  question: string;
  scope: ChatScope;
  history: ChatTurn[];
}): Promise<Answer> {
  const { question, scope, history } = params;

  const system = [
    'You are an MSL (Medical Science Liaison) insights analyst embedded in an analytics dashboard.',
    'Answer questions about the report below using only the data provided.',
    scopeInstruction(scope),
    '',
    SCHEMA_INSTRUCTIONS,
    '',
    buildReportContext(),
  ].join('\n');

  // Cap history so the prompt stays small.
  const trimmedHistory = history.slice(-6);
  const turns: ChatTurn[] = [...trimmedHistory, { role: 'user', content: question }];

  const raw = PROVIDER === 'anthropic' ? await callAnthropic(system, turns) : await callOpenAI(system, turns);
  return answerFromRaw(extractJson(raw), scope);
}
