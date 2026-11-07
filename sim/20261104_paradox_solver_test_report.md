# Paradox solver test report

Date: 4 November 2026. Environment: staging / Barn on Solana mainnet. Composite phases: 12:11:43-12:27:29 UTC; selected export ends 12:32:31 UTC. Separate smoke: 12:07:08-12:07:29 UTC.

Mode: **Solving only; Jupiter quoted and Paradox solved.** Separate smoke: **Quoting verified; solving untested (no fills).** Paradox quote calls are verified, but no order reached settlement.

**TLDR:** Coverage was not achieved and load results were inconclusive, but 4 small native SOL sells filled, including [this recovered 0.0025 SOL to USDC trade](https://debug.barn.cow.fi/order/0xe9b52b05adc136780712580020218d3ed2920eb2879a7343fa564f6a102cc243). The composite completed 4/167 eligible flows and filled 4/136 placed main orders; 31 requests never placed a main order, so the placed-order rate misses a large part of the test. Paradox settlement had repeated invalid engine responses during [this cancelled SOL to JUP wave](https://debug.barn.cow.fi/order/0xa781813b5cba8b4eac7691439973c5acb6b8e54a3d1854309a5b3566c6982eeb), while the recovered USDC trade hit a zero-slippage swap limit; inspect response validation and route construction first. The composite used Jupiter quotes with Paradox settlement, so its quote failures do not measure Paradox quoting. The separate Paradox quote smoke completed 0/6 and placed no order.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Not achieved: 1/6 flows; 1/2 placed main orders filled | CoW + Paradox: separate companion-order price rejection from the selected order. |
| 2. 25 same-direction sells | Inconclusive: 0/25 flows; 0/25 placed main orders filled | Paradox + driver: validate the original invalid engine response. |
| 3. Sell bursts | Inconclusive: 3/84 flows; 3/84 placed main orders filled | Paradox + driver: verify declared payout and signed limits before changing route tolerance. |
| 4. Token coverage | Not achieved: 0/52 flows; 0/25 placed main orders filled | Test team: restore a valid account setup before assessing sponsored coverage. |
| 5. Separate smoke | Not achieved: 0/6 flows; no placed orders | Paradox + quote integration: inspect the original rejected quote payloads. |

## Changes since 17 October 2026

Across the 4 matching composite scenarios, completed main flows fell from 28 to 4 while placed main orders rose from 29 to 136; changed quote providers and setup prevent a clean solver regression claim.

<details>
<summary>Comparison with the previous run</summary>

Baseline: staging session `2026-10-17-10-15-composite-paradox-run`, 17 October report with its 20 October denominator correction; comparisons rely on the matching earlier report. Its extra 8-row fresh-account scenario is absent here.

| Matching scope | 17 October | 4 November |
| --- | --- | --- |
| Completed / planned matching rows | 28/170 raw; 28/167 eligible | 4/167 eligible |
| Main orders filled / placed | 28/29 | 4/136 |
| Main settlement transactions / largest main batch | 28 / 1 | 4 / 1 |
| Token section sells / exact buys filled | 4 / 0 | 0 / 0 |
| Filled main median / longest | 22 / 35 seconds | 53 / 71 seconds |
| Successful acquisitions / placed | 0/1 | 1/1 |

The prior full-run corrected denominator was 175, including the extra 8 fresh-account flows; its 3 known unsupported fee rows are not present in this run. Timing uses placement to observed fill in both reports. Quote provider changed from Paradox to Jupiter native quoting; current accepted placements are all self-paid. New recorded settlement evidence includes `LimitPriceViolated` candidate rejection with a companion order. The 31-flow preplacement gap belongs to quote/setup checks and is excluded from solver defect counts. `SolverFailed` already existed in earlier Paradox evidence; 110 new events are not 110 new failed orders. `Custom(6001)` is newly decoded as Jupiter slippage here; the prior Invariant numeric error is a different program.

Newly affected attempt evidence: [0.0025 SOL to USDC, later filled](https://debug.barn.cow.fi/order/0xe9b52b05adc136780712580020218d3ed2920eb2879a7343fa564f6a102cc243), [0.004 SOL to USDC, later filled](https://debug.barn.cow.fi/order/0x87d2b074d9886c08657e24a035ae4fe865c16b6c1a6b2dfe008811bf7fecff99) and [0.005 SOL to JUP, cancelled](https://debug.barn.cow.fi/order/0xa781813b5cba8b4eac7691439973c5acb6b8e54a3d1854309a5b3566c6982eeb). No new token-section success recovered a previously failing token. The successful JUP acquisition [Debug](https://debug.barn.cow.fi/order/0xe7ca9f5ff0de84c31e95f04384488ef331a7face49262c7da22f05d890784735) used 0.002019637 SOL for 0.743006 JUP; the prior acquisition was oversized and expired, so this is a different, sane-sized setup trade rather than proof of an upstream fix. Cleanup still failed.

</details>

## 1. Standard pairs

**Basic pair coverage was not achieved.** Only SOL to USDT filled; a companion-order price check, setup and placement gaps prevent a broad conclusion about pair support.

<details>
<summary>Order evidence and metrics</summary>

Completed / scheduled: 1/6. Filled / placed main orders: 1/2. Total main settlement transactions: 1. Median / longest observed fill: 71 / 71 seconds.

All 4 composite phases are finished, but `run.finished=false`: cleanup and recovery remain unresolved. The journal records 4/167 completed flows, 163 failed flows, 136 placed main orders, 1 successful acquisition and 6 failed cleanup orders. API snapshot has 143 orders: 5 fulfilled and 138 cancelled; the generated report's 137 counts only non-cleanup orders. Raw `final` statuses have 132 main timeouts and 6 cleanup timeouts; these same orders are cancelled in the API, with no late main fill. `run.unresolvedOrders` still contains 15 rejected/nonexistent UIDs, so it must not be read as 15 live trades. No main-order retry was configured. Raw scenario `cleanupPending` snapshots are Standard pairs traders `[2,3]`, same-direction `[]`, Sell bursts `[32]`, and Token coverage `[61,62,63,65,66,67,69,70,71,73,74,75]`. Recovery entries say exactly `Order was not found in the API`; these prepared POST-rejected UIDs are not accepted orders. Some wallets also have `cleanup_done` entries with leftovers, so that event alone does not prove cleanup succeeded.

Eligible denominator: 167/167 composite rows; no additional exclusions. The selected CSV already excludes known nonzero transfer-fee probes. Zero-fee Token-2022 controls including USDG and PYUSD stay eligible. The smoke denominator is separate: 0/6 completed, 0 placed, 6 preplacement failures. Its first result says `orders:1`, but the journal has no `prepared`, `placed` or `final` event and its only `place_error` has `stage=quote`; this is an attempted placement count, not a created order. Smoke `finished=true`; both wallets were swept and cleanup reported no leftovers.

Total transactions means distinct successful settlements of main scenario orders: 4, each with 1 main order. Acquisition adds 1 separate successful transaction; cleanup adds none. No batching, direct opposite-order matching or sustained throughput is established. Filled main timing is placement to simulator-observed fulfillment, including polling delay: median 53 seconds, longest 71 seconds; exact source values are 36.970, 52.034, 54.861 and 70.902 seconds.

Historical provider check: authenticated Grafana `/api/datasources` verified `VictoriaLogs Staging` UID `vm-auth-staging` and the separate production UID. Smoke API logs name driver `/paradox/` for rejected quotes; composite API quote competition names `jupiter-quote-native` (solver `Grr6SWYUFi1eCagwEifXVD83rUQ4W5rJWYq1Lj7cx1jS`), while `/solve` and `/settle` name Paradox (settlement signer `8oLu4fyFb1SLc9ER3M31CfYRvtPWhUb3r3cXrRwNT8ku`). The composite mode is Solving only: Jupiter native quoting with Paradox settlement. The separate smoke verifies Paradox quoting; its quote failures prevented any settlement test, and its saved metadata does not establish the active settlement solver. All 143 accepted placements were self-paid; 15 sponsored bundles were rejected before placement. DEX instructions bearing Jupiter's name do not identify the selected settlement solver.

**Identity and order delivery, rechecked on 5 November.** All 136 accepted main orders appear in historical autopilot auction-addition records; none match the receiving-account filter. The 250 `unreceivable_buy_token_account` events in the wider 12:11:43-12:32:31 UTC window concern an unrelated order. During trading, 12:11:43-12:27:29 UTC, the driver sent 189 solve requests to Paradox's configured endpoint `http://109.199.102.187:8090/solve`, and autopilot recorded 104 failed solves and 18 proposed solutions. The wider saved export has 110 failed-solve events, including recovery; these are attempts, not distinct failed orders. For the verified [0.005 SOL to JUP main order](https://debug.barn.cow.fi/order/0xa781813b5cba8b4eac7691439973c5acb6b8e54a3d1854309a5b3566c6982eeb), journal placement is 12:13:23.484 UTC, auction 525429 adds it at 12:13:24.840887967 UTC, the Paradox request starts at 12:13:24.873627361 UTC and the driver wrapper failure arrives at 12:13:29.242899051 UTC. The journal and API agree on 4 filled and 132 cancelled main orders. An earlier report link used unrelated UID `0x7d41d15b39197b6a6cd3a242025e76928c8566a4a5e4a0963236b996280a7bd8`; it was not in this session journal or API export and has been replaced. This correction changes the example, not the counts. Generic `SolverFailed` can represent engine transport/HTTP/JSON errors or solution validation errors; its HTTP 400 is the driver's status, not a recovered engine status. Identity, auction entry and poor observed completion are verified; repair ownership for those generic failures remains unresolved.

**Companion-order rejection - Ownership unknown.** 21 shared candidate drops across Standard pairs and Sell bursts name the same outside companion order; 12 include selected SOL to USDC UID [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) together with `0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965`. Exact error: `Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965))`; the named violation belongs to that companion, which is outside the selected scenario. High confidence that the shared candidate was rejected, low confidence about the arithmetic or repair owner: original execution amounts for the companion were not recovered. Inspect candidate grouping and both signed limits against post-fee payouts before changing the selected order. An individually valid selected order can be blocked by an invalid companion; this is not proof that its own limit was wrong.

**Repeated solution IDs.** Twelve driver warnings in auctions 525410-525421 each discard 1 candidate because its ID repeats within the same engine response. The first occurrence is retained; reusing an ID across different requests is allowed. Paradox should assign a unique ID to each candidate within a response. These 12 auctions have zero overlap with the 104 failed-solve auctions during trading, so duplicate IDs do not explain that larger error count. The retained candidate ID 0 in these auctions later fails the companion-order price check described above. The discarded payloads were not saved, so we cannot establish which trades or valid alternatives were lost.

Evidence timestamps below use placement for successful rows and the first recorded failed attempt where joined, otherwise the row-failure observation. Displayed timestamps are rounded down to seconds; original artifacts retain exact timestamps. `timeout` is the simulator status; API `cancelled` is the later saved state.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-11-04T12:11:49Z | Sell 0.005 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) |
| 2 / 2 | 2026-11-04T12:11:47Z | Sell 0.005 SOL to USDT; self | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2537b04ae41dca6602b13ffed375ab93d985a95d28b29af3e2d4b60b87a8507b); [settlement](https://solscan.io/tx/tAF2YxHcWQEiDH2vsUpTXGdQwSHfC5z21BNe34RmXMBRF2QstGWoaVj3Kg1b43sMKBR9ZwjRqvrUWmaz5h6K7t5) |

Acquisition setup (excluded from main totals):

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 3 / 3 | 2026-11-04T12:11:54Z | Sell 0.002019637 SOL to at least 0.185562 JUP; self-paid | fulfilled in 3.649 seconds; following 0.5 JUP main quote failed | [Debug](https://debug.barn.cow.fi/order/0xe7ca9f5ff0de84c31e95f04384488ef331a7face49262c7da22f05d890784735); [settlement](https://solscan.io/tx/45K4m6g3Js3DwSYab6shu2uVoFpf2HArLdGMdnXbzcvghWh73ANYeJYcAmDZfBw31gWTd6FowFe2WTKzZBeWC94P) |

All joined candidate simulation failures (one row per candidate, not double-counted with its bundle diagnostic):

| UTC timestamp | Auction / solution | Error | Affected selected orders / final API state |
| --- | --- | --- | --- |
| 2026-11-04T12:11:49Z | 525410 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:11:55Z | 525411 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:11:59Z | 525412 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:12:05Z | 525413 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:12:09Z | 525414 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:12:14Z | 525415 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:12:19Z | 525416 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:12:24Z | 525417 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:12:29Z | 525418 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:12:34Z | 525419 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:12:39Z | 525420 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:12:44Z | 525421 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) cancelled |
| 2026-11-04T12:28:55Z | 525615 / 2 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x9951a3312ef3b7dfa29d5cc93be49b23705fb9b38716d865480e820c26f593cb) cancelled |
| 2026-11-04T12:28:55Z | 525615 / 3 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0xdfd1bf33c7187f8fa40e76b380f9c7661fb2ab691f65b1fa2a2044ba0e3c0bd9) cancelled |
| 2026-11-04T12:29:05Z | 525617 / 2 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x9951a3312ef3b7dfa29d5cc93be49b23705fb9b38716d865480e820c26f593cb) cancelled |
| 2026-11-04T12:29:05Z | 525617 / 3 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0xdfd1bf33c7187f8fa40e76b380f9c7661fb2ab691f65b1fa2a2044ba0e3c0bd9) cancelled |
| 2026-11-04T12:29:25Z | 525621 / 2 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x9951a3312ef3b7dfa29d5cc93be49b23705fb9b38716d865480e820c26f593cb) cancelled |
| 2026-11-04T12:29:25Z | 525621 / 3 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0xdfd1bf33c7187f8fa40e76b380f9c7661fb2ab691f65b1fa2a2044ba0e3c0bd9) cancelled |
| 2026-11-04T12:29:35Z | 525623 / 2 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x9951a3312ef3b7dfa29d5cc93be49b23705fb9b38716d865480e820c26f593cb) cancelled |
| 2026-11-04T12:29:35Z | 525623 / 3 | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0xdfd1bf33c7187f8fa40e76b380f9c7661fb2ab691f65b1fa2a2044ba0e3c0bd9) cancelled |
| 2026-11-04T12:29:45Z | 525625 / 2 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x9951a3312ef3b7dfa29d5cc93be49b23705fb9b38716d865480e820c26f593cb) cancelled |
| 2026-11-04T12:29:45Z | 525625 / 3 | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0xdfd1bf33c7187f8fa40e76b380f9c7661fb2ab691f65b1fa2a2044ba0e3c0bd9) cancelled |
| 2026-11-04T12:29:55Z | 525627 / 2 | SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x9951a3312ef3b7dfa29d5cc93be49b23705fb9b38716d865480e820c26f593cb) cancelled |
| 2026-11-04T12:29:15Z | 525619 / 2 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x9951a3312ef3b7dfa29d5cc93be49b23705fb9b38716d865480e820c26f593cb) cancelled |
| 2026-11-04T12:29:15Z | 525619 / 3 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0xdfd1bf33c7187f8fa40e76b380f9c7661fb2ab691f65b1fa2a2044ba0e3c0bd9) cancelled |

