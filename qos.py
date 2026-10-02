#!/usr/bin/env python3
"""Solana QoS report for a CoW Protocol test session on barn.

  ./qos.py fetch  --session NAME   # API + RPC -> sessions/NAME/orders.json
  ./qos.py report --session NAME   # -> sessions/NAME/report.md

Inputs in sessions/NAME/ (see queries/logs.md):
  meta.json                 {"start": ..., "end": ...}
  logs/seed_orders.txt      order UIDs seen in the autopilot logs
  logs/creation_expired.txt sponsored orders dropped because their creation tx expired
  logs/competition.json     per-driver competition stats
"""

from __future__ import annotations

import argparse
import json
import os
import statistics
import sys
import time
import urllib.error
import urllib.request
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ENVIRONMENTS = json.loads((ROOT / "environments.json").read_text())
API = os.environ.get("COW_API", ENVIRONMENTS["staging"]["api"])
RPC = os.environ.get("SOLANA_RPC", "https://api.mainnet-beta.solana.com")
DEBUG = ENVIRONMENTS["staging"]["debug"] + "/order/"


def use_environment(meta: dict) -> dict:
    """Point API and DEBUG at the session's environment (meta.json `env`, default staging)."""
    global API, DEBUG
    env = ENVIRONMENTS[meta.get("env", "staging")]
    API = os.environ.get("COW_API", env["api"])
    DEBUG = env["debug"] + "/order/"
    return env
SOLSCAN = "https://solscan.io/tx/"


# --- io ----------------------------------------------------------------------


def http_json(url: str, body: dict | None = None, retries: int = 7):
    data = json.dumps(body).encode() if body is not None else None
    headers = {"content-type": "application/json", "user-agent": "solana-qos"}
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, data=data, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            if e.code != 429 and e.code < 500:
                raise
        except (urllib.error.URLError, TimeoutError):
            pass
        time.sleep(2**attempt)
    raise RuntimeError(f"giving up on {url}")


def lines(path: Path) -> list[str]:
    if not path.exists():
        return []
    return [l.strip() for l in path.read_text().splitlines() if l.strip()]


def load_map(name: str) -> dict[str, str]:
    path = ROOT / name
    return json.loads(path.read_text()) if path.exists() else {}


def ts(v: str) -> datetime:
    return datetime.fromisoformat(v.replace("Z", "+00:00"))


# --- fetch -------------------------------------------------------------------


def owner_orders(owner: str, start: datetime) -> list[dict]:
    """All orders of an owner created at or after `start` (API returns newest first)."""
    out, offset = [], 0
    while True:
        page = http_json(f"{API}/v1/account/{owner}/orders?limit=1000&offset={offset}") or []
        out += [o for o in page if ts(o["creationDate"]) >= start]
        if len(page) < 1000 or ts(page[-1]["creationDate"]) < start:
            return out
        offset += 1000


def owner_trades(owner: str) -> list[dict]:
    out, offset = [], 0
    while True:
        page = http_json(f"{API}/v2/trades?owner={owner}&limit=1000&offset={offset}") or []
        out += page
        if len(page) < 1000:
            return out
        offset += 1000


def update_tokens(mints: set[str]):
    """Resolve unknown mint symbols via Jupiter's token API into tokens.json."""
    path = ROOT / "tokens.json"
    tokens = load_map("tokens.json")
    for mint in sorted(mints - tokens.keys()):
        try:
            hits = http_json(f"https://lite-api.jup.ag/tokens/v2/search?query={mint}", retries=3) or []
        except (RuntimeError, urllib.error.HTTPError):
            continue
        hit = next((h for h in hits if h.get("id") == mint), None)
        if hit and hit.get("symbol"):
            tokens[mint] = hit["symbol"]
    path.write_text(json.dumps(dict(sorted(tokens.items(), key=lambda kv: kv[1].lower())), indent=1) + "\n")


def tx_info(sig: str) -> dict:
    res = http_json(RPC, {
        "jsonrpc": "2.0", "id": 1, "method": "getTransaction",
        "params": [sig, {"encoding": "json", "maxSupportedTransactionVersion": 1}],
    })
    tx = (res or {}).get("result")
    if not tx:
        return {}
    return {
        "fee_payer": tx["transaction"]["message"]["accountKeys"][0],
        "block_time": tx.get("blockTime"),
        "fee": tx["meta"]["fee"],
        "cu": tx["meta"].get("computeUnitsConsumed"),
        "err": tx["meta"]["err"],
    }


