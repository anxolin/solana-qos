# Solana QoS report: 2026-10-24-00-29-same-direction-25x1

Barn, orders created between `2026-10-24T00:29:59.640Z` and `2026-10-24T00:33:40.615Z`. Data fetched 2026-10-24T00:33:08+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 25 |
| Orders executed | **14** (56.0%) |
| Sponsored orders never created on-chain | 11 (44.0%) |
| Traders | 25 |
| Settlement txs | 7 |

## Scenario

14 of 25 scenario rows completed. 0 retries, 17 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 00:29:59 | 1 | 1 | buy 10 JUP ← SOL | filled | 9s | 1 |  |
| 00:29:59 | 2 | 2 | buy 10 JUP ← SOL | failed | 40s | 1 | main expired |
| 00:30:00 | 3 | 3 | buy 10 JUP ← SOL | filled | 9s | 1 |  |
| 00:30:00 | 4 | 4 | buy 10 JUP ← SOL | failed | 41s | 1 | main expired |
| 00:30:00 | 5 | 5 | buy 10 JUP ← SOL | failed | 41s | 1 | main expired |
| 00:30:00 | 6 | 6 | buy 10 JUP ← SOL | failed | 41s | 1 | main expired |
| 00:30:00 | 7 | 7 | buy 10 JUP ← SOL | failed | 41s | 1 | main expired |
| 00:30:00 | 8 | 8 | buy 10 JUP ← SOL | failed | 41s | 1 | main expired |
| 00:30:00 | 9 | 9 | buy 10 JUP ← SOL | failed | 41s | 1 | main expired |
| 00:30:00 | 10 | 10 | buy 10 JUP ← SOL | failed | 41s | 1 | main expired |
| 00:30:00 | 11 | 11 | buy 10 JUP ← SOL | failed | 41s | 1 | main expired |
| 00:30:00 | 12 | 12 | buy 10 JUP ← SOL | failed | 41s | 1 | main expired |
| 00:30:00 | 13 | 13 | buy 10 JUP ← SOL | failed | 41s | 1 | main expired |
| 00:30:01 | 14 | 14 | buy 10 JUP ← SOL | filled | 29s | 1 |  |
| 00:30:01 | 15 | 15 | buy 10 JUP ← SOL | filled | 20s | 1 |  |
| 00:30:01 | 16 | 16 | buy 10 JUP ← SOL | filled | 29s | 1 |  |
| 00:30:01 | 17 | 17 | buy 10 JUP ← SOL | filled | 20s | 1 |  |
| 00:30:01 | 18 | 18 | buy 10 JUP ← SOL | filled | 23s | 1 |  |
| 00:30:01 | 19 | 19 | buy 10 JUP ← SOL | filled | 14s | 1 |  |
| 00:30:01 | 20 | 20 | buy 10 JUP ← SOL | filled | 39s | 1 |  |
| 00:30:01 | 21 | 21 | buy 10 JUP ← SOL | filled | 14s | 1 |  |
| 00:30:01 | 22 | 22 | buy 10 JUP ← SOL | filled | 24s | 1 |  |
| 00:30:01 | 23 | 23 | buy 10 JUP ← SOL | filled | 33s | 1 |  |
| 00:30:02 | 24 | 24 | buy 10 JUP ← SOL | filled | 39s | 1 |  |
| 00:30:02 | 25 | 25 | buy 10 JUP ← SOL | filled | 34s | 1 |  |