Cleanup (excluded from main totals; **Ownership unknown**):

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 2 | 2026-11-04T12:28:55Z | Sell raw 463833 Es9vMF to at least raw 4923189 native SOL; self-paid | cleanup timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xdfd1bf33c7187f8fa40e76b380f9c7661fb2ab691f65b1fa2a2044ba0e3c0bd9) |
| - / 3 | 2026-11-04T12:28:55Z | Sell raw 743006 JUPyiw to at least raw 1980623 native SOL; self-paid | cleanup timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x9951a3312ef3b7dfa29d5cc93be49b23705fb9b38716d865480e820c26f593cb) |

All 6 placed cleanup orders across this run were cancelled after timeout. Bundle diagnostics show 3 initial USDC-to-SOL cleanup UIDs failing Jupiter `Custom(6001)`; later cleanup for USDT, JUP and retried USDC also failed `InvalidAccountData` in Token Program or Jupiter, and `Custom(15)` in the settlement program. Programs differ, so these are separate mechanisms. Original bundle diagnostics retain empty `Some([])` logs for these failures; account contents and instruction payloads were not recovered. High confidence in the failed stage, low confidence about account closure versus wrong account/program selection. The same balances had valid buy-side main/acquisition fills, which does not validate reverse native SOL payouts. First check: CoW + Paradox settlement integration should compare account lifetimes, mint/program ownership and native-SOL handling in the original failed payload; test team owns safe balance reconciliation. Do not infer an autopilot defect or burn funds. Cleanup journal reports leftover 0.463833 USDT, 0.743006 JUP, and 0.231029/0.277346/0.370092 USDC across 5 wallets; these are saved leftover balances, not a current-wallet audit.

