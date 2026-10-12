# Solana QoS report: grafiks-2026-10-09-213017-transaction-size

Barn, orders created between `2026-10-09T20:19:56.049Z` and `2026-10-09T20:35:53.956Z`. Data fetched 2026-10-09T20:35:50+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 10 |
| Orders executed | **10** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 8 |
| Settlement txs | 8 |

## Scenario

10 of 10 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Planned trades | Filled | Quote failed | Submitted but unfilled | Other failed | Unfinished | Trade completion |
|---|---|---|---|---|---|---|
| 10 | 10 | 0 | 0 | 0 | 0 | 100.0% |

Counts are scenario rows, not failed attempts. Cleanup is excluded. Late fills remain separate from full-flow completion.

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 20:19:56 | 1 | 1 | sell 0.005 SOL → EURC | filled | 11s | 1 |  |
| 20:23:56 | 2 | 1 | sell 0.005 SOL → EURC | filled | 12s | 1 |  |
| 20:23:56 | 3 | 2 | sell 0.005 SOL → EURC | filled | 6s | 1 |  |
| 20:23:56 | 4 | 3 | sell 0.005 SOL → EURC | filled | 15s | 1 |  |
| 20:23:56 | 5 | 4 | sell 0.005 SOL → EURC | filled | 22s | 1 |  |
| 20:27:56 | 6 | 5 | sell 0.005 SOL → JLP | filled | 6s | 1 |  |
| 20:31:56 | 7 | 5 | sell 0.005 SOL → JLP | filled | 8s | 1 |  |
| 20:31:56 | 8 | 6 | sell 0.005 SOL → JLP | filled | 9s | 1 |  |
| 20:31:56 | 9 | 7 | sell 0.005 SOL → JLP | filled | 9s | 1 |  |
| 20:31:56 | 10 | 8 | sell 0.005 SOL → JLP | filled | 12s | 1 |  |

Scenario orders: 10 (10 main, 0 acquire). Cleanup placed 8 more, listed below and left out of the stats.

## Backend failure evidence

NoLiquidity is a generic API response, not proof of missing market liquidity. Timing matches are approximate; a shared auction does not prove an order-specific cause.

| UTC time | Row | Stage | Solver | Backend detail | Match | Cause / order context |
|---|---|---|---|---|---|---|
| 2026-10-09T20:20:00.412246915Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x8a5d2d9b5267980d51a3686b77ac3272c7801d06df87cb94ccd5ebfbdfbb13e1 |
| 2026-10-09T20:32:15.977882018Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x389e7466f234393e355310083c7810a66cf43b11c80530eef91f506cbc8a49bb, 0x8ed5d389d8d3c790c5a2636b9c9f131fab5d5d58d1ff18f5f85e3f27e30cc940, 0x942a5ff7f22023688a96f7226961f3fbe67659dffda81366f967e96d08de3e84, 0xa054cfe32b33d87e16134ed009135cff01b2ebf41a622d3934f93213b8864820, 0xe529e7044fd97943b9b884c748a0c071966421de94d6163e3509a92c7ab44dbb |
| 2026-10-09T20:32:15.977908985Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x389e7466f234393e355310083c7810a66cf43b11c80530eef91f506cbc8a49bb, 0x8ed5d389d8d3c790c5a2636b9c9f131fab5d5d58d1ff18f5f85e3f27e30cc940, 0x942a5ff7f22023688a96f7226961f3fbe67659dffda81366f967e96d08de3e84, 0xa054cfe32b33d87e16134ed009135cff01b2ebf41a622d3934f93213b8864820, 0xe529e7044fd97943b9b884c748a0c071966421de94d6163e3509a92c7ab44dbb |
| 2026-10-09T20:32:20.935296032Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x3e06475178ce9dde0e94ac41ecbac183803db83ca87383e3186e66850ddc10ca, 0x540e8fdad11fad9f8d89b990e1fe61374e8e1a41f6d732ea8cf93f41f8001cde, 0xa4a36b9ca2ca3fa789edce822b10fdbc3007918f78168c88b8f6bc1ed46c9eb3 |
| 2026-10-09T20:32:20.935309695Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x3e06475178ce9dde0e94ac41ecbac183803db83ca87383e3186e66850ddc10ca, 0x540e8fdad11fad9f8d89b990e1fe61374e8e1a41f6d732ea8cf93f41f8001cde, 0xa4a36b9ca2ca3fa789edce822b10fdbc3007918f78168c88b8f6bc1ed46c9eb3 |
| 2026-10-09T20:32:20.935315701Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x3e06475178ce9dde0e94ac41ecbac183803db83ca87383e3186e66850ddc10ca, 0x540e8fdad11fad9f8d89b990e1fe61374e8e1a41f6d732ea8cf93f41f8001cde, 0xa4a36b9ca2ca3fa789edce822b10fdbc3007918f78168c88b8f6bc1ed46c9eb3 |
| 2026-10-09T20:32:20.935324443Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x3e06475178ce9dde0e94ac41ecbac183803db83ca87383e3186e66850ddc10ca, 0x540e8fdad11fad9f8d89b990e1fe61374e8e1a41f6d732ea8cf93f41f8001cde, 0xa4a36b9ca2ca3fa789edce822b10fdbc3007918f78168c88b8f6bc1ed46c9eb3 |
| 2026-10-09T20:32:20.935329969Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x3e06475178ce9dde0e94ac41ecbac183803db83ca87383e3186e66850ddc10ca, 0x540e8fdad11fad9f8d89b990e1fe61374e8e1a41f6d732ea8cf93f41f8001cde, 0xa4a36b9ca2ca3fa789edce822b10fdbc3007918f78168c88b8f6bc1ed46c9eb3 |
| 2026-10-09T20:32:20.935337275Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x3e06475178ce9dde0e94ac41ecbac183803db83ca87383e3186e66850ddc10ca, 0x540e8fdad11fad9f8d89b990e1fe61374e8e1a41f6d732ea8cf93f41f8001cde, 0xa4a36b9ca2ca3fa789edce822b10fdbc3007918f78168c88b8f6bc1ed46c9eb3 |
| 2026-10-09T20:33:30.278726337Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x540e8fdad11fad9f8d89b990e1fe61374e8e1a41f6d732ea8cf93f41f8001cde |

