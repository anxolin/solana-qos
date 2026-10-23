# Solana QoS report: 2026-10-22-16-33-token-universe__test_01_cow-swap-top

Prod, orders created between `2026-10-22T16:34:14.833Z` and `2026-10-22T16:39:03.243Z`. Data fetched 2026-10-22T16:41:30+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 98 |
| Orders executed | **97** (99.0%) |
| Sponsored orders never created on-chain | 1 (1.0%) |
| Traders | 30 |
| Settlement txs | 97 |

## Scenario

91 of 94 scenario rows completed. 0 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 16:34:14 | 1 | 1 | sell 0.005 SOL → EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v | filled | 11s | 1 |  |
| 16:34:26 | 2 | 1 | sell 0.492 EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v → SOL | filled | 13s | 1 |  |
| 16:34:14 | 3 | 2 | sell 0.005 SOL → Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB | filled | 12s | 1 |  |
| 16:34:26 | 4 | 2 | sell 0.492 Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB → SOL | filled | 9s | 1 |  |
| 16:34:14 | 5 | 3 | sell 0.005 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 12s | 1 |  |
| 16:34:26 | 6 | 3 | sell 0.491 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → SOL | filled | 9s | 1 |  |
| 16:34:14 | 7 | 4 | sell 0.005 SOL → 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx | filled | 12s | 1 |  |
| 16:34:26 | 8 | 4 | sell 3.45 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx → SOL | filled | 14s | 1 |  |
| 16:34:14 | 9 | 5 | sell 0.005 SOL → A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS | filled | 18s | 1 |  |
| 16:34:32 | 10 | 5 | sell 0.000405 A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS → SOL | filled | 9s | 1 |  |
| 16:34:14 | 11 | 6 | sell 0.005 SOL → JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD | filled | 12s | 1 |  |
| 16:34:27 | 12 | 6 | sell 0.492 JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD → SOL | filled | 10s | 1 |  |
| 16:34:14 | 13 | 7 | sell 0.005 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 12s | 1 |  |
| 16:34:27 | 14 | 7 | sell 0.491 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → SOL | filled | 10s | 1 |  |
| 16:34:14 | 15 | 8 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 13s | 1 |  |
| 16:34:27 | 16 | 8 | sell 0.492 DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT → SOL | filled | 10s | 1 |  |
| 16:34:14 | 17 | 9 | sell 0.005 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 13s | 1 |  |
| 16:34:27 | 18 | 9 | sell 90.2 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn → SOL | filled | 49s | 1 |  |
| 16:34:14 | 19 | 10 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 40s | 1 | main expired |
| 16:34:54 | 20 | 10 | sell 5.93e-06 cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij → SOL | filled | 63s | 2 |  |
| 16:34:14 | 21 | 11 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 13s | 1 |  |
| 16:34:28 | 22 | 11 | sell 0.000198 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs → SOL | filled | 14s | 1 |  |
| 16:34:14 | 23 | 12 | sell 0.005 SOL → BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy | filled | 14s | 1 |  |
| 16:34:28 | 24 | 12 | sell 0.401 BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy → SOL | filled | 14s | 1 |  |
| 16:34:14 | 25 | 13 | sell 0.005 SOL → 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g | filled | 53s | 1 |  |
| 16:35:07 | 26 | 13 | sell 0.00577 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g → SOL | filled | 10s | 1 |  |
| 16:34:14 | 27 | 14 | sell 0.005 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 14s | 1 |  |
| 16:34:28 | 28 | 14 | sell 0.492 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → SOL | filled | 14s | 1 |  |
| 16:34:14 | 29 | 15 | sell 0.005 SOL → CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp | filled | 14s | 1 |  |
| 16:34:29 | 30 | 15 | sell 1.7 CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp → SOL | filled | 28s | 2 |  |
| 16:34:14 | 31 | 16 | sell 0.005 SOL → 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 | filled | 15s | 1 |  |
| 16:34:29 | 32 | 16 | sell 81.5 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 → SOL | filled | 10s | 1 |  |
| 16:34:14 | 33 | 17 | sell 0.005 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 15s | 1 |  |
| 16:34:29 | 34 | 17 | sell 3.6 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → SOL | filled | 10s | 1 |  |
| 16:34:14 | 35 | 18 | sell 0.005 SOL → 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh | filled | 15s | 1 |  |
| 16:34:29 | 36 | 18 | sell 5.93e-06 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh → SOL | filled | 10s | 1 |  |
| 16:34:14 | 37 | 19 | sell 0.005 SOL → Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk | filled | 54s | 1 |  |
| 16:35:08 | 38 | 19 | sell 2.58 Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk → SOL | filled | 10s | 1 |  |
| 16:34:14 | 39 | 20 | sell 0.005 SOL → 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R | filled | 15s | 1 |  |
| 16:34:29 | 40 | 20 | sell 0.207 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R → SOL | filled | 10s | 1 |  |
| 16:34:14 | 41 | 21 | sell 0.005 SOL → USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB | filled | 16s | 1 |  |
| 16:34:30 | 42 | 21 | sell 0.492 USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB → SOL | filled | 9s | 1 |  |
| 16:34:14 | 43 | 22 | sell 0.005 SOL → CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt | filled | 48s | 1 |  |
| 16:35:02 | 44 | 22 | sell 42 CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt → SOL | filled | 26s | 2 |  |
| 16:34:14 | 45 | 23 | sell 0.005 SOL → JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN | filled | 50s | 1 |  |
| 16:35:05 | 46 | 23 | sell 1.35 JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN → SOL | filled | 6s | 1 |  |
| 16:34:14 | 47 | 24 | sell 0.005 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 54s | 1 |  |
| 16:35:08 | 48 | 24 | sell 0.000629 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 17s | 1 |  |
| 16:34:14 | 49 | 25 | sell 0.005 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 54s | 1 |  |
| 16:35:09 | 50 | 25 | sell 0.003 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | filled | 7s | 1 |  |
| 16:34:14 | 51 | 26 | sell 0.005 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 55s | 1 |  |
| 16:35:09 | 52 | 26 | sell 0.00214 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | filled | 7s | 1 |  |
| 16:34:14 | 53 | 27 | sell 0.005 SOL → 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv | filled | 11s | 1 |  |
| 16:34:25 | 54 | 27 | sell 61.6 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv → SOL | filled | 51s | 1 |  |
| 16:34:14 | 55 | 28 | sell 0.005 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 17s | 1 |  |
| 16:34:31 | 56 | 28 | sell 0.00301 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb → SOL | filled | 9s | 1 |  |
| 16:34:14 | 57 | 29 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 11s | 1 |  |
| 16:34:26 | 58 | 29 | sell 0.00345 J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn → SOL | filled | 13s | 1 |  |
| 16:34:14 | 59 | 30 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 55s | 1 |  |
| 16:35:10 | 60 | 30 | sell 0.106 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 → SOL | filled | 7s | 1 |  |
| 16:34:39 | 61 | 1 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 12s | 1 |  |
| 16:34:51 | 62 | 1 | sell 0.00371 jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v → SOL | filled | 9s | 1 |  |
| 16:34:35 | 63 | 2 | sell 0.005 SOL → MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump | filled | 12s | 1 |  |
| 16:34:47 | 64 | 2 | sell 68.4 MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump → SOL | filled | 7s | 1 |  |
| 16:34:35 | 65 | 3 | sell 0.005 SOL → GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump | filled | 12s | 1 |  |
| 16:34:46 | 66 | 3 | sell 43.7 GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump → SOL | filled | 10s | 1 |  |
| 16:34:40 | 67 | 4 | sell 0.005 SOL → METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL | filled | 11s | 1 |  |
| 16:34:51 | 68 | 4 | sell 1.17 METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL → SOL | filled | 9s | 1 |  |
| 16:34:41 | 69 | 5 | sell 0.005 SOL → 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG | filled | 7s | 1 |  |
| 16:34:48 | 70 | 5 | sell 0.492 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG → SOL | filled | 7s | 1 |  |
| 16:34:36 | 71 | 6 | sell 0.005 SOL → AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj | filled | 8s | 1 |  |
| 16:34:44 | 72 | 6 | sell 0.415 AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj → SOL | filled | 7s | 1 |  |
| 16:34:37 | 73 | 7 | sell 0.005 SOL → C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE | filled | 8s | 1 |  |
| 16:34:44 | 74 | 7 | sell 51.8 C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE → SOL | filled | 10s | 1 |  |
| 16:34:37 | 75 | 8 | sell 0.005 SOL → 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 | failed | 2s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 16:34:39 | 76 | 8 | sell 0.428 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 → SOL | filled | 24s | 2 |  |
| 16:35:16 | 77 | 9 | sell 0.005 SOL → CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump | filled | 13s | 1 |  |
| 16:35:29 | 78 | 9 | sell 107 CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump → SOL | filled | 4s | 1 |  |
| 16:35:58 | 79 | 10 | sell 0.005 SOL → 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 | filled | 7s | 1 |  |
| 16:36:04 | 80 | 10 | sell 12.7 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 → SOL | filled | 4s | 1 |  |
| 16:34:42 | 81 | 11 | sell 0.005 SOL → Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump | filled | 7s | 1 |  |
| 16:34:48 | 82 | 11 | sell 15.6 Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump → SOL | filled | 7s | 1 |  |
| 16:34:42 | 83 | 12 | sell 0.005 SOL → 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu | filled | 6s | 1 |  |
| 16:34:49 | 84 | 12 | sell 1.63 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu → SOL | filled | 7s | 1 |  |
| 16:35:17 | 85 | 13 | sell 0.005 SOL → oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp | filled | 7s | 1 |  |
| 16:35:24 | 86 | 13 | sell 0.0046 oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp → SOL | filled | 17s | 2 |  |
| 16:34:43 | 87 | 14 | sell 0.005 SOL → 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs | filled | 7s | 1 |  |
| 16:34:49 | 88 | 14 | sell 6.7 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs → SOL | filled | 10s | 1 |  |
| 16:34:56 | 89 | 15 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 8s | 1 |  |
| 16:35:04 | 90 | 15 | sell 0.00319 mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So → SOL | filled | 7s | 1 |  |
| 16:34:39 | 91 | 16 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 2s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 16:34:41 | 92 | 16 | sell 3.04 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump → SOL | filled | 18s | 2 |  |
| 16:34:39 | 93 | 17 | sell 0.005 SOL → D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n | filled | 12s | 1 |  |
| 16:34:51 | 94 | 17 | sell 3000 D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n → SOL | filled | 9s | 1 |  |

