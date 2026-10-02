# Solana QoS report: 2026-10-02-21-50-smoke

Barn, orders created between `2026-10-02T21:50:48.955Z` and `2026-10-02T21:59:28.377Z`. Data fetched 2026-10-02T21:59:05+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 7 |
| Orders executed | **7** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 2 |
| Settlement txs | 7 |

## Scenario

6 of 6 scenario rows completed. 1 retries, 0 placement errors (from `sim/journal.jsonl`).

| Row | Trader | Trade | Result | Orders | Reason |
|---|---|---|---|---|---|
| 1 | 1 | sell 0.01 SOL → USDC | filled | 1 |  |
| 2 | 2 | buy 2 JUP ← SOL | filled | 1 |  |
| 3 | 1 | buy 1 JUP ← USDC | filled | 1 |  |
| 4 | 2 | sell 1 JUP → wSOL | filled | 1 |  |
| 5 | 1 | sell 0.5 JUP → SOL | filled | 1 |  |
| 6 | 2 | buy 1 USDT ← USDC | filled | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 6 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 21:53:07 | 1 | JUP → SOL (native) | Executed | `0xbc5a848f…` [🐞](https://debug.barn.cow.fi/order/0xbc5a848fbf3e87e3ef8fc7efd75bbba63fe690aab20557331ca4708c27558be4) |
| 21:53:08 | 2 | JUP → SOL (native) | Executed | `0x00c85658…` [🐞](https://debug.barn.cow.fi/order/0x00c856584b6637f41f8969453d2d8abc15f64ce1efb9e6898ab9f57dd11f4268) |
| 21:53:26 | 1 | USDC → SOL (native) | Executed | `0x258b23e6…` [🐞](https://debug.barn.cow.fi/order/0x258b23e6633f6520883cac88efd27ed146486134aa5e18ce0c353b00cc0aaeee) |
| 21:54:14 | 2 | USDC → SOL (native) | Expired without a fill | `0xf9c346b4…` [🐞](https://debug.barn.cow.fi/order/0xf9c346b4c006a573229130a674943939b9692e4a98895e85d0a61570dd0dfcec) |
| 21:56:26 | 2 | USDC → SOL (native) | Expired without a fill | `0x4f77cd21…` [🐞](https://debug.barn.cow.fi/order/0x4f77cd211aeecb37832627a236afb887fedc44b4728eedf8e814755254e9d1f5) |
| 21:58:39 | 2 | USDT → SOL (native) | Executed | `0x2b935efb…` [🐞](https://debug.barn.cow.fi/order/0x2b935efb4d2745b257aa47e1cf7dacbcacc73c90b5050abce4b0fb9d82582619) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 21s | 31s | 45s | 45s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 7 | 100.0% | 7 | 140,593 | 21s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| paradox | 35 | 19 | 0 | 0.0% | 19 | 0 | 0 | 0 |
| jupiter-solve | 8 | 7 | 7 | 100.0% | 0 | 0 | 0 | 0 |
| rosato | 31 | 4 | 2 | 50.0% | 1 | 2 | 0 | 1 |
| fractal | 17 | 2 | 2 | 100.0% | 0 | 0 | 0 | 0 |
| zurui | 0 | 0 | 0 | – | 0 | 0 | 97 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 97 | 0 |
| grafiks | 0 | 0 | 0 | – | 0 | 0 | 4 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| paradox: SimulationFailed | 19 |
| rosato: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 97 times
- Orders filtered for `unpayable_native_buy`: 52 times
- Orders filtered for `in_flight`: 19 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| buy | 4 | 4 | 100.0% |
| sell | 3 | 3 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 2 | 2 | 100.0% |
| wSOL → JUP | 1 | 1 | 100.0% |
| USDC → JUP | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| JUP → wSOL | 1 | 1 | 100.0% |
| USDC → USDT | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 4 | 4 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 3 | 3 | 100.0% |
