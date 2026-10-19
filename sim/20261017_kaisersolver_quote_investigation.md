# Kaisersolver quote investigation

Date: 17 October 2026. Selected run: `2026-10-17-07-54-composite-kaisersolver-run`. Read-only investigation in Grafana; no trades, service changes or new quote requests were sent.

## Finding

The trading count remains 48/206 planned rows filled, with 48/48 placed scenario orders fulfilled. The main obstruction was quoting before placement: 155 NoLiquidity failures, plus 3 expected autopilot rejections. Account setup was active; these failures do not establish a receiving-account rent regression. The exact cause of the missing quotes is not established.

Grafana’s data-source list was checked: logs came from **VictoriaLogs Staging**, UID `vm-auth-staging`. Queries used the saved run’s UTC window, 07:55:00–08:14:30, and the narrower windows below. Production logs and EVM driver metrics were not used to explain Solana outcomes.

## Repeated cutoff

| Scenario | UTC query window | Driver outgoing quote solve-request records | API `QuotingFailed` records | Scenario rows placed and filled |
| --- | --- | --- | --- | --- |
| 25 same-direction sells | 07:58:03–07:58:10 | 25 | 20 | 5 |
| Burst of 8 | 08:01:24–08:01:29 | 8 | 3 | 5 |
| Burst of 16 | 08:02:54–08:03:02 | 16 | 11 | 5 |
| Burst of 24 | 08:04:24–08:04:35 | 24 | 19 | 5 |
| Burst of 32 | 08:05:54–08:06:06 | 32 | 27 | 5 |
| Fresh accounts, 8 rows | 08:10:11–08:10:17 | 12 | 6 | 2 |

The 25-order scenario requested fixed-input sells of 0.005 SOL → JUP. Rows 35–39 obtained quotes and filled; rows 40–59 failed before placement. Every larger burst also placed exactly 5 orders. This is a repeatable historical pattern, not proof of a configured 5-request limit. The driver logged attempts for all requested quotes, so a simulator-side stop after 5 is ruled out for these waves.

Fresh-account rows can make multiple quote requests: exact buys first obtain a quote to determine funding and then quote again during placement. Therefore 12 outgoing requests for 8 rows is not 12 scenario orders. Across the composite, 27 of the 34 scheduled exact buys failed the initial quote; the remaining 7 also failed during quoting before placement.

## What the error establishes

The API recorded the exact driver response `{"kind":"QuotingFailed","description":"No valid quote found"}`. The public request then failed with `404 Not Found: NoLiquidity: no route found`. It does not prove the token lacks liquidity.

Code checked at services commit `82746c5ad016a5f3cfc4b33cc919f4e522f0a929` predates the run (16 October 2026, 14:18:56 UTC); the quote route’s latest change before the run was 9 October. The running image was tagged `main`; its exact deployed source commit was not independently recovered. These code links explain the inspected version’s error handling, rather than proving the original solver’s unrecorded response body.

- [Quote route, lines 40–60](https://github.com/cowprotocol/services/blob/82746c5ad016a5f3cfc4b33cc919f4e522f0a929/crates/solana-driver/src/infra/api/routes/quote/mod.rs#L40-L60): after computing solutions, the driver returns `QuotingFailed` when no solution supplies a first trade to quote.
- [Solution computation, lines 309–358](https://github.com/cowprotocol/services/blob/82746c5ad016a5f3cfc4b33cc919f4e522f0a929/crates/solana-driver/src/domain/competition.rs#L309-L358): solver results are deduplicated and optional solver fees applied; fee-related drops produce a warning. No such warning was found for this run.
- [Solver HTTP handling, lines 138–150](https://github.com/cowprotocol/services/blob/82746c5ad016a5f3cfc4b33cc919f4e522f0a929/crates/solana-driver/src/infra/solver/mod.rs#L138-L150): non-success HTTP statuses and response conversion failures propagate as solver errors. They are not silently converted to an empty quote here.
- [Error mapping, line 80](https://github.com/cowprotocol/services/blob/82746c5ad016a5f3cfc4b33cc919f4e522f0a929/crates/solana-driver/src/infra/api/error.rs#L80): solver errors become `SolverFailed`, a different kind from the observed `QuotingFailed`.

The observed path is consistent with no eligible trade coming back from solution computation. A direct HTTP 429 or transport timeout would take a different error path in the inspected code. A rate or capacity limit *inside* Kaisersolver could still return an empty result; that remains a hypothesis. Malformed/empty trade results and other engine-side decisions are not distinguishable without the original response.

## Exact trace points

These are chronological driver request records, not confirmed cross-service joins or solver-side request IDs. No order ID exists for a failed quote. The recorded trace IDs were all zeros, so they cannot provide an end-to-end trace.

| Outgoing quote request ordinal | UTC timestamp | Driver request ID |
| --- | --- | --- |
| 1 | 2026-10-17T07:58:04.001648710Z | 133116 |
| 2 | 2026-10-17T07:58:04.086327192Z | 133117 |
| 3 | 2026-10-17T07:58:04.205880514Z | 133119 |
| 4 | 2026-10-17T07:58:04.353180858Z | 133120 |
| 5 | 2026-10-17T07:58:04.640192110Z | 133121 |
| 6 | 2026-10-17T07:58:04.836137521Z | 133122 |
| 7 | 2026-10-17T07:58:04.972195653Z | 133123 |
| 8 | 2026-10-17T07:58:05.242906405Z | 133124 |

The first API `QuotingFailed` record was at 07:58:04.942433815 UTC, API request ID `e5fbb9312ce773936778ca1846b45751`. The journal’s first failed row, 40 / trader 21, recorded NoLiquidity at 07:58:04.923 UTC. Their similar timestamps support the window-level match but are not a shared-request-ID join; do not claim driver request 133122 is definitively row 40.

## Checks and limits

All 315 quote-context driver records in the full observation window were `sending solve request`; no corresponding engine response body or detailed quote-decision record was present. The API recorded 226 `QuotingFailed` events across the shared window; this is not a count of selected failed scenario rows. The journal remains the source for the selected 155 NoLiquidity rows.

A targeted search in driver messages and error fields found no explicit HTTP 429, rate-limit, timeout, duplicate-ID or dropped-solution reason. This is a logging limit, not proof that no internal provider limit occurred. All 12 WARN records were the already identified priority-fee cap rejections during settlement; all affected orders later filled.

Solana API/autopilot/indexer metrics were visible, but no Solana driver quote-result series or driver scrape job was found in the checked staging Prometheus snapshot. EVM `driver_quotes` metrics for Kaisersolver were excluded because they describe other networks. The RPC proxy logs were also excluded as evidence of solver HTTP responses.

An existing open [quote logging PR #5051](https://github.com/cowprotocol/services/pull/5051) documents the missing competition history in the orderbook. It is marked “DO NOT REVIEW” and was not merged when checked. It does not itself provide the missing responses for this historical run, and its orderbook changes do not capture the driver-to-engine response body.

## Next check

Ask Kaisersolver to inspect its staging `/solve` logs for **17 October 2026, 07:58:04–07:58:09 UTC**, fixed-input **0.005 SOL → JUP**, when the first 5 of 25 requests produced usable quotes and the next 20 did not. Request the returned solution/trade counts and any internal quote-provider rate, capacity or rejection reason. Do not assert a 5-request rate limit as the cause. If those logs cannot recover the reason, a small quote-only reproduction with engine response logging is the next diagnostic step; no trades are required.
