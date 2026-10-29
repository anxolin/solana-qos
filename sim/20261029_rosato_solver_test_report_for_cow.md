# Rosato solver test report

Date: 29 October 2026. Environment: staging.

**TLDR:** The composite filled 29/86 planned trades and 29/31 placed orders, including exact buys and small bursts; the earlier smoke test filled 2/6 trades. Another 55 composite trades never reached placement, mostly because no usable quote was returned, and 2 accepted orders expired before creation. Every fill was separate, so batching and direct matching were not achieved. 2 swaps failed their 10-bps route limit but worked on retry; first compare quote age and the route allowance with the signed limits: SOL/JUP, later filled (https://debug.barn.cow.fi/order/0xcace0b3724150ded7d1e3016e15adede3cf981a4c9cd52f3baeaa41acc0e7444); SOL/PUMP, later filled (https://debug.barn.cow.fi/order/0x326e09e42fecf74ef851e46e41e666ff263f276860c82dff580bd295a7e8f1a7). Composite cleanup is still pending.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Goal not achieved; 5/5 placed filled (6 planned) | CoW: explain missing 0.5 JUP quote |
| 2. 25 same-direction orders | Goal not achieved; 7/7 filled (25 planned) | Compare failed route allowance with signed limits |
| 3. Bursts of 4 / 8 / 16 | Goal not achieved; 9/9 filled (28 planned) | CoW: restore quote coverage before testing load |
| 4. Opposite orders | Goal not achieved; 5/6 filled (15 planned) | Compare opposite SOL/USDC solutions |
| 5. Token sample | Goal not achieved; 3/4 filled (12 planned) | Compare PUMP route quote with landed output |
| 6. Earlier smoke check | Goal not achieved; 2/5 main orders filled (6 planned) | Compare fee headroom and rejected swap candidates |

No earlier Rosato staging report was found. The smoke session below used different trades and limits, so it is not a matching composite baseline for an improvement or regression claim.

## 1. Standard pairs

Exact buys for USDC and USDT worked; the JUP sell never reached placement. This does not establish support for every buy pair.

<details>
<summary>Order evidence and metrics</summary>

Planned / placed / filled main trades: 6 / 5 / 5. Total transactions (main settlements): 5. Median / longest fill from journal placement: 12.8 / 38.2 seconds. Acquisition and cleanup orders are excluded from these figures. Fill timeout: 180 seconds; order validity: 300 seconds; no scenario retries. Error timestamps are the first failing attempt; successful examples use placement time.

The rejected main request was row 3, sell 0.5 JUP to USDC. Its acquisition succeeded, and row 6 later bought exactly 0.25 USDC paying JUP. CoW must compare the fee estimate with the 500,000 JUP-atom request before changing minimum sizes; the fee response alone does not prove a Rosato route defect.

| Scenario row / trader | UTC timestamp | Trade / account mode | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-29T10:54:56.268Z | Sell 0.005 SOL to USDC, self | final filled | [Order](https://debug.barn.cow.fi/order/0x9e56e6431ddcaf64a03b2fa3e1d0be94a46395743b35f8c21af06b21b201af22) |
| 2 / 2 | 2026-10-29T10:54:57.209Z | Sell 0.005 SOL to USDT, self | final filled | [Order](https://debug.barn.cow.fi/order/0xf3a2d09f9b9ea42bfe29a7311cb5ca472b09277fbe337faf11801eef6a1f93a5) |
| 3 / 3 | 2026-10-29T10:55:17.057Z | Sell 0.5 JUP to USDC, self | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost; final failed | No order ID: quote or acquisition failed before main placement |
| 4 / 1 | 2026-10-29T10:55:07.773Z | Buy SOL to exactly 0.25 USDC, sponsored | final filled | [Order](https://debug.barn.cow.fi/order/0x29b7cccae341bc55a25f2cae234351a9de28e756cd328a6754dd35cb55a77808) |
| - / 2 | 2026-10-29T10:56:15.8915688Z | Cleanup sell 0.75206 USDT to at least 0.007415651 SOL, self | trade 0xac319f179c57347c080c046c0ed4a303ca701e7c412ff03633663a4778b071bb undercuts its limit price after the cut; final fulfilled | [Order](https://debug.barn.cow.fi/order/0xac319f179c57347c080c046c0ed4a303ca701e7c412ff03633663a4778b071bb) |
| 6 / 3 | 2026-10-29T10:55:41.905Z | Buy JUP to exactly 0.25 USDC, sponsored | final filled | [Order](https://debug.barn.cow.fi/order/0x719087585f08d3aaf672d1104a42e61cfd89cd3c0c8c840d9834d6b07eeb9db0) |

Evidence checked for the composite: session metadata, all 86 scenario results, 594 journal events, 36 saved API orders, 32 saved settlement signatures, creation-expiry and settlement-failure exports, competition records, authenticated staging Grafana logs, failed and successful read-only chain transactions, and current unresolved-owner balances. The journal additionally contains 22 successful cleanup orders, making 58 placed orders and 54 fills across all steps. Competition counters cover the whole time window and include unrelated orders; 57 wins is not a main-trade denominator. Historical logs prove Rosato executed and received quote requests. No access read remains pending.

Run windows: 29 October 2026 | Staging | Smoke: 10:51:35-10:53:59 UTC; cleanup ended 10:54:25 UTC. Composite: 10:54:54-11:09:06 UTC. Saved composite evidence through 11:12:21 UTC.

</details>

## 2. 25 same-direction orders

All 7 placed sells filled as separate transactions. The missing 18 quotes prevent a 25-order load claim.

<details>
<summary>Order evidence and metrics</summary>

Planned / placed / filled main trades: 25 / 7 / 7. Total transactions (main settlements): 7. Median / longest fill from journal placement: 22.5 / 54.0 seconds. Acquisition and cleanup orders are excluded from these figures. Fill timeout: 180 seconds; order validity: 300 seconds; no scenario retries. Error timestamps are the first failing attempt; successful examples use placement time.

**Ownership unknown. Cause unknown for missing quotes.** Original API bodies say `404 Not Found: NoLiquidity: no route found`. Identical 0.005 SOL/JUP requests succeeded for rows 7-11, 14 and 25, so permanent pair support is a poor explanation. **Possible reason (unconfirmed):** intermittent quote-provider availability or response handling, medium confidence in intermittency and low confidence in its trigger. Historical API logs identify 10 Rosato-endpoint `SolverFailed` / `Solver engine returned an invalid response` wrappers and 52 `driver found no quote` records in the full window; these aggregate counts are not joins to the 51 failed scenario requests. The original solver response and per-request trace join are unavailable. CoW should first join the saved 10:57:09 UTC row-12 request (5,000,000 SOL atoms, self-paid sell to JUP) to its API request ID and raw provider result, comparing successful row 11. A valid response discarded by the driver points to validation; an empty or failed response points to provider generation. No quote replay was performed.

**Ownership unknown: landed route failure.** Row 10 auction 420970/solution 1 passed driver simulation at 10:57:51.182 UTC, then its Jupiter `Route` failed at instruction 6. It spent 5,000,000 SOL atoms and produced 1,839,496 JUP atoms against a quoted 1,848,766 and 10 bps, below the approximately 1,846,917 minimum by 7,421 atoms. The signed user minimum was 1,286,608 JUP atoms, so the failed route output still exceeded that limit by 552,888 atoms before any settlement fee deduction. This is swap output failure before payout, not a failed user transfer. It filled in auction 420972. **Possible reason (unconfirmed):** the 10-bps route allowance did not cover price movement between simulation and landing; medium confidence because simulation passed and retry filled, while stale construction or provider pricing remains an alternative. First compare route quote time, simulation slot, landed slot and signed buyAmount; only adjust route allowance within the user limit if the saved quote was fresh and the wider limit stays valid. Repair ownership is not proven.

| Scenario row / trader | UTC timestamp | Trade / account mode | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 2026-10-29T10:57:40.923690222Z | Sell 0.005 SOL to JUP, self | SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: None }; auction 420968/1; final filled | [Order](https://debug.barn.cow.fi/order/0xc28cbee1ffd7282a2b9c92f9733e1f726651fa88175fb3a1d969d57b2fbfddf2) |
| 8 / 5 | 2026-10-29T10:57:08.387Z | Sell 0.005 SOL to JUP, self | final filled | [Order](https://debug.barn.cow.fi/order/0x06284a8c31855ef089f56f8183a81347cd771e47529a2b19ea1a30c9c861866b) |
| 9 / 6 | 2026-10-29T10:57:21.102953693Z | Sell 0.005 SOL to JUP, self | SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(6001))), program_error: None }; auction 420964/0; final filled | [Order](https://debug.barn.cow.fi/order/0x23a0c19f92774c5877f44cedaf219bd6c6d961ec97c5f1e2c55c4ba97bfa5642) |
| 10 / 7 | 2026-10-29T10:57:53.338Z | Sell 0.005 SOL to JUP, self | Reverted { err: InstructionError(6, Custom(6001)) }; [failed transaction](https://solscan.io/tx/2RUYhNoV92XSTDVtfyqbePr7oFrJcZmx1WnPgfvTkBRiY1F9GQyaDF7N1GH3nhxt7vZLj8Uhe8uus7mVY8crJK3m); final filled | [Order](https://debug.barn.cow.fi/order/0xcace0b3724150ded7d1e3016e15adede3cf981a4c9cd52f3baeaa41acc0e7444) |
| 12 / 9 | 2026-10-29T10:57:09.062Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 13 / 10 | 2026-10-29T10:57:09.090Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 15 / 12 | 2026-10-29T10:57:10.160Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 16 / 13 | 2026-10-29T10:57:10.167Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 17 / 14 | 2026-10-29T10:57:10.163Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 18 / 15 | 2026-10-29T10:57:10.165Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 19 / 16 | 2026-10-29T10:57:11.276Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 20 / 17 | 2026-10-29T10:57:11.261Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 21 / 18 | 2026-10-29T10:57:11.265Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 22 / 19 | 2026-10-29T10:57:11.263Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 23 / 20 | 2026-10-29T10:57:11.267Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 24 / 21 | 2026-10-29T10:57:11.270Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 26 / 23 | 2026-10-29T10:57:12.374Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 27 / 24 | 2026-10-29T10:57:12.375Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 28 / 25 | 2026-10-29T10:57:12.370Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 29 / 26 | 2026-10-29T10:57:12.372Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 30 / 27 | 2026-10-29T10:57:13.436Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 31 / 28 | 2026-10-29T10:57:13.524Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| - / 8 | 2026-10-29T10:58:24.854Z | Cleanup token sale | 1.843265 JUPyiw\u2026 (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | No order ID: cleanup quote failed before placement |
| - / 22 | 2026-10-29T10:58:40.91739877Z | Cleanup sell 1.84291 JUP to at least 0.004943538 SOL, self | SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(21))), program_error: None }; auction 420980/1; final fulfilled | [Order](https://debug.barn.cow.fi/order/0x90c946c8f3a70e7bd7a27b341a85700cf5c4e5825e6327ea52d11e434908d58a) |
| - / 4 | 2026-10-29T10:58:55.90603647Z | Cleanup sell 1.84289 JUP to at least 0.004944652 SOL, self | trade 0xdf8226a3214e83aaff281384bfb93c5752fa2fb4eeb4ed3a5f91434af9154ad9 undercuts its limit price after the cut; final fulfilled | [Order](https://debug.barn.cow.fi/order/0xdf8226a3214e83aaff281384bfb93c5752fa2fb4eeb4ed3a5f91434af9154ad9) |
| - / 7 | 2026-10-29T10:59:05.89828768Z | Cleanup sell 1.84283 JUP to at least 0.004943541 SOL, self | trade 0xeb7f493467cbdb1d3a7a59cf3bfe57c342051ca89ce09d0c9f3bf16a63ee395e undercuts its limit price after the cut; final fulfilled | [Order](https://debug.barn.cow.fi/order/0xeb7f493467cbdb1d3a7a59cf3bfe57c342051ca89ce09d0c9f3bf16a63ee395e) |

Cleanup quotes left tokens for traders 8, 34, 46, 48 and 50 at intermediate checkpoints. Later cleanup journal records cleared 8, 34, 46 and 50; trader 48 still had 0.1 USDC at the final saved checkpoint. Quote failures here are truncated journal strings; do not interpret them as complete original responses.

Candidate failures listed above are joined by order, auction and solution. Original `bundle simulation failed` records name Jupiter JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 as the failing program for all 6 rejections, but contain `logs: Some([])`. Jupiter 6001 is SlippageToleranceExceeded; the failed swap mode, amounts and threshold are missing, so its input/output inequality remains unknown. Custom(21) is preserved without an unverified numeric explanation. First compare the listed candidate instruction and quoted amounts against the later successful solution; if they differ, check route freshness before changing construction. All listed simulated candidates eventually filled, including cleanup orders.

The public [Jupiter CPI IDL, Route instruction and error 6001](https://github.com/jup-ag/jupiter-cpi/blob/main/idl.json) matches the failed Route discriminator and amount field layout. It supports the 10-bps interpretation; the exact historical deployed version and integer rounding were not independently established. The reported shortfalls are far larger than 1 atom. User signed limits were preserved; this report does not recommend widening them.

</details>

## 3. Bursts of 4 / 8 / 16

The 4-, 8- and 16-request waves each placed and filled 3 orders. The other 19 requests received no usable quote.

<details>
<summary>Order evidence and metrics</summary>

Planned / placed / filled main trades: 28 / 9 / 9. Total transactions (main settlements): 9. Median / longest fill from journal placement: 15.6 / 19.3 seconds. Acquisition and cleanup orders are excluded from these figures. Fill timeout: 180 seconds; order validity: 300 seconds; no scenario retries. Error timestamps are the first failing attempt; successful examples use placement time.

**Ownership unknown. Cause unknown for missing quotes.** Original API bodies say `404 Not Found: NoLiquidity: no route found`. Identical 0.005 SOL/JUP requests succeeded for rows 7-11, 14 and 25, so permanent pair support is a poor explanation. **Possible reason (unconfirmed):** intermittent quote-provider availability or response handling, medium confidence in intermittency and low confidence in its trigger. Historical API logs identify 10 Rosato-endpoint `SolverFailed` / `Solver engine returned an invalid response` wrappers and 52 `driver found no quote` records in the full window; these aggregate counts are not joins to the 51 failed scenario requests. The original solver response and per-request trace join are unavailable. CoW should first join the saved 10:57:09 UTC row-12 request (5,000,000 SOL atoms, self-paid sell to JUP) to its API request ID and raw provider result, comparing successful row 11. A valid response discarded by the driver points to validation; an empty or failed response points to provider generation. No quote replay was performed.

Wave fill counts were 3/4, 3/8 and 3/16 planned, each in separate settlements. Rows 45 and later cleanup candidates also failed simulation before filling; numeric errors below are preserved without assuming the same program as a landed failure.

| Scenario row / trader | UTC timestamp | Trade / account mode | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 2026-10-29T10:59:36.184Z | Sell 0.0025 SOL to USDC, self | final filled | [Order](https://debug.barn.cow.fi/order/0x16d6712c8bf038b9fbe6931ad122d7e653d0ac34322fc0ac0673f51a5a4f634d) |
| 33 / 30 | 2026-10-29T10:59:37.413Z | Sell 0.003 SOL to USDC, self | final filled | [Order](https://debug.barn.cow.fi/order/0xb3ef76f9e7917bfd1c5e424a246cbc98b06a7e41606aff1cb5790c14945fd49e) |
| 34 / 31 | 2026-10-29T10:59:38.364Z | Sell 0.0035 SOL to USDC, self | final filled | [Order](https://debug.barn.cow.fi/order/0xdfd2444cfcda9af83ee8b52e6ac4ac5f481e086d79a7d389b645236f41173d6d) |
| 35 / 32 | 2026-10-29T10:59:36.881Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 36 / 29 | 2026-10-29T11:01:08.011Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 37 / 30 | 2026-10-29T11:01:08.007Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 38 / 31 | 2026-10-29T11:01:08.009Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 39 / 32 | 2026-10-29T11:01:08.127Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 43 / 36 | 2026-10-29T11:01:06.908Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 45 / 30 | 2026-10-29T11:02:46.030404114Z | Sell 0.003 SOL to USDC, self | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }; auction 421029/1; final filled | [Order](https://debug.barn.cow.fi/order/0x5a4083a115e7659958853f44b003ff12b03169e8a66f11319a4f308c302f4445) |
| 46 / 31 | 2026-10-29T11:02:39.172Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 47 / 32 | 2026-10-29T11:02:36.932Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 48 / 33 | 2026-10-29T11:02:38.033Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 49 / 34 | 2026-10-29T11:02:38.123Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 50 / 35 | 2026-10-29T11:02:40.211Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 52 / 37 | 2026-10-29T11:02:38.031Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 53 / 38 | 2026-10-29T11:02:38.037Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 54 / 39 | 2026-10-29T11:02:38.035Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 55 / 40 | 2026-10-29T11:02:39.156Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 56 / 41 | 2026-10-29T11:02:39.135Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 57 / 42 | 2026-10-29T11:02:39.129Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 58 / 43 | 2026-10-29T11:02:39.131Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 59 / 44 | 2026-10-29T11:02:39.133Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| - / 34 | 2026-10-29T11:03:18.484Z | Cleanup token sale | 0.247925 EPjFWd\u2026 (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | No order ID: cleanup quote failed before placement |
| - / 35 | 2026-10-29T11:03:20.955520089Z | Cleanup sell 0.350395 USDC to at least 0.003459710 SOL, self | trade 0x3d0c91c5d96ef62d0c0e60413e5e36b48ac30c12e68f2620ba4d80c19f6acd62 undercuts its limit price after the cut; final fulfilled | [Order](https://debug.barn.cow.fi/order/0x3d0c91c5d96ef62d0c0e60413e5e36b48ac30c12e68f2620ba4d80c19f6acd62) |

Cleanup quotes left tokens for traders 8, 34, 46, 48 and 50 at intermediate checkpoints. Later cleanup journal records cleared 8, 34, 46 and 50; trader 48 still had 0.1 USDC at the final saved checkpoint. Quote failures here are truncated journal strings; do not interpret them as complete original responses.

Candidate failures listed above are joined by order, auction and solution. Original `bundle simulation failed` records name Jupiter JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 as the failing program for all 6 rejections, but contain `logs: Some([])`. Jupiter 6001 is SlippageToleranceExceeded; the failed swap mode, amounts and threshold are missing, so its input/output inequality remains unknown. Custom(21) is preserved without an unverified numeric explanation. First compare the listed candidate instruction and quoted amounts against the later successful solution; if they differ, check route freshness before changing construction. All listed simulated candidates eventually filled, including cleanup orders.

</details>

## 4. Opposite orders

Opposite SOL/USDC orders shared auction 421077, but successful trades used separate DEX swaps. Sponsored creation failures and missing quotes also reduced coverage.

<details>
<summary>Order evidence and metrics</summary>

Three accepted sponsored orders never reached on-chain creation: main row 66 and acquisitions for rows 70 and 72. Autopilot recorded `sponsored creation expired, dropping the order`; these are CoW creation failures, not proof that Rosato cannot trade those pairs. The exact winning creation/expiry cause remains unresolved; compare creation submission, blockhash lifetime and winner timing for these 3 UIDs before changing solver behavior.

Planned / placed / filled main trades: 15 / 6 / 5. Total transactions (main settlements): 5. Median / longest fill from journal placement: 15.9 / 31.2 seconds. Acquisition and cleanup orders are excluded from these figures. Fill timeout: 180 seconds; order validity: 300 seconds; no scenario retries. Error timestamps are the first failing attempt; successful examples use placement time.

Auction 421077 explicitly added rows 66 and 68 (SOL -> USDC) and 69 (USDC -> SOL) together at 11:06:42.436 UTC. Rows 68 and 69 settled separately in auctions 421079 and 421081: [row 68 transaction](https://solscan.io/tx/5s3YiFP38qj3DsheVoC3Dk5Jx8H5SPwwYqvEhLAbzk5vkbL5CthgFNnL5ZaM7a4cCLHARd3vi2LZ4Mh3zzuNbng1) invoked Jupiter/Tessera; [row 69 transaction](https://solscan.io/tx/57skWzq5KXYY2zSUoRfd3j2oBX3NuW3gYSQt2rQHkz3DsoCGDjX8fVVmrNERXaVfe6erm9jEYFZLX4GPWNnfmGN3) invoked Jupiter/Meteora. Direct matching was not observed. This is a missed demonstration, not proof of a profitable direct match after fees. The useful solver check is the submitted candidate set for auction 421077 and whether any combined candidate was generated and viable after costs.

**Creation and cleanup, CoW first.** Row 62 POST failed with `400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one`. There is no placed journal event for row 62: this is a prepared/rejected UID, not an additional accepted order. The harness conservatively retained UID 0x8ffe13ea484f79e263b158ff8c2189933f4612954b2d62643841d8111c89cfaa as unresolved. A later read still returned HTTP 404; at slots 462867840/841 trader 49 held 70,000,000 lamports (0.07 SOL) and both intended token accounts were absent. There is no evidence of a later fill. The saved run is finished=false with one unresolvedOrders item; metadata cleanupPending [49,48] is not proof those traders were cleaned. Trader 48 later reached cleanup_done but retained 0.1 USDC (also verified by read-only RPC at slot 462869267), initially NoLiquidity and finally SellAmountDoesNotCoverFee at 11:10:14 UTC. Trader 49 has no cleanup_done. CoW should reconcile the rejected UID against its PDA and funding state before clearing recovery or scheduling a separately authorized sweep. The error proves blockhash validation rejection, not why a supposedly fresh transaction failed it.

| Scenario row / trader | UTC timestamp | Trade / account mode | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 60 / 46 | 2026-10-29T11:04:11.807Z | Buy SOL to exactly 2.6 USDC, sponsored | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 61 / 48 | 2026-10-29T11:04:13.233Z | Buy SOL to exactly 1.3 USDC, sponsored | final filled | [Order](https://debug.barn.cow.fi/order/0xb016cfa395c8351a6261a22a060585add2aae15fb7af1021fe23b08786cd3d0b) |
| 62 / 49 | 2026-10-29T11:04:14.272Z | Buy SOL to exactly 3.1 USDC, sponsored | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one; final failed | [Rejected UID (API record absent)](https://debug.barn.cow.fi/order/0x8ffe13ea484f79e263b158ff8c2189933f4612954b2d62643841d8111c89cfaa) |
| 63 / 50 | 2026-10-29T11:04:15.402Z | Buy SOL to exactly 3.1 USDT, sponsored | final filled | [Order](https://debug.barn.cow.fi/order/0x6f77797c9fd0466cb7e163a68e0e309099f29a62720393356c0c45e7e2b85c11) |
| 64 / 51 | 2026-10-29T11:04:11.812Z | Buy SOL to exactly 1.1 USDT, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 65 / 52 | 2026-10-29T11:04:11.810Z | Buy SOL to exactly 3.2 USDC, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 66 / 45 | 2026-10-29T11:07:15.405Z | Sell 0.02 SOL to USDC, sponsored | main expired; final failed | [Order](https://debug.barn.cow.fi/order/0x841adb8a5e0ddd4a84a8cfb343246d17ecafd88007c29e692e790107e5c7ef2f) |
| 67 / 46 | 2026-10-29T11:07:11.297Z | Buy USDC to exactly 0.02 SOL, sponsored | final filled | [Order](https://debug.barn.cow.fi/order/0x5555024ffd75d5e1c56bcd50536aebbecd8728bc92f3bc957ca60e210fedbbe2) |
| 69 / 48 | 2026-10-29T11:07:00.994372548Z | Sell 1.2 USDC to SOL, sponsored | trade 0x3dc300f723ea2d3406d30f39a155d02622fa57d371b4310ebb269302f1e8414c undercuts its limit price after the cut; final filled | [Order](https://debug.barn.cow.fi/order/0x3dc300f723ea2d3406d30f39a155d02622fa57d371b4310ebb269302f1e8414c) |
| 70 / 49 | 2026-10-29T11:07:25.320Z | Sell 3 USDC to USDT, sponsored | acquire USDC expired; final failed | No order ID: quote or acquisition failed before main placement |
| 71 / 50 | 2026-10-29T11:06:41.789Z | Sell 3 USDT to USDC, sponsored | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 72 / 51 | 2026-10-29T11:07:24.313Z | Sell 1 USDT to USDC, sponsored | acquire USDT expired; final failed | No order ID: quote or acquisition failed before main placement |
| 73 / 52 | 2026-10-29T11:06:51.760Z | Sell 3 USDC to USDT, sponsored | acquire USDC error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 74 / 53 | 2026-10-29T11:06:41.791Z | Sell 0.02 SOL to JUP, sponsored | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 72 / 51 | 2026-10-29T11:06:49.823Z | sell 14727078 raw SOL to 1321333 raw USDT (acquire), sponsored | ; final expired | [Order](https://debug.barn.cow.fi/order/0xc3b2a4a8fa8b84ac8f95f8b47b89fc9f22f871f5c47de01e9b0af71169901df2) |
| 70 / 49 | 2026-10-29T11:06:50.901Z | sell 44232840 raw SOL to 4264529 raw USDC (acquire), sponsored | ; final expired | [Order](https://debug.barn.cow.fi/order/0x9024aa6197385330fb409638ca1fb9f8ee311b5f27927db71536794bbebc258c) |
| - / 48 | 2026-10-29T11:07:43.121Z | Cleanup token sale | 0.1 EPjFWd\u2026 (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | No order ID: cleanup quote failed before placement |
| - / 46 | 2026-10-29T11:07:44.060Z | Cleanup token sale | 1.138488 EPjFWd\u2026 (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | No order ID: cleanup quote failed before placement |
| - / 50 | 2026-10-29T11:07:49.188Z | Cleanup token sale | 3.1 Es9vMF\u2026 (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | No order ID: cleanup quote failed before placement |
| - / 48 | 2026-10-29T11:10:14.350Z | Cleanup token sale | 0.1 EPjFWd\u2026 (quote failed: Bad Request {"errorType":"SellAmountDoesNotCoverFee","descri) | No order ID: cleanup quote failed before placement |
| - / 50 | 2026-10-29T11:10:21.091413148Z | Cleanup sell 3.1 USDT to at least 0.029127827 SOL, self | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }; auctions 421120/0 and 421121/0 (2 attempts); final fulfilled | [Order](https://debug.barn.cow.fi/order/0x23ae98f5fa8efeaf608f00680677dc5a0e50ca95147bba8465f8f14260746eb8) |

Cleanup quotes left tokens for traders 8, 34, 46, 48 and 50 at intermediate checkpoints. Later cleanup journal records cleared 8, 34, 46 and 50; trader 48 still had 0.1 USDC at the final saved checkpoint. Quote failures here are truncated journal strings; do not interpret them as complete original responses.

The driver rejected the listed candidates because deducting execution costs would violate the signed limit. This verifies a fee-versus-limit constraint, not a solver defect. CoW should compare the rejected candidate gross output, charged fee and signed limit for the listed auction before asking the solver to change its route; those exact fee amounts are missing from these records. All affected candidates later filled except USDG row 75, whose sponsored creation expired.

**Ownership unknown, cleanup candidate failures:** the 3.1 USDT sale failed simulation twice with Custom(6001), then filled. No failed on-chain signature exists for those candidates. The logged failing program is Jupiter and simulation logs are empty; the swap mode and exact route limit are missing; compare solutions 421120/0 and 421121/0 with successful 421122/0 before deciding whether route refresh or construction needs a change.

</details>

## 5. Token sample

SOL sells into PUMP, PYUSD and BONK filled. No exact token-buy probe filled, so exact-buy token coverage remains unproven.

<details>
<summary>Order evidence and metrics</summary>

The accepted sponsored USDG order at row 75 never reached on-chain creation. Autopilot recorded `sponsored creation expired, dropping the order`. This is a CoW creation failure, not proof that Rosato cannot trade USDG. The exact winning creation/expiry cause remains unresolved; compare creation submission, blockhash lifetime and winner timing for its UID before changing solver behavior.

Planned / placed / filled main trades: 12 / 4 / 3. Total transactions (main settlements): 3. Median / longest fill from journal placement: 37.6 / 48.1 seconds. Acquisition and cleanup orders are excluded from these figures. Fill timeout: 180 seconds; order validity: 300 seconds; no scenario retries. Error timestamps are the first failing attempt; successful examples use placement time.

**Ownership unknown. Cause unknown for missing quotes.** Original API bodies say `404 Not Found: NoLiquidity: no route found`. Identical 0.005 SOL/JUP requests succeeded for rows 7-11, 14 and 25, so permanent pair support is a poor explanation. **Possible reason (unconfirmed):** intermittent quote-provider availability or response handling, medium confidence in intermittency and low confidence in its trigger. Historical API logs identify 10 Rosato-endpoint `SolverFailed` / `Solver engine returned an invalid response` wrappers and 52 `driver found no quote` records in the full window; these aggregate counts are not joins to the 51 failed scenario requests. The original solver response and per-request trace join are unavailable. CoW should first join the saved 10:57:09 UTC row-12 request (5,000,000 SOL atoms, self-paid sell to JUP) to its API request ID and raw provider result, comparing successful row 11. A valid response discarded by the driver points to validation; an empty or failed response points to provider generation. No quote replay was performed.

**Ownership unknown: PUMP route failure.** Row 76 auction 421096/solution 0 passed driver simulation at 11:08:21.511 UTC, then failed Jupiter `Route` instruction 5. Input was 10,000,000 SOL atoms; the route quoted 229,644,437 PUMP atoms with 10 bps, but inner transfers delivered 227,921,635, below the approximately 229,414,792 minimum by 1,493,157 atoms. The signed user minimum was 192,914,033 PUMP atoms, leaving 35,007,602 atoms of gross headroom before fee deduction. It filled on retry in auction 421098. **Possible reason (unconfirmed):** an allowance too narrow for quote-to-landing movement; medium confidence, with stale or inaccurate provider pricing an alternative. Compare the returned route amounts and timestamp with the failed transaction, simulation slot and signed limit before changing allowance. The chain failure identifies output shortfall, while repair ownership remains unknown.
Successful SOL-sell destinations: [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), BONK. Successful exact-buy probe destinations: none. USDG was accepted but expired before sponsored creation. WIF, POPCAT, JitoSOL, mSOL and JupSOL sell probes, and USDG/PUMP/PYUSD exact buys, lacked usable quotes. This does not establish permanent support or lack of support.

| Scenario row / trader | UTC timestamp | Trade / account mode | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 75 / 54 | 2026-10-29T11:08:47.787Z | Sell 0.01 SOL to 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH, sponsored | trade 0x3ae8125fa9bc018a6590dd35d9953ff66307a58d720c379c476951bdfd92ca83 undercuts its limit price after the cut (4 attempts); main expired; final failed | [Order](https://debug.barn.cow.fi/order/0x3ae8125fa9bc018a6590dd35d9953ff66307a58d720c379c476951bdfd92ca83) |
| 76 / 55 | 2026-10-29T11:08:22.387Z | Sell 0.01 SOL to pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn, self | Reverted { err: InstructionError(5, Custom(6001)) }; [failed transaction](https://solscan.io/tx/4wXd351CeLip6pMZC7Vqddxu6UUqyd6y6fvPGm4RyHrNKKTo7bgiCzLrLWXY1zEwUArWzm4NXTBbgCu1ZWJhNwSY); final filled | [Order](https://debug.barn.cow.fi/order/0x326e09e42fecf74ef851e46e41e666ff263f276860c82dff580bd295a7e8f1a7) |
| 77 / 56 | 2026-10-29T11:08:26.049390931Z | Sell 0.01 SOL to 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo, sponsored | trade 0x593a685e50bfd1e71090e1da904c313a4755bb31d2df5e48799aa22178283a5c undercuts its limit price after the cut (2 attempts); final filled | [Order](https://debug.barn.cow.fi/order/0x593a685e50bfd1e71090e1da904c313a4755bb31d2df5e48799aa22178283a5c) |
| 78 / 57 | 2026-10-29T11:08:18.285Z | Sell 0.005 SOL to DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263, self | final filled | [Order](https://debug.barn.cow.fi/order/0xd0c084e7cb291950a443be96db8388f592dba6788ffc9ea7c71e3425c65eaebb) |
| 79 / 58 | 2026-10-29T11:08:16.808Z | Sell 0.005 SOL to EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 80 / 59 | 2026-10-29T11:08:16.805Z | Sell 0.005 SOL to 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 81 / 60 | 2026-10-29T11:08:16.811Z | Sell 0.005 SOL to J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 82 / 61 | 2026-10-29T11:08:17.917Z | Sell 0.005 SOL to mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 83 / 62 | 2026-10-29T11:08:17.910Z | Sell 0.005 SOL to jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v, self | main error: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 84 / 54 | 2026-10-29T11:08:49.948Z | Buy SOL to exactly 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 85 / 55 | 2026-10-29T11:08:36.032Z | Buy SOL to exactly 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn, self | quote failed: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |
| 86 / 56 | 2026-10-29T11:08:54.934Z | Buy SOL to exactly 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; final failed | No order ID: quote or acquisition failed before main placement |

Candidate failures listed above are joined by order, auction and solution. Original `bundle simulation failed` records name Jupiter JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 as the failing program for all 6 rejections, but contain `logs: Some([])`. Jupiter 6001 is SlippageToleranceExceeded; the failed swap mode, amounts and threshold are missing, so its input/output inequality remains unknown. Custom(21) is preserved without an unverified numeric explanation. First compare the listed candidate instruction and quoted amounts against the later successful solution; if they differ, check route freshness before changing construction. All listed simulated candidates eventually filled, including cleanup orders.

The driver rejected the listed candidates because deducting execution costs would violate the signed limit. This verifies a fee-versus-limit constraint, not a solver defect. CoW should compare the rejected candidate gross output, charged fee and signed limit for the listed auction before asking the solver to change its route; those exact fee amounts are missing from these records. All affected candidates later filled except USDG row 75, whose sponsored creation expired.

</details>

## 6. Earlier smoke check

The smoke check filled a sponsored exact buy of 2 JUP and a self-paid 0.5 JUP sell. Four flows failed, including repeated swap or fee rejections before sponsored creation expired.

<details>
<summary>Order evidence and metrics</summary>

Session: `rosato-smoke-20261029-105125`, staging, started 10:51:35.358 UTC. Planned / placed / filled main trades: 6 / 5 / 2; 1 additional main trade was blocked by an expired acquisition. Total transactions (main settlements): 2; median / longest main fill: 26.9 / 41.2 seconds. Across all steps: 10 placed orders, 6 fulfilled, 4 expired; 3 acquisitions (2 fulfilled), 2 cleanup sales (both fulfilled). These figures are separate from the 86-trade composite. This session used fillTimeout 90 seconds and orderValidity 120 seconds, versus 180 / 300 seconds in the composite.

Rosato participation is verified by historical executing-solution records naming driver `rosato`, the matching solver address, and order-specific settlements: exact-JUP buy in auction 420897/0 and self-paid JUP sell in 420923/0. The saved competition export records 6 Rosato wins/submissions/observed settlements across all smoke steps. These are not 6 main fills. Saved transactions have no chain errors; the settlement-failure export is empty. The metadata reporting window extends beyond cleanup and overlaps the composite start, but the smoke UIDs and order-specific joins distinguish the sessions.

**Ownership unknown: rejected Jupiter swaps.** There were 4 rejected simulation attempts on 2 smoke orders. The 0.01 SOL/USDC sponsored sell failed simulation twice at auctions 420898/1 and 420899/1, then expired; the self-paid 0.5 JUP/SOL sell failed at 420916/0 and 420919/0, then filled at 420923/0. Original bundle records identify Jupiter JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, with `logs: Some([])`. Custom(6001) therefore identifies Jupiter SlippageToleranceExceeded, but failed instruction payloads, swap mode and actual amounts are unavailable, so the violated input/output bound is unknown. **Possible reason (unconfirmed):** route quote/limit drift, low confidence; construction arithmetic is an equally plausible alternative without the payload. Compare the saved candidate route input/output and allowance at auction 420916/0 with successful 420923/0 before applying a change. A stale quote supports refreshing it; a fresh route that disagrees with the signed limit supports construction correction. No failed transaction signature exists for these rejected candidates.

**Ownership unknown: execution-cost cuts.** There were 15 fee-cut rejections on 3 smoke orders. The driver rejected the 1 JUP/wSOL main sell, the 0.006439470 SOL/USDC acquisition and the later successful 0.5 JUP/SOL sell because deducting execution costs would undercut their signed limit. This verifies insufficient candidate headroom after fees; it does not establish who should repair it. The exact gross outputs and charged fee amounts are absent. CoW should first compare those values and the signed limits for 420900/1, 420906/0 and 420917/0. A fee exceeding the quote allowance points to CoW quote/fee handling; an unexpectedly poor fresh route could then give the solver a specific route question. The successful exact-JUP buy differs in kind and amount, so it does not isolate an account-mode cause.

**Sponsored creation, CoW first.** Autopilot recorded `sponsored creation expired, dropping the order` for the 0.01 SOL/USDC main sell at 10:52:12.174 UTC, 1 JUP/wSOL sell at 10:52:27.177, acquisition at 10:52:57.183, and exact 1 USDT buy at 10:53:42.247. Each final journal status is expired with zero executed amounts. Their 31.9-35.0-second observed lifetimes are shorter than the 120-second order-validity setting, so do not call them ordinary limit-order deadline expiries. No creation submission is joined to these 4 UIDs; the first three have rejected candidates above, while the exact-USDT candidate history is missing. CoW should compare template/blockhash expiry, candidate availability and winning time before changing creation handling; expiry is verified, but its full underlying cause is not.

| Scenario row / trader | UTC timestamp | Trade / account mode | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-29T10:51:50.852530747Z | Sell 0.01 SOL -> USDC, sponsored | SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: None } (2 attempts; auctions 420898/1, 420899/1); final expired; sponsored creation expired, dropping the order | [Order](https://debug.barn.cow.fi/order/0x9a8929b43f3c934a688adf704890a60e6c83dedeb87b66bb26bfd1ec3e306a82) |
| 2 / 2 | 2026-10-29T10:51:38.537Z | Buy SOL -> exactly 2 JUP, sponsored | final fulfilled | [Order](https://debug.barn.cow.fi/order/0x3948d4e492506b295315a03650d2e4179f4016b3775cbc572312f1850c49c5b0) |
| 3 / 1 | 2026-10-29T10:52:30.68801055Z | Buy USDC -> exactly 1 JUP, sponsored | trade 0x55276176c956bab61f1879f321bfb9b8efd295ee9dc4a90d1b6282625831d95a undercuts its limit price after the cut (6 attempts; auctions 420906/0, 420907/0, 420908/0, 420909/0, 420910/0, 420911/0); acquisition expired; no main order placed; sponsored creation expired, dropping the order | [Acquisition order; main not placed](https://debug.barn.cow.fi/order/0x55276176c956bab61f1879f321bfb9b8efd295ee9dc4a90d1b6282625831d95a) |
| 4 / 2 | 2026-10-29T10:52:00.98865309Z | Sell 1 JUP -> wSOL, sponsored | trade 0x70e0065055c54707c089a8fe6c07bc0e73c34b57ba8556c3b23833fc79bead71 undercuts its limit price after the cut (4 attempts; auctions 420900/1, 420901/1, 420902/1, 420904/1); final expired; sponsored creation expired, dropping the order | [Order](https://debug.barn.cow.fi/order/0x70e0065055c54707c089a8fe6c07bc0e73c34b57ba8556c3b23833fc79bead71) |
| 5 / 1 | 2026-10-29T10:53:20.885594907Z | Sell 0.5 JUP -> SOL, self | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } (2 attempts; auctions 420916/0, 420919/0); trade 0x097bf81890dfa53353a7e31ba5577ccfd3ea82c4c924e9413aa94ef170e48716 undercuts its limit price after the cut (5 attempts; auctions 420917/0, 420918/0, 420920/0, 420921/0, 420922/0); final fulfilled | [Order](https://debug.barn.cow.fi/order/0x097bf81890dfa53353a7e31ba5577ccfd3ea82c4c924e9413aa94ef170e48716) |
| 6 / 2 | 2026-10-29T10:53:39.412Z | Buy USDC -> exactly 1 USDT, sponsored | final expired; sponsored creation expired, dropping the order | [Order](https://debug.barn.cow.fi/order/0xc62887a3e61977e42784dd72f9217de79b5d4bd72bbb76855eb5c3e5c4a9d83f) |

Successful exact-JUP buy: 0.006914182 SOL spent for exactly 2 JUP. Successful JUP sell: 0.5 JUP sold for 0.001341081 SOL. [Exact-buy transaction](https://solscan.io/tx/2b21nN5fdq8RzMmqVT8H7v6KBtarw1LRdiLPnmgq9ErQnmp8oDgWRWTYjdMGhiQ2hKo49G4C25joqvjCVX2TLTfC); [JUP-sell transaction](https://solscan.io/tx/5N5T2YBbsorXAfi7xUCuy7j87yNe3PEzARPUSaymSSCkJVX71dR3BUcmuiDvS5abyDA6YTG5iiHxmRPUerBBF86R).

Cleanup finished for both smoke traders with no reported leftovers or pending recovery. Trader 1 burned 0.232811 JUP, reclaimed 2 orders, closed 2 token accounts and swept 0.049313039 SOL. Trader 2 sold 1.608646 USDC and 2 JUP, reclaimed 4 orders, closed 3 accounts and swept 0.049868293 SOL. Burning that dust was an observed simulator cleanup action, not solver trading performance.

</details>
