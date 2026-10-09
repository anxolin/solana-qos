# Solana QoS report: 2026-10-09-14-15-retries__2026-10-09-11-30-token-universe__top250-no-liquidity

Barn, orders created between `2026-10-09T14:15:38.092Z` and `2026-10-09T14:18:27.983Z`. Data fetched 2026-10-09T14:18:06+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 22 |
| Orders executed | **6** (27.3%) |
| Sponsored orders never created on-chain | 16 (72.7%) |
| Traders | 9 |
| Settlement txs | 6 |

## Scenario

4 of 26 scenario rows completed. 0 retries, 3 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 14:15:38 | 1 | 12 | sell 103 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump → SOL | failed | 51s | 1 | acquire 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump expired |
| 14:15:38 | 2 | 28 | sell 36.2 Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump → SOL | failed | 52s | 1 | acquire Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump expired |
| 14:15:38 | 3 | 8 | sell 68.5 MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump → SOL | failed | 9s | 0 | acquire MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump error: 404 Not Found: NoLiquidity: no route found |
| 14:15:38 | 4 | 9 | sell 41.6 GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump → SOL | failed | 9s | 0 | acquire GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump error: 404 Not Found: NoLiquidity: no route found |
| 14:15:38 | 5 | 18 | sell 95.6 CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump → SOL | failed | 54s | 1 | acquire CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump expired |
| 14:15:38 | 6 | 21 | sell 163 Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump → SOL | failed | 9s | 0 | acquire Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:15:38 | 7 | 24 | sell 0.005 SOL → 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz | failed | 42s | 1 | main expired |
| 14:16:20 | 8 | 24 | sell 14500 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz → SOL | failed | 51s | 1 | acquire 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz expired |
| 14:15:47 | 9 | 9 | sell 0.00601 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | failed | 50s | 1 | acquire XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 expired |
| 14:16:29 | 10 | 12 | sell 0.0173 BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T → SOL | failed | 50s | 1 | acquire BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T expired |
| 14:16:32 | 11 | 18 | sell 0.00205 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 → SOL | failed | 50s | 1 | acquire XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 expired |
| 14:15:38 | 12 | 23 | sell 0.0013 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | failed | 9s | 0 | acquire XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:15:38 | 13 | 1 | sell 0.005 SOL → 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan | failed | 45s | 1 | main expired |
| 14:16:24 | 14 | 1 | sell 206 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan → SOL | failed | 50s | 1 | acquire 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan expired |
| 14:15:39 | 15 | 11 | sell 0.005 SOL → UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids | failed | 45s | 1 | main expired |
| 14:16:24 | 16 | 11 | sell 2120 UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids → SOL | failed | 50s | 1 | acquire UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids expired |
| 14:17:14 | 17 | 1 | sell 0.005 SOL → StargWr5r6r8gZSjmEKGZ1dmvKWkj79r2z1xqjFstar | filled | 7s | 1 |  |
| 14:17:21 | 18 | 1 | sell 169 StargWr5r6r8gZSjmEKGZ1dmvKWkj79r2z1xqjFstar → SOL | filled | 10s | 1 |  |
| 14:15:39 | 19 | 7 | sell 0.005 SOL → CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 | failed | 45s | 1 | main expired |
| 14:16:24 | 20 | 7 | sell 2020 CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 → SOL | failed | 7s | 0 | acquire CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 error: 404 Not Found: NoLiquidity: no route found |
| 14:15:39 | 21 | 19 | sell 0.00126 RACEyWiM2ztEZcJx2AHXU2eWjhxU57x3vXn92b39dLD → SOL | failed | 9s | 0 | acquire RACEyWiM2ztEZcJx2AHXU2eWjhxU57x3vXn92b39dLD quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:17:19 | 22 | 12 | sell 289 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump → SOL | filled | 20s | 2 |  |
| 14:15:39 | 23 | 5 | sell 0.005 SOL → GoADAwux19tGxb3W4ykPzZz8p5JCSYaxBRpuW7s9pump | failed | 45s | 1 | main expired |
| 14:16:24 | 24 | 5 | sell 897 GoADAwux19tGxb3W4ykPzZz8p5JCSYaxBRpuW7s9pump → SOL | failed | 49s | 1 | acquire GoADAwux19tGxb3W4ykPzZz8p5JCSYaxBRpuW7s9pump expired |
| 14:16:31 | 25 | 7 | sell 0.005 SOL → G5W6LwkLeoj6rZqBP1y3KT8k6Cz6rXGJmMNU3TArXtXw | failed | 41s | 1 | main expired |
| 14:17:12 | 26 | 7 | sell 1360 G5W6LwkLeoj6rZqBP1y3KT8k6Cz6rXGJmMNU3TArXtXw → SOL | filled | 23s | 2 |  |

