# Solana QoS report: 2026-10-09-11-30-token-universe__top250

Barn, orders created between `2026-10-09T11:30:20.478Z` and `2026-10-09T11:56:26.420Z`. Data fetched 2026-10-09T12:07:39+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 411 |
| Orders executed | **402** (97.8%) |
| Sponsored orders never created on-chain | 8 (1.9%) |
| Traders | 30 |
| Settlement txs | 402 |

## Scenario

381 of 472 scenario rows completed. 0 retries, 72 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 11:30:48 | 1 | 1 | sell 0.005 SOL → EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v | filled | 40s | 1 |  |
| 11:31:28 | 2 | 1 | sell 0.494 EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v → SOL | filled | 10s | 1 |  |
| 11:31:53 | 3 | 2 | sell 0.005 SOL → Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB | failed | 105s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "53b60279-6968-4257-bf34-78eecb0cfd08" } 
 |
| 11:33:38 | 4 | 2 | sell 0.494 Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB → SOL | filled | 52s | 2 |  |
| 11:30:48 | 5 | 3 | sell 0.005 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 43s | 1 |  |
| 11:31:31 | 6 | 3 | sell 0.494 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → SOL | filled | 84s | 1 |  |
| 11:30:48 | 7 | 4 | sell 0.005 SOL → 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx | filled | 43s | 1 |  |
| 11:31:31 | 8 | 4 | sell 3.38 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx → SOL | failed | 57s | 1 | main expired |
| 11:32:16 | 10 | 5 | sell 0.000403 A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS → SOL | failed | 3s | 0 | acquire A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:30:44 | 11 | 6 | sell 0.005 SOL → JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD | failed | 103s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "9d5520ba-c482-4152-be20-3073b2af0551" } 
 |
| 11:32:27 | 12 | 6 | sell 0.494 JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD → SOL | filled | 55s | 2 |  |
| 11:31:09 | 13 | 7 | sell 0.005 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 20s | 1 |  |
| 11:31:29 | 14 | 7 | sell 0.494 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → SOL | filled | 10s | 1 |  |
| 11:30:44 | 15 | 8 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 14s | 1 |  |
| 11:30:58 | 16 | 8 | sell 0.494 DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT → SOL | filled | 15s | 1 |  |
| 11:30:20 | 17 | 9 | sell 0.005 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 82s | 1 |  |
| 11:31:42 | 18 | 9 | sell 86.5 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn → SOL | filled | 16s | 1 |  |
| 11:30:20 | 19 | 10 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 71s | 1 |  |
| 11:31:31 | 20 | 10 | sell 5.98e-06 cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij → SOL | filled | 28s | 1 |  |
| 11:30:20 | 21 | 11 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 59s | 1 |  |
| 11:31:19 | 22 | 11 | sell 0.000198 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs → SOL | filled | 23s | 1 |  |
| 11:30:20 | 23 | 12 | sell 0.005 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 31s | 1 |  |
| 11:30:51 | 24 | 12 | sell 103 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump → SOL | failed | 125s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "dc99bf5c-8b5d-4b04-ad35-2f25a794fb07" } 
 |
| 11:30:21 | 25 | 13 | sell 0.005 SOL → BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy | failed | 237s | 1 | main timeout |
| 11:34:17 | 26 | 13 | sell 0.404 BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy → SOL | filled | 29s | 2 |  |
| 11:30:21 | 27 | 14 | sell 0.005 SOL → 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g | filled | 163s | 1 |  |
| 11:33:03 | 28 | 14 | sell 0.00576 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g → SOL | filled | 40s | 1 |  |
| 11:30:21 | 29 | 15 | sell 0.005 SOL → Ai66LHZG9MCzg1WKdawwqduVAXpNDUuV8M3uyq5ppump | filled | 36s | 1 |  |
| 11:30:57 | 30 | 15 | sell 9.07 Ai66LHZG9MCzg1WKdawwqduVAXpNDUuV8M3uyq5ppump → SOL | filled | 29s | 1 |  |
| 11:30:21 | 31 | 16 | sell 0.005 SOL → 3ZLekZYq2qkZiSpnSvabjit34tUkjSwD1JFuW9as9wBG | failed | 115s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 11:32:15 | 32 | 16 | sell 0.103 3ZLekZYq2qkZiSpnSvabjit34tUkjSwD1JFuW9as9wBG → SOL | filled | 45s | 2 |  |
| 11:30:21 | 33 | 17 | sell 0.005 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 71s | 1 |  |
| 11:31:31 | 34 | 17 | sell 0.494 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → SOL | filled | 32s | 1 |  |
| 11:30:21 | 35 | 18 | sell 0.005 SOL → CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp | failed | 127s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "af5261f9-15d7-4974-9107-311e2798f9f5" } 
 |
| 11:32:28 | 36 | 18 | sell 1.74 CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp → SOL | filled | 66s | 2 |  |
| 11:30:21 | 37 | 19 | sell 0.005 SOL → 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 | filled | 148s | 1 |  |
| 11:32:49 | 38 | 19 | sell 83.7 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 → SOL | filled | 11s | 1 |  |
| 11:30:21 | 39 | 20 | sell 0.005 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 133s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "507b0115-9f07-4c76-8433-86565d647838" } 
 |
| 11:32:34 | 40 | 20 | sell 3.54 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → SOL | failed | 15s | 0 | acquire 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump error: 404 Not Found: NoLiquidity: no route found |
| 11:30:21 | 41 | 21 | sell 0.005 SOL → 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh | filled | 30s | 1 |  |
| 11:30:51 | 42 | 21 | sell 5.99e-06 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh → SOL | filled | 51s | 1 |  |
| 11:30:21 | 43 | 22 | sell 0.005 SOL → Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk | failed | 95s | 0 | error: failed to get balance of account CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "bfefaeeb-b301-411c-9860-642e003061ce" } 
 |
| 11:31:56 | 44 | 22 | sell 2.58 Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk → SOL | filled | 59s | 2 |  |
| 11:30:21 | 45 | 23 | sell 0.005 SOL → 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R | filled | 29s | 1 |  |
| 11:30:50 | 46 | 23 | sell 0.207 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R → SOL | filled | 64s | 1 |  |
| 11:31:26 | 47 | 24 | sell 0.005 SOL → USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB | filled | 14s | 1 |  |
| 11:31:40 | 48 | 24 | sell 0.494 USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB → SOL | filled | 23s | 1 |  |
| 11:30:44 | 49 | 25 | sell 0.005 SOL → CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt | filled | 13s | 1 |  |
| 11:30:57 | 50 | 25 | sell 42 CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt → SOL | filled | 43s | 1 |  |
| 11:30:48 | 51 | 26 | sell 0.005 SOL → JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN | failed | 35s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:31:23 | 52 | 26 | sell 1.36 JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN → SOL | filled | 35s | 2 |  |
| 11:31:29 | 53 | 27 | sell 0.005 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 23s | 1 |  |
| 11:31:52 | 54 | 27 | sell 0.000633 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 14s | 1 |  |
| 11:33:20 | 56 | 28 | sell 36.2 Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump → SOL | failed | 3s | 0 | acquire Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump error: 404 Not Found: NoLiquidity: no route found |
| 11:31:08 | 57 | 29 | sell 0.005 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 23s | 1 |  |
| 11:31:30 | 58 | 29 | sell 0.00296 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | filled | 33s | 1 |  |
| 11:31:07 | 59 | 30 | sell 0.005 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 23s | 1 |  |
| 11:31:30 | 60 | 30 | sell 0.00211 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | filled | 24s | 1 |  |
| 11:31:44 | 61 | 1 | sell 0.005 SOL → 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv | filled | 43s | 1 |  |
| 11:32:27 | 62 | 1 | sell 61.7 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv → SOL | filled | 33s | 1 |  |
| 11:34:32 | 63 | 2 | sell 0.005 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 97s | 1 |  |
| 11:36:09 | 64 | 2 | sell 0.00296 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb → SOL | filled | 86s | 1 |  |
| 11:32:56 | 65 | 3 | sell 0.005 SOL → CbcyNo7m1amFWqEQm2m4PLv1UNvpcL3C1Ujm6AkzpKoU | filled | 111s | 1 |  |
| 11:34:47 | 66 | 3 | sell 221 CbcyNo7m1amFWqEQm2m4PLv1UNvpcL3C1Ujm6AkzpKoU → SOL | filled | 78s | 1 |  |
| 11:32:46 | 67 | 4 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 10s | 1 |  |
| 11:32:55 | 68 | 4 | sell 0.00345 J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn → SOL | failed | 111s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "98b9806f-0f43-44d0-b4f4-91bd869a603d" } 
 |
| 11:32:19 | 69 | 5 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 64s | 1 |  |
| 11:33:23 | 70 | 5 | sell 0.106 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 → SOL | filled | 11s | 1 |  |
| 11:33:31 | 71 | 6 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 11s | 1 |  |
| 11:33:42 | 72 | 6 | sell 0.00371 jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v → SOL | filled | 28s | 1 |  |
| 11:31:44 | 73 | 7 | sell 0.005 SOL → WXMRyRZhsa19ety5erZhHg4N3xj3EVN92u94422teJp | filled | 41s | 1 |  |
| 11:32:25 | 74 | 7 | sell 0.000913 WXMRyRZhsa19ety5erZhHg4N3xj3EVN92u94422teJp → SOL | filled | 31s | 1 |  |
| 11:31:24 | 75 | 8 | sell 0.005 SOL → MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump | filled | 8s | 1 |  |
| 11:31:31 | 76 | 8 | sell 68.5 MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump → SOL | failed | 100s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "bcdcfff4-ad3f-4f49-9915-bb0e99e4e0fe" } 
 |
| 11:33:57 | 78 | 9 | sell 41.6 GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump → SOL | failed | 8s | 0 | acquire GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump error: 404 Not Found: NoLiquidity: no route found |
| 11:32:20 | 79 | 10 | sell 0.005 SOL → METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL | filled | 36s | 1 |  |
| 11:32:56 | 80 | 10 | sell 1.18 METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL → SOL | filled | 98s | 1 |  |
| 11:31:44 | 81 | 11 | sell 0.005 SOL → 7VertkgF9KLhxxJXHX6uaWuoYZTP9LdGj2bWmVXVpump | filled | 41s | 1 |  |
| 11:32:24 | 82 | 11 | sell 83.9 7VertkgF9KLhxxJXHX6uaWuoYZTP9LdGj2bWmVXVpump → SOL | filled | 35s | 1 |  |
| 11:32:59 | 83 | 12 | sell 0.005 SOL → 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG | filled | 76s | 1 |  |
| 11:34:15 | 84 | 12 | sell 0.494 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG → SOL | filled | 20s | 1 |  |
| 11:35:09 | 85 | 13 | sell 0.005 SOL → AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj | filled | 47s | 1 |  |
| 11:35:57 | 86 | 13 | sell 0.416 AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj → SOL | filled | 8s | 1 |  |
| 11:34:05 | 87 | 14 | sell 0.005 SOL → C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE | filled | 10s | 1 |  |
| 11:34:15 | 88 | 14 | sell 58.3 C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE → SOL | filled | 26s | 1 |  |
| 11:31:26 | 89 | 15 | sell 0.005 SOL → sUSDai6Y3GxysDEtA9BVcEFTaog6UZpYUVxJiMhAKYE | filled | 66s | 1 |  |
| 11:32:32 | 90 | 15 | sell 0.442 sUSDai6Y3GxysDEtA9BVcEFTaog6UZpYUVxJiMhAKYE → SOL | failed | 14s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:33:16 | 91 | 16 | sell 0.005 SOL → 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 | filled | 25s | 1 |  |
| 11:33:41 | 92 | 16 | sell 0.429 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 → SOL | failed | 119s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "d0aad125-6e54-48fb-aee5-6409597a32de" } 
 |
| 11:32:13 | 93 | 17 | sell 0.005 SOL → PEPEqnuuCDbBC89p1u9vpnP1KQ2oj1xTcQBsjt9X55m | filled | 14s | 1 |  |
| 11:32:27 | 94 | 17 | sell 127000 PEPEqnuuCDbBC89p1u9vpnP1KQ2oj1xTcQBsjt9X55m → SOL | filled | 34s | 1 |  |
| 11:33:34 | 95 | 18 | sell 0.005 SOL → CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump | filled | 75s | 1 |  |
| 11:34:49 | 96 | 18 | sell 95.6 CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump → SOL | failed | 121s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "819c4d39-c9ad-4387-add6-0726a5c17a60" } 
 |
| 11:33:14 | 97 | 19 | sell 0.005 SOL → 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 | filled | 19s | 1 |  |
| 11:33:33 | 98 | 19 | sell 13.2 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 → SOL | filled | 11s | 1 |  |
| 11:32:50 | 99 | 20 | sell 0.005 SOL → Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump | filled | 9s | 1 |  |
| 11:32:59 | 100 | 20 | sell 15.1 Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump → SOL | filled | 45s | 1 |  |
| 11:31:43 | 101 | 21 | sell 0.005 SOL → 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu | filled | 16s | 1 |  |
| 11:31:59 | 102 | 21 | sell 1.69 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu → SOL | failed | 59s | 1 | main expired |
| 11:32:56 | 103 | 22 | sell 0.005 SOL → DoGEV7LASBkQbibMc5k5vKnTZoMg423GpJ5QtJEGfm7R | failed | 117s | 0 | error: failed to get balance of account CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "f6cee3f5-bc98-4003-9cfe-00d84c32acbe" } 
 |
