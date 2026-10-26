# Solana QoS report: 2026-10-26-19-30-token-universe__test_01_cow-swap-top

Barn, orders created between `2026-10-26T19:31:08.944Z` and `2026-10-26T19:37:54.302Z`. Data fetched 2026-10-26T22:24:16+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 115 |
| Orders executed | **110** (95.7%) |
| Sponsored orders never created on-chain | 5 (4.3%) |
| Traders | 30 |
| Settlement txs | 110 |

## Scenario

86 of 94 scenario rows completed. 0 retries, 3 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 19:31:09 | 1 | 1 | sell 0.005 SOL → EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v | failed | 38s | 1 | main expired |
| 19:31:47 | 2 | 1 | sell 0.492 EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v → SOL | filled | 28s | 2 |  |
| 19:31:13 | 3 | 2 | sell 0.005 SOL → Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB | failed | 37s | 1 | main expired |
| 19:31:49 | 4 | 2 | sell 0.492 Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB → SOL | filled | 28s | 2 |  |
| 19:31:17 | 5 | 3 | sell 0.005 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 36s | 1 | main expired |
| 19:31:53 | 6 | 3 | sell 0.491 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → SOL | filled | 22s | 2 |  |
| 19:31:21 | 7 | 4 | sell 0.005 SOL → 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx | filled | 34s | 1 |  |
| 19:31:54 | 8 | 4 | sell 3.45 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx → SOL | filled | 25s | 2 |  |
| 19:31:25 | 9 | 5 | sell 0.005 SOL → A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS | failed | 37s | 1 | main expired |
| 19:32:02 | 10 | 5 | sell 0.000405 A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS → SOL | filled | 28s | 2 |  |
| 19:31:28 | 11 | 6 | sell 0.005 SOL → JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD | failed | 37s | 1 | main expired |
| 19:32:05 | 12 | 6 | sell 0.492 JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD → SOL | filled | 25s | 2 |  |
| 19:31:33 | 13 | 7 | sell 0.005 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 33s | 1 |  |
| 19:32:06 | 14 | 7 | sell 0.491 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → SOL | filled | 35s | 2 |  |
| 19:31:37 | 15 | 8 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 30s | 1 |  |
| 19:32:06 | 16 | 8 | sell 0.492 DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT → SOL | filled | 25s | 2 |  |
| 19:31:41 | 17 | 9 | sell 0.005 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 24s | 1 |  |
| 19:32:05 | 18 | 9 | sell 90.2 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn → SOL | filled | 34s | 2 |  |
| 19:31:45 | 19 | 10 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 5s | 1 |  |
| 19:31:49 | 20 | 10 | sell 5.93e-06 cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij → SOL | filled | 7s | 1 |  |
| 19:31:49 | 21 | 11 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 24s | 1 |  |
| 19:32:12 | 22 | 11 | sell 0.000198 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs → SOL | filled | 18s | 2 |  |
| 19:31:53 | 23 | 12 | sell 0.005 SOL → BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy | filled | 8s | 1 |  |
| 19:32:00 | 24 | 12 | sell 0.401 BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy → SOL | filled | 28s | 2 |  |
| 19:31:57 | 25 | 13 | sell 0.005 SOL → 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g | filled | 8s | 1 |  |
| 19:32:05 | 26 | 13 | sell 0.00577 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g → SOL | filled | 8s | 1 |  |
| 19:32:01 | 27 | 14 | sell 0.005 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 24s | 1 |  |
| 19:32:25 | 28 | 14 | sell 0.492 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → SOL | filled | 7s | 1 |  |
| 19:32:05 | 29 | 15 | sell 0.005 SOL → CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp | filled | 24s | 1 |  |
| 19:32:29 | 30 | 15 | sell 1.7 CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp → SOL | filled | 37s | 2 |  |
| 19:32:09 | 31 | 16 | sell 0.005 SOL → 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 | filled | 8s | 1 |  |
| 19:32:16 | 32 | 16 | sell 81.5 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 → SOL | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 19:32:13 | 33 | 17 | sell 0.005 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 8s | 1 |  |
| 19:32:21 | 34 | 17 | sell 3.6 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → SOL | filled | 5s | 1 |  |
| 19:32:17 | 35 | 18 | sell 0.005 SOL → 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh | filled | 14s | 1 |  |
| 19:32:31 | 36 | 18 | sell 5.93e-06 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh → SOL | filled | 23s | 1 |  |
| 19:32:21 | 37 | 19 | sell 0.005 SOL → Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk | filled | 5s | 1 |  |
| 19:32:25 | 38 | 19 | sell 2.58 Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk → SOL | filled | 5s | 1 |  |
| 19:32:25 | 39 | 20 | sell 0.005 SOL → 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R | filled | 5s | 1 |  |
| 19:32:29 | 40 | 20 | sell 0.207 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R → SOL | filled | 31s | 2 |  |
| 19:32:29 | 41 | 21 | sell 0.005 SOL → USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB | filled | 16s | 1 |  |
| 19:32:44 | 42 | 21 | sell 0.492 USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB → SOL | filled | 7s | 1 |  |
| 19:32:33 | 43 | 22 | sell 0.005 SOL → CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt | filled | 8s | 1 |  |
| 19:32:40 | 44 | 22 | sell 42 CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt → SOL | filled | 19s | 2 |  |
| 19:32:37 | 45 | 23 | sell 0.005 SOL → JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN | filled | 8s | 1 |  |
| 19:32:45 | 46 | 23 | sell 1.35 JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN → SOL | filled | 5s | 1 |  |
| 19:32:41 | 47 | 24 | sell 0.005 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 4s | 1 |  |
| 19:32:45 | 48 | 24 | sell 0.000629 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 5s | 1 |  |
| 19:32:45 | 49 | 25 | sell 0.005 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 5s | 1 |  |
| 19:32:50 | 50 | 25 | sell 0.003 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | filled | 7s | 1 |  |
| 19:32:49 | 51 | 26 | sell 0.005 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 8s | 1 |  |
| 19:32:56 | 52 | 26 | sell 0.00214 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | filled | 4s | 1 |  |
| 19:32:53 | 53 | 27 | sell 0.005 SOL → 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv | filled | 8s | 1 |  |
| 19:33:01 | 54 | 27 | sell 61.6 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv → SOL | filled | 7s | 1 |  |
| 19:32:57 | 55 | 28 | sell 0.005 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 11s | 1 |  |
| 19:33:08 | 56 | 28 | sell 0.00301 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb → SOL | filled | 10s | 1 |  |
| 19:33:00 | 57 | 29 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 5s | 1 |  |
| 19:33:05 | 58 | 29 | sell 0.00345 J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn → SOL | filled | 27s | 2 |  |
| 19:33:05 | 59 | 30 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 8s | 1 |  |
| 19:33:13 | 60 | 30 | sell 0.106 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 → SOL | filled | 11s | 1 |  |
| 19:33:09 | 61 | 1 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 14s | 1 |  |
| 19:33:22 | 62 | 1 | sell 0.00371 jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v → SOL | filled | 35s | 2 |  |
| 19:33:13 | 63 | 2 | sell 0.005 SOL → MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump | filled | 11s | 1 |  |
| 19:33:24 | 64 | 2 | sell 68.4 MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump → SOL | filled | 18s | 2 |  |
| 19:33:17 | 65 | 3 | sell 0.005 SOL → GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump | filled | 11s | 1 |  |
| 19:33:27 | 66 | 3 | sell 43.7 GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump → SOL | filled | 7s | 1 |  |
| 19:33:20 | 67 | 4 | sell 0.005 SOL → METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL | filled | 5s | 1 |  |
| 19:33:25 | 68 | 4 | sell 1.17 METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL → SOL | filled | 16s | 1 |  |
| 19:33:25 | 69 | 5 | sell 0.005 SOL → 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG | filled | 11s | 1 |  |
| 19:33:36 | 70 | 5 | sell 0.492 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG → SOL | filled | 31s | 2 |  |
| 19:33:29 | 71 | 6 | sell 0.005 SOL → AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj | filled | 8s | 1 |  |
| 19:33:37 | 72 | 6 | sell 0.415 AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj → SOL | filled | 28s | 2 |  |
| 19:33:33 | 73 | 7 | sell 0.005 SOL → C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 19:33:34 | 74 | 7 | sell 51.8 C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE → SOL | failed | 8s | 0 | acquire C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 19:33:37 | 75 | 8 | sell 0.005 SOL → 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 | filled | 21s | 1 |  |
| 19:33:57 | 76 | 8 | sell 0.428 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 → SOL | filled | 7s | 1 |  |
| 19:33:41 | 77 | 9 | sell 0.005 SOL → CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump | filled | 12s | 1 |  |
| 19:33:52 | 78 | 9 | sell 107 CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump → SOL | filled | 7s | 1 |  |
| 19:33:45 | 79 | 10 | sell 0.005 SOL → 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 | filled | 7s | 1 |  |
| 19:33:52 | 80 | 10 | sell 12.7 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 → SOL | filled | 18s | 2 |  |
| 19:33:49 | 81 | 11 | sell 0.005 SOL → Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump | filled | 8s | 1 |  |
| 19:33:56 | 82 | 11 | sell 15.6 Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump → SOL | filled | 11s | 1 |  |
| 19:33:53 | 83 | 12 | sell 0.005 SOL → 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu | filled | 8s | 1 |  |
| 19:34:00 | 84 | 12 | sell 1.63 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu → SOL | filled | 25s | 2 |  |
| 19:33:57 | 85 | 13 | sell 0.005 SOL → oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp | filled | 8s | 1 |  |
| 19:34:04 | 86 | 13 | sell 0.0046 oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp → SOL | filled | 35s | 2 |  |
| 19:34:01 | 87 | 14 | sell 0.005 SOL → 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs | filled | 4s | 1 |  |
| 19:34:05 | 88 | 14 | sell 6.7 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs → SOL | filled | 34s | 2 |  |
| 19:34:05 | 89 | 15 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 5s | 1 |  |
| 19:34:09 | 90 | 15 | sell 0.00319 mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So → SOL | filled | 8s | 1 |  |
| 19:34:09 | 91 | 16 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 14s | 1 |  |
| 19:34:23 | 92 | 16 | sell 3.04 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump → SOL | filled | 22s | 2 |  |
| 19:34:13 | 93 | 17 | sell 0.005 SOL → D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n | filled | 8s | 1 |  |
| 19:34:20 | 94 | 17 | sell 3000 D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n → SOL | filled | 7s | 1 |  |

