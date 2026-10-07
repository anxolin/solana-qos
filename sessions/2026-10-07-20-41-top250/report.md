# Solana QoS report: 2026-10-07-20-41-top250

Barn, orders created between `2026-10-07T20:41:20.320Z` and `2026-10-07T21:08:10.635Z`. Data fetched 2026-10-07T21:17:21+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 378 |
| Orders executed | **268** (70.9%) |
| Sponsored orders never created on-chain | 110 (29.1%) |
| Traders | 30 |
| Settlement txs | 268 |

## Scenario

263 of 487 scenario rows completed. 0 retries, 110 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 20:41:20 | 1 | 1 | sell 0.005 SOL → EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v | filled | 44s | 1 |  |
| 20:42:04 | 2 | 1 | sell 0.523 EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v → SOL | filled | 8s | 1 |  |
| 20:41:20 | 3 | 2 | sell 0.005 SOL → Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB | filled | 49s | 1 |  |
| 20:42:09 | 4 | 2 | sell 0.523 Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB → SOL | filled | 15s | 1 |  |
| 20:41:20 | 5 | 3 | sell 0.005 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 42s | 1 |  |
| 20:42:02 | 6 | 3 | sell 0.523 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → SOL | filled | 11s | 1 |  |
| 20:41:20 | 7 | 4 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 42s | 1 |  |
| 20:42:02 | 8 | 4 | sell 6.28e-06 cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij → SOL | filled | 24s | 1 |  |
| 20:41:20 | 9 | 5 | sell 0.005 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 51s | 1 |  |
| 20:42:11 | 10 | 5 | sell 84.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn → SOL | filled | 52s | 1 |  |
| 20:41:20 | 11 | 6 | sell 0.005 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 42s | 1 |  |
| 20:42:02 | 12 | 6 | sell 0.523 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → SOL | filled | 11s | 1 |  |
| 20:41:20 | 13 | 7 | sell 0.005 SOL → 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx | filled | 54s | 1 |  |
| 20:42:14 | 14 | 7 | sell 3.02 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx → SOL | filled | 107s | 1 |  |
| 20:41:21 | 15 | 8 | sell 0.005 SOL → A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS | filled | 49s | 1 |  |
| 20:42:10 | 16 | 8 | sell 0.0004 A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS → SOL | filled | 29s | 1 |  |
| 20:41:21 | 17 | 9 | sell 0.005 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 95s | 0 | error: failed to get balance of account HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "3717fe52-50db-41e9-a0a8-139f3bb8c6fb" } 
 |
| 20:42:55 | 18 | 9 | sell 3.84 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → SOL | failed | 2s | 0 | acquire 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump error: 404 Not Found: NoLiquidity: no route found |
| 20:41:21 | 19 | 10 | sell 0.005 SOL → 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN | filled | 89s | 1 |  |
| 20:42:50 | 20 | 10 | sell 0.284 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN → SOL | filled | 10s | 1 |  |
| 20:41:21 | 21 | 11 | sell 0.005 SOL → 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g | filled | 53s | 1 |  |
| 20:42:13 | 22 | 11 | sell 0.00596 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g → SOL | filled | 39s | 1 |  |
| 20:41:21 | 23 | 12 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 45s | 1 |  |
| 20:42:06 | 24 | 12 | sell 0.000204 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs → SOL | filled | 66s | 1 |  |
| 20:41:21 | 25 | 13 | sell 0.005 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 43s | 1 |  |
| 20:42:04 | 26 | 13 | sell 0.523 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → SOL | filled | 8s | 1 |  |
| 20:41:21 | 27 | 14 | sell 0.005 SOL → JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD | filled | 59s | 1 |  |
| 20:42:20 | 28 | 14 | sell 0.523 JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD → SOL | filled | 35s | 1 |  |
| 20:41:21 | 29 | 15 | sell 0.005 SOL → 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R | filled | 48s | 1 |  |
| 20:42:09 | 30 | 15 | sell 0.213 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R → SOL | filled | 30s | 1 |  |
| 20:41:21 | 31 | 16 | sell 0.005 SOL → Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk | failed | 117s | 0 | error: failed to get balance of account EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "fe1beeec-df79-43ab-9153-4cc39665f5fc" } 
 |
| 20:43:18 | 32 | 16 | sell 2.53 Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk → SOL | filled | 42s | 2 |  |
| 20:41:21 | 33 | 17 | sell 0.005 SOL → USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB | filled | 57s | 1 |  |
| 20:42:19 | 34 | 17 | sell 0.523 USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB → SOL | filled | 39s | 1 |  |
| 20:41:22 | 35 | 18 | sell 0.005 SOL → CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt | filled | 66s | 1 |  |
| 20:42:27 | 36 | 18 | sell 43 CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt → SOL | filled | 22s | 1 |  |
| 20:41:22 | 37 | 19 | sell 0.005 SOL → 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh | filled | 112s | 1 |  |
| 20:43:14 | 38 | 19 | sell 6.29e-06 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh → SOL | filled | 156s | 1 |  |
| 20:41:22 | 39 | 20 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 56s | 1 |  |
| 20:42:18 | 40 | 20 | sell 0.523 DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT → SOL | failed | 113s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "f1fd118a-2c52-4e46-bc01-e4cf7d90db9d" } 
 |
| 20:41:22 | 41 | 21 | sell 0.005 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 47s | 1 |  |
| 20:42:09 | 42 | 21 | sell 0.00647 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | filled | 112s | 1 |  |
| 20:41:22 | 43 | 22 | sell 0.005 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 148s | 1 |  |
| 20:43:50 | 44 | 22 | sell 96.6 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump → SOL | filled | 16s | 1 |  |
| 20:41:22 | 45 | 23 | sell 0.005 SOL → Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump | filled | 45s | 1 |  |
| 20:42:07 | 46 | 23 | sell 151 Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump → SOL | filled | 8s | 1 |  |
| 20:41:22 | 47 | 24 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 126s | 1 |  |
| 20:43:28 | 48 | 24 | sell 0.00345 J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn → SOL | filled | 10s | 1 |  |
| 20:41:22 | 49 | 25 | sell 0.005 SOL → CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump | filled | 91s | 1 |  |
| 20:42:53 | 50 | 25 | sell 130 CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump → SOL | filled | 6s | 1 |  |
| 20:41:22 | 51 | 26 | sell 0.005 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 42s | 1 |  |
| 20:42:05 | 52 | 26 | sell 0.000669 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 8s | 1 |  |
| 20:41:22 | 53 | 27 | sell 0.005 SOL → JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN | filled | 127s | 1 |  |
| 20:43:29 | 54 | 27 | sell 1.65 JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN → SOL | filled | 31s | 1 |  |
| 20:41:23 | 55 | 28 | sell 0.005 SOL → 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv | filled | 47s | 1 |  |
| 20:42:10 | 56 | 28 | sell 61.8 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv → SOL | filled | 53s | 1 |  |
| 20:41:23 | 57 | 29 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 51s | 1 |  |
| 20:42:14 | 58 | 29 | sell 3.29 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump → SOL | filled | 46s | 1 |  |
| 20:41:46 | 59 | 30 | sell 0.005 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 22s | 1 |  |
| 20:42:08 | 60 | 30 | sell 0.00292 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 → SOL | filled | 5s | 1 |  |
| 20:42:58 | 61 | 1 | sell 0.005 SOL → CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp | filled | 31s | 1 |  |
| 20:43:29 | 62 | 1 | sell 1.86 CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp → SOL | filled | 32s | 1 |  |
| 20:42:37 | 63 | 2 | sell 0.005 SOL → METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL | filled | 22s | 1 |  |
| 20:42:59 | 64 | 2 | sell 1.35 METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL → SOL | failed | 100s | 0 | acquire METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "1c2ca480-992c-40f6-800a-11557ea6dfb4" } 
 |
| 20:42:35 | 67 | 4 | sell 0.005 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 19s | 1 |  |
| 20:42:54 | 68 | 4 | sell 0.0022 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | filled | 11s | 1 |  |
| 20:43:12 | 69 | 5 | sell 0.005 SOL → 3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 | filled | 26s | 1 |  |
| 20:43:38 | 70 | 5 | sell 0.492 3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 → SOL | filled | 28s | 1 |  |
| 20:43:30 | 71 | 6 | sell 0.005 SOL → 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 | filled | 21s | 1 |  |
| 20:43:51 | 72 | 6 | sell 87.5 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 → SOL | filled | 14s | 1 |  |
| 20:45:33 | 73 | 7 | sell 0.005 SOL → BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy | filled | 13s | 1 |  |
| 20:45:46 | 74 | 7 | sell 0.502 BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy → SOL | filled | 17s | 1 |  |
| 20:42:47 | 75 | 8 | sell 0.005 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 12s | 1 |  |
| 20:42:59 | 76 | 8 | sell 0.000481 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 → SOL | filled | 33s | 1 |  |
| 20:42:58 | 77 | 9 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 21s | 1 |  |
| 20:43:19 | 78 | 9 | sell 0.109 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 → SOL | failed | 101s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "1d7ea68d-37f2-40e0-9790-994ed7436027" } 
 |
| 20:43:14 | 79 | 10 | sell 0.005 SOL → 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 | filled | 36s | 1 |  |
| 20:43:49 | 80 | 10 | sell 0.454 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 → SOL | filled | 10s | 1 |  |
| 20:42:54 | 81 | 11 | sell 0.005 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 11s | 1 |  |
| 20:43:05 | 82 | 11 | sell 0.00314 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb → SOL | filled | 20s | 1 |  |
| 20:43:13 | 83 | 12 | sell 0.005 SOL → CbcyNo7m1amFWqEQm2m4PLv1UNvpcL3C1Ujm6AkzpKoU | filled | 24s | 1 |  |
| 20:43:37 | 84 | 12 | sell 93.3 CbcyNo7m1amFWqEQm2m4PLv1UNvpcL3C1Ujm6AkzpKoU → SOL | filled | 23s | 1 |  |
| 20:42:54 | 87 | 14 | sell 0.005 SOL → A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump | filled | 10s | 1 |  |
| 20:43:05 | 88 | 14 | sell 317 A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump → SOL | filled | 20s | 1 |  |
| 20:42:54 | 89 | 15 | sell 0.005 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 6s | 1 |  |
| 20:43:00 | 90 | 15 | sell 0.00314 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | filled | 106s | 1 |  |
| 20:44:02 | 91 | 16 | sell 0.005 SOL → KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS | filled | 36s | 1 |  |
| 20:44:38 | 92 | 16 | sell 14 KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS → SOL | filled | 35s | 1 |  |
| 20:43:01 | 93 | 17 | sell 0.005 SOL → MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump | filled | 35s | 1 |  |
| 20:43:36 | 94 | 17 | sell 67.1 MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump → SOL | filled | 12s | 1 |  |
| 20:42:51 | 95 | 18 | sell 0.005 SOL → ApZuxdpzMrbEYTGEzeY9afh5pj9d6qPRJCTgQYiipbKg | filled | 8s | 1 |  |
| 20:42:59 | 96 | 18 | sell 378 ApZuxdpzMrbEYTGEzeY9afh5pj9d6qPRJCTgQYiipbKg → SOL | filled | 38s | 1 |  |
| 20:46:54 | 97 | 19 | sell 0.005 SOL → Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump | failed | 141s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 20:49:16 | 98 | 19 | sell 57.9 Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump → SOL | failed | 22s | 0 | acquire Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump error: 404 Not Found: NoLiquidity: no route found |
| 20:44:25 | 99 | 20 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 21s | 1 |  |
| 20:44:46 | 100 | 20 | sell 0.467 HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr → SOL | failed | 138s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "87a9d69f-0376-47e1-96dd-2a69f00b9552" } 
 |
| 20:44:02 | 101 | 21 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 89s | 1 |  |
| 20:45:31 | 102 | 21 | sell 0.00371 jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v → SOL | filled | 26s | 1 |  |
| 20:44:25 | 103 | 22 | sell 0.005 SOL → 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 | filled | 73s | 1 |  |
| 20:45:38 | 104 | 22 | sell 12.6 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 → SOL | filled | 13s | 1 |  |
| 20:45:02 | 106 | 23 | sell 0.523 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG → SOL | filled | 8s | 1 |  |
| 20:43:46 | 107 | 24 | sell 0.005 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 16s | 1 |  |
| 20:44:03 | 108 | 24 | sell 0.00139 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | filled | 36s | 1 |  |
| 20:43:24 | 109 | 25 | sell 0.005 SOL → orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE | filled | 32s | 1 |  |
| 20:43:56 | 110 | 25 | sell 0.181 orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE → SOL | filled | 19s | 1 |  |
| 20:42:37 | 111 | 26 | sell 0.005 SOL → 7VertkgF9KLhxxJXHX6uaWuoYZTP9LdGj2bWmVXVpump | filled | 22s | 1 |  |
| 20:42:59 | 112 | 26 | sell 67.6 7VertkgF9KLhxxJXHX6uaWuoYZTP9LdGj2bWmVXVpump → SOL | filled | 30s | 1 |  |
| 20:44:02 | 113 | 27 | sell 0.005 SOL → GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump | filled | 41s | 1 |  |
| 20:44:42 | 114 | 27 | sell 120 GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump → SOL | filled | 82s | 1 |  |
| 20:43:12 | 115 | 28 | sell 0.005 SOL → FZqdw6oSDCbHtKYxmhnfbi97SnyVy8jaYpdCoMrrjKa2 | filled | 51s | 1 |  |
| 20:44:03 | 116 | 28 | sell 2570 FZqdw6oSDCbHtKYxmhnfbi97SnyVy8jaYpdCoMrrjKa2 → SOL | filled | 110s | 1 |  |
| 20:45:03 | 118 | 29 | sell 0.000302 SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH → SOL | failed | 0s | 0 | acquire SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH error: 404 Not Found: NoLiquidity: no route found |
| 20:44:03 | 121 | 1 | sell 0.005 SOL → XSTuo1fV7HHMhs4BYiwtrWSLsMCJNrooH2AssWTYZqP | filled | 39s | 1 |  |
| 20:44:42 | 122 | 1 | sell 229 XSTuo1fV7HHMhs4BYiwtrWSLsMCJNrooH2AssWTYZqP → SOL | filled | 83s | 1 |  |
| 20:44:42 | 123 | 2 | sell 0.005 SOL → J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump | filled | 35s | 1 |  |
| 20:45:16 | 124 | 2 | sell 77.8 J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump → SOL | filled | 107s | 1 |  |
| 20:46:47 | 125 | 3 | sell 0.005 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | filled | 10s | 1 |  |
| 20:46:57 | 126 | 3 | sell 0.0034 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ → SOL | failed | 110s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "f2983ef5-76a4-4ea4-9eca-5909172fb85c" } 
 |
| 20:43:13 | 127 | 4 | sell 0.005 SOL → BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump | filled | 21s | 1 |  |
| 20:43:35 | 128 | 4 | sell 50.9 BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump → SOL | filled | 14s | 1 |  |
| 20:45:33 | 129 | 5 | sell 0.005 SOL → HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 | filled | 14s | 1 |  |
| 20:45:47 | 130 | 5 | sell 7.37 HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 → SOL | filled | 13s | 1 |  |
| 20:44:39 | 131 | 6 | sell 0.005 SOL → 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump | failed | 138s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 20:46:57 | 132 | 6 | sell 70.5 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump → SOL | failed | 1s | 0 | acquire 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump error: 404 Not Found: NoLiquidity: no route found |
| 20:46:48 | 133 | 7 | sell 0.005 SOL → 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E | filled | 15s | 1 |  |
| 20:47:02 | 134 | 7 | sell 0.524 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E → SOL | filled | 64s | 1 |  |
| 20:43:34 | 135 | 8 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 23s | 1 |  |
| 20:43:57 | 136 | 8 | sell 2.29 EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm → SOL | filled | 13s | 1 |  |
| 20:45:02 | 137 | 9 | sell 0.005 SOL → J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr | filled | 8s | 1 |  |
| 20:45:10 | 138 | 9 | sell 1.35 J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr → SOL | filled | 47s | 1 |  |
| 20:44:02 | 139 | 10 | sell 0.005 SOL → 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump | failed | 218s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "01ca0f66-5a55-4eb3-9ec1-b69f641cfede" } 
 |
| 20:47:41 | 140 | 10 | sell 8.03 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump → SOL | filled | 26s | 2 |  |
| 20:43:27 | 141 | 11 | sell 0.005 SOL → Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump | filled | 24s | 1 |  |
| 20:43:51 | 142 | 11 | sell 15 Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump → SOL | filled | 77s | 1 |  |
| 20:44:02 | 143 | 12 | sell 0.005 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | failed | 80s | 0 | error: failed to get balance of account AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "5f7542bc-ab7a-492f-b4bd-2415c232b1f8" } 
 |
| 20:45:22 | 144 | 12 | sell 0.000689 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ → SOL | failed | 2s | 0 | acquire Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ error: 404 Not Found: NoLiquidity: no route found |
| 20:46:18 | 145 | 13 | sell 0.005 SOL → 8K5X85PAJHAAVSvYaAzgVPPAPsqqHmvx16ZyBiscYF8L | failed | 117s | 0 | error: failed to get balance of account CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "a22a4e09-7f32-4423-8510-ea41a39361ad" } 
 |
