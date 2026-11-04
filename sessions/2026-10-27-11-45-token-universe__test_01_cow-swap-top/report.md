# Solana QoS report: 2026-10-27-11-45-token-universe__test_01_cow-swap-top

Barn, orders created between `2026-10-27T11:45:47.479Z` and `2026-10-27T11:54:05.877Z`. Data fetched 2026-10-27T11:54:18+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 103 |
| Orders executed | **41** (39.8%) |
| Sponsored orders never created on-chain | 54 (52.4%) |
| Traders | 30 |
| Settlement txs | 41 |

## Scenario

28 of 94 scenario rows completed. 0 retries, 4 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 11:45:47 | 1 | 1 | sell 0.005 SOL → EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v | filled | 7s | 1 |  |
| 11:45:54 | 2 | 1 | sell 0.492 EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v → SOL | filled | 35s | 2 |  |
| 11:45:51 | 3 | 2 | sell 0.005 SOL → Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB | filled | 4s | 1 |  |
| 11:45:55 | 4 | 2 | sell 0.492 Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB → SOL | filled | 17s | 2 |  |
| 11:45:55 | 5 | 3 | sell 0.005 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 10s | 1 |  |
| 11:46:05 | 6 | 3 | sell 0.491 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → SOL | filled | 36s | 2 |  |
| 11:45:59 | 7 | 4 | sell 0.005 SOL → 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:46:01 | 8 | 4 | sell 3.45 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx → SOL | filled | 30s | 2 |  |
| 11:46:03 | 9 | 5 | sell 0.005 SOL → A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS | filled | 10s | 1 |  |
| 11:46:13 | 10 | 5 | sell 0.000405 A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS → SOL | filled | 17s | 2 |  |
| 11:46:07 | 11 | 6 | sell 0.005 SOL → JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD | filled | 14s | 1 |  |
| 11:46:21 | 12 | 6 | sell 0.492 JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD → SOL | filled | 26s | 2 |  |
| 11:46:11 | 13 | 7 | sell 0.005 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 20s | 1 |  |
| 11:46:31 | 14 | 7 | sell 0.491 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → SOL | filled | 36s | 2 |  |
| 11:46:15 | 15 | 8 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 16s | 1 |  |
| 11:46:32 | 16 | 8 | sell 0.492 DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT → SOL | filled | 30s | 2 |  |
| 11:46:19 | 17 | 9 | sell 0.005 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 13s | 1 |  |
| 11:46:32 | 18 | 9 | sell 90.2 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn → SOL | filled | 10s | 1 |  |
| 11:46:23 | 19 | 10 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 7s | 1 |  |
| 11:46:30 | 20 | 10 | sell 5.93e-06 cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij → SOL | filled | 17s | 2 |  |
| 11:46:27 | 21 | 11 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 7s | 1 |  |
| 11:46:34 | 22 | 11 | sell 0.000198 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs → SOL | filled | 20s | 2 |  |
| 11:46:31 | 23 | 12 | sell 0.005 SOL → BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy | filled | 4s | 1 |  |
| 11:46:35 | 24 | 12 | sell 0.401 BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy → SOL | failed | 11s | 1 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:46:35 | 25 | 13 | sell 0.005 SOL → 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g | filled | 7s | 1 |  |
| 11:46:42 | 26 | 13 | sell 0.00577 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g → SOL | failed | 111s | 2 | main timeout |
| 11:46:39 | 27 | 14 | sell 0.005 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 13s | 1 |  |
| 11:46:52 | 28 | 14 | sell 0.492 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → SOL | failed | 98s | 1 | acquire CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH timeout |
| 11:46:43 | 29 | 15 | sell 0.005 SOL → CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp | filled | 7s | 1 |  |
| 11:46:50 | 30 | 15 | sell 1.7 CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp → SOL | failed | 108s | 2 | main timeout |
| 11:46:47 | 31 | 16 | sell 0.005 SOL → 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 | filled | 7s | 1 |  |
| 11:46:54 | 32 | 16 | sell 81.5 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 → SOL | filled | 10s | 1 |  |
| 11:46:51 | 33 | 17 | sell 0.005 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 92s | 1 | main timeout |
| 11:48:23 | 34 | 17 | sell 3.6 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → SOL | failed | 43s | 1 | acquire 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump expired |
| 11:46:55 | 35 | 18 | sell 0.005 SOL → 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh | failed | 92s | 1 | main timeout |
| 11:48:27 | 36 | 18 | sell 5.93e-06 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh → SOL | failed | 42s | 1 | acquire 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh expired |
| 11:46:59 | 37 | 19 | sell 0.005 SOL → Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk | failed | 92s | 1 | main timeout |
| 11:48:31 | 38 | 19 | sell 2.58 Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk → SOL | failed | 42s | 1 | acquire Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk expired |
| 11:47:03 | 39 | 20 | sell 0.005 SOL → 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R | failed | 92s | 1 | main timeout |
| 11:48:35 | 40 | 20 | sell 0.207 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R → SOL | failed | 42s | 1 | acquire 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R expired |
| 11:47:07 | 41 | 21 | sell 0.005 SOL → USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB | filled | 7s | 1 |  |
| 11:47:14 | 42 | 21 | sell 0.492 USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB → SOL | failed | 41s | 1 | acquire USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB expired |
| 11:47:11 | 43 | 22 | sell 0.005 SOL → CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt | failed | 93s | 1 | main timeout |
| 11:48:44 | 44 | 22 | sell 42 CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt → SOL | failed | 41s | 1 | acquire CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt expired |
| 11:47:15 | 45 | 23 | sell 0.005 SOL → JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN | failed | 35s | 1 | main expired |
| 11:47:50 | 46 | 23 | sell 1.35 JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN → SOL | failed | 39s | 1 | acquire JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN expired |
| 11:47:19 | 47 | 24 | sell 0.005 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 35s | 1 | main expired |
| 11:47:54 | 48 | 24 | sell 0.000629 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | failed | 42s | 1 | acquire XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W expired |
| 11:47:23 | 49 | 25 | sell 0.005 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 35s | 1 | main expired |
| 11:47:58 | 50 | 25 | sell 0.003 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | failed | 43s | 1 | acquire Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 expired |
| 11:47:27 | 51 | 26 | sell 0.005 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 35s | 1 | main expired |
| 11:48:02 | 52 | 26 | sell 0.00214 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | failed | 42s | 1 | acquire Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh expired |
| 11:47:31 | 53 | 27 | sell 0.005 SOL → 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv | failed | 35s | 1 | main expired |
| 11:48:06 | 54 | 27 | sell 61.6 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv → SOL | failed | 43s | 1 | acquire 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv expired |
| 11:47:35 | 55 | 28 | sell 0.005 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 35s | 1 | main expired |
| 11:48:10 | 56 | 28 | sell 0.00301 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb → SOL | failed | 40s | 1 | acquire SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb expired |
| 11:47:39 | 57 | 29 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 35s | 1 | main expired |
| 11:48:15 | 58 | 29 | sell 0.00345 J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn → SOL | failed | 43s | 1 | acquire J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn expired |
| 11:47:43 | 59 | 30 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 36s | 1 | main expired |
| 11:48:19 | 60 | 30 | sell 0.106 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 → SOL | failed | 43s | 1 | acquire 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 expired |
| 11:47:47 | 61 | 1 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 36s | 1 | main expired |
| 11:48:23 | 62 | 1 | sell 0.00371 jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v → SOL | failed | 43s | 1 | acquire jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v expired |
| 11:47:51 | 63 | 2 | sell 0.005 SOL → MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump | failed | 36s | 1 | main expired |
| 11:48:27 | 64 | 2 | sell 68.4 MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump → SOL | failed | 39s | 1 | acquire MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump expired |
| 11:47:55 | 65 | 3 | sell 0.005 SOL → GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump | failed | 36s | 1 | main expired |
| 11:48:31 | 66 | 3 | sell 43.7 GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump → SOL | failed | 42s | 1 | acquire GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump expired |
| 11:47:59 | 67 | 4 | sell 0.005 SOL → METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL | failed | 33s | 1 | main expired |
| 11:48:32 | 68 | 4 | sell 1.17 METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL → SOL | failed | 42s | 1 | acquire METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL expired |
| 11:48:03 | 69 | 5 | sell 0.005 SOL → 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG | failed | 36s | 1 | main expired |
| 11:48:39 | 70 | 5 | sell 0.492 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG → SOL | failed | 41s | 1 | acquire 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG expired |
| 11:48:07 | 71 | 6 | sell 0.005 SOL → AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj | failed | 34s | 1 | main expired |
| 11:48:41 | 72 | 6 | sell 0.415 AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj → SOL | failed | 42s | 1 | acquire AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj expired |
| 11:48:11 | 73 | 7 | sell 0.005 SOL → C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE | failed | 37s | 1 | main expired |
| 11:48:48 | 74 | 7 | sell 51.8 C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE → SOL | failed | 7s | 0 | acquire C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 11:48:15 | 75 | 8 | sell 0.005 SOL → 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 | failed | 37s | 1 | main expired |
| 11:48:52 | 76 | 8 | sell 0.428 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 → SOL | failed | 41s | 1 | acquire 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 expired |
| 11:48:19 | 77 | 9 | sell 0.005 SOL → CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump | failed | 36s | 1 | main expired |
| 11:48:55 | 78 | 9 | sell 107 CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump → SOL | failed | 41s | 1 | acquire CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump expired |
| 11:48:23 | 79 | 10 | sell 0.005 SOL → 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 | failed | 36s | 1 | main expired |
| 11:48:59 | 80 | 10 | sell 12.7 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 → SOL | failed | 41s | 1 | acquire 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 expired |
| 11:48:27 | 81 | 11 | sell 0.005 SOL → Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump | failed | 36s | 1 | main expired |
| 11:49:03 | 82 | 11 | sell 15.6 Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump → SOL | failed | 7s | 0 | acquire Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:48:31 | 83 | 12 | sell 0.005 SOL → 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu | failed | 36s | 1 | main expired |
| 11:49:07 | 84 | 12 | sell 1.63 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu → SOL | failed | 41s | 1 | acquire 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu expired |
| 11:48:35 | 85 | 13 | sell 0.005 SOL → oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp | failed | 36s | 1 | main expired |
| 11:49:11 | 86 | 13 | sell 0.0046 oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp → SOL | failed | 41s | 1 | acquire oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp expired |
| 11:48:39 | 87 | 14 | sell 0.005 SOL → 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs | failed | 33s | 1 | main expired |
| 11:49:12 | 88 | 14 | sell 6.7 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs → SOL | failed | 41s | 1 | acquire 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs expired |
| 11:48:43 | 89 | 15 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 35s | 1 | main expired |
| 11:49:18 | 90 | 15 | sell 0.00319 mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So → SOL | failed | 41s | 1 | acquire mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So expired |
| 11:48:47 | 91 | 16 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 36s | 1 | main expired |
| 11:49:23 | 92 | 16 | sell 3.04 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump → SOL | failed | 41s | 1 | acquire 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump expired |
| 11:49:06 | 93 | 17 | sell 0.005 SOL → D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n | failed | 35s | 1 | main expired |
| 11:49:41 | 94 | 17 | sell 3000 D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n → SOL | failed | 42s | 1 | acquire D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n expired |

