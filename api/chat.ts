/**
 * Serverless chat proxy for the Ask AI demo.
 *
 * Keeps the LLM API key server-side so it is never shipped in the public
 * client bundle. The browser POSTs { system, turns } and this function
 * forwards an OpenAI-compatible chat/completions request with the key from
 * server env vars, returning only the model's text content.
 *
 * Server env (set in the Vercel project, NOT prefixed with VITE_):
 *   LLM_API_KEY   — provider key (required)
 *   LLM_BASE_URL  — OpenAI-compatible base URL (default: Google Gemini)
 *   LLM_MODEL     — model id (default: gemini-2.5-flash)
 */

const BASE_URL = (
  process.env.LLM_BASE_URL ?? 'https://generativelanguage.googleapis.com/v1beta/openai/'
).replace(/\/+$/, '');
const MODEL = process.env.LLM_MODEL ?? 'gemini-2.5-flash';
const API_KEY = process.env.LLM_API_KEY;

// Gemini's OpenAI-compatible layer rejects some OpenAI-only fields.
const IS_GEMINI = /generativelanguage\.googleapis\.com/.test(BASE_URL);

interface ChatTurn {
  role: 'user' | 'assistant';
  content: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  if (!API_KEY) {
    res.status(500).json({ error: 'LLM backend is not configured.' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body ?? {});
    const system: string | undefined = body.system;
    const turns: ChatTurn[] = Array.isArray(body.turns) ? body.turns : [];

    const messages = [
      ...(system ? [{ role: 'system', content: system }] : []),
      ...turns,
    ];

    const upstream = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.5,
        ...(IS_GEMINI ? {} : { response_format: { type: 'json_object' } }),
        messages,
      }),
    });

    if (!upstream.ok) {
      res.status(502).json({ error: `Upstream request failed (${upstream.status}).` });
      return;
    }

    const data = await upstream.json();
    res.status(200).json({ content: data.choices?.[0]?.message?.content ?? '' });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error.' });
  }
}
