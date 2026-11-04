# Zurui solver test report

Date: 2026-10-29. Environment: staging. Mode: solving only, with Jupiter quotes. Trading window: 2026-10-29T18:22:31.874Z to 2026-10-29T18:56:51.747Z; evidence exports extend to 2026-10-29T18:57:51.747Z.

**TLDR:** With Jupiter quoting and Zurui solving, 55 of 296 planned trades completed, including native and wrapped payouts and 9 xStock purchases. Of 157 main orders placed, 55 filled and 102 were cancelled after the test timeout; 139 requests never reached main placement. Those gaps were 61 route rejections, 77 account validation rejections and 1 fee rejection before placement, outside Zurui solving. We recovered 8 rejected candidate attempts on 7 orders, including 2 SOL/USDC orders that filled later; compare those submitted routes first, while CoW checks the unexplained response failures. SOL 0.0025 to USDC filled after 2 rejected candidates (https://debug.barn.cow.fi/order/0x10179fc82f989c7a0344edb4d00bcb8b3f3b1dcad3e7c83de8abd36efdd3686e).

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Standard sells achieved; exact buys incomplete; 2/6 planned, 2/2 main placed filled | CoW checks quote and creation gaps |
| 2. Native and wrapped payouts | Native and wrapped self paid payouts achieved; 6/12 planned, 6/6 main placed filled | Test team reruns missing account modes |
| 3. Receiving account costs | Self paid fresh account fill achieved; sponsorship untested; 6/16 planned, 6/6 main placed filled | CoW checks sponsored creation |
| 4. Same direction wave of 25 | Batching not achieved, known and accepted; 1/25 planned, 1/25 main placed filled | No batching fix requested |
| 5. Burst sell waves | Full burst clearing not achieved; 29/84 planned, 29/84 main placed filled | Review rejected candidates; test smaller controlled waves |
| 6. Opposite orders | Direct matching inconclusive, no orders placed; 0/15 planned, 0/0 main placed filled | Test team enables both sides before rerun |
| 7. Token coverage | Partial token coverage achieved; 2/52 planned, 2/25 main placed filled | Separate sell support from missing exact buys |
| 8. xStocks | Partial fixed input xStock purchases achieved; 9/86 planned, 9/9 main placed filled | Test team reruns remaining kinds and directions |

## Changes since the previous report

The earlier test completed 22/296 planned trades versus 55/296 here, but quoting changed from Zurui to Jupiter; this does not measure a solver improvement.

<details>
<summary>Comparison with the previous run</summary>

No earlier solving only staging Zurui report was found. The same day 17:41 quoting and solving session is a context comparison with different quote provider, not a matched baseline. Counts below use the same planned main flows and exclude acquisitions and cleanup.

| Measure | 17:41 Zurui quotes | 18:22 Jupiter quotes |
| --- | --- | --- |
| Planned / main placed / filled | 296 / 24 / 22 | 296 / 157 / 55 |
| Main cancelled / main never placed | 2 / 272 | 102 / 139 |
| Main median / longest observed fill | 11.264 / 130.411 seconds | 9.869 / 89.106 seconds |
| Candidate rejected attempts / orders | 1 / 1 | 8 / 7 |
| Failed solve auction counters, all session activity | 13 | 159 |

The existing Jupiter 6001 error affected 1 new order; Jupiter 6037, Jupiter 6024 and CoW program Custom(15) are newly recorded error codes in these two sessions, not proven new defects. Both route affected orders later filled. Both runs still lack placed sponsored orders, direct matching and batching.
Cleanup changed from 18/19 fulfilled with 17 wallets retaining recorded token leftovers to 45/45 fulfilled with no final recorded leftovers. Different available balances and provider make this a cleanup outcome comparison only.

Examples newly filled in this session, compared with missing main placements in the earlier session:
- Source row 14: Sell 0.2 USDC to wSOL, fulfilled, https://debug.barn.cow.fi/order/0x63ab346e005e85e17907f54cf1590401ceae5e4d12b32e0d86f4020c95863c7d.
- Source row 18: Buy USDC to exactly 0.002 wSOL, fulfilled, https://debug.barn.cow.fi/order/0xffc61a14c9284246bc334ed7eb6e57073698f9c548815d6e27645801be18c5e8.
- Source row 20: Sell 0.0025 SOL to USDC, fulfilled, https://debug.barn.cow.fi/order/0x27f01788d7a9eb8735086c07dc1a0f1a21846543932be181b75dbc7105717d0f.

</details>

## 1. Standard pairs

Standard sells achieved; exact buys incomplete. 2 of 6 planned trades filled; 2 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-18-22-composite-zurui-run`. Scenario UTC: 2026-10-29T18:22:31.874Z to 2026-10-29T18:22:59.919Z. Total transactions: 2, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 2/2 main placed, versus 6 planned. Acquisitions: 1 placed, 1 filled. Median / longest main fill: 6.503 / 6.513 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

The main JUP sell did not reach placement after acquisition filled. The missing exact buy flows do not establish solver buy support or a solver settlement failure.
Historical quote 87344 at 18:22:32.445571326Z identifies `jupiter-quote-native`, solver `Grr6SWYUFi1eCagwEifXVD83rUQ4W5rJWYq1Lj7cx1jS`, request `4863af5b55a6ff306c944ba7ceea9b53`: sell 5000000 SOL units, quoted USDC output 504444, adjusted 353161, network fee 9000, account rent estimate 1488440. Zurui remains the solving driver in competition records and settlement payer, so Jupiter routing alone is not how roles were assigned.
Selected successful settlement RPC records confirm CoW settlement program plus Jupiter Route/Swap instructions, rather than establishing quote ownership. https://solscan.io/tx/4JbvNwRuP84ZMR3H3rJ1eUhD69mSA8Kb65LYpR8PGrvH9Tq2g5r1aR9G6Ls5WwLKF1f3MaMj7qySiaMnGWc3ZNZT
Preplacement diagnosis: `NoLiquidity` identifies no usable API quote for that request, not no liquidity for a token. `InvalidTransaction: the bundle must not create the buy token account` rejects the sponsored creation bundle before solver settlement; self paid controls can fill, so CoW should compare that creation template and receiving account handling before assigning solver fault. `SellAmountDoesNotCoverFee` rejects the small quoted trade for execution cost, not a submitted settlement; CoW should check sizing and fee accounting before rerunning. Exact fee shortfall was not preserved. Decoding the original saved sponsored request in standard pairs confirms an 829 byte transaction with an associated token account instruction at index 4 that includes the intended receiving account. It therefore reaches exactly the forbidden creation condition; this supports CoW checking the sponsored creation template, rather than changing the solver route. These mechanisms are certain from stage/message; the underlying response and ownership gaps remain explicit.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-29T18:22:33.983Z | Sell 0.005 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x19002412b2cf0d52ea9466ebd6b6dc93472d916f18756378bcc28158db84d3fa |
| 2 / 2 | 2026-10-29T18:22:34.073Z | Sell 0.005 SOL to USDT, self | final fulfilled | https://debug.barn.cow.fi/order/0x790d7f512633164fd81639453fc5bd961a637225b715106ff5671eb709939461 |
| 3 / 3 | 2026-10-29T18:22:50.908Z | Sell 0.5 JUP to USDC, self | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost; no main order created | No order ID: failed before main placement; successful acquisition https://debug.barn.cow.fi/order/0xff18da8a9906fd3c2a9d6d4848fb44fe82afea87dd44f2db7bf1df9f76f88b82 |
| 4 / 1 | 2026-10-29T18:22:41.118Z | Buy SOL to exactly 0.25 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xed2f54209dc6d917aea0f90dc29966613636a1dacaecb21a911d3f57eff2a937; creation rejected, no Debug record confirmed |
| 5 / 2 | 2026-10-29T18:22:41.324Z | Buy SOL to exactly 0.25 USDT, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x3efcee8470d9fa92eb7bdddb0ee79985f609af70217144c9d444d4cb7429853a; creation rejected, no Debug record confirmed |
| 6 / 3 | 2026-10-29T18:22:58.126Z | Buy JUP to exactly 0.25 USDC, sponsored | acquire JUP error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xbb3cac9c71006234b0c7b68d5410705a098e9ba54ffa4706abf19560d06c57ed; creation rejected, no Debug record confirmed |

Acquisition orders are setup legs of planned scenario rows and count only in the separately labelled acquisition and acquisition totals, outside main transaction totals.
- Source row 3: SOL to JUP, raw sell 2013557, raw buy limit 187593, final fulfilled; https://debug.barn.cow.fi/order/0xff18da8a9906fd3c2a9d6d4848fb44fe82afea87dd44f2db7bf1df9f76f88b82.

Cleanup is excluded from planned trade, main fill and transaction totals above. Cleanup placed 3 orders; final states {'fulfilled': 3}.

| Scenario row / trader | UTC timestamp | Cleanup action | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 1 | 2026-10-29T18:55:22.603Z | EPjFWd to SOL, raw sell 503907 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x7af079243febd120daf30885403f8fca78f540de49eb3f08a548c79590ad6b7d |
| - / 2 | 2026-10-29T18:55:23.646Z | Es9vMF to SOL, raw sell 504352 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xb5e9621182f44dadcab75f1e4e780d2b8138ab2f51d0e2b8ef3194bb91517ba4 |
| - / 3 | 2026-10-29T18:55:24.783Z | JUPyiw to SOL, raw sell 736766 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xc93c060ec8b66eec5d463ee75afc89689d1c6e3f8064def53b7478760565854f |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 2. Native and wrapped payouts

Native and wrapped self paid payouts achieved. 6 of 12 planned trades filled; 6 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-18-22-composite-zurui-run`. Scenario UTC: 2026-10-29T18:23:11.885Z to 2026-10-29T18:23:45.141Z. Total transactions: 6, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 6/6 main placed, versus 12 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: 7.947 / 9.685 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

All placed orders were self paid. Fresh token account costs are paid by the user or sponsor at placement; these tests impose no solver paid account requirement.

Read only RPC verified the actual native and wrapped receipts, rather than relying only on filled order labels. Native SOL owner lamport increases equal the recorded executed output; wrapped SOL token account increases equal the output and parsed SPL transfers name the destination account. Every inspected settlement returned `err: null`.

| Order | Receipt measured at settlement | Transaction |
| --- | --- | --- |
| https://debug.barn.cow.fi/order/0xdd81d0325fbdede710c410e4b05ae775e9d16424d8776e172cb5e95c76441957 | Native owner balance +1973133 lamports, equal to executed buy amount 1973133 | https://solscan.io/tx/4dV8itHCYTMZoM17nRuWrSgXLiyTyHw7BETGtkJJ5exTt92Po6qkfRCrDCUDxYuZmfE6DDL846ALWZM6Q2c2NDVA |
| https://debug.barn.cow.fi/order/0x63ab346e005e85e17907f54cf1590401ceae5e4d12b32e0d86f4020c95863c7d | Wrapped SOL account `GTfqp3CuZJ1G3ykWmiNXGzdrCMUH3gpKKsFJPXMztCEp` +1973236 atoms, equal to executed buy amount 1973236; parsed SPL transfer confirms destination | https://solscan.io/tx/4mrDJCg6gGbNNmhGJYnP4gXJfRcBFk4UPvofcwhUZuVg3GfvmXeSLwe1cYjF3QHiWwxtNViMeLK3aCCZVHDV4hCk |
| https://debug.barn.cow.fi/order/0x6f5651f1a14a823ae802f661bc952f4374a000260e719747e87c3699ab0e9806 | Native owner balance +2000000 lamports, equal to executed buy amount 2000000 | https://solscan.io/tx/8Tro4ACPpEKKhVvD812uQACLBHRjExPoXCmiPeqzbQYEpXrv93v14KvtDCn2SsGBJ1uQkPqWos14FZJpioPpbv9 |
| https://debug.barn.cow.fi/order/0xffc61a14c9284246bc334ed7eb6e57073698f9c548815d6e27645801be18c5e8 | Wrapped SOL account `GTfqp3CuZJ1G3ykWmiNXGzdrCMUH3gpKKsFJPXMztCEp` +2000000 atoms, equal to executed buy amount 2000000; parsed SPL transfer confirms destination | https://solscan.io/tx/371A5M9p8SZVYhqJYxxUEPn2iLy1md9Ff4Y4HotD3iThgXVirrQjbfTSi7UZnVN8FaGe38qBMKVpzTU7ULKFYMqS |
Preplacement diagnosis: `NoLiquidity` identifies no usable API quote for that request, not no liquidity for a token. `InvalidTransaction: the bundle must not create the buy token account` rejects the sponsored creation bundle before solver settlement; self paid controls can fill, so CoW should compare that creation template and receiving account handling before assigning solver fault. `SellAmountDoesNotCoverFee` rejects the small quoted trade for execution cost, not a submitted settlement; CoW should check sizing and fee accounting before rerunning. Exact fee shortfall was not preserved. Decoding the original saved sponsored request in standard pairs confirms an 829 byte transaction with an associated token account instruction at index 4 that includes the intended receiving account. It therefore reaches exactly the forbidden creation condition; this supports CoW checking the sponsored creation template, rather than changing the solver route. These mechanisms are certain from stage/message; the underlying response and ownership gaps remain explicit.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 2026-10-29T18:23:12.447Z | Sell 0.005 SOL to USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x677e1d1e8ab26d807d0339a8b1a51e1661ffdc71cebad761895c829183cd41e5; creation rejected, no Debug record confirmed |
| 8 / 5 | 2026-10-29T18:23:12.655Z | Sell 0.005 SOL to USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xcdcd220342195ea72d101a8fdd9e04ef8ec150a0834af182a61e3a1f238d73a0; creation rejected, no Debug record confirmed |
| 9 / 6 | 2026-10-29T18:23:13.903Z | Sell 0.005 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xac5d5767d1e17bf1fb9a5ee481fecef18895ec90a8bb07eb4d5a4c2cc5113b9a |
| 10 / 7 | 2026-10-29T18:23:14.483Z | Sell 0.005 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x5ee62e282c843b5d8a9e84d61ceef80a31b54df2e3df321b7d02762b294e0c9a |
| 11 / 4 | 2026-10-29T18:23:19.841Z | Sell 0.2 USDC to SOL, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x55b173f77e1fed92069e2653108fe07752397be7545bb047e912e7f45160a9af; creation rejected, no Debug record confirmed |
| 12 / 5 | 2026-10-29T18:23:20.218Z | Sell 0.2 USDC to wSOL, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x5451ed081e95fd02cf85b3992f50971cd17443fbf352c47c63d26942ddee6147; creation rejected, no Debug record confirmed |
| 13 / 6 | 2026-10-29T18:23:24.974Z | Sell 0.2 USDC to SOL, self | final fulfilled | https://debug.barn.cow.fi/order/0xdd81d0325fbdede710c410e4b05ae775e9d16424d8776e172cb5e95c76441957 |
| 14 / 7 | 2026-10-29T18:23:22.420Z | Sell 0.2 USDC to wSOL, self | final fulfilled | https://debug.barn.cow.fi/order/0x63ab346e005e85e17907f54cf1590401ceae5e4d12b32e0d86f4020c95863c7d |
| 15 / 4 | 2026-10-29T18:23:26.958Z | Buy USDC to exactly 0.002 SOL, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x95107992c2a2df544e82917edeedc7d4229f15728a9b043d35f123740eacb91d; creation rejected, no Debug record confirmed |
| 16 / 5 | 2026-10-29T18:23:27.407Z | Buy USDC to exactly 0.002 wSOL, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x421ce30152981bfaae3706eaea3c5817273630ddf39833c8a25178e28586f2fc; creation rejected, no Debug record confirmed |
| 17 / 6 | 2026-10-29T18:23:36.348Z | Buy USDC to exactly 0.002 SOL, self | final fulfilled | https://debug.barn.cow.fi/order/0x6f5651f1a14a823ae802f661bc952f4374a000260e719747e87c3699ab0e9806 |
| 18 / 7 | 2026-10-29T18:23:30.888Z | Buy USDC to exactly 0.002 wSOL, self | final fulfilled | https://debug.barn.cow.fi/order/0xffc61a14c9284246bc334ed7eb6e57073698f9c548815d6e27645801be18c5e8 |

Cleanup is excluded from planned trade, main fill and transaction totals above. Cleanup placed 1 orders; final states {'fulfilled': 1}.

| Scenario row / trader | UTC timestamp | Cleanup action | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 6 | 2026-10-29T18:23:47.435Z | EPjFWd to SOL, raw sell 438060 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xcc90f69aa9f660ec28b172a4456d550b3a9c4d5b9537450e79090736ce3eb5aa |
| - / 7 | 2026-10-29T18:23:51.770Z | Recorded token dust burn | 0.101015 EPjFWd...; burned rather than sold | No order ID for burn action |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 3. Receiving account costs

Self paid fresh account fill achieved; sponsorship untested. 6 of 16 planned trades filled; 6 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-18-22-composite-zurui-run`. Scenario UTC: 2026-10-29T18:24:12.721Z to 2026-10-29T18:24:46.160Z. Total transactions: 6, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 6/6 main placed, versus 16 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: 9.817 / 16.047 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

The journal checked 8 receiving accounts before this scenario. A self paid fresh account filled, but sponsored placement failed before solving, so broad fresh account and sponsorship support remain unverified.
The observed self paid fill is useful evidence for this receiving account flow, not full support across native payout, sponsored mode and all tokens. The team had not verified sponsorship, v1 or fresh account support; transaction format version alone does not prove the intended v1 feature. Zero SOL and concurrent orders from one wallet are not covered: the runner funds wallets and serializes their trades.
Preplacement diagnosis: `NoLiquidity` identifies no usable API quote for that request, not no liquidity for a token. `InvalidTransaction: the bundle must not create the buy token account` rejects the sponsored creation bundle before solver settlement; self paid controls can fill, so CoW should compare that creation template and receiving account handling before assigning solver fault. `SellAmountDoesNotCoverFee` rejects the small quoted trade for execution cost, not a submitted settlement; CoW should check sizing and fee accounting before rerunning. Exact fee shortfall was not preserved. Decoding the original saved sponsored request in standard pairs confirms an 829 byte transaction with an associated token account instruction at index 4 that includes the intended receiving account. It therefore reaches exactly the forbidden creation condition; this supports CoW checking the sponsored creation template, rather than changing the solver route. These mechanisms are certain from stage/message; the underlying response and ownership gaps remain explicit.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 19 / 8 | 2026-10-29T18:24:13.888Z | Sell 0.0025 SOL to USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xa6c7f5be417347f1f6775213c5356335e0236b71ddc11f6dd8bda0730261809d; creation rejected, no Debug record confirmed |
| 20 / 9 | 2026-10-29T18:24:15.387Z | Sell 0.0025 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x27f01788d7a9eb8735086c07dc1a0f1a21846543932be181b75dbc7105717d0f |
| 21 / 10 | 2026-10-29T18:24:14.702Z | Buy SOL to exactly 0.25 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x27f02e9c88c5375996634ed16517c441e694d54ba7ffc933e3bc783d4a3e578e; creation rejected, no Debug record confirmed |
| 22 / 11 | 2026-10-29T18:24:16.261Z | Buy SOL to exactly 0.25 USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xd4c119ec725f727b1396693f161155409cf5e5392171ae515fd2331d569dc688 |
| 23 / 12 | 2026-10-29T18:24:14.301Z | Sell 0.0025 SOL to USDG, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x8c4cb349ac6a15acd375ee9c6a6d928867aca0098d1973f7bc442475ca8e556d; creation rejected, no Debug record confirmed |
| 24 / 13 | 2026-10-29T18:24:16.153Z | Sell 0.0025 SOL to USDG, self | final fulfilled | https://debug.barn.cow.fi/order/0xea695bc6186381e7f7bc767c77765ddd722979866d2e29b9ccecd7c1502b46de |
| 25 / 14 | 2026-10-29T18:24:13.333Z | Buy SOL to exactly 0.25 USDG, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 26 / 15 | 2026-10-29T18:24:13.411Z | Buy SOL to exactly 0.25 USDG, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 27 / 8 | 2026-10-29T18:24:15.553Z | Sell 0.0025 SOL to USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x26d9fddbc25e0108e6dcbe137856e468adcf67b21719c1cad4dfb755753ba449; creation rejected, no Debug record confirmed |
| 28 / 9 | 2026-10-29T18:24:26.969Z | Sell 0.0025 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x17613ba50af9ae4bf5fc42c00766b45093e86a2d8c8f3be5a4165979dcee4b24 |
| 29 / 10 | 2026-10-29T18:24:16.119Z | Buy SOL to exactly 0.25 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xd89ebc67e7210df75707b6a02695a1d85ee77192b46609b09d5a3c0509c99e51; creation rejected, no Debug record confirmed |
| 30 / 11 | 2026-10-29T18:24:34.497Z | Buy SOL to exactly 0.25 USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xd580f9515df9024240d2e408b82066033943886dbe5808161234e061af851730 |
| 31 / 12 | 2026-10-29T18:24:15.660Z | Sell 0.0025 SOL to USDG, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xf77902702d72ff61efed16eec672e71ce3c00a5dcd0dcb5db21d7db8ee52b941; creation rejected, no Debug record confirmed |
| 32 / 13 | 2026-10-29T18:24:34.146Z | Sell 0.0025 SOL to USDG, self | final fulfilled | https://debug.barn.cow.fi/order/0xb6a634eb07023e9b63cf744b338a2c4a1f46b59cf2ab9f626bfe92c97c5dc23c |
| 33 / 14 | 2026-10-29T18:24:14.919Z | Buy SOL to exactly 0.25 USDG, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 34 / 15 | 2026-10-29T18:24:15.004Z | Buy SOL to exactly 0.25 USDG, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |

Cleanup is excluded from planned trade, main fill and transaction totals above. Cleanup placed 6 orders; final states {'fulfilled': 6}.

| Scenario row / trader | UTC timestamp | Cleanup action | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 9 | 2026-10-29T18:24:48.919Z | EPjFWd to SOL, raw sell 502424 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xd7830abefcc4ec64bc40bb9f2b470a2716805c1bc66c078bc2055f4eef063c21 |
| - / 9 | 2026-10-29T18:24:49.167Z | JUPyiw to SOL, raw sell 1815503 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x02862b5cc9c5e3167e1c7173619970bdf0dc85252f9a79387601c68a2ffb4ff5 |
| - / 11 | 2026-10-29T18:24:49.869Z | EPjFWd to SOL, raw sell 500000 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x502115a3b291a50c922fd4ab8533f6e3e2e9bb783d47ef6734ee63cc88d2883c |
| - / 13 | 2026-10-29T18:24:50.908Z | JUPyiw to SOL, raw sell 1815503 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xc8a0c19b56fa8a76db89d5dee9789ac6df443502a15117b6a54fd52d5ab702db |
| - / 13 | 2026-10-29T18:24:51.166Z | 2u1tsz to SOL, raw sell 502338 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x15063a49952b74fc2e1ca93607314bbb521f53a9cfa82fdc0f8120cdda03362d |
| - / 14 | 2026-10-29T18:24:51.862Z | JUPyiw to SOL, raw sell 1814851 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x2f1b93eaa1af09cd20727f26f6ccee660ad8fb74d4ae2a647117f9f59865d1e4 |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 4. Same direction wave of 25

Batching not achieved, known and accepted. 1 of 25 planned trades filled; 25 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-18-22-composite-zurui-run`. Scenario UTC: 2026-10-29T18:25:29.582Z to 2026-10-29T18:28:53.078Z. Total transactions: 1, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 1/25 main placed, versus 25 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: 6.521 / 6.521 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

Each successful scenario order has its own settlement signature, so no batch was achieved. One order at a time is known and accepted; the 25 request wave does not establish sustained capacity.
Batch sizes for successful main settlements: {1: 1}. Team confirmed one order built at a time, 1 Jupiter request per second, up to 8 auctions. These are known and accepted constraints, not a measured sustained throughput result.
Ownership unknown: unfilled main orders were cancelled after the configured 180 second wait, not expired. The full window competition counter reports 159 `SolverFailed` auctions, including acquisitions and cleanup; this cannot be counted as failed orders or attributed to every cancellation. At auction 426430 at 18:35:19.526870611Z the wrapper was `Status { status: 400, body: "{\"kind\":\"SolverFailed\",\"description\":\"Solver engine returned an invalid response\"}" }`. Original response bodies were not present in the driver request records checked. Leading explanation, low confidence: the repeated engine to driver response failures reduced accepted candidates; it is not yet clear whether the engine, protocol parsing or a timeout caused them. The strongest alternative is selection of otherwise valid solutions or uncompetitive prices; the successful waves show a general inability to settle is false. CoW should capture original engine status/body and parse error for one cancelled order auction before asking Zurui for a repair.
Preplacement diagnosis: `NoLiquidity` identifies no usable API quote for that request, not no liquidity for a token. `InvalidTransaction: the bundle must not create the buy token account` rejects the sponsored creation bundle before solver settlement; self paid controls can fill, so CoW should compare that creation template and receiving account handling before assigning solver fault. `SellAmountDoesNotCoverFee` rejects the small quoted trade for execution cost, not a submitted settlement; CoW should check sizing and fee accounting before rerunning. Exact fee shortfall was not preserved. Decoding the original saved sponsored request in standard pairs confirms an 829 byte transaction with an associated token account instruction at index 4 that includes the intended receiving account. It therefore reaches exactly the forbidden creation condition; this supports CoW checking the sponsored creation template, rather than changing the solver route. These mechanisms are certain from stage/message; the underlying response and ownership gaps remain explicit.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 35 / 16 | 2026-10-29T18:28:45.437Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xb8edb341768e908dd1cda6dacb63cae2f6d89f9877d1adfb0434a28121421f64 |
| 36 / 17 | 2026-10-29T18:25:35.369Z | Sell 0.005 SOL to JUP, self | final fulfilled | https://debug.barn.cow.fi/order/0x2c3e8091e5c2fcc796a6ac01611fba3ba61e439337f93cc5929da1f4ca780ae8 |
| 37 / 18 | 2026-10-29T18:28:44.223Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x8947b42cfd647d4568e2ad8ccb8133f9a2c4edbe0041135c19d9a327b9734536 |
| 38 / 19 | 2026-10-29T18:28:45.160Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xf7e962fa0186cd9ba1def5f28f47c8f90fd16feb813e543c1a9f0b313c1283a4 |
| 39 / 20 | 2026-10-29T18:28:44.652Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xb63f309c8b0f0ad29dece096a642662fa580c58e4aac9f94b3bc377318fffabe |
| 40 / 21 | 2026-10-29T18:28:45.745Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xea8d4794dc96f0633c17c7447f0e6d16cc186504ce8513a51ae835f6423c0dad |
| 41 / 22 | 2026-10-29T18:28:46.645Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x542f41451183f075c7896416daaaf6eda8956bf92745da7f2223d050ffca3b24 |
| 42 / 23 | 2026-10-29T18:28:50.570Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xc912897923e08d2685434cb32ab6cee8f3f86693d40e06a04c5a33974ff7007c |
| 43 / 24 | 2026-10-29T18:28:52.192Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x3ba3471a7e9f3e8866f1f2880518c87a1d36ed48d52a3f2d72df7950b55ac3ee |
| 44 / 25 | 2026-10-29T18:28:47.153Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xa4b4096630b989ea5a90c9b512db14569aef27f172907a361ff6159ca345141f |
| 45 / 26 | 2026-10-29T18:28:48.499Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xdd40ed5526e8e75ed3c38f1622a713a6576e20fc22360e0294d7bdfc14bb3562 |
| 46 / 27 | 2026-10-29T18:28:46.393Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x5ff49634bf98169af14973e15902b7a70fe4e6d5755bf45ea0dfd3a9a3a9a2c9 |
| 47 / 28 | 2026-10-29T18:28:48.951Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x26e8782c2d6897451ab158d9b6c8f94a59db75acb94dbafc1c887a47b0f9c260 |
| 48 / 29 | 2026-10-29T18:28:48.646Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x39e124ee109bae18893fbbed6215ce796a6a41b6d44dde050909d98deee7fc06 |
| 49 / 30 | 2026-10-29T18:28:49.458Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x452782416af222a8bbcd1c4a40966edf122cd439a00075d02279ac1dc88ed734 |
| 50 / 31 | 2026-10-29T18:28:49.826Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x85b84ad16450e839666ad90dbb15b91d918d66d0b1f0d44167a021f96355d594 |
| 51 / 32 | 2026-10-29T18:28:48.531450999Z | Sell 0.005 SOL to JUP, self | Ownership unknown; rejected candidate(s), not submitted failure; SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }; main timeout; final cancelled | https://debug.barn.cow.fi/order/0x2760ecc29430b2c74d3dac03e6ec47bb0221e8cc24f7ad78bcecac18c16288b5 |
| 52 / 33 | 2026-10-29T18:28:53.071Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x9fb240921162e20d84d1325cc8f75d7bf7400c8e25d814c406522e2d15cb2944 |
| 53 / 34 | 2026-10-29T18:28:50.143Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x5795d4d4bca9f762a2f0dc751734cbc472dcbfbccf3e3ed737906cb11ad17260 |
| 54 / 35 | 2026-10-29T18:28:48.531436147Z | Sell 0.005 SOL to JUP, self | Ownership unknown; rejected candidate(s), not submitted failure; SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }; main timeout; final cancelled | https://debug.barn.cow.fi/order/0x10d1b9e513025eb94850c213a9f9012c9505fd283257dc7a69ac36efd4c3df12 |
| 55 / 36 | 2026-10-29T18:28:51.383Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xeb92b4a7b0491f7028d5f580eebeaadc4558236ae7a4beaaa17adaea52e2c30d |
| 56 / 37 | 2026-10-29T18:28:51.408Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xb786d53b4c3eea372fa2baa45b61b8a29c857a14fbc360fe3e031ca04ac51d91 |
| 57 / 38 | 2026-10-29T18:28:51.634Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xdea7bb0f43e73a051d555890590430052ba574c9f120d3106e8635d716fe755f |
| 58 / 39 | 2026-10-29T18:28:51.647Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xba997566c8352303dfb7be3ed86ff258451a1a02556e6cb009ead37a57860ee6 |
| 59 / 40 | 2026-10-29T18:28:51.770Z | Sell 0.005 SOL to JUP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x7d8903d397f960bfc742758f40166e9bab1f00c46c2a25c5fdc37ff8a2da4d3f |
CoW program `EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb` returned Custom(15); no name is assigned without deployed program evidence.