| 20:48:15 | 146 | 13 | sell 9830 8K5X85PAJHAAVSvYaAzgVPPAPsqqHmvx16ZyBiscYF8L → SOL | failed | 9s | 0 | acquire 8K5X85PAJHAAVSvYaAzgVPPAPsqqHmvx16ZyBiscYF8L error: 404 Not Found: NoLiquidity: no route found |
| 20:43:27 | 147 | 14 | sell 0.005 SOL → GY9mZfyPpxXxBXBxS2hB2XjhP3kfUsywTvgveozxpump | filled | 141s | 1 |  |
| 20:45:48 | 148 | 14 | sell 1280 GY9mZfyPpxXxBXBxS2hB2XjhP3kfUsywTvgveozxpump → SOL | filled | 18s | 1 |  |
| 20:45:07 | 149 | 15 | sell 0.005 SOL → jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL | filled | 9s | 1 |  |
| 20:45:16 | 150 | 15 | sell 1.06 jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL → SOL | filled | 73s | 1 |  |
| 20:45:30 | 151 | 16 | sell 0.005 SOL → zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k | filled | 11s | 1 |  |
| 20:45:41 | 152 | 16 | sell 678 zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k → SOL | filled | 13s | 1 |  |
| 20:43:50 | 153 | 17 | sell 0.005 SOL → SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 | filled | 14s | 1 |  |
| 20:44:04 | 154 | 17 | sell 32.3 SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 → SOL | filled | 65s | 1 |  |
| 20:43:46 | 155 | 18 | sell 0.005 SOL → Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs | filled | 24s | 1 |  |
| 20:44:09 | 156 | 18 | sell 0.815 Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs → SOL | filled | 32s | 1 |  |
| 20:49:42 | 157 | 19 | sell 0.005 SOL → USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA | filled | 13s | 1 |  |
| 20:49:54 | 158 | 19 | sell 0.523 USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA → SOL | failed | 140s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "5cd09d37-65bc-4a50-b537-7582634fe94c" } 
 |
| 20:50:17 | 160 | 20 | sell 1.56 GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc → SOL | filled | 36s | 2 |  |
| 20:45:59 | 161 | 21 | sell 0.005 SOL → 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu | failed | 101s | 0 | error: failed to get balance of account HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "995b8d90-92e7-4739-ae37-873d4a4063ba" } 
 |
| 20:47:40 | 162 | 21 | sell 1.76 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu → SOL | filled | 30s | 2 |  |
| 20:45:53 | 163 | 22 | sell 0.005 SOL → RmtMAYVTTFv2iK9muMrXEoAnSSsZPPgRPbqZCKwNDYk | filled | 69s | 1 |  |
| 20:47:02 | 164 | 22 | sell 6450 RmtMAYVTTFv2iK9muMrXEoAnSSsZPPgRPbqZCKwNDYk → SOL | filled | 26s | 1 |  |
| 20:45:30 | 165 | 23 | sell 0.005 SOL → 4ko5tSr5o3H4v1sFtjTSd9MPUW7yx5AFCpkNPoL6pump | filled | 11s | 1 |  |
| 20:45:41 | 166 | 23 | sell 9510 4ko5tSr5o3H4v1sFtjTSd9MPUW7yx5AFCpkNPoL6pump → SOL | filled | 8s | 1 |  |
| 20:44:39 | 167 | 24 | sell 0.005 SOL → BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T | filled | 47s | 1 |  |
| 20:45:26 | 168 | 24 | sell 0.0179 BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T → SOL | filled | 62s | 1 |  |
| 20:44:25 | 169 | 25 | sell 0.005 SOL → C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE | filled | 21s | 1 |  |
| 20:44:46 | 170 | 25 | sell 91.5 C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE → SOL | filled | 94s | 1 |  |
| 20:43:31 | 171 | 26 | sell 0.005 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | filled | 25s | 1 |  |
| 20:43:56 | 172 | 26 | sell 0.00072 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu → SOL | filled | 11s | 1 |  |
| 20:47:28 | 173 | 27 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 32s | 1 |  |
| 20:48:00 | 174 | 27 | sell 0.00319 mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So → SOL | filled | 34s | 1 |  |
| 20:45:56 | 175 | 28 | sell 0.005 SOL → 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs | filled | 54s | 1 |  |
| 20:46:50 | 176 | 28 | sell 6.05 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs → SOL | filled | 13s | 1 |  |
| 20:45:06 | 177 | 29 | sell 0.005 SOL → 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump | filled | 8s | 1 |  |
| 20:45:14 | 178 | 29 | sell 171 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump → SOL | filled | 24s | 1 |  |
| 20:46:18 | 179 | 30 | sell 0.005 SOL → oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp | filled | 41s | 1 |  |
| 20:46:59 | 180 | 30 | sell 0.00467 oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp → SOL | filled | 114s | 1 |  |
| 20:46:31 | 181 | 1 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 59s | 1 |  |
| 20:47:29 | 182 | 1 | sell 0.00139 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re → SOL | filled | 24s | 1 |  |
| 20:47:24 | 183 | 2 | sell 0.005 SOL → G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG | filled | 11s | 1 |  |
| 20:47:34 | 184 | 2 | sell 8.9 G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG → SOL | filled | 24s | 1 |  |
| 20:48:52 | 185 | 3 | sell 0.005 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | failed | 106s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "0bf7b0df-a320-4122-8875-d21bbdf67b7e" } 
 |
| 20:50:38 | 186 | 3 | sell 0.000984 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX → SOL | failed | 9s | 0 | acquire XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX error: 404 Not Found: NoLiquidity: no route found |
| 20:43:55 | 187 | 4 | sell 0.005 SOL → DKu9kykSfbN5LBfFXtNNDPaX35o4Fv6vJ9FKk7pZpump | filled | 14s | 1 |  |
| 20:44:09 | 188 | 4 | sell 56.6 DKu9kykSfbN5LBfFXtNNDPaX35o4Fv6vJ9FKk7pZpump → SOL | filled | 28s | 1 |  |
| 20:46:18 | 189 | 5 | sell 0.005 SOL → Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump | filled | 45s | 1 |  |
| 20:47:03 | 190 | 5 | sell 64.5 Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump → SOL | filled | 25s | 1 |  |
| 20:47:00 | 191 | 6 | sell 0.005 SOL → 7Y7V1a4m2nWK7BMgbka5B4vR1pDvCK7yva3Hnrqkraze | filled | 104s | 1 |  |
| 20:48:44 | 192 | 6 | sell 3310 7Y7V1a4m2nWK7BMgbka5B4vR1pDvCK7yva3Hnrqkraze → SOL | filled | 17s | 1 |  |
| 20:48:08 | 193 | 7 | sell 0.005 SOL → 9aqmJjCnnMQv42TXLk921ceUkN35nea2QP969n1caqjj | failed | 132s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "da36ab88-3aea-4e4f-b3f8-8e6cc53a0217" } 
 |
| 20:50:20 | 194 | 7 | sell 515 9aqmJjCnnMQv42TXLk921ceUkN35nea2QP969n1caqjj → SOL | failed | 14s | 0 | acquire 9aqmJjCnnMQv42TXLk921ceUkN35nea2QP969n1caqjj error: 404 Not Found: NoLiquidity: no route found |
| 20:44:36 | 195 | 8 | sell 0.005 SOL → DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF | filled | 33s | 1 |  |
| 20:45:09 | 196 | 8 | sell 0.064 DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF → SOL | filled | 23s | 1 |  |
| 20:45:59 | 197 | 9 | sell 0.005 SOL → 7V6Sk63y8Rr1MvcN5mYNp61wgFhy4EeQg5gUASk9pump | filled | 62s | 1 |  |
| 20:47:01 | 198 | 9 | sell 4500 7V6Sk63y8Rr1MvcN5mYNp61wgFhy4EeQg5gUASk9pump → SOL | filled | 68s | 1 |  |
| 20:48:09 | 199 | 10 | sell 0.005 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | failed | 121s | 0 | error: failed to get balance of account GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "4d9ece4b-fd88-4216-8b29-0e6327f72081" } 
 |
| 20:50:10 | 200 | 10 | sell 0.0015 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN → SOL | failed | 23s | 0 | acquire XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN error: 404 Not Found: NoLiquidity: no route found |
| 20:45:09 | 201 | 11 | sell 0.005 SOL → JDzPbXboQYWVmdxXS3LbvjM52RtsV1QaSv2AzoCiai2o | filled | 48s | 1 |  |
| 20:45:57 | 202 | 11 | sell 3.64 JDzPbXboQYWVmdxXS3LbvjM52RtsV1QaSv2AzoCiai2o → SOL | filled | 87s | 1 |  |
| 20:45:27 | 203 | 12 | sell 0.005 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | filled | 21s | 1 |  |
| 20:45:48 | 204 | 12 | sell 0.00294 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu → SOL | filled | 36s | 1 |  |
| 20:49:30 | 205 | 13 | sell 0.005 SOL → B4ptaVsUe6YbtBwAS38WFeweSrVNfQLCcj9JRrtjU8vn | filled | 22s | 1 |  |
| 20:49:52 | 206 | 13 | sell 13000 B4ptaVsUe6YbtBwAS38WFeweSrVNfQLCcj9JRrtjU8vn → SOL | filled | 27s | 1 |  |
| 20:46:17 | 207 | 14 | sell 0.005 SOL → DoVAVzViX8Bjy3r15nwikSaSbzE6dV4ovd28aWpJpump | failed | 114s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "e39e9b5d-c04d-43e2-a435-aa00a839737f" } 
 |
| 20:48:11 | 208 | 14 | sell 357 DoVAVzViX8Bjy3r15nwikSaSbzE6dV4ovd28aWpJpump → SOL | failed | 10s | 0 | acquire DoVAVzViX8Bjy3r15nwikSaSbzE6dV4ovd28aWpJpump error: 404 Not Found: NoLiquidity: no route found |
| 20:46:44 | 209 | 15 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 14s | 1 |  |
| 20:46:58 | 210 | 15 | sell 10.9 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr → SOL | filled | 11s | 1 |  |
| 20:45:56 | 211 | 16 | sell 0.005 SOL → HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump | filled | 124s | 1 |  |
| 20:48:00 | 212 | 16 | sell 11.7 HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump → SOL | filled | 8s | 1 |  |
| 20:45:10 | 213 | 17 | sell 0.005 SOL → 8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn | filled | 28s | 1 |  |
| 20:45:38 | 214 | 17 | sell 17.9 8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn → SOL | filled | 20s | 1 |  |
| 20:45:02 | 215 | 18 | sell 0.005 SOL → BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump | filled | 7s | 1 |  |
| 20:45:09 | 216 | 18 | sell 355 BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump → SOL | filled | 84s | 1 |  |
| 20:52:16 | 217 | 19 | sell 0.005 SOL → PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b | failed | 46s | 1 | main expired |
| 20:53:03 | 218 | 19 | sell 12.9 PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b → SOL | failed | 48s | 1 | acquire PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b expired |
| 20:51:01 | 219 | 20 | sell 0.005 SOL → BXoHJddsWJLHtAopeiSbKUSELsu8hSFMs8baGMDkpump | filled | 14s | 1 |  |
| 20:51:16 | 220 | 20 | sell 186 BXoHJddsWJLHtAopeiSbKUSELsu8hSFMs8baGMDkpump → SOL | filled | 29s | 1 |  |
| 20:48:36 | 221 | 21 | sell 0.005 SOL → EEpng77ZPn9FbgbT4xsRjwuxNCcMBYq3HTwEscyTpump | filled | 23s | 1 |  |
| 20:49:00 | 222 | 21 | sell 3970 EEpng77ZPn9FbgbT4xsRjwuxNCcMBYq3HTwEscyTpump → SOL | failed | 111s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "4ee2dabd-047b-4921-9056-de5e8c0af419" } 
 |
| 20:48:54 | 223 | 22 | sell 0.005 SOL → 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 | failed | 145s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "78f4f029-f540-437f-b9cd-182b2c22e38d" } 
 |
| 20:51:20 | 224 | 22 | sell 0.364 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 → SOL | failed | 71s | 1 | acquire 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 expired |
| 20:45:50 | 225 | 23 | sell 0.005 SOL → DpBzjtgGLF7QA9Ug3eUVGbnqa6j3jvYBn1XuQuktvfhm | filled | 9s | 1 |  |
| 20:45:59 | 226 | 23 | sell 7350 DpBzjtgGLF7QA9Ug3eUVGbnqa6j3jvYBn1XuQuktvfhm → SOL | filled | 63s | 1 |  |
| 20:46:30 | 227 | 24 | sell 0.005 SOL → E3i7sTY5QYEBh3itepnomZQt7Eh5kzmHFk1vkm2pump | filled | 26s | 1 |  |
| 20:46:55 | 228 | 24 | sell 1830 E3i7sTY5QYEBh3itepnomZQt7Eh5kzmHFk1vkm2pump → SOL | filled | 9s | 1 |  |
| 20:46:26 | 229 | 25 | sell 0.005 SOL → Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump | filled | 25s | 1 |  |
| 20:46:51 | 230 | 25 | sell 30.1 Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump → SOL | filled | 11s | 1 |  |
| 20:45:50 | 231 | 26 | sell 0.005 SOL → HmJDgky11u77hpBss6D8sjNpYPD5B6fWgSVDj58jpump | filled | 46s | 1 |  |
| 20:46:36 | 232 | 26 | sell 6090 HmJDgky11u77hpBss6D8sjNpYPD5B6fWgSVDj58jpump → SOL | filled | 20s | 1 |  |
| 20:48:43 | 233 | 27 | sell 0.005 SOL → 2bpT3ksMdwdZ6DuHyq3FDUr7HDwvZ5DRZoT1fUPALJaH | filled | 15s | 1 |  |
| 20:48:58 | 234 | 27 | sell 133 2bpT3ksMdwdZ6DuHyq3FDUr7HDwvZ5DRZoT1fUPALJaH → SOL | filled | 17s | 1 |  |
| 20:47:28 | 235 | 28 | sell 0.005 SOL → 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS | filled | 36s | 1 |  |
| 20:48:04 | 236 | 28 | sell 117 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS → SOL | filled | 31s | 1 |  |
| 20:46:30 | 237 | 29 | sell 0.005 SOL → AVBN6kXdaw27ySuvMevKYzNTL8d39b7sGQFDCmsvpump | filled | 26s | 1 |  |
| 20:46:57 | 238 | 29 | sell 3200 AVBN6kXdaw27ySuvMevKYzNTL8d39b7sGQFDCmsvpump → SOL | filled | 7s | 1 |  |
| 20:48:54 | 239 | 30 | sell 0.005 SOL → hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux | filled | 51s | 1 |  |
| 20:49:45 | 240 | 30 | sell 1 hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux → SOL | failed | 127s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "b1d2d26e-c83e-46b7-b62a-f354b90a0a3f" } 
 |
| 20:47:55 | 241 | 1 | sell 0.005 SOL → 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC | filled | 24s | 1 |  |
| 20:48:19 | 242 | 1 | sell 0.5 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC → SOL | filled | 23s | 1 |  |
| 20:47:59 | 243 | 2 | sell 0.005 SOL → VJdpSDDLof7HuZiNmsRUSL4YCncsk1FGiVoHyAJpump | filled | 54s | 1 |  |
| 20:48:53 | 244 | 2 | sell 89200 VJdpSDDLof7HuZiNmsRUSL4YCncsk1FGiVoHyAJpump → SOL | filled | 50s | 1 |  |
| 20:51:04 | 245 | 3 | sell 0.005 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | failed | 8s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:51:12 | 246 | 3 | sell 0.0212 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc → SOL | failed | 4s | 0 | acquire Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc error: 404 Not Found: NoLiquidity: no route found |
| 20:44:39 | 247 | 4 | sell 0.005 SOL → 3BgwJ8b7b9hHX4sgfZ2KJhv9496CoVfsMK2YePevsBRw | filled | 30s | 1 |  |
| 20:45:09 | 248 | 4 | sell 255 3BgwJ8b7b9hHX4sgfZ2KJhv9496CoVfsMK2YePevsBRw → SOL | filled | 35s | 1 |  |
| 20:49:29 | 250 | 5 | sell 0.0048 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg → SOL | failed | 4s | 0 | acquire XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg error: 404 Not Found: NoLiquidity: no route found |
| 20:49:16 | 251 | 6 | sell 0.005 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | filled | 29s | 1 |  |
| 20:49:45 | 252 | 6 | sell 0.00155 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp → SOL | filled | 30s | 1 |  |
| 20:50:47 | 253 | 7 | sell 0.005 SOL → PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL | failed | 71s | 1 | main expired |
| 20:51:57 | 254 | 7 | sell 245 PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL → SOL | failed | 61s | 1 | acquire PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL expired |
| 20:45:33 | 255 | 8 | sell 0.005 SOL → 6ehEcTMCc85aNF4x9CWx8HuvWGhxQtvKdhKVf2HDpump | filled | 23s | 1 |  |
| 20:45:56 | 256 | 8 | sell 2700 6ehEcTMCc85aNF4x9CWx8HuvWGhxQtvKdhKVf2HDpump → SOL | failed | 130s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "528cebf6-4e29-4925-b369-5ea09c72ce8d" } 
 |
| 20:48:33 | 257 | 9 | sell 0.005 SOL → GCa9TZMK9Q3VUSkhZgX76YAQBjqQd1dPxkBnZojFpump | failed | 142s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "c616858f-2659-4720-8e7e-3b66d6c2777f" } 
 |
