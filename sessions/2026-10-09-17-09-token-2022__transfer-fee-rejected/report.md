# Solana QoS report: 2026-10-09-17-09-token-2022__transfer-fee-rejected

Prod, orders created between `2026-10-09T17:09:50.440Z` and `2026-10-09T17:22:40.137Z`. Data fetched 2026-10-09T17:22:20+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 25 |
| Orders executed | **10** (40.0%) |
| Sponsored orders never created on-chain | 15 (60.0%) |
| Traders | 1 |
| Settlement txs | 10 |

## Scenario

10 of 25 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 17:09:50 | 1 | 1 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 35s | 1 | main expired |
| 17:10:25 | 2 | 1 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 35s | 1 | main expired |
| 17:11:00 | 3 | 1 | sell 0.005 SOL → HTmQz7My6MehV7bjhJ6jde8nDND1yvsz68d24LP7YgUQ | failed | 35s | 1 | main expired |
| 17:11:35 | 4 | 1 | sell 0.005 SOL → 8RVBk8vxLiUHueLUW1f4izFVqN3nWippLhkohKg6EGkS | filled | 7s | 1 |  |
| 17:11:42 | 5 | 1 | sell 0.005 SOL → 4MMQY9bwkxxTtsK3W227Q5ABT6yFY8Pmn9Ze7wmAXKY8 | filled | 7s | 1 |  |
| 17:11:49 | 6 | 1 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 35s | 1 | main expired |
| 17:12:24 | 7 | 1 | sell 0.005 SOL → oPAiAikWTaFj9RYoRFD35ccfwhnMcB3ThgBZRHSkjTZ | filled | 10s | 1 |  |
| 17:12:34 | 8 | 1 | sell 0.005 SOL → PreweJYECqtQwBtpxHL171nL2K6umo692gTm7Q3rpgF | failed | 35s | 1 | main expired |
| 17:13:10 | 9 | 1 | sell 0.005 SOL → HuAXPyDWDaMYFKuwQHpqL1oPnj93zdzWmtvFGzCeCUa7 | filled | 26s | 1 |  |
| 17:13:35 | 10 | 1 | sell 0.005 SOL → AGi2s9zPRPHs3zEDPhPTroumTEXK5ufymYSfEFndCSSW | filled | 7s | 1 |  |
| 17:13:42 | 11 | 1 | sell 0.005 SOL → ZesMGYmokFiEuDvNzWeMhB7jxF6eUW8c512vwSKSTNK | failed | 35s | 1 | main expired |
| 17:14:17 | 12 | 1 | sell 0.005 SOL → 6UtY9iTZMQQ5QZVrbzFnNaJntV7oySm9k97mvwnuZcxr | filled | 10s | 1 |  |
| 17:14:27 | 13 | 1 | sell 0.005 SOL → 72yxYmhLgDGwdyi2b9GjDynBB6VuG3kDxNKqDbzXh5bi | failed | 35s | 1 | main expired |
| 17:15:02 | 14 | 1 | sell 0.005 SOL → HgcxVs6kJhPAaGqnPNGaa7zYgNT49hJrLufiqcNMuYZT | filled | 10s | 1 |  |
| 17:15:12 | 15 | 1 | sell 0.005 SOL → 8RNUw4N655VSrZKuhGdywhbSMDTrheguFPfxbpE2NZHQ | failed | 35s | 1 | main expired |
| 17:15:47 | 16 | 1 | sell 0.005 SOL → 8t5C4AWDg4CroMChxdo7rG2e8nJM31QG2GG7Czx9X7x2 | failed | 35s | 1 | main expired |
| 17:16:22 | 17 | 1 | sell 0.005 SOL → TKLSidmLVt3cqGaaodG8tyRzoANfQwoh67AccjmubeZ | filled | 13s | 1 |  |
| 17:16:36 | 18 | 1 | sell 0.005 SOL → E4Ap4icMLwKot8rkkTbq5JkS5kZxt5XCE3yfxbzYBjHx | filled | 7s | 1 |  |
| 17:16:42 | 19 | 1 | sell 0.005 SOL → 7MCgYMzq3fov6oERdtTMAYbN2U9LZrrSYS1MBhjixZFr | failed | 35s | 1 | main expired |
| 17:17:17 | 20 | 1 | sell 0.005 SOL → PrekqLJvJ3qVdXmBGDiexvwUTF4rLFDa6HWS4HJbw9S | failed | 35s | 1 | main expired |
| 17:17:53 | 21 | 1 | sell 0.005 SOL → 7ioeSgzfSKHMnpgfPpgRFsekMBGiu9oi6t6GeqYtNbbh | failed | 35s | 1 | main expired |
| 17:18:28 | 22 | 1 | sell 0.005 SOL → Pre8AREmFPtoJFT8mQSXQLh56cwJmM7CFDRuoGBZiUP | failed | 35s | 1 | main expired |
| 17:19:03 | 23 | 1 | sell 0.005 SOL → PresTj4Yc2bAR197Er7wz4UUKSfqt6FryBEdAriBoQB | filled | 13s | 1 |  |
| 17:19:16 | 24 | 1 | sell 0.005 SOL → FjTfaSH861nVcbAxdFAHTvhoSL4kyR6wgTWynuJkapht | failed | 35s | 1 | main expired |
| 17:19:51 | 25 | 1 | sell 0.005 SOL → PreLWGkkeqG1s4HEfFZSy9moCrJ7btsHuUtfcCeoRua | failed | 36s | 1 | main expired |

