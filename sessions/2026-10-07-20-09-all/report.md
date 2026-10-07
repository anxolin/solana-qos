# Solana QoS report: 2026-10-07-20-09-all

Barn, orders created between `2026-10-07T20:09:35.541Z` and `2026-10-07T20:19:13.724Z`. Data fetched 2026-10-07T20:20:16+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 27 |
| Orders executed | **27** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 14 |
| Settlement txs | 27 |

## Scenario

27 of 48 scenario rows completed. 0 retries, 13 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 20:09:35 | 1 | 1 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 23s | 1 |  |
| 20:09:58 | 2 | 1 | sell 4.89 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → SOL | filled | 7s | 1 |  |
| 20:10:05 | 3 | 1 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:35 | 4 | 2 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 28s | 1 |  |
| 20:10:03 | 5 | 2 | sell 132 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump → SOL | filled | 4s | 1 |  |
| 20:10:07 | 6 | 2 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:35 | 7 | 3 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 30s | 1 |  |
| 20:10:05 | 8 | 3 | sell 0.696 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → SOL | filled | 4s | 1 |  |
| 20:10:09 | 9 | 3 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:35 | 10 | 4 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 24s | 1 |  |
| 20:09:59 | 11 | 4 | sell 107 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn → SOL | filled | 29s | 1 |  |
| 20:10:29 | 12 | 4 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:36 | 13 | 5 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 23s | 1 |  |
| 20:09:58 | 14 | 5 | sell 0.696 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → SOL | filled | 7s | 1 |  |
| 20:10:05 | 15 | 5 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:36 | 16 | 6 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 32s | 1 |  |
| 20:10:07 | 17 | 6 | sell 0.696 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → SOL | filled | 7s | 1 |  |
| 20:10:14 | 18 | 6 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:36 | 19 | 7 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 31s | 1 |  |
| 20:10:06 | 20 | 7 | sell 0.00861 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | filled | 56s | 1 |  |
| 20:11:02 | 21 | 7 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:36 | 22 | 8 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 29s | 1 |  |
| 20:10:04 | 23 | 8 | sell 0.000896 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 5s | 1 |  |
| 20:10:09 | 24 | 8 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:36 | 25 | 9 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 22s | 1 |  |
| 20:09:58 | 26 | 9 | sell 0.696 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk → SOL | filled | 7s | 1 |  |
| 20:10:04 | 27 | 9 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:36 | 28 | 10 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 23s | 1 |  |
| 20:09:59 | 29 | 10 | sell 0.00389 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 → SOL | filled | 7s | 1 |  |
| 20:10:06 | 30 | 10 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:36 | 31 | 11 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 29s | 1 |  |
| 20:10:05 | 32 | 11 | sell 0.00293 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | filled | 10s | 1 |  |
| 20:10:15 | 33 | 11 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:36 | 34 | 12 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 26s | 1 |  |
| 20:10:03 | 35 | 12 | sell 0.000641 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 → SOL | filled | 5s | 1 |  |
| 20:10:07 | 36 | 12 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:36 | 37 | 13 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 71s | 1 |  |
| 20:10:47 | 38 | 13 | sell 0.00414 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb → SOL | filled | 10s | 1 |  |
| 20:10:57 | 39 | 13 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:36 | 40 | 14 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 52s | 1 |  |
| 20:10:28 | 41 | 14 | sell 0.00415 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | failed | 0s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:10:28 | 42 | 14 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:37 | 43 | 15 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 17s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:09:54 | 44 | 15 | sell 0.00184 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | failed | 0s | 0 | acquire XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB error: 404 Not Found: NoLiquidity: no route found |
| 20:09:54 | 45 | 15 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:09:37 | 46 | 16 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 16s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 20:09:37 | 47 | 17 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 20s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 20:09:37 | 48 | 18 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 19s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |

### Rows without an order

21 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 15 | SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → XsDo…HzoB | no route found |
| UnsupportedToken | main | 3 | SOL → DEW9…8WDP, SOL → HcRL…DeJR, SOL → Pren…Lkhw | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| BlockhashExpired | main | 2 | SPCXx → SOL, SOL → XsDo…HzoB | the transaction's blockhash is no longer valid, sign a fresh one |
| NoLiquidity | acquire | 1 | SOL → XsDo…HzoB | no route found |