</details>

## 2. 25 same-direction sells

**Batching was inconclusive.** All 25 SOL to JUP sells placed but were cancelled after timeout, and original auction records show repeated invalid engine responses.

<details>
<summary>Order evidence and metrics</summary>

Completed / scheduled: 0/25. Filled / placed main orders: 0/25. Total main settlement transactions: 0. Median / longest fill: unavailable, no main fills.

**Invalid engine responses - Ownership unknown.** The saved competition counter contains 110 `SolverFailed` events across the composite, not 110 distinct orders. Original record 2026-11-04T12:13:29Z, auction 525429, says `Status { status: 400, body: "{\"kind\":\"SolverFailed\",\"description\":\"Solver engine returned an invalid response\"}" }`; its auction additions include selected JUP-wave orders. This proves a solver-engine/driver response boundary failure, not a no-liquidity quote. High confidence in the failing stage, low confidence in whether engine HTTP errors, response serialization or driver parsing caused it. Other successful Paradox submissions rule out a universal connectivity failure. First check: Paradox + CoW driver should retain the original engine HTTP status/body for this auction and validate it offline against the expected schema; a well-formed valid body rejected by the driver shifts the repair to parsing, while an invalid/error body shifts it to engine output.

Evidence timestamps below use placement for successful rows and the first recorded failed attempt where joined, otherwise the row-failure observation. Displayed timestamps are rounded down to seconds; original artifacts retain exact timestamps. `timeout` is the simulator status; API `cancelled` is the later saved state.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 2026-11-04T12:14:36Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xa781813b5cba8b4eac7691439973c5acb6b8e54a3d1854309a5b3566c6982eeb) |
| 8 / 5 | 2026-11-04T12:14:31Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xb26931fedf2e3b8542d9808a7c66ffe409a6043f434f814772aff980dd563612) |
| 9 / 6 | 2026-11-04T12:14:35Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xbac15e278d2630119e1ef59b2a2f7bbec5777dfe09c761857737f2c1eb6bd41e) |
| 10 / 7 | 2026-11-04T12:14:32Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xba5d56164fd0a99a2734e50df7805bdadd104eae0edffbf41e863618a4798a37) |
| 11 / 8 | 2026-11-04T12:14:37Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xe91514497cdfa2de7c3d1499668b90295a5530c8a5d6040291763b3b872e3512) |
| 12 / 9 | 2026-11-04T12:14:36Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x98ba92d957a4ed4f185b2820edc3bc1e5aa8bcf59d4123f05bc66543d4a140ab) |
| 13 / 10 | 2026-11-04T12:14:40Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x0bbc314a14c1d2be12416a306c38692478057b16c447a7d5c61271408f3380b3) |
| 14 / 11 | 2026-11-04T12:14:39Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x7cb8c0e1da61e5489cbd7df984a3768b3312b8d6c0ce19adcfde639c2e7ef148) |
| 15 / 12 | 2026-11-04T12:14:35Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x22f34ae4de0e026d11431c15b0772c7b20459a1dd535186bc87cdbcc6ed648a4) |
| 16 / 13 | 2026-11-04T12:14:38Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x091fff501c9a655af038bbeb8ea6893e2265ecdadea21cb183d6abc261baf5b7) |
| 17 / 14 | 2026-11-04T12:14:34Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x63c56738b33985dfc8083c5aa4fdce248682cedb06b9f761c41aac85a21b3ad0) |
| 18 / 15 | 2026-11-04T12:14:40Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xca4e1e2df909405caac796579238f86e8871d9701ad656e0cde44a08f089a86f) |
| 19 / 16 | 2026-11-04T12:14:42Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xb4434edb36a862b85decbc502341774295a4da0be531910893f9c58f5babc629) |
| 20 / 17 | 2026-11-04T12:14:38Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x474ae9536c9210378efa0f12806fc2dcaecca1304d0a5b9997d48dceea126d09) |
| 21 / 18 | 2026-11-04T12:14:41Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xfa5c12e2fe6abe7b9b735332f1d8a80513365901cf6d2aeb908709efa280dbdc) |
| 22 / 19 | 2026-11-04T12:14:39Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xe6563679c7618b1f597a32c196194b996e536936d4a6d6439ab474ea1d21ec82) |
| 23 / 20 | 2026-11-04T12:14:41Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x1a32c7237e3fc951aeacaae916237195f610a5f7aad74758c62f29a7e0501d0f) |
| 24 / 21 | 2026-11-04T12:14:40Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xf0e6007a93adf01279bf7f289c69ad69785e495061555543fcfc0c22a33106d9) |
| 25 / 22 | 2026-11-04T12:14:38Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x0e1a835966ea6c7b9cf4c96d3de81e6feb0207d1b0c11a078dea20d0bafe2a1c) |
| 26 / 23 | 2026-11-04T12:14:40Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x4d3319c2619af228635425fc7a0fdd35e77ed3468466b63e277d1a8f41b27ae5) |
| 27 / 24 | 2026-11-04T12:14:42Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x196c1b87e289c0f1624939babcf4349cf1ea38eb0946c7e043360b4a8bd93805) |
| 28 / 25 | 2026-11-04T12:14:39Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x895b5f9d16ee6c807b0b2bdb55178ad975edf9f4ffa157448a91f5bd3fdb0f9b) |
| 29 / 26 | 2026-11-04T12:14:39Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xf902d0379ba7605a5ef611e3b1f867872961ffb3fbbca3f4e1590d228c080909) |
| 30 / 27 | 2026-11-04T12:14:41Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x0499abcf6ea991893c244e11d07895579a32c21874d78a4f96fa52000e99c416) |
| 31 / 28 | 2026-11-04T12:14:42Z | Sell 0.005 SOL to JUP; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x1c6a394486f8921a6e8e19da6b91b5ba9b2cc147cbe57c48afe5725eeffb5d9c) |