def cmd_fetch(a):
    session = ROOT / "sessions" / a.session
    meta = json.loads((session / "meta.json").read_text())
    use_environment(meta)
    start, end = ts(meta["start"]), ts(meta["end"])
    seeds = lines(session / "logs" / "seed_orders.txt")
    if not seeds:
        sys.exit("no seeds in logs/seed_orders.txt")

    with ThreadPoolExecutor(8) as pool:
        found = [o for o in pool.map(lambda u: http_json(f"{API}/v1/orders/{u}"), seeds) if o]
        if meta.get("sim"):
            # A simulated session is exactly what sim/ placed (cleanup included), whatever the time window.
            seeded = found
            owners = sorted({o["owner"] for o in seeded})
            orders = {o["uid"]: o for o in seeded}
            print(f"seeds: {len(seeds)}, {len(found)} found (simulated session: no window filter), owners: {len(owners)}")
        else:
            seeded = [o for o in found if start <= ts(o["creationDate"]) < end]
            owners = sorted({o["owner"] for o in seeded})
            print(f"seeds: {len(seeds)}, {len(found)} found, {len(seeded)} created in window, owners: {len(owners)}")
            orders = {o["uid"]: o for o in seeded}
            for batch in pool.map(lambda w: owner_orders(w, start), owners):
                for o in batch:
                    if ts(o["creationDate"]) < end:
                        orders.setdefault(o["uid"], o)
            print(f"orders in window: {len(orders)} ({len(orders) - len(seeded)} not in the logs)")

        trades = defaultdict(list)
        for batch in pool.map(owner_trades, owners):
            for t in batch:
                if t["orderUid"] in orders:
                    trades[t["orderUid"]].append(t)

    sigs = sorted({t["txSignature"] for ts_ in trades.values() for t in ts_})
    cache_path = session / "txs.json"
    txs = json.loads(cache_path.read_text()) if cache_path.exists() else {}
    todo = [s for s in sigs if not txs.get(s)]
    print(f"trades: {sum(map(len, trades.values()))} in {len(sigs)} txs, {len(todo)} to fetch from RPC…")
    for i, sig in enumerate(todo, 1):
        try:
            txs[sig] = tx_info(sig)
        except RuntimeError as e:
            print(f"  skip {sig[:12]}…: {e}")
        if i % 20 == 0:
            print(f"  {i}/{len(todo)}")
            cache_path.write_text(json.dumps(txs, indent=1))
        time.sleep(0.25)  # public RPC rate limit
    cache_path.write_text(json.dumps(txs, indent=1))

    for uid, o in orders.items():
        o["trades"] = [dict(t, tx=txs.get(t["txSignature"], {})) for t in trades.get(uid, [])]

    update_tokens({m for o in orders.values() for m in (o["sellToken"], o["buyToken"])})
    (session / "orders.json").write_text(json.dumps(list(orders.values()), indent=1))
    meta["fetched_at"] = datetime.now(timezone.utc).isoformat(timespec="seconds")
    (session / "meta.json").write_text(json.dumps(meta, indent=1))
    print(f"wrote {session / 'orders.json'}")


# --- report ------------------------------------------------------------------


def pct(a: int, b: int) -> str:
    return f"{100 * a / b:.1f}%" if b else "–"


def table(headers: list[str], rows: list[list]) -> str:
    out = ["| " + " | ".join(headers) + " |", "|" + "---|" * len(headers)]
    return "\n".join(out + ["| " + " | ".join(str(c) for c in r) + " |" for r in rows])


def short(addr: str) -> str:
    return f"{addr[:4]}…{addr[-4:]}"


def outcome(o: dict, creation_expired: set[str]) -> str:
    if o["trades"] or int(o["executedSellAmount"]) > 0:
        return "executed"
    if o["status"] == "cancelled":
        return "cancelled"
    if o["status"] == "open":
        return "open"
    # The API only returns lastValidBlockHeight while a sponsored order still
    # awaits its on-chain creation, i.e. it never got created.
    if o["uid"] in creation_expired:
        return "expired: never created on-chain (winner found, creation blockhash expired)"
    if o.get("lastValidBlockHeight") is not None:
        return "expired: never created on-chain (no settlement before blockhash expiry)"
    return "expired"


