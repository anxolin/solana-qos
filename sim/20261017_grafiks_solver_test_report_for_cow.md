> **Adjusted composite results (20 October): 190/194 eligible flows filled (97.94%). 3 unsupported transfer-fee rows excluded.** The detailed report below retains historical raw counts. Use the [recalculated full report](../sessions/2026-10-17-08-53-composite-grafiks-run/solver_test_report.md) for scoring.

# Grafiks solver test report

Date: 17 October 2026. Environment: staging / Barn, Solana mainnet. Scenario trading: 08:54:44–09:19:12 UTC. Snapshot fetched 09:34:42 UTC.

**TLDR:** 190 of 197 planned trades filled, including all 190 placed orders and all 8 fresh-account trades. Seven trades stopped before placement, including 3 expected rejections, and final cleanup is still pending for 1 wallet. Review the recovered swap failures and the remaining quote, creation and cleanup errors.

Scenario orders settled in 101 transactions. Median / longest fill: 9.782 / 50.861 seconds, including polling; cleanup is excluded.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. 25 same-direction sells | Achieved: batching; 25/25 placed filled | Solver: review rejected swap candidates |
| 2. Sell bursts | Achieved: burst clearing; 84/84 placed filled | Test team: measure sustained arrivals |
| 3. Opposing orders / CoW | Not achieved: direct matching; 15/15 placed filled | Solver: review direct-match selection |
| 4. Token coverage | Inconclusive: full coverage; 48/55 planned filled | Trace PAID, USDG and TSLAx exact-buy quotes |
| 5. Transaction size | Inconclusive: below target; 10/10 placed filled | Test team: build 1200–1233-byte cases |
| 6. Fresh receiving accounts | Achieved: initially missing accounts; 8/8 filled | Test team: isolate solver-paid account rent |

## Changes since 16 October 2026

Across the same 5 scenarios, completed flows rose from 147/189 to 182/189; the 8 fresh-account trades are new coverage.

<details>
<summary>Comparison with the previous run</summary>

Baseline: the 16 October staging Grafiks run (09:40 session). Counts and timing were checked against its original artifacts.

| Metric | 16 October | 17 October, matching scenarios |
| --- | --- | --- |
| Completed flows / planned | 147/189 | 182/189 |
| Filled / placed scenario orders | 147/186 (6 extra acquisition orders) | 182/182 (no extra acquisitions) |
| 25 sells: settlements; median / max seconds | 9; 25.591 / 70.512 | 6; 13.316 / 26.041 |
| Bursts: settlements; median / max seconds | 22; 10.682 / 31.848 | 23; 12.761 / 41.888 |
| Opposing flows filled | 0/15 | 15/15; no direct matching |
| Token inbound sells / exact buys filled | 25 / 3 | 36 / 12 |
| Size: settlements; full bytes | 6; 773–1129 | 4; 773–1140 |
| Winning failed attempts / affected orders | 7 / 15 | 15 / 19 (9 main, 10 cleanup) |
| Other rejected candidates | 17 | 79 in shared scenario windows; 80 full run |
| Before-placement failures | 3 expected rejections | 3 expected + 4 other failures |
| Sponsored creation expiries | 39 | 0 |

Batching and burst completion stayed at 25/25 and 84/84. Account preparation and creation outcomes changed, so timing does not isolate solver speed; polling is included in both runs.