### Rows without an order

2 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | main | 2 | SOL → ONyc, SOL → Fartcoin | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 98 (92 main, 6 acquire). Cleanup placed 5 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 16:36:13 | 3 | JEANPHIL → SOL (native) | Executed | `0x7a60650c…` [🐞](https://debug.cow.fi/order/0x7a60650c02def1f44a279e891453a9d37423791ba5860ccad9f1cbbb04a728fa) |
| 16:36:19 | 7 | HOOKED → SOL (native) | Executed | `0x92fc9bb3…` [🐞](https://debug.cow.fi/order/0x92fc9bb3ab676c0b268e150d0c944b9efc00bf0dca4951b6d21a45b32a6f6273) |
| 16:36:19 | 9 | fone → SOL (native) | Executed | `0x7726922a…` [🐞](https://debug.cow.fi/order/0x7726922aa08d16a6671889aefc42a967c4261b60bf6cbe6154948238d31840f8) |
| 16:36:29 | 17 | GO → SOL (native) | Executed | `0x3c45a57c…` [🐞](https://debug.cow.fi/order/0x3c45a57cf3ae04ae27aa6cbf0ba851b724b7077e9a6a78c26cdf87a843c4bda1) |
| 16:36:29 | 17 | ANSEM → SOL (native) | Executed | `0xa3b07d8b…` [🐞](https://debug.cow.fi/order/0xa3b07d8bd32993babce358b5e1ec03e4886f0cdf72bd7c15f420e5acbbd5c916) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 97 | 99.0% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 1.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 5s | 6s | 41s | 48s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 28da…jxyN | 97 | 100.0% | 97 | 114,833 | 5s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 113 | 113 | 102 | 90.3% | 0 | 22 | 0 | 0 |
| fractal | 0 | 0 | 0 | – | 0 | 0 | 22 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `in_flight`: 16 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0x8edb72fc822ff168ce66d6c4ade61567503f644242a62de5b35fbf6ea5560349`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 98 | 97 | 99.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → cbBTC | 2 | 1 | 50.0% |
| wSOL → CARDS | 2 | 2 | 100.0% |
| wSOL → ANTFUN | 2 | 2 | 100.0% |
| wSOL → ORE | 2 | 2 | 100.0% |
| wSOL → USDC | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → USDT | 1 | 1 | 100.0% |
| wSOL → STONK | 1 | 1 | 100.0% |
| wSOL → ZEC | 1 | 1 | 100.0% |
| wSOL → JupUSD | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → BP | 1 | 1 | 100.0% |
| wSOL → HYPE | 1 | 1 | 100.0% |
| wSOL → CASH | 1 | 1 | 100.0% |
| wSOL → EMBER | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| wSOL → WBTC | 1 | 1 | 100.0% |
| wSOL → RAY | 1 | 1 | 100.0% |
| wSOL → USELESS | 1 | 1 | 100.0% |
| wSOL → USD1 | 1 | 1 | 100.0% |
| wSOL → JUP | 1 | 1 | 100.0% |
| wSOL → SPYx | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| wSOL → PENGU | 1 | 1 | 100.0% |
| wSOL → SPCX | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| PENGU → SOL (native) | 1 | 1 | 100.0% |
| JitoSOL → SOL (native) | 1 | 1 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| USDG → SOL (native) | 1 | 1 | 100.0% |
| USDT → SOL (native) | 1 | 1 | 100.0% |
| STONK → SOL (native) | 1 | 1 | 100.0% |
| JupUSD → SOL (native) | 1 | 1 | 100.0% |
| PYUSD → SOL (native) | 1 | 1 | 100.0% |
| USDe → SOL (native) | 1 | 1 | 100.0% |
| PUMP → SOL (native) | 1 | 1 | 100.0% |
| ETH → SOL (native) | 1 | 1 | 100.0% |
| BP → SOL (native) | 1 | 1 | 100.0% |
| CASH → SOL (native) | 1 | 1 | 100.0% |
| EMBER → SOL (native) | 1 | 1 | 100.0% |
| ANSEM → SOL (native) | 1 | 1 | 100.0% |
| WBTC → SOL (native) | 1 | 1 | 100.0% |
| RAY → SOL (native) | 1 | 1 | 100.0% |
| USD1 → SOL (native) | 1 | 1 | 100.0% |
| SPCX → SOL (native) | 1 | 1 | 100.0% |
| ZEC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JEANPHIL | 1 | 1 | 100.0% |
| wSOL → OTC | 1 | 1 | 100.0% |
| wSOL → syrupUSDC | 1 | 1 | 100.0% |
| wSOL → HOOKED | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → GO | 1 | 1 | 100.0% |
| wSOL → MET | 1 | 1 | 100.0% |
| wSOL → USX | 1 | 1 | 100.0% |
| wSOL → neet | 1 | 1 | 100.0% |
| wSOL → GEOD | 1 | 1 | 100.0% |
| wSOL → xSOL | 1 | 1 | 100.0% |
| syrupUSDC → SOL (native) | 1 | 1 | 100.0% |
| HOOKED → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ONyc | 1 | 1 | 100.0% |
| JEANPHIL → SOL (native) | 1 | 1 | 100.0% |
| CARDS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| OTC → SOL (native) | 1 | 1 | 100.0% |
| USX → SOL (native) | 1 | 1 | 100.0% |
| neet → SOL (native) | 1 | 1 | 100.0% |
| GEOD → SOL (native) | 1 | 1 | 100.0% |
| xSOL → SOL (native) | 1 | 1 | 100.0% |
| JupSOL → SOL (native) | 1 | 1 | 100.0% |
| GO → SOL (native) | 1 | 1 | 100.0% |
| MET → SOL (native) | 1 | 1 | 100.0% |
| Fartcoin → SOL (native) | 1 | 1 | 100.0% |
| ONyc → SOL (native) | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| mSOL → SOL (native) | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| HYPE → SOL (native) | 1 | 1 | 100.0% |
| USELESS → SOL (native) | 1 | 1 | 100.0% |
| SPYx → SOL (native) | 1 | 1 | 100.0% |
| SPCXx → SOL (native) | 1 | 1 | 100.0% |
| NVDAx → SOL (native) | 1 | 1 | 100.0% |
| JLP → SOL (native) | 1 | 1 | 100.0% |
| cbBTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → fone | 1 | 1 | 100.0% |
| ANTFUN → SOL (native) | 1 | 1 | 100.0% |
| fone → SOL (native) | 1 | 1 | 100.0% |
| ORE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TROLL | 1 | 1 | 100.0% |
| TROLL → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 5 | 4 | 80.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 5 | 5 | 100.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 5 | 5 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 4 | 4 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 4 | 4 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 4 | 4 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 4 | 4 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 4 | 4 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 4 | 4 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 4 | 4 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 4 | 4 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 4 | 4 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 4 | 4 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 4 | 4 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 4 | 4 | 100.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 4 | 4 | 100.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 4 | 4 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 3 | 3 | 100.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 2 | 2 | 100.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 2 | 2 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 2 | 2 | 100.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 2 | 2 | 100.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 2 | 2 | 100.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 2 | 2 | 100.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 2 | 2 | 100.0% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 2 | 2 | 100.0% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 2 | 2 | 100.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 2 | 2 | 100.0% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 2 | 2 | 100.0% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 2 | 2 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 16:34:19 | wSOL → cbBTC | market sell | Winner too late: creation blockhash expired | `0x139ff814…` [🐞](https://debug.cow.fi/order/0x139ff8143f034a4e7e106d21de7665eef8eac3a0c11131e63cd0e309ddaf0bfd) |