### Rows without an order

3 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | main | 2 | EMBER → SOL, SOL → HOOKED | the transaction's blockhash is no longer valid, sign a fresh one |
| SellAmountDoesNotCoverFee | acquire | 1 | SOL → HOOKED | the quoted amount does not cover the execution cost |

Scenario orders: 115 (91 main, 24 acquire). Cleanup placed 76 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 19:34:52 | 4 | USDC → SOL (native) | Executed | `0x8d81f857…` [🐞](https://debug.barn.cow.fi/order/0x8d81f8571188faf96e7b90b614aaebdcb50be0686ffc16724a2cfef67b0e59c9) |
| 19:34:54 | 6 | USDC → SOL (native) | Executed | `0xf9dba85d…` [🐞](https://debug.barn.cow.fi/order/0xf9dba85d6934427452e596048220092214501d282121b9493aed9fd021cb090b) |
| 19:35:01 | 11 | DOOD → SOL (native) | Executed | `0xed5671f1…` [🐞](https://debug.barn.cow.fi/order/0xed5671f1b72bd72b42213c0e96eea49b905e2bf2106aed4fac9ae4427ff2375b) |
| 19:35:02 | 11 | neet → SOL (native) | Executed | `0xb1ba72aa…` [🐞](https://debug.barn.cow.fi/order/0xb1ba72aabc6fb95db1c639fcd9955b1c056e9d34d11bac7c93a49764dff0115d) |
| 19:35:07 | 13 | FWOG → SOL (native) | Executed | `0x62a5f7fc…` [🐞](https://debug.barn.cow.fi/order/0x62a5f7fc79864037beadb5db5cf64e9abec60b299912e4cf9fdea4fb23b544e8) |
| 19:35:08 | 13 | DOLAN → SOL (native) | Executed | `0x27e93d8f…` [🐞](https://debug.barn.cow.fi/order/0x27e93d8fcae37583ee6f761405d54ef7cbc3de8926ee49f53d619510007d0f8c) |
| 19:35:08 | 13 | HYPE → SOL (native) | Executed | `0x528d544f…` [🐞](https://debug.barn.cow.fi/order/0x528d544f3e9114c79473c1e8292247700786c4c51cb3bd402314251d216c6cd7) |
| 19:35:08 | 13 | ORCA → SOL (native) | Executed | `0xe6c1f7d7…` [🐞](https://debug.barn.cow.fi/order/0xe6c1f7d753c772a96d0ce795c5b7409924228e5930bba0696930ca34195e7251) |
| 19:35:09 | 13 | CYPH → SOL (native) | Executed | `0x3ad9ce9c…` [🐞](https://debug.barn.cow.fi/order/0x3ad9ce9cfd9e2c31e747e6e015941a06ef6e200e3fea3e3e08b31a4a5124b6bb) |
| 19:35:10 | 14 | JUP → SOL (native) | Executed | `0x0f7e5cb3…` [🐞](https://debug.barn.cow.fi/order/0x0f7e5cb36c164d31c5b1329225d36565fa73cc8c93f93f8b76b78a3ed9da231c) |
| 19:35:10 | 14 | NPC → SOL (native) | Executed | `0x203c21dc…` [🐞](https://debug.barn.cow.fi/order/0x203c21dce1448cd23445e1245c0410f9a5269e535cf3cb0b2ed5f0471fe78296) |
| 19:35:10 | 14 | BIO → SOL (native) | Executed | `0x5ad7d35c…` [🐞](https://debug.barn.cow.fi/order/0x5ad7d35c817634a2f23a81ef232062bd011c7536a68fe0324420c2f46b7a9ba6) |
| 19:35:10 | 14 | WEN → SOL (native) | Executed | `0x0b7acfda…` [🐞](https://debug.barn.cow.fi/order/0x0b7acfda4a5cbe281ae8db8929c2ec431a0acfbdf9543fd676b61c83c5fd0c31) |
| 19:35:11 | 15 | JUP → SOL (native) | Executed | `0xe0301710…` [🐞](https://debug.barn.cow.fi/order/0xe0301710d7f97264dc880126880150aea79ba000b8398fb7daf8fa05d70cf0e3) |
| 19:35:12 | 15 | HUMA → SOL (native) | Executed | `0xd339bd4b…` [🐞](https://debug.barn.cow.fi/order/0xd339bd4b88d3984b5f5978d9f7313375587835a0aa823f9e71dfb428ce3c939b) |
| 19:35:12 | 15 | DITH → SOL (native) | Executed | `0xf7f6c9af…` [🐞](https://debug.barn.cow.fi/order/0xf7f6c9af533b9eda862a62c463745d93ad97bcf8f2941c01593b9889a48db88d) |
| 19:35:12 | 15 | SIGMA → SOL (native) | Executed | `0xdc34c44d…` [🐞](https://debug.barn.cow.fi/order/0xdc34c44dbf75456889e01ea695e578cc6bdd07e3e508c9770e5a706982cfbda7) |
| 19:35:12 | 15 | Tokabu → SOL (native) | Executed | `0xab77cb26…` [🐞](https://debug.barn.cow.fi/order/0xab77cb26bbed5778bc03d9d0dcce1a655788839af225a8f5e28fffa34d03363a) |
| 19:35:13 | 15 | HIMS → SOL (native) | Executed | `0xafc595ea…` [🐞](https://debug.barn.cow.fi/order/0xafc595eae89c80f20f74569ca7e87770c700747db7f28e53ad77b9beb6b1caa1) |
| 19:35:17 | 17 | Shoggoth → SOL (native) | Executed | `0x84081343…` [🐞](https://debug.barn.cow.fi/order/0x840813435c0a454ab03d5a0f98eed06ca486e509aa28fdfddacc61b56c4b543c) |
| 19:35:18 | 17 | ZBCN → SOL (native) | Executed | `0xe286a329…` [🐞](https://debug.barn.cow.fi/order/0xe286a3297bff64298812f8a7e9bd0d9eb789dc71a96ca6144e64be6ee0569424) |
| 19:35:18 | 17 | GO → SOL (native) | Executed | `0x3cbbc0f7…` [🐞](https://debug.barn.cow.fi/order/0x3cbbc0f73d54dd42a5958cf435b428ea33a83b1ec8d99ede4cb4d67d7190d811) |
| 19:35:19 | 17 | JUP → SOL (native) | Executed | `0xc1c425c2…` [🐞](https://debug.barn.cow.fi/order/0xc1c425c2cba8b6fcd82209257e287048c3d6a07e550f33ae349c24f272f1705e) |
| 19:35:19 | 17 | Old Slerf → SOL (native) | Executed | `0x8a696f49…` [🐞](https://debug.barn.cow.fi/order/0x8a696f4909be1409e324575b7e2364372d3fec2e60bd71bbef0ea11c0e32fdb1) |
| 19:35:20 | 17 | EURC → SOL (native) | Executed | `0xb3810541…` [🐞](https://debug.barn.cow.fi/order/0xb3810541eec9f3fcd8651148967292db9d238f9bc68b650b4fe8c298f7b6b3c2) |
| 19:35:20 | 17 | SNAP → SOL (native) | Executed | `0xd0b9bba4…` [🐞](https://debug.barn.cow.fi/order/0xd0b9bba444823a2213159275ca74067501a4da22356c263388f99150b2228d8d) |
| 19:35:22 | 18 | JUP → SOL (native) | Executed | `0xcda84af2…` [🐞](https://debug.barn.cow.fi/order/0xcda84af262e20ee05bd0533c064e3d725679d05d78635e7a6ecb778dcfd85d2b) |
| 19:35:22 | 18 | IBM → SOL (native) | Executed | `0xd526bbdd…` [🐞](https://debug.barn.cow.fi/order/0xd526bbddb603acae8ca289607fc0625bc2b7c06dc55c5371ba1ef444c904ec62) |
| 19:35:22 | 18 | KINS → SOL (native) | Executed | `0xd31439b6…` [🐞](https://debug.barn.cow.fi/order/0xd31439b60120bc066ec50928e33e0bf11f0f9f09b03f7b34d472e705a93534b7) |
| 19:35:23 | 18 | NKE → SOL (native) | Executed | `0x15ac6ab7…` [🐞](https://debug.barn.cow.fi/order/0x15ac6ab7c94946b033ef5e1911cf0073707f12930ad6db9ab180df31d90980eb) |
| 19:35:23 | 19 | KET → SOL (native) | Executed | `0xddd3e537…` [🐞](https://debug.barn.cow.fi/order/0xddd3e537798515dc682f51f23c9a05457eefac475332c2282ef890c6983bb3a1) |
| 19:35:24 | 19 | JUP → SOL (native) | Executed | `0x9b4b1106…` [🐞](https://debug.barn.cow.fi/order/0x9b4b1106bc4439af3cb427aa8aee4e938f08196206e8c51de3edefc206e736f2) |
| 19:35:24 | 20 | USDS → SOL (native) | Executed | `0xce09d23a…` [🐞](https://debug.barn.cow.fi/order/0xce09d23aed87571f5c2b8c6ab9e80964fa2b02d109f54a1e1defe4800dff3be9) |
| 19:35:24 | 20 | JUP → SOL (native) | Executed | `0x7fb3a038…` [🐞](https://debug.barn.cow.fi/order/0x7fb3a03852278a3864b31512ec597ef337ba505b03bd5c429e14ed1ba942565a) |
| 19:35:25 | 20 | USDY → SOL (native) | Executed | `0xf4b43909…` [🐞](https://debug.barn.cow.fi/order/0xf4b43909843900630ee979376de2c1548e6a9d25b84e0f1b041cb2d6e050fc39) |
| 19:35:25 | 20 | USO → SOL (native) | Executed | `0xd798d354…` [🐞](https://debug.barn.cow.fi/order/0xd798d35439e7e43055118ebe4a4e098479f72cce99fd99e78af7e6160851229e) |
| 19:35:26 | 21 | JUP → SOL (native) | Executed | `0x3dd7841f…` [🐞](https://debug.barn.cow.fi/order/0x3dd7841f5ead7ad6a7661c863fa1fa30687fd9304f553bb5e496eff75b2834c0) |
| 19:35:26 | 21 | SC → SOL (native) | Executed | `0x3b013672…` [🐞](https://debug.barn.cow.fi/order/0x3b013672916d7d73f45c03aff628cc09f33485380bcbac5cc6945eb9590821bf) |
| 19:35:26 | 21 | APE → SOL (native) | Executed | `0x5c6c2c5d…` [🐞](https://debug.barn.cow.fi/order/0x5c6c2c5dcce541dcf3acf5227a3becd4962c02d0ef5d1011b0b9c036d618a1e1) |
| 19:35:26 | 21 | BELIEVE → SOL (native) | Executed | `0x92852a7b…` [🐞](https://debug.barn.cow.fi/order/0x92852a7b3f6e1a2d32301ec6ba7b9f5f3026efb444a5e2170a16c224f2e7d98c) |
| 19:35:27 | 21 | ENA → SOL (native) | Executed | `0x1ba5c018…` [🐞](https://debug.barn.cow.fi/order/0x1ba5c018b0a954d8eaae7280ce80ff42a4adb4de342b71c3f22c7db50f6b319d) |
| 19:35:27 | 21 | GOOGLx → SOL (native) | Executed | `0x08e4078b…` [🐞](https://debug.barn.cow.fi/order/0x08e4078b27adfecc855e8a10eaddc12b6d0bc8c52d128dafb30e91c0b4ccd5eb) |
| 19:35:27 | 21 | RDDT → SOL (native) | Executed | `0x2493b6c6…` [🐞](https://debug.barn.cow.fi/order/0x2493b6c693963a59d60d21dbf2db18563e4ae893b68a3fd06a519f4048b194fa) |
| 19:35:29 | 22 | JUP → SOL (native) | Executed | `0x865ff956…` [🐞](https://debug.barn.cow.fi/order/0x865ff9561fdf83593712a3f6a4868f169cc1d8f3fb1f309aaa0a6d2092c837ca) |
| 19:35:29 | 22 | GMEx → SOL (native) | Executed | `0xc6081a11…` [🐞](https://debug.barn.cow.fi/order/0xc6081a11b9eba0d4b7257cb00253d585beefa5e934a61d7a4fca95851c8fbdc8) |
| 19:35:30 | 23 | CARS → SOL (native) | Executed | `0x64dfb20a…` [🐞](https://debug.barn.cow.fi/order/0x64dfb20a80b5696d8073c8d36e5bb508fd2399a423e7718d49f200cd5e185184) |
| 19:35:31 | 23 | MPLX → SOL (native) | Executed | `0x12ff59df…` [🐞](https://debug.barn.cow.fi/order/0x12ff59df51e976fcbff4303cd999d572b5c558f5923f86aec6131959e4da66ac) |
| 19:35:31 | 23 | JUP → SOL (native) | Executed | `0xb3fc7646…` [🐞](https://debug.barn.cow.fi/order/0xb3fc7646d7b36a9b6d348dfcf2490065798d41cf959eed61ae70a6be03ec2204) |
| 19:35:33 | 23 | unc → SOL (native) | Executed | `0xcf931e98…` [🐞](https://debug.barn.cow.fi/order/0xcf931e98e5c5d6dfc3b1bf4660fd64f752efd3d14527f68b432933c89faaa7c8) |
| 19:35:39 | 24 | JUP → SOL (native) | Executed | `0x0823d740…` [🐞](https://debug.barn.cow.fi/order/0x0823d740b53282a932ffc4d0b5289cbf3a2ea0cc76653a92b489cb3f9a4f19ce) |
| 19:35:40 | 24 | crypto → SOL (native) | Executed | `0xb89d3e13…` [🐞](https://debug.barn.cow.fi/order/0xb89d3e13aa42a17c9f9d2f192148578b61fdf90dd950b1d9bd040e62dbc2ea8d) |
| 19:35:40 | 24 | VCHF → SOL (native) | Executed | `0x0ca28f6b…` [🐞](https://debug.barn.cow.fi/order/0x0ca28f6bbc1c87ee60d19b14a28546a1cc37f6667f4845f11ea2903a91de7fd9) |
| 19:35:40 | 24 | RNT → SOL (native) | Executed | `0xd5f3d191…` [🐞](https://debug.barn.cow.fi/order/0xd5f3d191c11dbd1e04e448951196d0429c05bcc10e50222673b4fd257ad4ea4d) |
| 19:35:41 | 25 | MELANIA → SOL (native) | Executed | `0xa5431bc0…` [🐞](https://debug.barn.cow.fi/order/0xa5431bc09b38efe046431f94a22fbee2a779acf33fbeec02e6dd79f1e3fb6df4) |
| 19:35:41 | 25 | RHEA → SOL (native) | Executed | `0xb002e355…` [🐞](https://debug.barn.cow.fi/order/0xb002e3554bb954c996f7562d71c6041a1b0110c3197b102fe616bff6b89ed07e) |
| 19:35:41 | 25 | JUP → SOL (native) | Executed | `0x41656c5a…` [🐞](https://debug.barn.cow.fi/order/0x41656c5a15c3ee784065c46d50208552686e375d9fdc8825e17f516d1f0a3e6c) |
| 19:35:41 | 25 | AMD → SOL (native) | Executed | `0x4257b3d3…` [🐞](https://debug.barn.cow.fi/order/0x4257b3d303a4d8f1e7e62a006bbd079478d56280cda020dc4d56507dc8a121b4) |
| 19:35:44 | 26 | MOBY → SOL (native) | Executed | `0x47772c62…` [🐞](https://debug.barn.cow.fi/order/0x47772c621786abb65ece5cfde0135aa73751d3c99c4c43636a8f438044290a61) |
| 19:35:44 | 26 | SOLO → SOL (native) | Executed | `0x3f186a07…` [🐞](https://debug.barn.cow.fi/order/0x3f186a07734e077be05158d03b79bfc48549582ee27341c9e758cf991bdaaac7) |
| 19:35:44 | 26 | CRCLx → SOL (native) | Executed | `0x42ccd5c1…` [🐞](https://debug.barn.cow.fi/order/0x42ccd5c161ea96da13dbf432ecbdf76c2bae697cfc35be9e8376346e09617d01) |
| 19:35:44 | 26 | MADE → SOL (native) | Executed | `0x50e34eb7…` [🐞](https://debug.barn.cow.fi/order/0x50e34eb71627bcb91778aedf3b318a29c5e962a6189b056fe9b28b60d62a5109) |
| 19:35:48 | 27 | UPT → SOL (native) | Executed | `0xe55dbd61…` [🐞](https://debug.barn.cow.fi/order/0xe55dbd618a66e5217f963ea60042a72a17bda15e6545002c0153dbec420a9df0) |
| 19:35:48 | 27 | swarms → SOL (native) | Executed | `0xdedd209f…` [🐞](https://debug.barn.cow.fi/order/0xdedd209fdfa38aee5d5cc22e9b2576bf6dfb31d4f85bd07a7bee6fddba9440ea) |
| 19:35:48 | 27 | DBR → SOL (native) | Executed | `0x73691f2a…` [🐞](https://debug.barn.cow.fi/order/0x73691f2a332b5c0a63b10c090783293a43066805a58644dcc68baf506a52fed3) |
| 19:35:49 | 27 | Clude → SOL (native) | Executed | `0x6778872e…` [🐞](https://debug.barn.cow.fi/order/0x6778872ebf8837282f1df018b66512d2e26e6b6540a2194a583241c986cce829) |
| 19:35:50 | 27 | TOAD → SOL (native) | Executed | `0xc8f4ceba…` [🐞](https://debug.barn.cow.fi/order/0xc8f4ceba4d8966bd2bb8c3d2c1836d3cfca575c3f3f9fe3b6fc30596dfebc115) |
| 19:35:50 | 28 | tremp → SOL (native) | Executed | `0xa390dcd7…` [🐞](https://debug.barn.cow.fi/order/0xa390dcd75b4731b4525bda68b9ae18d6d897334fd9ef3f17e1485c964419562b) |
| 19:35:51 | 28 | BULLISH → SOL (native) | Executed | `0xbabab02c…` [🐞](https://debug.barn.cow.fi/order/0xbabab02cded84990db5d0257b0310b3f9a33f420938c89ba86cf4cd565e49c7e) |
| 19:36:02 | 30 | RENDER → SOL (native) | Executed | `0xcb03c336…` [🐞](https://debug.barn.cow.fi/order/0xcb03c33664218caae3672944c7e26f96a7006a94f0b1a7ff42a416efd2a92961) |
| 19:36:02 | 30 | INF → SOL (native) | Executed | `0x9d662e56…` [🐞](https://debug.barn.cow.fi/order/0x9d662e5673262228469cc037841e507dcfb2b67aa245c10219f790da88e256d9) |
| 19:36:03 | 30 | POPCAT → SOL (native) | Executed | `0x3cd972f3…` [🐞](https://debug.barn.cow.fi/order/0x3cd972f3c9f9deb5293d58b1cf1f5c53f9e83380da66277ae1ebdce751607ac2) |
| 19:36:03 | 30 | GRND → SOL (native) | Executed | `0x38217d5a…` [🐞](https://debug.barn.cow.fi/order/0x38217d5acf293f94344384f1d6a154420a602edb530c97c599b940d54dc97448) |
| 19:36:37 | 16 | JUP → SOL (native) | Executed | `0x47f98eaa…` [🐞](https://debug.barn.cow.fi/order/0x47f98eaabbb7e39f8621b50c4b2befbf285c67488e18427a2d4970f17a9dc67b) |
| 19:36:38 | 16 | EMBER → SOL (native) | Executed | `0x82eacdf7…` [🐞](https://debug.barn.cow.fi/order/0x82eacdf7c2b582f62cdae2ceb581b946d9228d9acdd8356feed59907169a546b) |
| 19:36:39 | 16 | ZAUTH → SOL (native) | Executed | `0xd66983d4…` [🐞](https://debug.barn.cow.fi/order/0xd66983d4e831a86285df9e2009adc7fb8a5bb65c8c804b5c4520e4b800fe6da3) |
| 19:36:39 | 16 | TripleT → SOL (native) | Executed | `0x2cb57d2b…` [🐞](https://debug.barn.cow.fi/order/0x2cb57d2bd35c89173eb83fb15a5f0c9ea03adad8a5ae53b367728efdbd85ae90) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 110 | 95.7% |
| expired: never created on-chain (winner found, creation blockhash expired) | 5 | 4.3% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 5s | 7s | 16s | 31s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 110 | 100.0% | 110 | 108,982 | 5s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 202 | 196 | 181 | 92.3% | 4 | 10 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 4 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `in_flight`: 3 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 115 | 110 | 95.7% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 2 | 1 | 50.0% |
| wSOL → USDT | 2 | 1 | 50.0% |
| wSOL → USDG | 2 | 1 | 50.0% |
| wSOL → STONK | 2 | 2 | 100.0% |
| wSOL → ZEC | 2 | 1 | 50.0% |
| wSOL → JupUSD | 2 | 1 | 50.0% |
| wSOL → PYUSD | 2 | 2 | 100.0% |
| wSOL → USDe | 2 | 2 | 100.0% |
| wSOL → PUMP | 2 | 2 | 100.0% |
| wSOL → ETH | 2 | 2 | 100.0% |
| wSOL → BP | 2 | 2 | 100.0% |
| wSOL → CARDS | 2 | 2 | 100.0% |
| wSOL → RAY | 2 | 2 | 100.0% |
| wSOL → ANTFUN | 2 | 2 | 100.0% |
| wSOL → JitoSOL | 2 | 2 | 100.0% |
| wSOL → JupSOL | 2 | 2 | 100.0% |
| wSOL → OTC | 2 | 2 | 100.0% |
| wSOL → USX | 2 | 2 | 100.0% |
| wSOL → syrupUSDC | 2 | 2 | 100.0% |
| wSOL → TROLL | 2 | 2 | 100.0% |
| wSOL → GEOD | 2 | 2 | 100.0% |
| wSOL → ORE | 2 | 2 | 100.0% |
| wSOL → xSOL | 2 | 2 | 100.0% |
| wSOL → Fartcoin | 2 | 2 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| cbBTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HYPE | 1 | 1 | 100.0% |
| wSOL → CASH | 1 | 1 | 100.0% |
| HYPE → SOL (native) | 1 | 1 | 100.0% |
| STONK → SOL (native) | 1 | 1 | 100.0% |
| USDT → SOL (native) | 1 | 1 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| USDG → SOL (native) | 1 | 1 | 100.0% |
| wSOL → EMBER | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| wSOL → WBTC | 1 | 1 | 100.0% |
| BP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USELESS | 1 | 1 | 100.0% |
| ANSEM → SOL (native) | 1 | 1 | 100.0% |
| PUMP → SOL (native) | 1 | 1 | 100.0% |
| JupUSD → SOL (native) | 1 | 1 | 100.0% |
| USDe → SOL (native) | 1 | 1 | 100.0% |
| CASH → SOL (native) | 1 | 1 | 100.0% |
| USELESS → SOL (native) | 1 | 1 | 100.0% |
| ZEC → SOL (native) | 1 | 1 | 100.0% |
| ETH → SOL (native) | 1 | 1 | 100.0% |
| PYUSD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USD1 | 1 | 1 | 100.0% |
| WBTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JUP | 1 | 1 | 100.0% |
| wSOL → SPYx | 1 | 1 | 100.0% |
| USD1 → SOL (native) | 1 | 1 | 100.0% |
| SPYx → SOL (native) | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| RAY → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| SPCXx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PENGU | 1 | 1 | 100.0% |
| ANTFUN → SOL (native) | 1 | 1 | 100.0% |
| NVDAx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SPCX | 1 | 1 | 100.0% |
| CARDS → SOL (native) | 1 | 1 | 100.0% |
| PENGU → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| SPCX → SOL (native) | 1 | 1 | 100.0% |
| JLP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JEANPHIL | 1 | 1 | 100.0% |
| wSOL → MET | 1 | 1 | 100.0% |
| JitoSOL → SOL (native) | 1 | 1 | 100.0% |
| JEANPHIL → SOL (native) | 1 | 1 | 100.0% |
| MET → SOL (native) | 1 | 1 | 100.0% |
| OTC → SOL (native) | 1 | 1 | 100.0% |
| JupSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ONyc | 1 | 1 | 100.0% |
| wSOL → fone | 1 | 1 | 100.0% |
| wSOL → neet | 1 | 1 | 100.0% |
| fone → SOL (native) | 1 | 1 | 100.0% |
| neet → SOL (native) | 1 | 1 | 100.0% |
| syrupUSDC → SOL (native) | 1 | 1 | 100.0% |
| ONyc → SOL (native) | 1 | 1 | 100.0% |
| USX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| TROLL → SOL (native) | 1 | 1 | 100.0% |
| mSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GO | 1 | 1 | 100.0% |
| GEOD → SOL (native) | 1 | 1 | 100.0% |
| GO → SOL (native) | 1 | 1 | 100.0% |
| xSOL → SOL (native) | 1 | 1 | 100.0% |
| ORE → SOL (native) | 1 | 1 | 100.0% |
| Fartcoin → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 6 | 5 | 83.3% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 6 | 5 | 83.3% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 6 | 5 | 83.3% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 6 | 5 | 83.3% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 6 | 6 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 5 | 4 | 80.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 5 | 5 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 5 | 5 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 5 | 5 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 5 | 5 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 5 | 5 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 5 | 5 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 5 | 5 | 100.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 5 | 5 | 100.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 4 | 4 | 100.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 4 | 4 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 3 | 3 | 100.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 3 | 3 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 3 | 3 | 100.0% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 3 | 3 | 100.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 2 | 2 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 2 | 2 | 100.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 2 | 2 | 100.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 2 | 2 | 100.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 2 | 2 | 100.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 2 | 2 | 100.0% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 2 | 2 | 100.0% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 2 | 2 | 100.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 2 | 2 | 100.0% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 2 | 2 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 5 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 19:31:11 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x4e0bc916…` [🐞](https://debug.barn.cow.fi/order/0x4e0bc91628f429b4fb845e7915f7e078f5022b0f6d5b8de68d507658c718a459) |
| 19:31:14 | wSOL → USDT | market sell | Winner too late: creation blockhash expired | `0x23dad0c7…` [🐞](https://debug.barn.cow.fi/order/0x23dad0c732cb82ce65730fe8108c0137fc5b5c02f525ca0243b30e7e9bc4bc10) |
| 19:31:17 | wSOL → USDG | market sell | Winner too late: creation blockhash expired | `0xa2c93b82…` [🐞](https://debug.barn.cow.fi/order/0xa2c93b82c82bb57b9a400f6bf7e186f944c518a772281321768b133498c16478) |
| 19:31:26 | wSOL → ZEC | market sell | Winner too late: creation blockhash expired | `0x9a44ef8d…` [🐞](https://debug.barn.cow.fi/order/0x9a44ef8d6a2b5083416fdcb6dbfe3bf2448fac6fd7d0d3cc4bb173c04aadd067) |
| 19:31:30 | wSOL → JupUSD | market sell | Winner too late: creation blockhash expired | `0x614d1df3…` [🐞](https://debug.barn.cow.fi/order/0x614d1df30a73d4456272b67dea167dbdebcd049304ada19d96ed9df3cbca767b) |
