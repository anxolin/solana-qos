# Solana QoS report: 2026-10-27-14-06-token-universe__test_01_cow-swap-top

Barn, orders created between `2026-10-27T14:06:40.995Z` and `2026-10-27T14:12:45.664Z`. Data fetched 2026-10-27T14:15:46+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 122 |
| Orders executed | **122** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 30 |
| Settlement txs | 122 |

## Scenario

93 of 94 scenario rows completed. 0 retries, 1 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 14:06:41 | 1 | 1 | sell 0.005 SOL → EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v | filled | 11s | 1 |  |
| 14:06:51 | 2 | 1 | sell 0.492 EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v → SOL | filled | 20s | 2 |  |
| 14:06:45 | 3 | 2 | sell 0.005 SOL → Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB | filled | 7s | 1 |  |
| 14:06:51 | 4 | 2 | sell 0.492 Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB → SOL | filled | 26s | 2 |  |
| 14:06:49 | 5 | 3 | sell 0.005 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 7s | 1 |  |
| 14:06:56 | 6 | 3 | sell 0.491 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → SOL | filled | 20s | 2 |  |
| 14:06:53 | 7 | 4 | sell 0.005 SOL → 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx | filled | 10s | 1 |  |
| 14:07:03 | 8 | 4 | sell 3.45 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx → SOL | filled | 10s | 1 |  |
| 14:06:57 | 9 | 5 | sell 0.005 SOL → A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS | filled | 4s | 1 |  |
| 14:07:00 | 10 | 5 | sell 0.000405 A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS → SOL | filled | 23s | 2 |  |
| 14:07:01 | 11 | 6 | sell 0.005 SOL → JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD | filled | 7s | 1 |  |
| 14:07:08 | 12 | 6 | sell 0.492 JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD → SOL | filled | 29s | 2 |  |
| 14:07:05 | 13 | 7 | sell 0.005 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 7s | 1 |  |
| 14:07:12 | 14 | 7 | sell 0.491 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → SOL | filled | 7s | 1 |  |
| 14:07:09 | 15 | 8 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 17s | 1 |  |
| 14:07:25 | 16 | 8 | sell 0.492 DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT → SOL | filled | 7s | 1 |  |
| 14:07:13 | 17 | 9 | sell 0.005 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 13s | 1 |  |
| 14:07:26 | 18 | 9 | sell 90.2 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn → SOL | filled | 26s | 2 |  |
| 14:07:17 | 19 | 10 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 14:07:18 | 20 | 10 | sell 5.93e-06 cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij → SOL | filled | 18s | 2 |  |
| 14:07:21 | 21 | 11 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 7s | 1 |  |
| 14:07:28 | 22 | 11 | sell 0.000198 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs → SOL | filled | 4s | 1 |  |
| 14:07:25 | 23 | 12 | sell 0.005 SOL → BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy | filled | 14s | 1 |  |
| 14:07:38 | 24 | 12 | sell 0.401 BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy → SOL | filled | 10s | 1 |  |
| 14:07:29 | 25 | 13 | sell 0.005 SOL → 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g | filled | 7s | 1 |  |
| 14:07:36 | 26 | 13 | sell 0.00577 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g → SOL | filled | 10s | 1 |  |
| 14:07:33 | 27 | 14 | sell 0.005 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 10s | 1 |  |
| 14:07:43 | 28 | 14 | sell 0.492 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → SOL | filled | 13s | 1 |  |
| 14:07:37 | 29 | 15 | sell 0.005 SOL → CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp | filled | 7s | 1 |  |
| 14:07:44 | 30 | 15 | sell 1.7 CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp → SOL | filled | 10s | 1 |  |
| 14:07:41 | 31 | 16 | sell 0.005 SOL → 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 | filled | 7s | 1 |  |
| 14:07:48 | 32 | 16 | sell 81.5 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 → SOL | filled | 4s | 1 |  |
| 14:07:45 | 33 | 17 | sell 0.005 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 7s | 1 |  |
| 14:07:51 | 34 | 17 | sell 3.6 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → SOL | filled | 7s | 1 |  |
| 14:07:49 | 35 | 18 | sell 0.005 SOL → 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh | filled | 10s | 1 |  |
| 14:07:59 | 36 | 18 | sell 5.93e-06 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh → SOL | filled | 20s | 2 |  |
| 14:07:53 | 37 | 19 | sell 0.005 SOL → Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk | filled | 10s | 1 |  |
| 14:08:03 | 38 | 19 | sell 2.58 Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk → SOL | filled | 7s | 1 |  |
| 14:07:57 | 39 | 20 | sell 0.005 SOL → 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R | filled | 7s | 1 |  |
| 14:08:04 | 40 | 20 | sell 0.207 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R → SOL | filled | 19s | 1 |  |
| 14:08:01 | 41 | 21 | sell 0.005 SOL → USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB | filled | 7s | 1 |  |
| 14:08:08 | 42 | 21 | sell 0.492 USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB → SOL | filled | 10s | 1 |  |
| 14:08:05 | 43 | 22 | sell 0.005 SOL → CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt | filled | 7s | 1 |  |
| 14:08:12 | 44 | 22 | sell 42 CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt → SOL | filled | 27s | 2 |  |
| 14:08:09 | 45 | 23 | sell 0.005 SOL → JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN | filled | 10s | 1 |  |
| 14:08:19 | 46 | 23 | sell 1.35 JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN → SOL | filled | 33s | 2 |  |
| 14:08:13 | 47 | 24 | sell 0.005 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 11s | 1 |  |
| 14:08:23 | 48 | 24 | sell 0.000629 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 17s | 2 |  |
| 14:08:17 | 49 | 25 | sell 0.005 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 7s | 1 |  |
| 14:08:24 | 50 | 25 | sell 0.003 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | filled | 17s | 2 |  |
| 14:08:21 | 51 | 26 | sell 0.005 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 7s | 1 |  |
| 14:08:27 | 52 | 26 | sell 0.00214 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | filled | 23s | 2 |  |
| 14:08:25 | 53 | 27 | sell 0.005 SOL → 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv | filled | 7s | 1 |  |
| 14:08:31 | 54 | 27 | sell 61.6 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv → SOL | filled | 20s | 2 |  |
| 14:08:29 | 55 | 28 | sell 0.005 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 7s | 1 |  |
| 14:08:36 | 56 | 28 | sell 0.00301 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb → SOL | filled | 20s | 2 |  |
| 14:08:33 | 57 | 29 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 4s | 1 |  |
| 14:08:36 | 58 | 29 | sell 0.00345 J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn → SOL | filled | 20s | 2 |  |
| 14:08:37 | 59 | 30 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 4s | 1 |  |
| 14:08:41 | 60 | 30 | sell 0.106 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 → SOL | filled | 17s | 2 |  |
| 14:08:41 | 61 | 1 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 8s | 1 |  |
| 14:08:48 | 62 | 1 | sell 0.00371 jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v → SOL | filled | 20s | 2 |  |
| 14:08:45 | 63 | 2 | sell 0.005 SOL → MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump | filled | 7s | 1 |  |
| 14:08:52 | 64 | 2 | sell 68.4 MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump → SOL | filled | 26s | 2 |  |
| 14:08:49 | 65 | 3 | sell 0.005 SOL → GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump | filled | 7s | 1 |  |
| 14:08:56 | 66 | 3 | sell 43.7 GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump → SOL | filled | 7s | 1 |  |
| 14:08:53 | 67 | 4 | sell 0.005 SOL → METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL | filled | 10s | 1 |  |
| 14:09:03 | 68 | 4 | sell 1.17 METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL → SOL | filled | 29s | 1 |  |
| 14:08:57 | 69 | 5 | sell 0.005 SOL → 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG | filled | 4s | 1 |  |
| 14:09:00 | 70 | 5 | sell 0.492 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG → SOL | filled | 17s | 2 |  |
| 14:09:01 | 71 | 6 | sell 0.005 SOL → AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj | filled | 7s | 1 |  |
| 14:09:08 | 72 | 6 | sell 0.415 AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj → SOL | filled | 20s | 2 |  |
| 14:09:05 | 73 | 7 | sell 0.005 SOL → C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE | filled | 7s | 1 |  |
| 14:09:12 | 74 | 7 | sell 51.8 C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE → SOL | filled | 7s | 1 |  |
| 14:09:09 | 75 | 8 | sell 0.005 SOL → 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 | filled | 10s | 1 |  |
| 14:09:19 | 76 | 8 | sell 0.428 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 → SOL | filled | 17s | 2 |  |
| 14:09:13 | 77 | 9 | sell 0.005 SOL → CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump | filled | 10s | 1 |  |
| 14:09:23 | 78 | 9 | sell 107 CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump → SOL | filled | 7s | 1 |  |
| 14:09:17 | 79 | 10 | sell 0.005 SOL → 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 | filled | 4s | 1 |  |
| 14:09:21 | 80 | 10 | sell 12.7 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 → SOL | filled | 17s | 2 |  |
| 14:09:21 | 81 | 11 | sell 0.005 SOL → Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump | filled | 7s | 1 |  |
| 14:09:28 | 82 | 11 | sell 15.6 Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump → SOL | filled | 20s | 2 |  |
| 14:09:25 | 83 | 12 | sell 0.005 SOL → 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu | filled | 7s | 1 |  |
| 14:09:32 | 84 | 12 | sell 1.63 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu → SOL | filled | 23s | 2 |  |
| 14:09:29 | 85 | 13 | sell 0.005 SOL → oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp | filled | 7s | 1 |  |
| 14:09:35 | 86 | 13 | sell 0.0046 oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp → SOL | filled | 17s | 2 |  |
| 14:09:33 | 87 | 14 | sell 0.005 SOL → 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs | filled | 10s | 1 |  |
| 14:09:43 | 88 | 14 | sell 6.7 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs → SOL | filled | 20s | 2 |  |
| 14:09:37 | 89 | 15 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 4s | 1 |  |
| 14:09:41 | 90 | 15 | sell 0.00319 mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So → SOL | filled | 17s | 2 |  |
| 14:09:41 | 91 | 16 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 7s | 1 |  |
| 14:09:48 | 92 | 16 | sell 3.04 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump → SOL | filled | 24s | 2 |  |
| 14:09:45 | 93 | 17 | sell 0.005 SOL → D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n | filled | 7s | 1 |  |
| 14:09:52 | 94 | 17 | sell 3000 D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n → SOL | filled | 4s | 1 |  |

