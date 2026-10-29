# Asao solver test report

28 October 2026 - staging / Barn - Solana mainnet - session `2026-10-28-11-14-composite-asao-run`

**TLDR:** Asao filled 179/180 accepted main orders, including all 84 burst trades and 25 same direction sells in 2 batches. Stablecoins shared inventory successfully, but opposite SOL/USDC orders still used separate DEX routes. One PAID exact buy (https://debug.barn.cow.fi/order/0x20d0873a3ea2da0cc7a5ed30bd44c020c6af4ecefd8bf46fd24f5b1f2e5ef16e) expired before creation, and an EUROP cleanup order (https://debug.barn.cow.fi/order/0x13bbadaf2bda6be561c958b36c5c535e45e23719f83df98b8dc3c21642610585) was cancelled before its replacement filled; ownership remains unknown. Two requests failed before acceptance, leaving 179/182 planned flows complete; CoW should check the JUP fee quote and SPCXx creation hash.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Full coverage inconclusive; 5/5 accepted filled | CoW: compare JUP fee quote with trade value. |
| 2. 25 same direction sells | Achieved; 25/25 in 2 batches | Keep batching control. |
| 3. Sell bursts | Achieved; 84/84 | Test team: test sustained arrivals separately. |
| 4. Opposing orders | Stablecoin netting achieved; SOL/USDC matching not achieved; 15/15 filled | Asao: compare netting choices in 404366. |
| 5. Token coverage | Full coverage inconclusive; 50/51 accepted filled | CoW/Asao: compare PAID exact-buy feasibility with creation lifetime. |

## Changes since 27 October 2026

The matching 5 scenarios completed 179/182 flows again; 1 fewer accepted order is not a performance improvement.

<details>
<summary>Comparison with the previous run</summary>

Baseline: `20261027_asao_solver_test_report_for_cow.md`, session `2026-10-27-09-51-composite-asao-run`, staging, verified from report and metadata. Compare its first 5 scenarios; its 8 fresh-account requests are absent today. Both use 60-second timeout, 300-second validity and no retries. Account preparation changed from true to false, so timing differences are descriptive.

| Matching measure | 27 October | 28 October |
| --- | --- | --- |
| Completed / planned flows | 179/182 | 179/182 |
| Accepted main orders filled | 179/181 | 179/180 |
| Main settlement transactions | 82 | 80 |
| Standard / opposing flows complete | 6/6; 14/15 | 5/6; 15/15 |
| Same direction / burst fills | 25/25; 84/84 | 25/25; 84/84 |
| Token sells / exact buys filled | 36/37; 14/15 | 36/37; 14/15 |
| Largest batch / same direction settlements | 13 / 3 | 14 / 2 |
| Burst median / longest observed fill, seconds | 6.335 / 13.485 | 10.550 / 20.452 |

The token lists changed: XAUt0 sell and SKHY exact buy recovered, while SPCXx sell did not reach acceptance and PAID exact buy expired. Prior Jupiter simulation errors are absent from today's exports and live driver records, not proven fixed. Today's 7 execution-cost candidate rejections affect 3 orders, all later filled. The exact message was not recorded in the baseline report; a new underlying error type is unproven. Newly affected orders are listed in token evidence. Prior outcomes rely on the baseline report; current outcomes were checked against raw orders and journal.

Recovered matching requests:

| Scenario row / trader | UTC timestamp | Trade | Final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 160 / 99 | 2026-10-28T11:32:18.018Z | Sell 0.005 SOL to XAUt0 [self] | Filled; previously cancelled. | [Debug](https://debug.barn.cow.fi/order/0x7daa1e9cb3331b11bfe6e1b9be1d3b3ba2705fbce2a3aad5f5ae9548480c548e) |
| 177 / 79 | 2026-10-28T11:32:21.824Z | Buy SOL to exactly 0.0026 SKHY [sponsored] | Filled; previously expired before creation. | [Debug](https://debug.barn.cow.fi/order/0x8dd2b95d81d195fa4064d3cc2c9270306c09c89003b077b10e5f2770c05abca4) |

</details>

## 1. Standard pairs

**Full coverage inconclusive.** All 5 accepted main orders filled, including the JUP funded exact buy; 1 planned request did not reach acceptance.

<details>
<summary>Order evidence and metrics</summary>

Placed main orders filled: 5/5. **Total transactions: 5. Median / longest observed fill: 6.399 / 6.503 seconds.** Settlement sizes: 5x1.

Main totals count CSV rows, including explicit inventory-setup rows, and exclude automatic acquisitions and cleanup. There are 179/180 accepted main orders filled in 80 distinct main settlements. Both automatic acquisitions filled in 2 additional settlements: main plus acquisition totals are 181/182 filled orders and 82 settlements. Timing is accepted placement to journal-observed fulfillment, including polling; table timestamps are placement for success and first failure for errors, or observation time when the attempt time is unavailable.

All 5 scenario phases finished. Session start: 11:14:46.988 UTC; trading/cleanup observation end: 11:37:12.532 UTC; fetched: 11:43:25 UTC. `run.finished=false` reflects deferred reconciliation, not active scenario trading. Settings: 60-second timeout, 300-second validity, no placement retries, 90-second burst gaps, `prepareTokenAccounts=false`. This flag does not prove receiving accounts were absent or that Asao paid account rent. No fresh-account scenario or transfer-fee probes were selected.

Raw scenario CSV, journal, final orders, transaction signatures and competition/failure exports were checked. Authenticated Grafana datasource discovery verified `vm-auth-staging`; supplemental queries left exports unchanged. Live driver events contain 160 passed settlement simulations and 160 submissions, with no failed settlement simulations/submissions. Competition lists only Asao: 443 proposals, 160 wins/submissions/observations across the entire window including cleanup, not main-order totals. Original solver route responses are not archived in the selected exports; missing proposal reasons remain gaps.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-28T11:14:49.942Z | Sell 0.005 SOL to USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x1c11a720023c5189ffcda9bc0b7cad9fb99c38161ab5491f8db4d5f8062ed3d9) |
| 2 / 2 | 2026-10-28T11:14:49.824Z | Sell 0.005 SOL to USDT [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x17ab24429969cd63fbdfcc2b6721d73d6d332ea933ab1fe465c80e8010bb5c3f) |
| 6 / 3 | 2026-10-28T11:15:18.312Z | Buy JUP to exactly 0.25 USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x245a6c3c0bca6275c7fc241eb1b74da3761311630edec3a7fdf4a15a635e6d89) |

Planned: 6; completed: 5. The 0.5 JUP to USDC quote failed at 11:15:03.190 UTC with the complete saved API body `{"errorType":"SellAmountDoesNotCoverFee","description":"the quoted amount does not cover the execution cost"}`. This is CoW quote/fee validation before main placement. The later exact buy of 0.25 USDC paying JUP filled; kind and amounts differ. Medium confidence: the small sell cannot absorb the quoted execution cost, rather than lack of JUP support. Exact fee/value deficit is unavailable. CoW should compare archived trade value and estimated fee; a normal fee supports increasing the test amount, an abnormal estimate needs a fee check.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 3 / 3 | 2026-10-28T11:15:03.190Z | Sell 0.5 JUP to USDC [self] | `400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost`; no main order created. Acquisition filled. | No order ID: quote failed before placement |

</details>

## 2. 25 same direction sells

**Batching achieved.** All 25 sells filled in 2 settlements with batches of 13 and 12.

<details>
<summary>Order evidence and metrics</summary>

Placed main orders filled: 25/25. **Total transactions: 2. Median / longest observed fill: 6.911 / 13.340 seconds.** Settlement sizes: 1x12, 1x13.

All requests sell 0.005 SOL to JUP. Shared successful signatures prove batching; the [13-order settlement](https://solscan.io/tx/2VVe43h2YVG1D1ok3WHYdmzwqDyfE4LFVeGZh8nmDtrQytsnuA5V7QD8x5tRsHCUiEEyo49a7rgwCk1nm9Br1U9M) includes rows 8, 10, 13, 14, 16, 17, 22-27 and 31. No failed attempts are recorded. One swap, proportional payouts and serialized transaction-size headroom were not established.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 8 / 5 | 2026-10-28T11:16:31.275Z | Sell 0.005 SOL to JUP [self] | Filled in 13-order batch. | [Debug](https://debug.barn.cow.fi/order/0x5af51007baeb47735b02548d27db9402eb326cb6fa88ed72a93208400a58e36e) |
| 31 / 28 | 2026-10-28T11:16:33.114Z | Sell 0.005 SOL to JUP [self] | Filled in 13-order batch. | [Debug](https://debug.barn.cow.fi/order/0x41e0de21a119e3c0f1cbb99cd490f6958355ae1aa54babfa5a1547cf39193d41) |

</details>

## 3. Sell bursts

**Burst completion achieved.** All 84 trades filled; pauses leave sustained throughput untested.

<details>
<summary>Order evidence and metrics</summary>

Placed main orders filled: 84/84. **Total transactions: 12. Median / longest observed fill: 10.550 / 20.452 seconds.** Settlement sizes: 3x1, 1x2, 1x4, 2x8, 1x9, 1x11, 1x12, 1x13, 1x14.

Waves completed 4/4, 8/8, 16/16, 24/24 and 32/32, with scheduled 90-second gaps. Successful signature grouping proves batches up to 14. No failed placement, unfilled order or rejected settlement is recorded. Paused bursts do not establish a sustained throughput ceiling.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 2026-10-28T11:19:06.497Z | Sell 0.0025 SOL to USDC [self] | Filled; first wave. | [Debug](https://debug.barn.cow.fi/order/0x5630d402921a16c40ef21c9959a78535dbf745d1dab521c899c8cd43ff90b86e) |
| 44 / 29 | 2026-10-28T11:22:11.055Z | Sell 0.0025 SOL to USDC [self] | Filled; 16-order wave. | [Debug](https://debug.barn.cow.fi/order/0x47a5a13e27a1327bf58393fee10415d089bc2e7bfbd02cf4c6df1bf907664ebe) |
| 115 / 60 | 2026-10-28T11:25:17.713Z | Sell 0.004 SOL to USDC [self] | Filled; 32-order wave. | [Debug](https://debug.barn.cow.fi/order/0x1ffcd18913dbe945bdd02bc3a9843914fc91cd1f37fc7e82fb77eb3ee019ab70) |

</details>

## 4. Opposing orders / CoW

**Stablecoin netting achieved; direct SOL/USDC matching not achieved.** All 15 requests filled, while opposite SOL/USDC requests used separate DEX routes.

<details>
<summary>Order evidence and metrics</summary>

Placed main orders filled: 15/15. **Total transactions: 11. Median / longest observed fill: 10.004 / 22.366 seconds.** Settlement sizes: 9x1, 1x2, 1x4.

All 6 explicit inventory-setup and 9 opposing/control requests filled. Auction 404366/19 contains the 4 stablecoin orders in [this settlement](https://solscan.io/tx/58sooHSs9Gq7vrJFP6otaxaDKinqDzYdAqZr5d3sseVZTai4zVM29g9XPyH9rCCbtk4Rf93UWHgNHsBN3Gk9YNTz). RPC parsed transfers verify 6 USDC and 4 USDT collected: 2.004099 USDC enters Jupiter, 3.995901 USDC is retained, and 4 USDT moves directly from shared inventory; the residual route supplies another 2.006232 USDT. This proves inventory netting, with a DEX swap for imbalance. The full batch is not swap-free.

SOL to USDC sells share auction 404366/17 and [one settlement](https://solscan.io/tx/3HeUrUhp3w8PtAaoWbezKLucXB3U74Hky74k25je98eswreH6VTV7Bz8V6r78AJdX1fSH99wrgFBh6sjovm8etuS). The opposite exact buy is solution 404366/11; the opposite sell settles in 404367/7. Both use separate Jupiter swaps. RPC verified all 5 settlement signatures for the 9 non-setup requests. Asao should compare netting feasibility and scores in 404366; differing signed limits or costs could justify separate routes, while an ignored feasible better netted candidate would support a decision issue. No numeric price-guard or transaction-size boundary was tested.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 122 / 61 | 2026-10-28T11:30:59.000Z | Sell 0.02 SOL to USDC [sponsored] | Filled; DEX batch. | [Debug](https://debug.barn.cow.fi/order/0x321d4ea95021ecd8a7e7bdd8348380e92faa7fc7c1e17bbb3760f3833569bff4) |
| 123 / 62 | 2026-10-28T11:31:00.302Z | Buy USDC to exactly 0.02 SOL [sponsored] | Filled through separate DEX route. | [Debug](https://debug.barn.cow.fi/order/0xc6edea92e73214d496105a980d904440bbebfd906237ed007957e17104bd0e51) |
| 125 / 64 | 2026-10-28T11:31:00.065Z | Sell 1.2 USDC to SOL [sponsored] | Filled through separate DEX route. | [Debug](https://debug.barn.cow.fi/order/0xeff63b537e1011bea7ed03d3213837de68fefc5665a967fd52d2b08a89975e77) |
| 126 / 65 | 2026-10-28T11:30:59.682Z | Sell 3 USDC to USDT [sponsored] | Filled in shared inventory batch. | [Debug](https://debug.barn.cow.fi/order/0x8a22840d2f9278b479b7b46772dea098c93d6e7282c98858f16b75847b200768) |
| 127 / 66 | 2026-10-28T11:30:59.359Z | Sell 3 USDT to USDC [sponsored] | Filled in shared inventory batch. | [Debug](https://debug.barn.cow.fi/order/0x3a15f28e187c7ea2d714527375b37a034642c90b905e7090d5edb77bf5ce091c) |

Cleanup trader 67 left 1000 units each of truncated mints `39sFzk...` and `AW1vmJ...` after 4 quote failures, 2 per asset. **Ownership unknown.** Saved observations are 11:31:43.590 and 11:36:29.566 UTC; both attempted residual-token sells to SOL returned truncated `Not Found {"errorType":"NoLiquidity","description":"no route`. No order IDs exist because quoting failed. Full mints, symbols, exact request times and provider responses are unavailable; these assets are outside selected scenario rows. No usable route does not establish permanent illiquidity. Test team should identify the residual assets before assigning repair ownership.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 67 | 2026-10-28T11:31:43.590Z; 11:36:29.566Z (observations) | Cleanup sell 1000 units each of `39sFzk...` and `AW1vmJ...` to SOL | 4 truncated `NoLiquidity` quote failures; balances remain. **Ownership unknown**. | No order ID: quote failed before placement |

</details>

## 5. Token coverage

**Full coverage inconclusive.** Equal sell and exact-buy totals hide changed coverage, and PAID creation expiry still needs a cause.

<details>
<summary>Order evidence and metrics</summary>

Placed main orders filled: 50/51. **Total transactions: 50. Median / longest observed fill: 6.785 / 23.023 seconds.** Settlement sizes: 50x1.

Planned: 52; fixed-input sells 36/37 complete, exact buys 14/15 complete. These sells spend SOL to obtain each listed token; they do not establish sell-back support. Symbols below follow the selected scenario and repo token registry; links identify exact mints.

**Fixed-input sells filled (36):** [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1), [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb), [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB), [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263), [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm), [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr), [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn), [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So), [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v), [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij), [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT), [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr), [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6), [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4), [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm), [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs), [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa), [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P), [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re), [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA), [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump), [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5), [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82), [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT), [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL).

**Exact-output buys paying SOL filled (14):** [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1), [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb), [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8), [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB).

**Candidate rejections; ownership unknown.** Seven candidates were rejected with `trade <UID> undercuts its limit price after the cut`: CASH in 404380/1, 404381/1, 404382/0; NVDAx in 404380/2 and 404381/2; USDG in 404380/6 and 404381/6. This is the driver deducting execution cost before settlement, not an on-chain failure. All 3 orders filled later: CASH in 404383/0, NVDAx in 404382/2, USDG in 404382/4. CASH's successful candidate deducted 159,318 raw CASH units / 1,549,290 lamports. Rejection mechanism confidence is high; fee estimation, route output and quote movement cannot be ranked without rejected gross outputs and costs. CoW should compare each net output with its signed minimum; inspect Asao construction if the original gross route was insufficient. Preserve user limits. Repair ownership is unproven.

**PAID exact buy; ownership unknown.** Exactly 88.1 PAID was requested with a maximum of 0.002916701 SOL. Acceptance was 11:32:25.291 UTC, addition to auction 404383 was 11:32:28.525688816 UTC, and autopilot recorded `sponsored creation expired, dropping the order` at 11:32:58.517807638 UTC; auction 404389 removed it. Journal expiry followed after 33.503 seconds, before signed `validTo` 11:37:54 UTC. Creation expired before the user's trading deadline. The 7 driver `solution simulation passed` records between acceptance and expiry concern other orders; none names this UID, and no failed submission signature exists. A 0.01 SOL to PAID sponsored sell filled, so general token rejection is not established. Confidence is high in incomplete creation, low in the reason no candidate was accepted. Missing solver responses leave route economics, selection and creation lifetime as alternatives. First compare the original exact-buy route plus total costs with 2,916,701 lamports: feasible output points toward selection/creation handling, infeasible output toward quoting/route economics. Likely components are CoW creation lifecycle and Asao exact-buy decisions; repair owner unproven.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 133 / 72 | 2026-10-28T11:32:14.647371454Z | Sell 0.01 SOL to USDG [sponsored] | 2 candidates rejected with `trade 0x51e92a2c6ec2b5785430c06364d60ef3891a6bd149120636f8c548cb2501b47c undercuts its limit price after the cut`; later filled. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x51e92a2c6ec2b5785430c06364d60ef3891a6bd149120636f8c548cb2501b47c) |
| 136 / 75 | 2026-10-28T11:32:14.577357266Z | Sell 0.01 SOL to CASH [sponsored] | 3 candidates rejected with `trade 0x05857c6dfb2cbcf6c8db47d010492c4d19b164975f3ab6b39f236401b4c1a226 undercuts its limit price after the cut`; later filled. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x05857c6dfb2cbcf6c8db47d010492c4d19b164975f3ab6b39f236401b4c1a226) |
| 141 / 80 | 2026-10-28T11:32:14.591296046Z | Sell 0.01 SOL to NVDAx [sponsored] | 2 candidates rejected with `trade 0x17e6df42de731fc6957b7fae3edb5d247876a02f356f830c0ac7e3755287f63b undercuts its limit price after the cut`; later filled. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x17e6df42de731fc6957b7fae3edb5d247876a02f356f830c0ac7e3755287f63b) |
| 160 / 99 | 2026-10-28T11:32:18.018Z | Sell 0.005 SOL to XAUt0 [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x7daa1e9cb3331b11bfe6e1b9be1d3b3ba2705fbce2a3aad5f5ae9548480c548e) |
| 169 / 71 | 2026-10-28T11:32:58.517807638Z | Buy SOL to exactly 88.1 PAID [sponsored] | `sponsored creation expired, dropping the order`; final expired, no fill. **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x20d0873a3ea2da0cc7a5ed30bd44c020c6af4ecefd8bf46fd24f5b1f2e5ef16e) |
| 177 / 79 | 2026-10-28T11:32:21.824Z | Buy SOL to exactly 0.0026 SKHY [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x8dd2b95d81d195fa4064d3cc2c9270306c09c89003b077b10e5f2770c05abca4) |
| 181 / 83 | 2026-10-28T11:32:18.418Z | Buy SOL to exactly 0.00277 SPCXx [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x4ac0b921e7f58d057d5272578988329d3808307802ef4fca924a8b465860f98b) |

**EUROP cleanup; ownership unknown.** The original 0.460481 EUROP sell required 0.004954618 SOL, timed out after 67.164 seconds and ended cancelled. No driver settling record names it. The identical-amount replacement lowered its minimum to 0.003473728 SOL and filled for 0.004973324 SOL, 18,706 lamports above the original minimum. That does not prove the original limit was too tight. Cancellation/recovery confidence is high; cause confidence is low. Earlier route availability, fees and solver selection remain alternatives. Inspect the original candidate/no-bid decision at 11:34:59-11:36:03 UTC and compare net output with 4,954,618 lamports; insufficient output supports economics, sufficient output needs a selection check. Inbound SOL to EUROP success tests the opposite direction. No original provider response or failed transaction is available. EUROP residuals cleared after the replacement; unrelated cleanup gaps are above.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 101 | 2026-10-28T11:36:06.303Z | Cleanup sell 0.460481 EUROP to SOL [self] | Timeout; final cancelled. [Cancellation](https://solscan.io/tx/4hYAdppdShXfJTc8cB4CCdiqqpKdEBEoXjKMK5UT7zLKBbrYfCuNdGmifdNEuDCH7VUBUN9r7E6oHgi4HSRf66Dx). **Ownership unknown**. | [Debug](https://debug.barn.cow.fi/order/0x13bbadaf2bda6be561c958b36c5c535e45e23719f83df98b8dc3c21642610585) |
| - / 101 | 2026-10-28T11:36:32.141Z | Replacement cleanup sell 0.460481 EUROP to SOL [self] | Filled for 0.004973324 SOL after 35.139 seconds; residual cleared. | [Debug](https://debug.barn.cow.fi/order/0x276274afda483f8558a7f1770b33bd73db2edf7366131f15ee177504839569df) |

**SPCXx sponsored creation POST.** The 0.01 SOL sell was prepared at 11:32:11.021 UTC and rejected 83 ms later with `BlockhashExpired`; signed minimum 575,682 raw SPCXx units. Recovery checks at 11:33:00.321 and 11:36:21.107 UTC found no API order. The exact buy of 0.00277 SPCXx later filled. This is the client/API/RPC creation path before Asao execution. Medium confidence: stale blockhash sourcing or RPC disagreement fits better than delay after preparation. Hash fetch time, last valid height and backend validity view are unavailable; underlying repair owner is unproven. CoW should compare the saved signed hash with both RPC views at POST; matching expiry supports refresh/re-sign, disagreement supports checking RPC consistency. Do not replay.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 144 / 83 | 2026-10-28T11:32:11.104Z | Sell 0.01 SOL to SPCXx [sponsored] | `400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one`; POST rejected; prepared UID absent from API. | [Debug](https://debug.barn.cow.fi/order/0x7ee2ec61479d742369b98118df315e03b2d1994c1d9fa7c48fcc4785fada1049) (prepared UID; may not resolve) |

Cleanup totals: 106/107 accepted cleanup orders filled; 1 original EUROP order was cancelled before its replacement filled. EUROP cleanup finished at 11:37:12.514 UTC. The selected run retains trader 67's 2 unrelated residual assets and trader 83's unresolved prepared SPCXx UID. Deferred metadata markers are checkpoints, not proof of active trades.

</details>
