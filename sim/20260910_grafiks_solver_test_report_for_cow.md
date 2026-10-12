# Grafiks solver test report for CoW — staging, 9 October 2026

**167/189 scheduled trades filled; all placed orders eventually filled.** There were 19 unexpected failures before placement and 3 expected autopilot transfer fee rejections. This report includes solver results and service evidence; the [solver report](20260910_grafiks_solver_test_report.md) includes solver findings and errors of unknown ownership.

Counts include 6 CoW setup trades and exclude cleanup. Times are UTC. Quote failures are rows without a submitted main order; no placed scenario order remained unfilled.

| Scenario | Planned trades | Filled | Quote failed | Submitted but unfilled | Other failed | Trade completion |
| --- | --- | --- | --- | --- | --- | --- |
| 25 same direction sells | 25 | 25 | 0 | 0 | 0 | 100.0% |
| Sell bursts | 84 | 77 | 0 | 0 | 7 | 91.7% |
| Opposing orders / CoW | 15 | 14 | 1 | 0 | 0 | 93.3% |
| Token coverage | 55 | 41 | 14 | 0 | 0 | 74.5% |
| Transaction size | 10 | 10 | 0 | 0 | 0 | 100.0% |

Token coverage's 14 quote-stage failures include 11 generic `NoLiquidity` responses and 3 expected autopilot `UnsupportedToken` transfer-fee rejections. The table counts failed trades, not retries or cleanup attempts.

Fill times run from placement until the simulator sees a fill, including polling delay.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. 25 same direction sells | Batches of 4 achieved; 25/25 filled; settlement retries | Check batch selection and settlement retries. |
| 2. Sell bursts | Batches of 4 achieved; throughput ceiling inconclusive; 77/84 filled | Investigate self paid RPC preflight, then retest throughput. |
| 3. Opposing orders / CoW | No CoW; 14/15 filled through DEX routes; 1 quote failure | Check stablecoin matching and exact output SOL quoting. |
| 4. Token coverage | 37 sells filled; 4/15 exact buys filled; 11 quote failures | Investigate Grafiks quote responses and retry fresh exact buy quotes; timing attribution is approximate. |
| 5. Transaction size | 10/10 filled; limit test inconclusive; cleanup retries | Test team: reach the size target and rerun. |

## 1. 25 same direction sells

**Batches of 4 achieved.** Most orders settled separately; the slowest filled after 115 seconds.

<details>
<summary>Order evidence and metrics</summary>

Across the selected runs, 11 main and 12 cleanup orders needed settlement retries; 18 deadline warnings followed failed submissions. Check route freshness and submission timing; cause remains unknown. There were 12 `NoLiquidity` responses before placement: 1 in scenario 3 and 11 in scenario 4.

Tables include all 22 recorded failures before placement and all 23 orders with failed settlement attempts, grouped by order, plus successful examples.

Stage shows where a failure surfaced, not who caused it. No confirmed autopilot defect is established by these results. Error rows use the first failed-attempt timestamp; successful examples use placement time. Sells show input amounts; buys show exact output. Cleanup uses `— / trader`; intended creation UIDs may have no debug record, and quote failures have no order ID.

**Total transactions:** 19. **Median / longest fill:** 59 / 115 seconds. Settlements comprised 16 singles, 1 pair, 1 triple and 1 batch of 4.

Setup: 25 self paid 0.005 SOL → JUP sells submitted together.

For all scenarios, total transactions means successful settlements of scenario orders, excluding creation, funding and cleanup. Fill times cover successful orders only. Sources: scenario reports, simulator journals, order records, on-chain transactions and staging logs.

