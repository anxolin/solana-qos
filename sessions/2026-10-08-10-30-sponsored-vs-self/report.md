# Solana QoS report: 2026-10-08-10-30-sponsored-vs-self

Barn, orders created between `2026-10-08T10:31:07.752Z` and `2026-10-08T10:34:18.254Z`. Data fetched 2026-10-08T10:34:33+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 19 |
| Orders executed | **15** (78.9%) |
| Sponsored orders never created on-chain | 4 (21.1%) |
| Traders | 19 |
| Settlement txs | 15 |

## Scenario

15 of 20 scenario rows completed. 0 retries, 1 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 10:31:07 | 1 | 1 | sell 0.0025 SOL → USDC | failed | 47s | 1 | main expired |
| 10:31:07 | 2 | 2 | sell 0.0025 SOL → USDC | filled | 77s | 1 |  |
| 10:31:07 | 3 | 3 | sell 0.0025 SOL → USDC | failed | 47s | 1 | main expired |
| 10:31:08 | 4 | 4 | sell 0.0025 SOL → USDC | filled | 70s | 1 |  |
| 10:31:08 | 5 | 5 | sell 0.0025 SOL → USDC | failed | 47s | 1 | main expired |
| 10:31:08 | 6 | 6 | sell 0.0025 SOL → USDC | filled | 67s | 1 |  |
| 10:31:08 | 7 | 7 | sell 0.0025 SOL → USDC | filled | 7s | 1 |  |
| 10:31:08 | 8 | 8 | sell 0.0025 SOL → USDC | filled | 40s | 1 |  |
| 10:31:08 | 9 | 9 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 10:31:08 | 10 | 10 | sell 0.0025 SOL → USDC | filled | 52s | 1 |  |
| 10:31:08 | 11 | 11 | sell 0.0025 SOL → USDC | filled | 32s | 1 |  |
| 10:31:08 | 12 | 12 | sell 0.0025 SOL → USDC | filled | 11s | 1 |  |
| 10:31:08 | 13 | 13 | sell 0.0025 SOL → USDC | failed | 44s | 1 | main expired |
| 10:31:09 | 14 | 14 | sell 0.0025 SOL → USDC | filled | 65s | 1 |  |
| 10:31:09 | 15 | 15 | sell 0.0025 SOL → USDC | filled | 26s | 1 |  |
| 10:31:09 | 16 | 16 | sell 0.0025 SOL → USDC | filled | 56s | 1 |  |
| 10:31:09 | 17 | 17 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 10:31:09 | 18 | 18 | sell 0.0025 SOL → USDC | filled | 47s | 1 |  |
| 10:31:09 | 19 | 19 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 10:31:09 | 20 | 20 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |

### Rows without an order