Scenario orders: 25 (25 main, 0 acquire). Cleanup placed 14 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 00:30:46 | 1 | JUP → SOL (native) | Executed | `0x59a4a43f…` [🐞](https://debug.barn.cow.fi/order/0x59a4a43f947b0c3afc1cbfbf288962b04d981cbcbe5d5084734816443952dc31) |
| 00:30:48 | 3 | JUP → SOL (native) | Executed | `0x95aec766…` [🐞](https://debug.barn.cow.fi/order/0x95aec7660338dc0d644b662e3ad1b39dad2f9bdb1b1e38d533b3b3b77f708915) |
| 00:30:53 | 6 | AAVE → SOL (native) | Executed | `0xb658d3b5…` [🐞](https://debug.barn.cow.fi/order/0xb658d3b5d6b0f0b5d21380f2359e8d0f55301c27c80235bdaa93cc2420e5050e) |
| 00:30:53 | 6 | WHALES → SOL (native) | Executed | `0x8ce6b6f6…` [🐞](https://debug.barn.cow.fi/order/0x8ce6b6f666398537cad915467dabdddcc7e3936526ae7de0905e12bd9315afd5) |
| 00:30:54 | 6 | STREAM → SOL (native) | Executed | `0x7cb5f989…` [🐞](https://debug.barn.cow.fi/order/0x7cb5f989c201de27e1bf21d7bec341530be615314637c34fc15c575fdc19e7cc) |
| 00:30:58 | 8 | GRIFFAIN → SOL (native) | Executed | `0x6a43eebf…` [🐞](https://debug.barn.cow.fi/order/0x6a43eebf0065e9d8d6fcc63c90b3b80f07213a61c38533c732a3e29fb5c54126) |
| 00:31:07 | 11 | SOLC → SOL (native) | Executed | `0x7d66bf0b…` [🐞](https://debug.barn.cow.fi/order/0x7d66bf0bebbfae309a72f89be6598945a2b7855f644e291b8ab0b1514ab15f7d) |
| 00:32:05 | 6 | LINK → SOL (native) | Executed | `0x31fb0c8e…` [🐞](https://debug.barn.cow.fi/order/0x31fb0c8e0fd0a5b2e22f65b82220f241499fb42ed07963727c98de0214cdfde1) |
| 00:32:06 | 6 | MSFTx → SOL (native) | Executed | `0xba8c5265…` [🐞](https://debug.barn.cow.fi/order/0xba8c526578235e22b5470ff4f81cc8044c6b98983c38896e416c394bad6814f0) |
| 00:32:08 | 8 | GLDx → SOL (native) | Executed | `0x55b38467…` [🐞](https://debug.barn.cow.fi/order/0x55b38467cbd9608eb04cef4c597e1b0bf3f3a677f75d5577453ce0489342a916) |
| 00:32:15 | 10 | $HACHI → SOL (native) | Executed | `0x1b1c138f…` [🐞](https://debug.barn.cow.fi/order/0x1b1c138f185779a42b522d062dca06a39c060c17126c305d9cbc7f87a131dc49) |
| 00:32:15 | 10 | pippin → SOL (native) | Executed | `0x875304e4…` [🐞](https://debug.barn.cow.fi/order/0x875304e4bc5dc6fe5f5acdde152a6097c29e489971c32abfd46e21660b290e7e) |
| 00:32:16 | 10 | SANC → SOL (native) | Executed | `0x5cdbc39d…` [🐞](https://debug.barn.cow.fi/order/0x5cdbc39d27196c5ce786b95a7d87aa61bd24a83e54a6f3c1d28c9e9e18942fe3) |
| 00:32:16 | 10 | CRED → SOL (native) | Executed | `0x9ce0a149…` [🐞](https://debug.barn.cow.fi/order/0x9ce0a1498db36246a44126f2666b315f80a04687638ac203cfa2b2bec8dce54f) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 14 | 56.0% |
| expired: never created on-chain (winner found, creation blockhash expired) | 11 | 44.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 13s | 22s | 28s | 29s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 14 | 100.0% | 7 | 116,576 | 13s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 73 | 20 | 20 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 33 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market buy | 25 | 14 | 56.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → JUP | 25 | 14 | 56.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 1 | 1 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 1 | 1 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 1 | 0 | 0.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 1 | 0 | 0.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 1 | 0 | 0.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 1 | 0 | 0.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 1 | 0 | 0.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 1 | 0 | 0.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 1 | 0 | 0.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 1 | 0 | 0.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 1 | 0 | 0.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 1 | 0 | 0.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 1 | 0 | 0.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 1 | 1 | 100.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 1 | 1 | 100.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 1 | 1 | 100.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 1 | 1 | 100.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 1 | 1 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 1 | 1 | 100.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 1 | 1 | 100.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 1 | 1 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 1 | 1 | 100.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 1 | 1 | 100.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 1 | 1 | 100.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 11 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 00:30:05 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0xc2c31daf…` [🐞](https://debug.barn.cow.fi/order/0xc2c31daf028cb4226491b52522cdb6ef178d5b1bc7d1bf61f2b26d2b1ffd5d4b) |
| 00:30:06 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0xf367ea07…` [🐞](https://debug.barn.cow.fi/order/0xf367ea07886e2661bd1710893af1a09aac4cc31bf97c8406d2bdfd9e3aee4850) |
| 00:30:06 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0xed97604b…` [🐞](https://debug.barn.cow.fi/order/0xed97604b22f516d20179c9afc4aa2c9cf1c4f48b88ecc2bbd90b9bcb754cf64a) |
| 00:30:06 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0x430eaf79…` [🐞](https://debug.barn.cow.fi/order/0x430eaf79e877fbc717d67056cd7cb187f75c15cdac85aa7c362a37641351a581) |
| 00:30:06 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0x571f168d…` [🐞](https://debug.barn.cow.fi/order/0x571f168d70651b57e35840601fad6a7d36503c0150434442fd72fe3ccedbf77c) |
| 00:30:06 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0x70184d95…` [🐞](https://debug.barn.cow.fi/order/0x70184d95030af1f9b26b846f7a30701253fa694b73cf1dbcb50d2c60e6334cf7) |
| 00:30:06 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0x9aa7a39f…` [🐞](https://debug.barn.cow.fi/order/0x9aa7a39f07c0afc0be2372c1cc7d5799ead31cb1e5b79163284dd7b18fd92f42) |
| 00:30:07 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0xb374a8d9…` [🐞](https://debug.barn.cow.fi/order/0xb374a8d99c0bafae737a5fdf06ca854a437a46f2dc148d4f611e42ad4c96b803) |
| 00:30:07 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0x7c1e1784…` [🐞](https://debug.barn.cow.fi/order/0x7c1e17840e3030ac092248f3a85a990fe9f7c9a6a0962383f768a165521ead91) |
| 00:30:07 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0x4bbd4ef3…` [🐞](https://debug.barn.cow.fi/order/0x4bbd4ef3478aadea1d439ae2983ccc2ee0e8957de2539b2f26477409411e63a2) |
| 00:30:07 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0xa646a4de…` [🐞](https://debug.barn.cow.fi/order/0xa646a4deb6c273ba864e9156951a95817928a542bbea753616dbce59b018a66b) |
