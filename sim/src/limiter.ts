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

/** Retry `fn` on throw with exponential backoff; rethrows the last error. */
export async function retry<T>(fn: () => Promise<T>, attempts = 4, baseMs = 500): Promise<T> {
  let last: unknown
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn()
    } catch (e) {
      last = e
      if (i < attempts - 1) await sleep(baseMs * 2 ** i)
    }
  }
  throw last
}