Backend evidence fetched through `2026-10-09T20:35:53.956Z`.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 20:32:10 | 1 | EURC → SOL (native) | Executed | `0x942a5ff7…` [🐞](https://debug.barn.cow.fi/order/0x942a5ff7f22023688a96f7226961f3fbe67659dffda81366f967e96d08de3e84) |
| 20:32:11 | 2 | EURC → SOL (native) | Executed | `0x389e7466…` [🐞](https://debug.barn.cow.fi/order/0x389e7466f234393e355310083c7810a66cf43b11c80530eef91f506cbc8a49bb) |
| 20:32:12 | 3 | EURC → SOL (native) | Executed | `0x8ed5d389…` [🐞](https://debug.barn.cow.fi/order/0x8ed5d389d8d3c790c5a2636b9c9f131fab5d5d58d1ff18f5f85e3f27e30cc940) |
| 20:32:13 | 4 | EURC → SOL (native) | Executed | `0xe529e704…` [🐞](https://debug.barn.cow.fi/order/0xe529e7044fd97943b9b884c748a0c071966421de94d6163e3509a92c7ab44dbb) |
| 20:32:14 | 5 | JLP → SOL (native) | Executed | `0xa054cfe3…` [🐞](https://debug.barn.cow.fi/order/0xa054cfe32b33d87e16134ed009135cff01b2ebf41a622d3934f93213b8864820) |
| 20:32:15 | 6 | JLP → SOL (native) | Executed | `0xa4a36b9c…` [🐞](https://debug.barn.cow.fi/order/0xa4a36b9ca2ca3fa789edce822b10fdbc3007918f78168c88b8f6bc1ed46c9eb3) |
| 20:32:16 | 7 | JLP → SOL (native) | Executed | `0x3e064751…` [🐞](https://debug.barn.cow.fi/order/0x3e06475178ce9dde0e94ac41ecbac183803db83ca87383e3186e66850ddc10ca) |
| 20:32:17 | 8 | JLP → SOL (native) | Executed | `0x540e8fda…` [🐞](https://debug.barn.cow.fi/order/0x540e8fdad11fad9f8d89b990e1fe61374e8e1a41f6d732ea8cf93f41f8001cde) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 10 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 6s | 8s | 16s | 16s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| AuwL…YzVj | 10 | 100.0% | 8 | 155,190 | 6s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| grafiks | 46 | 23 | 16 | 69.6% | 1 | 12 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 185 times
- Orders filtered for `unreceivable_buy_token_account`: 185 times
- Orders filtered for `in_flight`: 29 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 10 | 10 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → EURC | 5 | 5 | 100.0% |
| wSOL → JLP | 5 | 5 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
