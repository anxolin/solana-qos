# Zurui solver test report

Date: 2026-10-29. Environment: staging. Mode: quoting and solving. Trading window: 2026-10-29T17:41:58.647Z to 2026-10-29T18:15:03.420Z; evidence exports extend to 2026-10-29T18:16:03.420Z.

**TLDR:** Zurui quoting and solving completed 22 of 296 planned trades, including SOL/USDC and SOL/USDT sells and 1 exact SOL buy. Only 24 main orders placed, of which 22 filled and 2 were cancelled; 272 requests never reached main placement. The main gap was 257 route rejections, plus 14 account validation rejections and 1 fee rejection before placement. One candidate swap failed its slippage check but the order later filled, so compare that route with the next successful attempt before changing any limits. SOL 0.0035 to USDC filled after the rejected candidate (https://debug.barn.cow.fi/order/0x260451ba93c48b282a64447ce3b57816698258fe46182a8caea4015cec2f76c4).

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Standard sells achieved; exact buys incomplete; 2/6 planned, 2/2 main placed filled | CoW checks quote and creation gaps |
| 2. Native and wrapped payouts | Native payout achieved; wrapped payout incomplete; 1/12 planned, 1/1 main placed filled | Test team reruns missing account modes |
| 3. Receiving account costs | Self paid fresh account fill achieved; sponsorship untested; 1/16 planned, 1/1 main placed filled | CoW checks sponsored creation |
| 4. Same direction wave of 25 | Batching not achieved, known and accepted; 2/25 planned, 2/4 main placed filled | No batching fix requested |
| 5. Burst sell waves | Full burst clearing not achieved; 12/84 planned, 12/12 main placed filled | Review rejected candidates; test smaller controlled waves |
| 6. Opposite orders | Direct matching inconclusive, no orders placed; 0/15 planned, 0/0 main placed filled | Test team enables both sides before rerun |
| 7. Token coverage | Partial token coverage achieved; 2/52 planned, 2/2 main placed filled | Separate sell support from missing exact buys |
| 8. xStocks | Partial fixed input xStock purchases achieved; 2/86 planned, 2/2 main placed filled | Test team reruns remaining kinds and directions |

## Changes since the previous report

No earlier staging Zurui report was found, so there is no matching report baseline.

<details>
<summary>Comparison with the previous run</summary>

No earlier Zurui staging report exists in the available report set. This is the first baseline for quoting and solving; do not use another solver or environment as a baseline.

</details>

## 1. Standard pairs

Standard sells achieved; exact buys incomplete. 2 of 6 planned trades filled; 2 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-17-41-composite-zurui-run`. Scenario UTC: 2026-10-29T17:41:58.647Z to 2026-10-29T17:42:25.797Z. Total transactions: 2, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 2/2 main placed, versus 6 planned. Acquisitions: 1 placed, 1 filled. Median / longest main fill: 8.006 / 9.622 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

The main JUP sell did not reach placement after acquisition filled. The missing exact buy flows do not establish solver buy support or a solver settlement failure.
Historical quote 87222 at 17:42:00.969243450Z identifies driver `zurui`, solver `FKtU6njTRoGqmg91fwszT64aERYJaj5m8Yotdw5A4q3H`, request `cbeb8c2d55d23efa7a9c4afe1bda882b`: sell 5000000 native SOL units for USDC; quoted output 505422, adjusted output 353590, network fee 9000, account rent estimate 1488440.
Selected successful settlement RPC records confirm CoW settlement program plus Jupiter Route/Swap instructions, rather than establishing quote ownership. https://solscan.io/tx/4fBuSV9vxmYqfw8YC2CTXY1EWn7kMK96nkK5cG7j35tTWvSYZhDHFX7aFM4L4NKbfmJoUbjEqABESb5n4Ypz2stS
Ownership unknown: the exact 0.25 USDC buy failed before placement at 17:42:13.071Z. Original API response at 17:42:13.035449155Z for request `c239372e0a8ea0b1603e8e34b6c37731` says `QuotingFailed: No valid quote found` from the Zurui driver. The underlying engine response is not retained in accessible joined records, so liquidity, request timing and response validation cannot be ranked. A successful 0.005 SOL sell is a different kind and does not prove this exact buy should route. CoW should retain the original engine body for the same read only request trace before assigning repair ownership.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-29T17:42:02.436Z | Sell 0.005 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xff9a6a4ac75ffc7551fd1c62f9c4f0000d80a23658eb6e61aef17e44cfe8441b |
| 2 / 2 | 2026-10-29T17:42:04.507Z | Sell 0.005 SOL to USDT, self | final fulfilled | https://debug.barn.cow.fi/order/0x93b44309ebd79fd98bb2102068269cec057b00860b300aff05f0fa2890cd943e |
| 4 / 1 | 2026-10-29T17:42:13.071Z | Buy SOL to exactly 0.25 USDC, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 6 / 3 | 2026-10-29T17:42:24.177Z | Buy JUP to exactly 0.25 USDC, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |

Acquisition orders are setup legs of planned scenario rows and count only in the separately labelled acquisition and acquisition totals, outside main transaction totals.
- Source row 3: SOL to JUP, raw sell 2016763, raw buy limit 189349, final fulfilled; https://debug.barn.cow.fi/order/0x28747a514ccb04cd9e203b8376dc196a5459527a03ad1ae458830deb4cefc028.

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 2. Native and wrapped payouts

Native payout achieved; wrapped payout incomplete. 1 of 12 planned trades filled; 1 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-17-41-composite-zurui-run`. Scenario UTC: 2026-10-29T17:44:17.329Z to 2026-10-29T17:46:26.067Z. Total transactions: 1, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 1/1 main placed, versus 12 planned. Acquisitions: 1 placed, 1 filled. Median / longest main fill: 82.950 / 82.950 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

All placed orders were self paid. Fresh token account costs are paid by the user or sponsor at placement; these tests impose no solver paid account requirement.

Read only RPC verified the actual native and wrapped receipts, rather than relying only on filled order labels. Native SOL owner lamport increases equal the recorded executed output; wrapped SOL token account increases equal the output and parsed SPL transfers name the destination account. Every inspected settlement returned `err: null`.

| Order | Receipt measured at settlement | Transaction |
| --- | --- | --- |
| https://debug.barn.cow.fi/order/0x8005850816276d16cdc6156f39066a42b493c6876fd285530406c574efb55ac0 | Native owner balance +2000000 lamports, equal to executed buy amount 2000000 | https://solscan.io/tx/3qSMHb4UakAHVf5gernENzRHC979i7MuwYRcFwkQgLChgJPu8oqHt4M5kJhYYuZq3kb2KMESb32V8NX7SfjmRTGt |

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 9 / 6 | 2026-10-29T17:44:22.276Z | Sell 0.005 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 10 / 7 | 2026-10-29T17:44:22.270Z | Sell 0.005 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 13 / 6 | 2026-10-29T17:44:33.380Z | Sell 0.2 USDC to SOL, self | acquire USDC quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 14 / 7 | 2026-10-29T17:44:33.384Z | Sell 0.2 USDC to wSOL, self | acquire USDC quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 15 / 4 | 2026-10-29T17:44:33.387Z | Buy USDC to exactly 0.002 SOL, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 17 / 6 | 2026-10-29T17:45:01.077Z | Buy USDC to exactly 0.002 SOL, self | final fulfilled | https://debug.barn.cow.fi/order/0x8005850816276d16cdc6156f39066a42b493c6876fd285530406c574efb55ac0 |
| 18 / 7 | 2026-10-29T17:44:37.430Z | Buy USDC to exactly 0.002 wSOL, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |

Acquisition orders are setup legs of planned scenario rows and count only in the separately labelled acquisition and acquisition totals, outside main transaction totals.
- Source row 17: SOL to USDC, raw sell 5356662, raw buy limit 387510, final fulfilled; https://debug.barn.cow.fi/order/0xbdd1c2b92c598a7b2d8be285c7aa3a3c31bebf6e7d972f782c6c7139edc62e37.

Ownership unknown: cleanup left recorded token balances for 1 wallets associated with this scenario. These are excluded from trade results; this does not turn their already filled scenario trades into failed trades.

| Scenario row / trader | UTC timestamp | Cleanup evidence | Final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 6 | 2026-10-29T18:13:20.211Z | 0.33712 EPjFWd... | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 3. Receiving account costs

Self paid fresh account fill achieved; sponsorship untested. 1 of 16 planned trades filled; 1 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-17-41-composite-zurui-run`. Scenario UTC: 2026-10-29T17:47:03.116Z to 2026-10-29T17:47:23.948Z. Total transactions: 1, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 1/1 main placed, versus 16 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: 6.562 / 6.562 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

The journal checked 8 receiving accounts before this scenario. A self paid fresh account filled, but sponsored placement failed before solving, so broad fresh account and sponsorship support remain unverified.
The observed self paid fill is useful evidence for this receiving account flow, not full support across native payout, sponsored mode and all tokens. The team had not verified sponsorship, v1 or fresh account support; transaction format version alone does not prove the intended v1 feature. Zero SOL and concurrent orders from one wallet are not covered: the runner funds wallets and serializes their trades.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 19 / 8 | 2026-10-29T17:47:08.774Z | Sell 0.0025 SOL to USDC, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 20 / 9 | 2026-10-29T17:47:08.800Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 21 / 10 | 2026-10-29T17:47:05.293Z | Buy SOL to exactly 0.25 USDC, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 22 / 11 | 2026-10-29T17:47:07.733Z | Buy SOL to exactly 0.25 USDC, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 23 / 12 | 2026-10-29T17:47:08.778Z | Sell 0.0025 SOL to USDG, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 24 / 13 | 2026-10-29T17:47:08.782Z | Sell 0.0025 SOL to USDG, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 25 / 14 | 2026-10-29T17:47:06.829Z | Buy SOL to exactly 0.25 USDG, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 26 / 15 | 2026-10-29T17:47:07.735Z | Buy SOL to exactly 0.25 USDG, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 27 / 8 | 2026-10-29T17:47:12.797Z | Sell 0.0025 SOL to USDC, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 28 / 9 | 2026-10-29T17:47:13.823Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 29 / 10 | 2026-10-29T17:47:05.703Z | Buy SOL to exactly 0.25 USDC, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 30 / 11 | 2026-10-29T17:47:17.382Z | Buy SOL to exactly 0.25 USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x821d1e573aa8dec9fb4e379c31e54147edb846f0a6911c38bd419c526a618c6e |
| 31 / 12 | 2026-10-29T17:47:12.794Z | Sell 0.0025 SOL to USDG, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 32 / 13 | 2026-10-29T17:47:13.793Z | Sell 0.0025 SOL to USDG, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 33 / 14 | 2026-10-29T17:47:09.739Z | Buy SOL to exactly 0.25 USDG, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 34 / 15 | 2026-10-29T17:47:11.847Z | Buy SOL to exactly 0.25 USDG, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |

Ownership unknown: cleanup left recorded token balances for 3 wallets associated with this scenario. These are excluded from trade results; this does not turn their already filled scenario trades into failed trades.

| Scenario row / trader | UTC timestamp | Cleanup evidence | Final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 9 | 2026-10-29T18:13:31.033Z | 1.815503 JUPyiw... | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 13 | 2026-10-29T18:13:29.317Z | 1.815503 JUPyiw... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 14 | 2026-10-29T18:13:30.481Z | 1.814851 JUPyiw... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 4. Same direction wave of 25

Batching not achieved, known and accepted. 2 of 25 planned trades filled; 4 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-17-41-composite-zurui-run`. Scenario UTC: 2026-10-29T17:48:04.941Z to 2026-10-29T17:51:23.306Z. Total transactions: 2, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 2/4 main placed, versus 25 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: 69.971 / 130.411 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

Each successful scenario order has its own settlement signature, so no batch was achieved. One order at a time is known and accepted; the 25 request wave does not establish sustained capacity.
Batch sizes for successful main settlements: {1: 2}. Team confirmed one order built at a time, 1 Jupiter request per second, up to 8 auctions. These are known and accepted constraints, not a measured sustained throughput result.
Ownership unknown: unfilled main orders were cancelled after the configured 180 second wait, not expired. The full window competition counter reports 13 `SolverFailed` auctions, including acquisitions and cleanup; this cannot be counted as failed orders or attributed to every cancellation. At auction 425795 at 17:42:23.063678033Z the wrapper was `Status { status: 400, body: "{\"kind\":\"SolverFailed\",\"description\":\"Solver engine returned an invalid response\"}" }`. Original response bodies were not present in the driver request records checked. Leading explanation, low confidence: the repeated engine to driver response failures reduced accepted candidates; it is not yet clear whether the engine, protocol parsing or a timeout caused them. The strongest alternative is selection of otherwise valid solutions or uncompetitive prices; the successful waves show a general inability to settle is false. CoW should capture original engine status/body and parse error for one cancelled order auction before asking Zurui for a repair.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 35 / 16 | 2026-10-29T17:51:16.984Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xd42b7322c15c4091315caa0d5c118963ddae1cd83ccb57a91446110c3ae4e3d5 |
| 36 / 17 | 2026-10-29T17:48:10.081Z | Sell 0.005 SOL to JUP, self | final fulfilled | https://debug.barn.cow.fi/order/0xc5c7f2855af3c43dd391882013f21fedf720108828fc7142c3c96973e85117cf |
| 37 / 18 | 2026-10-29T17:48:09.705Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 38 / 19 | 2026-10-29T17:48:09.721Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 39 / 20 | 2026-10-29T17:48:10.839Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 40 / 21 | 2026-10-29T17:51:23.301Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x05949ae32c66e73819823248c56b087c7bd039b43d87af69c75c033df758101c |
| 41 / 22 | 2026-10-29T17:48:10.834Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 42 / 23 | 2026-10-29T17:48:10.841Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 43 / 24 | 2026-10-29T17:48:07.419Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 44 / 25 | 2026-10-29T17:48:10.830Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 45 / 26 | 2026-10-29T17:48:07.505Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 46 / 27 | 2026-10-29T17:48:07.758Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 47 / 28 | 2026-10-29T17:48:07.794Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 48 / 29 | 2026-10-29T17:48:07.975Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 49 / 30 | 2026-10-29T17:48:08.402Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 50 / 31 | 2026-10-29T17:48:08.477Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 51 / 32 | 2026-10-29T17:48:08.563Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 52 / 33 | 2026-10-29T17:48:14.581Z | Sell 0.005 SOL to JUP, self | final fulfilled | https://debug.barn.cow.fi/order/0xd7172983a5fcead315ba8213cda0f2d7f1812f804734d1888c46973c1d3e6ee7 |
| 53 / 34 | 2026-10-29T17:48:09.067Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 54 / 35 | 2026-10-29T17:48:09.158Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 55 / 36 | 2026-10-29T17:48:09.405Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 56 / 37 | 2026-10-29T17:48:09.567Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 57 / 38 | 2026-10-29T17:48:13.713Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 58 / 39 | 2026-10-29T17:48:13.710Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 59 / 40 | 2026-10-29T17:48:10.173Z | Sell 0.005 SOL to JUP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |

Ownership unknown: cleanup left recorded token balances for 6 wallets associated with this scenario. These are excluded from trade results; this does not turn their already filled scenario trades into failed trades.

| Scenario row / trader | UTC timestamp | Cleanup evidence | Final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 19 | 2026-10-29T18:13:56.949Z | 1.814851 JUPyiw... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 22 | 2026-10-29T18:13:59.423Z | 1.814851 JUPyiw... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 17 | 2026-10-29T18:13:57.346Z | 3.648588 JUPyiw... | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 21 | 2026-10-29T18:13:58.658Z | 3.630004 JUPyiw... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 18 | 2026-10-29T18:13:55.648Z | 1.815151 JUPyiw... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 20 | 2026-10-29T18:14:01.938Z | 1.814851 JUPyiw... | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 5. Burst sell waves

Full burst clearing not achieved. 12 of 84 planned trades filled; 12 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-17-41-composite-zurui-run`. Scenario UTC: 2026-10-29T17:52:32.319Z to 2026-10-29T17:59:03.851Z. Total transactions: 12, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 12/12 main placed, versus 84 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: 12.546 / 28.375 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

Waves request 4, 8, 16, 24 and 32 orders, with 90 second planned spacing. Per wallet serialization can delay actual starts. Cancellation follows the simulator fill timeout and is not proof of order expiry or a late solver response.
Wave at scenario +0s: 4 planned, 2 main placed, 2 filled; last observed fill 12.886s after its placement (not whole wave clearing).
Wave at scenario +90s: 8 planned, 2 main placed, 2 filled; last observed fill 10.113s after its placement (not whole wave clearing).
Wave at scenario +180s: 16 planned, 2 main placed, 2 filled; last observed fill 12.450s after its placement (not whole wave clearing).
Wave at scenario +270s: 24 planned, 3 main placed, 3 filled; last observed fill 28.375s after its placement (not whole wave clearing).
Wave at scenario +360s: 32 planned, 3 main placed, 3 filled; last observed fill 22.079s after its placement (not whole wave clearing).

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 60 / 41 | 2026-10-29T17:52:35.668Z | Sell 0.0025 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x8ffe2d1d8f5854446fe6a02be4c5b490f16e7de2a0ccfbac5b3397145d6634a2 |
| 61 / 42 | 2026-10-29T17:52:37.563Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x97919a9b50c9f14c77032721c8abcad4e189d89445026f3e30cbb6517747127f |
| 62 / 43 | 2026-10-29T17:52:37.184Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 63 / 44 | 2026-10-29T17:52:37.188Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 64 / 41 | 2026-10-29T17:54:08.108Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 65 / 42 | 2026-10-29T17:54:08.116Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 66 / 43 | 2026-10-29T17:54:08.111Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 67 / 44 | 2026-10-29T17:54:08.119Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 68 / 45 | 2026-10-29T17:54:05.412Z | Sell 0.0025 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xc475d93a231d3fc7139256ebfdd7d55c62f763dfd84780517ea60108942f1856 |
| 69 / 46 | 2026-10-29T17:54:08.122Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 70 / 47 | 2026-10-29T17:54:13.189050681Z | Sell 0.0035 SOL to USDC, self | Ownership unknown; rejected candidate(s), not submitted failure; SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }; final fulfilled | https://debug.barn.cow.fi/order/0x260451ba93c48b282a64447ce3b57816698258fe46182a8caea4015cec2f76c4 |
| 71 / 48 | 2026-10-29T17:54:07.049Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 72 / 41 | 2026-10-29T17:55:34.763Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 73 / 42 | 2026-10-29T17:55:35.002Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 74 / 43 | 2026-10-29T17:55:37.446Z | Sell 0.0035 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xed72bc0686548c2ea05b52bd63194c3113e9bc0ca3e1e14870b0b83e0ca13d1e |
| 75 / 44 | 2026-10-29T17:55:35.252Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 76 / 45 | 2026-10-29T17:55:35.688Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 77 / 46 | 2026-10-29T17:55:35.404Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 78 / 47 | 2026-10-29T17:55:35.818Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 79 / 48 | 2026-10-29T17:55:35.451Z | Sell 0.004 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xbbd0b6d12cd823686a2df69311d6c2827ecf98711e7fc5440e93c02d3cbf82a3 |
| 80 / 49 | 2026-10-29T17:55:37.085Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 81 / 50 | 2026-10-29T17:55:37.081Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 82 / 51 | 2026-10-29T17:55:37.088Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 83 / 52 | 2026-10-29T17:55:38.118Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 84 / 53 | 2026-10-29T17:55:38.122Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 85 / 54 | 2026-10-29T17:55:38.125Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 86 / 55 | 2026-10-29T17:55:34.423Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 87 / 56 | 2026-10-29T17:55:34.683Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 88 / 41 | 2026-10-29T17:57:04.846Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 89 / 42 | 2026-10-29T17:57:05.162Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 90 / 43 | 2026-10-29T17:57:11.225Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 91 / 44 | 2026-10-29T17:57:05.359Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 92 / 45 | 2026-10-29T17:57:05.761Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 93 / 46 | 2026-10-29T17:57:05.538Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 94 / 47 | 2026-10-29T17:57:05.957Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 95 / 48 | 2026-10-29T17:57:06.664Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 96 / 49 | 2026-10-29T17:57:06.051Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 97 / 50 | 2026-10-29T17:57:06.900Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 98 / 51 | 2026-10-29T17:57:11.607Z | Sell 0.0035 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x46ea7da1fce7426d1dbbf412cb50ebc581ae747c53eabe85086c1c96b97055f4 |
| 99 / 52 | 2026-10-29T17:57:06.563Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 100 / 53 | 2026-10-29T17:57:07.104Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 101 / 54 | 2026-10-29T17:57:11.222Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 102 / 55 | 2026-10-29T17:57:04.531Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 103 / 56 | 2026-10-29T17:57:04.657Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 104 / 57 | 2026-10-29T17:57:06.064Z | Sell 0.0025 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xed215c4a8a67a5692605b1e0d4cddc80421ed8b4b0bafbfd96da86bfbae89bd1 |
| 105 / 58 | 2026-10-29T17:57:07.660Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x3bbbd666dad3cb575765ef8320bddca8ea035a9eeefb9658e7c03ae7e82fa875 |
| 106 / 59 | 2026-10-29T17:57:07.218Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 107 / 60 | 2026-10-29T17:57:07.224Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 108 / 61 | 2026-10-29T17:57:07.222Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 109 / 62 | 2026-10-29T17:57:08.333Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 110 / 63 | 2026-10-29T17:57:08.339Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 111 / 64 | 2026-10-29T17:57:08.336Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 112 / 41 | 2026-10-29T17:58:35.833Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 113 / 42 | 2026-10-29T17:58:41.763Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xf48e6ec8fefc1b9fba7a716c34aeb40c5f93b20f048f45a4ed4e5878c2cd595a |
| 114 / 43 | 2026-10-29T17:58:43.142Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 115 / 44 | 2026-10-29T17:58:36.306Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 116 / 45 | 2026-10-29T17:58:36.607Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 117 / 46 | 2026-10-29T17:58:36.407Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 118 / 47 | 2026-10-29T17:58:36.830Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 119 / 48 | 2026-10-29T17:58:41.111Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 120 / 49 | 2026-10-29T17:58:37.008Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 121 / 50 | 2026-10-29T17:58:37.625Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 122 / 51 | 2026-10-29T17:58:35.209Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 123 / 52 | 2026-10-29T17:58:41.108Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 124 / 53 | 2026-10-29T17:58:37.937Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 125 / 54 | 2026-10-29T17:58:42.076Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 126 / 55 | 2026-10-29T17:58:35.514Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 127 / 56 | 2026-10-29T17:58:35.718Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 128 / 57 | 2026-10-29T17:58:43.145Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 129 / 58 | 2026-10-29T17:58:35.005Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 130 / 59 | 2026-10-29T17:58:34.511Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 131 / 60 | 2026-10-29T17:58:38.034Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 132 / 61 | 2026-10-29T17:58:34.677Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 133 / 62 | 2026-10-29T17:58:42.073Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 134 / 63 | 2026-10-29T17:58:42.078Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 135 / 64 | 2026-10-29T17:58:34.970Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 136 / 65 | 2026-10-29T17:58:36.875Z | Sell 0.0025 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xc0b035a3a283b72679637b81b4cda3976c5eb7e06736b8719a93db3d53f6d53b |
| 137 / 66 | 2026-10-29T17:58:37.435Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x8d2a570b0473b14262f49581da5c99101e8c40ea48db808b677a76d930709a1e |
| 138 / 67 | 2026-10-29T17:58:37.068Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 139 / 68 | 2026-10-29T17:58:37.071Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 140 / 69 | 2026-10-29T17:58:38.030Z | Sell 0.0025 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 141 / 70 | 2026-10-29T17:58:38.074Z | Sell 0.003 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 142 / 71 | 2026-10-29T17:58:38.076Z | Sell 0.0035 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 143 / 72 | 2026-10-29T17:58:38.070Z | Sell 0.004 SOL to USDC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |

Candidate simulation diagnosis (all available distinct attempts):

| UTC / auction / solution | Order / final state | First failing program and exact error |
| --- | --- | --- |
| 2026-10-29T17:54:13.189050681Z / 425937 / 0 | https://debug.barn.cow.fi/order/0x260451ba93c48b282a64447ce3b57816698258fe46182a8caea4015cec2f76c4; fulfilled | Some("JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"); SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }; program logs `Some([])` |

Ownership unknown. These attempts stopped in simulation, with no failed submitted transaction signature to inspect by RPC. The empty saved `logs/settle_failures.txt` missed them; supplemental staging Grafana reads joined each order, auction, solution and first failing program, rather than treating the export as proof of no failures.
Jupiter program `JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4` returned 6001 for a slippage check. We cannot tell its input/output inequality from the empty program logs and absent rejected instruction bytes. No input or output side, encoded allowance or execution shortfall can be established from that error name alone.
Leading explanation for later filled Jupiter candidates, medium confidence: route or account context at simulation differed enough to invalidate this candidate, since later candidates for the same signed order filled. The strongest alternative is arithmetic or account construction in the returned route; a nearby successful candidate in the same auction rules out a universal RPC or settlement outage. Compare the rejected route instruction, token accounts and simulated slot with the next successful route, then check the signed sell and buy limits. Do not widen slippage without this comparison. Exact threshold, realized amounts and shortfall are unavailable.
Auction 425937 rejected solution 0 and successful solution 2 had separate orders, so the passing solution is a control, not the failed order filling in that same attempt. The rejected bundle measured 1143 bytes, below 1232. These are driver reported serialized bundle byte counts, not independent full transaction size validation; a transaction limit target remains inconclusive.

Ownership unknown: cleanup left recorded token balances for 7 wallets associated with this scenario. These are excluded from trade results; this does not turn their already filled scenario trades into failed trades.

| Scenario row / trader | UTC timestamp | Cleanup evidence | Final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 43 | 2026-10-29T18:14:20.105Z | 0.352022 EPjFWd... | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 45 | 2026-10-29T18:14:19.182Z | 0.250945 EPjFWd... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 51 | 2026-10-29T18:14:21.698Z | 0.352208 EPjFWd... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 48 | 2026-10-29T18:14:21.309Z | 0.402424 EPjFWd... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 47 | 2026-10-29T18:14:19.480Z | 0.351651 EPjFWd... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 57 | 2026-10-29T18:14:23.556Z | 0.251326 EPjFWd... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |
| - / 66 | 2026-10-29T18:14:24.740Z | 0.302036 EPjFWd... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route) | residual unsold, ownership unknown | No order ID for unplaced cleanup quote or residual |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 6. Opposite orders

Direct matching inconclusive, no orders placed. No main order was placed, so the feature was not exercised.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-17-41-composite-zurui-run`. Scenario UTC: 2026-10-29T18:02:38.044Z to 2026-10-29T18:05:24.180Z. Total transactions: 0, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 0/0 main placed, versus 15 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: unavailable, no main fills.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

Every opposite order flow stopped before main placement. There was no placed opposite pair to test, so direct matching is inconclusive. No batching or direct matching is known and accepted.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 144 / 74 | 2026-10-29T18:02:43.698Z | Buy SOL to exactly 2.6 USDC, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 146 / 77 | 2026-10-29T18:02:42.682Z | Buy SOL to exactly 3.1 USDC, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 147 / 78 | 2026-10-29T18:02:42.680Z | Buy SOL to exactly 3.1 USDT, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 148 / 79 | 2026-10-29T18:02:42.677Z | Buy SOL to exactly 1.1 USDT, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 149 / 80 | 2026-10-29T18:02:43.702Z | Buy SOL to exactly 3.2 USDC, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 151 / 74 | 2026-10-29T18:05:20.279Z | Buy USDC to exactly 0.02 SOL, sponsored | acquire USDC quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 152 / 75 | 2026-10-29T18:05:12.720Z | Sell 0.03 SOL to USDC, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 153 / 76 | 2026-10-29T18:05:19.278Z | Sell 1.2 USDC to SOL, sponsored | acquire USDC quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 155 / 78 | 2026-10-29T18:05:20.283Z | Sell 3 USDT to USDC, sponsored | acquire USDT error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 156 / 79 | 2026-10-29T18:05:19.281Z | Sell 1 USDT to USDC, sponsored | acquire USDT quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 157 / 80 | 2026-10-29T18:05:19.283Z | Sell 3 USDC to USDT, sponsored | acquire USDC quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 158 / 81 | 2026-10-29T18:05:12.717Z | Sell 0.02 SOL to JUP, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 7. Token coverage

Partial token coverage achieved. 2 of 52 planned trades filled; 2 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-17-41-composite-zurui-run`. Scenario UTC: 2026-10-29T18:05:49.737Z to 2026-10-29T18:06:17.847Z. Total transactions: 2, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 2/2 main placed, versus 52 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: 11.038 / 12.415 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

Fixed input sells and exact output buys are separate checks. This exploratory token set exceeds the team confirmed token list; a route failure does not prove permanent token non support.
Fixed input sell flows filled: SOL to $WIF, SOL to GLDx. Exact output buy flows filled: none.
Team confirmed sell and buy solutions, tested SOL/wSOL, USDC, USDT, JUP, BONK, WIF, JitoSOL and mSOL, and AAPLx/SPYx sell solutions. This test does not expand that claim to every exploratory Token-2022 asset.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 160 / 83 | 2026-10-29T18:05:57.952Z | Sell 0.01 SOL to PAID, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 162 / 85 | 2026-10-29T18:05:57.950Z | Sell 0.01 SOL to PUMP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 163 / 86 | 2026-10-29T18:05:58.933Z | Sell 0.01 SOL to PYUSD, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 164 / 87 | 2026-10-29T18:05:58.937Z | Sell 0.01 SOL to CASH, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 165 / 88 | 2026-10-29T18:05:58.942Z | Sell 0.01 SOL to CRCLx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 166 / 89 | 2026-10-29T18:05:58.940Z | Sell 0.01 SOL to SPYx, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 167 / 90 | 2026-10-29T18:05:55.354Z | Sell 0.01 SOL to USDv, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 168 / 91 | 2026-10-29T18:05:55.706Z | Sell 0.01 SOL to SKHY, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 169 / 92 | 2026-10-29T18:05:55.769Z | Sell 0.01 SOL to NVDAx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 170 / 93 | 2026-10-29T18:05:56.023Z | Sell 0.01 SOL to MU, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 171 / 94 | 2026-10-29T18:05:56.251Z | Sell 0.01 SOL to SPCX, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 172 / 95 | 2026-10-29T18:05:56.348Z | Sell 0.01 SOL to SPCXx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 173 / 96 | 2026-10-29T18:05:56.713Z | Sell 0.01 SOL to TSLAx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 174 / 97 | 2026-10-29T18:05:56.879Z | Sell 0.005 SOL to Bonk, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 175 / 98 | 2026-10-29T18:06:02.427Z | Sell 0.005 SOL to $WIF, self | final fulfilled | https://debug.barn.cow.fi/order/0xde853f4dd98f0d115f6ea1a31824a92cf165d3cfee8ddc473a549c8bdf68bedb |
| 176 / 99 | 2026-10-29T18:05:57.145Z | Sell 0.005 SOL to POPCAT, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 177 / 100 | 2026-10-29T18:05:57.356Z | Sell 0.005 SOL to JitoSOL, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 178 / 101 | 2026-10-29T18:05:57.647Z | Sell 0.005 SOL to mSOL, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 179 / 102 | 2026-10-29T18:06:01.943Z | Sell 0.005 SOL to JupSOL, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 180 / 103 | 2026-10-29T18:06:01.948Z | Sell 0.005 SOL to cbBTC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 181 / 104 | 2026-10-29T18:06:01.947Z | Sell 0.005 SOL to USDe, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 182 / 105 | 2026-10-29T18:05:58.770Z | Sell 0.005 SOL to EURC, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 183 / 106 | 2026-10-29T18:06:02.953Z | Sell 0.005 SOL to USDY, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 184 / 107 | 2026-10-29T18:06:02.950Z | Sell 0.005 SOL to JLP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 185 / 108 | 2026-10-29T18:05:59.787Z | Sell 0.005 SOL to INF, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 186 / 109 | 2026-10-29T18:06:00.002Z | Sell 0.005 SOL to ETH, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 187 / 110 | 2026-10-29T18:06:00.206Z | Sell 0.005 SOL to BNB, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 188 / 111 | 2026-10-29T18:06:00.655Z | Sell 0.005 SOL to XAUt0, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 189 / 112 | 2026-10-29T18:06:06.576Z | Sell 0.005 SOL to GLDx, self | final fulfilled | https://debug.barn.cow.fi/order/0x0a66c34d6bdcbddf42c15f1fa7f554bb2487d2a8e652edce00d570f6872352af |
| 190 / 113 | 2026-10-29T18:06:01.143Z | Sell 0.005 SOL to EUROP, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 191 / 114 | 2026-10-29T18:06:01.455Z | Sell 0.005 SOL to Fartcoin, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 192 / 115 | 2026-10-29T18:06:01.840Z | Sell 0.005 SOL to MEW, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 193 / 116 | 2026-10-29T18:06:05.994Z | Sell 0.005 SOL to BOME, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 194 / 117 | 2026-10-29T18:06:05.992Z | Sell 0.005 SOL to hyloSOL, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 195 / 118 | 2026-10-29T18:06:05.988Z | Sell 0.005 SOL to PSOL, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 196 / 82 | 2026-10-29T18:06:02.772Z | Buy SOL to exactly 3.26 ANSEM, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 197 / 83 | 2026-10-29T18:06:07.015Z | Buy SOL to exactly 88.1 PAID, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 198 / 84 | 2026-10-29T18:06:02.548Z | Buy SOL to exactly 0.464 USDG, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 199 / 85 | 2026-10-29T18:06:07.018Z | Buy SOL to exactly 71.6 PUMP, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 200 / 86 | 2026-10-29T18:06:07.021Z | Buy SOL to exactly 0.464 PYUSD, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 201 / 87 | 2026-10-29T18:06:07.022Z | Buy SOL to exactly 0.464 CASH, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 202 / 88 | 2026-10-29T18:06:04.000Z | Buy SOL to exactly 0.00574 CRCLx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 203 / 89 | 2026-10-29T18:06:03.895Z | Buy SOL to exactly 0.000597 SPYx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 204 / 90 | 2026-10-29T18:05:57.842Z | Buy SOL to exactly 0.464 USDv, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 205 / 91 | 2026-10-29T18:05:58.645Z | Buy SOL to exactly 0.0026 SKHY, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 206 / 92 | 2026-10-29T18:06:02.947Z | Buy SOL to exactly 0.00196 NVDAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 207 / 93 | 2026-10-29T18:05:59.583Z | Buy SOL to exactly 0.000427 MU, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 208 / 94 | 2026-10-29T18:06:00.413Z | Buy SOL to exactly 0.00276 SPCX, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 209 / 95 | 2026-10-29T18:06:00.850Z | Buy SOL to exactly 0.00277 SPCXx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 210 / 96 | 2026-10-29T18:06:01.673Z | Buy SOL to exactly 0.00123 TSLAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |

Ownership unknown: cleanup left recorded token balances for 0 wallets associated with this scenario. These are excluded from trade results; this does not turn their already filled scenario trades into failed trades.

| Scenario row / trader | UTC timestamp | Cleanup evidence | Final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 98 | 2026-10-29T18:06:48.777Z | EKpQGS to SOL | timeout then cancelled; no cause preserved | https://debug.barn.cow.fi/order/0x9e8f9568f1c4c29dc85941055d192e94d16e3e2e7739ab2bc55f2079a798d6ec |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 8. xStocks

Partial fixed input xStock purchases achieved. 2 of 86 planned trades filled; 2 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-17-41-composite-zurui-run`. Scenario UTC: 2026-10-29T18:10:16.479Z to 2026-10-29T18:11:11.861Z. Total transactions: 2, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 2/2 main placed, versus 86 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: 16.992 / 24.518 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

These are SOL funded purchases of xStocks with fixed SOL input. They do not demonstrate selling AAPLx or SPYx back to SOL, and no exact output xStock buy filled.
Fixed input sell flows filled: SOL to BRK.Bx, SOL to KOx. Exact output buy flows filled: none.
Team confirmed sell and buy solutions, tested SOL/wSOL, USDC, USDT, JUP, BONK, WIF, JitoSOL and mSOL, and AAPLx/SPYx sell solutions. This test does not expand that claim to every exploratory Token-2022 asset.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 213 / 121 | 2026-10-29T18:10:22.225Z | Sell 0.0025 SOL to QQQx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 214 / 122 | 2026-10-29T18:10:22.229Z | Sell 0.0025 SOL to MSFTx, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 215 / 123 | 2026-10-29T18:10:23.228Z | Sell 0.0025 SOL to GMEx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 216 / 124 | 2026-10-29T18:10:23.224Z | Sell 0.0025 SOL to MCDx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 217 / 125 | 2026-10-29T18:10:23.233Z | Sell 0.0025 SOL to PLTRx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 218 / 126 | 2026-10-29T18:10:23.230Z | Sell 0.0025 SOL to INTCx, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 219 / 127 | 2026-10-29T18:10:19.694Z | Sell 0.0025 SOL to ORCLx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 220 / 128 | 2026-10-29T18:10:20.002Z | Sell 0.0025 SOL to AVGOx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 221 / 129 | 2026-10-29T18:10:20.138Z | Sell 0.0025 SOL to XOMx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 222 / 130 | 2026-10-29T18:10:20.336Z | Sell 0.0025 SOL to UNHx, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 223 / 131 | 2026-10-29T18:10:20.538Z | Sell 0.0025 SOL to NVOx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 224 / 132 | 2026-10-29T18:10:20.680Z | Sell 0.0025 SOL to UBERx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 225 / 125 | 2026-10-29T18:10:30.867Z | Sell 0.00078292 PLTRx to SOL, sponsored | acquire XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 226 / 119 | 2026-10-29T18:10:21.001Z | Buy SOL to exactly 0.00321248 CRCLx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 227 / 120 | 2026-10-29T18:10:22.733Z | Buy SOL to exactly 0.00165941 SPCXx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 228 / 121 | 2026-10-29T18:10:27.228Z | Buy SOL to exactly 0.0003632 QQQx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 229 / 122 | 2026-10-29T18:10:27.222Z | Buy SOL to exactly 0.0004981 MSFTx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 230 / 123 | 2026-10-29T18:10:24.882Z | Buy SOL to exactly 0.00995113 GMEx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 231 / 124 | 2026-10-29T18:10:24.667Z | Buy SOL to exactly 0.00112024 MCDx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 232 / 125 | 2026-10-29T18:10:31.380Z | Buy SOL to exactly 0.00130486 PLTRx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 233 / 126 | 2026-10-29T18:10:25.122Z | Buy SOL to exactly 0.00270181 INTCx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 234 / 127 | 2026-10-29T18:10:21.130Z | Buy SOL to exactly 0.00191264 ORCLx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 235 / 128 | 2026-10-29T18:10:24.222Z | Buy SOL to exactly 0.00076666 AVGOx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 236 / 129 | 2026-10-29T18:10:21.481Z | Buy SOL to exactly 0.00156561 XOMx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 237 / 130 | 2026-10-29T18:10:21.687Z | Buy SOL to exactly 0.00068993 UNHx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 238 / 131 | 2026-10-29T18:10:21.906Z | Buy SOL to exactly 0.00702429 NVOx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 239 / 132 | 2026-10-29T18:10:22.083Z | Buy SOL to exactly 0.00379726 UBERx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 241 / 120 | 2026-10-29T18:10:28.236Z | Sell 0.0025 SOL to TSLAx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 242 / 121 | 2026-10-29T18:10:32.400Z | Sell 0.0025 SOL to METAx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 243 / 122 | 2026-10-29T18:10:28.190Z | Sell 0.0025 SOL to GOOGLx, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 244 / 123 | 2026-10-29T18:10:25.938Z | Sell 0.0025 SOL to HOODx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 245 / 124 | 2026-10-29T18:10:25.698Z | Sell 0.0025 SOL to AMZNx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 246 / 125 | 2026-10-29T18:10:36.342Z | Sell 0.0025 SOL to VIDAx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 247 / 126 | 2026-10-29T18:10:31.721Z | Sell 0.0025 SOL to KOx, self | final fulfilled | https://debug.barn.cow.fi/order/0x1369019e2d10d50c4162e94a4ccfc397a7e41f6a4b0bdc2c97882316e812a1d7 |
| 248 / 127 | 2026-10-29T18:10:26.231Z | Sell 0.0025 SOL to MUx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 249 / 128 | 2026-10-29T18:10:25.301Z | Sell 0.0025 SOL to WMTx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 250 / 129 | 2026-10-29T18:10:22.894Z | Sell 0.0025 SOL to AMDx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 251 / 130 | 2026-10-29T18:10:23.173Z | Sell 0.0025 SOL to TSMx, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 252 / 131 | 2026-10-29T18:10:27.225Z | Sell 0.0025 SOL to XsXb7KCxcxTi6hqWfYyEe1kpTwtiCeU5TJbEz8N7RWn, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 253 / 132 | 2026-10-29T18:10:28.194Z | Sell 0.0025 SOL to LLYx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 254 / 119 | 2026-10-29T18:10:37.417Z | Sell 0.00020765 SPYx to SOL, sponsored | acquire XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 255 / 119 | 2026-10-29T18:10:41.516Z | Buy SOL to exactly 0.00034609 SPYx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 256 / 120 | 2026-10-29T18:10:29.260Z | Buy SOL to exactly 0.00072217 TSLAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 257 / 121 | 2026-10-29T18:10:36.350Z | Buy SOL to exactly 0.00036664 METAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 258 / 122 | 2026-10-29T18:10:28.865Z | Buy SOL to exactly 0.00076634 GOOGLx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 259 / 123 | 2026-10-29T18:10:26.900Z | Buy SOL to exactly 0.00247816 HOODx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 260 / 124 | 2026-10-29T18:10:26.714Z | Buy SOL to exactly 0.00104887 AMZNx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 261 / 125 | 2026-10-29T18:10:39.460Z | Buy SOL to exactly 0.20269702 VIDAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 262 / 126 | 2026-10-29T18:10:56.665Z | Buy SOL to exactly 0.00293543 KOx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 263 / 127 | 2026-10-29T18:10:27.083Z | Buy SOL to exactly 0.00028462 MUx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 264 / 128 | 2026-10-29T18:10:26.144Z | Buy SOL to exactly 0.00236142 WMTx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 265 / 129 | 2026-10-29T18:10:28.239Z | Buy SOL to exactly 0.00047014 AMDx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 266 / 130 | 2026-10-29T18:10:24.567Z | Buy SOL to exactly 0.00060557 TSMx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 267 / 132 | 2026-10-29T18:10:29.087Z | Buy SOL to exactly 0.00023241 LLYx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 268 / 119 | 2026-10-29T18:10:45.495Z | Sell 0.0025 SOL to NVDAx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 269 / 120 | 2026-10-29T18:10:30.136Z | Sell 0.0025 SOL to MSTRx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 270 / 121 | 2026-10-29T18:10:40.414Z | Sell 0.0025 SOL to GLDx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 271 / 122 | 2026-10-29T18:10:29.697Z | Sell 0.0025 SOL to COINx, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 272 / 123 | 2026-10-29T18:10:31.378Z | Sell 0.0025 SOL to AAPLx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 273 / 124 | 2026-10-29T18:10:31.374Z | Sell 0.0025 SOL to STRCx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 274 / 125 | 2026-10-29T18:10:43.551Z | Sell 0.0025 SOL to DFDVx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 275 / 126 | 2026-10-29T18:11:00.096Z | Sell 0.0025 SOL to BRK.Bx, self | final fulfilled | https://debug.barn.cow.fi/order/0xb3a63c78dc207ab2e234e5c766c95de1cd198529807c82c69f64d07058805037 |
| 276 / 127 | 2026-10-29T18:10:27.877Z | Sell 0.0025 SOL to TQQQx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 277 / 128 | 2026-10-29T18:10:31.368Z | Sell 0.0025 SOL to NFLXx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 278 / 129 | 2026-10-29T18:10:29.494Z | Sell 0.0025 SOL to MRVLx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 279 / 130 | 2026-10-29T18:10:25.542Z | Sell 0.0025 SOL to SNDKx, self | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 280 / 131 | 2026-10-29T18:10:32.396Z | Sell 0.0025 SOL to SKHYx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 281 / 132 | 2026-10-29T18:10:29.878Z | Sell 0.0025 SOL to BMNRx, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 282 / 128 | 2026-10-29T18:10:41.511Z | Sell 0.00022735 NFLXx to SOL, sponsored | acquire XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 283 / 119 | 2026-10-29T18:10:49.546Z | Buy SOL to exactly 0.00120141 NVDAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 284 / 120 | 2026-10-29T18:10:31.066Z | Buy SOL to exactly 0.00174356 MSTRx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 285 / 121 | 2026-10-29T18:10:44.575Z | Buy SOL to exactly 0.00070541 GLDx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 286 / 122 | 2026-10-29T18:10:34.327Z | Buy SOL to exactly 0.00148708 COINx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 287 / 123 | 2026-10-29T18:10:35.363Z | Buy SOL to exactly 0.00078968 AAPLx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 288 / 124 | 2026-10-29T18:10:35.359Z | Buy SOL to exactly 0.00248053 STRCx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 289 / 125 | 2026-10-29T18:10:46.504Z | Buy SOL to exactly 0.06056963 DFDVx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 290 / 126 | 2026-10-29T18:11:10.380Z | Buy SOL to exactly 0.00052262 BRK.Bx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 291 / 127 | 2026-10-29T18:10:32.393Z | Buy SOL to exactly 0.00172031 TQQQx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 292 / 128 | 2026-10-29T18:10:45.492Z | Buy SOL to exactly 0.00037893 NFLXx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 293 / 129 | 2026-10-29T18:10:33.413Z | Buy SOL to exactly 0.00106586 MRVLx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 294 / 130 | 2026-10-29T18:10:30.268Z | Buy SOL to exactly 0.00018281 SNDKx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 295 / 131 | 2026-10-29T18:10:36.348Z | Buy SOL to exactly 0.00170138 SKHYx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |
| 296 / 132 | 2026-10-29T18:10:30.662Z | Buy SOL to exactly 0.01072636 BMNRx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created (Ownership unknown) | No order ID: failed before main placement |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>