Candidate simulation diagnosis (all available distinct attempts):

| UTC / auction / solution | Order / final state | First failing program and exact error |
| --- | --- | --- |
| 2026-10-29T18:28:48.531436147Z / 426351 / 0 | https://debug.barn.cow.fi/order/0x10d1b9e513025eb94850c213a9f9012c9505fd283257dc7a69ac36efd4c3df12; cancelled | Some("EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb"); SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }; program logs `Some([])` |
| 2026-10-29T18:28:48.531450999Z / 426351 / 1 | https://debug.barn.cow.fi/order/0x2760ecc29430b2c74d3dac03e6ec47bb0221e8cc24f7ad78bcecac18c16288b5; cancelled | Some("EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb"); SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }; program logs `Some([])` |

Ownership unknown. These attempts stopped in simulation, with no failed submitted transaction signature to inspect by RPC. The empty saved `logs/settle_failures.txt` missed them; supplemental staging Grafana reads joined each order, auction, solution and first failing program, rather than treating the export as proof of no failures.
The first failing CoW instruction or Jupiter instruction is identified above, but its exact account state and rejected instruction bytes are absent. Numeric code alone does not prove repair ownership.
Leading explanation, low confidence: the order account state or settlement instruction was no longer usable at simulation time. Cancellation timing is a plausible alternative to construction error because all affected orders ended cancelled, but the logs do not identify when cancellation took effect. CoW should compare the account state at the simulated slot with the cancellation confirmation before assigning a solver repair. A later final cancellation does not prove it caused an earlier rejection.
No full serialized failed transaction was available for this scenario; no transaction size cause is established.

