> **Adjusted composite results (20 October): 33/167 eligible flows filled (19.76%). 3 unsupported transfer-fee rows excluded.** The detailed report below retains historical raw counts. Use the [recalculated full report](../sessions/2026-10-12-09-43-composite-paradox-run/solver_test_report.md) for scoring.

# Paradox solver test report

12 October 2026 · Staging · 09:43–11:06 UTC

**TLDR:** Only 33/170 planned trades completed, though every placed main order filled. Most trades couldn't get a quote, so we still don't know how much load Paradox can handle or which tokens work reliably. Next, check the quote failures with Paradox and finish cleanup: 28 wallets still have tokens left.

134 trades returned `NoLiquidity` and 3 hit known protocol restrictions before placement. Totals exclude 2 acquisition orders and 9 cancelled cleanup orders; all 4 scenarios finished.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Incomplete; 5/6 trades filled | Paradox + CoW: inspect the failed JUP → USDC quote and fee handling. |
| 2. 25 same direction sells | Throughput inconclusive; 4/25 filled | Paradox + CoW: investigate 21 quote failures before increasing load. |
| 3. Sell bursts | Throughput inconclusive; 18/84 filled | Paradox + CoW: stabilize quoting, then measure sustained throughput. |
| 4. Token coverage | Partial; 6/55 planned trades filled; 0 exact buys | Paradox + CoW: check exact output quotes and fresh LST routes. |

## 1. Standard pairs

**Basic swaps were only partly validated.** SOL/USDC and SOL/USDT worked, but the JUP → USDC sell failed quoting.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 5. **Median / longest fill:** 6.5 / 10.1 seconds. All 5 placed main orders filled; each settled separately.

Setup: 6 trades, 30 seconds apart: self paid SOL → USDC, SOL → USDT and JUP → USDC sells, followed by sponsored exact buys of 0.25 USDC, 0.25 USDT and 0.25 USDC paying JUP. The simulator acquired JUP in 2 additional orders; these are excluded from main-order totals.

Times are UTC. Successful examples use placement time; failures use the first recorded failed attempt. Fill times measure placement to observed fill and include polling delay. Total transactions means distinct successful settlements of main scenario orders, excluding funding, creation, acquisitions, failed attempts and cleanup. Composite row numbers and saved trader IDs are used below.

**Ownership unknown:** the API returned `404 Not Found: NoLiquidity: no route found` before placement. Backend records confirm the Paradox driver returned `QuotingFailed: no valid quote found`; they do not expose the underlying solver or Jupiter response. This error does not prove that a token has no DEX liquidity.

