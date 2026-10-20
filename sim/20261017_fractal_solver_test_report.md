> **Adjusted composite results (20 October): 190/190 eligible flows filled (100.00%). 3 unsupported transfer-fee rows excluded.** The detailed report below retains historical raw counts. Use the [recalculated full report](../sessions/2026-10-17-09-36-composite-fractal-run/solver_test_report.md) for scoring.

# Fractal solver test report

Date: 17 October 2026. Environment: staging / Barn on Solana mainnet. Selected completed run: `2026-10-17-09-36-composite-fractal-run`, 09:37:27–10:08:00 UTC including cleanup; observation ended 10:09:00 UTC; fetched 10:13:37 UTC.

**TLDR:** Fractal filled all 192 placed scenario orders, including batches of 6 and all 8 fresh-wallet cases. Opposite orders settled separately, so direct matching wasn't achieved. Next, repeat that check with verified auction overlap and check who paid to open the fresh receiving accounts.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Achieved: 6/6 flows; 8/8 placed filled | Repeat with larger amounts |
| 2. 25 same-direction sells | Achieved: batches of 6; 25/25 filled | Check swap count and pricing |
| 3. Sell bursts | Achieved for bursts: 84/84 filled | Test team: measure sustained load |
| 4. Opposing orders / CoW | Not achieved: opposite sides settled separately; 15/15 filled | Test team: verify shared auctions |
| 5. Token coverage | Achieved for placed orders: 52/52 filled | Extend exact-output token coverage |
| 6. Fresh accounts | Flow achieved: 8/8 filled; solver-paid rent inconclusive | Test team: inspect account-opening instructions |

## Changes since 16 October 2026

Across the same 5 scenarios, fills rose from 144/184 to 184/184 placed orders; the added fresh-account scenario filled another 8/8.

<details>
<summary>Comparison with the previous run</summary>

Baseline: completed 16 October staging run `2026-10-16-10-12-composite-fractal-run`, checked against its saved journal, orders and matching report scope.

| Matching scope / metric | 16 October | 17 October |
| --- | --- | --- |
| Same 5 scenarios: filled / placed | 144/184 | 184/184 |
| Same 5 scenarios: completed / planned flows | 142/185 | 182/185 |
| Distinct successful scenario settlements | 64 | 90 |
| Same-direction sell batch maximum | 6 | 6 |
| Token coverage: fixed-input sells / exact-output buys filled | 24 / 3 | 37 / 15 |
| Creation-expired / cancelled scenario orders | 39 / 1 | 0 / 0 |
| Median / longest observed fill, seconds | 14.900 / 69.716 | 11.335 / 29.991 |

Standard pairs (6/6 flows), same-direction sells (25/25) and bursts (84/84) still filled completely. The matching 185 rows have unchanged amounts, directions and order modes. Today ordinary receiving accounts were prepared upfront and cleanup ran between scenarios; yesterday cleanup was deferred, so gains cannot all be attributed to solver changes. Timing includes only fulfilled orders, whose population changed.

New recorded error types and newly affected failed orders in this report’s scope: 0.

The previous 39 creation expiries and XAUt0 cancellation had unknown ownership; their absence today doesn't establish the earlier cause was fixed.

Recovered examples (all fulfilled; previously creation-expired, except XAUt0, which was cancelled):

