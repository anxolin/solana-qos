"""Self-contained HTML version of the QoS report (no external scripts)."""

from __future__ import annotations

import statistics
from collections import Counter, defaultdict
from datetime import datetime, timedelta, timezone
from html import escape

DEBUG = "https://debug.barn.cow.fi/order/"
SOLSCAN = "https://solscan.io/account/"
SOLSCAN_TOKEN = "https://solscan.io/token/"


def token_link(label: str | None, mint: str | None) -> str:
    """A token's symbol linking to its explorer page; plain text when the mint isn't known."""
    text = escape(str(label or mint or "?"))
    if not mint:
        return text
    # Native SOL's "mint" is the System Program, which has no token page: show wSOL's.
    page = "So11111111111111111111111111111111111111112" if mint == "11111111111111111111111111111111" else mint
    return f'<a href="{SOLSCAN_TOKEN}{page}" target="_blank" rel="noopener" title="{mint}">{text}</a>'


def pair_cell(o: dict) -> str:
    return f'{token_link(o["sell_sym"], o["sellToken"])} → {token_link(o["buy_sym"], o["buyToken"])}'
ENV_LABEL = "barn"  # set by qos.py from the session's environment

# Cause groups -> status token. Executed is good, the incident is critical,
# other creation failures are serious, the rest is neutral.
# Ladybug: red shell split down the middle, dark head and spots. 16px, theme tokens.
LADYBUG = (
    '<svg class="bug" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">'
    '<circle cx="8" cy="3.6" r="2.4" class="bug-dark"/>'
    '<ellipse cx="8" cy="9.4" rx="5.6" ry="5.4" class="bug-shell"/>'
    '<line x1="8" y1="4.4" x2="8" y2="14.8" class="bug-line"/>'
    '<circle cx="5.4" cy="8" r="1.1" class="bug-dark"/><circle cx="10.6" cy="8" r="1.1" class="bug-dark"/>'
    '<circle cx="5.8" cy="11.6" r="0.9" class="bug-dark"/><circle cx="10.2" cy="11.6" r="0.9" class="bug-dark"/>'
    "</svg>"
)


def order_cell(uid: str, note: str = "") -> str:
    """Shortened order UID (full UID on hover) plus a ladybug link to the debug tool."""
    return (f'<span class="order"><span class="mono" title="{uid}">{uid[:10]}…{uid[-4:]}</span>'
            f'<a class="debug-link" href="{DEBUG}{uid}" target="_blank" rel="noopener" '
            f'aria-label="Open order {uid[:10]} in the debug tool" title="Open in the debug tool">{LADYBUG}</a>{note}</span>')


NEUTRAL = {"Expired without a fill", "Cancelled", "Still open", "Not filled within fill timeout (cancelled by sim)"}


def ts(v: str) -> datetime:
    return datetime.fromisoformat(v.replace("Z", "+00:00"))


def pct(a: int, b: int) -> str:
    return f"{100 * a / b:.1f}%" if b else "–"


def hhmm(d: datetime) -> str:
    return d.strftime("%H:%M")


def tone(cause: str, incident_labels: set[str]) -> str:
    if cause == "Executed":
        return "good"
    if cause in incident_labels:
        return "critical"
    if cause in NEUTRAL:
        return "muted"
    return "serious"


