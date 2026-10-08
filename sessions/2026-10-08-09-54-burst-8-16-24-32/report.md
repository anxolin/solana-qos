# Solana QoS report: 2026-10-08-09-54-burst-8-16-24-32

Barn, orders created between `2026-10-08T09:54:20.339Z` and `2026-10-08T10:06:15.464Z`. Data fetched 2026-10-08T10:07:06+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 79 |
| Orders executed | **30** (38.0%) |
| Sponsored orders never created on-chain | 49 (62.0%) |
| Traders | 32 |
| Settlement txs | 30 |

## Scenario

30 of 80 scenario rows completed. 0 retries, 1 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 09:54:20 | 1 | 1 | sell 0.0025 SOL → USDC | filled | 39s | 1 |  |
| 09:54:20 | 2 | 2 | sell 0.0025 SOL → USDC | filled | 26s | 1 |  |
| 09:54:20 | 3 | 3 | sell 0.0025 SOL → USDC | filled | 20s | 1 |  |
| 09:54:20 | 4 | 4 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 09:54:20 | 5 | 5 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 09:54:20 | 6 | 6 | sell 0.0025 SOL → USDC | filled | 33s | 1 |  |
| 09:54:20 | 7 | 7 | sell 0.0025 SOL → USDC | filled | 30s | 1 |  |
| 09:54:21 | 8 | 8 | sell 0.0025 SOL → USDC | failed | 45s | 1 | main expired |
| 09:57:20 | 9 | 1 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 09:57:20 | 10 | 2 | sell 0.0025 SOL → USDC | filled | 41s | 1 |  |
| 09:57:20 | 11 | 3 | sell 0.0025 SOL → USDC | failed | 44s | 1 | main expired |
| 09:57:20 | 12 | 4 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 09:57:20 | 13 | 5 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 09:57:20 | 14 | 6 | sell 0.0025 SOL → USDC | filled | 43s | 1 |  |
| 09:57:20 | 15 | 7 | sell 0.0025 SOL → USDC | filled | 25s | 1 |  |
| 09:57:20 | 16 | 8 | sell 0.0025 SOL → USDC | filled | 31s | 1 |  |
| 09:57:20 | 17 | 9 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 09:57:20 | 18 | 10 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 09:57:20 | 19 | 11 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 09:57:20 | 20 | 12 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 09:57:20 | 21 | 13 | sell 0.0025 SOL → USDC | failed | 42s | 1 | main expired |
| 09:57:20 | 22 | 14 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 09:57:20 | 23 | 15 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 09:57:20 | 24 | 16 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 10:00:20 | 25 | 1 | sell 0.0025 SOL → USDC | filled | 30s | 1 |  |
| 10:00:20 | 26 | 2 | sell 0.0025 SOL → USDC | filled | 9s | 1 |  |
| 10:00:20 | 27 | 3 | sell 0.0025 SOL → USDC | filled | 33s | 1 |  |
| 10:00:20 | 28 | 4 | sell 0.0025 SOL → USDC | filled | 24s | 1 |  |
| 10:00:20 | 29 | 5 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 10:00:20 | 30 | 6 | sell 0.0025 SOL → USDC | filled | 45s | 1 |  |
| 10:00:20 | 31 | 7 | sell 0.0025 SOL → USDC | failed | 44s | 1 | main expired |
| 10:00:20 | 32 | 8 | sell 0.0025 SOL → USDC | failed | 47s | 1 | main expired |
| 10:00:20 | 33 | 9 | sell 0.0025 SOL → USDC | filled | 15s | 1 |  |
| 10:00:20 | 34 | 10 | sell 0.0025 SOL → USDC | failed | 44s | 1 | main expired |
| 10:00:20 | 35 | 11 | sell 0.0025 SOL → USDC | failed | 44s | 1 | main expired |
| 10:00:20 | 36 | 12 | sell 0.0025 SOL → USDC | failed | 44s | 1 | main expired |
| 10:00:20 | 37 | 13 | sell 0.0025 SOL → USDC | failed | 48s | 1 | main expired |
| 10:00:20 | 38 | 14 | sell 0.0025 SOL → USDC | failed | 48s | 1 | main expired |
| 10:00:20 | 39 | 15 | sell 0.0025 SOL → USDC | failed | 45s | 1 | main expired |
| 10:00:20 | 40 | 16 | sell 0.0025 SOL → USDC | filled | 39s | 1 |  |
| 10:00:20 | 41 | 17 | sell 0.0025 SOL → USDC | failed | 46s | 1 | main expired |
| 10:00:20 | 42 | 18 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 10:00:20 | 43 | 19 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 10:00:20 | 44 | 20 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 10:00:20 | 45 | 21 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 10:00:20 | 46 | 22 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 10:00:20 | 47 | 23 | sell 0.0025 SOL → USDC | failed | 43s | 1 | main expired |
| 10:00:20 | 48 | 24 | sell 0.0025 SOL → USDC | failed | 44s | 1 | main expired |
| 10:03:20 | 49 | 1 | sell 0.0025 SOL → USDC | failed | 48s | 1 | main expired |
| 10:03:20 | 50 | 2 | sell 0.0025 SOL → USDC | failed | 47s | 1 | main expired |
| 10:03:20 | 51 | 3 | sell 0.0025 SOL → USDC | failed | 48s | 1 | main expired |
| 10:03:20 | 52 | 4 | sell 0.0025 SOL → USDC | failed | 47s | 1 | main expired |
| 10:03:20 | 53 | 5 | sell 0.0025 SOL → USDC | filled | 45s | 1 |  |
| 10:03:20 | 54 | 6 | sell 0.0025 SOL → USDC | failed | 47s | 1 | main expired |
| 10:03:20 | 55 | 7 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 10:03:20 | 56 | 8 | sell 0.0025 SOL → USDC | filled | 16s | 1 |  |
| 10:03:20 | 57 | 9 | sell 0.0025 SOL → USDC | filled | 29s | 1 |  |
| 10:03:20 | 58 | 10 | sell 0.0025 SOL → USDC | failed | 46s | 1 | main expired |
| 10:03:20 | 59 | 11 | sell 0.0025 SOL → USDC | failed | 49s | 1 | main expired |
| 10:03:20 | 60 | 12 | sell 0.0025 SOL → USDC | failed | 47s | 1 | main expired |
| 10:03:20 | 61 | 13 | sell 0.0025 SOL → USDC | filled | 20s | 1 |  |
| 10:03:20 | 62 | 14 | sell 0.0025 SOL → USDC | failed | 44s | 1 | main expired |
| 10:03:20 | 63 | 15 | sell 0.0025 SOL → USDC | failed | 47s | 1 | main expired |
| 10:03:20 | 64 | 16 | sell 0.0025 SOL → USDC | failed | 48s | 1 | main expired |
| 10:03:20 | 65 | 17 | sell 0.0025 SOL → USDC | failed | 50s | 1 | main expired |
| 10:03:20 | 66 | 18 | sell 0.0025 SOL → USDC | failed | 49s | 1 | main expired |
| 10:03:20 | 67 | 19 | sell 0.0025 SOL → USDC | failed | 49s | 1 | main expired |
| 10:03:20 | 68 | 20 | sell 0.0025 SOL → USDC | failed | 47s | 1 | main expired |
| 10:03:20 | 69 | 21 | sell 0.0025 SOL → USDC | failed | 49s | 1 | main expired |
| 10:03:20 | 70 | 22 | sell 0.0025 SOL → USDC | failed | 49s | 1 | main expired |
| 10:03:20 | 71 | 23 | sell 0.0025 SOL → USDC | failed | 49s | 1 | main expired |
| 10:03:20 | 72 | 24 | sell 0.0025 SOL → USDC | failed | 49s | 1 | main expired |
| 10:03:20 | 73 | 25 | sell 0.0025 SOL → USDC | failed | 47s | 1 | main expired |
| 10:03:20 | 74 | 26 | sell 0.0025 SOL → USDC | failed | 48s | 1 | main expired |
| 10:03:20 | 75 | 27 | sell 0.0025 SOL → USDC | failed | 48s | 1 | main expired |
| 10:03:20 | 76 | 28 | sell 0.0025 SOL → USDC | filled | 24s | 1 |  |
| 10:03:20 | 77 | 29 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 10:03:20 | 78 | 30 | sell 0.0025 SOL → USDC | filled | 42s | 1 |  |
| 10:03:20 | 79 | 31 | sell 0.0025 SOL → USDC | failed | 48s | 1 | main expired |
| 10:03:20 | 80 | 32 | sell 0.0025 SOL → USDC | failed | 48s | 1 | main expired |

