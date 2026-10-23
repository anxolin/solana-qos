# Solana QoS report: 2026-10-23-22-15-token-universe__test_01_cow-swap-top

Barn, orders created between `2026-10-23T22:16:07.788Z` and `2026-10-23T22:21:16.602Z`. Data fetched 2026-10-23T22:22:53+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 102 |
| Orders executed | **82** (80.4%) |
| Sponsored orders never created on-chain | 20 (19.6%) |
| Traders | 30 |
| Settlement txs | 82 |

## Scenario

73 of 94 scenario rows completed. 0 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 22:16:07 | 1 | 1 | sell 0.005 SOL → EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v | filled | 5s | 1 |  |
| 22:16:12 | 2 | 1 | sell 0.492 EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v → SOL | filled | 7s | 1 |  |
| 22:16:08 | 3 | 2 | sell 0.005 SOL → Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB | filled | 25s | 1 |  |
| 22:16:34 | 4 | 2 | sell 0.492 Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB → SOL | filled | 9s | 1 |  |
| 22:16:09 | 5 | 3 | sell 0.005 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 22s | 1 |  |
| 22:16:31 | 6 | 3 | sell 0.491 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → SOL | filled | 9s | 1 |  |
| 22:16:10 | 7 | 4 | sell 0.005 SOL → 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx | filled | 17s | 1 |  |
| 22:16:27 | 8 | 4 | sell 3.45 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx → SOL | filled | 22s | 1 |  |
| 22:16:11 | 9 | 5 | sell 0.005 SOL → A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS | filled | 10s | 1 |  |
| 22:16:22 | 10 | 5 | sell 0.000405 A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS → SOL | filled | 8s | 1 |  |
| 22:16:12 | 11 | 6 | sell 0.005 SOL → JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD | filled | 4s | 1 |  |
| 22:16:16 | 12 | 6 | sell 0.492 JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD → SOL | filled | 11s | 1 |  |
| 22:16:13 | 13 | 7 | sell 0.005 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 10s | 1 |  |
| 22:16:24 | 14 | 7 | sell 0.491 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → SOL | filled | 9s | 1 |  |
| 22:16:14 | 15 | 8 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 13s | 1 |  |
| 22:16:28 | 16 | 8 | sell 0.492 DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT → SOL | filled | 6s | 1 |  |
| 22:16:15 | 17 | 9 | sell 0.005 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 33s | 1 |  |
| 22:16:48 | 18 | 9 | sell 90.2 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn → SOL | filled | 12s | 1 |  |
| 22:16:16 | 19 | 10 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 7s | 1 |  |
| 22:16:24 | 20 | 10 | sell 5.93e-06 cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij → SOL | filled | 85s | 1 |  |
| 22:16:17 | 21 | 11 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 12s | 1 |  |
| 22:16:29 | 22 | 11 | sell 0.000198 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs → SOL | failed | 43s | 1 | main expired |
| 22:16:18 | 23 | 12 | sell 0.005 SOL → BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 22:16:19 | 24 | 12 | sell 0.401 BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy → SOL | failed | 53s | 2 | main expired |
| 22:16:19 | 25 | 13 | sell 0.005 SOL → 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g | filled | 12s | 1 |  |
| 22:16:31 | 26 | 13 | sell 0.00577 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g → SOL | filled | 9s | 1 |  |
| 22:16:20 | 27 | 14 | sell 0.005 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 8s | 1 |  |
| 22:16:28 | 28 | 14 | sell 0.492 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → SOL | filled | 16s | 1 |  |
| 22:16:21 | 29 | 15 | sell 0.005 SOL → CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp | filled | 9s | 1 |  |
| 22:16:30 | 30 | 15 | sell 1.7 CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp → SOL | failed | 62s | 2 | main expired |
| 22:16:22 | 31 | 16 | sell 0.005 SOL → 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 | filled | 8s | 1 |  |
| 22:16:30 | 32 | 16 | sell 81.5 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 → SOL | filled | 8s | 1 |  |
| 22:16:23 | 33 | 17 | sell 0.005 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 9s | 1 |  |
| 22:16:32 | 34 | 17 | sell 3.6 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → SOL | filled | 24s | 1 |  |
| 22:16:24 | 35 | 18 | sell 0.005 SOL → 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh | filled | 10s | 1 |  |
| 22:16:34 | 36 | 18 | sell 5.93e-06 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh → SOL | filled | 20s | 1 |  |
| 22:16:25 | 37 | 19 | sell 0.005 SOL → Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk | filled | 5s | 1 |  |
| 22:16:31 | 38 | 19 | sell 2.58 Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk → SOL | filled | 9s | 1 |  |
| 22:16:26 | 39 | 20 | sell 0.005 SOL → 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R | filled | 6s | 1 |  |
| 22:16:32 | 40 | 20 | sell 0.207 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R → SOL | failed | 37s | 1 | main expired |
| 22:16:27 | 41 | 21 | sell 0.005 SOL → USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB | filled | 6s | 1 |  |
| 22:16:33 | 42 | 21 | sell 0.492 USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB → SOL | filled | 9s | 1 |  |
| 22:16:28 | 43 | 22 | sell 0.005 SOL → CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt | filled | 20s | 1 |  |
| 22:16:48 | 44 | 22 | sell 42 CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt → SOL | failed | 44s | 1 | acquire CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt expired |
| 22:16:29 | 45 | 23 | sell 0.005 SOL → JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN | failed | 37s | 1 | main expired |
| 22:17:06 | 46 | 23 | sell 1.35 JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN → SOL | failed | 40s | 1 | acquire JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN expired |
| 22:16:30 | 47 | 24 | sell 0.005 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 34s | 1 | main expired |
| 22:17:04 | 48 | 24 | sell 0.000629 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | failed | 43s | 1 | acquire XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W expired |
| 22:16:31 | 49 | 25 | sell 0.005 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 38s | 1 | main expired |
| 22:17:09 | 50 | 25 | sell 0.003 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | filled | 30s | 2 |  |
| 22:16:32 | 51 | 26 | sell 0.005 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 31s | 1 |  |
| 22:17:03 | 52 | 26 | sell 0.00214 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | filled | 11s | 1 |  |
| 22:16:33 | 53 | 27 | sell 0.005 SOL → 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv | failed | 40s | 1 | main expired |
| 22:17:13 | 54 | 27 | sell 61.6 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv → SOL | filled | 34s | 2 |  |
| 22:16:34 | 55 | 28 | sell 0.005 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 37s | 1 | main expired |
| 22:17:11 | 56 | 28 | sell 0.00301 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb → SOL | filled | 46s | 2 |  |
| 22:16:35 | 57 | 29 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 8s | 1 |  |
| 22:16:44 | 58 | 29 | sell 0.00345 J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn → SOL | failed | 36s | 1 | main expired |
| 22:16:36 | 59 | 30 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 36s | 1 | main expired |
| 22:17:13 | 60 | 30 | sell 0.106 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 → SOL | filled | 41s | 2 |  |
| 22:16:19 | 61 | 1 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 12s | 1 |  |
| 22:16:30 | 62 | 1 | sell 0.00371 jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v → SOL | filled | 9s | 1 |  |
| 22:16:43 | 63 | 2 | sell 0.005 SOL → MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump | filled | 10s | 1 |  |
| 22:16:52 | 64 | 2 | sell 68.4 MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump → SOL | filled | 64s | 2 |  |
| 22:16:40 | 65 | 3 | sell 0.005 SOL → GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump | filled | 11s | 1 |  |
| 22:16:51 | 66 | 3 | sell 43.7 GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump → SOL | filled | 9s | 1 |  |
| 22:16:50 | 67 | 4 | sell 0.005 SOL → METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL | filled | 15s | 1 |  |
| 22:17:05 | 68 | 4 | sell 1.17 METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL → SOL | filled | 34s | 1 |  |
| 22:16:30 | 69 | 5 | sell 0.005 SOL → 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG | filled | 8s | 1 |  |
| 22:16:38 | 70 | 5 | sell 0.492 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG → SOL | filled | 20s | 1 |  |
| 22:16:27 | 71 | 6 | sell 0.005 SOL → AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj | filled | 5s | 1 |  |
| 22:16:32 | 72 | 6 | sell 0.415 AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj → SOL | filled | 13s | 1 |  |
| 22:16:33 | 73 | 7 | sell 0.005 SOL → C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE | filled | 17s | 1 |  |
| 22:16:50 | 74 | 7 | sell 51.8 C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE → SOL | failed | 35s | 1 | main expired |
| 22:16:34 | 75 | 8 | sell 0.005 SOL → 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 | failed | 37s | 1 | main expired |
| 22:17:11 | 76 | 8 | sell 0.428 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 → SOL | filled | 36s | 2 |  |
| 22:17:00 | 77 | 9 | sell 0.005 SOL → CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump | failed | 37s | 1 | main expired |
| 22:17:37 | 78 | 9 | sell 107 CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump → SOL | filled | 27s | 2 |  |
| 22:17:49 | 79 | 10 | sell 0.005 SOL → 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 | filled | 8s | 1 |  |
| 22:17:57 | 80 | 10 | sell 12.7 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 → SOL | filled | 7s | 1 |  |
| 22:17:12 | 81 | 11 | sell 0.005 SOL → Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump | filled | 8s | 1 |  |
| 22:17:20 | 82 | 11 | sell 15.6 Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump → SOL | filled | 17s | 1 |  |
| 22:17:12 | 83 | 12 | sell 0.005 SOL → 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu | filled | 14s | 1 |  |
| 22:17:25 | 84 | 12 | sell 1.63 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu → SOL | filled | 19s | 1 |  |
| 22:16:40 | 85 | 13 | sell 0.005 SOL → oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp | filled | 11s | 1 |  |
| 22:16:51 | 86 | 13 | sell 0.0046 oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp → SOL | failed | 44s | 1 | acquire oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp expired |
| 22:16:44 | 87 | 14 | sell 0.005 SOL → 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs | filled | 23s | 1 |  |
| 22:17:07 | 88 | 14 | sell 6.7 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs → SOL | failed | 36s | 1 | main expired |
| 22:17:32 | 89 | 15 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 20s | 1 |  |
| 22:17:52 | 90 | 15 | sell 0.00319 mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So → SOL | filled | 7s | 1 |  |
| 22:16:39 | 91 | 16 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 18s | 1 |  |
| 22:16:57 | 92 | 16 | sell 3.04 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump → SOL | failed | 37s | 1 | main expired |
| 22:16:56 | 93 | 17 | sell 0.005 SOL → D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n | filled | 12s | 1 |  |
| 22:17:08 | 94 | 17 | sell 3000 D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n → SOL | filled | 7s | 1 |  |