CSS = """
/* Layout: one reading column (max 1080px), summary first, detail tables last. */
:root {
  --bg: #f7f8fa; --surface: #ffffff; --ink: #14161c; --ink-2: #4a4f5c; --muted: #7d8290;
  --line: #e2e5eb; --axis: #c4c8d1; --accent: #4a3aa7; --band: rgba(208, 59, 59, 0.08);
  --good: #0a8f0a; --critical: #d03b3b; --serious: #e0703f; --neutral: #a7abb5; --series: #2a78d6;
  --font-ui: "IBM Plex Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-data: "IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace;
  --font-head: "IBM Plex Sans Condensed", "IBM Plex Sans", system-ui, sans-serif;
}
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) {
  --bg: #101217; --surface: #181b22; --ink: #f2f3f6; --ink-2: #c0c4ce; --muted: #8b909c;
  --line: #2a2e38; --axis: #3a3f4b; --accent: #9085e9; --band: rgba(230, 103, 103, 0.12);
  --good: #0ca30c; --critical: #e66767; --serious: #ec835a; --neutral: #6b7080; --series: #3987e5;
  color-scheme: dark; } }
:root[data-theme="dark"] {
  --bg: #101217; --surface: #181b22; --ink: #f2f3f6; --ink-2: #c0c4ce; --muted: #8b909c;
  --line: #2a2e38; --axis: #3a3f4b; --accent: #9085e9; --band: rgba(230, 103, 103, 0.12);
  --good: #0ca30c; --critical: #e66767; --serious: #ec835a; --neutral: #6b7080; --series: #3987e5;
  color-scheme: dark; }
* { box-sizing: border-box; }
body { background: var(--bg); color: var(--ink); font: 15px/1.55 var(--font-ui); }
.wrap { max-width: 1080px; margin: 0 auto; padding-inline: 20px; padding-block: 40px 64px;
  display: grid; gap: 40px; }
header { display: grid; gap: 6px; }
.eyebrow { font: 600 12px/1 var(--font-ui); letter-spacing: .08em; text-transform: uppercase; color: var(--accent); }
h1 { font: 600 34px/1.15 var(--font-head); margin: 0; text-wrap: balance; }
h2 { font: 600 21px/1.25 var(--font-head); margin: 0; text-wrap: balance; }
h3 { font: 600 15px/1.3 var(--font-ui); margin: 0; }
p { margin: 0; max-width: 68ch; color: var(--ink-2); }
.meta { color: var(--muted); font-size: 13px; }
section { display: grid; gap: 14px; min-width: 0; }
.more-btn { background: none; border: 0; padding: 0; margin-left: .35em; font: inherit; color: var(--muted); cursor: pointer; text-decoration: underline dotted; }
.tiles { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 12px; }
.tile { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px;
  display: grid; gap: 4px; align-content: start; }
.tile .k { font-size: 12px; letter-spacing: .04em; text-transform: uppercase; color: var(--muted); }
.tile .v { font: 600 30px/1.1 var(--font-head); }
.tile .s { font-size: 13px; color: var(--ink-2); }
.panel { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 18px;
  display: grid; gap: 14px; min-width: 0; }
.legend { display: flex; flex-wrap: wrap; gap: 6px 18px; font-size: 13px; color: var(--ink-2); }
.legend span { display: inline-flex; align-items: center; gap: 6px; }
.sw { width: 10px; height: 10px; border-radius: 2px; display: inline-block; flex: none; }
.t-good { background: var(--good); fill: var(--good); }
.t-critical { background: var(--critical); fill: var(--critical); }
.t-serious { background: var(--serious); fill: var(--serious); }
.t-muted { background: var(--neutral); fill: var(--neutral); }
.t-series { background: var(--series); fill: var(--series); }
.stack { display: flex; gap: 2px; height: 28px; border-radius: 4px; overflow: hidden; }
.stack div { min-width: 2px; }
svg text { fill: var(--muted); font: 11px var(--font-ui); font-variant-numeric: tabular-nums; }
svg .grid { stroke: var(--line); stroke-width: 1; }
svg .base { stroke: var(--axis); stroke-width: 1; }
svg .band { fill: var(--band); }
svg .band-edge { stroke: var(--critical); stroke-width: 1; stroke-dasharray: 3 3; }
svg .band-label { fill: var(--critical); font-weight: 600; }
svg .change { stroke: var(--accent); stroke-width: 2; }
svg .change-label { fill: var(--accent); font-weight: 600; }
.callout.change-box { border-left-color: var(--accent); }
.callout.change-box .badge { color: var(--accent); }
.deltas { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; }
.delta { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px; display: grid; gap: 4px; }
.delta .k { font-size: 12px; letter-spacing: .04em; text-transform: uppercase; color: var(--muted); }
.delta .v { font: 600 26px/1.15 var(--font-head); display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
.delta .v .from { color: var(--muted); font-weight: 400; font-size: 20px; }
.delta .s { font-size: 13px; color: var(--ink-2); }
.better { color: var(--good); font-weight: 600; }
.worse { color: var(--critical); font-weight: 600; }
.pair { display: grid; gap: 6px; }
.pair .hbar { grid-template-columns: 70px 1fr auto; }
svg [data-tip]:hover, .stack [data-tip]:hover { opacity: .8; }
.callout { border: 1px solid var(--line); border-left: 3px solid var(--critical); border-radius: 6px;
  background: var(--surface); padding: 14px 16px; display: grid; gap: 6px; }
.callout .badge { font: 600 12px/1 var(--font-ui); letter-spacing: .06em; text-transform: uppercase; color: var(--critical); }
.two { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px; }
.scroll { overflow-x: auto; min-width: 0; }
table { border-collapse: collapse; width: 100%; font-size: 14px; }
th, td { text-align: left; padding: 7px 10px; border-bottom: 1px solid var(--line); vertical-align: top; }
th { font-size: 12px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; color: var(--muted); white-space: nowrap; }
td.n, th.n { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
code, .mono { font: 13px var(--font-data); }
a { color: var(--accent); text-underline-offset: 2px; }
a:focus-visible, button:focus-visible, summary:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 3px; }
.hbar { display: grid; grid-template-columns: minmax(90px, 160px) 1fr auto; gap: 10px; align-items: center; font-size: 14px; }
.hbar .track { height: 14px; background: var(--line); border-radius: 0 4px 4px 0; overflow: hidden; }
.hbar .fill { height: 100%; border-radius: 0 4px 4px 0; }
.hbar .num { font-variant-numeric: tabular-nums; color: var(--ink-2); min-width: 7ch; text-align: right; }
.bars { display: grid; gap: 8px; }
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chips button { font: 13px var(--font-ui); color: var(--ink-2); background: var(--surface);
  border: 1px solid var(--line); border-radius: 999px; padding: 5px 12px; cursor: pointer;
  display: inline-flex; align-items: center; gap: 6px; }
.chips button[aria-pressed="true"] { color: var(--ink); border-color: var(--ink-2); font-weight: 600; }
details { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 12px 16px; }
details > summary { cursor: pointer; font-weight: 600; }
details[open] > summary { margin-bottom: 10px; }
.order { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
.debug-link { display: inline-flex; padding: 2px; border-radius: 4px; line-height: 0; }
.debug-link:hover { background: var(--line); }
.bug-shell { fill: var(--critical); }
.bug-dark { fill: var(--ink); }
.bug-line { stroke: var(--ink); stroke-width: 1; }
.filter-row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-size: 13px; color: var(--ink-2); }
.filter-row input { font: 13px var(--font-data); color: var(--ink); background: var(--surface);
  border: 1px solid var(--line); border-radius: 6px; padding: 6px 9px; width: 46ch; max-width: 100%; }
.filter-row input:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
.filter-row .clear { font: 13px var(--font-ui); color: var(--ink-2); background: var(--surface);
  border: 1px solid var(--line); border-radius: 6px; padding: 5px 10px; cursor: pointer; }
.owner-pick { font: 13px var(--font-data); color: var(--accent); background: none; border: 0; padding: 0;
  cursor: pointer; text-decoration: underline dotted; text-underline-offset: 3px; }
#tip { position: fixed; pointer-events: none; z-index: 10; background: var(--ink); color: var(--bg);
  font-size: 12px; line-height: 1.4; padding: 6px 9px; border-radius: 5px; max-width: 260px; white-space: pre-line; }
footer { color: var(--muted); font-size: 13px; display: grid; gap: 6px; }
@media (max-width: 520px) { h1 { font-size: 27px; } .tile .v { font-size: 26px; } .hbar { grid-template-columns: 90px 1fr auto; } }
@media (prefers-reduced-motion: no-preference) { .fill, .stack div { transition: opacity .15s; } }
"""