| 20:50:54 | 258 | 9 | sell 16000 GCa9TZMK9Q3VUSkhZgX76YAQBjqQd1dPxkBnZojFpump → SOL | failed | 15s | 0 | acquire GCa9TZMK9Q3VUSkhZgX76YAQBjqQd1dPxkBnZojFpump error: 404 Not Found: NoLiquidity: no route found |
| 20:51:09 | 259 | 10 | sell 0.005 SOL → D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n | failed | 57s | 1 | main expired |
| 20:52:06 | 260 | 10 | sell 1950 D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n → SOL | failed | 47s | 1 | acquire D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n expired |
| 20:47:28 | 261 | 11 | sell 0.005 SOL → Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump | filled | 27s | 1 |  |
| 20:47:55 | 262 | 11 | sell 44.2 Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump → SOL | filled | 10s | 1 |  |
| 20:46:26 | 263 | 12 | sell 0.005 SOL → AyYNfPtftg2zDP4ZbgcoQMggQtwLh4zpfVVmUJs2thto | filled | 23s | 1 |  |
| 20:46:49 | 264 | 12 | sell 1860 AyYNfPtftg2zDP4ZbgcoQMggQtwLh4zpfVVmUJs2thto → SOL | filled | 13s | 1 |  |
| 20:50:34 | 265 | 13 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 115s | 1 | main expired |
| 20:52:29 | 266 | 13 | sell 1080 MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 → SOL | failed | 43s | 1 | acquire MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 expired |
| 20:48:23 | 267 | 14 | sell 0.005 SOL → 91ryaCo5yGpYZM3bs6GUPs97VWJQj7RozBmqPULgpump | filled | 82s | 1 |  |
| 20:49:45 | 268 | 14 | sell 14200 91ryaCo5yGpYZM3bs6GUPs97VWJQj7RozBmqPULgpump → SOL | filled | 8s | 1 |  |
| 20:47:24 | 269 | 15 | sell 0.005 SOL → 5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump | failed | 66s | 1 | main expired |
| 20:48:29 | 270 | 15 | sell 256 5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump → SOL | failed | 2s | 0 | acquire 5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump error: 404 Not Found: NoLiquidity: no route found |
| 20:48:22 | 271 | 16 | sell 0.005 SOL → KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP | filled | 18s | 1 |  |
| 20:48:41 | 272 | 16 | sell 28.6 KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP → SOL | filled | 23s | 1 |  |
| 20:46:18 | 273 | 17 | sell 0.005 SOL → rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof | filled | 33s | 1 |  |
| 20:46:50 | 274 | 17 | sell 0.258 rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof → SOL | filled | 14s | 1 |  |
| 20:46:38 | 275 | 18 | sell 0.005 SOL → DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 | filled | 18s | 1 |  |
| 20:46:56 | 276 | 18 | sell 62 DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 → SOL | failed | 212s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "efc29936-7b41-498f-979a-4924e26acc3d" } 
 |
| 20:53:50 | 277 | 19 | sell 0.005 SOL → 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx | failed | 43s | 1 | main expired |
| 20:54:34 | 278 | 19 | sell 0.232 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx → SOL | failed | 42s | 1 | acquire 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx expired |
| 20:52:13 | 279 | 20 | sell 0.005 SOL → METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta | failed | 46s | 1 | main expired |
| 20:52:59 | 280 | 20 | sell 0.0875 METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta → SOL | failed | 44s | 1 | acquire METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta expired |
| 20:52:30 | 281 | 21 | sell 0.005 SOL → 9sfCHMLWSVy6MD6zr7pR1gD3qbT7C6K1E3dMf2ZBpump | failed | 47s | 1 | main expired |
| 20:53:17 | 282 | 21 | sell 1570 9sfCHMLWSVy6MD6zr7pR1gD3qbT7C6K1E3dMf2ZBpump → SOL | failed | 0s | 0 | acquire 9sfCHMLWSVy6MD6zr7pR1gD3qbT7C6K1E3dMf2ZBpump error: 404 Not Found: NoLiquidity: no route found |
| 20:52:30 | 283 | 22 | sell 0.005 SOL → SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq | failed | 43s | 1 | main expired |
| 20:53:14 | 284 | 22 | sell 8.95 SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq → SOL | failed | 43s | 1 | acquire SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq expired |
| 20:47:27 | 285 | 23 | sell 0.005 SOL → Tqj8yFmagrg7oorpQkVGYR52r96RFTamvWfth9bpump | filled | 40s | 1 |  |
| 20:48:07 | 286 | 23 | sell 754 Tqj8yFmagrg7oorpQkVGYR52r96RFTamvWfth9bpump → SOL | filled | 34s | 1 |  |
| 20:47:35 | 287 | 24 | sell 0.005 SOL → EkcTa8n14fXcHdfvZqCg72cTCutJnnKb19vcHwKTpump | filled | 19s | 1 |  |
| 20:47:54 | 288 | 24 | sell 2320 EkcTa8n14fXcHdfvZqCg72cTCutJnnKb19vcHwKTpump → SOL | filled | 12s | 1 |  |
| 20:47:24 | 289 | 25 | sell 0.005 SOL → 7fDdLy2rmQKsPCkqUXEd1mN7yDfEzArc4VrctWmfkJBK | filled | 10s | 1 |  |
| 20:47:34 | 290 | 25 | sell 13900 7fDdLy2rmQKsPCkqUXEd1mN7yDfEzArc4VrctWmfkJBK → SOL | filled | 13s | 1 |  |
| 20:46:57 | 291 | 26 | sell 0.005 SOL → CortexFv3fRcLKTgACr7aLqckGh5eP7TP3z9JHoKqMc6 | filled | 7s | 1 |  |
| 20:47:04 | 292 | 26 | sell 15.3 CortexFv3fRcLKTgACr7aLqckGh5eP7TP3z9JHoKqMc6 → SOL | filled | 53s | 1 |  |
| 20:49:16 | 293 | 27 | sell 0.005 SOL → EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 | failed | 134s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "c8cb9763-b839-4498-b426-a8942935acd5" } 
 |
| 20:51:30 | 294 | 27 | sell 416 EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 → SOL | failed | 7s | 0 | acquire EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 error: 404 Not Found: NoLiquidity: no route found |
| 20:48:36 | 295 | 28 | sell 0.005 SOL → 8k4sBtEeK4pf26noKqApv8NBTnuSJcbdwpKYknk5PbAA | filled | 43s | 1 |  |
| 20:49:20 | 296 | 28 | sell 392 8k4sBtEeK4pf26noKqApv8NBTnuSJcbdwpKYknk5PbAA → SOL | filled | 16s | 1 |  |
| 20:47:24 | 297 | 29 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 96s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "66aa4d5a-485b-41c1-a842-04792c9804d9" } 
 |
| 20:49:00 | 298 | 29 | sell 0.0031 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm → SOL | failed | 113s | 0 | acquire 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "517965a6-ed59-4b8b-bb5d-c210c81ce1a3" } 
 |
| 20:52:13 | 299 | 30 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 48s | 1 | main expired |
| 20:53:02 | 300 | 30 | sell 0.000126 AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P → SOL | failed | 44s | 1 | acquire AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P expired |
| 20:48:56 | 301 | 1 | sell 0.005 SOL → ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU | failed | 65s | 1 | main expired |
| 20:50:01 | 302 | 1 | sell 218 ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU → SOL | failed | 56s | 1 | acquire ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU expired |
| 20:49:45 | 303 | 2 | sell 0.005 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | filled | 19s | 1 |  |
| 20:50:04 | 304 | 2 | sell 0.00221 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 → SOL | filled | 19s | 1 |  |
| 20:51:18 | 305 | 3 | sell 0.005 SOL → 4D8qUHm334fxqeTauPvF8gQ7fYgrD4Mpmb1Wy6ftUSWR | failed | 120s | 1 | main expired |
| 20:53:19 | 306 | 3 | sell 1190 4D8qUHm334fxqeTauPvF8gQ7fYgrD4Mpmb1Wy6ftUSWR → SOL | failed | 0s | 0 | acquire 4D8qUHm334fxqeTauPvF8gQ7fYgrD4Mpmb1Wy6ftUSWR error: 404 Not Found: NoLiquidity: no route found |
| 20:45:46 | 307 | 4 | sell 0.005 SOL → 6oGuFDbEeaSzTcvrmmd2MqfNYwHKXFoN7regcR22pump | filled | 12s | 1 |  |
| 20:45:57 | 308 | 4 | sell 7040 6oGuFDbEeaSzTcvrmmd2MqfNYwHKXFoN7regcR22pump → SOL | filled | 66s | 1 |  |
| 20:49:35 | 309 | 5 | sell 0.005 SOL → 3kmygWKZBkCYrgZHKfiuB9UFKTcDLTFFsKo3BWpmpump | filled | 93s | 1 |  |
| 20:51:08 | 310 | 5 | sell 4640 3kmygWKZBkCYrgZHKfiuB9UFKTcDLTFFsKo3BWpmpump → SOL | filled | 17s | 1 |  |
| 20:52:10 | 312 | 6 | sell 1680 EKtmPPLaCbEEKiwoHHtV7TsRsmPXs5CMGtQtZFSiinsc → SOL | failed | 3s | 0 | acquire EKtmPPLaCbEEKiwoHHtV7TsRsmPXs5CMGtQtZFSiinsc error: 404 Not Found: NoLiquidity: no route found |
| 20:52:58 | 313 | 7 | sell 0.005 SOL → CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn | failed | 44s | 1 | main expired |
| 20:53:43 | 314 | 7 | sell 6.28e-06 CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn → SOL | failed | 45s | 1 | acquire CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn expired |
| 20:48:08 | 315 | 8 | sell 0.005 SOL → FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump | filled | 180s | 1 |  |
| 20:51:08 | 316 | 8 | sell 1190 FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump → SOL | filled | 11s | 1 |  |
| 20:51:11 | 317 | 9 | sell 0.005 SOL → 5mH155ePpNWJb2GktpftLJbcTvoxFaUrv7XkZPDtpump | failed | 68s | 1 | main expired |
| 20:52:19 | 318 | 9 | sell 26600 5mH155ePpNWJb2GktpftLJbcTvoxFaUrv7XkZPDtpump → SOL | failed | 0s | 0 | acquire 5mH155ePpNWJb2GktpftLJbcTvoxFaUrv7XkZPDtpump error: 404 Not Found: NoLiquidity: no route found |
| 20:52:53 | 319 | 10 | sell 0.005 SOL → FeR8VBqNRSUD5NtXAj2n3j1dAHkZHfyDktKuLXD4pump | failed | 47s | 1 | main expired |
| 20:53:40 | 320 | 10 | sell 9.73 FeR8VBqNRSUD5NtXAj2n3j1dAHkZHfyDktKuLXD4pump → SOL | failed | 45s | 1 | acquire FeR8VBqNRSUD5NtXAj2n3j1dAHkZHfyDktKuLXD4pump expired |
| 20:48:09 | 321 | 11 | sell 0.005 SOL → CVhWiQ2SBhpTJ3xAR3ekf3uf8Ns2tNzj3mEtzKSpump | filled | 34s | 1 |  |
| 20:48:42 | 322 | 11 | sell 98600 CVhWiQ2SBhpTJ3xAR3ekf3uf8Ns2tNzj3mEtzKSpump → SOL | filled | 18s | 1 |  |
| 20:47:03 | 323 | 12 | sell 0.005 SOL → ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY | filled | 66s | 1 |  |
| 20:48:09 | 324 | 12 | sell 12.3 ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY → SOL | filled | 97s | 1 |  |
| 20:53:12 | 325 | 13 | sell 0.005 SOL → B62socheoeJVqiKnihcR96g61tzALYwcMsE91Sw6pump | failed | 42s | 1 | main expired |
| 20:53:54 | 326 | 13 | sell 29400 B62socheoeJVqiKnihcR96g61tzALYwcMsE91Sw6pump → SOL | failed | 0s | 0 | acquire B62socheoeJVqiKnihcR96g61tzALYwcMsE91Sw6pump error: 404 Not Found: NoLiquidity: no route found |
| 20:50:10 | 327 | 14 | sell 0.005 SOL → 42cXQvAAr7hcPBPWAS4ocVtDyeJ4Fa6gRR2uG4gppump | filled | 13s | 1 |  |
| 20:50:22 | 328 | 14 | sell 68.7 42cXQvAAr7hcPBPWAS4ocVtDyeJ4Fa6gRR2uG4gppump → SOL | filled | 46s | 1 |  |
| 20:48:34 | 329 | 15 | sell 0.005 SOL → 7nLukVng5teXze14rum9v57juXLjUp7JJnCveko1pump | filled | 19s | 1 |  |
| 20:48:53 | 330 | 15 | sell 3930 7nLukVng5teXze14rum9v57juXLjUp7JJnCveko1pump → SOL | filled | 10s | 1 |  |
| 20:49:34 | 331 | 16 | sell 0.005 SOL → METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m | filled | 58s | 1 |  |
| 20:50:33 | 332 | 16 | sell 9.81 METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m → SOL | filled | 115s | 1 |  |
| 20:47:49 | 333 | 17 | sell 0.005 SOL → jLz71QZfjnZZMLjUaCBw7KmUyftkkNq8NkWi2u9dyap | filled | 11s | 1 |  |
| 20:48:00 | 334 | 17 | sell 22500 jLz71QZfjnZZMLjUaCBw7KmUyftkkNq8NkWi2u9dyap → SOL | failed | 118s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "656fa03f-2646-4e1b-b537-ce5808dda10a" } 
 |
| 20:50:30 | 335 | 18 | sell 0.005 SOL → CrJPSvj625TnPdWS42aG5ybMcHeFvnNqq5AExVespump | failed | 86s | 1 | main expired |
| 20:51:56 | 336 | 18 | sell 17300 CrJPSvj625TnPdWS42aG5ybMcHeFvnNqq5AExVespump → SOL | failed | 14s | 0 | acquire CrJPSvj625TnPdWS42aG5ybMcHeFvnNqq5AExVespump error: 404 Not Found: NoLiquidity: no route found |
| 20:55:16 | 337 | 19 | sell 0.005 SOL → 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump | failed | 44s | 1 | main expired |
| 20:56:00 | 338 | 19 | sell 10.7 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump → SOL | failed | 42s | 1 | acquire 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump expired |
| 20:53:43 | 339 | 20 | sell 0.005 SOL → 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump | failed | 44s | 1 | main expired |
| 20:54:27 | 340 | 20 | sell 67.5 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump → SOL | failed | 46s | 1 | acquire 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump expired |
| 20:53:17 | 341 | 21 | sell 0.005 SOL → HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd | failed | 44s | 1 | main expired |
| 20:54:01 | 342 | 21 | sell 98.3 HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd → SOL | failed | 0s | 0 | acquire HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd error: 404 Not Found: NoLiquidity: no route found |
| 20:53:56 | 343 | 22 | sell 0.005 SOL → 7n8kRipxAQBfpGQtcGA2AbkM2HASSVCzqZ5F3QEopump | failed | 46s | 1 | main expired |
| 20:54:42 | 344 | 22 | sell 7330 7n8kRipxAQBfpGQtcGA2AbkM2HASSVCzqZ5F3QEopump → SOL | failed | 0s | 0 | acquire 7n8kRipxAQBfpGQtcGA2AbkM2HASSVCzqZ5F3QEopump error: 404 Not Found: NoLiquidity: no route found |
| 20:48:57 | 345 | 23 | sell 0.005 SOL → LBTCgU4b3wsFKsPwBn1rRZDx5DoFutM6RPiEt1TPDsY | filled | 58s | 1 |  |
| 20:49:54 | 346 | 23 | sell 6.26e-06 LBTCgU4b3wsFKsPwBn1rRZDx5DoFutM6RPiEt1TPDsY → SOL | filled | 31s | 1 |  |
| 20:48:08 | 347 | 24 | sell 0.005 SOL → HKZDfZnkHZxd9agRDNPyDv4iT6LmAurJnpRtj9wpump | failed | 132s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "4c999c99-6b3d-4232-9117-f1029a36890c" } 
 |
| 20:50:20 | 348 | 24 | sell 97.7 HKZDfZnkHZxd9agRDNPyDv4iT6LmAurJnpRtj9wpump → SOL | failed | 10s | 0 | acquire HKZDfZnkHZxd9agRDNPyDv4iT6LmAurJnpRtj9wpump error: 404 Not Found: NoLiquidity: no route found |
| 20:47:49 | 349 | 25 | sell 0.005 SOL → Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu | filled | 10s | 1 |  |
| 20:47:59 | 350 | 25 | sell 38.4 Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu → SOL | failed | 96s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "469a27cf-685a-4fd7-baf3-4969e3af10d1" } 
 |
