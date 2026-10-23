# Asao solver test report

23 October 2026 · staging · evidence snapshot 13:00:16 UTC

**TLDR:** Batching and direct USDC/USDT matching now work, but broad token coverage still doesn’t: 34 requests got no usable quote and eight burst orders timed out. Overall, 142/190 planned trades completed (74.7%); 142/153 accepted main orders filled (92.8%). Keep the claimed-fix cases in the tests and review the linked failures.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Not achieved; 2/6 planned, 2/4 accepted main filled. | Review creation expiry and failed JUP acquisition. |
| 2. 25 same-direction orders | Achieved; 25/25 filled, batches of 11. | Asao: inspect the failed swap attempt that later recovered. |
| 3. Sell bursts | Not achieved; 76/84 filled, batches up to 12. | Asao / test team: trace 8 small-order timeouts. |
| 4. Opposing orders | Achieved for USDC/USDT; 15/15 filled. | Asao: check direct matching for SOL/USDC too. |
| 5. Token coverage | Not achieved; 16/52 planned, 16/17 accepted filled. | Trace 34 missing quotes, including Token-2022 requests. |
| 6. Fresh receiving accounts | Achieved; 8/8 filled with fresh receiving accounts. | Keep self-paid and sponsored cases as regression tests. |

## Changes since 21 October 2026

Planned fills went from 144/190 to 142/190; the largest batch grew from 4 to 12 orders.

<details>
<summary>Comparison with the previous run</summary>

Baseline: 21 October staging run, 11:26 composite; same scenarios, requests, settings and timing basis. The previous adjusted 144/184 excluded six API 503 setup failures; this comparison keeps all 190 planned rows. The latest run has no recorded 503s; reduced token coverage limits the accepted-order comparison.

| Measure | 21 October | 23 October |
| --- | --- | --- |
| Planned main fills | 144/190 (75.8%) | 142/190 (74.7%) |
| Accepted main fills | 144/162 (88.9%) | 142/153 (92.8%) |
| Standard / same-direction / bursts | 6/6; 20/25; 75/84 | 2/6; 25/25; 76/84 |
| Opposing / token / fresh planned fills | 9/15; 27/52; 7/8 | 15/15; 16/52; 8/8 |
| Successful scenario settlements / largest batch | 86 / 4 | 53 / 12 |
| Token sells / exact buys filled | 22 / 5 | 11 / 5; different buy tokens |
| NoLiquidity requests / main cancellations / main expiry | 21 / 15 / 3 | 34 / 8 / 3 |
| Same-direction median / longest observed fill | 21.96 / 50.53 s | 9.78 / 16.01 s |
| Burst median / longest observed fill | 15.86 / 69.08 s | 6.64 / 68.14 s |

New error type: one `Reverted { err: InstructionError(5, Custom(21)) }` attempt, five orders, all later filled; **Ownership unknown** (section 2 has all links). The first failing program differs from the previous four attempts’ Jupiter 6001 / order-cancelled errors. Existing errors on new requests: 34 NoLiquidity, eight main cancellations and four creation expiries including acquisition; evidence below.