**Newly recorded error types versus that baseline:** `404 Not Found: NoLiquidity: no route found` on 3 exact buys and 1 cleanup quote (no UIDs); `BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one` on row 137 ([Debug](https://debug.barn.cow.fi/order/0x3cdd8230f0f8091b65ca4c4e27f7c52da7c7a772af8b7cf61bdd21c9eec5bc57)); and 6 `ProgramFailedToComplete` candidate rejections. Ownership/cause remains unknown for these cases.

**Newly affected orders:** all 19 minimum-output failure UIDs below are new to this run and later filled; Jupiter `6001 SlippageToleranceExceeded` and Titan `6008 LessThanMinimumAmountOut` were already present.

Also newly recorded here: 1 RPC `excluded from account secondary indexes` cleanup failure (recovered), 1 `invalid account data for instruction` reclaim rejection ([Debug](https://debug.barn.cow.fi/order/0xe1aaac3063cfd41bfc42475a906fe9a035f7cd1d2696de2420febafaff15f276), skipped), and 1 `InsufficientFundsForRent` final sweep (pending). Expected transfer-fee rejections stayed at 3.

Examples now filled where the earlier flow expired; the requested amounts are unchanged:

| Row | Trade | Before → after | Debug tool URL |
| --- | --- | --- | --- |
| 110 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 2.6 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | Expired before creation → fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6bd786ac048e4ea31368040a7bbeb650979a2809efe816ee9949bbbfd9630769) |
| 170 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | Expired before creation → fulfilled | [Debug](https://debug.barn.cow.fi/order/0x702d84ac23931d3bdcf8cf804a4ea0820300b963c8e75c491c070f908e5725e4) |
| 177 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | Expired before creation → fulfilled | [Debug](https://debug.barn.cow.fi/order/0x752a4fb368e4d3c81d55240801f7706221e797053a49740a027457801a053e28) |

Missing earlier errors in this snapshot does not prove a permanent fix.

</details>

## 1. 25 same-direction sells

**Batching was achieved.** All 25 sells filled in 6 transactions, with batches of up to 5.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 6. Median / longest fill: 13.316 / 26.041 seconds.

Transaction totals count distinct successful settlements of scenario orders, including the 6 explicit setup buys in scenario 3; creation, funding, failed attempts and cleanup are excluded. Fill times run from simulator placement to observed fulfillment, including polling; only filled orders contribute. Successful examples use placement timestamps; errors use the first failure record. Native SOL is wrapped for on-chain orders; SOL token links point to that wrapped mint.

Planned rows: 25; placed / filled scenario orders: 25 / 25.

Setup: 25 self-paid sells of 0.005 SOL → JUP, scheduled together. Batch distribution: 4 transactions of 5 orders, 1 of 4 and 1 single. Shared signatures establish batching; proportional payouts and single-order price protection were not independently established.

Grafiks participation is confirmed in staging competition records: 571 proposals, 199 wins, 184 submissions and 184 observed settlements. These are window-wide counters, including cleanup and potentially other activity, not the 101 main scenario transactions.

Across this run, 15 failed winning attempts affected 19 distinct orders (9 scenario + 10 cleanup); all later filled. Six failed driver simulation; 9 passed driver simulation and then failed on chain. Verified failing programs were Jupiter (6001 SlippageToleranceExceeded) and Titan (6008 LessThanMinimumAmountOut, “Amount less than minimum specified.”): a swap returned less than its required minimum. Quote age, limits and execution changes still need investigation; this alone does not prove a solver code defect. Nine deadline warnings are not extra attempts or proof of a late response.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 08:54:49.530Z | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | None; fulfilled.  [Settlement](https://solscan.io/tx/2rKErpb8T17Y9GZ29kztyNmUwsxYS2CyCPdWBREEza642dnJNSXi3yAQp2Hvqac2rmLKKPyaSc9o4nKfJtgAk5Gg) | [Debug](https://debug.barn.cow.fi/order/0xa6487205aaecbca6ff048cbe352dcac468e8ac8062bf28b24327258a20d595a2) |
| 2 / 2 | 08:54:49.836Z | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | None; fulfilled.  [Settlement](https://solscan.io/tx/432MQYMxYzfsoTWAwBkwPXyDK5L6bpaCLtDg4yuQriGPue6hSNxdoDq7x1AWsC3e7BnbgFFqkfLpLFZjWx2sn6i5) | [Debug](https://debug.barn.cow.fi/order/0x4414ee55324f24cedc0c410a07782ca4297fae8ae35a970943f23b8897b868c0) |
| 25 / 25 | 08:54:56.313Z | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | None; fulfilled.  [Settlement](https://solscan.io/tx/4c2ZtxN8jLxRtiWGtbWX7FeBGNyyLtPQs2bTzdMgSCxGBRo77J2k9YV4yz1NKrVGTURYfeA46g5fmv4E5gF22eh6) | [Debug](https://debug.barn.cow.fi/order/0xb9980a6e0eebd6251a3e64bbe1a321e1afbda81811a7a435f2041c269e0db88d) |
| — / 12 | 08:55:58.131730511Z | Sell 0.633982 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (native) (cleanup) | Driver simulation rejected the swap: Jupiter 6001 SlippageToleranceExceeded; auction 296239, solution 2; failure at 08:55:58.131730511Z. Saved error: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Filled later at 08:56:07.289Z. [Successful settlement](https://solscan.io/tx/3uWr7PUQVYGegcM7TcPJryuxRwXycAidL4Mbm5VvohbfH1nP5N6cUncj45UHZbrCZtusnEb4ZxPujJtvn7EDv8bp) | [Debug](https://debug.barn.cow.fi/order/0xa10797bb390fb105cb03b7ea3cea1268ab2a3e1b81c894e6f7cc134c552f9192) |
| — / 5 | 08:55:23.641Z | Sell 1.730864 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → SOL (native), cleanup | **Ownership unknown.** Quote failed: `404 Not Found: NoLiquidity: no route found`. No order placed on this attempt; 1.730864 JUP initially remained. A later cleanup sold it successfully at 09:22:52 UTC. | No order ID: quote failed before placement |
| — / 15 | 08:56:45.102Z | Token-account scan for cleanup | RPC restriction: `failed to get token accounts owned by account CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT: CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT excluded from account secondary indexes; this RPC method unavailable for key`. Recovered: later cleanup finished at 09:22:24 UTC. | No order ID: RPC account scan failed |

Cleanup can sell balances already in a wallet, so its token pair can differ from the scenario pair.

**Other rejected candidates: 5.** These were rejected before selection and are separate from the 15 winning-attempt failures. Rows group only identical errors in one auction; every solution ID is retained. Each candidate was rejected before submission; its order IDs were not recorded. Groups sit under the scenario's time window, including cleanup, without claiming which orders they contained.

| UTC timestamp | Auction | Solution IDs | Count | Exact error / failing program | Debug tool URL |
| --- | --- | --- | --- | --- | --- |
| 08:54:55.847148997Z | 296226 | 1 | 1 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 08:54:59.831330691Z | 296227 | 0, 12 | 2 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 08:54:59.831402672Z | 296227 | 6, 8 | 2 | Titan: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6008))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |

</details>

## 2. Sell bursts

**Burst clearing was achieved.** All 84 sells filled across 5 waves; pauses between waves mean this does not establish sustained throughput.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 23. Median / longest fill: 12.761 / 41.888 seconds.

Planned rows: 84; placed / filled scenario orders: 84 / 84.

Setup: 4, 8, 16, 24 and 32 orders at 90-second intervals, each selling 0.0025–0.004 SOL → USDC. Batches: 13 of 5, 1 of 4, 3 of 3 and 6 singles.

| Wave orders | First placement → last observed fill (seconds) |
| --- | --- |
| 4 | 10.786 |
| 8 | 10.274 |
| 16 | 21.213 |
| 24 | 32.963 |
| 32 | 44.084 |

These clearing times include placement spread and polling, and differ from individual order fill times. Swap count, proportional payouts and price guards were not independently established.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 26 / 26 | 08:57:34.963Z | Sell 0.0025 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled.  [Settlement](https://solscan.io/tx/2roqaE2uMnv1uhdNzW6tsyzk3ye2Sbo2hBXjv9HzhrRhUcV7ApnLguHLvMbe6rn3MwWkk6ey8hnYthPzedUwqZUq) | [Debug](https://debug.barn.cow.fi/order/0x336340996c9af33cbf0b0d82746e34ef33459b41cb9bc3056db202cbf0290572) |
| 29 / 29 | 08:57:36.607Z | Sell 0.004 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled.  [Settlement](https://solscan.io/tx/2roqaE2uMnv1uhdNzW6tsyzk3ye2Sbo2hBXjv9HzhrRhUcV7ApnLguHLvMbe6rn3MwWkk6ey8hnYthPzedUwqZUq) | [Debug](https://debug.barn.cow.fi/order/0x7bb1f201e2f89d80b76f1b0107a73f1694e53efad1a9655bdbcb0699dad5678e) |
| 82 / 30 | 09:03:59.584573241Z | Sell 0.0025 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | Driver simulation rejected the swap: Jupiter 6001 SlippageToleranceExceeded; auction 296335, solution 86; failure at 09:03:59.584573241Z. Saved error: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Filled later at 09:04:06.144Z. [Successful settlement](https://solscan.io/tx/NK6vV4EY4f5md5Kv5RHWrreMZHxwJR8RQhYGMin6bAcemGDikbET3BzRaFjXoCQEQkSNyidHF6ET44dQSYVrBhG) | [Debug](https://debug.barn.cow.fi/order/0x6afdc8c9587de4242afad1b78f2651d1fc7bc92431ac52c7f5e8ed890771d71d) |
| 93 / 41 | 09:03:59.584573241Z | Sell 0.004 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | Driver simulation rejected the swap: Jupiter 6001 SlippageToleranceExceeded; auction 296335, solution 86; failure at 09:03:59.584573241Z. Saved error: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Filled later at 09:04:07.511Z. [Successful settlement](https://solscan.io/tx/NK6vV4EY4f5md5Kv5RHWrreMZHxwJR8RQhYGMin6bAcemGDikbET3BzRaFjXoCQEQkSNyidHF6ET44dQSYVrBhG) | [Debug](https://debug.barn.cow.fi/order/0x6db9cfe643320ce9f5eca2650c42bdc7c3f05d86528468e3d7fac14d7005fd2e) |
| 96 / 44 | 09:03:59.584573241Z | Sell 0.0035 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | Driver simulation rejected the swap: Jupiter 6001 SlippageToleranceExceeded; auction 296335, solution 86; failure at 09:03:59.584573241Z. Saved error: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Filled later at 09:04:07.263Z. [Successful settlement](https://solscan.io/tx/NK6vV4EY4f5md5Kv5RHWrreMZHxwJR8RQhYGMin6bAcemGDikbET3BzRaFjXoCQEQkSNyidHF6ET44dQSYVrBhG) | [Debug](https://debug.barn.cow.fi/order/0x64499d384478401cf247be413d3dc1f948b7eb2dbb8b44c4459474a84b233f19) |
| 107 / 55 | 09:03:59.584573241Z | Sell 0.003 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | Driver simulation rejected the swap: Jupiter 6001 SlippageToleranceExceeded; auction 296335, solution 86; failure at 09:03:59.584573241Z. Saved error: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Filled later at 09:04:05.471Z. [Successful settlement](https://solscan.io/tx/NK6vV4EY4f5md5Kv5RHWrreMZHxwJR8RQhYGMin6bAcemGDikbET3BzRaFjXoCQEQkSNyidHF6ET44dQSYVrBhG) | [Debug](https://debug.barn.cow.fi/order/0x6def2a8a372f017e1541ddeddbe0275f50677cf314a4a08f6f0789cd9e8e6a6f) |
| 109 / 57 | 09:03:59.584573241Z | Sell 0.004 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | Driver simulation rejected the swap: Jupiter 6001 SlippageToleranceExceeded; auction 296335, solution 86; failure at 09:03:59.584573241Z. Saved error: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Filled later at 09:04:05.847Z. [Successful settlement](https://solscan.io/tx/NK6vV4EY4f5md5Kv5RHWrreMZHxwJR8RQhYGMin6bAcemGDikbET3BzRaFjXoCQEQkSNyidHF6ET44dQSYVrBhG) | [Debug](https://debug.barn.cow.fi/order/0x63a6e9076116632aa725552a5fc75893028ded8d61b3f475547444a54b3de393) |
| — / 38 | 09:05:09.217870244Z | Sell 0.785981 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (native) (cleanup) | On-chain swap failed its minimum output check: Titan 6008 LessThanMinimumAmountOut; auction 296349, solution 1; failure at 09:05:09.217870244Z. Saved error: `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(3, Custom(6008))) } }`. [Failed transaction](https://solscan.io/tx/51JSYTy1C53Wdb9fguLc2h15cWvuW74yvWR8Evnv6kPADjaRRhkehF7R7KnequY2M7w9hnf973mzGHDC88GonbD1) Filled later at 09:05:50.379Z. [Successful settlement](https://solscan.io/tx/5Y4V5A8qcodiixRxbBqKfo5j9wJYQifgAG9viyCoAPBdERxHpsuyJ6Tqqs7iWH8g7hJhg4wYVv9n7hVQUd36E579) | [Debug](https://debug.barn.cow.fi/order/0xb17e7aad41ab91ee975d80c82941bd9acb847c609f4a2ba38abd2ca7ad500181) |
| — / 46 | 09:05:44.463271311Z | Sell 2.107285 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (native) (cleanup) | On-chain swap failed its minimum output check: Jupiter 6001 SlippageToleranceExceeded; auction 296356, solution 67; failure at 09:05:44.463271311Z. Saved error: `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(4, Custom(6001))) } }`. [Failed transaction](https://solscan.io/tx/4Tg8Voi61NciTJ8K8sCzb41QFeAxh7WRhoo8HA4iSegqvSEc6gFZQTXqhd9h8z7WNUZ5PPMhbD4Qb7sxoNHNZa98) Filled later at 09:06:23.876Z. [Successful settlement](https://solscan.io/tx/4a2tXedWwxuYgz1BPDXeeTwW9HhDadid1dFLQ1LJS27Geo6cU5iK6hdcPY56u7tBvHvLX8HrVSmmQk2Wf55VpPs8) | [Debug](https://debug.barn.cow.fi/order/0x9d24bba97fa0fc3c4ac37a89df189f14bf7b3d811c462f15e10323c9d630106f) |
| — / 47 | 09:05:44.463271311Z | Sell 0.628599 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (native) (cleanup) | On-chain swap failed its minimum output check: Jupiter 6001 SlippageToleranceExceeded; auction 296356, solution 67; failure at 09:05:44.463271311Z. Saved error: `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(4, Custom(6001))) } }`. [Failed transaction](https://solscan.io/tx/4Tg8Voi61NciTJ8K8sCzb41QFeAxh7WRhoo8HA4iSegqvSEc6gFZQTXqhd9h8z7WNUZ5PPMhbD4Qb7sxoNHNZa98) Filled later at 09:06:24.436Z. [Successful settlement](https://solscan.io/tx/4a2tXedWwxuYgz1BPDXeeTwW9HhDadid1dFLQ1LJS27Geo6cU5iK6hdcPY56u7tBvHvLX8HrVSmmQk2Wf55VpPs8) | [Debug](https://debug.barn.cow.fi/order/0xb826e1247f288868f23957b877030de31405bb572816cc5ea801285f62ef777f) |
| — / 44 | 09:23:54.494Z | Final SOL sweep to the test funder | `{"InsufficientFundsForRent":{"account_index":0}}`. [Failed sweep](https://solscan.io/tx/KR1bYfawBeAPxM8ayCpTNS8fBmT7qBCPELNhBCtFJcBMrobHva3qFKL7Ti5PacVKAAgiGREqpP9TNeavWgCsgug). Pending in the saved run. | No order ID: cleanup SOL transfer |

Trader 44's earlier cleanup completed at 09:05:51 UTC; its final sweep failed later. The transaction attempted to transfer 2,138,680 lamports from a 2,151,534-lamport balance with a 5,000-lamport fee, leaving 7,854 lamports, which failed rent validation. This is a cleanup transfer failure; its trades were fulfilled.

**Other rejected candidates: 62.** These were rejected before selection and are separate from the 15 winning-attempt failures. Rows group only identical errors in one auction; every solution ID is retained. Each candidate was rejected before submission; its order IDs were not recorded. Groups sit under the scenario's time window, including cleanup, without claiming which orders they contained.

| UTC timestamp | Auction | Solution IDs | Count | Exact error / failing program | Debug tool URL |
| --- | --- | --- | --- | --- | --- |
| 09:00:43.899987278Z | 296296 | 0, 1 | 2 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:02:14.813926465Z | 296314 | 0, 1, 2, 3, 4, 6, 9, 10, 11, 12 | 10 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:02:14.81396642Z | 296314 | 5, 7 | 2 | Titan: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6008))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:02:24.460206453Z | 296316 | 0 | 1 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:02:24.460230336Z | 296316 | 1 | 1 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:02:29.357359298Z | 296317 | 0, 1, 10, 12 | 4 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:03:50.116439008Z | 296333 | 4, 7, 12, 13, 19 | 5 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:03:54.507023411Z | 296334 | 1, 2, 3, 4, 5, 6, 7, 8, 9, 87 | 10 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:03:59.506110822Z | 296335 | 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20 | 17 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:04:08.884268676Z | 296337 | 1, 4, 5, 6, 7, 8 | 6 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:05:03.335264982Z | 296348 | 0, 2 | 2 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:06:38.155752624Z | 296367 | 0, 1 | 2 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |

</details>

## 3. Opposing orders / CoW

**Direct matching was not achieved.** All 15 trades filled, but the opposite orders settled through DEX swaps.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 12. Median / longest fill: 9.714 / 50.861 seconds.

Planned rows: 15; placed / filled scenario orders: 15 / 15.

The 15 rows include 6 explicit setup buys, 8 opposing trades and 1 SOL → JUP control. All 9 non-setup orders entered auction 296407 together. Every resulting settlement was inspected: opposite directions used separate DEX transactions; the 3 shared transactions batched orders in the same direction.

Examples: rows 116 + 118 sold SOL → USDC together; rows 120 + 123 sold USDC → USDT together; rows 121 + 122 sold USDT → USDC together. Their Jupiter route instructions and inner swaps establish DEX execution, not direct matching. A price guard could explain the choice, but that is unconfirmed.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 110 / 59 | 09:07:24.130Z | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 2.6 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled.  [Settlement](https://solscan.io/tx/4g5EZ3MGfqgwTeTmGu6Zd5W7VyG8KgHKDWYnUrFj4RDjiHwmqBqmByRjGQ8RyM3stQuzpVJPCMMKsefZw8hsWnwD) | [Debug](https://debug.barn.cow.fi/order/0x6bd786ac048e4ea31368040a7bbeb650979a2809efe816ee9949bbbfd9630769) |
| 116 / 58 | 09:09:53.507Z | Sell 0.02 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled.  [Settlement](https://solscan.io/tx/8xrCAMvpZ6XotvAuAEt7p6R2Drx5SaKEdktiERhXCUfhj9xmzacJweAipfCM3bQYjrj6LpkmwXihjzHsQZRu7kG) | [Debug](https://debug.barn.cow.fi/order/0x1ac9ac94b666bdb11e34079ae11870fa18ad12ddb0e3afc219e269c9ac5e2bcd) |
| 117 / 59 | 09:09:54.563Z | Buy [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → exactly 0.02 SOL (native) | None; fulfilled.  [Settlement](https://solscan.io/tx/61tnpnWqXBqWsP5RZQr1u8nAtdna75a6ytE48ogGGn8qH11QN7rF4cfj3M6XCgd6vVSrmbLVwmrrUN4LLBfQDfoq) | [Debug](https://debug.barn.cow.fi/order/0x7d698b60229ecba3ae5549226df67d554f7f38ecbb84e73050a9490d0c902769) |
| 120 / 62 | 09:09:54.059Z | Sell 3 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) | None; fulfilled.  [Settlement](https://solscan.io/tx/59RAfccvJRwuVfLFvpharD38wb49F3jsU3pp3m9ZrYBm7Z6q5geFjhycHUBrwnVunoccwQCqZt6EuqWEFq1VWeVp) | [Debug](https://debug.barn.cow.fi/order/0xeee255c2e099ef6dfaed262ade5421fb5cae9e9e31245454c161d75c08f471b2) |
| 121 / 63 | 09:09:54.524Z | Sell 3 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled.  [Settlement](https://solscan.io/tx/4LKychXNUNWScF1KRkW9C3DRcAkcVsFtEtcyNjavXVf9ZaaQbYK56k5Hgbqhr7o7wCymVp4ZU8ZdQo2BGN2uYuUg) | [Debug](https://debug.barn.cow.fi/order/0x49f87ba2849f7866851fb93cdad81d3476008559c0aa7cc4a020842c74a4c09d) |
| 124 / 66 | 09:10:02.748814931Z | Sell 0.02 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | On-chain swap failed its minimum output check: Titan 6008 LessThanMinimumAmountOut; auction 296407, solution 3; failure at 09:10:02.748814931Z. Saved error: `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(3, Custom(6008))) } }`. [Failed transaction](https://solscan.io/tx/2QE8EJWeF39Svgxn6rMeBT29xyiz4dMqVMHB6zai6w5NWczv252a2bYBCMt8zDEUDarfxDvFukewFRQ9gz9pThHE) Filled later at 09:10:44.565Z. [Successful settlement](https://solscan.io/tx/5TRLtXTkaxk5XqnTTm6zmjdiQCuERNV65xHxW8ku3uZ9JMF4thY5DxqiuL9B6MYjzuczbFV7RVyXC3Z5XbmEFMdM) | [Debug](https://debug.barn.cow.fi/order/0x4ff08b79f564ba35330f8c30adb62a3897397e3d3440c9479e0b8f651cb2c75d) |

**Other rejected candidates: 1.** These were rejected before selection and are separate from the 15 winning-attempt failures. Rows group only identical errors in one auction; every solution ID is retained. Each candidate was rejected before submission; its order IDs were not recorded. Groups sit under the scenario's time window, including cleanup, without claiming which orders they contained.

| UTC timestamp | Auction | Solution IDs | Count | Exact error / failing program | Debug tool URL |
| --- | --- | --- | --- | --- | --- |
| 09:10:58.704956144Z | 296419 | 69 | 1 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |

</details>

## 4. Token coverage

**Full token coverage is inconclusive.** 36 inbound sells and 12 exact buys filled; 7 planned trades stopped before placement.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 48. Median / longest fill: 9.534 / 25.368 seconds.

Planned rows: 55; placed / filled scenario orders: 48 / 48.

Setup: each inbound fixed-input sell spends SOL to receive the named token; an exact buy spends SOL to receive a fixed token amount. Return-direction cleanup is excluded from these coverage counts.

**Successful inbound sell destinations (36):** [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1), [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8), [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB), [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263), [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm), [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr), [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn), [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So), [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v), [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij), [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT), [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr), [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6), [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4), [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm), [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs), [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa), [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P), [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re), [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA), [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump), [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5), [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82), [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT), [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL).

**Successful exact-buy destinations (12 of 15 scheduled buy requests):** 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1), 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3), 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb), 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8).

**Ownership unknown:** PAID (88.1), USDG (0.464) and TSLAx (0.00123) exact buys returned no usable quote. `NoLiquidity` does not prove absent liquidity or permanent lack of support. Original API logs in this window record the Grafiks quote driver returning `QuotingFailed: No valid quote found`, without a detailed cause; candidate-level ownership is unresolved.

The SPCX sell was rejected during order POST for an expired creation blockhash; it never became an accepted order. The prepared UID was still missing from the API at the last saved recovery check, 09:27:09 UTC. The later exact-buy SPCX order is a separate successful request; it does not repair the failed sell.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 125 / 67 | 09:12:04.043Z | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | None; fulfilled.  [Settlement](https://solscan.io/tx/qhG5CGqjkGdkXzfid2Bfdbgrkmh29FJ83QYgRAHxioDPU1ELQhfMubK1nrjieAhExTP1497cRm6yZiSKyiqvXuY) | [Debug](https://debug.barn.cow.fi/order/0x9e78feafea05525f1b7d517d19b5733889f0cc5df767551655bc0d4f320189a8) |
| 127 / 69 | 09:12:04.286Z | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | None; fulfilled.  [Settlement](https://solscan.io/tx/21UNbzQG7oSHxeDNirjuiyY8v354zA8CP7nrC7ZbdrChQUKvU4RSbCb83vGFW6PA9PM6B4smSkfLBesmeH19Aqpv) | [Debug](https://debug.barn.cow.fi/order/0x697e3511ed970e08bde3fc21444721b039aaa547a8f93a50cf1fe804580edec3) |
| 165 / 67 | 09:12:18.248Z | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | None; fulfilled.  [Settlement](https://solscan.io/tx/5wJvFFggpF1e3Lg3YDKp6xrUMWPPV26W9MqqFRZ3U2eQPCGf9HUuoWsNztCXZCBVBfuS2vuRLxhVGCt5fKqjyGca) | [Debug](https://debug.barn.cow.fi/order/0x16458e1717cf1d38db7023a4cfe6778bb52fc8dad7e7c32d8ffc296aae62dc9c) |
| 170 / 72 | 09:12:15.485Z | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | None; fulfilled.  [Settlement](https://solscan.io/tx/4HUaUvZrz15S9YvYNQmBCgh7ciMpt4djM9JgvbTWayVtAEtH1bQp6WauCbx1nCwHtwsimbszDXsU3ebMsQUnnE8j) | [Debug](https://debug.barn.cow.fi/order/0x702d84ac23931d3bdcf8cf804a4ea0820300b963c8e75c491c070f908e5725e4) |
| 177 / 79 | 09:12:12.739Z | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | None; fulfilled.  [Settlement](https://solscan.io/tx/5mJ4GJoBx1LteXFiRcV8HjjZLzT3joNbXBVgjKKT2a5bKhQ5YRH1E1P9kpCcZQWVRbaihbuWPxzYDQdo7e3sULGT) | [Debug](https://debug.barn.cow.fi/order/0x752a4fb368e4d3c81d55240801f7706221e797053a49740a027457801a053e28) |
| 166 / 68 | 09:12:16.472Z | Buy SOL → exactly 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | **Ownership unknown.** Quote returned `404 Not Found: NoLiquidity: no route found`; no order placed. Cause unknown. | No order ID: quote failed before placement |
| 167 / 69 | 09:12:16.761Z | Buy SOL → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | **Ownership unknown.** Quote returned `404 Not Found: NoLiquidity: no route found`; no order placed. Cause unknown. | No order ID: quote failed before placement |
| 179 / 81 | 09:12:16.870Z | Buy SOL → exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | **Ownership unknown.** Quote returned `404 Not Found: NoLiquidity: no route found`; no order placed. Cause unknown. | No order ID: quote failed before placement |
| 137 / 79 | 09:12:05.226Z | Sell 0.01 SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | **Ownership unknown.** Order POST rejected: `400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one`. No accepted order or fill; prepared UID remained unresolvable at the final recovery check. | [Debug](https://debug.barn.cow.fi/order/0x3cdd8230f0f8091b65ca4c4e27f7c52da7c7a772af8b7cf61bdd21c9eec5bc57) (prepared UID; API record missing) |
| 140 / 82 | 09:12:03.104Z | Sell 0.005 SOL → [SI](https://solscan.io/token/DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP) | Expected autopilot limitation: `400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee`. Rejected before solver participation; no order placed. | No order ID: quote failed before placement |
| 141 / 83 | 09:12:03.217Z | Sell 0.005 SOL → [ZCAT](https://solscan.io/token/HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR) | Expected autopilot limitation: `400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee`. Rejected before solver participation; no order placed. | No order ID: quote failed before placement |
| 142 / 84 | 09:12:03.622Z | Sell 0.005 SOL → [ANTHROPIC](https://solscan.io/token/Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw) | Expected autopilot limitation: `400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee`. Rejected before solver participation; no order placed. | No order ID: quote failed before placement |
| 153 / 95 | 09:12:15.785731184Z | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) | Driver simulation rejected the swap: Jupiter 6001 SlippageToleranceExceeded; auction 296434, solution 20; failure at 09:12:15.785731184Z. Saved error: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Filled later at 09:12:20.744Z. [Successful settlement](https://solscan.io/tx/5hD8cNMtu3hRLsgj4QAKvSwyVqgGyjdZz9PNmMU6GrXCrxSksAZr7Au43uHKgsXD9VzxVcRxi2TQewyYCjKYumM5) | [Debug](https://debug.barn.cow.fi/order/0xed208d5792dae1808763f8da4d8c31d819a884b2a9548a87809d95237dfb3022) |
| 160 / 102 | 09:12:15.790531542Z | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) | Driver simulation rejected the swap: Jupiter 6001 SlippageToleranceExceeded; auction 296434, solution 15; failure at 09:12:15.790531542Z. Saved error: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Filled later at 09:12:22.332Z. [Successful settlement](https://solscan.io/tx/MkQqvyhmSGUfauPiEc5DKEd4fPHBKBKF9RAUEQtrf1eRbNSj1ZrUtUpdC8Nz71R27tUxoE24kQcsE9MfP1S4Vj6) | [Debug](https://debug.barn.cow.fi/order/0xd30e52d1b93bbc29874b2c27c1789651fe1932ed06764bd75394e45c61a466b0) |
| 155 / 97 | 09:12:15.844464165Z | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs) | Driver simulation rejected the swap: Jupiter 6001 SlippageToleranceExceeded; auction 296434, solution 1; failure at 09:12:15.844464165Z. Saved error: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Driver simulation rejected the swap: Jupiter 6001 SlippageToleranceExceeded; auction 296435, solution 0; failure at 09:12:19.184184355Z. Saved error: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Filled later at 09:12:27.600Z. [Successful settlement](https://solscan.io/tx/3TauboBjLm3faL23J1Ltf7igtyPBCcBN6rEQ4jaNRm5mAgzR1kjrsURcArW9joVyx54TPHqXB9bre9NoMw1xjdio) | [Debug](https://debug.barn.cow.fi/order/0x05ab6ddf712b2058745936a5fac47977f30b9592fca0a5ea6618dee01ee3a0ba) |
| — / 78 | 09:13:19.229292609Z | Sell 0.001614 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) → SOL (native) (cleanup) | On-chain swap failed its minimum output check: Jupiter 6001 SlippageToleranceExceeded; auction 296447, solution 3; failure at 09:13:19.229292609Z. Saved error: `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(5, Custom(6001))) } }`. [Failed transaction](https://solscan.io/tx/2k1ZzBFPo6ZGWHVpaujpE8gyF6QiPvTgU7NCUtHH584BPNFXWFf22XpbjV3GNFLAzK8ypjZfRwexdCRcVAHmr4c5) Filled later at 09:14:02.053Z. [Successful settlement](https://solscan.io/tx/3aV1pcRwtuRYMPGVH63yZ2XNZ6uTtNTTnG59MHsRi3o7z7hjoDhTfQ2FGwecbDLfv8NSd96Lbmdk1DyT1pN2Xwu1) | [Debug](https://debug.barn.cow.fi/order/0x807afad46f05783e9f01c12dac70694d849ca7785d360d05eaa0c5a4e49dceea) |
| — / 80 | 09:13:19.233119066Z | Sell 0.00996225 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) → SOL (native) (cleanup) | On-chain swap failed its minimum output check: Jupiter 6001 SlippageToleranceExceeded; auction 296447, solution 4; failure at 09:13:19.233119066Z. Saved error: `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(5, Custom(6001))) } }`. [Failed transaction](https://solscan.io/tx/64ycfFy33cPmQaZRrRwk5UxpUTsrixCA2M43g7oXcbYU5ireQ82AjuToDYJQkSeJPhKn8Ybf5dpbbi9Rzk1SoLwT) Filled later at 09:14:00.382Z. [Successful settlement](https://solscan.io/tx/56zuSpkURZkoD2zzdHvQBykmYAfSxPPCPLk1zvjpyjnLmHFUzskzUZwufkeP9qX5uENPwuQ1zqU1DdwenoEsGYEi) | [Debug](https://debug.barn.cow.fi/order/0xb62f278db0e065e76bd3b067a01465afbc86e9d879a49db1a09f01169bf0a8fb) |
| — / 77 | 09:13:19.238857336Z | Sell 1.048334 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) → SOL (native) (cleanup) | On-chain swap failed its minimum output check: Jupiter 6001 SlippageToleranceExceeded; auction 296447, solution 1; failure at 09:13:19.238857336Z. Saved error: `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(5, Custom(6001))) } }`. [Failed transaction](https://solscan.io/tx/2hgYShmpJFbsfNnYUqZU1vuPftk2yxkp9D2Hzywh5UVvbHRRXRC3Yi5pmBPXu7TVSWsApmXee2LDRMrKUGUjn2U6) Filled later at 09:14:02.377Z. [Successful settlement](https://solscan.io/tx/w6WEMohHjskpbcUyCmVoLCJzue7ue3ADLZWidLMyU4is85tMavaVDXB53ZKDEPebNWeWeaHCYQ9yP5gTvpJLA1P) | [Debug](https://debug.barn.cow.fi/order/0x5028d2639efb26b249cb3d8504fba421cc5cd1862d08c8b8c02843ece1b0cbc8) |
| — / 81 | 09:13:19.254015198Z | Sell 0.00297059 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) → SOL (native) (cleanup) | On-chain swap failed its minimum output check: Jupiter 6001 SlippageToleranceExceeded; auction 296447, solution 0; failure at 09:13:19.254015198Z. Saved error: `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(5, Custom(6001))) } }`. [Failed transaction](https://solscan.io/tx/3JENzWJQJavuKB2fx3VG4BnTxiR9hPeHLoWMcDagfizquahvAhXm8Reqog2WXA4AuaiLrJ2dgJRdJ4sjNTJPWnPq) Filled later at 09:14:02.509Z. [Successful settlement](https://solscan.io/tx/4TH5ZqnVw7MXf34SFuZdrWj6D7q1uPvsehHuCHxJn7QKxTswVHF27B2BN4dimp9N2GTZw7xJSM5jYKaATY1H6qpK) | [Debug](https://debug.barn.cow.fi/order/0x2a5a7f70fca79663a6827c4a5b1552690a4d26e542e9ce8122bce90761787bd1) |
| — / 89 | 09:13:34.48536226Z | Sell 0.003539166 [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So) → SOL (native) (cleanup) | On-chain swap failed its minimum output check: Titan 6008 LessThanMinimumAmountOut; auction 296450, solution 2; failure at 09:13:34.48536226Z. Saved error: `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(3, Custom(6008))) } }`. [Failed transaction](https://solscan.io/tx/5wqvRQgbZ2TbXv5kUnrG7hGTHpbim1crFxSqmRYXejL1oCRro4VrjTYgMuK4bAG2xtNcfRx1mN7JgXaikedc1HUs) Filled later at 09:14:20.003Z. [Successful settlement](https://solscan.io/tx/34hJd9rhxiwqRrm82Gc1oqp2R5vcHDASZKvcnb2bivMRpX5JoEmZrg2NvGtw3qKBFPSei4xvuWcd8DoBukFtrHsR) | [Debug](https://debug.barn.cow.fi/order/0x9401a299c471c3bba8dad3ec53f5b192070d4180f4b5bbff87fe96e03d96d7af) |
| 163 / 105 | 09:15:15.852Z | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT); reclaim its fulfilled order account | `Transaction simulation failed: Error processing Instruction 0: invalid account data for instruction`. Reclaim skipped; the trade was fulfilled. No later successful reclaim is recorded. | [Debug](https://debug.barn.cow.fi/order/0xe1aaac3063cfd41bfc42475a906fe9a035f7cd1d2696de2420febafaff15f276) |

Rows 140–142 are expected autopilot transfer-fee rejections, before solver participation. Trader 105's reclaim called the settlement program `EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb`; the saved log is truncated after its invocation. Account-data cause is unconfirmed. Token cleanup finished, but that does not prove this order account's rent was reclaimed.

**Other rejected candidates: 8.** These were rejected before selection and are separate from the 15 winning-attempt failures. Rows group only identical errors in one auction; every solution ID is retained. Each candidate was rejected before submission; its order IDs were not recorded. Groups sit under the scenario's time window, including cleanup, without claiming which orders they contained.

| UTC timestamp | Auction | Solution IDs | Count | Exact error / failing program | Debug tool URL |
| --- | --- | --- | --- | --- | --- |
| 09:12:10.242182321Z | 296433 | 15, 16 | 2 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(6, ProgramFailedToComplete)), program_error: None }` **Ownership unknown; cause unknown.** | Unavailable: candidate order IDs were not recorded |
| 09:12:15.690544453Z | 296434 | 16 | 1 | Settlement program: `SimulationFailed { err: UiTransactionError(InstructionError(7, ProgramFailedToComplete)), program_error: None }` **Ownership unknown; cause unknown.** | Unavailable: candidate order IDs were not recorded |
| 09:12:15.690586741Z | 296434 | 21 | 1 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(6, ProgramFailedToComplete)), program_error: None }` **Ownership unknown; cause unknown.** | Unavailable: candidate order IDs were not recorded |
| 09:12:19.049958887Z | 296435 | 11 | 1 | Settlement program: `SimulationFailed { err: UiTransactionError(InstructionError(7, ProgramFailedToComplete)), program_error: None }` **Ownership unknown; cause unknown.** | Unavailable: candidate order IDs were not recorded |
| 09:12:48.444552429Z | 296441 | 1, 2 | 2 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:13:58.794016671Z | 296455 | 3 | 1 | Titan: `SimulationFailed { err: UiTransactionError(InstructionError(3, ProgramFailedToComplete)), program_error: None }` **Ownership unknown; cause unknown.** | Unavailable: candidate order IDs were not recorded |

For the 6 `ProgramFailedToComplete` candidates, the original bundle logs identify 3 failures in Jupiter, 1 in Titan and 2 in the settlement program. The saved program-log field is `Some([])`, so no panic or compute-budget explanation is established. **Ownership unknown** for the cause and repair; these rejected candidates cannot be assigned exact order IDs.

</details>

## 5. Transaction size

**The size-limit test is inconclusive.** All 10 trades filled, but full signed transactions measured 773–1140 bytes, below the 1200-byte target and 1232-byte limit.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 4. Median / longest fill: 6.453 / 6.664 seconds.

Planned rows: 10; placed / filled scenario orders: 10 / 10.

Setup: SOL → EURC and SOL → JLP baselines of 0.005 SOL, followed by 4 EURC sells of 0.005 SOL each and 4 JLP sells of 0.00125 SOL each. Full serialized base64 transaction lengths were measured, including signatures and lookup-table references.

| Rows | Orders | Full bytes | Transaction |
| --- | --- | --- | --- |
| 180 | 1 | 773 | [Settlement](https://solscan.io/tx/2AGVEaHz6B4os7FJMhAZxMegQYgh6sGtaCT3MEd5QPY6jPGW26mTdaT4Btf27koWHdwXTM8aKb9VntFqPC7jsTeA) |
| 181 | 1 | 1116 | [Settlement](https://solscan.io/tx/3FGvdpwR5ukumTbSePFrNcK31aDh2Q336AQuDw57mLTufxdtF3QhVgDPQaXM2CcVmgmNB2aWvekyzAJSS56F7gTy) |
| 182, 183, 184, 185 | 4 | 1112 | [Settlement](https://solscan.io/tx/4sspi9cmuj2xDsjhq5x8hkChhqAY1af8pwUvxHwv5ccd7tCQq3JaGs5WXLYqKHGVxz7ciJ6WhzBLozGTKFtNNQpt) |
| 186, 187, 188, 189 | 4 | 1140 | [Settlement](https://solscan.io/tx/5s7gUcS2L93bZsXGjMZmD1dSr6VcjxpUtZfNmS8rmaS7DtvZRrtqDczgwwcDftjD4LJEAuXdS1g2M7885Gi7V1z5) |

The largest transaction was 92 bytes below Solana's 1232-byte limit and 60 below the test's 1200-byte target. The test team needs controlled boundary cases; changing routes mean these CSV amounts cannot guarantee them.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 180 / 107 | 09:15:39.219Z | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) | None; fulfilled.  [Settlement](https://solscan.io/tx/2AGVEaHz6B4os7FJMhAZxMegQYgh6sGtaCT3MEd5QPY6jPGW26mTdaT4Btf27koWHdwXTM8aKb9VntFqPC7jsTeA) | [Debug](https://debug.barn.cow.fi/order/0xb94085a86a0931a77e062e60e8e7ce39e8fab7293890a3ffb9309488b7399c4c) |
| 181 / 111 | 09:15:39.519Z | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) | None; fulfilled.  [Settlement](https://solscan.io/tx/3FGvdpwR5ukumTbSePFrNcK31aDh2Q336AQuDw57mLTufxdtF3QhVgDPQaXM2CcVmgmNB2aWvekyzAJSS56F7gTy) | [Debug](https://debug.barn.cow.fi/order/0x20e4da6033de784525f4c10ffcd11aa2c3b4c8e8883591ac317f6ff9d89262c6) |
| 182 / 107 | 09:17:10.570Z | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) | None; fulfilled.  [Settlement](https://solscan.io/tx/4sspi9cmuj2xDsjhq5x8hkChhqAY1af8pwUvxHwv5ccd7tCQq3JaGs5WXLYqKHGVxz7ciJ6WhzBLozGTKFtNNQpt) | [Debug](https://debug.barn.cow.fi/order/0x275752478d7002e43b75eacd114ec321f191d0ce21d42303a087b29f406bba03) |
| 186 / 111 | 09:17:10.670Z | Sell 0.00125 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) | None; fulfilled.  [Settlement](https://solscan.io/tx/5s7gUcS2L93bZsXGjMZmD1dSr6VcjxpUtZfNmS8rmaS7DtvZRrtqDczgwwcDftjD4LJEAuXdS1g2M7885Gi7V1z5) | [Debug](https://debug.barn.cow.fi/order/0xf00579938c6606b6656ad72986426daf8552c1ad7f43c9fef2f19101e4be177a) |
| — / 109 | 09:17:29.06477543Z | Sell 0.466386 [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) → SOL (native) (cleanup) | On-chain swap failed its minimum output check: Jupiter 6001 SlippageToleranceExceeded; auction 296497, solution 2; failure at 09:17:29.06477543Z. Saved error: `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(4, Custom(6001))) } }`. [Failed transaction](https://solscan.io/tx/3s254pJaph7gQS4Q5ZikDbeCxGcbJ8wmEmSS9Azz4LhHpKnxYW6UoHG5T3sPchxSXLctkj5L7CqhAQouEBxGALjU) Filled later at 09:18:09.415Z. [Successful settlement](https://solscan.io/tx/sYXpnYyNYud1mcFQ95j7vqfUrGCMvnNJMyQAsqG34A1BFMNTE9nHu6xpR8hpwaMbG24MP27gqcC6UvbuTcbGr2M) | [Debug](https://debug.barn.cow.fi/order/0x6b925703b00641a87581181b7510318aa818d92a1875499efa4dfa9f2c3919c9) |

**Other rejected candidates: 3.** These were rejected before selection and are separate from the 15 winning-attempt failures. Rows group only identical errors in one auction; every solution ID is retained. Each candidate was rejected before submission; its order IDs were not recorded. Groups sit under the scenario's time window, including cleanup, without claiming which orders they contained.

| UTC timestamp | Auction | Solution IDs | Count | Exact error / failing program | Debug tool URL |
| --- | --- | --- | --- | --- | --- |
| 09:17:14.747381963Z | 296494 | 4 | 1 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:17:23.482166768Z | 296496 | 68 | 1 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |
| 09:17:28.432154473Z | 296497 | 68 | 1 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |

</details>

## 6. Fresh receiving accounts

**The initially missing-account flow was achieved.** All 8 trades filled, but receiving accounts were created before settlement, so this does not prove the solver can absorb their opening cost.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 8. Median / longest fill: 14.187 / 22.036 seconds.

Planned rows: 8; placed / filled scenario orders: 8 / 8.

Setup: 8 initially missing receiving accounts were checked at 09:18:45.531 UTC; advance account preparation was skipped for this scenario. Each USDC/USDT group contains a 0.1 SOL sell and an exact buy of 10 tokens in both self-paid and sponsored modes. Funding was 0.15 SOL per wallet and slippage was 500 bps (5%).

All 4 self-paid creation transactions included receiving-account creation. All 4 sponsored creation transactions also created the receiving account before settlement, funded by the sponsor; their pre-creation receiving-account balances were 0 lamports. The receiving accounts already held rent at settlement, and none of these 8 settlements created them. This verifies initially missing-account quote/creation flows; it does not test charging that rent to the solver's swap output.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 190 / 115 | 09:18:50.792Z | Sell 0.1 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled. self; [Receiving-account creation](https://solscan.io/tx/5CLS1Emqxp7Y2T5mz9e91MXegtxpFBtNbTHnFnF2stgHTG3y6yYNNuJASaC5gcwB6my6v9AGPR7ffAmE2kowkjgs). [Settlement](https://solscan.io/tx/4bL18oSeY7vWmjJZkZHTjSQpd9o5T9DqnLiHLsEmekd5WKSz2JSBPsyryUh5fgyCgHidK1mBzpzrSEX3EAWsqSzY) | [Debug](https://debug.barn.cow.fi/order/0xb66361a94be12ee9a250fff1e68fdf5018af418730eb4a97406ce2e845f481e4) |
| 191 / 116 | 09:18:49.581Z | Sell 0.1 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled. sponsored; [Receiving-account creation](https://solscan.io/tx/sNkNck1Kyck9K5MwtefWbFufAcuDVeKBm7Frm7EomJn4g97HGTpkBTJLNxq7rckDSPpfRLewph7zKCYLPqFw97v). [Settlement](https://solscan.io/tx/bqkrAN19iWwLi7QnH7jpLn5khbuo44cf2D1mgdXMLkaULTbWpyNrWCcfFKzMKTmon2cDxywtz5TJVtDkA3qogs8) | [Debug](https://debug.barn.cow.fi/order/0xdc23e594290e13325892dc1b27d6218e2b69cb5dc7f1b12e2e4c486ca3963028) |
| 192 / 117 | 09:18:51.432Z | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 10 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled. self; [Receiving-account creation](https://solscan.io/tx/TUaXPxAUgpM4yWSc7TvUKvvZEuGfyHeSK5brLbDCXN3r2nUyaUpi1eapaLMWoLP48Cmn5MQ5TzMa76hpKz7qBPk). [Settlement](https://solscan.io/tx/4wbkBSfX6N4Ri2hsoLzMmZAoHPoPdH4unNmAPhdFcjsKzULhysZgWZcjVWRxigmPV4ZFGeoqVUYs2fwTUz4nZKY9) | [Debug](https://debug.barn.cow.fi/order/0x24c166524924373a1851b4ba37657a645d19c4fc43d3691d39ba812ea9080080) |
| 193 / 118 | 09:18:50.383Z | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 10 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled. sponsored; [Receiving-account creation](https://solscan.io/tx/4BzgxGbxwEBcDW843nwaXwgYZ55FH8DfLQ7ME9zxa3vsDgD4BMJDkfVb21htgbfLhwvT22HjDKbKCiUjK4R7EtWY). [Settlement](https://solscan.io/tx/3kessRpS7h68MERCsT7f9ift4YpgLQraDTu7qBaizuJtdpfWbR29ebF4qGHALpTVkHPJR3aCJRH8UWsMQGWF4Lu) | [Debug](https://debug.barn.cow.fi/order/0xc5c0f950488c960f94c0d711b054f2ab7cff77098f234f464bb0bd07ff9da1c6) |
| 194 / 119 | 09:18:51.033Z | Sell 0.1 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) | None; fulfilled. self; [Receiving-account creation](https://solscan.io/tx/2Z82JonJrSuTSZCfHyDGJUU2hvXzkadGFLrA3wjj1rB36UdkwYoFNaTXosRfwoBJiFfZbeUxrVMpp32pD67diAU1). [Settlement](https://solscan.io/tx/VAkxKcczzdBk8XDTyEPcx12PLkN8xtv5jWRyoV3uLR9ted2kcquYYhpYzzskTyZB6xrtxFxcuKSWssXm8mJQqe1) | [Debug](https://debug.barn.cow.fi/order/0xea16f1398fb06288c712cbc79092df3c1045a6b1d2eef136c51b7ebb6b50ee5f) |
| 195 / 120 | 09:18:49.990Z | Sell 0.1 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) | None; fulfilled. sponsored; [Receiving-account creation](https://solscan.io/tx/SL9MAXgrK8r6KBapTnwnD35cnQ1oj8hWfnAA5TGTPuw97gLESsKHMkiZCMUCUxKgToGDiryqxdM9zAn2TvCQnnL). [Settlement](https://solscan.io/tx/Tjs13qGwoxKs6j9Uu4Z4vNmb1XRS41d6zhFvkSNmKY9wus7K46BfCRuaHfGzifKcGBvNV81kuyzyVMrvJmfMVZT) | [Debug](https://debug.barn.cow.fi/order/0xbc0c46832d545b1fbb9a93ca8dd32c9282b91e06a2777a803f08d386c0780b97) |
| 196 / 121 | 09:18:51.945Z | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 10 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) | None; fulfilled. self; [Receiving-account creation](https://solscan.io/tx/3tuuKc9W5xS5vQA3bzaQTy8gni7TmGQ8MFBspctx3yvYmuNa37qGVkbUSqfCryVoHLNEZ33ip79XdUNgTqjHsxKo). [Settlement](https://solscan.io/tx/39ereWPG2T5bVcbSWL87EDoRUTUR7ekQZzJ5Vo6GEMAits7xtwDiC1znqXmtAoSTyaqyRRrERr2XJpVJ2dMCcmfP) | [Debug](https://debug.barn.cow.fi/order/0x3c775bd40c72d4f72a6c1ff574a4135cacb8d889d274519409c4d40f2e94c435) |
| 197 / 122 | 09:18:50.874Z | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 10 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) | None; fulfilled. sponsored; [Receiving-account creation](https://solscan.io/tx/3PQx1FNqpEmYEB7SDG45sF7yCFS1AmSG8kuGJw3A1xY8aS1279yGxR8axo4iGUndHfEprG41moZMUEgV8KdFYkkA). [Settlement](https://solscan.io/tx/5v8gBSzpge5CWXbmAFem2JVYqLN7kaWKH1jiDiD2vkQxFAiC5vf3FNdDc8bpkJUFJhq5L594p5Tgfke3d9g3uDpL) | [Debug](https://debug.barn.cow.fi/order/0xab8f3491d0be966bff81ee19df6bf21deb33eb267c36296438c194795f58ece4) |

**Other rejected candidates: 1.** These were rejected before selection and are separate from the 15 winning-attempt failures. Rows group only identical errors in one auction; every solution ID is retained. Each candidate was rejected before submission; its order IDs were not recorded. Groups sit under the scenario's time window, including cleanup, without claiming which orders they contained.

| UTC timestamp | Auction | Solution IDs | Count | Exact error / failing program | Debug tool URL |
| --- | --- | --- | --- | --- | --- |
| 09:19:23.733609054Z | 296520 | 4 | 1 | Jupiter: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` Swap minimum output check failed. | Unavailable: candidate order IDs were not recorded |

All 6 scenario phases finished. The saved run remains `finished=false`: `accountSetup.cleanupPending=[44]`, and the rejected row-137 prepared UID remains unresolved. All 125 cleanup trade orders filled, but that does not mean every account closure or final SOL sweep finished; trader 44's failed sweep is listed in scenario 2.

</details>
