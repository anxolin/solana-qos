# Solana QoS report: 2026-10-07-17-19-unsupported

Barn, orders created between `2026-10-07T17:19:43.276Z` and `2026-10-07T17:28:37.666Z`. Data fetched 2026-10-07T17:28:13+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 12 |
| Orders executed | **3** (25.0%) |
| Sponsored orders never created on-chain | 9 (75.0%) |
| Traders | 1 |
| Settlement txs | 3 |

## Scenario

3 of 32 scenario rows completed. 0 retries, 20 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 17:19:43 | 1 | 1 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 0s | 0 | main error: Bad Request |
| 17:19:43 | 2 | 1 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 0s | 0 | main error: Bad Request |
| 17:19:44 | 3 | 1 | sell 0.005 SOL → oPAiAikWTaFj9RYoRFD35ccfwhnMcB3ThgBZRHSkjTZ | failed | 0s | 0 | main error: Bad Request |
| 17:19:44 | 4 | 1 | sell 0.005 SOL → 8RVBk8vxLiUHueLUW1f4izFVqN3nWippLhkohKg6EGkS | failed | 0s | 0 | main error: Bad Request |
| 17:19:44 | 5 | 1 | sell 0.005 SOL → PreweJYECqtQwBtpxHL171nL2K6umo692gTm7Q3rpgF | failed | 0s | 0 | main error: Bad Request |
| 17:19:45 | 6 | 1 | sell 0.005 SOL → TKLSidmLVt3cqGaaodG8tyRzoANfQwoh67AccjmubeZ | failed | 0s | 0 | main error: Bad Request |
| 17:19:45 | 7 | 1 | sell 0.005 SOL → SiLVFMgD3eD2rgK628NbTBq9MnuJF5FW2CRaVyTB35L | filled | 17s | 1 |  |
| 17:20:02 | 8 | 1 | sell 0.005 SOL → AGi2s9zPRPHs3zEDPhPTroumTEXK5ufymYSfEFndCSSW | failed | 0s | 0 | main error: Bad Request |
| 17:20:02 | 9 | 1 | sell 0.005 SOL → 6UtY9iTZMQQ5QZVrbzFnNaJntV7oySm9k97mvwnuZcxr | failed | 0s | 0 | main error: Bad Request |
| 17:20:02 | 10 | 1 | sell 0.005 SOL → HgcxVs6kJhPAaGqnPNGaa7zYgNT49hJrLufiqcNMuYZT | failed | 0s | 0 | main error: Bad Request |
| 17:20:03 | 11 | 1 | sell 0.005 SOL → PresTj4Yc2bAR197Er7wz4UUKSfqt6FryBEdAriBoQB | failed | 0s | 0 | main error: Bad Request |
| 17:20:03 | 12 | 1 | sell 0.005 SOL → 9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E | failed | 4s | 0 | main error: Not Found |
| 17:20:08 | 13 | 1 | sell 0.005 SOL → G1jonmoSEbMJSwEg1AmgDAJq2utmuBSZct8oqttBf9rT | failed | 0s | 0 | main error: Bad Request |
| 17:20:08 | 14 | 1 | sell 0.005 SOL → AaEhFTX4naHSWSXz9TVe5QgLbtSLT8ZqYJGZzDDcoroh | failed | 0s | 0 | main error: Bad Request |
| 17:20:08 | 15 | 1 | sell 0.005 SOL → Pre8AREmFPtoJFT8mQSXQLh56cwJmM7CFDRuoGBZiUP | failed | 0s | 0 | main error: Bad Request |
| 17:20:08 | 16 | 1 | sell 0.005 SOL → 9h5AzEQzYu9CV5K6uLtFRMD1KcbxZSFNxZEgBTNfw5Na | failed | 0s | 0 | main error: Bad Request |
| 17:20:09 | 17 | 1 | sell 0.005 SOL → 527PdUTGwcFxVEMXt8tyRJA1nYbVedgSiSfh4s2LWTWz | failed | 0s | 0 | main error: Bad Request |
| 17:20:09 | 18 | 1 | sell 0.005 SOL → CFNRDaxFcvRwRSNnA5cHrCCr6AHhk9dNkHWpRUjNupFL | failed | 0s | 0 | main error: Bad Request |
| 17:20:09 | 19 | 1 | sell 0.005 SOL → PreLWGkkeqG1s4HEfFZSy9moCrJ7btsHuUtfcCeoRua | failed | 0s | 0 | main error: Bad Request |
| 17:20:10 | 20 | 1 | sell 0.005 SOL → DELL2aRKQz7DMq5DrKLtkn47ZCnbxXPZXrSGbkmd13wy | filled | 18s | 1 |  |
| 17:20:28 | 21 | 1 | sell 0.005 SOL → HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC | filled | 15s | 1 |  |
| 17:20:43 | 22 | 1 | sell 0.005 SOL → 7KEPApdbBMByrmqihz3bht2uMhFQcatjfSFQCKq66kH3 | failed | 45s | 1 | main expired |
| 17:21:28 | 23 | 1 | sell 0.005 SOL → 7sGdNQSvUGpahh6qyXB3g5gsdK9FAzZM299KyCXspump | failed | 47s | 1 | main expired |
| 17:22:15 | 24 | 1 | sell 0.005 SOL → 7ypCq2CJ4fnbtS3z2B1W1UT2he5E3u7Md6Gy1ri7uGrQ | failed | 0s | 0 | main error: Bad Request |
| 17:22:16 | 25 | 1 | sell 0.005 SOL → dawn7ZUF7h7anFuEsDdAU1Y3HYwikwqNMAENZsQJdNL | failed | 45s | 1 | main expired |
| 17:23:01 | 26 | 1 | sell 0.005 SOL → EhzVcKKmGjLk6pD5gLT6ZrTg62bMgPgTSCXXmANnSyQA | failed | 0s | 0 | main error: Bad Request |
| 17:23:01 | 27 | 1 | sell 0.005 SOL → JNJg1znKdF712Phe7L7z52AATAvEjEytBdN2w8Lnh1Y | failed | 42s | 1 | main expired |
| 17:23:43 | 28 | 1 | sell 0.005 SOL → xNETbUB7cRb3AAu2pNG2pUwQcJ2BHcktfvSB8x1Pq6L | failed | 46s | 1 | main expired |
| 17:24:29 | 29 | 1 | sell 0.005 SOL → onoyC1ZjHNtT2tShqvVSg5WEcQDbu5zht6sdU9Nwjrc | failed | 46s | 1 | main expired |
| 17:25:15 | 30 | 1 | sell 0.005 SOL → E99fN4tCRb1tQphXK1DU7prXji6hMzxETyPNJro19Fwz | failed | 46s | 1 | main expired |
| 17:26:02 | 31 | 1 | sell 0.005 SOL → AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr | failed | 49s | 1 | main expired |
| 17:26:51 | 32 | 1 | sell 0.005 SOL → CyUgNnKPQLqFcheyGV8wmypnJqojA7NzsdJjTS4nUT2j | failed | 48s | 1 | main expired |