Cleanup is excluded from planned trade, main fill and transaction totals above. Cleanup placed 6 orders; final states {'fulfilled': 6}.

| Scenario row / trader | UTC timestamp | Cleanup action | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 17 | 2026-10-29T18:28:56.623Z | JUPyiw to SOL, raw sell 5486946 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x8a7fd8a94412679c81e6b14518935392090b0b90b5f9927953cae69abb19e96e |
| - / 18 | 2026-10-29T18:28:57.610Z | JUPyiw to SOL, raw sell 1815151 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x8adb3817d5c649a3526ea29b8971c8ff7378d68aaeecfea63c05a1d472e3f41f |
| - / 19 | 2026-10-29T18:28:58.505Z | JUPyiw to SOL, raw sell 1814851 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x3f2c253807d5126b6bc3038f99ce739f769fab9c87cc36b19bd8a37101f03ece |
| - / 20 | 2026-10-29T18:28:59.729Z | JUPyiw to SOL, raw sell 1814851 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x171e147d89e0d4c36e4a911fb6601df661ef39efa32970f0dec79beaa0233743 |
| - / 21 | 2026-10-29T18:29:00.666Z | JUPyiw to SOL, raw sell 3630004 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x51e889de62056eca5168cf60ffc0d93e67b0d06c623756ebdc3237ed0858deb4 |
| - / 22 | 2026-10-29T18:29:01.570Z | JUPyiw to SOL, raw sell 1814851 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x73a6dfb2df7ff68e760aaa24c89877fbcb58fdcad3aa5ff2a0ad9329a8bda614 |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 5. Burst sell waves

