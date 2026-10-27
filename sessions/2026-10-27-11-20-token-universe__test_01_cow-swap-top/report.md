# Solana QoS report: 2026-10-27-11-20-token-universe__test_01_cow-swap-top

Barn, orders created between `2026-10-27T11:20:46.712Z` and `2026-10-27T11:27:40.637Z`. Data fetched 2026-10-27T11:30:18+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 122 |
| Orders executed | **118** (96.7%) |
| Sponsored orders never created on-chain | 4 (3.3%) |
| Traders | 30 |
| Settlement txs | 118 |

## Scenario

88 of 94 scenario rows completed. 0 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 11:20:46 | 1 | 1 | sell 0.005 SOL → EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v | filled | 18s | 1 |  |
| 11:21:04 | 2 | 1 | sell 0.492 EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v → SOL | filled | 45s | 2 |  |
| 11:20:50 | 3 | 2 | sell 0.005 SOL → Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB | filled | 15s | 1 |  |
| 11:21:05 | 4 | 2 | sell 0.492 Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB → SOL | filled | 49s | 2 |  |
| 11:20:54 | 5 | 3 | sell 0.005 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 14s | 1 |  |
| 11:21:09 | 6 | 3 | sell 0.491 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → SOL | filled | 54s | 2 |  |
| 11:20:58 | 7 | 4 | sell 0.005 SOL → 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx | filled | 15s | 1 |  |
| 11:21:13 | 8 | 4 | sell 3.45 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx → SOL | filled | 49s | 2 |  |
| 11:21:02 | 9 | 5 | sell 0.005 SOL → A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS | filled | 18s | 1 |  |
| 11:21:20 | 10 | 5 | sell 0.000405 A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS → SOL | filled | 38s | 2 |  |
| 11:21:06 | 11 | 6 | sell 0.005 SOL → JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD | filled | 13s | 1 |  |
| 11:21:19 | 12 | 6 | sell 0.492 JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD → SOL | filled | 44s | 2 |  |
| 11:21:10 | 13 | 7 | sell 0.005 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 13s | 1 |  |
| 11:21:24 | 14 | 7 | sell 0.491 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → SOL | failed | 14s | 0 | acquire 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:21:14 | 15 | 8 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 3s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:21:17 | 16 | 8 | sell 0.492 DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT → SOL | filled | 40s | 2 |  |
| 11:21:18 | 17 | 9 | sell 0.005 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 13s | 1 |  |
| 11:21:31 | 18 | 9 | sell 90.2 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn → SOL | filled | 43s | 2 |  |
| 11:21:22 | 19 | 10 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 14s | 1 |  |
| 11:21:37 | 20 | 10 | sell 5.93e-06 cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij → SOL | failed | 49s | 1 | acquire cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij expired |
| 11:21:26 | 21 | 11 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 17s | 1 |  |
| 11:21:43 | 22 | 11 | sell 0.000198 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs → SOL | filled | 49s | 2 |  |
| 11:21:30 | 23 | 12 | sell 0.005 SOL → BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy | filled | 14s | 1 |  |
| 11:21:44 | 24 | 12 | sell 0.401 BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy → SOL | filled | 14s | 1 |  |
| 11:21:34 | 25 | 13 | sell 0.005 SOL → 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g | filled | 14s | 1 |  |
| 11:21:49 | 26 | 13 | sell 0.00577 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g → SOL | filled | 40s | 2 |  |
| 11:21:38 | 27 | 14 | sell 0.005 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 21s | 1 |  |
| 11:21:59 | 28 | 14 | sell 0.492 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → SOL | filled | 39s | 2 |  |
| 11:21:42 | 29 | 15 | sell 0.005 SOL → CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp | filled | 51s | 1 |  |
| 11:22:33 | 30 | 15 | sell 1.7 CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp → SOL | filled | 20s | 1 |  |
| 11:21:46 | 31 | 16 | sell 0.005 SOL → 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 | filled | 18s | 1 |  |
| 11:22:04 | 32 | 16 | sell 81.5 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 → SOL | filled | 14s | 1 |  |
| 11:21:50 | 33 | 17 | sell 0.005 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 14s | 1 |  |
| 11:22:04 | 34 | 17 | sell 3.6 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → SOL | failed | 39s | 1 | main expired |
| 11:21:54 | 35 | 18 | sell 0.005 SOL → 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh | filled | 15s | 1 |  |
| 11:22:09 | 36 | 18 | sell 5.93e-06 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh → SOL | failed | 48s | 1 | acquire 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh expired |
| 11:21:58 | 37 | 19 | sell 0.005 SOL → Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk | filled | 14s | 1 |  |
| 11:22:12 | 38 | 19 | sell 2.58 Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk → SOL | filled | 41s | 2 |  |
| 11:22:02 | 39 | 20 | sell 0.005 SOL → 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R | filled | 17s | 1 |  |
| 11:22:19 | 40 | 20 | sell 0.207 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R → SOL | filled | 14s | 1 |  |
| 11:22:06 | 41 | 21 | sell 0.005 SOL → USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB | filled | 20s | 1 |  |
| 11:22:26 | 42 | 21 | sell 0.492 USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB → SOL | filled | 37s | 2 |  |
| 11:22:10 | 43 | 22 | sell 0.005 SOL → CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt | filled | 13s | 1 |  |
| 11:22:23 | 44 | 22 | sell 42 CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt → SOL | filled | 52s | 2 |  |
| 11:22:14 | 45 | 23 | sell 0.005 SOL → JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN | filled | 13s | 1 |  |
| 11:22:27 | 46 | 23 | sell 1.35 JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN → SOL | filled | 57s | 2 |  |
| 11:22:18 | 47 | 24 | sell 0.005 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 16s | 1 |  |
| 11:22:35 | 48 | 24 | sell 0.000629 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 40s | 2 |  |
| 11:22:22 | 49 | 25 | sell 0.005 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 15s | 1 |  |
| 11:22:37 | 50 | 25 | sell 0.003 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | filled | 47s | 2 |  |
| 11:22:26 | 51 | 26 | sell 0.005 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 13s | 1 |  |
| 11:22:39 | 52 | 26 | sell 0.00214 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | filled | 41s | 2 |  |
| 11:22:30 | 53 | 27 | sell 0.005 SOL → 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv | filled | 12s | 1 |  |
| 11:22:43 | 54 | 27 | sell 61.6 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv → SOL | filled | 40s | 2 |  |
| 11:22:34 | 55 | 28 | sell 0.005 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 17s | 1 |  |
| 11:22:51 | 56 | 28 | sell 0.00301 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb → SOL | filled | 43s | 2 |  |
| 11:22:38 | 57 | 29 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 15s | 1 |  |
| 11:22:53 | 58 | 29 | sell 0.00345 J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn → SOL | filled | 38s | 2 |  |
| 11:22:42 | 59 | 30 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 17s | 1 |  |
| 11:22:59 | 60 | 30 | sell 0.106 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 → SOL | filled | 38s | 2 |  |
| 11:22:46 | 61 | 1 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 17s | 1 |  |
| 11:23:03 | 62 | 1 | sell 0.00371 jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v → SOL | filled | 46s | 2 |  |
| 11:22:50 | 63 | 2 | sell 0.005 SOL → MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump | filled | 27s | 1 |  |
| 11:23:17 | 64 | 2 | sell 68.4 MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump → SOL | filled | 40s | 2 |  |
| 11:22:54 | 65 | 3 | sell 0.005 SOL → GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump | filled | 13s | 1 |  |
| 11:23:07 | 66 | 3 | sell 43.7 GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump → SOL | filled | 18s | 1 |  |
| 11:22:58 | 67 | 4 | sell 0.005 SOL → METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL | filled | 16s | 1 |  |
| 11:23:14 | 68 | 4 | sell 1.17 METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL → SOL | failed | 48s | 1 | acquire METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL expired |
| 11:23:02 | 69 | 5 | sell 0.005 SOL → 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG | filled | 17s | 1 |  |
| 11:23:19 | 70 | 5 | sell 0.492 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG → SOL | filled | 39s | 2 |  |
| 11:23:06 | 71 | 6 | sell 0.005 SOL → AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj | filled | 26s | 1 |  |
| 11:23:32 | 72 | 6 | sell 0.415 AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj → SOL | filled | 14s | 1 |  |
| 11:23:10 | 73 | 7 | sell 0.005 SOL → C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE | filled | 14s | 1 |  |
| 11:23:24 | 74 | 7 | sell 51.8 C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE → SOL | filled | 14s | 1 |  |
| 11:23:14 | 75 | 8 | sell 0.005 SOL → 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 | filled | 17s | 1 |  |
| 11:23:32 | 76 | 8 | sell 0.428 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 → SOL | filled | 37s | 2 |  |
| 11:23:18 | 77 | 9 | sell 0.005 SOL → CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump | filled | 13s | 1 |  |
| 11:23:32 | 78 | 9 | sell 107 CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump → SOL | filled | 17s | 1 |  |
| 11:23:22 | 79 | 10 | sell 0.005 SOL → 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 | filled | 17s | 1 |  |
| 11:23:40 | 80 | 10 | sell 12.7 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 → SOL | filled | 13s | 1 |  |
| 11:23:26 | 81 | 11 | sell 0.005 SOL → Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump | filled | 17s | 1 |  |
| 11:23:43 | 82 | 11 | sell 15.6 Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump → SOL | filled | 42s | 2 |  |
| 11:23:30 | 83 | 12 | sell 0.005 SOL → 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu | filled | 14s | 1 |  |
| 11:23:44 | 84 | 12 | sell 1.63 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu → SOL | filled | 40s | 2 |  |
| 11:23:34 | 85 | 13 | sell 0.005 SOL → oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp | filled | 14s | 1 |  |
| 11:23:49 | 86 | 13 | sell 0.0046 oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp → SOL | filled | 41s | 2 |  |
| 11:23:38 | 87 | 14 | sell 0.005 SOL → 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs | filled | 16s | 1 |  |
| 11:23:54 | 88 | 14 | sell 6.7 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs → SOL | filled | 16s | 1 |  |
| 11:23:42 | 89 | 15 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 14s | 1 |  |
| 11:23:56 | 90 | 15 | sell 0.00319 mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So → SOL | filled | 42s | 2 |  |
| 11:23:46 | 91 | 16 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 16s | 1 |  |
| 11:24:03 | 92 | 16 | sell 3.04 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump → SOL | filled | 16s | 1 |  |
| 11:23:50 | 93 | 17 | sell 0.005 SOL → D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n | filled | 13s | 1 |  |
| 11:24:03 | 94 | 17 | sell 3000 D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n → SOL | filled | 17s | 1 |  |

