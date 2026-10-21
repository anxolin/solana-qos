# Rizzolver solver test report

Date: 21 October 2026. Environment: staging / Barn, Solana mainnet. Selected session: 08:52:30–09:24:37 UTC; order snapshot fetched 09:30:03 UTC. Wintermute / Rizzolver.

**TLDR:** 121/127 planned trade flows completed normally (95.28%); 122/127 main orders eventually filled, including 1 recovered after a timeout. JUP and all sponsored cases worked, but 5 burst orders stayed cancelled and 4 last-look settlement rejections later recovered. Batching is a known and accepted limitation; check the remaining cancellations and last-look responses. Final cleanup hit 26 account-orders API errors and remains pending for 27 traders.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Achieved; 6/6 flows | Wintermute + integration: explain last-look rejections |
| 2. SOL/JUP sells and exact buys | Achieved; 4/4 flows | Check quote and execution consistency |
| 3. 25 same-direction sells | Completion achieved; 25/25 individually | Keep serial timing separate from batching |
| 4. Sell bursts | Partial; 78/84 flows, 79 orders filled | Check cancelled low-size orders and delayed observations |
| 5. Fresh accounts | Trading achieved; 8/8 flows | Test team: verify creation-time rent payment |

## Changes since 21 October 2026, 07:07 UTC

On the 123 matching planned rows, normal completion rose from 60/123 to 117/123; 4 additional SOL/JUP cases also passed.

<details>
<summary>Comparison with the previous run</summary>

Baseline: the checked 07:07–07:35 UTC Rizzolver report from the same day and environment. Its original session artifacts are no longer present locally; baseline details rely on that report.

| Metric | Earlier run | Current run |
| --- | --- | --- |
| Matching flows: standard, 25 sells, bursts, fresh | 60/123 | 117/123 |
| Matching placed scenario orders / filled | 96 / 60 | 125 / 120, including 2 acquisitions and 1 recovered fill |
| Standard / 25 sells / fresh completion | 2/6; 0/25; 4/8 | 6/6; 25/25; 8/8 |
| Burst completion / eventual fills | 54/84; 54 | 78/84; 79 |
| Sponsored scenario orders filled | 0/20 | 10/10 |
| Current JUP-focused additions | Not scheduled | 4/4 |

The full suite changed from 200 to 127 planned rows: unsupported-token, CoW and size scenarios were removed, and 4 SOL/JUP cases added. Timeout increased from 60 to 180 seconds; this is not a controlled speed comparison. All settlements remain single-order. Current token sell coverage includes JUP→USDC and SOL→JUP; exact buys of JUP, USDC and USDT succeeded. This does not prove support for excluded tokens.

