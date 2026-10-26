"""Fetch the log-derived session inputs from VictoriaLogs (through Grafana) instead of by hand.

Writes the same files under sessions/<name>/logs/ that queries/logs.md describes:
  seed_orders.txt, creation_expired.txt, settle_failures.txt, competition.json,
  jupiter_quotes.txt, jupiter_quotes_timeline.json
and suggests an incident in meta.json when a settlement fee payer ran out of SOL.

Credentials: GRAFANA_URL, GRAFANA_API_TOKEN, GRAFANA_DATASOURCE_UID, from the environment or
solana-qos/.env.<env> (e.g. .env.staging). Without them, nothing is fetched and the report is basic.
"""

from __future__ import annotations

import json
import os
import urllib.error
import urllib.request
from collections import defaultdict
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CRED_KEYS = ("GRAFANA_URL", "GRAFANA_API_TOKEN", "GRAFANA_DATASOURCE_UID")
MAX_ROWS = 5000

# Errors that mean a settlement's fee payer couldn't pay: too few lamports for the fee, or too few to stay
# rent-exempt once it funds an account the settlement creates. `InsufficientFundsForRent { account_index: 0 }`
# names the fee payer itself, so an account that can still pay fees but not open one more token account hits
# only the settlements that need one. The driver logs these from two places; see `funding_failures`.
OUT_OF_SOL = "insufficient lamports|InsufficientFundsForRent|InsufficientFundsForFee"
DROPPED_IN_SIMULATION = "dropping solution, its settlement fails in simulation"


def load_credentials(env: str) -> dict[str, str] | None:
    """Exported variables win; otherwise read solana-qos/.env.<env>. None when incomplete."""
    creds = {k: os.environ.get(k, "") for k in CRED_KEYS}
    path = ROOT / f".env.{env}"
    if not all(creds.values()) and path.exists():
        for line in path.read_text().splitlines():
            if "=" in line and not line.lstrip().startswith("#"):
                k, v = line.split("=", 1)
                if k.strip() in CRED_KEYS and not creds[k.strip()]:
                    creds[k.strip()] = v.strip().strip('"').strip("'")
    return creds if all(creds.values()) else None


class Logs:
    def __init__(self, creds: dict[str, str], start: str, end: str):
        self.url = creds["GRAFANA_URL"].rstrip("/") + "/api/ds/query"
        self.token = creds["GRAFANA_API_TOKEN"]
        self.uid = creds["GRAFANA_DATASOURCE_UID"]
        ms = lambda s: str(int(datetime.fromisoformat(s.replace("Z", "+00:00")).timestamp() * 1000))  # noqa: E731
        self.window = (ms(start), ms(end))

    def rows(self, expr: str) -> list[dict[str, str]]:
        """Run a LogsQL expression; returns one dict per result row (stats rows or log fields)."""
        body = {
            "queries": [{
                "refId": "A",
                "datasource": {"type": "victoriametrics-logs-datasource", "uid": self.uid},
                "editorMode": "code",
                "expr": expr,
                "queryType": "instant",
                "maxLines": MAX_ROWS,
            }],
            "from": self.window[0],
            "to": self.window[1],
        }
        req = urllib.request.Request(self.url, json.dumps(body).encode(), {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.token}",
            "x-datasource-uid": self.uid,
            "x-plugin-id": "victoriametrics-logs-datasource",
        })
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                data = json.load(r)
        except urllib.error.HTTPError as e:
            raise RuntimeError(f"Grafana query failed: HTTP {e.code} {e.read().decode()[:300]}") from e
        res = data["results"]["A"]
        if res.get("error"):
            raise RuntimeError(f"LogsQL error: {res['error']}\n  query: {expr}")
        out = []
        for frame in res.get("frames", []):
            names = [f["name"] for f in frame["schema"]["fields"]]
            if "labels" not in names:
                continue
            for labels in frame["data"]["values"][names.index("labels")]:
                out.append(labels or {})
        if len(out) >= MAX_ROWS:
            print(f"  warning: {len(out)} rows, results may be truncated: {expr[:80]}…")
        return out