</details>

## 3. Sell bursts

**Sustained throughput was inconclusive.** Only 3/84 burst sells filled, with failed attempts on all 3 successes and no proof of a batching or sustained rate limit.

<details>
<summary>Order evidence and metrics</summary>

Completed / scheduled: 3/84. Filled / placed main orders: 3/84. Total main settlement transactions: 3. Median / longest observed fill: 52 / 55 seconds.

**Zero-slippage route failures - Ownership unknown.** [0.0025 SOL to USDC, later filled](https://debug.barn.cow.fi/order/0xe9b52b05adc136780712580020218d3ed2920eb2879a7343fa564f6a102cc243) failed in auctions 525468 and 525470, solution 4, after settlement simulation passed. Read-only RPC version-1 transactions [first failed attempt](https://solscan.io/tx/3QbEybnGgps65xaQHixRw6oCsMtQAcvAQsM2pULi78teRiUejZqD3DMeu3CRrmqmPGVThxqn6grDjdAYyg4QgDs) and [second failed attempt](https://solscan.io/tx/wQvhg2kUWtfBcUuXDL1rJFN32j8iESRVF1buiAg2f3gy3TSkR3bxtu8Vy7iVL1njrXoYinX98hhnQKNBsq8h8bk) confirm instruction 5 first fails in Jupiter `JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4`, `Custom(6001)`. Their matching `global:route` discriminator is `e517cb977ae3ad2a`; [public route schema](https://github.com/jup-ag/jupiter-cpi/blob/main/idl.json) defines trailing `inAmount`, `quotedOutAmount`, `slippageBps`, `platformFeeBps` and names 6001 `SlippageToleranceExceeded`. Both encode input 2,500,000 and 0 bps slippage; quote outputs are 231,913 and 231,779 raw USDC. CPI transfers return 231,904 and 231,699: 9 and 80 units below route thresholds, although both exceed the user signed minimum of 70,595 by more than 161,000 units. Thus the failing condition is output below the zero-tolerance route quote, not below the user minimum. High confidence in the observed mechanism; historical deployed binary was not independently matched to public source. Small movement between simulation and execution is the leading explanation; construction/rounding is an alternative. Inspect Paradox route construction and the shared driver boundary before assigning repair ownership. First check: recover the original declared solution payout and required costs before proposing any allowance change; those guarantees were not recovered here. Validate the payload offline against both that declared payout plus costs and the user signed sell limit and buy minimum. A nonzero route allowance is valid only if every guarantee still holds; otherwise preserve the tighter bound and investigate refreshing or rebuilding the route. User headroom alone does not justify a wider allowance, and no fixed change is recommended before this check.

[0.004 SOL to USDC, later filled](https://debug.barn.cow.fi/order/0x87d2b074d9886c08657e24a035ae4fe865c16b6c1a6b2dfe008811bf7fecff99) also hit named Jupiter `SlippageToleranceExceeded` during final simulation (auction 525474, solution 3), while all 3 eventual burst successes first had bundle-simulation `Custom(6001)` in auction 525466. Its simulation payload and program logs show the DEX swap succeeded before Jupiter rejected the route; output-side tolerance is supported, but exact output/threshold amounts for that attempt remain unquantified. These are failed attempts on filled orders, not additional failed main orders.

Evidence timestamps below use placement for successful rows and the first recorded failed attempt where joined, otherwise the row-failure observation. Displayed timestamps are rounded down to seconds; original artifacts retain exact timestamps. `timeout` is the simulator status; API `cancelled` is the later saved state.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 2026-11-04T12:16:30Z | Sell 0.0025 SOL to USDC; self | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe9b52b05adc136780712580020218d3ed2920eb2879a7343fa564f6a102cc243); [settlement](https://solscan.io/tx/2RXxqgFKJGWEywSSFCChaEoTABaJrZs18vSpdKYKTVYn6aw4j9gbtAfiG8pn2fkyMmCXu57ST4n6bwnaVbRivh1B) |
| 33 / 30 | 2026-11-04T12:16:30Z | Sell 0.003 SOL to USDC; self | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xed3e8e0b1be5ee1559ff03b4e794ae7301f690ccb31e586edd06c86f5680aaf8); [settlement](https://solscan.io/tx/DQwSxizJstapvDDnV5fFFc4JxCG53bhnoKwHeeFAqqCd2dspxfxGCAD37w3xWZJYkWo4Xdon1WZvAbNeuNZ7Q6R) |
| 34 / 31 | 2026-11-04T12:16:30Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x398ce306fbd33c4d2d0e9ba03ecb01d692a0a64d9d16e4a8a8bcd563e4d29de3) |
| 35 / 32 | 2026-11-04T12:16:30Z | Sell 0.004 SOL to USDC; self | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x87d2b074d9886c08657e24a035ae4fe865c16b6c1a6b2dfe008811bf7fecff99); [settlement](https://solscan.io/tx/4Hu22TvNTkV2FFH27TJSEe2bGg3k6UvXzQbDrzP8MPyLDW8a8v7FEaJq2FwKqpvFuUCYhHQLQ8B6Fi5Lm62vrFvu) |
| 36 / 29 | 2026-11-04T12:19:08Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x8521747f0adb27ca6bec9ac57aecae29e30aa11c90209f4812f9dd4edde4db75) |
| 37 / 30 | 2026-11-04T12:19:08Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xa9bc602c89b6249821a01da250539b94fba904c9f93bc3468c2323c2655cda08) |
| 38 / 31 | 2026-11-04T12:19:07Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x79bef00ec16a8f9289df7d50222501f15d7666942f6dbb55e9ad3402590c2e6e) |
| 39 / 32 | 2026-11-04T12:19:06Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x7c60917fe14e2e8505d698591174c7860c5b520bbac5d6dc17c805a4194ed7dd) |
| 40 / 33 | 2026-11-04T12:19:06Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x8e41b0d8ac458d44a75f8bfddc2e97f32b1e5cc7a04ae21213e185d0d7a64a91) |
| 41 / 34 | 2026-11-04T12:19:09Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xb386253664a121832c6f199a14a1dcae00664e8b51ca5f141632f4a8cf088b55) |
| 42 / 35 | 2026-11-04T12:19:06Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xba3d9bdbb2409c45d31a7fcc45f10160c9cfcb2a7b6fe838fd8a8fa7e293c0cd) |
| 43 / 36 | 2026-11-04T12:19:07Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x1a2325b2c061d48b2cedf784757d09c2b70114725790b25a85609ee7fa33fe04) |
| 44 / 29 | 2026-11-04T12:20:45Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x94899a555d470d523328f42270a3a27223f222f13cf9966ea042ece348eab463) |
| 45 / 30 | 2026-11-04T12:20:43Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x4c9d179b5d0189827f8fc1e0f7321e8d81d8caa97bc990da4f809583713fafe8) |
| 46 / 31 | 2026-11-04T12:20:40Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x8c49a7147716f1f4b090e16206477303092359606b413cb3023afba618883f46) |
| 47 / 32 | 2026-11-04T12:20:37Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x879d17e43f5b39bb6fbfb716cf885e46af5ff1937d713566d63081c664d2da8a) |
| 48 / 33 | 2026-11-04T12:20:42Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xc99d6aa6e813cd94ee72882a6f94aed73c069040f524d9ea009ded635db21271) |
| 49 / 34 | 2026-11-04T12:20:44Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xbf9afa6e5fd58cda8b656e714ae368698d04b0e176460ee983e72a1ea90e30b9) |
| 50 / 35 | 2026-11-04T12:20:44Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x32c5af7599e0459cf07af2c3dc5acf19ee7b96f5867af3f33f4cfc0b45f7723b) |
| 51 / 36 | 2026-11-04T12:20:38Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x1ada1364b0d831b004675e1052d34d92154a95642d4559e7a311649e2da75fa1) |
| 52 / 37 | 2026-11-04T12:20:38Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x64b070f0d04bf4d6c6509c75c7232f9c6e98ce2bf1a6076e9eae12f99d0698d1) |
| 53 / 38 | 2026-11-04T12:20:39Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xb0d35e9550604954d6ddc235f4da08a766b7581b023eb2dfa1da97a4155cd773) |
| 54 / 39 | 2026-11-04T12:20:37Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x2a3cf34dea7fcb56eb8ef323eb65f35238b0aa14199ed3df11f66dc03731e72b) |
| 55 / 40 | 2026-11-04T12:20:38Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x2250857fa5603a50e930c03aff3beba24c05a8ea2d7d7212dce62a0ec598012f) |
| 56 / 41 | 2026-11-04T12:20:37Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x4a533563e703cf03bab83b03ec44450ac614f9b64d33ad197abacd704aedd4c3) |
| 57 / 42 | 2026-11-04T12:20:38Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x59ef489e0a821d5f2b931a9fc1a2387cf1bea71632cf357dac213bb4030911f5) |
| 58 / 43 | 2026-11-04T12:20:40Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xba84835b0ede244ef373e93d41ad3e268b54b353e811d947ff6e84e403631900) |
| 59 / 44 | 2026-11-04T12:20:39Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x1f5193abb3a8ac6070c43bb8162c1fd7d683887d804600c2bcb8b737558ba194) |
| 60 / 29 | 2026-11-04T12:22:13Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xe235dc2baa4fd7f12c0192c5486fbe01673d033f0bb83c4e13a4a69a8d5b81ac) |
| 61 / 30 | 2026-11-04T12:22:07Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x1f2acb308e66c0795afc08cce85c47f12fce4debff7c624fa91d419b4073a119) |
| 62 / 31 | 2026-11-04T12:22:14Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x51fd9e749fee78de092b23aac137bb112949f7e01131ec7055390d17eb0efd7a) |
| 63 / 32 | 2026-11-04T12:22:10Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x727d14296e923bc84da96359d888f58d78bef4bb1d6b5beee902618ba6583079) |
| 64 / 33 | 2026-11-04T12:22:17Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x40e911d52e52bca1367c618b335b8d2b17c56de2b4eb383a70de32b7a7f81d9c) |
| 65 / 34 | 2026-11-04T12:22:13Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x02e138fb9fe508237029f8295be71e30420f068bcdfb954de63cba1ae1144d67) |
| 66 / 35 | 2026-11-04T12:22:13Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x6c732eac129cafe67bcab0662b85f3b12b007838b873ebd5cd2d1a873f322806) |
| 67 / 36 | 2026-11-04T12:22:13Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x0f785e3715099916b959ea3edf28bce805684a3b0bfeca402dc511f50ed53819) |
| 68 / 37 | 2026-11-04T12:22:12Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x7300d36382b1470368361dc6a87425c86b62c5060efd56ffe07dd09cf94a3028) |
| 69 / 38 | 2026-11-04T12:22:08Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xa801c70589f3d459d36b2849a9b1fd811695da6065f9a7e1bc07c6a44e1c019a) |
| 70 / 39 | 2026-11-04T12:22:11Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xd4f31ea7f9eacac1fa79733a7b553adca3621cafe0d1480d594330707b55fbf6) |
| 71 / 40 | 2026-11-04T12:22:07Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xe7d740ddcd6aae499705a399957d865a5ff5606c21f951e0f073747282890627) |
| 72 / 41 | 2026-11-04T12:22:09Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xb824fcc27411e8694c389edc6c71f676cac727ccd29bf3f4e6b7887a04694876) |
| 73 / 42 | 2026-11-04T12:22:08Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x02e473541d5fc7d77fd0b38018f2a037f1ea1f7d335fd6e8944cf96dffa45cd2) |
| 74 / 43 | 2026-11-04T12:22:10Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x0171f182966724346e51234bcb5cfe28dd40a2d2fd754d86e71f0d0c70144e74) |
| 75 / 44 | 2026-11-04T12:22:12Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x026529d314b2d78b7a04568491941b44b56037e98c377560b6c6515ce5d15118) |
| 76 / 45 | 2026-11-04T12:22:14Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x1292b857c29f55bce650e5e39dbf3b4d63c0e4621e30be7c0750a61cfaada761) |
| 77 / 46 | 2026-11-04T12:22:16Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x1a331315f6af37c2521d242a09b08ac64c7b0824dad0478a9c5f9601b6c395ad) |
| 78 / 47 | 2026-11-04T12:22:15Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x5b14416cd32b506a9751bde8387868d87b77825f422b32d37942a505a968f33c) |
| 79 / 48 | 2026-11-04T12:22:16Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x5376525457bada53a63bbe6b29bc255a9bef57a3960102c907a8e86a8bea2cc8) |
| 80 / 49 | 2026-11-04T12:22:14Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xf2fafb9ef056102e5f337c0073f2c23058fa145e885863fd69bf4544da68f29c) |
| 81 / 50 | 2026-11-04T12:22:16Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x8532060a787443afeddd5a3a6562e3699d4018493f8104bd599bb213a2795ae5) |
| 82 / 51 | 2026-11-04T12:22:16Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x3c80bef51dfdb2077131687a1cf74620db13fb77bb99873709abd4cb6fec4ce6) |
| 83 / 52 | 2026-11-04T12:22:15Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xc03fed89cdd3da7c1e0d331dc525961793eb4559e54a9d485d760ecd5a508e8e) |
| 84 / 29 | 2026-11-04T12:23:46Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x4fe28af1327d1f33cae302cfbdfbfc8be48a4ee67ee086435566152e568ea1f3) |
| 85 / 30 | 2026-11-04T12:23:40Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xa855800fa37b88c275171f90f74e31aee91abde9fd8fdc2a1f2cf8a67256cf31) |
| 86 / 31 | 2026-11-04T12:23:47Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x4b06955d03c32ced053242521b397979813b3bfbcd9dddd9728c6f7eb56e024e) |
| 87 / 32 | 2026-11-04T12:23:42Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x072b6733219877b92440e366165c749f4e82d156a6b5fc32e7fadc40753100ca) |
| 88 / 33 | 2026-11-04T12:23:52Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x8fd5fcd1b7eba927bbb1e0b750703cef2aa1c066cac2b2acd8841734afa51239) |
| 89 / 34 | 2026-11-04T12:23:48Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x8b63d1bac3e239855714b06bbd582a999746b7aa7753a8a215ce752acefd5474) |
| 90 / 35 | 2026-11-04T12:23:45Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x6e9e29551e6f0ac48414569a12c436f1c16d9dd244522b9b2696044d07dd17fc) |
| 91 / 36 | 2026-11-04T12:23:50Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x6203e9e1299491010e8c465054ec4e33441067f462faec47e7fc267a98d7a463) |
| 92 / 37 | 2026-11-04T12:23:44Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xb9acd688a671232bfb9745ca15ad9606702a17d69cd4c48019d0bd377cf1899d) |
| 93 / 38 | 2026-11-04T12:23:44Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xb0a6a206864e46b6914474e850701b54c0c2d8a7c2318c39faec2716e5ab77e2) |
| 94 / 39 | 2026-11-04T12:23:41Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xdbae4574a14b0ca46b78caf8ceec427956a022578bb0db16a35c94796ade96b3) |
| 95 / 40 | 2026-11-04T12:23:42Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x414257ca5f8b1aaeb3b6695822217cef5815815048731ba5f28fc31547d3d7a8) |
| 96 / 41 | 2026-11-04T12:23:41Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x5dbb8515e45ec58bb9095cfb7acf3090c2cfb10d35131c091ce831af2844373a) |
| 97 / 42 | 2026-11-04T12:23:41Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x5c9dbde2ca5dcb6f3dcfe1c16a96be1341aa920364c8554e0c1ecec8de5803ae) |
| 98 / 43 | 2026-11-04T12:23:41Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xd99ba75aedae722a5c1de3831f661f64c78df87e475e5c8282e03f8b84f9bd2f) |
| 99 / 44 | 2026-11-04T12:23:43Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xd0f244628a29a570c86bd179fe72bfc55ad6b5c892baa912ddf790d8a871a792) |
| 100 / 45 | 2026-11-04T12:23:49Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x6319549ef445ce7d34e8cfd2f0cc7ee2341a0b643fea021ea9f1d4570007716e) |
| 101 / 46 | 2026-11-04T12:23:49Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x341d18b9fef580c5e9942c872e5436080979fd6333dc1c2384a5b2cb8cac3c3a) |
| 102 / 47 | 2026-11-04T12:23:49Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xa7bdff246d50c02f24051de09b79b2ac8e51153c82a43518f239e697e788f087) |
| 103 / 48 | 2026-11-04T12:23:51Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xed1dffa83d9addb8cb2858ebf38f0066ebf20974cb443e0bb609f8949feb03a6) |
| 104 / 49 | 2026-11-04T12:23:46Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x6af489219c3baad23138c289d398a0130b1b4dc6dfd43d331631ad1543e21752) |
| 105 / 50 | 2026-11-04T12:23:48Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x5d2860229538861cdf1eecf6bafa70c3208ea4b86133c96e1bec39dc9e1fde28) |
| 106 / 51 | 2026-11-04T12:23:46Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x778becbcff9cb4a0884b65cbfb3c76f4c5b4ba6882efa2dcfcc363ff9891cef9) |
| 107 / 52 | 2026-11-04T12:23:50Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xbce31053b2d8ecca6d38e2239c0d817614a1502eb389c632e833c756489bca24) |
| 108 / 53 | 2026-11-04T12:23:51Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x61b50dd2deabdc8c0d14491d7f17b06490b2195b366c30085f4898584ba5d138) |
| 109 / 54 | 2026-11-04T12:23:51Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xccbfad0dd303db653038e0a904fc33bda53cc0383908a83f64011fdea647d84c) |
| 110 / 55 | 2026-11-04T12:23:50Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x0ff508af87b90e0afe1d665473fb9774a7dee6c6cb09f9be8c134471bc578ac9) |
| 111 / 56 | 2026-11-04T12:23:49Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x89589ed10302e65878886006218ef315523b191bcbc9168f5c5cfa088612d0e4) |
| 112 / 57 | 2026-11-04T12:23:48Z | Sell 0.0025 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x1fe5bab2000476b7a0bd3c997d657d6726fb703a11b92bef22a87904693666b3) |
| 113 / 58 | 2026-11-04T12:23:50Z | Sell 0.003 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xf99d9adca59ba04926c354e897fdeefedc11fe36a0951a63e57de222c145142b) |
| 114 / 59 | 2026-11-04T12:23:49Z | Sell 0.0035 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x594ca7ed69ced2a772de1242bb75f7cfbeab7688d17e4526178cf0c3e39ca420) |
| 115 / 60 | 2026-11-04T12:23:51Z | Sell 0.004 SOL to USDC; self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x86e014f3da8fbc44fe62b5603e7787ff6606053ca2e81877c59270f53a7ec799) |

