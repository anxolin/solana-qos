# Solana QoS report: 2026-10-13-kaffee

Prod, orders created between `2026-10-13T13:30:00Z` and `2026-10-13T15:00:00Z`. Data fetched 2026-10-14T09:47:17+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 87 |
| Orders executed | **70** (80.5%) |
| Sponsored orders never created on-chain | 12 (13.8%) |
| Traders | 13 |
| Settlement txs | 76 |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 70 | 80.5% |
| expired: never created on-chain (winner found, creation blockhash expired) | 12 | 13.8% |
| open | 3 | 3.4% |
| cancelled | 2 | 2.3% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 5s | 9s | 65s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 28da…jxyN | 70 | 100.0% | 76 | 97,411 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 79 | 78 | 76 | 97.4% | 2 | 0 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: PriorityFeeTooHigh | 2 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 1080 times
- Orders filtered for `unreceivable_buy_token_account`: 20 times
- Orders filtered for `in_flight`: 6 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0x8edb72fc822ff168ce66d6c4ade61567503f644242a62de5b35fbf6ea5560349`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 68 | 55 | 80.9% |
| limit sell | 10 | 7 | 70.0% |
| limit buy | 7 | 6 | 85.7% |
| market buy | 2 | 2 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 9 | 6 | 66.7% |
| USDC → PYTH | 6 | 6 | 100.0% |
| $WOLF → TRUMP | 3 | 0 | 0.0% |
| USDC → SOL (native) | 3 | 3 | 100.0% |
| Fartcoin → SOL (native) | 3 | 2 | 66.7% |
| AAPLx → TROLL | 2 | 0 | 0.0% |
| wSOL → Fartcoin | 2 | 2 | 100.0% |
| ANTFUN → BNB | 2 | 0 | 0.0% |
| ANTFUN → wSOL | 2 | 1 | 50.0% |
| wSOL → USDY | 2 | 2 | 100.0% |
| SOLAMA → $BIAO | 1 | 1 | 100.0% |
| GIGA → wSOL | 1 | 1 | 100.0% |
| $BIAO → COINx | 1 | 1 | 100.0% |
| COINx → $michi | 1 | 1 | 100.0% |
| USDC → SPYx | 1 | 1 | 100.0% |
| $michi → BULLSHIT | 1 | 1 | 100.0% |
| wSOL → tremp | 1 | 1 | 100.0% |
| BULLSHIT → BITCOIN | 1 | 1 | 100.0% |
| tremp → GIGA | 1 | 1 | 100.0% |
| BITCOIN → PYUSD | 1 | 1 | 100.0% |
| USDC → Fartcoin | 1 | 1 | 100.0% |
| GIGA → tremp | 1 | 1 | 100.0% |
| PYUSD → Ebola | 1 | 1 | 100.0% |
| Fartcoin → AAPLx | 1 | 1 | 100.0% |
| Ebola → PENGU | 1 | 1 | 100.0% |
| SPYx → BULLSHIT | 1 | 1 | 100.0% |
| AAPLx → wSOL | 1 | 1 | 100.0% |
| PENGU → Buttcoin | 1 | 1 | 100.0% |
| BULLSHIT → TRUMP | 1 | 1 | 100.0% |
| Buttcoin → BENJI | 1 | 1 | 100.0% |
| wSOL → BENJI | 1 | 1 | 100.0% |
| BENJI → GIGA | 1 | 1 | 100.0% |
| wSOL → USDT | 1 | 1 | 100.0% |
| USDT → SOL (native) | 1 | 1 | 100.0% |
| USDT → TROLL | 1 | 1 | 100.0% |
| TROLL → ANTFUN | 1 | 1 | 100.0% |
| BENJI → SOL (native) | 1 | 1 | 100.0% |
| $WOLF → USDC | 1 | 1 | 100.0% |
| wSOL → $WAFFLES | 1 | 1 | 100.0% |
| USDC → AAPLx | 1 | 0 | 0.0% |
| wSOL → $RETIRE | 1 | 1 | 100.0% |
| USDC → $BIAO | 1 | 1 | 100.0% |
| USDC → dSOL | 1 | 1 | 100.0% |
| $RETIRE → $WAFFLES | 1 | 1 | 100.0% |
| $BIAO → VINE | 1 | 1 | 100.0% |
| $WAFFLES → $BEER | 1 | 1 | 100.0% |
| USDC → wSOL | 1 | 1 | 100.0% |
| VINE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → AAPLx | 1 | 0 | 0.0% |
| wSOL → LINK | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| USDY → wSOL | 1 | 0 | 0.0% |
| PYTH → wSOL | 1 | 1 | 100.0% |
| wSOL → TROLL | 1 | 1 | 100.0% |
| SPCXx → SOL (native) | 1 | 0 | 0.0% |
| wSOL → 67 | 1 | 1 | 100.0% |
| 67 → aura | 1 | 1 | 100.0% |
| wSOL → arc | 1 | 1 | 100.0% |
| USDY → USDC | 1 | 1 | 100.0% |
| ANUS → PYTH | 1 | 1 | 100.0% |
| aura → Old Slerf | 1 | 1 | 100.0% |
| Old Slerf → USDC | 1 | 1 | 100.0% |
| USDC → ANUS | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `8iGxnJtNAsdYHy3AinTVFHmxHNGS57viHTRQKkkrKm2` | 14 | 14 | 100.0% |
| `DcR4nz3PxZgKKtRoY3JoVdR18DCeyRiLKyY4mF9mU7RU` | 13 | 8 | 61.5% |
| `4B89hPSCqEp5xkKyhjuMg48phEJqzUt4vkdmmLJv5s1D` | 12 | 7 | 58.3% |
| `5k75h1UBLT5DhZ6RLneqj4oqrtgMXR5xhWEx5aqKk1ef` | 10 | 9 | 90.0% |
| `E4A6RAop8pey8DWSVDgpprqXfc2Nq5NGYFkkHGNw7pJ5` | 6 | 6 | 100.0% |
| `6XHdyWLffuNoVknzJWuNnyuxPbBz4dBvUU4debtqjXzX` | 6 | 4 | 66.7% |
| `EqJ48Gpj9zYcMkKZ3aNtQqer2p5HLF6p8V6X5Wcm8Aw3` | 5 | 5 | 100.0% |
| `B438phdpjdrUk4EiUQ4XNdTKg3137S1LaTTNqrF2kbkw` | 5 | 4 | 80.0% |
| `2nBj3ktc7xvZNnT8QxNQhL6roqm12XKk26d7YhsXNgoj` | 5 | 5 | 100.0% |
| `FkbshtwJN5Z1f5PS1fsUxCKtcghdndnpnoano9GxfaQQ` | 4 | 3 | 75.0% |
| `C9V2Zhet5tYoZQrHD3gWbtuhr9ffm6yk9hUDf4NAPwCT` | 3 | 3 | 100.0% |
| `8L7YTxNQqSRDXtA95MqqRmJtzVpzn1XYded9JnY2uMYf` | 2 | 2 | 100.0% |
| `5ShZJ19YoNtDtVhNoYFt5Jm7qPf9qbWUbnXgt2zGwdNs` | 2 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Recipient's buy token account missing, driver can't create it | 11 | 0 |
| Settlement too large for one transaction | 2 | 0 |
| Order signed a Token-2022 token's classic-Token account (frontend) | 0 | 2 |
| Still open: limit price not reached, then sell balance or approval too low | 0 | 1 |
| Still open: limit price not reached | 0 | 1 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 13:52:42 | AAPLx → TROLL | market sell | Settlement too large for one transaction | `0xd72fc26a…` [🐞](https://debug.cow.fi/order/0xd72fc26abdc874116db694f1675b45961ca889a67d9cae971d9973412ca4b444) |
| 13:55:00 | AAPLx → TROLL | market sell | Settlement too large for one transaction | `0x36a92ef8…` [🐞](https://debug.cow.fi/order/0x36a92ef8f35cd2b3472a94ba56ad85c2d3a50643aefccb5ad21f5964d98aeaec) |
| 14:01:55 | $WOLF → TRUMP | market sell | Recipient's buy token account missing, driver can't create it | `0xcc8c5413…` [🐞](https://debug.cow.fi/order/0xcc8c5413d184bb0b2f1c2084904a1393f5fec13b152fc64fb34602f6ca0f0045) |
| 14:03:59 | $WOLF → TRUMP | market sell | Recipient's buy token account missing, driver can't create it | `0x408606fa…` [🐞](https://debug.cow.fi/order/0x408606face9245c75494d0b995a755b875152183075e5bdf42b3ddb4a7aa16b1) |
| 14:05:06 | $WOLF → TRUMP | market sell | Recipient's buy token account missing, driver can't create it | `0x148e93e5…` [🐞](https://debug.cow.fi/order/0x148e93e58e77010e704136f01f9622102ef5fbc6ef167f0dc0d144d9bc71f22a) |
| 14:07:08 | wSOL → USDC | market sell | Recipient's buy token account missing, driver can't create it | `0x25198d47…` [🐞](https://debug.cow.fi/order/0x25198d477584515ed333669ea63d3683996818282e0c90c4f10409855744e784) |
| 14:09:32 | USDC → AAPLx | market sell | Recipient's buy token account missing, driver can't create it | `0x8435007a…` [🐞](https://debug.cow.fi/order/0x8435007a19d8c46f6a62ad12dff03325a9a833a7628df8972136f020e65b06c9) |
| 14:09:52 | ANTFUN → BNB | market sell | Recipient's buy token account missing, driver can't create it | `0x9bee8541…` [🐞](https://debug.cow.fi/order/0x9bee8541531022395f8dbf688a2e33a185d82c68abb0db4fa249801177da5be5) |
| 14:11:20 | ANTFUN → BNB | market sell | Recipient's buy token account missing, driver can't create it | `0x5536bdc2…` [🐞](https://debug.cow.fi/order/0x5536bdc2d36bc9d11f598046f753bbe7bdea77352c495f20d8a6a1102d5aa89f) |
| 14:12:51 | ANTFUN → wSOL | market sell | Recipient's buy token account missing, driver can't create it | `0x3c92e178…` [🐞](https://debug.cow.fi/order/0x3c92e17874a4b6224345e1ee6da6d7112fc6a5f38c5508e6e3fe21a5b680a4bd) |
| 14:14:46 | wSOL → AAPLx | limit sell | Order signed a Token-2022 token's classic-Token account (frontend) | `0xf1b3584c…` [🐞](https://debug.cow.fi/order/0xf1b3584c872d4718908134ffd491669366f191156cec0ac429b3a411e4317d3d) |
| 14:16:24 | USDY → wSOL | limit sell | Still open: limit price not reached, then sell balance or approval too low | `0xed7c3c27…` [🐞](https://debug.cow.fi/order/0xed7c3c27ffbd3c5c94df5141add8d39bb067c9af9b59ceabcd52dbaabb8601a2) |
| 14:27:36 | SPCXx → SOL (native) | limit sell | Order signed a Token-2022 token's classic-Token account (frontend) | `0xfef6e872…` [🐞](https://debug.cow.fi/order/0xfef6e872fbca0a247eeb06ff1f5c5306224ce42d7c199f6a9b4019c747460e2a) |
| 14:30:34 | Fartcoin → SOL (native) | limit buy | Still open: limit price not reached | `0xfb23a475…` [🐞](https://debug.cow.fi/order/0xfb23a47508f816cf2dac4090e8beaf5ff7bb14ae455ab387528dce144eacb0dd) |
| 14:45:33 | wSOL → USDC | market sell | Recipient's buy token account missing, driver can't create it | `0x766bfc8c…` [🐞](https://debug.cow.fi/order/0x766bfc8c9e853cb043e20cb72eba85154776d8a534ca9b66c8c8b78ac71682fc) |
| 14:48:40 | wSOL → USDC | market sell | Recipient's buy token account missing, driver can't create it | `0x4a25b2ef…` [🐞](https://debug.cow.fi/order/0x4a25b2ef7da2dbff7c038247d9d10e4565e6777f17efdf515055e590be6bf2a8) |
| 14:52:53 | USDC → ANUS | market sell | Recipient's buy token account missing, driver can't create it | `0x5bb24425…` [🐞](https://debug.cow.fi/order/0x5bb24425b503084a2a74d1b66ae9263fc8f59b051ea9fec1522ff735c1afc7a1) |
