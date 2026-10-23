# Asao solver test report

21 October 2026 · staging · evidence snapshot 12:04:45 UTC

**TLDR:** 144/190 planned trades completed (75.8%), or 144/184 (78.3%) excluding six setup quotes blocked by our staging API outage. The other main gaps were timeouts, missing token quotes and three expired sponsored creations. Keep the outage separate from Asao feedback and repeat the blocked setup checks.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Achieved; 6/6 planned | No specific trading failure. |
| 2. 25 same-direction orders | Batching achieved; completion not achieved; 20/25 planned | Asao: review the five unfilled orders. |
| 3. Sell bursts | Not achieved; 75/84 planned | Asao: review low-size orders in larger waves. |
| 4. Opposing orders | Direct matching not achieved; 9/15 planned | Asao: check direct matching; test team: repeat setup. |
| 5. Token coverage | Not achieved; 27/52 planned | Asao / test team: review missing quotes and creation expiry. |
| 6. Fresh receiving accounts | Achieved for accepted orders; one planned case incomplete; 7/8 planned | Test team: repeat the case that failed before acceptance. |

No earlier Asao staging report was found; this run is the first comparison baseline.

## 1. Standard pairs

**Achieved.** Standard sells and exact buys all completed, including the JUP-funded flows.

<details>
<summary>Order evidence and metrics</summary>

Completed **6/6 planned trades**; **6 accepted main orders**, 0 failures before acceptance.

Total transactions: **8**. Main-order median / longest observed fill: **4.84 / 6.55 seconds** (6 fills).

Row numbers refer to the global composite CSV. Successful examples use placement timestamps; errors use the first recorded failing attempt or failure observation. Fill timing is accepted placement → observed fulfilled status in the journal, including polling delay; it excludes acquisitions unless stated. Total transactions means distinct successful settlement signatures for selected scenario orders, including prerequisite acquisitions and explicit setup rows, excluding cleanup, funding, creation and failed submissions.

The session used staging, prepared ordinary receiving token accounts once, kept them open between scenarios and reserved separate unprepared wallets for the fresh-account scenario. There were no nonzero-transfer-fee rows or expected transfer-fee rejections.

All eight accepted scenario orders filled: six main orders and two prerequisite JUP acquisitions. Competition records and the settlement fee payer identify Asao as the participating solver; the 148 successful scenario-and-cleanup settlements were attributed to Asao. The data source was verified as VictoriaLogs Staging (`vm-auth-staging`).

This report covers session `2026-10-21-11-26-composite-asao-run`, trading from 11:27:51 to 11:51:56 UTC and final cleanup through 11:59:36 UTC; evidence snapshot 12:04:45 UTC. All six trading phases finished. The saved run is still `finished=false` because cleanup remains pending for nine traders.

Across the run: **144/190 planned flows completed (75.79%)**; **144/162 accepted main orders filled (88.89%)**. Including eight prerequisite acquisitions: **152/170 accepted scenario orders filled (89.41%)**, in **86** distinct successful settlement transactions. The 28 failures before acceptance were 21 `NoLiquidity` quotes, six nginx 503 quotes and one rejected creation POST. The other 18 failed main orders were 15 timeouts/cancellations and three sponsored creation expiries. Cleanup is excluded from these totals.

Adjusted completion excluding only the six confirmed API-outage rows (116–121): **144/184 planned flows (78.26%)**. The original 144/190 result and all six failed-request records remain in this report. Every other failure remains counted, including the creation POST rejected for an expired blockhash; the accepted-main-order fill rate stays **144/162 (88.89%)**. This is a filtered result from the same run, not a rerun.