| 20:47:59 | 351 | 26 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 11s | 1 |  |
| 20:48:09 | 352 | 26 | sell 0.00409 pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL → SOL | filled | 95s | 1 |  |
| 20:51:38 | 353 | 27 | sell 0.005 SOL → CNWxmoBSQZo2Sgp5KSAK5m9FwSqDbXQRP4CNMuoe78Gm | failed | 48s | 1 | main expired |
| 20:52:26 | 354 | 27 | sell 30900 CNWxmoBSQZo2Sgp5KSAK5m9FwSqDbXQRP4CNMuoe78Gm → SOL | failed | 0s | 0 | acquire CNWxmoBSQZo2Sgp5KSAK5m9FwSqDbXQRP4CNMuoe78Gm error: 404 Not Found: NoLiquidity: no route found |
| 20:49:38 | 355 | 28 | sell 0.005 SOL → gF2fSfar4x1BiZ9n2MLMAVYVWQYzxpsrXC6hGV7pump | filled | 16s | 1 |  |
| 20:49:54 | 356 | 28 | sell 111000 gF2fSfar4x1BiZ9n2MLMAVYVWQYzxpsrXC6hGV7pump → SOL | filled | 32s | 1 |  |
| 20:51:01 | 357 | 29 | sell 0.005 SOL → TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo | filled | 14s | 1 |  |
| 20:51:15 | 358 | 29 | sell 0.00257 TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo → SOL | filled | 37s | 1 |  |
| 20:53:46 | 359 | 30 | sell 0.005 SOL → 7GUnr7krtQhJwd6ASY2VUprd9t4c64zcgCsjdmZepump | failed | 46s | 1 | main expired |
| 20:54:32 | 360 | 30 | sell 8600 7GUnr7krtQhJwd6ASY2VUprd9t4c64zcgCsjdmZepump → SOL | failed | 1s | 0 | acquire 7GUnr7krtQhJwd6ASY2VUprd9t4c64zcgCsjdmZepump error: 404 Not Found: NoLiquidity: no route found |
| 20:51:05 | 361 | 1 | sell 0.005 SOL → HBrfYZgeLKdSvBBGnGkvAK4563pq8oBGpgNFAaespump | failed | 125s | 1 | main expired |
| 20:53:10 | 362 | 1 | sell 11500 HBrfYZgeLKdSvBBGnGkvAK4563pq8oBGpgNFAaespump → SOL | failed | 0s | 0 | acquire HBrfYZgeLKdSvBBGnGkvAK4563pq8oBGpgNFAaespump error: 404 Not Found: NoLiquidity: no route found |
| 20:50:46 | 363 | 2 | sell 0.005 SOL → 23e4CNuJxvBQ7RjNLc8Bh3yN3pQq6jeiTbyzJGXYPgme | failed | 139s | 1 | main expired |
| 20:53:04 | 364 | 2 | sell 19300 23e4CNuJxvBQ7RjNLc8Bh3yN3pQq6jeiTbyzJGXYPgme → SOL | failed | 0s | 0 | acquire 23e4CNuJxvBQ7RjNLc8Bh3yN3pQq6jeiTbyzJGXYPgme error: 404 Not Found: NoLiquidity: no route found |
| 20:53:19 | 365 | 3 | sell 0.005 SOL → DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw | failed | 44s | 1 | main expired |
| 20:54:03 | 366 | 3 | sell 0.0087 DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw → SOL | failed | 0s | 0 | acquire DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw error: 404 Not Found: NoLiquidity: no route found |
| 20:49:16 | 368 | 4 | sell 8.49 CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu → SOL | filled | 62s | 2 |  |
| 20:51:41 | 369 | 5 | sell 0.005 SOL → J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd | failed | 45s | 1 | main expired |
| 20:52:26 | 370 | 5 | sell 13.7 J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd → SOL | failed | 47s | 1 | acquire J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd expired |
| 20:52:14 | 371 | 6 | sell 0.005 SOL → LFEJTxJ9yi6ojGDFpjbGfABLbH55Fc3oEK8syJJpump | failed | 46s | 1 | main expired |
| 20:53:00 | 372 | 6 | sell 88100 LFEJTxJ9yi6ojGDFpjbGfABLbH55Fc3oEK8syJJpump → SOL | failed | 0s | 0 | acquire LFEJTxJ9yi6ojGDFpjbGfABLbH55Fc3oEK8syJJpump error: 404 Not Found: NoLiquidity: no route found |
| 20:54:27 | 373 | 7 | sell 0.005 SOL → CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta | failed | 46s | 1 | main expired |
| 20:55:13 | 374 | 7 | sell 0.684 CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta → SOL | failed | 42s | 1 | acquire CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta expired |
| 20:51:41 | 375 | 8 | sell 0.005 SOL → 6Hebn672FvMSq61mo4HYq86QgLHgBUm6y8A9bXGppump | failed | 45s | 1 | main expired |
| 20:52:26 | 376 | 8 | sell 37300 6Hebn672FvMSq61mo4HYq86QgLHgBUm6y8A9bXGppump → SOL | failed | 0s | 0 | acquire 6Hebn672FvMSq61mo4HYq86QgLHgBUm6y8A9bXGppump error: 404 Not Found: NoLiquidity: no route found |
| 20:52:19 | 377 | 9 | sell 0.005 SOL → 3Dgwn5E7H5a8k6iGrz3qirkaJqUaJrKHEZ2xPcLRpump | failed | 45s | 1 | main expired |
| 20:53:05 | 378 | 9 | sell 777 3Dgwn5E7H5a8k6iGrz3qirkaJqUaJrKHEZ2xPcLRpump → SOL | failed | 0s | 0 | acquire 3Dgwn5E7H5a8k6iGrz3qirkaJqUaJrKHEZ2xPcLRpump error: 404 Not Found: NoLiquidity: no route found |
| 20:54:26 | 379 | 10 | sell 0.005 SOL → A9AHYeqb7nQk7LZUraw7rBCzYRjy2DRvE6NqWfFHKRdH | failed | 42s | 1 | main expired |
| 20:55:08 | 380 | 10 | sell 8350 A9AHYeqb7nQk7LZUraw7rBCzYRjy2DRvE6NqWfFHKRdH → SOL | failed | 0s | 0 | acquire A9AHYeqb7nQk7LZUraw7rBCzYRjy2DRvE6NqWfFHKRdH error: 404 Not Found: NoLiquidity: no route found |
| 20:49:29 | 381 | 11 | sell 0.005 SOL → FPfi9q1AixdUeWQVPFHJMJQ7a43S78dm6UZ4fzN4pump | filled | 16s | 1 |  |
| 20:49:45 | 382 | 11 | sell 9950 FPfi9q1AixdUeWQVPFHJMJQ7a43S78dm6UZ4fzN4pump → SOL | failed | 76s | 0 | error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "cbbd9634-c186-4150-8bdc-9e5598ad1fbe" } 
 |
| 20:49:51 | 383 | 12 | sell 0.005 SOL → AkchGAUdXXRGHt3HXaHbTvw3JLGUwtJRmYnkG66wpump | failed | 126s | 0 | main error: failed to get recent blockhash: Error: 429 Too Many Requests:  {"jsonrpc":"2.0","error":{"code": 429, "message":"Connection rate limits exceeded"}, "id": "8f0ac62a-b9b6-4f77-a16d-8da6ac7eedf0" } 
 |
| 20:51:56 | 384 | 12 | sell 27500 AkchGAUdXXRGHt3HXaHbTvw3JLGUwtJRmYnkG66wpump → SOL | failed | 24s | 0 | acquire AkchGAUdXXRGHt3HXaHbTvw3JLGUwtJRmYnkG66wpump error: 404 Not Found: NoLiquidity: no route found |
| 20:53:54 | 385 | 13 | sell 0.005 SOL → Hos282xmdMJHwMjhni91fNqdjDsgWjgSckxuGc1Bpump | failed | 45s | 1 | main expired |
| 20:54:39 | 386 | 13 | sell 3750 Hos282xmdMJHwMjhni91fNqdjDsgWjgSckxuGc1Bpump → SOL | failed | 0s | 0 | acquire Hos282xmdMJHwMjhni91fNqdjDsgWjgSckxuGc1Bpump error: 404 Not Found: NoLiquidity: no route found |
| 20:51:12 | 387 | 14 | sell 0.005 SOL → GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump | failed | 71s | 1 | main expired |
| 20:52:23 | 388 | 14 | sell 50.9 GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump → SOL | failed | 42s | 1 | acquire GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump expired |
| 20:49:42 | 389 | 15 | sell 0.005 SOL → fvHLJUwsynVHJrssbZ8MLNyku9jt2izUspbBD4Spump | failed | 170s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 20:52:32 | 390 | 15 | sell 10200 fvHLJUwsynVHJrssbZ8MLNyku9jt2izUspbBD4Spump → SOL | failed | 0s | 0 | acquire fvHLJUwsynVHJrssbZ8MLNyku9jt2izUspbBD4Spump error: 404 Not Found: NoLiquidity: no route found |
| 20:52:28 | 391 | 16 | sell 0.005 SOL → FtateF34Xzawa91bpbVNdX72hZYo9cymRDYqBreHHbJi | failed | 46s | 1 | main expired |
| 20:53:14 | 392 | 16 | sell 7510 FtateF34Xzawa91bpbVNdX72hZYo9cymRDYqBreHHbJi → SOL | failed | 0s | 0 | acquire FtateF34Xzawa91bpbVNdX72hZYo9cymRDYqBreHHbJi error: 404 Not Found: NoLiquidity: no route found |
| 20:50:09 | 393 | 17 | sell 0.005 SOL → 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 20:50:14 | 394 | 17 | sell 65 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump → SOL | failed | 21s | 0 | acquire 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump error: 404 Not Found: NoLiquidity: no route found |
| 20:52:10 | 395 | 18 | sell 0.005 SOL → 2PENPmfgJfq6CG3k4byj4oWwHf8SerqakmYHMkUupump | failed | 47s | 1 | main expired |
| 20:52:57 | 396 | 18 | sell 27700 2PENPmfgJfq6CG3k4byj4oWwHf8SerqakmYHMkUupump → SOL | failed | 0s | 0 | acquire 2PENPmfgJfq6CG3k4byj4oWwHf8SerqakmYHMkUupump error: 404 Not Found: NoLiquidity: no route found |
| 20:56:42 | 397 | 19 | sell 0.005 SOL → 3aqXuwp6HuVXs9vdD9Gpg4dzJaUx443RjK7GXzphpump | failed | 45s | 1 | main expired |
| 20:57:27 | 398 | 19 | sell 51900 3aqXuwp6HuVXs9vdD9Gpg4dzJaUx443RjK7GXzphpump → SOL | failed | 0s | 0 | acquire 3aqXuwp6HuVXs9vdD9Gpg4dzJaUx443RjK7GXzphpump error: 404 Not Found: NoLiquidity: no route found |
| 20:55:13 | 399 | 20 | sell 0.005 SOL → DLYQBXkRo43Ct96fd9Cr7y5tZP5yQKUBLMTZU92epump | failed | 41s | 1 | main expired |
| 20:55:55 | 400 | 20 | sell 51100 DLYQBXkRo43Ct96fd9Cr7y5tZP5yQKUBLMTZU92epump → SOL | failed | 0s | 0 | acquire DLYQBXkRo43Ct96fd9Cr7y5tZP5yQKUBLMTZU92epump error: 404 Not Found: NoLiquidity: no route found |
| 20:54:01 | 401 | 21 | sell 0.005 SOL → bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 | failed | 45s | 1 | main expired |
| 20:54:46 | 402 | 21 | sell 0.00341 bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 → SOL | failed | 42s | 1 | acquire bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 expired |
| 20:54:42 | 403 | 22 | sell 0.005 SOL → Ab1sTFNv2tV5DX1XpriwNehXgiJhdq2RQ5LtD5BXpump | failed | 43s | 1 | main expired |
| 20:55:25 | 404 | 22 | sell 942 Ab1sTFNv2tV5DX1XpriwNehXgiJhdq2RQ5LtD5BXpump → SOL | failed | 0s | 0 | acquire Ab1sTFNv2tV5DX1XpriwNehXgiJhdq2RQ5LtD5BXpump error: 404 Not Found: NoLiquidity: no route found |
| 20:50:30 | 405 | 23 | sell 0.005 SOL → AqoPZcUumKUBHrnfBsNtoNuneYEjoimaiWYq8GH8gpX9 | failed | 114s | 1 | main expired |
| 20:52:25 | 406 | 23 | sell 3130 AqoPZcUumKUBHrnfBsNtoNuneYEjoimaiWYq8GH8gpX9 → SOL | failed | 0s | 0 | acquire AqoPZcUumKUBHrnfBsNtoNuneYEjoimaiWYq8GH8gpX9 error: 404 Not Found: NoLiquidity: no route found |
| 20:50:46 | 407 | 24 | sell 0.005 SOL → CreiuhfwdWCN5mJbMJtA9bBpYQrQF2tCBuZwSPWfpump | failed | 130s | 1 | main expired |
| 20:52:56 | 408 | 24 | sell 424 CreiuhfwdWCN5mJbMJtA9bBpYQrQF2tCBuZwSPWfpump → SOL | failed | 44s | 1 | acquire CreiuhfwdWCN5mJbMJtA9bBpYQrQF2tCBuZwSPWfpump expired |
| 20:49:38 | 409 | 25 | sell 0.005 SOL → C8fU5GdfAt5mnw2RK7HE6XJGFNxHpaskZMkXxdm88888 | failed | 164s | 1 | main expired |
| 20:52:21 | 410 | 25 | sell 2.34 C8fU5GdfAt5mnw2RK7HE6XJGFNxHpaskZMkXxdm88888 → SOL | failed | 0s | 0 | acquire C8fU5GdfAt5mnw2RK7HE6XJGFNxHpaskZMkXxdm88888 error: 404 Not Found: NoLiquidity: no route found |
| 20:49:52 | 411 | 26 | sell 0.005 SOL → EjD5Y9NVhXmtEqU7wYvAyZvDWZFQeEuHXFatJmTbpump | filled | 34s | 1 |  |
| 20:50:26 | 412 | 26 | sell 35900 EjD5Y9NVhXmtEqU7wYvAyZvDWZFQeEuHXFatJmTbpump → SOL | filled | 135s | 1 |  |
| 20:52:26 | 413 | 27 | sell 0.005 SOL → GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump | failed | 43s | 1 | main expired |
| 20:53:10 | 414 | 27 | sell 375 GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump → SOL | failed | 0s | 0 | acquire GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump error: 404 Not Found: NoLiquidity: no route found |
| 20:50:32 | 415 | 28 | sell 0.005 SOL → GRehQKv9E3fVuNJGQTwAAjYpcixRCYKkzAXAb5kGpump | failed | 169s | 1 | main expired |
| 20:53:21 | 416 | 28 | sell 46400 GRehQKv9E3fVuNJGQTwAAjYpcixRCYKkzAXAb5kGpump → SOL | failed | 1s | 0 | acquire GRehQKv9E3fVuNJGQTwAAjYpcixRCYKkzAXAb5kGpump error: 404 Not Found: NoLiquidity: no route found |
| 20:52:17 | 417 | 29 | sell 0.005 SOL → 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z | failed | 46s | 1 | main expired |
| 20:53:03 | 418 | 29 | sell 3.09 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z → SOL | failed | 47s | 1 | acquire 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z expired |
| 20:54:33 | 419 | 30 | sell 0.005 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | failed | 45s | 1 | main expired |
| 20:55:17 | 420 | 30 | sell 0.00202 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg → SOL | failed | 0s | 0 | acquire Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg error: 404 Not Found: NoLiquidity: no route found |
| 20:53:10 | 421 | 1 | sell 0.005 SOL → 68Nq68CrtLVpyvK5Un7UADiNczaGf39hBbj3diRsYj6D | failed | 46s | 1 | main expired |
| 20:53:56 | 422 | 1 | sell 275 68Nq68CrtLVpyvK5Un7UADiNczaGf39hBbj3diRsYj6D → SOL | failed | 0s | 0 | acquire 68Nq68CrtLVpyvK5Un7UADiNczaGf39hBbj3diRsYj6D error: 404 Not Found: NoLiquidity: no route found |
| 20:53:05 | 423 | 2 | sell 0.005 SOL → BRZ5aeJCDuruA42V1CntqKvofa2G7DS3yyxx1pZEpump | failed | 47s | 1 | main expired |
| 20:53:52 | 424 | 2 | sell 1320 BRZ5aeJCDuruA42V1CntqKvofa2G7DS3yyxx1pZEpump → SOL | failed | 0s | 0 | acquire BRZ5aeJCDuruA42V1CntqKvofa2G7DS3yyxx1pZEpump error: 404 Not Found: NoLiquidity: no route found |
| 20:54:03 | 425 | 3 | sell 0.005 SOL → ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs | failed | 46s | 1 | main expired |
| 20:54:49 | 426 | 3 | sell 1.93 ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs → SOL | failed | 0s | 0 | acquire ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs error: 404 Not Found: NoLiquidity: no route found |
| 20:52:10 | 428 | 4 | sell 3490 H7TuvDxEKygh27zGfGcjKG8JGWgrbyKpPtvJEpGosfas → SOL | failed | 0s | 0 | acquire H7TuvDxEKygh27zGfGcjKG8JGWgrbyKpPtvJEpGosfas error: 404 Not Found: NoLiquidity: no route found |
| 20:53:13 | 429 | 5 | sell 0.005 SOL → HcfnJxLov6tY8i1dq9uYRRZKCvxADPpovcfkyXzdpump | failed | 45s | 1 | main expired |
| 20:53:58 | 430 | 5 | sell 178 HcfnJxLov6tY8i1dq9uYRRZKCvxADPpovcfkyXzdpump → SOL | failed | 0s | 0 | acquire HcfnJxLov6tY8i1dq9uYRRZKCvxADPpovcfkyXzdpump error: 404 Not Found: NoLiquidity: no route found |
| 20:53:01 | 431 | 6 | sell 0.005 SOL → 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 | failed | 46s | 1 | main expired |
| 20:53:47 | 432 | 6 | sell 253 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 → SOL | failed | 43s | 1 | acquire 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 expired |
| 20:55:55 | 433 | 7 | sell 0.005 SOL → nDZknLvfFRp5rgUHdzTrQsmSY5NKzoavqdLjSHVpump | failed | 45s | 1 | main expired |
| 20:56:40 | 434 | 7 | sell 14000 nDZknLvfFRp5rgUHdzTrQsmSY5NKzoavqdLjSHVpump → SOL | failed | 0s | 0 | acquire nDZknLvfFRp5rgUHdzTrQsmSY5NKzoavqdLjSHVpump error: 404 Not Found: NoLiquidity: no route found |
| 20:52:27 | 435 | 8 | sell 0.005 SOL → 3VFnDoACa991DYe987w354sbvmhqjjzC4Z31SoZepump | failed | 47s | 1 | main expired |
| 20:53:14 | 436 | 8 | sell 49200 3VFnDoACa991DYe987w354sbvmhqjjzC4Z31SoZepump → SOL | failed | 0s | 0 | acquire 3VFnDoACa991DYe987w354sbvmhqjjzC4Z31SoZepump error: 404 Not Found: NoLiquidity: no route found |
| 20:53:05 | 437 | 9 | sell 0.005 SOL → 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw | failed | 46s | 1 | main expired |
| 20:53:51 | 438 | 9 | sell 0.46 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw → SOL | failed | 47s | 1 | acquire 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw expired |
| 20:55:08 | 439 | 10 | sell 0.005 SOL → 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump | failed | 45s | 1 | main expired |
| 20:55:53 | 440 | 10 | sell 316 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump → SOL | failed | 0s | 0 | acquire 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump error: 404 Not Found: NoLiquidity: no route found |
| 20:51:04 | 441 | 11 | sell 0.005 SOL → 9PR7nCP9DpcUotnDPVLUBUZKu5WAYkwrCUx9wDnSpump | filled | 12s | 1 |  |
| 20:51:16 | 442 | 11 | sell 7.94 9PR7nCP9DpcUotnDPVLUBUZKu5WAYkwrCUx9wDnSpump → SOL | filled | 35s | 1 |  |
| 20:52:21 | 443 | 12 | sell 0.005 SOL → H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump | failed | 46s | 1 | main expired |
| 20:53:06 | 444 | 12 | sell 237 H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump → SOL | failed | 0s | 0 | acquire H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump error: 404 Not Found: NoLiquidity: no route found |
| 20:54:40 | 445 | 13 | sell 0.005 SOL → Am8iBffqgaedfdK5XhtorbcRrKzwH9nyL3ySikQfpump | failed | 42s | 1 | main expired |
| 20:55:22 | 446 | 13 | sell 1330 Am8iBffqgaedfdK5XhtorbcRrKzwH9nyL3ySikQfpump → SOL | failed | 0s | 0 | acquire Am8iBffqgaedfdK5XhtorbcRrKzwH9nyL3ySikQfpump error: 404 Not Found: NoLiquidity: no route found |
| 20:53:05 | 447 | 14 | sell 0.005 SOL → 94Sm8joZMSRzpQmcNVn5zZpgnRLN2DBesJYDXwuNpump | failed | 47s | 1 | main expired |
| 20:53:52 | 448 | 14 | sell 42200 94Sm8joZMSRzpQmcNVn5zZpgnRLN2DBesJYDXwuNpump → SOL | failed | 0s | 0 | acquire 94Sm8joZMSRzpQmcNVn5zZpgnRLN2DBesJYDXwuNpump error: 404 Not Found: NoLiquidity: no route found |
| 20:52:33 | 449 | 15 | sell 0.005 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | failed | 43s | 1 | main expired |
| 20:53:16 | 450 | 15 | sell 0.00481 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH → SOL | failed | 0s | 0 | acquire Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH error: 404 Not Found: NoLiquidity: no route found |
| 20:53:15 | 451 | 16 | sell 0.005 SOL → FLk6FKAN26m1FT4ucguwy3uHBMzLKcEu8KMTYD2Zpump | failed | 45s | 1 | main expired |
| 20:54:00 | 452 | 16 | sell 112000 FLk6FKAN26m1FT4ucguwy3uHBMzLKcEu8KMTYD2Zpump → SOL | failed | 0s | 0 | acquire FLk6FKAN26m1FT4ucguwy3uHBMzLKcEu8KMTYD2Zpump error: 404 Not Found: NoLiquidity: no route found |
| 20:50:47 | 453 | 17 | sell 0.005 SOL → NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg | filled | 28s | 1 |  |
| 20:51:15 | 454 | 17 | sell 0.0153 NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg → SOL | filled | 37s | 1 |  |
| 20:52:57 | 455 | 18 | sell 0.005 SOL → SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH | failed | 43s | 1 | main expired |
| 20:53:40 | 456 | 18 | sell 0.00783 SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH → SOL | failed | 45s | 1 | acquire SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH expired |
| 20:57:27 | 457 | 19 | sell 0.005 SOL → 4oWhtcmBBsMG1bLZCLKusmq4t9fxdVVfbyJLevsYg5Ct | failed | 42s | 1 | main expired |
| 20:58:09 | 458 | 19 | sell 39200 4oWhtcmBBsMG1bLZCLKusmq4t9fxdVVfbyJLevsYg5Ct → SOL | failed | 0s | 0 | acquire 4oWhtcmBBsMG1bLZCLKusmq4t9fxdVVfbyJLevsYg5Ct error: 404 Not Found: NoLiquidity: no route found |
| 20:55:55 | 459 | 20 | sell 0.005 SOL → HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx | failed | 45s | 1 | main expired |
| 20:56:40 | 460 | 20 | sell 0.0177 HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx → SOL | failed | 0s | 0 | acquire HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx error: 404 Not Found: NoLiquidity: no route found |
| 20:55:28 | 461 | 21 | sell 0.005 SOL → 2yu92oYzBWLAdVpu8BoaLzmM1oxPsHoboay2BXmeDDZr | failed | 42s | 1 | main expired |
| 20:56:10 | 462 | 21 | sell 26700 2yu92oYzBWLAdVpu8BoaLzmM1oxPsHoboay2BXmeDDZr → SOL | failed | 0s | 0 | acquire 2yu92oYzBWLAdVpu8BoaLzmM1oxPsHoboay2BXmeDDZr error: 404 Not Found: NoLiquidity: no route found |
| 20:55:25 | 463 | 22 | sell 0.005 SOL → purpFPo5voy6fEu8jxSCwVdMs1zyYEYAH6FBQvTYCZK | failed | 42s | 1 | main expired |
| 20:56:07 | 464 | 22 | sell 1810 purpFPo5voy6fEu8jxSCwVdMs1zyYEYAH6FBQvTYCZK → SOL | failed | 0s | 0 | acquire purpFPo5voy6fEu8jxSCwVdMs1zyYEYAH6FBQvTYCZK error: 404 Not Found: NoLiquidity: no route found |
| 20:52:25 | 465 | 23 | sell 0.005 SOL → CZJfrAmMs5Cz4H22PWzfqTJu5FkP7Q2Vvx1oPVL9pump | failed | 46s | 1 | main expired |
| 20:53:11 | 466 | 23 | sell 68100 CZJfrAmMs5Cz4H22PWzfqTJu5FkP7Q2Vvx1oPVL9pump → SOL | failed | 0s | 0 | acquire CZJfrAmMs5Cz4H22PWzfqTJu5FkP7Q2Vvx1oPVL9pump error: 404 Not Found: NoLiquidity: no route found |
| 20:53:40 | 467 | 24 | sell 0.005 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | failed | 45s | 1 | main expired |
| 20:54:25 | 468 | 24 | sell 0.0027 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | failed | 0s | 0 | acquire XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 error: 404 Not Found: NoLiquidity: no route found |
| 20:52:22 | 469 | 25 | sell 0.005 SOL → 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump | failed | 46s | 1 | main expired |
| 20:53:08 | 470 | 25 | sell 70 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump → SOL | failed | 0s | 0 | acquire 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump error: 404 Not Found: NoLiquidity: no route found |
| 20:52:41 | 471 | 26 | sell 0.005 SOL → BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin | failed | 45s | 1 | main expired |
| 20:53:26 | 472 | 26 | sell 13.8 BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin → SOL | failed | 44s | 1 | acquire BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin expired |
| 20:53:10 | 473 | 27 | sell 0.005 SOL → G9j8WWDeJXZdvwQgP82ooDuHmpc3Gy8NCSins71Lpump | failed | 42s | 1 | main expired |
| 20:53:52 | 474 | 27 | sell 39400 G9j8WWDeJXZdvwQgP82ooDuHmpc3Gy8NCSins71Lpump → SOL | failed | 0s | 0 | acquire G9j8WWDeJXZdvwQgP82ooDuHmpc3Gy8NCSins71Lpump error: 404 Not Found: NoLiquidity: no route found |
| 20:53:21 | 475 | 28 | sell 0.005 SOL → DdPrHYqM8Ueovnk9kAnAgoGhswkuaTqmxcoZzU3Zpump | failed | 44s | 1 | main expired |
| 20:54:05 | 476 | 28 | sell 15800 DdPrHYqM8Ueovnk9kAnAgoGhswkuaTqmxcoZzU3Zpump → SOL | failed | 0s | 0 | acquire DdPrHYqM8Ueovnk9kAnAgoGhswkuaTqmxcoZzU3Zpump error: 404 Not Found: NoLiquidity: no route found |
| 20:53:50 | 477 | 29 | sell 0.005 SOL → 4cvZwC17oMiUA7peKX5GhbaUWv4U5Lwrd8118xnFpump | failed | 46s | 1 | main expired |
| 20:54:36 | 478 | 29 | sell 105000 4cvZwC17oMiUA7peKX5GhbaUWv4U5Lwrd8118xnFpump → SOL | failed | 0s | 0 | acquire 4cvZwC17oMiUA7peKX5GhbaUWv4U5Lwrd8118xnFpump error: 404 Not Found: NoLiquidity: no route found |
| 20:55:18 | 479 | 30 | sell 0.005 SOL → 4ChT49V1iazP2XUGtycGkEsS6pRMqvGfUbqvRC9Z91ZT | failed | 44s | 1 | main expired |
| 20:56:02 | 480 | 30 | sell 2920 4ChT49V1iazP2XUGtycGkEsS6pRMqvGfUbqvRC9Z91ZT → SOL | failed | 0s | 0 | acquire 4ChT49V1iazP2XUGtycGkEsS6pRMqvGfUbqvRC9Z91ZT error: 404 Not Found: NoLiquidity: no route found |
| 20:53:56 | 481 | 1 | sell 0.005 SOL → nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 | failed | 46s | 1 | main expired |
| 20:54:42 | 482 | 1 | sell 0.962 nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 → SOL | failed | 44s | 1 | acquire nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 expired |
| 20:53:52 | 483 | 2 | sell 0.005 SOL → DvNcJZTiSMD1RBCtZ2J31mh7s42CVCwrzGapv1Lypump | failed | 46s | 1 | main expired |
| 20:54:38 | 484 | 2 | sell 7050 DvNcJZTiSMD1RBCtZ2J31mh7s42CVCwrzGapv1Lypump → SOL | failed | 0s | 0 | acquire DvNcJZTiSMD1RBCtZ2J31mh7s42CVCwrzGapv1Lypump error: 404 Not Found: NoLiquidity: no route found |
| 20:54:49 | 485 | 3 | sell 0.005 SOL → 8SkfuQkYNTskoQUbbjr2JbZQeqQV9egnJXgfMXf5bonk | failed | 42s | 1 | main expired |
| 20:55:31 | 486 | 3 | sell 21600 8SkfuQkYNTskoQUbbjr2JbZQeqQV9egnJXgfMXf5bonk → SOL | failed | 0s | 0 | acquire 8SkfuQkYNTskoQUbbjr2JbZQeqQV9egnJXgfMXf5bonk error: 404 Not Found: NoLiquidity: no route found |
| 20:52:13 | 487 | 4 | sell 0.005 SOL → AA3VLt3muGJiXedDaMnkcst3pfjrg1JBxgHVSdSbpump | failed | 48s | 1 | main expired |
| 20:53:02 | 488 | 4 | sell 60500 AA3VLt3muGJiXedDaMnkcst3pfjrg1JBxgHVSdSbpump → SOL | failed | 0s | 0 | acquire AA3VLt3muGJiXedDaMnkcst3pfjrg1JBxgHVSdSbpump error: 404 Not Found: NoLiquidity: no route found |
| 20:53:58 | 489 | 5 | sell 0.005 SOL → B4iCqVsAZv9dBiBVv58GJiBxWGmwkwbtPTn4sUQTpump | failed | 43s | 1 | main expired |
| 20:54:41 | 490 | 5 | sell 34400 B4iCqVsAZv9dBiBVv58GJiBxWGmwkwbtPTn4sUQTpump → SOL | failed | 0s | 0 | acquire B4iCqVsAZv9dBiBVv58GJiBxWGmwkwbtPTn4sUQTpump error: 404 Not Found: NoLiquidity: no route found |
| 20:54:30 | 491 | 6 | sell 0.005 SOL → 3f9LEP4RNM1yq5VnCD1LYMvq7FZis5tfGqyZMsiRpump | failed | 45s | 1 | main expired |
| 20:55:15 | 492 | 6 | sell 39700 3f9LEP4RNM1yq5VnCD1LYMvq7FZis5tfGqyZMsiRpump → SOL | failed | 0s | 0 | acquire 3f9LEP4RNM1yq5VnCD1LYMvq7FZis5tfGqyZMsiRpump error: 404 Not Found: NoLiquidity: no route found |
| 20:56:40 | 493 | 7 | sell 0.005 SOL → 2NffKvfZTcFj2tyoY1Ev84PkqxA7DZnstyv6EwELpump | failed | 45s | 1 | main expired |
| 20:57:25 | 494 | 7 | sell 33500 2NffKvfZTcFj2tyoY1Ev84PkqxA7DZnstyv6EwELpump → SOL | failed | 0s | 0 | acquire 2NffKvfZTcFj2tyoY1Ev84PkqxA7DZnstyv6EwELpump error: 404 Not Found: NoLiquidity: no route found |
| 20:53:14 | 495 | 8 | sell 0.005 SOL → EUB1eZBt4m3X4FbperWnKGJdvLsuLMu2YmJix5yjpump | failed | 42s | 1 | main expired |
| 20:53:56 | 496 | 8 | sell 41500 EUB1eZBt4m3X4FbperWnKGJdvLsuLMu2YmJix5yjpump → SOL | failed | 0s | 0 | acquire EUB1eZBt4m3X4FbperWnKGJdvLsuLMu2YmJix5yjpump error: 404 Not Found: NoLiquidity: no route found |
| 20:54:39 | 497 | 9 | sell 0.005 SOL → 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ | failed | 45s | 1 | main expired |
| 20:55:24 | 498 | 9 | sell 6.26e-06 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ → SOL | failed | 44s | 1 | acquire 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ expired |
| 20:55:54 | 499 | 10 | sell 0.005 SOL → 7C94RweVKZtBhA291WpXW7pkYEnbqhGvCFTU8nPoBTFY | failed | 42s | 1 | main expired |
| 20:56:36 | 500 | 10 | sell 1080 7C94RweVKZtBhA291WpXW7pkYEnbqhGvCFTU8nPoBTFY → SOL | failed | 0s | 0 | acquire 7C94RweVKZtBhA291WpXW7pkYEnbqhGvCFTU8nPoBTFY error: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