JS = """
document.addEventListener('click', e => {  // "+N more" in a list: show the rest in place
  const b = e.target.closest('.more-btn');
  if (b) { b.nextElementSibling.hidden = false; b.remove(); }
});
const tip = document.getElementById('tip');
document.addEventListener('pointermove', e => {
  const t = e.target.closest('[data-tip]');
  if (!t) { tip.hidden = true; return; }
  tip.textContent = t.dataset.tip; tip.hidden = false;
  const x = Math.min(e.clientX + 14, window.innerWidth - tip.offsetWidth - 8);
  tip.style.left = x + 'px'; tip.style.top = (e.clientY + 16) + 'px';
});
document.addEventListener('pointerleave', () => { tip.hidden = true; });
const chips = document.querySelectorAll('#cause-filter button');
const ownerSel = document.getElementById('owner-filter');
const rows = document.querySelectorAll('#failed tbody tr');
const count = document.getElementById('failed-count');
let cause = '*';
function applyFilters() {
  const owner = ownerSel.value.trim().toLowerCase();
  let n = 0;
  rows.forEach(r => {
    const show = (cause === '*' || r.dataset.cause === cause) && (!owner || r.dataset.owner.toLowerCase().includes(owner));
    r.hidden = !show; n += show;
  });
  count.textContent = n;
}
chips.forEach(b => b.addEventListener('click', () => {
  chips.forEach(c => c.setAttribute('aria-pressed', c === b ? 'true' : 'false'));
  cause = b.dataset.cause; applyFilters();
}));
ownerSel.addEventListener('input', applyFilters);
document.getElementById('owner-clear').addEventListener('click', () => { ownerSel.value = ''; applyFilters(); ownerSel.focus(); });
document.querySelectorAll('#failed .owner-pick').forEach(b => b.addEventListener('click', () => {
  ownerSel.value = b.dataset.owner; applyFilters();
  ownerSel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}));
"""