### Rows without an order

1 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | main | 1 | SOL → cbBTC | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 122 (93 main, 29 acquire). Cleanup placed 10 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 14:10:17 | 3 | JEANPHIL → SOL (native) | Executed | `0xc2b25e9e…` [🐞](https://debug.barn.cow.fi/order/0xc2b25e9e4a017d4036147567d58f2b6c2d7989e33149f11a1758434ed6ebc005) |
| 14:10:19 | 4 | STONK → SOL (native) | Executed | `0x5303332e…` [🐞](https://debug.barn.cow.fi/order/0x5303332e46b3ad7cff29551fe49787de4f5770761eca90fe9fa22878151c0b67) |
| 14:10:23 | 7 | HOOKED → SOL (native) | Executed | `0x0d3a2091…` [🐞](https://debug.barn.cow.fi/order/0x0d3a2091dbffb1e250cca28b9ece9383e3a8f7a3ef7800ff49d04d9e00e15a67) |
| 14:10:26 | 12 | BP → SOL (native) | Executed | `0xee84721e…` [🐞](https://debug.barn.cow.fi/order/0xee84721eef9a83966289938553b7662b92d13ee659eeed8c6d2a53b3c3fa154c) |
| 14:10:27 | 13 | HYPE → SOL (native) | Executed | `0xb0ac9a83…` [🐞](https://debug.barn.cow.fi/order/0xb0ac9a83d644769c00761d49dbbdd21948a7431c136495a8dc7c327b980341fd) |
| 14:10:30 | 14 | CASH → SOL (native) | Executed | `0x7a959461…` [🐞](https://debug.barn.cow.fi/order/0x7a95946120e6fe965df6d67a40cee1b69666e7699bb744c2568aa544c91bf9ef) |
| 14:10:34 | 15 | CARDS → SOL (native) | Executed | `0xd4ea3069…` [🐞](https://debug.barn.cow.fi/order/0xd4ea306969603d001b29f6045d7e018625f13a4f4244feae06fac06e5d11d2e9) |
| 14:10:38 | 16 | EMBER → SOL (native) | Executed | `0xbf627432…` [🐞](https://debug.barn.cow.fi/order/0xbf6274320fc317b10b9381d86bcc8a78456f8a2d7c4ecd18dfa7deced548efd9) |
| 14:10:39 | 17 | GO → SOL (native) | Executed | `0x895c2bf6…` [🐞](https://debug.barn.cow.fi/order/0x895c2bf66ee8c74da598a3a0480e862441f1bd07e25fbfd4c68cf09b219b513b) |
| 14:10:47 | 21 | USD1 → SOL (native) | Executed | `0xb3db5366…` [🐞](https://debug.barn.cow.fi/order/0xb3db536691d2585266cc15d8a5d0e9859012586e23161e0b86ff405924a71c6e) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 122 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 6s | 8s | 20s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 122 | 100.0% | 122 | 122,025 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 133 | 133 | 132 | 99.2% | 1 | 0 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 61 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 122 | 122 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 2 | 2 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 2 | 100.0% |
| wSOL → ZEC | 2 | 2 | 100.0% |
| wSOL → JupUSD | 2 | 2 | 100.0% |
| wSOL → PUMP | 2 | 2 | 100.0% |
| wSOL → WBTC | 2 | 2 | 100.0% |
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
| wSOL → USX | 2 | 2 | 100.0% |
| wSOL → syrupUSDC | 2 | 2 | 100.0% |
| wSOL → ONyc | 2 | 2 | 100.0% |
| wSOL → TROLL | 2 | 2 | 100.0% |
| wSOL → neet | 2 | 2 | 100.0% |
| wSOL → GEOD | 2 | 2 | 100.0% |
| wSOL → ORE | 2 | 2 | 100.0% |
| wSOL → xSOL | 2 | 2 | 100.0% |
| wSOL → mSOL | 2 | 2 | 100.0% |
| wSOL → Fartcoin | 2 | 2 | 100.0% |
| wSOL → STONK | 1 | 1 | 100.0% |
| STONK → SOL (native) | 1 | 1 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| USDG → SOL (native) | 1 | 1 | 100.0% |
| USDT → SOL (native) | 1 | 1 | 100.0% |
| PYUSD → SOL (native) | 1 | 1 | 100.0% |
| ZEC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → BP | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| USDe → SOL (native) | 1 | 1 | 100.0% |
| ETH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HYPE | 1 | 1 | 100.0% |
| JupUSD → SOL (native) | 1 | 1 | 100.0% |
| cbBTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CASH | 1 | 1 | 100.0% |
| HYPE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CARDS | 1 | 1 | 100.0% |
| BP → SOL (native) | 1 | 1 | 100.0% |
| PUMP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → EMBER | 1 | 1 | 100.0% |
| CASH → SOL (native) | 1 | 1 | 100.0% |
| CARDS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| EMBER → SOL (native) | 1 | 1 | 100.0% |
| ANSEM → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USELESS | 1 | 1 | 100.0% |
| wSOL → RAY | 1 | 1 | 100.0% |
| wSOL → USD1 | 1 | 1 | 100.0% |
| USELESS → SOL (native) | 1 | 1 | 100.0% |
| USD1 → SOL (native) | 1 | 1 | 100.0% |
| RAY → SOL (native) | 1 | 1 | 100.0% |
| WBTC → SOL (native) | 1 | 1 | 100.0% |
| ANTFUN → SOL (native) | 1 | 1 | 100.0% |
| SPYx → SOL (native) | 1 | 1 | 100.0% |
| SPCXx → SOL (native) | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| NVDAx → SOL (native) | 1 | 1 | 100.0% |
| PENGU → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JEANPHIL | 1 | 1 | 100.0% |
| SPCX → SOL (native) | 1 | 1 | 100.0% |
| JitoSOL → SOL (native) | 1 | 1 | 100.0% |
| JLP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MET | 1 | 1 | 100.0% |
| JEANPHIL → SOL (native) | 1 | 1 | 100.0% |
| JupSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HOOKED | 1 | 1 | 100.0% |
| OTC → SOL (native) | 1 | 1 | 100.0% |
| MET → SOL (native) | 1 | 1 | 100.0% |
| USX → SOL (native) | 1 | 1 | 100.0% |
| HOOKED → SOL (native) | 1 | 1 | 100.0% |
| wSOL → fone | 1 | 1 | 100.0% |
| syrupUSDC → SOL (native) | 1 | 1 | 100.0% |
| fone → SOL (native) | 1 | 1 | 100.0% |
| TROLL → SOL (native) | 1 | 1 | 100.0% |
| ONyc → SOL (native) | 1 | 1 | 100.0% |
| neet → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GO | 1 | 1 | 100.0% |
| ORE → SOL (native) | 1 | 1 | 100.0% |
| GEOD → SOL (native) | 1 | 1 | 100.0% |
| mSOL → SOL (native) | 1 | 1 | 100.0% |
| GO → SOL (native) | 1 | 1 | 100.0% |
| xSOL → SOL (native) | 1 | 1 | 100.0% |
| Fartcoin → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 6 | 6 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 6 | 6 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 6 | 6 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 6 | 6 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 5 | 5 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 5 | 5 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 5 | 5 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 5 | 5 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 5 | 5 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 5 | 5 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 5 | 5 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 5 | 5 | 100.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 5 | 5 | 100.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 5 | 5 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 4 | 4 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 4 | 4 | 100.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 4 | 4 | 100.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 3 | 3 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 3 | 3 | 100.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 3 | 3 | 100.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 3 | 3 | 100.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 3 | 3 | 100.0% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 3 | 3 | 100.0% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 3 | 3 | 100.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 3 | 3 | 100.0% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 3 | 3 | 100.0% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 3 | 3 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 2 | 2 | 100.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 2 | 2 | 100.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 2 | 2 | 100.0% |
