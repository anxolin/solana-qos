import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
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

  log(e: Omit<JournalEvent, 'ts'>) {
    this.ensure()
    appendFileSync(resolve(this.dir, 'sim', 'journal.jsonl'), JSON.stringify({ ts: new Date().toISOString(), ...e }) + '\n')
  }

  /** Record a placed order so `qos.py fetch` picks it up. */
  addOrder(uid: string) {
    if (this.uids.has(uid)) return
    this.uids.add(uid)
    this.ensure()
    appendFileSync(resolve(this.dir, 'logs', 'seed_orders.txt'), uid + '\n')
  }

  readMeta(): Record<string, unknown> {
    const p = resolve(this.dir, 'meta.json')
    return existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : {}
  }

  writeMeta(patch: Record<string, unknown>) {
    this.ensure()
    writeFileSync(resolve(this.dir, 'meta.json'), JSON.stringify({ ...this.readMeta(), ...patch }, null, 1) + '\n')
  }
}