def nice_max(v: int) -> int:
    for step in (1, 2, 5, 10, 20, 25, 50, 100):
        if v <= step * 4:
            return step * -(-v // step) if v else step
    return v


def bar_path(x: float, y: float, w: float, h: float, r: float = 3) -> str:
    """Rect with rounded top corners only (the data end), square at the baseline."""
    r = min(r, w / 2, h)
    return (f"M{x:.1f},{y + h:.1f} V{y + r:.1f} Q{x:.1f},{y:.1f} {x + r:.1f},{y:.1f} "
            f"H{x + w - r:.1f} Q{x + w:.1f},{y:.1f} {x + w:.1f},{y + r:.1f} V{y + h:.1f} Z")


def timeline(orders: list[dict], meta: dict, bucket_min: int = 5) -> str:
    times = [ts(o["creationDate"]) for o in orders]
    first = min(times).replace(second=0, microsecond=0)
    first -= timedelta(minutes=first.minute % bucket_min)
    last = max(times)
    buckets = []
    t = first
    while t <= last:
        buckets.append(t)
        t += timedelta(minutes=bucket_min)
    counts = defaultdict(lambda: [0, 0])
    for o, t in zip(orders, times):
        idx = int((t - first).total_seconds() // (bucket_min * 60))
        counts[idx][0 if o["outcome"] == "executed" else 1] += 1
    ymax = nice_max(max((a + b for a, b in counts.values()), default=1))

    W, H, L, R, T, B = 760, 276, 34, 10, 42, 28
    pw, ph = W - L - R, H - T - B
    bw = pw / len(buckets)
    y = lambda v: T + ph - v / ymax * ph  # noqa: E731
    xt = lambda d: L + (d - first).total_seconds() / (bucket_min * 60) * bw  # noqa: E731
    out = [f'<svg viewBox="0 0 {W} {H}" width="100%" role="img" aria-labelledby="tl-title">',
           '<title id="tl-title">Orders placed per 5 minutes, executed vs not executed</title>']
    for inc in meta.get("incidents", []):
        x0, x1 = xt(ts(inc["start"])), xt(ts(inc["end"]))
        out += [f'<rect class="band" x="{x0:.1f}" y="{T}" width="{x1 - x0:.1f}" height="{ph}"/>',
                f'<line class="band-edge" x1="{x0:.1f}" x2="{x0:.1f}" y1="{T - 22}" y2="{T + ph}"/>',
                f'<line class="band-edge" x1="{x1:.1f}" x2="{x1:.1f}" y1="{T}" y2="{T + ph}"/>',
                f'<text class="band-label" x="{x0 + 4:.1f}" y="{T - 26}">{escape(inc["label"])} '
                f'{hhmm(ts(inc["start"]))}–{hhmm(ts(inc["end"]))}</text>']
    step = ymax // 4 or 1
    for v in range(0, ymax + 1, step):
        cls = "base" if v == 0 else "grid"
        out += [f'<line class="{cls}" x1="{L}" x2="{W - R}" y1="{y(v):.1f}" y2="{y(v):.1f}"/>',
                f'<text x="{L - 6}" y="{y(v) + 4:.1f}" text-anchor="end">{v}</text>']
    for i, b in enumerate(buckets):
        ex, no = counts[i]
        x = L + i * bw + 1
        w = bw - 2
        label = f"{hhmm(b)}–{hhmm(b + timedelta(minutes=bucket_min))} UTC\n{ex} executed, {no} not executed"
        if ex:
            top = not no
            path = bar_path(x, y(ex), w, y(0) - y(ex), 3 if top else 0)
            out.append(f'<path class="t-good" d="{path}" data-tip="{escape(label)}"/>')
        if no:
            gap = 2 if ex else 0  # surface gap between stacked segments
            path = bar_path(x, y(ex + no), w, y(ex) - y(ex + no) - gap, 3)
            out.append(f'<path class="t-serious" d="{path}" data-tip="{escape(label)}"/>')
        if b.minute % 15 == 0:
            out.append(f'<text x="{x + w / 2:.1f}" y="{H - 8}" text-anchor="middle">{hhmm(b)}</text>')
    for ch in meta.get("changes", []):
        x = xt(ts(ch["at"]))
        anchor, dx = ("end", -5) if x > W - 200 else ("start", 5)
        out += [f'<line class="change" x1="{x:.1f}" x2="{x:.1f}" y1="{T - 14}" y2="{T + ph}"/>',
                f'<text class="change-label" x="{x + dx:.1f}" y="{T - 8}" text-anchor="{anchor}">'
                f'{escape(ch.get("short", ch["label"]))} {hhmm(ts(ch["at"]))}</text>']
    out.append("</svg>")
    return "".join(out)


def hbars(rows: list[tuple[str, int, str]], total: int, tone_cls: str = "t-series") -> str:
    vmax = max((r[1] for r in rows), default=1)
    out = ['<div class="bars">']
    for name, v, sub in rows:
        out.append(
            f'<div class="hbar" data-tip="{escape(name)}: {v}{escape(sub and chr(10) + sub)}">'
            f'<span>{escape(name)}</span><div class="track"><div class="fill {tone_cls}" '
            f'style="width:{100 * v / vmax:.1f}%"></div></div>'
            f'<span class="num">{v} · {pct(v, total)}</span></div>')
    out.append("</div>")
    return "".join(out)


def table(headers: list[str], rows: list[list], numeric: set[int] = frozenset(), attrs=None) -> str:
    th = "".join(f'<th class="{"n" if i in numeric else ""}">{escape(h)}</th>' for i, h in enumerate(headers))
    body = []
    for j, r in enumerate(rows):
        a = attrs[j] if attrs else ""
        tds = "".join(f'<td class="{"n" if i in numeric else ""}">{c}</td>' for i, c in enumerate(r))
        body.append(f"<tr {a}>{tds}</tr>")
    return f'<div class="scroll"><table><thead><tr>{th}</tr></thead><tbody>{"".join(body)}</tbody></table></div>'


LOWER_IS_BETTER = ("time", "Never created", "No settlement", "Winner too late", "rejected", "skipped")


VOLUME = ("Orders placed", "Executed", "wins", "landed")


def delta_cls(name: str, before, after) -> str:
    # Volume counts depend on how busy each window was, so they stay uncolored.
    if before is None or after is None or before == after or any(w in name for w in VOLUME):
        return ""
    lower = any(w in name for w in LOWER_IS_BETTER)
    return "better" if (after < before) == lower else "worse"


def comparison(change: dict, c: dict) -> list[str]:
    from_q = lambda k: c["before"][k]  # noqa: E731
    to_q = lambda k: c["after"][k]  # noqa: E731
    (b0, b1), (a0, a1) = c["window"]["before"], c["window"]["after"]
    fmt = lambda k, v: "–" if v is None else (f"{v:.1f}%" if k == "Fill rate" else f"{v:.0f}s" if "time" in k else str(v))  # noqa: E731
    out = ['<section><h2>Before and after: ' + escape(change["label"]) + "</h2>",
           f'<div class="callout change-box"><span class="badge">Config change · {hhmm(ts(change["at"]))} UTC</span>',
           f"<p>{escape(change.get('detail', ''))}</p>"]
    if change.get("baseline_note"):
        out.append(f'<p class="meta">Compared: orders placed {b0:%H:%M}–{b1:%H:%M} ({c["before"]["Orders placed"]}) vs '
                   f'{a0:%H:%M}–{a1:%H:%M} ({c["after"]["Orders placed"]}). {escape(change["baseline_note"])}</p>')
    out.append("</div>")

    tiles = [("Fill rate", "Fill rate"), ("p90 time to execution", "p90 time to execution"),
             ("Winner too late", "Winner too late: creation blockhash expired")]
    out.append('<div class="deltas">')
    for label, k in tiles:
        b, a = from_q(k), to_q(k)
        out.append(f'<div class="delta"><span class="k">{escape(label)}</span>'
                   f'<span class="v"><span class="from">{fmt(k, b)} →</span><span class="{delta_cls(k, b, a)}">{fmt(k, a)}</span></span></div>')
    out.append("</div>")

    logs = change.get("logs", {})
    lb, la = logs.get("before", {}), logs.get("after", {})
    pairs = [("Fill rate", from_q("Fill rate"), to_q("Fill rate"))]
    wins, landed = "jupiter-solve wins", "jupiter-solve settlements landed"
    if wins in lb and landed in lb:
        pairs.append(("jupiter-solve wins that landed",
                      100 * lb[landed] / lb[wins] if lb[wins] else None,
                      100 * la[landed] / la[wins] if la.get(wins) else None))
    out.append('<div class="two">')
    for name, b, a in pairs:
        out.append(f'<div class="panel pair"><h3>{escape(name)}</h3>')
        for lab, v, cls in (("Before", b, "t-muted"), ("After", a, "t-good")):
            w = v or 0
            out.append(f'<div class="hbar" data-tip="{lab}: {w:.1f}%"><span>{lab}</span><div class="track">'
                       f'<div class="fill {cls}" style="width:{w:.1f}%"></div></div><span class="num">{w:.1f}%</span></div>')
        out.append("</div>")
    out.append("</div>")

    rows = [[escape(k), fmt(k, from_q(k)), f'<span class="{delta_cls(k, from_q(k), to_q(k))}">{fmt(k, to_q(k))}</span>']
            for k in c["before"]]
    rows += [[escape(k) + ' <span class="meta">(logs)</span>', v, f'<span class="{delta_cls(k, v, la.get(k))}">{la.get(k, "–")}</span>']
             for k, v in lb.items()]
    out.append('<div class="panel">' + table(["Metric", f"Before {b0:%H:%M}–{b1:%H:%M}", f"After {a0:%H:%M}–{a1:%H:%M}"],
                                              rows, {1, 2}) + "</div>")
    out.append('<p class="meta">The after window is short (about 15 minutes of orders), so treat the size of the change as indicative.</p>')
    out.append("</section>")
    return out


def quota_chart(rl: dict, meta: dict) -> str:
    rows = rl["rows"]
    bmin = rl["bucket_min"]
    first = ts(rows[0]["t"])
    ymax = nice_max(max(r["attempts"] for r in rows))
    W, H, L, R, T, B = 760, 250, 40, 10, 26, 28
    pw, ph = W - L - R, H - T - B
    bw = pw / len(rows)
    y = lambda v: T + ph - v / ymax * ph  # noqa: E731
    xt = lambda d: L + (d - first).total_seconds() / (bmin * 60) * bw  # noqa: E731
    out = [f'<svg viewBox="0 0 {W} {H}" width="100%" role="img" aria-labelledby="q-title">',
           '<title id="q-title">Jupiter quote attempts per 5 minutes: solved, no matching swap, rate limited</title>']
    step = max(1, ymax // 4)
    for v in range(0, ymax + 1, step):
        out += [f'<line class="{"base" if v == 0 else "grid"}" x1="{L}" x2="{W - R}" y1="{y(v):.1f}" y2="{y(v):.1f}"/>',
                f'<text x="{L - 6}" y="{y(v) + 4:.1f}" text-anchor="end">{v}</text>']
    for i, r in enumerate(rows):
        x, w = L + i * bw + 1, bw - 2
        t = ts(r["t"])
        tip = (f"{hhmm(t)}–{hhmm(t + timedelta(minutes=bmin))} UTC\n{r['attempts']} attempts: {r['solved']} solved, "
               f"{r['no_match']} no matching swap, {r['rate_limited']} rate limited")
        base = 0
        segs = [(k, r[k]) for k in ("solved", "no_match", "rate_limited") if r[k]]
        for j, (k, v) in enumerate(segs):
            top = j == len(segs) - 1
            gap = 2 if j else 0
            cls = {"solved": "t-good", "no_match": "t-muted", "rate_limited": "t-critical"}[k]
            out.append(f'<path class="{cls}" d="{bar_path(x, y(base + v), w, y(base) - y(base + v) - gap, 3 if top else 0)}" '
                       f'data-tip="{escape(tip)}"/>')
            base += v
        if t.minute % 15 == 0:
            out.append(f'<text x="{x + w / 2:.1f}" y="{H - 8}" text-anchor="middle">{hhmm(t)}</text>')
    for ch in meta.get("changes", []):
        x = xt(ts(ch["at"]))
        out += [f'<line class="change" x1="{x:.1f}" x2="{x:.1f}" y1="{T - 12}" y2="{T + ph}"/>',
                f'<text class="change-label" x="{x - 5:.1f}" y="{T - 6}" text-anchor="end">'
                f'{escape(ch.get("short", ch["label"]))} {hhmm(ts(ch["at"]))}</text>']
    out.append("</svg>")
    return "".join(out)


def rate_limit_section(rl: dict, meta: dict, uids: set[str]) -> list[str]:
    out = ["<section><h2>Jupiter rate limiting</h2>",
           '<div class="callout"><span class="badge">Rate limits</span>',
           f"<h3>{rl['rate_limited']} of {rl['attempts']} Jupiter quote attempts were rate limited "
           f"({pct(rl['rate_limited'], rl['attempts'])})</h3>",
           f"<p>{rl['orders_hit']} orders never executed because of it: Jupiter's quotes for them were rate limited, "
           "it never found a solution, and no other solver bid. Bidding in every auction multiplied Jupiter's request "
           "volume, and a few old orders that can never fill are re-quoted in every auction, using most of the quota.</p></div>",
           '<div class="panel"><div class="legend"><span><i class="sw t-good"></i>Solved</span>'
           '<span><i class="sw t-muted"></i>No matching swap</span><span><i class="sw t-critical"></i>Rate limited</span>'
           + "".join('<span><i class="sw" style="background:var(--accent);width:3px"></i>'
                     f"{escape(c.get('short', c['label']))}</span>" for c in meta.get("changes", []))
           + f'</div><div class="scroll">{quota_chart(rl, meta)}</div></div>',
           '<div class="two">']
    if rl["periods"]:
        out += ['<div class="panel"><h3>Before and after the bidding change</h3>',
                table(["Window", "Attempts", "Rate limited", "Share"],
                      [[escape(k), v["attempts"], v["rate_limited"], pct(v["rate_limited"], v["attempts"])]
                       for k, v in rl["periods"].items()], {1, 2, 3}), "</div>"]
    out += ['<div class="panel"><h3>Orders using the most quote attempts</h3>',
            table(["Order", "Attempts", "Rate limited", "Solved"],
                  [[order_cell(q["uid"], "" if q["in_report"] else ' <span class="meta">older order</span>'),
                    q["attempts"], q["rate_limited"], q["solved"]] for q in rl["top"]], {1, 2, 3}),
            '<p class="meta">“Older order” means it was created before this session, so it isn\'t in the order counts.</p></div>',
            "</div></section>"]
    return out


def trade_cell(r: dict) -> str:
    if "mints" not in r:
        return escape(r["trade"])
    (a, b), (ma, mb) = r["labels"], r["mints"]
    return f"{escape(str(r['type']))} {escape(str(r['amount']))} {token_link(a, ma)} {'→' if r['type'] == 'sell' else '←'} {token_link(b, mb)}"


def market_cell(m: dict) -> str:
    return f'{token_link(*m["sell"])} → {token_link(*m["buy"])}'


def counted(items: list[tuple[str, str]], show: int = 0) -> str:
    """Distinct (key, html) items, most common first, with a ×n suffix when repeated; past `show`, behind a toggle."""
    html = dict(items)
    parts = [f"{html[k]} ×{n}" if n > 1 else html[k] for k, n in Counter(k for k, _ in items).most_common()]
    if not show or len(parts) <= show:
        return ", ".join(parts)
    return (", ".join(parts[:show]) + f'<button type="button" class="more-btn">+{len(parts) - show} more</button>'
            + '<span class="more-rest" hidden>, ' + ", ".join(parts[show:]) + "</span>")


STEPS = {"setup": "token lookup", "quote": "quote", "acquire": "acquiring the sell token", "main": "main order",
         "rpc": "an RPC call before placing"}


def failed_at(f: dict) -> str:
    if f.get("after"):
        return "acquiring the sell token, after an earlier row didn't deliver it"
    return STEPS.get(f["step"], f["step"])


def no_order_section(rows: list[dict]) -> list[str]:
    """Scenario rows that failed before their order existed: the quote, the orderbook or the sim's RPC said no."""
    by_err, by_market = defaultdict(list), defaultdict(list)
    for r in rows:
        by_err[(r["failure"]["type"], failed_at(r["failure"]), bool(r["failure"].get("after")))].append(r)
        by_market[r["market"]["text"]].append(r)
    # Root causes first, knock-on failures (a row that needed what an earlier failed row would have bought) last.
    groups = sorted(by_err.items(), key=lambda kv: (kv[0][2], -len(kv[1])))
    err_rows = [[f'<span class="order"><i class="sw {"t-muted" if knock else "t-critical"}"></i>{escape(t)}</span>',
                 escape(at), len(rs), counted([(r["market"]["text"], market_cell(r["market"])) for r in rs], show=5),
                 escape(next((r["failure"]["detail"] for r in rs if r["failure"]["detail"]), ""))]
                for (t, at, knock), rs in groups]
    market_rows = [[market_cell(rs[0]["market"]), len(rs),
                    counted([(r["failure"]["type"], escape(r["failure"]["type"])) for r in rs]),
                    ", ".join(str(r["row"]) for r in rs)]
                   for _, rs in sorted(by_market.items(), key=lambda kv: (-len(kv[1]), kv[0]))]
    knock = sum(bool(r["failure"].get("after")) for r in rows)
    note = (f" <strong>{knock} of them are knock-on failures</strong>: an earlier row for the same trader never delivered "
            "the token, so the sim tried to buy it first and that failed too (greyed, listed last)." if knock else "")
    return ['<section id="no-order"><h2>Rows without an order</h2>',
            f"<p>{len(rows)} scenario rows failed before an order existed: the quote, the orderbook or the sim's own RPC "
            f"said no. They're in no order count, fill rate or chart above.{note}</p>",
            '<div class="panel"><h3>By error</h3>' + table(["Error", "Failed at", "Rows", "Markets", "Detail"], err_rows, {2}) + "</div>",
            f'<details><summary>By market ({len(by_market)})</summary>'
            + table(["Market", "Rows", "Errors", "Scenario rows"], market_rows, {1}) + "</details></section>"]


def scenario_section(journal: dict, orders: list[dict], cleanup: list[dict]) -> list[str]:
    rows = journal["rows"]
    done = sum(r["status"] == "filled" for r in rows)
    main = sum(o.get("step") == "main" for o in orders)
    pill = {"filled": "t-good", "failed": "t-critical", "running": "t-muted"}
    return ["<section><h2>Scenario</h2>",
            f"<p>{done} of {len(rows)} scenario rows completed, with {journal['retries']} retries and "
            f"{journal['place_errors']} placement errors. {len(orders)} scenario orders: {main} main and {len(orders) - main} "
            f"acquiring the sell token first.{f' Cleanup placed {len(cleanup)} more (next section).' if cleanup else ''}</p>",
            f'<details><summary>All {len(rows)} scenario rows</summary>' + table(["Started (UTC)", "Row", "Trader", "Trade", "Result", "Took", "Orders", "Reason"], [
                [r["started"][11:19], r["row"], f"t{r['trader']}", trade_cell(r),
                 f'<span class="order"><i class="sw {pill.get(r["status"], "t-muted")}"></i>{escape(r["status"])}</span>',
                 f"{r['seconds']:.0f}s" if r.get("seconds") is not None else "", r["orders"], escape(r["reason"])]
                for r in rows], {1, 5, 6}) + "</details></section>"]


def render(*, session, meta, orders, by_solver, drivers, autopilot, sol, comparisons=(), rate_limits=None,
           journal=None, logs_note=None, cleanup_orders=()) -> str:
    incidents = meta.get("incidents", [])
    inc_labels = {i["label"] for i in incidents}
    n = len(orders)
    executed = [o for o in orders if o["outcome"] == "executed"]
    failed = [o for o in orders if o["outcome"] != "executed"]
    never = [o for o in orders if "never created" in o["outcome"]]
    lat = sorted(o["latency"] for o in executed if o["latency"] is not None)
    p90 = lat[min(len(lat) - 1, int(0.9 * len(lat)))] if lat else None
    causes = Counter(o["cause"] for o in orders)
    title = meta.get("title") or session

    h = [f"<title>{escape(meta.get('name') or 'Solana QoS ' + session)}</title>",
         '<link rel="preconnect" href="https://fonts.googleapis.com">',
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500'
         '&family=IBM+Plex+Sans+Condensed:wght@600&family=IBM+Plex+Sans:wght@400;600&display=swap">',
         f"<style>{CSS}</style>", '<div id="tip" hidden></div>', '<div class="wrap">']

    h += [f'<header><span class="eyebrow">CoW Protocol · Solana · {escape(ENV_LABEL)}</span>',
          f"<h1>{escape(title)}: order quality of service</h1>",
          f'<span class="meta">Orders created {escape(meta["start"].replace("T", " ").rstrip("Z"))} → '
          f'{escape(meta["end"][11:].rstrip("Z"))} UTC · data fetched {escape(meta.get("fetched_at", "?")[:16].replace("T", " "))} UTC</span>'
          "</header>"]

    if logs_note:
        h.append(f'<div class="callout"><span class="badge">Basic report</span><p>{escape(logs_note)}</p></div>')

    rows_ = (journal or {}).get("rows") or []
    done = sum(r["status"] == "filled" for r in rows_)
    # Rows that failed before placing anything aren't orders, so the fill rate alone can read 100% over a broken run.
    tiles = ([("Scenario rows", f"{done} of {len(rows_)}",
               f"completed · {journal['place_errors']} placement errors")] if rows_ else []) + [
             ("Orders placed", str(n), f"by {len({o['owner'] for o in orders})} traders"),
             ("Executed", str(len(executed)), f"{pct(len(executed), n)} fill rate"),
             ("Never created on-chain", str(len(never)), f"{pct(len(never), n)} of orders, all sponsored"),
             ("Time to execution", f"{statistics.median(lat):.0f}s" if lat else "–",
              f"median · p90 {p90:.0f}s" if lat else "")]
    h += ['<section aria-label="Summary"><div class="tiles">'] + [
        f'<div class="tile"><span class="k">{k}</span><span class="v">{v}</span><span class="s">{s}</span></div>'
        for k, v, s in tiles] + ["</div></section>"]

    if journal and journal["rows"]:
        h += scenario_section(journal, orders, list(cleanup_orders))
    if cleanup_orders:
        h += ["<section><h2>Cleanup</h2>",
              f"<p>{len(cleanup_orders)} orders sold the traders' leftover tokens back to SOL. They're tooling, not scenario "
              "traffic, so they're left out of every other section.</p>",
              f'<details><summary>All {len(cleanup_orders)} cleanup orders</summary>' + table(["Created (UTC)", "Trader", "Pair", "Result", "Order"], [
                  [o["creationDate"][11:19], f"t{o['sim_trader']}" if o.get("sim_trader") else "", pair_cell(o),
                   f'<span class="order"><i class="sw t-{tone(o["cause"], inc_labels)}"></i>{escape(o["cause"])}</span>',
                   order_cell(o["uid"])] for o in cleanup_orders]) + "</details></section>"]

    # Outcome stack, ordered good -> critical -> serious -> neutral.
    order_rank = {"good": 0, "critical": 1, "serious": 2, "muted": 3}
    segs = sorted(causes.items(), key=lambda kv: (order_rank[tone(kv[0], inc_labels)], -kv[1]))
    h += ['<section><h2>Where every order ended up</h2><div class="panel">', '<div class="stack" role="img" '
          f'aria-label="{escape(", ".join(f"{k}: {v}" for k, v in segs))}">']
    h += [f'<div class="t-{tone(k, inc_labels)}" style="flex:{v}" data-tip="{escape(k)}\n{v} orders · {pct(v, n)}"></div>'
          for k, v in segs]
    h += ['</div><div class="legend">'] + [
        f'<span><i class="sw t-{tone(k, inc_labels)}"></i>{escape(k)} <b>{v}</b></span>' for k, v in segs]
    h += ["</div></div></section>"]

    h += ['<section><h2>Orders over the session</h2>',
          "<p>Orders placed per 5 minutes, split by whether they executed. Hover a bar for counts.</p>",
          '<div class="panel"><div class="legend"><span><i class="sw t-good"></i>Executed</span>'
          '<span><i class="sw t-serious"></i>Not executed</span>'
          + "".join('<span><i class="sw" style="background:var(--band);outline:1px dashed var(--critical)"></i>'
                    f"{escape(i['label'])}</span>" for i in incidents)
          + "".join('<span><i class="sw" style="background:var(--accent);width:3px"></i>'
                    f"{escape(c.get('short', c['label']))}</span>" for c in meta.get("changes", []))
          + f'</div><div class="scroll">{timeline(orders, meta)}</div></div></section>']

    for inc in incidents:
        hit = [o for o in orders if o["cause"] == inc["label"]]
        during = [o for o in orders if ts(inc["start"]) <= ts(o["creationDate"]) <= ts(inc["end"])]
        mins = (ts(inc["end"]) - ts(inc["start"])).total_seconds() / 60
        acct = inc.get("account", "")
        h += ['<div class="callout"><span class="badge">Incident</span>',
              f"<h3>{escape(inc['label'])}, {hhmm(ts(inc['start']))}–{hhmm(ts(inc['end']))} UTC ({mins:.0f} min)</h3>",
              f"<p>No sponsored order could be created while the funding account was empty. "
              f"{len(hit)} orders failed because of it, and none of the {len(during)} orders placed in the window executed. "
              f"The other {len(never) - len(hit)} never-created orders failed for unrelated reasons.</p>"]
        if acct:
            h.append(f'<p class="meta">Funder <a class="mono" href="{SOLSCAN}{acct}" target="_blank" rel="noopener">{acct}</a></p>')
        h.append("</div>")

    for change, c in comparisons:
        h += comparison(change, c)

    if rate_limits:
        h += rate_limit_section(rate_limits, meta, {o["uid"] for o in orders})

    fail_causes = Counter(o["cause"] for o in failed)
    no_order = [r for r in (journal or {}).get("rows", []) if r.get("failure")]
    no_order_note = (f' <strong>{len(no_order)} more scenario rows failed before an order existed</strong> and aren\'t '
                     'counted here: see <a href="#no-order">Rows without an order</a>.') if no_order else ""
    h += ['<section><h2>Why orders didn\'t execute</h2>',
          f"<p>{len(failed)} orders didn't execute. Causes come from the driver and autopilot logs.{no_order_note}</p>",
          '<div class="panel">']
    vmax = max(fail_causes.values(), default=1)
    h.append('<div class="bars">')
    for k, v in fail_causes.most_common():
        h.append(f'<div class="hbar" style="grid-template-columns:minmax(0,1.4fr) 2fr auto" '
                 f'data-tip="{escape(k)}: {v} orders"><span>{escape(k)}</span><div class="track">'
                 f'<div class="fill t-{tone(k, inc_labels)}" style="width:{100 * v / vmax:.1f}%"></div></div>'
                 f'<span class="num">{v}</span></div>')
    h += ["</div></div></section>"]
    if no_order:
        h += no_order_section(no_order)

    # Solvers
    total_settled = sum(v["orders"] for v in by_solver.values())
    srows = sorted(by_solver.items(), key=lambda kv: -kv[1]["orders"])
    h += ["<section><h2>Solvers</h2>",
          "<p>Settled orders are credited to the fee payer of the settlement transaction on-chain.</p>",
          '<div class="two"><div class="panel"><h3>Orders settled</h3>',
          hbars([(sol(k), v["orders"], f"{len(v['txs'])} txs") for k, v in srows], total_settled),
          '</div><div class="panel"><h3>Settlement detail</h3>',
          table(["Solver", "Orders", "Median CU", "Median time"], [
              [escape(sol(k)), v["orders"], f"{statistics.median(v['cu']):,.0f}" if v["cu"] else "–",
               f"{statistics.median(v['lat']):.0f}s" if v["lat"] else "–"] for k, v in srows], {1, 2, 3}),
          "</div></div>"]
    if drivers:
        rows = []
        for d, s in sorted(drivers.items(), key=lambda kv: (-kv[1].get("wins", 0), -sum(kv[1].get("solve_failed", {}).values()))):
            wins, landed = s.get("wins", 0), s.get("observed_on_chain", 0)
            rows.append([escape(d), s.get("proposed", 0), wins, landed, pct(landed, wins),
                         sum(s.get("rejected_before_submission", {}).values()),
                         sum(s.get("settlement_failed", {}).values()) + s.get("settlement_missed_deadline", 0),
                         sum(s.get("solve_failed", {}).values()), s.get("solve_missed_deadline", 0)])
        h += ['<div class="panel"><h3>Competition</h3>',
              '<p class="meta">From the autopilot logs, counted per auction: an order that sits in ten auctions can be won ten times.</p>',
              table(["Driver", "Proposed", "Won", "Landed", "Won → landed", "Rejected before submit",
                     "Failed after submit", "Solve errors", "Solve timeouts"], rows, set(range(1, 9)))]
        rej = Counter()
        for d, s in drivers.items():
            for k, v in s.get("rejected_before_submission", {}).items():
                rej[(d, k)] += v
        if rej:
            h.append('<p class="meta">Rejected before submission: ' + "; ".join(
                f"{escape(d)} {escape(k)} ×{v}" for (d, k), v in rej.most_common()) + ".</p>")
        if autopilot:
            bits = [f"winner skipped because the creation blockhash had expired ×{autopilot.get('winner_skipped_creation_blockhash_expired', 0)}"]
            bits += [f"filtered for <code>{escape(k)}</code> ×{v}" for k, v in autopilot.get("filtered", {}).items()]
            h.append(f'<p class="meta">Autopilot: {"; ".join(bits)}.</p>')
        h.append("</div>")
    h.append("</section>")

    # Breakdown tables
    def group(key):
        g = defaultdict(lambda: [0, 0])
        for o in orders:
            g[key(o)][0] += 1
            g[key(o)][1] += o["outcome"] == "executed"
        return sorted(g.items(), key=lambda kv: (-kv[1][0], kv[0]))

    kinds = group(lambda o: o["kind"])
    pairs = group(lambda o: o["pair"])
    pair_html = {o["pair"]: pair_cell(o) for o in orders}
    owners = group(lambda o: o["owner"])
    h += ["<section><h2>Breakdowns</h2>", '<div class="two"><div class="panel"><h3>By order kind</h3>',
          table(["Kind", "Placed", "Executed", "Fill rate"], [[k, p, e, pct(e, p)] for k, (p, e) in kinds], {1, 2, 3}),
          '</div><div class="panel"><h3>Top token pairs</h3>',
          table(["Pair", "Placed", "Executed", "Fill rate"],
                [[pair_html[k], p, e, pct(e, p)] for k, (p, e) in pairs[:8]], {1, 2, 3}), "</div></div>",
          f"<details><summary>All {len(pairs)} token pairs</summary>",
          table(["Pair", "Placed", "Executed", "Fill rate"], [[pair_html[k], p, e, pct(e, p)] for k, (p, e) in pairs], {1, 2, 3}),
          "</details>",
          f"<details><summary>All {len(owners)} traders</summary>",
          table(["Owner", "Placed", "Executed", "Fill rate"],
                [[f'<a class="mono" href="{SOLSCAN}{k}" target="_blank" rel="noopener">{k[:6]}…{k[-6:]}</a>', p, e, pct(e, p)] for k, (p, e) in owners], {1, 2, 3}),
          "</details></section>"]

    # Failed orders with cause filter
    h += ["<section><h2>Orders not executed</h2>",
          f'<p><span id="failed-count">{len(failed)}</span> orders shown. Filter by cause or trader, or click a trader in the table; '
          f"the ladybug opens the order in the debug tool.{no_order_note}</p>",
          f'<details><summary>All {len(failed)} orders not executed, with filters</summary>',
          '<div class="chips" id="cause-filter" role="group" aria-label="Filter by cause">',
          f'<button type="button" id="cause-all" data-cause="*" aria-pressed="true">All <b>{len(failed)}</b></button>']
    for i, (k, v) in enumerate(fail_causes.most_common()):
        h.append(f'<button type="button" id="cause-{i}" data-cause="{escape(k)}" aria-pressed="false">'
                 f'<i class="sw t-{tone(k, inc_labels)}"></i>{escape(k)} <b>{v}</b></button>')
    h.append("</div>")
    owner_counts = Counter(o["owner"] for o in failed)
    h.append('<div class="filter-row"><label for="owner-filter">Trader</label>'
             '<input id="owner-filter" type="search" list="owner-list" autocomplete="off" spellcheck="false" '
             'placeholder="Type any part of an address">'
             '<datalist id="owner-list">'
             + "".join(f'<option value="{w}">{c} not executed</option>' for w, c in owner_counts.most_common())
             + '</datalist><button type="button" id="owner-clear" class="clear">Clear</button></div>')
    h.append('<div id="failed">' + table(
        ["Created (UTC)", "Pair", "Kind", "Cause", "Trader", "Order"],
        [[o["creationDate"][11:19], pair_cell(o), o["kind"], escape(o["cause"]),
          f'<button type="button" class="owner-pick mono" data-owner="{o["owner"]}" title="Show only {o["owner"]}">'
          f'{o["owner"][:6]}…{o["owner"][-4:]}</button>',
          order_cell(o["uid"])] for o in failed],
        attrs=[f'data-cause="{escape(o["cause"])}" data-owner="{o["owner"]}"' for o in failed]) + "</div></details></section>")

    h += ["<footer><span>Sources: barn autopilot and driver logs (VictoriaLogs), the barn Solana orderbook API, "
          "and Solana RPC for settlement transactions.</span>",
          f"<span>Generated by <code>solana-qos</code>: <code>./qos.py report --session {escape(session)}</code></span></footer>",
          "</div>", f"<script>{JS}</script>"]
    return "\n".join(h)