| 11:34:53 | 104 | 22 | sell 5.85 DoGEV7LASBkQbibMc5k5vKnTZoMg423GpJ5QtJEGfm7R → SOL | filled | 32s | 2 |  |
| 11:31:56 | 105 | 23 | sell 0.005 SOL → oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp | filled | 109s | 1 |  |
| 11:33:45 | 106 | 23 | sell 0.00488 oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp → SOL | filled | 132s | 1 |  |
| 11:32:19 | 107 | 24 | sell 0.005 SOL → 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs | filled | 34s | 1 |  |
| 11:32:54 | 108 | 24 | sell 6.69 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs → SOL | failed | 110s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "e1d3724a-564d-44de-8bd6-ba3befd774d7" } 
 |
| 11:31:56 | 109 | 25 | sell 0.005 SOL → EicWvteVi2fWepEzS3FYWsnuPoP6caZfjnKqNvydLjCH | filled | 100s | 1 |  |
| 11:33:36 | 110 | 25 | sell 0.137 EicWvteVi2fWepEzS3FYWsnuPoP6caZfjnKqNvydLjCH → SOL | failed | 118s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "c3ad5566-149d-4e1a-8669-de15c70534fb" } 
 |
| 11:33:43 | 112 | 26 | sell 0.00319 mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So → SOL | failed | 155s | 1 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "9338c5d3-5041-4a3b-92b6-81d53a36838d" } 
 |
| 11:32:19 | 113 | 27 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 13s | 1 |  |
| 11:32:32 | 114 | 27 | sell 3.04 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump → SOL | filled | 22s | 1 |  |
| 11:33:31 | 115 | 28 | sell 0.005 SOL → D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n | filled | 11s | 1 |  |
| 11:33:42 | 116 | 28 | sell 3050 D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n → SOL | filled | 57s | 1 |  |
| 11:32:12 | 117 | 29 | sell 0.005 SOL → 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN | filled | 14s | 1 |  |
| 11:32:27 | 118 | 29 | sell 0.268 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN → SOL | filled | 33s | 1 |  |
| 11:31:56 | 119 | 30 | sell 0.005 SOL → DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF | failed | 117s | 0 | error: failed to get balance of account AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "8fd85cee-3637-4002-82ff-b1a4d622aa23" } 
 |
| 11:33:52 | 120 | 30 | sell 0.0596 DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF → SOL | failed | 13s | 0 | acquire DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF error: 404 Not Found: NoLiquidity: no route found |
| 11:33:17 | 121 | 1 | sell 0.005 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | filled | 79s | 1 |  |
| 11:34:36 | 122 | 1 | sell 0.000681 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu → SOL | filled | 14s | 1 |  |
| 11:39:44 | 124 | 2 | sell 298 PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL → SOL | filled | 106s | 2 |  |
| 11:36:06 | 125 | 3 | sell 0.005 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 75s | 1 |  |
| 11:37:21 | 126 | 3 | sell 0.00285 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 → SOL | filled | 22s | 1 |  |
| 11:35:09 | 127 | 4 | sell 0.005 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | filled | 15s | 1 |  |
| 11:35:24 | 128 | 4 | sell 0.000931 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX → SOL | filled | 34s | 1 |  |
| 11:33:35 | 129 | 5 | sell 0.005 SOL → CbyTNf7UPzvewHh4Zp6umogM2RWahhmGRJWLJnPwpump | filled | 67s | 1 |  |
| 11:34:41 | 130 | 5 | sell 422 CbyTNf7UPzvewHh4Zp6umogM2RWahhmGRJWLJnPwpump → SOL | filled | 8s | 1 |  |
| 11:34:32 | 131 | 6 | sell 0.005 SOL → DvdmEnztCmXwBnAbedD48XVGZJSxq31zNvnyftXdpump | filled | 12s | 1 |  |
| 11:34:44 | 132 | 6 | sell 274 DvdmEnztCmXwBnAbedD48XVGZJSxq31zNvnyftXdpump → SOL | filled | 95s | 1 |  |
| 11:33:19 | 133 | 7 | sell 0.005 SOL → 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E | filled | 23s | 1 |  |
| 11:33:42 | 134 | 7 | sell 0.495 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E → SOL | failed | 108s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "f5d750c2-5622-4479-8094-0266aee4185f" } 
 |
| 11:33:14 | 135 | 8 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 81s | 1 |  |
| 11:34:35 | 136 | 8 | sell 0.00129 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re → SOL | filled | 127s | 1 |  |
| 11:34:05 | 137 | 9 | sell 0.005 SOL → BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump | filled | 9s | 1 |  |
| 11:34:15 | 138 | 9 | sell 52.5 BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump → SOL | filled | 13s | 1 |  |
| 11:34:36 | 139 | 10 | sell 0.005 SOL → SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH | filled | 37s | 1 |  |
| 11:35:13 | 140 | 10 | sell 0.000301 SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH → SOL | filled | 61s | 1 |  |
| 11:33:34 | 141 | 11 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 101s | 1 |  |
| 11:35:15 | 142 | 11 | sell 149000 DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 → SOL | filled | 49s | 1 |  |
| 11:34:37 | 143 | 12 | sell 0.005 SOL → LBTCgU4b3wsFKsPwBn1rRZDx5DoFutM6RPiEt1TPDsY | filled | 13s | 1 |  |
| 11:34:50 | 144 | 12 | sell 5.96e-06 LBTCgU4b3wsFKsPwBn1rRZDx5DoFutM6RPiEt1TPDsY → SOL | filled | 35s | 1 |  |
| 11:36:07 | 145 | 13 | sell 0.005 SOL → GY9mZfyPpxXxBXBxS2hB2XjhP3kfUsywTvgveozxpump | filled | 33s | 1 |  |
| 11:36:40 | 146 | 13 | sell 1560 GY9mZfyPpxXxBXBxS2hB2XjhP3kfUsywTvgveozxpump → SOL | filled | 37s | 1 |  |
| 11:34:43 | 147 | 14 | sell 0.005 SOL → Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs | filled | 118s | 1 |  |
| 11:36:41 | 148 | 14 | sell 0.772 Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs → SOL | filled | 62s | 1 |  |
| 11:32:49 | 149 | 15 | sell 0.005 SOL → Ax5dAamJPeuaLpFUzs9FdcpoUhHDcxyjPzxCJQidjups | filled | 11s | 1 |  |
| 11:33:00 | 150 | 15 | sell 225 Ax5dAamJPeuaLpFUzs9FdcpoUhHDcxyjPzxCJQidjups → SOL | filled | 26s | 1 |  |
| 11:35:42 | 151 | 16 | sell 0.005 SOL → orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE | filled | 26s | 1 |  |
| 11:36:08 | 152 | 16 | sell 0.209 orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE → SOL | failed | 90s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "657359da-210a-42a1-8b86-1d4ddede9eec" } 
 |
| 11:33:32 | 153 | 17 | sell 0.005 SOL → 3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 | filled | 11s | 1 |  |
| 11:33:43 | 154 | 17 | sell 0.466 3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 → SOL | filled | 32s | 1 |  |
| 11:37:12 | 155 | 18 | sell 0.005 SOL → 9aqmJjCnnMQv42TXLk921ceUkN35nea2QP969n1caqjj | filled | 10s | 1 |  |
| 11:37:22 | 156 | 18 | sell 351 9aqmJjCnnMQv42TXLk921ceUkN35nea2QP969n1caqjj → SOL | filled | 20s | 1 |  |
| 11:34:08 | 157 | 19 | sell 0.005 SOL → 5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump | filled | 70s | 1 |  |
| 11:35:19 | 158 | 19 | sell 137 5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump → SOL | filled | 11s | 1 |  |
| 11:34:06 | 159 | 20 | sell 0.005 SOL → jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL | failed | 104s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "ab6d678f-25db-46d8-ac50-0284b5cd57a1" } 
 |
| 11:35:49 | 160 | 20 | sell 0.955 jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL → SOL | failed | 99s | 1 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "c0147b2c-1074-4aa3-a310-5e7204d41830" } 
 |
| 11:33:34 | 161 | 21 | sell 0.005 SOL → Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump | filled | 11s | 1 |  |
| 11:33:44 | 162 | 21 | sell 163 Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump → SOL | failed | 103s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "30c1d9a5-a1ca-4e16-9367-a5df84c48ffa" } 
 |
| 11:35:39 | 163 | 22 | sell 0.005 SOL → J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump | filled | 30s | 1 |  |
| 11:36:09 | 164 | 22 | sell 73.2 J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump → SOL | filled | 37s | 1 |  |
| 11:35:57 | 165 | 23 | sell 0.005 SOL → BXoHJddsWJLHtAopeiSbKUSELsu8hSFMs8baGMDkpump | filled | 13s | 1 |  |
| 11:36:10 | 166 | 23 | sell 126 BXoHJddsWJLHtAopeiSbKUSELsu8hSFMs8baGMDkpump → SOL | filled | 80s | 1 |  |
| 11:34:46 | 167 | 24 | sell 0.005 SOL → 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz | failed | 75s | 1 | main expired |
| 11:36:01 | 168 | 24 | sell 14500 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz → SOL | failed | 2s | 0 | acquire 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz error: 404 Not Found: NoLiquidity: no route found |
| 11:35:39 | 169 | 25 | sell 0.005 SOL → DoVAVzViX8Bjy3r15nwikSaSbzE6dV4ovd28aWpJpump | filled | 19s | 1 |  |
| 11:35:58 | 170 | 25 | sell 348 DoVAVzViX8Bjy3r15nwikSaSbzE6dV4ovd28aWpJpump → SOL | filled | 10s | 1 |  |
| 11:36:32 | 171 | 26 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 13s | 1 |  |
| 11:36:45 | 172 | 26 | sell 0.441 HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr → SOL | filled | 28s | 1 |  |
| 11:32:56 | 173 | 27 | sell 0.005 SOL → J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr | filled | 30s | 1 |  |
| 11:33:25 | 174 | 27 | sell 1.35 J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr → SOL | filled | 16s | 1 |  |
| 11:34:43 | 175 | 28 | sell 0.005 SOL → 7M3gDRgozcumFsiTeXwjB8cYxpg7Q9R7rH7rkw2Fpump | filled | 41s | 1 |  |
| 11:35:24 | 176 | 28 | sell 152 7M3gDRgozcumFsiTeXwjB8cYxpg7Q9R7rH7rkw2Fpump → SOL | filled | 37s | 1 |  |
| 11:34:43 | 177 | 29 | sell 0.005 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 73s | 1 |  |
| 11:35:56 | 178 | 29 | sell 0.000468 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 → SOL | filled | 7s | 1 |  |
| 11:34:06 | 179 | 30 | sell 0.005 SOL → USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA | filled | 127s | 1 |  |
| 11:36:13 | 180 | 30 | sell 0.494 USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA → SOL | filled | 148s | 1 |  |
| 11:35:06 | 181 | 1 | sell 0.005 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | filled | 13s | 1 |  |
| 11:35:19 | 182 | 1 | sell 0.00141 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN → SOL | filled | 35s | 1 |  |
| 11:41:32 | 183 | 2 | sell 0.005 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | filled | 22s | 1 |  |
| 11:41:54 | 184 | 2 | sell 0.0194 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc → SOL | filled | 12s | 1 |  |
| 11:37:45 | 185 | 3 | sell 0.005 SOL → 8k4sBtEeK4pf26noKqApv8NBTnuSJcbdwpKYknk5PbAA | filled | 60s | 1 |  |
| 11:38:45 | 186 | 3 | sell 204 8k4sBtEeK4pf26noKqApv8NBTnuSJcbdwpKYknk5PbAA → SOL | filled | 104s | 1 |  |
| 11:36:00 | 187 | 4 | sell 0.005 SOL → METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m | filled | 19s | 1 |  |
| 11:36:19 | 188 | 4 | sell 10.1 METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m → SOL | filled | 36s | 1 |  |
| 11:35:05 | 189 | 5 | sell 0.005 SOL → Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump | filled | 13s | 1 |  |
| 11:35:18 | 190 | 5 | sell 61.9 Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump → SOL | filled | 13s | 1 |  |
| 11:36:32 | 191 | 6 | sell 0.005 SOL → taoC6xyv2v8tDLcev4uaGUgV4vdQsWJrGft2kcBRrBY | filled | 16s | 1 |  |
| 11:36:48 | 192 | 6 | sell 0.00181 taoC6xyv2v8tDLcev4uaGUgV4vdQsWJrGft2kcBRrBY → SOL | filled | 25s | 1 |  |
| 11:36:00 | 193 | 7 | sell 0.005 SOL → DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 | failed | 3s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:36:03 | 194 | 7 | sell 57.6 DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 → SOL | filled | 36s | 2 |  |
| 11:36:45 | 195 | 8 | sell 0.005 SOL → 2zCo6bUowJMvr89ajxuWsPadAqJ2F9akCkxumNsSdgsL | filled | 28s | 1 |  |
| 11:37:13 | 196 | 8 | sell 0.239 2zCo6bUowJMvr89ajxuWsPadAqJ2F9akCkxumNsSdgsL → SOL | filled | 10s | 1 |  |
| 11:34:31 | 197 | 9 | sell 0.005 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 18s | 1 |  |
| 11:34:50 | 198 | 9 | sell 0.00601 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | failed | 125s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "c16b7a6e-5b56-40ba-980c-33ae93c392fd" } 
 |