Full burst clearing not achieved. 29 of 84 planned trades filled; 84 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-18-22-composite-zurui-run`. Scenario UTC: 2026-10-29T18:30:40.507Z to 2026-10-29T18:41:48.059Z. Total transactions: 29, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 29/84 main placed, versus 84 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: 31.552 / 89.106 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

Waves request 4, 8, 16, 24 and 32 orders, with 90 second planned spacing. Per wallet serialization can delay actual starts. Cancellation follows the simulator fill timeout and is not proof of order expiry or a late solver response.
Wave at scenario +0s: 4 planned, 4 main placed, 4 filled; last observed fill 22.130s after its placement (not whole wave clearing).
Wave at scenario +90s: 8 planned, 8 main placed, 8 filled; last observed fill 47.341s after its placement (not whole wave clearing).
Wave at scenario +180s: 16 planned, 16 main placed, 16 filled; last observed fill 89.106s after its placement (not whole wave clearing).
Wave at scenario +270s: 24 planned, 24 main placed, 0 filled; no main fill.
Wave at scenario +360s: 32 planned, 32 main placed, 1 filled; last observed fill 7.463s after its placement (not whole wave clearing).
Ownership unknown: unfilled main orders were cancelled after the configured 180 second wait, not expired. The full window competition counter reports 159 `SolverFailed` auctions, including acquisitions and cleanup; this cannot be counted as failed orders or attributed to every cancellation. At auction 426430 at 18:35:19.526870611Z the wrapper was `Status { status: 400, body: "{\"kind\":\"SolverFailed\",\"description\":\"Solver engine returned an invalid response\"}" }`. Original response bodies were not present in the driver request records checked. Leading explanation, low confidence: the repeated engine to driver response failures reduced accepted candidates; it is not yet clear whether the engine, protocol parsing or a timeout caused them. The strongest alternative is selection of otherwise valid solutions or uncompetitive prices; the successful waves show a general inability to settle is false. CoW should capture original engine status/body and parse error for one cancelled order auction before asking Zurui for a repair.
Preplacement diagnosis: `NoLiquidity` identifies no usable API quote for that request, not no liquidity for a token. `InvalidTransaction: the bundle must not create the buy token account` rejects the sponsored creation bundle before solver settlement; self paid controls can fill, so CoW should compare that creation template and receiving account handling before assigning solver fault. `SellAmountDoesNotCoverFee` rejects the small quoted trade for execution cost, not a submitted settlement; CoW should check sizing and fee accounting before rerunning. Exact fee shortfall was not preserved. Decoding the original saved sponsored request in standard pairs confirms an 829 byte transaction with an associated token account instruction at index 4 that includes the intended receiving account. It therefore reaches exactly the forbidden creation condition; this supports CoW checking the sponsored creation template, rather than changing the solver route. These mechanisms are certain from stage/message; the underlying response and ownership gaps remain explicit.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 60 / 41 | 2026-10-29T18:30:48.553243521Z | Sell 0.0025 SOL to USDC, self | Ownership unknown; rejected candidate(s), not submitted failure; SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6037))), program_error: None }; SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }; final fulfilled | https://debug.barn.cow.fi/order/0x10179fc82f989c7a0344edb4d00bcb8b3f3b1dcad3e7c83de8abd36efdd3686e |
| 61 / 42 | 2026-10-29T18:30:42.967Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x9fbb7f7c72db654b82eed2caf8095f186b8121631b778699ee64ac312b47406c |
| 62 / 43 | 2026-10-29T18:30:43.069Z | Sell 0.0035 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x215440f81956aa97abe5197d5f0dab9c12d45b929be3951754d03e8efcf9fa05 |
| 63 / 44 | 2026-10-29T18:30:43.273Z | Sell 0.004 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x45f0c6e771cab1e22bbeb0950b10f5fc6317177f90ee146bc76d475ab20471f1 |
| 64 / 41 | 2026-10-29T18:32:13.995Z | Sell 0.0025 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x3bfcdf377f4229a50783ba121d9fd72417ac00052a8fe824d2996eca3d0aef02 |
| 65 / 42 | 2026-10-29T18:32:12.551Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x8e1c73c1ad74c8798e35124c4536770ecc6c2f82a9a7e4b8bbd5c5147865deb3 |
| 66 / 43 | 2026-10-29T18:32:13.550Z | Sell 0.0035 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x006c61ed4b0e6a35aba53eadd45d9b3aee42fbbd386903bd0f9f3a458935d499 |
| 67 / 44 | 2026-10-29T18:32:12.249Z | Sell 0.004 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x77aceb565fcde323971bdf3b09ac90ee6666cc5b985ebc25648263e900eae844 |
| 68 / 45 | 2026-10-29T18:32:14.194Z | Sell 0.0025 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x2f4bcf2e29d853943c4df1295e6ea388932980811d0b865b623a35b3f3ce44b6 |
| 69 / 46 | 2026-10-29T18:32:14.498Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x5c21ada2a4273c779d3aec88a66e6079e70c59d2b9379cfea8f11bc5dd04adcc |
| 70 / 47 | 2026-10-29T18:32:14.709Z | Sell 0.0035 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xf8585d8da49c8bfe8090ab0974348916c620b83dc9f99b40e8470e2c3442fe1b |
| 71 / 48 | 2026-10-29T18:32:13.752Z | Sell 0.004 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xe1348e49974b8aaacc72d84ff89d0fa0c19307c7f8c9602173a7ee174083e464 |
| 72 / 41 | 2026-10-29T18:34:43.682593061Z | Sell 0.0025 SOL to USDC, self | Ownership unknown; rejected candidate(s), not submitted failure; SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6024))), program_error: None }; final fulfilled | https://debug.barn.cow.fi/order/0xa19a7ffc0674a54c2b30adf0d388b5996e820aead7e062ae3b766047c01c9d20 |
| 73 / 42 | 2026-10-29T18:33:44.758Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xd3a2187dcea223396ea3532b1abb9e43aabc4783e56101c8bb1bbbb1ed3c8e22 |
| 74 / 43 | 2026-10-29T18:33:43.951Z | Sell 0.0035 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x1c3076a312f88765dda9f93e053b38b9bea263fade3a4f3e25eabd4c3c5d124b |
| 75 / 44 | 2026-10-29T18:33:44.650Z | Sell 0.004 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xbe2f394df4f7b42ed1aa4bc04b93ce816f6aeb62e86db886052e96d0d7f3cab8 |
| 76 / 45 | 2026-10-29T18:33:44.351Z | Sell 0.0025 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xb26ca5b5bc57964011d377322cd54e5f80172b700ef19143a4b0b068076f8f66 |
| 77 / 46 | 2026-10-29T18:33:44.851Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x5ecf30dce75b169272734e9ef4211de910736adbcb4140d2a5a09f1eeab847c1 |
| 78 / 47 | 2026-10-29T18:33:46.949Z | Sell 0.0035 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x4e1cbffaaed9a9a8b4b9227db572632dd4a1898d249349be97197787d04a3531 |
| 79 / 48 | 2026-10-29T18:33:45.256Z | Sell 0.004 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x11b47629038b828a067e5b865c16d20a272b6fc3e37b6c4bf5d3b0a49122c098 |
| 80 / 49 | 2026-10-29T18:33:48.089Z | Sell 0.0025 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x15cc2e1fd627fac3545bbf1aee7bd28098f7ed51334d0aeb557ad4f5244a14e5 |
| 81 / 50 | 2026-10-29T18:33:46.149Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x78fcf0fdfacea670b6dc47c03ef82f623558d44ab62d01ce85be10a390b04ac4 |
| 82 / 51 | 2026-10-29T18:33:46.251Z | Sell 0.0035 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x49361ee0f13ec5150d3071e6f1f3d3f0a30cfee95de332aca062d4ba3d039818 |
| 83 / 52 | 2026-10-29T18:33:46.450Z | Sell 0.004 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xd3bf4ccba122d23da26710b202411dce59bd52879fdbd9d3c5b531c4e06955dd |
| 84 / 53 | 2026-10-29T18:33:46.560Z | Sell 0.0025 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0xcd35f910e8e2344b94036989d2b4962e81d8ff33abf565b09e84f9bb7b6e0083 |
| 85 / 54 | 2026-10-29T18:33:46.750Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x43a0e0d98c31152ac7bbe84221e0eba274b93aa5776d328057fc4e4205cfb3d0 |
| 86 / 55 | 2026-10-29T18:33:46.649Z | Sell 0.0035 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x0d27d679eae792b300698148932f20cfb5dc17a88ce4c01fdfb4468a75d51c1e |
| 87 / 56 | 2026-10-29T18:33:46.851Z | Sell 0.004 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x3fc6d0a038c5f4d70104a8bf558911a2a975b840a4fdc2b9cb60ad055973967f |
| 88 / 41 | 2026-10-29T18:38:27.025Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x74e09c3752b7146d0d50f8bf9f0543abe9e992bba670cc40797d69721bd89579 |
| 89 / 42 | 2026-10-29T18:38:32.145Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xd85c90697ddbc370913d1c0e98d45acb6997d0f220579c7410270932744eff25 |
| 90 / 43 | 2026-10-29T18:38:27.423Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x553f137acb0a98a5d92e54177f87f566a622973a4ba3749ccec203a3c3866f7f |
| 91 / 44 | 2026-10-29T18:38:35.518Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x7bc75474e70057f9a86fbb59fbf7286bf8323a4fab4a74c06ee1d8627fd20007 |
| 92 / 45 | 2026-10-29T18:38:30.633Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x7590af4d172ec9b96ca6078a14e41bf5bae9e644b6be69d3abb4a97e8fd3c306 |
| 93 / 46 | 2026-10-29T18:38:30.251Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xda27cdbb282948cec2dfede3055fe6f05b7dfc3b24042cf71fb9ffaef5b4413b |
| 94 / 47 | 2026-10-29T18:38:26.327Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x02c2a4c638b23851cda1abdfe70a258bf8213d89dd906521e59fe29422a3623c |
| 95 / 48 | 2026-10-29T18:38:31.768Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xc0fdfec36abfbe3edcee34338028e4d25c0f0ee12d00a28f1519daac5097b719 |
| 96 / 49 | 2026-10-29T18:38:32.647Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xc230ebb457053208c5439506fc26c1527055b88f88ab7d18c5451e9b27876dcf |
| 97 / 50 | 2026-10-29T18:38:22.511Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x5de98c091fafee60da60e9017d24738387c901575d7891a968edf1c75a0cf96a |
| 98 / 51 | 2026-10-29T18:38:25.516Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x04e3b0e5e2f11c76d7f746a2875e490e12a88e2b0b0156e53e04ba58af35ea90 |
| 99 / 52 | 2026-10-29T18:38:35.393Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x1ccf3b8401b5bdbf06d704cd693e491f42cac2d5fb45a1787b4fcdeaecab7326 |
| 100 / 53 | 2026-10-29T18:38:28.378Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x18aacf84da31a0de65ea72df736384ee22f4f271f483eaeecef4cf67304f4164 |
| 101 / 54 | 2026-10-29T18:38:25.873Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x676ffb8c41751cc67b42fdd8844752eafb8a8295ce38dce2db4e54d76aa89c78 |
| 102 / 55 | 2026-10-29T18:38:32.400Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x94ea9061e444ea3812206f877f491684391bb92d559006631217b0b38b6ea7f0 |
| 103 / 56 | 2026-10-29T18:38:24.538Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x0ab8ccb95428265901d053fdceb15e846b33689463f9118191aa153d7df3b720 |
| 104 / 57 | 2026-10-29T18:38:33.894Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x37d0a857b4d576d0de1d8083351e8e18f42d34adb2643928d7e767277a7d5c39 |
| 105 / 58 | 2026-10-29T18:38:29.427Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x259395a0cebd93ee49f4a5a2ec50a4571a056a57d76d97eaa05738b00cd25b64 |
| 106 / 59 | 2026-10-29T18:38:29.722Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x4987ed103bc46f35be48e522240ae1ef47d2cf719df011da426ba9cf62cfeb89 |
| 107 / 60 | 2026-10-29T18:38:31.015Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x62bdccd6468983ef0fb25feccd553cf8324abd5f47b72a00254f0dab71034a4e |
| 108 / 61 | 2026-10-29T18:38:33.148Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xddfc85aa75d4964a93725210654e202932a8b3088132853cc4cd5c4b705789bf |
| 109 / 62 | 2026-10-29T18:38:36.437Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x3915ee2ea4da962d7f05eab65e59207cc703a861388c5e29c8a7ad7edc4810f8 |
| 110 / 63 | 2026-10-29T18:38:33.037Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xccad8d1f17b87f961251b92e12bf7d02172d436dc762af89ec0fadf72ee268d7 |
| 111 / 64 | 2026-10-29T18:38:33.267Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xd77c5c27f3be92b3a3d19d0af6903ba927b3221390c085900454f17aa8b0e38e |
| 112 / 41 | 2026-10-29T18:41:39.598Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x6b96e79c5e76f9701874c8b60ae7d01ad008e3b08118af82208f2441430d03e0 |
| 113 / 42 | 2026-10-29T18:41:44.004Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x1521e485d5207e9d0bd280a54289c3f65cb03e2d03e492359b0739edddbf4012 |
| 114 / 43 | 2026-10-29T18:41:40.905Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xb2e80874199ebdb2038d899d2371cee8391f70cb2d803f98934a97bae91eacdf |
| 115 / 44 | 2026-10-29T18:41:47.678Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x2797c34143342c99b0f327b1a1f49512039b3ff2d5f9a251ef835b8d85f53979 |
| 116 / 45 | 2026-10-29T18:41:42.994Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x8512afcae6940d45d0226735881a5f814fec132d94499a48c67746e22fbd1047 |
| 117 / 46 | 2026-10-29T18:41:42.188Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x39cdd5e531c3350d87ece0454c786c36bfe80e67000ff76e9327ada34e61651c |
| 118 / 47 | 2026-10-29T18:41:38.911Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xadee381edc24d4a3e9eae8fbe1148ad0e2f686be37816f76198d97e83ed89a71 |
| 119 / 48 | 2026-10-29T18:41:43.671050056Z | Sell 0.004 SOL to USDC, self | Ownership unknown; rejected candidate(s), not submitted failure; SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }; main timeout; final cancelled | https://debug.barn.cow.fi/order/0x206b84a261ef5313d02ebea97817995822389d1b1960053a0d87225af17142d3 |
| 120 / 49 | 2026-10-29T18:41:46.414Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x6f2d5965985e6866fb36c7c14feec77b0d3e0db93cab0e3a41216c21a181c24d |
| 121 / 50 | 2026-10-29T18:38:28.560Z | Sell 0.003 SOL to USDC, self | final fulfilled | https://debug.barn.cow.fi/order/0x027d43aad7f6f3ca6e6bc846c80d2b5c347405e0d6161b21addb1feb405f2beb |
| 122 / 51 | 2026-10-29T18:41:37.883Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xc76d857a556e84b2de1a947548f7b0970488691a32ea98f9f300ae87d1fcc752 |
| 123 / 52 | 2026-10-29T18:41:47.836Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x093a4b61cb56b784fcfdc3e55a2ba45444fa0268342c6639d8a189ccdd534369 |
| 124 / 53 | 2026-10-29T18:41:43.717Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x9b965ba59bec44611d4b8adbb2981a2c259853ceb589b14e82f6b34d9ac3eab3 |
| 125 / 54 | 2026-10-29T18:41:38.310Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x7d4cb11f34301625b1851afcccd4009e8802f04ff02df2df6ab060a12fd05f62 |
| 126 / 55 | 2026-10-29T18:41:44.285Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xf65ecc9a50a6a3c457b2c223297ede03c06121a1498f9d5fc9293e086b766a9c |
| 127 / 56 | 2026-10-29T18:41:40.596Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x37f81ea6e90a18567192dab49339637b4d57217802cdf4fa4bb71c7ea27f6e0b |
| 128 / 57 | 2026-10-29T18:41:47.543Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x6e8de283299d5b4c5c51fd2ee401612dee9ef087eb726542d17416c9fe44f75d |
| 129 / 58 | 2026-10-29T18:41:43.368Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xd155c556146eb1b8e4d0b89e8bab38d6ab82f4b778a7fb5cab9bc0cf5a984065 |
| 130 / 59 | 2026-10-29T18:41:41.197Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xe590971d45bbd229c45d01c1b55d70b79cf15a2c76ac948309c3f4c513f6cc83 |
| 131 / 60 | 2026-10-29T18:41:44.117Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x6dd8cf37b6ccf3c86858f87266df4c851f8f5f574be95a8769a5eb44cf9ffa21 |
| 132 / 61 | 2026-10-29T18:41:46.581Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x5d6f65c3778b0a4aac2478fff02371a12ba2d3d689265a81d62253d5d7d1fe2e |
| 133 / 62 | 2026-10-29T18:41:47.051Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xc72b38b72baa43d54cca3e3ab365b62456789890db2fac7d6bfd0dcb3d7e0911 |
| 134 / 63 | 2026-10-29T18:41:43.887Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x66872126734582e3deee71353a68bfd675b1493187bcb2db9d6eebd8ef464701 |
| 135 / 64 | 2026-10-29T18:41:47.127Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xbb610399791e71c1f73f2b14898766c71172df30763a8f1efb2cd05708c05082 |
| 136 / 65 | 2026-10-29T18:39:52.350Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x5402e74dcdcca6c92720f8ab3f9d7464bbcf70609af8e9b20ebfcce6e6ec7b76 |
| 137 / 66 | 2026-10-29T18:39:50.063Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x19a8db02eba85b464a81b98fc5d7d15e057520e089be993de9a46623027ec9e5 |
| 138 / 67 | 2026-10-29T18:39:51.192Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x5911f201605216fa0f954e593bc408185f6a2c34b48c45f66eaf793d101b8d3c |
| 139 / 68 | 2026-10-29T18:39:51.570Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x3d8f66d560f8fbe327055ad45ff48d27f5bfa94cd0d0296074f91c6975c2884f |
| 140 / 69 | 2026-10-29T18:39:52.947Z | Sell 0.0025 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xc36bbe726326125567d31edb81afe04bc91d7f6c78ce56bbfffae0d5bcdb6945 |
| 141 / 70 | 2026-10-29T18:39:57.641Z | Sell 0.003 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xd2becd3524e411ab2d18bbdf0cdef1da8da2509c96506ef56f5fcaea579ecffc |
| 142 / 71 | 2026-10-29T18:39:54.190Z | Sell 0.0035 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xa5889c45043bb5a19e03865498c1041e407173b0d77d8ca0ccc7e098cafe4326 |
| 143 / 72 | 2026-10-29T18:39:54.818Z | Sell 0.004 SOL to USDC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x5e2f8e5c21496d24b745253268912429c78907a9732918b05134373d63317b28 |
CoW program `EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb` returned Custom(15); no name is assigned without deployed program evidence.
Jupiter 6037 and 6024 are kept as distinct numeric errors; no name or repair is inferred without matching historical instruction and program evidence.

Candidate simulation diagnosis (all available distinct attempts):

| UTC / auction / solution | Order / final state | First failing program and exact error |
| --- | --- | --- |
| 2026-10-29T18:41:43.671050056Z / 426506 / 1 | https://debug.barn.cow.fi/order/0x206b84a261ef5313d02ebea97817995822389d1b1960053a0d87225af17142d3; cancelled | Some("EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb"); SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }; program logs `Some([])` |
| 2026-10-29T18:30:48.553243521Z / 426375 / 0 | https://debug.barn.cow.fi/order/0x10179fc82f989c7a0344edb4d00bcb8b3f3b1dcad3e7c83de8abd36efdd3686e; fulfilled | Some("JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"); SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6037))), program_error: None }; program logs `Some([])` |
| 2026-10-29T18:30:53.562894109Z / 426376 / 0 | https://debug.barn.cow.fi/order/0x10179fc82f989c7a0344edb4d00bcb8b3f3b1dcad3e7c83de8abd36efdd3686e; fulfilled | Some("JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"); SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }; program logs `Some([])` |
| 2026-10-29T18:34:43.682593061Z / 426422 / 1 | https://debug.barn.cow.fi/order/0xa19a7ffc0674a54c2b30adf0d388b5996e820aead7e062ae3b766047c01c9d20; fulfilled | Some("JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"); SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6024))), program_error: None }; program logs `Some([])` |

Ownership unknown. These attempts stopped in simulation, with no failed submitted transaction signature to inspect by RPC. The empty saved `logs/settle_failures.txt` missed them; supplemental staging Grafana reads joined each order, auction, solution and first failing program, rather than treating the export as proof of no failures.
Jupiter program `JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4` returned 6001 for a slippage check. We cannot tell its input/output inequality from the empty program logs and absent rejected instruction bytes. No input or output side, encoded allowance or execution shortfall can be established from that error name alone.
Leading explanation for later filled Jupiter candidates, medium confidence: route or account context at simulation differed enough to invalidate this candidate, since later candidates for the same signed order filled. The strongest alternative is arithmetic or account construction in the returned route; a nearby successful candidate in the same auction rules out a universal RPC or settlement outage. Compare the rejected route instruction, token accounts and simulated slot with the next successful route, then check the signed sell and buy limits. Do not widen slippage without this comparison. Exact threshold, realized amounts and shortfall are unavailable.
Auction 426375 solution 0 measured 1143 bytes and failed 6037; auction 426376 solution 0 measured 1176 bytes and failed 6001. Auction 426422 solution 1 measured 1171 bytes and failed 6024 while solution 2 passed for a different order. These are driver reported serialized bundle byte counts, not independent full transaction size validation; a transaction limit target remains inconclusive.

Cleanup is excluded from planned trade, main fill and transaction totals above. Cleanup placed 18 orders; final states {'fulfilled': 18}.

| Scenario row / trader | UTC timestamp | Cleanup action | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 42 | 2026-10-29T18:41:51.711Z | EPjFWd to SOL, raw sell 901697 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x4e0219862ffcf2262be67cd9030e9dcaf93f6941ae3b1b31895918b1641dd3ec |
| - / 43 | 2026-10-29T18:41:52.411Z | EPjFWd to SOL, raw sell 1404236 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x760fa3d431eea57409dbbd66c2d3aebca4611b5b0eb92daa708df88b3f8f76f5 |
| - / 44 | 2026-10-29T18:41:53.552Z | EPjFWd to SOL, raw sell 1202896 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x59f9f088517eaf8bb15e7bd9d6381c2f00dafd2b5198b58f2cb6a696e9cd1851 |
| - / 45 | 2026-10-29T18:41:54.443Z | EPjFWd to SOL, raw sell 751062 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x9e9c9abb3063ee47da9f4b2b9d2d2440df679e631a0a8dced541017ba001c88a |
| - / 46 | 2026-10-29T18:41:55.428Z | EPjFWd to SOL, raw sell 600397 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xe9eeee15d313fbe020cf5ce48dddae53477bea66bd63b345c5f7986f761e558f |
| - / 47 | 2026-10-29T18:41:56.403Z | EPjFWd to SOL, raw sell 1052414 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xb9d610c44435c3baeba33bbc1f3c35ed77684bc855b10382c9ab33addbdac292 |
| - / 48 | 2026-10-29T18:41:57.430Z | EPjFWd to SOL, raw sell 1203622 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xc98fca1b0d55584ac9c11b94ebfc4e7479727164fd967a4cc2711a3141e647e2 |
| - / 49 | 2026-10-29T18:41:58.647Z | EPjFWd to SOL, raw sell 250056 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x8cd0b54b8f95420614d42e98d6bda2899beb5187eabd10f5012edef02e4a85cf |
| - / 50 | 2026-10-29T18:42:00.986Z | EPjFWd to SOL, raw sell 600991 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x234ad6c79e1d39c776632c2a48b0b164ccd9dd9b4a3d6a340303c45be17b7314 |
| - / 41 | 2026-10-29T18:42:02.339Z | EPjFWd to SOL, raw sell 750965 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xe0fc1735a5ddb833d202c25c987082ca110cd183972597f53d5da34a35a0e2d0 |
| - / 51 | 2026-10-29T18:42:10.261Z | EPjFWd to SOL, raw sell 702690 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xf1a8f6c23683657524c16a83bdef98d78601bbbd0882e464f0a0c0497ab7457c |
| - / 52 | 2026-10-29T18:42:17.385Z | EPjFWd to SOL, raw sell 400789 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xb359c308a7da89132cd01c7ff3350a9221aec199d30db34b20c810454a075d9f |
| - / 53 | 2026-10-29T18:42:20.781Z | EPjFWd to SOL, raw sell 250297 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x36ba1b6440c145b095256f58729369ffd2d1dde4329de357ef7dfa668ea3caea |
| - / 54 | 2026-10-29T18:42:31.352Z | EPjFWd to SOL, raw sell 300289 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xfb3aeda4c70354e219c6442a92681172272a012dcf27446b927abc2b4ef2b3da |
| - / 55 | 2026-10-29T18:42:39.182Z | EPjFWd to SOL, raw sell 350505 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xc48d62f9b070d15f588618fb01c0012c26ea3d7f338a95e23634dc72ebcf1000 |
| - / 56 | 2026-10-29T18:42:40.933Z | EPjFWd to SOL, raw sell 400518 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x7ae3e8607a9f9b77cc3556383f44b7eee24ea54c7465f0c3a5da15c7fb98d489 |
| - / 57 | 2026-10-29T18:42:45.162Z | EPjFWd to SOL, raw sell 251326 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x038fa8ba644adcce712e228bb5a527cd11e1d4f53c3d5eb3d29f51cd9b3b20c4 |
| - / 66 | 2026-10-29T18:43:28.791Z | EPjFWd to SOL, raw sell 302036 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x88a8413329a2761f164bb85b597a12c73639653e93e12d92f37d4ba55118049a |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 6. Opposite orders

Direct matching inconclusive, no orders placed. No main order was placed, so the feature was not exercised.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-18-22-composite-zurui-run`. Scenario UTC: 2026-10-29T18:45:07.683Z to 2026-10-29T18:47:52.190Z. Total transactions: 0, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 0/0 main placed, versus 15 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: unavailable, no main fills.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