Row 3 acquired JUP successfully, then its 0.5 JUP → USDC sell quote failed. Row 6 later completed a 0.25 USDC exact buy paying JUP. The pair and direction are the same, but the order kind and amount differ; compare those quote requests.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 09:43:47.496 | Sell 0.005 SOL → USDC | None; filled in 6.2 seconds. | [Debug](https://debug.barn.cow.fi/order/0x0bb7c64933550cd366e194e2536cec2212719f65ed72f0d93c0003472d891e71) |
| 4 / 1 | 09:45:17.105 | Buy SOL → exactly 0.25 USDC | None; filled in 7.1 seconds. | [Debug](https://debug.barn.cow.fi/order/0xb3dfd9b2525adfdf6ad8c980e4a195863c04e441a7f5e09566609e07fb2f9707) |
| 6 / 3 | 09:46:33.168 | Buy JUP → exactly 0.25 USDC | None; filled in 6.5 seconds. | [Debug](https://debug.barn.cow.fi/order/0x847e2b61cadadbb1e4f3555a9c096e3c4171e49523a9c04ff6c6dc62e0f86f35) |
| 3 / 3 | 09:45:00.592 | Sell 0.5 JUP → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |

**Deferred cleanup**

1 wallet had recorded token leftovers when cleanup was deferred. Both USDC → SOL cleanup orders received 43 fee rejections each: output fell below the order minimum after the solver fee. The rejection is confirmed; **ownership unknown** between the proposed solution and driver fee handling.

Initial cleanup also burned 5 token balances listed below. A failed quote could trigger burning in the simulator version used at that point; 4 no-valid-quote responses were recorded nearby, but the journal does not identify each token’s quote decision. The simulator safety fix now preserves tokens after every failed quote; already burned tokens cannot be recovered.

For unplaced cleanup balances without a separate error event, the timestamp is the first cleanup summary recording the failure. Balances are the saved end-of-test records, not a fresh wallet scan; they may include holdings from earlier sessions.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 1 | 09:46:45.987 | Sell 0.806183 USDC → SOL | 43 solutions rejected: `undercuts its limit price after the solver fee`. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0xe0fed7fbf0819f75c7d96387f3c849754b90de5c2825a1e92cf0f053a5dfe0cb) |
| — / 1 | 10:11:01.256 | Sell 0.806183 USDC → SOL | 43 solutions rejected: `undercuts its limit price after the solver fee`. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x4739838071cdd9bc9aaf8c7f474e64d3ba350603c508e52fc5adb961cd406617) |
| — / 2 | 09:46:43.163 | 0.806703 USDT balance | Simulator cleanup burned this balance. Per-token quote decision was not recorded; it cannot be recovered. | [Transaction](https://solscan.io/tx/2PpKAMttQ9bUGbpkMKAXDq1p7ZF2wiwiLetoCaiKG9vfJrYvMGdXmnZAZjLU9xeK41N7U1sumkYYaMwf6cenn5hw) |
| — / 2 | 09:46:43.163 | 1.006755 USDC balance | Simulator cleanup burned this balance. Per-token quote decision was not recorded; it cannot be recovered. | [Transaction](https://solscan.io/tx/2PpKAMttQ9bUGbpkMKAXDq1p7ZF2wiwiLetoCaiKG9vfJrYvMGdXmnZAZjLU9xeK41N7U1sumkYYaMwf6cenn5hw) |
| — / 2 | 09:46:43.163 | 1.56218 JUP balance | Simulator cleanup burned this balance. Per-token quote decision was not recorded; it cannot be recovered. | [Transaction](https://solscan.io/tx/2PpKAMttQ9bUGbpkMKAXDq1p7ZF2wiwiLetoCaiKG9vfJrYvMGdXmnZAZjLU9xeK41N7U1sumkYYaMwf6cenn5hw) |
| — / 3 | 09:46:44.061 | 0.031907 JUP balance | Simulator cleanup burned this balance. Per-token quote decision was not recorded; it cannot be recovered. | [Transaction](https://solscan.io/tx/349SB2ZeTtnY2eb5akHo3fepp7HWTZ2stSBhUWt62e8gPkgcJSMD6ggqpkvo97cPddToYM1zdKpaNZ1DfTSUVo6w) |
| — / 3 | 09:46:44.061 | 0.25 USDC balance | Simulator cleanup burned this balance. Per-token quote decision was not recorded; it cannot be recovered. | [Transaction](https://solscan.io/tx/349SB2ZeTtnY2eb5akHo3fepp7HWTZ2stSBhUWt62e8gPkgcJSMD6ggqpkvo97cPddToYM1zdKpaNZ1DfTSUVo6w) |

</details>

## 2. 25 same direction sells

**Same direction throughput is inconclusive.** Only 4 orders reached settlement because 21 failed quoting; all 4 settled individually, as expected for Paradox.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 4. **Median / longest fill:** 19.1 / 66.7 seconds. All 4 placed main orders filled; each settled separately.

Setup: 25 self paid sells of 0.005 SOL → JUP submitted together. Batching is a known and accepted missing feature in Paradox; the useful check here was whether same-direction order flow could quote and settle reliably.

**Ownership unknown:** the API returned `404 Not Found: NoLiquidity: no route found` before placement. Backend records confirm the Paradox driver returned `QuotingFailed: no valid quote found`; they do not expose the underlying solver or Jupiter response. This error does not prove that a token has no DEX liquidity.

All 4 placed orders filled in separate transactions; no batch was observed. [Example settlement](https://solscan.io/tx/31MM986ieFHuQtGF5wV6upwQ4jRTuAMmYWDBFV7chuCCA8huKq9mQKczcfXTeShJZcfb8Uvca7wgbKor6dbPbfUg). One route passed driver simulation but failed on chain at Jupiter’s minimum output check; a later attempt filled the order. Check route freshness and the minimum output used at submission.

The deadline warning followed that failed submission; it does not establish a late solver response.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 10:28:33.563 | Sell 0.005 SOL → JUP | None; filled in 21.9 seconds. | [Debug](https://debug.barn.cow.fi/order/0xa744e39777360deaf6b7d0bfced74b200b2f8dad34e78f143b95607c61f334fe) |
| 8 / 5 | 10:28:33.663 | Sell 0.005 SOL → JUP | None; filled in 9.5 seconds. | [Debug](https://debug.barn.cow.fi/order/0x97c95937108e2c2aca597852779e182e5b0d7eff824f188a3ea5e3c5e8aadd19) |
| 9 / 6 | 10:28:33.762 | Sell 0.005 SOL → JUP | None; filled in 16.2 seconds. | [Debug](https://debug.barn.cow.fi/order/0x46ac573090da74c3d5954ce26e35ad1e7c4ffc96b33454b636475d72c0478319) |
| 10 / 7 | 10:28:29.907 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 11 / 8 | 10:28:30.199 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 12 / 9 | 10:28:30.410 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 13 / 10 | 10:28:30.541 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 14 / 11 | 10:28:30.720 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 16 / 13 | 10:28:31.107 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 17 / 14 | 10:28:31.405 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 18 / 15 | 10:28:31.625 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 19 / 16 | 10:28:31.740 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 20 / 17 | 10:28:32.105 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 21 / 18 | 10:28:32.243 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 22 / 19 | 10:28:32.319 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 23 / 20 | 10:28:32.517 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 24 / 21 | 10:28:32.796 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 25 / 22 | 10:28:33.027 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 26 / 23 | 10:28:33.110 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 27 / 24 | 10:28:33.416 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 28 / 25 | 10:28:33.506 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 29 / 26 | 10:28:33.722 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 30 / 27 | 10:28:33.905 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 31 / 28 | 10:28:34.234 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 15 / 12 | 10:28:58.499 | Sell 0.005 SOL → JUP | Filled later. `FailedToSubmit`: Jupiter `6001 SlippageToleranceExceeded` at instruction 6. Driver simulation passed; execution failed on chain. [Failed transaction](https://solscan.io/tx/tshHzsQqRLneTzaGMYL597PVSQsfHAeWSRGL4rWNrFz6xUbJt68J9ETkQXy97THWNVy8rks2wcWNWwTPCKXf1nB). | [Debug](https://debug.barn.cow.fi/order/0xd6ae31d69256b8eee069437121d53f8ec2bb49cb6be24de5ab105818d4c7e1a6) |

**Deferred cleanup**

7 wallets had recorded token leftovers when cleanup was deferred. During this cleanup window, 34 candidate solutions failed simulation with SPL Token `InvalidAccountData` at instruction 6. Logs omit their order IDs, so these failures cannot be assigned to individual cleanup orders; **ownership unknown**. Check native SOL output and token account setup with the driver team.

For unplaced cleanup balances without a separate error event, the timestamp is the first cleanup summary recording the failure. Balances are the saved end-of-test records, not a fresh wallet scan; they may include holdings from earlier sessions.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 4 | 10:33:22.164 | Sell 1.563852 JUP → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x6f2414d1917f5128dbf23ef9d37fbe16a27ea1da91785876cf4a505bba44b5a5) |
| — / 5 | 10:29:47.226 | Sell 1.563767 JUP → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 6 | 10:29:49.276 | Sell 1.563837 JUP → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 7 | 10:29:46.723 | Sell 0.391632 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 12 | 10:30:01.202 | Sell 1.563667 JUP → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 19 | 10:30:02.399 | Sell 0.391162 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 22 | 10:30:05.081 | Sell 0.334926 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |

</details>

## 3. Sell bursts

**The throughput ceiling is inconclusive.** Quote failures prevented most orders from entering auctions, including every order in the 8-order wave.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 18. **Median / longest fill:** 23.6 / 44.4 seconds. All 18 placed main orders filled; each settled separately.

Setup: Self paid SOL → USDC sells in waves of 4, 8, 16, 24 and 32, 150 seconds apart. Inputs were 0.0025–0.004 SOL; 84 scheduled trades in total.

**Ownership unknown:** the API returned `404 Not Found: NoLiquidity: no route found` before placement. Backend records confirm the Paradox driver returned `QuotingFailed: no valid quote found`; they do not expose the underlying solver or Jupiter response. This error does not prove that a token has no DEX liquidity.

| Wave size | Filled / scheduled | Last observed fill after wave started |
| --- | --- | --- |
| 4 | 3/4 | 25.3 seconds |
| 8 | 0/8 | No fills |
| 16 | 5/16 | 34.9 seconds |
| 24 | 5/24 | 49.3 seconds |
| 32 | 5/32 | 35.8 seconds |

The 8-order wave failed entirely, while later larger waves filled some orders. That pattern points to quote reliability, not a demonstrated settlement capacity limit. Pauses and pre-placement failures prevent a sustained orders-per-minute claim.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 10:42:01.024 | Sell 0.0025 SOL → USDC | None; filled in 19.8 seconds. | [Debug](https://debug.barn.cow.fi/order/0x3de93a3216ea57e2315b6153c64368f8d03265d4212fe6cef535f5c45049d656) |
| 33 / 30 | 10:42:01.095 | Sell 0.003 SOL → USDC | None; filled in 12.7 seconds. | [Debug](https://debug.barn.cow.fi/order/0x2b48837881e718d1e9872888c7cc30a503cae16d2e56bb2943ffc8a619972963) |
| 35 / 32 | 10:42:01.557 | Sell 0.004 SOL → USDC | None; filled in 22.4 seconds. | [Debug](https://debug.barn.cow.fi/order/0xc31bd4281c60c5d4ffb44f7f453aa19d186693fba74881a70e2fb1d627bd0090) |
| 34 / 31 | 10:42:05.365 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 36 / 29 | 10:44:30.056 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 37 / 30 | 10:44:29.912 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 38 / 31 | 10:44:29.695 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 39 / 32 | 10:44:30.292 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 40 / 33 | 10:44:29.019 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 41 / 34 | 10:44:29.142 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 42 / 35 | 10:44:29.203 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 43 / 36 | 10:44:29.477 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 44 / 29 | 10:47:01.495 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 45 / 30 | 10:47:01.810 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 46 / 31 | 10:47:01.430 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 47 / 32 | 10:47:01.659 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 48 / 33 | 10:47:00.286 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 49 / 34 | 10:47:00.711 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 50 / 35 | 10:47:01.271 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 51 / 36 | 10:47:01.296 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 57 / 42 | 10:46:59.790 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 58 / 43 | 10:46:59.980 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 59 / 44 | 10:47:00.098 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 60 / 29 | 10:49:31.789 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 61 / 30 | 10:49:32.276 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 62 / 31 | 10:49:31.627 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 63 / 32 | 10:49:32.093 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 64 / 33 | 10:49:31.116 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 65 / 34 | 10:49:31.276 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 66 / 35 | 10:49:31.509 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 67 / 36 | 10:49:33.423 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 68 / 37 | 10:49:33.102 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 69 / 38 | 10:49:32.596 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 70 / 39 | 10:49:32.905 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 71 / 40 | 10:49:32.398 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 72 / 41 | 10:49:33.280 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 73 / 42 | 10:49:30.410 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 74 / 43 | 10:49:30.643 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 75 / 44 | 10:49:30.794 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 81 / 50 | 10:49:29.795 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 82 / 51 | 10:49:30.151 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 83 / 52 | 10:49:30.281 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 84 / 29 | 10:52:03.192 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 85 / 30 | 10:52:03.605 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 86 / 31 | 10:52:02.949 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 87 / 32 | 10:52:03.296 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 88 / 33 | 10:52:02.368 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 89 / 34 | 10:52:02.591 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 90 / 35 | 10:52:02.933 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 91 / 36 | 10:52:04.817 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 92 / 37 | 10:52:04.327 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 93 / 38 | 10:52:04.014 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 94 / 39 | 10:52:04.108 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 95 / 40 | 10:52:03.723 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 96 / 41 | 10:52:04.612 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 97 / 42 | 10:52:01.792 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 98 / 43 | 10:52:02.300 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 99 / 44 | 10:52:02.298 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 102 / 47 | 10:52:05.141 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 105 / 50 | 10:52:01.266 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 106 / 51 | 10:52:01.365 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 107 / 52 | 10:52:01.594 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 109 / 54 | 10:51:59.686 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 110 / 55 | 10:52:00.106 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 111 / 56 | 10:52:00.218 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 112 / 57 | 10:52:00.340 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 113 / 58 | 10:52:00.582 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 114 / 59 | 10:52:00.698 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 115 / 60 | 10:52:01.012 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 78 / 47 | 10:49:42.631 | Sell 0.0035 SOL → USDC | Filled later. `PriorityFeeTooHigh`: `transaction priority fee exceeds the configured budget`; estimate 1,165,986 lamports > 1,000,000 cap. Rejected before submission. | [Debug](https://debug.barn.cow.fi/order/0xb5451f5f0b57342860de82c3176e68f051c86c93c01bf0f7502117b0ffab6353) |
| 77 / 46 | 10:49:47.563 | Sell 0.003 SOL → USDC | Filled later. `PriorityFeeTooHigh`: `transaction priority fee exceeds the configured budget`; estimate 1,137,548 lamports > 1,000,000 cap. Rejected before submission. | [Debug](https://debug.barn.cow.fi/order/0x2abd46c2eebcf47fe7de5d65fa81a05c0581d52ee9e612c25f3919a5c4fbac85) |
| 76 / 45 | 10:50:07.379 | Sell 0.0025 SOL → USDC | Filled later. `PriorityFeeTooHigh`: `transaction priority fee exceeds the configured budget`; estimate 1,059,988 lamports > 1,000,000 cap. Rejected before submission. | [Debug](https://debug.barn.cow.fi/order/0x87508fc47ea4def258c0cf55ec24b9c3f1abdb51b138fdb31438d024809c74eb) |

**Deferred cleanup**

14 wallets had recorded token leftovers when cleanup was deferred. During this cleanup window, 107 candidate solutions failed simulation with SPL Token `InvalidAccountData` at instruction 6. Logs omit their order IDs, so these failures cannot be assigned to individual cleanup orders; **ownership unknown**. Check native SOL output and token account setup with the driver team.

For unplaced cleanup balances without a separate error event, the timestamp is the first cleanup summary recording the failure. Balances are the saved end-of-test records, not a fresh wallet scan; they may include holdings from earlier sessions.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 29 | 10:56:14.492 | Sell 0.278663 USDC → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x3a6727e73077124a3b31de5ed74f1a9f85cd51eb63ca0a06d876bcd37f2ce1a0) |
| — / 39 | 10:56:27.135 | Sell 0.390854 USDC → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0xeb3beb51c828e625b1a1b9fffe3a3668dc69a8e8079beb01991cbae2e44a0aab) |
| — / 45 | 10:56:41.394 | Sell 0.557832 USDC → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x95fdc7eac58f06976b62aa4aac08aec72478a661e1bae3cefbd0767ddf82866e) |
| — / 53 | 10:56:58.288 | Sell 0.278806 USDC → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x5a8cb4884eb4573235ea4c4bcf34739b2cba938dc5db2a70c1667ff3eb351a94) |
| — / 30 | 10:52:36.456 | Sell 0.334393 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 32 | 10:52:38.301 | Sell 0.892886 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 37 | 10:52:50.514 | Sell 0.27916 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 38 | 10:52:57.001 | Sell 0.335076 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 40 | 10:52:49.046 | Sell 0.446731 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 41 | 10:53:03.777 | Sell 0.27923 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 46 | 10:53:00.884 | Sell 0.669426 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 47 | 10:53:17.117 | Sell 0.390678 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 48 | 10:53:16.515 | Sell 0.892598 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 49 | 10:53:17.816 | Sell 0.557829 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |

</details>

## 4. Token coverage

**Token coverage is only partly demonstrated.** Fixed input sells reached 6 tokens, but no exact output buy reached placement; every tested LST failed quoting.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 6. **Median / longest fill:** 19.1 / 29.1 seconds. All 6 placed main orders filled; each settled separately.

Setup: 40 fixed input SOL sells into different tokens and 15 exact output buys paying SOL, submitted together. The tested list included memecoins, LSTs, stablecoins and Token-2022 assets. SOL input varied from 0.005 to 0.01.

**Ownership unknown:** the API returned `404 Not Found: NoLiquidity: no route found` before placement. Backend records confirm the Paradox driver returned `QuotingFailed: no valid quote found`; they do not expose the underlying solver or Jupiter response. This error does not prove that a token has no DEX liquidity.

Successful fixed input sells: SOL → **ANSEM, PAID, USDG, NVDAx, MU and BOME**. The first 5 are Token-2022 assets; BOME is a classic SPL memecoin. Successful exact output buys: **none**. SOL → LST coverage was not demonstrated: JitoSOL, mSOL, JupSOL, INF, hyloSOL and PSOL all failed before placement.

Sells filled 6/40 planned rows; all 15 exact buys failed their preliminary quote. Buying a token with a fixed SOL input does not prove exact output buy support or the ability to sell it back.

3 Token-2022 transfer-fee tokens were rejected by autopilot before solver participation: SI, ZCAT and ANTHROPIC. This is a known protocol restriction, not a Paradox failure.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 116 / 61 | 11:00:02.323 | Sell 0.01 SOL → ANSEM | None; filled in 25.6 seconds. | [Debug](https://debug.barn.cow.fi/order/0xa570024c2f5ddfabd2c2e6274014a44c0211fba73a81d04981af571209bba510) |
| 127 / 72 | 11:00:03.220 | Sell 0.01 SOL → MU | None; filled in 12.5 seconds. | [Debug](https://debug.barn.cow.fi/order/0x12e9732f5a7eb054bdfc0bb9a88789bc98444b3bc58e82950729fda1c8a7c92e) |
| 153 / 98 | 11:00:08.951 | Sell 0.005 SOL → BOME | None; filled in 12.6 seconds. | [Debug](https://debug.barn.cow.fi/order/0x2589a7336099e0774d3978c5ea1fa839e4e33033daa6171bb11f1046b26a686f) |
| 119 / 64 | 10:59:58.248 | Sell 0.01 SOL → PUMP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 120 / 65 | 10:59:58.483 | Sell 0.01 SOL → PYUSD | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 121 / 66 | 10:59:58.690 | Sell 0.01 SOL → CASH | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 122 / 67 | 10:59:58.904 | Sell 0.01 SOL → CRCLx | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 123 / 68 | 10:59:59.096 | Sell 0.01 SOL → SPYx | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 124 / 69 | 10:59:59.498 | Sell 0.01 SOL → USDv | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 125 / 70 | 10:59:59.613 | Sell 0.01 SOL → SKHY | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 128 / 73 | 11:00:00.661 | Sell 0.01 SOL → SPCX | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 129 / 74 | 11:00:00.810 | Sell 0.01 SOL → SPCXx | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 130 / 75 | 11:00:01.304 | Sell 0.01 SOL → TSLAx | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 131 / 76 | 11:00:01.492 | Sell 0.005 SOL → SI | Autopilot restriction: `400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee`. Not placed. | No order ID: quote rejected. |
| 132 / 77 | 11:00:01.856 | Sell 0.005 SOL → ZCAT | Autopilot restriction: `400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee`. Not placed. | No order ID: quote rejected. |
| 133 / 78 | 11:00:02.325 | Sell 0.005 SOL → ANTHROPIC | Autopilot restriction: `400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee`. Not placed. | No order ID: quote rejected. |
| 134 / 79 | 11:00:02.503 | Sell 0.005 SOL → Bonk | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 135 / 80 | 11:00:03.201 | Sell 0.005 SOL → $WIF | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 136 / 81 | 11:00:03.241 | Sell 0.005 SOL → POPCAT | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 137 / 82 | 11:00:03.286 | Sell 0.005 SOL → JitoSOL | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 138 / 83 | 11:00:03.689 | Sell 0.005 SOL → mSOL | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 139 / 84 | 11:00:03.692 | Sell 0.005 SOL → JupSOL | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 140 / 85 | 11:00:04.199 | Sell 0.005 SOL → cbBTC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 141 / 86 | 11:00:04.158 | Sell 0.005 SOL → USDe | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 142 / 87 | 11:00:04.508 | Sell 0.005 SOL → EURC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 143 / 88 | 11:00:05.066 | Sell 0.005 SOL → USDY | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 144 / 89 | 11:00:05.322 | Sell 0.005 SOL → JLP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 145 / 90 | 11:00:05.606 | Sell 0.005 SOL → INF | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 146 / 91 | 11:00:05.741 | Sell 0.005 SOL → ETH | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 147 / 92 | 11:00:05.725 | Sell 0.005 SOL → BNB | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 148 / 93 | 11:00:06.102 | Sell 0.005 SOL → XAUt0 | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 149 / 94 | 11:00:06.228 | Sell 0.005 SOL → GLDx | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 150 / 95 | 11:00:06.740 | Sell 0.005 SOL → EUROP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 151 / 96 | 11:00:06.599 | Sell 0.005 SOL → Fartcoin | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 152 / 97 | 11:00:07.213 | Sell 0.005 SOL → MEW | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 154 / 99 | 11:00:07.575 | Sell 0.005 SOL → hyloSOL | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 155 / 100 | 11:00:07.567 | Sell 0.005 SOL → PSOL | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 156 / 61 | 11:00:28.155 | Buy SOL → exactly 3.26 ANSEM | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 157 / 62 | 11:00:31.345 | Buy SOL → exactly 88.1 PAID | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 158 / 63 | 11:00:28.365 | Buy SOL → exactly 0.464 USDG | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 159 / 64 | 10:59:59.285 | Buy SOL → exactly 71.6 PUMP | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 160 / 65 | 10:59:59.895 | Buy SOL → exactly 0.464 PYUSD | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 161 / 66 | 11:00:00.485 | Buy SOL → exactly 0.464 CASH | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 162 / 67 | 11:00:01.003 | Buy SOL → exactly 0.00574 CRCLx | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 163 / 68 | 11:00:01.968 | Buy SOL → exactly 0.000597 SPYx | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 164 / 69 | 11:00:03.198 | Buy SOL → exactly 0.464 USDv | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 165 / 70 | 11:00:03.513 | Buy SOL → exactly 0.0026 SKHY | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 166 / 71 | 11:00:12.822 | Buy SOL → exactly 0.00196 NVDAx | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 167 / 72 | 11:00:16.287 | Buy SOL → exactly 0.000427 MU | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 168 / 73 | 11:00:06.055 | Buy SOL → exactly 0.00276 SPCX | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 169 / 74 | 11:00:06.157 | Buy SOL → exactly 0.00277 SPCXx | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 170 / 75 | 11:00:07.480 | Buy SOL → exactly 0.00123 TSLAx | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |

**Deferred cleanup**

6 wallets had recorded token leftovers when cleanup was deferred. During this cleanup window, 81 candidate solutions failed simulation with SPL Token `InvalidAccountData` at instruction 6. Logs omit their order IDs, so these failures cannot be assigned to individual cleanup orders; **ownership unknown**. Check native SOL output and token account setup with the driver team.

For unplaced cleanup balances without a separate error event, the timestamp is the first cleanup summary recording the failure. Balances are the saved end-of-test records, not a fresh wallet scan; they may include holdings from earlier sessions.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 61 | 11:04:11.618 | Sell 7.914514 ANSEM → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x9c1948db87e04438fbdc83ddf4dfb60fa9213d430eb2ce8ebb53931063f59d59) |
| — / 71 | 11:04:30.695 | Sell 0.00484461 NVDAx → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0xa92fdcd1ce7d3299ea56d4fecc32a6a1f5574ae141347748dc2946930b313070) |
| — / 62 | 11:00:41.316 | Sell 210.803664 PAID → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 63 | 11:00:42.117 | Sell 1.114216 USDG → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 72 | 11:00:50.417 | Sell 0.001098 MU → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 98 | 11:01:13.481 | Sell 590.911382 BOME → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |

</details>
