# Asao solver test report

27 October 2026 - staging / Barn - Solana mainnet - session `2026-10-27-09-51-composite-asao-run`

**TLDR:** Nice progress, with 187 of 190 planned trades completed, all 84 burst orders filled and stablecoins matched directly. One USDG swap was set up expecting 0.464476 USDG but got only 0.463816, below the 0.464 the order needed, so the transaction failed. The order worked on retry, and the first thing to check is how old the quote was when that failed attempt was sent. SKHY expired before swapping started and needs a creation check, while SOL/USDC trades still settled separately. USDG buy, filled later (https://debug.barn.cow.fi/order/0x164d2cf5f40c582b39644e0e7572fd5095482556949beb8462843059c9e18e8e); SKHY creation, expired (https://debug.barn.cow.fi/order/0x9a1f23df9f5e42ca6541009ad7ba452ce0fae4fc8c3654415367ba7ed6465a18).

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Achieved: 6/6 filled | Keep as regression checks. |
| 2. 25 same direction sells | Achieved: 25/25; batches up to 13 | Keep batching checks. |
| 3. Sell bursts | Achieved: 84/84 | Test team: test sustained arrivals separately. |
| 4. Opposing orders / CoW | Stablecoin matching achieved; 14/14 placed filled | Asao/CoW: inspect netting choices in auction 386139. |
| 5. Token coverage | Partial: 50/52; no main quote failures | Asao/CoW: compare swap headroom and SKHY blockhash lifetime. |
| 6. Fresh receiving accounts | Achieved: 8/8 flows; rent goal inconclusive | Test team: isolate account creation at settlement. |

## Changes since 26 October 2026

Completed flows rose from 172/190 to 187/190; fresh-account fills rose from 0/8 planned to 8/8.

<details>
<summary>Comparison with the previous run</summary>

Baseline: `2026-10-26-09-24-composite-asao-run`, staging; same 190 requests, token mix and 90-second burst gaps. Main metrics exclude prerequisite acquisitions and cleanup.

| Measure | 26 October | 27 October |
| --- | --- | --- |
| Planned flows completed | 172/190 | 187/190 |
| Placed main orders filled | 172/184 | 187/189 |
| Token sells / exact buys filled | 35/37; 8/15 | 36/37; 14/15 |
| Fresh-account fills / accepted | 0/4 | 8/8 |
| Main timeout / creation-expiry orders | 11 / 1 | 1 / 1 |
| Before-acceptance rejections | 6 | 1 |
| Cleanup cancelled / pending wallets | 67 / 44 | 2 / 2 |
| Cleanup account listing 503 events | 8 | 4 |

Unchanged: standard 6/6, same direction 25/25 and bursts 84/84. Largest batch: 14 → 13. Stablecoin direct matching is now verified; SOL/USDC still settled separately.

Newly recorded category: `creation_blockhash_not_found`, [Debug](https://debug.barn.cow.fi/order/0x9a1f23df9f5e42ca6541009ad7ba452ce0fae4fc8c3654415367ba7ed6465a18) row 177, exact buy 0.0026 SKHY. Expired, previously filled. Recovered original: `FailedToCreate` → RPC `BlockhashNotFound`, no program execution. The current `other` markers resolve to Jupiter slippage threshold failures. The previous export lacks raw errors, so these are newly identified mechanisms, not proven new error types. Generic `other` affects 5 orders in each run: 3 filled/2 cancelled → 4 filled/1 cancelled. Attempt counts unknown. Row 160 XAUt0 remains cancelled.

Row 119 repeats `BlockhashExpired`. No main `NoLiquidity` or `InvalidAppData` recorded; absence does not prove a fix. Pending-wallet counts use final scenario metadata.

Recovered matching requests (previously cancelled):

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 171 / 73 | 2026-10-27T10:10:09.442Z | Buy SOL → exactly 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x75348aca6b152a788a3a088feea5c91a51f034d901e8dd87ef0802523dc363d9) |
| 183 / 107 | 2026-10-27T10:14:21.418Z | Sell 0.1 SOL → USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x4252131ed23c3eef077084d4913e19619edb853b0550087a4b49b692e74dec6d) |

</details>

## 1. Standard pairs

**Achieved.** All 6 standard trades filled, including JUP funded trades and exact buys.

<details>
<summary>Order evidence and metrics</summary>

Planned: 6; placed main orders filled: 6/6. **Total transactions:** 6. **Median / longest observed fill:** 4.884 / 9.824 seconds. Settlement sizes (count × orders): 6×1.

Counts include explicit inventory-setup scenario rows. Main metrics exclude prerequisite acquisitions and cleanup. Across all scenarios there are 88 successful main settlements; 3 additional acquisition settlements give 91 successful scenario settlements and 190/192 scenario orders filled. All 3 acquisitions filled. Timing is accepted placement → journal-observed fulfillment, includes polling and uses those endpoints even for recovered records. Tables use placement time for successes and first saved failure time (or failure observation when no attempt time exists) for errors.

The 6 scenario phases finished. Metadata: start 09:52:35.157 UTC, trading/cleanup end 10:22:31.246 UTC, observation end 10:23:31.246 UTC; fetched 10:52:15 UTC. Configuration: 60-second fill timeout, 300-second validity, no placement retries; quote/API/RPC limits 5/8/10 requests/s. No nonzero-transfer-fee probes were included.