### Rows without an order

1 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | main | 1 | SOL → USDC | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 79 (79 main, 0 acquire). Cleanup placed 17 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 10:04:11 | 1 | USDC → SOL (native) | Executed | `0x04434bb6…` [🐞](https://debug.barn.cow.fi/order/0x04434bb6927692012d0ccab6a43186cb0c47e932f386f47b9264fb6562e6faa6) |
| 10:04:12 | 2 | USDC → SOL (native) | Executed | `0xd2cb5e34…` [🐞](https://debug.barn.cow.fi/order/0xd2cb5e349f8cd1bef6bd24c70c4c971bde2c36fc89ec2c404d96c525cc760aca) |
| 10:04:13 | 3 | USDC → SOL (native) | Executed | `0xd065f085…` [🐞](https://debug.barn.cow.fi/order/0xd065f0859acb9f035119eaac504873dd69d31a2d3a74e08cb4fde85f27222fd6) |
| 10:04:14 | 4 | USDC → SOL (native) | Executed | `0x32824d60…` [🐞](https://debug.barn.cow.fi/order/0x32824d606bdb46fb9473a975a55cfefa4ab97f16bb376e581c6d49a493dac2a2) |
| 10:04:15 | 5 | USDC → SOL (native) | Executed | `0xd1a2d83a…` [🐞](https://debug.barn.cow.fi/order/0xd1a2d83ae853d5eb4508d20bb57dad4ec25b7cbf0d3249180271bad2365653ca) |
| 10:04:16 | 6 | USDC → SOL (native) | Executed | `0xbdf33e12…` [🐞](https://debug.barn.cow.fi/order/0xbdf33e12896b83319652e28049d3f4a02d21fad7eff8da970beeed9d7a05079e) |
| 10:04:17 | 7 | USDC → SOL (native) | Executed | `0x27e7a672…` [🐞](https://debug.barn.cow.fi/order/0x27e7a672045bcdd84889f3f49d5be6218465d1233ffb6cdb1d47ce8a76b34158) |
| 10:04:18 | 8 | USDC → SOL (native) | Executed | `0xb486d0e0…` [🐞](https://debug.barn.cow.fi/order/0xb486d0e03ed96694976d6d3f211f39342f0330fb9a46028505b7cf3ec10942d6) |
| 10:04:21 | 9 | USDC → SOL (native) | Executed | `0x0d8866c9…` [🐞](https://debug.barn.cow.fi/order/0x0d8866c94045978124a21edf8dd873d53b9bbfe7b13f922885a82dd16dcab407) |
| 10:04:23 | 10 | USDC → SOL (native) | Executed | `0xbedf9935…` [🐞](https://debug.barn.cow.fi/order/0xbedf9935f4dcbd47047fce04d909288008dafebeacdf0cf63e5dd890ab0a4590) |
| 10:04:33 | 11 | USDC → SOL (native) | Executed | `0xef0a21b4…` [🐞](https://debug.barn.cow.fi/order/0xef0a21b42bb42c9998dcabf6f2a069c7fa91437aa749ccf682c34feea716624a) |
| 10:04:34 | 12 | USDC → SOL (native) | Executed | `0x9e6b66fc…` [🐞](https://debug.barn.cow.fi/order/0x9e6b66fcb3c3d968239f0d3e33555912a43fff03b45f51f2ea2c1d719b677e2f) |
| 10:04:39 | 13 | USDC → SOL (native) | Executed | `0x5eccb4a4…` [🐞](https://debug.barn.cow.fi/order/0x5eccb4a46c84de5e9fad5ad2edfd0f32abb2edd58ba9ea3d4563f33bede90571) |
| 10:04:53 | 16 | USDC → SOL (native) | Executed | `0xc65a532b…` [🐞](https://debug.barn.cow.fi/order/0xc65a532b008df8eccff70ce53055533dc1888eb9cd9abf2e03dbb0047899a8b3) |
| 10:05:16 | 28 | USDC → SOL (native) | Executed | `0xd2fa97ed…` [🐞](https://debug.barn.cow.fi/order/0xd2fa97edff48d434aa67181bb7415749b2b6b0d45cca8b6295cf1caf7827c640) |
| 10:05:16 | 29 | USDC → SOL (native) | Executed | `0x4dea8d00…` [🐞](https://debug.barn.cow.fi/order/0x4dea8d00e74c2355267f10621f0ad0835402c366bb3df406358d1ae06608376a) |
| 10:05:17 | 30 | USDC → SOL (native) | Executed | `0xb0d790a1…` [🐞](https://debug.barn.cow.fi/order/0xb0d790a1152b7fa105be2382dd83689172c068d78e4299828cecf5678d201d45) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| expired: never created on-chain (winner found, creation blockhash expired) | 49 | 62.0% |
| executed | 30 | 38.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 21s | 29s | 38s | 39s |

## Jupiter rate limiting

144 of 606 Jupiter quote attempts (23.8%) were rejected with `rate limited`. 0 orders never executed: Jupiter's quotes for them were rate limited, it never found a solution, and no other solver bid.

Orders using the most Jupiter quote attempts:

| Order | In this report | Attempts | Rate limited | Solved |
|---|---|---|---|---|
| `0x8a8fa807…` [🐞](https://debug.barn.cow.fi/order/0x8a8fa807fe1aebf2a8aa6b2fe1547d0359c5fbc29b1e57cff664bbb70d011887) | yes | 8 | 2 | 6 |
| `0x88d846c5…` [🐞](https://debug.barn.cow.fi/order/0x88d846c54e329055eaf4ec9e1c0ea3262f7301ee091636fce2f894f5e9a8a3de) | yes | 8 | 1 | 7 |
| `0x7d9e5a02…` [🐞](https://debug.barn.cow.fi/order/0x7d9e5a0251e2bc1ffba69f69b2f1eb99b4d12dae2336ca37b5316b6ec7859e32) | yes | 8 | 1 | 7 |
| `0xdfa7cc58…` [🐞](https://debug.barn.cow.fi/order/0xdfa7cc5886d8cb6947950cdf56304b2fc4894004b3c00ce457a826910206ea08) | yes | 8 | 2 | 6 |
| `0x937da2f7…` [🐞](https://debug.barn.cow.fi/order/0x937da2f775aecf820f0b13098ea0a9822e03ea9eb29a52b058376dc04f24964f) | yes | 8 | 1 | 7 |
| `0x1774d9f7…` [🐞](https://debug.barn.cow.fi/order/0x1774d9f707dd4efd0bfffe1c63ce9e772375ae0b56f22465faee45a742212141) | yes | 8 | 1 | 7 |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 30 | 100.0% | 30 | 80,961 | 21s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 449 | 51 | 47 | 92.2% | 3 | 0 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: FailedToCreate | 2 |
| jupiter-solve: PriorityFeeTooHigh | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 1
- Orders filtered for `unfunded_sell_token_account`: 137 times
- Orders filtered for `unreceivable_buy_token_account`: 137 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 79 | 30 | 38.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 79 | 30 | 38.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 4 | 2 | 50.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 4 | 3 | 75.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 4 | 2 | 50.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 4 | 2 | 50.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 4 | 3 | 75.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 4 | 3 | 75.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 4 | 3 | 75.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 4 | 2 | 50.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 3 | 1 | 33.3% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 3 | 1 | 33.3% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 3 | 1 | 33.3% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 3 | 1 | 33.3% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 3 | 0 | 0.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 3 | 0 | 0.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 3 | 1 | 33.3% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 2 | 0 | 0.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 2 | 0 | 0.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 2 | 0 | 0.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 2 | 0 | 0.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 2 | 0 | 0.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 2 | 0 | 0.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 2 | 0 | 0.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 2 | 0 | 0.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 2 | 2 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 0 | 0.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 0 | 0.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 0 | 0.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 1 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 1 | 1 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 1 | 1 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 1 | 0 | 0.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 48 |
| Creation tx rejected: blockhash not found | 1 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 09:54:22 | wSOL → USDC | sell | Creation tx rejected: blockhash not found | `0xc17d6c74…` [🐞](https://debug.barn.cow.fi/order/0xc17d6c74a51e8091a82cbfc2acb50c86382e1b6bacb5bf5742e8b1abe51d91d7) |
| 09:57:22 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xeac459da…` [🐞](https://debug.barn.cow.fi/order/0xeac459da775995a95dbeef4b8bc834d17bd9e75dce14bf5d185ad84799250e3f) |
| 09:57:22 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xbe93c37c…` [🐞](https://debug.barn.cow.fi/order/0xbe93c37c56c2acc87b15665a60e10964a05c77a304e461cae65900f6dd859ac1) |
| 09:57:22 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x6c6de520…` [🐞](https://debug.barn.cow.fi/order/0x6c6de52040ce8d11719586134c9e4f248f6370016ea68527683e7b49509691ed) |
| 09:57:22 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x98dabb87…` [🐞](https://debug.barn.cow.fi/order/0x98dabb87903394d7e264541e7956fb1ebb32868357a149100b796d81a04091d3) |
| 09:57:22 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xa5f8d390…` [🐞](https://debug.barn.cow.fi/order/0xa5f8d39001bf45c7c5683d07977dab41f443a28c42885aea6219dc9417aaa4b6) |
| 09:57:22 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x8a392c14…` [🐞](https://debug.barn.cow.fi/order/0x8a392c14537d0dc9bdc721b9adcd7fc8b7b0e828fed96e5f67778c9b705500e8) |
| 09:57:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x51b0ed17…` [🐞](https://debug.barn.cow.fi/order/0x51b0ed17a255a092bc813faded0335848c30636b65cdf09c7dba86caa8dc882e) |
| 09:57:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x5a5bbd2d…` [🐞](https://debug.barn.cow.fi/order/0x5a5bbd2d741839f17fbbceb8b100d3dc81a80d7e9403f4153ade44ab8358dd37) |
| 10:00:22 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xb7caa32d…` [🐞](https://debug.barn.cow.fi/order/0xb7caa32d69f5f0a4ade2ac5a6f6ee340947bbcae7cbd4af5e79ebb960ccc352e) |
| 10:00:22 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x4896dc32…` [🐞](https://debug.barn.cow.fi/order/0x4896dc325c3f7424983b38b3614fa1a046bbe29231153c1f52dbaa5fa0e0873e) |
| 10:00:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xcb7ac8e8…` [🐞](https://debug.barn.cow.fi/order/0xcb7ac8e894de7e9749744fc2bbebd29d97c2bd692d51094b2ed8d7706e33077e) |
| 10:00:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x1774d9f7…` [🐞](https://debug.barn.cow.fi/order/0x1774d9f707dd4efd0bfffe1c63ce9e772375ae0b56f22465faee45a742212141) |
| 10:00:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xdfa7cc58…` [🐞](https://debug.barn.cow.fi/order/0xdfa7cc5886d8cb6947950cdf56304b2fc4894004b3c00ce457a826910206ea08) |
| 10:00:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x30da1f6f…` [🐞](https://debug.barn.cow.fi/order/0x30da1f6f1b3c23b8490e4a81663c93fa3edeca2f60c99e0ad5d0670a1a4db05a) |
| 10:00:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x88d846c5…` [🐞](https://debug.barn.cow.fi/order/0x88d846c54e329055eaf4ec9e1c0ea3262f7301ee091636fce2f894f5e9a8a3de) |
| 10:00:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x3d4c6d2c…` [🐞](https://debug.barn.cow.fi/order/0x3d4c6d2c8429e42d49a4f6ada2a467473619d2d3da24ef4c7dbcc458f1d947fb) |
| 10:00:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x937da2f7…` [🐞](https://debug.barn.cow.fi/order/0x937da2f775aecf820f0b13098ea0a9822e03ea9eb29a52b058376dc04f24964f) |
| 10:00:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xf09e14c5…` [🐞](https://debug.barn.cow.fi/order/0xf09e14c53c5b9bddd2a250fa9197d4378d9b30832012e1be23d5d55e22a07b77) |
| 10:00:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x8a8fa807…` [🐞](https://debug.barn.cow.fi/order/0x8a8fa807fe1aebf2a8aa6b2fe1547d0359c5fbc29b1e57cff664bbb70d011887) |
| 10:00:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x0432640c…` [🐞](https://debug.barn.cow.fi/order/0x0432640c3abcabf4e9486958f9e33701caf809e5d87a3f7e288c3ef984961eb3) |
| 10:00:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x8cc8dafd…` [🐞](https://debug.barn.cow.fi/order/0x8cc8dafd258faaffb68d357bb4bb2791d75b25932f3a73dc3c7b2cfb0c675c08) |
| 10:00:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x301f1b0a…` [🐞](https://debug.barn.cow.fi/order/0x301f1b0a11d877b0f0b9d5a89731176acd6ff4ff91b1c7d5d676a7d4ffe47b13) |
| 10:00:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x8dea1a7e…` [🐞](https://debug.barn.cow.fi/order/0x8dea1a7ef229cf5535c073bbb440d76086eaa066887ef6964ad5c49e102828f1) |
| 10:00:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x7d9e5a02…` [🐞](https://debug.barn.cow.fi/order/0x7d9e5a0251e2bc1ffba69f69b2f1eb99b4d12dae2336ca37b5316b6ec7859e32) |
| 10:03:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xecd065e1…` [🐞](https://debug.barn.cow.fi/order/0xecd065e13f52a54fce54c136474034a2fee1345fbec71425ae0867886ac6b6cf) |
| 10:03:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x240635ce…` [🐞](https://debug.barn.cow.fi/order/0x240635ce051089cf19ff2acba093175fb5f91b6ff9a99d437a243e1e593b0208) |
| 10:03:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x0fca5b17…` [🐞](https://debug.barn.cow.fi/order/0x0fca5b17c9ab02b392c78e03da71039c60899048cc6128f4987b48bacf9b4a58) |
| 10:03:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xa1a56317…` [🐞](https://debug.barn.cow.fi/order/0xa1a56317884e41ba1a797b8b3c0e58d06d8768a76bdda333fe39c2053976bb4c) |
| 10:03:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x513c0f63…` [🐞](https://debug.barn.cow.fi/order/0x513c0f6378aa7ebe05224d214e1a7d94e8108b61c42d1cd978fbec5993b4adf3) |
| 10:03:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xb5b17058…` [🐞](https://debug.barn.cow.fi/order/0xb5b17058cb8fe05f7b120b54df09bba297408dbac4f068769fd8b6893ec45dca) |
| 10:03:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x89866e73…` [🐞](https://debug.barn.cow.fi/order/0x89866e73cf8418639c7af04da8611893ed54cd4c3d5e17ef26f93a3c041e2d82) |
| 10:03:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xabccd21e…` [🐞](https://debug.barn.cow.fi/order/0xabccd21e16ffe9e92da495e6bf25d66461a147faa95a1012f513686603f5d213) |
| 10:03:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xd8b41a36…` [🐞](https://debug.barn.cow.fi/order/0xd8b41a36c010a0bf8210bc969073c7079c37a988436508b7d8bb8186423e7ff4) |
| 10:03:24 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xdebd0fc8…` [🐞](https://debug.barn.cow.fi/order/0xdebd0fc85a6475744413fed5c20cd4c249d8f38c54ef8e758f81df12e756dcf7) |
| 10:03:25 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x99181153…` [🐞](https://debug.barn.cow.fi/order/0x991811537e39351e323cf61632d9c62328e8ae8fe639e6f0d403eed25bb11473) |
| 10:03:25 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x8e7da013…` [🐞](https://debug.barn.cow.fi/order/0x8e7da01395b2c5026bbd6bb9c22892c9b982ec2968a35e2e58998dfd894ce649) |
| 10:03:25 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x4d3052fe…` [🐞](https://debug.barn.cow.fi/order/0x4d3052fe8bcfe11c377fce8cb09d1da3d6fbed633279ea0505acf138df6b0d01) |
| 10:03:25 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xe95ca248…` [🐞](https://debug.barn.cow.fi/order/0xe95ca248435357bbdb3c22b0c8e7833eb63f0577081bfa8c7b68c32872771812) |
| 10:03:25 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x0fa7525d…` [🐞](https://debug.barn.cow.fi/order/0x0fa7525dcf609c53148c2ca94bf6d7ba62743a9db3a4f46814b87927fb73eb16) |
| 10:03:25 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x7f221fb6…` [🐞](https://debug.barn.cow.fi/order/0x7f221fb6c2b7912ab4498d1c8d62026040c4fefcf6de720032385eac39826f99) |
| 10:03:25 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x6660a72a…` [🐞](https://debug.barn.cow.fi/order/0x6660a72af046805377a6b94ef6ea4193c96d8714c1bd47e084b0b53ea39fd95e) |
| 10:03:25 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xea478257…` [🐞](https://debug.barn.cow.fi/order/0xea4782576d2ced130dbdf497d51b9f34b8cce8a524bd460a79f83859b8e756a1) |
| 10:03:26 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x5fa27f2e…` [🐞](https://debug.barn.cow.fi/order/0x5fa27f2edd69ae524bede9a38773b028e4867375c7afb94e0f7b051ba3cbc68f) |
| 10:03:26 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xa021413a…` [🐞](https://debug.barn.cow.fi/order/0xa021413ac7ccd5963b165e75bd730a5690ad29d25ad8a76d933da6354f979145) |
| 10:03:26 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xe57efe89…` [🐞](https://debug.barn.cow.fi/order/0xe57efe894e2245811c1a114e2b5af02cfe4fdd78ac14e2bc5d841f52d12316b1) |
| 10:03:26 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xb0e39dcb…` [🐞](https://debug.barn.cow.fi/order/0xb0e39dcb695002312d34dc4c6bea87599956dba13354299df17cad0fdc3b35fd) |
| 10:03:26 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x79eb2427…` [🐞](https://debug.barn.cow.fi/order/0x79eb242732f3c6fc4c99d7c7aa562c95133bb85b4fe23cb489e608d5bafadbb7) |
| 10:03:26 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xbed50194…` [🐞](https://debug.barn.cow.fi/order/0xbed5019472e0e80de535a625d3bc6257ee4bf9b35593ee63ad3456788d56c2e5) |