All joined candidate simulation failures (one row per candidate, not double-counted with its bundle diagnostic):

| UTC timestamp | Auction / solution | Error | Affected selected orders / final API state |
| --- | --- | --- | --- |
| 2026-11-04T12:16:30Z | 525466 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x398ce306fbd33c4d2d0e9ba03ecb01d692a0a64d9d16e4a8a8bcd563e4d29de3) cancelled |
| 2026-11-04T12:16:30Z | 525466 / 3 | SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x87d2b074d9886c08657e24a035ae4fe865c16b6c1a6b2dfe008811bf7fecff99) fulfilled |
| 2026-11-04T12:16:30Z | 525466 / 4 | SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0xe9b52b05adc136780712580020218d3ed2920eb2879a7343fa564f6a102cc243) fulfilled |
| 2026-11-04T12:16:30Z | 525466 / 5 | SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0xed3e8e0b1be5ee1559ff03b4e794ae7301f690ccb31e586edd06c86f5680aaf8) fulfilled |
| 2026-11-04T12:16:40Z | 525468 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x398ce306fbd33c4d2d0e9ba03ecb01d692a0a64d9d16e4a8a8bcd563e4d29de3) cancelled |
| 2026-11-04T12:16:50Z | 525470 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x398ce306fbd33c4d2d0e9ba03ecb01d692a0a64d9d16e4a8a8bcd563e4d29de3) cancelled |
| 2026-11-04T12:17:00Z | 525472 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x398ce306fbd33c4d2d0e9ba03ecb01d692a0a64d9d16e4a8a8bcd563e4d29de3) cancelled |
| 2026-11-04T12:17:10Z | 525474 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x398ce306fbd33c4d2d0e9ba03ecb01d692a0a64d9d16e4a8a8bcd563e4d29de3) cancelled |
| 2026-11-04T12:17:15Z | 525475 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x398ce306fbd33c4d2d0e9ba03ecb01d692a0a64d9d16e4a8a8bcd563e4d29de3) cancelled |
| 2026-11-04T12:17:20Z | 525476 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x398ce306fbd33c4d2d0e9ba03ecb01d692a0a64d9d16e4a8a8bcd563e4d29de3) cancelled |
| 2026-11-04T12:17:24Z | 525477 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x398ce306fbd33c4d2d0e9ba03ecb01d692a0a64d9d16e4a8a8bcd563e4d29de3) cancelled |
| 2026-11-04T12:20:39Z | 525515 / 0 | Settlement(LimitPriceViolated(0x76ec05c2e2e0318451978adf03ed9cf2f71335de4a77c31d310ce95821a41965)) | [Debug](https://debug.barn.cow.fi/order/0x1f5193abb3a8ac6070c43bb8162c1fd7d683887d804600c2bcb8b737558ba194) cancelled |
| 2026-11-04T12:24:00Z | 525556 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x473a64c7a412959febdbd81559de7597b207504eb965a42bbeb9dcf4d2a63af8) cancelled |
| 2026-11-04T12:24:00Z | 525556 / 3 | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0xc12ecbf5379561abba33dd19b0d0e75e035f4bbbba8af54e4fe0eadb64451665) cancelled |
| 2026-11-04T12:25:10Z | 525570 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x650336c859b2cd554c574c20f369e66412059a26f2deca410661787c30e5e555) cancelled |
| 2026-11-04T12:30:15Z | 525631 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:30:20Z | 525632 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:30:25Z | 525633 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:30:30Z | 525634 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:30:35Z | 525635 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:30:40Z | 525636 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:30:45Z | 525637 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:30:50Z | 525638 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:30:55Z | 525639 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:31:00Z | 525640 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:31:05Z | 525641 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:31:10Z | 525642 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |
| 2026-11-04T12:31:15Z | 525643 / 1 | SimulationFailed { err: UiTransactionError(InstructionError(5, InvalidAccountData)), program_error: None } | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) cancelled |