def n(row: dict, key: str = "n") -> int:
    return int(float(row.get(key, 0) or 0))


def fetch_logs(session: Path, meta: dict, env: dict, creds: dict[str, str]) -> dict:
    c = env.get("logs") or {}
    if not c:
        raise RuntimeError(f"environments.json has no log container names for {meta.get('env', 'staging')}")
    ap, drv, jup = c["autopilot"], c["driver"], c["jupiter"]
    lg = Logs(creds, meta["start"], meta["end"])
    out = session / "logs"
    out.mkdir(parents=True, exist_ok=True)
    summary = {}

    # Orders seen by the autopilot, merged with what the simulator already recorded.
    seeds = [r["parsed.fields.added"] for r in lg.rows(
        f'container:"{ap}" AND _msg:"new orders in auction" AND parsed.fields.added:!"[]" '
        "| unroll by (parsed.fields.added) | stats by (parsed.fields.added) min(_time) first_seen")]
    seeds += [r["parsed.fields.orders"] for r in lg.rows(
        f'container:"{ap}" AND _msg:"filtered orders" AND parsed.fields.reason:!"in_flight" '
        "| unroll by (parsed.fields.orders) | stats by (parsed.fields.orders) count() n")]
    path = out / "seed_orders.txt"
    existing = path.read_text().split() if path.exists() else []
    if meta.get("sim"):
        # A simulated session is exactly the orders sim/ placed; other barn users share the window.
        summary["seed_orders"] = f"{len(existing)} (simulated session: log seeds ignored, {len(seeds)} seen in the window)"
    else:
        merged = list(dict.fromkeys(existing + [s for s in seeds if s.startswith("0x")]))
        path.write_text("\n".join(merged) + "\n")
        summary["seed_orders"] = f"{len(merged)} ({len(merged) - len(existing)} new from logs)"

    expired = [r["parsed.fields.order_uid"] for r in lg.rows(
        f'container:"{ap}" AND _msg:"sponsored creation expired, dropping the order" | stats by (parsed.fields.order_uid) count() n')
        if r.get("parsed.fields.order_uid")]
    (out / "creation_expired.txt").write_text("\n".join(expired) + ("\n" if expired else ""))
    summary["creation_expired"] = len(expired)

    # Driver settle failures, categorised and joined to their orders via `settling orders`.
    rows = lg.rows(
        f'container:"{drv}" AND _msg:in("settling orders","settle failed") '
        f'| format if (parsed.fields.error:~"{OUT_OF_SOL}") "funder_out_of_sol" as c1 '
        '| format if (parsed.fields.error:~"BlockhashNotFound") "creation_blockhash_not_found" as c2 '
        '| format if (parsed.fields.error:~"BeginFinalizePairOverlap") "token_insufficient_funds" as c3 '
        f'| format if (_msg:"settle failed" AND -parsed.fields.error:~"{OUT_OF_SOL}|BlockhashNotFound|BeginFinalizePairOverlap") "other" as c4 '
        '| format "<c1><c2><c3><c4>" as cat '
        "| stats by (parsed.spans.settle.auction_id, parsed.spans.settle.solution_id, parsed.spans.solver_engine.solver) "
        "max(cat) cat, max(parsed.fields.orders) orders, min(_time) t "
        '| filter cat:!"" | unroll by (orders) | stats by (cat, orders) count() attempts, min(t) first')
    lines = sorted((r.get("first", ""), r["cat"], r["orders"]) for r in rows if r.get("orders"))

    # Orders the driver dropped before any settlement attempt, so they never reach `settle failed`.
    # A buy token account that is missing and not the owner's ATA (a custom recipient's): the driver can't create it.
    lines += [(r.get("first", ""), "buy_account_unreceivable", r["parsed.fields.order"]) for r in lg.rows(
        f'container:"{drv}" AND _msg:"dropping order, its buy token account cannot receive the payout" '
        "| stats by (parsed.fields.order) min(_time) first") if r.get("parsed.fields.order")]
    # Solutions the driver dropped in simulation, by why: over Solana's 1232-byte limit, or with a fee payer
    # that couldn't cover them. The driver line names only the auction and solution id, and no line maps a
    # dropped solution to its order, so join on the auction through the Jupiter solver's per-order `solved`
    # lines, and only where every solution in the auction went the same way: in a busy auction the other
    # orders' solutions were fine and they'd be blamed for someone else's route. A fee payer that is merely
    # low fails only the solutions that fund an account, so it rarely clears that bar; the incident below
    # reports it anyway, because that doesn't depend on pinning the blame on an order.
    dropped: dict[str, dict[str, int]] = defaultdict(dict)
    for r in lg.rows(
            f'container:"{drv}" AND _msg:"{DROPPED_IN_SIMULATION}" '
            f'| format if (parsed.fields.error:~"{OUT_OF_SOL}") "funder_out_of_sol" as c1 '
            '| format if (parsed.fields.error:~"TransactionTooLarge") "transaction_too_large" as c2 '
            '| format "<c1><c2>" as cat | filter cat:!"" '
            '| format "<parsed.spans./solve.auction_id>" as auction '
            "| stats by (cat, auction) count_uniq(parsed.fields.solution_id) n"):
        if r.get("auction"):
            dropped[r["cat"]][r["auction"]] = n(r)
    if dropped:
        ids = ",".join(f'"Some({a})"' for a in sorted({a for per in dropped.values() for a in per}))
        solved = defaultdict(list)
        for r in lg.rows(f'container:"{jup}" AND _msg:"solved" AND parsed.spans.solve.auction_id:in({ids}) '
                         "| stats by (parsed.spans.solve.auction_id, parsed.spans.solve.order) min(_time) first"):
            if r.get("parsed.spans.solve.order"):
                solved[r["parsed.spans.solve.auction_id"][5:-1]].append((r.get("first", ""), r["parsed.spans.solve.order"]))
        for cat, per_auction in dropped.items():
            first = {}
            for auction, rows in solved.items():
                if per_auction.get(auction, 0) >= len(rows):
                    for t, uid in rows:
                        first[uid] = min(first.get(uid, t), t)
            lines += [(t, cat, uid) for uid, t in first.items()]
    lines.sort()
    # Why an order sat in auctions without a fill: the autopilot's filter reasons (`unfunded_sell_token_account`,
    # `unreceivable_buy_token_account`, …) and the solver's `out_of_price` when no route met the limit.
    states = [(r.get("first", ""), r["parsed.fields.reason"], r["parsed.fields.orders"]) for r in lg.rows(
        f'container:"{ap}" AND _msg:"filtered orders" AND parsed.fields.reason:!"in_flight" '
        "| unroll by (parsed.fields.orders) | stats by (parsed.fields.reason, parsed.fields.orders) min(_time) first")
        if r.get("parsed.fields.orders", "").startswith("0x")]
    states += [(r.get("first", ""), "out_of_price", r["parsed.spans.solve.order"]) for r in lg.rows(
        f'container:"{jup}" AND _msg:"swap does not satisfy order" '
        "| stats by (parsed.spans.solve.order) min(_time) first") if r.get("parsed.spans.solve.order")]
    states.sort()
    (out / "order_states.txt").write_text("".join(f"{s} {uid} {first}\n" for first, s, uid in states))
    summary["order_states"] = len(states)
    (out / "settle_failures.txt").write_text("".join(f"{cat} {uid} {first}\n" for first, cat, uid in lines))
    summary["settle_failures"] = len(lines)

    # Jupiter quote attempts per order (only orders that hit a rate limit) and per 5 minutes.
    jq = (f'container:"{jup}" AND _msg:in("quote failed","solved","swap does not satisfy order","no solution for swap")')
    per_order = lg.rows(
        jq + ' | format if (_msg:"quote failed") "1" as rl | format if (_msg:"solved") "1" as ok '
        "| stats by (parsed.spans.solve.order) count() attempts, count(rl) rate_limited, count(ok) solved, min(_time) first, max(_time) last "
        "| filter rate_limited:>0")
    per_order.sort(key=lambda r: r.get("first", ""))
    (out / "jupiter_quotes.txt").write_text(
        "# order_uid attempts rate_limited solved first last\n"
        + "".join(f"{r['parsed.spans.solve.order']} {n(r, 'attempts')} {n(r, 'rate_limited')} {n(r, 'solved')} {r.get('first', '')} {r.get('last', '')}\n"
                  for r in per_order if r.get("parsed.spans.solve.order")))
    buckets: dict[str, dict] = defaultdict(lambda: {"solved": 0, "no_match": 0, "rate_limited": 0})
    # Grafana drops _time/_msg from result labels, so copy them into named fields.
    for r in lg.rows(jq + ' | stats by (_time:5m, _msg) count() n | format "<_time>" as bucket | format "<_msg>" as msg'):
        key = {"solved": "solved", "quote failed": "rate_limited"}.get(r.get("msg", ""), "no_match")
        buckets[r["bucket"]][key] += n(r)
    (out / "jupiter_quotes_timeline.json").write_text(json.dumps({
        "_source": f"container {jup}, per 5m",
        "bucket_min": 5,
        "rows": [{"t": t, **v} for t, v in sorted(buckets.items())],
    }, indent=1))
    summary["jupiter_rate_limited_orders"] = len(per_order)

    summary["competition_drivers"] = len(write_competition(lg, ap, out, len(expired)))
    funding = funding_failures(lg, drv)
    if funding:
        summary["funding_failures"] = ", ".join(
            f"{f['path']} {n(f)}× {f.get('first', '')[11:19]}–{f.get('last', '')[11:19]}" for f in funding)
    incident = detect_funder_outage(funding)
    if incident:
        summary["incident"] = f"{incident['label']} {incident['start'][11:19]}–{incident['end'][11:19]}"
    return {"summary": summary, "incident": incident}