Every opposite order flow stopped before main placement. There was no placed opposite pair to test, so direct matching is inconclusive. No batching or direct matching is known and accepted.
Preplacement diagnosis: `NoLiquidity` identifies no usable API quote for that request, not no liquidity for a token. `InvalidTransaction: the bundle must not create the buy token account` rejects the sponsored creation bundle before solver settlement; self paid controls can fill, so CoW should compare that creation template and receiving account handling before assigning solver fault. `SellAmountDoesNotCoverFee` rejects the small quoted trade for execution cost, not a submitted settlement; CoW should check sizing and fee accounting before rerunning. Exact fee shortfall was not preserved. Decoding the original saved sponsored request in standard pairs confirms an 829 byte transaction with an associated token account instruction at index 4 that includes the intended receiving account. It therefore reaches exactly the forbidden creation condition; this supports CoW checking the sponsored creation template, rather than changing the solver route. These mechanisms are certain from stage/message; the underlying response and ownership gaps remain explicit.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 144 / 74 | 2026-10-29T18:45:09.218Z | Buy SOL to exactly 2.6 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x6b6680d3eac1736f7e5db77df5f22021d0651083c551a8ae34e425721d59e5a7; creation rejected, no Debug record confirmed |
| 145 / 76 | 2026-10-29T18:45:09.427Z | Buy SOL to exactly 1.3 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xe22c674782b84e7135d6b58f298df073fb895363fa7b569aceba1fca3fcc2e27; creation rejected, no Debug record confirmed |
| 146 / 77 | 2026-10-29T18:45:09.615Z | Buy SOL to exactly 3.1 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xfec8f4159007b44b4b93e4625beccedd4d83d627142e715d8de1e0ce3f7f4609; creation rejected, no Debug record confirmed |
| 147 / 78 | 2026-10-29T18:45:09.728Z | Buy SOL to exactly 3.1 USDT, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x32275f912afa0c28560626166a28b6e4ef572c9dc128f7df0ca20aa1c7b72fa3; creation rejected, no Debug record confirmed |
| 148 / 79 | 2026-10-29T18:45:09.924Z | Buy SOL to exactly 1.1 USDT, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x60dab46876eadb7ff206d87adbc2f49aa5baa4aaccc4e57df22f4ee266040363; creation rejected, no Debug record confirmed |
| 149 / 80 | 2026-10-29T18:45:10.134Z | Buy SOL to exactly 3.2 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x71b8fc885f7a680f0e51d9f5f2aec71909c15658bb3248519a521f3bab773f2d; creation rejected, no Debug record confirmed |
| 150 / 73 | 2026-10-29T18:47:38.715Z | Sell 0.02 SOL to USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x8d88e4764987965628fada4ba4266a1e605482f86a9f08424d313e4e77cd352d; creation rejected, no Debug record confirmed |
| 151 / 74 | 2026-10-29T18:47:46.598Z | Buy USDC to exactly 0.02 SOL, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x81907aba1450e47ce78896bf9464cfadcd52ab5f3e78089c057f9a82f5780f14; creation rejected, no Debug record confirmed |
| 152 / 75 | 2026-10-29T18:47:38.981Z | Sell 0.03 SOL to USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xf8f8ef3dbb264fdda32c18c50a475b10bb96854ff9a7ea9e400f95bfad5c87c0; creation rejected, no Debug record confirmed |
| 153 / 76 | 2026-10-29T18:47:45.329Z | Sell 1.2 USDC to SOL, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xad3be6575d3bcd7e31d0e114a540348ab0aac7ffc952481082b00a184fb1df12; creation rejected, no Debug record confirmed |
| 154 / 77 | 2026-10-29T18:47:46.110Z | Sell 3 USDC to USDT, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x8eb435ab0f46b2338be657c9c6011970ec0db575fc6c652d9afb5119f036ad85; creation rejected, no Debug record confirmed |
| 155 / 78 | 2026-10-29T18:47:46.107Z | Sell 3 USDT to USDC, sponsored | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xcb3bc0a4e6149355a81d5a0a97bb343d22fc99b6ca97bd3ec645b4c2155b087c; creation rejected, no Debug record confirmed |
| 156 / 79 | 2026-10-29T18:47:44.973Z | Sell 1 USDT to USDC, sponsored | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x115e1e8c3b33d652b64b2047cc1448ba3fa71ac0c2f172aeaf2a112503fa3d1a; creation rejected, no Debug record confirmed |
| 157 / 80 | 2026-10-29T18:47:46.413Z | Sell 3 USDC to USDT, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x18f9eb3dad8f4aee4d3aced149715abf8d3f482c41cb7158e8d477b984410440; creation rejected, no Debug record confirmed |
| 158 / 81 | 2026-10-29T18:47:38.954Z | Sell 0.02 SOL to JUP, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xad0abf192547d7a22e6bc572e178a1c7f7b60e4b40b8bf33db7954112acecdfe; creation rejected, no Debug record confirmed |