The journal's result `orders` counter includes failed placement attempts: use the 170 `placed` events above for accepted scenario orders. No retries were configured; order validity was 300 seconds, fill timeout 60 seconds with cancellation, and client limits were 5 quote requests/s, 8 API requests/s and 10 RPC requests/s.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-21 11:27:53.601 | Sell 0.005 SOL → USDC (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0x32b05be8adb721c13ee00dceef0bcc53b771aa374d6f7ccd13966f0156c5b9a0) |
| 3 / 3 | 2026-10-21 11:28:05.366 | Sell 0.5 JUP → USDC (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0x117a0545d3ce5db8446325f16f8a0127a5a9c22aaed53f0b9904f513d24ea6b4) |
| 5 / 2 | 2026-10-21 11:27:57.852 | Buy SOL → exactly 0.25 USDT (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0xeb6156ba026cfdc8cbfaab33aaa99fe5567c19031b93b9db0370dbc398d717a0) |
| 6 / 3 | 2026-10-21 11:28:32.491 | Buy JUP → exactly 0.25 USDC (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x9e34336d678250fa3bc155cd431777d754ea9eaefd4306c977f337a7420acff0) |
| — / 3 | 2026-10-21 11:28:52.801 | Sell 0.052749 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → SOL (cleanup) | SellAmountDoesNotCoverFee: cleanup quote rejected by the API fee check; description truncated in saved journal. 2 recorded failed cleanup passes; balance still retained at snapshot. | No order ID: quote failed before placement. |

</details>

## 2. 25 same-direction orders

**Batching achieved; full completion not achieved.** Batches reached four orders, but five SOL→JUP orders timed out.

<details>
<summary>Order evidence and metrics</summary>

Completed **20/25 planned trades**; **25 accepted main orders**, 0 failures before acceptance.

Total transactions: **9**. Main-order median / longest observed fill: **21.96 / 50.53 seconds** (20 fills).

