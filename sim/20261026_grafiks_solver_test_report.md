# Grafiks solver test report

26 October 2026 - staging - session `2026-10-26-08-39-composite-grafiks-run`

**TLDR:** Nice work on batches of 12 and direct SOL/USDC matching. All 191 main orders that got placed filled, completing 191 of 194 planned trades. Five swaps returned about 2% less than their quoted amounts, so compare the quote with the swap that was sent, including this PUMP sell that worked on retry (https://debug.barn.cow.fi/order/0x1b5fd1ace7c95c69f36fcc22538a63ef91062510d53d8a2a284aff911b57e6dc). Our driver rejected CRCLx quotes as too expensive, so compare its fee estimate and limit with the successful 0.01 SOL to SPCX sell (https://debug.barn.cow.fi/order/0x7beb66266cd8779abff955cbccb204dd7ec906281a62b2eb348b71662cd93503).

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. 25 same-direction sells | Achieved: batches up to 7; 25/25 filled | Grafiks/CoW should identify the program in both reverts. |
| 2. Sell bursts | Achieved: 84/84 filled; batches up to 12 | Test sustained arrivals separately. |
| 3. Opposing orders / CoW | Achieved for SOL/USDC; 15/15 filled | Test team: verify stablecoin opposite-order auction overlap. |
| 4. Token coverage | Partial: 49/52 filled; 2 missing quotes | Grafiks/CoW should compare the priority fee estimate with its budget. |
| 5. Transaction size | Inconclusive boundary; 10/10 filled | Test the active version-1 size boundary. |
| 6. Fresh receiving accounts | 8/8 filled; solver-paid account creation untested | Test team: isolate who creates the receiving accounts. |

## Changes since 17 October 2026

Planned fills rose from 190/194 to 191/194; the largest batch rose from 5 to 12.

<details>
<summary>Comparison with the previous run</summary>

Baseline: `2026-10-17-08-53-composite-grafiks-run`, same environment. Earlier Grafiks counts exclude 3 nonzero transfer fee requests; none are present today.

| Measure | Previous | Current |
| --- | --- | --- |
| Eligible planned fills | 190/194 | 191/194 |
| Accepted main fills | 190/190 | 191/191 |
| Token coverage fills | 48/52 | 49/52 |

Unchanged: all 25 same direction sells filled. Account preparation and fresh-wallet checks remain separate from solver paid account creation.

Existing errors on new requests include 2 `NoLiquidity` and 1 `BlockhashExpired`; all 191 placed main orders filled. Original driver records now identify 12 failed attempts on 15 orders, including Jupiter `SlippageToleranceExceeded` and Titan `LessThanMinimumAmountOut`. The previous report already contains those swap error names, so these are newly affected orders, not new error types. Version 1 transactions prevent a direct comparison with the earlier 1232 byte boundary.

Successful requests that failed previously:

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 137 / 79 | 2026-10-26T08:57:34.605Z | Sell 0.01 SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x7beb66266cd8779abff955cbccb204dd7ec906281a62b2eb348b71662cd93503) |
| 163 / 68 | 2026-10-26T08:57:42.419Z | Buy SOL → exactly 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xe31a2ab98a5acd1d33761fc77c7e6561cb80906e5c00704da0f52fa1b2f20479) |
| 164 / 69 | 2026-10-26T08:57:42.601Z | Buy SOL → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x4ac4762e09bddc97b5dd595b00810e968944f88d6d28c52a2f16fbbe1fc59502) |

</details>

## 1. 25 same direction sells

**Batching achieved.** All 25 sells filled in 6 settlements, with batches up to 7 orders.

<details>
<summary>Order evidence and metrics</summary>

**Diagnosis review, 27 October 2026.** Checked raw API requests, simulator code, final orders, 184 original staging driver records, 191 quote records, 198 records around failed settlements and RPC transactions for all 7 execution reverts. Joining by auction, solution and solver recovers 12 failed attempts on 15 orders, comprising 10 main orders and 5 cleanup orders. Ten attempts failed minimum output checks on 13 distinct orders: 7 Jupiter execution reverts, 2 Jupiter RPC preflight failures and 1 Titan driver simulation failure. Two further Jupiter driver simulations rejected slippage thresholds on 3 orders without a recorded instruction mode; one of those orders is also in the first group. All 15 orders filled later. No quotes, trades or cleanup were rerun.

**Failed attempts.** Five orders filled after 2 Jupiter execution reverts in 382970/4 and 382974/68. Both passed driver simulation first. RPC verifies `RouteV2`, successful inner swaps and then outer Jupiter `SlippageToleranceExceeded` at instruction 5. The table below compares actual inner transfers with the encoded quote and signed order limits. **We think quoted output and route consistency should be checked first.** Five routes across the run returned 198.22–215.68 bps less than their encoded quotes despite slippage fields of only 10 or 53 bps. Confidence is medium in that common lead, not the trigger. These instructions encode zero platform fee and zero positive slippage fee; the destination account has only the recorded incoming output, with no outgoing deduction inside the failed instruction. This argues against explaining the gap as an encoded Jupiter fee. Route 382970/4 even produced 71,761 raw JUP more than the signed order minimum before any remaining fees, so its route guard was stricter than the order limit. Grafiks and CoW should compare the exact quote response, submitted instruction, simulation transfer output and failed on-chain transfers for that route. If simulation already predicted this lower output, fix threshold construction or state handling. If simulation predicted the quote and the same instruction produced less on chain, inspect quote freshness or simulation state. Preserve signed limits and fees when adjusting a route guard. Repair ownership remains unproven.