### Rows without an order

4 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | main | 2 | SOL → STONK, BP → SOL | the transaction's blockhash is no longer valid, sign a fresh one |
| SellAmountDoesNotCoverFee | acquire | 1 | SOL → HOOKED | the quoted amount does not cover the execution cost |
| BlockhashExpired | acquire | 1 | SOL → neet | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 103 (60 main, 43 acquire). Cleanup placed 7 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 11:50:31 | 4 | STONK → SOL (native) | Expired without a fill | `0x8d60efb5…` [🐞](https://debug.barn.cow.fi/order/0x8d60efb561b7f3099d46f078aa17f94ab5e2ad07931c19f0e2eda951520f5fa7) |
| 11:50:39 | 12 | BP → SOL (native) | Expired without a fill | `0xa5ced3f4…` [🐞](https://debug.barn.cow.fi/order/0xa5ced3f43d7bf7ccc5bc64e1171f7dd349b16f76a59c263e159ff88b259c9694) |
| 11:50:41 | 13 | HYPE → SOL (native) | Expired without a fill | `0x1e22e5c2…` [🐞](https://debug.barn.cow.fi/order/0x1e22e5c2f776984a2a11b00ab9f2891e2e1619c69f470cc2594d24f51ca31313) |
| 11:50:42 | 14 | CASH → SOL (native) | Still open | `0x8ef02c1d…` [🐞](https://debug.barn.cow.fi/order/0x8ef02c1d84117c4a1423af099a83ff1799b2e736ef263217a18110b18c5d3d6e) |
| 11:50:44 | 15 | CARDS → SOL (native) | Still open | `0xdaf2e580…` [🐞](https://debug.barn.cow.fi/order/0xdaf2e5803ec8bc4513e6bad5d56f5ba094734c1005bd2635a494fc508c07e78d) |
| 11:50:44 | 16 | EMBER → SOL (native) | Still open | `0x798a31ed…` [🐞](https://debug.barn.cow.fi/order/0x798a31ed39151cbd2f1776b9d38413d24b85fd96671c1e1e4e1dcfe51990512f) |
| 11:50:53 | 21 | USD1 → SOL (native) | Still open | `0x67c04c52…` [🐞](https://debug.barn.cow.fi/order/0x67c04c520802b9bdfc373fc0db7cb3e07cf40ff8de4f30afe6ff527d31a83cbc) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| expired: never created on-chain (winner found, creation blockhash expired) | 54 | 52.4% |
| executed | 41 | 39.8% |
| expired | 8 | 7.8% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 5s | 9s | 13s | 21s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 41 | 100.0% | 41 | 125,868 | 5s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 62 | 62 | 41 | 66.1% | 16 | 9 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 16 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `in_flight`: 5 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 103 | 41 | 39.8% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 2 | 2 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 2 | 100.0% |
| wSOL → ZEC | 2 | 2 | 100.0% |
| wSOL → JupUSD | 2 | 2 | 100.0% |
| wSOL → PYUSD | 2 | 2 | 100.0% |
| wSOL → USDe | 2 | 2 | 100.0% |
| wSOL → cbBTC | 2 | 2 | 100.0% |
| wSOL → ETH | 2 | 2 | 100.0% |
| wSOL → BP | 2 | 2 | 100.0% |
| wSOL → HYPE | 2 | 2 | 100.0% |
| wSOL → CASH | 2 | 1 | 50.0% |
| wSOL → CARDS | 2 | 2 | 100.0% |
| wSOL → ANSEM | 2 | 0 | 0.0% |
| wSOL → WBTC | 2 | 0 | 0.0% |
| wSOL → USELESS | 2 | 0 | 0.0% |
| wSOL → RAY | 2 | 0 | 0.0% |
| wSOL → USD1 | 2 | 1 | 50.0% |
| wSOL → ANTFUN | 2 | 0 | 0.0% |
| wSOL → JUP | 2 | 0 | 0.0% |
| wSOL → SPYx | 2 | 0 | 0.0% |
| wSOL → SPCXx | 2 | 0 | 0.0% |
| wSOL → NVDAx | 2 | 0 | 0.0% |
| wSOL → PENGU | 2 | 0 | 0.0% |
| wSOL → SPCX | 2 | 0 | 0.0% |
| wSOL → JitoSOL | 2 | 0 | 0.0% |
| wSOL → JLP | 2 | 0 | 0.0% |
| wSOL → JupSOL | 2 | 0 | 0.0% |
| wSOL → OTC | 2 | 0 | 0.0% |
| wSOL → JEANPHIL | 2 | 0 | 0.0% |
| wSOL → MET | 2 | 0 | 0.0% |
| wSOL → USX | 2 | 0 | 0.0% |
| wSOL → syrupUSDC | 2 | 0 | 0.0% |
| wSOL → ONyc | 2 | 0 | 0.0% |
| wSOL → fone | 2 | 0 | 0.0% |
| wSOL → TROLL | 2 | 0 | 0.0% |
| wSOL → GEOD | 2 | 0 | 0.0% |
| wSOL → ORE | 2 | 0 | 0.0% |
| wSOL → xSOL | 2 | 0 | 0.0% |
| wSOL → mSOL | 2 | 0 | 0.0% |
| wSOL → Fartcoin | 2 | 0 | 0.0% |
| wSOL → GO | 2 | 0 | 0.0% |
| USDT → SOL (native) | 1 | 1 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → STONK | 1 | 1 | 100.0% |
| STONK → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| ZEC → SOL (native) | 1 | 1 | 100.0% |
| PUMP → SOL (native) | 1 | 1 | 100.0% |
| USDG → SOL (native) | 1 | 1 | 100.0% |
| cbBTC → SOL (native) | 1 | 1 | 100.0% |
| JupUSD → SOL (native) | 1 | 1 | 100.0% |
| PYUSD → SOL (native) | 1 | 1 | 100.0% |
| ETH → SOL (native) | 1 | 1 | 100.0% |
| USDe → SOL (native) | 1 | 1 | 100.0% |
| wSOL → EMBER | 1 | 1 | 100.0% |
| EMBER → SOL (native) | 1 | 1 | 100.0% |
| HYPE → SOL (native) | 1 | 0 | 0.0% |
| CARDS → SOL (native) | 1 | 0 | 0.0% |
| wSOL → HOOKED | 1 | 0 | 0.0% |
| wSOL → neet | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 5 | 3 | 60.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 5 | 3 | 60.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 5 | 3 | 60.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 5 | 3 | 60.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 5 | 3 | 60.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 5 | 3 | 60.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 5 | 3 | 60.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 5 | 2 | 40.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 5 | 2 | 40.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 4 | 2 | 50.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 4 | 3 | 75.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 4 | 2 | 50.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 4 | 3 | 75.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 4 | 2 | 50.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 4 | 1 | 25.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 4 | 2 | 50.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 4 | 0 | 0.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 2 | 0 | 0.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 2 | 0 | 0.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 2 | 0 | 0.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 2 | 1 | 50.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 2 | 0 | 0.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 2 | 0 | 0.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 2 | 0 | 0.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 2 | 0 | 0.0% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 2 | 0 | 0.0% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 2 | 0 | 0.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 2 | 0 | 0.0% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 2 | 0 | 0.0% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 2 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 54 | 0 |
| Expired without a fill | 8 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 11:46:52 | wSOL → ANSEM | market sell | Expired without a fill | `0xe548e810…` [🐞](https://debug.barn.cow.fi/order/0xe548e810e14825125d598957ff607f8da3224edeb6725c5bad0f130d1c8ac764) |
| 11:46:56 | wSOL → WBTC | market sell | Expired without a fill | `0xe21eaf39…` [🐞](https://debug.barn.cow.fi/order/0xe21eaf3982bff07538805966f7f030bee89bde050cbd143cafc075b202cdc2c5) |
| 11:46:59 | wSOL → CASH | market sell | Expired without a fill | `0x6349c37f…` [🐞](https://debug.barn.cow.fi/order/0x6349c37f88760ca3458c6691d66b465ef9dde5b4a8e21043f38d0fc240c4be77) |
| 11:47:00 | wSOL → USELESS | market sell | Expired without a fill | `0xce814344…` [🐞](https://debug.barn.cow.fi/order/0xce814344ffd8997069eb572223175eb2d8ce7b55c6315d34721373e216ebbdff) |
| 11:47:02 | HYPE → SOL (native) | market sell | Expired without a fill | `0x5c01f0e7…` [🐞](https://debug.barn.cow.fi/order/0x5c01f0e7a6696c4044d2eaca762b4953d7465f6e453a61128ee464f2bd20f5b7) |
| 11:47:04 | wSOL → RAY | market sell | Expired without a fill | `0xa92b7cdd…` [🐞](https://debug.barn.cow.fi/order/0xa92b7cddd04cdee3fe6fc4f0cae1ef8f32a3909d5d206d4763c2f36cdfa449d0) |
| 11:47:07 | CARDS → SOL (native) | market sell | Expired without a fill | `0x627ae137…` [🐞](https://debug.barn.cow.fi/order/0x627ae13705fb1239c0ae9b0b966434b20b7eadb37c2787680ac270ceb2cd3e38) |
| 11:47:12 | wSOL → ANTFUN | market sell | Expired without a fill | `0xc0de78a7…` [🐞](https://debug.barn.cow.fi/order/0xc0de78a7c1772943eb68fc89f72fb06791bd883d6a3fbd9d63af45247deb7a9a) |
| 11:47:16 | wSOL → JUP | market sell | Winner too late: creation blockhash expired | `0x603ffd59…` [🐞](https://debug.barn.cow.fi/order/0x603ffd59568e8f18123a966e0e2c74a8e9dd4cac93f872eeb956a175c356f434) |
| 11:47:20 | wSOL → SPYx | market sell | Winner too late: creation blockhash expired | `0xc7b19906…` [🐞](https://debug.barn.cow.fi/order/0xc7b199067cde1b582d5931a59758854881f427270ddc990b84b1be46b61a7ede) |
| 11:47:21 | wSOL → USD1 | market sell | Winner too late: creation blockhash expired | `0x7c3b851c…` [🐞](https://debug.barn.cow.fi/order/0x7c3b851cb85eabafba2cecf07d7e6b27bbb8c2c74475134d10adcfa071c90cf7) |
| 11:47:24 | wSOL → SPCXx | market sell | Winner too late: creation blockhash expired | `0x634e45be…` [🐞](https://debug.barn.cow.fi/order/0x634e45beabbe6828fcad9b1dd2c9e5057c3658a18c954386a859e5a267c56b93) |
| 11:47:28 | wSOL → NVDAx | market sell | Winner too late: creation blockhash expired | `0xb958a52c…` [🐞](https://debug.barn.cow.fi/order/0xb958a52cada33b5351e1b79118ce0b1e57ee7267dc9f72066a6493440c25968b) |
| 11:47:32 | wSOL → PENGU | market sell | Winner too late: creation blockhash expired | `0xf08f9ccc…` [🐞](https://debug.barn.cow.fi/order/0xf08f9cccd26457b4da4ce50547142541f6b0d441b7efac1287064feda7008817) |
| 11:47:36 | wSOL → SPCX | market sell | Winner too late: creation blockhash expired | `0x8d9f2f8f…` [🐞](https://debug.barn.cow.fi/order/0x8d9f2f8f1cea24ef4f0e8053899a071489d8c5f211d563d400c5847463b595f9) |
| 11:47:40 | wSOL → JitoSOL | market sell | Winner too late: creation blockhash expired | `0x0d255e1a…` [🐞](https://debug.barn.cow.fi/order/0x0d255e1a4910d6eaaddaae8b0c4321636dc18ec734a070165e9987a74efe3db3) |
| 11:47:44 | wSOL → JLP | market sell | Winner too late: creation blockhash expired | `0x3dec280f…` [🐞](https://debug.barn.cow.fi/order/0x3dec280ff6f5f0ef25d8536e7836de5ba6b3106f784235b904651548dff1c9e6) |
| 11:47:48 | wSOL → JupSOL | market sell | Winner too late: creation blockhash expired | `0x6485cd8d…` [🐞](https://debug.barn.cow.fi/order/0x6485cd8da616dfd03b4089ef72bd73481c7de7d55ba13f78073294bdbcd49d41) |
| 11:47:52 | wSOL → OTC | market sell | Winner too late: creation blockhash expired | `0x30d3c43f…` [🐞](https://debug.barn.cow.fi/order/0x30d3c43fb71b6e3cbd4288c7971dd5fdf7e7ad9f59b008747b3fe2ad28c6e27d) |
| 11:47:56 | wSOL → JEANPHIL | market sell | Winner too late: creation blockhash expired | `0x6affa357…` [🐞](https://debug.barn.cow.fi/order/0x6affa357f197966f690021991918eab92302040d0dfb0630c19331ee3b2b1972) |
| 11:47:57 | wSOL → JUP | market sell | Winner too late: creation blockhash expired | `0xec16710b…` [🐞](https://debug.barn.cow.fi/order/0xec16710bdd49fc36bd6b837ead8b82f2d4ef8166231dce0cb2cfcc1fe8bc95fb) |
| 11:48:00 | wSOL → MET | market sell | Winner too late: creation blockhash expired | `0xce61b497…` [🐞](https://debug.barn.cow.fi/order/0xce61b497f89b78f72a42c71a90e3cf602393d072660a3f2f5aece19c8dbb5319) |
| 11:48:01 | wSOL → SPYx | market sell | Winner too late: creation blockhash expired | `0xd5efcde2…` [🐞](https://debug.barn.cow.fi/order/0xd5efcde2c5a56f72008762e37f7683b4ade82a09e524af6926d965081653702a) |
| 11:48:04 | wSOL → USX | market sell | Winner too late: creation blockhash expired | `0xfb451aad…` [🐞](https://debug.barn.cow.fi/order/0xfb451aad3d62ed0607268c303d5ed6275a4c5e4a0b0c0d8c924ed19c13016795) |
| 11:48:04 | wSOL → SPCXx | market sell | Winner too late: creation blockhash expired | `0xccd10ebc…` [🐞](https://debug.barn.cow.fi/order/0xccd10ebcaf96797ebe71b16d261762a1e8dd24389f2b71c5e798c8679b128aab) |
| 11:48:08 | wSOL → syrupUSDC | market sell | Winner too late: creation blockhash expired | `0x289f9a39…` [🐞](https://debug.barn.cow.fi/order/0x289f9a39094632263458c7e23f7d195c42d0c64c6e6e445cbcd59b5892808e0d) |
| 11:48:09 | wSOL → NVDAx | market sell | Winner too late: creation blockhash expired | `0x55a15d95…` [🐞](https://debug.barn.cow.fi/order/0x55a15d95d41e893ecd296c7c2dc4ac2c2b3b55c62fd3c37aba791141ee5bd8be) |
| 11:48:12 | wSOL → HOOKED | market sell | Winner too late: creation blockhash expired | `0xe689aec7…` [🐞](https://debug.barn.cow.fi/order/0xe689aec72b582d016b66a00d7f0b92a38fd28cab39979239f97b92a261d3d2c1) |
| 11:48:13 | wSOL → PENGU | market sell | Winner too late: creation blockhash expired | `0x9087e5c1…` [🐞](https://debug.barn.cow.fi/order/0x9087e5c1190f1290eafcf430090c4dfce0aeff0aec0f4df9c6bc93d1c9d3d32c) |
| 11:48:16 | wSOL → ONyc | market sell | Winner too late: creation blockhash expired | `0x533d8f95…` [🐞](https://debug.barn.cow.fi/order/0x533d8f956b58f66d249bf1f943efdd1afa2b85ff9745a12453257089e215f78e) |
| 11:48:17 | wSOL → SPCX | market sell | Winner too late: creation blockhash expired | `0xd2b83d1c…` [🐞](https://debug.barn.cow.fi/order/0xd2b83d1c13a5c887d01861e6be50212b091f9369cf91a7c4d4f35a5e7ae49cf5) |
| 11:48:20 | wSOL → fone | market sell | Winner too late: creation blockhash expired | `0x9196bc67…` [🐞](https://debug.barn.cow.fi/order/0x9196bc67ac1a5c23de69a75522937f073041953080633dc204697384690f9c3d) |
| 11:48:22 | wSOL → JitoSOL | market sell | Winner too late: creation blockhash expired | `0x66e2c750…` [🐞](https://debug.barn.cow.fi/order/0x66e2c75065c9fa87131edda4cd0d7c82f23a18a186a8b1f7921be8f0b0ba3069) |
| 11:48:24 | wSOL → TROLL | market sell | Winner too late: creation blockhash expired | `0x3777d2b5…` [🐞](https://debug.barn.cow.fi/order/0x3777d2b59e36c40c166652766055daabac03e16ec103f18debd96be47fea13d0) |
| 11:48:26 | wSOL → JLP | market sell | Winner too late: creation blockhash expired | `0x129255e9…` [🐞](https://debug.barn.cow.fi/order/0x129255e9a9b605869b0692f65d9530d14663db772644e1afc52d8122058550e6) |
| 11:48:28 | wSOL → neet | market sell | Winner too late: creation blockhash expired | `0x66e2a9f4…` [🐞](https://debug.barn.cow.fi/order/0x66e2a9f432e06f18cb2d62842a093f7792020d6de1f377197f0526fdc1ca792e) |
| 11:48:30 | wSOL → JupSOL | market sell | Winner too late: creation blockhash expired | `0x86ec77b3…` [🐞](https://debug.barn.cow.fi/order/0x86ec77b36a7b535015021ca35cf0e37fadeefb86e7f0d3760c548ef42891aeda) |
| 11:48:30 | wSOL → ANSEM | market sell | Winner too late: creation blockhash expired | `0xb8ab84c8…` [🐞](https://debug.barn.cow.fi/order/0xb8ab84c87828d455d6c796f012e685c1bb6823a4a2f7d3cbf30bb46db2d6208f) |
| 11:48:32 | wSOL → GEOD | market sell | Winner too late: creation blockhash expired | `0xe3187f52…` [🐞](https://debug.barn.cow.fi/order/0xe3187f52e7752ecc6777afe37ffd150b5f8e5658f725334abec3651a9c6ac137) |
| 11:48:33 | wSOL → OTC | market sell | Winner too late: creation blockhash expired | `0x45772db0…` [🐞](https://debug.barn.cow.fi/order/0x45772db09378d86b02dbc748db59e4e37da7aea865a137e7b3773e8cccdca180) |
| 11:48:34 | wSOL → WBTC | market sell | Winner too late: creation blockhash expired | `0x1091d453…` [🐞](https://debug.barn.cow.fi/order/0x1091d45378e97ff9a4a655587b990cf63241b74e951ffaa03f43f75e4b41c33c) |
| 11:48:36 | wSOL → ORE | market sell | Winner too late: creation blockhash expired | `0xdea25247…` [🐞](https://debug.barn.cow.fi/order/0xdea25247bee4af95a223632b8d0fe2275fe905648284f97003aba0437ca99823) |
| 11:48:38 | wSOL → JEANPHIL | market sell | Winner too late: creation blockhash expired | `0xa7cd3f78…` [🐞](https://debug.barn.cow.fi/order/0xa7cd3f7826d55a4c0e4b5b92403a4e54f522ac0f363211ed0c30977d12746d5e) |
| 11:48:39 | wSOL → USELESS | market sell | Winner too late: creation blockhash expired | `0x1aa49f9e…` [🐞](https://debug.barn.cow.fi/order/0x1aa49f9ec6604d7615cd194455c5fd6e617c5bd8d3bff692ba08f564ea02f237) |
| 11:48:39 | wSOL → MET | market sell | Winner too late: creation blockhash expired | `0xc8d0cd6f…` [🐞](https://debug.barn.cow.fi/order/0xc8d0cd6fa83e80c81e8b8dbee68952bca39cb32ecc194a3a81fa3b8e5a469368) |
| 11:48:40 | wSOL → xSOL | market sell | Winner too late: creation blockhash expired | `0xd6d2375c…` [🐞](https://debug.barn.cow.fi/order/0xd6d2375cb886b5f7c48cfe1d2912c0fac04c11af77e0a28f717b7fea882351d3) |
| 11:48:42 | wSOL → RAY | market sell | Winner too late: creation blockhash expired | `0xcc376318…` [🐞](https://debug.barn.cow.fi/order/0xcc37631887749c1e10627f5f897e217123b33aa9f480a9e2feb0e9b94dca7bf8) |
| 11:48:44 | wSOL → mSOL | market sell | Winner too late: creation blockhash expired | `0x48549caf…` [🐞](https://debug.barn.cow.fi/order/0x48549cafe85ef5ab816e996133890feb3bf69d55006d1c86f947de8218ab07ce) |
| 11:48:46 | wSOL → USX | market sell | Winner too late: creation blockhash expired | `0x4c08ca1d…` [🐞](https://debug.barn.cow.fi/order/0x4c08ca1ddd22a5118f1d9649203058f6e543fac30fde1f48efde1ff1e46ccb11) |
| 11:48:47 | wSOL → syrupUSDC | market sell | Winner too late: creation blockhash expired | `0x990629df…` [🐞](https://debug.barn.cow.fi/order/0x990629df790c48ab0bca96607ae0bea12e26dc069aa759d19469a1fd9e930eef) |
| 11:48:48 | wSOL → Fartcoin | market sell | Winner too late: creation blockhash expired | `0x9fe05ca2…` [🐞](https://debug.barn.cow.fi/order/0x9fe05ca2780dfabeb86d3e1fdaccfbcdf29edd9d4062dfbcc3423e9c89bd8a3c) |
| 11:48:51 | wSOL → ANTFUN | market sell | Winner too late: creation blockhash expired | `0x3728906f…` [🐞](https://debug.barn.cow.fi/order/0x3728906f46c767eb59175366de31f8bbef3bf81acef58f9bfc14ede419c7637f) |
| 11:48:59 | wSOL → ONyc | market sell | Winner too late: creation blockhash expired | `0x51e02654…` [🐞](https://debug.barn.cow.fi/order/0x51e02654846b5afaa258a6fe6b7fe1ef0c8e9d1b39a8a5a07bb789237f97bc4e) |
| 11:49:02 | wSOL → fone | market sell | Winner too late: creation blockhash expired | `0x88132903…` [🐞](https://debug.barn.cow.fi/order/0x88132903a647e45ffc9e4f22af1abd9258960123686e84cc8a8b90b41b1bec9f) |
| 11:49:06 | wSOL → TROLL | market sell | Winner too late: creation blockhash expired | `0xbf629e57…` [🐞](https://debug.barn.cow.fi/order/0xbf629e57c75d3e299cb0f2253d5694886c3c5b0ce072660c03c8f4f8b8837aed) |
| 11:49:07 | wSOL → GO | market sell | Winner too late: creation blockhash expired | `0x46761512…` [🐞](https://debug.barn.cow.fi/order/0x467615126da745a04558a17ce36fcd78e8ba2ac5599cba9cbc8584840bc916f6) |
| 11:49:14 | wSOL → GEOD | market sell | Winner too late: creation blockhash expired | `0x5b3f6fb4…` [🐞](https://debug.barn.cow.fi/order/0x5b3f6fb4566af85b65f5f1eea6963f45b0247ad669a81e21119d007d098eb415) |
| 11:49:18 | wSOL → ORE | market sell | Winner too late: creation blockhash expired | `0x7bc23006…` [🐞](https://debug.barn.cow.fi/order/0x7bc23006b017d60e898d0d385f03a60ed6d1d1c1943c032870310e6eec4ea54d) |
| 11:49:19 | wSOL → xSOL | market sell | Winner too late: creation blockhash expired | `0x8e179253…` [🐞](https://debug.barn.cow.fi/order/0x8e179253bd3fde9a8d4cffa35d6f421651c5043ad6b9a95c9fcf768994cc3be9) |
| 11:49:25 | wSOL → mSOL | market sell | Winner too late: creation blockhash expired | `0x8e6ee80b…` [🐞](https://debug.barn.cow.fi/order/0x8e6ee80bed388442223039eb02eec1413b63de5ac90b1b5ab787b654d52b72ad) |
| 11:49:30 | wSOL → Fartcoin | market sell | Winner too late: creation blockhash expired | `0x549e140b…` [🐞](https://debug.barn.cow.fi/order/0x549e140b6b46c908f52f042d8a37e71fde2f3fd756f54b32bc38a17c40a554c1) |
| 11:49:48 | wSOL → GO | market sell | Winner too late: creation blockhash expired | `0xad8c066a…` [🐞](https://debug.barn.cow.fi/order/0xad8c066aaa4fa5cea7a005d50da9a219d9a6491fd6b3c236a66674c72864c2e3) |