Evidence checked: scenario requests, journal, final order snapshots, successful settlement signatures and failure/competition summaries, plus the on-chain examples below. Competition lists only Asao. Successful scenario settlement fee payers match its recorded wallet. The shared window, including cleanup, records 390 proposals, 168 wins and 164 submissions/observations; 4 solve failures labelled `other`, 2 `SimulationFailed`, 1 `FailedToCreate` and 1 in-flight filter. These window counters are not scenario-order totals. Follow-up read-only queries verified the staging log data source and recovered 4 distinct failed solutions affecting 6 orders: stablecoins 386139/14, USDG 386158/0, SKHY 386163/1 and USDe cleanup 386282/0. The saved index timestamp is the start of settling, not the error time. Exact errors and joins are below. The failed USDG transaction was independently read through RPC. The export files themselves remain unchanged.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-27T09:52:37.569Z | Sell 0.005 SOL → USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xb92ff4adaf9c949bc348a39e9ee9c8b65b279ca48c9b60bedac6c6c081cef3e1) |
| 2 / 2 | 2026-10-27T09:52:37.688Z | Sell 0.005 SOL → USDT [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xdd7b6baf4944607f57d27f7df6df0359e44a5dbfa3b76f4b1ce3a2dff3020cc2) |
| 3 / 3 | 2026-10-27T09:52:52.312Z | Sell 0.5 JUP → USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x1bdcd3245afa68d421fd2475f2e09dfe5067dc80bcf400a1d278e206ad58db44) |
| 6 / 3 | 2026-10-27T09:53:13.472Z | Buy JUP → exactly 0.25 USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xd237f2231799a3d31ac345fe51018821e38d477f2995c9deba37cc6ec152a903) |

**Cleanup fee rejection; excluded from main totals.**

Trader 3’s cleanup quote for 0.060887 JUP → SOL returned `SellAmountDoesNotCoverFee`. No order existed and the balance remained. The fee check is clear. We think, with medium confidence, that this is uneconomic residual dust under the current fee quote, rather than a JUP support gap: the same trader’s main JUP funded flows filled. The truncated response lacks the fee amount, so the exact deficit and whether the fee was unusually high are unknown. First, inspect the original 10:17:41.545 UTC quote and compare the input’s output value with the fee. If value is below an ordinary fee, let cleanup report/aggregate dust rather than submit it. If a normal-size quote has the same abnormal fee, fix the fee estimate first. The owner is CoW quote/fee validation and test team. No solver execution.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 3 | 2026-10-27T10:17:41.545Z | Cleanup sell 0.060887 JUP → SOL | Saved truncated text: `Bad Request {"errorType":"SellAmountDoesNotCoverFee","descri`; quote failed, balance remains. | No order ID: quote failed before placement |

</details>

## 2. 25 same direction sells

**Batching achieved.** All 25 sells filled in 3 settlements, including a batch of 13.

<details>
<summary>Order evidence and metrics</summary>

Planned: 25; placed main orders filled: 25/25. **Total transactions:** 3. **Median / longest observed fill:** 6.411 / 9.608 seconds. Settlement sizes (count × orders): 1×1, 1×11, 1×13.

All requests sell 0.005 SOL → JUP. The 13 order [Transaction](https://solscan.io/tx/4o4S7NjZo2Jj4TZXfo6R43D2CC43QxPK4P5PJefMKMAUzbBNXeG9L6Vj9nnEdWTKNojQdBGBYUcApo5YgTr3dzxh) contains rows 10, 19–22 and 24–31. Shared successful signatures verify batching; no serialized-size, price-guard or proportional-payout boundary is claimed.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 2026-10-27T09:54:22.174Z | Sell 0.005 SOL → JUP [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x0cddd1d9dd605808aeb44114b7a10b132f924ba0fe08a4153ca82b5c2cea8073) |
| 19 / 16 | 2026-10-27T09:54:24.782Z | Sell 0.005 SOL → JUP [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xdfe5b40009b0bab91f47c50605c6d7954aa0e1f038e1604ca4019ae9f6190f87) |
| 31 / 28 | 2026-10-27T09:54:27.716Z | Sell 0.005 SOL → JUP [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x5043b7ad4ecc76e579e67f982c5f6112be7eb97fd88f4b75c5d87ad29e7690b5) |

</details>

## 3. Sell bursts

**Burst completion achieved.** All 84 trades filled; sustained throughput remains untested because waves were spaced apart.

<details>
<summary>Order evidence and metrics</summary>

Planned: 84; placed main orders filled: 84/84. **Total transactions:** 12. **Median / longest observed fill:** 6.335 / 13.485 seconds. Settlement sizes (count × orders): 1×2, 4×4, 1×5, 2×6, 1×10, 3×13.

Waves completed 4/4, 8/8, 16/16, 24/24 and 32/32, with scheduled 90-second gaps. The 13 order [Transaction](https://solscan.io/tx/3hnLayoQfg12nLtB1hP8VkN959CV71pebR8Q2TLLcwQfpzoGXzdq8hqaRUcw7YLspUHt6BZaDxym6JaLXHnBsR1H) contains rows 61, 64–66, 69–71 and 75–80. Paused bursts do not establish a sustained throughput ceiling; shared signatures do not measure the full serialized transaction-size boundary.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 2026-10-27T09:56:52.083Z | Sell 0.0025 SOL → USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x736ab1e5f4055bb0a88d52e51da8d04a61421acb3220e8ae8ea97492211d16bf) |
| 60 / 29 | 2026-10-27T10:01:29.420Z | Sell 0.0025 SOL → USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x5fe69a2a8b27752e093dbfab7b7a7004484f1e5af599f24afd1043b28ed838cf) |
| 84 / 29 | 2026-10-27T10:03:00.018Z | Sell 0.0025 SOL → USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x95c8685e063a82dc4dbef5537ff23e8caca6553e6e40b7583dd87027d3d38cae) |