### Rows without an order

2 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | acquire | 1 | SOL → PYUSD | the transaction's blockhash is no longer valid, sign a fresh one |
| BlockhashExpired | main | 1 | SOL → USDe | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 122 (89 main, 33 acquire). Cleanup placed 9 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 11:24:53 | 3 | JEANPHIL → SOL (native) | Executed | `0xe6b26a7a…` [🐞](https://debug.barn.cow.fi/order/0xe6b26a7a331e3b097dc27d9fc5d1d98751567f9e0b8937fbd864c071cd33643a) |
| 11:24:54 | 4 | MET → SOL (native) | Executed | `0x90726ed4…` [🐞](https://debug.barn.cow.fi/order/0x90726ed479907bc93bba2c9c6a1e10a32d4c6bb800a173805a822b1254470180) |
| 11:24:55 | 7 | PYUSD → SOL (native) | Executed | `0xad0d3761…` [🐞](https://debug.barn.cow.fi/order/0xad0d376110a0758e950864d9d841469918e79496ff9f844fac08a5c99a05c30e) |
| 11:24:56 | 7 | HOOKED → SOL (native) | Executed | `0xf5787d3d…` [🐞](https://debug.barn.cow.fi/order/0xf5787d3d32d6494205cbe526283325145775e936902625efb926b912d145c026) |
| 11:24:59 | 10 | cbBTC → SOL (native) | Executed | `0x46fab7b9…` [🐞](https://debug.barn.cow.fi/order/0x46fab7b93d7c8a2032d5bce8fff4dd4c9547d350f476e8519a68236889ed39bd) |
| 11:25:14 | 16 | EMBER → SOL (native) | Executed | `0x266c88fc…` [🐞](https://debug.barn.cow.fi/order/0x266c88fcfc175d70a09274119775d0cdbb7596380de159d858fdf25e0a169ef7) |
| 11:25:14 | 17 | GO → SOL (native) | Executed | `0xb0d6378c…` [🐞](https://debug.barn.cow.fi/order/0xb0d6378c1c1306982274094dc27068ca5d9e4c1ac367057e29efec34639a955f) |
| 11:25:15 | 17 | ANSEM → SOL (native) | Executed | `0xb7dfe62f…` [🐞](https://debug.barn.cow.fi/order/0xb7dfe62f21f7be3a022a02169a36a4e37306ab2ca86d0239f01ead163ffac854) |
| 11:25:17 | 18 | WBTC → SOL (native) | Executed | `0x3907b97d…` [🐞](https://debug.barn.cow.fi/order/0x3907b97d23d5503747c610f6a3a1952bc4f37300bb3fdd75225a962e63606800) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 118 | 96.7% |
| expired: never created on-chain (winner found, creation blockhash expired) | 4 | 3.3% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 9s | 10s | 12s | 43s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 66 | 55.9% | 66 | 99,984 | 8s |
| GCBB…o5VC | 25 | 21.2% | 25 | 83,656 | 9s |
| AuwL…YzVj | 17 | 14.4% | 17 | 197,909 | 9s |
| 883X…8aGz | 7 | 5.9% | 7 | 164,652 | 9s |
| 9CHj…Rb7v | 2 | 1.7% | 2 | 65,508 | 9s |
| FKtU…4q3H | 1 | 0.8% | 1 | 123,782 | 10s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| kaisersolver | 109 | 84 | 78 | 92.9% | 2 | 0 | 0 | 0 |
| asao | 110 | 30 | 28 | 93.3% | 1 | 1 | 0 | 0 |
| grafiks | 86 | 21 | 18 | 85.7% | 2 | 1 | 0 | 0 |
| helixbox | 17 | 3 | 2 | 66.7% | 1 | 0 | 0 | 0 |
| zurui | 1 | 1 | 1 | 100.0% | 0 | 0 | 0 | 0 |
| rosato | 3 | 1 | 0 | 0.0% | 1 | 0 | 14 | 0 |
| jupiter-solve | 102 | 0 | 0 | – | 3 | 0 | 0 | 0 |
| paradox | 1 | 0 | 0 | – | 0 | 0 | 46 | 0 |
| arc | 42 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| rizzolver | 0 | 0 | 0 | – | 0 | 0 | 71 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 71 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 3 |
| grafiks: SimulationFailed | 2 |
| kaisersolver: SimulationFailed | 2 |
| helixbox: SimulationFailed | 1 |
| asao: SimulationFailed | 1 |
| rosato: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `in_flight`: 46 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 122 | 118 | 96.7% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 2 | 2 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 2 | 100.0% |
| wSOL → STONK | 2 | 2 | 100.0% |
| wSOL → ZEC | 2 | 2 | 100.0% |
| wSOL → JupUSD | 2 | 2 | 100.0% |
| wSOL → PUMP | 2 | 2 | 100.0% |
| wSOL → cbBTC | 2 | 1 | 50.0% |
| wSOL → ETH | 2 | 2 | 100.0% |
| wSOL → HYPE | 2 | 2 | 100.0% |
| wSOL → CASH | 2 | 2 | 100.0% |
| wSOL → WBTC | 2 | 1 | 50.0% |
| wSOL → USELESS | 2 | 2 | 100.0% |
| wSOL → USD1 | 2 | 2 | 100.0% |
| wSOL → ANTFUN | 2 | 2 | 100.0% |
| wSOL → JUP | 2 | 2 | 100.0% |
| wSOL → SPYx | 2 | 2 | 100.0% |
| wSOL → SPCXx | 2 | 2 | 100.0% |
| wSOL → NVDAx | 2 | 2 | 100.0% |
| wSOL → PENGU | 2 | 2 | 100.0% |
| wSOL → SPCX | 2 | 2 | 100.0% |
| wSOL → JitoSOL | 2 | 2 | 100.0% |
| wSOL → JLP | 2 | 2 | 100.0% |
| wSOL → JupSOL | 2 | 2 | 100.0% |
| wSOL → OTC | 2 | 2 | 100.0% |
| wSOL → MET | 2 | 1 | 50.0% |
| wSOL → USX | 2 | 2 | 100.0% |
| wSOL → ONyc | 2 | 2 | 100.0% |
| wSOL → neet | 2 | 2 | 100.0% |
| wSOL → GEOD | 2 | 2 | 100.0% |
| wSOL → ORE | 2 | 2 | 100.0% |
| wSOL → mSOL | 2 | 2 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → BP | 1 | 1 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| USDT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CARDS | 1 | 1 | 100.0% |
| USDe → SOL (native) | 1 | 1 | 100.0% |
| ZEC → SOL (native) | 1 | 1 | 100.0% |
| BP → SOL (native) | 1 | 1 | 100.0% |
| STONK → SOL (native) | 1 | 1 | 100.0% |
| USDG → SOL (native) | 1 | 1 | 100.0% |
| JupUSD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → EMBER | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| PUMP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RAY | 1 | 1 | 100.0% |
| ANSEM → SOL (native) | 1 | 0 | 0.0% |
| EMBER → SOL (native) | 1 | 1 | 100.0% |
| HYPE → SOL (native) | 1 | 1 | 100.0% |
| ETH → SOL (native) | 1 | 1 | 100.0% |
| RAY → SOL (native) | 1 | 1 | 100.0% |
| CASH → SOL (native) | 1 | 1 | 100.0% |
| USELESS → SOL (native) | 1 | 1 | 100.0% |
| CARDS → SOL (native) | 1 | 1 | 100.0% |
| USD1 → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JEANPHIL | 1 | 1 | 100.0% |
| SPYx → SOL (native) | 1 | 1 | 100.0% |
| ANTFUN → SOL (native) | 1 | 1 | 100.0% |
| NVDAx → SOL (native) | 1 | 1 | 100.0% |
| SPCXx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → syrupUSDC | 1 | 1 | 100.0% |
| JEANPHIL → SOL (native) | 1 | 1 | 100.0% |
| PENGU → SOL (native) | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HOOKED | 1 | 1 | 100.0% |
| SPCX → SOL (native) | 1 | 1 | 100.0% |
| JitoSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → fone | 1 | 1 | 100.0% |
| wSOL → TROLL | 1 | 1 | 100.0% |
| JLP → SOL (native) | 1 | 1 | 100.0% |
| HOOKED → SOL (native) | 1 | 1 | 100.0% |
| fone → SOL (native) | 1 | 1 | 100.0% |
| JupSOL → SOL (native) | 1 | 1 | 100.0% |
| syrupUSDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → xSOL | 1 | 1 | 100.0% |
| TROLL → SOL (native) | 1 | 1 | 100.0% |
| USX → SOL (native) | 1 | 1 | 100.0% |
| OTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → GO | 1 | 1 | 100.0% |
| xSOL → SOL (native) | 1 | 1 | 100.0% |
| ONyc → SOL (native) | 1 | 1 | 100.0% |
| Fartcoin → SOL (native) | 1 | 1 | 100.0% |
| GO → SOL (native) | 1 | 1 | 100.0% |
| neet → SOL (native) | 1 | 1 | 100.0% |
| GEOD → SOL (native) | 1 | 1 | 100.0% |
| ORE → SOL (native) | 1 | 1 | 100.0% |
| mSOL → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 6 | 6 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 6 | 6 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 6 | 6 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 6 | 6 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 6 | 6 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 5 | 5 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 5 | 4 | 80.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 5 | 5 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 5 | 5 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 5 | 5 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 5 | 5 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 5 | 5 | 100.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 5 | 5 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 4 | 3 | 75.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 4 | 4 | 100.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 4 | 3 | 75.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 3 | 3 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 3 | 3 | 100.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 3 | 3 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 3 | 3 | 100.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 3 | 3 | 100.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 3 | 3 | 100.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 3 | 3 | 100.0% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 3 | 3 | 100.0% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 3 | 3 | 100.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 3 | 3 | 100.0% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 3 | 3 | 100.0% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 3 | 3 | 100.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 2 | 1 | 50.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 2 | 2 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 4 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 11:21:51 | wSOL → cbBTC | market sell | Winner too late: creation blockhash expired | `0xddd17aaf…` [🐞](https://debug.barn.cow.fi/order/0xddd17aaffd349cd94411259ebdd46fc57991ab905922876538dcceae16eaeeba) |
| 11:22:08 | ANSEM → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x7908659f…` [🐞](https://debug.barn.cow.fi/order/0x7908659fc2ad316aaadf964c913d68f60d953015e18d1c8bd3ea1ec2ccbdc7b0) |
| 11:22:23 | wSOL → WBTC | market sell | Winner too late: creation blockhash expired | `0x5ebe7951…` [🐞](https://debug.barn.cow.fi/order/0x5ebe7951345a5e43cb5861598646dd14fc04e7d687d1809ca5c33adf62e5276d) |
| 11:23:28 | wSOL → MET | market sell | Winner too late: creation blockhash expired | `0xce65c813…` [🐞](https://debug.barn.cow.fi/order/0xce65c813d41e1e3e930414f53938ef7368b7214a2bbd9759a9602ba0d193b266) |
