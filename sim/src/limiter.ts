/** Minimal async rate limiter: at most `perSecond` calls start per second, across the whole process. */
export class RateLimiter {
  private next = 0
  constructor(private readonly perSecond: number) {}

  async take(): Promise<void> {
    const interval = 1000 / this.perSecond
    const now = Date.now()
    const at = Math.max(now, this.next)
    this.next = at + interval
    if (at > now) await sleep(at - now)
  }

  async run<T>(fn: () => Promise<T>): Promise<T> {
    await this.take()
    return fn()
  }
}

export const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

/** Message plus the low-level cause Node hides behind "fetch failed" (ECONNRESET, ETIMEDOUT, …). */
export function errorDetail(e: unknown): string {
  const err = e as { message?: string; cause?: { code?: string; message?: string }; response?: { status?: number }; body?: unknown }
  const cause = err?.cause?.code ?? err?.cause?.message
  // OrderBookApiError: the message is just the status text when the body is JSON; the reason lives in the body.
  const status = err?.response?.status
  const body = err?.body as { errorType?: string; description?: string } | undefined
  const api = body && typeof body === 'object' ? [body.errorType, body.description].filter(Boolean).join(': ') : ''
  return (
    `${status && !String(err?.message).includes(String(status)) ? `${status} ` : ''}${err?.message ?? String(e)}` +
    `${api && !String(err?.message).includes(api) ? `: ${api}` : ''}` +
    `${cause && !String(err?.message).includes(cause) ? ` (${cause})` : ''}`
  )
}

/** Structured context for the journal: which placement stage threw, what was sent, and the HTTP response or tx logs. */
export function errorInfo(e: unknown): Record<string, unknown> {
  const err = e as { stage?: string; request?: unknown; response?: { status?: number; url?: string }; body?: unknown; logs?: unknown }
  return { stage: err?.stage, request: err?.request, status: err?.response?.status, url: err?.response?.url, body: err?.body, logs: err?.logs }
}

const isRateLimit = (e: unknown) => /\b429\b|too many requests/i.test(errorDetail(e))
/** The request never got an HTTP answer: connection reset, timeout (including our own AbortSignal.timeout), DNS. Worth waiting out like a rate limit. */
const isNetwork = (e: unknown) =>
  /fetch failed|ECONNRESET|ETIMEDOUT|ECONNREFUSED|EAI_AGAIN|ENOTFOUND|EPIPE|socket hang up|UND_ERR|network|TimeoutError|aborted due to timeout/i.test(errorDetail(e))

/**
 * Retry `fn` on throw with exponential backoff plus jitter; rethrows the last error. Rate limits (429) and
 * network failures get more attempts and longer waits (up to ~30s): they usually pass if we slow down.
 */
export async function retry<T>(fn: () => Promise<T>, attempts = 4, baseMs = 500): Promise<T> {
  let last: unknown
  for (let i = 0; ; i++) {
    try {
      return await fn()
    } catch (e) {
      last = e
      const limited = isRateLimit(e) || isNetwork(e)
      if (i >= (limited ? 8 : attempts) - 1) break
      const wait = Math.min(30_000, (limited ? 1000 : baseMs) * 2 ** i)
      await sleep(wait / 2 + Math.random() * wait)
    }
  }
  throw last
}