</details>

## 4. Opposing orders / CoW

**Direct stablecoin matching achieved.** All 14 placed main orders filled; the SOL/USDC opposite sides still settled separately.

<details>
<summary>Order evidence and metrics</summary>

Planned: 15; placed main orders filled: 14/14. **Total transactions:** 11. **Median / longest observed fill:** 9.875 / 19.196 seconds. Settlement sizes (count × orders): 9×1, 1×2, 1×3.

**Direct stablecoin matching verified on chain.** [Transaction](https://solscan.io/tx/5BcqU5xMDDxuxFrPKwxk9AvNvsmT7iQJJCdYda6cWrMFbNsNJzTyDUMZZ1wVHAhveoV7dFis5z4yH9ZNFYwTNP7t) (slot 462031141, version 1, successful) settles rows 126/129, each selling 3 USDC → USDT, with row 128 selling 1 USDT → USDC. It collects 6,000,000 raw USDC and 1,000,000 raw USDT; Jupiter swaps only 5,001,228 USDC units for 5,007,883 USDT units. The remaining 998,772 USDC and the collected 1,000,000 USDT move directly to payout escrows. User payouts after fees are 3,000,806 USDT units per USDC seller and 997,386 USDC units to the USDT seller. The opposite inputs are directly matched. Only the unmatched remainder uses a DEX. The common settlement and transfers prove matched execution. Recovered driver records join the successful group to auction 386140, solution 10.

**SOL/USDC direct matching not achieved in the inspected group.** [Transaction](https://solscan.io/tx/4t2BKa4YyoNKiPcoSiBZtAiyQrnybXRVv48DVTKVHefzgZ6erUXTg3LA4FnrR7Mmkuv7xvzjBymXZJyi9zA9HLoE) (slot 462031133) groups rows 122/124, both selling SOL, and routes the entire 50,000,000-lamport input through Jupiter. Opposite row 123 settled in [Transaction](https://solscan.io/tx/23esMeSetj8tRvhA3fFSYZx72m6rRSnenRuFXBXT9YvkgESkGsboSv3u5U3nzq923PpuJH2GG7J1Ua7KUaREUC8Z). Row 125 settled in [Transaction](https://solscan.io/tx/3RUy1Rwasv3ShC8kGuCkq56pGNm2pYNaSWLEmy8Kh7cj5hFRVWmUdXdikCJPFrdLxzReHx4Jr6jeFY764uo5FnqY). We think netting or route selection missed this opportunity, with medium confidence. Recovered driver records selected rows 122/124 as solution 12 and the opposite exact buy row 123 as solution 11 in the same auction, 386139. Rows 122/123 allow a common price before fees of 98.9424–99.9928 USDC per SOL. Fees, native-SOL handling or better DEX economics may still make direct matching unattractive. The signed interval alone does not prove a profitable match. First, inspect the archived solve input/output for auction 386139 and calculate a matched candidate using the actual fees. A feasible better scoring match would support a solver construction gap, while a worse or infeasible candidate would support deliberate selection. Inspect Asao’s netting and settlement construction. Repair ownership is unproven.

Rows 126/128/129 all filled after a retry. One shared Asao solution, auction 386139/14 (settling started at the index time 10:08:39.349483721 UTC), failed driver simulation at 10:08:42.884729367 UTC: `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. The inner swaps completed before Jupiter rejected the slippage threshold. It failed before payout and was not submitted. The full recovered simulation log names `Instruction: Route`, confirming a fixed input swap and an output threshold failure. Its quoted output, numeric minimum and simulated output remain unavailable. We think the DEX route had too little slippage headroom, with medium confidence. The same orders later matched, so stablecoin and CoW support worked. We cannot separate a stale route from a tight output threshold without the quote and simulated amounts. First, compare quoted and simulated output, encoded minimum and route age for 386139/14 against the successful 386140/10. Check whether the simulated output fell below the minimum. Fix amount/fee arithmetic if the quote itself violates that bound, otherwise refresh routes or add headroom while preserving user limits. Inspect Asao’s residual swap construction and driver integration. Repair ownership is unknown.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 116 / 62 | 2026-10-27T10:06:05.287Z | Buy SOL → exactly 2.6 USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xc7d3691c3e24d0ad84c9dacfb1f067e170d25b830b239b9beb85c5e114ebf06e) |
| 118 / 65 | 2026-10-27T10:06:05.643Z | Buy SOL → exactly 3.1 USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x7e2f8207482c8dde3434278a2d1470fa3ae3558298ae6ff3136cf6931135f9a4) |
| 122 / 61 | 2026-10-27T10:08:34.942Z | Sell 0.02 SOL → USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xdaccd231b4e42d3096f953c753d50b9b8ae0ba14b4f01da57be7b3410dd7f3a1) |
| 123 / 62 | 2026-10-27T10:08:35.711Z | Buy USDC → exactly 0.02 SOL [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xe6b65f0cb55c5f8da90a7bc5b18f47c39b9da959a97decfb8e109c1d092fedb6) |
| 124 / 63 | 2026-10-27T10:08:34.743Z | Sell 0.03 SOL → USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x3e1b6ed9f9029a10005892d8d4f733722df1da40d1f8504449ab76b3ea9d94ca) |
| 125 / 64 | 2026-10-27T10:08:35.458Z | Sell 1.2 USDC → SOL [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x305058497360bcf55d1d6b0072c32c5e2a854d515203176e5f84f722e2089206) |
| 126 / 65 | 2026-10-27T10:08:39.349483721Z | Sell 3 USDC → USDT [sponsored] | `other` index marker; recovered auction 386139/14: Jupiter `SlippageToleranceExceeded`, instruction 3, code 6001, simulation only. Final **fulfilled**. **Ownership unknown.** | [Debug](https://debug.barn.cow.fi/order/0x008347f88b7e6d2b5d54629c9018efb88b03558f35e086707517733ced22e9d0) |
| 128 / 67 | 2026-10-27T10:08:39.349483721Z | Sell 1 USDT → USDC [sponsored] | `other` index marker; recovered auction 386139/14: Jupiter `SlippageToleranceExceeded`, instruction 3, code 6001, simulation only. Final **fulfilled**. **Ownership unknown.** | [Debug](https://debug.barn.cow.fi/order/0x9a7c883263b6931038d6ba060ad3435fe8a1e28cdedc4df67914a8388d38dd99) |
| 129 / 68 | 2026-10-27T10:08:39.349483721Z | Sell 3 USDC → USDT [sponsored] | `other` index marker; recovered auction 386139/14: Jupiter `SlippageToleranceExceeded`, instruction 3, code 6001, simulation only. Final **fulfilled**. **Ownership unknown.** | [Debug](https://debug.barn.cow.fi/order/0x144260eb83ef68f933038e3e5f77004f9bf5d75e41262d4528070f073574b1f1) |

Setup row 119/trader 66 requested exactly 3.1 USDT paying at most 0.031250252 SOL. It was rejected with `400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one`. Prepared at 10:06:05.678 UTC, rejected at 10:06:05.757 UTC, with UID still absent in recovery. We think, with medium confidence, that client/backend blockhash freshness or RPC disagreement fits better than a local POST queue: only 79 ms elapsed after preparation, and the client takes its API permit before quoting/signing (`sim/src/orders.ts`, `place`). The original fetch time and last valid height are still missing, so an old RPC result or delay before preparation is not excluded. First, decode the already-saved request transaction and compare its hash’s validity at client fetch, API validation and both RPC nodes at 10:06:05 UTC. Expiry on both supports refreshing/re-signing before POST, while disagreement supports RPC consistency checks. Do not replay the transaction. Row 127 later acquired USDT separately and filled, so matching was not wholly blocked. The likely component and owner are CoW client/API/RPC creation path. No Asao execution, underlying repair owner unproven.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 119 / 66 | 2026-10-27T10:06:05.757Z | Buy SOL → exactly 3.1 USDT [sponsored]; signed sell maximum 0.031250252 SOL | `400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one`; not accepted. Recovery: `Order was not found in the API`. | [Debug](https://debug.barn.cow.fi/order/0x5e322ffc868f78fb52b42dd79235acb278b5b63078ed606dac5cf22fe9a9f56a) (prepared UID; no API record found, link may not resolve) |

</details>

## 5. Token coverage

**Coverage partly achieved.** 36/37 sells and 14/15 exact buys filled. XAUt0 entered an auction but had no proposal among its 17 ranked solutions, and SKHY failed before any program ran.

<details>
<summary>Order evidence and metrics</summary>

Planned: 52; placed main orders filled: 50/52. **Total transactions:** 50. **Median / longest observed fill:** 6.947 / 12.351 seconds. Settlement sizes (count × orders): 50×1.

**Fixed-input sells filled (36):** [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1), [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb), [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8), [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB), [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263), [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm), [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr), [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn), [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So), [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v), [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij), [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT), [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr), [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6), [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4), [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm), [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs), [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa), [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re), [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA), [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump), [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5), [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82), [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT), [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL).

**Exact-output buys paying SOL filled (14):** [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1), [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb), [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8), [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB).

All 52 main requests received usable quotes. Ordinary public transfers were tested; nonzero transfer fees, active hooks and confidential/paused transfers were not exercised. A successful sell does not establish exact buy support.

Row 160/trader 99 sold 0.005 SOL → XAUt0 and ended cancelled. It was placed at 10:10:02.122 UTC and entered auction 386156 at 10:10:03.22829318 UTC. It timed out after 67.611 seconds with a signed minimum of 123 raw XAUt0 units. The recovered auction had 24 orders. Asao presented 17 solutions covering 17 other orders, all 17 passed driver simulation and won, and autopilot recorded 0 filtered solutions. XAUt0 was absent from those proposals and the executing set. For [XAUt0](https://debug.barn.cow.fi/order/0xb09fbe7ed1b2847586ba3dadcea285342e8d236dd24de2d6ef4f91ec7903ca4e), we therefore think the gap was before ranking, with high confidence for this auction. It did not lose to another ranked candidate. Whether Asao omitted it or the driver removed it before proposals remains unknown. The same request also failed on 26 October, while the same amount filled for self-paid EUROP row 162. A route, limit or eligibility issue remains our leading explanation, with low confidence on the trigger. The completed read for request 38053 returned 69 records for those 17 solutions, but no engine response body or XAUt0 rejection. The raw response is not present in the recovered logs. First, compare Asao’s archived response for auction 386156 with the driver’s accepted IDs. No XAUt0 candidate would point to solver generation. A candidate omitted by the driver would point to validation. Compare any candidate’s net output with the 123-unit limit before changing token support. Inspect Asao generation and CoW driver acceptance. Repair ownership is unknown.

Row 177/trader 79 requested exactly 2,600 raw SKHY with a signed sell maximum of 3,856,751 lamports. It expired without creation. Auction 386163/1 failed at 10:10:38.756542978 UTC with `FailedToCreate` → RPC `-32002`, `Transaction simulation failed: Blockhash not found`, `BlockhashNotFound`, empty logs and 0 compute units. Submission was attempted 32.406 seconds after acceptance. Expiry was observed after 34.862 seconds, although signed `validTo` was 10:15:35 UTC. Creation failed before SKHY execution. `BlockhashNotFound` alone does not prove expiry. For [SKHY](https://debug.barn.cow.fi/order/0x9a1f23df9f5e42ca6541009ad7ba452ce0fae4fc8c3654415367ba7ed6465a18), we would start with creation lifetime handling, with medium confidence. The same wallet’s sponsored SKHY sell filled 7.667 seconds after placement and yesterday’s exact buy also filled. Delayed selection, an old hash and disagreement between RPC nodes remain alternatives. The original hash/issuance height is unavailable. First, compare submitted hash, RPC node, current height and saved last valid height 440057431 for this creation. A past height confirms expiry, while a hash still valid accepted by another node points to RPC divergence. If expiry is confirmed, rebuild and sign a fresh creation template. Inspect CoW creation and driver integration and client blockhash sourcing. Repair ownership is unproven. [Debug](https://debug.barn.cow.fi/order/0x9a1f23df9f5e42ca6541009ad7ba452ce0fae4fc8c3654415367ba7ed6465a18).

Row 170/trader 72 requested exactly 0.464 USDG paying SOL and later filled. The index time 10:10:14.044384462 UTC is the `settling orders` record, not a separate failed attempt. That exact auction 386158/0 passed driver simulation at 10:10:14.984805363 UTC and was submitted at 10:10:14.997890811 UTC; [failed transaction](https://solscan.io/tx/61uaV3y42JCP3TxDNnmj6xELgTtymWd3f1yoM68MyQc2ZVPcHbiTERtwzsiyLchoEYgiiYMLviJWzctWRXQyiT87), slot 462031576, reverted at instruction 5 in Jupiter `JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4`, code 6001. The failed inner transfers show 4,670,930 lamports entering the route plus a separate 2,336-lamport transfer, 463,845 raw USDC intermediate output and 463,816 raw USDG to the route output account. That is 184 raw units / 0.000184 USDG / 3.97 bps below the user’s 464,000-unit target. These transfers rolled back with the transaction. User balances did not change. The full RPC log names `Instruction: Route`. Its data `CPDb3UmxN3k8QQXyfd86eSom9182vGnYDApavDMcoKeMDw7dnVPS5sM` starts with discriminator `e517cb977ae3ad2a`, matching Anchor `global:route`. The Route fields decode to input 4,673,266 lamports, quoted output 464,476 raw USDG, slippage 10 bps and platform fee 0. The instruction encodes the quote and 10 bps, rather than a literal minimum. Those values imply an output threshold around 464,011–464,012 raw USDG, about 11–12 units above the user’s 464,000-unit target. The deployed program’s rounding is unverified. Actual output 463,816 was about 195–196 units below that threshold, exactly 184 below the user target and 14.21 bps below the encoded quote. For [USDG](https://debug.barn.cow.fi/order/0x164d2cf5f40c582b39644e0e7572fd5095482556949beb8462843059c9e18e8e), we think the route left too little output cushion, with medium confidence on why it changed after simulation. Simulation passed and the later fill succeeded, so missing token support fits poorly. State movement and inaccurate quote or fee assumptions remain alternatives. First, compare the original simulated output with 464,476 and the execution output of 463,816. Refresh the route or increase swap input within the signed 4,701,565-lamport maximum if the available balance permits. Merely raising slippage to 15 bps would allow output below the user target, so it would not fix this order. Inspect Asao route sizing and CoW submission timing. Repair ownership is unknown.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 131 / 70 | 2026-10-27T10:09:54.331Z | Sell 0.01 SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xd4920b6a77cd3055c95c40a058cf063f68c9c3663eb77b443cb3f1bfc7fbc212) |
| 137 / 76 | 2026-10-27T10:09:55.046Z | Sell 0.01 SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x8d59c1294f7a514f926301768a4f2cc9ce8686c2bc8db1bc6114768f468cfa2d) |
| 162 / 101 | 2026-10-27T10:10:02.376Z | Sell 0.005 SOL → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xb17a2a9db3268df9846548d1cfd7b62577a1b016227e7477f784fcb800ecc89e) |
| 171 / 73 | 2026-10-27T10:10:09.442Z | Buy SOL → exactly 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x75348aca6b152a788a3a088feea5c91a51f034d901e8dd87ef0802523dc363d9) |
| 174 / 76 | 2026-10-27T10:10:06.203Z | Buy SOL → exactly 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xefb3244b8e240b609214fd07ad55da2e2178986309b60d5c12fd63c95ff171d8) |
| 160 / 99 | 2026-10-27T10:11:09.733Z | Sell 0.005 SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) [self] | `main timeout`; final **cancelled**, no fill. Placed 10:10:02.122 UTC. [Cancel transaction](https://solscan.io/tx/3RaLNWSuxJRDcTauWWPX4wVoPwSeMmvDiez6nGnDEkPsH1Frn4gFLs1XpPfewyVzc1Yyf49Ea6zxYNc1mdcc9iXi). **Ownership unknown.** | [Debug](https://debug.barn.cow.fi/order/0xb09fbe7ed1b2847586ba3dadcea285342e8d236dd24de2d6ef4f91ec7903ca4e) |
| 177 / 79 | 2026-10-27T10:10:38.726446749Z | Buy SOL → exactly 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) [sponsored] | `creation_blockhash_not_found`; recovered 386163/1: `FailedToCreate` / RPC `BlockhashNotFound`, 0 CU. `main expired`; final **expired**, never created on chain. Repair owner unproven. | [Debug](https://debug.barn.cow.fi/order/0x9a1f23df9f5e42ca6541009ad7ba452ce0fae4fc8c3654415367ba7ed6465a18) |
| 170 / 72 | 2026-10-27T10:10:14.044384462Z | Buy SOL → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) [sponsored] | `other` index marker; recovered 386158/0: `Reverted { err: InstructionError(5, Custom(6001)) }`, Jupiter swap output rejection after simulation passed; failed transaction linked above. Final **fulfilled**. **Ownership unknown.** | [Debug](https://debug.barn.cow.fi/order/0x164d2cf5f40c582b39644e0e7572fd5095482556949beb8462843059c9e18e8e) |

**Recovered cleanup quote failures; ownership unknown.** Nine other residual-token sells returned the saved truncated `NoLiquidity` response before placement, then all 9 later filled. Including USDe below, 10 cleanup quote requests had this error; USDe alone remained unfilled after a later accepted order. The later fills rule out permanent sell-back rejection for the 9 recovered requests. Temporary route availability or a quote-provider failure is possible, with low confidence; the response identifies neither the provider nor the underlying cause. Full provider responses and exact failed-request times are unavailable, so the times below are journal observations. CoW should compare the original provider responses with the later successful requests before assigning repair ownership; a provider error supports service recovery, while a valid route rejected downstream supports checking quote validation. These are cleanup failures, not extra main trades.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 94 | 2026-10-27T10:12:36.223Z (observation) | Cleanup sell 0.864526 [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6) to SOL | Saved truncated text: `Not Found {"errorType":"NoLiquidity","description":"no route`; no order from this quote. Later cleanup **fulfilled**. **Ownership unknown.** | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0x6d45da0b482cd9300c4cf100a23eab262a1bed3983474d01191e07d7c2b44f07) |
| - / 95 | 2026-10-27T10:12:38.854Z (observation) | Cleanup sell 0.22511 [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) to SOL | Saved truncated text: `Not Found {"errorType":"NoLiquidity","description":"no route`; no order from this quote. Later cleanup **fulfilled**. **Ownership unknown.** | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0x41b39aa1b6c4262046cbbf0fa36274b793e124c5e48c07c25baf80abbb2a9097) |
| - / 96 | 2026-10-27T10:12:44.643Z (observation) | Cleanup sell 0.006843311 [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm) to SOL | Saved truncated text: `Not Found {"errorType":"NoLiquidity","description":"no route`; no order from this quote. Later cleanup **fulfilled**. **Ownership unknown.** | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0x12bd2f96cadcfce60afe0ad10063541298a75a3bdfe5190e31e34c33ab6dadcb) |
| - / 97 | 2026-10-27T10:12:51.586Z (observation) | Cleanup sell 0.00043205 [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs) to SOL | Saved truncated text: `Not Found {"errorType":"NoLiquidity","description":"no route`; no order from this quote. Later cleanup **fulfilled**. **Ownership unknown.** | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0x6a4e177c61dc1aa361df3f22506f0e156d0480e77b50bfa750e299153d59a219) |
| - / 100 | 2026-10-27T10:12:52.487Z (observation) | Cleanup sell 0.00272018 [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) to SOL | Saved truncated text: `Not Found {"errorType":"NoLiquidity","description":"no route`; no order from this quote. Later cleanup **fulfilled**. **Ownership unknown.** | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0x5bfee1bbcfa51d446d057f8aaccbc010bfda8edce5745980a0888be26ef26b6f) |
| - / 98 | 2026-10-27T10:12:56.330Z (observation) | Cleanup sell 0.00135276 [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa) to SOL | Saved truncated text: `Not Found {"errorType":"NoLiquidity","description":"no route`; no order from this quote. Later cleanup **fulfilled**. **Ownership unknown.** | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0x6ba0b52a0c8f5ad783fac860d67ae18101c73dd206846d519675c82acf56cdba) |
| - / 103 | 2026-10-27T10:12:56.486Z (observation) | Cleanup sell 2255.16002 [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5) to SOL | Saved truncated text: `Not Found {"errorType":"NoLiquidity","description":"no route`; no order from this quote. Later cleanup **fulfilled**. **Ownership unknown.** | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0xe0e21efdb911353afbf97b9408946d5c959187f57a6b3e3a8062533e5a2cc312) |
| - / 102 | 2026-10-27T10:12:56.635Z (observation) | Cleanup sell 7.918096 [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) to SOL | Saved truncated text: `Not Found {"errorType":"NoLiquidity","description":"no route`; no order from this quote. Later cleanup **fulfilled**. **Ownership unknown.** | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0xce7042d5773e3cefa35ecc63052208241a8a1ddad445804cbd7ca9751d95fd13) |
| - / 104 | 2026-10-27T10:13:01.074Z (observation) | Cleanup sell 1605.942134 [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82) to SOL | Saved truncated text: `Not Found {"errorType":"NoLiquidity","description":"no route`; no order from this quote. Later cleanup **fulfilled**. **Ownership unknown.** | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0x1fa634617006224acfcaf5f67e931fa8ee7ca639519eca2e987df7be659623fd) |