Scenario orders: 12 (12 main, 0 acquire). Cleanup placed 2 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 17:27:49 | 1 | ai16z → SOL (native) | Executed | `0x89aad84b…` [🐞](https://debug.barn.cow.fi/order/0x89aad84bbb249189ab3b732ae894ec898f2ee355793907a14e5635b2b8bdc0ae) |
| 17:27:49 | 1 | DELL → SOL (native) | Executed | `0xf65c117e…` [🐞](https://debug.barn.cow.fi/order/0xf65c117e5d46e75cd9ab856d6853f3bbda59a1a91fac08a8fe9a281d8e0844e0) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| expired: never created on-chain (winner found, creation blockhash expired) | 9 | 75.0% |
| executed | 3 | 25.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 9s | 10s | 10s | 10s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 3 | 100.0% | 3 | 117,007 | 9s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 5 | 5 | 5 | 100.0% | 0 | 0 | 0 | 0 |
| rosato | 0 | 0 | 0 | – | 0 | 0 | 10 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 76 | 0 |
| grafiks | 0 | 0 | 0 | – | 0 | 0 | 4 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 102 times
- Orders filtered for `unreceivable_buy_token_account`: 102 times
- Orders filtered for `in_flight`: 4 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 12 | 3 | 25.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → SILV | 1 | 1 | 100.0% |
| wSOL → DELL | 1 | 1 | 100.0% |
| wSOL → ai16z | 1 | 1 | 100.0% |
| wSOL → DARK | 1 | 0 | 0.0% |
| wSOL → https | 1 | 0 | 0.0% |
| wSOL → USD.infra | 1 | 0 | 0.0% |
| wSOL → JNJ | 1 | 0 | 0.0% |
| wSOL → XNET | 1 | 0 | 0.0% |
| wSOL → ONO | 1 | 0 | 0.0% |
| wSOL → SOLCAT | 1 | 0 | 0.0% |
| wSOL → SOLAMA | 1 | 0 | 0.0% |
| wSOL → gil | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 12 | 3 | 25.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 9 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 17:20:47 | wSOL → DARK | sell | Winner too late: creation blockhash expired | `0xd01a15a6…` [🐞](https://debug.barn.cow.fi/order/0xd01a15a6924015843e59ddf2ae92b8c52967a60ca5f7b2c8f82e7d148d25d555) |
| 17:21:34 | wSOL → https | sell | Winner too late: creation blockhash expired | `0xbbdf356a…` [🐞](https://debug.barn.cow.fi/order/0xbbdf356a5ef11748da5320bec4de40481486c1c7e34c2fe0d8f3a53556e94c8a) |
| 17:22:20 | wSOL → USD.infra | sell | Winner too late: creation blockhash expired | `0x7552829c…` [🐞](https://debug.barn.cow.fi/order/0x7552829c75223fb556b56a67578745ea822433f3cbb2ade5b43261ea6c4b4e75) |
| 17:23:02 | wSOL → JNJ | sell | Winner too late: creation blockhash expired | `0xb73543e5…` [🐞](https://debug.barn.cow.fi/order/0xb73543e529caf2c076075776542f3b745e99249da72248126cf24bbc1153d8c6) |
| 17:23:48 | wSOL → XNET | sell | Winner too late: creation blockhash expired | `0xdf29fae8…` [🐞](https://debug.barn.cow.fi/order/0xdf29fae8f60beee704d70aeb92bf75563a5dcb5c458675b6f68a50914bb3b65b) |
| 17:24:33 | wSOL → ONO | sell | Winner too late: creation blockhash expired | `0xccd6ea0c…` [🐞](https://debug.barn.cow.fi/order/0xccd6ea0c54bd8715c53fa4b3224b18e429807353091ef230202735676095785b) |
| 17:25:20 | wSOL → SOLCAT | sell | Winner too late: creation blockhash expired | `0xf31a932f…` [🐞](https://debug.barn.cow.fi/order/0xf31a932f635a0d26cbc75754f54c0e2a3682ae8228e4554e5b3e6d533a536c25) |
| 17:26:07 | wSOL → SOLAMA | sell | Winner too late: creation blockhash expired | `0x96b49e74…` [🐞](https://debug.barn.cow.fi/order/0x96b49e749ab0e173377f47d093d9ffd921a5335fe3cfafedacfcce54bb1dccd4) |
| 17:26:55 | wSOL → gil | sell | Winner too late: creation blockhash expired | `0x498dad93…` [🐞](https://debug.barn.cow.fi/order/0x498dad9348071b7d7bf0a856c545dc6466ccb06e917c07d38ffd6a4e03256956) |