Rows 4, 7, 13 and 17 shared this [batch of 4](https://solscan.io/tx/2qtPLHoDY7DwLT9aL5UrdLZ5jfP6y2wVL6n2EhF5xDgioGp7TB3984HSuRzRmTFVFU7kxB3cies2KSCLJ9T1BjuC) (1124 bytes). Auction timing, route choice or the price guard may explain the few batches; none is confirmed. Compare batch scores and proportional payouts with individual bids.

Successful examples below use placement timestamps.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 4 / 4 | 19:30:43.722 | Sell 0.005 SOL → JUP | None; filled in the same batch of 4. | [Debug](https://debug.barn.cow.fi/order/0xa20d9ca396611276ed1ed11ed5ec85e4a0b0f152682ddf3e865422aeb8b448da) |
| 7 / 7 | 19:30:44.342 | Sell 0.005 SOL → JUP | None; filled in the same batch of 4. | [Debug](https://debug.barn.cow.fi/order/0x880112a58bfa9c0cfd97a5458be6ed28b6dff2d4656ed80a74d6a583dcb8d918) |
| 13 / 13 | 19:30:47.785 | Sell 0.005 SOL → JUP | None; filled in the same batch of 4. | [Debug](https://debug.barn.cow.fi/order/0x9583b69187113660dce1d58f32ab84c409e76db654f7e43c462652cf31e5b48a) |
| 17 / 17 | 19:30:49.075 | Sell 0.005 SOL → JUP | None; filled in the same batch of 4. | [Debug](https://debug.barn.cow.fi/order/0x137f41fd6d84576998640c1e9d12e4a65cf3d9e5355f20def0e0b8f8e8f99cfa) |

**Service and shared execution evidence**

3 main orders and 3 cleanup orders had failed settlement attempts, then filled. Slippage and submission errors require shared investigation; ownership is unknown.

**Main settlement attempts (orders filled later):**

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 14 / 14 | 19:30:56.101 | Sell 0.005 SOL → JUP | Filled later. `FailedToSubmit`: `InstructionError(3, Custom(6008))` | [Debug](https://debug.barn.cow.fi/order/0x22045a182d5c3a842bf840861272f798241bf7b06ca69f7946bbcd28bef455d8) |
| 19 / 19 | 19:31:49.164 | Sell 0.005 SOL → JUP | Filled later. `FailedToSubmit`: `InstructionError(3, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0x89d562a6fb1715dbb9b91d68a7abfbc8320774649e3ab7d6e00e3081d1e6c5d9) |
| 22 / 22 | 19:31:28.895 | Sell 0.005 SOL → JUP | Filled later. Jupiter `6001 SlippageToleranceExceeded` (instruction 3) | [Debug](https://debug.barn.cow.fi/order/0x9b0c6610049e87d27c23a61487591cc7ecf0e38cdf5c50dfec09f0ff5833cb55) |

### Cleanup failures (although orders were filled at later attempts)

Trader 21 filled after 2 failed attempts. [Successful settlement](https://solscan.io/tx/32QAWyAq6fFUBQaJnNiyPHpRpndAyCXcTQ2faPidhGxR67zUp7d7GKUAqByEpH78FZGY4Loi5ARqH2gjt51P8JMd).

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 21 | 19:33:57.865 | Sell 1.462829 JUP → SOL | 2 failed settlement attempts; filled later. Jupiter `6001 SlippageToleranceExceeded` (instruction 4); `FailedToSubmit`: `InstructionError(4, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0xe514247aad34b33435251c18e4bf00f3e6d1ae84197160764a8509d33059b517) |
| — / 22 | 19:34:14.322 | Sell 1.462639 JUP → SOL | 1 failed settlement attempt; filled later. `FailedToSubmit`: `InstructionError(4, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0x1880db62be6c8d8e9689e68243bee987152b7ac2be4802ed068810dc770a2d95) |
| — / 23 | 19:34:14.322 | Sell 1.462732 JUP → SOL | 1 failed settlement attempt; filled later. `FailedToSubmit`: `InstructionError(4, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0xe66942790f166c8e4c6ed762161902410e67d2995b3528d7f4bb742dfb89c171) |

</details>

## 2. Sell bursts

**Batches of 4 achieved; throughput ceiling inconclusive.** The incomplete final wave and pauses prevent a reliable maximum rate.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 51. **Median / longest fill:** 25 / 84 seconds. 5 batches of 4 were observed. The longest fill per order in the first 4 waves was 12, 31, 60 and 84 seconds; the final wave placed and filled 25/32 orders.

Setup: self paid SOL → USDC waves of 4, 8, 16, 24 and 32 orders, 4 minutes apart.

Representative [batch of 4](https://solscan.io/tx/2LSrfjSPq7dfuWnbqFNUxD3hqcRw26PNVER7mdqTBPTcUsYNsrKNZ9VHQPCrqwMszVQaWvEKSkbKLBa7v4Mackb8); the rows below shared this settlement.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 13 / 1 | 19:45:56.465 | Sell 0.0025 SOL → USDC | None; filled in the same batch of 4. | [Debug](https://debug.barn.cow.fi/order/0x42e6f19056622133404f3bea1fb92f6d55b34f155bb48159357fb4df1cbd6641) |
| 18 / 6 | 19:45:55.058 | Sell 0.003 SOL → USDC | None; filled in the same batch of 4. | [Debug](https://debug.barn.cow.fi/order/0x8290cc53fb385544b91d8380e39551555ca167e439f2b36dd746c50ae38fe766) |
| 22 / 10 | 19:45:57.989 | Sell 0.003 SOL → USDC | None; filled in the same batch of 4. | [Debug](https://debug.barn.cow.fi/order/0x69f7ba0706843294e43c7c97945ea5d5d17fb4dd3e62176e386f872bfc84e775) |
| 26 / 14 | 19:45:58.492 | Sell 0.003 SOL → USDC | None; filled in the same batch of 4. | [Debug](https://debug.barn.cow.fi/order/0x30d9ab1a77ff7076ecd6756520472f4bdfa3647ab229d4d0d55bf1e6181ea451) |

**Service and shared execution evidence**

7 creations failed while the simulator submitted self paid transactions directly to RPC, instead of using autopilot’s sponsored creation path. Empty simulation logs leave the cause unknown; an old blockhash or RPC disagreement remains a hypothesis.

Journal stage `send`, mode `self`, identifies the failed path. In `src/orders.ts`, self paid creation calls `Rpc.sendAndConfirm`; `src/rpc.ts` submits the transaction with RPC preflight enabled. Autopilot did not submit these creation transactions. Their underlying cause is unknown; the records do not establish an autopilot defect or a rate limit.

All 7 returned `Simulation failed. Message: Transaction simulation failed.` with `logs: []`. Full simulation details are needed.

**Creation failures; no orders placed:**

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 55 / 3 | 19:54:31.960 | Sell 0.0035 SOL → USDC | Self paid creation / RPC preflight: `Simulation failed`; `logs: []`. Cause unknown; not placed. | [Intended UID; may have no record](https://debug.barn.cow.fi/order/0x1dfc82938fab6afdfc86ba616a3cb7c9f1b18f2980ca223f9ea237f3db9d8e74) |
| 56 / 4 | 19:54:32.507 | Sell 0.004 SOL → USDC | Self paid creation / RPC preflight: `Simulation failed`; `logs: []`. Cause unknown; not placed. | [Intended UID; may have no record](https://debug.barn.cow.fi/order/0x044df9dc235285db7fa40371c4c6b6291aba25ee2f019716c276fcea72ba2cd9) |
| 61 / 9 | 19:54:30.089 | Sell 0.0025 SOL → USDC | Self paid creation / RPC preflight: `Simulation failed`; `logs: []`. Cause unknown; not placed. | [Intended UID; may have no record](https://debug.barn.cow.fi/order/0x051e67fc3f2658d9c257a64ae4bf0e6beb236582d9ba95ae8b250a4729163a6f) |
| 64 / 12 | 19:54:36.476 | Sell 0.004 SOL → USDC | Self paid creation / RPC preflight: `Simulation failed`; `logs: []`. Cause unknown; not placed. | [Intended UID; may have no record](https://debug.barn.cow.fi/order/0x6620e7c54814ba396adde1f3bc35eb20e317ad0e43e741568afc7e9be057bf9c) |
| 67 / 15 | 19:54:36.922 | Sell 0.0035 SOL → USDC | Self paid creation / RPC preflight: `Simulation failed`; `logs: []`. Cause unknown; not placed. | [Intended UID; may have no record](https://debug.barn.cow.fi/order/0x9710e39f329e944474c013f474bfc0a61f66120f393005ff711c1c04ad810657) |
| 68 / 16 | 19:54:26.802 | Sell 0.004 SOL → USDC | Self paid creation / RPC preflight: `Simulation failed`; `logs: []`. Cause unknown; not placed. | [Intended UID; may have no record](https://debug.barn.cow.fi/order/0x990778467f87707898ef46d66bed4e1c44c85df13134e13a7ca09820957f8dcf) |
| 74 / 22 | 19:54:28.021 | Sell 0.003 SOL → USDC | Self paid creation / RPC preflight: `Simulation failed`; `logs: []`. Cause unknown; not placed. | [Intended UID; may have no record](https://debug.barn.cow.fi/order/0xa1c38fd594a08ab6eb80b6eeb5bdacd78def6b81cd680c6c7e2a45a23a214573) |

**Shared settlement retry; order filled later:**

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 27 / 15 | 19:46:44.782 | Sell 0.0035 SOL → USDC | Filled later. Titan `6008 LessThanMinimumAmountOut` (instruction 3); Jupiter `6001 SlippageToleranceExceeded` (instruction 4) | [Debug](https://debug.barn.cow.fi/order/0xa4e1d8fe6439c0e39edd2a9295369016a585d39df1d2ed9e64a05609d486fc53) |

At 19:39:34.341 UTC, 1 auction request failed with `ConnectionRefused`. The records do not distinguish solver downtime from a service connectivity problem. Check solver availability and service connectivity.

</details>

## 3. Opposing orders / CoW

**CoW was not achieved.** Opposite stablecoin orders shared an auction but settled through DEX swaps.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 13. **Median / longest fill:** 8 / 22 seconds. 6 setup trades and 8 later trades filled through Jupiter or Titan. The only shared settlement combined 2 USDT → USDC sells.

All 8 later placed orders entered the same auction, including [3 USDC → USDT](https://debug.barn.cow.fi/order/0x5dd983960ef2659625a2f516eb26b3ff7e44d97751cfb9f389618300c031fc13) and [3 USDT → USDC](https://debug.barn.cow.fi/order/0xe10e5aeb45723d0a0d0ca5fee6309d7371939e34db896c53e3639df891b4618e). Grafiks’s rule that both users receive at least the best DEX output may explain the missing match if prices differ from 1:1; this is unconfirmed. Check the price guard and solution scores.

The test included unequal opposing amounts and a SOL → JUP control. The perfect SOL pair was incomplete, so that pair does not establish CoW support.

[Row 11 settlement](https://solscan.io/tx/ixdyTnjRkjSqUy6BFxSXDbC4yCqU5aJUmwieUmhG9K5BRozNgqP4WG74iohsuwzGJud21bNuoWcFzbuE32NBsCA). [Row 12 settlement](https://solscan.io/tx/3ckXQWAQztiGgukg3nrEGzBsc5NZnpFPVn6JhZbYomtyRPi91eojFAv95N5p39jU4E4igY9csdrkKfH5HzFZydn3).

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 11 / 5 | 20:11:16.615 | Sell 3 USDC → USDT | None; filled through a DEX route, not a direct match. | [Debug](https://debug.barn.cow.fi/order/0x5dd983960ef2659625a2f516eb26b3ff7e44d97751cfb9f389618300c031fc13) |
| 12 / 6 | 20:11:16.848 | Sell 3 USDT → USDC | None; filled through a DEX route, not a direct match. | [Debug](https://debug.barn.cow.fi/order/0xe10e5aeb45723d0a0d0ca5fee6309d7371939e34db896c53e3639df891b4618e) |

**Service and shared execution evidence**

An exact buy of native SOL failed at the quote API, leaving 1 opposing pair incomplete. A nearby backend response from the Grafiks driver was `QuotingFailed: No valid quote found`. This is an approximate timing match, not a confirmed request match or an established Grafiks defect.

The simulator requested a quote through its SDK before placement. The response was `404 Not Found: NoLiquidity: no route found`; no order was submitted. This generic API response does not prove missing liquidity. The underlying cause remains unknown; check exact output support and native SOL handling. The other stablecoin pair was still available together.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 8 / 2 | 20:11:17.186 | Buy USDC → exactly 0.02 SOL | `404 Not Found: NoLiquidity: no route found`. Not placed. | — (no order ID) |

**Shared settlement retries (orders filled later):**

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 5 / 7 | 20:08:55.684 | Buy SOL → exactly 1.1 USDT | Filled later. Jupiter `6001 SlippageToleranceExceeded` (instruction 3) | [Debug](https://debug.barn.cow.fi/order/0xf99e8434fd70b5e1d55f90a3827c173fc70e8836bfced245d50db5bfe54cd69e) |
| 7 / 1 | 20:11:22.456 | Sell 0.02 SOL → USDC | Filled later. Jupiter `6001 SlippageToleranceExceeded` (instruction 4) | [Debug](https://debug.barn.cow.fi/order/0x761e85461245fdb845efde9722554f1d7997959a027a9b9852fb6c6876975ea6) |
| 9 / 3 | 20:11:22.456 | Sell 0.03 SOL → USDC | Filled later. Jupiter `6001 SlippageToleranceExceeded` (instruction 4) | [Debug](https://debug.barn.cow.fi/order/0xefd5697476278878d52590762c588d9370a78ccd97130a9ea171e3549553fb29) |

### Cleanup failures (although orders were filled at later attempts)

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 6 | 20:11:54.213 | Sell 2.995272 USDC → SOL | 1 failed settlement attempt; filled later. `FailedToSubmit`: `InstructionError(4, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0xe510c168d362ecd3c2e90e884128367103f193824017fba0b9a262a7ee22886b) |
| — / 8 | 20:11:53.191 | Sell 2.99982 USDT → SOL | 1 failed settlement attempt; filled later. `FailedToSubmit`: `InstructionError(4, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0x51ccdb150d6b3297240b8bafc378e2ddc3cd68a218ce7ace2e9be8d331599c6f) |
| — / 9 | 20:11:54.224 | Sell 5.895613 JUP → SOL | 1 failed settlement attempt; filled later. `FailedToSubmit`: `InstructionError(4, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0x86aae26fe3893a9f00cb94a303a41b667b75dbea83cdb527830903be55c827fb) |

The failed exact buy left the perfect SOL pair incomplete; the stablecoin pair remained testable.

</details>

## 4. Token coverage

**All 37 placed sells filled; exact buys filled 4/15.** The other 11 failed during quoting with `NoLiquidity`, before placement. Nearby Grafiks responses are approximate matches; underlying causes remain unknown.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 41. **Median / longest fill:** 7 / 64 seconds. The 4 successful exact buys were CRCLx, SKHY, SPCXx and TSLAx. Coverage included memecoins, liquid staking tokens, stables, gold, stocks and Token-2022.

| Successful test | Tokens |
| --- | --- |
| Sell SOL into token (37) | ANSEM, PAID, USDG, PUMP, PYUSD, CASH, CRCLx, SPYx, USDv, SKHY, NVDAx, MU, SPCX, SPCXx, TSLAx, BONK, WIF, POPCAT, JitoSOL, mSOL, JupSOL, cbBTC, USDe, EURC, USDY, JLP, INF, ETH, BNB, XAUt0, GLDx, EUROP, Fartcoin, MEW, BOME, hyloSOL, PSOL |
| Exact buy paid with SOL (4) | CRCLx, SKHY, SPCXx, TSLAx |

Successful sells demonstrate settlement for those orders; they do not prove broader exact buy support. All 41 placed orders settled separately.

**Known autopilot restriction: Token-2022 transfer fees**

Autopilot rejects SI, ZCAT and ANTHROPIC because they use transfer fees. These expected rejections do not test the solver's token support.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 31 / 16 | 20:13:42.093 | Sell 0.005 SOL → SI | `400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee`. Known autopilot restriction; not placed. | — (no order ID) |
| 32 / 17 | 20:13:42.205 | Sell 0.005 SOL → ZCAT | `400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee`. Known autopilot restriction; not placed. | — (no order ID) |
| 33 / 18 | 20:13:42.602 | Sell 0.005 SOL → ANTHROPIC | `400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee`. Known autopilot restriction; not placed. | — (no order ID) |

**Successful token examples:**

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 20:13:43.036 | Sell 0.01 SOL → ANSEM | None; filled. | [Debug](https://debug.barn.cow.fi/order/0x08471ed3aa80ffa02d91f6c4181dab1873a146c31af3b81349d25b9050680f2c) |
| 14 / 7 | 20:14:49.091 | Buy SOL → exactly 0.00574 CRCLx | None; filled. | [Debug](https://debug.barn.cow.fi/order/0x70f168b847931c0c1b4e15346b5cd6abb1e4aacb01b053bfdd76d325b39e8e8c) |

**Service and shared execution evidence**

11 exact buys failed at quoting, although sells into those tokens succeeded.

All 11 exact buys returned `404 Not Found: NoLiquidity: no route found`. Fixed input routes may work where exact output routes do not; amounts or native SOL handling may also matter. These are unconfirmed explanations. The amounts came from an older scenario; retry fresh quotes at several amounts.

Nearby backend responses identify the Grafiks driver and say `QuotingFailed: No valid quote found` for all 11 failed exact buys. These are approximate timing matches: simultaneous requests cannot be distinguished without saved request IDs. The underlying cause remains unknown; `NoLiquidity` does not prove missing liquidity or a solver defect. Links below show successful sells for context, not the failed buys.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 2 / 1 | 20:13:47.235 | Buy SOL → exactly 3.26 ANSEM | `404 Not Found: NoLiquidity: no route found`. Not placed. | [Successful sell for context](https://debug.barn.cow.fi/order/0x08471ed3aa80ffa02d91f6c4181dab1873a146c31af3b81349d25b9050680f2c) |
| 4 / 2 | 20:13:56.493 | Buy SOL → exactly 88.1 PAID | `404 Not Found: NoLiquidity: no route found`. Not placed. | [Successful sell for context](https://debug.barn.cow.fi/order/0x136dd46a8c6909df9f08455af96ffc52fc36ed667ea7b94850a260c9d1e8ae90) |
| 6 / 3 | 20:13:49.883 | Buy SOL → exactly 0.464 USDG | `404 Not Found: NoLiquidity: no route found`. Not placed. | [Successful sell for context](https://debug.barn.cow.fi/order/0xcacb7e8caab66573ad9353a66d745387b3714345229f10de78cf993be2bb67d1) |
| 8 / 4 | 20:13:53.290 | Buy SOL → exactly 71.6 PUMP | `404 Not Found: NoLiquidity: no route found`. Not placed. | [Successful sell for context](https://debug.barn.cow.fi/order/0xa7b083b98ec8eedaf9514c3c78039566c5a15dd6aec0d6b04885151f08386469) |
| 10 / 5 | 20:13:50.145 | Buy SOL → exactly 0.464 PYUSD | `404 Not Found: NoLiquidity: no route found`. Not placed. | [Successful sell for context](https://debug.barn.cow.fi/order/0xe30d693b9d19a63bb8fcbc08f5e5aad7db337733ac3f784ddb8c7da35970c070) |
| 12 / 6 | 20:13:50.346 | Buy SOL → exactly 0.464 CASH | `404 Not Found: NoLiquidity: no route found`. Not placed. | [Successful sell for context](https://debug.barn.cow.fi/order/0x6410778ee4ad5c14fed023aaa32a4d96bbe3e2baa308a63f3b5b0f16464c7dd2) |
| 16 / 8 | 20:13:53.693 | Buy SOL → exactly 0.000597 SPYx | `404 Not Found: NoLiquidity: no route found`. Not placed. | [Successful sell for context](https://debug.barn.cow.fi/order/0xb6b480abc8ece5186bb953bb360f5c77d6903303e38006c0a620861f43f10522) |
| 18 / 9 | 20:13:50.724 | Buy SOL → exactly 0.464 USDv | `404 Not Found: NoLiquidity: no route found`. Not placed. | [Successful sell for context](https://debug.barn.cow.fi/order/0x9b5a2aa2c8159f09055e25a75476d76f167c4456e30f82a8341f049bf08130ce) |
| 22 / 11 | 20:13:54.760 | Buy SOL → exactly 0.00196 NVDAx | `404 Not Found: NoLiquidity: no route found`. Not placed. | [Successful sell for context](https://debug.barn.cow.fi/order/0x0f29fdf51c9e3d0049403efdbb9c852a4ec373252c95f00b61b72e1ed44b86ea) |
| 24 / 12 | 20:13:57.471 | Buy SOL → exactly 0.000427 MU | `404 Not Found: NoLiquidity: no route found`. Not placed. | [Successful sell for context](https://debug.barn.cow.fi/order/0x2ecc9bde7e9cd4dc4fde5a5a60c46d2d989706b6f8e353820616c9d41d7e22ec) |
| 26 / 13 | 20:13:48.093 | Buy SOL → exactly 0.00276 SPCX | `404 Not Found: NoLiquidity: no route found`. Not placed. | [Successful sell for context](https://debug.barn.cow.fi/order/0x249e03c8e3f7a8e8c1bb50c5d3727f830d0e572c0370d5c8ff44051bbdaf1903) |

**Shared settlement retries (orders filled later):**

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 13 / 7 | 20:13:47.325 | Sell 0.01 SOL → CRCLx | Filled later. `FailedToSubmit`: `InstructionError(6, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0x5e5d56e3f437c8b09d89252a02820b6bcab7994d1841734c3d8fd396e54f8699) |
| 19 / 10 | 20:13:47.334 | Sell 0.01 SOL → SKHY | Filled later. `FailedToSubmit`: `InstructionError(5, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0x03b75404448c9eac34cae2b74a0e504c297db4d81c8da376a6870e36d2f1ee17) |
| 27 / 14 | 20:13:47.388 | Sell 0.01 SOL → SPCXx | Filled later. `FailedToSubmit`: `InstructionError(6, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0xa19ffa722d5e60ca325e1aeaa6d7b43a24eb034715ad474a2c1f23aa205dd176) |
| 29 / 15 | 20:13:47.932 | Sell 0.01 SOL → TSLAx | Filled later. `FailedToSubmit`: `InstructionError(6, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0x82ac722bf27cf74bb234111714a2df2058f7eb9a1b928b561f196ab128d55300) |

### Cleanup failures (although orders were filled at later attempts)

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 10 | 20:15:10.692 | Sell 0.009006 SKHY → SOL | 1 failed settlement attempt; filled later. `FailedToSubmit`: `InstructionError(6, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0x308d78ce8e990c2bcc4b2bf11fed5189890e8d9a351752f146e9ba2e2f1b574d) |
| — / 29 | 20:16:05.537 | Sell 0.117527 JLP → SOL | 1 failed settlement attempt; filled later. Jupiter `6001 SlippageToleranceExceeded` (instruction 4) | [Debug](https://debug.barn.cow.fi/order/0xb4dc8bdd0781a64732c494417f2659730e020d8b4dafecc67ce1b2fd5688f5d7) |
| — / 31 | 20:16:12.118 | Sell 0.00021953 ETH → SOL | 1 failed settlement attempt; filled later. `FailedToSubmit`: `InstructionError(5, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0x154f6bc127f6a6cd7b3f237ac78252c96756235f4a079921a7d169090fe2bbcf) |

The 11 exact buy failures happened before auction participation; the solver quote provider has not been identified.

</details>

## 5. Transaction size

**Size limit test inconclusive.** Our largest settlement was 1088 bytes, below the 1232-byte target.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 8. **Median / longest fill:** 8 / 19 seconds. Each token pair had 1 baseline, then 4 sells together. EURC settled separately; 3 JLP orders were batched.

Setup: 10 self paid 0.005 SOL → EURC/JLP sells, targeting large routes and batches.

Complete transactions measured 762–1088 bytes. The [largest](https://solscan.io/tx/4NKx7AyWCo5MgH5CFEH1K1zbaAuKBy1V5smZXZgvTi8CEkZuKVLasy19WJidA2RPbXwkMpRoX7VsJHZE1kfaopS8) was 1088 bytes; the [JLP triple](https://solscan.io/tx/eETvsHPC6qA47zF2PgqXiNnXKDX2YddZRoGFFiidxEdZZswKia95nsSbSGdKiW55ExJmZMo2aGqDb2X3FpQ63xj) was 1004 bytes. Scenario 1’s 4-order batch was larger (1124 bytes). Routes differed from earlier large Jupiter samples, so this run did not reach the intended size target.

No main settlement failures were recorded. Successful-order timestamps below are placement times.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 20:19:58.267 | Sell 0.005 SOL → EURC (866-byte settlement) | None; filled. | [Debug](https://debug.barn.cow.fi/order/0x8a5d2d9b5267980d51a3686b77ac3272c7801d06df87cb94ccd5ebfbdfbb13e1) |
| 2 / 1 | 20:23:58.429 | Sell 0.005 SOL → EURC (1063-byte settlement) | None; filled. | [Debug](https://debug.barn.cow.fi/order/0x5a76a60750bef79f04d6653b7dc1209bf1215a28e0e6d01041024e8ec68e53c5) |
| 3 / 2 | 20:23:58.612 | Sell 0.005 SOL → EURC (1042-byte settlement) | None; filled. | [Debug](https://debug.barn.cow.fi/order/0x184dfc1b9c98819c8b628e473fbd80e03238c82b8bfd79e28ec956df1d37aefe) |
| 4 / 3 | 20:23:58.816 | Sell 0.005 SOL → EURC (819-byte settlement) | None; filled. | [Debug](https://debug.barn.cow.fi/order/0xdb9b43a26b25b2367ba15809a7aa71e93263293efc55c315440a23c645359049) |
| 5 / 4 | 20:23:58.914 | Sell 0.005 SOL → EURC (764-byte settlement) | None; filled. | [Debug](https://debug.barn.cow.fi/order/0xfe64af356ce5167e5e876f498e02e1e679293efb4a73bd55e974ed8f66638043) |
| 6 / 5 | 20:27:58.431 | Sell 0.005 SOL → JLP (1088-byte settlement) | None; filled. | [Debug](https://debug.barn.cow.fi/order/0xcb7723b3b565a01b4835e89a7346ba1ded4e68c807f752a685cf5ebe242a3300) |
| 7 / 5 | 20:31:58.334 | Sell 0.005 SOL → JLP (1004-byte settlement; shared batch) | None; filled. | [Debug](https://debug.barn.cow.fi/order/0x915c6ff1379c2df4b8d6f7cf9f69202baed50684f3426af32e464bfab22eb493) |
| 8 / 6 | 20:31:58.629 | Sell 0.005 SOL → JLP (1004-byte settlement; shared batch) | None; filled. | [Debug](https://debug.barn.cow.fi/order/0xd961e93fbbfa4efc87a20365eea3cb52361902160abf5f0a5e5b40e4c77f1568) |
| 9 / 7 | 20:31:58.825 | Sell 0.005 SOL → JLP (1004-byte settlement; shared batch) | None; filled. | [Debug](https://debug.barn.cow.fi/order/0xae6acf80f44e3a635ae33df0bb75cde91a22a67c562dac456a4f8bd2c2fa8fff) |
| 10 / 8 | 20:31:58.929 | Sell 0.005 SOL → JLP (762-byte settlement) | None; filled. | [Debug](https://debug.barn.cow.fi/order/0x7f3580be1aea20376e562cb839dbe815466ef7761bbd11942e352ec91c2b9dc7) |

**Service and shared execution evidence**

No main settlement failures were recorded. 3 JLP cleanup orders had failed attempts and later filled; the errors did not indicate a transaction size problem.

### Cleanup failures (although orders were filled at later attempts)

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 5 | 20:32:30.894 | Sell 0.235093 JLP → SOL | 5 failed settlement attempts; filled later. Jupiter `6001 SlippageToleranceExceeded` (instruction 4); `FailedToSubmit`: `InstructionError(4, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0xa054cfe32b33d87e16134ed009135cff01b2ebf41a622d3934f93213b8864820) |
| — / 6 | 20:32:43.797 | Sell 0.117446 JLP → SOL | 1 failed settlement attempt; filled later. `FailedToSubmit`: `InstructionError(4, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0xa4a36b9ca2ca3fa789edce822b10fdbc3007918f78168c88b8f6bc1ed46c9eb3) |
| — / 8 | 20:32:51.324 | Sell 0.117436 JLP → SOL | 1 failed settlement attempt; filled later. `FailedToSubmit`: `InstructionError(4, Custom(6001))` | [Debug](https://debug.barn.cow.fi/order/0x540e8fdad11fad9f8d89b990e1fe61374e8e1a41f6d732ea8cf93f41f8001cde) |

Across the 5 selected session windows, competition records show no sponsored creation expiries or winners skipped because creation blockhashes expired. The 18 deadline warnings followed failed submissions; they do not demonstrate late solver responses. Numeric custom error codes alone cannot identify the failing program.

</details>