Newly recorded error type: 4 `SolverFailed: last look failed` settle responses, with missing `txSignature` decoding errors; all affected orders later filled. Newly affected timeout orders are listed in the burst evidence; timeout itself occurred previously. Recovered examples: row 4 buys exactly 0.25 USDC paying SOL, row 11 sells 0.005 SOL→JUP, and row 121 sells 0.1 SOL→USDC with sponsored creation: [Order](https://debug.barn.cow.fi/order/0x3b64f906c01dc14ebbd827090aa957b1b812f32b31d83a6a80c1db22f350a864), [Order](https://debug.barn.cow.fi/order/0x65a71136bee6c979cb476ece982438226e9688c68715caeed5a78feeaa8c4eb0), [Order](https://debug.barn.cow.fi/order/0xb71b6fd12ad5bccd1ee673323e71173bf043e849e5101e8c66d558feb3d0cb27).

New cleanup errors: 26 HTTP 502/503 account-orders failures; trader 3’s residual JUP quote changed from `NoLiquidity` to `SellAmountDoesNotCoverFee`. These are separate from main-trade fills.

</details>

## 1. Standard pairs

Achieved: all 6 flows completed, including JUP and sponsored exact buys.
Two sponsored settlements were rejected by last-look checks before later fills.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 8. Median / longest fill: 3.308 / 47.162 seconds. Placed scenario orders: 8; final filled: 8.

Overall: 121/127 normal flow completions; 122/127 main orders eventually filled. Including 2 prerequisite acquisitions, 124/129 placed scenario orders filled across 124 distinct successful settlements. No scenario request failed before placement, and no transfer-fee probes were scheduled. Median / longest observed fill: 37.840 / 427.888 seconds. Cleanup is excluded from these counts. Timing is local placement → observed fulfilled status, including polling/service delays; recovered row 96 is included using its later observed-fill timestamp. Error rows use their first failure time; other examples use placement time.

All 5 trading phases finished and a final cleanup pass ran; `finished=false` records pending cleanup, not unfinished trading. Only Rizzolver appears in saved competition records; all 196 saved successful settlements, including cleanup, use its configured solver wallet. This establishes participation for these transactions, not permanent environment isolation.

Four settle calls returned `{"kind":"SolverFailed","description":"last look failed"}`; wrapper: missing field `txSignature` (line 1, column 56). These are solver last-look rejections, not demonstrated failed on-chain swaps; no failed transaction signature was returned. The exact rejection condition and why the error response was parsed as a success response remain unknown. The integration/solver response contract needs checking. Four later deadline warnings refer to the same failed attempts and are not 4 additional failures or proof of slow responses.

In auction 364151, rows 4 and 5 failed before later fills. The acquisition on row 3 succeeded in that auction, identified by its successful transaction signature; it is not counted as a failed attempt. Successful executions below also show the JUP→USDC path worked; a suspicious earlier quote-only preview is not an executed price in this run.

**Ownership unknown:** 11 window-wide quote warnings at 09:07:07 said `driver quote response malformed`, missing `sellAmount` (line 1, columns 57/60). All selected scenario requests got usable quotes; those warnings are not joined to a failed test request, and must not be counted as 11 failed trades. A price-source warning said `no quote succeeded`; its effect on these orders is unverified.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 08:52:32.794 UTC | Sell 0.005 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | fulfilled; [transaction](https://solscan.io/tx/3miMwhksM68UhqGoSeVQ1vhEUn3d6ydTtYm6bp6pmXxpqZ2Wgf1WujmTNCQGr4vjaqGkbnQVU2yZbq4LYG2BWZRK); executed sell 5000000 / buy 532160 base units | [Order](https://debug.barn.cow.fi/order/0x26d04d83ee4fa35bd4d97ef5f96f8b63d76370eb77aad0146788790d731243f7) |
| 3 / 3 | 08:52:43.750 UTC | Sell 0.5 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | fulfilled; [transaction](https://solscan.io/tx/22X79PL5ULgH2cuqxE4UGx2nKr3L6kECcNWRii46Yq18y131DsJ8UqUj9g9sMkeNWJdMTiMwiHv3CiZMnoPtZtui); executed sell 500000 / buy 159034 base units | [Order](https://debug.barn.cow.fi/order/0x8d4262332818e7aef01a225dab7b06bad19add18c3161ac1b4d768d31b0cd467) |
| 4 / 1 | 08:52:40.598700076 UTC | Buy [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.25 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | `{"kind":"SolverFailed","description":"last look failed"}`; wrapper: missing field `txSignature` (line 1, column 56); auction / solution 364151 / 0; later fulfilled; [transaction](https://solscan.io/tx/2EtcQqnpHxpz32nvs1iPFUxcBGR6XZ5F9iF8C9it4xJnty7is6C7iLAVAQ5o9Ak57qhiczPCrWPCkXg3uoLy2xKo); executed sell 2355476 / buy 250000 base units | [Order](https://debug.barn.cow.fi/order/0x3b64f906c01dc14ebbd827090aa957b1b812f32b31d83a6a80c1db22f350a864) |
| 5 / 2 | 08:52:40.598700125 UTC | Buy [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.25 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | `{"kind":"SolverFailed","description":"last look failed"}`; wrapper: missing field `txSignature` (line 1, column 56); auction / solution 364151 / 2; later fulfilled; [transaction](https://solscan.io/tx/3bcfeWVJCJRS2NUEc7LnRWsayKCaVtUukXHFFEPf6GGP9szbtRWERna6WbgmUBkXTqiRsSn4mYnZRsCsUS2VyWJv); executed sell 2353042 / buy 250000 base units | [Order](https://debug.barn.cow.fi/order/0xb964fe6bd6b0113d55242aa821b8dd17b1a5560ab596592bd17362e4799e8e97) |
| 6 / 3 | 08:52:57.837 UTC | Buy [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → exactly 0.25 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | fulfilled; [transaction](https://solscan.io/tx/2jqhCohS3xgeG3er93y1wsGdMTo7rYjppNDSPfubTQsXeHgdW6Frf1JQ2GSGWG35UbbjPeV32NzVRnu9jdfqC1Ra); executed sell 784994 / buy 250000 base units | [Order](https://debug.barn.cow.fi/order/0xeead5948f49d6ef6c54ab4ec98218a9bd814f9ae4f036eb3faec08381aecd6a0) |

Prerequisite acquisitions (both filled; included in placed-order and transaction totals):
- Row 3: 0.001385632 SOL → at least 0.456327 JUP; [Order](https://debug.barn.cow.fi/order/0x60e6d44645272968181f047624e569f1f2b2c8ad738af4eada399eb996cf5d27), [transaction](https://solscan.io/tx/43xoy3odH3KaE6KXhEdwLUNJhNxQKRAQzP7u8aVg6b2VKzVg477RgFsmqhWZLghDyWkJgj9ErM5EMFVHUBpDs1zv).
- Row 6: 0.00248512 SOL → at least 0.820761 JUP; [Order](https://debug.barn.cow.fi/order/0x08add05eab040133c4432b9d8599a0b0b2ed024d20aa293bb1c183742df84ae4), [transaction](https://solscan.io/tx/2B96jxtCQeWVLHnFker7jDpZ1Q6MpqNWXBJ35AB43w1CkpR986WuY9L48mRwfrjucKwPhdPqviSzRWkPjKVckhsm).

### Cleanup quote failure

**Ownership unknown:** final cleanup at 09:22:06.675 left trader 3 with 0.053408 JUP after a quote failure; the journal saves a truncated error. No sell order was placed for that residual balance, and the trader remains in cleanupPending. The earlier cleanup pass recorded no leftovers.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 3 | 09:22:06.675 UTC (final retry) | Sell 0.053408 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) | `0.053408 JUPyiw… (quote failed: Bad Request {"errorType":"SellAmountDoesNotCoverFee","descri)` (saved truncated); balance remains | No order ID: quote failed before placement |

</details>

## 2. SOL/JUP sells and exact buys

Achieved: all 4 SOL/JUP flows completed.
Self-paid and sponsored sells and exact buys all worked.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 4. Median / longest fill: 12.689 / 19.177 seconds. Placed scenario orders: 4; final filled: 4.

Successful fixed-input sells: SOL→JUP, 2/2 (self-paid and sponsored). Successful exact-output buys: SOL→exactly 1 JUP, 2/2. Standard-pair evidence also covers JUP→USDC sells and exact USDC/USDT buys. **Known and accepted:** staging coverage is SOL, USDC, USDT and JUP; other tokens were excluded.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 08:54:17.315 UTC | Sell 0.01 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | fulfilled; [transaction](https://solscan.io/tx/4P24cQSeF51EVuQCcPwEArYnCovFKGfMzm2zb5BQok2QzGmyXr5rHToL8KPkn5ziU85i9zZtKZUfd6q7MHfY2iLP); executed sell 10000000 / buy 3330374 base units | [Order](https://debug.barn.cow.fi/order/0x5705c2e94fa0983018693cbbd48bc68a52c8526bf966143dd58f641da9eeeb54) |
| 8 / 5 | 08:54:16.286 UTC | Sell 0.01 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (sponsored) | fulfilled; [transaction](https://solscan.io/tx/4ZgqMa1YkF5aRwgdGVyKznFvqJeHSGhquSSKJ2haYzfLNCo791kQQuuTqAbtUh3ZbMvUn5AreGRnJfW6GDmG4WoS); executed sell 10000000 / buy 3330171 base units | [Order](https://debug.barn.cow.fi/order/0x13aaa58edd57fb8ec07d3dace07969d2726b0e6523eb4d50f056020b761332f7) |
| 9 / 6 | 08:54:17.753 UTC | Buy [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 1 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | fulfilled; [transaction](https://solscan.io/tx/5gxwNngbZphunkBB1ghULZtUMhDVMos9UvA8FyTdJdSXRaYhAR1i7C6tfvN95QxuLWfdsHzd1MthzTEoHeQZB7TS); executed sell 3009378 / buy 1000000 base units | [Order](https://debug.barn.cow.fi/order/0xdd68f4b6dee99a0e8c6ba380a66fa7f6e0d2296ca3efdb4dd44a0325cbeb9d73) |
| 10 / 7 | 08:54:16.540 UTC | Buy [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 1 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (sponsored) | fulfilled; [transaction](https://solscan.io/tx/3M55V9FJAf8rGKTCMWFsmHhiMCgYsWezqVZkcDy64Bd3gzeJiM3vdDSwaiPMdpxvLqNwR1GMLwmiRqRYCsqsUs3z); executed sell 3009300 / buy 1000000 base units | [Order](https://debug.barn.cow.fi/order/0xc83f0c78b4dacab6f2093127645dee7f40ed59bc2e3cf4c8324633d538331890) |

</details>

## 3. 25 same-direction sells

Achieved for completion: all 25 sells filled individually.
Batching is known and accepted as unavailable; the last observed fill took about 121 seconds after placement.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 25. Median / longest fill: 61.880 / 121.398 seconds. Placed scenario orders: 25; final filled: 25.

All 25 requests sell 0.005 SOL→JUP and each has a different successful settlement signature: 25 batches of size 1. **Known and accepted:** no batching; the goal here is completion and observed timing, overriding the shared CSV’s four-order batching notes. No claim is made about one swap per transaction or price guards.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 11 / 8 | 08:55:42.510 UTC | Sell 0.005 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | fulfilled; [transaction](https://solscan.io/tx/2MKYXdXUmr5iFYnd3xHjtq2arnLu4THcCpyerPXFwTMFukhzVHsLGARvA53DdyDnBCJmPKXTFDGrymhdrXuBVmwS); executed sell 5000000 / buy 1663637 base units | [Order](https://debug.barn.cow.fi/order/0x65a71136bee6c979cb476ece982438226e9688c68715caeed5a78feeaa8c4eb0) |
| 23 / 20 | 08:55:44.810 UTC | Sell 0.005 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | fulfilled; [transaction](https://solscan.io/tx/3kmQU1kVXk3rSkk365TnhnyNTgjHRxRXLfobzNP2PoTbDZnHHP4yx2kWh4CVhhQV7re4RjAFWXbsPNzWbKjSCuS5); executed sell 5000000 / buy 1664040 base units | [Order](https://debug.barn.cow.fi/order/0xbe2a0571b9655840723c06879aaf20b71467edf77112e2f3098d02c40e90833e) |
| 35 / 32 | 08:55:46.809 UTC | Sell 0.005 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | fulfilled; [transaction](https://solscan.io/tx/2v7Jv3pB6UC4SvMPtp2a5h6xv2V1JXHWzEZQ4EsYC18LcDA2oWZ5ciKDkzoL5ksEdpfyY6SoxTdApJ9y1NJf2iyi); executed sell 5000000 / buy 1657608 base units | [Order](https://debug.barn.cow.fi/order/0xa1d5d9cfd36a91b34b4252f740bf6f986f245872935f34176dabe0e131afbb02) |

</details>

## 4. Sell bursts

Not achieved for every flow: 78/84 completed normally.
Five orders were cancelled; another was initially marked timed out but was later confirmed filled.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 79. Median / longest fill: 43.880 / 427.888 seconds. Placed scenario orders: 84; final filled: 79.

The five waves schedule 4, 8, 16, 24 and 32 sells, 90 seconds apart. Each request sells 0.0025–0.004 SOL→USDC. Per-wallet serialization can delay later rows after an earlier timeout. All 79 successful main settlements contain 1 order. Paused waves and this longer timeout do not establish a sustained throughput ceiling.

| Wave | Normal completions | Eventual fills | Last observed fill after first placement |
| --- | ---: | ---: | ---: |
| 4 | 4 | 4 | 19.053 s |
| 8 | 8 | 8 | 39.207 s |
| 16 | 16 | 16 | 78.474 s |
| 24 | 19 | 19 | 92.074 s |
| 32 | 31 | 32 | 531.828 s |

**Ownership unknown:** rows 64, 68, 72, 80 and 84 were cancelled after about 187–189 seconds; all five sell 0.0025 SOL. All had proposed solutions but no selected settlement before cancellation. This is consistent with serial selection starving smaller orders, but the precise ranking/repair owner is not established.

**Recovered observation:** row 96 was marked `main timeout` after 417.985 seconds, then observed fulfilled at 09:15:38.932. Its successful transaction actually landed at 09:09:45 UTC, about 73.956 seconds after local placement, within the 180-second timeout and order validity. It was not a seven-minute solver execution. The cause of delayed observation is unconfirmed; account API failures are separately recorded later in cleanup. Its 427.888-second observed-fill delay is included in the metrics and inflates the maximum.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 36 / 33 | 09:00:43.126 UTC | Sell 0.0025 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | fulfilled; [transaction](https://solscan.io/tx/3fDS9axDSx6mTxBAzkQFtcp4hbeN9CpAmaAN4D3E7RwgyBQKY2RKgR88frSdTqReesST85o5GhgB7ns3LxXxKgdk); executed sell 2500000 / buy 265318 base units | [Order](https://debug.barn.cow.fi/order/0xa17006b93b7433d0c9ae7b64cddce89c034eb74ae2b522a8403e755904b52eb9) |
| 47 / 40 | 09:02:14.475 UTC | Sell 0.004 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | fulfilled; [transaction](https://solscan.io/tx/5rqivbXNWQeN5kvZaMdYxwhoSvkHcJdJ17NaPJYaCx1NR7caTSYUsBpPPxzoRMJrC5Fi9dfL6uEr5t7dwyEK66BE); executed sell 4000000 / buy 425311 base units | [Order](https://debug.barn.cow.fi/order/0x08dba0bdd66fd88a379b59241c0effa8add6cce69efb4dee691c88a0bd39d65c) |
| 63 / 48 | 09:03:46.129 UTC | Sell 0.004 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | fulfilled; [transaction](https://solscan.io/tx/3nYf3DE4Vcpizm7y8P3TEgfcHuHFE2VNySK6Li5hjhvnMuUVGPZfG4KSPebDvqE2kneqdPczLsRaea9RE1qa7CNv); executed sell 4000000 / buy 425069 base units | [Order](https://debug.barn.cow.fi/order/0x9bf8fe6afb41fbd19f8003880a6aa5b59eb9d612565a3c47e2cc908021c0c367) |
| 64 / 33 | 09:08:31.358 UTC | Sell 0.0025 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | `main timeout`; cancelled; [transaction](https://solscan.io/tx/2JZHoAoSGGgSjQaotLEfjL38SQqetXF4LA8vnjtvFCroMqjMz2w31mvZRKAGJ21hiwPSKU1CUF87ePqN2joXuYyy) (cancellation) | [Order](https://debug.barn.cow.fi/order/0x6f944431a65d0699219dd27806e4dc24822da6c606d5e311b6313aed8fd8166a) |
| 68 / 37 | 09:08:31.715 UTC | Sell 0.0025 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | `main timeout`; cancelled; [transaction](https://solscan.io/tx/2Ta7kWT22V1JgyGf96LE2kgr7xpdBCDig8onaurKmoP9cLiVzijNtFp4TUNx2Bjh8BqwvJ4WBV18HhGGAQLxvyrz) (cancellation) | [Order](https://debug.barn.cow.fi/order/0xdc53e246099f73e204e8e0678a1ca49cf722f894b97bd752f308fdfc582da49c) |
| 72 / 41 | 09:08:29.552 UTC | Sell 0.0025 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | `main timeout`; cancelled; [transaction](https://solscan.io/tx/3M4cwZLJJf1GadeYLjkuE4mYU8Tnj8cZp682qUkaMk6TRfurXug4cLvJfiSguavZNsVf1L19DCLQYgwzv3svZDDA) (cancellation) | [Order](https://debug.barn.cow.fi/order/0x7d953567fbbd8970f920ac465837689d368481d2ab0114fc42b1cca919d5f4b1) |
| 80 / 49 | 09:08:24.729 UTC | Sell 0.0025 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | `main timeout`; cancelled; [transaction](https://solscan.io/tx/3H1PK94Utvy8eKBmK9Jk4QKTEYffaZywyZABFqbq7DQinXMmepJakNSi2LqwU8KQoGTwMnZYY3jpVF5DxCUUzxxd) (cancellation) | [Order](https://debug.barn.cow.fi/order/0x0e6ab5f85d66e8db77d4fc6c5661d1ba3ff370b6e28378a49b3c74e7192b8520) |
| 84 / 53 | 09:08:26.634 UTC | Sell 0.0025 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | `main timeout`; cancelled; [transaction](https://solscan.io/tx/2Km6xJLx7thdgc8woT6PGrf4SG7YCfZjWHyHFSqC3MV5sttvtrBmAx8UjRkmYP8yVH7Q2XYbQzXeuHvKz52bjZMs) (cancellation) | [Order](https://debug.barn.cow.fi/order/0x47b862ab4d2490273e1197f8a46581cafd39ea78441c5658635b9a779c242314) |
| 96 / 41 | 09:09:05.477307791 UTC | Sell 0.0025 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | `main timeout`; `{"kind":"SolverFailed","description":"last look failed"}`; wrapper: missing field `txSignature` (line 1, column 56); auction / solution 364290 / 4; later fulfilled; [transaction](https://solscan.io/tx/5ikqQU9sxkAfUptq7BNw2hHeCZWxXjdyyeRfR4SdenRqg68JaDpLqM2DuuBQsBPupcweVBhERQwPB5aGfk6j1H6c); no cancellation signature; recovered fulfillment, not a second order; executed sell 2500000 / buy 265745 base units | [Order](https://debug.barn.cow.fi/order/0xf1185c145dde8d7a3fd0b65edcd21da38ec52a12eadd07121c0fbc95dabb6466) |
| 119 / 64 | 09:06:48.306 UTC | Sell 0.004 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | fulfilled; [transaction](https://solscan.io/tx/DubWvW2XSfPUvNqXQZuqc3hb4fugfnTeXbNAwEGwVxj9qwrUscKY8DkwchL22eHXawATRJibgTPzqs6ftQ145yu); executed sell 4000000 / buy 425174 base units | [Order](https://debug.barn.cow.fi/order/0x2c486dfeb97984427544bdb77347de52a93479f3bd52eb7aa843c4158e135bf2) |

### Cleanup settlement retry

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 45 | 09:17:10.607398472 UTC | Sell 0.796557 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) | `{"kind":"SolverFailed","description":"last look failed"}`; wrapper: missing field `txSignature` (line 1, column 56); auction / solution 364311 / 1; same order later fulfilled; [transaction](https://solscan.io/tx/4BY1cXT8h2Dv4kSLAyGzH96q3EYKV5LKGoR1fqvcnWgdWTjPZg9CHLBUFT7MU96QWn8RDCxskezanbu3TL9UTrCj) | [Order](https://debug.barn.cow.fi/order/0x068923d0a0dc1a4e57f51b8d6ff360551eec735a214a4b7167eed5c1a9fa9829) |

### Cleanup account-orders errors

Confirmed service/API-stage failures, outside solver settlement: 26 traders could not list account orders during final cleanup (2 HTTP 502 and 24 HTTP 503). This does not prove token balances or rent were lost; cleanup and rent reconciliation are incomplete. Final pending traders: 3, 33, 34, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. All 72 placed cleanup sell orders themselves eventually filled, excluded from main metrics.

| Scenario row / trader | UTC timestamp | Action | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 37 | 09:23:35.229 UTC | List account orders before reclaim/cleanup | `GET account orders: 502`; final cleanup pending | No order ID: account-orders request failed |
| — / 38 | 09:23:35.631 UTC | List account orders before reclaim/cleanup | `GET account orders: 502`; final cleanup pending | No order ID: account-orders request failed |
| — / 40 | 09:23:39.560 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 41 | 09:23:41.526 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 33 | 09:23:43.263 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 34 | 09:23:43.445 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 42 | 09:23:43.987 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 43 | 09:23:46.798 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 44 | 09:23:48.544 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 39 | 09:23:48.758 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 47 | 09:23:48.955 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 49 | 09:23:51.899 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 46 | 09:23:52.169 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 45 | 09:23:52.282 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 51 | 09:23:59.300 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 57 | 09:24:00.029 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 58 | 09:24:00.990 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 52 | 09:24:02.313 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 48 | 09:24:03.098 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 53 | 09:24:03.857 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 54 | 09:24:04.805 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 55 | 09:24:07.411 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 59 | 09:24:10.839 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 50 | 09:24:11.043 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 56 | 09:24:11.328 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |
| — / 60 | 09:24:11.553 UTC | List account orders before reclaim/cleanup | `GET account orders: 503`; final cleanup pending | No order ID: account-orders request failed |

</details>

## 5. Fresh accounts

Achieved for trading: all 8 fresh-account flows completed.
All 4 sponsored cases worked; who paid opening rent remains unverified.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 8. Median / longest fill: 14.378 / 19.052 seconds. Placed scenario orders: 8; final filled: 8.

Fresh setup excluded 8 receiving addresses from preparation and recorded the pre-scenario fresh-account check. Cases used 0.15 SOL funding and 500 bps slippage: 0.1 SOL sells or exact buys of 10 USDC/USDT. All 4 self-paid and 4 sponsored flows filled. Creation transactions may create receiving accounts before settlement; account lamports and who paid rent were not independently checked, so solver-paid opening costs remain inconclusive.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 120 / 65 | 09:19:22.530 UTC | Sell 0.1 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | fulfilled; [transaction](https://solscan.io/tx/qXCJ1mrvLbDhRFqq7q8DdwzGfvfqp1zQJxSKF8N6ZS7uXx6kZmwDZp5zYvDQq8nYnfwqoWuUtJXPp424n8uMRva); executed sell 100000000 / buy 10686618 base units | [Order](https://debug.barn.cow.fi/order/0x287634a5815982142e60145f482879cba0192ffa5bdd7576dee3c60a5f47a318) |
| 121 / 66 | 09:19:21.536 UTC | Sell 0.1 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | fulfilled; [transaction](https://solscan.io/tx/3EkrB1Aqz4Z7iLbr9UFw4zkfr3Z9bTJM7myYybA6uniTfxNXAhJie7TkHM7GbxRDJotgosxPG1RLMekePHeBrSr9); executed sell 100000000 / buy 10687725 base units | [Order](https://debug.barn.cow.fi/order/0xb71b6fd12ad5bccd1ee673323e71173bf043e849e5101e8c66d558feb3d0cb27) |
| 122 / 67 | 09:19:23.283 UTC | Buy [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 10 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | fulfilled; [transaction](https://solscan.io/tx/4o4qHzvC2HYbxW9iVxCrATdfXyF9QEV7CBaKK4CqUZY5cfhzSjeL4mTuNjgAkYxHee8LsyVxpAY1CrrAabG7cjz3); executed sell 93572257 / buy 10000000 base units | [Order](https://debug.barn.cow.fi/order/0xce6f707fd3c3b898de32f60b4fc31eb8c6a9c2143e8c5582fa47b7f2d63856d7) |
| 123 / 68 | 09:19:22.313 UTC | Buy [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 10 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | fulfilled; [transaction](https://solscan.io/tx/3nwYnrTsCbx4pxb5zRP5mQwHkcwzoPmU2Gvt9Zfdn8szaMu8jw1znfbaiJCKgoNyP84X9Z3Q1Rb4Z2FSkgFhxmpW); executed sell 93557097 / buy 10000000 base units | [Order](https://debug.barn.cow.fi/order/0x15a50cef97e488f42dec9fd4b4129f3999f885d121951b2465c1c48ee14ee2e0) |
| 126 / 71 | 09:19:23.679 UTC | Buy [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 10 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (self) | fulfilled; [transaction](https://solscan.io/tx/2LcBi9vuVBWCPkpiPbWwW31eEFBLTTfi5W9ceZoioGMdcg2uQLxXkF6JykJShXQyMYAuoeWwvrnxS97V4DLiBg1K); executed sell 93476352 / buy 10000000 base units | [Order](https://debug.barn.cow.fi/order/0xd297c892e25ddba760446f8e6d8fe70980bb2d28ef0fc7d45beb4c9f364ecfcc) |
| 127 / 72 | 09:19:22.839 UTC | Buy [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 10 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | fulfilled; [transaction](https://solscan.io/tx/479c8XTNhnEMesUWrLm6GNxiPAz9VgHdY463hcjt2x1D5Gpe7DXdDVGDDXnTo3jqQYNUrVNrqPM2qJEFUgvLLrjS); executed sell 93461338 / buy 10000000 base units | [Order](https://debug.barn.cow.fi/order/0x6285e02f5bd7d960147b9d194c88d1271098fd6a01981a97eb26418f1ccf54c5) |

</details>
