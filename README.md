# solana-qos

Quality-of-service report for CoW Protocol Solana test sessions on barn. It covers:
- how many orders were placed and how many executed
- why the rest didn't execute
- which solvers won and landed settlements

## Scripted sessions (`sim/`)

`sim/` plays a CSV of trades with wallets derived from one mnemonic, then writes a session folder that this
report reads. See [`sim/README.md`](sim/README.md). Scenarios you can replay are in `scenarios/` (start with
`smoke.csv`).

## Token universe

`token-universe/` ranks every Solana token by trading volume and checks whether CoW can trade it, to see how well the
app's token lists cover real demand. Start with [`token-universe/summary.md`](token-universe/summary.md); the
per-token data is in `universe.csv`. Rebuild it with `pnpm sim build-token-universe`, then `pnpm sim build-token-sequence`
writes the token coverage scenarios to `scenarios/token-universe/` (see the sim README).

## Environments

`environments.json` lists the orderbook API, debug tool, Solscan and log container names for `staging` (barn)
and `prod`. `sim/` and `qos.py` both read it. A session's `meta.json` records which environment it ran on (`env`,
default `staging`), so the report's API calls and 🐞 debug links always match it.

## Data sources

| What | Where |
|---|---|
| Which orders were in the session | barn VictoriaLogs (autopilot), via the CoW-Barn MCP. See [`queries/logs.md`](queries/logs.md) |
| Order status, owner, tokens, trades | barn orderbook API `https://barn.api.cow.fi/solana/api` |
| Settling solver, block time, CU | Solana RPC `getTransaction` (fee payer of the settlement tx) |
| Per-driver competition (wins, rejections, errors) | barn VictoriaLogs, copied into `competition.json` |

The barn Solana database isn't exposed through the CoW-Barn MCP yet. The SQL in
`queries/db/` targets the `solana.*` schema for when it is, but it hasn't been run
against the real DB.

## VictoriaLogs (optional, for the full report)

`./qos.py logs --session <name>` runs the queries in `queries/logs.md` against barn's VictoriaLogs through Grafana. It
writes every `logs/` input, including competition, failure causes and Jupiter rate limits, and adds a "Funder out of
SOL" incident to `meta.json` when the driver logs show one.

It needs `GRAFANA_URL`, `GRAFANA_API_TOKEN` and `GRAFANA_DATASOURCE_UID`, either exported or in `solana-qos/.env.<env>`
(e.g. `.env.staging`, git-ignored; the same values debug-tools uses). Without them the step is skipped. The report is
then basic: no competition or rate-limit sections and generic failure causes. It says so at the top.

For sessions played by `sim/`, the report also reads `sim/journal.jsonl`. It adds a Scenario section with each row's
result, retries and placement errors, plus `sim_row`/`sim_step` columns in `orders.csv`.

## Running a session

```sh
SESSION=2026-10-02-kaffee
mkdir -p sessions/$SESSION/logs
echo '{"start":"2026-10-02T12:00:00Z","end":"2026-10-02T14:30:00Z"}' > sessions/$SESSION/meta.json
```

1. Run the queries in `queries/logs.md` for the window (`./qos.py logs` does it when the Grafana
   credentials below are set). Save the results as:
   - `logs/seed_orders.txt`: order UIDs, one per line
   - `logs/creation_expired.txt`: sponsored orders whose creation blockhash expired
   - `logs/competition.json`: per-driver stats
2. `./qos.py fetch --session $SESSION`
   - Expands the seeds to every order of the same owners in the window.
   - Pulls trades, then the settlement txs from RPC (cached in `txs.json`).
   - Resolves token symbols into `tokens.json`.
3. `./qos.py report --session $SESSION` writes `sessions/$SESSION/report.md` and a
   self-contained `report.html`, which has charts, a timeline and a filterable list of failed orders.

Optional session inputs:
- `logs/settle_failures.txt`: lines of `<category> <order_uid> <time>` from the
  driver's `settle failed` errors, joined to `settling orders`. This gives per-order
  causes such as `funder_out_of_sol` and `creation_blockhash_not_found`.
- `logs/jupiter_quotes.txt`: lines of `<order_uid> <attempts> <rate_limited> <solved> <first> <last>`
  from `solana-jupiter-staging-solve`, grouped by `parsed.spans.solve.order`.
  An order that never executed, got no other bid, and whose Jupiter quotes were
  rate limited without ever solving is attributed to rate limiting.
- `logs/jupiter_quotes_timeline.json`: per-5-minute Jupiter quote attempts
  (`solved`, `no_match`, `rate_limited`), drawn as the quota chart.
- `meta.json` `incidents`: `[{"start", "end", "label", "account"}]`. The report
  shades each incident on the timeline. Sponsored orders placed during an incident
  are attributed to it unless they failed for another logged reason.
- `meta.json` `changes`: `[{"at", "label", "short", "detail", "baseline_from", "baseline_note", "logs": {"before": {...}, "after": {...}}}]`.
  Each change draws a marker on the timeline and adds a before/after section.
  That section compares orders placed in `[baseline_from, at)` against `[at, end)`.
  `logs` holds optional log-derived counts for the same two windows, shown alongside.
- `meta.json` `title` / `name`: the report heading and the HTML page title.

Only the Python standard library is needed. To use another RPC (the public one
rate-limits), set `SOLANA_RPC`. To point at another orderbook, set `COW_API`.

## Labels

- `tokens.json`: mint → symbol. `fetch` fills it from Jupiter's token API.
- `solvers.json`: solver pubkey → driver name. Take it from the driver/solver query in `queries/logs.md`.

## Caveats

- "Placed" means orders created in the window by owners whose orders reached the
  autopilot. An owner whose orders were all rejected at placement doesn't show up.
- The API only returns `lastValidBlockHeight` while a sponsored order is still
  waiting to be created on-chain. An expired order that still has it was never
  created on-chain.
- The competition numbers count per auction: an order that sits in 10 auctions
  contributes up to 10 wins.