def write_competition(lg: Logs, ap: str, out: Path, creation_expired: int = 0) -> dict:
    msgs = ('"proposed solution","winner","executing solution","settlement submitted","settlement observed on chain",'
            '"settlement rejected before submission","settlement failed","settlement missed its deadline","solve failed",'
            '"solve missed the deadline","skipping winner, sponsored creations unavailable"')
    counts = lg.rows(f'container:"{ap}" AND _msg:in({msgs}) | stats by (_msg, parsed.fields.driver, parsed.fields.solver) count() n | format "<_msg>" as msg')
    kinds = lg.rows(
        f'container:"{ap}" AND _msg:in("settlement rejected before submission","settlement failed","solve failed") '
        r'| extract_regexp `kind\\":\\"(?P<kind>[A-Za-z]+)` from parsed.fields.err '
        '| stats by (_msg, parsed.fields.driver, kind) count() n | format "<_msg>" as msg')
    mapping = lg.rows(
        f'container:"{ap}" AND _msg:in("winner","executing solution") '
        "| stats by (parsed.spans.auction.auction_id, parsed.fields.solution) max(parsed.fields.solver) solver, max(parsed.fields.driver) driver "
        "| stats by (solver, driver) count() wins")
    filtered = lg.rows(f'container:"{ap}" AND _msg:"filtered orders" | stats by (parsed.fields.reason) count() n')

    driver_of = {m["solver"]: m["driver"] for m in mapping if m.get("solver") and m.get("driver")}
    drivers: dict[str, dict] = defaultdict(dict)
    skipped = 0
    for r in counts:
        msg, d = r.get("msg", ""), r.get("parsed.fields.driver") or driver_of.get(r.get("parsed.fields.solver", ""), "")
        if msg == "skipping winner, sponsored creations unavailable":
            skipped += n(r)
            continue
        if not d:
            continue
        key = {"proposed solution": "proposed", "winner": "wins", "settlement submitted": "submitted",
               "settlement observed on chain": "observed_on_chain", "settlement missed its deadline": "settlement_missed_deadline",
               "solve missed the deadline": "solve_missed_deadline"}.get(msg)
        if key:
            drivers[d][key] = drivers[d].get(key, 0) + n(r)
        if r.get("parsed.fields.solver") and d in driver_of.values():
            drivers[d]["solver"] = r["parsed.fields.solver"]
    for r in kinds:
        d = r.get("parsed.fields.driver")
        if not d:
            continue
        key = {"settlement rejected before submission": "rejected_before_submission", "settlement failed": "settlement_failed",
               "solve failed": "solve_failed"}[r["msg"]]
        drivers[d].setdefault(key, {})
        kind = r.get("kind") or "other"
        drivers[d][key][kind] = drivers[d][key].get(kind, 0) + n(r)
    for solver, d in driver_of.items():
        drivers[d]["solver"] = solver
    comp = {
        "_source": f"VictoriaLogs via Grafana, container {ap}",
        "drivers": dict(drivers),
        "autopilot": {
            "winner_skipped_creation_blockhash_expired": skipped,
            "sponsored_creation_expired_orders": creation_expired,
            "filtered": {r["parsed.fields.reason"]: n(r) for r in filtered if r.get("parsed.fields.reason")},
        },
    }
    (out / "competition.json").write_text(json.dumps(comp, indent=1))
    return comp["drivers"]