Recovered examples previously missing a quote: row 149, Sell 0.005 SOL → [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn) (self), [Order](https://debug.barn.cow.fi/order/0xcda4e59ca5461a8ac9e535363dacfbfa490be20a4e1eec96d31e96057947f5c5); row 168, Buy SOL → exactly 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) (sponsored), [Order](https://debug.barn.cow.fi/order/0xac42896111d2df6e18dc26f6e2c1e9b6cfde00941434266c4add968c956a83cd); row 170, Buy SOL → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored), [Order](https://debug.barn.cow.fi/order/0xa5e65a9cbf3ba4f3b6cc743a66f5a8b7edb29b083cd1e81a010a083cf3476704).

New: direct stablecoin matching. Unchanged: ordinary account preparation and fresh-wallet separation. The claimed two-hop cap and historical cbBTC patch remain unverified.

</details>

## 1. Standard pairs

**Not achieved.** Both SOL-funded sells filled, but two sponsored exact buys expired and failed JUP acquisitions blocked two more trades.

<details>
<summary>Order evidence and metrics</summary>

Filled **2/4 accepted main orders**, from **6 planned trades**. Total transactions: **2**. Main-order median / longest observed fill: **6.36 / 6.40 seconds** (2 fills).

Global row numbers come from the composite CSV. Success timestamps are accepted placement times; error timestamps are the first recorded failed attempt or failure observation. Fill timing is accepted placement → journal-observed fulfilled status, including polling; acquisitions are excluded from timing. Transaction totals count distinct successful scenario settlements, including explicit setup rows and prerequisite acquisitions, excluding cleanup, creation, funding and failed submissions.

This run has 153 accepted main orders plus two prerequisite acquisitions, both failed: 142/155 accepted scenario orders filled. There are 53 distinct successful scenario settlements. Competition records and all 107 successful scenario-and-cleanup settlement fee payers identify Asao; no other solver was active in the selected window.

Ordinary receiving accounts were prepared once; fresh-case wallets were kept separate. Settings: 60-second fill timeout then cancellation, 300-second validity, no placement retries, quote/API/RPC limits 5/8/10 requests per second. No transfer-fee rejections or nonzero-transfer-fee rows were identified. All six trading phases finished by 12:49:12 UTC; the saved unfinished flag concerns cleanup.

Sponsored creation expiry is confirmed for rows 4 and 5 and the row 6 acquisition. The saved message proves expiry, not why creation was not landed; **Ownership unknown**. No joined failed settlement explains the cancelled row 3 acquisition.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-23 12:25:54.869 | Sell 0.005 SOL → USDC (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0xe9bc317ffa24ee077554fb0a54b967ffb6e35bae28b0f626b44bf03ecea305cd) |
| 2 / 2 | 2026-10-23 12:25:52.774 | Sell 0.005 SOL → USDT (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0x531157fe3aec948be227ec183c2124b5583dadf48b21da70dca1584e7a16c714) |
| 3 / 3 | 2026-10-23 12:27:08.106 | Prerequisite sell 0.001381711 SOL → JUP, minimum 0.458406 JUP; intended Sell 0.5 JUP → USDC (self) | `acquire JUP timeout`; acquisition cancelled. Intended main order never placed. **Ownership unknown.** | [Acquisition order](https://debug.barn.cow.fi/order/0xf75d64b687ad131c0861ea178ac17635c2827f59221629ae499c6f6cde9aa136) |
| 4 / 1 | 2026-10-23 12:26:36.500 | Buy SOL → exactly 0.25 USDC (sponsored) | `sponsored creation expired, dropping the order`; final expired. **Ownership unknown:** reason the creation did not land is unconfirmed. | [Order](https://debug.barn.cow.fi/order/0xfa4f428f1c2d0317b95181b827002dc668e73bba312f03e0ae5a0dff283a9b9d) |
| 5 / 2 | 2026-10-23 12:26:32.121547981 | Buy SOL → exactly 0.25 USDT (sponsored) | `sponsored creation expired, dropping the order`; final expired. **Ownership unknown:** reason the creation did not land is unconfirmed. | [Order](https://debug.barn.cow.fi/order/0xb733caad8705a12d13b9f281019d5d6a7667e96ee586f65d4ab616fb290db85d) |
| 6 / 3 | 2026-10-23 12:27:47.671 | Prerequisite sell 0.002415405 SOL → JUP, minimum 0.803290 JUP; intended Buy JUP → exactly 0.25 USDC (sponsored) | `sponsored creation expired, dropping the order`; acquisition expired. Intended main order never placed. **Ownership unknown.** | [Acquisition order](https://debug.barn.cow.fi/order/0x85610f9011872e85dee859dd8ba3e31cd765df54ec2ac6de8bdfa4da0f34cf7b) |

</details>

## 2. 25 same-direction orders

**Achieved.** All 25 same-direction orders filled in three transactions; one earlier five-order swap attempt failed before those orders recovered.

<details>
<summary>Order evidence and metrics</summary>

Filled **25/25 accepted main orders**, from **25 planned trades**. Total transactions: **3**. Main-order median / longest observed fill: **9.78 / 16.01 seconds** (25 fills).

Batch sizes: **2×11 and 1×3**. The [11-order example](https://solscan.io/tx/23vjX6ZPTpSkKS7BYToutLi2UcQEh4KdyzZJiFSAVsEJVKYECKzVPaEgW9TKmwyRr2oC2via2EDXkmd1KWZTyQKU) includes rows 7, 9, 10, 11, 13, 15, 16, 22, 23, 26 and 29, with one top-level Jupiter swap. This proves batching, not proportional payouts, a price guard or transaction-size-limit coverage.

One failed attempt affected rows 7–11: auction **364967**, Asao solution **5**. Driver simulation passed at **12:28:48.158433551 UTC**, submission began at **12:28:48.172233409**, and execution failed at **12:28:49.033446748**. The [failed transaction](https://solscan.io/tx/4UvmuLKXYoNJZaiyJWgZbkKe75DHQkRfD8BvUR2Ztu8uwpsi983w2hANGmXRLRbg3xSpA9msYorYDEqomTzYUQVg) first failed in `goonuddtQRrWqqn5nFyczVKaie28f3kDkHWkHtURSLE`, inside Jupiter, with `custom program error: 0x15` (decimal 21), propagated as `Reverted { err: InstructionError(5, Custom(21)) }`. The program’s named error and underlying cause are unconfirmed; **Ownership unknown**. This is one failed attempt, not five failed trades; all five orders later filled.

Cleanup trader 10 initially could not quote 1.674406 JUP→SOL: `Not Found {"errorType":"NoLiquidity","description":"no route` at 12:29:31.752 UTC (saved text is truncated). A later cleanup order filled; the failed quote had no order ID. Cause and ownership remain unknown. All 26 placed JUP→SOL cleanup orders filled; a [successful example](https://solscan.io/tx/4ZmPeGauGtGcjsP4JoHDtm6bwCoS4h75QMKE9bGEjWPKkM6pcGCLQu5tfnmNtxAE7MTMhkLTmzoSQGAtAaxhYN3i) supports that route’s recovery, but does not independently verify a global two-hop cap.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 2026-10-23 12:28:49.033446748 | Sell 0.005 SOL → JUP (self) | `Reverted { err: InstructionError(5, Custom(21)) }` in the shared [failed transaction](https://solscan.io/tx/4UvmuLKXYoNJZaiyJWgZbkKe75DHQkRfD8BvUR2Ztu8uwpsi983w2hANGmXRLRbg3xSpA9msYorYDEqomTzYUQVg); later filled. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0x466758636ac2e28c8ef5e8989750d02e7af4e605baeaeb3255282a0eb8a9bede) |
| 8 / 5 | 2026-10-23 12:28:49.033446748 | Sell 0.005 SOL → JUP (self) | `Reverted { err: InstructionError(5, Custom(21)) }` in the shared [failed transaction](https://solscan.io/tx/4UvmuLKXYoNJZaiyJWgZbkKe75DHQkRfD8BvUR2Ztu8uwpsi983w2hANGmXRLRbg3xSpA9msYorYDEqomTzYUQVg); later filled. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0x755faf7f9e994db17405ba6ee3029531ff5801b580ec512cece6532d5d6ea42b) |
| 9 / 6 | 2026-10-23 12:28:49.033446748 | Sell 0.005 SOL → JUP (self) | `Reverted { err: InstructionError(5, Custom(21)) }` in the shared [failed transaction](https://solscan.io/tx/4UvmuLKXYoNJZaiyJWgZbkKe75DHQkRfD8BvUR2Ztu8uwpsi983w2hANGmXRLRbg3xSpA9msYorYDEqomTzYUQVg); later filled. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0xb2da1cdec1d4216b236a6838c0e204cc83b18906f51bca79ec720174c6ad13b3) |
| 10 / 7 | 2026-10-23 12:28:49.033446748 | Sell 0.005 SOL → JUP (self) | `Reverted { err: InstructionError(5, Custom(21)) }` in the shared [failed transaction](https://solscan.io/tx/4UvmuLKXYoNJZaiyJWgZbkKe75DHQkRfD8BvUR2Ztu8uwpsi983w2hANGmXRLRbg3xSpA9msYorYDEqomTzYUQVg); later filled. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0xb0e531efe2faa181685b59550ce9630a6db98928d838ac911c32fad7a0f8b807) |
| 11 / 8 | 2026-10-23 12:28:49.033446748 | Sell 0.005 SOL → JUP (self) | `Reverted { err: InstructionError(5, Custom(21)) }` in the shared [failed transaction](https://solscan.io/tx/4UvmuLKXYoNJZaiyJWgZbkKe75DHQkRfD8BvUR2Ztu8uwpsi983w2hANGmXRLRbg3xSpA9msYorYDEqomTzYUQVg); later filled. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0x4254dffce46f0b34ef150ce7353e22691111e49d5b0ec515e7ad8a106d3a80e9) |
| 12 / 9 | 2026-10-23 12:28:50.508 | Sell 0.005 SOL → JUP (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0xfdc858dfa452d85ee0721466ac5427a2687d8759ce5ffc19e0f57c2ca435cfc5) |
| — / 10 | 2026-10-23 12:29:31.752 | Cleanup sell 1.674406 JUP → SOL | `NoLiquidity` quote; later cleanup filled. **Ownership unknown.** | No order ID for failed quote; [Later successful order (context)](https://debug.barn.cow.fi/order/0x368ab0ac9832a83e103c76d5eb981c8448c11a1396aeac34eeab5aa3fd675249) |

</details>

## 3. Sell bursts

**Not achieved.** Batches reached 12 orders, but eight 0.0025 SOL→USDC orders timed out and were cancelled.

<details>
<summary>Order evidence and metrics</summary>

Filled **76/84 accepted main orders**, from **84 planned trades**. Total transactions: **15**. Main-order median / longest observed fill: **6.64 / 68.14 seconds** (76 fills).

Waves filled **4/4, 6/8, 12/16, 22/24 and 32/32**. Time from first accepted placement to last observed successful fill was **31.71, 18.51, 9.96, 54.28 and 68.14 seconds**, respectively; incomplete waves did not fully clear. Paused bursts do not establish a sustained throughput limit.

Batch histogram: 3×1, 3×2, 2×4, 1×5, 2×6, 1×7, 1×11 and 2×12 orders. The [12-order example](https://solscan.io/tx/JW5hY9axpJkDU4dusWFVTMmpvz4dArwuzeeaztA88uXvgfxUkXgMnMeYACnBVfXLEdfq8M31REpbe7y66q86ntk) has one top-level Jupiter swap. Rows 36, 40, 44, 48, 52, 56, 76 and 80 were cancelled after timeout; none filled in the saved snapshot and no failed settlement was joined to them.

Asao says only one solution per pair can win an auction and batches are now larger. Larger batches are verified; that explanation has not been proven to cause these eight specific timeouts. Keep the burst cases and trace repeated proposals / winning solutions before changing the timeout. **Ownership unknown** for the unfilled orders.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 2026-10-23 12:31:29.215 | Sell 0.0025 SOL → USDC (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0xb47db838cb995dbd19c938bb560f6dca510a1c2026edae0ee9bbf856e4f4cefb) |
| 36 / 29 | 2026-10-23 12:34:05.310 | Sell 0.0025 SOL → USDC (self) | `main timeout`; cancelled by the simulator; not filled in the snapshot. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0x5ca6b94425401ac7ba937b9989db4f2b5ad131486c9cf27ee4e0f9445b4f17fb) |
| 40 / 33 | 2026-10-23 12:34:09.368 | Sell 0.0025 SOL → USDC (self) | `main timeout`; cancelled by the simulator; not filled in the snapshot. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0x1972953cca0d0b24efc0a94853cf964712e1177fa4adebbed6dc32be7c3f4de4) |
| 44 / 29 | 2026-10-23 12:35:40.814 | Sell 0.0025 SOL → USDC (self) | `main timeout`; cancelled by the simulator; not filled in the snapshot. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0xb7e989004376812b085e1396fe581cf81ec346bab764bb5c1cd193e1e31414e2) |
| 48 / 33 | 2026-10-23 12:35:40.666 | Sell 0.0025 SOL → USDC (self) | `main timeout`; cancelled by the simulator; not filled in the snapshot. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0x6b2093117097748a57275a5062f140e0f95641d2ff74443781cef4c153db2861) |
| 52 / 37 | 2026-10-23 12:35:41.184 | Sell 0.0025 SOL → USDC (self) | `main timeout`; cancelled by the simulator; not filled in the snapshot. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0x5d95b2bc067364d4b802f1d3b4060e9d2802c199aac57b9d8f6d80fc71f3294c) |
| 56 / 41 | 2026-10-23 12:35:42.148 | Sell 0.0025 SOL → USDC (self) | `main timeout`; cancelled by the simulator; not filled in the snapshot. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0x4a0f00a9e3c8725b8b54697698e646d96c839274a7f52d511ff57670030a2f4b) |
| 63 / 32 | 2026-10-23 12:36:02.523 | Sell 0.004 SOL → USDC (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0xa6c40aed851dc30c04eecc16cda928dafff1f07683988bc0ee32bf853ad9da14) |
| 76 / 45 | 2026-10-23 12:37:12.506 | Sell 0.0025 SOL → USDC (self) | `main timeout`; cancelled by the simulator; not filled in the snapshot. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0xc3c68ebdf005dc58e2df17f9695b983af349fe9e3c70cc92d41c7abf1c9df832) |
| 80 / 49 | 2026-10-23 12:37:13.002 | Sell 0.0025 SOL → USDC (self) | `main timeout`; cancelled by the simulator; not filled in the snapshot. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0x0129ca76511d45980fe6be001c29ba6c03bf024592decb9717c898329b368e11) |
| 115 / 60 | 2026-10-23 12:37:40.382 | Sell 0.004 SOL → USDC (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0xb68538d4fdd0765275b2ac1551326fa47b0eb5c9c6dd7b21a9588577b9470550) |
| — / 53 | 2026-10-23 12:41:13.583 | Cleanup sell 0.260819 USDC → SOL | Cleanup sell timed out; final cancelled. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0x74571afae94ccc16d3ccbef937b3670963b53e09b45357b6fce2316645e3cabe) |
| — / 57 | 2026-10-23 12:41:39.444 | Cleanup sell 0.260017 USDC → SOL | Cleanup sell timed out; final cancelled. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0xb53e8f18a7a0414842e8ba041c37cf6aea6a8ed204b49c91b6acf483ef947736) |
| — / 58 | 2026-10-23 12:41:45.210 | Cleanup sell 0.312859 USDC → SOL | Cleanup sell timed out; final cancelled. **Ownership unknown.** A different [cleanup order](https://debug.barn.cow.fi/order/0xc7e9ab1ceaa384bf8ee2458f97c14f24dd698149500191bed5661a42c379746e) later filled. | [Order](https://debug.barn.cow.fi/order/0x17a1d4239ad35105e52908f4b9099299d12f913197f0a50219a33f2d21e5b7ad) |

</details>

## 4. Opposing orders

**Achieved for USDC/USDT.** Four opposing orders matched directly, with only the net remainder swapped through Jupiter; the SOL/USDC cases settled separately.

<details>
<summary>Order evidence and metrics</summary>

Filled **15/15 accepted main orders**, from **15 planned trades**. Total transactions: **11**. Main-order median / longest observed fill: **9.64 / 19.00 seconds** (15 fills).

All 15 accepted orders filled, including six explicit setup rows and nine main matching-test rows, across 11 transactions (nine singles, one two-order batch and one four-order batch).

The [four-order stablecoin transaction](https://solscan.io/tx/ptSFf1Yws6JtB6wbbA6Hw22Hj8Kk85yaRNc3QGYKCb5agioJMpT256yGazZ1zCsq6V6BTgKJSDr7UGj1TzQFmzf) joins rows 126–129 in auction **365079**, Asao solution **12**. It pulls **6 USDC + 4 USDT**; Jupiter swaps only **2.003795 USDC → 2.005901 USDT**. The other **3.996205 USDC and 4 USDT** move directly to payout buffers. Rows 126 and 129 each receive **3.000033 USDT**, row 127 receives **2.993554 USDC**, and row 128 receives **0.997713 USDC**. Opposite flows are therefore matched directly, with only the remainder routed externally.

This verifies the claimed matching fix for USDC/USDT. It does not prove every opposite pair matched: SOL→USDC rows 122 and 124 shared a same-direction batch, while the opposing USDC→SOL orders 123 and 125 used separate Jupiter settlements. Their successful fills are retained below; a separate settlement is not direct matching.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 122 / 61 | 2026-10-23 12:44:33.824 | Sell 0.02 SOL → USDC (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0xc87dad71ae88d4b64a8c02cf212bbe82befb4e4cf9578f3eca9f5da563db15d4) |
| 123 / 62 | 2026-10-23 12:44:35.151 | Buy USDC → exactly 0.02 SOL (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x4cc0d1b58ebf7d2c1ab46a297d7b8bb95ff5d084859a5b1897a0fc1aade47d08) |
| 125 / 64 | 2026-10-23 12:44:34.960 | Sell 1.2 USDC → SOL (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x2a4b110aa312a901d372c6e7d0aa22597c748e0f637f87444904402c4ace1b99) |
| 126 / 65 | 2026-10-23 12:44:34.639 | Sell 3 USDC → USDT (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0xb4cb2d031491793ea4b0b8cac2251a2601656f1aa7ca0486974a819de1524e55) |
| 127 / 66 | 2026-10-23 12:44:34.752 | Sell 3 USDT → USDC (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0xa1d57bf892dca4452aca8c52b60e8a221de347a1eba05e00486e41208f7c218e) |
| 128 / 67 | 2026-10-23 12:44:34.511 | Sell 1 USDT → USDC (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x7d146032f5c622522c37789b8d292f4476aa60d40bd9cadf342b081b881ceb77) |
| 129 / 68 | 2026-10-23 12:44:34.426 | Sell 3 USDC → USDT (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x302c050652769f41795b16a703bb3bc2791e5ff88a5efab99628c86a4256ab1e) |
| — / 64 | 2026-10-23 12:45:58.602 | Cleanup sell 0.198812 USDC → SOL | Cleanup sell timed out; final cancelled. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0xaab5ce692359f108cdf54292c9f9f80ac6bfb26b3a650fad51c985607b82aec4) |
| — / 66 | 2026-10-23 12:45:59.754 | Cleanup sell 0.248419 USDT → SOL | Cleanup sell timed out; final cancelled. **Ownership unknown.** | [Order](https://debug.barn.cow.fi/order/0x4de7ba0e8aff134bb208e103a06a8b694fa4e2024a31a9130ac14efaeed949ed) |

</details>

## 5. Token coverage

**Not achieved.** Only 16/52 planned trades completed; 34 quote requests failed and one accepted exact buy expired.

<details>
<summary>Order evidence and metrics</summary>

Filled **16/17 accepted main orders**, from **52 planned trades**. Total transactions: **16**. Main-order median / longest observed fill: **7.96 / 12.60 seconds** (16 fills).

Successful fixed-input sells, all paying SOL: [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm), [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn), [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So), [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v), [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij), [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm), [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs).

Successful exact-output buys, all paying SOL: [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1).

**34 quote failures:** 25 fixed-input sells and nine exact buys. Twenty-five failed at the quote-during-placement stage; nine failed the initial quote check. Requests used native SOL as input; several failing requests explicitly identify the destination as Token-2022. The exact error is `404 Not Found: NoLiquidity: no route found`; Asao’s quoting path also logged `QuotingFailed: No valid quote found`. This means no usable route was returned for that request, not proof the token has no liquidity or is permanently unsupported. **Ownership unknown:** the saved evidence does not separate upstream rate limiting, routing, token extensions or another cause.

The claimed Jupiter rate-limit and Token-2022 routing fixes are therefore not fully validated by this run. Keep the supported-token requests; do not silently exclude them. Row 169’s sponsored exact buy expired with `sponsored creation expired, dropping the order`; the underlying cause remains unknown.

The [cbBTC settlement](https://solscan.io/tx/4SxxfMEbzKhJ2F9jBRtvdsqFyTgDsDyuoSXkfmjJucS2FXQFm1JgNyYdCBAUuTBmrcqGMZ6oQLCg3RMxs37pB3uq) filled row 152 with 636 raw cbBTC units against a signed minimum of 634. No failed cbBTC attempt was recorded here; one successful sample does not independently prove the exact historical one-unit patch.

One additional planned token case failed during setup before acceptance, outside solver participation; it stays in the raw 52-row planned denominator but not the 17 accepted orders.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 136 / 75 | 2026-10-23 12:46:25.167 | Sell 0.01 SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) (sponsored) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 137 / 76 | 2026-10-23 12:46:28.283 | Sell 0.01 SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) (sponsored) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 138 / 77 | 2026-10-23 12:46:25.603 | Sell 0.01 SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 139 / 78 | 2026-10-23 12:46:25.747 | Sell 0.01 SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) (sponsored) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 140 / 79 | 2026-10-23 12:46:25.966 | Sell 0.01 SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) (sponsored) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 141 / 80 | 2026-10-23 12:46:26.083 | Sell 0.01 SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) (sponsored) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 142 / 81 | 2026-10-23 12:46:26.279 | Sell 0.01 SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 143 / 82 | 2026-10-23 12:46:26.645 | Sell 0.01 SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) (sponsored) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 144 / 83 | 2026-10-23 12:46:26.698 | Sell 0.01 SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) (sponsored) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 145 / 84 | 2026-10-23 12:46:26.965 | Sell 0.01 SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) (sponsored) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 146 / 85 | 2026-10-23 12:46:27.081 | Sell 0.005 SOL → [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 148 / 87 | 2026-10-23 12:46:27.477 | Sell 0.005 SOL → [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 149 / 88 | 2026-10-23 12:46:29.775 | Sell 0.005 SOL → [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn) (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0xcda4e59ca5461a8ac9e535363dacfbfa490be20a4e1eec96d31e96057947f5c5) |
| 152 / 91 | 2026-10-23 12:46:30.738 | Sell 0.005 SOL → [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij) (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0x1c8c2e9ecf43c60b1f199db1f1fdcfbcefc99836c51c4bd0388a91e144bc61b4) |
| 153 / 92 | 2026-10-23 12:46:29.565 | Sell 0.005 SOL → [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 154 / 93 | 2026-10-23 12:46:29.702 | Sell 0.005 SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 155 / 94 | 2026-10-23 12:46:30.127 | Sell 0.005 SOL → [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 156 / 95 | 2026-10-23 12:46:30.278 | Sell 0.005 SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 159 / 98 | 2026-10-23 12:46:31.165 | Sell 0.005 SOL → [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 160 / 99 | 2026-10-23 12:46:31.481 | Sell 0.005 SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 161 / 100 | 2026-10-23 12:46:31.763 | Sell 0.005 SOL → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 162 / 101 | 2026-10-23 12:46:32.169 | Sell 0.005 SOL → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 163 / 102 | 2026-10-23 12:46:32.312 | Sell 0.005 SOL → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 164 / 103 | 2026-10-23 12:46:32.477 | Sell 0.005 SOL → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 165 / 104 | 2026-10-23 12:46:32.690 | Sell 0.005 SOL → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 166 / 105 | 2026-10-23 12:46:32.932 | Sell 0.005 SOL → [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 167 / 106 | 2026-10-23 12:46:33.077 | Sell 0.005 SOL → [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL) (self) | `404 Not Found: NoLiquidity: no route found`; quote during placement; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 168 / 70 | 2026-10-23 12:46:38.077 | Buy SOL → exactly 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0xac42896111d2df6e18dc26f6e2c1e9b6cfde00941434266c4add968c956a83cd) |
| 169 / 71 | 2026-10-23 12:47:07.395747932 | Buy SOL → exactly 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) (sponsored) | `sponsored creation expired, dropping the order`; final expired. **Ownership unknown:** reason the creation did not land is unconfirmed. | [Order](https://debug.barn.cow.fi/order/0x69d771036acb3ba7e799c89686293b357cf9c24daaab6b26acf23f29c2cec4aa) |
| 170 / 72 | 2026-10-23 12:46:38.642 | Buy SOL → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0xa5e65a9cbf3ba4f3b6cc743a66f5a8b7edb29b083cd1e81a010a083cf3476704) |
| 173 / 75 | 2026-10-23 12:46:28.486 | Buy SOL → exactly 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) (sponsored) | `404 Not Found: NoLiquidity: no route found`; initial quote check; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 174 / 76 | 2026-10-23 12:46:34.039 | Buy SOL → exactly 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0xd9ce3b42f9986b076e4c8ab4f8ad4fc9bc36152dd344bab9aef71acacda2bfe4) |
| 175 / 77 | 2026-10-23 12:46:28.117 | Buy SOL → exactly 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) (self) | `404 Not Found: NoLiquidity: no route found`; initial quote check; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 176 / 78 | 2026-10-23 12:46:28.260 | Buy SOL → exactly 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) (sponsored) | `404 Not Found: NoLiquidity: no route found`; initial quote check; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 177 / 79 | 2026-10-23 12:46:28.910 | Buy SOL → exactly 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) (sponsored) | `404 Not Found: NoLiquidity: no route found`; initial quote check; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 178 / 80 | 2026-10-23 12:46:32.386 | Buy SOL → exactly 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) (sponsored) | `404 Not Found: NoLiquidity: no route found`; initial quote check; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 179 / 81 | 2026-10-23 12:46:29.863 | Buy SOL → exactly 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) (self) | `404 Not Found: NoLiquidity: no route found`; initial quote check; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 180 / 82 | 2026-10-23 12:46:30.865 | Buy SOL → exactly 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) (sponsored) | `404 Not Found: NoLiquidity: no route found`; initial quote check; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 181 / 83 | 2026-10-23 12:46:34.262 | Buy SOL → exactly 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) (sponsored) | `404 Not Found: NoLiquidity: no route found`; initial quote check; never placed. **Ownership unknown.** | No order ID: quote failed before placement |
| 182 / 84 | 2026-10-23 12:46:31.878 | Buy SOL → exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) (sponsored) | `404 Not Found: NoLiquidity: no route found`; initial quote check; never placed. **Ownership unknown.** | No order ID: quote failed before placement |

