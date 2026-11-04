# Solana QoS report: 2026-10-27-16-05-token-2022__xstocks-4x10

Barn, orders created between `2026-10-27T16:06:09.640Z` and `2026-10-27T16:17:31.741Z`. Data fetched 2026-10-27T16:16:50+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 6 |
| Orders executed | **6** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 3 |
| Settlement txs | 6 |

## Scenario

3 of 10 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 16:06:18 | 1 | 2 | buy 0.00515 NVDAx ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 16:06:25 | 2 | 4 | buy 0.00338 MSFTx ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 16:06:41 | 3 | 1 | buy 0.00673 MSTRx ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 16:06:48 | 4 | 3 | buy 0.00257 GLDx ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 16:07:40 | 5 | 4 | buy 0.0135 CRCLx ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 16:11:03 | 6 | 3 | buy 0.00643 MSTRx ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 16:11:09 | 7 | 2 | sell 0.00364 NVDAx → TSLAx | filled | 23s | 2 |  |
| 16:11:26 | 8 | 1 | sell 0.00485 MSTRx → CRCLx | filled | 22s | 2 |  |
| 16:11:26 | 9 | 4 | buy 0.00486 TSLAx ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 16:15:46 | 10 | 3 | sell 0.00159 GLDx → USDT | filled | 16s | 2 |  |

### Rows without an order

7 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 7 | USDC → MSTRx ×2, USDC → NVDAx, USDC → MSFTx, USDC → GLDx, USDC → CRCLx, USDC → TSLAx | no route found |

Scenario orders: 6 (3 main, 3 acquire). Cleanup placed 6 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 16:16:05 | 1 | CRCLx → SOL (native) | Executed | `0xc4dc6d39…` [🐞](https://debug.barn.cow.fi/order/0xc4dc6d39ed3c4d948001ab9b5205b8bf1033e842070d5e70762c14fe68ede172) |
| 16:16:05 | 1 | MSTRx → SOL (native) | Executed | `0xc66ea68d…` [🐞](https://debug.barn.cow.fi/order/0xc66ea68dd2e0bea26c1d3affb5123bf77b69ca9ee0ed452eeb5f61c3f3ec1f33) |
| 16:16:07 | 2 | NVDAx → SOL (native) | Executed | `0x419fb7f4…` [🐞](https://debug.barn.cow.fi/order/0x419fb7f4a0248eccb3dc01b2752fd580767e3085d5073abe5ac12f6dfd34a71b) |
| 16:16:07 | 2 | TSLAx → SOL (native) | Executed | `0x2f20a9c0…` [🐞](https://debug.barn.cow.fi/order/0x2f20a9c043f364f0420026bb210fa0bb5a43c43a49e6b6824e3302e67aa059ee) |
| 16:16:08 | 3 | USDT → SOL (native) | Executed | `0x726a85db…` [🐞](https://debug.barn.cow.fi/order/0x726a85dbb68883886690b0572c53cf789997c968e6e7ee5a06586a16fe2e6ed2) |
| 16:16:08 | 3 | GLDx → SOL (native) | Executed | `0x3945ce0b…` [🐞](https://debug.barn.cow.fi/order/0x3945ce0bac2d57c9651dddd93841d3a2d7cb42a2be916bccabc1d40c188228dc) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 6 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 1s | 3s | 5s | 5s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 6 | 100.0% | 6 | 198,808 | 1s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 12 | 12 | 12 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 125 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 6 | 6 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → NVDAx | 1 | 1 | 100.0% |
| NVDAx → TSLAx | 1 | 1 | 100.0% |
| wSOL → MSTRx | 1 | 1 | 100.0% |
| MSTRx → CRCLx | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| GLDx → USDT | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 2 | 2 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 2 | 2 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 2 | 2 | 100.0% |
