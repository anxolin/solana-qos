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

const isRateLimit = (e: unknown) => /\b429\b|too many requests/i.test(String((e as Error)?.message ?? e))

/**
 * Retry `fn` on throw with exponential backoff plus jitter; rethrows the last error. Rate-limit errors (429)
 * get more attempts and longer waits (up to ~30s), since the server is asking us to slow down.
 */
export async function retry<T>(fn: () => Promise<T>, attempts = 4, baseMs = 500): Promise<T> {
  let last: unknown
  for (let i = 0; ; i++) {
    try {
      return await fn()
    } catch (e) {
      last = e
      const limited = isRateLimit(e)
      if (i >= (limited ? 8 : attempts) - 1) break
      const wait = Math.min(30_000, (limited ? 1000 : baseMs) * 2 ** i)
      await sleep(wait / 2 + Math.random() * wait)
    }
  }
  throw last
}