| 11:36:42 | 199 | 10 | sell 0.005 SOL → DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 | filled | 53s | 1 |  |
| 11:37:35 | 200 | 10 | sell 25.7 DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 → SOL | filled | 80s | 1 |  |
| 11:36:07 | 201 | 11 | sell 0.005 SOL → nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 | filled | 169s | 1 |  |
| 11:38:55 | 202 | 11 | sell 0.856 nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 → SOL | filled | 44s | 1 |  |
| 11:37:22 | 203 | 12 | sell 0.005 SOL → BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T | filled | 22s | 1 |  |
| 11:37:44 | 204 | 12 | sell 0.0173 BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T → SOL | failed | 122s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "dc8c206c-56de-434a-86b6-97ac7d282a89" } 
 |
| 11:37:18 | 205 | 13 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 11s | 1 |  |
| 11:37:29 | 206 | 13 | sell 0.00309 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm → SOL | filled | 53s | 1 |  |
| 11:38:13 | 207 | 14 | sell 0.005 SOL → KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS | filled | 44s | 1 |  |
| 11:38:57 | 208 | 14 | sell 14 KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS → SOL | filled | 73s | 1 |  |
| 11:33:28 | 209 | 15 | sell 0.005 SOL → 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx | failed | 3s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:33:31 | 210 | 15 | sell 0.238 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx → SOL | failed | 104s | 1 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "3bc91c1c-8db8-4021-be0a-e57f1ae7035b" } 
 |
| 11:37:54 | 211 | 16 | sell 0.005 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | filled | 21s | 1 |  |
| 11:38:16 | 212 | 16 | sell 0.000653 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ → SOL | filled | 103s | 1 |  |
| 11:34:24 | 213 | 17 | sell 0.005 SOL → 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump | filled | 20s | 1 |  |
| 11:34:44 | 214 | 17 | sell 61.8 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump → SOL | filled | 90s | 1 |  |
| 11:37:55 | 215 | 18 | sell 0.005 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | failed | 47s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:38:43 | 216 | 18 | sell 0.00205 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 → SOL | failed | 4s | 0 | acquire XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 error: 404 Not Found: NoLiquidity: no route found |
| 11:35:46 | 217 | 19 | sell 0.005 SOL → PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b | filled | 12s | 1 |  |
| 11:35:57 | 218 | 19 | sell 12.5 PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b → SOL | filled | 16s | 1 |  |
| 11:37:30 | 219 | 20 | sell 0.005 SOL → CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn | failed | 105s | 0 | error: failed to get balance of account 9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "bbaa6262-254b-4d86-9fd9-75c90b6cddb7" } 
 |
| 11:39:16 | 220 | 20 | sell 5.99e-06 CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn → SOL | filled | 49s | 2 |  |
| 11:35:43 | 221 | 21 | sell 0.005 SOL → 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk | filled | 25s | 1 |  |
| 11:36:08 | 222 | 21 | sell 0.898 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk → SOL | filled | 32s | 1 |  |
| 11:37:08 | 223 | 22 | sell 0.005 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | filled | 15s | 1 |  |
| 11:37:23 | 224 | 22 | sell 0.00147 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp → SOL | filled | 21s | 1 |  |
| 11:37:55 | 225 | 23 | sell 0.005 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 52s | 1 |  |
| 11:38:46 | 226 | 23 | sell 0.0013 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | failed | 113s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "0b89075c-b9ec-435f-9219-d459811717be" } 
 |
| 11:36:07 | 227 | 24 | sell 0.005 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | filled | 85s | 1 |  |
| 11:37:32 | 228 | 24 | sell 0.00283 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu → SOL | failed | 179s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 11:36:10 | 229 | 25 | sell 0.005 SOL → C8fU5GdfAt5mnw2RK7HE6XJGFNxHpaskZMkXxdm88888 | failed | 88s | 0 | error: failed to get balance of account AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "32000ba2-f82f-490d-904d-64cbe6217936" } 
 |
| 11:37:38 | 230 | 25 | sell 2.25 C8fU5GdfAt5mnw2RK7HE6XJGFNxHpaskZMkXxdm88888 → SOL | failed | 26s | 0 | acquire C8fU5GdfAt5mnw2RK7HE6XJGFNxHpaskZMkXxdm88888 error: 404 Not Found: NoLiquidity: no route found |
| 11:37:15 | 231 | 26 | sell 0.005 SOL → 5GgRAEmv8ZxF2PR5hY72Qs5x1bnQ6UK2RbTPoqJ3wSwW | filled | 40s | 1 |  |
| 11:37:55 | 232 | 26 | sell 0.000117 5GgRAEmv8ZxF2PR5hY72Qs5x1bnQ6UK2RbTPoqJ3wSwW → SOL | filled | 14s | 1 |  |
| 11:33:44 | 233 | 27 | sell 0.005 SOL → TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo | filled | 51s | 1 |  |
| 11:34:35 | 234 | 27 | sell 0.00233 TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo → SOL | filled | 9s | 1 |  |
| 11:36:03 | 235 | 28 | sell 0.005 SOL → 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw | filled | 16s | 1 |  |
| 11:36:19 | 236 | 28 | sell 0.434 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw → SOL | filled | 23s | 1 |  |
| 11:36:04 | 237 | 29 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 202s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 11:39:25 | 238 | 29 | sell 2.34 EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm → SOL | filled | 45s | 2 |  |
| 11:38:42 | 239 | 30 | sell 0.005 SOL → SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 | filled | 15s | 1 |  |
| 11:38:58 | 240 | 30 | sell 30.8 SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 → SOL | filled | 41s | 1 |  |
| 11:35:54 | 241 | 1 | sell 0.005 SOL → 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan | failed | 42s | 1 | main expired |
| 11:36:36 | 242 | 1 | sell 206 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan → SOL | failed | 2s | 0 | acquire 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan error: 404 Not Found: NoLiquidity: no route found |
| 11:42:06 | 243 | 2 | sell 0.005 SOL → HzYCHqAN2uoHGRnL9v2ChCfFQX3bvJuJd5zu2Hd5MZQy | filled | 9s | 1 |  |
| 11:42:15 | 244 | 2 | sell 391 HzYCHqAN2uoHGRnL9v2ChCfFQX3bvJuJd5zu2Hd5MZQy → SOL | filled | 4s | 1 |  |
| 11:41:36 | 245 | 3 | sell 0.005 SOL → MSTRdWXMeZxdE8osAQy3fA4rvTY5rgummDSMEx6U7Nz | filled | 20s | 1 |  |
| 11:41:55 | 246 | 3 | sell 0.0032 MSTRdWXMeZxdE8osAQy3fA4rvTY5rgummDSMEx6U7Nz → SOL | filled | 9s | 1 |  |
| 11:37:09 | 247 | 4 | sell 0.005 SOL → SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH | failed | 95s | 1 | main timeout |
| 11:38:43 | 248 | 4 | sell 0.00525 SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH → SOL | filled | 54s | 2 |  |
| 11:35:55 | 249 | 5 | sell 0.005 SOL → avaxGHCq3T7hoxd73oY2KY9hJSTaeMibXvHy5KNzh5D | filled | 14s | 1 |  |
| 11:36:09 | 250 | 5 | sell 0.0478 avaxGHCq3T7hoxd73oY2KY9hJSTaeMibXvHy5KNzh5D → SOL | filled | 31s | 1 |  |
| 11:37:15 | 251 | 6 | sell 0.005 SOL → ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU | filled | 15s | 1 |  |
| 11:37:30 | 252 | 6 | sell 205 ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU → SOL | failed | 85s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "eba5de65-9b95-4144-a8c0-6cd93610cd44" } 
 |