All final-settlement failures joined by auction and solution:

| UTC timestamp | Auction / solution | Error and verified stage | Order / final state |
| --- | --- | --- | --- |
| 2026-11-04T12:16:41Z | 525468 / 4 | Reverted { err: InstructionError(5, Custom(6001)) } | [Debug](https://debug.barn.cow.fi/order/0xe9b52b05adc136780712580020218d3ed2920eb2879a7343fa564f6a102cc243) fulfilled |
| 2026-11-04T12:16:51Z | 525470 / 4 | Reverted { err: InstructionError(5, Custom(6001)) } | [Debug](https://debug.barn.cow.fi/order/0xe9b52b05adc136780712580020218d3ed2920eb2879a7343fa564f6a102cc243) fulfilled |
| 2026-11-04T12:17:10Z | 525474 / 3 | SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) } | [Debug](https://debug.barn.cow.fi/order/0x87d2b074d9886c08657e24a035ae4fe865c16b6c1a6b2dfe008811bf7fecff99) fulfilled |

Cleanup (excluded from main totals; **Ownership unknown**):

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 30 | 2026-11-04T12:24:00Z | Sell raw 277346 EPjFWd to at least raw 2947650 native SOL; self-paid | cleanup timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xc12ecbf5379561abba33dd19b0d0e75e035f4bbbba8af54e4fe0eadb64451665) |
| - / 32 | 2026-11-04T12:24:00Z | Sell raw 370092 EPjFWd to at least raw 3936155 native SOL; self-paid | cleanup timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x473a64c7a412959febdbd81559de7597b207504eb965a42bbeb9dcf4d2a63af8) |
| - / 29 | 2026-11-04T12:25:10Z | Sell raw 231029 EPjFWd to at least raw 2453428 native SOL; self-paid | cleanup timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x650336c859b2cd554c574c20f369e66412059a26f2deca410661787c30e5e555) |
| - / 32 | 2026-11-04T12:30:15Z | Sell raw 370092 EPjFWd to at least raw 2455472 native SOL; self-paid | cleanup timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) |

