import { appendFileSync, existsSync, mkdirSync, openSync, closeSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { randomUUID } from 'node:crypto'
import { QOS_ROOT } from './config.js'

export type Step = 'setup' | 'acquire' | 'main' | 'cleanup'

export interface JournalEvent {
  ts: string
  row?: number
  trader?: number
  step: Step
  event: string
  uid?: string
  mode?: string
  [k: string]: unknown
}

/** A session folder in the layout qos.py reads: meta.json, logs/seed_orders.txt, plus sim/journal.jsonl. */
export class Session {
  readonly dir: string
  private readonly uids = new Set<string>()

  constructor(readonly name: string) {
    this.dir = resolve(QOS_ROOT, 'sessions', name)
    const seeds = resolve(this.dir, 'logs', 'seed_orders.txt')
    if (existsSync(seeds)) for (const u of readFileSync(seeds, 'utf8').split('\n')) if (u.trim()) this.uids.add(u.trim())
  }

  /** Folders are created on first write, so a dry run leaves nothing behind. */
  private ensure() {
    mkdirSync(resolve(this.dir, 'logs'), { recursive: true })
    mkdirSync(resolve(this.dir, 'sim'), { recursive: true })
  }

  /** Prevent two runners from trading the same session. Stale locks require explicit removal. */
  lock(): () => void {
    this.ensure()
    const path = resolve(this.dir, 'sim', 'run.lock')
    if (existsSync(path)) {
      const pid = Number(readFileSync(path, 'utf8').split(':')[0])
      if (!Number.isInteger(pid) || pid < 1) throw new Error(`Invalid session lock: ${path}`)
      try { process.kill(pid, 0); throw new Error(`Session ${this.name} is already running (PID ${pid})`) }
      catch (e) { if ((e as NodeJS.ErrnoException).code !== 'ESRCH') throw e }
      throw new Error(`Session ${this.name} has a stale lock (PID ${pid}). Confirm no runner uses this session, remove ${path}, then resume.`)
    }
    const fd = openSync(path, 'wx')
    const owner = `${process.pid}:${randomUUID()}`
    writeFileSync(fd, owner)
    closeSync(fd)
    const release = () => { if (existsSync(path) && readFileSync(path, 'utf8') === owner) unlinkSync(path) }
    process.once('exit', release)
    return () => { process.off('exit', release); release() }
  }

  log(e: Omit<JournalEvent, 'ts'>) {
    this.ensure()
    appendFileSync(resolve(this.dir, 'sim', 'journal.jsonl'), JSON.stringify({ ts: new Date().toISOString(), ...e }, (_, v) => (typeof v === 'bigint' ? v.toString() : v)) + '\n')
  }

  /** Record a placed order so `qos.py fetch` picks it up. */
  addOrder(uid: string) {
    if (this.uids.has(uid)) return
    this.uids.add(uid)
    this.ensure()
    appendFileSync(resolve(this.dir, 'logs', 'seed_orders.txt'), uid + '\n')
  }

  /** Timed-out orders can still be live; include every attempt until confirmed final or cancelled. */
  outstandingOrders(): { uid: string; validTo: number }[] {
    const path = resolve(this.dir, 'sim', 'journal.jsonl')
    if (!existsSync(path)) return []
    const pending = new Map<string, number>()
    for (const line of readFileSync(path, 'utf8').split('\n').filter(Boolean)) {
      const event = JSON.parse(line)
      if (['prepared', 'placed'].includes(event.event)) pending.set(event.uid, event.validTo)
      if (event.event === 'rejected') pending.delete(event.uid)
      if (event.event === 'final' && (['fulfilled', 'expired', 'cancelled'].includes(event.status) || event.cancelTx)) {
        pending.delete(event.uid)
      }
    }
    return [...pending].map(([uid, validTo]) => ({ uid, validTo }))
  }

  readMeta(): Record<string, unknown> {
    const p = resolve(this.dir, 'meta.json')
    return existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : {}
  }

  writeMeta(patch: Record<string, unknown>) {
    this.ensure()
    const path = resolve(this.dir, 'meta.json')
    writeFileSync(`${path}.tmp`, JSON.stringify({ ...this.readMeta(), ...patch }, null, 1) + '\n')
    renameSync(`${path}.tmp`, path)
  }
}