def settle_failures(session: Path) -> dict[str, set[str]]:
    """logs/settle_failures.txt: `<category> <order_uid> <time>` per line."""
    out = defaultdict(set)
    for line in lines(session / "logs" / "settle_failures.txt"):
        category, uid, *_ = line.split()
        out[uid].add(category)
    return out


RATE_LIMITED = "Jupiter rate limited, no other solver bid"


def solver_quotes(session: Path) -> dict[str, dict]:
    """logs/jupiter_quotes.txt: `<uid> <attempts> <rate_limited> <solved> <first> <last>` per line."""
    out = {}
    for line in lines(session / "logs" / "jupiter_quotes.txt"):
        if line.startswith("#"):
            continue
        uid, attempts, rl, solved, *_ = line.split()
        out[uid] = {"attempts": int(attempts), "rate_limited": int(rl), "solved": int(solved)}
    return out


def cause(o: dict, failures: dict[str, set[str]], incidents: list[dict], quotes: dict | None = None) -> str:
    """Why a non-executed order didn't execute, as specific as the data allows."""
    plain = {"executed": "Executed", "cancelled": "Cancelled", "open": "Still open", "expired": "Expired without a fill"}
    if o["outcome"] in plain:
        return plain[o["outcome"]]
    f = failures.get(o["uid"], set())
    created = ts(o["creationDate"])
    for inc in incidents:
        # A sponsored creation stays valid ~60s, so an order placed just
        # before the incident also lived through it.
        during = ts(inc["start"]).timestamp() - 60 <= created.timestamp() <= ts(inc["end"]).timestamp()
        if "funder_out_of_sol" in f or (during and "creation_blockhash_not_found" not in f):
            return inc["label"]
    if "creation_blockhash_not_found" in f:
        return "Creation tx rejected: blockhash not found"
    if "winner found" in o["outcome"]:
        return "Winner too late: creation blockhash expired"
    q = (quotes or {}).get(o["uid"])
    if q and q["rate_limited"] and not q["solved"]:
        return RATE_LIMITED
    return "No settlement before creation blockhash expired"


def compare(orders: list[dict], change: dict, end: str) -> dict:
    """Order metrics for orders placed before vs after a config change."""
    at = ts(change["at"])
    start = ts(change.get("baseline_from", "1970-01-01T00:00:00Z"))
    periods = {
        "before": [o for o in orders if start <= ts(o["creationDate"]) < at],
        "after": [o for o in orders if at <= ts(o["creationDate"]) < ts(end)],
    }

    def stats(xs):
        ex = [o for o in xs if o["outcome"] == "executed"]
        lat = sorted(o["latency"] for o in ex if o["latency"] is not None)
        causes = Counter(o["cause"] for o in xs)
        return {
            "Orders placed": len(xs),
            "Executed": len(ex),
            "Fill rate": 100 * len(ex) / len(xs) if xs else None,
            "Median time to execution": statistics.median(lat) if lat else None,
            "p90 time to execution": lat[min(len(lat) - 1, int(0.9 * len(lat)))] if lat else None,
            "Never created on-chain": sum("never created" in o["outcome"] for o in xs),
            "No settlement before creation blockhash expired": causes["No settlement before creation blockhash expired"],
            RATE_LIMITED: causes[RATE_LIMITED],
            "Winner too late: creation blockhash expired": causes["Winner too late: creation blockhash expired"],
        }

    out = {k: stats(v) for k, v in periods.items()}
    out["window"] = {
        "before": (start if "baseline_from" in change else min(ts(o["creationDate"]) for o in orders), at),
        "after": (at, max(ts(o["creationDate"]) for o in periods["after"]) if periods["after"] else at),
    }
    return out


def rate_limit_summary(session: Path, orders: list[dict], quotes: dict, meta: dict) -> dict | None:
    path = session / "logs" / "jupiter_quotes_timeline.json"
    if not path.exists():
        return None
    tl = json.loads(path.read_text())
    rows = tl["rows"]
    for r in rows:
        r["attempts"] = r["solved"] + r["no_match"] + r["rate_limited"]
    periods = {}
    for ch in meta.get("changes", []):
        at = ts(ch["at"])
        for name, sel in ((f"Before {at:%H:%M}", lambda r: ts(r["t"]) < at), (f"After {at:%H:%M}", lambda r: ts(r["t"]) >= at)):
            sub = [r for r in rows if sel(r)]
            periods[name] = {"attempts": sum(r["attempts"] for r in sub), "rate_limited": sum(r["rate_limited"] for r in sub)}
        break
    uids = {o["uid"] for o in orders}
    top = sorted(({"uid": u, "in_report": u in uids, **q} for u, q in quotes.items()), key=lambda q: -q["attempts"])[:6]
    return {
        "bucket_min": tl.get("bucket_min", 5), "rows": rows, "periods": periods, "top": top,
        "attempts": sum(r["attempts"] for r in rows), "rate_limited": sum(r["rate_limited"] for r in rows),
        "orders_hit": sum(o["cause"] == RATE_LIMITED for o in orders),
    }