All 6 placed cleanup orders across this run were cancelled after timeout. Bundle diagnostics show 3 initial USDC-to-SOL cleanup UIDs failing Jupiter `Custom(6001)`; later cleanup for USDT, JUP and retried USDC also failed `InvalidAccountData` in Token Program or Jupiter, and `Custom(15)` in the settlement program. Programs differ, so these are separate mechanisms. Original bundle diagnostics retain empty `Some([])` logs for these failures; account contents and instruction payloads were not recovered. High confidence in the failed stage, low confidence about account closure versus wrong account/program selection. The same balances had valid buy-side main/acquisition fills, which does not validate reverse native SOL payouts. First check: CoW + Paradox settlement integration should compare account lifetimes, mint/program ownership and native-SOL handling in the original failed payload; test team owns safe balance reconciliation. Do not infer an autopilot defect or burn funds. Cleanup journal reports leftover 0.463833 USDT, 0.743006 JUP, and 0.231029/0.277346/0.370092 USDC across 5 wallets; these are saved leftover balances, not a current-wallet audit.

</details>

## 4. Token coverage

**Token coverage was not achieved.** None of the 37 fixed-input sells or 15 exact-output buys completed, and accepted token-section orders were eventually cancelled.

<details>
<summary>Order evidence and metrics</summary>

Completed / scheduled: 0/52. Filled / placed main orders: 0/25. Total main settlement transactions: 0. Median / longest fill: unavailable, no main fills.

Successful token-section fixed-input sells: none. Successful token-section exact-output buys: none. The SOL to JUP acquisition in Standard pairs is separate setup evidence and is not token-section coverage. The selected token scenario contains 37 distinct output tokens; 12 sponsored sells failed POST, 25 self-paid sells placed and timed out, and 15 exact buys failed quoting before placement. Supported zero-fee Token-2022 requests are retained; no nonzero-fee exclusion is added. Symbols below come from selected scenario notes; an uncertain symbol remains a mint link.