Twenty orders filled in nine transactions: 3×1, 3×2, 1×3 and 2×4 orders. [Four-order batch example](https://solscan.io/tx/foFSBg96sdFxA3itN4bTvkSCYSVJ9Vbbi9X4eysqm2kjEpAE3HfjrymLQYgSk7AVUNKJ2AxwNYAhdcgohhUMfHy) contains rows 9, 10, 11 and 13 and one top-level Jupiter swap instruction. This verifies batching for that example, without claiming proportional payouts or the single-order price guard.

Rows 7, 14, 25, 28 and 30 were cancelled after the configured timeout; none later filled in the saved order snapshot. Their accepted placements preceded the API outage by about 14 minutes, so the outage does not explain them.

Cleanup trader 23's failed swap was confirmed on-chain in the Jupiter program (code 6001). Driver simulation passed at **11:31:45.480867 UTC**, but execution failed at the swap's minimum-output check; the same cleanup order later filled. Asao should review quote freshness and output limits; the failure mechanism is confirmed, but its underlying trigger is not.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 9 / 6 | 2026-10-21 11:29:20.560 | Sell 0.005 SOL → JUP (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0xc69cf5ac8e859468f441b10a8483f02b85668a8fffcd8f43909396adc5cf40ee) |
| 10 / 7 | 2026-10-21 11:29:20.860 | Sell 0.005 SOL → JUP (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0xc6383dc74b74c1ab2c195a102a35845a47d37b280a5762e0d21aacfa0f454229) |
| 13 / 10 | 2026-10-21 11:29:21.467 | Sell 0.005 SOL → JUP (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0x61228fa84051b00674c5455b652a687521ad5405ca4cd03551bea2ecf4567f64) |
| 7 / 4 | 2026-10-21 11:30:29.374 | Sell 0.005 SOL → JUP (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0xf26781dec81681ef972388976f5363b0bf74a479cd8bdfcdb98a260454366264) |
| 14 / 11 | 2026-10-21 11:30:31.782 | Sell 0.005 SOL → JUP (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0x44a58246f4fb2c0ced8a5e2d84d262c5882a3f8e2ad0dcfbc35e4d17f0b09b97) |
| 25 / 22 | 2026-10-21 11:30:33.227 | Sell 0.005 SOL → JUP (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0x9f5ae7012f6094851f233f90ccba9bee6e0c7272ed20313de521830078a1095e) |
| 28 / 25 | 2026-10-21 11:30:32.098 | Sell 0.005 SOL → JUP (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0x5530fb51d56b55f841ce407beb260b58ff3744fe9e89281687b3484fd6ba8c72) |
| 30 / 27 | 2026-10-21 11:30:32.710 | Sell 0.005 SOL → JUP (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0x0806df0011b97bc59782fa5ad2b4306e09da70ec95b13ed63b815ad507aa717e) |
| — / 23 | 2026-10-21 11:31:50.774984806 | Sell 1.643365 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → SOL (cleanup) | Jupiter SlippageToleranceExceeded after simulation passed; exact driver error: FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(6, Custom(6001))) } }. Final fulfilled on a later attempt. [Failed transaction](https://solscan.io/tx/4CahqLnDbKFVsWYgKDXYG7HC7TA7QzLdgv3bo9jPbyV9o18xb4HkPD6yTeCbdpBvNxpGXYqcbM1gauK537RTrwWH) | [Order](https://debug.barn.cow.fi/order/0x7f6613395d7211614278cc9637a400e99f75546dc4a885c68ec4bec66ce1f622) |

</details>

## 3. Sell bursts

**Not achieved.** Larger waves left nine small SOL→USDC orders unfilled, although batches reached four orders.

<details>
<summary>Order evidence and metrics</summary>

Completed **75/84 planned trades**; **84 accepted main orders**, 0 failures before acceptance.

Total transactions: **26**. Main-order median / longest observed fill: **15.86 / 69.08 seconds** (75 fills).

Wave results, with timing from the first accepted placement to the last observed successful fill (including polling): 4/4 in 11.29s; 8/8 in 13.98s; 15/16 in 42.83s; 20/24 in 44.54s; 28/32 in 74.23s. These are fill clearing times for successful orders, not time until every order succeeded.

All nine failed burst orders sold **0.0025 SOL**: rows 48, 60, 64, 68, 72, 84, 100, 108 and 112. Some equally small orders filled in earlier waves, so this does not establish a permanent minimum or a sustained throughput ceiling. The 75 fills used 26 transactions: 7×1, 8×3 and 11×4 orders.

Row 72's failed attempt was auction **364408**, Asao solution **0**. Exact driver error: `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(2, Custom(15))) } }`. [Failed transaction](https://solscan.io/tx/bYNRVXRAnnyRchs9ptrscuVnQnTqgrRubd4wnzwK23oyx7aHkQ4gpnY95YVKBtfRXtU9uqVSoYnt5aTkGfxeDhA) confirms settlement program `EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb` rejected `OrderCancelled` (code 15) before any swap. Driver simulation passed at 11:39:05.599950 UTC; execution failed when the order was already cancelled. This is a race with the test's timeout cancellation, not a second failed trade or proof of a solver transaction-construction defect. The local settlement interface maps code 15 to `OrderCancelled`.

Trader 60 also recorded `GET account orders: 502` at 11:43:13.878 UTC, around the API shutdown; final cleanup completed at 11:56:32.722 UTC. The timing is consistent with the service interruption, but this individual 502's upstream cause was not independently joined.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 2026-10-21 11:33:31.078 | Sell 0.0025 SOL → USDC (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0x655132f07ceff305224393e6c20784285e51b10facf43e4f04467a643f41a7f0) |
| 43 / 36 | 2026-10-21 11:35:00.389 | Sell 0.004 SOL → USDC (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0x2c14abad79016d0b4293d811cf411aba13dae942d5fb5fb3fae93d2ad1a89a38) |
| 111 / 56 | 2026-10-21 11:39:39.189 | Sell 0.004 SOL → USDC (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0x96b8e1b67af4dd2f180961e456d1da703c3e498fafb960f9e60c4ce938688082) |
| 48 / 33 | 2026-10-21 11:37:37.878 | Sell 0.0025 SOL → USDC (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0xf38a3f0eb498e823f5c7b73ecaf9b7b1249da9b290372e4b1f26da6ded05e6d2) |
| 60 / 29 | 2026-10-21 11:39:11.673 | Sell 0.0025 SOL → USDC (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0xc738e199a716e791beff8fec1085e2aff8f3aaffe055adf785a1a0eee199ac40) |
| 64 / 33 | 2026-10-21 11:39:12.868 | Sell 0.0025 SOL → USDC (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0xfef3bcc116a3aab53d718508514e0b08f6f6ade0548db610e8aeaac85dc68332) |
| 68 / 37 | 2026-10-21 11:39:12.452 | Sell 0.0025 SOL → USDC (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0xcd4e5c53d460ce01d083ba005511579fca7a6241e3f8633fb64006798363c2b4) |
| 72 / 41 | 2026-10-21 11:39:06.679636770 | Sell 0.0025 SOL → USDC (self) | main timeout; final cancelled. FailedToSubmit / InstructionError(2, Custom(15)) = OrderCancelled; submission raced the test cancellation. [Failed transaction](https://solscan.io/tx/bYNRVXRAnnyRchs9ptrscuVnQnTqgrRubd4wnzwK23oyx7aHkQ4gpnY95YVKBtfRXtU9uqVSoYnt5aTkGfxeDhA) | [Order](https://debug.barn.cow.fi/order/0x72bc6d20f7484541b9eeec0a89ffac172cda261b5023cf4ce3d3f455e72c9675) |
| 84 / 29 | 2026-10-21 11:40:46.894 | Sell 0.0025 SOL → USDC (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0x414987b48a29336ba9f7f9bcc9560bf4ac5a71629a732775f227f6843f1a5d68) |
| 100 / 45 | 2026-10-21 11:40:46.299 | Sell 0.0025 SOL → USDC (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0x0752e951340824218b00d0930f0b97dffbd30a92267733c9dfec26841a564577) |
| 108 / 53 | 2026-10-21 11:40:47.141 | Sell 0.0025 SOL → USDC (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0x10cf34dc369509a7ad7ec6a1f874d655dbadb1ea3ed0a2f2b29b26f386d0859d) |
| 112 / 57 | 2026-10-21 11:40:47.651 | Sell 0.0025 SOL → USDC (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0x88d687885e9183e4ea31fb6f6ca6f05c8937b7ce9d9298fb2f266001abb88ff3) |
| — / 60 | 2026-10-21 11:43:13.878 | Fetch trader account orders during cleanup | GET account orders: 502; final cleanup completed at 11:56:32.722 UTC. No individual order failed at this read stage. | No order ID: account-order read failed. |

</details>

## 4. Opposing orders

**Direct matching not achieved.** The remaining opposite-direction orders used separate DEX swaps despite sharing an auction.

<details>
<summary>Order evidence and metrics</summary>

Completed **9/15 planned trades**; **9 accepted main orders**, 6 failures before acceptance.

Total transactions: **10**. Main-order median / longest observed fill: **3.31 / 13.04 seconds** (9 fills).

The nine accepted main orders all filled; six additional prerequisite acquisitions also filled. The six failed explicit setup rows did not prevent later automatic acquisitions. Opposite USDC→USDT row 126 and USDT→USDC rows 127/128 shared auction **364443**, in Asao solutions 2 and 4 respectively.

All seven successful main-order settlement transactions were inspected: each contains a Jupiter swap, and no transaction mixes opposite directions. [USDC→USDT settlement](https://solscan.io/tx/24A2wYCUUeVQrozhyf2yabWmbBM8nHAgQXGm6UTtzocXhTpZPAf4pS4tP4Vj7vcoYKck9gb1q8K9aPawoBPdDEkN) and [USDT→USDC batch](https://solscan.io/tx/2V4nrVnktdiSEqZMWbR3CMrWhwvwNawSjUzksCqLXiN2S7yuVt4zASrK6DYsUj3DNG6FvsL5QxBzE9EFootBAx51) show separate DEX execution rather than direct matching. This result does not prove direct matching is permanently unsupported.

**Confirmed CoW service failure:** all six quote requests for rows 116–121 returned `503 Service Temporarily Unavailable` from nginx between **11:43:26.520 and 11:43:27.383 UTC**, before any order ID existed. They were exact buys paying SOL for 2.6 USDC, 1.3 USDC, 3.1 USDC, 3.1 USDT, 1.1 USDT and 3.2 USDC respectively.

Staging Grafana shows `Gracefully shutting down API` at **11:43:13.245 UTC**; ingress repeatedly logged `Service "services/solana-api-staging" does not have any active Endpoint.` from 11:43:14 onward. A replacement API pod started at **11:43:54.883 UTC**. The six matched ingress records have no upstream address and `rl=-`, so these were unavailable-backend responses rather than rate-limit rejections. Other users' account-order requests also received 503s during the gap.

The API pod was replaced under the same ReplicaSet; the logs checked here do not establish what triggered that replacement or when readiness fully returned. CoW infrastructure should preserve a ready API endpoint during replacements; the test team should repeat the six blocked setup cases. Keep the six failures in the 190-row test result, and exclude them from solver-defect counts.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 123 / 62 | 2026-10-21 11:46:13.084 | Buy USDC → exactly 0.02 SOL (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x15c445d99e1b1815a876e4628ccf0bdfc48c1fabac67dcdc4418158a17703e98) |
| 126 / 65 | 2026-10-21 11:46:11.595 | Sell 3 USDC → USDT (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x9d9d41dea992c9d481b40c1962f2e89a39c0ae8273aaa2d4e3fc6c8e35199ce7) |
| 127 / 66 | 2026-10-21 11:46:11.979 | Sell 3 USDT → USDC (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0xccac80f956107e8c696c2d9fdb450bbf8a07dce68a8cca57553e95879c5686af) |
| 130 / 69 | 2026-10-21 11:45:57.689 | Sell 0.02 SOL → JUP (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x20708bf45d3ce3e7f8e632f84b5c9588c8829234c8f879a489bd6db57ddcee71) |
| 116 / 62 | 2026-10-21 11:43:26.566 | Buy SOL → exactly 2.6 USDC (sponsored) | 503 Service Temporarily Unavailable (nginx); no order placed. Confirmed CoW API outage. | No order ID: quote failed before placement. |
| 117 / 64 | 2026-10-21 11:43:26.749 | Buy SOL → exactly 1.3 USDC (sponsored) | 503 Service Temporarily Unavailable (nginx); no order placed. Confirmed CoW API outage. | No order ID: quote failed before placement. |
| 118 / 65 | 2026-10-21 11:43:26.822 | Buy SOL → exactly 3.1 USDC (sponsored) | 503 Service Temporarily Unavailable (nginx); no order placed. Confirmed CoW API outage. | No order ID: quote failed before placement. |
| 119 / 66 | 2026-10-21 11:43:27.172 | Buy SOL → exactly 3.1 USDT (sponsored) | 503 Service Temporarily Unavailable (nginx); no order placed. Confirmed CoW API outage. | No order ID: quote failed before placement. |
| 120 / 67 | 2026-10-21 11:43:27.294 | Buy SOL → exactly 1.1 USDT (sponsored) | 503 Service Temporarily Unavailable (nginx); no order placed. Confirmed CoW API outage. | No order ID: quote failed before placement. |
| 121 / 68 | 2026-10-21 11:43:27.424 | Buy SOL → exactly 3.2 USDC (sponsored) | 503 Service Temporarily Unavailable (nginx); no order placed. Confirmed CoW API outage. | No order ID: quote failed before placement. |
| — / 64 | 2026-10-21 11:57:35.301 | Sell 0.150468 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (cleanup) | SellAmountDoesNotCoverFee: cleanup quote rejected by the API fee check; description truncated in saved journal. 1 recorded failed cleanup passes; balance still retained at snapshot. | No order ID: quote failed before placement. |
| — / 66 | 2026-10-21 11:57:41.237 | Sell 0.148419 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) → SOL (cleanup) | SellAmountDoesNotCoverFee: cleanup quote rejected by the API fee check; description truncated in saved journal. 1 recorded failed cleanup passes; balance still retained at snapshot. | No order ID: quote failed before placement. |
| — / 67 | 2026-10-21 11:57:41.685 | Sell 0.049088 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) → SOL (cleanup) | SellAmountDoesNotCoverFee: cleanup quote rejected by the API fee check; description truncated in saved journal. 1 recorded failed cleanup passes; balance still retained at snapshot. | No order ID: quote failed before placement. |
| — / 68 | 2026-10-21 11:57:42.585 | Sell 0.113564 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (cleanup) | SellAmountDoesNotCoverFee: cleanup quote rejected by the API fee check; description truncated in saved journal. 1 recorded failed cleanup passes; balance still retained at snapshot. | No order ID: quote failed before placement. |

</details>

## 5. Token coverage

**Not achieved.** Missing quotes, three expired sponsored creations and one timeout left gaps in token coverage.

<details>
<summary>Order evidence and metrics</summary>

Completed **27/52 planned trades**; **31 accepted main orders**, 21 failure before acceptance.

Total transactions: **27**. Main-order median / longest observed fill: **12.84 / 34.97 seconds** (27 fills).

Fixed-input sells succeeded for **22 tokens** (SOL paying for the linked token): [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm), [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263), [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1), [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr), [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm), [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4), [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v), [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump), [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3), [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6), [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij), [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So).

Exact-output buys succeeded for **5 tokens**, all paying SOL: [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb), [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB). Successful sells do not imply exact-buy support.

There were **21 requests with no usable quote**: 11 fixed-input sells and 10 exact buys. Seven failed the initial quote check and 14 failed a later quote inside placement; none created an accepted order. The API logged the Asao driver's `{"kind":"QuotingFailed","description":"No valid quote found"}` for representative requests, returning `NoLiquidity: no route found`. **Ownership unknown:** this identifies the failing driver path, but not whether token support, trade size, current routing or candidate validation caused it. It does not prove permanent lack of liquidity.

Three sponsored fixed-input sells (CASH row 136, SPCX row 143 and TSLAx row 145) were accepted but never created on-chain. The autopilot logged `sponsored creation expired, dropping the order` for their exact UIDs at 11:48:22 UTC. **Ownership unknown:** the underlying reason they were not created was not established. SPYx row 138 timed out and was cancelled; the later exact SPYx buy filled.

Row 142 (MU) had a failed settlement simulation before eventually filling. Auction **364453**, Asao solution **0**: `SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }`. This confirms the Jupiter swap failed its minimum-output check; quote freshness or limit selection remains unconfirmed. That candidate was not submitted, so it has no failed on-chain transaction signature.

Cleanup's first **0.464 CASH→SOL** order timed out and was cancelled; a new cleanup order later filled after one Jupiter minimum-output simulation failure. No failed on-chain signature exists for that rejected simulation. The same Jupiter program was verified for both the MU and CASH simulation failures; neither failed candidate proves the whole order failed.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 131 / 70 | 2026-10-21 11:47:45.192 | Sell 0.01 SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x2a5c70e36b75278f9a97f732ba4446346962e684b9296324d99a3f48512336ac) |
| 142 / 81 | 2026-10-21 11:47:56.043534473 | Sell 0.01 SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) (self) | Jupiter SlippageToleranceExceeded in simulation (InstructionError(6, Custom(6001))); filled on a later attempt. Auction 364453 / solution 0. | [Order](https://debug.barn.cow.fi/order/0x0e2eab6f5317471d2e378de72d3fea5d595c86ad3b83aa9f4f048d75e7d54ba2) |
| 152 / 91 | 2026-10-21 11:47:50.557 | Sell 0.005 SOL → [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij) (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0x339a2fe5cb69906bb7337a429ff739bf2c81e56f17aa589deb9654b2c70f7c78) |
| 173 / 75 | 2026-10-21 11:48:21.657 | Buy SOL → exactly 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x2b193b47724e81d5199fa9cd40b64f6f9a64da592881e2382c490be608e3cc9e) |
| 178 / 80 | 2026-10-21 11:48:22.349 | Buy SOL → exactly 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0xec3c32a6e10cfe961327c86387745b19f5f93ffd3c519eb483bcdeda1dfc5794) |
| 182 / 84 | 2026-10-21 11:48:25.738 | Buy SOL → exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x59dcae32c7dfa5327767de59d109f513eb5f536ee10183bb50158aff2402afbf) |
| 136 / 75 | 2026-10-21 11:48:20.505 | Sell 0.01 SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) (sponsored) | **Ownership unknown:** sponsored creation expired, dropping the order; final status expired, never created on-chain. | [Order](https://debug.barn.cow.fi/order/0xddaaf66099393c2cccb927398dcee48d694762e1cc7950292308219a9fb4c072) |
| 138 / 77 | 2026-10-21 11:48:57.667 | Sell 0.01 SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) (self) | **Ownership unknown:** main timeout; final status cancelled after the test timeout. | [Order](https://debug.barn.cow.fi/order/0xb45fb3c5a41fd2a98243566c30f741312b2641729c9bb389a2bc51692555a837) |
| 143 / 82 | 2026-10-21 11:48:21.570 | Sell 0.01 SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) (sponsored) | **Ownership unknown:** sponsored creation expired, dropping the order; final status expired, never created on-chain. | [Order](https://debug.barn.cow.fi/order/0x967fa57af35ff5a20410a2953dd15e151f372c2530b11434f57f5a21bda746a3) |
| 145 / 84 | 2026-10-21 11:48:24.725 | Sell 0.01 SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) (sponsored) | **Ownership unknown:** sponsored creation expired, dropping the order; final status expired, never created on-chain. | [Order](https://debug.barn.cow.fi/order/0x9a7213213ad13bbf226c0f2b3ab084c0c18239e47d885c81b105aab3240dd3dd) |
| 149 / 88 | 2026-10-21 11:47:45.150 | Sell 0.005 SOL → [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 158 / 97 | 2026-10-21 11:47:49.664 | Sell 0.005 SOL → [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 159 / 98 | 2026-10-21 11:47:49.838 | Sell 0.005 SOL → [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 160 / 99 | 2026-10-21 11:47:50.051 | Sell 0.005 SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 161 / 100 | 2026-10-21 11:47:50.267 | Sell 0.005 SOL → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 162 / 101 | 2026-10-21 11:47:50.563 | Sell 0.005 SOL → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 163 / 102 | 2026-10-21 11:47:50.695 | Sell 0.005 SOL → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 164 / 103 | 2026-10-21 11:47:50.968 | Sell 0.005 SOL → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 165 / 104 | 2026-10-21 11:47:51.178 | Sell 0.005 SOL → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 166 / 105 | 2026-10-21 11:47:51.238 | Sell 0.005 SOL → [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 167 / 106 | 2026-10-21 11:47:51.565 | Sell 0.005 SOL → [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 168 / 70 | 2026-10-21 11:48:01.092 | Buy SOL → exactly 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) (sponsored) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 169 / 71 | 2026-10-21 11:48:04.133 | Buy SOL → exactly 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) (sponsored) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 170 / 72 | 2026-10-21 11:47:54.901 | Buy SOL → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 171 / 73 | 2026-10-21 11:47:54.488 | Buy SOL → exactly 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 172 / 74 | 2026-10-21 11:47:55.271 | Buy SOL → exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) (sponsored) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 174 / 76 | 2026-10-21 11:48:13.202 | Buy SOL → exactly 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) (sponsored) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 176 / 78 | 2026-10-21 11:48:01.980 | Buy SOL → exactly 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) (sponsored) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 177 / 79 | 2026-10-21 11:47:55.936 | Buy SOL → exactly 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) (sponsored) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 179 / 81 | 2026-10-21 11:48:13.206 | Buy SOL → exactly 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) (self) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| 181 / 83 | 2026-10-21 11:48:13.340 | Buy SOL → exactly 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) (sponsored) | **Ownership unknown:** 404 Not Found: NoLiquidity: no route found. No order placed. | No order ID: quote failed before placement. |
| — / 75 | 2026-10-21 11:50:53.409 | Sell 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) → SOL (cleanup) | **Ownership unknown:** cleanup timeout after 74.149s; order cancelled. A new cleanup order later sold the balance. | [Order](https://debug.barn.cow.fi/order/0xe5ea7536a017b38c909f02dd0f4a9e60736681db8da2322ad53f13e3aabc2b5a) |
| — / 75 | 2026-10-21 11:57:58.201783634 | Sell 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) → SOL (cleanup) | Jupiter SlippageToleranceExceeded in simulation; exact error: SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: Some(ProgramError { program: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4, code: 6001, name: Some("SlippageToleranceExceeded") }) }. Final fulfilled on a later attempt; wallet cleanup completed. | [Order](https://debug.barn.cow.fi/order/0x930e1eac6d5caa2fab6f9cfdefff0bbace2176c9fadd5fb4cbcf60f40be0b871) |
| — / 82 | 2026-10-21 11:50:10.413 | Sell 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) → SOL (cleanup) | **Ownership unknown:** NoLiquidity: no route found for this cleanup quote; saved description truncated. 2 recorded failed cleanup passes; balance still retained at snapshot. | No order ID: quote failed before placement. |
| — / 83 | 2026-10-21 11:50:13.963 | Sell 0.00671232 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) → SOL (cleanup) | **Ownership unknown:** NoLiquidity: no route found for this cleanup quote; saved description truncated. 2 recorded failed cleanup passes; balance still retained at snapshot. | No order ID: quote failed before placement. |
| — / 91 | 2026-10-21 11:50:42.388 | Sell 0.0000064 [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij) → SOL (cleanup) | **Ownership unknown:** NoLiquidity: no route found for this cleanup quote; saved description truncated. 1 recorded failed cleanup passes; sold in the final cleanup pass. | No order ID: quote failed before placement. [Successful later cleanup order (context)](https://debug.barn.cow.fi/order/0x897e925ba4d8fccd8843e0c42e6bb19a574af77d4dfe2802889363f5cb2c12d4) |
| — / 94 | 2026-10-21 11:50:50.294 | Sell 0.461517 [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6) → SOL (cleanup) | **Ownership unknown:** NoLiquidity: no route found for this cleanup quote; saved description truncated. 2 recorded failed cleanup passes; balance still retained at snapshot. | No order ID: quote failed before placement. |
| — / 95 | 2026-10-21 11:51:03.327 | Sell 0.115423 [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) → SOL (cleanup) | **Ownership unknown:** NoLiquidity: no route found for this cleanup quote; saved description truncated. 1 recorded failed cleanup passes; sold in the final cleanup pass. | No order ID: quote failed before placement. [Successful later cleanup order (context)](https://debug.barn.cow.fi/order/0x377aeb9dd9c14532d105499c0f7b0f7dcb0b5e69c90abf6ec7dd36208afe4833) |

</details>

## 6. Fresh receiving accounts

**Fresh-account settlement achieved for all seven accepted orders.** One planned case failed before reaching the solver, so the full eight-case check remains incomplete.

<details>
<summary>Order evidence and metrics</summary>

Completed **7/8 planned trades**; **7 accepted main orders**, 1 failure before acceptance.

Total transactions: **6**. Main-order median / longest observed fill: **12.67 / 15.81 seconds** (7 fills).

The journal verified all eight receiving accounts were missing at **11:51:34.440 UTC**. The scenario skipped account preparation, used four SOL→USDC and four SOL→USDT cases across fixed-input sells and exact-output buys, self-paid and sponsored modes, 0.15 SOL per wallet and 500 bps slippage. All seven accepted orders filled; the sponsored USDT sell is the missing accepted case.

One two-order fresh-account sell batch combined self-paid and sponsored USDC cases; the other five successful settlements were single-order.

Row 188's **0.1 SOL→USDT sponsored sell** was signed/prepared at 11:51:38.609 UTC and rejected by the order API at 11:51:38.681 UTC: `400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one`. The prepared UID has no API record in the snapshot. This happened before solver participation; the exact source of the stale blockhash was not established. The test team should refresh/rebuild the creation transaction before repeating this case.

The runner conservatively marked the rejected UID unresolved (`Order was not found in the API`) and skipped trader 112's cleanup. At the snapshot, cleanup remained pending for **3, 64, 66, 67, 68, 82, 83, 94 and 112**. The first eight retained quoted token balances; trader 112 was skipped for the unresolved prepared UID. All trading phases were finished; cleanup was not fully complete.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 183 / 107 | 2026-10-21 11:51:39.305 | Sell 0.1 SOL → USDC (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0xb5742258bca7669148d21d802026ff4c756cc75448d87d29ad199a401c26d9d4) |
| 184 / 108 | 2026-10-21 11:51:38.373 | Sell 0.1 SOL → USDC (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x37d08c228511534a59ddd1ebdfabfa8311555e8c80c31f43ea46e0196ad8a3cc) |
| 186 / 110 | 2026-10-21 11:51:39.092 | Buy SOL → exactly 10 USDC (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0xb7222cba4f8a83a05c5978ee3dacaa4140ba4b4ced762d1b96a22f73d6e6154b) |
| 189 / 113 | 2026-10-21 11:51:40.664 | Buy SOL → exactly 10 USDT (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0x3c4d610efc8b806fb031f5d50957ecfedf320d95501886e66a92ba4f580e612a) |
| 188 / 112 | 2026-10-21 11:51:38.681 | Sell 0.1 SOL → USDT (sponsored) | 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one. Rejected before acceptance. | [Prepared UID; no API record](https://debug.barn.cow.fi/order/0x847d668ab1d9d8a1adb845d424782a06babe2ace4db3d16ab285ef84a70d2e25); rejected creation, not an accepted order. |

</details>