114 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | acquire | 79 | SOL → ANSEM, SOL → baton, SOL → SNDK, SOL → Cupsey, SOL → QQQx, SOL → CTO, SOL → MSFTx, SOL → SI, SOL → GOOGLx, SOL → HIGGS, SOL → GMEx, SOL → HOODx, SOL → Plumber, SOL → swordcat, SOL → LAYOOO, SOL → MADE, SOL → USWR, SOL → Stamp, SOL → catalyst, SOL → BOP, SOL → Momota, SOL → READY, SOL → Zoe, SOL → MISTAKE, SOL → TWINE, SOL → NPC, SOL → OnlyMarms, SOL → Remus, SOL → DRAM, SOL → DPG, SOL → BATON, SOL → knightcat, SOL → HUHCAT, SOL → looong, SOL → Token, SOL → FLEX, SOL → PANTS, SOL → swarms, SOL → familiars, SOL → FRANK, SOL → 67coin, SOL → DOPAMEME, SOL → STONK10, SOL → CTM, SOL → CHILLHOUSE, SOL → BOIÚNA, SOL → AMZNx, SOL → NEST, SOL → moonkey, SOL → ARX, SOL → CLAUDIA, SOL → Chonketha, SOL → COLLECT, SOL → Fauci, SOL → WOJAK, SOL → LMAO!, SOL → Kimchi, SOL → omo, SOL → STRCx, SOL → Stunk, SOL → CRIMECAT, SOL → HIMS, SOL → FROINK, SOL → PURPS, SOL → AGENTCAT, SOL → PLTRx, SOL → CODEC, SOL → BULLCAT, SOL → manlet, SOL → CATALORIAN, SOL → MOS, SOL → MICRO, SOL → fih, SOL → TINYTANK, SOL → Polycat, SOL → YOTS, SOL → Sue, SOL → K-HOME, SOL → BOTIFY | no route found |
| RPC rate limited (429) | main | 18 | JLP → SOL, EURC → SOL, SOL → arc, USDS → SOL, SOL → MSFTx, SOL → SI, SOL → HIGGS, HeeHaw → SOL, SOL → wXRP, HNT → SOL, SOL → Plumber, aura → SOL, SOL → MADE, SOL → INF, YAP → SOL, SOL → MISTAKE, PUMPCADE → SOL, SOL → looong | sim's RPC refused: get recent blockhash |
| RPC rate limited (429) | rpc | 10 | SOL → ANSEM, SOL → USELESS, USDe → SOL, MSTRx → SOL, SOL → QQQx, SOL → CTO, SOL → GEOD, SOL → GOOGLx, TOESCOIN → SOL, nosis → SOL | sim's RPC refused: get balance |
| InsufficientValidTo | main | 3 | SOL → baton, SOL → Cupsey, SOL → FLEX | validTo lies closer than the minimum validity |
| RPC rate limited (429) | acquire | 2 | SOL → MET, SOL → INF | sim's RPC refused: get recent blockhash |
| BlockhashExpired | main | 1 | SOL → GMEx | the transaction's blockhash is no longer valid, sign a fresh one |
| NoLiquidity | main | 1 | SOL → swarms | no route found |

