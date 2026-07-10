/**
 * "Bring Your Own Key" settings for the Ask AI demo.
 *
 * The visitor configures their own provider + API key + model directly in the
 * chat UI. Everything is persisted to a single localStorage key in *their*
 * browser only — it is never sent to our servers and never baked into the
 * build. The browser calls the LLM provider directly (see llm.ts).
 *
 * Mirrors the load/save/clear style of history.ts (SSR-safe try/catch + JSON).
 */

export type LlmProvider = 'anthropic' | 'openai' | 'gemini';

export interface LlmConfig {
  provider: LlmProvider;
  apiKey: string;
  model: string;
}

export interface ProviderDefault {
  /** Human-readable name for the provider picker. */
  label: string;
  /** Prefilled (user-editable) default model id. Verified current Jul 2026. */
  model: string;
  /** Direct provider endpoint the browser POSTs to. */
  endpoint: string;
}

/**
 * Sensible, current defaults per provider. Model ids were verified against the
 * providers' own docs (Jul 2026) so the prefilled defaults actually work; the
 * model field stays user-editable in the settings UI.
 *
 * - anthropic → `claude-sonnet-5` (current Sonnet-class, launched Jun 2026)
 * - openai    → `gpt-5.4-mini` (current mini-class, released Mar 2026)
 * - gemini    → `gemini-2.5-flash` (GA flash model, OpenAI-compat endpoint)
 */
export const PROVIDER_DEFAULTS: Record<LlmProvider, ProviderDefault> = {
  anthropic: {
    label: 'Anthropic (Claude)',
    model: 'claude-sonnet-5',
    endpoint: 'https://api.anthropic.com/v1/messages',
  },
  openai: {
    label: 'OpenAI',
    model: 'gpt-5.4-mini',
    endpoint: 'https://api.openai.com/v1/chat/completions',
  },
  gemini: {
    label: 'Google Gemini',
    model: 'gemini-2.5-flash',
    // Google's OpenAI-compatible surface (Bearer auth, chat/completions shape).
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
  },
};

export const PROVIDER_ORDER: LlmProvider[] = ['anthropic', 'openai', 'gemini'];

const STORAGE_KEY = 'rc-llm-config';

function isProvider(value: unknown): value is LlmProvider {
  return value === 'anthropic' || value === 'openai' || value === 'gemini';
}

/** Load the visitor's stored BYOK config, or null when nothing valid is saved. */
export function loadLlmConfig(): LlmConfig | null {
  try {
    if (typeof localStorage === 'undefined') return null;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<LlmConfig>;
    if (!parsed || !isProvider(parsed.provider)) return null;
    if (typeof parsed.apiKey !== 'string') return null;
    const provider = parsed.provider;
    const model =
      typeof parsed.model === 'string' && parsed.model.trim().length > 0
        ? parsed.model.trim()
        : PROVIDER_DEFAULTS[provider].model;
    return { provider, apiKey: parsed.apiKey, model };
  } catch {
    return null;
  }
}

/** Persist the BYOK config to this browser only. */
export function saveLlmConfig(config: LlmConfig): void {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // Ignore storage failures in the prototype.
  }
}

/** Remove the stored config so the chat falls back to the built-in demo engine. */
export function clearLlmConfig(): void {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage failures in the prototype.
  }
}
