# Solana QoS report: 2026-10-26-12-49-smoke

Barn, orders created between `2026-10-26T12:49:22.499Z` and `2026-10-26T12:51:43.297Z`. Data fetched 2026-10-26T12:50:51+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 7 |
| Orders executed | **7** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 2 |
| Settlement txs | 7 |

## Scenario

6 of 6 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 12:49:22 | 1 | 1 | sell 0.01 SOL → USDC | filled | 12s | 1 |  |
| 12:49:22 | 2 | 2 | buy 2 JUP ← SOL | filled | 10s | 1 |  |
| 12:49:34 | 3 | 1 | buy 1 JUP ← USDC | filled | 15s | 1 |  |
| 12:49:32 | 4 | 2 | sell 1 JUP → wSOL | filled | 11s | 1 |  |
| 12:49:49 | 5 | 1 | sell 0.5 JUP → SOL | filled | 15s | 1 |  |
| 12:49:44 | 6 | 2 | buy 1 USDT ← USDC | filled | 35s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 4 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 12:50:26 | 1 | USDC → SOL (native) | Executed | `0x514d3733…` [🐞](https://debug.barn.cow.fi/order/0x514d37338f4b605fb27efae8894a4a859b56881815dac0be89d5e2c0b35eeb2b) |
| 12:50:30 | 2 | JUP → SOL (native) | Executed | `0xe0810c71…` [🐞](https://debug.barn.cow.fi/order/0xe0810c714590cee85f4dd6b95c7f654bafa8031f98b278b025019ec0f9aa9b86) |
| 12:50:30 | 2 | USDC → SOL (native) | Executed | `0x52d61b44…` [🐞](https://debug.barn.cow.fi/order/0x52d61b44c3e56678b17f0738dc1645fc6242c8ed48ddb3a300a83293b1db5eb7) |
| 12:50:30 | 2 | USDT → SOL (native) | Executed | `0xb08ac0cd…` [🐞](https://debug.barn.cow.fi/order/0xb08ac0cdfbce00a090945f9c10515dc62d71aa32c84ed5bee02e949b5779b99d) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 7s | 10s | 11s | 11s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| GCBB…o5VC | 5 | 71.4% | 5 | 70,041 | 7s |
| AuwL…YzVj | 1 | 14.3% | 1 | 275,091 | 10s |
| Grr6…x1jS | 1 | 14.3% | 1 | 216,934 | 7s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| asao | 12 | 8 | 8 | 100.0% | 0 | 0 | 0 | 0 |
| jupiter-solve | 8 | 1 | 1 | 100.0% | 0 | 0 | 0 | 0 |
| bitget-solve | 5 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| grafiks | 7 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| paradox | 1 | 0 | 0 | – | 0 | 0 | 1 | 0 |
| kaisersolver | 11 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| helixbox | 5 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| zurui | 1 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| arc | 6 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| rosato | 8 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| rizzolver | 0 | 0 | 0 | – | 0 | 0 | 16 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 16 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 16 times
- Orders filtered for `in_flight`: 5 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 4 | 4 | 100.0% |
| market buy | 3 | 3 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 2 | 2 | 100.0% |
| wSOL → JUP | 1 | 1 | 100.0% |
| JUP → wSOL | 1 | 1 | 100.0% |
| USDC → JUP | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| USDC → USDT | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 4 | 4 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 3 | 3 | 100.0% |