def funding_failures(lg: Logs, drv: str) -> list[dict]:
    """Driver errors that mean a settlement's fee payer couldn't pay, split by where they were logged.

    `settlement`: the driver submitted and the transaction died, so nothing settled while it lasted.
    `simulation`: the driver dropped the solution before submitting, so the auctions around it kept settling
    and only the solutions that had to fund an account failed.

    Both were invisible before: the categorised query reads only `settling orders`/`settle failed`, and the
    dropped-solution query asked about `TransactionTooLarge` alone.
    """
    rows = lg.rows(
        f'container:"{drv}" AND parsed.fields.error:~"{OUT_OF_SOL}" '
        f'| format if (_msg:"{DROPPED_IN_SIMULATION}") "simulation" as p1 '
        f'| format if (-_msg:"{DROPPED_IN_SIMULATION}") "settlement" as p2 '
        '| format "<p1><p2>" as path '
        "| stats by (path) count() n, min(_time) first, max(_time) last")
    return sorted((r for r in rows if r.get("path")), key=lambda r: r.get("first", ""))


def detect_funder_outage(funding: list[dict]) -> dict | None:
    """The span of driver out-of-SOL errors, as a report incident.

    `blocking` says whether settlement stopped. A fee payer that died on submission took every order in the
    window with it, so the report may blame the window for an order it can't explain otherwise. One that only
    failed in simulation left the auctions settling around it, and blaming the window there would mislabel
    orders that failed on their own.
    """
    if not funding:
        return None
    blocking = any(f["path"] == "settlement" for f in funding)
    spans = [f for f in funding if f["path"] == "settlement"] if blocking else funding
    # An incident without both ends is worse than none: the report reads them as timestamps.
    starts, ends = [f["first"] for f in spans if f.get("first")], [f["last"] for f in spans if f.get("last")]
    if not (starts and ends):
        return None
    return {
        "start": min(starts),
        "end": max(ends),
        "label": "Funder out of SOL" if blocking else "Settlement fee payer low on SOL",
        "detected": "from driver logs",
        "blocking": blocking,
        "attempts": sum(n(f) for f in spans),
    }
