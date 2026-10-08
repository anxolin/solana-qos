# Solana QoS report: 2026-10-08-10-09-opposing-sol-usdc

Barn, orders created between `2026-10-08T10:10:02.183Z` and `2026-10-08T10:15:08.782Z`. Data fetched 2026-10-08T10:15:16+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 15 |
| Orders executed | **15** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 10 |
| Settlement txs | 15 |

## Scenario

15 of 15 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 10:10:02 | 1 | 2 | sell 0.01 SOL → USDC | filled | 29s | 1 |  |
| 10:10:02 | 2 | 4 | sell 0.01 SOL → USDC | filled | 26s | 1 |  |
| 10:10:02 | 3 | 6 | sell 0.01 SOL → USDC | filled | 17s | 1 |  |
| 10:10:02 | 4 | 8 | sell 0.01 SOL → USDC | filled | 14s | 1 |  |
| 10:10:02 | 5 | 10 | sell 0.01 SOL → USDC | filled | 10s | 1 |  |
| 10:13:02 | 6 | 1 | sell 0.0025 SOL → USDC | filled | 13s | 1 |  |
| 10:13:03 | 7 | 2 | buy 0.0025 wSOL ← USDC | filled | 27s | 1 |  |
| 10:13:02 | 8 | 3 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 10:13:02 | 9 | 4 | buy 0.0025 wSOL ← USDC | filled | 18s | 1 |  |
| 10:13:02 | 10 | 5 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 10:13:03 | 11 | 6 | buy 0.0025 wSOL ← USDC | filled | 24s | 1 |  |
| 10:13:02 | 12 | 7 | sell 0.0025 SOL → USDC | filled | 26s | 1 |  |
| 10:13:02 | 13 | 8 | buy 0.0025 wSOL ← USDC | filled | 14s | 1 |  |
| 10:13:02 | 14 | 9 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 10:13:02 | 15 | 10 | buy 0.0025 wSOL ← USDC | filled | 8s | 1 |  |

Scenario orders: 15 (15 main, 0 acquire). Cleanup placed 10 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 10:13:39 | 1 | USDC → SOL (native) | Executed | `0xb7759904…` [🐞](https://debug.barn.cow.fi/order/0xb77599045035208f33e86caef4ee4ac9c69f5d1fed0c86e9bfc389a8860e60b3) |
| 10:13:40 | 2 | USDC → SOL (native) | Executed | `0xe542bd7e…` [🐞](https://debug.barn.cow.fi/order/0xe542bd7e2fce2391655815fe834f7c6a9e98863a730f643287fa5c754caa28a1) |
| 10:13:40 | 3 | USDC → SOL (native) | Executed | `0xe269735e…` [🐞](https://debug.barn.cow.fi/order/0xe269735e9948b4b24544205b8d3878f3fa6c447e203e58bb491b69e360168cc6) |
| 10:13:41 | 4 | USDC → SOL (native) | Executed | `0x0cdb5f44…` [🐞](https://debug.barn.cow.fi/order/0x0cdb5f44581419b6110b2c8c313c8d6f295bb96323a127bcfc36db7862446f3b) |
| 10:13:42 | 5 | USDC → SOL (native) | Executed | `0x06f1ba1c…` [🐞](https://debug.barn.cow.fi/order/0x06f1ba1c6e008f52ca36eaac8afc9fcbe7563188ebb472ee39f6a37fc47e9426) |
| 10:13:43 | 6 | USDC → SOL (native) | Executed | `0x350e1284…` [🐞](https://debug.barn.cow.fi/order/0x350e128459773bd56531a07718a21dbc6fbd163c6f267d48f2c056d1c3a670bc) |
| 10:13:44 | 7 | USDC → SOL (native) | Executed | `0xd06038ba…` [🐞](https://debug.barn.cow.fi/order/0xd06038bac60f0dd3b33206ecb0f9e7aee5d4a0d06690ea340d6e5862ead0d785) |
| 10:13:45 | 8 | USDC → SOL (native) | Executed | `0x0f046778…` [🐞](https://debug.barn.cow.fi/order/0x0f0467788a6d628988b6d0cd63fc169ac1ea575a36bd650e1b175def9bb403ac) |
| 10:13:48 | 9 | USDC → SOL (native) | Executed | `0x912558e9…` [🐞](https://debug.barn.cow.fi/order/0x912558e950475cfccd2cd868da598043bff67332a8d6d2bdfddc393dbded0ae7) |
| 10:13:49 | 10 | USDC → SOL (native) | Executed | `0xaa17df7b…` [🐞](https://debug.barn.cow.fi/order/0xaa17df7b29a07f31752cea65de4df265310923dde2c6e9cbb8b7d1ae78ba85f6) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 15 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 13s | 23s | 24s | 31s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 15 | 100.0% | 15 | 106,187 | 13s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 94 | 26 | 25 | 96.2% | 1 | 0 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: PriorityFeeTooHigh | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 56 times
- Orders filtered for `unreceivable_buy_token_account`: 56 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 10 | 10 | 100.0% |
| buy | 5 | 5 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 10 | 10 | 100.0% |
| USDC → wSOL | 5 | 5 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 2 | 2 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 2 | 2 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 2 | 2 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