Cleanup is excluded from planned trade, main fill and transaction totals above. Cleanup placed 0 orders; final states {}.

| Scenario row / trader | UTC timestamp | Cleanup action | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - | - | No recorded placed cleanup order or final leftover | No cleanup failure recorded | No order ID |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 7. Token coverage

Partial token coverage achieved. 2 of 52 planned trades filled; 25 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-18-22-composite-zurui-run`. Scenario UTC: 2026-10-29T18:48:12.268Z to 2026-10-29T18:51:45.799Z. Total transactions: 2, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 2/25 main placed, versus 52 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: 6.935 / 7.011 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

Fixed input sells and exact output buys are separate checks. This exploratory token set exceeds the team confirmed token list; a route failure does not prove permanent token non support.
Fixed input sell flows filled: SOL to JupSOL, SOL to mSOL. Exact output buy flows filled: none.
Team confirmed sell and buy solutions, tested SOL/wSOL, USDC, USDT, JUP, BONK, WIF, JitoSOL and mSOL, and AAPLx/SPYx sell solutions. This test does not expand that claim to every exploratory Token-2022 asset.
Ownership unknown: unfilled main orders were cancelled after the configured 180 second wait, not expired. The full window competition counter reports 159 `SolverFailed` auctions, including acquisitions and cleanup; this cannot be counted as failed orders or attributed to every cancellation. At auction 426430 at 18:35:19.526870611Z the wrapper was `Status { status: 400, body: "{\"kind\":\"SolverFailed\",\"description\":\"Solver engine returned an invalid response\"}" }`. Original response bodies were not present in the driver request records checked. Leading explanation, low confidence: the repeated engine to driver response failures reduced accepted candidates; it is not yet clear whether the engine, protocol parsing or a timeout caused them. The strongest alternative is selection of otherwise valid solutions or uncompetitive prices; the successful waves show a general inability to settle is false. CoW should capture original engine status/body and parse error for one cancelled order auction before asking Zurui for a repair.
Preplacement diagnosis: `NoLiquidity` identifies no usable API quote for that request, not no liquidity for a token. `InvalidTransaction: the bundle must not create the buy token account` rejects the sponsored creation bundle before solver settlement; self paid controls can fill, so CoW should compare that creation template and receiving account handling before assigning solver fault. `SellAmountDoesNotCoverFee` rejects the small quoted trade for execution cost, not a submitted settlement; CoW should check sizing and fee accounting before rerunning. Exact fee shortfall was not preserved. Decoding the original saved sponsored request in standard pairs confirms an 829 byte transaction with an associated token account instruction at index 4 that includes the intended receiving account. It therefore reaches exactly the forbidden creation condition; this supports CoW checking the sponsored creation template, rather than changing the solver route. These mechanisms are certain from stage/message; the underlying response and ownership gaps remain explicit.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 159 / 82 | 2026-10-29T18:48:19.940Z | Sell 0.01 SOL to ANSEM, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x9218617eeab4e3cd4ce49aad842f271daba8ff058009769e4bad7bd187ecf6fb; creation rejected, no Debug record confirmed |
| 160 / 83 | 2026-10-29T18:48:19.983Z | Sell 0.01 SOL to PAID, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x9ab2d7c6cd2920eff3493ddaedc38fca7a0d9e1b10bb49d54e50c40b1044e33f; creation rejected, no Debug record confirmed |
| 161 / 84 | 2026-10-29T18:48:19.743Z | Sell 0.01 SOL to USDG, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xcf11f0ce60741176b7e6d3d7d1714e9ee237ca0dc4b962b6cea31c99f47bb1c5; creation rejected, no Debug record confirmed |
| 162 / 85 | 2026-10-29T18:51:29.908Z | Sell 0.01 SOL to PUMP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x1eded94415e4b294132520a7f5e7cf392c9a0416f400b669e85407d5d16c57aa |
| 163 / 86 | 2026-10-29T18:48:20.250Z | Sell 0.01 SOL to PYUSD, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x01e892f88818ba7dc4b413d270cf12adc4c8831f60883b305126cbf73e959873; creation rejected, no Debug record confirmed |
| 164 / 87 | 2026-10-29T18:48:20.235Z | Sell 0.01 SOL to CASH, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xb4b8a7822d033f2e76d2ef42c6e516142d5a8788337163779077095fc6538ec6; creation rejected, no Debug record confirmed |
| 165 / 88 | 2026-10-29T18:48:20.346Z | Sell 0.01 SOL to CRCLx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x9de94959da385db46ae9cabad673b97bc1d39c69f5a54bc94971c8df0a503c02; creation rejected, no Debug record confirmed |
| 166 / 89 | 2026-10-29T18:51:38.859721504Z | Sell 0.01 SOL to SPYx, self | Ownership unknown; rejected candidate(s), not submitted failure; SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }; main timeout; final cancelled | https://debug.barn.cow.fi/order/0x1784c4d771c7cdd6426e6a6fa9b221c4649de6e8a94d7956bc9402dae4e9c92f |
| 167 / 90 | 2026-10-29T18:48:21.059Z | Sell 0.01 SOL to USDv, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x1f56fa26d2949393c44e39170aec92d114844f6f3007b0a352b9c3ff2df8b8cb; creation rejected, no Debug record confirmed |
| 168 / 91 | 2026-10-29T18:48:20.642Z | Sell 0.01 SOL to SKHY, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x578661e49ae012cee5f5063346cc1b38aa0cd3b583d9a6ed0df1d8cb5bf872bd; creation rejected, no Debug record confirmed |
| 169 / 92 | 2026-10-29T18:48:20.893Z | Sell 0.01 SOL to NVDAx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x185fe67e4093f0cf2a8c810c33831f98ff1b2618ca22bba54c5a403c5f88a1e5; creation rejected, no Debug record confirmed |
| 170 / 93 | 2026-10-29T18:51:40.530Z | Sell 0.01 SOL to MU, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x55f07f7577aa20804adabfafbc542fca4525d5fc6dc1677453c935915935acb9 |
| 171 / 94 | 2026-10-29T18:48:21.012Z | Sell 0.01 SOL to SPCX, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xd23c2c511804db559524768754197e623a19994ace91ac62362eb076b536ee1c; creation rejected, no Debug record confirmed |
| 172 / 95 | 2026-10-29T18:48:21.067Z | Sell 0.01 SOL to SPCXx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x86889d03805505859301cb6f364f00caec701eb18fea9b5fe04841cfd5537fee; creation rejected, no Debug record confirmed |
| 173 / 96 | 2026-10-29T18:48:21.436Z | Sell 0.01 SOL to TSLAx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xe137b790d2dc666809e20bf49534273d0598613887fc657d8c4bb952e64496b7; creation rejected, no Debug record confirmed |
| 174 / 97 | 2026-10-29T18:51:34.514Z | Sell 0.005 SOL to Bonk, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xda181fdbc5e9104c902ccb31535c3bc75dbbf53c86a89f048725de6e68b29a75 |
| 175 / 98 | 2026-10-29T18:51:31.256Z | Sell 0.005 SOL to $WIF, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x3c679ceb4c638d49b7fac45621ed23a823feeff46aab478ede746cc0cff95ca0 |
| 176 / 99 | 2026-10-29T18:51:31.772Z | Sell 0.005 SOL to POPCAT, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x7832e099ddbde3c7a7ee0948ef42fb403f14fa225d806e5de2cdfadfeb42770b |
| 177 / 100 | 2026-10-29T18:51:36.381Z | Sell 0.005 SOL to JitoSOL, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xef83e527ba6748a5e5ba2d72f3bba4d7adca90bbc05e54c870d2f80e1fe6ee3e |
| 178 / 101 | 2026-10-29T18:48:25.163Z | Sell 0.005 SOL to mSOL, self | final fulfilled | https://debug.barn.cow.fi/order/0x172c01fc261b711c5abb4d3890515902ff446206cfe3d9c50109cb348375a631 |
| 179 / 102 | 2026-10-29T18:48:25.265Z | Sell 0.005 SOL to JupSOL, self | final fulfilled | https://debug.barn.cow.fi/order/0x08848a2246f082c91eafa7e24843f2782c399d6b8ac7ffccb0ec39cd8e764a31 |
| 180 / 103 | 2026-10-29T18:51:32.991Z | Sell 0.005 SOL to cbBTC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x25b37924527fcf1d6d9c9ae9b8cc70addf2cc823b6497af89c4a56375a2aacb8 |
| 181 / 104 | 2026-10-29T18:51:38.889Z | Sell 0.005 SOL to USDe, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x67c10348d7f051cac395c9fc373d2aca21f370ee1c48a6d12581c8672ad7dea5 |
| 182 / 105 | 2026-10-29T18:51:35.337Z | Sell 0.005 SOL to EURC, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x52ef115f2a89698172fd3d64743391cb8d6a476d8ba906b97763ada24deb5b6d |
| 183 / 106 | 2026-10-29T18:51:36.177Z | Sell 0.005 SOL to USDY, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x65e624d950b40da111d909d5d02dfba6d15ecbe0d2c512be5f91f66187312591 |
| 184 / 107 | 2026-10-29T18:51:40.351Z | Sell 0.005 SOL to JLP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x42927c26adf71fa7906e832de4a11f6fc228dabd083ba528f7e8a657721eda8e |
| 185 / 108 | 2026-10-29T18:51:40.731Z | Sell 0.005 SOL to INF, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x17f0e03c1bedc86360c89b2f8d151b046f533f83e5c4581e8a8f89d2e21963de |
| 186 / 109 | 2026-10-29T18:51:37.581Z | Sell 0.005 SOL to ETH, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x8439a8f93ff8404b57d41c9023dd58a9e2e91ea20157cadbfde982321a85067a |
| 187 / 110 | 2026-10-29T18:51:38.859705158Z | Sell 0.005 SOL to BNB, self | Ownership unknown; rejected candidate(s), not submitted failure; SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }; main timeout; final cancelled | https://debug.barn.cow.fi/order/0x11496d4d6792223389c98215974083c8af5838a5036327f49ae0c1e086fc9b34 |
| 188 / 111 | 2026-10-29T18:51:35.990Z | Sell 0.005 SOL to XAUt0, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xfe1824b26c46321640e9f05d9777d9f143401ac75f2c0430fc345c8a5a041286 |
| 189 / 112 | 2026-10-29T18:51:36.890Z | Sell 0.005 SOL to GLDx, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0xbaceaaef2568107a55de2d564a6ea50967d289123ae2a02b87005346bf789962 |
| 190 / 113 | 2026-10-29T18:51:41.071Z | Sell 0.005 SOL to EUROP, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x48ee891d814a6831127c0046180afdedafe3ff508bb1a57d3cf3f16702657bb3 |
| 191 / 114 | 2026-10-29T18:51:37.788Z | Sell 0.005 SOL to Fartcoin, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x1c9c3f1c656a8942a92b418fe776aa367886b88fa13ed799b2a12aade3321994 |
| 192 / 115 | 2026-10-29T18:51:37.655Z | Sell 0.005 SOL to MEW, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x55d7d558a78d6ee37963a73c05e22cd550c4571586be4d728b91982d8c917618 |
| 193 / 116 | 2026-10-29T18:51:38.908Z | Sell 0.005 SOL to BOME, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x8652bbe20d27428c743dbe6f12f99fbda8cc49d4674494d2e0f55f822f1310eb |
| 194 / 117 | 2026-10-29T18:51:38.484Z | Sell 0.005 SOL to hyloSOL, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x4a0c1a6e3e1d7390de12616f482b82f4f47ac2df493b0fe76d476c9dc0c49495 |
| 195 / 118 | 2026-10-29T18:51:41.317Z | Sell 0.005 SOL to PSOL, self | main timeout; final cancelled | https://debug.barn.cow.fi/order/0x4c53a6381bf48ae9ec88e1b3ede6ef8548e414ef0d66ef38194d06a1df6da717 |
| 196 / 82 | 2026-10-29T18:48:23.650Z | Buy SOL to exactly 3.26 ANSEM, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 197 / 83 | 2026-10-29T18:48:23.875Z | Buy SOL to exactly 88.1 PAID, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 198 / 84 | 2026-10-29T18:48:23.615Z | Buy SOL to exactly 0.464 USDG, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 199 / 85 | 2026-10-29T18:51:30.482Z | Buy SOL to exactly 71.6 PUMP, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 200 / 86 | 2026-10-29T18:48:24.263Z | Buy SOL to exactly 0.464 PYUSD, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 201 / 87 | 2026-10-29T18:48:24.050Z | Buy SOL to exactly 0.464 CASH, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 202 / 88 | 2026-10-29T18:48:24.472Z | Buy SOL to exactly 0.00574 CRCLx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 203 / 89 | 2026-10-29T18:51:40.846Z | Buy SOL to exactly 0.000597 SPYx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 204 / 90 | 2026-10-29T18:48:25.355Z | Buy SOL to exactly 0.464 USDv, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 205 / 91 | 2026-10-29T18:48:24.670Z | Buy SOL to exactly 0.0026 SKHY, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 206 / 92 | 2026-10-29T18:48:24.853Z | Buy SOL to exactly 0.00196 NVDAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 207 / 93 | 2026-10-29T18:51:40.680Z | Buy SOL to exactly 0.000427 MU, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 208 / 94 | 2026-10-29T18:48:25.118Z | Buy SOL to exactly 0.00276 SPCX, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 209 / 95 | 2026-10-29T18:48:25.564Z | Buy SOL to exactly 0.00277 SPCXx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 210 / 96 | 2026-10-29T18:48:25.656Z | Buy SOL to exactly 0.00123 TSLAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
CoW program `EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb` returned Custom(15); no name is assigned without deployed program evidence.

Candidate simulation diagnosis (all available distinct attempts):

| UTC / auction / solution | Order / final state | First failing program and exact error |
| --- | --- | --- |
| 2026-10-29T18:51:38.859705158Z / 426625 / 0 | https://debug.barn.cow.fi/order/0x11496d4d6792223389c98215974083c8af5838a5036327f49ae0c1e086fc9b34; cancelled | Some("EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb"); SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }; program logs `Some([])` |
| 2026-10-29T18:51:38.859721504Z / 426625 / 1 | https://debug.barn.cow.fi/order/0x1784c4d771c7cdd6426e6a6fa9b221c4649de6e8a94d7956bc9402dae4e9c92f; cancelled | Some("EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb"); SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }; program logs `Some([])` |

Ownership unknown. These attempts stopped in simulation, with no failed submitted transaction signature to inspect by RPC. The empty saved `logs/settle_failures.txt` missed them; supplemental staging Grafana reads joined each order, auction, solution and first failing program, rather than treating the export as proof of no failures.
The first failing CoW instruction or Jupiter instruction is identified above, but its exact account state and rejected instruction bytes are absent. Numeric code alone does not prove repair ownership.
Leading explanation, low confidence: the order account state or settlement instruction was no longer usable at simulation time. Cancellation timing is a plausible alternative to construction error because all affected orders ended cancelled, but the logs do not identify when cancellation took effect. CoW should compare the account state at the simulated slot with the cancellation confirmation before assigning a solver repair. A later final cancellation does not prove it caused an earlier rejection.
No full serialized failed transaction was available for this scenario; no transaction size cause is established.

Cleanup is excluded from planned trade, main fill and transaction totals above. Cleanup placed 2 orders; final states {'fulfilled': 2}.

| Scenario row / trader | UTC timestamp | Cleanup action | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 102 | 2026-10-29T18:51:59.626Z | jupSoL to SOL, raw sell 4105475 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x164bd3744c478739bcabc34359797d18dfe07c68597a6cd6a14d0dbc1fe6425b |
| - / 101 | 2026-10-29T18:52:00.006Z | mSoLzY to SOL, raw sell 3532282 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xe14eda4b5afd567a36ea6bd0b4cb05bbc7e7cf4f3b7b7e498dcbbd7dfe5ebcdc |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>

## 8. xStocks

Partial fixed input xStock purchases achieved. 9 of 86 planned trades filled; 9 main order(s) reached placement.

<details>
<summary>Order evidence and metrics</summary>

Source session: `2026-10-29-18-22-composite-zurui-run`. Scenario UTC: 2026-10-29T18:52:59.863Z to 2026-10-29T18:53:50.939Z. Total transactions: 9, counting successful main settlements only; acquisitions, cleanup, creation, funding and rejected candidates are excluded. Main fills: 9/9 main placed, versus 86 planned. Acquisitions: 0 placed, 0 filled. Median / longest main fill: 9.650 / 10.189 seconds.

Timing runs from the journal placed event to the observed fulfilled event and includes polling delay. Successful examples use placement UTC; errors use their first failure UTC where available. Source row numbers are internal traceability only.

These are SOL funded purchases of xStocks with fixed SOL input. They do not demonstrate selling AAPLx or SPYx back to SOL, and no exact output xStock buy filled.
Fixed input sell flows filled: SOL to BRK.Bx, SOL to COINx, SOL to GOOGLx, SOL to INTCx, SOL to KOx, SOL to MSFTx, SOL to SNDKx, SOL to TSMx, SOL to UNHx. Exact output buy flows filled: none.
Team confirmed sell and buy solutions, tested SOL/wSOL, USDC, USDT, JUP, BONK, WIF, JitoSOL and mSOL, and AAPLx/SPYx sell solutions. This test does not expand that claim to every exploratory Token-2022 asset.
Preplacement diagnosis: `NoLiquidity` identifies no usable API quote for that request, not no liquidity for a token. `InvalidTransaction: the bundle must not create the buy token account` rejects the sponsored creation bundle before solver settlement; self paid controls can fill, so CoW should compare that creation template and receiving account handling before assigning solver fault. `SellAmountDoesNotCoverFee` rejects the small quoted trade for execution cost, not a submitted settlement; CoW should check sizing and fee accounting before rerunning. Exact fee shortfall was not preserved. Decoding the original saved sponsored request in standard pairs confirms an 829 byte transaction with an associated token account instruction at index 4 that includes the intended receiving account. It therefore reaches exactly the forbidden creation condition; this supports CoW checking the sponsored creation template, rather than changing the solver route. These mechanisms are certain from stage/message; the underlying response and ownership gaps remain explicit.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 211 / 119 | 2026-10-29T18:53:02.739Z | Sell 0.0025 SOL to CRCLx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x0d91a56eca7a69799d890a6c20c717320393aea8529dcc80dbe438503d4a5a74; creation rejected, no Debug record confirmed |
| 212 / 120 | 2026-10-29T18:53:02.735Z | Sell 0.0025 SOL to SPCXx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x76647b20a86b16f8f9dffc059177017f730380ef484f6838977119c5eadd5428; creation rejected, no Debug record confirmed |
| 213 / 121 | 2026-10-29T18:53:02.930Z | Sell 0.0025 SOL to QQQx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xf0a2750642e58e978a8f8645a90fa9c6c9bd5b9828c10af12deabb565a873e00; creation rejected, no Debug record confirmed |
| 214 / 122 | 2026-10-29T18:53:04.856Z | Sell 0.0025 SOL to MSFTx, self | final fulfilled | https://debug.barn.cow.fi/order/0xc5328f3c2ec42df5aed1c0330d3764d91d9e2fcf27d1ebf3a8c983da9e27bd37 |
| 215 / 123 | 2026-10-29T18:53:03.037Z | Sell 0.0025 SOL to GMEx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xded0db6a00cbbec02dcf48774b4cf1d2356d2bd4256f86f419704ef1a2b29d25; creation rejected, no Debug record confirmed |
| 216 / 124 | 2026-10-29T18:53:03.223Z | Sell 0.0025 SOL to MCDx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x496d8fffc8796fe92bac890f0b58803e25f772160d01735969e68b1425adc785; creation rejected, no Debug record confirmed |
| 217 / 125 | 2026-10-29T18:53:03.507Z | Sell 0.0025 SOL to PLTRx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xce8a0fd125d6221118a23d54b39d482135782bf3ba7891028097220405a67bd8; creation rejected, no Debug record confirmed |
| 218 / 126 | 2026-10-29T18:53:05.459Z | Sell 0.0025 SOL to INTCx, self | final fulfilled | https://debug.barn.cow.fi/order/0xdddb80f3ead3eb78ca4970a3dd0ebb3876380dd64228041fe540949f7d49120a |
| 219 / 127 | 2026-10-29T18:53:03.704Z | Sell 0.0025 SOL to ORCLx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xcc6dcd355ab49dc45341a44713fc08361dda75c63026e35bf9f4d5307641baa8; creation rejected, no Debug record confirmed |
| 220 / 128 | 2026-10-29T18:53:04.021Z | Sell 0.0025 SOL to AVGOx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xfade7facf8260654e62d3ad7df5642fd21da8481869901440682b5b6741e75df; creation rejected, no Debug record confirmed |
| 221 / 129 | 2026-10-29T18:53:04.136Z | Sell 0.0025 SOL to XOMx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x7ea9fbd88c232640c8efc083f223c9c7926a2275d3b591f3238d77ccc33b60e3; creation rejected, no Debug record confirmed |
| 222 / 130 | 2026-10-29T18:53:06.063Z | Sell 0.0025 SOL to UNHx, self | final fulfilled | https://debug.barn.cow.fi/order/0x4db53eec817ff9942f67b0146623dc398e8071b6c0db6e63a708d1329691b2f2 |
| 223 / 131 | 2026-10-29T18:53:04.330Z | Sell 0.0025 SOL to NVOx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xb5ad5ffaaf8ff8930b7bd8d9f6cbad25ede3161b886a5d48976f7eeba5c1377f; creation rejected, no Debug record confirmed |
| 224 / 132 | 2026-10-29T18:53:04.726Z | Sell 0.0025 SOL to UBERx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x7be3fc05d29de508d2e89a83c37224007597fd4c499cd0b70a069ff0e68e911e; creation rejected, no Debug record confirmed |
| 225 / 125 | 2026-10-29T18:53:13.713Z | Sell 0.00078292 PLTRx to SOL, sponsored | acquire XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xd993423bcb52023489c00b8d21446747c9f99d39386174995dc21b9474ad9b19; creation rejected, no Debug record confirmed |
| 226 / 119 | 2026-10-29T18:53:04.266Z | Buy SOL to exactly 0.00321248 CRCLx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 227 / 120 | 2026-10-29T18:53:04.088Z | Buy SOL to exactly 0.00165941 SPCXx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 228 / 121 | 2026-10-29T18:53:04.671Z | Buy SOL to exactly 0.0003632 QQQx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 229 / 122 | 2026-10-29T18:53:13.049Z | Buy SOL to exactly 0.0004981 MSFTx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 230 / 123 | 2026-10-29T18:53:04.665Z | Buy SOL to exactly 0.00995113 GMEx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 231 / 124 | 2026-10-29T18:53:04.838Z | Buy SOL to exactly 0.00112024 MCDx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 232 / 125 | 2026-10-29T18:53:14.445Z | Buy SOL to exactly 0.00130486 PLTRx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 233 / 126 | 2026-10-29T18:53:13.236Z | Buy SOL to exactly 0.00270181 INTCx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 234 / 127 | 2026-10-29T18:53:05.208Z | Buy SOL to exactly 0.00191264 ORCLx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 235 / 128 | 2026-10-29T18:53:05.809Z | Buy SOL to exactly 0.00076666 AVGOx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 236 / 129 | 2026-10-29T18:53:05.454Z | Buy SOL to exactly 0.00156561 XOMx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 237 / 130 | 2026-10-29T18:53:16.035Z | Buy SOL to exactly 0.00068993 UNHx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 238 / 131 | 2026-10-29T18:53:05.652Z | Buy SOL to exactly 0.00702429 NVOx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 239 / 132 | 2026-10-29T18:53:06.460Z | Buy SOL to exactly 0.00379726 UBERx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 240 / 119 | 2026-10-29T18:53:06.938Z | Sell 0.0025 SOL to SPYx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x70d7739614fc9b56f79adc26e5d7f478701e0b2564489e75e0f638ca382d11a2; creation rejected, no Debug record confirmed |
| 241 / 120 | 2026-10-29T18:53:06.650Z | Sell 0.0025 SOL to TSLAx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x89a0e81b1c6a2e291bb0ee7efa5d6ee55a25b0d5ddcada058dd0c19a7c9c162c; creation rejected, no Debug record confirmed |
| 242 / 121 | 2026-10-29T18:53:07.227Z | Sell 0.0025 SOL to METAx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x6b2a708400d38f1bee6994781aa6d64f4813ab049296fda794b567930848cc1b; creation rejected, no Debug record confirmed |
| 243 / 122 | 2026-10-29T18:53:15.537Z | Sell 0.0025 SOL to GOOGLx, self | final fulfilled | https://debug.barn.cow.fi/order/0xfc3dad43cf53324c66c70e68055e458e219d81428327c81abbefc8ae652966d1 |
| 244 / 123 | 2026-10-29T18:53:07.028Z | Sell 0.0025 SOL to HOODx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x786e09e87ba548db3cf431e3b424e5f1d85282afba49a41db4fad4c22a9a1e34; creation rejected, no Debug record confirmed |
| 245 / 124 | 2026-10-29T18:53:07.421Z | Sell 0.0025 SOL to AMZNx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x3f634112cb820be116803758dca5f81990663fc663a8a4cde1403664d0c7046b; creation rejected, no Debug record confirmed |
| 246 / 125 | 2026-10-29T18:53:15.512Z | Sell 0.0025 SOL to VIDAx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x27b25f948aa9ec90f22a4610300ca006748735913d2abccf0a300e5126747f09; creation rejected, no Debug record confirmed |
| 247 / 126 | 2026-10-29T18:53:15.892Z | Sell 0.0025 SOL to KOx, self | final fulfilled | https://debug.barn.cow.fi/order/0x9344e8970e48931e87a690be29aeb7009b33ba0be558165c9e77d0698d5b91cf |
| 248 / 127 | 2026-10-29T18:53:07.639Z | Sell 0.0025 SOL to MUx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xd55844f23252b1341ae189f0c608faf4692b27570f29d4f896726de801a4198e; creation rejected, no Debug record confirmed |
| 249 / 128 | 2026-10-29T18:53:08.426Z | Sell 0.0025 SOL to WMTx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x82896e7d9f1c18eed4d99ca12e5d2e67a5310a62028c514f5a1c29576456f413; creation rejected, no Debug record confirmed |
| 250 / 129 | 2026-10-29T18:53:07.670Z | Sell 0.0025 SOL to AMDx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x4e37a0bdb5c1755640da3f49b619b196fd7ec19865afc7c17f711c13f9d5464d; creation rejected, no Debug record confirmed |
| 251 / 130 | 2026-10-29T18:53:18.953Z | Sell 0.0025 SOL to TSMx, self | final fulfilled | https://debug.barn.cow.fi/order/0xff8a0f974466230286ac7e690e311a93ee89a9c57d8e224526a5f5b8ca3fd494 |
| 252 / 131 | 2026-10-29T18:53:07.463Z | Sell 0.0025 SOL to XsXb7KCxcxTi6hqWfYyEe1kpTwtiCeU5TJbEz8N7RWn, sponsored | main error: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 253 / 132 | 2026-10-29T18:53:08.747Z | Sell 0.0025 SOL to LLYx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xff21a56e6b4dd4816c4be5833e528499275a613e8825ffe51eecc27c1f0c3b38; creation rejected, no Debug record confirmed |
| 254 / 119 | 2026-10-29T18:53:15.057Z | Sell 0.00020765 SPYx to SOL, sponsored | acquire XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x647183f650dd789f47612aab4fbce334e05f04292449249af9afd235f344da12; creation rejected, no Debug record confirmed |
| 255 / 119 | 2026-10-29T18:53:15.176Z | Buy SOL to exactly 0.00034609 SPYx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 256 / 120 | 2026-10-29T18:53:07.645Z | Buy SOL to exactly 0.00072217 TSLAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 257 / 121 | 2026-10-29T18:53:08.670Z | Buy SOL to exactly 0.00036664 METAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 258 / 122 | 2026-10-29T18:53:25.355Z | Buy SOL to exactly 0.00076634 GOOGLx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 259 / 123 | 2026-10-29T18:53:08.185Z | Buy SOL to exactly 0.00247816 HOODx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 260 / 124 | 2026-10-29T18:53:08.640Z | Buy SOL to exactly 0.00104887 AMZNx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 261 / 125 | 2026-10-29T18:53:15.747Z | Buy SOL to exactly 0.20269702 VIDAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 262 / 126 | 2026-10-29T18:53:25.582Z | Buy SOL to exactly 0.00293543 KOx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 263 / 127 | 2026-10-29T18:53:08.838Z | Buy SOL to exactly 0.00028462 MUx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 264 / 128 | 2026-10-29T18:53:09.996Z | Buy SOL to exactly 0.00236142 WMTx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 265 / 129 | 2026-10-29T18:53:09.038Z | Buy SOL to exactly 0.00047014 AMDx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 266 / 130 | 2026-10-29T18:53:28.810Z | Buy SOL to exactly 0.00060557 TSMx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 267 / 132 | 2026-10-29T18:53:10.152Z | Buy SOL to exactly 0.00023241 LLYx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 268 / 119 | 2026-10-29T18:53:15.743Z | Sell 0.0025 SOL to NVDAx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xc86aa11e4c119704e6d624a27f865cc3f7c8a89198ba679f5ec3d2925b13b065; creation rejected, no Debug record confirmed |
| 269 / 120 | 2026-10-29T18:53:10.017Z | Sell 0.0025 SOL to MSTRx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xd5dc46435c919d5442ee091a3e8f89997e85ee00c01c92f566e2f9eee9d38ea7; creation rejected, no Debug record confirmed |
| 270 / 121 | 2026-10-29T18:53:10.804Z | Sell 0.0025 SOL to GLDx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x11c9880410d8060ea32257508b60c4ad27817e8520be6f447565eceb5cbf07e0; creation rejected, no Debug record confirmed |
| 271 / 122 | 2026-10-29T18:53:27.536Z | Sell 0.0025 SOL to COINx, self | final fulfilled | https://debug.barn.cow.fi/order/0x455e4840eb34c6e4e31e05ec0e03d7ef8d91f4727c176c7454347391f57657a1 |
| 272 / 123 | 2026-10-29T18:53:10.255Z | Sell 0.0025 SOL to AAPLx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xe6681c33e8be5fd0b837e49b75a60e7ed4a39f6691ef5482f7e9e8ebd7d32e09; creation rejected, no Debug record confirmed |
| 273 / 124 | 2026-10-29T18:53:11.026Z | Sell 0.0025 SOL to STRCx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x1997270fb9cda216829171ab63855304469e307079fdd09ac4b7fa26c87173a3; creation rejected, no Debug record confirmed |
| 274 / 125 | 2026-10-29T18:53:16.546Z | Sell 0.0025 SOL to DFDVx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x5eed78314d00c37a1553639b24f737c1723a0f6675f9718ab9ba37d7d842b154; creation rejected, no Debug record confirmed |
| 275 / 126 | 2026-10-29T18:53:27.636Z | Sell 0.0025 SOL to BRK.Bx, self | final fulfilled | https://debug.barn.cow.fi/order/0x37f448224cfec018d31597b8f6b4f1e3ca9d0c0da71786f746bc66253803ca7b |
| 276 / 127 | 2026-10-29T18:53:11.060Z | Sell 0.0025 SOL to TQQQx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xf1bcf13b0a33e143954a8be88fb349689214e44e0237821ae0a0a94f1bb1b7bd; creation rejected, no Debug record confirmed |
| 277 / 128 | 2026-10-29T18:53:11.997Z | Sell 0.0025 SOL to NFLXx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x6cae8a782cc679f8b0786624be31ab61cf3bb9b69053c75416b46c2f9f4c02d4; creation rejected, no Debug record confirmed |
| 278 / 129 | 2026-10-29T18:53:11.165Z | Sell 0.0025 SOL to MRVLx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x2a62f30e76f03e78f72794ad0703c088778ec3ee2aa727ed8a161c0d69644271; creation rejected, no Debug record confirmed |
| 279 / 130 | 2026-10-29T18:53:30.717Z | Sell 0.0025 SOL to SNDKx, self | final fulfilled | https://debug.barn.cow.fi/order/0x24a86f7d798b34fafb38c2081e66878fa07a5f54445b4545ac18bffb54473f8e |
| 280 / 131 | 2026-10-29T18:53:09.663Z | Sell 0.0025 SOL to SKHYx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0xefeb87d172953c8f3a7e277f21faa7c1e7a77f994c65be3fbdb84b5b30c24d54; creation rejected, no Debug record confirmed |
| 281 / 132 | 2026-10-29T18:53:12.210Z | Sell 0.0025 SOL to BMNRx, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x898226e6c0b54d68fcb5eb91705d825e9f3ba43de3cc3cdc68bd3a91bad4266f; creation rejected, no Debug record confirmed |
| 282 / 128 | 2026-10-29T18:53:18.818Z | Sell 0.00022735 NFLXx to SOL, sponsored | acquire XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account; no main order created | Prepared UID 0x45f1a82ec0b55b4cfc437558c5c1d372fbd1b6069f3e78741afa787ff346cc38; creation rejected, no Debug record confirmed |
| 283 / 119 | 2026-10-29T18:53:15.831Z | Buy SOL to exactly 0.00120141 NVDAx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 284 / 120 | 2026-10-29T18:53:11.246Z | Buy SOL to exactly 0.00174356 MSTRx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 285 / 121 | 2026-10-29T18:53:12.415Z | Buy SOL to exactly 0.00070541 GLDx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 286 / 122 | 2026-10-29T18:53:37.399Z | Buy SOL to exactly 0.00148708 COINx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 287 / 123 | 2026-10-29T18:53:11.661Z | Buy SOL to exactly 0.00078968 AAPLx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 288 / 124 | 2026-10-29T18:53:12.470Z | Buy SOL to exactly 0.00248053 STRCx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 289 / 125 | 2026-10-29T18:53:16.637Z | Buy SOL to exactly 0.06056963 DFDVx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 290 / 126 | 2026-10-29T18:53:37.915Z | Buy SOL to exactly 0.00052262 BRK.Bx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 291 / 127 | 2026-10-29T18:53:12.655Z | Buy SOL to exactly 0.00172031 TQQQx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 292 / 128 | 2026-10-29T18:53:18.902Z | Buy SOL to exactly 0.00037893 NFLXx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 293 / 129 | 2026-10-29T18:53:12.830Z | Buy SOL to exactly 0.00106586 MRVLx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 294 / 130 | 2026-10-29T18:53:40.896Z | Buy SOL to exactly 0.00018281 SNDKx, self | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 295 / 131 | 2026-10-29T18:53:11.315Z | Buy SOL to exactly 0.00170138 SKHYx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |
| 296 / 132 | 2026-10-29T18:53:13.680Z | Buy SOL to exactly 0.01072636 BMNRx, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found; no main order created | No order ID: failed before main placement |

Cleanup is excluded from planned trade, main fill and transaction totals above. Cleanup placed 9 orders; final states {'fulfilled': 9}.

| Scenario row / trader | UTC timestamp | Cleanup action | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 126 | 2026-10-29T18:53:54.676Z | Xs6B6z to SOL, raw sell 45985 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x57e7e18ba8908fd4598573e03c8f1489ea3c7ebd797b5ec734074753a2f4cb56 |
| - / 126 | 2026-10-29T18:53:55.336Z | XshPgP to SOL, raw sell 274377 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x3b16aa1c299ddc63170b02b3ec735051137c8dc1011bc7b49eadd2d9da633301 |
| - / 126 | 2026-10-29T18:53:55.632Z | XsaBXg to SOL, raw sell 264669 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x037d57429be722dbe21602736ab3312f23922423157485201c117ab4a7214b5b |
| - / 130 | 2026-10-29T18:53:58.276Z | Xswbpc to SOL, raw sell 18845 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xf1d1684847d2d88d6dd83fd1bc0698b740fb5785348c2b845e2f74fea79dfbe2 |
| - / 130 | 2026-10-29T18:53:58.575Z | Xsafvs to SOL, raw sell 57620 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x26947dc3976f72134a1539de5995abd17178ae069967f5a877be046cb5432ed0 |
| - / 130 | 2026-10-29T18:53:58.676Z | Xszvai to SOL, raw sell 59111 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0xd8a5f4a3a7791682b2841620ed5760f4c150bddb356dc46acee2d8b0c0bbbd3d |
| - / 122 | 2026-10-29T18:54:01.024Z | XspzcW to SOL, raw sell 47188 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x30239dcc7b5438cd6a5f75927169516d5b06b0236f64ad61de6420d8f935e448 |
| - / 122 | 2026-10-29T18:54:01.115Z | Xs7Zdz to SOL, raw sell 157822 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x404bcc13846892542653e6a0e9bb67c7ecec902fd12428975dbc5eaf9154235e |
| - / 122 | 2026-10-29T18:54:04.464Z | XsCPL9 to SOL, raw sell 88278 | final fulfilled; observed fulfilled | https://debug.barn.cow.fi/order/0x39f505ff1c5e8ffc9993fb1a0622545085c3c2c3bf3b17999ec35353cc9ecf99 |

Evidence basis: saved metadata, scenario CSV, raw journal, final orders and successful settlement signatures. Authenticated `/api/datasources` verified staging datasource UID `vm-auth-staging` before supplemental reads. Read only historical logs and RPC were used; no quotes, orders or trades were replayed. No original engine body, rejected instruction bytes or richer failed program logs were recoverable in the checked traces, so the report does not claim a proven solver repair.

</details>