Evidence timestamps below use placement for successful rows and the first recorded failed attempt where joined, otherwise the row-failure observation. Displayed timestamps are rounded down to seconds; original artifacts retain exact timestamps. `timeout` is the simulator status; API `cancelled` is the later saved state.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 119 / 64 | 2026-11-04T12:27:12Z | Sell 0.01 SOL to [pumpCm...](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xb002f7a33f2d8f5a591ed96009047ccc481cfc817b5f08c62d4ca3c0f6fc4653) |
| 123 / 68 | 2026-11-04T12:27:13Z | Sell 0.01 SOL to [XsoCS1...](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xe5e2de1a2e69f3fa6d6e370c96f26f2a84e11a1073b93b1bbd95ed6516f1457c) |
| 127 / 72 | 2026-11-04T12:27:13Z | Sell 0.01 SOL to [MUxEsU...](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xaaf4d2e42d795989c9dd9dd4dcd3692efc7951c1eb2fc323bb1e52f29fba6a0c) |
| 131 / 76 | 2026-11-04T12:27:15Z | Sell 0.005 SOL to [DezXAZ...](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x837274124dab9b430697c64d96ef3807fbfc13ea1506d491c778ebc855723169) |
| 132 / 77 | 2026-11-04T12:27:15Z | Sell 0.005 SOL to [EKpQGS...](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xfed5a8ff1de755c1dc0ef7ce5e167f17d3a4663be2f8cff0ed7ba4235385067a) |
| 133 / 78 | 2026-11-04T12:27:13Z | Sell 0.005 SOL to [7GCihg...](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xdf3cd57f032be2de94819cc218add5aa94408cc6de1516520e2c15434a76961d) |
| 134 / 79 | 2026-11-04T12:27:16Z | Sell 0.005 SOL to [J1toso...](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xc366b84e1520d2c1cbf6d107c214148069ecfe169f89ad7453a52cd099d3546d) |
| 135 / 80 | 2026-11-04T12:27:16Z | Sell 0.005 SOL to [mSoLzY...](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x8071aec0aab719e8cbd46dba4e6eccf8dde6435216db87f346f8531ede5a9058) |
| 136 / 81 | 2026-11-04T12:27:19Z | Sell 0.005 SOL to [jupSoL...](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x632c6cd87cf8b606585e41b59df49998689346e3b82873c9a2de5a663df3e6b9) |
| 137 / 82 | 2026-11-04T12:27:16Z | Sell 0.005 SOL to [cbbtcf...](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x273adcae2717bc50d5c21cbd033957b6ce5f285a7e971c12dc7b760ac74ebc7e) |
| 138 / 83 | 2026-11-04T12:27:15Z | Sell 0.005 SOL to [DEkqHy...](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x4ba4c991c537a3f748e2b4ebb05a60db0e07720bee09dd1f4680b0fa5e5daaa8) |
| 139 / 84 | 2026-11-04T12:27:20Z | Sell 0.005 SOL to [HzwqbK...](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xcb92633f655b419ab8157056f611b570f50053e2b104d48a74fd514f597a839a) |
| 140 / 85 | 2026-11-04T12:27:25Z | Sell 0.005 SOL to [A1KLoB...](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x91d392e2706188fbd27d2075e8678c114a31d09f029a7c83637ee59806f1b021) |
| 141 / 86 | 2026-11-04T12:27:22Z | Sell 0.005 SOL to [27G8Mt...](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x0ac42549260a5e241c37132900e16d141edfb5c5a800cbf1e005a98885cf56a2) |
| 142 / 87 | 2026-11-04T12:27:20Z | Sell 0.005 SOL to [5oVNBe...](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x3688807c0a2f94c2eb3b5f5f38137dbe528a537d8622578a55b748fc02651b30) |
| 143 / 88 | 2026-11-04T12:27:16Z | Sell 0.005 SOL to [7vfCXT...](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x87e6eeded7678175fc00ce6fc165577f8a44c2e792bf6c8884309100fc71786a) |
| 144 / 89 | 2026-11-04T12:27:19Z | Sell 0.005 SOL to [9gP2kC...](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x87071a261c74f03c639a85b8b15602a66f01b473c67cec3ddcade504f4f3ee10) |
| 145 / 90 | 2026-11-04T12:27:19Z | Sell 0.005 SOL to [AymATz...](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x7f177a3a2ecb808bdcdb866b2503015d052d89b113a1016a153bfcc90e3079dd) |
| 146 / 91 | 2026-11-04T12:27:24Z | Sell 0.005 SOL to [Xsv9hR...](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x4140838a43a6dda05ca4d1cb908ff6411da7e0067741809e93d7f911084b5b33) |
| 147 / 92 | 2026-11-04T12:27:22Z | Sell 0.005 SOL to [euro5s...](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x7d178210503ec230147b77312f529bd95a3c90c7000d89fcbcbd10c226fca680) |
| 148 / 93 | 2026-11-04T12:27:23Z | Sell 0.005 SOL to [9BB6NF...](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x46e0b4c9b64b5317c9be9aa2395e69ffb4a41beb13bd3ba1b72f07e430400ae9) |
| 149 / 94 | 2026-11-04T12:27:22Z | Sell 0.005 SOL to [MEW1gQ...](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x89d036437e2d78edfc0adbd91e5dc705ac63a658db92b47212511057fed999de) |
| 150 / 95 | 2026-11-04T12:27:21Z | Sell 0.005 SOL to [ukHH6c...](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x39153a452a6824c74c00413fbcff2c03289eb26257a0d61c164ac3c25d010d5e) |
| 151 / 96 | 2026-11-04T12:27:23Z | Sell 0.005 SOL to [hy1oXY...](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0x917dfacb04f8846e79e0a44bf7435fb5759e1618a2c6eed4c5bf64942451a0d9) |
| 152 / 97 | 2026-11-04T12:27:24Z | Sell 0.005 SOL to [pSo1f9...](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL); self | main timeout; API cancelled | [Debug](https://debug.barn.cow.fi/order/0xaf745f062884c9690be065af11f03220f4c2dd95b7737ade3d0084b2078a3de0) |

</details>

## 5. Separate smoke

**The smoke goal was not achieved.** All 6 flows stopped before main placement, so no settlement or account-mode support was tested.

<details>
<summary>Order evidence and metrics</summary>

Completed / scheduled: 0/6. Placed main orders: 0. Total transactions: 0. No fill timing. `finished=true`; cleanup swept 0.05 SOL per trader less fees and reported no leftover tokens. No `report.md`, `orders.json` or `txs.json` exists for this smoke, so its absence is stated rather than treated as an empty API snapshot.

**Quote failure - Ownership unknown.** Original API records name Paradox as quote driver and retain `{"kind":"QuotingFailed","description":"No valid quote found"}` at 2026-11-04T12:07:10Z and 12:07:12.887238003Z, among others. The first placed-attempt request is sponsored 0.01 native SOL to USDC (10,000,000 raw lamports); it returns `404 NoLiquidity` at quote stage, not a rejected settlement. There are 9 provider no-quote records during smoke and cleanup, not 9 distinct failed main flows. All 6 row failures retain the same no-route API wrapper; 2 occur during prerequisite JUP acquisition. High confidence in provider/stage, low confidence in cause: engine response body and driver verification decision are absent. Native-mint normalization, minimum-size economics and quote validation remain alternatives. Later composite sells filled with a different quote provider, so they are not a matched Paradox quote control. First check: Paradox + CoW quote integration should recover the original quote-engine input/output for the 0.01 SOL sell and the 2 JUP exact buy; validate units, native-SOL normalization and fee deduction offline before choosing an authorized follow-up. No rate limit or permanent token-support failure is established.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-11-04T12:07:12Z | Sell 0.01 SOL to USDC; sponsored | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 2 / 2 | 2026-11-04T12:07:12Z | Buy exactly 2 JUP, paying SOL; sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 3 / 1 | 2026-11-04T12:07:13Z | Buy exactly 1 JUP, paying USDC; sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 4 / 2 | 2026-11-04T12:07:23Z | Sell 1 JUP to wSOL; sponsored | acquire JUP quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 5 / 1 | 2026-11-04T12:07:24Z | Sell 0.5 JUP to SOL; self | acquire JUP quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 6 / 2 | 2026-11-04T12:07:23Z | Buy exactly 1 USDT, paying USDC; sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |

</details>
