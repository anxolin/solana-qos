import { styleText } from 'node:util'

type Style = Parameters<typeof styleText>[0]

/** Colors only on an interactive terminal, and never when NO_COLOR is set (https://no-color.org). */
const enabled = process.stdout.isTTY && !process.env.NO_COLOR && process.env.TERM !== 'dumb'
const paint = (style: Style) => (s: string | number) => (enabled ? styleText(style, String(s)) : String(s))

export const c = {
  dim: paint('dim'),
  bold: paint('bold'),
  red: paint('red'),
  green: paint('green'),
  yellow: paint('yellow'),
  blue: paint('blue'),
  magenta: paint('magenta'),
  cyan: paint('cyan'),
  gray: paint('gray'),
}

/** `#3 t1` — the row and trader a line is about. */
export const tag = (row: number | undefined, trader: number) => c.bold(c.cyan(`#${row ?? '-'}`)) + ' ' + c.blue(`t${trader}`)

export const stepLabel = (step: string) =>
  ({ acquire: c.magenta('acquire'), main: c.cyan('main'), cleanup: c.blue('cleanup'), setup: c.gray('setup') })[step] ?? step

export function status(s: string): string {
  if (s === 'fulfilled' || s === 'filled') return c.green(`✓ ${s}`)
  if (s === 'expired' || s === 'timeout' || s === 'cancelled') return c.yellow(`⚠ ${s}`)
  return c.red(`✗ ${s}`)
}

export const kind = (k: string) => (k === 'sell' ? c.red(k) : c.green(k))
export const mode = (m: string) => (m === 'sponsored' ? c.magenta(m) : c.yellow(m))
export const warn = (m: string) => c.yellow(`⚠ ${m}`)
export const error = (m: string) => c.red(`✗ ${m}`)
export const ok = (m: string) => c.green(`✓ ${m}`)