def fmt_metric(name: str, v) -> str:
    if v is None:
        return "–"
    if name == "Fill rate":
        return f"{v:.1f}%"
    if "time" in name:
        return f"{v:.0f}s"
    return str(v)


def read_journal(session: Path) -> dict | None:
    """sim/journal.jsonl from sim/: which row and step placed each order, and how each row ended."""
    path = session / "sim" / "journal.jsonl"
    if not path.exists():
        return None
    orders, rows = {}, {}
    place_errors = retries = 0
    for line in path.read_text().splitlines():
        e = json.loads(line)
        ev, row = e.get("event"), e.get("row")
        if ev == "placed":
            orders[e["uid"]] = {"step": e.get("step"), "row": row, "trader": e.get("trader"), "attempt": e.get("attempt", 0),
                                "forced_self": bool(e.get("forcedSelf"))}
        elif ev == "place_error":
            place_errors += 1
        elif ev == "retry":
            retries += 1
        elif ev == "row_start":
            rows[row] = {"row": row, "started": e.get("ts", ""), "seconds": None, "trader": e.get("trader"), "trade": f"{e.get('type')} {e.get('amount')} {e.get('token')} "
                         f"{'→' if e.get('type') == 'sell' else '←'} {e.get('other')}", "status": "running", "reason": "", "orders": 0}
        elif ev in ("row_done", "row_failed") and row in rows:
            rows[row]["status"] = "filled" if ev == "row_done" else "failed"
            if rows[row]["started"] and e.get("ts"):
                rows[row]["seconds"] = (ts(e["ts"]) - ts(rows[row]["started"])).total_seconds()
            rows[row]["reason"] = e.get("reason", "")
    for info in orders.values():
        if info["row"] in rows:
            rows[info["row"]]["orders"] += 1
    return {"orders": orders, "rows": [rows[k] for k in sorted(rows)], "place_errors": place_errors, "retries": retries}


LOGS_MISSING = ("Log data wasn't fetched for this session, so failure causes are generic and the competition and "
                "rate-limit sections are missing. Set GRAFANA_URL, GRAFANA_API_TOKEN and GRAFANA_DATASOURCE_UID "
                "(or create solana-qos/.env.<env>) and run ./qos.py logs.")


