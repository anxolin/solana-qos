# Solana QoS report: 2026-10-02-kaffee

Barn, orders created between `2026-10-02T12:00:00Z` and `2026-10-02T14:30:00Z`. Data fetched 2026-10-02T14:33:02+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 199 |
| Orders executed | **130** (65.3%) |
| Sponsored orders never created on-chain | 61 (30.7%) |
| Traders | 25 |
| Settlement txs | 130 |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 130 | 65.3% |
| expired: never created on-chain (no settlement before blockhash expiry) | 41 | 20.6% |
| expired: never created on-chain (winner found, creation blockhash expired) | 20 | 10.1% |
| cancelled | 3 | 1.5% |
| expired | 3 | 1.5% |
| open | 2 | 1.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 11s | 19s | 34s | 322s |

## Before / after: Jupiter solver bids in every auction

Before, the jupiter-solve driver sat out 4 of every 5 auctions (stride 5), so an order with no other bidder often waited past its creation blockhash. Backend changed the config; the new driver pod started at 13:47:16 UTC and never sat out an auction.

Baseline starts after the funder top-up, so the outage doesn't distort it.

| Metric | Before (13:25–13:47) | After (13:47–14:02) |
|---|---|---|
| Orders placed | 85 | 61 |
| Executed | 56 | 53 |
| Fill rate | 65.9% | 86.9% |
| Median time to execution | 11s | 10s |
| p90 time to execution | 36s | 21s |
| Never created on-chain | 27 | 8 |
| No settlement before creation blockhash expired | 2 | 0 |
| Jupiter rate limited, no other solver bid | 12 | 8 |
| Winner too late: creation blockhash expired | 10 | 0 |
| jupiter-solve wins (logs) | 77 | 65 |
| jupiter-solve settlements landed (logs) | 36 | 52 |
| jupiter-solve rejected before submission (logs) | 31 | 9 |
| Winners skipped, creation blockhash expired (logs) | 11 | 1 |

## Jupiter rate limiting

729 of 3334 Jupiter quote attempts (21.9%) were rejected with `rate limited`. 22 orders never executed: Jupiter's quotes for them were rate limited, it never found a solution, and no other solver bid.

| Window | Quote attempts | Rate limited | Share |
|---|---|---|---|
| Before 13:47 | 1039 | 155 | 14.9% |
| After 13:47 | 2295 | 574 | 25.0% |

Orders using the most Jupiter quote attempts:

| Order | In this report | Attempts | Rate limited | Solved |
|---|---|---|---|---|
| `0x15e4f09c` | no (older order) | 685 | 18 | 0 |
| `0x9c4ff064` | no (older order) | 685 | 9 | 0 |
| `0xf85b7136` | no (older order) | 674 | 488 | 186 |
| `0xc3aed111` | yes | 470 | 57 | 0 |
| `0x57133bad` | yes | 462 | 2 | 0 |
| `0xf6078d48` | yes | 55 | 54 | 1 |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 92 | 70.8% | 92 | 86,506 | 11s |
| fractal | 30 | 23.1% | 30 | 92,794 | 10s |
| rosato | 8 | 6.2% | 8 | 113,418 | 11s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 346 | 337 | 92 | 27.3% | 226 | 10 | 3 | 1 |
| rosato | 59 | 52 | 8 | 15.4% | 43 | 0 | 53 | 268 |
| fractal | 53 | 39 | 30 | 76.9% | 5 | 0 | 7 | 0 |
| zurui | 0 | 0 | 0 | – | 0 | 0 | 1499 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 1498 | 1 |
| grafiks | 0 | 0 | 0 | – | 0 | 0 | 280 | 1 |
| helixbox | 0 | 0 | 0 | – | 0 | 0 | 2 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 211 |
| rosato: SimulationFailed | 43 |
| jupiter-solve: FailedToCreate | 15 |
| fractal: SimulationFailed | 5 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 20
- Orders filtered for `in_flight`: 361 times
- Orders filtered for `unreceivable_buy_token_account`: 47 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 192 | 128 | 66.7% |
| buy | 7 | 2 | 28.6% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 29 | 18 | 62.1% |
| USDC → wSOL | 8 | 8 | 100.0% |
| USDC → SOL (native) | 7 | 6 | 85.7% |
| wSOL → $BEER | 7 | 3 | 42.9% |
| wSOL → JUP | 5 | 1 | 20.0% |
| USDC → ANUS | 5 | 3 | 60.0% |
| wSOL → MELANIA | 5 | 4 | 80.0% |
| $BEER → SPX | 4 | 0 | 0.0% |
| USDC → $BEER | 4 | 2 | 50.0% |
| ANUS → USDC | 4 | 4 | 100.0% |
| USDC → arab | 4 | 1 | 25.0% |
| $BEER → USDC | 4 | 1 | 25.0% |
| $BEER → SOL (native) | 3 | 2 | 66.7% |
| USDC → TRUMP | 3 | 2 | 66.7% |
| wSOL → ANUS | 3 | 3 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| wSOL → PYTH | 2 | 0 | 0.0% |
| wSOL → duk | 2 | 2 | 100.0% |
| wSOL → $daumen | 2 | 1 | 50.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| $BEER → Pepe | 2 | 1 | 50.0% |
| $WIF → USDC | 2 | 1 | 50.0% |
| duk → 9niF…Z7bj | 2 | 1 | 50.0% |
| PYTH → EURC | 2 | 0 | 0.0% |
| xBTC → ETH | 2 | 1 | 50.0% |
| MELANIA → USDC | 2 | 1 | 50.0% |
| $daumen → $BEER | 2 | 1 | 50.0% |
| ANUS → $BEER | 2 | 1 | 50.0% |
| aura → USDC | 2 | 1 | 50.0% |
| USDC → 9pan…XejP | 1 | 0 | 0.0% |
| PURPE → SOL (native) | 1 | 1 | 100.0% |
| USDT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| duk → SOL (native) | 1 | 0 | 0.0% |
| USDC → JUP | 1 | 0 | 0.0% |
| wSOL → BAT | 1 | 0 | 0.0% |
| wSOL → KMNO | 1 | 0 | 0.0% |
| wSOL → GME | 1 | 0 | 0.0% |
| TRUMP → USDC | 1 | 1 | 100.0% |
| JUP → USDC | 1 | 1 | 100.0% |
| USDC → GOME | 1 | 0 | 0.0% |
| $WIF → JUP | 1 | 1 | 100.0% |
| JUP → wSOL | 1 | 0 | 0.0% |
| USDC → $WIF | 1 | 1 | 100.0% |
| JUP → $WIF | 1 | 1 | 100.0% |
| wSOL → Pepe | 1 | 1 | 100.0% |
| $WIF → PYTH | 1 | 1 | 100.0% |
| $daumen → USDC | 1 | 0 | 0.0% |
| $daumen → wSOL | 1 | 1 | 100.0% |
| arab → $WIF | 1 | 1 | 100.0% |
| USDT → $GARY | 1 | 1 | 100.0% |
| USDC → BAT | 1 | 0 | 0.0% |
| USDC → $daumen | 1 | 0 | 0.0% |
| wSOL → $TOAD | 1 | 0 | 0.0% |
| USDC → xBTC | 1 | 1 | 100.0% |
| $GARY → USDC | 1 | 1 | 100.0% |
| USDC → ATLAS | 1 | 1 | 100.0% |
| 9niF…Z7bj → BOME | 1 | 1 | 100.0% |
| BOME → 9niF…Z7bj | 1 | 1 | 100.0% |
| wSOL → UNI | 1 | 0 | 0.0% |
| 9niF…Z7bj → $WOLF | 1 | 0 | 0.0% |
| ATLAS → USDC | 1 | 0 | 0.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| USDC → MELANIA | 1 | 0 | 0.0% |
| 9niF…Z7bj → wSOL | 1 | 0 | 0.0% |
| ETH → WBTC | 1 | 1 | 100.0% |
| WBTC → $daumen | 1 | 1 | 100.0% |
| USDC → SOLAMA | 1 | 1 | 100.0% |
| 9niF…Z7bj → $GARY | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| $GARY → BIRDDOG | 1 | 0 | 0.0% |
| SOLAMA → TRUMP | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| $WIF → BILLY | 1 | 1 | 100.0% |
| $GARY → Cheese | 1 | 1 | 100.0% |
| USDC → JitoSOL | 1 | 1 | 100.0% |
| TRUMP → UPDOG | 1 | 1 | 100.0% |
| BOME → $BOZO | 1 | 1 | 100.0% |
| JitoSOL → USDC | 1 | 1 | 100.0% |
| Cheese → INBRED | 1 | 1 | 100.0% |
| $BOZO → MELON | 1 | 1 | 100.0% |
| MELANIA → JitoSOL | 1 | 1 | 100.0% |
| UPDOG → MELON | 1 | 1 | 100.0% |
| $BEER → wSOL | 1 | 1 | 100.0% |
| wSOL → tremp | 1 | 1 | 100.0% |
| INBRED → SPOODY | 1 | 1 | 100.0% |
| USDC → aura | 1 | 1 | 100.0% |
| JitoSOL → wSOL | 1 | 1 | 100.0% |
| MELON → NoHat | 1 | 1 | 100.0% |
| USDC → BAKED | 1 | 1 | 100.0% |
| SPOODY → BILLY | 1 | 1 | 100.0% |
| $BEER → TRUMP | 1 | 1 | 100.0% |
| NoHat → COST | 1 | 1 | 100.0% |
| tremp → GIGA | 1 | 1 | 100.0% |
| BILLY → $WIF | 1 | 1 | 100.0% |
| $WIF → BAT | 1 | 1 | 100.0% |
| COST → wSOL | 1 | 1 | 100.0% |
| TRUMP → SOL (native) | 1 | 1 | 100.0% |
| USDC → $PELF | 1 | 1 | 100.0% |
| BAT → COK | 1 | 1 | 100.0% |
| COK → EPIK | 1 | 1 | 100.0% |
| MELON → USDC | 1 | 1 | 100.0% |
| EPIK → HAWK | 1 | 1 | 100.0% |
| JupSOL → wSOL | 1 | 1 | 100.0% |
| HAWK → USDC | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `EqJ48Gpj9zYcMkKZ3aNtQqer2p5HLF6p8V6X5Wcm8Aw3` | 31 | 19 | 61.3% |
| `BRLfqAK6RJnpCEoF4TQiJCfDF5hFEAgAfrswGMbi9Kk2` | 19 | 16 | 84.2% |
| `8iGxnJtNAsdYHy3AinTVFHmxHNGS57viHTRQKkkrKm2` | 14 | 11 | 78.6% |
| `MC8NqJzrV55q9SXLDKdTXg37hBAEkLyugKuFHbUazwN` | 14 | 10 | 71.4% |
| `EfkTBMv4GvuyygyfME6o1FUhYD17cZSDvmWXwbuenRm3` | 13 | 8 | 61.5% |
| `5SdZkehpsSMsYCXkZJz1hzsp9uJvCFWonry3fDy6uppL` | 12 | 7 | 58.3% |
| `GSyH4nY8PQz2Ud6jzbBroLp6FNyhJdayBJQn54S1CtkP` | 12 | 9 | 75.0% |
| `3J92Qxbj1eqYwhS41tmkumc2rXYQy7WtEy1F8RukxkGQ` | 11 | 4 | 36.4% |
| `CsfrDJd4qSkp9HhCdFzRFuLYB5tHDy4jdYY8pTt6XSwm` | 9 | 5 | 55.6% |
| `AWPtgJMKBuLn2Pt3tCShoYQsN3ZKQ5qYoZLa2yd8QBdv` | 9 | 7 | 77.8% |
| `5k75h1UBLT5DhZ6RLneqj4oqrtgMXR5xhWEx5aqKk1ef` | 8 | 8 | 100.0% |
| `4B89hPSCqEp5xkKyhjuMg48phEJqzUt4vkdmmLJv5s1D` | 7 | 3 | 42.9% |
| `2c1E71jPXqgM8nJXiQpCEwGhXSVA8GTN4a1qTS1ibyLa` | 7 | 5 | 71.4% |
| `54o2XBzBTkP7tmQSLu3Um9oDvLdNVrbMyQxqiYVKALLN` | 7 | 3 | 42.9% |
| `E4A6RAop8pey8DWSVDgpprqXfc2Nq5NGYFkkHGNw7pJ5` | 6 | 2 | 33.3% |
| `2vW7qRhQCubfPt9EytLFWTyzKyakrhrdbCA9HaFEFTHo` | 4 | 3 | 75.0% |
| `5ShZJ19YoNtDtVhNoYFt5Jm7qPf9qbWUbnXgt2zGwdNs` | 4 | 4 | 100.0% |
| `DcR4nz3PxZgKKtRoY3JoVdR18DCeyRiLKyY4mF9mU7RU` | 3 | 1 | 33.3% |
| `5CbSkyzNq3zzTDVN9MTz1963HgDPttCpkngEfVmLSP6U` | 2 | 1 | 50.0% |
| `4zUgB9U2YLqrHJcxMdL9GUfAgYFtw3rKP4gHVrHPUHf5` | 2 | 0 | 0.0% |
| `3PsWm42wGcaZGtM6zDMXn3gTXyVA6ysh5Lu8zzBhhNA1` | 1 | 1 | 100.0% |
| `6gG7b7DYQ6JV7UWs6ksG599ELuVJobNawWDY1QFFrsvf` | 1 | 1 | 100.0% |
| `Dc8sNuGJ6hNy8V2eVbqJ5SV9NujJ3DXUCstuAaCZJJ25` | 1 | 0 | 0.0% |
| `2B1KMj5SDeoysb4uAyyD5RB8TykQpARTRC3zXcirNKQN` | 1 | 1 | 100.0% |
| `4dMcFzGtx5ZUqhH4joAHAn399uE19Xj15FMjdsxe3WgD` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Jupiter rate limited, no other solver bid | 22 |
| Funder out of SOL | 20 |
| Winner too late: creation blockhash expired | 12 |
| Creation tx rejected: blockhash not found | 4 |
| Cancelled | 3 |
| Expired without a fill | 3 |
| No settlement before creation blockhash expired | 3 |
| Still open | 2 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 12:04:52 | $BEER → SPX | sell | Cancelled | [0xcd216bb1](https://debug.barn.cow.fi/order/0xcd216bb1efa3cd7425c97e4bb17a45ba0e1a651ae7ba5d5880327562df95acb7) |
| 12:05:18 | $BEER → SPX | sell | Expired without a fill | [0xe73157d2](https://debug.barn.cow.fi/order/0xe73157d2208d39c91910bdcb124340b0d68235d8921531e4b33ba738b70dd19d) |
| 12:07:15 | $BEER → SPX | sell | Expired without a fill | [0x41996c02](https://debug.barn.cow.fi/order/0x41996c02971f63e2d2b8d75384428ffece14162f9a1d24c5cd36c43326c3bb63) |
| 12:09:38 | USDC → 9pan…XejP | sell | Expired without a fill | [0x434d4fb8](https://debug.barn.cow.fi/order/0x434d4fb88037e457532ff784ee3009291152f762a28c477f360ef26a91f4179a) |
| 12:10:44 | $BEER → SPX | sell | Cancelled | [0xe77f9ef4](https://debug.barn.cow.fi/order/0xe77f9ef4e9d153fdf81df47cbb9c58a3e1ea0bcc256c6ed3e60123d949bed4d8) |
| 12:21:08 | wSOL → USDC | sell | Winner too late: creation blockhash expired | [0x9f51317f](https://debug.barn.cow.fi/order/0x9f51317f91445c8c40fbd561ea62ab46c6d8050bb36dba48b7be6e7a8f6b3183) |
| 12:46:53 | USDC → SOL (native) | sell | Winner too late: creation blockhash expired | [0x64955a37](https://debug.barn.cow.fi/order/0x64955a375e018cf787f456a66679329c80a1b205a08323544f770bad0b478ae0) |
| 13:06:54 | wSOL → USDC | sell | No settlement before creation blockhash expired | [0xf84ec208](https://debug.barn.cow.fi/order/0xf84ec208ffcc766946dfaf390a4dd4b21ca1515f53b800a0683047b1d6950dfd) |
| 13:06:58 | wSOL → JUP | sell | Jupiter rate limited, no other solver bid | [0x44983eca](https://debug.barn.cow.fi/order/0x44983ecacd941eacf379bc82a854ff1baf4e3e7d5d2fb76104c26edfac15f671) |
| 13:09:26 | USDC → ANUS | sell | Jupiter rate limited, no other solver bid | [0x3fd730ce](https://debug.barn.cow.fi/order/0x3fd730ce4eb825b829c8a75caeaa0b2565642872485730a1a75ea7c3b965ace7) |
| 13:09:34 | USDC → $BEER | sell | Creation tx rejected: blockhash not found | [0x78b0cce1](https://debug.barn.cow.fi/order/0x78b0cce17eaeaa8c1023a64110900871eb675f27ddc57c97fca5b69e90163b31) |
| 13:09:53 | USDC → $BEER | sell | Funder out of SOL | [0x7b7c2d5a](https://debug.barn.cow.fi/order/0x7b7c2d5a704fb4e11e981416771e452e1db719f11b8ac5f6eb31703f956e4e9a) |
| 13:10:23 | wSOL → PYTH | sell | Funder out of SOL | [0x936ef044](https://debug.barn.cow.fi/order/0x936ef04481774765785d86e426fe20cefb9ed57e2b5ff00b6b83e06e1c457fe2) |
| 13:11:37 | duk → SOL (native) | sell | Funder out of SOL | [0x512bc543](https://debug.barn.cow.fi/order/0x512bc5434d89d6064a90e034c6a5be645ab69c44fff568bdef6cec460da01a0c) |
| 13:11:56 | wSOL → JUP | sell | Funder out of SOL | [0xc3e1a235](https://debug.barn.cow.fi/order/0xc3e1a235b9051c4686d327133dea39ce618a137ae1e1adea04f91e0d4701fcf4) |
| 13:11:56 | wSOL → USDC | sell | Funder out of SOL | [0x3e166e56](https://debug.barn.cow.fi/order/0x3e166e5695a67e7c016a8ecf268c9f5cfbbc4e93bf9631322c895bb6fdecf0c2) |
| 13:13:02 | USDC → JUP | sell | Funder out of SOL | [0x789de6a6](https://debug.barn.cow.fi/order/0x789de6a60315fc654f4d3306c7c635b357c530a2723cd3d0458d198a951b9806) |
| 13:15:03 | USDC → ANUS | sell | Cancelled | [0xb03936e2](https://debug.barn.cow.fi/order/0xb03936e2f943e2d2c96229e25300329a3f3050c5f073074692efdb0ebcd90c9d) |
| 13:15:07 | wSOL → USDC | buy | Funder out of SOL | [0xc3473c77](https://debug.barn.cow.fi/order/0xc3473c77373e67375b4fc6f3c8b16bc02be3063ff0f1cd354ebb48ef8cdb3546) |
| 13:15:22 | wSOL → BAT | sell | Funder out of SOL | [0xe806e4ea](https://debug.barn.cow.fi/order/0xe806e4eab0d91be719bb227db3f20f253bcd6280194cbf8a671899bf7a98aa65) |
| 13:15:51 | wSOL → JUP | sell | Funder out of SOL | [0x65dcc90d](https://debug.barn.cow.fi/order/0x65dcc90d66c3fb7de927cefaca9281074f6ecb7954d34cbbbbb06bd57675b974) |
| 13:16:22 | USDC → TRUMP | sell | Funder out of SOL | [0xfab21a5b](https://debug.barn.cow.fi/order/0xfab21a5bbba4a4c1e0abe86327d0cd7d88607bcb016c336323a3e001a6d967ed) |
| 13:16:54 | wSOL → USDC | sell | Funder out of SOL | [0x8183ef7a](https://debug.barn.cow.fi/order/0x8183ef7a16000772c44c42af50c3f62f5c4a03223f8dc292cc4f7d1c6f61a3a5) |
| 13:17:20 | wSOL → USDC | sell | Funder out of SOL | [0x80bf628b](https://debug.barn.cow.fi/order/0x80bf628bcf9f04a3d7f296cf57c9a360e57e851a8942ec2aef6b42884834addc) |
| 13:17:25 | $BEER → SOL (native) | sell | Funder out of SOL | [0xf7cbdc7a](https://debug.barn.cow.fi/order/0xf7cbdc7abef34eae27c58fcef4025a14ea655d3c772618dd2c8c7fa9561ed16b) |
| 13:19:07 | wSOL → USDC | sell | Funder out of SOL | [0xff443cb4](https://debug.barn.cow.fi/order/0xff443cb4dc62ab931e8a1dcb4e6ca428441e8af5861604d97c95202445817e7e) |
| 13:20:06 | wSOL → KMNO | sell | Funder out of SOL | [0xd48da5ff](https://debug.barn.cow.fi/order/0xd48da5ffcf768b816d97effa8de7da26232d02acb74dffcc345d5fde615dfa33) |
| 13:21:49 | wSOL → JUP | sell | Funder out of SOL | [0xd4385101](https://debug.barn.cow.fi/order/0xd4385101a6d67774cb36dd6465245efc5117b75db1663ebf2fca45c637ba570d) |
| 13:23:08 | wSOL → USDC | sell | Funder out of SOL | [0x0e1e8887](https://debug.barn.cow.fi/order/0x0e1e888790c8fa9a75f7dce78d46d999cb48591b1b0a9e999bd8023f8082aed0) |
| 13:23:49 | wSOL → USDC | sell | Funder out of SOL | [0x79751ddc](https://debug.barn.cow.fi/order/0x79751ddcaa9b54aa2b16dcece2c86f85f81340473894df529828d66aaa3ca3fd) |
| 13:24:55 | wSOL → USDC | sell | Funder out of SOL | [0x33f586df](https://debug.barn.cow.fi/order/0x33f586df184387a4dc0c02a91bf59a9490b71f33cb8e9f86dd711b46ec4b9dbd) |
| 13:25:09 | wSOL → $BEER | sell | Funder out of SOL | [0x85796cc9](https://debug.barn.cow.fi/order/0x85796cc925837673c650fac8961701395b8c190481e1e1e9dab0cb77fdfdb40f) |
| 13:26:52 | wSOL → PYTH | sell | Jupiter rate limited, no other solver bid | [0x1e6b635e](https://debug.barn.cow.fi/order/0x1e6b635ec81dda02e031e84cf630409bb71e52aa46d805815f7083d16ff1fba5) |
| 13:27:23 | wSOL → GME | sell | Winner too late: creation blockhash expired | [0x36fe0f6b](https://debug.barn.cow.fi/order/0x36fe0f6b5bf26d69b49452a9e4d62c6739684824279bf047b1919de995ef3f9a) |
| 13:28:52 | wSOL → $daumen | sell | Winner too late: creation blockhash expired | [0x5c84e713](https://debug.barn.cow.fi/order/0x5c84e71383d3f410e9ae66466dcdc336bed50ac7325d3b8e22b6264deccab277) |
| 13:30:04 | USDC → GOME | sell | Jupiter rate limited, no other solver bid | [0xe73b769c](https://debug.barn.cow.fi/order/0xe73b769ce9127ddf89a77e49abb37db95c5c2522a0305437deebd1c08008c953) |
| 13:31:09 | USDC → arab | sell | No settlement before creation blockhash expired | [0x3ee0eb92](https://debug.barn.cow.fi/order/0x3ee0eb92ec8ef17a1924225101e078e2e9682a81739f427a4533108d567c675c) |
| 13:31:36 | JUP → wSOL | sell | Creation tx rejected: blockhash not found | [0x33217520](https://debug.barn.cow.fi/order/0x33217520a312bcded5fc98934394031385fa989500c52f3b9026109594e7f0b8) |
| 13:32:14 | USDC → arab | sell | No settlement before creation blockhash expired | [0x56e0bd27](https://debug.barn.cow.fi/order/0x56e0bd27bbd4677c7b855455ef4898ea67a70b94e5bc839bbda1cd06e1b97801) |
| 13:33:17 | $BEER → USDC | sell | Jupiter rate limited, no other solver bid | [0xd4c60150](https://debug.barn.cow.fi/order/0xd4c6015047eca60901d6c4af27f9d6e1c8d68e890b7ba8afe1f720b8baf4fe6f) |
| 13:33:43 | $BEER → USDC | sell | Winner too late: creation blockhash expired | [0x771c9662](https://debug.barn.cow.fi/order/0x771c9662ef533c32daa78435f9627a2e8f5e725b7e40f2404b7a6459d376715b) |
| 13:33:44 | USDC → arab | sell | Winner too late: creation blockhash expired | [0x82826e55](https://debug.barn.cow.fi/order/0x82826e55e43a91e8efb2099777d07531ff379069d176a366965b5d03ddf3b942) |
| 13:34:03 | wSOL → $BEER | sell | Jupiter rate limited, no other solver bid | [0xba1bb685](https://debug.barn.cow.fi/order/0xba1bb6852738ff31b6ae4282434f743a35492cfc556a83f17419ad189c88a55b) |
| 13:34:40 | $daumen → USDC | buy | Jupiter rate limited, no other solver bid | [0x468a7457](https://debug.barn.cow.fi/order/0x468a7457709a0187252684b2a2c9f2295d58d7e036a367f82a0487ead8b40489) |
| 13:35:48 | wSOL → MELANIA | sell | Creation tx rejected: blockhash not found | [0x664fd305](https://debug.barn.cow.fi/order/0x664fd305462717c1519a9f8f9c5ab41cf38312478f6198276b6beb35920bbdf5) |
| 13:35:57 | wSOL → $BEER | sell | Jupiter rate limited, no other solver bid | [0x50334a8e](https://debug.barn.cow.fi/order/0x50334a8e8ff43796ce313a359a7c351f3dc672a1ceebeb76b2c35c86bd11abe9) |
| 13:36:11 | $BEER → USDC | sell | Winner too late: creation blockhash expired | [0xd461e392](https://debug.barn.cow.fi/order/0xd461e392a16588b472c1436bfb0a3df9eee238e1dc0793772cb71a2a04b4af71) |
| 13:36:30 | USDC → BAT | sell | Jupiter rate limited, no other solver bid | [0xdc0ad5bb](https://debug.barn.cow.fi/order/0xdc0ad5bbf06eb093b872ddc8bf1e0b15bd72e9f6834d27a4bc9dd3a4144bdca7) |
| 13:36:36 | USDC → $daumen | sell | Winner too late: creation blockhash expired | [0x257e3874](https://debug.barn.cow.fi/order/0x257e38746c4c912aae69c1c0dbad45ca992318109b6af82d7e97459748f2fb84) |
| 13:36:56 | $BEER → Pepe | sell | Creation tx rejected: blockhash not found | [0xadfd3b6c](https://debug.barn.cow.fi/order/0xadfd3b6c3b9891bc9aeaffc302b8383c1b3207b1ab5af94f50915269c117d69c) |
| 13:37:44 | wSOL → $TOAD | sell | Winner too late: creation blockhash expired | [0x7ade3899](https://debug.barn.cow.fi/order/0x7ade3899433bbd26c86a61671e1ab8fca62f5f8790a962d0c88e4aa2de47e0c1) |
| 13:39:53 | duk → 9niF…Z7bj | sell | Jupiter rate limited, no other solver bid | [0x8d264c33](https://debug.barn.cow.fi/order/0x8d264c3356740feac9ad4d606b9952582f88f33853ae2fbe375aa62b318a550b) |
| 13:40:23 | PYTH → EURC | sell | Jupiter rate limited, no other solver bid | [0x914bb667](https://debug.barn.cow.fi/order/0x914bb66798ae4e7c6e216f0e0321bdea1c6f99d7fbd2b5983c2fe615ba96e347) |
| 13:40:37 | $WIF → USDC | sell | Still open | [0xc3aed111](https://debug.barn.cow.fi/order/0xc3aed111af6d315487fc8867c8873a143f377b6da540ad601d493c733adc8f33) |
| 13:41:05 | xBTC → ETH | sell | Winner too late: creation blockhash expired | [0x389fdf7e](https://debug.barn.cow.fi/order/0x389fdf7e9eb7de8482a0fb38d5f39804c33fbb6bacf2508f7232c3f814cc6540) |
| 13:44:04 | wSOL → UNI | sell | Still open | [0x57133bad](https://debug.barn.cow.fi/order/0x57133bad95d137748da5872d15c5a2f870263616d8e91bde2a4827f115cf1ddb) |
| 13:44:12 | wSOL → USDC | sell | Winner too late: creation blockhash expired | [0xeea9e631](https://debug.barn.cow.fi/order/0xeea9e631476ce4d0f0ca052147a991cc500f1431ea8cf73d5df33c1138f6a5c9) |
| 13:44:33 | 9niF…Z7bj → $WOLF | sell | Jupiter rate limited, no other solver bid | [0xdcfc6150](https://debug.barn.cow.fi/order/0xdcfc6150bea6fae513577d69b58ca5b2d2d6e0af6f96f4a160f4178d32372aa4) |
| 13:44:59 | ATLAS → USDC | sell | Jupiter rate limited, no other solver bid | [0x84224e0b](https://debug.barn.cow.fi/order/0x84224e0bee8271734b59eb1f7d3f7386817f2000301598e8443b79d7e6ddb5e9) |
| 13:46:43 | USDC → MELANIA | sell | Jupiter rate limited, no other solver bid | [0xcfcfaaf8](https://debug.barn.cow.fi/order/0xcfcfaaf8c5445f8f12eec43d4437bfcd7899e00fc2f1d264389c622e0193fa0c) |
| 13:46:51 | 9niF…Z7bj → wSOL | buy | Winner too late: creation blockhash expired | [0xb70e6eff](https://debug.barn.cow.fi/order/0xb70e6eff548bc378a09e7119760cf1edb04f60efd4842c6b5ac65532b8b8df8e) |
| 13:47:57 | wSOL → $BEER | sell | Jupiter rate limited, no other solver bid | [0xf809afba](https://debug.barn.cow.fi/order/0xf809afba9aed1e5eacf1e80cbd692169f8cc6b0393db0a1925aa088506245b96) |
| 13:48:53 | MELANIA → USDC | buy | Jupiter rate limited, no other solver bid | [0xc802567e](https://debug.barn.cow.fi/order/0xc802567e6d07366e16d3f5b898103c68cc810523223e98ef92dc756f65b1716e) |
| 13:49:20 | $daumen → $BEER | sell | Jupiter rate limited, no other solver bid | [0xc42b5196](https://debug.barn.cow.fi/order/0xc42b5196d49a76a48b6fe8044f7358eeaa9e662bc7b31c33791402a653437f71) |
| 13:51:09 | $GARY → BIRDDOG | sell | Jupiter rate limited, no other solver bid | [0xfe79c8c6](https://debug.barn.cow.fi/order/0xfe79c8c6a3f446ac0d064355b5f7f70c28497bb0647ecde5f4d399eade2a8550) |
| 13:52:43 | ANUS → $BEER | sell | Jupiter rate limited, no other solver bid | [0xdfcab4d1](https://debug.barn.cow.fi/order/0xdfcab4d1d30265b59cc36362ad689a2b498a08d74b1545e0c7c45c81d0925694) |
| 13:56:45 | aura → USDC | sell | Jupiter rate limited, no other solver bid | [0xeac3d79f](https://debug.barn.cow.fi/order/0xeac3d79f0b03a2850e2a076c01b9abb52d75600fdc0055193396ae10d735f662) |
| 14:01:05 | HAWK → USDC | buy | Jupiter rate limited, no other solver bid | [0xdc425fef](https://debug.barn.cow.fi/order/0xdc425fefe311aad622235a7a290d0a26be2c463480c0fdc06cdcbb96ec06ea0a) |
| 14:02:02 | PYTH → EURC | sell | Jupiter rate limited, no other solver bid | [0xd1203e84](https://debug.barn.cow.fi/order/0xd1203e844a19ac0413a6b7a83136ca181c44bcedc26f9c26fda29b518ee1cdcd) |