Scenario orders: 27 (27 main, 0 acquire). Cleanup placed 27 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 20:11:05 | 1 | XST → SOL (native) | Executed | `0x669844bd…` [🐞](https://debug.barn.cow.fi/order/0x669844bd6fd6a8592b56c36cd9c55e8dc32c19dc8e64ca2a6256f9d5326e9309) |
| 20:11:05 | 1 | CARDS → SOL (native) | Executed | `0x7a5c34ad…` [🐞](https://debug.barn.cow.fi/order/0x7a5c34ad6a3d125f475fdda4abcdec317ba11227b5f9f29fb7f4192e08a84458) |
| 20:11:05 | 1 | ANSEM → SOL (native) | Executed | `0xc21dc8e0…` [🐞](https://debug.barn.cow.fi/order/0xc21dc8e0a1cc80ac5d5429bd6d0e55528f011afa15db02c6045075cde9b98509) |
| 20:11:06 | 2 | PAID → SOL (native) | Executed | `0x4a16ba43…` [🐞](https://debug.barn.cow.fi/order/0x4a16ba4386354cce9bed5ebd256c6b1782b19fc31813d1547fc2c5c7e172b4b8) |
| 20:11:06 | 2 | MET → SOL (native) | Executed | `0x2c3f1a96…` [🐞](https://debug.barn.cow.fi/order/0x2c3f1a9673e240a4b45071ad5c1798e45d54778b16b078e1dd9b031b1ff8e45c) |
| 20:11:08 | 4 | PUMP → SOL (native) | Executed | `0xf30f3cb4…` [🐞](https://debug.barn.cow.fi/order/0xf30f3cb45802ccd854d5c5e5517ac175b2a065fa644f569cd1d564fcf38b8573) |
| 20:11:08 | 3 | USDG → SOL (native) | Executed | `0x2995ce1c…` [🐞](https://debug.barn.cow.fi/order/0x2995ce1c5cc10255df2d01739a83af76b2c78594051de43d8436fcdcbab8eab6) |
| 20:11:08 | 5 | PYUSD → SOL (native) | Executed | `0x9a3ed560…` [🐞](https://debug.barn.cow.fi/order/0x9a3ed560bffd0e2f057eebf117ef51c1d9bf4a14cc5f6345635dbb544c2e1827) |
| 20:12:32 | 11 | NVDAx → SOL (native) | Executed | `0x44576bb9…` [🐞](https://debug.barn.cow.fi/order/0x44576bb9bc82f39af12c43cd7c2ffa9d24f65690395ebe2e3bd9aca1a1065fd8) |
| 20:12:37 | 10 | SKHY → SOL (native) | Executed | `0x6583b6c9…` [🐞](https://debug.barn.cow.fi/order/0x6583b6c96f1c4540e337372ae672dff7b987679dbd46fe7c3a8ba9c7a7df1d4e) |
| 20:12:37 | 10 | TRUMP → SOL (native) | Executed | `0x0110c06e…` [🐞](https://debug.barn.cow.fi/order/0x0110c06e25d0c0c292414d6627375eeece4f69ea51985c739565fd9da294c0dc) |
| 20:12:41 | 8 | SPYx → SOL (native) | Executed | `0xec68589b…` [🐞](https://debug.barn.cow.fi/order/0xec68589b97ab4f502f2e916c8d160aa5047b0121815f2e246a9265be3cbc5771) |
| 20:12:43 | 7 | CRCLx → SOL (native) | Executed | `0x7feb797c…` [🐞](https://debug.barn.cow.fi/order/0x7feb797cfbd43ee1f5ba0d59f9bca37317bb002be13f2e013d2c4f561dd549ad) |
| 20:13:05 | 9 | JLP → SOL (native) | Executed | `0xbf3183ad…` [🐞](https://debug.barn.cow.fi/order/0xbf3183ad5f1efe5848d453fb9627eaa404cd8b5d0c37c6bedaf0b005fecb5c4b) |
| 20:13:05 | 9 | ANSEM → SOL (native) | Executed | `0x41a83c88…` [🐞](https://debug.barn.cow.fi/order/0x41a83c884dec8bda10259b0d99ff65b35e073f720f0f35baab1b23b8b09c94f5) |
| 20:13:05 | 9 | USDv → SOL (native) | Executed | `0x76224aff…` [🐞](https://debug.barn.cow.fi/order/0x76224aff70607d8fdb60ccaae8cce67b4bd5325bb949d969e3f7b9490914d5ed) |
| 20:13:45 | 12 | MU → SOL (native) | Executed | `0xebd11c73…` [🐞](https://debug.barn.cow.fi/order/0xebd11c735dea5c28e5cb83eacfe2184ca935d4f66604ff19acad28ea83af5c43) |
| 20:14:03 | 13 | BOME → SOL (native) | Executed | `0xfc1f5290…` [🐞](https://debug.barn.cow.fi/order/0xfc1f52907e9271235a7dedba2a30a215b6e30999c408cba545c8e8db09b611b9) |
| 20:15:02 | 14 | TOAD → SOL (native) | Executed | `0x3fddc5e4…` [🐞](https://debug.barn.cow.fi/order/0x3fddc5e467f4c3927fe1dd11dedf693e406213fddd6f19c3fa7ea0a6e594760e) |
| 20:15:02 | 14 | SPCXx → SOL (native) | Executed | `0x062d6f89…` [🐞](https://debug.barn.cow.fi/order/0x062d6f89431c6d750fe8201cb129ffe590276c46b4a0ae1265f4f04b7cd463b4) |
| 20:15:02 | 14 | HIGGS → SOL (native) | Executed | `0x2262be41…` [🐞](https://debug.barn.cow.fi/order/0x2262be41dbcdc7c7ab7576ef8f5ff98e9d2cc0f329274613858d3eadae3bee46) |
| 20:15:12 | 15 | SPCXx → SOL (native) | Executed | `0x58c362f0…` [🐞](https://debug.barn.cow.fi/order/0x58c362f0752876e81b5a3a3e83fa1c43ce8911b4733e05d17ca078881f22bd59) |
| 20:15:45 | 16 | USELESS → SOL (native) | Executed | `0x12df6c00…` [🐞](https://debug.barn.cow.fi/order/0x12df6c00d90e00d0209738dca89f1db978617b023837e2daf72367a6f7396de8) |
| 20:15:46 | 17 | USD1 → SOL (native) | Executed | `0x22ae0ae4…` [🐞](https://debug.barn.cow.fi/order/0x22ae0ae480f51eecc3740fc3c862fc8433879a30ed219f7c6e424bc5946461cb) |
| 20:16:17 | 18 | SPX → SOL (native) | Executed | `0xf66592cf…` [🐞](https://debug.barn.cow.fi/order/0xf66592cf1daf9fb480cd5abba3401c10fc4bc04d7fb2084ee4f3885afeef2ee2) |
| 20:16:17 | 18 | BILLY → SOL (native) | Executed | `0xb87dccdf…` [🐞](https://debug.barn.cow.fi/order/0xb87dccdfd6e9d9943756729e334757ab0bcc83882793fbb77dafaab51f79f1e0) |
| 20:16:17 | 18 | $WOLF → SOL (native) | Executed | `0x7d22d5dd…` [🐞](https://debug.barn.cow.fi/order/0x7d22d5dd03d99918b96295a700dbd7e029ca4a54772413c4dbbee0339bc6409b) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 27 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 7s | 25s | 54s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 27 | 100.0% | 27 | 147,141 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 79 | 79 | 60 | 75.9% | 16 | 6 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: PriorityFeeTooHigh | 16 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 110 times
- Orders filtered for `unreceivable_buy_token_account`: 110 times
- Orders filtered for `in_flight`: 21 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 27 | 27 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → ANSEM | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| wSOL → SKHY | 1 | 1 | 100.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → SPCX | 1 | 1 | 100.0% |
| wSOL → USDv | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → MU | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| USDv → SOL (native) | 1 | 1 | 100.0% |
| ANSEM → SOL (native) | 1 | 1 | 100.0% |
| PYUSD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SPYx | 1 | 1 | 100.0% |
| SKHY → SOL (native) | 1 | 1 | 100.0% |
| PUMP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CASH | 1 | 1 | 100.0% |
| MU → SOL (native) | 1 | 1 | 100.0% |
| PAID → SOL (native) | 1 | 1 | 100.0% |
| SPYx → SOL (native) | 1 | 1 | 100.0% |
| USDG → SOL (native) | 1 | 1 | 100.0% |
| NVDAx → SOL (native) | 1 | 1 | 100.0% |
| CRCLx → SOL (native) | 1 | 1 | 100.0% |
| CASH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| SPCX → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 2 | 2 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 2 | 2 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 2 | 2 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 2 | 2 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 2 | 2 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 2 | 2 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 2 | 2 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 2 | 2 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 2 | 2 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 2 | 2 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 2 | 2 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 2 | 2 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 2 | 2 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 1 | 1 | 100.0% |
