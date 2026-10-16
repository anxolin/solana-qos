# Grafiks solver test report

Date: 16 October 2026. Environment: staging / Barn. Trading: 09:41:57–10:04:53 UTC; cleanup finished 10:06:26 UTC. Snapshot fetched 10:09:03 UTC.

**TLDR:** 147 of 186 placed scenario orders filled; 39 expired before on-chain creation, so the opposite-order test couldn’t run. Batches of 5 worked, and all 84 burst trades filled. Next, trace the creation expiry and rerun opposite orders and exact buys.

Placed orders include 6 extra acquisition orders; 147 of 189 planned flows completed. There were 65 distinct successful scenario settlements; this excludes creation, funding, failed attempts and cleanup. Fill times measure placement → simulator-observed fulfillment, including polling delay; only filled orders contribute. Error timestamps show the first failed attempt (or first observed expiry); successful examples show placement.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. 25 same-direction sells | Achieved: batching; 25/25 filled | Solver: check swap output limits |
| 2. Sell bursts | Achieved: burst batching; 84/84 filled | Test team: measure sustained throughput |
| 3. Opposing orders / CoW | Inconclusive: 0/15 completed; all 15 accepted orders expired | Test team + backend: trace sponsored creation |
| 4. Token coverage | Partial coverage: 28 fills / 52 placed; 24 expired | Trace creation expiry; rerun exact buys |
| 5. Transaction size | Inconclusive: 10/10 filled, but below size target | Test team: build transactions near 1232 bytes |

## Changes since 9 October 2026

Across the 4 shared scenarios, completed flows changed from 157/179 to 137/179; maximum observed batch size rose from 4 to 5.

<details>
<summary>Comparison with the previous run</summary>

Baseline: 9 October staging Grafiks reports, stored with the misleading `20260910` filename prefix; dates and session metadata confirm 9 October. Baseline settlement-attempt totals rely on that report.

| Metric | Previous | Current, same 4 scenarios |
| --- | --- | --- |
| Planned rows / placed orders / filled flows | 179 / 157 / 157 | 179 / 176 / 137 (includes 6 extra acquisition orders) |
| 25 sells: fills; settlements; median / max seconds | 25; 19; 59 / 115 | 25; 9; 25.591 / 70.512 |
| Bursts: fills / planned; settlements; median / max seconds | 77/84; 51; 25 / 84 | 84/84; 22; 10.682 / 31.848 |
| Opposing orders | 14/15 completed; DEX routes, no direct matching | 0/15 completed; expired before creation |
| Token sells / exact buys | 37 / 4 of 15 | 25 / 3 of 15; 24 accepted orders expired |
| Orders with failed settlement attempts | 20 (11 main + 9 cleanup), all later filled | 15 (5 main + 10 cleanup), all later filled |

Timing basis includes polling; bursts changed from 4-minute to 90-second spacing, and creation modes/outcomes differ. These figures don’t isolate solver speed. The previous size scenario wasn’t covered. Jupiter `6001` and Titan `6008` were already recorded; the 15 affected order IDs below are new to this run. Newly recorded: 39 `sponsored creation expired, dropping the order` events, all expired; and 1 unmapped `Custom(7000)` candidate rejection, ownership unknown. Missing earlier candidate records prevent claiming a newly introduced defect.