| 11:36:53 | 253 | 7 | sell 0.005 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | filled | 30s | 1 |  |
| 11:37:23 | 254 | 7 | sell 0.00455 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg → SOL | filled | 21s | 1 |  |
| 11:37:25 | 255 | 8 | sell 0.005 SOL → H4KUxsEgCp2yDpFvyDuGM5k6XevSKKrrKUxZ3Zr6nyJc | filled | 18s | 1 |  |
| 11:37:43 | 256 | 8 | sell 498 H4KUxsEgCp2yDpFvyDuGM5k6XevSKKrrKUxZ3Zr6nyJc → SOL | filled | 18s | 1 |  |
| 11:36:57 | 257 | 9 | sell 0.005 SOL → uniHfuPhEQSrtpzXpJZDCSq53yaejKKpNhFUiKoHKHV | filled | 32s | 1 |  |
| 11:37:29 | 258 | 9 | sell 0.0672 uniHfuPhEQSrtpzXpJZDCSq53yaejKKpNhFUiKoHKHV → SOL | filled | 53s | 1 |  |
| 11:39:12 | 259 | 10 | sell 0.005 SOL → Morpho2VPeTr2E1Jx6monxCzF7mqwUnjz74RdwLXYyP | filled | 29s | 1 |  |
| 11:39:41 | 260 | 10 | sell 0.207 Morpho2VPeTr2E1Jx6monxCzF7mqwUnjz74RdwLXYyP → SOL | filled | 80s | 1 |  |
| 11:39:42 | 261 | 11 | sell 0.005 SOL → UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids | failed | 144s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:42:06 | 262 | 11 | sell 2120 UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids → SOL | failed | 2s | 0 | acquire UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids error: 404 Not Found: NoLiquidity: no route found |
| 11:40:02 | 263 | 12 | sell 0.005 SOL → 7KEPApdbBMByrmqihz3bht2uMhFQcatjfSFQCKq66kH3 | filled | 12s | 1 |  |
| 11:40:14 | 264 | 12 | sell 102 7KEPApdbBMByrmqihz3bht2uMhFQcatjfSFQCKq66kH3 → SOL | filled | 73s | 1 |  |
| 11:38:25 | 265 | 13 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 23s | 1 |  |
| 11:38:47 | 266 | 13 | sell 0.00409 pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL → SOL | filled | 28s | 1 |  |
| 11:40:49 | 267 | 14 | sell 0.005 SOL → C1MHyoTJpRTeS9AQCyspNVu2EWAYCZwmJ1jNkEArFP1f | filled | 12s | 1 |  |
| 11:41:01 | 268 | 14 | sell 3.51 C1MHyoTJpRTeS9AQCyspNVu2EWAYCZwmJ1jNkEArFP1f → SOL | filled | 20s | 1 |  |
| 11:35:17 | 269 | 15 | sell 0.005 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | filled | 13s | 1 |  |
| 11:35:30 | 270 | 15 | sell 0.00321 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ → SOL | filled | 26s | 1 |  |
| 11:40:01 | 271 | 16 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 10s | 1 |  |
| 11:40:11 | 272 | 16 | sell 476 ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 → SOL | filled | 19s | 1 |  |
| 11:36:38 | 273 | 17 | sell 0.005 SOL → 8nPoBHiBM6pybxMws9PA2JRb9BjkppBfqcZGmot4DMBC | filled | 7s | 1 |  |
| 11:36:45 | 274 | 17 | sell 2010 8nPoBHiBM6pybxMws9PA2JRb9BjkppBfqcZGmot4DMBC → SOL | filled | 28s | 1 |  |
| 11:38:49 | 275 | 18 | sell 0.005 SOL → CJMihkPYswa3k6az9SUbepjKnkJQ6KWpGG5p9qW9n7NV | filled | 43s | 1 |  |
| 11:39:32 | 276 | 18 | sell 1030 CJMihkPYswa3k6az9SUbepjKnkJQ6KWpGG5p9qW9n7NV → SOL | filled | 11s | 1 |  |
| 11:36:36 | 277 | 19 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 28s | 1 |  |
| 11:37:04 | 278 | 19 | sell 0.000117 AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P → SOL | filled | 12s | 1 |  |
| 11:40:06 | 279 | 20 | sell 0.005 SOL → 8SMMso8Muv8d6i4WmMDthKt6TN1ysN6937sx3DKLXZqB | filled | 45s | 1 |  |
| 11:40:51 | 280 | 20 | sell 7.81 8SMMso8Muv8d6i4WmMDthKt6TN1ysN6937sx3DKLXZqB → SOL | filled | 22s | 1 |  |
| 11:36:42 | 281 | 21 | sell 0.005 SOL → 4N4DnNo3qpPks9aQCkcWkzoir8tnvT6diS4TnnZibonk | filled | 101s | 1 |  |
| 11:38:23 | 282 | 21 | sell 147 4N4DnNo3qpPks9aQCkcWkzoir8tnvT6diS4TnnZibonk → SOL | filled | 33s | 1 |  |
| 11:37:53 | 283 | 22 | sell 0.005 SOL → 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 | filled | 24s | 1 |  |
| 11:38:17 | 284 | 22 | sell 247 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 → SOL | filled | 25s | 1 |  |
| 11:40:41 | 285 | 23 | sell 0.005 SOL → A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump | filled | 10s | 1 |  |
| 11:40:51 | 286 | 23 | sell 311 A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump → SOL | filled | 10s | 1 |  |
| 11:40:42 | 287 | 24 | sell 0.005 SOL → 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ | filled | 10s | 1 |  |
| 11:40:52 | 288 | 24 | sell 5.98e-06 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ → SOL | filled | 25s | 1 |  |
| 11:38:06 | 289 | 25 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 10s | 1 |  |
| 11:38:16 | 290 | 25 | sell 0.000667 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa → SOL | filled | 39s | 1 |  |
| 11:38:13 | 291 | 26 | sell 0.005 SOL → GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 | filled | 32s | 1 |  |
| 11:38:45 | 292 | 26 | sell 0.0334 GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 → SOL | filled | 30s | 1 |  |
| 11:35:09 | 293 | 27 | sell 0.005 SOL → 3Dgwn5E7H5a8k6iGrz3qirkaJqUaJrKHEZ2xPcLRpump | filled | 13s | 1 |  |
| 11:35:22 | 294 | 27 | sell 917 3Dgwn5E7H5a8k6iGrz3qirkaJqUaJrKHEZ2xPcLRpump → SOL | filled | 35s | 1 |  |
| 11:38:36 | 296 | 28 | sell 13.9 J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd → SOL | filled | 70s | 2 |  |
| 11:40:12 | 297 | 29 | sell 0.005 SOL → 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 | filled | 48s | 1 |  |
| 11:41:00 | 298 | 29 | sell 0.344 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 → SOL | filled | 10s | 1 |  |
| 11:39:39 | 299 | 30 | sell 0.005 SOL → DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow | filled | 6s | 1 |  |
| 11:39:45 | 300 | 30 | sell 0.0248 DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow → SOL | filled | 67s | 1 |  |
| 11:36:53 | 301 | 1 | sell 0.005 SOL → StargWr5r6r8gZSjmEKGZ1dmvKWkj79r2z1xqjFstar | failed | 55s | 1 | main expired |
| 11:37:49 | 302 | 1 | sell 169 StargWr5r6r8gZSjmEKGZ1dmvKWkj79r2z1xqjFstar → SOL | failed | 6s | 0 | acquire StargWr5r6r8gZSjmEKGZ1dmvKWkj79r2z1xqjFstar error: 404 Not Found: NoLiquidity: no route found |
| 11:42:19 | 303 | 2 | sell 0.005 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | filled | 7s | 1 |  |
| 11:42:27 | 304 | 2 | sell 0.00247 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | filled | 4s | 1 |  |
| 11:42:05 | 305 | 3 | sell 0.005 SOL → 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC | filled | 6s | 1 |  |
| 11:42:11 | 306 | 3 | sell 0.472 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC → SOL | filled | 6s | 1 |  |
| 11:39:38 | 307 | 4 | sell 0.005 SOL → GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A | filled | 56s | 1 |  |
| 11:40:34 | 308 | 4 | sell 0.000117 GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A → SOL | filled | 21s | 1 |  |
| 11:36:54 | 309 | 5 | sell 0.005 SOL → GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump | filled | 22s | 1 |  |
| 11:37:16 | 310 | 5 | sell 389 GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump → SOL | filled | 14s | 1 |  |
| 11:39:09 | 311 | 6 | sell 0.005 SOL → HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 | filled | 31s | 1 |  |
| 11:39:40 | 312 | 6 | sell 5.91 HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 → SOL | filled | 30s | 1 |  |
| 11:38:10 | 313 | 7 | sell 0.005 SOL → CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 | failed | 50s | 1 | main expired |
| 11:39:00 | 314 | 7 | sell 2020 CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 → SOL | failed | 9s | 0 | acquire CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 error: 404 Not Found: NoLiquidity: no route found |
| 11:38:03 | 315 | 8 | sell 0.005 SOL → 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS | filled | 13s | 1 |  |
| 11:38:16 | 316 | 8 | sell 118 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS → SOL | filled | 85s | 1 |  |
| 11:38:36 | 317 | 9 | sell 0.005 SOL → CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu | filled | 10s | 1 |  |
| 11:38:46 | 318 | 9 | sell 7.92 CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu → SOL | failed | 126s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 11:41:03 | 319 | 10 | sell 0.005 SOL → H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump | filled | 17s | 1 |  |
| 11:41:20 | 320 | 10 | sell 219 H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump → SOL | filled | 13s | 1 |  |
| 11:42:08 | 321 | 11 | sell 0.005 SOL → Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu | filled | 8s | 1 |  |
| 11:42:15 | 322 | 11 | sell 37.1 Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu → SOL | filled | 5s | 1 |  |
| 11:41:29 | 323 | 12 | sell 0.005 SOL → 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump | filled | 16s | 1 |  |
| 11:41:46 | 324 | 12 | sell 80.4 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump → SOL | filled | 8s | 1 |  |
| 11:39:24 | 325 | 13 | sell 0.005 SOL → 1zJX5gRnjLgmTpq5sVwkq69mNDQkCemqoasyjaPW6jm | filled | 15s | 1 |  |
| 11:39:39 | 326 | 13 | sell 46.4 1zJX5gRnjLgmTpq5sVwkq69mNDQkCemqoasyjaPW6jm → SOL | filled | 35s | 1 |  |
| 11:41:23 | 327 | 14 | sell 0.005 SOL → CscZaq5twomhUkvCY8Jdd1tge32L4Yj9FbkFFEZQpump | filled | 31s | 1 |  |
| 11:41:54 | 328 | 14 | sell 2070 CscZaq5twomhUkvCY8Jdd1tge32L4Yj9FbkFFEZQpump → SOL | filled | 9s | 1 |  |
| 11:35:56 | 329 | 15 | sell 0.005 SOL → suifhC9gU1VbJAPYPTBkHJyyyStKGLLYPVDTmPoqbvA | filled | 13s | 1 |  |
| 11:36:09 | 330 | 15 | sell 0.466 suifhC9gU1VbJAPYPTBkHJyyyStKGLLYPVDTmPoqbvA → SOL | filled | 81s | 1 |  |
| 11:40:37 | 331 | 16 | sell 0.005 SOL → 8nnaeWCw8mUypcGAgbmSuzAT85uWx4UN12adDrMhXrGF | filled | 17s | 1 |  |
| 11:40:53 | 332 | 16 | sell 315 8nnaeWCw8mUypcGAgbmSuzAT85uWx4UN12adDrMhXrGF → SOL | filled | 22s | 1 |  |
| 11:37:15 | 333 | 17 | sell 0.005 SOL → HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx | filled | 21s | 1 |  |
| 11:37:36 | 334 | 17 | sell 0.0174 HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx → SOL | filled | 26s | 1 |  |
| 11:41:07 | 335 | 18 | sell 0.005 SOL → METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta | filled | 75s | 1 |  |
| 11:42:22 | 336 | 18 | sell 0.0855 METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta → SOL | filled | 10s | 1 |  |
| 11:37:18 | 337 | 19 | sell 0.005 SOL → RACEyWiM2ztEZcJx2AHXU2eWjhxU57x3vXn92b39dLD | filled | 11s | 1 |  |
| 11:37:29 | 338 | 19 | sell 0.00126 RACEyWiM2ztEZcJx2AHXU2eWjhxU57x3vXn92b39dLD → SOL | failed | 123s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "debb7cc2-1829-4805-b722-8aea5e3c0750" } 
 |
| 11:41:16 | 339 | 20 | sell 0.005 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | failed | 96s | 1 | main timeout |
| 11:42:52 | 340 | 20 | sell 0.00455 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH → SOL | filled | 10s | 1 |  |
| 11:39:12 | 341 | 21 | sell 0.005 SOL → NFLX7qV57zuVxCoHy3s1jiGZyALraLNwttbxdvmYJLJ | filled | 101s | 1 |  |
| 11:40:53 | 342 | 21 | sell 0.0069 NFLX7qV57zuVxCoHy3s1jiGZyALraLNwttbxdvmYJLJ → SOL | filled | 30s | 1 |  |
| 11:38:43 | 343 | 22 | sell 0.005 SOL → BZFYNPeQAEW3HWQ4DNsTVahC1n4ZjTgn6jB2nnBbB96W | failed | 112s | 0 | error: failed to get balance of account CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "c55f1e98-e07b-4436-a064-5681535dd70d" } 
 |
| 11:40:34 | 344 | 22 | sell 253 BZFYNPeQAEW3HWQ4DNsTVahC1n4ZjTgn6jB2nnBbB96W → SOL | failed | 6s | 0 | acquire BZFYNPeQAEW3HWQ4DNsTVahC1n4ZjTgn6jB2nnBbB96W error: 404 Not Found: NoLiquidity: no route found |
| 11:41:04 | 345 | 23 | sell 0.005 SOL → NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg | filled | 17s | 1 |  |
| 11:41:21 | 346 | 23 | sell 0.0142 NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg → SOL | failed | 69s | 1 | main expired |
| 11:41:20 | 347 | 24 | sell 0.005 SOL → 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump | filled | 13s | 1 |  |
| 11:41:34 | 348 | 24 | sell 187 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump → SOL | filled | 14s | 1 |  |
| 11:39:12 | 349 | 25 | sell 0.005 SOL → CzLTZppPdZtTjyq3WGpHLstoc3GLhu7zH5Zg6xUa6Gv5 | filled | 28s | 1 |  |
| 11:39:40 | 350 | 25 | sell 0.00585 CzLTZppPdZtTjyq3WGpHLstoc3GLhu7zH5Zg6xUa6Gv5 → SOL | filled | 37s | 1 |  |
| 11:39:25 | 351 | 26 | sell 0.005 SOL → 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 | filled | 14s | 1 |  |
| 11:39:38 | 352 | 26 | sell 2.28 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 → SOL | filled | 10s | 1 |  |
| 11:35:57 | 353 | 27 | sell 0.005 SOL → SV151D5pjygAKA8aJJcKzm4wFnRX5G92Fye94jQJk7g | filled | 10s | 1 |  |
| 11:36:07 | 354 | 27 | sell 1.58 SV151D5pjygAKA8aJJcKzm4wFnRX5G92Fye94jQJk7g → SOL | filled | 82s | 1 |  |
| 11:40:07 | 355 | 28 | sell 0.005 SOL → GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc | filled | 41s | 1 |  |
| 11:40:48 | 356 | 28 | sell 1.49 GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc → SOL | filled | 8s | 1 |  |
| 11:41:12 | 357 | 29 | sell 0.005 SOL → GtDZKAqvMZMnti46ZewMiXCa4oXF4bZxwQPoKzXPFxZn | filled | 10s | 1 |  |
| 11:41:23 | 358 | 29 | sell 2860 GtDZKAqvMZMnti46ZewMiXCa4oXF4bZxwQPoKzXPFxZn → SOL | filled | 31s | 1 |  |
| 11:40:55 | 359 | 30 | sell 0.005 SOL → bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 | filled | 21s | 1 |  |
| 11:41:16 | 360 | 30 | sell 0.00341 bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 → SOL | filled | 12s | 1 |  |
| 11:38:03 | 361 | 1 | sell 0.005 SOL → 5VnbrKp28Qs9CAH6PyZdxBNvLxZcbeX3YBsozgWnpump | filled | 13s | 1 |  |
| 11:38:17 | 362 | 1 | sell 1110 5VnbrKp28Qs9CAH6PyZdxBNvLxZcbeX3YBsozgWnpump → SOL | filled | 31s | 1 |  |
| 11:42:31 | 363 | 2 | sell 0.005 SOL → 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump | filled | 4s | 1 |  |
| 11:42:35 | 364 | 2 | sell 54.8 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump → SOL | filled | 7s | 1 |  |
| 11:42:17 | 365 | 3 | sell 0.005 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | filled | 4s | 1 |  |
| 11:42:21 | 366 | 3 | sell 0.00194 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg → SOL | filled | 10s | 1 |  |
| 11:41:00 | 367 | 4 | sell 0.005 SOL → EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 | filled | 23s | 1 |  |
| 11:41:23 | 368 | 4 | sell 516 EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 → SOL | filled | 23s | 1 |  |
| 11:37:31 | 369 | 5 | sell 0.005 SOL → BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin | filled | 54s | 1 |  |
| 11:38:26 | 370 | 5 | sell 13.1 BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin → SOL | filled | 15s | 1 |  |
| 11:40:26 | 371 | 6 | sell 0.005 SOL → F4K2SbLNgyz9gzNqT8bPeLpRkxy4oMA9twaffUDdZtB6 | filled | 27s | 1 |  |
| 11:40:53 | 372 | 6 | sell 1000 F4K2SbLNgyz9gzNqT8bPeLpRkxy4oMA9twaffUDdZtB6 → SOL | filled | 28s | 1 |  |
| 11:39:30 | 373 | 7 | sell 0.005 SOL → RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE | filled | 10s | 1 |  |
| 11:39:40 | 374 | 7 | sell 0.0107 RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE → SOL | filled | 11s | 1 |  |
| 11:39:42 | 375 | 8 | sell 0.005 SOL → AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc | filled | 183s | 1 |  |
| 11:42:45 | 376 | 8 | sell 0.171 AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc → SOL | filled | 7s | 1 |  |
| 11:40:52 | 377 | 9 | sell 0.005 SOL → rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof | filled | 24s | 1 |  |
| 11:41:16 | 378 | 9 | sell 0.263 rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof → SOL | filled | 10s | 1 |  |
| 11:41:40 | 379 | 10 | sell 0.005 SOL → BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump | filled | 5s | 1 |  |
| 11:41:45 | 380 | 10 | sell 353 BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump → SOL | filled | 8s | 1 |  |
| 11:42:20 | 381 | 11 | sell 0.005 SOL → 3VPoXaRcXxju8qgkVRN87UuXZxbdBD7zyaXPDqqmpump | filled | 7s | 1 |  |
| 11:42:28 | 382 | 11 | sell 371 3VPoXaRcXxju8qgkVRN87UuXZxbdBD7zyaXPDqqmpump → SOL | filled | 7s | 1 |  |
| 11:41:54 | 383 | 12 | sell 0.005 SOL → 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:41:55 | 384 | 12 | sell 289 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump → SOL | failed | 1s | 0 | acquire 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump error: 404 Not Found: NoLiquidity: no route found |
| 11:41:14 | 385 | 13 | sell 0.005 SOL → XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump | filled | 43s | 1 |  |
| 11:41:57 | 386 | 13 | sell 334 XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump → SOL | filled | 9s | 1 |  |
| 11:42:04 | 387 | 14 | sell 0.005 SOL → BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp | filled | 8s | 1 |  |
| 11:42:11 | 388 | 14 | sell 0.00454 BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp → SOL | filled | 5s | 1 |  |
| 11:38:36 | 389 | 15 | sell 0.005 SOL → DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw | filled | 20s | 1 |  |
| 11:38:56 | 390 | 15 | sell 0.00852 DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw → SOL | filled | 20s | 1 |  |
| 11:41:17 | 391 | 16 | sell 0.005 SOL → 55Vr2VpSwxsDkB6uGGHAvRv86K6zax2Zb4TT8ivwDEzW | filled | 16s | 1 |  |
| 11:41:33 | 392 | 16 | sell 2730 55Vr2VpSwxsDkB6uGGHAvRv86K6zax2Zb4TT8ivwDEzW → SOL | filled | 12s | 1 |  |
| 11:38:03 | 393 | 17 | sell 0.005 SOL → AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 | filled | 12s | 1 |  |
| 11:38:16 | 394 | 17 | sell 0.00298 AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 → SOL | failed | 93s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "3c817f58-20cb-4fba-bdf0-13ba976dbb69" } 
 |