def cmd_report(a):
    session = ROOT / "sessions" / a.session
    meta = json.loads((session / "meta.json").read_text())
    env = use_environment(meta)
    orders = json.loads((session / "orders.json").read_text())
    comp_path = session / "logs" / "competition.json"
    comp = json.loads(comp_path.read_text()) if comp_path.exists() else {}
    creation_expired = set(lines(session / "logs" / "creation_expired.txt"))
    failures = settle_failures(session)
    incidents = meta.get("incidents", [])
    quotes = solver_quotes(session)
    journal = read_journal(session)
    logs_available = comp_path.exists()
    tokens, names = load_map("tokens.json"), load_map("solvers.json")
    tok = lambda m: tokens.get(m, short(m))  # noqa: E731
    sol = lambda s: names.get(s, short(s))  # noqa: E731

    orders.sort(key=lambda o: o["creationDate"])
    for o in orders:
        o["outcome"] = outcome(o, creation_expired)
        o["cause"] = cause(o, failures, incidents, quotes)
        info = (journal or {}).get("orders", {}).get(o["uid"], {})
        o["step"], o["row"], o["sim_trader"] = info.get("step", ""), info.get("row", ""), info.get("trader")
        o["pair"] = f"{tok(o['sellToken'])} → {tok(o['buyToken'])}"
        times = [t["tx"].get("block_time") for t in o["trades"] if t["tx"].get("block_time")]
        o["latency"] = min(times) - ts(o["creationDate"]).timestamp() if times else None
        o["solver"] = next((t["tx"]["fee_payer"] for t in o["trades"] if t["tx"].get("fee_payer")), None)

    # Cleanup orders are tooling, not scenario traffic: listed in their own section, kept out of the stats.
    cleanup_orders = [o for o in orders if o["step"] == "cleanup"]
    all_orders = orders
    orders = [o for o in orders if o["step"] != "cleanup"]

    n = len(orders)
    executed = [o for o in orders if o["outcome"] == "executed"]
    never_created = [o for o in orders if "never created" in o["outcome"]]
    owners = Counter(o["owner"] for o in orders)

    md = [f"# Solana QoS report: {a.session}", ""]
    md += [f"{env['label'].capitalize()}, orders created between `{meta['start']}` and `{meta['end']}`. "
           f"Data fetched {meta.get('fetched_at', '?')}.", ""]

    if not logs_available:
        md += [f"> ⚠ {LOGS_MISSING}", ""]
    md += ["## Summary", ""]
    md += [table(["Metric", "Value"], [
        ["Orders placed", n],
        ["Orders executed", f"**{len(executed)}** ({pct(len(executed), n)})"],
        ["Sponsored orders never created on-chain", f"{len(never_created)} ({pct(len(never_created), n)})"],
        ["Traders", len(owners)],
        ["Settlement txs", len({t['txSignature'] for o in executed for t in o['trades']})],
    ]), ""]

    if journal and journal["rows"]:
        rows_ = journal["rows"]
        done = sum(r["status"] == "filled" for r in rows_)
        md += ["## Scenario", "",
               f"{done} of {len(rows_)} scenario rows completed. {journal['retries']} retries, "
               f"{journal['place_errors']} placement errors (from `sim/journal.jsonl`).", ""]
        md += [table(["Started (UTC)", "Row", "Trader", "Trade", "Result", "Took", "Orders", "Reason"],
                     [[r["started"][11:19], r["row"], r["trader"], r["trade"], r["status"],
                       f"{r['seconds']:.0f}s" if r["seconds"] is not None else "", r["orders"], r["reason"]] for r in rows_]), ""]
        main = sum(o["step"] == "main" for o in orders)
        md += [f"Scenario orders: {len(orders)} ({main} main, {len(orders) - main} acquire). "
               f"Cleanup placed {len(cleanup_orders)} more, listed below and left out of the stats.", ""]
    if cleanup_orders:
        md += ["## Cleanup", ""]
        md += [table(["Created (UTC)", "Trader", "Pair", "Result", "Order"], [
            [o["creationDate"][11:19], o["sim_trader"] or "", o["pair"], o["cause"],
             f"`{o['uid'][:10]}…` [🐞]({DEBUG}{o['uid']})"] for o in cleanup_orders]), ""]

    md += ["## Order outcomes", ""]
    md += [table(["Outcome", "Orders", "Share"],
                 [[k, v, pct(v, n)] for k, v in Counter(o["outcome"] for o in orders).most_common()]), ""]

    lat = sorted(o["latency"] for o in executed if o["latency"] is not None)
    if lat:
        q = lambda p: lat[min(len(lat) - 1, int(p * len(lat)))]  # noqa: E731
        md += ["## Time to execution", "",
               "From order creation (API) to the settlement's block time (RPC).", ""]
        md += [table(["Median", "p75", "p90", "Max"],
                     [[f"{statistics.median(lat):.0f}s", f"{q(.75):.0f}s", f"{q(.9):.0f}s", f"{lat[-1]:.0f}s"]]), ""]

    comparisons = []
    for change in meta.get("changes", []):
        c = compare(orders, change, meta["end"])
        comparisons.append((change, c))
        (b0, b1), (a0, a1) = c["window"]["before"], c["window"]["after"]
        md += [f"## Before / after: {change['label']}", "", change.get("detail", ""), ""]
        if change.get("baseline_note"):
            md += [change["baseline_note"], ""]
        rows = [[k, fmt_metric(k, c["before"][k]), fmt_metric(k, c["after"][k])] for k in c["before"]]
        for k, v in change.get("logs", {}).get("before", {}).items():
            rows.append([f"{k} (logs)", v, change["logs"]["after"].get(k, "–")])
        md += [table(["Metric", f"Before ({b0:%H:%M}–{b1:%H:%M})", f"After ({a0:%H:%M}–{a1:%H:%M})"], rows), ""]

    rl = rate_limit_summary(session, orders, quotes, meta)
    if rl and not rl["rate_limited"]:
        rl = None  # nothing was rate limited: no section, no warning
    if rl:
        md += ["## Jupiter rate limiting", "",
               f"{rl['rate_limited']} of {rl['attempts']} Jupiter quote attempts ({pct(rl['rate_limited'], rl['attempts'])}) "
               f"were rejected with `rate limited`. {rl['orders_hit']} orders never executed: Jupiter's quotes for them were "
               "rate limited, it never found a solution, and no other solver bid.", ""]
        if rl["periods"]:
            md += [table(["Window", "Quote attempts", "Rate limited", "Share"],
                         [[k, v["attempts"], v["rate_limited"], pct(v["rate_limited"], v["attempts"])] for k, v in rl["periods"].items()]), ""]
        md += ["Orders using the most Jupiter quote attempts:", ""]
        md += [table(["Order", "In this report", "Attempts", "Rate limited", "Solved"],
                     [[f"`{q['uid'][:10]}…` [🐞]({DEBUG}{q['uid']})", "yes" if q["in_report"] else "no (older order)", q["attempts"], q["rate_limited"], q["solved"]]
                      for q in rl["top"]]), ""]

    md += ["## Solvers", "", "### Settled orders (on-chain fee payer of the settlement tx)", ""]
    by_solver = defaultdict(lambda: {"orders": 0, "txs": set(), "cu": [], "lat": []})
    for o in executed:
        if not o["solver"]:
            continue
        s = by_solver[o["solver"]]
        s["orders"] += 1
        for t in o["trades"]:
            s["txs"].add(t["txSignature"])
            if t["tx"].get("cu"):
                s["cu"].append(t["tx"]["cu"])
        if o["latency"] is not None:
            s["lat"].append(o["latency"])
    rows = [[sol(k), v["orders"], pct(v["orders"], len(executed)), len(v["txs"]),
             f"{statistics.median(v['cu']):,.0f}" if v["cu"] else "–",
             f"{statistics.median(v['lat']):.0f}s" if v["lat"] else "–"]
            for k, v in sorted(by_solver.items(), key=lambda kv: -kv[1]["orders"])]
    md += [table(["Solver", "Orders settled", "Share", "Txs", "Median CU", "Median time to execution"], rows), ""]

    drivers = comp.get("drivers", {})
    if drivers:
        md += ["### Competition (autopilot logs)", "",
               "Counted per auction, so one order can appear in many auctions.", ""]
        rows = []
        for d, s in sorted(drivers.items(), key=lambda kv: -kv[1].get("wins", 0)):
            rej = sum(s.get("rejected_before_submission", {}).values())
            fail = sum(s.get("settlement_failed", {}).values()) + s.get("settlement_missed_deadline", 0)
            wins, landed = s.get("wins", 0), s.get("observed_on_chain", 0)
            rows.append([d, s.get("proposed", 0), wins, landed, pct(landed, wins), rej, fail,
                         sum(s.get("solve_failed", {}).values()), s.get("solve_missed_deadline", 0)])
        md += [table(["Driver", "Proposed", "Won", "Landed", "Win → landed",
                      "Rejected pre-submit", "Failed / missed deadline", "Solve errors",
                      "Solve timeouts"], rows), ""]
        rej = Counter()
        for d, s in drivers.items():
            for k, v in s.get("rejected_before_submission", {}).items():
                rej[f"{d}: {k}"] += v
        if rej:
            md += ["Why winning settlements were rejected before submission:", ""]
            md += [table(["Driver: reason", "Count"], [[k, v] for k, v in rej.most_common()]), ""]
        ap = comp.get("autopilot", {})
        if ap:
            md += ["Autopilot:", ""]
            md += [f"- Winner skipped because the sponsored creation blockhash had expired: "
                   f"{ap.get('winner_skipped_creation_blockhash_expired', 0)}"]
            md += [f"- Orders filtered for `{k}`: {v} times" for k, v in ap.get("filtered", {}).items()]
            md += [""]

    kinds = defaultdict(lambda: [0, 0])
    for o in orders:
        kinds[o["kind"]][0] += 1
        kinds[o["kind"]][1] += o["outcome"] == "executed"
    md += ["## By order kind", ""]
    md += [table(["Kind", "Placed", "Executed", "Fill rate"],
                 [[k, p, e, pct(e, p)] for k, (p, e) in sorted(kinds.items(), key=lambda kv: -kv[1][0])]), ""]

    pairs = defaultdict(lambda: [0, 0])
    for o in orders:
        pairs[o["pair"]][0] += 1
        pairs[o["pair"]][1] += o["outcome"] == "executed"
    md += ["## By token pair", ""]
    md += [table(["Pair", "Placed", "Executed", "Fill rate"],
                 [[k, p, e, pct(e, p)] for k, (p, e) in sorted(pairs.items(), key=lambda kv: -kv[1][0])]), ""]

    md += ["## By trader", ""]
    md += [table(["Owner", "Placed", "Executed", "Fill rate"],
                 [[f"`{w}`", c, sum(o['outcome'] == 'executed' for o in orders if o['owner'] == w),
                   pct(sum(o['outcome'] == 'executed' for o in orders if o['owner'] == w), c)]
                  for w, c in owners.most_common()]), ""]

    failed = [o for o in orders if o["outcome"] != "executed"]
    if failed:
        md += ["## Why orders didn't execute", ""]
        md += [table(["Cause", "Orders"], [[k, v] for k, v in Counter(o["cause"] for o in failed).most_common()]), ""]
        md += ["## Orders not executed", ""]
        md += [table(["Created (UTC)", "Pair", "Kind", "Cause", "Order"], [
            [o["creationDate"][11:19], o["pair"], o["kind"], o["cause"],
             f"`{o['uid'][:10]}…` [🐞]({DEBUG}{o['uid']})"] for o in failed]), ""]

    out = session / "report.md"
    out.write_text("\n".join(md))
    print(f"wrote {out}")

    import csv

    out = session / "orders.csv"
    with out.open("w", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(["created_utc", "uid", "owner", "sell_token", "buy_token", "sell_symbol", "buy_symbol",
                    "kind", "sell_amount", "buy_amount", "executed_sell", "executed_buy", "api_status",
                    "cause", "solver", "seconds_to_execution", "tx_signature", "sim_row", "sim_step"])
        for o in all_orders:
            w.writerow([o["creationDate"], o["uid"], o["owner"], o["sellToken"], o["buyToken"],
                        tok(o["sellToken"]), tok(o["buyToken"]), o["kind"], o["sellAmount"], o["buyAmount"],
                        o["executedSellAmount"], o["executedBuyAmount"], o["status"], o["cause"],
                        sol(o["solver"]) if o["solver"] else "",
                        f"{o['latency']:.0f}" if o["latency"] is not None else "",
                        o["trades"][0]["txSignature"] if o["trades"] else "", o["row"], o["step"]])
    print(f"wrote {out}")

    import html_report

    out = session / "report.html"
    html_report.DEBUG = DEBUG
    html_report.SOLSCAN = env["solscan"] + "/account/"
    html_report.ENV_LABEL = env["label"]
    out.write_text(html_report.render(
        session=a.session, meta=meta, orders=orders, by_solver=by_solver,
        drivers=drivers, autopilot=comp.get("autopilot", {}), sol=sol, comparisons=comparisons, rate_limits=rl,
        journal=journal, logs_note=None if logs_available else LOGS_MISSING, cleanup_orders=cleanup_orders,
    ))
    print(f"wrote {out}")


def cmd_logs(a):
    import logs as logsmod

    session = ROOT / "sessions" / a.session
    meta = json.loads((session / "meta.json").read_text())
    env_name = meta.get("env", "staging")
    env = use_environment(meta)
    creds = logsmod.load_credentials(env_name)
    if not creds:
        print(f"VictoriaLogs credentials not set ({', '.join(logsmod.CRED_KEYS)}, or solana-qos/.env.{env_name}); "
              "skipping. The report will have no competition, failure causes or rate-limit sections.")
        return
    res = logsmod.fetch_logs(session, meta, env, creds)
    for k, v in res["summary"].items():
        print(f"  {k}: {v}")
    inc = res["incident"]
    if inc and not any(i.get("label") == inc["label"] for i in meta.get("incidents", [])):
        meta.setdefault("incidents", []).append(inc)
        (session / "meta.json").write_text(json.dumps(meta, indent=1, ensure_ascii=False))
        print(f"  added incident to meta.json: {inc['label']} {inc['start']} → {inc['end']}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    for name in ("logs", "fetch", "report"):
        sub.add_parser(name).add_argument("--session", required=True)
    a = ap.parse_args()
    {"logs": cmd_logs, "fetch": cmd_fetch, "report": cmd_report}[a.cmd](a)


if __name__ == "__main__":
    main()