Scenario orders: 378 (347 main, 31 acquire). Cleanup placed 19 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 20:58:13 | 2 | MET → SOL (native) | Executed | `0x6e877e84…` [🐞](https://debug.barn.cow.fi/order/0x6e877e847ee27ea4b084617bac1c4fe971f051c7190991be2b50b5b5dec4326c) |
| 20:58:14 | 3 | MSTRx → SOL (native) | Executed | `0xcabe7326…` [🐞](https://debug.barn.cow.fi/order/0xcabe732628cd370062d40c0d3375ecb6139ae919a0da1896fdaa82d0485bb49f) |
| 20:58:59 | 9 | JLP → SOL (native) | Executed | `0x24c5cf63…` [🐞](https://debug.barn.cow.fi/order/0x24c5cf63931970374bc856eef9ba6e0ab9e77cebdc9102c7d7d18a7cf5adee2f) |
| 21:00:55 | 17 | YAP → SOL (native) | Executed | `0x8a03ba15…` [🐞](https://debug.barn.cow.fi/order/0x8a03ba151ec22b894e0dd43d8284aa508d40f444b1907a9caff01a4627f1309c) |
| 21:01:01 | 18 | aura → SOL (native) | Executed | `0x74b496a3…` [🐞](https://debug.barn.cow.fi/order/0x74b496a302f30ab0f6a694caa1a5f02d11fbd6e4ef945a9bfb3180ea49f367e4) |
| 21:01:01 | 19 | WBTC → SOL (native) | Executed | `0x78fedaff…` [🐞](https://debug.barn.cow.fi/order/0x78fedaffbe433f628f89aa2f876bcb34f5a7c17dc10a2d458d757562c77825ec) |
| 21:01:01 | 19 | USDS → SOL (native) | Expired without a fill | `0x3355b58f…` [🐞](https://debug.barn.cow.fi/order/0x3355b58fbf4a7904b7712c9836735da7516424b9cf4543e08a2a806da7295674) |
| 21:01:37 | 21 | HeeHaw → SOL (native) | Expired without a fill | `0x745474b3…` [🐞](https://debug.barn.cow.fi/order/0x745474b3a915319b80628b19a069719ab48903460397549c1b48730d9addbf1e) |
| 21:01:38 | 21 | duk → SOL (native) | Expired without a fill | `0x01418ca5…` [🐞](https://debug.barn.cow.fi/order/0x01418ca59d1b38f4c0dd98ddeb4fc69a073af62ad9f874d3d67cfd416e3fe98e) |
| 21:02:05 | 22 | TROLL → SOL (native) | Expired without a fill | `0x5ad7c44d…` [🐞](https://debug.barn.cow.fi/order/0x5ad7c44d07f34c71858ca8ef7f8ae39816aadeb71e139cffdb4dc1bb11e39de1) |
| 21:02:05 | 22 | EYE → SOL (native) | Expired without a fill | `0x6737229a…` [🐞](https://debug.barn.cow.fi/order/0x6737229a2c9d6b89ae9293bae6350999253e1c881e63a8e357cd4b853630af3c) |
| 21:02:05 | 22 | PAID → SOL (native) | Expired without a fill | `0x2fda5815…` [🐞](https://debug.barn.cow.fi/order/0x2fda58150b7a8dad11fb1050c254948f69c893dd03863296946d3c4c6a786050) |
| 21:02:22 | 23 | GME → SOL (native) | Expired without a fill | `0xdd0616b1…` [🐞](https://debug.barn.cow.fi/order/0xdd0616b1f0223da525b4074441be63bfc3f0ca0c075a55f757930ae5473a52e5) |
| 21:02:35 | 24 | TSLAx → SOL (native) | Expired without a fill | `0xfd219265…` [🐞](https://debug.barn.cow.fi/order/0xfd2192655cb779ca3ebf0f73651c6b7252c30e40f121ccf81b343a8c67a58314) |
| 21:03:06 | 25 | PUMPCADE → SOL (native) | Expired without a fill | `0x1e4bfeff…` [🐞](https://debug.barn.cow.fi/order/0x1e4bfeff9b42a94a77f60ac460a8615601e873f54de921673df6769e1c3365a6) |
| 21:03:13 | 26 | SPYx → SOL (native) | Expired without a fill | `0xdb5251fc…` [🐞](https://debug.barn.cow.fi/order/0xdb5251fc1777ca0bc8f078cb00ca2ae438380237844ff96b7ed6455d5f2a1ddd) |
| 21:03:58 | 28 | PENGU → SOL (native) | Expired without a fill | `0x0bfb9579…` [🐞](https://debug.barn.cow.fi/order/0x0bfb9579370c54140ee141e1166d5dc302334e078f5936aa30c3f2a75865608b) |
| 21:04:46 | 29 | Fartcoin → SOL (native) | Expired without a fill | `0xba4d55a4…` [🐞](https://debug.barn.cow.fi/order/0xba4d55a416f2797358633bdf4bf52bb104fe1e51d86ba0f03a967f0b84993235) |
| 21:04:49 | 30 | HNT → SOL (native) | Expired without a fill | `0xa74cd223…` [🐞](https://debug.barn.cow.fi/order/0xa74cd2233eb6f6d0accc8d3b1349c94b61ebd0d5f5c41cd2bec15a4fb6c3de59) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 268 | 70.9% |
| expired: never created on-chain (winner found, creation blockhash expired) | 110 | 29.1% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 7s | 14s | 64s |

## Jupiter rate limiting

87 of 1791 Jupiter quote attempts (4.9%) were rejected with `rate limited`. 0 orders never executed: Jupiter's quotes for them were rate limited, it never found a solution, and no other solver bid.

Orders using the most Jupiter quote attempts:

| Order | In this report | Attempts | Rate limited | Solved |
|---|---|---|---|---|
| `0x481531f8…` [🐞](https://debug.barn.cow.fi/order/0x481531f817704f0df3ccefbab31739f6c74ebd86bad48b608cde5a00f3608b79) | yes | 9 | 1 | 8 |
| `0xc6d66703…` [🐞](https://debug.barn.cow.fi/order/0xc6d667032b01799116d63e7f00a30a995d1f09ab84db895de23d0dbf8631028d) | yes | 9 | 2 | 7 |
| `0x950b9975…` [🐞](https://debug.barn.cow.fi/order/0x950b99751742b34b44a6a381cdd850339b04bc0637b02753f8ad288e001097eb) | yes | 9 | 2 | 7 |
| `0xe29f8835…` [🐞](https://debug.barn.cow.fi/order/0xe29f8835a72650279456c4547e1fbbdc0637704ebb5ed9e6c193fe12cc0648ed) | yes | 9 | 4 | 5 |
| `0x0447f699…` [🐞](https://debug.barn.cow.fi/order/0x0447f6995afbe3e6ee9ef0a9f9d7517370620d7cdcd415b0d2dd9b8bacaa615d) | yes | 9 | 2 | 7 |
| `0x95846315…` [🐞](https://debug.barn.cow.fi/order/0x95846315e96e3a21cf682d31281f321a45e29fd047723d4135a224e443d799e5) | yes | 8 | 5 | 3 |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 268 | 100.0% | 268 | 113,133 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 353 | 353 | 276 | 78.2% | 68 | 24 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: PriorityFeeTooHigh | 47 |
| jupiter-solve: SimulationFailed | 21 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 317 times
- Orders filtered for `unreceivable_buy_token_account`: 317 times
- Orders filtered for `in_flight`: 69 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 347 | 263 | 75.8% |
| buy | 31 | 5 | 16.1% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → WBTC | 3 | 1 | 33.3% |
| wSOL → ZBCN | 2 | 0 | 0.0% |
| wSOL → PERPSPAD | 2 | 0 | 0.0% |
| wSOL → GO | 2 | 0 | 0.0% |
| wSOL → ACT | 2 | 0 | 0.0% |
| wSOL → 2Z | 2 | 0 | 0.0% |
| wSOL → MEW | 2 | 0 | 0.0% |
| wSOL → PYTHIA | 2 | 0 | 0.0% |
| wSOL → META | 2 | 0 | 0.0% |
| wSOL → XAUt0 | 2 | 0 | 0.0% |
| wSOL → PEAQ | 2 | 0 | 0.0% |
| wSOL → BORG | 2 | 0 | 0.0% |
| wSOL → SLX | 2 | 0 | 0.0% |
| wSOL → BC | 2 | 0 | 0.0% |
| wSOL → jellyjelly | 2 | 0 | 0.0% |
| wSOL → RUSH | 2 | 0 | 0.0% |
| wSOL → xBTC | 2 | 0 | 0.0% |
| wSOL → GIGA | 2 | 0 | 0.0% |
| wSOL → PST | 2 | 0 | 0.0% |
| wSOL → VINE | 2 | 0 | 0.0% |
| wSOL → xHYPE | 2 | 0 | 0.0% |
| wSOL → NOS | 2 | 0 | 0.0% |
| wSOL → bSOL | 2 | 0 | 0.0% |
| wSOL → CRED | 2 | 0 | 0.0% |
| wSOL → Pnut | 2 | 0 | 0.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → Jimothy | 1 | 1 | 100.0% |
| wSOL → USDC | 1 | 1 | 100.0% |
| wSOL → CASH | 1 | 1 | 100.0% |
| wSOL → STONK | 1 | 1 | 100.0% |
| wSOL → SKHY | 1 | 1 | 100.0% |
| wSOL → SPYx | 1 | 1 | 100.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → USDT | 1 | 1 | 100.0% |
| wSOL → RAY | 1 | 1 | 100.0% |
| USDG → SOL (native) | 1 | 1 | 100.0% |
| cbBTC → SOL (native) | 1 | 1 | 100.0% |
| PYUSD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| CASH → SOL (native) | 1 | 1 | 100.0% |
| SPYx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ZEC | 1 | 1 | 100.0% |
| wSOL → PENGU | 1 | 1 | 100.0% |
| wSOL → HYPE | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| ETH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ANTFUN | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| Jimothy → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USD1 | 1 | 1 | 100.0% |
| SKHY → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JupUSD | 1 | 1 | 100.0% |
| USDT → SOL (native) | 1 | 1 | 100.0% |
| ZEC → SOL (native) | 1 | 1 | 100.0% |
| RAY → SOL (native) | 1 | 1 | 100.0% |
| ANTFUN → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TRUMP | 1 | 1 | 100.0% |
| HYPE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → fone | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| JupUSD → SOL (native) | 1 | 1 | 100.0% |
| USD1 → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MET | 1 | 1 | 100.0% |
| wSOL → Agency | 1 | 1 | 100.0% |
| wSOL → MU | 1 | 1 | 100.0% |
| TRUMP → SOL (native) | 1 | 1 | 100.0% |
| PENGU → SOL (native) | 1 | 1 | 100.0% |
| Fartcoin → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CYBERLEEK | 1 | 1 | 100.0% |
| fone → SOL (native) | 1 | 1 | 100.0% |
| PUMP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| wSOL → TOAD | 1 | 1 | 100.0% |
| wSOL → SPCX | 1 | 1 | 100.0% |
| NVDAx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → CARDS | 1 | 1 | 100.0% |
| wSOL → JUP | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| TOAD → SOL (native) | 1 | 1 | 100.0% |
| SPCX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PRIME | 1 | 1 | 100.0% |
| wSOL → ONyc | 1 | 1 | 100.0% |
| wSOL → MANIFEST | 1 | 1 | 100.0% |
| MU → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USELESS | 1 | 1 | 100.0% |
| Agency → SOL (native) | 1 | 1 | 100.0% |
| wSOL → OTC | 1 | 1 | 100.0% |
| CYBERLEEK → SOL (native) | 1 | 1 | 100.0% |
| wSOL → e/acc | 1 | 1 | 100.0% |
| USELESS → SOL (native) | 1 | 1 | 100.0% |
| STONK → SOL (native) | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → neet | 1 | 1 | 100.0% |
| JitoSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → METAx | 1 | 1 | 100.0% |
| CRCLx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → EMBER | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| CARDS → SOL (native) | 1 | 1 | 100.0% |
| MANIFEST → SOL (native) | 1 | 1 | 100.0% |
| OTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ORCA | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| e/acc → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TSLAx | 1 | 1 | 100.0% |
| EMBER → SOL (native) | 1 | 1 | 100.0% |
| ONyc → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Pistacio | 1 | 1 | 100.0% |
| PRIME → SOL (native) | 1 | 1 | 100.0% |
| PAID → SOL (native) | 1 | 1 | 100.0% |
| METAx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SKR | 1 | 1 | 100.0% |
| neet → SOL (native) | 1 | 1 | 100.0% |
| ORCA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GRASS | 1 | 1 | 100.0% |
| wSOL → AVA | 1 | 1 | 100.0% |
| $WIF → SOL (native) | 1 | 1 | 100.0% |
| wSOL → KMNO | 1 | 1 | 100.0% |
| wSOL → XST | 1 | 1 | 100.0% |
| AVA → SOL (native) | 1 | 1 | 100.0% |
| GRASS → SOL (native) | 1 | 1 | 100.0% |
| TSLAx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JEANPHIL | 1 | 1 | 100.0% |
| wSOL → HOOKED | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| SPCXx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → DJT | 1 | 1 | 100.0% |
| wSOL → EPIK | 1 | 1 | 100.0% |
| USX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SPX | 1 | 1 | 100.0% |
| SKR → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Jotchua | 1 | 1 | 100.0% |
| wSOL → TripleT | 1 | 1 | 100.0% |
| KMNO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BOT | 1 | 1 | 100.0% |
| JEANPHIL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → KET | 1 | 1 | 100.0% |
| XST → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JTO | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| DJT → SOL (native) | 1 | 1 | 100.0% |
| HOOKED → SOL (native) | 1 | 1 | 100.0% |
| wSOL → FO | 1 | 1 | 100.0% |
| KET → SOL (native) | 1 | 1 | 100.0% |
| BOT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ZEREBRO | 1 | 1 | 100.0% |
| wSOL → TROLL | 1 | 1 | 100.0% |
| JTO → SOL (native) | 1 | 1 | 100.0% |
| Jotchua → SOL (native) | 1 | 1 | 100.0% |
| wSOL → COINx | 1 | 1 | 100.0% |
| wSOL → BULLSHIT | 1 | 1 | 100.0% |
| wSOL → febu | 1 | 1 | 100.0% |
| WBTC → SOL (native) | 1 | 1 | 100.0% |
| EPIK → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ELON | 1 | 1 | 100.0% |
| wSOL → BP | 1 | 1 | 100.0% |
| wSOL → PYTH | 1 | 1 | 100.0% |
| TROLL → SOL (native) | 1 | 1 | 100.0% |
| febu → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TOESCOIN | 1 | 1 | 100.0% |
| JupSOL → SOL (native) | 1 | 1 | 100.0% |
| ZEREBRO → SOL (native) | 1 | 1 | 100.0% |
| BULLSHIT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NEEGY | 1 | 1 | 100.0% |
| SPX → SOL (native) | 1 | 1 | 100.0% |
| Pistacio → SOL (native) | 1 | 1 | 100.0% |
| PYTH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → DOGE-1 | 1 | 1 | 100.0% |
| ELON → SOL (native) | 1 | 1 | 100.0% |
| BP → SOL (native) | 1 | 1 | 100.0% |
| COINx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → xSOL | 1 | 1 | 100.0% |
| wSOL → SOLCAT | 1 | 1 | 100.0% |
| wSOL → RENDER | 1 | 1 | 100.0% |
| wSOL → pippin | 1 | 1 | 100.0% |
| wSOL → cc | 1 | 1 | 100.0% |
| wSOL → Tilcayo | 1 | 1 | 100.0% |
| FO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → ORE | 1 | 1 | 100.0% |
| SOLCAT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → aura | 1 | 1 | 100.0% |
| wSOL → PINK | 1 | 1 | 100.0% |
| wSOL → MSTRx | 1 | 1 | 100.0% |
| wSOL → HBULL | 1 | 1 | 100.0% |
| wSOL → EYE | 1 | 1 | 100.0% |
| xSOL → SOL (native) | 1 | 1 | 100.0% |
| TripleT → SOL (native) | 1 | 1 | 100.0% |
| RENDER → SOL (native) | 1 | 1 | 100.0% |
| Tilcayo → SOL (native) | 1 | 1 | 100.0% |
| DOGE-1 → SOL (native) | 1 | 1 | 100.0% |
| wSOL → hyUSD | 1 | 1 | 100.0% |
| pippin → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Buttcoin | 1 | 1 | 100.0% |
| cc → SOL (native) | 1 | 1 | 100.0% |
| NEEGY → SOL (native) | 1 | 1 | 100.0% |
| PINK → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CX | 1 | 1 | 100.0% |
| POPCAT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| Buttcoin → SOL (native) | 1 | 1 | 100.0% |
| EYE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Z500 | 1 | 1 | 100.0% |
| wSOL → BIRB | 1 | 1 | 100.0% |
| Z500 → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Qenis | 1 | 1 | 100.0% |
| wSOL → arc | 1 | 1 | 100.0% |
| BIRB → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CHILLGUY | 1 | 1 | 100.0% |
| CX → SOL (native) | 1 | 1 | 100.0% |
| GLDx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → swordcat | 1 | 0 | 0.0% |
| wSOL → GEOD | 1 | 1 | 100.0% |
| wSOL → ALCH | 1 | 1 | 100.0% |
| wSOL → YAP | 1 | 1 | 100.0% |
| wSOL → PUMPCADE | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → KINS | 1 | 1 | 100.0% |
| arc → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ALON | 1 | 1 | 100.0% |
| CHILLGUY → SOL (native) | 1 | 1 | 100.0% |
| Qenis → SOL (native) | 1 | 1 | 100.0% |
| hyUSD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → eUSX | 1 | 1 | 100.0% |
| GEOD → SOL (native) | 1 | 1 | 100.0% |
| ALCH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MOODENG | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |
| HBULL → SOL (native) | 1 | 1 | 100.0% |
| mSOL → SOL (native) | 1 | 1 | 100.0% |
| ALON → SOL (native) | 1 | 1 | 100.0% |
| KINS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GRIFFAIN | 1 | 1 | 100.0% |
| eUSX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → WINGIT | 1 | 1 | 100.0% |
| wSOL → NASDUCK | 1 | 1 | 100.0% |
| ORE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Martians | 1 | 1 | 100.0% |
| wSOL → BREAKING | 1 | 1 | 100.0% |
| wSOL → HeeHaw | 1 | 1 | 100.0% |
| WINGIT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RIV | 1 | 1 | 100.0% |
| NASDUCK → SOL (native) | 1 | 1 | 100.0% |
| GRIFFAIN → SOL (native) | 1 | 1 | 100.0% |
| Martians → SOL (native) | 1 | 1 | 100.0% |
| RIV → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CALI | 1 | 1 | 100.0% |
| CALI → SOL (native) | 1 | 1 | 100.0% |
| BREAKING → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SANC | 1 | 1 | 100.0% |
| wSOL → AAPLx | 1 | 1 | 100.0% |
| wSOL → TIGRINO | 1 | 1 | 100.0% |
| wSOL → nosis | 1 | 1 | 100.0% |
| wSOL → HNT | 1 | 1 | 100.0% |
| MOODENG → SOL (native) | 1 | 1 | 100.0% |
| PSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → LBTC | 1 | 1 | 100.0% |
| wSOL → SOLdiers | 1 | 1 | 100.0% |
| wSOL → USDS | 1 | 1 | 100.0% |
| wSOL → CAGE | 1 | 1 | 100.0% |
| TIGRINO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MCDx | 1 | 1 | 100.0% |
| SANC → SOL (native) | 1 | 1 | 100.0% |
| AAPLx → SOL (native) | 1 | 1 | 100.0% |
| SOLdiers → SOL (native) | 1 | 1 | 100.0% |
| LBTC → SOL (native) | 1 | 1 | 100.0% |
| MCDx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MPLX | 1 | 1 | 100.0% |
| wSOL → TBB | 1 | 1 | 100.0% |
| CAGE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → lickingcat | 1 | 1 | 100.0% |
| wSOL → TRX | 1 | 1 | 100.0% |
| TRX → SOL (native) | 1 | 1 | 100.0% |
| TBB → SOL (native) | 1 | 1 | 100.0% |
| wSOL → three | 1 | 1 | 100.0% |
| wSOL → PARASITE | 1 | 1 | 100.0% |
| wSOL → NKE | 1 | 1 | 100.0% |
| wSOL → CRAWL | 1 | 1 | 100.0% |
| wSOL → TTWO | 1 | 1 | 100.0% |
| wSOL → Ban | 1 | 1 | 100.0% |
| wSOL → Momota | 1 | 0 | 0.0% |
| three → SOL (native) | 1 | 1 | 100.0% |
| PARASITE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → catalyst | 1 | 0 | 0.0% |
| wSOL → CTM | 1 | 0 | 0.0% |
| CRAWL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → STONK10 | 1 | 0 | 0.0% |
| TTWO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TWINE | 1 | 0 | 0.0% |
| wSOL → BATON | 1 | 0 | 0.0% |
| Ban → SOL (native) | 1 | 1 | 100.0% |
| wSOL → wXRP | 1 | 0 | 0.0% |
| NKE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → familiars | 1 | 0 | 0.0% |
| wSOL → DPG | 1 | 0 | 0.0% |
| wSOL → TINYTANK | 1 | 0 | 0.0% |
| wSOL → Remus | 1 | 0 | 0.0% |
| wSOL → knightcat | 1 | 0 | 0.0% |
| MPLX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → LMAO! | 1 | 0 | 0.0% |
| wSOL → CODEC | 1 | 0 | 0.0% |
| wSOL → OnlyMarms | 1 | 0 | 0.0% |
| wSOL → AGENTCAT | 1 | 0 | 0.0% |
| wSOL → CHILLHOUSE | 1 | 0 | 0.0% |
| wSOL → Fauci | 1 | 0 | 0.0% |
| wSOL → PANTS | 1 | 0 | 0.0% |
| wSOL → LAYOOO | 1 | 0 | 0.0% |
| lickingcat → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USWR | 1 | 0 | 0.0% |
| wSOL → STRCx | 1 | 0 | 0.0% |
| wSOL → BOIÚNA | 1 | 0 | 0.0% |
| wSOL → moonkey | 1 | 0 | 0.0% |
| wSOL → omo | 1 | 0 | 0.0% |
| wSOL → BULLCAT | 1 | 0 | 0.0% |
| wSOL → NEST | 1 | 0 | 0.0% |
| wSOL → BOP | 1 | 0 | 0.0% |
| wSOL → Chonketha | 1 | 0 | 0.0% |
| wSOL → K-HOME | 1 | 0 | 0.0% |
| wSOL → Stunk | 1 | 0 | 0.0% |
| wSOL → READY | 1 | 0 | 0.0% |
| wSOL → DRAM | 1 | 0 | 0.0% |
| wSOL → manlet | 1 | 0 | 0.0% |
| wSOL → PLTRx | 1 | 0 | 0.0% |
| wSOL → NPC | 1 | 0 | 0.0% |
| wSOL → CATALORIAN | 1 | 0 | 0.0% |
| wSOL → MICRO | 1 | 0 | 0.0% |
| wSOL → Token | 1 | 0 | 0.0% |
| wSOL → Zoe | 1 | 0 | 0.0% |
| wSOL → Polycat | 1 | 0 | 0.0% |
| wSOL → ARX | 1 | 0 | 0.0% |
| wSOL → HUHCAT | 1 | 0 | 0.0% |
| wSOL → YOTS | 1 | 0 | 0.0% |
| wSOL → AMZNx | 1 | 0 | 0.0% |
| wSOL → Kimchi | 1 | 0 | 0.0% |
| wSOL → DOPAMEME | 1 | 0 | 0.0% |
| wSOL → fih | 1 | 0 | 0.0% |
| wSOL → WOJAK | 1 | 0 | 0.0% |
| wSOL → 67coin | 1 | 0 | 0.0% |
| wSOL → MOS | 1 | 0 | 0.0% |
| wSOL → PURPS | 1 | 0 | 0.0% |
| wSOL → FROINK | 1 | 0 | 0.0% |
| wSOL → BOTIFY | 1 | 0 | 0.0% |
| wSOL → COLLECT | 1 | 0 | 0.0% |
| wSOL → HIMS | 1 | 0 | 0.0% |
| wSOL → Sue | 1 | 0 | 0.0% |
| wSOL → FRANK | 1 | 0 | 0.0% |
| wSOL → CRIMECAT | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 16 | 10 | 62.5% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 16 | 14 | 87.5% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 15 | 14 | 93.3% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 15 | 15 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 14 | 6 | 42.9% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 14 | 11 | 78.6% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 14 | 10 | 71.4% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 14 | 11 | 78.6% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 14 | 12 | 85.7% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 14 | 12 | 85.7% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 13 | 11 | 84.6% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 13 | 9 | 69.2% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 13 | 13 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 13 | 10 | 76.9% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 13 | 6 | 46.2% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 13 | 11 | 84.6% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 13 | 10 | 76.9% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 12 | 8 | 66.7% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 12 | 7 | 58.3% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 12 | 10 | 83.3% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 12 | 6 | 50.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 12 | 6 | 50.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 11 | 10 | 90.9% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 11 | 8 | 72.7% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 11 | 8 | 72.7% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 11 | 3 | 27.3% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 11 | 5 | 45.5% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 10 | 5 | 50.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 9 | 4 | 44.4% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 7 | 3 | 42.9% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 110 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 20:47:50 | wSOL → swordcat | sell | Winner too late: creation blockhash expired | `0x3c4a6599…` [🐞](https://debug.barn.cow.fi/order/0x3c4a6599881d1ced34809690a0bc564a7fe6f86e9d31d9bbab6be1ee753f20ab) |
| 20:49:16 | wSOL → ZBCN | sell | Winner too late: creation blockhash expired | `0xbec54c28…` [🐞](https://debug.barn.cow.fi/order/0xbec54c28fc8a8895d0488325c4243f050c907567d8bf88c86aa854bafdcd8862) |
| 20:50:17 | wSOL → ZBCN | buy | Winner too late: creation blockhash expired | `0x71c5ec62…` [🐞](https://debug.barn.cow.fi/order/0x71c5ec625b9a0426040fc1439a8f412d993ed984a0945b07bbe1fd33887f641b) |
| 20:51:11 | wSOL → Momota | sell | Winner too late: creation blockhash expired | `0xc8d44061…` [🐞](https://debug.barn.cow.fi/order/0xc8d4406107c29dd2e9d3a8165c0b1fb3b91d54568787daa611598d52f234d792) |
| 20:51:16 | wSOL → PERPSPAD | sell | Winner too late: creation blockhash expired | `0x384aabf5…` [🐞](https://debug.barn.cow.fi/order/0x384aabf5138b51faaa79a95b0c7daae2efae12a5d0d9759eb59d4aa840153b47) |
| 20:51:23 | wSOL → GO | sell | Winner too late: creation blockhash expired | `0xa4837bed…` [🐞](https://debug.barn.cow.fi/order/0xa4837bed3d0c3366d3c5f8dc25db6d5e9d7ad0f6462eb9036c9223f716018a12) |
| 20:51:38 | wSOL → catalyst | sell | Winner too late: creation blockhash expired | `0x6a87d38f…` [🐞](https://debug.barn.cow.fi/order/0x6a87d38f3292080ff697abdb7589d7432e8a441c2c13670dd706b161c3856f49) |
| 20:51:39 | wSOL → CTM | sell | Winner too late: creation blockhash expired | `0x1c40a029…` [🐞](https://debug.barn.cow.fi/order/0x1c40a029b160c3d153938fcd433d954719754e89c82b7daa8a8c391186e9aa9c) |
| 20:51:41 | wSOL → ACT | sell | Winner too late: creation blockhash expired | `0x674fc2ac…` [🐞](https://debug.barn.cow.fi/order/0x674fc2ac97b80ca907ee154e9bace7555029df01cf8912d152c1b18016011fe5) |
| 20:51:42 | wSOL → STONK10 | sell | Winner too late: creation blockhash expired | `0xc5289a77…` [🐞](https://debug.barn.cow.fi/order/0xc5289a776528da0b4aac31f99c11f7c4040ae2571af12677accf2c706535ae73) |
| 20:51:42 | wSOL → TWINE | sell | Winner too late: creation blockhash expired | `0x0983fdae…` [🐞](https://debug.barn.cow.fi/order/0x0983fdae7f6c06e025dd68f8a3fc5e123d7394dc0b3a8f14955157040c7c3582) |
| 20:51:42 | wSOL → 2Z | sell | Winner too late: creation blockhash expired | `0xe467677a…` [🐞](https://debug.barn.cow.fi/order/0xe467677aecac2e2ba6a988d8e8bb44c2cab7d86a4d2583e69fab7aaee458e5b5) |
| 20:51:43 | wSOL → BATON | sell | Winner too late: creation blockhash expired | `0xd9629d6d…` [🐞](https://debug.barn.cow.fi/order/0xd9629d6dbf200e52a714925e539a2c3829d917b80c91330b4856a42add3bad77) |
| 20:51:45 | wSOL → wXRP | buy | Winner too late: creation blockhash expired | `0x857ff570…` [🐞](https://debug.barn.cow.fi/order/0x857ff5708689d59b63c99c33bd9b645b499b1cda2966e779fccf7ba55b226605) |
| 20:51:45 | wSOL → MEW | sell | Winner too late: creation blockhash expired | `0xd9362598…` [🐞](https://debug.barn.cow.fi/order/0xd93625986647a3935852bc125731b5f2a055c4f855d89cf32711388c4a52a73b) |
| 20:52:10 | wSOL → PYTHIA | sell | Winner too late: creation blockhash expired | `0xc6d66703…` [🐞](https://debug.barn.cow.fi/order/0xc6d667032b01799116d63e7f00a30a995d1f09ab84db895de23d0dbf8631028d) |
| 20:52:11 | wSOL → GO | buy | Winner too late: creation blockhash expired | `0x481531f8…` [🐞](https://debug.barn.cow.fi/order/0x481531f817704f0df3ccefbab31739f6c74ebd86bad48b608cde5a00f3608b79) |
| 20:52:14 | wSOL → familiars | sell | Winner too late: creation blockhash expired | `0xfdacb503…` [🐞](https://debug.barn.cow.fi/order/0xfdacb50321937829f2116c9d269ff320de85623bcf5dd0e84c73d9d42a624bcc) |
| 20:52:14 | wSOL → PERPSPAD | buy | Winner too late: creation blockhash expired | `0x2fedd234…` [🐞](https://debug.barn.cow.fi/order/0x2fedd23496e95a3e21f897d01f59766245dbe59561cc1bd101b93279890e09a6) |
| 20:52:15 | wSOL → META | sell | Winner too late: creation blockhash expired | `0x95846315…` [🐞](https://debug.barn.cow.fi/order/0x95846315e96e3a21cf682d31281f321a45e29fd047723d4135a224e443d799e5) |
| 20:52:17 | wSOL → DPG | sell | Winner too late: creation blockhash expired | `0x6f526da3…` [🐞](https://debug.barn.cow.fi/order/0x6f526da3f05e69365735ba3e080140a47ccbd2633dcb5da16b9ddc161da9623e) |
| 20:52:17 | wSOL → TINYTANK | sell | Winner too late: creation blockhash expired | `0xa19e36af…` [🐞](https://debug.barn.cow.fi/order/0xa19e36af20328a5447329731d3bb088ed2e669d308ea5df30afe724f5cc9b2d1) |
| 20:52:17 | wSOL → XAUt0 | sell | Winner too late: creation blockhash expired | `0xed4c2771…` [🐞](https://debug.barn.cow.fi/order/0xed4c27715eb6eae9a140ededac68683569807e8f217bb8abf0072eadcd8b81d7) |
| 20:52:18 | wSOL → PEAQ | sell | Winner too late: creation blockhash expired | `0xfab05a37…` [🐞](https://debug.barn.cow.fi/order/0xfab05a37d566bd0202ef1bc4c5b15bb78ebf67385c5a2263631dde0c7b0df118) |
| 20:52:18 | wSOL → BORG | sell | Winner too late: creation blockhash expired | `0x39001e41…` [🐞](https://debug.barn.cow.fi/order/0x39001e414b4a6fae201d9b26d22529afade4ef301a3d6e11d33cb5c6d93bcdc1) |
| 20:52:20 | wSOL → Remus | sell | Winner too late: creation blockhash expired | `0x32738b84…` [🐞](https://debug.barn.cow.fi/order/0x32738b84deae3db1faea14302275889918ae62e16ff7564a9d69c79f035f735d) |
| 20:52:20 | wSOL → knightcat | sell | Winner too late: creation blockhash expired | `0x2e1060b2…` [🐞](https://debug.barn.cow.fi/order/0x2e1060b225b996ac224592fe5a427f96c29e2d438f047b05f0276d1d786fb83f) |
| 20:52:21 | wSOL → LMAO! | sell | Winner too late: creation blockhash expired | `0x742c7ee2…` [🐞](https://debug.barn.cow.fi/order/0x742c7ee2b4d211873283bd2bc4327da6ad643ba659ada76cfc7d4a8ccd354332) |
| 20:52:23 | wSOL → CODEC | sell | Winner too late: creation blockhash expired | `0xa8ef1c21…` [🐞](https://debug.barn.cow.fi/order/0xa8ef1c215f8f30c30df37c1b160eb9b6f03cfd7c427c7234b5220eba42cf56f2) |
| 20:52:24 | wSOL → ACT | buy | Winner too late: creation blockhash expired | `0xf237952b…` [🐞](https://debug.barn.cow.fi/order/0xf237952b846df33a765a16d9a41cecb24d70b9d1288acd9a47535f3c123d30aa) |
| 20:52:25 | wSOL → OnlyMarms | sell | Winner too late: creation blockhash expired | `0xe29f8835…` [🐞](https://debug.barn.cow.fi/order/0xe29f8835a72650279456c4547e1fbbdc0637704ebb5ed9e6c193fe12cc0648ed) |
| 20:52:26 | wSOL → AGENTCAT | sell | Winner too late: creation blockhash expired | `0x950b9975…` [🐞](https://debug.barn.cow.fi/order/0x950b99751742b34b44a6a381cdd850339b04bc0637b02753f8ad288e001097eb) |
| 20:52:27 | wSOL → 2Z | buy | Winner too late: creation blockhash expired | `0x94ce7dc8…` [🐞](https://debug.barn.cow.fi/order/0x94ce7dc87c2e98bcc0daaf147705372e4ce52c3881274292a7a1bfaa09e0b958) |
| 20:52:28 | wSOL → CHILLHOUSE | sell | Winner too late: creation blockhash expired | `0x63023657…` [🐞](https://debug.barn.cow.fi/order/0x6302365701c8017d3bbd3bc50921adca7e7e2bd42b36ead2635e8610187808c8) |
| 20:52:28 | wSOL → Fauci | sell | Winner too late: creation blockhash expired | `0x6af93fb8…` [🐞](https://debug.barn.cow.fi/order/0x6af93fb81667dc8f98eb17d2d514ee5cfeeabec8db942a12970ad79aaa880fa8) |
| 20:52:29 | wSOL → PANTS | sell | Winner too late: creation blockhash expired | `0xa4cbda68…` [🐞](https://debug.barn.cow.fi/order/0xa4cbda6825a30d239134b988b77506452193092b6020227feada74ae94b0fdf6) |
| 20:52:30 | wSOL → MEW | buy | Winner too late: creation blockhash expired | `0xe2583047…` [🐞](https://debug.barn.cow.fi/order/0xe2583047c12c1e3f182d114a21b4dcaaeffde682220b322fcbed83f285937f6b) |
| 20:52:31 | wSOL → LAYOOO | sell | Winner too late: creation blockhash expired | `0x0447f699…` [🐞](https://debug.barn.cow.fi/order/0x0447f6995afbe3e6ee9ef0a9f9d7517370620d7cdcd415b0d2dd9b8bacaa615d) |
| 20:52:31 | wSOL → SLX | sell | Winner too late: creation blockhash expired | `0xffec3967…` [🐞](https://debug.barn.cow.fi/order/0xffec396736dca7182defa9d201df80b33ceeb498fa39bd7a6394f6264dc24d12) |
| 20:52:33 | wSOL → USWR | sell | Winner too late: creation blockhash expired | `0x494645a3…` [🐞](https://debug.barn.cow.fi/order/0x494645a3c392acf6af6484cbcdb5dd0cb460d52a04e188258f4b6bee8fefe159) |
| 20:52:34 | wSOL → STRCx | sell | Winner too late: creation blockhash expired | `0xf4727afb…` [🐞](https://debug.barn.cow.fi/order/0xf4727afbd7b4928142ccf4b70c682a8240adec07f04f239daebdb77fb61bb9bb) |
| 20:52:37 | wSOL → BOIÚNA | sell | Winner too late: creation blockhash expired | `0x0418066e…` [🐞](https://debug.barn.cow.fi/order/0x0418066e420a891742b9d1986fe9b40f2c43fd8b1aabd8dbb861cf238b227873) |
| 20:52:42 | wSOL → BC | sell | Winner too late: creation blockhash expired | `0xba01f27b…` [🐞](https://debug.barn.cow.fi/order/0xba01f27bcc24901fa8af6acc2d24e355c6fa6f644e948aa4e36da4693c6648d0) |
| 20:52:54 | wSOL → jellyjelly | sell | Winner too late: creation blockhash expired | `0xcb054eaf…` [🐞](https://debug.barn.cow.fi/order/0xcb054eaf25f6409f448e986e1e6540eef9d18dfd5be01abc5c8bcbd6ab0b9a5c) |
| 20:52:57 | wSOL → PYTHIA | buy | Winner too late: creation blockhash expired | `0x9386fdf9…` [🐞](https://debug.barn.cow.fi/order/0x9386fdf98bd863f512c79d8e57a23dda857a28910cb083a3465d29655cf9f909) |
| 20:52:59 | wSOL → RUSH | sell | Winner too late: creation blockhash expired | `0x381d9bc8…` [🐞](https://debug.barn.cow.fi/order/0x381d9bc8a7fcf1841bf1de899b658438b610e714519a0f0510892956c9740c59) |
| 20:53:00 | wSOL → xBTC | sell | Winner too late: creation blockhash expired | `0x470a6f5a…` [🐞](https://debug.barn.cow.fi/order/0x470a6f5aeb46dc93535a86b730c10ec4b96cd1ead0970f5f7b2fcaf3fba7ff9c) |
| 20:53:00 | wSOL → META | buy | Winner too late: creation blockhash expired | `0xaee97a24…` [🐞](https://debug.barn.cow.fi/order/0xaee97a2413c2bb2febb073ad2479d12cf860b628d55b5fb669078d193f0441cf) |
| 20:53:02 | wSOL → GIGA | sell | Winner too late: creation blockhash expired | `0xf644464b…` [🐞](https://debug.barn.cow.fi/order/0xf644464b88c200fc3aca43343918d1bd176532bd2250ed64169c1f2710c16bb3) |
| 20:53:03 | wSOL → XAUt0 | buy | Winner too late: creation blockhash expired | `0x392906a0…` [🐞](https://debug.barn.cow.fi/order/0x392906a0363b2a090d49a078a36cea59d592c7ad9e94579cb025bd4e1c5419f4) |
| 20:53:04 | wSOL → BORG | buy | Winner too late: creation blockhash expired | `0xcfdde055…` [🐞](https://debug.barn.cow.fi/order/0xcfdde055558bc3a67043acd08d63802523881bf541abb0d41ed8da09646feaa5) |
| 20:53:04 | wSOL → PEAQ | buy | Winner too late: creation blockhash expired | `0x60c5199e…` [🐞](https://debug.barn.cow.fi/order/0x60c5199e4288cc79f44506373133cba25f42ccd0e7e04e90c5fb213349bcf7ad) |
| 20:53:07 | wSOL → PST | sell | Winner too late: creation blockhash expired | `0x26e0941f…` [🐞](https://debug.barn.cow.fi/order/0x26e0941f4266795a7d5dccb126ce0d3f2992b0a4866411d3d2a06ac159f54af5) |
| 20:53:07 | wSOL → moonkey | sell | Winner too late: creation blockhash expired | `0x22fef028…` [🐞](https://debug.barn.cow.fi/order/0x22fef028935264aa679113fbb454dfd60f640656d154385e3a9246f0e72b6a0f) |
| 20:53:07 | wSOL → omo | sell | Winner too late: creation blockhash expired | `0x24197b42…` [🐞](https://debug.barn.cow.fi/order/0x24197b42c0c25d61cc5d84d21e27b95d2c5e2b73cc5d1bc8d9aae331a905317c) |
| 20:53:11 | wSOL → BULLCAT | sell | Winner too late: creation blockhash expired | `0x393ac710…` [🐞](https://debug.barn.cow.fi/order/0x393ac7100896b2d5398311b402f8d5dcc76bcd3161403c85da2db32d15b7054d) |
| 20:53:11 | wSOL → NEST | sell | Winner too late: creation blockhash expired | `0x26e66497…` [🐞](https://debug.barn.cow.fi/order/0x26e66497b3e1b67a50c7bf436ffa05b26611c2deb296cac59aef1f099effe8ee) |
| 20:53:13 | wSOL → BOP | sell | Winner too late: creation blockhash expired | `0x138b1638…` [🐞](https://debug.barn.cow.fi/order/0x138b16388064a5ffb71985507b8d531b9d9abc7b0120b40ff65dba59e6920284) |
| 20:53:14 | wSOL → Chonketha | sell | Winner too late: creation blockhash expired | `0x8e8d57cf…` [🐞](https://debug.barn.cow.fi/order/0x8e8d57cf318ed72d000a11cd616f756013ba097578652dd7142e7f1a7c431bc2) |
| 20:53:15 | wSOL → SLX | buy | Winner too late: creation blockhash expired | `0x3749cf47…` [🐞](https://debug.barn.cow.fi/order/0x3749cf47773d79a044fce2ffa4934c37530e99ff61c930171b7ff0271d8b81fc) |
| 20:53:15 | wSOL → K-HOME | sell | Winner too late: creation blockhash expired | `0x22c7aeb7…` [🐞](https://debug.barn.cow.fi/order/0x22c7aeb7254082f741a7863b1268f50c038df4ed719646040db548f2b33898a5) |
| 20:53:16 | wSOL → Stunk | sell | Winner too late: creation blockhash expired | `0x7694bf4d…` [🐞](https://debug.barn.cow.fi/order/0x7694bf4d32c6fb8065c18dadd6ab4c576b567fe03658d3ec78ae7f2bb5700cc9) |
| 20:53:18 | wSOL → READY | sell | Winner too late: creation blockhash expired | `0x784eb702…` [🐞](https://debug.barn.cow.fi/order/0x784eb702194dddfc0f3962bd4fe0f60cdbb65080e13aa86a47f90cf9b338f2a3) |
| 20:53:19 | wSOL → DRAM | sell | Winner too late: creation blockhash expired | `0xca378e23…` [🐞](https://debug.barn.cow.fi/order/0xca378e23fc456046d890fe8d4fdec287a5c3721fe7e8deabd5e9560d6c9008a9) |
| 20:53:22 | wSOL → manlet | sell | Winner too late: creation blockhash expired | `0x29a83aff…` [🐞](https://debug.barn.cow.fi/order/0x29a83aff174f5f09517f36c33199f3f9dbed30bc5af608f1b59be8b593207721) |
| 20:53:27 | wSOL → BC | buy | Winner too late: creation blockhash expired | `0x5c37400b…` [🐞](https://debug.barn.cow.fi/order/0x5c37400b6b5b10ce469aad58910b01b22e4edd2c7ee7d1a4b202557ee4feba35) |
| 20:53:41 | wSOL → PLTRx | sell | Winner too late: creation blockhash expired | `0x9f268733…` [🐞](https://debug.barn.cow.fi/order/0x9f268733f4c82a44380eb5a44eacd7ef0a67182d5d10e6f3b3e7a4e13652c616) |
| 20:53:41 | wSOL → jellyjelly | buy | Winner too late: creation blockhash expired | `0x0b862e0d…` [🐞](https://debug.barn.cow.fi/order/0x0b862e0d3a109f615a0e6edce66e3ce7e742165c15a485fd1b95e896c2eaf1fb) |
| 20:53:41 | wSOL → RUSH | buy | Winner too late: creation blockhash expired | `0xfda8b3bb…` [🐞](https://debug.barn.cow.fi/order/0xfda8b3bbf428e64dd6b843107d8acfc5b3c519609ed25436b4797710d2b202bc) |
| 20:53:43 | wSOL → xBTC | buy | Winner too late: creation blockhash expired | `0x34ab30f4…` [🐞](https://debug.barn.cow.fi/order/0x34ab30f46dd6e54e5252ae8198d0fdbd32e2a9b1363bd7eb36b3c88fd0ea445d) |
| 20:53:44 | wSOL → VINE | sell | Winner too late: creation blockhash expired | `0x86190092…` [🐞](https://debug.barn.cow.fi/order/0x86190092663343894772e422feae39e2d1b5f4a23fb2af93892e649e83645405) |
| 20:53:46 | wSOL → NPC | sell | Winner too late: creation blockhash expired | `0xdddd26f0…` [🐞](https://debug.barn.cow.fi/order/0xdddd26f06ca521ea13d825a01ad9875dc0e7d0485a88940dbffda2a28a532c64) |
| 20:53:48 | wSOL → GIGA | buy | Winner too late: creation blockhash expired | `0x07a85b33…` [🐞](https://debug.barn.cow.fi/order/0x07a85b336e348466bab7f7a393317446e507d83ea783d02390a55a2dc5fd902f) |
| 20:53:52 | wSOL → CATALORIAN | sell | Winner too late: creation blockhash expired | `0x7a76586d…` [🐞](https://debug.barn.cow.fi/order/0x7a76586df5c4d2eaa8df607910c2cda6c737f302856ba2131534c9e394304fd5) |
| 20:53:52 | wSOL → xHYPE | sell | Winner too late: creation blockhash expired | `0x61a0ce80…` [🐞](https://debug.barn.cow.fi/order/0x61a0ce80bf25c5b2be4f45d35348ceffc80480e32d8efc5ea1b55af4a8af4c2f) |
| 20:53:53 | wSOL → PST | buy | Winner too late: creation blockhash expired | `0x0556a8fc…` [🐞](https://debug.barn.cow.fi/order/0x0556a8fc744958514d9d5206f7ba7f8337812499b0759a27c84c6929b077bc2c) |
| 20:53:53 | wSOL → MICRO | sell | Winner too late: creation blockhash expired | `0x4b86c43c…` [🐞](https://debug.barn.cow.fi/order/0x4b86c43cc04f08eff38d13c73f5fd7e9396eca565736a42ad0457fe94e9607b3) |
| 20:53:55 | wSOL → Token | sell | Winner too late: creation blockhash expired | `0xb19b2e00…` [🐞](https://debug.barn.cow.fi/order/0xb19b2e00c0aba930ef5f1946288de8efa5f0683b6a63b8c8989872ec8ac95c6c) |
| 20:53:57 | wSOL → NOS | sell | Winner too late: creation blockhash expired | `0x275d4b42…` [🐞](https://debug.barn.cow.fi/order/0x275d4b42873d8d10e5b86e0cf354c652bd70a1a2372c6535f795371faf264eb9) |
| 20:53:58 | wSOL → Zoe | sell | Winner too late: creation blockhash expired | `0x78fa77c0…` [🐞](https://debug.barn.cow.fi/order/0x78fa77c09cdab45ad1a95719c611ee6fffb8ae042c6a830e9ab7521fc510af1e) |
| 20:53:59 | wSOL → Polycat | sell | Winner too late: creation blockhash expired | `0x030ca4d1…` [🐞](https://debug.barn.cow.fi/order/0x030ca4d13f7d21f4138a317c5156fbee562452c20b6bfdbe5e38b33a11fc295b) |
| 20:54:02 | wSOL → bSOL | sell | Winner too late: creation blockhash expired | `0x0c338b3a…` [🐞](https://debug.barn.cow.fi/order/0x0c338b3ab991311aeaf3515757f3c2cc3ac8a1ff76212067126514971bcb1b82) |
| 20:54:04 | wSOL → ARX | sell | Winner too late: creation blockhash expired | `0xf3326d28…` [🐞](https://debug.barn.cow.fi/order/0xf3326d2854bcb5a7629b9e45e27e716e10e38f6c2354ee49c61c65ef4b04dea2) |
| 20:54:26 | wSOL → HUHCAT | sell | Winner too late: creation blockhash expired | `0xf865643f…` [🐞](https://debug.barn.cow.fi/order/0xf865643f718318d5db748cbf0ec45f9f515d9922f3a7ebf5b0d35af67fd9fca8) |
| 20:54:28 | wSOL → VINE | buy | Winner too late: creation blockhash expired | `0x279f4442…` [🐞](https://debug.barn.cow.fi/order/0x279f444280bc1b8284580772858e865ef99644ac22abd0cb0eaca0487ff5c56c) |
| 20:54:28 | wSOL → CRED | sell | Winner too late: creation blockhash expired | `0xb4048556…` [🐞](https://debug.barn.cow.fi/order/0xb404855663361042dfcf12bf1dfdda1d8372c18ba29578b1f528a7425f6be968) |
| 20:54:31 | wSOL → YOTS | sell | Winner too late: creation blockhash expired | `0x7c1df635…` [🐞](https://debug.barn.cow.fi/order/0x7c1df635a5cfff77a135c58e59e4f617a173012dc0f65f93cf02ada69c068f32) |
| 20:54:33 | wSOL → AMZNx | sell | Winner too late: creation blockhash expired | `0x6ba0b798…` [🐞](https://debug.barn.cow.fi/order/0x6ba0b798fb0954f434f5c4d62d34317fa7465087903d2c0532439198adcefa5a) |
| 20:54:34 | wSOL → xHYPE | buy | Winner too late: creation blockhash expired | `0xfbf5ade3…` [🐞](https://debug.barn.cow.fi/order/0xfbf5ade3f917f0b161a529f206292e276732d03eb41d6fd8f4a4aaa678bff700) |
| 20:54:39 | wSOL → WBTC | sell | Winner too late: creation blockhash expired | `0x00639d67…` [🐞](https://debug.barn.cow.fi/order/0x00639d67fd93ebce40d1b20de491d91f8335c3ef55a91566322e3d4849539901) |
| 20:54:40 | wSOL → Kimchi | sell | Winner too late: creation blockhash expired | `0xed6b4a29…` [🐞](https://debug.barn.cow.fi/order/0xed6b4a29b714571cd1ccd6397a7ab68c11f88412bd004a53ba8a24ac3c3881f0) |
| 20:54:42 | wSOL → NOS | buy | Winner too late: creation blockhash expired | `0x25bd1c54…` [🐞](https://debug.barn.cow.fi/order/0x25bd1c5429130812cf128c9acc82d0840084db6c28974c4dd9430f2c661e0b2e) |
| 20:54:43 | wSOL → DOPAMEME | sell | Winner too late: creation blockhash expired | `0xefc8754f…` [🐞](https://debug.barn.cow.fi/order/0xefc8754f8c105d86775f68c03b141258842e6834f3c22a15d06e68701c26ded4) |
| 20:54:47 | wSOL → bSOL | buy | Winner too late: creation blockhash expired | `0x66af93c6…` [🐞](https://debug.barn.cow.fi/order/0x66af93c6779b5cc5e976b4f0058a87958c03dc82303713cc4d47ab3891bdef71) |
| 20:54:49 | wSOL → fih | sell | Winner too late: creation blockhash expired | `0x4025075e…` [🐞](https://debug.barn.cow.fi/order/0x4025075e8ba168b76d034ebad49e35f05d26085165e7ad5b6d662d506bd07ab8) |
| 20:55:09 | wSOL → WOJAK | sell | Winner too late: creation blockhash expired | `0x8259fa5c…` [🐞](https://debug.barn.cow.fi/order/0x8259fa5c12e5e2ee10a71e8bcf4120b56739638eba4967dce3a78fbab8949218) |
| 20:55:14 | wSOL → CRED | buy | Winner too late: creation blockhash expired | `0x1ec4e0c5…` [🐞](https://debug.barn.cow.fi/order/0x1ec4e0c53b531f4b8eca47a748bf78be0e45a2c9f7e41c22afd871b2466562fb) |
| 20:55:14 | wSOL → 67coin | sell | Winner too late: creation blockhash expired | `0x82fe1b39…` [🐞](https://debug.barn.cow.fi/order/0x82fe1b39c66b7056cc2b3f9ba023c6f660b20d3e8e7e10b3e25f3bdcd88e12be) |
| 20:55:16 | wSOL → Pnut | sell | Winner too late: creation blockhash expired | `0x4787e241…` [🐞](https://debug.barn.cow.fi/order/0x4787e2417047d641a8229af92453ca2b10480fa5d7328698e3f843c28bb33bf9) |
| 20:55:18 | wSOL → MOS | sell | Winner too late: creation blockhash expired | `0x1280cd8e…` [🐞](https://debug.barn.cow.fi/order/0x1280cd8e91d16a7270edba87cec76d8960cb6820929c2fedd2210198fde9f8be) |
| 20:55:24 | wSOL → WBTC | buy | Winner too late: creation blockhash expired | `0xf9edfaec…` [🐞](https://debug.barn.cow.fi/order/0xf9edfaeccaf53ed06004ad1becb6d72132910ca9d6b992c5ab96ba556d6721d1) |
| 20:55:26 | wSOL → PURPS | sell | Winner too late: creation blockhash expired | `0x284c9c17…` [🐞](https://debug.barn.cow.fi/order/0x284c9c17de46b8bbfdbdbb93d26ffe0e1412cafed6f070361ef204e018198cf7) |
| 20:55:29 | wSOL → FROINK | sell | Winner too late: creation blockhash expired | `0x67e8d097…` [🐞](https://debug.barn.cow.fi/order/0x67e8d097a798042cb61aacd243760af92990b33e072d92a4c14cdd8ffb2845d4) |
| 20:55:54 | wSOL → BOTIFY | sell | Winner too late: creation blockhash expired | `0x01334071…` [🐞](https://debug.barn.cow.fi/order/0x01334071fdd0aa59c9cfe750aa734e05048e6cec3263da0c02bf3b6dda0b372d) |
| 20:55:55 | wSOL → COLLECT | sell | Winner too late: creation blockhash expired | `0xab092faf…` [🐞](https://debug.barn.cow.fi/order/0xab092faf01c867096dcd5feb547c7333ca2705a83a9a8e44b5a375123223200e) |
| 20:55:56 | wSOL → HIMS | sell | Winner too late: creation blockhash expired | `0x1b3a0f0c…` [🐞](https://debug.barn.cow.fi/order/0x1b3a0f0c2b8ac1b1b790e829843826d3937f89f1785092b886340af8899d0c48) |
| 20:56:00 | wSOL → Pnut | buy | Winner too late: creation blockhash expired | `0x3ef49d79…` [🐞](https://debug.barn.cow.fi/order/0x3ef49d79ca3a3fc892f66ee2add6ba05e6d25aa5028d401932baeed0f108c1ee) |
| 20:56:41 | wSOL → Sue | sell | Winner too late: creation blockhash expired | `0x1648e3f6…` [🐞](https://debug.barn.cow.fi/order/0x1648e3f62a91c123cdea31f21ef6bc74918d7aedfe4d2713770346072c6df5a6) |
| 20:56:43 | wSOL → FRANK | sell | Winner too late: creation blockhash expired | `0x520bbf02…` [🐞](https://debug.barn.cow.fi/order/0x520bbf025ac24608724c2558eea635484d545efab6453055e64b9c5fdcdc2cea) |
| 20:57:28 | wSOL → CRIMECAT | sell | Winner too late: creation blockhash expired | `0x11e603c8…` [🐞](https://debug.barn.cow.fi/order/0x11e603c86e9d7b3a735bef09b1ecfd8e90e261c857672ff915857fa1be88a0ed) |
