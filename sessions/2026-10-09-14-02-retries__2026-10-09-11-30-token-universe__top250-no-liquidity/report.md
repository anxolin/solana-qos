# Solana QoS report: 2026-10-09-14-02-retries__2026-10-09-11-30-token-universe__top250-no-liquidity

Barn, orders created between `2026-10-09T14:03:23.336Z` and `2026-10-09T14:06:16.181Z`. Data fetched 2026-10-09T14:05:53+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 20 |
| Orders executed | **6** (30.0%) |
| Sponsored orders never created on-chain | 14 (70.0%) |
| Traders | 9 |
| Settlement txs | 6 |

## Scenario

5 of 26 scenario rows completed. 0 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 14:03:23 | 1 | 12 | sell 103 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump → SOL | failed | 51s | 1 | acquire 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump expired |
| 14:03:23 | 2 | 28 | sell 36.2 Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump → SOL | failed | 51s | 1 | acquire Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump expired |
| 14:03:23 | 3 | 8 | sell 68.5 MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump → SOL | failed | 8s | 0 | acquire MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:03:23 | 4 | 9 | sell 41.6 GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump → SOL | failed | 9s | 0 | acquire GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump error: 404 Not Found: NoLiquidity: no route found |
| 14:03:23 | 5 | 18 | sell 95.6 CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump → SOL | failed | 9s | 0 | acquire CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump error: 404 Not Found: NoLiquidity: no route found |
| 14:03:23 | 6 | 21 | sell 163 Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump → SOL | failed | 9s | 0 | acquire Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:03:23 | 7 | 24 | sell 0.005 SOL → 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz | failed | 45s | 1 | main expired |
| 14:04:09 | 8 | 24 | sell 14500 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz → SOL | failed | 50s | 1 | acquire 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz expired |
| 14:03:33 | 9 | 9 | sell 0.00601 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | failed | 50s | 1 | acquire XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 expired |
| 14:04:14 | 10 | 12 | sell 0.0173 BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T → SOL | failed | 50s | 1 | acquire BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T expired |
| 14:03:33 | 11 | 18 | sell 0.00205 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 → SOL | failed | 53s | 1 | acquire XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 expired |
| 14:03:24 | 12 | 23 | sell 0.0013 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | failed | 9s | 0 | acquire XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:03:24 | 13 | 1 | sell 0.005 SOL → 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan | failed | 45s | 1 | main expired |
| 14:04:09 | 14 | 1 | sell 206 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan → SOL | failed | 53s | 1 | acquire 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan expired |
| 14:03:24 | 15 | 11 | sell 0.005 SOL → UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids | failed | 45s | 1 | main expired |
| 14:04:09 | 16 | 11 | sell 2120 UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids → SOL | failed | 52s | 1 | acquire UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids expired |
| 14:05:02 | 17 | 1 | sell 0.005 SOL → StargWr5r6r8gZSjmEKGZ1dmvKWkj79r2z1xqjFstar | filled | 7s | 1 |  |
| 14:05:09 | 18 | 1 | sell 169 StargWr5r6r8gZSjmEKGZ1dmvKWkj79r2z1xqjFstar → SOL | filled | 13s | 1 |  |
| 14:03:24 | 19 | 7 | sell 0.005 SOL → CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 | failed | 45s | 1 | main expired |
| 14:04:09 | 20 | 7 | sell 2020 CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 → SOL | failed | 52s | 1 | acquire CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 expired |
| 14:03:24 | 21 | 19 | sell 0.00126 RACEyWiM2ztEZcJx2AHXU2eWjhxU57x3vXn92b39dLD → SOL | failed | 9s | 0 | acquire RACEyWiM2ztEZcJx2AHXU2eWjhxU57x3vXn92b39dLD quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:05:04 | 22 | 12 | sell 289 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump → SOL | filled | 23s | 2 |  |
| 14:03:24 | 23 | 5 | sell 0.005 SOL → GoADAwux19tGxb3W4ykPzZz8p5JCSYaxBRpuW7s9pump | failed | 45s | 1 | main expired |
| 14:04:09 | 24 | 5 | sell 897 GoADAwux19tGxb3W4ykPzZz8p5JCSYaxBRpuW7s9pump → SOL | failed | 7s | 0 | acquire GoADAwux19tGxb3W4ykPzZz8p5JCSYaxBRpuW7s9pump quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:05:01 | 25 | 7 | sell 0.005 SOL → G5W6LwkLeoj6rZqBP1y3KT8k6Cz6rXGJmMNU3TArXtXw | filled | 7s | 1 |  |
| 14:05:08 | 26 | 7 | sell 1360 G5W6LwkLeoj6rZqBP1y3KT8k6Cz6rXGJmMNU3TArXtXw → SOL | filled | 7s | 1 |  |

### Rows without an order

7 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | acquire | 7 | SOL → OTC, SOL → JEANPHIL, SOL → fone, SOL → Jimothy, SOL → TSLAx, SOL → RACE, SOL → OCTO | no route found |