| Row / trader | Trade | Debug tool URL |
| --- | --- | --- |
| 131 / 70 | Sell 0.01 SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | [Debug](https://debug.barn.cow.fi/order/0x4b2c795999ad225a6e7ac700e135b0b33cfcd200b94fe1c50f37f2487e30dc77) |
| 175 / 74 | Buy SOL → exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | [Debug](https://debug.barn.cow.fi/order/0x5b129dd002699d511fc7731d359dc85fc566e5f4f13c75bb22016615f1cef349) |
| 185 / 84 | Buy SOL → exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | [Debug](https://debug.barn.cow.fi/order/0x761bcc8c201d96dfcaff2856209c8149963fca6a56cad5f065889f7f93645f03) |
| 163 / 102 | Sell 0.005 SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) | [Debug](https://debug.barn.cow.fi/order/0xc9245695cd194e607cccde11c3ea3c74a180a1576489619775f74ecd71f72712) |

</details>

## 1. Standard pairs

**The standard-pair goal was achieved.** All 6 flows completed, including both order kinds for each pair.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 8. Filled / placed orders: 8/8. Completed flows / planned rows: 6/6. Median / longest fill: 9.688 / 12.678 seconds.

The placed-order denominator includes 190 main orders and 2 JUP acquisition orders, and excludes cleanup and requests rejected before placement. Six setup trades in the opposite-order scenario are planned rows and count toward completed flows. Total transactions means 94 distinct successful settlements for these 192 scenario orders; it excludes creation, funding, failed attempts and cleanup.

Timings use placement → simulator-observed fill, including polling delay, and include only fulfilled orders. The overall median / longest fill is 11.548 / 29.991 seconds. Table timestamps show placement for successful examples and the first recorded failure for errors; row and trader numbers use combined-session numbering.

Saved staging autopilot competition records confirm Fractal participation: 289 proposed candidates, 168 wins, 168 submissions and 168 observed on chain, including cleanup. The saved settlement-failure and creation-expiry files are empty. Detailed candidate rejections and full transaction instructions aren't stored, so these records cannot prove every attempted solution succeeded or establish swap counts, transaction sizes or account-rent payer.

Fixed-input sells and exact-output buys passed for SOL/USDC, SOL/USDT and JUP/USDC. The JUP flows needed 2 extra SOL → JUP acquisitions; both filled. All 8 settlements contained 1 selected order.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 09:37:29.579 | Sell 0.005 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/41NsrCAUqjXkgxc2KAUhc8AeM5YeucaTqrWbNuZxBdfhEyFxRWT5tQTpi4KimyJ5a866Q2bLUyJajzgyd47X3pSL) | [Debug](https://debug.barn.cow.fi/order/0x5308e7eadf87288950bb21dbcb86334783319c4fe32bf2992c97fb71e3839eee) |
| 3 / 3 | 09:37:49.940 | Sell 0.5 JUP → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5DrES1gG9JkWZYM2uQdU5V9EQoTVAkhd2h2qTe2WX7WzRyPD5krKspBnS5sV5CDEX692WwvzDKYFGXegQNgKR5eG) | [Debug](https://debug.barn.cow.fi/order/0xd16084785ac0b0252f14d639b4d6b941421aed500a6c379b3b679a05bd66e430) |
| 4 / 1 | 09:37:37.220 | Buy SOL → exactly 0.25 USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5VgwywQqvTpWti51hrfgkA6EQviL2WbNGqm1ovNRWAAANVu3VgEPxKoHtbcq3fMbLVPNxCf49fCkzZBBDikTvxZ6) | [Debug](https://debug.barn.cow.fi/order/0x8dc77076d6d95651948bb763018477161faaf4d74c5c1360c4201e32e048c93e) |
| 6 / 3 | 09:38:14.316 | Buy JUP → exactly 0.25 USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4gXTqcLRhPHSTv2DzRFH4xpH6o6wBgpqYmuanyW95f5emacxrBgK5xWqMtn1fUmNyH84jS4wkGrpndqri8K5Qypq) | [Debug](https://debug.barn.cow.fi/order/0xaf5b2e53022266408a342d0c25beb8d0439e0e892547fddf33451f6bc3d5ea72) |

</details>

## 2. 25 same-direction sells

**Batching was achieved.** All 25 sells filled in 5 settlements, with batches of 6.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 5. Filled / placed orders: 25/25. Completed flows / planned rows: 25/25. Median / longest fill: 15.585 / 25.340 seconds.

Setup: 25 self-paid sells of 0.005 SOL → JUP. Settlement membership is 4 batches of 6 and 1 single. The linked batch groups rows 7, 12, 13, 17, 21 and 24; shared signatures verify batching, but swap count and payout pricing are unverified.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 09:39:27.896 | Sell 0.005 SOL → JUP | None; fulfilled. [Settlement](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) | [Debug](https://debug.barn.cow.fi/order/0x352369d8b28ec3e6895f9a7771575e8c4e2faa4b41ea91fe42afb9bcec63ea0f) |
| 12 / 9 | 09:39:30.902 | Sell 0.005 SOL → JUP | None; fulfilled. [Settlement](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) | [Debug](https://debug.barn.cow.fi/order/0x49a51e5cd23b0cc5e2bfaee89a28bfd235772c96ded3f69db8e397032971b10b) |
| 24 / 21 | 09:39:31.646 | Sell 0.005 SOL → JUP | None; fulfilled. [Settlement](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) | [Debug](https://debug.barn.cow.fi/order/0x49be1d804d1ed24ff2dd46cabcf59df0ebfd019c15ac655df1687306a7d336fe) |

</details>

## 3. Sell bursts

**Burst handling was achieved; sustained throughput remains inconclusive.** All 84 trades filled, and the largest 32-order wave cleared in 41.942 seconds.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 16. Filled / placed orders: 84/84. Completed flows / planned rows: 84/84. Median / longest fill: 11.908 / 29.991 seconds.

The 4, 8, 16, 24 and 32-order waves were scheduled 90 seconds apart, selling 0.0025–0.004 SOL → USDC. From each scheduled wave start to its last observed fill, clearing took 11.180, 15.476, 26.453, 31.282 and 41.942 seconds. The 16 settlements comprised 11 batches of 6, 2 of 4, 1 of 5, 1 of 3 and 1 of 2; this does not establish a sustained throughput ceiling.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 09:42:30.459 | Sell 0.0025 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5ywRveWKca5jdxE7Z4CJH6vjuyWf2JimpL6TRjnBPvmXGXCg3vGVuXWvnjKA56APfpWtj9McwkYou2XCX6Ude2k3) | [Debug](https://debug.barn.cow.fi/order/0x4ec000ec20d164ab9383a1b173eb410d8020a67472c3ae430110014aeeff51fb) |
| 44 / 29 | 09:45:33.647 | Sell 0.0025 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5PvzY6GgecxQ6C2oTH8LCrwAigZWVVnYiAwJZiZTxKz751XY27WvG9b5MBrcWdSMUmssmJY1mE9rHjYTho6jGSua) | [Debug](https://debug.barn.cow.fi/order/0xa9dbe5cb1a9506a10a675f304b5eed8321b2b7416a2ae381dec6c41c18183ceb) |
| 84 / 29 | 09:48:39.450 | Sell 0.0025 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4CxAW85LARJsuK3RdPaQuvbZ3yXjUS4V6zBc3o8BrJRnBqHSaYs2AjkXCFLGmuyqvEABuzGwF7sREbLFtCeXfsbZ) | [Debug](https://debug.barn.cow.fi/order/0xb1c4e11d180e95ec8ca02157ab6f6eeea85aa2f5a1b1af881b7a960d2a11fc56) |
| 115 / 60 | 09:48:41.752 | Sell 0.004 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4VaMUVbzuBqvwySLSwKnZKxjQhTxLSmtJa6Ca9UYxmgJZNgAhiXcytxLC9ssTsisuUjcoePDrwUqjVHCWyxQmX3o) | [Debug](https://debug.barn.cow.fi/order/0xde8befa7f3f27f2b1ed2c57497b81dc13d67e321fcf475defce8146c0257236a) |

</details>

## 4. Opposing orders / CoW

**Direct matching was not achieved in the recorded settlements.** All 15 trades filled, but opposite sides settled separately; the test team needs to confirm shared-auction exposure.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 9. Filled / placed orders: 15/15. Completed flows / planned rows: 15/15. Median / longest fill: 12.486 / 12.826 seconds.

All 6 planned inventory-building buys and all 9 later test orders filled. Opposite SOL/USDC legs (rows 122/123 and 124/125) settled in different transactions. USDC → USDT rows 126 and 129 also settled separately from USDT → USDC rows 127/128, which shared a same-direction batch. Thus no recorded settlement directly matched the opposite sides. The 9 settlements include 2 setup batches; auction overlap and swap instructions are unavailable, so this is not an established solver capability limit.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 116 / 62 | 09:52:02.725 | Buy SOL → exactly 2.6 USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4xQVJMUMABXhcoQJG179K9WjW9bEWGR81VA88hVeuByMjRcGq9RTUQjg3aT7BcS8H7rnUKAg2SsE5r5zSF8b8qtg) | [Debug](https://debug.barn.cow.fi/order/0x0535c4d0d6f6e38e4c16595c39e2093dbc00ef21325770527cf7dbe99e0eafbf) |
| 122 / 61 | 09:54:31.914 | Sell 0.02 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5uBJQhNNVTvj4eNgBuUK9bcPm2mtGuA3VgWgj8mvzen8JueCjiLbjTyezw75sBg5a6Bfuaox561DnsoYVYgho1hp) | [Debug](https://debug.barn.cow.fi/order/0xac158352d01e4cbf49b72ca614300e8f7caf884fbbaf1c28f4b89d6f8ed02b06) |
| 123 / 62 | 09:54:33.241 | Buy USDC → exactly 0.02 SOL | None; fulfilled. [Settlement](https://solscan.io/tx/3WogAgoH8jHR44mbDfdvAHVtcTyt7G2FrCmd8uKpfmPCSYRRoPtfdvUQZb9VVM9QnC58cQP55m1sGt3UgK4XhPc5) | [Debug](https://debug.barn.cow.fi/order/0x24d35c1770ca4b4caf4a0caf45dafd9fa0219c9c74400ff71b40008e98e9b8c3) |
| 124 / 63 | 09:54:32.003 | Sell 0.03 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5uBJQhNNVTvj4eNgBuUK9bcPm2mtGuA3VgWgj8mvzen8JueCjiLbjTyezw75sBg5a6Bfuaox561DnsoYVYgho1hp) | [Debug](https://debug.barn.cow.fi/order/0xed85849f9d912ede393d7aa96c8bcb304ccfdc6f82342db2a90723136af3da99) |
| 125 / 64 | 09:54:32.123 | Sell 1.2 USDC → SOL | None; fulfilled. [Settlement](https://solscan.io/tx/3myKG39tsgtbUmq3cHneu28R3wkputVEtr7U8grTAtqZ7HphpgcLb2zovycVQ9vhvW9y5Athy7Djq1XLU2ZS1qE3) | [Debug](https://debug.barn.cow.fi/order/0xbc41f6ed0c90156c71d88ee0156fe584f36764c49f16796b7bdbce43cc18fdda) |
| 126 / 65 | 09:54:32.212 | Sell 3 USDC → USDT | None; fulfilled. [Settlement](https://solscan.io/tx/5s63ZS49y55DK7cZCb18CJeBfyANZ6ZMvmQKiUZweKoxnpEfXxhNkf7y1YqgJ1kotfCapubt1c7dDn2wAdcdt6D7) | [Debug](https://debug.barn.cow.fi/order/0xbec7136ac6f0b8abfeb27c39ed360385319422a82e277a95bb5f4e0cd27719d9) |
| 127 / 66 | 09:54:32.365 | Sell 3 USDT → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4kNuGAShcZiv4bs9QwVmZ9YREXZ4vEeBnnm4NWUJJLBLyVF3q9H6XVeQmmBAdNqrghkGFNMaEUcxX4K5qxjhexuv) | [Debug](https://debug.barn.cow.fi/order/0x3b7c6bf3f138fd3ab1def8359f5dd0864eef02126a9fd1a8601ad48de2439785) |
| 128 / 67 | 09:54:32.584 | Sell 1 USDT → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4kNuGAShcZiv4bs9QwVmZ9YREXZ4vEeBnnm4NWUJJLBLyVF3q9H6XVeQmmBAdNqrghkGFNMaEUcxX4K5qxjhexuv) | [Debug](https://debug.barn.cow.fi/order/0x79c8aa558ea40bffa39da80a0e21457eda5976100908586a74020b3bafa4127d) |
| 129 / 68 | 09:54:32.772 | Sell 3 USDC → USDT | None; fulfilled. [Settlement](https://solscan.io/tx/3mSTSGaT2fUdioU495DTJtEs5ToWZPp2nC7ndUhGu6rMBhroY7sJ9hJ7o4LAJzSs1R1nGb4k1bpzMEmECN9s3nj3) | [Debug](https://debug.barn.cow.fi/order/0x9deddf9f6c3b8060550dd4fe0bf0aea52ed6c1928d5130c6672d1458a260f117) |
| 130 / 69 | 09:54:32.122 | Sell 0.02 SOL → JUP | None; fulfilled. [Settlement](https://solscan.io/tx/2GewCxB8HrWamUGAgHncx81SuQjzkvwW5aKdxYnXHynsH6eMxcTE6MTDqfoknZArTsKgPACkBo9mfdtEw9fQGEtd) | [Debug](https://debug.barn.cow.fi/order/0x2e58e5edac54301aaacbb9e67df1bf19edaa60b8a9683291489319520f901af3) |

</details>

## 5. Token coverage

**Token coverage was achieved for all placed orders.** All 37 fixed-input sells and 15 exact-output buys filled, including XAUt0 and the previously expired Token-2022 cases.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 52. Filled / placed orders: 52/52. Completed flows / planned rows: 52/55. Median / longest fill: 11.288 / 17.785 seconds.

Fixed-input SOL → token sells filled for all 37 placed requests: ANSEM, PAID, USDG, PUMP, PYUSD, CASH, CRCLx, SPYx, USDv, SKHY, NVDAx, MU, SPCX, SPCXx, TSLAx, BONK, WIF, POPCAT, JitoSOL, mSOL, JupSOL, cbBTC, USDe, EURC, USDY, JLP, INF, ETH, BNB, XAUt0, GLDx, EUROP, Fartcoin, MEW, BOME, hyloSOL, PSOL.

Exact-output buys paying SOL filled for all 15 placed requests: ANSEM, PAID, USDG, PUMP, PYUSD, CASH, CRCLx, SPYx, USDv, SKHY, NVDAx, MU, SPCX, SPCXx, TSLAx. These cases test ordinary public transfers of tokens carrying the listed extensions; confidential transfers, active hooks and paused/frozen states were not exercised.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 131 / 70 | 09:56:07.797 | Sell 0.01 SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | None; fulfilled. [Settlement](https://solscan.io/tx/moa7TLsSsqAxnFUu1sDAWwVgphnDAQ24UPEBEKPWccHoDsbBcKkXDDEHhJBd1ceMvpZxjTTihnj1jT2nC3PSdYi) | [Debug](https://debug.barn.cow.fi/order/0x4b2c795999ad225a6e7ac700e135b0b33cfcd200b94fe1c50f37f2487e30dc77) |
| 137 / 76 | 09:56:08.448 | Sell 0.01 SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | None; fulfilled. [Settlement](https://solscan.io/tx/4W3GXD5AQSP1BXM3TbyC8et1yy9zsmc939ebKL5NNpVix7oKWzGZCgrAT1JSPjpL5Ye6FF8eZETfZxWGiWQgPx2S) | [Debug](https://debug.barn.cow.fi/order/0xf489243f5fd9e1027e6be7f58a2230bc07450e2d9baab58cad7c78b045b58c3d) |
| 163 / 102 | 09:56:15.617 | Sell 0.005 SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) | None; fulfilled. [Settlement](https://solscan.io/tx/4asktNsbpp3dKt8DTjwASsTB3SdnCPF2WUP26KkP1Lxt5y6T9WUwb4SzFwcDVNBJsw7UUNNHGg9v2H1ePtN7PmUD) | [Debug](https://debug.barn.cow.fi/order/0xc9245695cd194e607cccde11c3ea3c74a180a1576489619775f74ecd71f72712) |
| 173 / 72 | 09:56:21.627 | Buy SOL → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | None; fulfilled. [Settlement](https://solscan.io/tx/mQiMSY9kxDRtAUi8wTPGs8vRCcfWLtkrQ4wAeohus8gxtNaEuEErcGatDivrqMqgouKn4sxtvwKAPgLNFX8PyGV) | [Debug](https://debug.barn.cow.fi/order/0xd306002251feaec6595ca0def15fa6c2820763f7ad928dd3cdf2cde718a293a4) |
| 175 / 74 | 09:56:22.900 | Buy SOL → exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | None; fulfilled. [Settlement](https://solscan.io/tx/4QfgnSn6o7iE8qsDSqXSUWPREUPWY2yZLoVx93PKrLBGrJ8KA5xYQHYR1wg9jK917BDbwCb7vQhWuAsCvk3UUhzT) | [Debug](https://debug.barn.cow.fi/order/0x5b129dd002699d511fc7731d359dc85fc566e5f4f13c75bb22016615f1cef349) |
| 185 / 84 | 09:56:25.665 | Buy SOL → exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | None; fulfilled. [Settlement](https://solscan.io/tx/4YRo1ZVSW8utdkJLgifzWhv7mWj1c42UCm5vy2wj7mi2Ft8e6Wd72Jbd9MkJA2SHcVQQX2QVU86SE33utqybZifA) | [Debug](https://debug.barn.cow.fi/order/0x761bcc8c201d96dfcaff2856209c8149963fca6a56cad5f065889f7f93645f03) |

</details>

## 6. Fresh accounts

**The fresh-wallet order flows were achieved; solver-paid account opening remains inconclusive.** All 8 cases filled, but the saved evidence does not identify who opened the receiving accounts.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 4. Filled / placed orders: 8/8. Completed flows / planned rows: 8/8. Median / longest fill: 19.110 / 22.562 seconds.

Setup: 8 separate wallets; 4 self-paid and 4 sponsored cases; sells of 0.1 SOL → USDC/USDT and exact buys of 10 USDC/USDT with SOL. All filled in 4 two-order settlements. At 09:59:59.801 UTC the journal recorded the fresh-account check for all 8 receiving addresses; none appears in the upfront token-account creation events. The scenario used 0.15 SOL funding per wallet and 500 bps (5%) slippage. Full creation and settlement instructions are absent, so account freshness at settlement and solver-paid opening rent remain unverified; a successful fill alone cannot establish either.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 186 / 110 | 10:00:07.155 | Sell 0.1 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/44kethU4dLfyTi4YJ8htQgUTK76bpmpX7MP75VNzTF5P2pCsWz8A8k9UQx3He8vJ553XVKTUnPTd3r4Zj61aB95c) | [Debug](https://debug.barn.cow.fi/order/0xc3d6f3d78ce3ff6bd36443e1e00835727efe8d7633266922504bfdf5246e0d1a) |
| 187 / 111 | 10:00:05.802 | Sell 0.1 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/44kethU4dLfyTi4YJ8htQgUTK76bpmpX7MP75VNzTF5P2pCsWz8A8k9UQx3He8vJ553XVKTUnPTd3r4Zj61aB95c) | [Debug](https://debug.barn.cow.fi/order/0xd49392cc77266e8d8224827ae84c2d1eeacc194a7a385f94aaf37177f7029b29) |
| 188 / 112 | 10:00:09.986 | Buy SOL → exactly 10 USDC | None; fulfilled. [Settlement](https://solscan.io/tx/tL6p85crmMhZ6JKUvPaYtGY7B55r7jykYQ2hY9ve4D9zB7pEonyTvqkD5YyjxKZKFmjZUH6KgyT5wLRgizXBUsU) | [Debug](https://debug.barn.cow.fi/order/0x0026bb3fdc3dafd9f2e26fa17295775589c83f68aa3b2107740cb3cb1702d86f) |
| 189 / 113 | 10:00:06.753 | Buy SOL → exactly 10 USDC | None; fulfilled. [Settlement](https://solscan.io/tx/tL6p85crmMhZ6JKUvPaYtGY7B55r7jykYQ2hY9ve4D9zB7pEonyTvqkD5YyjxKZKFmjZUH6KgyT5wLRgizXBUsU) | [Debug](https://debug.barn.cow.fi/order/0x49212de09f64ef5876b846e7d01a4f2b76c98e3a71c6e23a29bebd1c1845652a) |
| 190 / 114 | 10:00:07.400 | Sell 0.1 SOL → USDT | None; fulfilled. [Settlement](https://solscan.io/tx/3ux9ZZyM5jXSWedx6o1FoSeCr9cFY7BvJQnfJTb2xDspuxxLy31eGfo6e49MMGzGV1PsxM6KX1MtrW7NCqY2yVZm) | [Debug](https://debug.barn.cow.fi/order/0x7f301f90f60da4689247850ba3da5bbc909d23c5fff81d70cc3f6a5dc09ed4e6) |
| 191 / 115 | 10:00:06.143 | Sell 0.1 SOL → USDT | None; fulfilled. [Settlement](https://solscan.io/tx/3ux9ZZyM5jXSWedx6o1FoSeCr9cFY7BvJQnfJTb2xDspuxxLy31eGfo6e49MMGzGV1PsxM6KX1MtrW7NCqY2yVZm) | [Debug](https://debug.barn.cow.fi/order/0x1b27aa40402d090840254c770ac00497d2e3c3ef203a10e1e1042389408c7144) |
| 192 / 116 | 10:00:08.302 | Buy SOL → exactly 10 USDT | None; fulfilled. [Settlement](https://solscan.io/tx/ykjA7eHhY5Ktj5gG5gqFvcBVSMJXRELn4tYmRqEBeXFVwzU2JPnuyZntaN1GjsaUb9ve2j1pjkA9SCxLCH5GEVC) | [Debug](https://debug.barn.cow.fi/order/0xa0bf635da3433a5f4cc26ce34661d464545cb076222eae2896c38c11092f6335) |
| 193 / 117 | 10:00:07.375 | Buy SOL → exactly 10 USDT | None; fulfilled. [Settlement](https://solscan.io/tx/ykjA7eHhY5Ktj5gG5gqFvcBVSMJXRELn4tYmRqEBeXFVwzU2JPnuyZntaN1GjsaUb9ve2j1pjkA9SCxLCH5GEVC) | [Debug](https://debug.barn.cow.fi/order/0x85f0078bcc280ff5d921f1c8c9e4b8ee9f086d2be1711b0082f832b961b82370) |

</details>