Scenario orders: 25 (25 main, 0 acquire). Cleanup placed 10 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 17:20:30 | 1 | LEVERCAT → SOL (native) | Still open | `0xe7602457…` [🐞](https://debug.cow.fi/order/0xe7602457bc43e61743094822e739306e98baf8e67c7b6265dc718900013cb49f) |
| 17:20:31 | 1 | ALLINU → SOL (native) | Still open | `0xa3c28cb8…` [🐞](https://debug.cow.fi/order/0xa3c28cb8993a64e31d2dab517edd5f481951a19ab158de53bc551dda1a0a0e78) |
| 17:20:31 | 1 | KNOTS → SOL (native) | Still open | `0xcca5fed5…` [🐞](https://debug.cow.fi/order/0xcca5fed5ed196b7e6c61f66282f030091d082fc8e3dcecead641542da4034143) |
| 17:20:32 | 1 | MASK → SOL (native) | Still open | `0x83f6ca84…` [🐞](https://debug.cow.fi/order/0x83f6ca84577ebebbde272a6d337cb6387d7fd4ac724580cecb6f869215a69426) |
| 17:20:32 | 1 | tOpenAI → SOL (native) | Still open | `0x1153f3b5…` [🐞](https://debug.cow.fi/order/0x1153f3b5036b5e30edf8dbfaa221e2a1dce03fe520311c370c5437a4be5fcb8b) |
| 17:20:32 | 1 | BTC → SOL (native) | Still open | `0x50003633…` [🐞](https://debug.cow.fi/order/0x50003633a7a62ae2d9ef25961d8e437c6597e24ba13a9ddc62340bbd9f51977d) |
| 17:20:33 | 1 | FEELSGOOD → SOL (native) | Still open | `0xc317f1db…` [🐞](https://debug.cow.fi/order/0xc317f1db7bb813fb2bac9040aa9fe58d6e512c21943241b21aff997ef4fd9891) |
| 17:20:33 | 1 | NEARKAT → SOL (native) | Still open | `0xc7c1a0e2…` [🐞](https://debug.cow.fi/order/0xc7c1a0e2cf2bc3b4a8deaf4958305c16c5fd002c9c6b988f40298057cd469f4a) |
| 17:20:33 | 1 | ANDURIL → SOL (native) | Still open | `0x386652c9…` [🐞](https://debug.cow.fi/order/0x386652c97bb168ec02e915286c467bb93ad92a69769b0f768f2be6535994198b) |
| 17:20:33 | 1 | tKalshi → SOL (native) | Still open | `0x6e14d402…` [🐞](https://debug.cow.fi/order/0x6e14d40226652aa3f6ac3c9a38eb2f2ad881faad079d8fecba05a91968c1234c) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| expired: never created on-chain (winner found, creation blockhash expired) | 15 | 60.0% |
| executed | 10 | 40.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 6s | 9s | 24s | 24s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 28da…jxyN | 10 | 100.0% | 10 | 163,954 | 6s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 58 | 13 | 10 | 76.9% | 3 | 0 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: PriorityFeeTooHigh | 2 |
| jupiter-solve: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 25 | 10 | 40.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → SI | 1 | 0 | 0.0% |
| wSOL → ZCAT | 1 | 0 | 0.0% |
| wSOL → GP | 1 | 0 | 0.0% |
| wSOL → KNOTS | 1 | 1 | 100.0% |
| wSOL → ALLINU | 1 | 1 | 100.0% |
| wSOL → ANTHROPIC | 1 | 0 | 0.0% |
| wSOL → tOpenAI | 1 | 1 | 100.0% |
| wSOL → OPENAI | 1 | 0 | 0.0% |
| wSOL → MASK | 1 | 1 | 100.0% |
| wSOL → LEVERCAT | 1 | 1 | 100.0% |
| wSOL → 🎒 | 1 | 0 | 0.0% |
| wSOL → NEARKAT | 1 | 1 | 100.0% |
| wSOL → WOW | 1 | 0 | 0.0% |
| wSOL → FEELSGOOD | 1 | 1 | 100.0% |
| wSOL → PURR | 1 | 0 | 0.0% |
| wSOL → SNDK | 1 | 0 | 0.0% |
| wSOL → tKalshi | 1 | 1 | 100.0% |
| wSOL → BTC | 1 | 1 | 100.0% |
| wSOL → POLLY | 1 | 0 | 0.0% |
| wSOL → NEURALINK | 1 | 0 | 0.0% |
| wSOL → CURVE | 1 | 0 | 0.0% |
| wSOL → POLYMARKET | 1 | 0 | 0.0% |
| wSOL → ANDURIL | 1 | 1 | 100.0% |
| wSOL → DIVI | 1 | 0 | 0.0% |
| wSOL → KALSHI | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 25 | 10 | 40.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 15 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 17:09:51 | wSOL → SI | sell | Winner too late: creation blockhash expired | `0x7a1b735c…` [🐞](https://debug.cow.fi/order/0x7a1b735c9ae578092f581b495e1c5d9d5b0d3a7aaa453e40c1aba00167924dc4) |
| 17:10:26 | wSOL → ZCAT | sell | Winner too late: creation blockhash expired | `0x9254c611…` [🐞](https://debug.cow.fi/order/0x9254c61145834efd8dfd2104277b6df2305d10d78608c1ed65b21802582aa5e5) |
| 17:11:01 | wSOL → GP | sell | Winner too late: creation blockhash expired | `0xedfabbdd…` [🐞](https://debug.cow.fi/order/0xedfabbdd4955c74a4681c388b0b891090330cc714b1172200ca2a992d3ed60b8) |
| 17:11:49 | wSOL → ANTHROPIC | sell | Winner too late: creation blockhash expired | `0x8432cbcf…` [🐞](https://debug.cow.fi/order/0x8432cbcff0ead75d052bd7c6a33c407de0c0f7cd543194b208eef710fb3e7fb5) |
| 17:12:35 | wSOL → OPENAI | sell | Winner too late: creation blockhash expired | `0x10b665b6…` [🐞](https://debug.cow.fi/order/0x10b665b63a33134993c8e660ce8e1bd2f1656e81c8a3f66320074f5263f1591f) |
| 17:13:43 | wSOL → 🎒 | sell | Winner too late: creation blockhash expired | `0x74bf1582…` [🐞](https://debug.cow.fi/order/0x74bf1582808d60c853ff8adbc67c56ab5b2a11303b3622009e58f2c94f623f26) |
| 17:14:28 | wSOL → WOW | sell | Winner too late: creation blockhash expired | `0xf3eeb1ac…` [🐞](https://debug.cow.fi/order/0xf3eeb1ac875bdfe5effc7277369589bc9f311627ee7cd530d37650ad28bc03d8) |
| 17:15:13 | wSOL → PURR | sell | Winner too late: creation blockhash expired | `0x970ddf03…` [🐞](https://debug.cow.fi/order/0x970ddf031663d28c9f5c595132edc8aa360818b3fed1ebf3f2714b483c1a8e5f) |
| 17:15:47 | wSOL → SNDK | sell | Winner too late: creation blockhash expired | `0x68025647…` [🐞](https://debug.cow.fi/order/0x680256476065110cdbc9dee637865224188e5d44fc5d85ce1ae0e56db5fc3332) |
| 17:16:43 | wSOL → POLLY | sell | Winner too late: creation blockhash expired | `0xd47f082d…` [🐞](https://debug.cow.fi/order/0xd47f082d66e081ffb0d7c1da329d09267420deec5a0be3237d4a7d5053d9729f) |
| 17:17:18 | wSOL → NEURALINK | sell | Winner too late: creation blockhash expired | `0x3726f6dc…` [🐞](https://debug.cow.fi/order/0x3726f6dcfe3adf9c680f41c9e9ea13c77d4421db5ee6e43df18156b9b5190fab) |
| 17:17:53 | wSOL → CURVE | sell | Winner too late: creation blockhash expired | `0x1c8a646e…` [🐞](https://debug.cow.fi/order/0x1c8a646e60de9fc1dd9883a9ae09d2009a798d8d18d3158052e31eb5295b9809) |
| 17:18:28 | wSOL → POLYMARKET | sell | Winner too late: creation blockhash expired | `0x9fef8f71…` [🐞](https://debug.cow.fi/order/0x9fef8f71130914820d39fa06710829ed72405a25f2cb6613aab3c8359d074acb) |
| 17:19:16 | wSOL → DIVI | sell | Winner too late: creation blockhash expired | `0xe5d2398a…` [🐞](https://debug.cow.fi/order/0xe5d2398a2a4bbc3ec5d94a3e3d70341d1b2971d785277680565ddba146bf4d62) |
| 17:19:52 | wSOL → KALSHI | sell | Winner too late: creation blockhash expired | `0x94e74354…` [🐞](https://debug.cow.fi/order/0x94e74354beed395e7741a797be03c2ee9f9282297cc63b20138d89d26b49d9f4) |