Scenario orders: 20 (10 main, 10 acquire). Cleanup placed 1 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 14:05:28 | 1 | STAR → SOL (native) | Executed | `0x7e0f75dc…` [🐞](https://debug.barn.cow.fi/order/0x7e0f75dcb314e0d5d3296bb30a66901c5bd680be6785ee951f5452aebb0fb92d) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| expired: never created on-chain (winner found, creation blockhash expired) | 14 | 70.0% |
| executed | 6 | 30.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 6s | 8s | 8s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 6 | 100.0% | 6 | 187,012 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 8 | 8 | 7 | 87.5% | 1 | 0 | 7 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: FailedToCreate | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 28 times
- Orders filtered for `unreceivable_buy_token_account`: 28 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 20 | 6 | 30.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → AUTON | 2 | 0 | 0.0% |
| wSOL → LUCKY99 | 2 | 0 | 0.0% |
| wSOL → SHARTCOIN | 2 | 0 | 0.0% |
| wSOL → X7 | 2 | 0 | 0.0% |
| wSOL → OCTO | 1 | 0 | 0.0% |
| wSOL → PAID | 1 | 0 | 0.0% |
| wSOL → baton | 1 | 0 | 0.0% |
| wSOL → CRCLx | 1 | 0 | 0.0% |
| wSOL → MCDx | 1 | 0 | 0.0% |
| wSOL → BOT | 1 | 0 | 0.0% |
| wSOL → STEALF | 1 | 1 | 100.0% |
| wSOL → STAR | 1 | 1 | 100.0% |
| STEALF → SOL (native) | 1 | 1 | 100.0% |
| STAR → SOL (native) | 1 | 1 | 100.0% |
| wSOL → WOJAK | 1 | 1 | 100.0% |
| WOJAK → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 4 | 2 | 50.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 4 | 2 | 50.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 4 | 2 | 50.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 2 | 0 | 0.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 2 | 0 | 0.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 1 | 0 | 0.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 1 | 0 | 0.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 1 | 0 | 0.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 13 |
| Creation tx rejected: blockhash not found | 1 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 14:03:26 | wSOL → AUTON | sell | Winner too late: creation blockhash expired | `0xa31ab0ea…` [🐞](https://debug.barn.cow.fi/order/0xa31ab0eafb57e95f60b446a27725d387d2d0063efcdf3b63b444c28af59786eb) |
| 14:03:26 | wSOL → LUCKY99 | sell | Winner too late: creation blockhash expired | `0xf0ca0fd9…` [🐞](https://debug.barn.cow.fi/order/0xf0ca0fd937522a39ec15ffad66f79c3939f18f2a80ee9663965bf59a2dfa8137) |
| 14:03:26 | wSOL → SHARTCOIN | sell | Winner too late: creation blockhash expired | `0xc0782f90…` [🐞](https://debug.barn.cow.fi/order/0xc0782f90575149d4977f4d8006b276102b7cfa01bea44dd3d4dd4f309a220fb8) |
| 14:03:26 | wSOL → X7 | sell | Winner too late: creation blockhash expired | `0xe8d56d7f…` [🐞](https://debug.barn.cow.fi/order/0xe8d56d7f5d2f2c075bb96b693130ad7018fc4b4efa794f5b3e81bbd5b64085ee) |
| 14:03:26 | wSOL → OCTO | sell | Winner too late: creation blockhash expired | `0x46caf5db…` [🐞](https://debug.barn.cow.fi/order/0x46caf5db208c8a8ea19805dafd153e0511324971e9cb0b7cf035a10ba34f95eb) |
| 14:03:31 | wSOL → PAID | sell | Winner too late: creation blockhash expired | `0xb8a403d5…` [🐞](https://debug.barn.cow.fi/order/0xb8a403d55948193f81d0e510b1160f0bd24825ac8b1485c1676a85a537b5b06f) |
| 14:03:31 | wSOL → baton | sell | Winner too late: creation blockhash expired | `0xd9c19301…` [🐞](https://debug.barn.cow.fi/order/0xd9c193012f3213e4b281a1d4afe92f1dfd129ca686391b32ec85a0031e379872) |
| 14:03:39 | wSOL → CRCLx | sell | Winner too late: creation blockhash expired | `0xa5f5d753…` [🐞](https://debug.barn.cow.fi/order/0xa5f5d7530d4e088644d11235865499c924ddec62ae085b72ad35fd536382832e) |
| 14:03:40 | wSOL → MCDx | sell | Winner too late: creation blockhash expired | `0x42572c49…` [🐞](https://debug.barn.cow.fi/order/0x42572c49eb2f52eddbd7febfefeb77c10bfafc5ef43fa26494a1012f7a68e9c5) |
| 14:04:16 | wSOL → AUTON | sell | Winner too late: creation blockhash expired | `0x1b7f0847…` [🐞](https://debug.barn.cow.fi/order/0x1b7f084771542404867a7efb0384e655563b2d73a51331286f93ba3aefd1c7c7) |
| 14:04:16 | wSOL → LUCKY99 | sell | Winner too late: creation blockhash expired | `0x6695df5b…` [🐞](https://debug.barn.cow.fi/order/0x6695df5b365fba61d698af5e86541f3bdf2c8812c9d608d1e3028fdc9238fd0a) |
| 14:04:17 | wSOL → SHARTCOIN | sell | Winner too late: creation blockhash expired | `0xd069f0ed…` [🐞](https://debug.barn.cow.fi/order/0xd069f0ed348d36137d039c3e60fdca6b312da40a03c79e0582d200b1a419a036) |
| 14:04:17 | wSOL → X7 | sell | Winner too late: creation blockhash expired | `0x344d7e14…` [🐞](https://debug.barn.cow.fi/order/0x344d7e143bd00db8fe58aeb13a0b9897a354932344e8904d701cb16a96931d11) |
| 14:04:21 | wSOL → BOT | sell | Creation tx rejected: blockhash not found | `0x3df81487…` [🐞](https://debug.barn.cow.fi/order/0x3df81487da9604f3102a44727f62b1aebb04e0afea8088ca9cba43d4a843b9b8) |