</details>

## 6. Fresh receiving accounts

**Achieved.** All eight cases filled after their receiving accounts were checked as missing, covering self-paid and sponsored sells and exact buys.

<details>
<summary>Order evidence and metrics</summary>

Filled **8/8 accepted main orders**, from **8 planned trades**. Total transactions: **6**. Main-order median / longest observed fill: **6.38 / 15.60 seconds** (8 fills).

At **12:48:46.047 UTC**, all eight designated receiving accounts were checked as missing. These wallets skipped ordinary receiving-account preparation; each was funded with **0.15 SOL**, with **500 bps slippage** for this scenario. All eight self-paid / sponsored sell and exact-buy cases filled. These are SOL/USDC/USDT cases; they do not establish fresh-account behavior for every supported token.

Six transactions: four singles and two two-order batches. The [fresh-account settlement](https://solscan.io/tx/PfSgPEQgP5962F5WvuNJjtMv9xeRD72XwFun6cZvf4KG1JAASeJosjKBgcyAGpKUxAsUTTrmwZWUPpWJsJL8AJ3) creates the missing USDC receiving accounts and fills the paired sells. This verifies fresh-account handling in this sample, without claiming the exact rent or fee economics for all sizes.

| Run row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 183 / 107 | 2026-10-23 12:48:56.393 | Sell 0.1 SOL → USDC (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0x1ede012a936d858859f2c28f1b088751f94cb60f742f5806577487f2ffee2081) |
| 184 / 108 | 2026-10-23 12:48:55.463 | Sell 0.1 SOL → USDC (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x4948b0a33410ce8a0a52775f236274e4a5f9a013f991bc3f5cd41027252c10a6) |
| 187 / 111 | 2026-10-23 12:48:56.917 | Sell 0.1 SOL → USDT (self) | Filled. | [Order](https://debug.barn.cow.fi/order/0xe49bcc4afe38f7a96f1d58ec1db0ebefc0d927df8d282141877a36b5115b6bea) |
| 190 / 114 | 2026-10-23 12:48:56.703 | Buy SOL → exactly 10 USDT (sponsored) | Filled. | [Order](https://debug.barn.cow.fi/order/0x0108978ff72b99b9f706e4e8bbd1e2767573abab6a8261a979750e4f0c0dc1e1) |

</details>