1 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | main | 1 | SOL → USDC | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 19 (19 main, 0 acquire). Cleanup placed 15 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 10:32:27 | 2 | USDC → SOL (native) | Executed | `0x908c03ea…` [🐞](https://debug.barn.cow.fi/order/0x908c03ea77a93accddb9fa8f25380582e352bf94ae220ebe01f0796aa09c2c46) |
| 10:32:28 | 4 | USDC → SOL (native) | Executed | `0x53f3e704…` [🐞](https://debug.barn.cow.fi/order/0x53f3e70429b5a0e34c53b81673e53f68ca86c83623b525b11a8f957da41786d3) |
| 10:32:32 | 7 | USDC → SOL (native) | Executed | `0xf51e07aa…` [🐞](https://debug.barn.cow.fi/order/0xf51e07aa0ff050834e96b3b838b6105a00c631a4d5b17c80dc129cd99af5286f) |
| 10:32:33 | 8 | USDC → SOL (native) | Executed | `0x4eadf0f0…` [🐞](https://debug.barn.cow.fi/order/0x4eadf0f0fdd5b05cc01f03c4a33f1851e4483af34c4c44c462fde9f2d7558c50) |
| 10:32:33 | 9 | USDC → SOL (native) | Executed | `0x8a226748…` [🐞](https://debug.barn.cow.fi/order/0x8a226748c7385fb93e4a135b520a5a6df17e891adbf0ac082fb384b27d536410) |
| 10:32:34 | 10 | USDC → SOL (native) | Executed | `0x9720a7d3…` [🐞](https://debug.barn.cow.fi/order/0x9720a7d31e344c6279f7cf5021ee8d460a7f1807862522e939951d459639fbcf) |
| 10:32:35 | 11 | USDC → SOL (native) | Executed | `0x7ff7ce2a…` [🐞](https://debug.barn.cow.fi/order/0x7ff7ce2a9e41aa97848b749604b4053055909e94619ce4e13945c2e191646d38) |
| 10:32:36 | 12 | USDC → SOL (native) | Executed | `0x2ab95336…` [🐞](https://debug.barn.cow.fi/order/0x2ab9533603780107c968131e5403d910257f69318b1fd9a04b66f39d0b5025d5) |
| 10:32:37 | 6 | USDC → SOL (native) | Executed | `0x49b358b4…` [🐞](https://debug.barn.cow.fi/order/0x49b358b4a15a9c2b37e49d8bef720cbf28b11f7692312966d0d0f922c14c831a) |
| 10:32:47 | 14 | USDC → SOL (native) | Executed | `0xe1e89655…` [🐞](https://debug.barn.cow.fi/order/0xe1e89655aeb99c863fd493dd699c75e399828b09bbc6097203d3216433572502) |
| 10:32:47 | 15 | USDC → SOL (native) | Executed | `0xdb301c5e…` [🐞](https://debug.barn.cow.fi/order/0xdb301c5e852d045940713e346334afc23057ae6e59be0e29006b5b5efa84ac9e) |
| 10:32:50 | 16 | USDC → SOL (native) | Executed | `0xaf9aa27f…` [🐞](https://debug.barn.cow.fi/order/0xaf9aa27f1ac9fed95a32630f6972d251d47aef2d3b8b474e13cc720cc03e4621) |
| 10:32:51 | 17 | USDC → SOL (native) | Executed | `0x3e1b427d…` [🐞](https://debug.barn.cow.fi/order/0x3e1b427d42a82d3a8da85bb60c0f9beb287a545217009824816e1a5d23fb29a5) |
| 10:33:00 | 18 | USDC → SOL (native) | Executed | `0xb42ccfd4…` [🐞](https://debug.barn.cow.fi/order/0xb42ccfd49f65fe0a5ecfef28593a7a31668e4d49d31a5fda7f6b1a66404ab244) |
| 10:33:04 | 20 | USDC → SOL (native) | Executed | `0xd302ff18…` [🐞](https://debug.barn.cow.fi/order/0xd302ff18257503d59c3dae9f9b1c53bd484bcc0dbd43f951358cd9cb6cb95b1e) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 15 | 78.9% |
| expired: never created on-chain (winner found, creation blockhash expired) | 4 | 21.1% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 33s | 53s | 64s | 69s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 15 | 100.0% | 15 | 81,981 | 33s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 207 | 30 | 30 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 32 times
- Orders filtered for `unreceivable_buy_token_account`: 32 times
- Orders filtered for `in_flight`: 1 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 19 | 15 | 78.9% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 19 | 15 | 78.9% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 0 | 0.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 0 | 0.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 0 | 0.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 0 | 0.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 4 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 10:31:11 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xb3244595…` [🐞](https://debug.barn.cow.fi/order/0xb3244595ca1abe76ccc8e843bf0fc4ee9152f8f05c1f92ba5fb40961b21512ef) |
| 10:31:12 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x5eaacc90…` [🐞](https://debug.barn.cow.fi/order/0x5eaacc9032b878795ba624356b455759daf7a157a5dbda8d0586c02f1b714572) |
| 10:31:12 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x06668b81…` [🐞](https://debug.barn.cow.fi/order/0x06668b811f34ee104fd27cc4d5b6e8991bda51ceffd1632e8d722a823c421516) |
| 10:31:13 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xf7902714…` [🐞](https://debug.barn.cow.fi/order/0xf7902714c3ba70906b1a42ff5e2247d9c6d87ddfdc9faec9b70912fd61d717e4) |