Recovered exact buys (previously `NoLiquidity` at the same requested amounts):
- Row 168: Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); fulfilled. [Debug](https://debug.barn.cow.fi/order/0x72932865b13b61db80caca2f7499abbaf324611b522814ece0b46b09c5543a9a)
- Row 172: Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W); fulfilled. [Debug](https://debug.barn.cow.fi/order/0x72dd0d6634d1d7a49bc4960d3e492ede2f5393b1e641512dd80f88202e6e2243)
- Row 176: Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1); fulfilled. [Debug](https://debug.barn.cow.fi/order/0x144e1b8aece52af97da299efb544c0f9df984c2b3ffb263f5785a0a20d030378)

Expected Token-2022 rejections stayed at 3. Previously there were 12 `NoLiquidity` and 7 self-paid creation failures; neither message appears here, but 39 pre-creation expiries do. This does not prove the old issue is fixed.

</details>

## 1. 25 same-direction sells

**Batching achieved.** All 25 sells filled, including batches of 5; 3 main orders needed another settlement attempt.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 9. Filled / placed: 25/25. Planned rows: 25. Median / longest fill: 25.591 / 70.512 seconds.

Setup: 25 simultaneous self-paid sells of 0.005 SOL → JUP. Settlement batch sizes: 2 singles, 3 pairs, 1 triple, 1 batch of 4 and 2 batches of 5. [Verified batch of 5](https://solscan.io/tx/2Yt2nS4Bkzdwzbrw7dxDBzERe5FMhRbsJpnEKiPpDXAYB8mj1w3Q9jXzn6W3BZTcnJJXBjADyPYrZR89xptanaPs) includes rows 1, 4, 6, 16 and 19: 1156 signed bytes and 1 top-level Jupiter swap.

Confirmed swap failures: the verified Jupiter/Titan programs rejected minimum output. Driver simulation passed before all 6 submitted attempts (5 later failed on chain, 1 was rejected by RPC preflight); another winning attempt failed driver simulation. Quote age, route limits and execution changes still need investigation; these failures do not by themselves prove a solver code defect. Across the run, 7 winning attempts affected 15 distinct orders, all filled later. Six later deadline warnings are not extra failures or proof the solver responded late.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 09:42:05.981 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | None; fulfilled. [Successful settlement](https://solscan.io/tx/2Yt2nS4Bkzdwzbrw7dxDBzERe5FMhRbsJpnEKiPpDXAYB8mj1w3Q9jXzn6W3BZTcnJJXBjADyPYrZR89xptanaPs) | [Debug](https://debug.barn.cow.fi/order/0xe60bf543f8d155955642149b009c83fbfc4d842e2b61e58dae569c4b980b3543) |
| 4 / 4 | 09:42:06.580 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | None; fulfilled. [Successful settlement](https://solscan.io/tx/2Yt2nS4Bkzdwzbrw7dxDBzERe5FMhRbsJpnEKiPpDXAYB8mj1w3Q9jXzn6W3BZTcnJJXBjADyPYrZR89xptanaPs) | [Debug](https://debug.barn.cow.fi/order/0xdbc10803526b46c2563afd1d3a79dd3de9a355f4a695da59d99d6b3c9759a8a3) |
| 7 / 7 | 09:42:26.380503188 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | Failed on chain: Jupiter `6001 SlippageToleranceExceeded`, instruction 3. Filled later. [Failed transaction](https://solscan.io/tx/JnjXsXn4yxxi79BfGF8amnJQb3neR8Yq5aRL7aMDhF9QJVnmDkP7icEFkbaf3f7i5ti591SBnSZ2xmYc19XCyh1) | [Debug](https://debug.barn.cow.fi/order/0x5efc48cb544eb13c8290b4068707a885a949ce86e7bdce81d2e6d9115b0c158c) |
| 12 / 12 | 09:42:26.380503188 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | Failed on chain: Jupiter `6001 SlippageToleranceExceeded`, instruction 3. Filled later. [Failed transaction](https://solscan.io/tx/JnjXsXn4yxxi79BfGF8amnJQb3neR8Yq5aRL7aMDhF9QJVnmDkP7icEFkbaf3f7i5ti591SBnSZ2xmYc19XCyh1) | [Debug](https://debug.barn.cow.fi/order/0x6ae5af8de555bf803a6138b07210c6426423b9d17cf5c9988e915b9fe003b60e) |
| 13 / 13 | 09:42:26.380503188 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | Failed on chain: Jupiter `6001 SlippageToleranceExceeded`, instruction 3. Filled later. [Failed transaction](https://solscan.io/tx/JnjXsXn4yxxi79BfGF8amnJQb3neR8Yq5aRL7aMDhF9QJVnmDkP7icEFkbaf3f7i5ti591SBnSZ2xmYc19XCyh1) | [Debug](https://debug.barn.cow.fi/order/0x8ac491bc159f31eacd5a28bfb87ca4d69f0360335582c3071f2a348da396fa0f) |
| 6 / 6 | 09:42:08.922 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | None; fulfilled. [Successful settlement](https://solscan.io/tx/2Yt2nS4Bkzdwzbrw7dxDBzERe5FMhRbsJpnEKiPpDXAYB8mj1w3Q9jXzn6W3BZTcnJJXBjADyPYrZR89xptanaPs) | [Debug](https://debug.barn.cow.fi/order/0x9c48522c9812b84f823be232c18ebbc2b27c35939d5d75d814cea0e6aee5cfcb) |
| — / 11 | 09:43:54.62704128 | Sell 1.700239 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | Failed on chain: Jupiter `6001 SlippageToleranceExceeded`, instruction 4. Filled later. [Failed transaction](https://solscan.io/tx/2pgUyGZBsqdsR1uVYN6GbiBEe4xrhpHsu5AYqoxA6c5aCFLKaUSPWyHqLk4VRmDQyHxfEMJT5DM6GCWNd5ePWgit) | [Debug](https://debug.barn.cow.fi/order/0x2d526a4a3279540b81c56314127f04647b6404f879183c5b3c247eb621950cab) |
| — / 13 | 09:43:54.62704128 | Sell 1.700324 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | Failed on chain: Jupiter `6001 SlippageToleranceExceeded`, instruction 4. Filled later. [Failed transaction](https://solscan.io/tx/2pgUyGZBsqdsR1uVYN6GbiBEe4xrhpHsu5AYqoxA6c5aCFLKaUSPWyHqLk4VRmDQyHxfEMJT5DM6GCWNd5ePWgit) | [Debug](https://debug.barn.cow.fi/order/0x325ee7a04774928f5df0b60cdd3790adef22e7d342872edd9895eb1fe3ff7aee) |
| — / 14 | 09:43:59.609411355 | Sell 1.700239 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | Failed on chain: Titan `6008 LessThanMinimumAmountOut`, instruction 3; `Amount less than minimum specified.`. Filled later. [Failed transaction](https://solscan.io/tx/5EBoE1W52tk4Pm37V9RZSwvxAg3zdkgJVk29oKgaWGLUPQokRyA4UwK8htMqENmSKVJVdK3pCPpEQzLLshKBNSBK) | [Debug](https://debug.barn.cow.fi/order/0x35955f2b636b37f723f55acb03d0524e2ea4a86737cf8be6cd7f9b51e50b882b) |
| — / 12 | 09:43:59.609411355 | Sell 1.700397 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | Failed on chain: Titan `6008 LessThanMinimumAmountOut`, instruction 3; `Amount less than minimum specified.`. Filled later. [Failed transaction](https://solscan.io/tx/5EBoE1W52tk4Pm37V9RZSwvxAg3zdkgJVk29oKgaWGLUPQokRyA4UwK8htMqENmSKVJVdK3pCPpEQzLLshKBNSBK) | [Debug](https://debug.barn.cow.fi/order/0x6e5cf3786243a70ba568562ee2090c0a7760cd9cd0edd1dd8f29ab05a5d760eb) |

**Additional candidate rejections: 6.** These happened before selection, separately from the 7 winning settlement failures. Exact candidate order IDs were not saved; sharing an auction does not identify affected winning orders.

| UTC timestamp | Auction / solution | Exact saved error | Debug tool URL |
| --- | --- | --- | --- |
| 09:42:26.349356764Z | 279543 / 3 | `SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:42:26.349369157Z | 279543 / 4 | `SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:42:26.349375817Z | 279543 / 5 | `SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:42:26.349408584Z | 279543 / 9 | `SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:42:26.349416056Z | 279543 / 10 | `SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:43:04.850947143Z | 279551 / 68 | `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |

Program checks across these 17 candidates identify 15 Jupiter `6001 SlippageToleranceExceeded`, 1 Titan `6008 LessThanMinimumAmountOut`, and 1 `Custom(7000)` in `Sett1erwx2eqT5A8uvu8GBxDFT2W5TNnhirL7hLmb8m`. The symbolic meaning and ownership of `7000` are unknown; do not map it to a named error.

Cleanup: 25 traders completed; no leftover tokens recorded.

Run-wide cleanup: all 87 cleanup orders filled; 114 traders completed cleanup, 180 token accounts closed and 206 order rents reclaimed. Funding events total 7.98 SOL and sweeps total 7.972433142 SOL; their difference is not a fee total without accounting for trades and starting balances. No deferred cleanup was recorded; the new final-retry change was not active in this run.

Evidence scope: selected completed session `2026-10-16-09-40-composite-grafiks-run`; metadata, scenario, journal, final orders, settlement records and original staging driver/autopilot logs. Competition records identify Grafiks participation: 499 candidates, 125 winning settlements, 118 chain-observed/submitted settlements, 1 pre-submit simulation rejection and 6 submission failures; these include cleanup and are not scenario-trade totals.

</details>

## 2. Sell bursts

**Burst batching achieved; sustained throughput is inconclusive.** All 84 trades filled, but pauses between waves leave the sustained rate untested.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 22. Filled / placed: 84/84. Planned rows: 84. Median / longest fill: 10.681 / 31.848 seconds.

Setup: self-paid SOL → USDC waves of 4, 8, 16, 24 and 32 orders, 90 seconds apart. First placement to last observed fill per wave: 9.550 / 14.154 / 22.368 / 28.881 / 34.729 seconds. Batch distribution: 4 singles, 1 pair, 3 triples, 1 batch of 4 and 13 batches of 5. [Batch of 5](https://solscan.io/tx/25tWjCqZX4HcDp6PJfKjwbpzJYSzPqYnBCPVCAo1mjv53188nrw4186cSXCqB2kbxJGpuoqgQCFhJc1gfWC7pLiv) joins rows 40, 41, 46, 49 and 51: executed payouts equal 106.21 USDC per SOL within 1 raw USDC unit of rounding. Swap count for this transaction was not decoded.

Confirmed swap failures: the verified Jupiter/Titan programs rejected minimum output. Driver simulation passed before all 6 submitted attempts (5 later failed on chain, 1 was rejected by RPC preflight); another winning attempt failed driver simulation. Quote age, route limits and execution changes still need investigation; these failures do not by themselves prove a solver code defect. Across the run, 7 winning attempts affected 15 distinct orders, all filled later. Six later deadline warnings are not extra failures or proof the solver responded late.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 40 / 28 | 09:48:34.610 | Sell 0.0035 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled. [Successful settlement](https://solscan.io/tx/25tWjCqZX4HcDp6PJfKjwbpzJYSzPqYnBCPVCAo1mjv53188nrw4186cSXCqB2kbxJGpuoqgQCFhJc1gfWC7pLiv) | [Debug](https://debug.barn.cow.fi/order/0x828963cb699dd00e97293c55bc73ba2289baaf40507cf86e1400a940b5044d92) |
| 41 / 29 | 09:48:35.512 | Sell 0.004 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled. [Successful settlement](https://solscan.io/tx/25tWjCqZX4HcDp6PJfKjwbpzJYSzPqYnBCPVCAo1mjv53188nrw4186cSXCqB2kbxJGpuoqgQCFhJc1gfWC7pLiv) | [Debug](https://debug.barn.cow.fi/order/0xce501594d355ebc3aae70f1b9eaa45fb65621e9ea32265b58ac2d3acfcfa899f) |
| 46 / 34 | 09:48:35.614 | Sell 0.0025 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled. [Successful settlement](https://solscan.io/tx/25tWjCqZX4HcDp6PJfKjwbpzJYSzPqYnBCPVCAo1mjv53188nrw4186cSXCqB2kbxJGpuoqgQCFhJc1gfWC7pLiv) | [Debug](https://debug.barn.cow.fi/order/0x98f4197531a2cbfaf218f8b71b8bda6bb10f34f6128d0a545a7436310942457b) |
| — / 40 | 09:52:55.129740013 | Sell 1.116015 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | RPC preflight rejected: `Transaction simulation failed: Error processing Instruction 4: custom program error: 0x1771`; logs verify Jupiter `6001 SlippageToleranceExceeded`. Filled later. [Attempted signature (no chain record)](https://solscan.io/tx/5ymYuVcuonjjHEP1m6vCaezp5m2DA2PuskvkEZn41nUzTyNfpWB3RTmkg9CorsAAttu7wNXpNC9tdEokSGRpPRJu) | [Debug](https://debug.barn.cow.fi/order/0x0c3e724599c7bf619cabf57cbec069b7444cb1a75c0d56657334e1cc92ce9cc0) |
| — / 42 | 09:52:55.129740013 | Sell 0.531576 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | RPC preflight rejected: `Transaction simulation failed: Error processing Instruction 4: custom program error: 0x1771`; logs verify Jupiter `6001 SlippageToleranceExceeded`. Filled later. [Attempted signature (no chain record)](https://solscan.io/tx/5ymYuVcuonjjHEP1m6vCaezp5m2DA2PuskvkEZn41nUzTyNfpWB3RTmkg9CorsAAttu7wNXpNC9tdEokSGRpPRJu) | [Debug](https://debug.barn.cow.fi/order/0x3069f819c019403a9eab1a4068b68209b8658a9890cd3fa301e934a1e5fd01b7) |
| — / 41 | 09:52:55.129740013 | Sell 1.275648 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | RPC preflight rejected: `Transaction simulation failed: Error processing Instruction 4: custom program error: 0x1771`; logs verify Jupiter `6001 SlippageToleranceExceeded`. Filled later. [Attempted signature (no chain record)](https://solscan.io/tx/5ymYuVcuonjjHEP1m6vCaezp5m2DA2PuskvkEZn41nUzTyNfpWB3RTmkg9CorsAAttu7wNXpNC9tdEokSGRpPRJu) | [Debug](https://debug.barn.cow.fi/order/0x4f81a76e183eb1fd9857779874799ba36369c228a85cfd96f2b4d7d84761a808) |
| — / 36 | 09:52:55.129740013 | Sell 1.115899 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | RPC preflight rejected: `Transaction simulation failed: Error processing Instruction 4: custom program error: 0x1771`; logs verify Jupiter `6001 SlippageToleranceExceeded`. Filled later. [Attempted signature (no chain record)](https://solscan.io/tx/5ymYuVcuonjjHEP1m6vCaezp5m2DA2PuskvkEZn41nUzTyNfpWB3RTmkg9CorsAAttu7wNXpNC9tdEokSGRpPRJu) | [Debug](https://debug.barn.cow.fi/order/0xa3fbac7e977b89c9938baf452e18e7df0d50bcaacc06a6753d5e1063ef87b5cf) |
| — / 39 | 09:52:55.129740013 | Sell 0.956425 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | RPC preflight rejected: `Transaction simulation failed: Error processing Instruction 4: custom program error: 0x1771`; logs verify Jupiter `6001 SlippageToleranceExceeded`. Filled later. [Attempted signature (no chain record)](https://solscan.io/tx/5ymYuVcuonjjHEP1m6vCaezp5m2DA2PuskvkEZn41nUzTyNfpWB3RTmkg9CorsAAttu7wNXpNC9tdEokSGRpPRJu) | [Debug](https://debug.barn.cow.fi/order/0xaf8b7c18865833e5a26371a369fcdfe49541dc85bd2e14e097b9253e6cedc17c) |

**Additional candidate rejections: 9.** These happened before selection, separately from the 7 winning settlement failures. Exact candidate order IDs were not saved; sharing an auction does not identify affected winning orders.

| UTC timestamp | Auction / solution | Exact saved error | Debug tool URL |
| --- | --- | --- | --- |
| 09:47:09.678445593Z | 279600 / 69 | `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:48:41.291764117Z | 279618 / 9 | `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6008))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:50:11.040483371Z | 279636 / 13 | `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:50:25.15505501Z | 279639 / 4 | `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:50:25.155067561Z | 279639 / 5 | `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:50:25.155073566Z | 279639 / 6 | `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:50:25.155080833Z | 279639 / 7 | `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:50:25.155086263Z | 279639 / 8 | `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 09:53:19.637252405Z | 279674 / 2 | `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |

Program checks across these 17 candidates identify 15 Jupiter `6001 SlippageToleranceExceeded`, 1 Titan `6008 LessThanMinimumAmountOut`, and 1 `Custom(7000)` in `Sett1erwx2eqT5A8uvu8GBxDFT2W5TNnhirL7hLmb8m`. The symbolic meaning and ownership of `7000` are unknown; do not map it to a named error.

Cleanup: 32 traders completed; no leftover tokens recorded.

</details>

## 3. Opposing orders / CoW

**Direct matching is inconclusive.** All 15 accepted orders expired before on-chain creation, so the opposite orders never reached a usable matching test.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 0. Filled / placed: 0/15. Planned rows: 15. Median / longest fill: unavailable; no fills.

Setup includes 6 planned USDC/USDT setup buys (rows 110–115). They expired; rows 117 and 119–123 then attempted 6 additional acquisitions, which also expired. Those intended main trades were never placed. The other 3 main orders expired too. No successful examples exist. A quote or accepted order is not proof of an accepted solver solution.

**Ownership unknown:** all expired orders below have the exact original message `sponsored creation expired, dropping the order`. The generated report’s “Winner too late” label does not establish a late solver response or the root cause. These UIDs can have no surviving debug record because creation never completed.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 115 / 65 | 09:55:34.103255465 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 3.2 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xcc62d57bf3c17f33755e39a9c9960695e0fa10b0cd661754e0db692efb5a6271) |
| 110 / 59 | 09:55:34.103248608 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 2.6 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x4dee6b56f1a90be3f86616c2dbae4d8786d6f4efdfa9d86f283f34eaf1083711) |
| 111 / 61 | 09:55:34.103230239 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 1.3 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x166b380ea22bf31fef1a1f9085698f36b742dd0e2f7b89fd77b7b7afa5d6023e) |
| 112 / 62 | 09:55:34.103253545 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 3.1 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xaa5aebf6af28fe97ad6f997b3723dcf7a98f3ec722cdac051452866826ce423f) |
| 113 / 63 | 09:55:34.103257368 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 3.1 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xdf818f0c102be59613fb267984ceb052bff25d466985bbfbcd6ded315aa97df5) |
| 114 / 64 | 09:55:34.103251367 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 1.1 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x8d13a32e2b85896539a5069ae8dd81319335c1694d8c55896cf0d98a08eabb88) |
| 116 / 58 | 09:57:59.132554802 | Sell 0.02 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x466b42d08bfb261c89c535994521ecd2436cef25b5dac3e3d95cb0db7cc6bc1d) |
| 118 / 60 | 09:57:59.132577234 | Sell 0.03 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x9e5e5b31a3fe4637680c63018b0cab1dfbca3630d768aab368e612fbc3517c1c) |
| 124 / 66 | 09:57:59.132574471 | Sell 0.02 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x8da9cb6672a3fe9d79d5cc4d5443326864503ab2bbfc37aada3f19c1b4ae574f) |
| 119 / 61 | 09:58:09.135456517 | Sell 0.011701288 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (acquisition for sell 1.2 USDC with SOL; main trade never placed) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x91d282aad261daab22288149f40e30f31940f6aa1de85ab4f9f6ff8b284f4cb2) |
| 122 / 64 | 09:58:09.135451562 | Sell 0.009740377 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (acquisition for sell 1 USDT with USDC; main trade never placed) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x6dc67440b0c606aabf78b44b48cce147171e32d922f3d5038e1e10bcabe98f42) |
| 123 / 65 | 09:58:09.135454127 | Sell 0.02925322 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (acquisition for sell 3 USDC with USDT; main trade never placed) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x7e53e67e739c8668db1ac7f12c5b0cec332323cae1a8c561b1fc151806251c4d) |
| 120 / 62 | 09:58:09.135430952 | Sell 0.02925322 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (acquisition for sell 3 USDC with USDT; main trade never placed) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x1fd235d17584321340ef88b8f2979188fb1d547854b197879d9ec5b3aea89ac7) |
| 121 / 63 | 09:58:09.135448745 | Sell 0.02922113 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (acquisition for sell 3 USDT with USDC; main trade never placed) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x3dec94665ea6adeb5b5b2df9d07a929642d984f473ea002c2b498a333fa1bde5) |
| 117 / 59 | 09:58:09.135458423 | Sell 0.021502657 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (acquisition for buy 0.02 SOL with USDC; main trade never placed) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xeef259ffeeb28c93c2c4e198fc999bc94c1aa4682d19fc949258b1d6579203e7) |

Cleanup: 9 traders completed; no leftover tokens recorded.

</details>

## 4. Token coverage

**Token coverage was partial.** 25 fixed-input sells and 3 exact-output buys filled; 24 other accepted orders expired before creation.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 28. Filled / placed: 28/52. Planned rows: 55. Median / longest fill: 5.999 / 50.201 seconds.

All 28 successful settlements were single-order transactions. Successful fixed-input sells: PUMP, SPYx, MU, Bonk, $WIF, JitoSOL, mSOL, JupSOL, cbBTC, USDe, EURC, POPCAT, USDY, JLP, INF, BNB, XAUt0, ETH, GLDx, EUROP, Fartcoin, MEW, BOME, hyloSOL, PSOL. Successful exact buys: Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W); Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1).

3 additional planned requests were rejected before placement: Token-2022 transfer fees are an autopilot limitation, before solver participation.

**Ownership unknown:** all expired orders below have the exact original message `sponsored creation expired, dropping the order`. The generated report’s “Winner too late” label does not establish a late solver response or the root cause. These UIDs can have no surviving debug record because creation never completed.

Confirmed swap failures: the verified Jupiter/Titan programs rejected minimum output. Driver simulation passed before all 6 submitted attempts (5 later failed on chain, 1 was rejected by RPC preflight); another winning attempt failed driver simulation. Quote age, route limits and execution changes still need investigation; these failures do not by themselves prove a solver code defect. Across the run, 7 winning attempts affected 15 distinct orders, all filled later. Six later deadline warnings are not extra failures or proof the solver responded late.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 126 / 68 | 09:59:44.161036898 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x68579ee0ad927f6a0b9cc1698ec2da69202f6975a63ac18ef60346d961fa94e7) |
| 125 / 67 | 09:59:44.161029382 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x10ac9862b49e4999595346b4fa4cf9854af749daf523c9bcd7c6cce03ef231a4) |
| 127 / 69 | 09:59:44.16103253 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x15b143e8ca9c20abc8419983d60f575e0df7b31224d0607525bc357106de079a) |
| 129 / 71 | 09:59:44.161040766 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x781b98fd01f3b2511e7fc116cf6de06eee7e7c25045510334d711e17eaddc8cc) |
| 130 / 72 | 09:59:44.161046634 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xd5ce3f3fb6ad081a26c7544d1d740005551fb70853567b4402f2a4bb3322bd23) |
| 131 / 73 | 09:59:44.161048463 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xd613f0af7c54afea5ca50b0920d9fdafd762ee06590ad7a034d0f61384c13e66) |
| 133 / 75 | 09:59:44.161050244 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xee94b178d3eecc6d16c73e2c3a1e64e552e231a7efcc2736c9fd57ce9cd99730) |
| 134 / 76 | 09:59:44.16104275 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x80d6aec703b6d2130afa7bcdfd19433035290c53dbe2824a33ef2da1aa28a1c4) |
| 135 / 77 | 09:59:44.161009402 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x0ec4425b09e9f81b9f336c5d118fa2799f6c74d3c8cb20d3244903b7ed7ff44c) |
| 137 / 79 | 09:59:44.161034828 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x28e1282c09faf82a2f2489f543d8c28d9301350bb6031f9b1b8b5865f09d93e4) |
| 138 / 80 | 09:59:44.16103876 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x6ade6eede7777d97faeee16988a01d8d381ba3442be93669b033612511754367) |
| 139 / 81 | 09:59:44.161044653 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xba2a816d7c96d26bb98310dbbe356de58f901242067c600aa694b3315fbfd225) |
| 128 / 70 | 09:59:12.037 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | None; fulfilled. [Successful settlement](https://solscan.io/tx/MbPdd3Dy1US8U1umbCAh9piJzPRfyXFm1NcHCwyYDwczfxUsYs3CVttcrNyxWErPaAmcuSyFBpSQ2fLPzUFKvWz) | [Debug](https://debug.barn.cow.fi/order/0x4b5671b47cc5bb8493e42569a290b943c9ecd482ed2ac8c355e0658bb985230d) |
| 143 / 85 | 09:59:13.345 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263) | None; fulfilled. [Successful settlement](https://solscan.io/tx/4pxmcgwzV3iKpZs2sXdPTC4FXrCCbpFUwGGy9VbGomUy5AWg7aRayHpd8FV7zP3UNB6UmsG1tZxwWREexnvSX6vo) | [Debug](https://debug.barn.cow.fi/order/0x44997c055e40be628823e47abc116633a4929dec834a67af07654e889791c8e3) |
| 158 / 100 | 09:59:22.605466667 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) | Failed on chain: Jupiter `6001 SlippageToleranceExceeded`, instruction 6. Filled later. [Failed transaction](https://solscan.io/tx/425TzPFS71cNG4Vf7YDsnmmsrzCyv8vdjuMKgdgWunDhrESkTvcvJoa6yVbwzAaDqCLCRJUoWAUjorUNrAajWxWv) | [Debug](https://debug.barn.cow.fi/order/0x8879f6fee55288e9a981e6ab8a49ac56293a0393fad180d57bcc9337fb0e2644) |
| 159 / 101 | 09:59:22.618968755 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) | Failed on chain: Jupiter `6001 SlippageToleranceExceeded`, instruction 3. Filled later. [Failed transaction](https://solscan.io/tx/2eRuVEYCmrgALv6C9L9BXXo7JiMT6rcyD1N9Dc6ZR7f3riTo8ykQd4yf6yh51B668cUfRLz4hL2WL76VsqR5WFKt) | [Debug](https://debug.barn.cow.fi/order/0x1c2720292126b203e019b738e0cac8b0c6b3910236ad9dda6dc0cc9596d7a5f8) |
| 168 / 70 | 09:59:21.913 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | None; fulfilled. [Successful settlement](https://solscan.io/tx/4fwoMsAExoStsv6uZYVtTAnU2EvKZKb5mcgu76af4StE5NmedE7eefeVw45EhNpbkUotCcEUFL4bTL6sGCTkoqJC) | [Debug](https://debug.barn.cow.fi/order/0x72932865b13b61db80caca2f7499abbaf324611b522814ece0b46b09c5543a9a) |
| 172 / 74 | 09:59:22.736 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | None; fulfilled. [Successful settlement](https://solscan.io/tx/5ceMJm9zB92cEhH2h9hyr1WpNPh86AxUqXQSEbMBwFv7sHAuWPgAq4bU4Yux7zQHCFQNNRWzuwLgTq9vus1K1PZB) | [Debug](https://debug.barn.cow.fi/order/0x72dd0d6634d1d7a49bc4960d3e492ede2f5393b1e641512dd80f88202e6e2243) |
| 176 / 78 | 09:59:23.441 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | None; fulfilled. [Successful settlement](https://solscan.io/tx/7ySe2Fwt1koj5adBzoFroNjCPJAp1H8VMfsktKPzpVHrxezZfVVDrcfz88dLBYppppuJxwqgqcXtTqDfQEwFSzb) | [Debug](https://debug.barn.cow.fi/order/0x144e1b8aece52af97da299efb544c0f9df984c2b3ffb263f5785a0a20d030378) |
| 167 / 69 | 10:00:19.166471019 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x96a10fe84686b7ff509ee4e6e82c43706e09ed91b480212f012e8f210947b338) |
| 169 / 71 | 10:00:19.166476844 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xf9f989b7ef0cb7db8dc757d024c0b2a74635f9ba1aac2e1d816563515db47eda) |
| 165 / 67 | 10:00:19.1664422 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x40eae33836ece9869a332542fdc1f1ccf79272f5d94a3213ac6670cfe70a0b28) |
| 170 / 72 | 10:00:19.166466994 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x4a125f1cf3f0130fd1112ee6cec9cc1fa3898ac84750d4d36ec04a9536ce8f9f) |
| 171 / 73 | 10:00:19.166463736 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x44f71f413bcd2b1bc4c65c4c36198c2c6895a39bfd156d02e6b3cff3d338f95d) |
| 173 / 75 | 10:00:19.166469151 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x7eafbd3473a5931dc642d6f83985ec3e7f2f48b2f38f8b932ac204e920d4dd58) |
| 174 / 76 | 10:00:19.166472901 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x9b3f5d7e59a432f9401db1e1300b2dca14c9210f4da7ee45815e177831a8728c) |
| 175 / 77 | 10:00:19.16647484 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xe01b2624073a31d85104c49d1601b6d97bd10536294e41df35c7d04f1ad18ffc) |
| 178 / 80 | 10:00:24.165712053 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x576d116e1068fd6a734403a3008aabe9a77310b1766a121aee962b3f3c8c61ab) |
| 177 / 79 | 10:00:24.165736792 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xdd2149b96898bfd5431eb271061bd6563362374539e2045a77af9c2fbd7c41e7) |
| 179 / 81 | 10:00:24.165734628 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0xa7d5bb87075664acfb7ebda93d6fe3670ea42f2f30e9eb40cd8700e539da2134) |
| 166 / 68 | 10:00:24.165731713 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | `sponsored creation expired, dropping the order`; final: expired, never created on chain. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x9d31e261f44f6b66f1b65d220049d89a34988f0ae0732b1df1dbfa7320794a1b) |
| — / 92 | 10:01:05.054469924 | Sell 531.193545 [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT) → [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | Driver simulation rejected; not submitted: `SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. Filled later. | [Debug](https://debug.barn.cow.fi/order/0x22260a0915183ea185fa3746384e7ae9c93d4d05045ce6e82e7cdb1bcb4f30cf) |
| 140 / 82 | 09:59:08.006 | Sell 0.005 SOL → [SI](https://solscan.io/token/DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP) | `400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee`; expected rejection | No order ID: quote failed before placement |
| 141 / 83 | 09:59:08.214 | Sell 0.005 SOL → [ZCAT](https://solscan.io/token/HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR) | `400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee`; expected rejection | No order ID: quote failed before placement |
| 142 / 84 | 09:59:08.518 | Sell 0.005 SOL → [ANTHROPIC](https://solscan.io/token/Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw) | `400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee`; expected rejection | No order ID: quote failed before placement |

**Additional candidate rejections: 2.** These happened before selection, separately from the 7 winning settlement failures. Exact candidate order IDs were not saved; sharing an auction does not identify affected winning orders.

| UTC timestamp | Auction / solution | Exact saved error | Debug tool URL |
| --- | --- | --- | --- |
| 10:01:05.005353127Z | 279767 / 3 | `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }` | Unavailable: no candidate order IDs saved |
| 10:01:39.761528619Z | 279774 / 1 | `SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(7000))), program_error: None }` | Unavailable: no candidate order IDs saved |

Program checks across these 17 candidates identify 15 Jupiter `6001 SlippageToleranceExceeded`, 1 Titan `6008 LessThanMinimumAmountOut`, and 1 `Custom(7000)` in `Sett1erwx2eqT5A8uvu8GBxDFT2W5TNnhirL7hLmb8m`. The symbolic meaning and ownership of `7000` are unknown; do not map it to a named error.

Cleanup: 40 traders completed; no leftover tokens recorded.

</details>

## 5. Transaction size

**The size-limit test is inconclusive.** All 10 trades filled, but the signed transactions were 773–1129 bytes, below the 1200-byte target and 1232-byte limit.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 6. Filled / placed: 10/10. Planned rows: 10. Median / longest fill: 6.354 / 9.582 seconds.

Setup: native SOL → EURC/JLP baselines of 0.005 SOL, then 4 EURC orders of 0.005 SOL and 4 JLP orders of 0.00125 SOL. Settlement batches: 3 singles, 2 pairs and 1 triple. Full serialized sizes include signatures and lookup-table metadata.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 183 / 108 | 10:04:42.621 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) | None; fulfilled. [Successful settlement](https://solscan.io/tx/G6JrWGSmgWxcYjTSoZ7fFGfgL793rKBomzcUHDvLKAc9pEcNxAkQizeXMoz6xMctKBfQncgxcv7KrXXzxqLgroj) | [Debug](https://debug.barn.cow.fi/order/0x972317016102d012d63f6d7abd4aeb7c519be9cc6cc70232413fc2743b6eaad2) |
| 184 / 109 | 10:04:42.820 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) | None; fulfilled. [Successful settlement](https://solscan.io/tx/G6JrWGSmgWxcYjTSoZ7fFGfgL793rKBomzcUHDvLKAc9pEcNxAkQizeXMoz6xMctKBfQncgxcv7KrXXzxqLgroj) | [Debug](https://debug.barn.cow.fi/order/0x448898d853471fb3568e58b39eeadf9a9cfd27a30f4cdea1967ae2af2da915e8) |
| 185 / 110 | 10:04:43.119 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) | None; fulfilled. [Successful settlement](https://solscan.io/tx/G6JrWGSmgWxcYjTSoZ7fFGfgL793rKBomzcUHDvLKAc9pEcNxAkQizeXMoz6xMctKBfQncgxcv7KrXXzxqLgroj) | [Debug](https://debug.barn.cow.fi/order/0x14a1758315bd20299e11e25fd6904c9d5429cd9b5a4be43ca8a27c57bfb96bb2) |
| 187 / 112 | 10:04:43.423 | Sell 0.00125 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) | None; fulfilled. [Successful settlement](https://solscan.io/tx/2zYvFmaYZVWcJcKcgEQ1oCnmNNXkNHE5pev7hbn4vGAP8s4mP7TYE4dBS5rWRaGEPCAFNrUJhzFVgP29JLtzVqKa) | [Debug](https://debug.barn.cow.fi/order/0x142984d5427db3f30b06c7250223381b6dde5566c22f475646365f53265036b0) |

| Successful settlement | Full signed bytes |
| --- | --- |
| [Transaction](https://solscan.io/tx/2Z7HBh2waj1e3m8U4ETeFnpGT4o2ryxYvvYFX7egnAhQmyKG6WdeiR9GeWSKUNM6WfvbFuu3cjdDDd3XpMqvjNHS) | 773 |
| [Transaction](https://solscan.io/tx/2zYvFmaYZVWcJcKcgEQ1oCnmNNXkNHE5pev7hbn4vGAP8s4mP7TYE4dBS5rWRaGEPCAFNrUJhzFVgP29JLtzVqKa) | 1129 |
| [Transaction](https://solscan.io/tx/4BQEc4fShkHja98AesjQ7fq6bHavMH68ydyzWKnbJfxXFMrtmPYoTcpLi2fgNcm2FfMsMeF33JtLMLxgwJKmcrsK) | 1129 |
| [Transaction](https://solscan.io/tx/4UxSwUrjHRqy5oaPP2KQgJmfjcTCjrxZJeSSzLTDa5fadUPq5vXzKFc1WrqrWGGc5F19Jo86tyfBBgn9UNN1aSeX) | 805 |
| [Transaction](https://solscan.io/tx/5aFqar8wFvQ4tCF6KsvRwWWT7PpHipnM6W2QTkuVCATHEbLxvdZ69uqgiTkrXUzkhds4EW58V8jH6KBNSFr41CMY) | 935 |
| [Transaction](https://solscan.io/tx/G6JrWGSmgWxcYjTSoZ7fFGfgL793rKBomzcUHDvLKAc9pEcNxAkQizeXMoz6xMctKBfQncgxcv7KrXXzxqLgroj) | 1049 |

Cleanup: 8 traders completed; no leftover tokens recorded.

Cleanup deliberately burned 0.086764 JLP: traders 112 / 113 / 114 burned 0.028921 / 0.028921 / 0.028922 JLP because quoted proceeds were below token-account rent. This is test cleanup policy, not a solver failure.

</details>