### Rows without an order

6 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | acquire | 6 | SOL → OTC, SOL → JEANPHIL, SOL → Jimothy, SOL → TSLAx, SOL → X7, SOL → RACE | no route found |

Scenario orders: 22 (10 main, 12 acquire). Cleanup placed 1 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 14:17:40 | 1 | STAR → SOL (native) | Executed | `0x14338ce2…` [🐞](https://debug.barn.cow.fi/order/0x14338ce2bdac399200fce9d7d7eaad7bdfa43f0060294bd5038e8017a1aec700) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| expired: never created on-chain (winner found, creation blockhash expired) | 16 | 72.7% |
| executed | 6 | 27.3% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 5s | 6s | 7s | 7s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 6 | 100.0% | 6 | 130,571 | 5s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 9 | 8 | 7 | 87.5% | 1 | 0 | 6 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: FailedToCreate | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 27 times
- Orders filtered for `unreceivable_buy_token_account`: 27 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 22 | 6 | 27.3% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → AUTON | 2 | 0 | 0.0% |
| wSOL → SHARTCOIN | 2 | 0 | 0.0% |
| wSOL → LUCKY99 | 2 | 0 | 0.0% |
| wSOL → OCTO | 2 | 0 | 0.0% |
| wSOL → STEALF | 2 | 1 | 50.0% |
| wSOL → X7 | 1 | 0 | 0.0% |
| wSOL → PAID | 1 | 0 | 0.0% |
| wSOL → baton | 1 | 0 | 0.0% |
| wSOL → fone | 1 | 0 | 0.0% |
| wSOL → CRCLx | 1 | 0 | 0.0% |
| wSOL → BOT | 1 | 0 | 0.0% |
| wSOL → MCDx | 1 | 0 | 0.0% |
| wSOL → STAR | 1 | 1 | 100.0% |
| STAR → SOL (native) | 1 | 1 | 100.0% |
| wSOL → WOJAK | 1 | 1 | 100.0% |
| STEALF → SOL (native) | 1 | 1 | 100.0% |
| WOJAK → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 4 | 2 | 50.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 4 | 2 | 50.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 4 | 2 | 50.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 2 | 0 | 0.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 2 | 0 | 0.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 2 | 0 | 0.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 2 | 0 | 0.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 1 | 0 | 0.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 15 |
| Creation tx rejected: blockhash not found | 1 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 14:15:40 | wSOL → AUTON | sell | Winner too late: creation blockhash expired | `0xe64870d7…` [🐞](https://debug.barn.cow.fi/order/0xe64870d7f4932f7dd59915373d0e6e61cb0c59933e369746378a73407d13ddeb) |
| 14:15:41 | wSOL → SHARTCOIN | sell | Winner too late: creation blockhash expired | `0xec345409…` [🐞](https://debug.barn.cow.fi/order/0xec345409d75cebd320d9c286c6e0ff3d897a3b10745f127ef750c03818d9218e) |
| 14:15:41 | wSOL → LUCKY99 | sell | Winner too late: creation blockhash expired | `0x2f6afa51…` [🐞](https://debug.barn.cow.fi/order/0x2f6afa51a0af36f79ba6773554b99636b7fd932a65b35b56432ffa8d43b1e7d4) |
| 14:15:41 | wSOL → X7 | sell | Winner too late: creation blockhash expired | `0xff2d60ce…` [🐞](https://debug.barn.cow.fi/order/0xff2d60ce18e095200e427b7dc8f7704ec76ba5eacb6effc2f64d6d94c4bad31d) |
| 14:15:41 | wSOL → OCTO | sell | Winner too late: creation blockhash expired | `0xf5cb5361…` [🐞](https://debug.barn.cow.fi/order/0xf5cb5361965acd178aa4b73685e46e68962d0d26325ff72bfada35aa94d7b67d) |
| 14:15:46 | wSOL → PAID | sell | Winner too late: creation blockhash expired | `0xd48e85a4…` [🐞](https://debug.barn.cow.fi/order/0xd48e85a43609ea6e223195cdac753ef34ea02efd76ea37c579b0f387d13f95a8) |
| 14:15:46 | wSOL → baton | sell | Winner too late: creation blockhash expired | `0xdbd58076…` [🐞](https://debug.barn.cow.fi/order/0xdbd580760d679b6cdaf5f7415e13f7f114f635cbc02ebc263ebacb3ee6cdec4d) |
| 14:15:49 | wSOL → fone | sell | Winner too late: creation blockhash expired | `0x1e3cb22f…` [🐞](https://debug.barn.cow.fi/order/0x1e3cb22fe1a2be300f4de0157d06228f5c49852a71cfdfc6211124a0299d116e) |
| 14:15:54 | wSOL → CRCLx | sell | Winner too late: creation blockhash expired | `0x2bf46002…` [🐞](https://debug.barn.cow.fi/order/0x2bf46002e3e99e9e8a32d166bbf9146f8814f5d51056cbeb8a69c55d09f8b131) |
| 14:16:27 | wSOL → AUTON | sell | Winner too late: creation blockhash expired | `0x1cf6bb53…` [🐞](https://debug.barn.cow.fi/order/0x1cf6bb53ed231a7d73c2ef969e1a48bc4dd3164d8f30f10b606a048118e50ce2) |
| 14:16:30 | wSOL → SHARTCOIN | sell | Winner too late: creation blockhash expired | `0x220e9655…` [🐞](https://debug.barn.cow.fi/order/0x220e9655eaeae69a778fc5bc6cdbdb9e2a6bf74464e18387a5d13e4bd8088eaa) |
| 14:16:31 | wSOL → LUCKY99 | sell | Winner too late: creation blockhash expired | `0xa9586d5a…` [🐞](https://debug.barn.cow.fi/order/0xa9586d5af2d522874caf1492a34605884ad81ef0e63e0a4a3bb9f7a8ae3882fa) |
| 14:16:32 | wSOL → STEALF | sell | Winner too late: creation blockhash expired | `0x7eea0ec9…` [🐞](https://debug.barn.cow.fi/order/0x7eea0ec93fc35f7425134d083f77b2c2bfdc058c6350be7f9f492984cd8abaae) |
| 14:16:32 | wSOL → OCTO | sell | Winner too late: creation blockhash expired | `0x4b418028…` [🐞](https://debug.barn.cow.fi/order/0x4b418028fbccd99a7de3d440f4fc4a697b546a1c256cdb51fa6b2bdd54bfc299) |
| 14:16:36 | wSOL → BOT | sell | Winner too late: creation blockhash expired | `0xe74c61d5…` [🐞](https://debug.barn.cow.fi/order/0xe74c61d50822aedbd95c9623e81c59d9766a92c65aad4467ba243ecf4b0745b2) |
| 14:16:38 | wSOL → MCDx | sell | Creation tx rejected: blockhash not found | `0x09642b64…` [🐞](https://debug.barn.cow.fi/order/0x09642b64e54a0179cc8fd662b52b9f53a69eb202d74b5fec2c91b69a52fda647) |