| 11:42:32 | 395 | 18 | sell 0.005 SOL → he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A | filled | 7s | 1 |  |
| 11:42:39 | 396 | 18 | sell 0.00378 he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A → SOL | filled | 10s | 1 |  |
| 11:39:34 | 397 | 19 | sell 0.005 SOL → 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T | filled | 7s | 1 |  |
| 11:39:41 | 398 | 19 | sell 1.42 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T → SOL | filled | 25s | 1 |  |
| 11:43:03 | 399 | 20 | sell 0.005 SOL → 3vgopg7xm3EWkXfxmWPUpcf7g939hecfqg18sLuXDzVt | filled | 10s | 1 |  |
| 11:43:13 | 400 | 20 | sell 36.9 3vgopg7xm3EWkXfxmWPUpcf7g939hecfqg18sLuXDzVt → SOL | filled | 8s | 1 |  |
| 11:41:30 | 401 | 21 | sell 0.005 SOL → HgBRWfYxEfvPhtqkaeymCQtHCrKE46qQ43pKe8HCpump | filled | 75s | 1 |  |
| 11:42:45 | 402 | 21 | sell 32.8 HgBRWfYxEfvPhtqkaeymCQtHCrKE46qQ43pKe8HCpump → SOL | filled | 7s | 1 |  |
| 11:40:42 | 403 | 22 | sell 0.005 SOL → B5WTLaRwaUQpKk7ir1wniNB6m5o8GgMrimhKMYan2R6B | filled | 14s | 1 |  |
| 11:40:56 | 404 | 22 | sell 609 B5WTLaRwaUQpKk7ir1wniNB6m5o8GgMrimhKMYan2R6B → SOL | filled | 17s | 1 |  |
| 11:42:30 | 405 | 23 | sell 0.005 SOL → 1NJMqVM4PadjuzYmeB7zV7q7DV8oB3ExaQCd9x6KsLz | filled | 7s | 1 |  |
| 11:42:37 | 406 | 23 | sell 0.07 1NJMqVM4PadjuzYmeB7zV7q7DV8oB3ExaQCd9x6KsLz → SOL | filled | 4s | 1 |  |
| 11:41:47 | 407 | 24 | sell 0.005 SOL → qntUzPUsJ51abNP7VYNxkmsQ4RnvEZAhavUxsCxpxH4 | filled | 8s | 1 |  |
| 11:41:56 | 408 | 24 | sell 0.00201 qntUzPUsJ51abNP7VYNxkmsQ4RnvEZAhavUxsCxpxH4 → SOL | filled | 20s | 1 |  |
| 11:40:26 | 409 | 25 | sell 0.005 SOL → HooDYv5RewLRiMLnEVq3VJqdqxhuE6c5eYvqejMC3e9A | filled | 25s | 1 |  |
| 11:40:52 | 410 | 25 | sell 0.00455 HooDYv5RewLRiMLnEVq3VJqdqxhuE6c5eYvqejMC3e9A → SOL | filled | 10s | 1 |  |
| 11:40:03 | 411 | 26 | sell 0.005 SOL → poNSfquKq512ApeYjVghwViSun4x1MhCqHVH2Paq4jN | filled | 6s | 1 |  |
| 11:40:09 | 412 | 26 | sell 1.42 poNSfquKq512ApeYjVghwViSun4x1MhCqHVH2Paq4jN → SOL | filled | 47s | 1 |  |
| 11:37:31 | 413 | 27 | sell 0.005 SOL → A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump | filled | 52s | 1 |  |
| 11:38:22 | 414 | 27 | sell 99 A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump → SOL | filled | 18s | 1 |  |
| 11:41:19 | 415 | 28 | sell 0.005 SOL → BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p | filled | 86s | 1 |  |
| 11:42:46 | 416 | 28 | sell 23 BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p → SOL | filled | 4s | 1 |  |
| 11:41:54 | 417 | 29 | sell 0.005 SOL → 5g6wVay8NYQ5Tspo4irj9YqSFfQoPDW7apkX352N29PP | filled | 8s | 1 |  |
| 11:42:02 | 418 | 29 | sell 13.6 5g6wVay8NYQ5Tspo4irj9YqSFfQoPDW7apkX352N29PP → SOL | filled | 8s | 1 |  |
| 11:41:30 | 419 | 30 | sell 0.005 SOL → 6ZnCkq5t8XG4q42b5JiVvU6hV5cZFaNdSBoFq5E7Vf9q | filled | 13s | 1 |  |
| 11:41:42 | 420 | 30 | sell 60.2 6ZnCkq5t8XG4q42b5JiVvU6hV5cZFaNdSBoFq5E7Vf9q → SOL | filled | 13s | 1 |  |
| 11:40:26 | 422 | 1 | sell 57.4 ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq → SOL | filled | 19s | 2 |  |
| 11:42:42 | 423 | 2 | sell 0.005 SOL → SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz | filled | 10s | 1 |  |
| 11:42:52 | 424 | 2 | sell 0.084 SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz → SOL | filled | 10s | 1 |  |
| 11:42:31 | 425 | 3 | sell 0.005 SOL → BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk | filled | 4s | 1 |  |
| 11:42:35 | 426 | 3 | sell 0.00218 BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk → SOL | filled | 8s | 1 |  |
| 11:41:46 | 427 | 4 | sell 0.005 SOL → 6SjVTj1VGwFSXn7wEjwFm77LvACeTqB7sQUebYKX8Ds5 | filled | 8s | 1 |  |
| 11:41:54 | 428 | 4 | sell 214 6SjVTj1VGwFSXn7wEjwFm77LvACeTqB7sQUebYKX8Ds5 → SOL | filled | 8s | 1 |  |
| 11:38:42 | 429 | 5 | sell 0.005 SOL → GoADAwux19tGxb3W4ykPzZz8p5JCSYaxBRpuW7s9pump | failed | 7s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:38:49 | 430 | 5 | sell 897 GoADAwux19tGxb3W4ykPzZz8p5JCSYaxBRpuW7s9pump → SOL | failed | 82s | 0 | acquire GoADAwux19tGxb3W4ykPzZz8p5JCSYaxBRpuW7s9pump error: 404 Not Found: NoLiquidity: no route found |
| 11:41:23 | 431 | 6 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 81s | 1 |  |
| 11:42:44 | 432 | 6 | sell 0.429 A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 → SOL | filled | 7s | 1 |  |
| 11:39:57 | 433 | 7 | sell 0.005 SOL → G5W6LwkLeoj6rZqBP1y3KT8k6Cz6rXGJmMNU3TArXtXw | failed | 134s | 1 | main expired |
| 11:42:11 | 434 | 7 | sell 1360 G5W6LwkLeoj6rZqBP1y3KT8k6Cz6rXGJmMNU3TArXtXw → SOL | failed | 1s | 0 | acquire G5W6LwkLeoj6rZqBP1y3KT8k6Cz6rXGJmMNU3TArXtXw error: 404 Not Found: NoLiquidity: no route found |
| 11:42:53 | 435 | 8 | sell 0.005 SOL → RDDTGbhHwVXfyCvQMXzzowKjf5qrYBZAnehoXW83ooh | filled | 7s | 1 |  |
| 11:43:00 | 436 | 8 | sell 0.00311 RDDTGbhHwVXfyCvQMXzzowKjf5qrYBZAnehoXW83ooh → SOL | filled | 7s | 1 |  |
| 11:41:30 | 437 | 9 | sell 0.005 SOL → CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 | filled | 23s | 1 |  |
| 11:41:53 | 438 | 9 | sell 20 CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 → SOL | filled | 12s | 1 |  |
| 11:41:53 | 439 | 10 | sell 0.005 SOL → zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k | filled | 12s | 1 |  |
| 11:42:06 | 440 | 10 | sell 592 zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k → SOL | filled | 12s | 1 |  |
| 11:42:35 | 441 | 11 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 7s | 1 |  |
| 11:42:42 | 442 | 11 | sell 1050 MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 → SOL | filled | 8s | 1 |  |
| 11:41:56 | 443 | 12 | sell 0.005 SOL → BLKKYfF41c6xRPrtX1rdYbxLE1xxEdZUnxQsB5hcZ8Nf | filled | 10s | 1 |  |
| 11:42:06 | 444 | 12 | sell 0.000463 BLKKYfF41c6xRPrtX1rdYbxLE1xxEdZUnxQsB5hcZ8Nf → SOL | filled | 13s | 1 |  |
| 11:42:06 | 445 | 13 | sell 0.005 SOL → AMD8XwJXgQ9WV45Wyj9yFLejxzf2J6VM1PJY8bJEjeES | filled | 12s | 1 |  |
| 11:42:18 | 446 | 13 | sell 0.000783 AMD8XwJXgQ9WV45Wyj9yFLejxzf2J6VM1PJY8bJEjeES → SOL | filled | 10s | 1 |  |
| 11:42:17 | 447 | 14 | sell 0.005 SOL → EN2nnxrg8uUi6x2sJkzNPd2eT6rB9rdSoQNNaENA4RZA | filled | 4s | 1 |  |
| 11:42:21 | 448 | 14 | sell 621 EN2nnxrg8uUi6x2sJkzNPd2eT6rB9rdSoQNNaENA4RZA → SOL | filled | 8s | 1 |  |
| 11:39:34 | 449 | 15 | sell 0.005 SOL → hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux | failed | 4s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:39:38 | 450 | 15 | sell 0.969 hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux → SOL | filled | 26s | 2 |  |
| 11:41:45 | 451 | 16 | sell 0.005 SOL → 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump | filled | 7s | 1 |  |
| 11:41:52 | 452 | 16 | sell 65.5 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump → SOL | filled | 12s | 1 |  |
| 11:39:57 | 453 | 17 | sell 0.005 SOL → CortexFv3fRcLKTgACr7aLqckGh5eP7TP3z9JHoKqMc6 | filled | 13s | 1 |  |
| 11:40:09 | 454 | 17 | sell 14.5 CortexFv3fRcLKTgACr7aLqckGh5eP7TP3z9JHoKqMc6 → SOL | filled | 38s | 1 |  |
| 11:42:50 | 455 | 18 | sell 0.005 SOL → CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump | filled | 7s | 1 |  |
| 11:42:57 | 456 | 18 | sell 194 CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump → SOL | filled | 4s | 1 |  |
| 11:40:06 | 457 | 19 | sell 0.005 SOL → 2uxaYT1fVrp6Fg2BrxQcyKSW91hefM6dG9krpbeDiirT | filled | 10s | 1 |  |
| 11:40:16 | 458 | 19 | sell 0.447 2uxaYT1fVrp6Fg2BrxQcyKSW91hefM6dG9krpbeDiirT → SOL | filled | 15s | 1 |  |
| 11:40:49 | 459 | 1 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 1s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 11:43:03 | 460 | 2 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 11:42:43 | 461 | 3 | sell 0.005 SOL → HTmQz7My6MehV7bjhJ6jde8nDND1yvsz68d24LP7YgUQ | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HTmQz7My6MehV7bjhJ6jde8nDND1yvsz68d24LP7YgUQ is unsupported: Token-2022 transfer fee |
| 11:42:03 | 462 | 4 | sell 0.005 SOL → 4MMQY9bwkxxTtsK3W227Q5ABT6yFY8Pmn9Ze7wmAXKY8 | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 4MMQY9bwkxxTtsK3W227Q5ABT6yFY8Pmn9Ze7wmAXKY8 is unsupported: Token-2022 transfer fee |
| 11:40:27 | 463 | 5 | sell 0.005 SOL → 8RVBk8vxLiUHueLUW1f4izFVqN3nWippLhkohKg6EGkS | failed | 4s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 8RVBk8vxLiUHueLUW1f4izFVqN3nWippLhkohKg6EGkS is unsupported: Token-2022 transfer fee |
| 11:42:51 | 464 | 6 | sell 0.005 SOL → HuAXPyDWDaMYFKuwQHpqL1oPnj93zdzWmtvFGzCeCUa7 | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HuAXPyDWDaMYFKuwQHpqL1oPnj93zdzWmtvFGzCeCUa7 is unsupported: Token-2022 transfer fee |
| 11:42:12 | 465 | 7 | sell 0.005 SOL → 6UtY9iTZMQQ5QZVrbzFnNaJntV7oySm9k97mvwnuZcxr | failed | 1s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 6UtY9iTZMQQ5QZVrbzFnNaJntV7oySm9k97mvwnuZcxr is unsupported: Token-2022 transfer fee |
| 11:43:07 | 466 | 8 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 11:42:05 | 467 | 9 | sell 0.005 SOL → AGi2s9zPRPHs3zEDPhPTroumTEXK5ufymYSfEFndCSSW | failed | 1s | 0 | main error: 400 Bad Request: UnsupportedToken: Token AGi2s9zPRPHs3zEDPhPTroumTEXK5ufymYSfEFndCSSW is unsupported: Token-2022 transfer fee |
| 11:42:18 | 468 | 10 | sell 0.005 SOL → oPAiAikWTaFj9RYoRFD35ccfwhnMcB3ThgBZRHSkjTZ | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token oPAiAikWTaFj9RYoRFD35ccfwhnMcB3ThgBZRHSkjTZ is unsupported: Token-2022 transfer fee |
| 11:42:50 | 469 | 11 | sell 0.005 SOL → HgcxVs6kJhPAaGqnPNGaa7zYgNT49hJrLufiqcNMuYZT | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HgcxVs6kJhPAaGqnPNGaa7zYgNT49hJrLufiqcNMuYZT is unsupported: Token-2022 transfer fee |
| 11:42:18 | 470 | 12 | sell 0.005 SOL → PreweJYECqtQwBtpxHL171nL2K6umo692gTm7Q3rpgF | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token PreweJYECqtQwBtpxHL171nL2K6umo692gTm7Q3rpgF is unsupported: Token-2022 transfer fee |
| 11:42:28 | 471 | 13 | sell 0.005 SOL → 8RNUw4N655VSrZKuhGdywhbSMDTrheguFPfxbpE2NZHQ | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 8RNUw4N655VSrZKuhGdywhbSMDTrheguFPfxbpE2NZHQ is unsupported: Token-2022 transfer fee |
| 11:42:29 | 472 | 14 | sell 0.005 SOL → ZesMGYmokFiEuDvNzWeMhB7jxF6eUW8c512vwSKSTNK | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token ZesMGYmokFiEuDvNzWeMhB7jxF6eUW8c512vwSKSTNK is unsupported: Token-2022 transfer fee |
| 11:40:06 | 473 | 15 | sell 0.005 SOL → 72yxYmhLgDGwdyi2b9GjDynBB6VuG3kDxNKqDbzXh5bi | failed | 1s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 72yxYmhLgDGwdyi2b9GjDynBB6VuG3kDxNKqDbzXh5bi is unsupported: Token-2022 transfer fee |
| 11:42:05 | 474 | 16 | sell 0.005 SOL → 8t5C4AWDg4CroMChxdo7rG2e8nJM31QG2GG7Czx9X7x2 | failed | 1s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 8t5C4AWDg4CroMChxdo7rG2e8nJM31QG2GG7Czx9X7x2 is unsupported: Token-2022 transfer fee |
| 11:40:48 | 475 | 17 | sell 0.005 SOL → E4Ap4icMLwKot8rkkTbq5JkS5kZxt5XCE3yfxbzYBjHx | failed | 1s | 0 | main error: 400 Bad Request: UnsupportedToken: Token E4Ap4icMLwKot8rkkTbq5JkS5kZxt5XCE3yfxbzYBjHx is unsupported: Token-2022 transfer fee |
| 11:43:01 | 476 | 18 | sell 0.005 SOL → 7MCgYMzq3fov6oERdtTMAYbN2U9LZrrSYS1MBhjixZFr | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 7MCgYMzq3fov6oERdtTMAYbN2U9LZrrSYS1MBhjixZFr is unsupported: Token-2022 transfer fee |
| 11:40:33 | 477 | 19 | sell 0.005 SOL → 7ioeSgzfSKHMnpgfPpgRFsekMBGiu9oi6t6GeqYtNbbh | failed | 10s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 7ioeSgzfSKHMnpgfPpgRFsekMBGiu9oi6t6GeqYtNbbh is unsupported: Token-2022 transfer fee |
| 11:43:21 | 478 | 20 | sell 0.005 SOL → FjTfaSH861nVcbAxdFAHTvhoSL4kyR6wgTWynuJkapht | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token FjTfaSH861nVcbAxdFAHTvhoSL4kyR6wgTWynuJkapht is unsupported: Token-2022 transfer fee |
| 11:42:52 | 479 | 21 | sell 0.005 SOL → Pre8AREmFPtoJFT8mQSXQLh56cwJmM7CFDRuoGBZiUP | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pre8AREmFPtoJFT8mQSXQLh56cwJmM7CFDRuoGBZiUP is unsupported: Token-2022 transfer fee |