**Recovered cleanup quote service errors.** Three residual-token sells received truncated HTML `503 Service Temporarily Unavailable` responses before placement; all 3 later filled. These are separate from the 4 account-order listing errors below. The short 10:12:33-10:12:39 UTC cluster and later recovery support a transient API/upstream service problem, with medium confidence; the failing backend is unknown because request IDs and full responses were not saved. CoW should correlate quote API/upstream health in this window before choosing bounded quote retries or repairing request handling. No solver execution occurred for the failed quotes.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 91 | 2026-10-27T10:12:33.819Z (observation) | Cleanup sell 0.00001251 [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij) to SOL | Saved truncated text: `<html>\r\n<head><title>503 Service Temporarily Unavailable</ti`; no order from this quote. Later cleanup **fulfilled**. | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0x5b7586435205a800d2bb0d1c56bcb2012d1e8bc4549adc04c37244f71eb34f92) |
| - / 93 | 2026-10-27T10:12:35.314Z (observation) | Cleanup sell 0.894734 [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) to SOL | Saved truncated text: `<html>\r\n<head><title>503 Service Temporarily Unavailable</ti`; no order from this quote. Later cleanup **fulfilled**. | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0x43466247f6ff43f1eb793c3b716acd87acd72eca3185654269906d216e0162e7) |
| - / 90 | 2026-10-27T10:12:38.760Z (observation) | Cleanup sell 0.008201398 [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v) to SOL | Saved truncated text: `<html>\r\n<head><title>503 Service Temporarily Unavailable</ti`; no order from this quote. Later cleanup **fulfilled**. | No order ID: quote failed before placement; [later successful cleanup](https://debug.barn.cow.fi/order/0x06e716b60355c89044238029a8325eb04947af53484533b7f08ef1ef3c0d8cd0) |

**Cleanup; excluded from main totals.** There were 116 filled and 2 cancelled cleanup orders across the run. The two cancellations below account for all unfilled accepted cleanup orders.

EUROP and USDe cleanup orders ended cancelled. Cleanup is excluded from main totals. EUROP’s original minimum was 4,943,749 lamports. The same 443,156-unit replacement later filled for 4,874,244, 69,505 lamports / 1.406% below that original limit, with a new minimum of 3,463,061. USDe’s earlier quote returned `NoLiquidity`. The accepted 996,383,350-unit sell later joined auction 386282/0 and failed simulation at 10:20:48.479908377 UTC: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Final cancelled, signed minimum 8,500,840 lamports. We think, with medium confidence, that EUROP’s old price/fee limit was too tight, rather than token support. Different timestamps leave market movement as counterevidence. For USDe, the recovered simulation log includes `Instruction: Route`, confirming a fixed input swap and output threshold failure. The exact encoded minimum and simulated output remain unavailable. The earlier quote cause and why no later successful candidate appeared remain unknown. The successful inbound SOL → USDe flow tests the opposite direction only. First, compare the archived EUROP candidate’s net output at 10:12:50–10:13:59 with 4,943,749. Output below it confirms the limit explanation. For USDe compare original quote and the 386282/0 encoded minimum against simulated output. Below-minimum output supports route refresh/headroom, while wrong fee arithmetic requires a construction fix. No failed on-chain signature exists for the USDe simulation rejection. The likely component is Asao route construction or CoW quote validation. The repair owner is unknown. Test team owns cleanup reconciliation.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 92 | 2026-10-27T10:12:38.089Z | Cleanup sell 0.99638335 [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT) → SOL | Saved truncated text: `Not Found {"errorType":"NoLiquidity","description":"no route`; no order from this quote. A later accepted order also failed to fill. **Ownership unknown.** | No order ID: quote failed before placement |
| — / 101 | 2026-10-27T10:13:59.958Z | Cleanup sell 0.443156 [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) → SOL | Timeout after 69.761 seconds; final **cancelled**. Placed 10:12:50.197 UTC; signed minimum 0.004943749 SOL. [Cancel transaction](https://solscan.io/tx/Ve6mxqyosrSnShUquepqn2S4T1zfjD3cUjRSB8XNbX9EcBVTpkeTtNZqvbgP7acRNh29aTkuUNVjvhyAUNkY6Ze). **Ownership unknown.** | [Debug](https://debug.barn.cow.fi/order/0x42d6dda797c7212290156989d17852495c8c792e6528b69686f31ce3ce120628) |
| — / 101 | 2026-10-27T10:21:17.023Z | Cleanup sell 0.443156 EUROP → SOL | Replacement **fulfilled**, received 0.004874244 SOL; minimum 0.003463061 SOL. Trader 101 is no longer pending. | [Debug](https://debug.barn.cow.fi/order/0xebe12b6a66d1d4a2c378b9bcbb405418f574478563b7711a60055e74f29709ec) |
| — / 92 | 2026-10-27T10:20:48.393692263Z | Cleanup sell 0.99638335 USDe → SOL | Index marker `other`; recovered 386282/0: Jupiter `SlippageToleranceExceeded`, instruction 4, code 6001, simulation only; timeout observed 10:21:58.863 UTC after 74.823 seconds. Final **cancelled**. Placed 10:20:44.040 UTC; signed minimum 0.008500840 SOL. [Cancel transaction](https://solscan.io/tx/3RrZF8gQzUjd8nKKQucBzb1rRyDTdVcJq7Ug28zKJ3ZKE2WZrgaZfZdHpLFfkMSMf2emcrhjbJ2PBxh4uzBgvxAB). Balance 0.99638335 USDe remained at 10:22:11.177 UTC. **Ownership unknown.** | [Debug](https://debug.barn.cow.fi/order/0x171e75aad1818d58c9bfae31fa434b1eafa20e8521a4f8fd24bfdc199b73969a) |

Account listings failed for traders 81/86/79/87 during cleanup. All 4 later recovered. The error was `GET account orders: 503` over 10:12:13.728–10:12:17.958 UTC, a 4.230-second cluster. We think, with medium confidence, that a transient account-orders service/upstream problem fits the close timing and later recovery better than malformed trader data. The exact backend cause is unknown because request IDs and upstream errors were not saved. First, correlate API/upstream health and request status within that 5-second window. A shared upstream failure supports bounded read retries/backoff, while healthy upstreams with for each account failures point to request handling. This does not justify rerunning completed trades. The owner is CoW account-orders service. Test team owns reconciliation.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 81 | 2026-10-27T10:12:13.728Z | Cleanup account-order listing | `GET account orders: 503`; later cleanup recovered. | No failed order ID: account listing request |
| — / 86 | 2026-10-27T10:12:13.972Z | Cleanup account-order listing | `GET account orders: 503`; later cleanup recovered. | No failed order ID: account listing request |
| — / 79 | 2026-10-27T10:12:15.923Z | Cleanup account-order listing | `GET account orders: 503`; later cleanup recovered. | No failed order ID: account listing request |
| — / 87 | 2026-10-27T10:12:17.958Z | Cleanup account-order listing | `GET account orders: 503`; later cleanup recovered. | No failed order ID: account listing request |

Final metadata leaves traders 3 and 92 pending. `finished: false` concerns unfinished cleanup; all scenario phases finished. The rejected row-119 prepared UID is also retained in recovery as absent from the API; it is not an additional accepted order or additional failure.

</details>

## 6. Fresh receiving accounts

**Fresh flow completion achieved: 8/8.** The inspected receiving account was created with user paid rent before settlement, so solver paid creation is still untested.

<details>
<summary>Order evidence and metrics</summary>

Planned: 8; placed main orders filled: 8/8. **Total transactions:** 6. **Median / longest observed fill:** 8.026 / 15.763 seconds. Settlement sizes (count × orders): 4×1, 2×2.

Four self-paid and four sponsored flows filled: SOL → USDC/USDT sells and exact buys. The journal checked all 8 receiving addresses absent before quoting at 10:14:16.168 UTC. Both runs used freshAccounts, 0.15 SOL funding per trader and 500-bps slippage; this comparison does not isolate a change in solver behavior.

**Solver-paid receiving account creation remains inconclusive.** Row 183’s successful [creation transaction](https://solscan.io/tx/DpQS2dqsuM9ZHRA3NCneREv9yqhVszWJtGTfmqXBuBJCmeWdodtXHNuxFL1HX9tkFbzfeiEB5KB4ryP9FjwXUQs) (slot 462032711, legacy) creates receiving USDC account `3YPAnt9H3GjF8Bph3TiyrWMxhyWZ25xVhaLpR87Hk5Jm` through an idempotent ATA instruction, paying 1,488,440 lamports of rent from the user/transaction payer before settlement. This is one independently inspected example, not an on-chain inspection of all eight. **Next check — test team + CoW:** design a case where the receiving account remains absent until settlement and record the rent payer before assigning a solver requirement.

The two order [Transaction](https://solscan.io/tx/VQTeCY6qWmkcBdqnUbaoReJL9GrnyRtztGrj31E1iVBx1KFzHTBNHuwFyBKFEDrJbtHkZ6W2jMzRvaMTAvVf3Ct) settles rows 183/184; it verifies fresh-flow batching, not solver-funded account creation.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 183 / 107 | 2026-10-27T10:14:21.418Z | Sell 0.1 SOL → USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x4252131ed23c3eef077084d4913e19619edb853b0550087a4b49b692e74dec6d) |
| 184 / 108 | 2026-10-27T10:14:20.205Z | Sell 0.1 SOL → USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xd6f1967cd6f0aa09481359350cd1e91c7243cf134320d4734c529352132c8cc3) |
| 185 / 109 | 2026-10-27T10:14:21.999Z | Buy SOL → exactly 10 USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xd7e5c6666900cbf0b19fd1b3a0e55713ef2f7601eaee6afbda5254b3c7d78b90) |
| 188 / 112 | 2026-10-27T10:14:20.582Z | Sell 0.1 SOL → USDT [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x047e988b21c9f0a3481114a7d99a708bd49d6770d9b479d9a09b6da79284b296) |

</details>
