"""Fetch the log-derived session inputs from VictoriaLogs (through Grafana) instead of by hand.

Writes the same files under sessions/<name>/logs/ that queries/logs.md describes:
  seed_orders.txt, creation_expired.txt, settle_failures.txt, competition.json,
  jupiter_quotes.txt, jupiter_quotes_timeline.json
and suggests an incident in meta.json when the sponsoring funder ran out of SOL.

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
        '| format if (parsed.fields.error:~"insufficient lamports|InsufficientFundsForRent|InsufficientFundsForFee") "funder_out_of_sol" as c1 '
        '| format if (parsed.fields.error:~"BlockhashNotFound") "creation_blockhash_not_found" as c2 '
        '| format if (parsed.fields.error:~"BeginFinalizePairOverlap") "token_insufficient_funds" as c3 '
        '| format if (_msg:"settle failed" AND -parsed.fields.error:~"insufficient lamports|InsufficientFundsForRent|InsufficientFundsForFee|BlockhashNotFound|BeginFinalizePairOverlap") "other" as c4 '
        '| format "<c1><c2><c3><c4>" as cat '
        "| stats by (parsed.spans.settle.auction_id, parsed.spans.settle.solution_id, parsed.spans.solver_engine.solver) "
        "max(cat) cat, max(parsed.fields.orders) orders, min(_time) t "
        '| filter cat:!"" | unroll by (orders) | stats by (cat, orders) count() attempts, min(t) first')
    lines = sorted((r.get("first", ""), r["cat"], r["orders"]) for r in rows if r.get("orders"))
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
    incident = detect_funder_outage(lines)
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


def detect_funder_outage(failures: list[tuple[str, str, str]]) -> dict | None:
    """The span of driver `funder_out_of_sol` failures, as a report incident."""
    times = sorted(first for first, cat, _ in failures if cat == "funder_out_of_sol" and first)
    if not times:
        return None
    return {"start": times[0], "end": times[-1], "label": "Funder out of SOL", "detected": "from driver logs"}