| Failed transaction / auction and solution | Output token | Input raw | Encoded quoted output | Slippage bps | Inner output raw | Gap below quote raw / bps | Signed buy limit raw | Output minus signed limit raw |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Failed transaction 382970/4](https://solscan.io/tx/2WkJaY22GuHkQky3LyfFc1CfYmEQ4euWPCnUFZ6dLxqSENU3Qzkiz3Axfi7Lw47XqXFQ7KMjoh1xgCxdqiBaiTns) | JUP | 5,000,000 | 1,806,673 | 53 | 1,767,706 | 38,967 / 215.68 | 1,695,945 | +71,761 |
| [Failed transaction 382974/68](https://solscan.io/tx/o1VjpUy3HdptYtEhMVL8kSRRrDxtpRixgha75nXef9UryMjZHe1KsxC2JRcndx6C82qhBSXTYBz2Fr7LL4a28pM) | JUP | 20,000,000 | 7,225,486 | 53 | 7,081,118 | 144,368 / 199.80 | 7,159,165 | −78,047 |

Planned: 25; accepted main orders filled: 25/25. **Total transactions:** 6. **Median / longest observed fill:** 19.12 / 34.57 seconds.

Counts include explicit CoW setup rows, exclude prerequisite acquisitions and cleanup. Fill times use accepted placement → journal-observed fill and include polling. Successful examples use placement time; errors use the first saved failed-attempt time or failure observation. 60-second fill timeout, 300-second validity, no placement retries; quote/API/RPC limits of 5/8/10 requests per second. No nonzero transfer fee requests were found; zero-fee Token-2022 cases remain counted.

Competition records name only grafiks; all saved successful settlement fee payers match its recorded address. This supports isolation within the selected window, without proving quote provider isolation. All scenario phases finished; `finished: false` concerns pending cleanup. No trades were rerun for this report.

Original Grafana reads and all 7 failed RPC transactions have now been checked. Jupiter is the first failing program in all 7 transactions, with 6 `RouteV2` instructions and 1 `SharedAccountsRouteV2`. Their inner swaps succeeded before outer Jupiter returned 6001. Every execution revert followed a passed driver simulation, with 0.874–1.304 seconds between those log messages. This interval is not quote age or a precise execution duration. The 2 Jupiter simulation records still lack instruction modes and amounts; the 2 RPC preflight records lack encoded transaction amounts. Those remaining gaps are separate from the completed RPC checks.

Quoted fields were decoded only after matching the instruction discriminator against the pinned [RouteV2 schema](https://github.com/sevenlabs-hq/carbon/blob/134647d8071675bb316f55c18511e961d4d0361b/decoders/jupiter-swap-decoder/src/instructions/route_v2.rs) and [SharedAccountsRouteV2 schema](https://github.com/sevenlabs-hq/carbon/blob/134647d8071675bb316f55c18511e961d4d0361b/decoders/jupiter-swap-decoder/src/instructions/shared_accounts_route_v2.rs). These schemas establish the field layout, not the historical program's exact threshold arithmetic. Tables show raw units, encoded quotes and transfer outputs from failed instructions; the transactions reverted, so these were not delivered fills. Signed buy limits are summed for batched orders and exclude any further fees. The SKHY case would pass a naive floor of `2,602 × (10,000−10) / 10,000`, yet Jupiter rejects it, so no exact rounded route minimum is claimed.

The input check does not support a 2% fee deduction before the swap. For the 4 sell routes with roughly 2% output gaps, signed sell amount, encoded `in_amount` and actual source debit match exactly at 5,000,000, 20,000,000, 10,000,000 and 10,000,000 lamports. The exact PUMP buy also spends its full encoded 3,007,862 lamports, split into 59,254 and 2,948,608; its signed sell amount of 3,053,028 is a maximum, not a required input. **Our leading explanation is a mismatch between the quoted output and the route or state used to check it, with medium confidence.** The repeated 198.22–215.68 bps gap across different routes, matching inputs, zero encoded platform/positive slippage fees and no output deduction make that a stronger first lead than independent price moves. Price movement or stale state remains the strongest alternative because original provider request amounts, quote slots and simulation transfers are not saved. The check rules out an observed deduction between the encoded input and executed input, not a mismatch earlier in provider quoting. Compare those original fields with the exact route and its simulation before assigning a fix.

Settlement sizes: 2×1 orders, 1×4 orders, 1×5 orders, 2×7 orders.

Largest example: [Transaction](https://solscan.io/tx/DsxayXuV8oFRV4dR2a3WXoxiGfjYEwrkNwY8ScJgdTykbW5RLkqdg5EJyGMh2xS7y3cR4naKz9JxHwuzT9wWdmT); rows 4, 5, 7, 10, 12, 16, 17. Shared signatures prove batching, not proportional payouts or a price guard.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-26T08:40:50.060Z | Sell 0.005 SOL → JUP [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x02a82984f4b5ffe2dcfe406ba34ad1d6de2a8d34ec847af8129e0d3787647458) |
| 2 / 2 | 2026-10-26T08:40:50.589Z | Sell 0.005 SOL → JUP [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x23af8337c66696b42d86e97a2b23214e84d3ec9e0171e57bfdc3619927724986) |
| 3 / 3 | 2026-10-26T08:40:50.292Z | Sell 0.005 SOL → JUP [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x4d9044bad7a2bffbeaaa0f7ffa01ba576ee8b42598d7a933349f3eee4b4c4e1d) |

**Failed settlement attempts** (each affected order is listed; attempts may share a transaction):

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 2 / 2 | 2026-10-26T08:41:02.304399074Z | Sell 0.005 SOL → JUP [self] | `Reverted { err: InstructionError(5, Custom(6001)) }`; RPC confirms Jupiter SlippageToleranceExceeded in 382970/4 at 08:41:03.27498167Z; [Failed transaction 382970/4](https://solscan.io/tx/2WkJaY22GuHkQky3LyfFc1CfYmEQ4euWPCnUFZ6dLxqSENU3Qzkiz3Axfi7Lw47XqXFQ7KMjoh1xgCxdqiBaiTns). Final **fulfilled**. Driver simulation passed before execution reverted; repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x23af8337c66696b42d86e97a2b23214e84d3ec9e0171e57bfdc3619927724986) |
| 21 / 21 | 2026-10-26T08:41:19.575784866Z | Sell 0.005 SOL → JUP [self] | `Reverted { err: InstructionError(5, Custom(6001)) }`; RPC confirms Jupiter SlippageToleranceExceeded in 382974/68 at 08:41:20.967247822Z; [Failed transaction 382974/68](https://solscan.io/tx/o1VjpUy3HdptYtEhMVL8kSRRrDxtpRixgha75nXef9UryMjZHe1KsxC2JRcndx6C82qhBSXTYBz2Fr7LL4a28pM). Final **fulfilled**. Driver simulation passed before execution reverted; repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x058173e419f950b6832436d4b2e9ea9ca779ff79b1c0cf222258ce72d1a6393d) |
| 18 / 18 | 2026-10-26T08:41:19.575784866Z | Sell 0.005 SOL → JUP [self] | `Reverted { err: InstructionError(5, Custom(6001)) }`; RPC confirms Jupiter SlippageToleranceExceeded in 382974/68 at 08:41:20.967247822Z; [Failed transaction 382974/68](https://solscan.io/tx/o1VjpUy3HdptYtEhMVL8kSRRrDxtpRixgha75nXef9UryMjZHe1KsxC2JRcndx6C82qhBSXTYBz2Fr7LL4a28pM). Final **fulfilled**. Driver simulation passed before execution reverted; repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x10ed9e6499ee87b8496cfc55bce628fd09e964e108c2c733846cbd9daaa0d3d6) |
| 13 / 13 | 2026-10-26T08:41:19.575784866Z | Sell 0.005 SOL → JUP [self] | `Reverted { err: InstructionError(5, Custom(6001)) }`; RPC confirms Jupiter SlippageToleranceExceeded in 382974/68 at 08:41:20.967247822Z; [Failed transaction 382974/68](https://solscan.io/tx/o1VjpUy3HdptYtEhMVL8kSRRrDxtpRixgha75nXef9UryMjZHe1KsxC2JRcndx6C82qhBSXTYBz2Fr7LL4a28pM). Final **fulfilled**. Driver simulation passed before execution reverted; repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x1d69e368fafac0500f545397cb755e6c6a8bea4c0aa90cbed60fea5a781156b3) |
| 24 / 24 | 2026-10-26T08:41:19.575784866Z | Sell 0.005 SOL → JUP [self] | `Reverted { err: InstructionError(5, Custom(6001)) }`; RPC confirms Jupiter SlippageToleranceExceeded in 382974/68 at 08:41:20.967247822Z; [Failed transaction 382974/68](https://solscan.io/tx/o1VjpUy3HdptYtEhMVL8kSRRrDxtpRixgha75nXef9UryMjZHe1KsxC2JRcndx6C82qhBSXTYBz2Fr7LL4a28pM). Final **fulfilled**. Driver simulation passed before execution reverted; repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x1e637fb52fdef15e18a6184f38cf31917dce324a6bf2f0b4e72fe0f1df29d4ca) |

</details>

## 2. Sell bursts

**Burst completion achieved.** All 84 trades filled; pauses between waves still leave maximum sustained throughput untested.

<details>
<summary>Order evidence and metrics</summary>

Planned: 84; accepted main orders filled: 84/84. **Total transactions:** 12. **Median / longest observed fill:** 9.49 / 14.39 seconds.

Settlement sizes: 1×1 orders, 2×2 orders, 1×3 orders, 1×4 orders, 1×6 orders, 1×8 orders, 1×10 orders, 4×12 orders.

Largest example: [Transaction](https://solscan.io/tx/2dTSZrbch3zye8XGWxBLBWrCJ4b1JAzk8m5LbN986tU9f3Es83cBUSb9MTFCZTWstAaYc1Szwwpe4ud8on9SPsN1); rows 47, 46, 48, 49, 52, 53, 40, 43, 39, 45, 41, 44. Shared signatures prove batching, not proportional payouts or a price guard.

Waves: 4/4, 8/8, 16/16, 24/24, 32/32; scheduled gaps 90 seconds.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 26 / 26 | 2026-10-26T08:43:56.734Z | Sell 0.0025 SOL → USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xee4d034cdb66355e099ea164a2a9d6fc48c909ccb379597d61796e1dd805d3ac) |
| 27 / 27 | 2026-10-26T08:43:56.835Z | Sell 0.003 SOL → USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xdb963eb06fa7f8504f1e0b60e26b7577e9d9b6930640e0227f282b32813534bd) |
| 28 / 28 | 2026-10-26T08:43:57.130Z | Sell 0.0035 SOL → USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x5089f43e0fe5752ecf183bafeb9927e3334d3f10f450040589d035ecb2c559c7) |

</details>

## 3. Opposing orders / CoW

**Direct matching achieved for SOL/USDC.** An opposing pair matched 0.02 SOL directly, with only 0.01 SOL routed through Jupiter.

<details>
<summary>Order evidence and metrics</summary>

**Failed attempts.** Rows 120 and 123 share 383020/73. Driver simulation failed at 08:55:53.037102490 UTC with Jupiter `SlippageToleranceExceeded`, `InstructionError(3, Custom(6001))`. Its mode and amounts are absent, so the threshold side remains unverified. The separate cleanup attempt 383025/67 passed simulation but reverted at 08:56:21.654253516 UTC. RPC now verifies Jupiter `SharedAccountsRouteV2`, successful inner swaps and minimum output failure. Its 35,603,847 raw wSOL output was 50,016 below the encoded quote, a 14.03 bps gap against a 10 bps slippage field. It was also 191,600 lamports above the combined signed order buy limits before remaining fees. **We think the route guard needs comparison with the fee-adjusted signed requirements.** Confidence is medium because this output could cover the bare order limits while still failing the route guard, but later fees and exact deployed rounding are not established. Compare the route's quoted output and simulation transfers with the failed transaction before changing the guard. Keep the 383020/73 simulation separate until its mode and amounts are recovered. All 4 orders later filled. Repair ownership is unproven.

| Failed transaction / auction and solution | Output token | Input raw | Encoded quoted output | Slippage bps | Inner output raw | Gap below quote raw / bps | Signed buy limit raw | Output minus signed limit raw |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Failed transaction 383025/67](https://solscan.io/tx/4UCkbgkdpDk6sktCGrN1TzQpQXiLMCQWikh824s3myBrfxgAXGAMy5H6fpxnjFnsBSHRKjdrhqwuy6kLCch1AJkx) | wSOL | 3,603,878 | 35,653,863 | 10 | 35,603,847 | 50,016 / 14.03 | 35,412,247 | +191,600 |

Original driver excerpt for 383020/73, solver `grafiks`, 08:55:53.037102490 UTC. `SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. There is no Route/ExactOutRoute line or input/output amount in this record.

**Direct matching.** All 15 flows filled, but fills alone do not prove that every opposite pair matched directly. SOL/USDC matched directly; the stablecoin opposite orders settled separately. We cannot yet tell whether both stablecoin sides shared an auction with compatible signed prices after fees. The test team should verify those auction IDs and active intervals first. If no compatible opposite sides overlapped, change the setup. If they did overlap, Grafiks and CoW should compare the selected solution and DEX inputs before assigning a matching change. Repair ownership remains unproven.

Planned: 15; accepted main orders filled: 15/15. **Total transactions:** 13. **Median / longest observed fill:** 9.86 / 29.18 seconds.

Settlement sizes: 11×1 orders, 2×2 orders.

Largest example: [Transaction](https://solscan.io/tx/2HQnTb65qQmPKgnZJ4AgznUG1bktBdAArdHTcWkzLoDLDDkGbEsHDJoEdaYXvhE1TQggsrocKL3H95nDkkYWP1KG); rows 123, 120. Shared signatures prove batching, not proportional payouts or a price guard.

[Transaction](https://solscan.io/tx/28TichtyjCdE8v9g39QGvaMCFChZxc9XwoRmLSXUgTLSRBKGwVYsrGCehaJss53iQZNHTo8Pdp29NfsiczmUXQPt) combines rows 117 and 118: 0.03 SOL is collected, 0.02 SOL pays the buyer directly, and the Jupiter swap spends only the unmatched 0.01 SOL. Stablecoin opposites did not share a settlement; their direct matching was not achieved.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 117 / 59 | 2026-10-26T08:55:47.311Z | Buy USDC → exactly 0.02 SOL [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x792db3726c2462aaed24fc72686936bdcc52781ee68c0a920dfe12a607aa8faf) |
| 118 / 60 | 2026-10-26T08:55:46.656Z | Sell 0.03 SOL → USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x4266b369c311585b252af0c975a4d5b6ea30d8a2cc2a8025fedaf0d04bb57603) |
| 110 / 59 | 2026-10-26T08:53:16.872Z | Buy SOL → exactly 2.6 USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x9c5ac015a79a283b65196b35a69282cc2987d36c811f4454ee5a02709dbd1074) |

**Failed settlement attempts** (each affected order is listed; attempts may share a transaction):

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 123 / 65 | 2026-10-26T08:55:52.062913954Z | Sell 3 USDC → USDT [sponsored] | `Jupiter SlippageToleranceExceeded (threshold side unverified); SimulationFailed; InstructionError(3, Custom(6001))` in 383020/73 at 08:55:53.03710249Z; Final **fulfilled**. Repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x0c54d0e11eaf3d0a3aa64c5bfe5b6fafdcc36ee02375ca0baa69d3214263293f) |
| 120 / 62 | 2026-10-26T08:55:52.062913954Z | Sell 3 USDC → USDT [sponsored] | `Jupiter SlippageToleranceExceeded (threshold side unverified); SimulationFailed; InstructionError(3, Custom(6001))` in 383020/73 at 08:55:53.03710249Z; Final **fulfilled**. Repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x29654b1a3332f7174bd25c0c4b0d94403bbad8fa1f5b44fc48153501a3083108) |
| — / 59 | 2026-10-26T08:56:20.228469874Z | Cleanup sell 0.577079 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL | `Reverted { err: InstructionError(3, Custom(6001)) }`; RPC confirms Jupiter SlippageToleranceExceeded in 383025/67 at 08:56:21.654253516Z; [Failed transaction 383025/67](https://solscan.io/tx/4UCkbgkdpDk6sktCGrN1TzQpQXiLMCQWikh824s3myBrfxgAXGAMy5H6fpxnjFnsBSHRKjdrhqwuy6kLCch1AJkx). Final **fulfilled**. Driver simulation passed before execution reverted; repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x8f593d6f8c956358adeca673982a6d417ae195abf2877321573a770d109a7359) |
| — / 60 | 2026-10-26T08:56:20.228469874Z | Cleanup sell 3.026799 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL | `Reverted { err: InstructionError(3, Custom(6001)) }`; RPC confirms Jupiter SlippageToleranceExceeded in 383025/67 at 08:56:21.654253516Z; [Failed transaction 383025/67](https://solscan.io/tx/4UCkbgkdpDk6sktCGrN1TzQpQXiLMCQWikh824s3myBrfxgAXGAMy5H6fpxnjFnsBSHRKjdrhqwuy6kLCch1AJkx). Final **fulfilled**. Driver simulation passed before execution reverted; repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0xfdc5ee946404d33fc4c8c18ae7af3170c9388b8133c7ee32d9724a8adf7137e8) |

</details>

## 4. Token coverage

**Coverage partly achieved.** 49/52 requests filled; SOL to CRCLx failed both sell and exact-buy quoting, and SPCX was rejected during placement.

<details>
<summary>Order evidence and metrics</summary>

**Quote failures.** Rows 131 and 168 never placed an order. Their public errors were `404 Not Found: NoLiquidity: no route found` for Sell 0.01 SOL→CRCLx at 08:57:31.261 UTC and Buy SOL→exactly 0.00574 CRCLx at 08:57:33.913 UTC. Original API records now show the Grafiks driver returning `400 Bad Request` with `{"kind":"PriorityFeeTooHigh","description":"Transaction priority fee exceeds the configured budget"}` at 08:57:31.168666405 and 08:57:33.876646153 UTC. These are the only 2 driver quote failures in this interval and precede the matching public errors by 92 ms and 36 ms. **We think the driver's fee budget blocked these quotes, with high confidence in the rejection stage.** This replaces the earlier unsupported liquidity explanation. It does not establish whether the estimator was wrong, the route was expensive or the configured cap was too low. The [successful 0.01 SOL→SPCX control](https://debug.barn.cow.fi/order/0x7beb66266cd8779abff955cbccb204dd7ec906281a62b2eb348b71662cd93503) filled with the same listed extensions, so a blanket Token-2022 restriction is not supported. Compare each rejected route's compute units, unit price and computed priority fee with its configured budget and the successful SPCX route. If a valid estimate exceeds the cap, inspect route cost or budget policy; if the estimate exceeds the route's actual requirement, fix estimation. Do not raise the cap before measuring the gap. The driver fee check is the failing component; the cause of the excessive estimate and repair ownership remain unproven. Both quote failures have no order ID.

Original API quote records. Request `9e6ed7c35c7b8feefadc53de59eb24c1` failed at 08:57:31.168666405 UTC; request `87e56a8119272d5213c45443b164435b` failed at 08:57:33.876646153 UTC. Both log `driver quote failed`, `400 Bad Request` and `{"kind":"PriorityFeeTooHigh","description":"Transaction priority fee exceeds the configured budget"}` from the Grafiks driver. API and driver request IDs are different, so the nearby driver requests `148902` and `148915` are timing candidates, not proven joins. Their execution cost records show a candidate reached fee handling, but neither records a completed network fee estimate.

Checked sources: [journal line 1144](/Users/igor/work/cowprotocol/solana-qos/sessions/2026-10-26-08-39-composite-grafiks-run/sim/journal.jsonl:1144) saves the complete sell request and API error; [quote parameters](/Users/igor/work/cowprotocol/solana-qos/sim/src/orders.ts:203) contain no sponsorship selector; [preliminary buy quote](/Users/igor/work/cowprotocol/solana-qos/sim/src/flow.ts:153) runs before acquisition or order placement. The SPCX control is the successful row 137 linked above.

**Failed attempts.** The SKHY buy in 383036/1 failed driver simulation with Jupiter `SlippageToleranceExceeded`; its mode and threshold side remain unverified. RPC checks now show that the later 383037/1 SKHY execution and the PUMP executions in 383032/1, 383034/0 and 383037/0 all passed simulation before outer Jupiter `RouteV2` failed after successful inner swaps. Three PUMP routes returned 198.22–198.63 bps less than their encoded quotes, despite only 10 or 53 bps slippage. The SKHY retry returned 2,599 raw against an encoded quote of 2,602 and exact order requirement of 2,600, a verified shortfall of 1 raw unit, or 0.000001 SKHY. **We think quoted output and route consistency is the leading concern, with pure price movement the strongest alternative.** Confidence is medium because the repeated gap appears on different routes with matching encoded and executed inputs, while original quote slots, provider request amounts and simulation outputs are not saved. All 4 instructions encode zero platform fee and zero positive slippage fee, and their destination accounts have no outgoing output deduction inside the failed instruction. Compare each quoted response and exact serialized route against simulation output, on-chain transfers and the successful retry before changing slippage. The separate GLDx/JLP cleanup attempts 383064/0 and 383064/1 failed RPC preflight after successful inner swaps, with outer `RouteV2` 6001. Those are verified minimum output failures, but their amounts are not saved. All 5 orders later filled. Repair ownership is unproven.

| Failed transaction / auction and solution | Output token | Input raw | Encoded quoted output | Slippage bps | Inner output raw | Gap below quote raw / bps | Signed buy limit raw | Output minus signed limit raw |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Failed transaction 383032/1](https://solscan.io/tx/rTbZa5ijcmaWTSwHuDjujYuyK4t3hfiGnNMqB33Tiy75iymMPoufGrn63W6epN4xxH52B8vSrqa8BVaevhmHDL3) | PUMP | 10,000,000 | 238,625,889 | 53 | 233,895,965 | 4,729,924 / 198.22 | 236,362,185 | −2,466,220 |
| [Failed transaction 383034/0](https://solscan.io/tx/2FcyE5MFWiiBuGLDYfuDA4532LHs3hmmfmVdsawznJ63a7A3cYGGBY5WMATk62q51bB8MFR8Uv3KWd9nkkLTSx3p) | PUMP | 10,000,000 | 238,644,375 | 53 | 233,904,300 | 4,740,075 / 198.63 | 236,362,185 | −2,457,885 |
| [Failed transaction 383037/1](https://solscan.io/tx/5VVypofCDC3vyTXT21fbp6eaoeVVdqmzs7XKnqNTtyJcu93tpmr6Sbs8sdGF8YrDwwmDgLpjnPCbQfF3NCDZHBno) | SKHY | 3,597,799 | 2,602 | 10 | 2,599 | 3 / 11.53 | 2,600 | −1 |
| [Failed transaction 383037/0](https://solscan.io/tx/4M24G6tdBvgxVE4918V4hq2JS2XCLJnF53HXEJnNMY3ocqWWj78EcFTzxdCYCZpXVwoJPQGksGurb1nUkMMCEXvG) | PUMP | 3,007,862 | 71,812,011 | 10 | 70,386,726 | 1,425,285 / 198.47 | 71,600,000 | −1,213,274 |

Original driver excerpts, all solver `grafiks`. At 08:58:05.524930497 UTC, 383036/1 reports `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }` without instruction mode or amounts. At 09:00:44.651825428 UTC, 383064/0 reports `FailedToSubmit`, RPC `-32002`, `InstructionError(5, Custom(6001))`; its program logs include `Program log: Instruction: RouteV2`, successful inner swaps, then `Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 failed: custom program error: 0x1771`. The same RouteV2 sequence appears in 383064/1 at 09:00:44.650490826 UTC. Those 2 records identify the route mode, while 383036/1 does not. The later RPC trace in 383037/1 does not establish the earlier simulation's mode.

Planned: 52; accepted main orders filled: 49/49. **Total transactions:** 49. **Median / longest observed fill:** 8.87 / 52.52 seconds.

Fixed-input sells filled (36): [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb), [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8), [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB), [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263), [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm), [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr), [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn), [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So), [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v), [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij), [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT), [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr), [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6), [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4), [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm), [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs), [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa), [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P), [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re), [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA), [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump), [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5), [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82), [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT), [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL).

Exact output buys filled (13): [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8), [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB).

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 125 / 67 | 2026-10-26T08:57:33.503Z | Sell 0.01 SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xf6cc1370bfef9dff341afea1f0b7300ce41271314d575c30f2dda6acf1efcfe5) |
| 126 / 68 | 2026-10-26T08:57:33.609Z | Sell 0.01 SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x4dac6b927861b2527f94f55436c626b4dc57b5ef737d8546d8dbe1f2c07d7002) |
| 127 / 69 | 2026-10-26T08:57:34.031Z | Sell 0.01 SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x0b45f35b7b0c643b853a4889924c46f5363b33d29233bbba50552487d06ad986) |
| 131 / 73 | 2026-10-26T08:57:31.261Z | Sell 0.01 SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) [sponsored] | `404 Not Found: NoLiquidity: no route found`; quote rejected. Not accepted. **Ownership unknown:** driver returned `PriorityFeeTooHigh`; estimate and cap not saved. | No order ID: quote failed before placement |
| 168 / 73 | 2026-10-26T08:57:33.913Z | Buy SOL → exactly 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) [sponsored] | `quote failed: 404 Not Found: NoLiquidity: no route found`; never placed. Original driver rejection was `PriorityFeeTooHigh`. Repair ownership unproven. | No order ID: quote failed before placement |
| 174 / 79 | 2026-10-26T08:57:50.466Z | Buy SOL → exactly 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) [sponsored] | `400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one`; post rejected. Not accepted. **Ownership unknown:** underlying cause not saved. | [Debug](https://debug.barn.cow.fi/order/0xade0c26f0cc1dc365b88df270583d259fe335c8805edd5ef65ef491033134876) (creation UID; may have no debug record) |

**Failed settlement attempts** (each affected order is listed; attempts may share a transaction):

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 128 / 70 | 2026-10-26T08:57:47.82679192Z | Sell 0.01 SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) [self] | `Reverted { err: InstructionError(5, Custom(6001)) }`; RPC confirms Jupiter SlippageToleranceExceeded in 383032/1 at 08:57:48.792914652Z; `Reverted { err: InstructionError(4, Custom(6001)) }`; RPC confirms Jupiter SlippageToleranceExceeded in 383034/0 at 08:57:56.038213107Z; [Failed transaction 383032/1](https://solscan.io/tx/rTbZa5ijcmaWTSwHuDjujYuyK4t3hfiGnNMqB33Tiy75iymMPoufGrn63W6epN4xxH52B8vSrqa8BVaevhmHDL3); [Failed transaction 383034/0](https://solscan.io/tx/2FcyE5MFWiiBuGLDYfuDA4532LHs3hmmfmVdsawznJ63a7A3cYGGBY5WMATk62q51bB8MFR8Uv3KWd9nkkLTSx3p). Final **fulfilled**. Driver simulation passed before execution reverted; repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x1b5fd1ace7c95c69f36fcc22538a63ef91062510d53d8a2a284aff911b57e6dc) |
| 171 / 76 | 2026-10-26T08:58:04.570417956Z | Buy SOL → exactly 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) [sponsored] | `Jupiter SlippageToleranceExceeded (threshold side unverified); SimulationFailed; InstructionError(4, Custom(6001))` in 383036/1 at 08:58:05.524930497Z; `Reverted { err: InstructionError(4, Custom(6001)) }`; RPC confirms Jupiter SlippageToleranceExceeded in 383037/1 at 08:58:10.919247622Z; [Failed transaction 383037/1](https://solscan.io/tx/5VVypofCDC3vyTXT21fbp6eaoeVVdqmzs7XKnqNTtyJcu93tpmr6Sbs8sdGF8YrDwwmDgLpjnPCbQfF3NCDZHBno). Final **fulfilled**. Driver simulation passed before execution reverted; repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x307d866ce6803b82027cc5b2f619eedf814a28e47c0e44258c67ca2251fe8343) |
| 165 / 70 | 2026-10-26T08:58:09.530796558Z | Buy SOL → exactly 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) [self] | `Reverted { err: InstructionError(5, Custom(6001)) }`; RPC confirms Jupiter SlippageToleranceExceeded in 383037/0 at 08:58:10.927355499Z; [Failed transaction 383037/0](https://solscan.io/tx/4M24G6tdBvgxVE4918V4hq2JS2XCLJnF53HXEJnNMY3ocqWWj78EcFTzxdCYCZpXVwoJPQGksGurb1nUkMMCEXvG). Final **fulfilled**. Driver simulation passed before execution reverted; repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x14e456d6789785f90bb9c8178f894c81e4b35c6b9ab9e4de7004bd91df2f91a0) |
| — / 97 | 2026-10-26T09:00:44.513143453Z | Cleanup sell 0.00136496 [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) → SOL | `Jupiter RouteV2 SlippageToleranceExceeded; FailedToSubmit; RPC -32002; InstructionError(5, Custom(6001))` in 383064/0 at 09:00:44.651825428Z; Final **fulfilled**. Repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x554c6f19889ef589216c1bc6fa6fd075e75aa852ce5085213b8714797dd5843d) |
| — / 92 | 2026-10-26T09:00:44.524677126Z | Cleanup sell 112790 raw units [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) → SOL | `Jupiter RouteV2 SlippageToleranceExceeded; FailedToSubmit; RPC -32002; InstructionError(5, Custom(6001))` in 383064/1 at 09:00:44.650490826Z; Final **fulfilled**. Repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0xa62eb29d5de87f9ef0538be3ce2672fb7a3f2e50158eda0827cb9997ff253c59) |

</details>

## 5. Transaction size

**Size boundary inconclusive.** All 10 trades filled in version-1 settlements of 1712-2125 bytes; this is not a test of the old 1232-byte boundary.

<details>
<summary>Order evidence and metrics</summary>

**Failed cleanup attempt.** The EURC cleanup for trader 105 failed driver simulation in auction 383072, solution 0 at 09:03:29.829388528 UTC. The exact error is Titan `LessThanMinimumAmountOut`, `InstructionError(2, Custom(6008))`. This confirms a swap minimum output failure before submission, and the order later filled. **We think the first route had insufficient output margin for the state it was checked against, with medium confidence.** Quote age versus an incorrectly chosen minimum remains unresolved because the output amounts and quote slot are absent. Compare this route's quoted and simulated output, minimum and quote slot with its successful retry. A stale but initially feasible quote supports refreshing routes; an already infeasible minimum supports fixing route construction. Grafiks and CoW should inspect the route integration together. **Repair ownership is unproven.**

Original driver excerpt for 383072/0, solver `grafiks`, 09:03:29.829388528 UTC. `SimulationFailed { err: UiTransactionError(InstructionError(2, Custom(6008))), program_error: Some(ProgramError { program: T1TANpTeScyeqVzzgNViGDNrkQ6qHz9KrSBS4aNXvGT, code: 6008, name: Some("LessThanMinimumAmountOut") }) }`.

Planned: 10; accepted main orders filled: 10/10. **Total transactions:** 4. **Median / longest observed fill:** 6.62 / 9.69 seconds.

Full serialized sizes were measured from RPC base64 transaction bytes, including signature slots. The node required `maxSupportedTransactionVersion: 1`. The active version-1 ceiling and a rejected boundary case were not tested; larger successful transactions do not prove the limit.

[Transaction](https://solscan.io/tx/2JGbdmFuLzVYwzXoiDU9fqroecQ13ihCHWT5L1joisRTiTYayvQFheKJRcwYLdaLBKwgqC5beMmDbGu3fDidyZgF): 2125 bytes.

[Transaction](https://solscan.io/tx/4Z8PRqoCVHcqcb5XpifMUTbcLMBMNGPqjYNY8JTZ53f2SCYLoUywkxt8fEiiPj2YRdru2S7bTWhHQqnrh65HoPTY): 1712 bytes.

[Transaction](https://solscan.io/tx/5AP3wr3znH8gf9aU3DaoPhKABaj3ASgRvWadXXAR7iXZbdbzBxuwYYpuuAvwc8xyeRsBRmjWR7WykxF7ztTGQwnp): 1712 bytes.

[Transaction](https://solscan.io/tx/5ccy6DZT8NAtFNe6z4xnht18hgU9ywxm1PYcd7mgBthZaQr116D3VZL2su1eBBMCSFJhyK6QWMKe7aJccaS2LDc8): 1971 bytes.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 177 / 104 | 2026-10-26T09:01:45.666Z | Sell 0.005 SOL → EURC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xa9b66c2a36203ab57caeda46db6aca6e795aeaf3199c303c7c3e6432539fd9b0) |
| 178 / 108 | 2026-10-26T09:01:45.781Z | Sell 0.005 SOL → JLP [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x887bfb82a68e3f8653a9aac75d8a14b4568a3e4a3ca9521293e5b9a37344ce3a) |
| 179 / 104 | 2026-10-26T09:03:15.095Z | Sell 0.005 SOL → EURC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xffdf7773d152632ae3b4dada253f9e58f514a683485618c42879167b77a3ab77) |

**Failed settlement attempts** (each affected order is listed; attempts may share a transaction):

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 105 | 2026-10-26T09:03:29.729841955Z | Cleanup sell 0.449044 [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) → SOL | `Titan LessThanMinimumAmountOut; SimulationFailed; InstructionError(2, Custom(6008))` in 383072/0 at 09:03:29.829388528Z; Final **fulfilled**. Repair ownership unproven. | [Debug](https://debug.barn.cow.fi/order/0x6c654a05df337b7ec373c1c07f2336dea252d3135831f1b59b2827527e9e7543) |

</details>

## 6. Fresh receiving accounts

**Initially missing accounts: 8/8 filled.** Account creation happens during order creation, so this does not prove the solver creates or pays for missing receiving accounts at settlement.

<details>
<summary>Order evidence and metrics</summary>

Planned: 8; accepted main orders filled: 8/8. **Total transactions:** 6. **Median / longest observed fill:** 9.62 / 16.13 seconds.

The 8 receiving accounts were checked as missing before quoting; wallets skipped ordinary preparation. Per-case funding was 0.15 SOL with 500 bps slippage. The simulator includes an idempotent receiving-account creation instruction in the order creation transaction; self-paid users or the backend sponsor pay it. Missing-before-quote coverage does not isolate solver paid account rent.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 187 / 112 | 2026-10-26T09:04:31.856Z | Sell 0.1 SOL → USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xfd3c1b1423d50b017d2741058fea5dda1e9a3856afd66d0dcc93158dd2670804) |
| 188 / 113 | 2026-10-26T09:04:30.940Z | Sell 0.1 SOL → USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x949b74b3b594da72ff3e4fd019b6ddc77339755e9de9484449adf3da3e647cc3) |
| 189 / 114 | 2026-10-26T09:04:32.829Z | Buy SOL → exactly 10 USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x2324a4fb525b017709e12a05ff48884b4d20c4d6dc91938966721212df737af3) |

</details>