### Rows without an order

1 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 1 | SOL → BP | no route found |

Scenario orders: 102 (89 main, 13 acquire). Cleanup placed 18 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 22:18:08 | 3 | JEANPHIL → SOL (native) | Executed | `0x9e355317…` [🐞](https://debug.barn.cow.fi/order/0x9e35531713809c78378bdaed1f0e99dca3ed0cf38297867259d1535b7eb2b056) |
| 22:18:10 | 4 | STONK → SOL (native) | Executed | `0xa0851370…` [🐞](https://debug.barn.cow.fi/order/0xa0851370a2f24059c0b7e39e081279bf786a1100152c828a9102b40c50615a34) |
| 22:18:14 | 7 | HOOKED → SOL (native) | Executed | `0xaeef43a5…` [🐞](https://debug.barn.cow.fi/order/0xaeef43a56e81322708fdb13694fdc484a5a014b3329ad75b80ab1a96ede08abb) |
| 22:18:15 | 9 | PUMP → SOL (native) | Executed | `0x9cebb075…` [🐞](https://debug.barn.cow.fi/order/0x9cebb075415eed20849f6de0d00a447a7f5035eeb2bfac3b7914454344cd2e69) |
| 22:18:16 | 10 | TROLL → SOL (native) | Executed | `0x5d858dd1…` [🐞](https://debug.barn.cow.fi/order/0x5d858dd11c341953349770416aa1f4281443b94f48144ee48c0a660639ba3155) |
| 22:18:19 | 12 | GEOD → SOL (native) | Executed | `0x837f6882…` [🐞](https://debug.barn.cow.fi/order/0x837f6882a4aeba36e34a1b40cc55e1299b60317ea2670aaa8fc83e99a1545fb2) |
| 22:18:19 | 12 | BP → SOL (native) | Executed | `0x5136e2b3…` [🐞](https://debug.barn.cow.fi/order/0x5136e2b3c33345ca2f2460ab89ab5847917876b6468a0015f50ab1231d39d510) |
| 22:18:22 | 13 | ORE → SOL (native) | Executed | `0xd0a2de06…` [🐞](https://debug.barn.cow.fi/order/0xd0a2de06b99a6852dad111603317c20cc9f596a639a1a2e22f83fcc924a54d6e) |
| 22:18:24 | 14 | xSOL → SOL (native) | Executed | `0x6fae2a59…` [🐞](https://debug.barn.cow.fi/order/0x6fae2a597769cb9d849a74c7afafd3a9b7dded7de6270b3f133d43bf5cce27b2) |
| 22:18:27 | 15 | CARDS → SOL (native) | Executed | `0xd7742492…` [🐞](https://debug.barn.cow.fi/order/0xd77424923027d44646ae449c02617279b2ccb5b5dfbc3b8cb0352ca84587dc04) |
| 22:18:29 | 16 | Fartcoin → SOL (native) | Executed | `0x09561c8d…` [🐞](https://debug.barn.cow.fi/order/0x09561c8dc5f91cd7c3ac281fbccb3f8e0873a55c128cca994609fddf76ae67cb) |
| 22:18:29 | 16 | EMBER → SOL (native) | Executed | `0x6dc0129e…` [🐞](https://debug.barn.cow.fi/order/0x6dc0129e23de56f40d78a2bf584b0c89d45402215b1481d2051c9a0f7e6643f6) |
| 22:18:31 | 17 | GO → SOL (native) | Executed | `0xbd269839…` [🐞](https://debug.barn.cow.fi/order/0xbd269839ab005c261eec9d280dd60f74279d47b70132bf4101390eaad4d0be29) |
| 22:18:32 | 17 | ANSEM → SOL (native) | Executed | `0x81efa167…` [🐞](https://debug.barn.cow.fi/order/0x81efa1676a20f09be09affb3a5b1e18bd00a0f8d1caa63e982cc0f34ae2a7c60) |
| 22:18:38 | 20 | RAY → SOL (native) | Executed | `0x5d2a66fd…` [🐞](https://debug.barn.cow.fi/order/0x5d2a66fd12baaff4b2bff78ae92cbaa3acc779d8be915d284fb5e32982e3b9b3) |
| 22:18:41 | 22 | ANTFUN → SOL (native) | Executed | `0x456df715…` [🐞](https://debug.barn.cow.fi/order/0x456df71535e9300524cad41d95936e231057aad90462cc3881dca61a6f6da2bb) |
| 22:18:54 | 29 | JitoSOL → SOL (native) | Executed | `0x8dbb93ad…` [🐞](https://debug.barn.cow.fi/order/0x8dbb93adce59c8894ea15958870be5743ddbc57418758022677cb0ba39fcdb43) |
| 22:19:45 | 11 | ETH → SOL (native) | Executed | `0x4b9175aa…` [🐞](https://debug.barn.cow.fi/order/0x4b9175aa20d1b5abdbfb21c2936eaea656830c55444e20084ec6ff6da4796232) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 82 | 80.4% |
| expired: never created on-chain (winner found, creation blockhash expired) | 20 | 19.6% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 6s | 13s | 18s | 80s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 82 | 100.0% | 82 | 104,233 | 6s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 114 | 114 | 100 | 87.7% | 8 | 0 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 7 |
| jupiter-solve: FailedToCreate | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 2
- Orders filtered for `unfunded_sell_token_account`: 51 times
- Orders filtered for `in_flight`: 1 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 102 | 82 | 80.4% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → CARDS | 2 | 2 | 100.0% |
| wSOL → ANTFUN | 2 | 1 | 50.0% |
| wSOL → JUP | 2 | 0 | 0.0% |
| wSOL → SPYx | 2 | 0 | 0.0% |
| wSOL → SPCXx | 2 | 1 | 50.0% |
| wSOL → PENGU | 2 | 1 | 50.0% |
| wSOL → ONyc | 2 | 1 | 50.0% |
| wSOL → SPCX | 2 | 1 | 50.0% |
| wSOL → JLP | 2 | 1 | 50.0% |
| wSOL → ORE | 2 | 1 | 50.0% |
| wSOL → OTC | 2 | 2 | 100.0% |
| wSOL → fone | 2 | 1 | 50.0% |
| wSOL → USDC | 1 | 1 | 100.0% |
| wSOL → USDT | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → STONK | 1 | 1 | 100.0% |
| wSOL → ZEC | 1 | 1 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JupUSD | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| JupUSD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → HYPE | 1 | 1 | 100.0% |
| wSOL → CASH | 1 | 1 | 100.0% |
| ZEC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → EMBER | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| PYUSD → SOL (native) | 1 | 1 | 100.0% |
| cbBTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → WBTC | 1 | 1 | 100.0% |
| wSOL → BP | 1 | 1 | 100.0% |
| wSOL → USELESS | 1 | 1 | 100.0% |
| wSOL → RAY | 1 | 1 | 100.0% |
| wSOL → syrupUSDC | 1 | 1 | 100.0% |
| STONK → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USD1 | 1 | 1 | 100.0% |
| USDe → SOL (native) | 1 | 1 | 100.0% |
| CASH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USX | 1 | 1 | 100.0% |
| EMBER → SOL (native) | 1 | 1 | 100.0% |
| JupSOL → SOL (native) | 1 | 1 | 100.0% |
| USELESS → SOL (native) | 1 | 1 | 100.0% |
| USDG → SOL (native) | 1 | 1 | 100.0% |
| HYPE → SOL (native) | 1 | 1 | 100.0% |
| RAY → SOL (native) | 1 | 0 | 0.0% |
| ANSEM → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| syrupUSDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HOOKED | 1 | 1 | 100.0% |
| USD1 → SOL (native) | 1 | 1 | 100.0% |
| USDT → SOL (native) | 1 | 1 | 100.0% |
| WBTC → SOL (native) | 1 | 1 | 100.0% |
| BP → SOL (native) | 1 | 0 | 0.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| ETH → SOL (native) | 1 | 0 | 0.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → JEANPHIL | 1 | 1 | 100.0% |
| JitoSOL → SOL (native) | 1 | 0 | 0.0% |
| wSOL → xSOL | 1 | 1 | 100.0% |
| USX → SOL (native) | 1 | 1 | 100.0% |
| PUMP → SOL (native) | 1 | 1 | 100.0% |
| HOOKED → SOL (native) | 1 | 0 | 0.0% |
| wSOL → MET | 1 | 1 | 100.0% |
| JEANPHIL → SOL (native) | 1 | 1 | 100.0% |
| CARDS → SOL (native) | 1 | 0 | 0.0% |
| wSOL → GO | 1 | 1 | 100.0% |
| Fartcoin → SOL (native) | 1 | 0 | 0.0% |
| NVDAx → SOL (native) | 1 | 1 | 100.0% |
| MET → SOL (native) | 1 | 1 | 100.0% |
| xSOL → SOL (native) | 1 | 0 | 0.0% |
| GO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GEOD | 1 | 1 | 100.0% |
| wSOL → neet | 1 | 1 | 100.0% |
| neet → SOL (native) | 1 | 1 | 100.0% |
| SPCXx → SOL (native) | 1 | 1 | 100.0% |
| GEOD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| PENGU → SOL (native) | 1 | 1 | 100.0% |
| ONyc → SOL (native) | 1 | 1 | 100.0% |
| OTC → SOL (native) | 1 | 1 | 100.0% |
| JLP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TROLL | 1 | 1 | 100.0% |
| SPCX → SOL (native) | 1 | 1 | 100.0% |
| mSOL → SOL (native) | 1 | 1 | 100.0% |
| fone → SOL (native) | 1 | 1 | 100.0% |
| TROLL → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 5 | 5 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 5 | 4 | 80.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 5 | 4 | 80.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 5 | 4 | 80.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 4 | 4 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 4 | 4 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 4 | 4 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 4 | 4 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 4 | 4 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 4 | 3 | 75.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 4 | 4 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 4 | 3 | 75.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 4 | 3 | 75.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 4 | 3 | 75.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 4 | 3 | 75.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 4 | 4 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 4 | 3 | 75.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 3 | 2 | 66.7% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 3 | 2 | 66.7% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 3 | 2 | 66.7% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 3 | 2 | 66.7% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 2 | 2 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 2 | 2 | 100.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 2 | 1 | 50.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 2 | 2 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 2 | 1 | 50.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 2 | 0 | 0.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 2 | 0 | 0.0% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 2 | 2 | 100.0% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 2 | 1 | 50.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 19 | 0 |
| Creation tx rejected: blockhash not found | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 22:16:31 | wSOL → JUP | market sell | Winner too late: creation blockhash expired | `0x91e23329…` [🐞](https://debug.barn.cow.fi/order/0x91e23329825d3b49a15444560191df0027b40f00096f46f0ab048798bd492c8f) |
| 22:16:32 | wSOL → SPYx | market sell | Winner too late: creation blockhash expired | `0x2ea37104…` [🐞](https://debug.barn.cow.fi/order/0x2ea371046056d534a6434332eae58b9699d2770fbe223fa8f22b88578e7b5699) |
| 22:16:33 | wSOL → SPCXx | market sell | Winner too late: creation blockhash expired | `0xef0e8f2c…` [🐞](https://debug.barn.cow.fi/order/0xef0e8f2c77cac5541395c2696d30fec91b6d2fc37fb45ad00d641341b036c22d) |
| 22:16:34 | RAY → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xd9b96807…` [🐞](https://debug.barn.cow.fi/order/0xd9b968070e074d97e266a3b5c621e542d92b0b288fbbde5a25a5af64a3448168) |
| 22:16:36 | wSOL → PENGU | market sell | Winner too late: creation blockhash expired | `0x322b2945…` [🐞](https://debug.barn.cow.fi/order/0x322b294545d649672ac5b5c1ad46222a77a4900f3b23f0834f636417f9819c08) |
| 22:16:37 | wSOL → ONyc | market sell | Winner too late: creation blockhash expired | `0xbfde32f6…` [🐞](https://debug.barn.cow.fi/order/0xbfde32f6dd8972c099e0f1b0fdb82b14963b79950eef849196666e8d033ff886) |
| 22:16:37 | BP → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xf229c33c…` [🐞](https://debug.barn.cow.fi/order/0xf229c33c157a53e9ca6750e2595912491d2fe6385994ddbe00a59ec28a4489c7) |
| 22:16:38 | wSOL → SPCX | market sell | Winner too late: creation blockhash expired | `0x999debed…` [🐞](https://debug.barn.cow.fi/order/0x999debed6203fc74327dde2d5207dee6de33fd2c4790567eb9e8e8f4bcc40052) |
| 22:16:38 | ETH → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x536b93a6…` [🐞](https://debug.barn.cow.fi/order/0x536b93a62fcfffc97e47e2c9415a58a4b274e7250dece79adcc9e0480807cbc5) |
| 22:16:39 | wSOL → JLP | market sell | Creation tx rejected: blockhash not found | `0xb8b29749…` [🐞](https://debug.barn.cow.fi/order/0xb8b29749b66f413d0ce101263303477862d498ad46503c59f3e33f6630d4a40e) |
| 22:16:45 | JitoSOL → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x5d6c1d92…` [🐞](https://debug.barn.cow.fi/order/0x5d6c1d92c89138e233e229f5eb013624a15b69e780d24873338ed2f8d6b266de) |
| 22:16:50 | HOOKED → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xa0b4b419…` [🐞](https://debug.barn.cow.fi/order/0xa0b4b4198903b71236e5681a9936840da4b17cf5f342a66411bf9a4ce559e2c5) |
| 22:16:56 | wSOL → ANTFUN | market sell | Winner too late: creation blockhash expired | `0x88fb085a…` [🐞](https://debug.barn.cow.fi/order/0x88fb085a83e960b344fd6d0d5b6dcb00b8c4f9c42c4a8baa40adb1d6263933db) |
| 22:16:57 | CARDS → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xbd5424be…` [🐞](https://debug.barn.cow.fi/order/0xbd5424beeb047a047b29f328503c1b39201fda3dac72150e99f8cdd378a2f45b) |
| 22:16:58 | Fartcoin → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x50a272cd…` [🐞](https://debug.barn.cow.fi/order/0x50a272cda070ddeeb67ce7c7c4a30de0b4103886271b55cff48dc9893b60bca9) |
| 22:16:59 | wSOL → ORE | market sell | Winner too late: creation blockhash expired | `0x5d2c9424…` [🐞](https://debug.barn.cow.fi/order/0x5d2c9424e61bb2ed06efed9a7974e4f08572f477fd9a5c124e75af76fe160697) |
| 22:17:01 | wSOL → fone | market sell | Winner too late: creation blockhash expired | `0xdb9c5e76…` [🐞](https://debug.barn.cow.fi/order/0xdb9c5e7623192c867a6105e32522eed7b6ea5c6d44ba8fd64e7b18d5a22874db) |
| 22:17:08 | xSOL → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xdd15a555…` [🐞](https://debug.barn.cow.fi/order/0xdd15a55593bb084fadb3442713ef8fffd423f6df829f0db3e8fdfd5e4aae6764) |
| 22:17:12 | wSOL → SPYx | market sell | Winner too late: creation blockhash expired | `0xc050080e…` [🐞](https://debug.barn.cow.fi/order/0xc050080e8b7a2233317961072bd289deea6124c06bf7ebbd2fe9951268ec626a) |
| 22:17:14 | wSOL → JUP | market sell | Winner too late: creation blockhash expired | `0x760cdcf9…` [🐞](https://debug.barn.cow.fi/order/0x760cdcf9b5609bb897de407e2d632e366bb6de648164097fa25458519acd09ad) |