### Rows without an order

80 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| UnsupportedToken | main | 21 | SOL → SI, SOL → ZCAT, SOL → GP, SOL → ALLINU, SOL → KNOTS, SOL → MASK, SOL → NEARKAT, SOL → ANTHROPIC, SOL → LEVERCAT, SOL → tOpenAI, SOL → FEELSGOOD, SOL → OPENAI, SOL → PURR, SOL → 🎒, SOL → WOW, SOL → SNDK, SOL → BTC, SOL → POLLY, SOL → CURVE, SOL → DIVI, SOL → POLYMARKET | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| RPC rate limited (429) | rpc | 16 | PAID → SOL, SOL → USELESS, JitoSOL → SOL, OTC → SOL, fone → SOL, SOL → DOGE, LIT → SOL, SOL → DJT, Jimothy → SOL, CRCLx → SOL, BOT → SOL, SOL → xBTC, SOL → CTM, ZBCN → SOL, SOL → SAPLING, AAVE → SOL | sim's RPC refused the call |
| NoLiquidity | acquire | 15 | SOL → ANSEM, SOL → baton, SOL → JEANPHIL, SOL → DJT, SOL → AUTON, SOL → MCDx, SOL → CTM, SOL → LUCKY99, SOL → SHARTCOIN, SOL → STAR, SOL → X7, SOL → SAPLING, SOL → WOJAK, SOL → OCTO, SOL → STEALF | no route found |
| RPC rate limited (429) | main | 14 | SOL → USDT, SOL → JupUSD, SOL → CARDS, SOL → ANSEM, ONyc → SOL, xSOL → SOL, mSOL → SOL, hyUSD → SOL, ORCA → SOL, SOL → JTO, JTO → SOL, xHYPE → SOL, TSLAx → SOL, RACE → SOL | sim's RPC refused: get recent blockhash |
| BlockhashExpired | main | 9 | SOL → JUP, sUSDai → SOL, SOL → aura, SOL → xHYPE, SOL → MCDx, SOL → SHARTCOIN, SOL → WOJAK, SOL → OCTO, SOL → HNT | the transaction's blockhash is no longer valid, sign a fresh one |
| InsufficientValidTo | main | 4 | SOL → wNEAR, COINx → SOL, SOL → $WIF, SANC → SOL | validTo lies closer than the minimum validity |
| BlockhashExpired | acquire | 1 | SOL → ZEC | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 411 (392 main, 19 acquire). Cleanup placed 34 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 11:43:32 | 4 | RUSH → SOL (native) | Executed | `0xb3d435d7…` [🐞](https://debug.barn.cow.fi/order/0xb3d435d7ce1a739842f2ec594b7a2dab744a2319c5c75444e794841862e5f8bd) |
| 11:43:32 | 4 | STONK → SOL (native) | Executed | `0x77c2ca81…` [🐞](https://debug.barn.cow.fi/order/0x77c2ca81ac39afe73149b40685bb744eda10fbe6bdf47a2222a17e0d489237a2) |
| 11:43:32 | 4 | JitoSOL → SOL (native) | Executed | `0x007c2cae…` [🐞](https://debug.barn.cow.fi/order/0x007c2cae0d7e6a8bbae008bc42fe634027311d942fb14f4cd381abcf10c413ea) |
| 11:44:52 | 12 | PAID → SOL (native) | Executed | `0xe4ca32a8…` [🐞](https://debug.barn.cow.fi/order/0xe4ca32a847558a172de35d2ff79290cb059d5d31ae405eec13757f7f8710a40b) |
| 11:44:53 | 12 | BOT → SOL (native) | Executed | `0xc775f723…` [🐞](https://debug.barn.cow.fi/order/0xc775f723129900c9ccf40a57e89ddae41f3d211de9bdf23e7b9cc62ee338d6ff) |
| 11:45:07 | 9 | SANC → SOL (native) | Executed | `0x8301361c…` [🐞](https://debug.barn.cow.fi/order/0x8301361c170b8ffb130d3a02a04b1c6fb7538a633b5fa23a29206730fb1526c8) |
| 11:45:07 | 9 | CRCLx → SOL (native) | Executed | `0xc58fb6d9…` [🐞](https://debug.barn.cow.fi/order/0xc58fb6d92c27442a6a3ade90075e6c2b5660ef3da74530eed7cccff7729c5e04) |
| 11:45:12 | 6 | ZBCN → SOL (native) | Executed | `0x65180e44…` [🐞](https://debug.barn.cow.fi/order/0x65180e4401b4d6fb075cac9fadee6eaabeb21af447c03b4ff452b83a84658da6) |
| 11:45:27 | 8 | OTC → SOL (native) | Executed | `0xab018f2c…` [🐞](https://debug.barn.cow.fi/order/0xab018f2c179f101c9db1b454e7c9b5be23622dd73dd090196975606517ad9bca) |
| 11:46:58 | 16 | ONyc → SOL (native) | Executed | `0x7bf82180…` [🐞](https://debug.barn.cow.fi/order/0x7bf82180c9479af0d5a20147e1ae8d4b4a830c5091c83dcf0c12de31fd509d4e) |
| 11:47:04 | 17 | AAVE → SOL (native) | Executed | `0x2c04f25e…` [🐞](https://debug.barn.cow.fi/order/0x2c04f25e067c5e5303808ac26a606c99eaadae6524dd6d478a577d645526da52) |
| 11:47:49 | 18 | fone → SOL (native) | Executed | `0xfa6bedd8…` [🐞](https://debug.barn.cow.fi/order/0xfa6bedd86bdce41bc0d125bed1fd12a2dbcec304660b213e24be2c67289adbdd) |
| 11:48:18 | 19 | USDS → SOL (native) | Executed | `0x6026a756…` [🐞](https://debug.barn.cow.fi/order/0x6026a756f5122941ea77fee14d771af8fcfb9d121967639ccf09d706f91ade92) |
| 11:48:18 | 19 | RACE → SOL (native) | Executed | `0x57712c76…` [🐞](https://debug.barn.cow.fi/order/0x57712c769714d5deb07693f6e992694f0f0ff8554866bf6cc1217843b2e26e9e) |
| 11:48:37 | 20 | JTO → SOL (native) | Executed | `0x07c3c464…` [🐞](https://debug.barn.cow.fi/order/0x07c3c464cec8bfc2cc2769300e46f084350ed31a9fb9899abcd359da8645e721) |
| 11:48:37 | 20 | USDe → SOL (native) | Executed | `0xc61ef179…` [🐞](https://debug.barn.cow.fi/order/0xc61ef1797e340b7bf01193f686372b55275a53c3429ee8b3370b25edc5d62f54) |
| 11:48:37 | 20 | EURC → SOL (native) | Executed | `0x8f9ab0f3…` [🐞](https://debug.barn.cow.fi/order/0x8f9ab0f391b79cc7c733b09cef2689d2de91bcd35ee19e7365d1cec27ee223e3) |
| 11:49:14 | 21 | GEOD → SOL (native) | Executed | `0xb66bd4b4…` [🐞](https://debug.barn.cow.fi/order/0xb66bd4b4e2a70a94f80b800737c3e0cf9dc5aaefa244df4c4e5c1647ddd987e2) |
| 11:49:15 | 21 | HeeHaw → SOL (native) | Executed | `0xecb41d92…` [🐞](https://debug.barn.cow.fi/order/0xecb41d926d8a7c9c4321bfe44e5029358dfa790a64acc4ff513fc94d05adfe8d) |
| 11:49:15 | 21 | duk → SOL (native) | Executed | `0xb744bd9c…` [🐞](https://debug.barn.cow.fi/order/0xb744bd9c33684d3b94a5b18d43ee671722a83052bbb9ade5da9211e23e1f8900) |
| 11:49:15 | 21 | Jimothy → SOL (native) | Executed | `0x332e9f49…` [🐞](https://debug.barn.cow.fi/order/0x332e9f49b408d2ba507cf745ef992e524b67ac52bbbffb0b4375b492bbeed38b) |
| 11:49:18 | 22 | EYE → SOL (native) | Executed | `0xe59b6b50…` [🐞](https://debug.barn.cow.fi/order/0xe59b6b50d1cff9a396f3fdd1640ae9e688f4471ca274880da2c20615cb1abbc0) |
| 11:49:50 | 23 | NKE → SOL (native) | Executed | `0xc300b993…` [🐞](https://debug.barn.cow.fi/order/0xc300b99358cca2d6a6c205029f236caa215298257ecbd45267ef81b65b1d7044) |
| 11:50:18 | 24 | xSOL → SOL (native) | Executed | `0x01b2b79d…` [🐞](https://debug.barn.cow.fi/order/0x01b2b79dd7b8c1192cd7d70e19576a052edec0400d0eef50efa56ca1afbb4a03) |
| 11:50:18 | 24 | JitoSOL → SOL (native) | Executed | `0x0fec02d4…` [🐞](https://debug.barn.cow.fi/order/0x0fec02d4a92d7b64239705fa60e4f8d79d39ee03f17c37353dd5a036fe754753) |
| 11:50:19 | 24 | COINx → SOL (native) | Executed | `0x4fc397dc…` [🐞](https://debug.barn.cow.fi/order/0x4fc397dc6333f4b0836c9f8c2a3e04914e38c9b1fad8ad5dad7b96360fe97283) |
| 11:50:30 | 24 | TSLAx → SOL (native) | Executed | `0x17cab378…` [🐞](https://debug.barn.cow.fi/order/0x17cab3785fe54b8fb4fe2cf07e57ecc5ca5987ae051b5fae73924aa4ef6e21d0) |
| 11:52:09 | 25 | PUMPCADE → SOL (native) | Executed | `0x0f24b850…` [🐞](https://debug.barn.cow.fi/order/0x0f24b850fd6a0a53ebe228edb95f85e589fc87d0b78830f059b8f1833fbd54a1) |
| 11:52:09 | 25 | LIT → SOL (native) | Executed | `0x98ad9bf8…` [🐞](https://debug.barn.cow.fi/order/0x98ad9bf8fa92e2dbe84ee529798739d24aa70daa30879124c75b6cb99a84d4ef) |
| 11:52:23 | 26 | mSOL → SOL (native) | Executed | `0x71a5fc25…` [🐞](https://debug.barn.cow.fi/order/0x71a5fc25e1ce1df5d99abe1aa3095bd7b0ee8b5a31bd46ccf6e2f9d5d7f58ddd) |
| 11:52:26 | 26 | SPYx → SOL (native) | Executed | `0xf1de73e5…` [🐞](https://debug.barn.cow.fi/order/0xf1de73e5b7b92f30a03d21c08d6ed00257fc6b7b9146ce78dc99910a25e1d77b) |
| 11:52:34 | 28 | PENGU → SOL (native) | Executed | `0x5e00b352…` [🐞](https://debug.barn.cow.fi/order/0x5e00b352d8ada33c9fddbbfe8d3a33447919c0d17aebabe60c24f719b5ba19fc) |
| 11:53:03 | 29 | Fartcoin → SOL (native) | Executed | `0x2c6f0866…` [🐞](https://debug.barn.cow.fi/order/0x2c6f08666b9863461b85f1b44e3d8bec0451ca32e5f889a1fada714865c5428e) |
| 11:53:38 | 30 | HNT → SOL (native) | Executed | `0xe620ec8f…` [🐞](https://debug.barn.cow.fi/order/0xe620ec8fae500118c7bef3892db8420918021dc7fa2be4ab561698b0dc1c0527) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 402 | 97.8% |
| expired: never created on-chain (winner found, creation blockhash expired) | 8 | 1.9% |
| expired | 1 | 0.2% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 5s | 7s | 11s | 106s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 402 | 100.0% | 402 | 129,409 | 5s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 512 | 481 | 444 | 92.3% | 20 | 34 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 11 |
| jupiter-solve: PriorityFeeTooHigh | 9 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 308 times
- Orders filtered for `unreceivable_buy_token_account`: 308 times
- Orders filtered for `in_flight`: 85 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 392 | 383 | 97.7% |
| buy | 19 | 19 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → WBTC | 2 | 2 | 100.0% |
| WBTC → SOL (native) | 2 | 2 | 100.0% |
| wSOL → BP | 2 | 1 | 50.0% |
| wSOL → xBTC | 2 | 2 | 100.0% |
| wSOL → RUSH | 2 | 2 | 100.0% |
| wSOL → SI | 2 | 2 | 100.0% |
| xBTC → SOL (native) | 2 | 2 | 100.0% |
| SI → SOL (native) | 2 | 2 | 100.0% |
| wSOL → RAY | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| wSOL → ANTFUN | 1 | 1 | 100.0% |
| wSOL → CATE | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| USDe → SOL (native) | 1 | 1 | 100.0% |
| CATE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| ETH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → STONK | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → JUP | 1 | 1 | 100.0% |
| wSOL → OTC | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → CASH | 1 | 1 | 100.0% |
| wSOL → USDC | 1 | 1 | 100.0% |
| wSOL → USD1 | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| wSOL → sUSDai | 1 | 1 | 100.0% |
| ANTFUN → SOL (native) | 1 | 1 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SPYx | 1 | 1 | 100.0% |
| PYUSD → SOL (native) | 1 | 1 | 100.0% |
| STONK → SOL (native) | 1 | 0 | 0.0% |
| RAY → SOL (native) | 1 | 1 | 100.0% |
| NVDAx → SOL (native) | 1 | 1 | 100.0% |
| PUMP → SOL (native) | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GEOD | 1 | 1 | 100.0% |
| cbBTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Agency | 1 | 1 | 100.0% |
| wSOL → XMR | 1 | 1 | 100.0% |
| wSOL → PENGU | 1 | 1 | 100.0% |
| SPYx → SOL (native) | 1 | 1 | 100.0% |
| CASH → SOL (native) | 1 | 1 | 100.0% |
| USD1 → SOL (native) | 1 | 1 | 100.0% |
| SPCXx → SOL (native) | 1 | 1 | 100.0% |
| GEOD → SOL (native) | 1 | 0 | 0.0% |
| wSOL → PEPE | 1 | 1 | 100.0% |
| wSOL → wNEAR | 1 | 1 | 100.0% |
| wSOL → USELESS | 1 | 1 | 100.0% |
| wSOL → TRUMP | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| USELESS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → EMBER | 1 | 1 | 100.0% |
| wSOL → xSOL | 1 | 1 | 100.0% |
| Fartcoin → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ORE | 1 | 1 | 100.0% |
| XMR → SOL (native) | 1 | 1 | 100.0% |
| USDG → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → MET | 1 | 1 | 100.0% |
| Agency → SOL (native) | 1 | 1 | 100.0% |
| EMBER → SOL (native) | 1 | 1 | 100.0% |
| PEPE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HYPE | 1 | 1 | 100.0% |
| wSOL → MINI | 1 | 1 | 100.0% |
| wNEAR → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CARDS | 1 | 1 | 100.0% |
| wSOL → neet | 1 | 1 | 100.0% |
| TRUMP → SOL (native) | 1 | 1 | 100.0% |
| PENGU → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JupUSD | 1 | 1 | 100.0% |
| JupUSD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USX | 1 | 1 | 100.0% |
| wSOL → SPX | 1 | 1 | 100.0% |
| MINI → SOL (native) | 1 | 1 | 100.0% |
| wSOL → LIT | 1 | 1 | 100.0% |
| wSOL → METAx | 1 | 1 | 100.0% |
| wSOL → TROLL | 1 | 1 | 100.0% |
| JLP → SOL (native) | 1 | 1 | 100.0% |
| CARDS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → ONyc | 1 | 1 | 100.0% |
| SPX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → GO | 1 | 1 | 100.0% |
| wSOL → xHYPE | 1 | 1 | 100.0% |
| wSOL → PRIME | 1 | 1 | 100.0% |
| HYPE → SOL (native) | 1 | 1 | 100.0% |
| TROLL → SOL (native) | 1 | 1 | 100.0% |
| neet → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Jimothy | 1 | 1 | 100.0% |
| wSOL → hyUSD | 1 | 1 | 100.0% |
| wSOL → USDT | 1 | 1 | 100.0% |
| JupSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → MANIFEST | 1 | 1 | 100.0% |
| PRIME → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HOOKED | 1 | 1 | 100.0% |
| USDT → SOL (native) | 1 | 1 | 100.0% |
| MANIFEST → SOL (native) | 1 | 1 | 100.0% |
| MET → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TTWO | 1 | 1 | 100.0% |
| USX → SOL (native) | 1 | 1 | 100.0% |
| HOOKED → SOL (native) | 1 | 1 | 100.0% |
| wSOL → biketyson | 1 | 1 | 100.0% |
| GO → SOL (native) | 1 | 1 | 100.0% |
| BP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → CODEC | 1 | 1 | 100.0% |
| wSOL → e/acc | 1 | 1 | 100.0% |
| wSOL → pill | 1 | 1 | 100.0% |
| TTWO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → fone | 1 | 1 | 100.0% |
| METAx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → LBTC | 1 | 1 | 100.0% |
| biketyson → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SNDK | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → DOGE | 1 | 1 | 100.0% |
| wSOL → Buttcoin | 1 | 1 | 100.0% |
| wSOL → GOOGLx | 1 | 1 | 100.0% |
| wSOL → swordcat | 1 | 1 | 100.0% |
| LBTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → knightcat | 1 | 1 | 100.0% |
| wSOL → MSFTx | 1 | 1 | 100.0% |
| DOGE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → AUTON | 1 | 0 | 0.0% |
| wSOL → CRIME | 1 | 1 | 100.0% |
| wSOL → MSTRx | 1 | 1 | 100.0% |
| swordcat → SOL (native) | 1 | 1 | 100.0% |
| Buttcoin → SOL (native) | 1 | 1 | 100.0% |
| GOOGLx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TripleT | 1 | 1 | 100.0% |
| wSOL → syrupUSDC | 1 | 1 | 100.0% |
| ORE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HIGGS | 1 | 1 | 100.0% |
| wSOL → GP | 1 | 1 | 100.0% |
| wSOL → ORCA | 1 | 1 | 100.0% |
| MSTRx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MU | 1 | 1 | 100.0% |
| knightcat → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PEAQ | 1 | 1 | 100.0% |
| MSFTx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JTO | 1 | 1 | 100.0% |
| wSOL → SPCX | 1 | 1 | 100.0% |
| e/acc → SOL (native) | 1 | 1 | 100.0% |
| CRIME → SOL (native) | 1 | 1 | 100.0% |
| Bonk → SOL (native) | 1 | 1 | 100.0% |
| wSOL → LUCKY99 | 1 | 0 | 0.0% |
| wSOL → AVAX | 1 | 1 | 100.0% |
| wSOL → SUI | 1 | 1 | 100.0% |
| MU → SOL (native) | 1 | 1 | 100.0% |
| syrupUSDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CRAWL | 1 | 1 | 100.0% |
| wSOL → SV151 | 1 | 1 | 100.0% |
| HIGGS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MPLX | 1 | 1 | 100.0% |
| SNDK → SOL (native) | 1 | 1 | 100.0% |
| PEAQ → SOL (native) | 1 | 1 | 100.0% |
| CODEC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → aura | 1 | 1 | 100.0% |
| wSOL → PST | 1 | 1 | 100.0% |
| wSOL → USDS | 1 | 1 | 100.0% |
| pill → SOL (native) | 1 | 1 | 100.0% |
| GP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GRASS | 1 | 1 | 100.0% |
| GLDx → SOL (native) | 1 | 1 | 100.0% |
| PST → SOL (native) | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| aura → SOL (native) | 1 | 1 | 100.0% |
| AVAX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ELON | 1 | 1 | 100.0% |
| wSOL → TAO | 1 | 1 | 100.0% |
| TripleT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Human | 1 | 1 | 100.0% |
| MPLX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| TAO → SOL (native) | 1 | 1 | 100.0% |
| Human → SOL (native) | 1 | 1 | 100.0% |
| wSOL → STAR | 1 | 0 | 0.0% |
| EURC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HOODx | 1 | 1 | 100.0% |
| wSOL → CHILLHOUSE | 1 | 1 | 100.0% |
| XAUt0 → SOL (native) | 1 | 1 | 100.0% |
| ELON → SOL (native) | 1 | 1 | 100.0% |
| wSOL → UNI | 1 | 1 | 100.0% |
| wSOL → AAPLx | 1 | 1 | 100.0% |
| wSOL → SKHY | 1 | 1 | 100.0% |
| wSOL → ZBCN | 1 | 1 | 100.0% |
| wSOL → PAXG | 1 | 1 | 100.0% |
| wSOL → HIMS | 1 | 1 | 100.0% |
| CHILLHOUSE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → COINx | 1 | 1 | 100.0% |
| wSOL → RACE | 1 | 1 | 100.0% |
| SV151 → SOL (native) | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| CRAWL → SOL (native) | 1 | 1 | 100.0% |
| SUI → SOL (native) | 1 | 1 | 100.0% |
| SPCX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → DBR | 1 | 1 | 100.0% |
| wSOL → BOT | 1 | 1 | 100.0% |
| HOODx → SOL (native) | 1 | 1 | 100.0% |
| AAPLx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → COCKROACH | 1 | 1 | 100.0% |
| SKHY → SOL (native) | 1 | 1 | 100.0% |
| GRASS → SOL (native) | 1 | 1 | 100.0% |
| COCKROACH → SOL (native) | 1 | 1 | 100.0% |
| HIMS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → QQQx | 1 | 1 | 100.0% |
| PAXG → SOL (native) | 1 | 1 | 100.0% |
| wSOL → AAVE | 1 | 1 | 100.0% |
| wSOL → ALON | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → darwin | 1 | 1 | 100.0% |
| wSOL → GIGA | 1 | 1 | 100.0% |
| wSOL → FWOG | 1 | 1 | 100.0% |
| wSOL → KITTY | 1 | 1 | 100.0% |
| UNI → SOL (native) | 1 | 1 | 100.0% |
| INF → SOL (native) | 1 | 1 | 100.0% |
| wSOL → X7 | 1 | 0 | 0.0% |
| wSOL → BC | 1 | 1 | 100.0% |
| FWOG → SOL (native) | 1 | 1 | 100.0% |
| USDS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → KMNO | 1 | 1 | 100.0% |
| wSOL → TSLAx | 1 | 1 | 100.0% |
| GIGA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GRND | 1 | 1 | 100.0% |
| BC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CALI | 1 | 1 | 100.0% |
| wSOL → 2Z | 1 | 1 | 100.0% |
| darwin → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |
| wSOL → SANC | 1 | 1 | 100.0% |
| wSOL → DRAM | 1 | 1 | 100.0% |
| KITTY → SOL (native) | 1 | 1 | 100.0% |
| BNB → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NOS | 1 | 1 | 100.0% |
| wSOL → SKR | 1 | 1 | 100.0% |
| DBR → SOL (native) | 1 | 1 | 100.0% |
| PSOL → SOL (native) | 1 | 1 | 100.0% |
| GRND → SOL (native) | 1 | 1 | 100.0% |
| DRAM → SOL (native) | 1 | 1 | 100.0% |
| wSOL → LIKE | 1 | 1 | 100.0% |
| QQQx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → COPX | 1 | 1 | 100.0% |
| wSOL → KLED | 1 | 1 | 100.0% |
| wSOL → PYTH | 1 | 1 | 100.0% |
| RUSH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ENA | 1 | 1 | 100.0% |
| SKR → SOL (native) | 1 | 1 | 100.0% |
| NOS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RBLX | 1 | 1 | 100.0% |
| wSOL → MORPHO | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| LIKE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Anon | 1 | 1 | 100.0% |
| ALON → SOL (native) | 1 | 1 | 100.0% |
| 2Z → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GOLD | 1 | 1 | 100.0% |
| wSOL → HNT | 1 | 1 | 100.0% |
| ENA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → DKNG | 1 | 1 | 100.0% |
| RBLX → SOL (native) | 1 | 1 | 100.0% |
| HNT → SOL (native) | 1 | 1 | 100.0% |
| Anon → SOL (native) | 1 | 1 | 100.0% |
| KMNO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → DARK | 1 | 1 | 100.0% |
| wSOL → PONS | 1 | 1 | 100.0% |
| wSOL → CX | 1 | 1 | 100.0% |
| $WIF → SOL (native) | 1 | 1 | 100.0% |
| PYTH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RHEA | 1 | 1 | 100.0% |
| wSOL → reUSD | 1 | 1 | 100.0% |
| wSOL → TRX | 1 | 1 | 100.0% |
| COPX → SOL (native) | 1 | 1 | 100.0% |
| KLED → SOL (native) | 1 | 1 | 100.0% |
| CALI → SOL (native) | 1 | 1 | 100.0% |
| BOME → SOL (native) | 1 | 1 | 100.0% |
| reUSD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → wXRP | 1 | 1 | 100.0% |
| wSOL → HOOD | 1 | 1 | 100.0% |
| wSOL → ZEUS | 1 | 1 | 100.0% |
| CX → SOL (native) | 1 | 1 | 100.0% |
| ZEUS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TOAD | 1 | 1 | 100.0% |
| DKNG → SOL (native) | 1 | 1 | 100.0% |
| wSOL → POD | 1 | 1 | 100.0% |
| wSOL → NFLX | 1 | 1 | 100.0% |
| wSOL → HOTBOT | 1 | 1 | 100.0% |
| GOLD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Pepe | 1 | 1 | 100.0% |
| PONS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → APE | 1 | 1 | 100.0% |
| TRX → SOL (native) | 1 | 1 | 100.0% |
| MORPHO → SOL (native) | 1 | 1 | 100.0% |
| TOAD → SOL (native) | 1 | 1 | 100.0% |
| HOOD → SOL (native) | 1 | 1 | 100.0% |
| Pepe → SOL (native) | 1 | 1 | 100.0% |
| RHEA → SOL (native) | 1 | 1 | 100.0% |
| wXRP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → bSOL | 1 | 1 | 100.0% |
| HOTBOT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NKE | 1 | 1 | 100.0% |
| wSOL → RENDER | 1 | 1 | 100.0% |
| NFLX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → LMAO! | 1 | 1 | 100.0% |
| wSOL → PERPSPAD | 1 | 1 | 100.0% |
| APE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → nub | 1 | 1 | 100.0% |
| wSOL → MADE | 1 | 1 | 100.0% |
| POD → SOL (native) | 1 | 1 | 100.0% |
| RENDER → SOL (native) | 1 | 1 | 100.0% |
| DARK → SOL (native) | 1 | 1 | 100.0% |
| wSOL → STRCx | 1 | 1 | 100.0% |
| bSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → slopcannon | 1 | 1 | 100.0% |
| wSOL → AMC | 1 | 1 | 100.0% |
| PERPSPAD → SOL (native) | 1 | 1 | 100.0% |
| LMAO! → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NPC | 1 | 1 | 100.0% |
| wSOL → KET | 1 | 1 | 100.0% |
| wSOL → STEALF | 1 | 0 | 0.0% |
| MADE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Cupsey | 1 | 1 | 100.0% |
| wSOL → BLUAI | 1 | 1 | 100.0% |
| wSOL → MON | 1 | 1 | 100.0% |
| KET → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → MSTR | 1 | 1 | 100.0% |
| slopcannon → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Jotchua | 1 | 1 | 100.0% |
| nub → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GMEx | 1 | 1 | 100.0% |
| wSOL → PLAGUE | 1 | 1 | 100.0% |
| wSOL → Bert | 1 | 1 | 100.0% |
| BLUAI → SOL (native) | 1 | 1 | 100.0% |
| wSOL → VINE | 1 | 1 | 100.0% |
| NKE → SOL (native) | 1 | 0 | 0.0% |
| Jotchua → SOL (native) | 1 | 1 | 100.0% |
| Cupsey → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ROUTER | 1 | 1 | 100.0% |
| wSOL → QNT | 1 | 1 | 100.0% |
| wSOL → DREGG | 1 | 1 | 100.0% |
| VINE → SOL (native) | 1 | 1 | 100.0% |
| MON → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BULLSHIT | 1 | 1 | 100.0% |
| ROUTER → SOL (native) | 1 | 1 | 100.0% |
| wSOL → EDEL | 1 | 1 | 100.0% |
| GMEx → SOL (native) | 1 | 1 | 100.0% |
| PLAGUE → SOL (native) | 1 | 1 | 100.0% |
| MSTR → SOL (native) | 1 | 1 | 100.0% |
| QNT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BLK | 1 | 1 | 100.0% |
| DREGG → SOL (native) | 1 | 1 | 100.0% |
| EDEL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BABA | 1 | 1 | 100.0% |
| wSOL → eUSX | 1 | 1 | 100.0% |
| wSOL → AMD | 1 | 1 | 100.0% |
| BULLSHIT → SOL (native) | 1 | 1 | 100.0% |
| BLK → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TWEETCRAFT | 1 | 1 | 100.0% |
| wSOL → PUMPCADE | 1 | 1 | 100.0% |
| eUSX → SOL (native) | 1 | 1 | 100.0% |
| BABA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → META | 1 | 1 | 100.0% |
| TWEETCRAFT → SOL (native) | 1 | 1 | 100.0% |
| PUMPCADE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → AMZNx | 1 | 1 | 100.0% |
| wSOL → SQUIRE | 1 | 1 | 100.0% |
| AMD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PLTRx | 1 | 1 | 100.0% |
| AMZNx → SOL (native) | 1 | 1 | 100.0% |
| SQUIRE → SOL (native) | 1 | 1 | 100.0% |
| META → SOL (native) | 1 | 1 | 100.0% |
| PLTRx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → INJ | 1 | 1 | 100.0% |
| wSOL → CLAW | 1 | 1 | 100.0% |
| wSOL → IBM | 1 | 1 | 100.0% |
| wSOL → hSOL | 1 | 1 | 100.0% |
| CLAW → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| IBM → SOL (native) | 1 | 1 | 100.0% |
| INJ → SOL (native) | 1 | 1 | 100.0% |
| hSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SNAP | 1 | 1 | 100.0% |
| MEW → SOL (native) | 1 | 1 | 100.0% |
| USDY → SOL (native) | 1 | 1 | 100.0% |
| Bert → SOL (native) | 1 | 1 | 100.0% |
| AMC → SOL (native) | 1 | 1 | 100.0% |
| NPC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USDUC | 1 | 1 | 100.0% |
| SNAP → SOL (native) | 1 | 1 | 100.0% |
| STRCx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RDDT | 1 | 1 | 100.0% |
| USDUC → SOL (native) | 1 | 1 | 100.0% |
| RDDT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HAROLD | 1 | 1 | 100.0% |
| HAROLD → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 17 | 16 | 94.1% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 16 | 15 | 93.8% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 16 | 16 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 16 | 16 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 16 | 16 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 16 | 16 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 15 | 15 | 100.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 15 | 15 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 15 | 15 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 15 | 15 | 100.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 14 | 14 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 14 | 14 | 100.0% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 14 | 14 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 14 | 12 | 85.7% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 14 | 14 | 100.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 14 | 14 | 100.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 13 | 12 | 92.3% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 13 | 12 | 92.3% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 13 | 11 | 84.6% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 13 | 13 | 100.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 13 | 13 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 12 | 12 | 100.0% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 12 | 12 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 12 | 12 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 12 | 12 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 12 | 12 | 100.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 12 | 12 | 100.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 11 | 11 | 100.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 11 | 10 | 90.9% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 11 | 11 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 8 |
| Expired without a fill | 1 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 11:31:43 | STONK → SOL (native) | sell | Winner too late: creation blockhash expired | `0xa903a499…` [🐞](https://debug.barn.cow.fi/order/0xa903a49911b66302ea97ec929d0962fa9d71688ef385990ed70bf0854ccabcaf) |
| 11:32:16 | GEOD → SOL (native) | sell | Winner too late: creation blockhash expired | `0x74e01d17…` [🐞](https://debug.barn.cow.fi/order/0x74e01d178a2566ec96857e4cbe824729693d8d2c6eceb8a131e43d0f091c7ce2) |
| 11:32:46 | wSOL → BP | sell | Expired without a fill | `0x6846482b…` [🐞](https://debug.barn.cow.fi/order/0x6846482bf89aae49dbe97bac068c4c1aa5a26954a08e76e0eaa95cbfb31ecc24) |
| 11:35:19 | wSOL → AUTON | sell | Winner too late: creation blockhash expired | `0xf9e26cd1…` [🐞](https://debug.barn.cow.fi/order/0xf9e26cd174c128f6384b85b83830dce51932594ebe1252c35d4f7e8e25072f37) |
| 11:35:55 | wSOL → LUCKY99 | sell | Winner too late: creation blockhash expired | `0x14067531…` [🐞](https://debug.barn.cow.fi/order/0x140675314765aa6c2f6eca9671a69e98830450b3ff84b90f83bc809655b90064) |
| 11:37:06 | wSOL → STAR | sell | Winner too late: creation blockhash expired | `0xfa734b84…` [🐞](https://debug.barn.cow.fi/order/0xfa734b841de44de189b70af512e554bd9f9baa710270db3446861334c6e04b31) |
| 11:38:17 | wSOL → X7 | sell | Winner too late: creation blockhash expired | `0xea750442…` [🐞](https://debug.barn.cow.fi/order/0xea750442857dcb2c40af22e2808de462d2189a8579fda5360ca532574822f9b6) |
| 11:41:30 | wSOL → STEALF | sell | Winner too late: creation blockhash expired | `0x1626d72c…` [🐞](https://debug.barn.cow.fi/order/0x1626d72ca8cb4e354685210c3ce679e8693a48c79ca549bf10c6b872b714f604) |
| 11:41:46 | NKE → SOL (native) | sell | Winner too late: creation blockhash expired | `0x76e72b93…` [🐞](https://debug.barn.cow.fi/order/0x76e72b93144e50475cd8a0ad897bfc939a4c9a4462e3b2c8ffd52462db78a087) |
