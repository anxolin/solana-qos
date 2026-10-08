# Solana QoS report: 2026-10-07-21-27-top250

Barn, orders created between `2026-10-07T21:27:40.549Z` and `2026-10-07T21:50:59.284Z`. Data fetched 2026-10-07T21:50:58+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 380 |
| Orders executed | **0** (0.0%) |
| Sponsored orders never created on-chain | 380 (100.0%) |
| Traders | 30 |
| Settlement txs | 0 |

## Scenario

0 of 500 scenario rows completed. 0 retries, 120 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 21:27:40 | 1 | 1 | sell 0.005 SOL → EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v | failed | 78s | 1 | main expired |
| 21:28:58 | 2 | 1 | sell 0.522 EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v → SOL | failed | 45s | 1 | acquire EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v expired |
| 21:27:40 | 3 | 2 | sell 0.005 SOL → Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB | failed | 74s | 1 | main expired |
| 21:28:54 | 4 | 2 | sell 0.522 Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB → SOL | failed | 45s | 1 | acquire Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB expired |
| 21:27:40 | 5 | 3 | sell 0.005 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 76s | 1 | main expired |
| 21:28:57 | 6 | 3 | sell 0.522 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → SOL | failed | 0s | 0 | acquire 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH error: 404 Not Found: NoLiquidity: no route found |
| 21:27:40 | 7 | 4 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 73s | 1 | main expired |
| 21:28:53 | 8 | 4 | sell 6.26e-06 cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij → SOL | failed | 44s | 1 | acquire cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij expired |
| 21:27:41 | 9 | 5 | sell 0.005 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 69s | 1 | main expired |
| 21:28:49 | 10 | 5 | sell 82.5 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn → SOL | failed | 0s | 0 | acquire pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn error: 404 Not Found: NoLiquidity: no route found |
| 21:27:41 | 11 | 6 | sell 0.005 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 72s | 1 | main expired |
| 21:28:52 | 12 | 6 | sell 0.522 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → SOL | failed | 0s | 0 | acquire 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo error: 404 Not Found: NoLiquidity: no route found |
| 21:27:41 | 13 | 7 | sell 0.005 SOL → 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx | failed | 79s | 1 | main expired |
| 21:29:00 | 14 | 7 | sell 3.13 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx → SOL | failed | 45s | 1 | acquire 6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx expired |
| 21:27:41 | 15 | 8 | sell 0.005 SOL → A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS | failed | 79s | 1 | main expired |
| 21:29:00 | 16 | 8 | sell 0.000395 A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS → SOL | failed | 45s | 1 | acquire A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS expired |
| 21:27:41 | 17 | 9 | sell 0.005 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 92s | 1 | main expired |
| 21:29:13 | 18 | 9 | sell 3.68 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → SOL | failed | 0s | 0 | acquire 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump error: 404 Not Found: NoLiquidity: no route found |
| 21:27:41 | 19 | 10 | sell 0.005 SOL → 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN | failed | 69s | 1 | main expired |
| 21:28:50 | 20 | 10 | sell 0.281 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN → SOL | failed | 44s | 1 | acquire 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN expired |
| 21:27:41 | 21 | 11 | sell 0.005 SOL → 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g | failed | 82s | 1 | main expired |
| 21:29:03 | 22 | 11 | sell 0.00592 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g → SOL | failed | 45s | 1 | acquire 98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g expired |
| 21:27:41 | 23 | 12 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 76s | 1 | main expired |
| 21:28:57 | 24 | 12 | sell 0.000203 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs → SOL | failed | 44s | 1 | acquire 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs expired |
| 21:27:41 | 25 | 13 | sell 0.005 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 77s | 1 | main expired |
| 21:28:58 | 26 | 13 | sell 0.522 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → SOL | failed | 0s | 0 | acquire CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH error: 404 Not Found: NoLiquidity: no route found |
| 21:27:42 | 27 | 14 | sell 0.005 SOL → JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD | failed | 95s | 1 | main expired |
| 21:29:16 | 28 | 14 | sell 0.522 JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD → SOL | failed | 46s | 1 | acquire JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD expired |
| 21:27:42 | 29 | 15 | sell 0.005 SOL → 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R | failed | 91s | 1 | main expired |
| 21:29:12 | 30 | 15 | sell 0.209 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R → SOL | failed | 45s | 1 | acquire 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R expired |
| 21:27:42 | 31 | 16 | sell 0.005 SOL → Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk | failed | 83s | 1 | main expired |
| 21:29:05 | 32 | 16 | sell 2.57 Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk → SOL | failed | 46s | 1 | acquire Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk expired |
| 21:27:42 | 33 | 17 | sell 0.005 SOL → USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB | failed | 78s | 1 | main expired |
| 21:29:00 | 34 | 17 | sell 0.522 USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB → SOL | failed | 45s | 1 | acquire USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB expired |
| 21:27:42 | 35 | 18 | sell 0.005 SOL → CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt | failed | 83s | 1 | main expired |
| 21:29:04 | 36 | 18 | sell 43.2 CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt → SOL | failed | 0s | 0 | acquire CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt error: 404 Not Found: NoLiquidity: no route found |
| 21:27:42 | 37 | 19 | sell 0.005 SOL → 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh | failed | 72s | 1 | main expired |
| 21:28:54 | 38 | 19 | sell 6.26e-06 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh → SOL | failed | 45s | 1 | acquire 3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh expired |
| 21:27:42 | 39 | 20 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 81s | 1 | main expired |
| 21:29:03 | 40 | 20 | sell 0.522 DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT → SOL | failed | 49s | 1 | main expired |
| 21:27:42 | 41 | 21 | sell 0.005 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 80s | 1 | main expired |
| 21:29:02 | 42 | 21 | sell 0.00646 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | failed | 2s | 0 | acquire XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 error: 404 Not Found: NoLiquidity: no route found |
| 21:27:42 | 43 | 22 | sell 0.005 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 72s | 1 | main expired |
| 21:28:54 | 44 | 22 | sell 97.5 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump → SOL | failed | 49s | 1 | main expired |
| 21:27:42 | 45 | 23 | sell 0.005 SOL → Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump | failed | 68s | 1 | main expired |
| 21:28:51 | 46 | 23 | sell 149 Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump → SOL | failed | 0s | 0 | acquire Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump error: 404 Not Found: NoLiquidity: no route found |
| 21:27:42 | 47 | 24 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 74s | 1 | main expired |
| 21:28:57 | 48 | 24 | sell 0.00345 J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn → SOL | failed | 49s | 1 | main expired |
| 21:27:43 | 49 | 25 | sell 0.005 SOL → CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump | failed | 90s | 1 | main expired |
| 21:29:13 | 50 | 25 | sell 126 CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump → SOL | failed | 0s | 0 | acquire CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump error: 404 Not Found: NoLiquidity: no route found |
| 21:27:43 | 51 | 26 | sell 0.005 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 69s | 1 | main expired |
| 21:28:51 | 52 | 26 | sell 0.000668 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | failed | 45s | 1 | main expired |
| 21:27:43 | 53 | 27 | sell 0.005 SOL → JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN | failed | 81s | 1 | main expired |
| 21:29:03 | 54 | 27 | sell 1.57 JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN → SOL | failed | 45s | 1 | acquire JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN expired |
| 21:27:43 | 55 | 28 | sell 0.005 SOL → 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv | failed | 78s | 1 | main expired |
| 21:29:01 | 56 | 28 | sell 60.9 2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv → SOL | failed | 45s | 1 | main expired |
| 21:27:43 | 57 | 29 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 75s | 1 | main expired |
| 21:28:58 | 58 | 29 | sell 3.25 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump → SOL | failed | 44s | 1 | main expired |
| 21:27:43 | 59 | 30 | sell 0.005 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 78s | 1 | main expired |
| 21:29:01 | 60 | 30 | sell 0.00291 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 → SOL | failed | 0s | 0 | acquire SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 error: 404 Not Found: NoLiquidity: no route found |
| 21:29:44 | 61 | 1 | sell 0.005 SOL → CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp | failed | 42s | 1 | main expired |
| 21:30:26 | 62 | 1 | sell 1.92 CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp → SOL | failed | 46s | 1 | acquire CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp expired |
| 21:29:38 | 63 | 2 | sell 0.005 SOL → METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL | failed | 46s | 1 | main expired |
| 21:30:25 | 64 | 2 | sell 1.17 METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL → SOL | failed | 45s | 1 | acquire METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL expired |
| 21:28:57 | 65 | 3 | sell 0.005 SOL → AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj | failed | 49s | 1 | main expired |
| 21:29:46 | 66 | 3 | sell 0.44 AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj → SOL | failed | 48s | 1 | acquire AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj expired |
| 21:29:38 | 67 | 4 | sell 0.005 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 43s | 1 | main expired |
| 21:30:20 | 68 | 4 | sell 0.00219 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | failed | 0s | 0 | acquire Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh error: 404 Not Found: NoLiquidity: no route found |
| 21:28:50 | 69 | 5 | sell 0.005 SOL → 3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 | failed | 43s | 1 | main expired |
| 21:29:33 | 70 | 5 | sell 0.491 3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 → SOL | failed | 0s | 0 | acquire 3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 error: 404 Not Found: NoLiquidity: no route found |
| 21:28:53 | 71 | 6 | sell 0.005 SOL → 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 | failed | 48s | 1 | main expired |
| 21:29:41 | 72 | 6 | sell 84.8 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 → SOL | failed | 47s | 1 | acquire 5dvXTZ5qwgafnHtwu3Ls3QrWx1U4LQsFeCuJgkk4QEC6 expired |
| 21:29:44 | 73 | 7 | sell 0.005 SOL → BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy | failed | 49s | 1 | main expired |
| 21:30:33 | 74 | 7 | sell 0.478 BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy → SOL | failed | 49s | 1 | acquire BPxxfRCXkUVhig4HS1Lh7kZqV6SPJhzfEk4x6fVBjPCy expired |
| 21:29:45 | 75 | 8 | sell 0.005 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 44s | 1 | main expired |
| 21:30:29 | 76 | 8 | sell 0.00048 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 → SOL | failed | 0s | 0 | acquire MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 error: 404 Not Found: NoLiquidity: no route found |
| 21:29:14 | 77 | 9 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 47s | 1 | main expired |
| 21:30:00 | 78 | 9 | sell 0.109 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 → SOL | failed | 44s | 1 | acquire 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 expired |
| 21:29:34 | 79 | 10 | sell 0.005 SOL → 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 | failed | 47s | 1 | main expired |
| 21:30:21 | 80 | 10 | sell 0.453 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 → SOL | failed | 44s | 1 | acquire 5Y8NV33Vv7WbnLfq3zBcKSdYPrk7g2KoiQoe7M2tcxp5 expired |
| 21:29:52 | 81 | 11 | sell 0.005 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 48s | 1 | main expired |
| 21:30:39 | 82 | 11 | sell 0.0031 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb → SOL | failed | 0s | 0 | acquire SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb error: 404 Not Found: NoLiquidity: no route found |
| 21:29:42 | 83 | 12 | sell 0.005 SOL → CbcyNo7m1amFWqEQm2m4PLv1UNvpcL3C1Ujm6AkzpKoU | failed | 43s | 1 | main expired |
| 21:30:24 | 84 | 12 | sell 89.5 CbcyNo7m1amFWqEQm2m4PLv1UNvpcL3C1Ujm6AkzpKoU → SOL | failed | 0s | 0 | acquire CbcyNo7m1amFWqEQm2m4PLv1UNvpcL3C1Ujm6AkzpKoU error: 404 Not Found: NoLiquidity: no route found |
| 21:28:58 | 85 | 13 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 44s | 1 | main expired |
| 21:29:43 | 86 | 13 | sell 523 ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 → SOL | failed | 47s | 1 | acquire ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 expired |
| 21:30:03 | 87 | 14 | sell 0.005 SOL → A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump | failed | 45s | 1 | main expired |
| 21:30:48 | 88 | 14 | sell 313 A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump → SOL | failed | 0s | 0 | acquire A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump error: 404 Not Found: NoLiquidity: no route found |
| 21:29:58 | 89 | 15 | sell 0.005 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 46s | 1 | main expired |
| 21:30:44 | 90 | 15 | sell 0.0031 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | failed | 0s | 0 | acquire Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 error: 404 Not Found: NoLiquidity: no route found |
| 21:29:54 | 91 | 16 | sell 0.005 SOL → KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS | failed | 51s | 1 | main expired |
| 21:30:45 | 92 | 16 | sell 14.1 KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS → SOL | failed | 45s | 1 | acquire KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS expired |
| 21:29:45 | 93 | 17 | sell 0.005 SOL → MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump | failed | 49s | 1 | main expired |
| 21:30:34 | 94 | 17 | sell 66 MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump → SOL | failed | 0s | 0 | acquire MukLDtJ8Cx9DxLbeyLRSWPSposTMWuwHANbuaudpump error: 404 Not Found: NoLiquidity: no route found |
| 21:29:05 | 95 | 18 | sell 0.005 SOL → Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump | failed | 46s | 1 | main expired |
| 21:29:51 | 96 | 18 | sell 61.2 Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump → SOL | failed | 4s | 0 | acquire Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump error: 404 Not Found: NoLiquidity: no route found |
| 21:29:40 | 97 | 19 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 48s | 1 | main expired |
| 21:30:27 | 98 | 19 | sell 0.466 HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr → SOL | failed | 45s | 1 | acquire HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr expired |
| 21:29:54 | 99 | 20 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 50s | 1 | main expired |
| 21:30:43 | 100 | 20 | sell 0.00371 jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v → SOL | failed | 45s | 1 | acquire jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v expired |
| 21:29:04 | 101 | 21 | sell 0.005 SOL → 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 | failed | 46s | 1 | main expired |
| 21:29:50 | 102 | 21 | sell 13 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 → SOL | failed | 45s | 1 | acquire 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2 expired |
| 21:29:43 | 103 | 22 | sell 0.005 SOL → 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG | failed | 47s | 1 | main expired |
| 21:30:30 | 104 | 22 | sell 0.522 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG → SOL | failed | 46s | 1 | acquire 6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG expired |
| 21:28:51 | 105 | 23 | sell 0.005 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 44s | 1 | main expired |
| 21:29:35 | 106 | 23 | sell 0.00138 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | failed | 0s | 0 | acquire XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB error: 404 Not Found: NoLiquidity: no route found |
| 21:29:48 | 107 | 24 | sell 0.005 SOL → orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE | failed | 46s | 1 | main expired |
| 21:30:33 | 108 | 24 | sell 0.188 orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE → SOL | failed | 44s | 1 | acquire orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE expired |
| 21:29:13 | 109 | 25 | sell 0.005 SOL → 7VertkgF9KLhxxJXHX6uaWuoYZTP9LdGj2bWmVXVpump | failed | 46s | 1 | main expired |
| 21:29:59 | 110 | 25 | sell 76 7VertkgF9KLhxxJXHX6uaWuoYZTP9LdGj2bWmVXVpump → SOL | failed | 1s | 0 | acquire 7VertkgF9KLhxxJXHX6uaWuoYZTP9LdGj2bWmVXVpump error: 404 Not Found: NoLiquidity: no route found |
| 21:29:36 | 111 | 26 | sell 0.005 SOL → GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump | failed | 47s | 1 | main expired |
| 21:30:24 | 112 | 26 | sell 142 GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump → SOL | failed | 0s | 0 | acquire GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump error: 404 Not Found: NoLiquidity: no route found |
| 21:29:51 | 113 | 27 | sell 0.005 SOL → SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH | failed | 53s | 1 | main expired |
| 21:30:44 | 114 | 27 | sell 0.000306 SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH → SOL | failed | 0s | 0 | acquire SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH error: 404 Not Found: NoLiquidity: no route found |
| 21:29:48 | 115 | 28 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 46s | 1 | main expired |
| 21:30:34 | 116 | 28 | sell 149000 DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 → SOL | failed | 45s | 1 | acquire DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 expired |
| 21:29:43 | 117 | 29 | sell 0.005 SOL → J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump | failed | 47s | 1 | main expired |
| 21:30:29 | 118 | 29 | sell 78.4 J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump → SOL | failed | 0s | 0 | acquire J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump error: 404 Not Found: NoLiquidity: no route found |
| 21:29:02 | 119 | 30 | sell 0.005 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | failed | 45s | 1 | main expired |
| 21:29:47 | 120 | 30 | sell 0.00338 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ → SOL | failed | 1s | 0 | acquire XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ error: 404 Not Found: NoLiquidity: no route found |
| 21:31:12 | 121 | 1 | sell 0.005 SOL → BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump | failed | 43s | 1 | main expired |
| 21:31:56 | 122 | 1 | sell 50.2 BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump → SOL | failed | 80s | 0 | acquire BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump error: 404 Not Found: NoLiquidity: no route found |
| 21:31:10 | 123 | 2 | sell 0.005 SOL → HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 | failed | 44s | 1 | main expired |
| 21:31:54 | 124 | 2 | sell 7.17 HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 → SOL | failed | 98s | 1 | acquire HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 expired |
| 21:30:35 | 125 | 3 | sell 0.005 SOL → 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump | failed | 45s | 1 | main expired |
| 21:31:20 | 126 | 3 | sell 69.4 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump → SOL | failed | 0s | 0 | acquire 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump error: 404 Not Found: NoLiquidity: no route found |
| 21:30:21 | 127 | 4 | sell 0.005 SOL → 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E | failed | 46s | 1 | main expired |
| 21:31:07 | 128 | 4 | sell 0.522 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E → SOL | failed | 44s | 1 | acquire 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E expired |
| 21:29:34 | 129 | 5 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 46s | 1 | main expired |
| 21:30:20 | 130 | 5 | sell 2.27 EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm → SOL | failed | 44s | 1 | acquire EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm expired |
| 21:30:28 | 131 | 6 | sell 0.005 SOL → J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr | failed | 49s | 1 | main expired |
| 21:31:17 | 132 | 6 | sell 1.34 J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr → SOL | failed | 44s | 1 | acquire J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr expired |
| 21:31:22 | 133 | 7 | sell 0.005 SOL → 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump | failed | 46s | 1 | main expired |
| 21:32:08 | 134 | 7 | sell 8.09 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump → SOL | failed | 86s | 1 | acquire 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump expired |
| 21:30:29 | 135 | 8 | sell 0.005 SOL → Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump | failed | 45s | 1 | main expired |
| 21:31:14 | 136 | 8 | sell 15.3 Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump → SOL | failed | 46s | 1 | acquire Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump expired |
| 21:30:44 | 137 | 9 | sell 0.005 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | failed | 45s | 1 | main expired |
| 21:31:29 | 138 | 9 | sell 0.000686 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ → SOL | failed | 0s | 0 | acquire Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ error: 404 Not Found: NoLiquidity: no route found |
| 21:31:05 | 139 | 10 | sell 0.005 SOL → GY9mZfyPpxXxBXBxS2hB2XjhP3kfUsywTvgveozxpump | failed | 45s | 1 | main expired |
| 21:31:50 | 140 | 10 | sell 1390 GY9mZfyPpxXxBXBxS2hB2XjhP3kfUsywTvgveozxpump → SOL | failed | 58s | 0 | acquire GY9mZfyPpxXxBXBxS2hB2XjhP3kfUsywTvgveozxpump error: 404 Not Found: NoLiquidity: no route found |
| 21:30:40 | 141 | 11 | sell 0.005 SOL → jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL | failed | 44s | 1 | main expired |
| 21:31:23 | 142 | 11 | sell 1 jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL → SOL | failed | 43s | 1 | acquire jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL expired |
| 21:30:25 | 143 | 12 | sell 0.005 SOL → zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k | failed | 45s | 1 | main expired |
| 21:31:10 | 144 | 12 | sell 674 zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k → SOL | failed | 0s | 0 | acquire zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k error: 404 Not Found: NoLiquidity: no route found |
| 21:30:30 | 145 | 13 | sell 0.005 SOL → SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 | failed | 45s | 1 | main expired |
| 21:31:14 | 146 | 13 | sell 32.3 SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 → SOL | failed | 43s | 1 | acquire SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 expired |
| 21:30:48 | 147 | 14 | sell 0.005 SOL → Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs | failed | 45s | 1 | main expired |
| 21:31:33 | 148 | 14 | sell 0.812 Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs → SOL | failed | 46s | 1 | acquire Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs expired |
| 21:30:44 | 149 | 15 | sell 0.005 SOL → USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA | failed | 45s | 1 | main expired |
| 21:31:29 | 150 | 15 | sell 0.522 USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA → SOL | failed | 44s | 1 | acquire USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA expired |
| 21:31:31 | 151 | 16 | sell 0.005 SOL → GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc | failed | 47s | 1 | main expired |
| 21:32:17 | 152 | 16 | sell 1.56 GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc → SOL | failed | 89s | 1 | acquire GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc expired |
| 21:30:35 | 153 | 17 | sell 0.005 SOL → 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu | failed | 45s | 1 | main expired |
| 21:31:20 | 154 | 17 | sell 1.76 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu → SOL | failed | 44s | 1 | acquire 7JA5eZdCzztSfQbJvS8aVVxMFfd81Rs9VvwnocV1mKHu expired |
| 21:29:58 | 155 | 18 | sell 0.005 SOL → BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T | failed | 45s | 1 | main expired |
| 21:30:43 | 156 | 18 | sell 0.0176 BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T → SOL | failed | 0s | 0 | acquire BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T error: 404 Not Found: NoLiquidity: no route found |
| 21:31:12 | 157 | 19 | sell 0.005 SOL → C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE | failed | 43s | 1 | main expired |
| 21:31:55 | 158 | 19 | sell 94 C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE → SOL | failed | 96s | 1 | acquire C1mBfBoDkwWfd6uTFZp62ARHLjeVp3bDpCDMfMZtPngE expired |
| 21:31:28 | 159 | 20 | sell 0.005 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | failed | 44s | 1 | main expired |
| 21:32:13 | 160 | 20 | sell 0.00072 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu → SOL | failed | 39s | 0 | acquire Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu error: 404 Not Found: NoLiquidity: no route found |
| 21:30:35 | 161 | 21 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 46s | 1 | main expired |
| 21:31:21 | 162 | 21 | sell 0.00319 mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So → SOL | failed | 44s | 1 | acquire mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So expired |
| 21:31:16 | 163 | 22 | sell 0.005 SOL → 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs | failed | 45s | 1 | main expired |
| 21:32:01 | 164 | 22 | sell 6.05 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs → SOL | failed | 92s | 1 | acquire 4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs expired |
| 21:29:36 | 165 | 23 | sell 0.005 SOL → 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump | failed | 47s | 1 | main expired |
| 21:30:22 | 166 | 23 | sell 180 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump → SOL | failed | 0s | 0 | acquire 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump error: 404 Not Found: NoLiquidity: no route found |
| 21:31:18 | 167 | 24 | sell 0.005 SOL → oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp | failed | 45s | 1 | main expired |
| 21:32:02 | 168 | 24 | sell 0.00451 oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp → SOL | failed | 111s | 1 | acquire oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp expired |
| 21:30:01 | 169 | 25 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 44s | 1 | main expired |
| 21:30:44 | 170 | 25 | sell 0.00139 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re → SOL | failed | 0s | 0 | acquire Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re error: 404 Not Found: NoLiquidity: no route found |
| 21:30:24 | 171 | 26 | sell 0.005 SOL → G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG | failed | 44s | 1 | main expired |
| 21:31:08 | 172 | 26 | sell 8.84 G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG → SOL | failed | 45s | 1 | acquire G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG expired |
| 21:30:45 | 173 | 27 | sell 0.005 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | failed | 46s | 1 | main expired |
| 21:31:31 | 174 | 27 | sell 0.00098 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX → SOL | failed | 0s | 0 | acquire XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX error: 404 Not Found: NoLiquidity: no route found |
| 21:31:18 | 175 | 28 | sell 0.005 SOL → DKu9kykSfbN5LBfFXtNNDPaX35o4Fv6vJ9FKk7pZpump | failed | 45s | 1 | main expired |
| 21:32:03 | 176 | 28 | sell 56.4 DKu9kykSfbN5LBfFXtNNDPaX35o4Fv6vJ9FKk7pZpump → SOL | failed | 78s | 1 | acquire DKu9kykSfbN5LBfFXtNNDPaX35o4Fv6vJ9FKk7pZpump expired |
| 21:30:30 | 177 | 29 | sell 0.005 SOL → Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump | failed | 45s | 1 | main expired |
| 21:31:15 | 178 | 29 | sell 62.8 Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump → SOL | failed | 0s | 0 | acquire Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump error: 404 Not Found: NoLiquidity: no route found |
| 21:29:48 | 179 | 30 | sell 0.005 SOL → 9aqmJjCnnMQv42TXLk921ceUkN35nea2QP969n1caqjj | failed | 52s | 1 | main expired |
| 21:30:40 | 180 | 30 | sell 547 9aqmJjCnnMQv42TXLk921ceUkN35nea2QP969n1caqjj → SOL | failed | 0s | 0 | acquire 9aqmJjCnnMQv42TXLk921ceUkN35nea2QP969n1caqjj error: 404 Not Found: NoLiquidity: no route found |
| 21:33:15 | 181 | 1 | sell 0.005 SOL → DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF | failed | 44s | 1 | main expired |
| 21:33:59 | 182 | 1 | sell 0.0633 DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF → SOL | failed | 0s | 0 | acquire DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF error: 404 Not Found: NoLiquidity: no route found |
| 21:33:32 | 183 | 2 | sell 0.005 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | failed | 45s | 1 | main expired |
| 21:34:17 | 184 | 2 | sell 0.00149 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN → SOL | failed | 0s | 0 | acquire XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN error: 404 Not Found: NoLiquidity: no route found |
| 21:31:20 | 185 | 3 | sell 0.005 SOL → JDzPbXboQYWVmdxXS3LbvjM52RtsV1QaSv2AzoCiai2o | failed | 44s | 1 | main expired |
| 21:32:04 | 186 | 3 | sell 3.7 JDzPbXboQYWVmdxXS3LbvjM52RtsV1QaSv2AzoCiai2o → SOL | failed | 49s | 0 | acquire JDzPbXboQYWVmdxXS3LbvjM52RtsV1QaSv2AzoCiai2o error: 404 Not Found: NoLiquidity: no route found |
| 21:32:57 | 187 | 4 | sell 0.005 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | failed | 44s | 1 | main expired |
| 21:33:41 | 188 | 4 | sell 0.00292 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu → SOL | failed | 0s | 0 | acquire Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu error: 404 Not Found: NoLiquidity: no route found |
| 21:31:05 | 189 | 5 | sell 0.005 SOL → DoVAVzViX8Bjy3r15nwikSaSbzE6dV4ovd28aWpJpump | failed | 45s | 1 | main expired |
| 21:31:49 | 190 | 5 | sell 407 DoVAVzViX8Bjy3r15nwikSaSbzE6dV4ovd28aWpJpump → SOL | failed | 60s | 0 | acquire DoVAVzViX8Bjy3r15nwikSaSbzE6dV4ovd28aWpJpump error: 404 Not Found: NoLiquidity: no route found |
| 21:32:35 | 191 | 6 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 57s | 1 | main expired |
| 21:33:33 | 192 | 6 | sell 10.7 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr → SOL | failed | 45s | 1 | acquire 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr expired |
| 21:33:35 | 193 | 7 | sell 0.005 SOL → HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump | failed | 45s | 1 | main expired |
| 21:34:20 | 194 | 7 | sell 11.6 HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump → SOL | failed | 44s | 1 | acquire HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump expired |
| 21:33:08 | 195 | 8 | sell 0.005 SOL → 8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn | failed | 43s | 1 | main expired |
| 21:33:52 | 196 | 8 | sell 17.7 8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn → SOL | failed | 44s | 1 | acquire 8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn expired |
| 21:31:30 | 197 | 9 | sell 0.005 SOL → BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump | failed | 44s | 1 | main expired |
| 21:32:14 | 198 | 9 | sell 343 BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump → SOL | failed | 10s | 0 | acquire BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump error: 404 Not Found: NoLiquidity: no route found |
| 21:32:48 | 199 | 10 | sell 0.005 SOL → PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b | failed | 46s | 1 | main expired |
| 21:33:34 | 200 | 10 | sell 13.1 PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b → SOL | failed | 45s | 1 | acquire PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b expired |
| 21:33:09 | 201 | 11 | sell 0.005 SOL → BXoHJddsWJLHtAopeiSbKUSELsu8hSFMs8baGMDkpump | failed | 44s | 1 | main expired |
| 21:33:53 | 202 | 11 | sell 141 BXoHJddsWJLHtAopeiSbKUSELsu8hSFMs8baGMDkpump → SOL | failed | 0s | 0 | acquire BXoHJddsWJLHtAopeiSbKUSELsu8hSFMs8baGMDkpump error: 404 Not Found: NoLiquidity: no route found |
| 21:31:10 | 203 | 12 | sell 0.005 SOL → 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 | failed | 44s | 1 | main expired |
| 21:31:54 | 204 | 12 | sell 0.364 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 → SOL | failed | 102s | 1 | acquire 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 expired |
| 21:32:26 | 205 | 13 | sell 0.005 SOL → DpBzjtgGLF7QA9Ug3eUVGbnqa6j3jvYBn1XuQuktvfhm | failed | 61s | 1 | main expired |
| 21:33:28 | 206 | 13 | sell 7230 DpBzjtgGLF7QA9Ug3eUVGbnqa6j3jvYBn1XuQuktvfhm → SOL | failed | 0s | 0 | acquire DpBzjtgGLF7QA9Ug3eUVGbnqa6j3jvYBn1XuQuktvfhm error: 404 Not Found: NoLiquidity: no route found |
| 21:32:34 | 207 | 14 | sell 0.005 SOL → Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump | failed | 55s | 1 | main expired |
| 21:33:29 | 208 | 14 | sell 29.9 Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump → SOL | failed | 45s | 1 | acquire Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump expired |
| 21:32:36 | 209 | 15 | sell 0.005 SOL → 2bpT3ksMdwdZ6DuHyq3FDUr7HDwvZ5DRZoT1fUPALJaH | failed | 53s | 1 | main expired |
| 21:33:29 | 210 | 15 | sell 130 2bpT3ksMdwdZ6DuHyq3FDUr7HDwvZ5DRZoT1fUPALJaH → SOL | failed | 0s | 0 | acquire 2bpT3ksMdwdZ6DuHyq3FDUr7HDwvZ5DRZoT1fUPALJaH error: 404 Not Found: NoLiquidity: no route found |
| 21:33:47 | 211 | 16 | sell 0.005 SOL → 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS | failed | 44s | 1 | main expired |
| 21:34:31 | 212 | 16 | sell 114 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS → SOL | failed | 45s | 1 | acquire 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS expired |
| 21:33:07 | 213 | 17 | sell 0.005 SOL → hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux | failed | 43s | 1 | main expired |
| 21:33:50 | 214 | 17 | sell 0.981 hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux → SOL | failed | 48s | 1 | acquire hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux expired |
| 21:30:43 | 215 | 18 | sell 0.005 SOL → 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC | failed | 44s | 1 | main expired |
| 21:31:27 | 216 | 18 | sell 0.498 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC → SOL | failed | 45s | 1 | acquire 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC expired |
| 21:33:32 | 217 | 19 | sell 0.005 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | failed | 45s | 1 | main expired |
| 21:34:16 | 218 | 19 | sell 0.0212 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc → SOL | failed | 0s | 0 | acquire Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc error: 404 Not Found: NoLiquidity: no route found |
| 21:32:51 | 219 | 20 | sell 0.005 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | failed | 46s | 1 | main expired |
| 21:33:38 | 220 | 20 | sell 0.00475 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg → SOL | failed | 0s | 0 | acquire XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg error: 404 Not Found: NoLiquidity: no route found |
| 21:32:26 | 221 | 21 | sell 0.005 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | failed | 64s | 1 | main expired |
| 21:33:30 | 222 | 21 | sell 0.00155 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp → SOL | failed | 0s | 0 | acquire XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp error: 404 Not Found: NoLiquidity: no route found |
| 21:33:33 | 223 | 22 | sell 0.005 SOL → PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL | failed | 45s | 1 | main expired |
| 21:34:19 | 224 | 22 | sell 216 PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL → SOL | failed | 45s | 1 | acquire PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL expired |
| 21:30:23 | 225 | 23 | sell 0.005 SOL → D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n | failed | 45s | 1 | main expired |
| 21:31:08 | 226 | 23 | sell 1810 D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n → SOL | failed | 44s | 1 | acquire D1YZZg9dBZ7AbfknZVbaeVLto36eySwoFYEVhZrD4F4n expired |
| 21:33:54 | 227 | 24 | sell 0.005 SOL → Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump | failed | 45s | 1 | main expired |
| 21:34:39 | 228 | 24 | sell 43.8 Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump → SOL | failed | 49s | 1 | acquire Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump expired |
| 21:30:45 | 229 | 25 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 45s | 1 | main expired |
| 21:31:30 | 230 | 25 | sell 1060 MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 → SOL | failed | 44s | 1 | acquire MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 expired |
| 21:32:59 | 231 | 26 | sell 0.005 SOL → 5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump | failed | 44s | 1 | main expired |
| 21:33:43 | 232 | 26 | sell 321 5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump → SOL | failed | 0s | 0 | acquire 5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump error: 404 Not Found: NoLiquidity: no route found |
| 21:31:31 | 233 | 27 | sell 0.005 SOL → KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP | failed | 44s | 1 | main expired |
| 21:32:15 | 234 | 27 | sell 30.2 KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP → SOL | failed | 90s | 1 | acquire KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP expired |
| 21:33:21 | 235 | 28 | sell 0.005 SOL → rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof | failed | 44s | 1 | main expired |
| 21:34:05 | 236 | 28 | sell 0.256 rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof → SOL | failed | 43s | 1 | acquire rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof expired |
| 21:31:15 | 237 | 29 | sell 0.005 SOL → DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 | failed | 46s | 1 | main expired |
| 21:32:00 | 238 | 29 | sell 61.1 DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 → SOL | failed | 93s | 1 | acquire DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 expired |
| 21:30:41 | 239 | 30 | sell 0.005 SOL → 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx | failed | 45s | 1 | main expired |
| 21:31:26 | 240 | 30 | sell 0.232 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx → SOL | failed | 44s | 1 | acquire 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx expired |
| 21:34:00 | 241 | 1 | sell 0.005 SOL → METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta | failed | 44s | 1 | main expired |
| 21:34:43 | 242 | 1 | sell 0.0867 METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta → SOL | failed | 48s | 1 | acquire METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta expired |
| 21:34:18 | 243 | 2 | sell 0.005 SOL → SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq | failed | 45s | 1 | main expired |
| 21:35:03 | 244 | 2 | sell 8.74 SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq → SOL | failed | 49s | 1 | acquire SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq expired |
| 21:32:53 | 245 | 3 | sell 0.005 SOL → Tqj8yFmagrg7oorpQkVGYR52r96RFTamvWfth9bpump | failed | 43s | 1 | main expired |
| 21:33:36 | 246 | 3 | sell 808 Tqj8yFmagrg7oorpQkVGYR52r96RFTamvWfth9bpump → SOL | failed | 0s | 0 | acquire Tqj8yFmagrg7oorpQkVGYR52r96RFTamvWfth9bpump error: 404 Not Found: NoLiquidity: no route found |
| 21:33:41 | 247 | 4 | sell 0.005 SOL → CortexFv3fRcLKTgACr7aLqckGh5eP7TP3z9JHoKqMc6 | failed | 44s | 1 | main expired |
| 21:34:25 | 248 | 4 | sell 15.2 CortexFv3fRcLKTgACr7aLqckGh5eP7TP3z9JHoKqMc6 → SOL | failed | 50s | 1 | acquire CortexFv3fRcLKTgACr7aLqckGh5eP7TP3z9JHoKqMc6 expired |
| 21:32:49 | 249 | 5 | sell 0.005 SOL → EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 | failed | 45s | 1 | main expired |
| 21:33:35 | 250 | 5 | sell 433 EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 → SOL | failed | 0s | 0 | acquire EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 error: 404 Not Found: NoLiquidity: no route found |
| 21:34:17 | 251 | 6 | sell 0.005 SOL → 8k4sBtEeK4pf26noKqApv8NBTnuSJcbdwpKYknk5PbAA | failed | 45s | 1 | main expired |
| 21:35:02 | 252 | 6 | sell 439 8k4sBtEeK4pf26noKqApv8NBTnuSJcbdwpKYknk5PbAA → SOL | failed | 0s | 0 | acquire 8k4sBtEeK4pf26noKqApv8NBTnuSJcbdwpKYknk5PbAA error: 404 Not Found: NoLiquidity: no route found |
| 21:35:05 | 253 | 7 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 49s | 1 | main expired |
| 21:35:54 | 254 | 7 | sell 0.0031 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm → SOL | failed | 50s | 1 | acquire 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm expired |
| 21:34:36 | 255 | 8 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 44s | 1 | main expired |
| 21:35:20 | 256 | 8 | sell 0.000126 AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P → SOL | failed | 49s | 1 | acquire AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P expired |
| 21:32:26 | 257 | 9 | sell 0.005 SOL → ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU | failed | 67s | 1 | main expired |
| 21:33:33 | 258 | 9 | sell 217 ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU → SOL | failed | 45s | 1 | acquire ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU expired |
| 21:34:19 | 259 | 10 | sell 0.005 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | failed | 45s | 1 | main expired |
| 21:35:04 | 260 | 10 | sell 0.00221 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 → SOL | failed | 0s | 0 | acquire XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 error: 404 Not Found: NoLiquidity: no route found |
| 21:33:53 | 261 | 11 | sell 0.005 SOL → CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn | failed | 44s | 1 | main expired |
| 21:34:37 | 262 | 11 | sell 6.25e-06 CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn → SOL | failed | 48s | 1 | acquire CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn expired |
| 21:33:36 | 263 | 12 | sell 0.005 SOL → FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump | failed | 46s | 1 | main expired |
| 21:34:22 | 264 | 12 | sell 1210 FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump → SOL | failed | 0s | 0 | acquire FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump error: 404 Not Found: NoLiquidity: no route found |
| 21:33:28 | 265 | 13 | sell 0.005 SOL → FeR8VBqNRSUD5NtXAj2n3j1dAHkZHfyDktKuLXD4pump | failed | 45s | 1 | main expired |
| 21:34:13 | 266 | 13 | sell 9.59 FeR8VBqNRSUD5NtXAj2n3j1dAHkZHfyDktKuLXD4pump → SOL | failed | 43s | 1 | acquire FeR8VBqNRSUD5NtXAj2n3j1dAHkZHfyDktKuLXD4pump expired |
| 21:34:14 | 267 | 14 | sell 0.005 SOL → ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY | failed | 45s | 1 | main expired |
| 21:34:58 | 268 | 14 | sell 12.2 ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY → SOL | failed | 48s | 1 | acquire ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY expired |
| 21:33:29 | 269 | 15 | sell 0.005 SOL → 42cXQvAAr7hcPBPWAS4ocVtDyeJ4Fa6gRR2uG4gppump | failed | 45s | 1 | main expired |
| 21:34:15 | 270 | 15 | sell 65 42cXQvAAr7hcPBPWAS4ocVtDyeJ4Fa6gRR2uG4gppump → SOL | failed | 0s | 0 | acquire 42cXQvAAr7hcPBPWAS4ocVtDyeJ4Fa6gRR2uG4gppump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:15 | 271 | 16 | sell 0.005 SOL → METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m | failed | 44s | 1 | main expired |
| 21:36:00 | 272 | 16 | sell 9.7 METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m → SOL | failed | 45s | 1 | acquire METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m expired |
| 21:34:38 | 273 | 17 | sell 0.005 SOL → 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump | failed | 48s | 1 | main expired |
| 21:35:26 | 274 | 17 | sell 10.6 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump → SOL | failed | 48s | 1 | acquire 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump expired |
| 21:33:00 | 275 | 18 | sell 0.005 SOL → 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump | failed | 45s | 1 | main expired |
| 21:33:46 | 276 | 18 | sell 66.3 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump → SOL | failed | 44s | 1 | acquire 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump expired |
| 21:34:16 | 277 | 19 | sell 0.005 SOL → HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd | failed | 44s | 1 | main expired |
| 21:35:00 | 278 | 19 | sell 98.2 HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd → SOL | failed | 0s | 0 | acquire HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd error: 404 Not Found: NoLiquidity: no route found |
| 21:33:38 | 279 | 20 | sell 0.005 SOL → LBTCgU4b3wsFKsPwBn1rRZDx5DoFutM6RPiEt1TPDsY | failed | 45s | 1 | main expired |
| 21:34:23 | 280 | 20 | sell 6.23e-06 LBTCgU4b3wsFKsPwBn1rRZDx5DoFutM6RPiEt1TPDsY → SOL | failed | 4s | 0 | acquire LBTCgU4b3wsFKsPwBn1rRZDx5DoFutM6RPiEt1TPDsY error: 404 Not Found: NoLiquidity: no route found |
| 21:33:30 | 281 | 21 | sell 0.005 SOL → HKZDfZnkHZxd9agRDNPyDv4iT6LmAurJnpRtj9wpump | failed | 45s | 1 | main expired |
| 21:34:15 | 282 | 21 | sell 102 HKZDfZnkHZxd9agRDNPyDv4iT6LmAurJnpRtj9wpump → SOL | failed | 0s | 0 | acquire HKZDfZnkHZxd9agRDNPyDv4iT6LmAurJnpRtj9wpump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:03 | 283 | 22 | sell 0.005 SOL → Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu | failed | 49s | 1 | main expired |
| 21:35:53 | 284 | 22 | sell 38.3 Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu → SOL | failed | 0s | 0 | acquire Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu error: 404 Not Found: NoLiquidity: no route found |
| 21:33:06 | 285 | 23 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 46s | 1 | main expired |
| 21:33:52 | 286 | 23 | sell 0.00409 pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL → SOL | failed | 44s | 1 | acquire pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL expired |
| 21:35:28 | 287 | 24 | sell 0.005 SOL → TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo | failed | 44s | 1 | main expired |
| 21:36:12 | 288 | 24 | sell 0.00255 TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo → SOL | failed | 0s | 0 | acquire TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo error: 404 Not Found: NoLiquidity: no route found |
| 21:32:57 | 289 | 25 | sell 0.005 SOL → DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw | failed | 44s | 1 | main expired |
| 21:33:41 | 290 | 25 | sell 0.00869 DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw → SOL | failed | 0s | 0 | acquire DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw error: 404 Not Found: NoLiquidity: no route found |
| 21:33:43 | 291 | 26 | sell 0.005 SOL → CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu | failed | 44s | 1 | main expired |
| 21:34:27 | 292 | 26 | sell 8.35 CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu → SOL | failed | 50s | 1 | acquire CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu expired |
| 21:33:44 | 293 | 27 | sell 0.005 SOL → J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd | failed | 48s | 1 | main expired |
| 21:34:32 | 294 | 27 | sell 13.5 J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd → SOL | failed | 45s | 1 | acquire J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd expired |
| 21:34:49 | 295 | 28 | sell 0.005 SOL → CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta | failed | 48s | 1 | main expired |
| 21:35:37 | 296 | 28 | sell 0.662 CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta → SOL | failed | 45s | 1 | acquire CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta expired |
| 21:33:34 | 297 | 29 | sell 0.005 SOL → 3Dgwn5E7H5a8k6iGrz3qirkaJqUaJrKHEZ2xPcLRpump | failed | 45s | 1 | main expired |
| 21:34:19 | 298 | 29 | sell 566 3Dgwn5E7H5a8k6iGrz3qirkaJqUaJrKHEZ2xPcLRpump → SOL | failed | 0s | 0 | acquire 3Dgwn5E7H5a8k6iGrz3qirkaJqUaJrKHEZ2xPcLRpump error: 404 Not Found: NoLiquidity: no route found |
| 21:32:25 | 299 | 30 | sell 0.005 SOL → GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump | failed | 63s | 1 | main expired |
| 21:33:27 | 300 | 30 | sell 50.8 GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump → SOL | failed | 44s | 1 | acquire GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump expired |
| 21:35:32 | 301 | 1 | sell 0.005 SOL → 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump | failed | 48s | 1 | main expired |
| 21:36:20 | 302 | 1 | sell 64 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump → SOL | failed | 43s | 1 | acquire 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump expired |
| 21:35:52 | 303 | 2 | sell 0.005 SOL → bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 | failed | 49s | 1 | main expired |
| 21:36:42 | 304 | 2 | sell 0.00341 bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 → SOL | failed | 45s | 1 | acquire bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 expired |
| 21:33:36 | 305 | 3 | sell 0.005 SOL → CreiuhfwdWCN5mJbMJtA9bBpYQrQF2tCBuZwSPWfpump | failed | 46s | 1 | main expired |
| 21:34:22 | 306 | 3 | sell 434 CreiuhfwdWCN5mJbMJtA9bBpYQrQF2tCBuZwSPWfpump → SOL | failed | 51s | 1 | acquire CreiuhfwdWCN5mJbMJtA9bBpYQrQF2tCBuZwSPWfpump expired |
| 21:35:15 | 307 | 4 | sell 0.005 SOL → C8fU5GdfAt5mnw2RK7HE6XJGFNxHpaskZMkXxdm88888 | failed | 49s | 1 | main expired |
| 21:36:04 | 308 | 4 | sell 2.38 C8fU5GdfAt5mnw2RK7HE6XJGFNxHpaskZMkXxdm88888 → SOL | failed | 0s | 0 | acquire C8fU5GdfAt5mnw2RK7HE6XJGFNxHpaskZMkXxdm88888 error: 404 Not Found: NoLiquidity: no route found |
| 21:33:35 | 309 | 5 | sell 0.005 SOL → GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump | failed | 45s | 1 | main expired |
| 21:34:20 | 310 | 5 | sell 373 GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump → SOL | failed | 0s | 0 | acquire GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:02 | 311 | 6 | sell 0.005 SOL → 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z | failed | 48s | 1 | main expired |
| 21:35:51 | 312 | 6 | sell 3.09 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z → SOL | failed | 45s | 1 | acquire 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z expired |
| 21:36:44 | 313 | 7 | sell 0.005 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | failed | 45s | 1 | main expired |
| 21:37:29 | 314 | 7 | sell 0.00201 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg → SOL | failed | 0s | 0 | acquire Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg error: 404 Not Found: NoLiquidity: no route found |
| 21:36:09 | 315 | 8 | sell 0.005 SOL → ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs | failed | 44s | 1 | main expired |
| 21:36:53 | 316 | 8 | sell 1.93 ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs → SOL | failed | 0s | 0 | acquire ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs error: 404 Not Found: NoLiquidity: no route found |
| 21:34:18 | 317 | 9 | sell 0.005 SOL → HcfnJxLov6tY8i1dq9uYRRZKCvxADPpovcfkyXzdpump | failed | 45s | 1 | main expired |
| 21:35:03 | 318 | 9 | sell 172 HcfnJxLov6tY8i1dq9uYRRZKCvxADPpovcfkyXzdpump → SOL | failed | 0s | 0 | acquire HcfnJxLov6tY8i1dq9uYRRZKCvxADPpovcfkyXzdpump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:04 | 319 | 10 | sell 0.005 SOL → 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 | failed | 49s | 1 | main expired |
| 21:35:53 | 320 | 10 | sell 254 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 → SOL | failed | 45s | 1 | acquire 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 expired |
| 21:35:26 | 321 | 11 | sell 0.005 SOL → 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw | failed | 44s | 1 | main expired |
| 21:36:10 | 322 | 11 | sell 0.459 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw → SOL | failed | 44s | 1 | acquire 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw expired |
| 21:34:25 | 323 | 12 | sell 0.005 SOL → 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump | failed | 47s | 1 | main expired |
| 21:35:11 | 324 | 12 | sell 314 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump → SOL | failed | 0s | 0 | acquire 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump error: 404 Not Found: NoLiquidity: no route found |
| 21:34:56 | 325 | 13 | sell 0.005 SOL → 9PR7nCP9DpcUotnDPVLUBUZKu5WAYkwrCUx9wDnSpump | failed | 48s | 1 | main expired |
| 21:35:44 | 326 | 13 | sell 7.98 9PR7nCP9DpcUotnDPVLUBUZKu5WAYkwrCUx9wDnSpump → SOL | failed | 45s | 1 | acquire 9PR7nCP9DpcUotnDPVLUBUZKu5WAYkwrCUx9wDnSpump expired |
| 21:35:46 | 327 | 14 | sell 0.005 SOL → H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump | failed | 45s | 1 | main expired |
| 21:36:31 | 328 | 14 | sell 227 H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump → SOL | failed | 0s | 0 | acquire H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump error: 404 Not Found: NoLiquidity: no route found |
| 21:34:15 | 329 | 15 | sell 0.005 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | failed | 44s | 1 | main expired |
| 21:34:59 | 330 | 15 | sell 0.0048 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH → SOL | failed | 0s | 0 | acquire Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH error: 404 Not Found: NoLiquidity: no route found |
| 21:36:47 | 331 | 16 | sell 0.005 SOL → NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg | failed | 45s | 1 | main expired |
| 21:37:31 | 332 | 16 | sell 0.0153 NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg → SOL | failed | 0s | 0 | acquire NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg error: 404 Not Found: NoLiquidity: no route found |
| 21:36:15 | 333 | 17 | sell 0.005 SOL → SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH | failed | 47s | 1 | main expired |
| 21:37:02 | 334 | 17 | sell 0.00726 SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH → SOL | failed | 45s | 1 | acquire SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH expired |
| 21:34:30 | 335 | 18 | sell 0.005 SOL → HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx | failed | 48s | 1 | main expired |
| 21:35:18 | 336 | 18 | sell 0.0177 HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx → SOL | failed | 0s | 0 | acquire HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx error: 404 Not Found: NoLiquidity: no route found |
| 21:35:00 | 337 | 19 | sell 0.005 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | failed | 49s | 1 | main expired |
| 21:35:49 | 338 | 19 | sell 0.0027 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | failed | 0s | 0 | acquire XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 error: 404 Not Found: NoLiquidity: no route found |
| 21:34:28 | 339 | 20 | sell 0.005 SOL → 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump | failed | 50s | 1 | main expired |
| 21:35:18 | 340 | 20 | sell 70 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump → SOL | failed | 0s | 0 | acquire 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump error: 404 Not Found: NoLiquidity: no route found |
| 21:34:15 | 341 | 21 | sell 0.005 SOL → BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin | failed | 45s | 1 | main expired |
| 21:35:00 | 342 | 21 | sell 13.7 BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin → SOL | failed | 49s | 1 | acquire BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin expired |
| 21:35:53 | 343 | 22 | sell 0.005 SOL → 4ChT49V1iazP2XUGtycGkEsS6pRMqvGfUbqvRC9Z91ZT | failed | 46s | 1 | main expired |
| 21:36:39 | 344 | 22 | sell 2900 4ChT49V1iazP2XUGtycGkEsS6pRMqvGfUbqvRC9Z91ZT → SOL | failed | 0s | 0 | acquire 4ChT49V1iazP2XUGtycGkEsS6pRMqvGfUbqvRC9Z91ZT error: 404 Not Found: NoLiquidity: no route found |
| 21:34:36 | 345 | 23 | sell 0.005 SOL → nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 | failed | 49s | 1 | main expired |
| 21:35:25 | 346 | 23 | sell 0.887 nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 → SOL | failed | 48s | 1 | acquire nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 expired |
| 21:36:12 | 347 | 24 | sell 0.005 SOL → 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ | failed | 48s | 1 | main expired |
| 21:37:00 | 348 | 24 | sell 6.23e-06 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ → SOL | failed | 45s | 1 | acquire 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ expired |
| 21:33:41 | 349 | 25 | sell 0.005 SOL → CzLSujWBLFsSjncfkh59rUFqvafWcY5tzedWJSuypump | failed | 44s | 1 | main expired |
| 21:34:25 | 350 | 25 | sell 30.4 CzLSujWBLFsSjncfkh59rUFqvafWcY5tzedWJSuypump → SOL | failed | 46s | 1 | acquire CzLSujWBLFsSjncfkh59rUFqvafWcY5tzedWJSuypump expired |
| 21:35:18 | 351 | 26 | sell 0.005 SOL → CGEDT9QZDvvH5GmVkWJH2BXiMJqMJySC9ihWyr7Spump | failed | 49s | 1 | main expired |
| 21:36:06 | 352 | 26 | sell 388 CGEDT9QZDvvH5GmVkWJH2BXiMJqMJySC9ihWyr7Spump → SOL | failed | 0s | 0 | acquire CGEDT9QZDvvH5GmVkWJH2BXiMJqMJySC9ihWyr7Spump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:17 | 353 | 27 | sell 0.005 SOL → 8nnaeWCw8mUypcGAgbmSuzAT85uWx4UN12adDrMhXrGF | failed | 45s | 1 | main expired |
| 21:36:02 | 354 | 27 | sell 358 8nnaeWCw8mUypcGAgbmSuzAT85uWx4UN12adDrMhXrGF → SOL | failed | 0s | 0 | acquire 8nnaeWCw8mUypcGAgbmSuzAT85uWx4UN12adDrMhXrGF error: 404 Not Found: NoLiquidity: no route found |
| 21:36:22 | 355 | 28 | sell 0.005 SOL → 6dX5M8DY6VTFtVRX5yzWn9RE4MkJTyoAVbAodk6cpump | failed | 43s | 1 | main expired |
| 21:37:05 | 356 | 28 | sell 195 6dX5M8DY6VTFtVRX5yzWn9RE4MkJTyoAVbAodk6cpump → SOL | failed | 0s | 0 | acquire 6dX5M8DY6VTFtVRX5yzWn9RE4MkJTyoAVbAodk6cpump error: 404 Not Found: NoLiquidity: no route found |
| 21:34:20 | 357 | 29 | sell 0.005 SOL → HooDYv5RewLRiMLnEVq3VJqdqxhuE6c5eYvqejMC3e9A | failed | 45s | 1 | main expired |
| 21:35:04 | 358 | 29 | sell 0.00476 HooDYv5RewLRiMLnEVq3VJqdqxhuE6c5eYvqejMC3e9A → SOL | failed | 0s | 0 | acquire HooDYv5RewLRiMLnEVq3VJqdqxhuE6c5eYvqejMC3e9A error: 404 Not Found: NoLiquidity: no route found |
| 21:34:11 | 359 | 30 | sell 0.005 SOL → GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A | failed | 44s | 1 | main expired |
| 21:34:55 | 360 | 30 | sell 0.000125 GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A → SOL | failed | 0s | 0 | acquire GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A error: 404 Not Found: NoLiquidity: no route found |
| 21:37:03 | 361 | 1 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 45s | 1 | main expired |
| 21:37:48 | 362 | 1 | sell 0.000676 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa → SOL | failed | 45s | 1 | acquire 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa expired |
| 21:37:27 | 363 | 2 | sell 0.005 SOL → 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump | failed | 45s | 1 | main expired |
| 21:38:11 | 364 | 2 | sell 58 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump → SOL | failed | 0s | 0 | acquire 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:13 | 365 | 3 | sell 0.005 SOL → XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump | failed | 44s | 1 | main expired |
| 21:35:58 | 366 | 3 | sell 305 XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump → SOL | failed | 0s | 0 | acquire XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump error: 404 Not Found: NoLiquidity: no route found |
| 21:36:04 | 367 | 4 | sell 0.005 SOL → 3iQL8BFS2vE7mww4ehAqQHAsbmRNCrPxizWAT2Zfyr9y | failed | 44s | 1 | main expired |
| 21:36:48 | 368 | 4 | sell 0.677 3iQL8BFS2vE7mww4ehAqQHAsbmRNCrPxizWAT2Zfyr9y → SOL | failed | 44s | 1 | acquire 3iQL8BFS2vE7mww4ehAqQHAsbmRNCrPxizWAT2Zfyr9y expired |
| 21:34:20 | 369 | 5 | sell 0.005 SOL → AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 | failed | 45s | 1 | main expired |
| 21:35:05 | 370 | 5 | sell 0.003 AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 → SOL | failed | 51s | 1 | acquire AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 expired |
| 21:36:35 | 371 | 6 | sell 0.005 SOL → HgBRWfYxEfvPhtqkaeymCQtHCrKE46qQ43pKe8HCpump | failed | 45s | 1 | main expired |
| 21:37:21 | 372 | 6 | sell 40.2 HgBRWfYxEfvPhtqkaeymCQtHCrKE46qQ43pKe8HCpump → SOL | failed | 45s | 1 | acquire HgBRWfYxEfvPhtqkaeymCQtHCrKE46qQ43pKe8HCpump expired |
| 21:37:29 | 373 | 7 | sell 0.005 SOL → 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk | failed | 44s | 1 | main expired |
| 21:38:13 | 374 | 7 | sell 0.979 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk → SOL | failed | 44s | 1 | acquire 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk expired |
| 21:36:54 | 375 | 8 | sell 0.005 SOL → 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 | failed | 43s | 1 | main expired |
| 21:37:37 | 376 | 8 | sell 2.29 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 → SOL | failed | 42s | 1 | acquire 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 expired |
| 21:35:04 | 377 | 9 | sell 0.005 SOL → MSTRdWXMeZxdE8osAQy3fA4rvTY5rgummDSMEx6U7Nz | failed | 49s | 1 | main expired |
| 21:35:52 | 378 | 9 | sell 0.00338 MSTRdWXMeZxdE8osAQy3fA4rvTY5rgummDSMEx6U7Nz → SOL | failed | 0s | 0 | acquire MSTRdWXMeZxdE8osAQy3fA4rvTY5rgummDSMEx6U7Nz error: 404 Not Found: NoLiquidity: no route found |
| 21:36:39 | 379 | 10 | sell 0.005 SOL → AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc | failed | 46s | 1 | main expired |
| 21:37:25 | 380 | 10 | sell 0.181 AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc → SOL | failed | 0s | 0 | acquire AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc error: 404 Not Found: NoLiquidity: no route found |
| 21:36:54 | 381 | 11 | sell 0.005 SOL → EmcxFTNVDqyLHp11NvwvLZ4D7LKGbG9i7B8RF7dwpump | failed | 43s | 1 | main expired |
| 21:37:37 | 382 | 11 | sell 1040 EmcxFTNVDqyLHp11NvwvLZ4D7LKGbG9i7B8RF7dwpump → SOL | failed | 0s | 0 | acquire EmcxFTNVDqyLHp11NvwvLZ4D7LKGbG9i7B8RF7dwpump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:12 | 383 | 12 | sell 0.005 SOL → 4TyZGqRLG3VcHTGMcLBoPUmqYitMVojXinAmkL8xpump | failed | 44s | 1 | main expired |
| 21:35:56 | 384 | 12 | sell 1980 4TyZGqRLG3VcHTGMcLBoPUmqYitMVojXinAmkL8xpump → SOL | failed | 0s | 0 | acquire 4TyZGqRLG3VcHTGMcLBoPUmqYitMVojXinAmkL8xpump error: 404 Not Found: NoLiquidity: no route found |
| 21:36:29 | 385 | 13 | sell 0.005 SOL → 8wxkvAfEns76yBzu4MnbV7VnXWjg3iDPA9uwAQ6cpump | failed | 46s | 1 | main expired |
| 21:37:16 | 386 | 13 | sell 525 8wxkvAfEns76yBzu4MnbV7VnXWjg3iDPA9uwAQ6cpump → SOL | failed | 0s | 0 | acquire 8wxkvAfEns76yBzu4MnbV7VnXWjg3iDPA9uwAQ6cpump error: 404 Not Found: NoLiquidity: no route found |
| 21:36:31 | 387 | 14 | sell 0.005 SOL → C1MHyoTJpRTeS9AQCyspNVu2EWAYCZwmJ1jNkEArFP1f | failed | 46s | 1 | main expired |
| 21:37:17 | 388 | 14 | sell 3.52 C1MHyoTJpRTeS9AQCyspNVu2EWAYCZwmJ1jNkEArFP1f → SOL | failed | 43s | 1 | acquire C1MHyoTJpRTeS9AQCyspNVu2EWAYCZwmJ1jNkEArFP1f expired |
| 21:34:59 | 389 | 15 | sell 0.005 SOL → EN2nnxrg8uUi6x2sJkzNPd2eT6rB9rdSoQNNaENA4RZA | failed | 48s | 1 | main expired |
| 21:35:48 | 390 | 15 | sell 484 EN2nnxrg8uUi6x2sJkzNPd2eT6rB9rdSoQNNaENA4RZA → SOL | failed | 0s | 0 | acquire EN2nnxrg8uUi6x2sJkzNPd2eT6rB9rdSoQNNaENA4RZA error: 404 Not Found: NoLiquidity: no route found |
| 21:37:31 | 391 | 16 | sell 0.005 SOL → DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 | failed | 43s | 1 | main expired |
| 21:38:15 | 392 | 16 | sell 28.5 DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 → SOL | failed | 44s | 1 | acquire DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 expired |
| 21:37:47 | 393 | 17 | sell 0.005 SOL → 9AvytnUKsLxPxFHFqS6VLxaxt5p6BhYNr53SD2Chpump | failed | 42s | 1 | main expired |
| 21:38:29 | 394 | 17 | sell 241 9AvytnUKsLxPxFHFqS6VLxaxt5p6BhYNr53SD2Chpump → SOL | failed | 0s | 0 | acquire 9AvytnUKsLxPxFHFqS6VLxaxt5p6BhYNr53SD2Chpump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:19 | 395 | 18 | sell 0.005 SOL → 55Vr2VpSwxsDkB6uGGHAvRv86K6zax2Zb4TT8ivwDEzW | failed | 49s | 1 | main expired |
| 21:36:07 | 396 | 18 | sell 1440 55Vr2VpSwxsDkB6uGGHAvRv86K6zax2Zb4TT8ivwDEzW → SOL | failed | 0s | 0 | acquire 55Vr2VpSwxsDkB6uGGHAvRv86K6zax2Zb4TT8ivwDEzW error: 404 Not Found: NoLiquidity: no route found |
| 21:35:49 | 397 | 19 | sell 0.005 SOL → 8G5ayEsJF4Q7FEWEGeF4jtnUWZBEKCqhySTFQf9Ppump | failed | 50s | 1 | main expired |
| 21:36:39 | 398 | 19 | sell 1060 8G5ayEsJF4Q7FEWEGeF4jtnUWZBEKCqhySTFQf9Ppump → SOL | failed | 0s | 0 | acquire 8G5ayEsJF4Q7FEWEGeF4jtnUWZBEKCqhySTFQf9Ppump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:18 | 399 | 20 | sell 0.005 SOL → 1zJX5gRnjLgmTpq5sVwkq69mNDQkCemqoasyjaPW6jm | failed | 49s | 1 | main expired |
| 21:36:07 | 400 | 20 | sell 48.2 1zJX5gRnjLgmTpq5sVwkq69mNDQkCemqoasyjaPW6jm → SOL | failed | 44s | 1 | acquire 1zJX5gRnjLgmTpq5sVwkq69mNDQkCemqoasyjaPW6jm expired |
| 21:35:49 | 401 | 21 | sell 0.005 SOL → 2uxaYT1fVrp6Fg2BrxQcyKSW91hefM6dG9krpbeDiirT | failed | 48s | 1 | main expired |
| 21:36:36 | 402 | 21 | sell 0.472 2uxaYT1fVrp6Fg2BrxQcyKSW91hefM6dG9krpbeDiirT → SOL | failed | 0s | 0 | acquire 2uxaYT1fVrp6Fg2BrxQcyKSW91hefM6dG9krpbeDiirT error: 404 Not Found: NoLiquidity: no route found |
| 21:36:39 | 403 | 22 | sell 0.005 SOL → vRseBFqTy9QLmmo5qGiwo74AVpdqqMTnxPqWoWMpump | failed | 46s | 1 | main expired |
| 21:37:25 | 404 | 22 | sell 24 vRseBFqTy9QLmmo5qGiwo74AVpdqqMTnxPqWoWMpump → SOL | failed | 0s | 0 | acquire vRseBFqTy9QLmmo5qGiwo74AVpdqqMTnxPqWoWMpump error: 404 Not Found: NoLiquidity: no route found |
| 21:36:13 | 405 | 23 | sell 0.005 SOL → he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A | failed | 44s | 1 | main expired |
| 21:36:57 | 406 | 23 | sell 0.00378 he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A → SOL | failed | 43s | 1 | acquire he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A expired |
| 21:37:45 | 407 | 24 | sell 0.005 SOL → DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow | failed | 42s | 1 | main expired |
| 21:38:27 | 408 | 24 | sell 0.0273 DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow → SOL | failed | 0s | 0 | acquire DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow error: 404 Not Found: NoLiquidity: no route found |
| 21:35:11 | 409 | 25 | sell 0.005 SOL → GvUCjmWSXA5hrTh9smmNA1AU55YCtP9mDLQcrKA1pump | failed | 48s | 1 | main expired |
| 21:35:59 | 410 | 25 | sell 445 GvUCjmWSXA5hrTh9smmNA1AU55YCtP9mDLQcrKA1pump → SOL | failed | 0s | 0 | acquire GvUCjmWSXA5hrTh9smmNA1AU55YCtP9mDLQcrKA1pump error: 404 Not Found: NoLiquidity: no route found |
| 21:36:07 | 411 | 26 | sell 0.005 SOL → FQgtfugBdpFN7PZ6NdPrZpVLDBrPGxXesi4gVu3vErhY | failed | 44s | 1 | main expired |
| 21:36:50 | 412 | 26 | sell 28.1 FQgtfugBdpFN7PZ6NdPrZpVLDBrPGxXesi4gVu3vErhY → SOL | failed | 47s | 1 | acquire FQgtfugBdpFN7PZ6NdPrZpVLDBrPGxXesi4gVu3vErhY expired |
| 21:36:02 | 413 | 27 | sell 0.005 SOL → 5VnbrKp28Qs9CAH6PyZdxBNvLxZcbeX3YBsozgWnpump | failed | 44s | 1 | main expired |
| 21:36:46 | 414 | 27 | sell 490 5VnbrKp28Qs9CAH6PyZdxBNvLxZcbeX3YBsozgWnpump → SOL | failed | 1s | 0 | acquire 5VnbrKp28Qs9CAH6PyZdxBNvLxZcbeX3YBsozgWnpump error: 404 Not Found: NoLiquidity: no route found |
| 21:37:05 | 415 | 28 | sell 0.005 SOL → CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump | failed | 44s | 1 | main expired |
| 21:37:50 | 416 | 28 | sell 187 CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump → SOL | failed | 0s | 0 | acquire CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:05 | 417 | 29 | sell 0.005 SOL → H8xQ6poBjB9DTPMDTKWzWPrnxu4bDEhybxiouF8Ppump | failed | 51s | 1 | main expired |
| 21:35:56 | 418 | 29 | sell 376 H8xQ6poBjB9DTPMDTKWzWPrnxu4bDEhybxiouF8Ppump → SOL | failed | 45s | 1 | acquire H8xQ6poBjB9DTPMDTKWzWPrnxu4bDEhybxiouF8Ppump expired |
| 21:34:55 | 419 | 30 | sell 0.005 SOL → GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 | failed | 48s | 1 | main expired |
| 21:35:43 | 420 | 30 | sell 0.0362 GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 → SOL | failed | 0s | 0 | acquire GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 error: 404 Not Found: NoLiquidity: no route found |
| 21:38:33 | 421 | 1 | sell 0.005 SOL → 7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj | failed | 44s | 1 | main expired |
| 21:39:17 | 422 | 1 | sell 0.00408 7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj → SOL | failed | 42s | 1 | acquire 7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj expired |
| 21:38:12 | 423 | 2 | sell 0.005 SOL → FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P | failed | 44s | 1 | main expired |
| 21:38:56 | 424 | 2 | sell 5.38 FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P → SOL | failed | 0s | 0 | acquire FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P error: 404 Not Found: NoLiquidity: no route found |
| 21:35:58 | 425 | 3 | sell 0.005 SOL → SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz | failed | 45s | 1 | main expired |
| 21:36:43 | 426 | 3 | sell 0.0892 SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz → SOL | failed | 0s | 0 | acquire SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz error: 404 Not Found: NoLiquidity: no route found |
| 21:37:32 | 427 | 4 | sell 0.005 SOL → CzLTZppPdZtTjyq3WGpHLstoc3GLhu7zH5Zg6xUa6Gv5 | failed | 47s | 1 | main expired |
| 21:38:19 | 428 | 4 | sell 0.00624 CzLTZppPdZtTjyq3WGpHLstoc3GLhu7zH5Zg6xUa6Gv5 → SOL | failed | 0s | 0 | acquire CzLTZppPdZtTjyq3WGpHLstoc3GLhu7zH5Zg6xUa6Gv5 error: 404 Not Found: NoLiquidity: no route found |
| 21:35:56 | 429 | 5 | sell 0.005 SOL → 5Jr9hGmJgxBRjjF8XGcGgQzXUdsbpZNNMpigEv8Wpump | failed | 49s | 1 | main expired |
| 21:36:45 | 430 | 5 | sell 147 5Jr9hGmJgxBRjjF8XGcGgQzXUdsbpZNNMpigEv8Wpump → SOL | failed | 46s | 1 | acquire 5Jr9hGmJgxBRjjF8XGcGgQzXUdsbpZNNMpigEv8Wpump expired |
| 21:38:06 | 431 | 6 | sell 0.005 SOL → BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp | failed | 44s | 1 | main expired |
| 21:38:50 | 432 | 6 | sell 0.00487 BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp → SOL | failed | 0s | 0 | acquire BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp error: 404 Not Found: NoLiquidity: no route found |
| 21:38:57 | 433 | 7 | sell 0.005 SOL → ATBR4i19gcQ31Rfr7ymA2XvkCQEAkNFGBtVKTmdqpump | failed | 44s | 1 | main expired |
| 21:39:41 | 434 | 7 | sell 1100 ATBR4i19gcQ31Rfr7ymA2XvkCQEAkNFGBtVKTmdqpump → SOL | failed | 0s | 0 | acquire ATBR4i19gcQ31Rfr7ymA2XvkCQEAkNFGBtVKTmdqpump error: 404 Not Found: NoLiquidity: no route found |
| 21:38:18 | 435 | 8 | sell 0.005 SOL → DvjbEsdca43oQcw2h3HW1CT7N3x5vRcr3QrvTUHnXvgV | failed | 47s | 1 | main expired |
| 21:39:05 | 436 | 8 | sell 326 DvjbEsdca43oQcw2h3HW1CT7N3x5vRcr3QrvTUHnXvgV → SOL | failed | 44s | 1 | acquire DvjbEsdca43oQcw2h3HW1CT7N3x5vRcr3QrvTUHnXvgV expired |
| 21:35:53 | 437 | 9 | sell 0.005 SOL → HeeBovJNKd27tQ6xkeP1dfSyTr8LyLwhJz9wfFTbPLEX | failed | 44s | 1 | main expired |
| 21:36:37 | 438 | 9 | sell 57.9 HeeBovJNKd27tQ6xkeP1dfSyTr8LyLwhJz9wfFTbPLEX → SOL | failed | 46s | 1 | acquire HeeBovJNKd27tQ6xkeP1dfSyTr8LyLwhJz9wfFTbPLEX expired |
| 21:37:26 | 439 | 10 | sell 0.005 SOL → BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p | failed | 44s | 1 | main expired |
| 21:38:10 | 440 | 10 | sell 24.9 BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p → SOL | failed | 44s | 1 | acquire BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p expired |
| 21:37:38 | 441 | 11 | sell 0.005 SOL → CcLd8HTAKLWtQHatqPwBQjtuCA72FNB9E1ckRTEzpump | failed | 43s | 1 | main expired |
| 21:38:20 | 442 | 11 | sell 136 CcLd8HTAKLWtQHatqPwBQjtuCA72FNB9E1ckRTEzpump → SOL | failed | 0s | 0 | acquire CcLd8HTAKLWtQHatqPwBQjtuCA72FNB9E1ckRTEzpump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:56 | 443 | 12 | sell 0.005 SOL → ACtfUWtgvaXrQGNMiohTusi5jcx5RJf5zwu9aAxkpump | failed | 45s | 1 | main expired |
| 21:36:40 | 444 | 12 | sell 1160 ACtfUWtgvaXrQGNMiohTusi5jcx5RJf5zwu9aAxkpump → SOL | failed | 0s | 0 | acquire ACtfUWtgvaXrQGNMiohTusi5jcx5RJf5zwu9aAxkpump error: 404 Not Found: NoLiquidity: no route found |
| 21:37:16 | 445 | 13 | sell 0.005 SOL → 8Jx8AAHj86wbQgUTjGuj6GTTL5Ps3cqxKRTvpaJApump | failed | 43s | 1 | main expired |
| 21:37:58 | 446 | 13 | sell 874 8Jx8AAHj86wbQgUTjGuj6GTTL5Ps3cqxKRTvpaJApump → SOL | failed | 0s | 0 | acquire 8Jx8AAHj86wbQgUTjGuj6GTTL5Ps3cqxKRTvpaJApump error: 404 Not Found: NoLiquidity: no route found |
| 21:38:00 | 447 | 14 | sell 0.005 SOL → RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE | failed | 0s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 21:38:00 | 448 | 14 | sell 0.0113 RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE → SOL | failed | 0s | 0 | acquire RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE error: 404 Not Found: NoLiquidity: no route found |
| 21:35:48 | 449 | 15 | sell 0.005 SOL → PAYmo6moDF3Ro3X6bU2jwe2UdBnBhv8YjLgL1j4DxGu | failed | 48s | 1 | main expired |
| 21:36:36 | 450 | 15 | sell 57.3 PAYmo6moDF3Ro3X6bU2jwe2UdBnBhv8YjLgL1j4DxGu → SOL | failed | 46s | 1 | acquire PAYmo6moDF3Ro3X6bU2jwe2UdBnBhv8YjLgL1j4DxGu expired |
| 21:38:59 | 451 | 16 | sell 0.005 SOL → iNTCy1qTsUEZQe3DSocLz1ZXXai34Gdw8THQh5rxFaF | failed | 44s | 1 | main expired |
| 21:39:44 | 452 | 16 | sell 0.00461 iNTCy1qTsUEZQe3DSocLz1ZXXai34Gdw8THQh5rxFaF → SOL | failed | 0s | 0 | acquire iNTCy1qTsUEZQe3DSocLz1ZXXai34Gdw8THQh5rxFaF error: 404 Not Found: NoLiquidity: no route found |
| 21:38:29 | 453 | 17 | sell 0.005 SOL → BZFYNPeQAEW3HWQ4DNsTVahC1n4ZjTgn6jB2nnBbB96W | failed | 44s | 1 | main expired |
| 21:39:13 | 454 | 17 | sell 216 BZFYNPeQAEW3HWQ4DNsTVahC1n4ZjTgn6jB2nnBbB96W → SOL | failed | 0s | 0 | acquire BZFYNPeQAEW3HWQ4DNsTVahC1n4ZjTgn6jB2nnBbB96W error: 404 Not Found: NoLiquidity: no route found |
| 21:36:08 | 455 | 18 | sell 0.005 SOL → Hh3oTaqDCKKfdBgsQEvxp9sUwyNf8x9qmKqEMLBWpump | failed | 45s | 1 | main expired |
| 21:36:52 | 456 | 18 | sell 306 Hh3oTaqDCKKfdBgsQEvxp9sUwyNf8x9qmKqEMLBWpump → SOL | failed | 0s | 0 | acquire Hh3oTaqDCKKfdBgsQEvxp9sUwyNf8x9qmKqEMLBWpump error: 404 Not Found: NoLiquidity: no route found |
| 21:36:39 | 457 | 19 | sell 0.005 SOL → 4nV5gNwwP68zUDat26ySChREqVaQaLudfJBkSgEzpump | failed | 46s | 1 | main expired |
| 21:37:25 | 458 | 19 | sell 96.4 4nV5gNwwP68zUDat26ySChREqVaQaLudfJBkSgEzpump → SOL | failed | 0s | 0 | acquire 4nV5gNwwP68zUDat26ySChREqVaQaLudfJBkSgEzpump error: 404 Not Found: NoLiquidity: no route found |
| 21:36:52 | 459 | 20 | sell 0.005 SOL → CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 | failed | 44s | 1 | main expired |
| 21:37:36 | 460 | 20 | sell 20.2 CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 → SOL | failed | 45s | 1 | acquire CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 expired |
| 21:36:37 | 461 | 21 | sell 0.005 SOL → A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump | failed | 46s | 1 | main expired |
| 21:37:22 | 462 | 21 | sell 96.8 A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump → SOL | failed | 42s | 1 | acquire A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump expired |
| 21:37:25 | 463 | 22 | sell 0.005 SOL → 5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC | failed | 44s | 1 | main expired |
| 21:38:10 | 464 | 22 | sell 22.9 5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC → SOL | failed | 44s | 1 | acquire 5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC expired |
| 21:37:40 | 465 | 23 | sell 0.005 SOL → 4K1m7gAMDKzrxQn68yuZAd767w57Fw7Ykw69dG3umeta | failed | 45s | 1 | main expired |
| 21:38:25 | 466 | 23 | sell 19.3 4K1m7gAMDKzrxQn68yuZAd767w57Fw7Ykw69dG3umeta → SOL | failed | 0s | 0 | acquire 4K1m7gAMDKzrxQn68yuZAd767w57Fw7Ykw69dG3umeta error: 404 Not Found: NoLiquidity: no route found |
| 21:38:27 | 467 | 24 | sell 0.005 SOL → 8PzFWyLpCVEmbZmVJcaRTU5r69XKJx1rd7YGpWvnpump | failed | 43s | 1 | main expired |
| 21:39:11 | 468 | 24 | sell 220 8PzFWyLpCVEmbZmVJcaRTU5r69XKJx1rd7YGpWvnpump → SOL | failed | 0s | 0 | acquire 8PzFWyLpCVEmbZmVJcaRTU5r69XKJx1rd7YGpWvnpump error: 404 Not Found: NoLiquidity: no route found |
| 21:35:59 | 469 | 25 | sell 0.005 SOL → MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u | failed | 45s | 1 | main expired |
| 21:36:44 | 470 | 25 | sell 7.32 MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u → SOL | failed | 49s | 1 | acquire MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u expired |
| 21:37:38 | 471 | 26 | sell 0.005 SOL → 8SMMso8Muv8d6i4WmMDthKt6TN1ysN6937sx3DKLXZqB | failed | 45s | 1 | main expired |
| 21:38:23 | 472 | 26 | sell 6.27 8SMMso8Muv8d6i4WmMDthKt6TN1ysN6937sx3DKLXZqB → SOL | failed | 44s | 1 | acquire 8SMMso8Muv8d6i4WmMDthKt6TN1ysN6937sx3DKLXZqB expired |
| 21:36:47 | 473 | 27 | sell 0.005 SOL → AWGCDT2gd8JadbYbYyZy1iKxfWokPNgrEQoU24zUpump | failed | 44s | 1 | main expired |
| 21:37:31 | 474 | 27 | sell 782 AWGCDT2gd8JadbYbYyZy1iKxfWokPNgrEQoU24zUpump → SOL | failed | 0s | 0 | acquire AWGCDT2gd8JadbYbYyZy1iKxfWokPNgrEQoU24zUpump error: 404 Not Found: NoLiquidity: no route found |
| 21:37:50 | 475 | 28 | sell 0.005 SOL → 3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump | failed | 45s | 1 | main expired |
| 21:38:35 | 476 | 28 | sell 272 3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump → SOL | failed | 0s | 0 | acquire 3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump error: 404 Not Found: NoLiquidity: no route found |
| 21:36:41 | 477 | 29 | sell 0.005 SOL → 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T | failed | 45s | 1 | main expired |
| 21:37:26 | 478 | 29 | sell 1.47 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T → SOL | failed | 45s | 1 | acquire 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T expired |
| 21:35:44 | 479 | 30 | sell 0.005 SOL → y1AZt42vceCmStjW4zetK3VoNarC1VxJ5iDjpiupump | failed | 48s | 1 | main expired |
| 21:36:32 | 480 | 30 | sell 28 y1AZt42vceCmStjW4zetK3VoNarC1VxJ5iDjpiupump → SOL | failed | 47s | 1 | acquire y1AZt42vceCmStjW4zetK3VoNarC1VxJ5iDjpiupump expired |
| 21:39:59 | 481 | 1 | sell 0.005 SOL → 463SK47VkB7uE7XenTHKiVcMtxRsfNE2X4Q9wByaURVA | failed | 42s | 1 | main expired |
| 21:40:41 | 482 | 1 | sell 140 463SK47VkB7uE7XenTHKiVcMtxRsfNE2X4Q9wByaURVA → SOL | failed | 41s | 1 | acquire 463SK47VkB7uE7XenTHKiVcMtxRsfNE2X4Q9wByaURVA expired |
| 21:38:56 | 483 | 2 | sell 0.005 SOL → XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM | failed | 44s | 1 | main expired |
| 21:39:40 | 484 | 2 | sell 0.0046 XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM → SOL | failed | 0s | 0 | acquire XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM error: 404 Not Found: NoLiquidity: no route found |
| 21:36:43 | 485 | 3 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 46s | 1 | main expired |
| 21:37:29 | 486 | 3 | sell 0.453 A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 → SOL | failed | 44s | 1 | acquire A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 expired |
| 21:38:19 | 487 | 4 | sell 0.005 SOL → BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk | failed | 45s | 1 | main expired |
| 21:39:04 | 488 | 4 | sell 0.00236 BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk → SOL | failed | 0s | 0 | acquire BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk error: 404 Not Found: NoLiquidity: no route found |
| 21:37:31 | 489 | 5 | sell 0.005 SOL → J1Wpmugrooj1yMyQKrdZ2vwRXG5rhfx3vTnYE39gpump | failed | 43s | 1 | main expired |
| 21:38:14 | 490 | 5 | sell 18.8 J1Wpmugrooj1yMyQKrdZ2vwRXG5rhfx3vTnYE39gpump → SOL | failed | 44s | 1 | acquire J1Wpmugrooj1yMyQKrdZ2vwRXG5rhfx3vTnYE39gpump expired |
| 21:38:50 | 491 | 6 | sell 0.005 SOL → 85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ | failed | 44s | 1 | main expired |
| 21:39:34 | 492 | 6 | sell 35.6 85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ → SOL | failed | 41s | 1 | acquire 85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ expired |
| 21:39:41 | 493 | 7 | sell 0.005 SOL → 8ZHE4ow1a2jjxuoMfyExuNamQNALv5ekZhsBn5nMDf5e | failed | 44s | 1 | main expired |
| 21:40:26 | 494 | 7 | sell 144 8ZHE4ow1a2jjxuoMfyExuNamQNALv5ekZhsBn5nMDf5e → SOL | failed | 42s | 1 | acquire 8ZHE4ow1a2jjxuoMfyExuNamQNALv5ekZhsBn5nMDf5e expired |
| 21:39:50 | 495 | 8 | sell 0.005 SOL → utLyQQCPvjuCc6zeaXdsFeEC3JNdxKS3vxaZWoGdoge | failed | 41s | 1 | main expired |
| 21:40:31 | 496 | 8 | sell 338 utLyQQCPvjuCc6zeaXdsFeEC3JNdxKS3vxaZWoGdoge → SOL | failed | 0s | 0 | acquire utLyQQCPvjuCc6zeaXdsFeEC3JNdxKS3vxaZWoGdoge error: 404 Not Found: NoLiquidity: no route found |
| 21:37:23 | 497 | 9 | sell 0.005 SOL → 6yjNqPzTSanBWSa6dxVEgTjePXBrZ2FoHLDQwYwEsyM6 | failed | 45s | 1 | main expired |
| 21:38:08 | 498 | 9 | sell 436 6yjNqPzTSanBWSa6dxVEgTjePXBrZ2FoHLDQwYwEsyM6 → SOL | failed | 44s | 1 | acquire 6yjNqPzTSanBWSa6dxVEgTjePXBrZ2FoHLDQwYwEsyM6 expired |
| 21:38:54 | 499 | 10 | sell 0.005 SOL → BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K | failed | 44s | 1 | main expired |
| 21:39:39 | 500 | 10 | sell 3.36 BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K → SOL | failed | 44s | 1 | acquire BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K expired |

### Rows without an order

120 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | acquire | 119 | SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → ANSEM, SOL → CASH, SOL → ANTFUN, SOL → CRCLx, SOL → Jimothy, SOL → fone, SOL → SKHY, SOL → NVDAx, SOL → PRIME, SOL → MU, SOL → SPCX, SOL → e/acc, SOL → TOAD, SOL → SPCXx, SOL → OTC, SOL → baton, SOL → TSLAx, SOL → Agency, SOL → JEANPHIL, SOL → SNDK, SOL → TripleT, SOL → MSTRx, SOL → MANIFEST, SOL → Cupsey, SOL → QQQx, SOL → ELON, SOL → BULLSHIT, SOL → BOT, SOL → METAx, SOL → KET, SOL → GLDx, SOL → MSFTx, SOL → Buttcoin, SOL → SI, SOL → DJT, SOL → GOOGLx, SOL → FO, SOL → COINx, SOL → HIGGS, SOL → Jotchua, SOL → CRAWL, SOL → DOGE-1, SOL → RIV, SOL → GMEx, SOL → HOODx, SOL → AAPLx, SOL → swordcat, SOL → KINS, SOL → MADE, SOL → CALI, SOL → MCDx, SOL → three, SOL → TBB, SOL → READY, SOL → LBTC, SOL → MISTAKE, SOL → PUMPCADE, SOL → TTWO, SOL → DRAM, SOL → knightcat, SOL → CTM, SOL → CHILLHOUSE, SOL → AMZNx, SOL → ARX, SOL → Chonketha, SOL → WOJAK, SOL → LMAO!, SOL → STRCx, SOL → NKE, SOL → HIMS, SOL → PLTRx, SOL → CODEC, SOL → MOS, SOL → BURNIE, SOL → HOTBOT, SOL → GEOM, SOL → HOOD, SOL → GOLD, SOL → CLAW, SOL → DREGG, SOL → MSTR, SOL → AMC, SOL → ZERO, SOL → testicle, SOL → SOLANGELES, SOL → SQUIRE, SOL → 67, SOL → slopcannon, SOL → HeavyPulp, SOL → reUSD, SOL → Verse, SOL → DKNG, SOL → WSOLP, SOL → darwin, SOL → USDUC, SOL → GRND, SOL → MELANIA, SOL → SNAP, SOL → COPX, SOL → BABA, SOL → Machi, SOL → ALTSZN, SOL → unc, SOL → PENGUIN, SOL → RBLX, SOL → INTC, SOL → SAPLING, SOL → HODL, SOL → BOBO, SOL → RAWR, SOL → Percolator, SOL → Clude, SOL → BP, SOL → INTCx, SOL → IBM, SOL → OGDOGE | no route found |
| BlockhashExpired | main | 1 | SOL → RBLX | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 380 (255 main, 125 acquire). Cleanup placed 16 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 21:44:20 | 22 | EYE → SOL (native) | Expired without a fill | `0x7502ffc6…` [🐞](https://debug.barn.cow.fi/order/0x7502ffc68d6720feff69b24a67d98c080546300fff66c1c8b85d9493bcbc9e45) |
| 21:44:21 | 22 | PAID → SOL (native) | Expired without a fill | `0xde975d44…` [🐞](https://debug.barn.cow.fi/order/0xde975d441df3f37b3f86451ac8c1d5e66ded429f1daec5a0d2b19340a015e813) |
| 21:44:21 | 22 | TROLL → SOL (native) | Expired without a fill | `0xcd767f06…` [🐞](https://debug.barn.cow.fi/order/0xcd767f062fdfc64f702e42d78f1ff3d7c4333becdb20d048cfe10cf001e472ae) |
| 21:44:22 | 26 | SPYx → SOL (native) | Expired without a fill | `0x4ee234a6…` [🐞](https://debug.barn.cow.fi/order/0x4ee234a607bbf8cbb330bd642d9afccee95d89a8734f4e2f832de99dea4a508f) |
| 21:44:23 | 19 | USDS → SOL (native) | Expired without a fill | `0x09e9319d…` [🐞](https://debug.barn.cow.fi/order/0x09e9319da71d15c4693f152ec4762b615bab2fdb321f5bae2e029f20f635f03d) |
| 21:44:29 | 29 | Fartcoin → SOL (native) | Expired without a fill | `0x98fa538f…` [🐞](https://debug.barn.cow.fi/order/0x98fa538faf06e29eb15fef05815cbe9cb8725f880e081a349e81db28e6ab14c4) |
| 21:44:37 | 24 | TSLAx → SOL (native) | Expired without a fill | `0x96f0776c…` [🐞](https://debug.barn.cow.fi/order/0x96f0776cef3a79c8a66dbc6ee1030448f7dfc18aaf18467a356cd35f91916805) |
| 21:44:37 | 24 | JitoSOL → SOL (native) | Expired without a fill | `0x9fbe33f8…` [🐞](https://debug.barn.cow.fi/order/0x9fbe33f848de4f9bc74f1263c1d566b05ecf94d1aa646ab6861213dd81570e39) |
| 21:44:38 | 28 | PENGU → SOL (native) | Expired without a fill | `0xff97a2ed…` [🐞](https://debug.barn.cow.fi/order/0xff97a2edf5c72cfaeb664ca5872c252fe10b315b84050b45d0867231a683ed87) |
| 21:44:39 | 23 | GME → SOL (native) | Expired without a fill | `0x1d5012f7…` [🐞](https://debug.barn.cow.fi/order/0x1d5012f7b914ce29a3d1663e28bb1265431193427e11c8108cf3a0bb357c44aa) |
| 21:44:40 | 21 | duk → SOL (native) | Expired without a fill | `0xa10104c5…` [🐞](https://debug.barn.cow.fi/order/0xa10104c53605fef357b28ce4f57184aa83a2874383ddb46463aa2f029f7aef7f) |
| 21:44:40 | 21 | HeeHaw → SOL (native) | Expired without a fill | `0x70ce217a…` [🐞](https://debug.barn.cow.fi/order/0x70ce217a8a09d449f19ccda6a304864f493d91711d97d6094015d1ae7f2c6420) |
| 21:44:46 | 20 | USDe → SOL (native) | Expired without a fill | `0x4e369e73…` [🐞](https://debug.barn.cow.fi/order/0x4e369e73aac59127476012da258a65136327fe188fa65d856cff6472ea7174c9) |
| 21:44:46 | 20 | EURC → SOL (native) | Expired without a fill | `0x86c98d99…` [🐞](https://debug.barn.cow.fi/order/0x86c98d99da2a9af543ae89ded9bfda6da076a4f2ae2fe00eb1bb069d228eab74) |
| 21:44:54 | 25 | PUMPCADE → SOL (native) | Expired without a fill | `0x5f70012c…` [🐞](https://debug.barn.cow.fi/order/0x5f70012c20720f940388a8783b9e337db29829a0ed32ebd45c5385eac5eea9e8) |
| 21:45:58 | 30 | HNT → SOL (native) | Expired without a fill | `0x4a907a2c…` [🐞](https://debug.barn.cow.fi/order/0x4a907a2cb29f069276c0746319043256eee9a581e1cfba9a35a6b7bb23143de4) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| expired: never created on-chain (winner found, creation blockhash expired) | 380 | 100.0% |

## Jupiter rate limiting

1132 of 3596 Jupiter quote attempts (31.5%) were rejected with `rate limited`. 0 orders never executed: Jupiter's quotes for them were rate limited, it never found a solution, and no other solver bid.

Orders using the most Jupiter quote attempts:

| Order | In this report | Attempts | Rate limited | Solved |
|---|---|---|---|---|
| `0x8d892474…` [🐞](https://debug.barn.cow.fi/order/0x8d892474a79dc4d4d436ec3b155f915ecfa443362b5cf757e7fe9dd96f661df9) | yes | 9 | 1 | 8 |
| `0xd55055de…` [🐞](https://debug.barn.cow.fi/order/0xd55055decfb0afc695dacfa1af268b3aaa1584d4090ca3ce69c863c2d0205f26) | yes | 9 | 2 | 7 |
| `0x8843629a…` [🐞](https://debug.barn.cow.fi/order/0x8843629a183bbda92a046f52770d402746c5e08a49ebafd1fe040556ca4c5077) | yes | 9 | 1 | 8 |
| `0xac629d25…` [🐞](https://debug.barn.cow.fi/order/0xac629d25535dc327a7b9b3a7ff13ab5c47ff4450fced8be0a5149574b5c91f2c) | yes | 9 | 2 | 7 |
| `0x8d79f18f…` [🐞](https://debug.barn.cow.fi/order/0x8d79f18fc08529c41019d9161e8e6a666c4da39c9eb38f151f0bd3da68ee10e8) | yes | 9 | 5 | 4 |
| `0x0d3f4653…` [🐞](https://debug.barn.cow.fi/order/0x0d3f465339459df34e7819a5c42ce81bdc56536b7cbe4de45989c8d8191fd2fb) | yes | 9 | 3 | 6 |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 255 | 0 | 0.0% |
| buy | 125 | 0 | 0.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → WBTC | 4 | 0 | 0.0% |
| wSOL → BP | 3 | 0 | 0.0% |
| wSOL → USDT | 2 | 0 | 0.0% |
| wSOL → TRUMP | 2 | 0 | 0.0% |
| wSOL → cbBTC | 2 | 0 | 0.0% |
| wSOL → ETH | 2 | 0 | 0.0% |
| wSOL → USDC | 2 | 0 | 0.0% |
| wSOL → ZEC | 2 | 0 | 0.0% |
| wSOL → USD1 | 2 | 0 | 0.0% |
| wSOL → HYPE | 2 | 0 | 0.0% |
| wSOL → JUP | 2 | 0 | 0.0% |
| wSOL → STONK | 2 | 0 | 0.0% |
| wSOL → USELESS | 2 | 0 | 0.0% |
| wSOL → RAY | 2 | 0 | 0.0% |
| wSOL → JupUSD | 2 | 0 | 0.0% |
| wSOL → EMBER | 2 | 0 | 0.0% |
| wSOL → syrupUSDC | 2 | 0 | 0.0% |
| wSOL → BOME | 2 | 0 | 0.0% |
| wSOL → TROLL | 2 | 0 | 0.0% |
| wSOL → JLP | 2 | 0 | 0.0% |
| wSOL → $WIF | 2 | 0 | 0.0% |
| wSOL → ONyc | 2 | 0 | 0.0% |
| wSOL → MET | 2 | 0 | 0.0% |
| wSOL → EURC | 2 | 0 | 0.0% |
| wSOL → USX | 2 | 0 | 0.0% |
| wSOL → CARDS | 2 | 0 | 0.0% |
| wSOL → ORCA | 2 | 0 | 0.0% |
| wSOL → Bonk | 2 | 0 | 0.0% |
| wSOL → JupSOL | 2 | 0 | 0.0% |
| wSOL → KMNO | 2 | 0 | 0.0% |
| wSOL → hyUSD | 2 | 0 | 0.0% |
| wSOL → GO | 2 | 0 | 0.0% |
| wSOL → BIRB | 2 | 0 | 0.0% |
| wSOL → SPX | 2 | 0 | 0.0% |
| wSOL → neet | 2 | 0 | 0.0% |
| wSOL → SKR | 2 | 0 | 0.0% |
| wSOL → GEOD | 2 | 0 | 0.0% |
| wSOL → mSOL | 2 | 0 | 0.0% |
| wSOL → JTO | 2 | 0 | 0.0% |
| wSOL → xHYPE | 2 | 0 | 0.0% |
| wSOL → eUSX | 2 | 0 | 0.0% |
| wSOL → USDS | 2 | 0 | 0.0% |
| wSOL → MEW | 2 | 0 | 0.0% |
| wSOL → GRASS | 2 | 0 | 0.0% |
| wSOL → PYTH | 2 | 0 | 0.0% |
| wSOL → wXRP | 2 | 0 | 0.0% |
| wSOL → HOOKED | 2 | 0 | 0.0% |
| wSOL → aura | 2 | 0 | 0.0% |
| wSOL → xSOL | 2 | 0 | 0.0% |
| wSOL → ORE | 2 | 0 | 0.0% |
| wSOL → AVA | 2 | 0 | 0.0% |
| wSOL → arc | 2 | 0 | 0.0% |
| wSOL → TRX | 2 | 0 | 0.0% |
| wSOL → GRIFFAIN | 2 | 0 | 0.0% |
| wSOL → pippin | 2 | 0 | 0.0% |
| wSOL → ACT | 2 | 0 | 0.0% |
| wSOL → POPCAT | 2 | 0 | 0.0% |
| wSOL → ZBCN | 2 | 0 | 0.0% |
| wSOL → PEAQ | 2 | 0 | 0.0% |
| wSOL → VINE | 2 | 0 | 0.0% |
| wSOL → PSOL | 2 | 0 | 0.0% |
| wSOL → HNT | 2 | 0 | 0.0% |
| wSOL → ZEREBRO | 2 | 0 | 0.0% |
| wSOL → RENDER | 2 | 0 | 0.0% |
| wSOL → jellyjelly | 2 | 0 | 0.0% |
| wSOL → PERPSPAD | 2 | 0 | 0.0% |
| wSOL → ALCH | 2 | 0 | 0.0% |
| wSOL → PYTHIA | 2 | 0 | 0.0% |
| wSOL → GOAT | 2 | 0 | 0.0% |
| wSOL → CX | 2 | 0 | 0.0% |
| wSOL → SANC | 2 | 0 | 0.0% |
| wSOL → 2Z | 2 | 0 | 0.0% |
| wSOL → ALON | 2 | 0 | 0.0% |
| wSOL → xBTC | 2 | 0 | 0.0% |
| wSOL → CHILLGUY | 2 | 0 | 0.0% |
| wSOL → META | 2 | 0 | 0.0% |
| wSOL → MOODENG | 2 | 0 | 0.0% |
| wSOL → BC | 2 | 0 | 0.0% |
| wSOL → SLX | 2 | 0 | 0.0% |
| wSOL → AAVE | 2 | 0 | 0.0% |
| wSOL → XAUt0 | 2 | 0 | 0.0% |
| wSOL → NOS | 2 | 0 | 0.0% |
| wSOL → Pnut | 2 | 0 | 0.0% |
| wSOL → CRED | 2 | 0 | 0.0% |
| wSOL → Ban | 2 | 0 | 0.0% |
| wSOL → BORG | 2 | 0 | 0.0% |
| wSOL → GIGA | 2 | 0 | 0.0% |
| wSOL → INF | 2 | 0 | 0.0% |
| wSOL → Tokabu | 2 | 0 | 0.0% |
| wSOL → MPLX | 2 | 0 | 0.0% |
| wSOL → KLED | 2 | 0 | 0.0% |
| wSOL → PST | 2 | 0 | 0.0% |
| wSOL → swarms | 2 | 0 | 0.0% |
| wSOL → FARTBOY | 2 | 0 | 0.0% |
| wSOL → PAYAI | 2 | 0 | 0.0% |
| wSOL → bSOL | 2 | 0 | 0.0% |
| wSOL → HEEBOO | 2 | 0 | 0.0% |
| wSOL → MUSHU | 2 | 0 | 0.0% |
| wSOL → ME | 2 | 0 | 0.0% |
| wSOL → VIRTUAL | 2 | 0 | 0.0% |
| wSOL → BMT | 2 | 0 | 0.0% |
| wSOL → hSOL | 2 | 0 | 0.0% |
| wSOL → RUSH | 2 | 0 | 0.0% |
| wSOL → APE | 2 | 0 | 0.0% |
| wSOL → Bert | 2 | 0 | 0.0% |
| wSOL → FWOG | 2 | 0 | 0.0% |
| wSOL → Anon | 2 | 0 | 0.0% |
| wSOL → USDY | 2 | 0 | 0.0% |
| wSOL → MON | 2 | 0 | 0.0% |
| wSOL → ENA | 2 | 0 | 0.0% |
| wSOL → BNB | 2 | 0 | 0.0% |
| wSOL → Chud | 2 | 0 | 0.0% |
| wSOL → PONKE | 2 | 0 | 0.0% |
| wSOL → NPC | 2 | 0 | 0.0% |
| wSOL → GP | 2 | 0 | 0.0% |
| wSOL → WOULD | 2 | 0 | 0.0% |
| wSOL → DBR | 2 | 0 | 0.0% |
| wSOL → RHEA | 2 | 0 | 0.0% |
| wSOL → DOOD | 2 | 0 | 0.0% |
| wSOL → stSOL | 2 | 0 | 0.0% |
| wSOL → W | 2 | 0 | 0.0% |
| wSOL → IO | 2 | 0 | 0.0% |
| wSOL → MORI | 2 | 0 | 0.0% |
| wSOL → TSUKI | 2 | 0 | 0.0% |
| wSOL → PUMP | 1 | 0 | 0.0% |
| wSOL → Jimothy | 1 | 0 | 0.0% |
| wSOL → SPYx | 1 | 0 | 0.0% |
| wSOL → PYUSD | 1 | 0 | 0.0% |
| wSOL → PAID | 1 | 0 | 0.0% |
| wSOL → USDG | 1 | 0 | 0.0% |
| wSOL → JitoSOL | 1 | 0 | 0.0% |
| wSOL → CASH | 1 | 0 | 0.0% |
| wSOL → Fartcoin | 1 | 0 | 0.0% |
| wSOL → PENGU | 1 | 0 | 0.0% |
| wSOL → SKHY | 1 | 0 | 0.0% |
| wSOL → CRCLx | 1 | 0 | 0.0% |
| wSOL → USDe | 1 | 0 | 0.0% |
| wSOL → ANTFUN | 1 | 0 | 0.0% |
| wSOL → fone | 1 | 0 | 0.0% |
| wSOL → ANSEM | 1 | 0 | 0.0% |
| wSOL → PRIME | 1 | 0 | 0.0% |
| wSOL → TSLAx | 1 | 0 | 0.0% |
| SPYx → SOL (native) | 1 | 0 | 0.0% |
| PAID → SOL (native) | 1 | 0 | 0.0% |
| JitoSOL → SOL (native) | 1 | 0 | 0.0% |
| Fartcoin → SOL (native) | 1 | 0 | 0.0% |
| PENGU → SOL (native) | 1 | 0 | 0.0% |
| wSOL → MSTRx | 1 | 0 | 0.0% |
| USDe → SOL (native) | 1 | 0 | 0.0% |
| wSOL → baton | 1 | 0 | 0.0% |
| wSOL → Agency | 1 | 0 | 0.0% |
| wSOL → KET | 1 | 0 | 0.0% |
| wSOL → JEANPHIL | 1 | 0 | 0.0% |
| wSOL → NVDAx | 1 | 0 | 0.0% |
| wSOL → e/acc | 1 | 0 | 0.0% |
| wSOL → TripleT | 1 | 0 | 0.0% |
| wSOL → MU | 1 | 0 | 0.0% |
| wSOL → OTC | 1 | 0 | 0.0% |
| wSOL → SI | 1 | 0 | 0.0% |
| wSOL → SPCX | 1 | 0 | 0.0% |
| wSOL → SNDK | 1 | 0 | 0.0% |
| wSOL → BOT | 1 | 0 | 0.0% |
| wSOL → SPCXx | 1 | 0 | 0.0% |
| wSOL → GLDx | 1 | 0 | 0.0% |
| wSOL → TOAD | 1 | 0 | 0.0% |
| wSOL → BULLSHIT | 1 | 0 | 0.0% |
| wSOL → Buttcoin | 1 | 0 | 0.0% |
| wSOL → Cupsey | 1 | 0 | 0.0% |
| wSOL → QQQx | 1 | 0 | 0.0% |
| wSOL → MSFTx | 1 | 0 | 0.0% |
| wSOL → HIGGS | 1 | 0 | 0.0% |
| wSOL → ELON | 1 | 0 | 0.0% |
| wSOL → MANIFEST | 1 | 0 | 0.0% |
| wSOL → FO | 1 | 0 | 0.0% |
| wSOL → METAx | 1 | 0 | 0.0% |
| wSOL → Jotchua | 1 | 0 | 0.0% |
| wSOL → DOGE-1 | 1 | 0 | 0.0% |
| wSOL → RIV | 1 | 0 | 0.0% |
| wSOL → AAPLx | 1 | 0 | 0.0% |
| wSOL → MADE | 1 | 0 | 0.0% |
| wSOL → HOODx | 1 | 0 | 0.0% |
| wSOL → KINS | 1 | 0 | 0.0% |
| wSOL → COINx | 1 | 0 | 0.0% |
| wSOL → DRAM | 1 | 0 | 0.0% |
| wSOL → swordcat | 1 | 0 | 0.0% |
| wSOL → CRAWL | 1 | 0 | 0.0% |
| wSOL → DJT | 1 | 0 | 0.0% |
| wSOL → TBB | 1 | 0 | 0.0% |
| wSOL → MISTAKE | 1 | 0 | 0.0% |
| wSOL → GMEx | 1 | 0 | 0.0% |
| wSOL → GOOGLx | 1 | 0 | 0.0% |
| wSOL → knightcat | 1 | 0 | 0.0% |
| wSOL → CHILLHOUSE | 1 | 0 | 0.0% |
| wSOL → three | 1 | 0 | 0.0% |
| wSOL → LBTC | 1 | 0 | 0.0% |
| wSOL → GOLD | 1 | 0 | 0.0% |
| wSOL → STRCx | 1 | 0 | 0.0% |
| wSOL → READY | 1 | 0 | 0.0% |
| wSOL → CALI | 1 | 0 | 0.0% |
| wSOL → Chonketha | 1 | 0 | 0.0% |
| wSOL → MCDx | 1 | 0 | 0.0% |
| wSOL → HOOD | 1 | 0 | 0.0% |
| wSOL → WOJAK | 1 | 0 | 0.0% |
| wSOL → CODEC | 1 | 0 | 0.0% |
| wSOL → HIMS | 1 | 0 | 0.0% |
| wSOL → GRND | 1 | 0 | 0.0% |
| wSOL → SQUIRE | 1 | 0 | 0.0% |
| wSOL → PLTRx | 1 | 0 | 0.0% |
| wSOL → MSTR | 1 | 0 | 0.0% |
| wSOL → PUMPCADE | 1 | 0 | 0.0% |
| wSOL → WSOLP | 1 | 0 | 0.0% |
| wSOL → testicle | 1 | 0 | 0.0% |
| wSOL → DREGG | 1 | 0 | 0.0% |
| wSOL → CTM | 1 | 0 | 0.0% |
| wSOL → HOTBOT | 1 | 0 | 0.0% |
| wSOL → BURNIE | 1 | 0 | 0.0% |
| wSOL → slopcannon | 1 | 0 | 0.0% |
| wSOL → TTWO | 1 | 0 | 0.0% |
| wSOL → LMAO! | 1 | 0 | 0.0% |
| wSOL → reUSD | 1 | 0 | 0.0% |
| wSOL → HeavyPulp | 1 | 0 | 0.0% |
| wSOL → MOS | 1 | 0 | 0.0% |
| wSOL → unc | 1 | 0 | 0.0% |
| wSOL → SNAP | 1 | 0 | 0.0% |
| wSOL → darwin | 1 | 0 | 0.0% |
| wSOL → HODL | 1 | 0 | 0.0% |
| wSOL → ARX | 1 | 0 | 0.0% |
| wSOL → GEOM | 1 | 0 | 0.0% |
| wSOL → SOLANGELES | 1 | 0 | 0.0% |
| wSOL → Verse | 1 | 0 | 0.0% |
| wSOL → AMC | 1 | 0 | 0.0% |
| wSOL → BOBO | 1 | 0 | 0.0% |
| wSOL → AMZNx | 1 | 0 | 0.0% |
| wSOL → NKE | 1 | 0 | 0.0% |
| wSOL → Clude | 1 | 0 | 0.0% |
| wSOL → ZERO | 1 | 0 | 0.0% |
| wSOL → USDUC | 1 | 0 | 0.0% |
| wSOL → PENGUIN | 1 | 0 | 0.0% |
| wSOL → CLAW | 1 | 0 | 0.0% |
| wSOL → COPX | 1 | 0 | 0.0% |
| wSOL → ALTSZN | 1 | 0 | 0.0% |
| wSOL → RAWR | 1 | 0 | 0.0% |
| wSOL → DKNG | 1 | 0 | 0.0% |
| wSOL → 67 | 1 | 0 | 0.0% |
| wSOL → BABA | 1 | 0 | 0.0% |
| wSOL → MELANIA | 1 | 0 | 0.0% |
| wSOL → IBM | 1 | 0 | 0.0% |
| wSOL → Percolator | 1 | 0 | 0.0% |
| wSOL → SAPLING | 1 | 0 | 0.0% |
| wSOL → INTCx | 1 | 0 | 0.0% |
| wSOL → Machi | 1 | 0 | 0.0% |
| wSOL → INTC | 1 | 0 | 0.0% |
| wSOL → OGDOGE | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 16 | 0 | 0.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 16 | 0 | 0.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 15 | 0 | 0.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 15 | 0 | 0.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 15 | 0 | 0.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 14 | 0 | 0.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 14 | 0 | 0.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 13 | 0 | 0.0% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 13 | 0 | 0.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 13 | 0 | 0.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 13 | 0 | 0.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 13 | 0 | 0.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 13 | 0 | 0.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 13 | 0 | 0.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 13 | 0 | 0.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 12 | 0 | 0.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 12 | 0 | 0.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 12 | 0 | 0.0% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 12 | 0 | 0.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 12 | 0 | 0.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 12 | 0 | 0.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 12 | 0 | 0.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 12 | 0 | 0.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 11 | 0 | 0.0% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 11 | 0 | 0.0% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 11 | 0 | 0.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 11 | 0 | 0.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 11 | 0 | 0.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 10 | 0 | 0.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 10 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 380 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 21:28:06 | wSOL → PUMP | sell | Winner too late: creation blockhash expired | `0xd55055de…` [🐞](https://debug.barn.cow.fi/order/0xd55055decfb0afc695dacfa1af268b3aaa1584d4090ca3ce69c863c2d0205f26) |
| 21:28:07 | wSOL → USDT | sell | Winner too late: creation blockhash expired | `0x8d892474…` [🐞](https://debug.barn.cow.fi/order/0x8d892474a79dc4d4d436ec3b155f915ecfa443362b5cf757e7fe9dd96f661df9) |
| 21:28:07 | wSOL → TRUMP | sell | Winner too late: creation blockhash expired | `0x1135fc4c…` [🐞](https://debug.barn.cow.fi/order/0x1135fc4c6f57c1ad71be0ee2462fa5892881ff32e6ea6c80a80ee72c88fb777a) |
| 21:28:07 | wSOL → Jimothy | sell | Winner too late: creation blockhash expired | `0xed6d249f…` [🐞](https://debug.barn.cow.fi/order/0xed6d249febce59751a0c848db87bf8c6d3f6699e0e0ddb8eb455d76753429cdb) |
| 21:28:08 | wSOL → SPYx | sell | Winner too late: creation blockhash expired | `0x6a09ff51…` [🐞](https://debug.barn.cow.fi/order/0x6a09ff5116b2b719267bc53f5c86ffbfd87a21b318815a5d05a409fc0d2aefbd) |
| 21:28:08 | wSOL → PYUSD | sell | Winner too late: creation blockhash expired | `0x487e7969…` [🐞](https://debug.barn.cow.fi/order/0x487e7969d0db1f32041163a2529d03820e5dd530c6e5d9af5fe07664c85d91e6) |
| 21:28:08 | wSOL → cbBTC | sell | Winner too late: creation blockhash expired | `0x66cd4994…` [🐞](https://debug.barn.cow.fi/order/0x66cd499406ed3331fb4dcd08ce8921c664d757fdbde754257096800ac16137a1) |
| 21:28:10 | wSOL → WBTC | sell | Winner too late: creation blockhash expired | `0x8d79f18f…` [🐞](https://debug.barn.cow.fi/order/0x8d79f18fc08529c41019d9161e8e6a666c4da39c9eb38f151f0bd3da68ee10e8) |
| 21:28:10 | wSOL → PAID | sell | Winner too late: creation blockhash expired | `0x76cc9869…` [🐞](https://debug.barn.cow.fi/order/0x76cc9869b9c43d504334e9779491817405e806d1991fc7f541feb0dcbb12183f) |
| 21:28:11 | wSOL → USDG | sell | Winner too late: creation blockhash expired | `0x8843629a…` [🐞](https://debug.barn.cow.fi/order/0x8843629a183bbda92a046f52770d402746c5e08a49ebafd1fe040556ca4c5077) |
| 21:28:11 | wSOL → JitoSOL | sell | Winner too late: creation blockhash expired | `0x4f0865f6…` [🐞](https://debug.barn.cow.fi/order/0x4f0865f62d8008683cdce3bf370d24826d898288d63021e27557dda1fbf6b7d7) |
| 21:28:11 | wSOL → ETH | sell | Winner too late: creation blockhash expired | `0x0d3f4653…` [🐞](https://debug.barn.cow.fi/order/0x0d3f465339459df34e7819a5c42ce81bdc56536b7cbe4de45989c8d8191fd2fb) |
| 21:28:11 | wSOL → CASH | sell | Winner too late: creation blockhash expired | `0xac629d25…` [🐞](https://debug.barn.cow.fi/order/0xac629d25535dc327a7b9b3a7ff13ab5c47ff4450fced8be0a5149574b5c91f2c) |
| 21:28:12 | wSOL → Fartcoin | sell | Winner too late: creation blockhash expired | `0xec842424…` [🐞](https://debug.barn.cow.fi/order/0xec842424fe7f3021569cbae5b98997396ce084fab51455028a947b2eb314c741) |
| 21:28:12 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x972d2fa4…` [🐞](https://debug.barn.cow.fi/order/0x972d2fa4530cdf51d9771b954d896ba8a8334a4cdbd9ebd0f79a5aa17b04a9e4) |
| 21:28:14 | wSOL → ZEC | sell | Winner too late: creation blockhash expired | `0x8cc08707…` [🐞](https://debug.barn.cow.fi/order/0x8cc08707dc2ba14ade027624bd2c7451466dc23f1b3cef2758326c6c1fc18725) |
| 21:28:14 | wSOL → USD1 | sell | Winner too late: creation blockhash expired | `0xe9d6151c…` [🐞](https://debug.barn.cow.fi/order/0xe9d6151c6819739a2b9335f42206ade63fda177f382faca8475ef0bcec41c933) |
| 21:28:15 | wSOL → HYPE | sell | Winner too late: creation blockhash expired | `0xa72f564d…` [🐞](https://debug.barn.cow.fi/order/0xa72f564dd67c25566dc95014a238673f4730d431e2adf9ff35d9d129e56f7559) |
| 21:28:15 | wSOL → JUP | sell | Winner too late: creation blockhash expired | `0xb5aeaaee…` [🐞](https://debug.barn.cow.fi/order/0xb5aeaaeeac842179d948561704e3149909138bd6bbf5be5ebf0b7c67741706f0) |
| 21:28:17 | wSOL → STONK | sell | Winner too late: creation blockhash expired | `0x84f19d2d…` [🐞](https://debug.barn.cow.fi/order/0x84f19d2dbdfdc4413351c9604857c49048ceeba021ec72a7ee92e25b70784927) |
| 21:28:17 | wSOL → USELESS | sell | Winner too late: creation blockhash expired | `0x8243cf3d…` [🐞](https://debug.barn.cow.fi/order/0x8243cf3d4793165b8ece3b7c28460c833eceab2e36ecaaa1cf36f341e71e13c8) |
| 21:28:18 | wSOL → PENGU | sell | Winner too late: creation blockhash expired | `0xbf380890…` [🐞](https://debug.barn.cow.fi/order/0xbf38089008f060eccf8186f686f516f07d616f136929a7119f1075b21d9b2967) |
| 21:28:18 | wSOL → SKHY | sell | Winner too late: creation blockhash expired | `0x6fc1e134…` [🐞](https://debug.barn.cow.fi/order/0x6fc1e134cdaf072c553663baee2ca95443c33fd994fbd1297d967569abb185ec) |
| 21:28:18 | wSOL → CRCLx | sell | Winner too late: creation blockhash expired | `0x8f6508c8…` [🐞](https://debug.barn.cow.fi/order/0x8f6508c893179438fd154bb3bafc7f41f4f1f1cc1a6972c9e6735db66fbf4d6d) |
| 21:28:19 | wSOL → USDe | sell | Winner too late: creation blockhash expired | `0x5ac4ae85…` [🐞](https://debug.barn.cow.fi/order/0x5ac4ae85062bfc600f9e78585e0cd03f44b2afd7839677433c815988833aff52) |
| 21:28:20 | wSOL → ANTFUN | sell | Winner too late: creation blockhash expired | `0xf8b1270f…` [🐞](https://debug.barn.cow.fi/order/0xf8b1270f891c5710c8bb69b4f0aa6f4dab29650fe4339b5f8f7e063acf313347) |
| 21:28:27 | wSOL → fone | sell | Winner too late: creation blockhash expired | `0xb60f59f0…` [🐞](https://debug.barn.cow.fi/order/0xb60f59f042e4faa3cf4b7b6e41d7e52423964727855e6c96b7c47dd1eaca2442) |
| 21:28:28 | wSOL → ANSEM | sell | Winner too late: creation blockhash expired | `0x40353cfe…` [🐞](https://debug.barn.cow.fi/order/0x40353cfe61ca1c15846e689e4fee5fc97581aa2ef0dfb15807c02a8cd8124cfe) |
| 21:28:30 | wSOL → RAY | sell | Winner too late: creation blockhash expired | `0x3103f5ce…` [🐞](https://debug.barn.cow.fi/order/0x3103f5ce153cdb04747aa12e7dc137eaac0277e20bbbd3c0c35f9896be81da1a) |
| 21:28:34 | wSOL → JupUSD | sell | Winner too late: creation blockhash expired | `0xfc24de19…` [🐞](https://debug.barn.cow.fi/order/0xfc24de19bb29637836dd1c3cfc94927976798f86e767e4e37b9e44dcc220b8d4) |
| 21:28:51 | wSOL → PRIME | sell | Winner too late: creation blockhash expired | `0x7ffc5edd…` [🐞](https://debug.barn.cow.fi/order/0x7ffc5edd441acfda4760e043364fafce0ab38cab0da4376f7e670282156ddd60) |
| 21:28:51 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0xb9c3c4d6…` [🐞](https://debug.barn.cow.fi/order/0xb9c3c4d62e942d91e69c67abe1daeba804337ba82c7b39d5f37ac1f405ccdd2a) |
| 21:28:53 | wSOL → TSLAx | sell | Winner too late: creation blockhash expired | `0x5e90e3a3…` [🐞](https://debug.barn.cow.fi/order/0x5e90e3a3e76d0b352948f2082d7276bced663e9a7195f3adca1b441196ba7192) |
| 21:28:53 | SPYx → SOL (native) | sell | Winner too late: creation blockhash expired | `0x2a8499cf…` [🐞](https://debug.barn.cow.fi/order/0x2a8499cfac0f39c253fba88f44a077cf7a58ad59a9bf4ab708cfcfc8fe2156ad) |
| 21:28:54 | wSOL → EMBER | sell | Winner too late: creation blockhash expired | `0x0c66bc27…` [🐞](https://debug.barn.cow.fi/order/0x0c66bc27588fee8dd632c47204f177da0d928cf8b6b321550b6e97ea03eccb94) |
| 21:28:55 | wSOL → cbBTC | buy | Winner too late: creation blockhash expired | `0x72556c57…` [🐞](https://debug.barn.cow.fi/order/0x72556c5712836f7af78d6cc7451e93a95bebc68a031c9796d1697a1803410626) |
| 21:28:56 | wSOL → USDT | buy | Winner too late: creation blockhash expired | `0x8c2cf57c…` [🐞](https://debug.barn.cow.fi/order/0x8c2cf57ccda59e65234bf16112aff1d2fb797dba71fe08e8db40a7d4c868290b) |
| 21:28:56 | PAID → SOL (native) | sell | Winner too late: creation blockhash expired | `0x1d08020a…` [🐞](https://debug.barn.cow.fi/order/0x1d08020a875bced40689981195aa7c9797864af5bfab10c08152b2cb4297219d) |
| 21:28:56 | wSOL → WBTC | buy | Winner too late: creation blockhash expired | `0x8be67f72…` [🐞](https://debug.barn.cow.fi/order/0x8be67f72e7d7f72837db6787acbe696bdc3d959577777d81d9282197d7f03bca) |
| 21:28:59 | JitoSOL → SOL (native) | sell | Winner too late: creation blockhash expired | `0x6e058b71…` [🐞](https://debug.barn.cow.fi/order/0x6e058b7100241c6911173283d523b5bb443233f3bfe5309ce883ea3c2d40bd4b) |
| 21:28:59 | wSOL → syrupUSDC | sell | Winner too late: creation blockhash expired | `0xd1a99cfc…` [🐞](https://debug.barn.cow.fi/order/0xd1a99cfc156b7ea9d9f4c65840858303e47f019ced668fe391aa7721f4df70ff) |
| 21:28:59 | wSOL → ETH | buy | Winner too late: creation blockhash expired | `0x81b253b1…` [🐞](https://debug.barn.cow.fi/order/0x81b253b11f164b1f1670df4baa772d92edbe32187ea2117393f7f0691eca7cea) |
| 21:29:00 | Fartcoin → SOL (native) | sell | Winner too late: creation blockhash expired | `0x431f3fa0…` [🐞](https://debug.barn.cow.fi/order/0x431f3fa0224d0bade41c5e981e6af161256f36b5e57a2730107d7cb7f02cd837) |
| 21:29:01 | wSOL → BOME | sell | Winner too late: creation blockhash expired | `0xd09c9aee…` [🐞](https://debug.barn.cow.fi/order/0xd09c9aee26866556d32628523fb3b701b37442e28c0d0ce17bfd03412d053cbf) |
| 21:29:01 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x58708012…` [🐞](https://debug.barn.cow.fi/order/0x58708012ccf7ee775d982ec4c2adbcd6ea9ae0a9951fa89bda9ef40fe0aea833) |
| 21:29:02 | wSOL → STONK | buy | Winner too late: creation blockhash expired | `0x02a7565a…` [🐞](https://debug.barn.cow.fi/order/0x02a7565a3470d94f9c7e54e88e9f0376e223d7ace401cb9d669ca1f70fe24eec) |
| 21:29:02 | wSOL → ZEC | buy | Winner too late: creation blockhash expired | `0x0c2ae9f2…` [🐞](https://debug.barn.cow.fi/order/0x0c2ae9f26153615a6d1ce2f2b86f3f481afe37988e7dd88a6861fd1998c00be2) |
| 21:29:02 | wSOL → USD1 | buy | Winner too late: creation blockhash expired | `0xec91df97…` [🐞](https://debug.barn.cow.fi/order/0xec91df9794d2438d6d2246ae8ae33c5651f8ad7b4d40178c45ebfeb736354d37) |
| 21:29:03 | PENGU → SOL (native) | sell | Winner too late: creation blockhash expired | `0x17638be3…` [🐞](https://debug.barn.cow.fi/order/0x17638be34c8f73a84b69a83e5c71360ae3b77fac58f8f153a161ffb7486d7df6) |
| 21:29:05 | wSOL → MSTRx | sell | Winner too late: creation blockhash expired | `0x7a25ba64…` [🐞](https://debug.barn.cow.fi/order/0x7a25ba642e801667ec4fad486dc52dd0e4d3463bbb615b9a514b4279131adf03) |
| 21:29:06 | USDe → SOL (native) | sell | Winner too late: creation blockhash expired | `0x0640bb32…` [🐞](https://debug.barn.cow.fi/order/0x0640bb3212557f8af3db139799e5be1be482091b41fc1c42fadcb7b34d221165) |
| 21:29:06 | wSOL → HYPE | buy | Winner too late: creation blockhash expired | `0x2b674d58…` [🐞](https://debug.barn.cow.fi/order/0x2b674d58a7516cbcc28be3908246a86b3f22070db34a87ae8d8fc791b94c9bde) |
| 21:29:06 | wSOL → JUP | buy | Winner too late: creation blockhash expired | `0xa998abb1…` [🐞](https://debug.barn.cow.fi/order/0xa998abb1fbba526df28bc97058fa057885d5946c5d595cc7136e7f7da72d2b52) |
| 21:29:09 | wSOL → TROLL | sell | Winner too late: creation blockhash expired | `0x7dc9e476…` [🐞](https://debug.barn.cow.fi/order/0x7dc9e476db0fb3bdcfe97a5599909732733b985aa5a087e2f32688a0814c594d) |
| 21:29:09 | wSOL → USELESS | buy | Winner too late: creation blockhash expired | `0x40d36295…` [🐞](https://debug.barn.cow.fi/order/0x40d3629527172155a89e89bafbd4844e07acd9ad1c6f66114049c298c0c12ce8) |
| 21:29:09 | wSOL → baton | sell | Winner too late: creation blockhash expired | `0xd660271a…` [🐞](https://debug.barn.cow.fi/order/0xd660271a1f6f0a2cddafc2b7702c9c911995ecbdf349bdf673d9e3e2d101080e) |
| 21:29:14 | wSOL → RAY | buy | Winner too late: creation blockhash expired | `0xf27441b2…` [🐞](https://debug.barn.cow.fi/order/0xf27441b2366d7df1c85f3a916ab854cb5337e326af4e52eb6179356c1a58dd04) |
| 21:29:14 | wSOL → Agency | sell | Winner too late: creation blockhash expired | `0xeffbacf0…` [🐞](https://debug.barn.cow.fi/order/0xeffbacf0f8dbd690080e47379b26455a3e5a34c04a037cc671c68bec78534544) |
| 21:29:15 | wSOL → JLP | sell | Winner too late: creation blockhash expired | `0xc05f03aa…` [🐞](https://debug.barn.cow.fi/order/0xc05f03aabf4a851bc4509911c92bf0c92ee4e0b05fb67fc49357ccb6fb425a24) |
| 21:29:18 | wSOL → JupUSD | buy | Winner too late: creation blockhash expired | `0xdb266394…` [🐞](https://debug.barn.cow.fi/order/0xdb26639452e5e4ad3534ac9c80e1566279c40a553b1fb1fdfdb72b12ef529bf7) |
| 21:29:35 | wSOL → $WIF | sell | Winner too late: creation blockhash expired | `0xdda51030…` [🐞](https://debug.barn.cow.fi/order/0xdda510305eb7db2c458fccfb1c2b48336716e95c135f567bb85c9bf9eaa15e0f) |
| 21:29:35 | wSOL → ONyc | sell | Winner too late: creation blockhash expired | `0x34d7656e…` [🐞](https://debug.barn.cow.fi/order/0x34d7656e181871b2bf2ebeaf23440bb0ba5ceb5d8ce84dc34d180e987de22830) |
| 21:29:37 | wSOL → KET | sell | Winner too late: creation blockhash expired | `0xcdadb9b7…` [🐞](https://debug.barn.cow.fi/order/0xcdadb9b706a63996e27ce28cf7fcbc56881f1a364ac41141ba453719b4739cb5) |
| 21:29:38 | wSOL → JEANPHIL | sell | Winner too late: creation blockhash expired | `0xaeab411d…` [🐞](https://debug.barn.cow.fi/order/0xaeab411d2625097b605bf0287bf2537a36ce23a1d74ba8319e1fdc10e724152a) |
| 21:29:39 | wSOL → NVDAx | sell | Winner too late: creation blockhash expired | `0x531b3d5c…` [🐞](https://debug.barn.cow.fi/order/0x531b3d5cd8fc2d091e81d1e83eea81a1fd87917dc2ceed8ff14b7556b9dafb22) |
| 21:29:40 | wSOL → MET | sell | Winner too late: creation blockhash expired | `0xad84e55f…` [🐞](https://debug.barn.cow.fi/order/0xad84e55fff62ac272d0513a0def930825e9340fe7160d5be37477c18c0b7a050) |
| 21:29:42 | wSOL → EURC | sell | Winner too late: creation blockhash expired | `0xa88fcf1e…` [🐞](https://debug.barn.cow.fi/order/0xa88fcf1e751d77cdd148fed74dde7e2804b9b68dd6e3c74f11927e3912d1fdc4) |
| 21:29:43 | wSOL → EMBER | buy | Winner too late: creation blockhash expired | `0x1daccc1e…` [🐞](https://debug.barn.cow.fi/order/0x1daccc1ed25f03e37ae3ea8fdd8323a746e1dbed8976882a13b898e22b4109d2) |
| 21:29:43 | wSOL → e/acc | sell | Winner too late: creation blockhash expired | `0xf6093925…` [🐞](https://debug.barn.cow.fi/order/0xf6093925ac5e329194dcde03854b8fee6555cef01900f3d611a0c43f386e5e05) |
| 21:29:44 | wSOL → TripleT | sell | Winner too late: creation blockhash expired | `0xa8eeace4…` [🐞](https://debug.barn.cow.fi/order/0xa8eeace494a4ba2dbbd6eb48843298ae450c97bbe37857fc8b1fd3a60a63334d) |
| 21:29:45 | wSOL → BOME | buy | Winner too late: creation blockhash expired | `0xadb9c592…` [🐞](https://debug.barn.cow.fi/order/0xadb9c59229f5453d4c1b6e758616a0e15cf64df16a589ca63090fdbad75614bf) |
| 21:29:45 | wSOL → USX | sell | Winner too late: creation blockhash expired | `0xb2bb2174…` [🐞](https://debug.barn.cow.fi/order/0xb2bb2174d61c6be2637b7c696fe83e4e146505494f5d54e849800fe34acffa19) |
| 21:29:46 | wSOL → CARDS | sell | Winner too late: creation blockhash expired | `0xf55d568c…` [🐞](https://debug.barn.cow.fi/order/0xf55d568caeffde63e99e205df4a134ea1f4d32725fa86f7786d413819f3d1dc9) |
| 21:29:47 | wSOL → BP | sell | Winner too late: creation blockhash expired | `0xabdeee0e…` [🐞](https://debug.barn.cow.fi/order/0xabdeee0ec6322c952e95d6409fbd53fe10b2c0ed83b6b1a8e832ab5bcb5b8ccf) |
| 21:29:47 | wSOL → MU | sell | Winner too late: creation blockhash expired | `0x2bf3a0dc…` [🐞](https://debug.barn.cow.fi/order/0x2bf3a0dcdf9d4c04255e58f9400b7abd713c5cf07c9babb6e5649dee93c39b4c) |
| 21:29:49 | wSOL → OTC | sell | Winner too late: creation blockhash expired | `0x4a2bd2c0…` [🐞](https://debug.barn.cow.fi/order/0x4a2bd2c024dc2df877f8fdb5588bacb903255bf26a36a008d2002fa04e64402c) |
| 21:29:50 | wSOL → syrupUSDC | buy | Winner too late: creation blockhash expired | `0x9aef12d5…` [🐞](https://debug.barn.cow.fi/order/0x9aef12d584a576fc36c8fb28ec9b3e584d1333ebc40dfa4d0700b0cd8deaac1e) |
| 21:29:52 | wSOL → ORCA | sell | Winner too late: creation blockhash expired | `0x423ed607…` [🐞](https://debug.barn.cow.fi/order/0x423ed6076d1f732550dbd5cf567a2b5633dafd2c1654a1d343781bffeb840a14) |
| 21:29:52 | wSOL → Bonk | sell | Winner too late: creation blockhash expired | `0x65e3d878…` [🐞](https://debug.barn.cow.fi/order/0x65e3d878a36b31a8284239b13fd58305729e2674582e123d2052814db6a26445) |
| 21:29:54 | wSOL → TROLL | buy | Winner too late: creation blockhash expired | `0xa35f46c0…` [🐞](https://debug.barn.cow.fi/order/0xa35f46c0aadd468d3edef2ed7509937c6bcff4cb72687583070ebdcaae629539) |
| 21:29:55 | wSOL → SI | sell | Winner too late: creation blockhash expired | `0xaddfc108…` [🐞](https://debug.barn.cow.fi/order/0xaddfc108ea680738464d3a8a3fd7d5f0535f8da322d0e5584d7bc67c6770e8c1) |
| 21:29:57 | wSOL → JupSOL | sell | Winner too late: creation blockhash expired | `0x9145cc49…` [🐞](https://debug.barn.cow.fi/order/0x9145cc493f830bae60da17957b45d8067596c6649de0b70430dd4d817450788a) |
| 21:29:58 | wSOL → SPCX | sell | Winner too late: creation blockhash expired | `0x9a7a2fcd…` [🐞](https://debug.barn.cow.fi/order/0x9a7a2fcd650241e67ec896fd08df1eb92686455976f0975e405007de804713d8) |
| 21:29:58 | wSOL → SNDK | sell | Winner too late: creation blockhash expired | `0x4679f6c0…` [🐞](https://debug.barn.cow.fi/order/0x4679f6c00447d461cb0a6fd022f918e406951f9af8aa4467d3a777f095ec07ba) |
| 21:29:59 | wSOL → KMNO | sell | Winner too late: creation blockhash expired | `0xb37059e4…` [🐞](https://debug.barn.cow.fi/order/0xb37059e4b5c328df51cd3bc0416ef8c593d796810e1707759bad2235f86e4b9a) |
| 21:29:59 | wSOL → BOT | sell | Winner too late: creation blockhash expired | `0xfb343dc3…` [🐞](https://debug.barn.cow.fi/order/0xfb343dc3843cfc813b8ca23f134855d376824e624a7f43d9f7a6212ba95c312e) |
| 21:30:02 | wSOL → SPCXx | sell | Winner too late: creation blockhash expired | `0xa72bf161…` [🐞](https://debug.barn.cow.fi/order/0xa72bf161f914a04dc75efd26ab8608d622bbc3478f762753e1404a624329a0ce) |
| 21:30:02 | wSOL → JLP | buy | Winner too late: creation blockhash expired | `0x586cd285…` [🐞](https://debug.barn.cow.fi/order/0x586cd285d2b342ecc11750cbe043024b78441d9d1280e2909143405b83b44e85) |
| 21:30:02 | wSOL → GLDx | sell | Winner too late: creation blockhash expired | `0x412d7e27…` [🐞](https://debug.barn.cow.fi/order/0x412d7e27e0de1096add83ba8947d8a235da3fcdb5ae94ded530d2c1b3fc30971) |
| 21:30:04 | wSOL → TOAD | sell | Winner too late: creation blockhash expired | `0x4addcbdd…` [🐞](https://debug.barn.cow.fi/order/0x4addcbddfac325b51e5b21a70a4bc51b1823a13111da172392dc3d4d5708ddc2) |
| 21:30:22 | wSOL → $WIF | buy | Winner too late: creation blockhash expired | `0xd7a26913…` [🐞](https://debug.barn.cow.fi/order/0xd7a2691351614674e89bcdec3625d8b23e10594e0cc6887b278cca6d688c61d2) |
| 21:30:22 | wSOL → ONyc | buy | Winner too late: creation blockhash expired | `0x276c76b2…` [🐞](https://debug.barn.cow.fi/order/0x276c76b2d0cb8adfbecebcb33b297368723bf0064ffeffbe081fe8da9d44797a) |
| 21:30:23 | wSOL → hyUSD | sell | Winner too late: creation blockhash expired | `0x196c17dc…` [🐞](https://debug.barn.cow.fi/order/0x196c17dca3e09b671b915491549658425e47a18ec4a038f92d5fd6ecec141b53) |
| 21:30:25 | wSOL → GO | sell | Winner too late: creation blockhash expired | `0x3ae4a61f…` [🐞](https://debug.barn.cow.fi/order/0x3ae4a61f43bd6cfaaaf9f286c10c220b6dd8765a99243dafb319e94651f132d5) |
| 21:30:25 | wSOL → BIRB | sell | Winner too late: creation blockhash expired | `0x35f975de…` [🐞](https://debug.barn.cow.fi/order/0x35f975de860b6eb5a897d96c3f8bc6869ad59666dddc0cedd70a620f21072070) |
| 21:30:26 | wSOL → BULLSHIT | sell | Winner too late: creation blockhash expired | `0xf34b21f0…` [🐞](https://debug.barn.cow.fi/order/0xf34b21f067b68419b279fbf83f714cbe6e2d12451f844217d23ef6b99bc08b5f) |
| 21:30:27 | wSOL → MET | buy | Winner too late: creation blockhash expired | `0xf5dacfb1…` [🐞](https://debug.barn.cow.fi/order/0xf5dacfb1b7d76a480685ff6f8fe72d9b85af8b1c37ef7f0b537cb75e5e660dd6) |
| 21:30:28 | wSOL → CARDS | buy | Winner too late: creation blockhash expired | `0xbe17d187…` [🐞](https://debug.barn.cow.fi/order/0xbe17d187d4ee4a1268c942b6cb2ed6ac0d8dfbfcaefba7f5f637d0139e4a5123) |
| 21:30:29 | wSOL → EURC | buy | Winner too late: creation blockhash expired | `0xf986af68…` [🐞](https://debug.barn.cow.fi/order/0xf986af68939bc6a3319c8bc61227f767d128a4bd469456bb99953c7c21f6f70b) |
| 21:30:31 | wSOL → SPX | sell | Winner too late: creation blockhash expired | `0xfbb63eee…` [🐞](https://debug.barn.cow.fi/order/0xfbb63eeec83514403dd2c71ee7091f1d485015a02ff461ff1ccae83d4a9f922c) |
| 21:30:31 | wSOL → neet | sell | Winner too late: creation blockhash expired | `0xb76b4035…` [🐞](https://debug.barn.cow.fi/order/0xb76b403501a4109348029bc178f7b178ec91785203b1365af8294e7bd41d248c) |
| 21:30:32 | wSOL → SKR | sell | Winner too late: creation blockhash expired | `0x7d9fdebd…` [🐞](https://debug.barn.cow.fi/order/0x7d9fdebdf063a398cfdfa8075ba055198b61ff6ed0a954a66bcdda054a29b405) |
| 21:30:32 | wSOL → Buttcoin | sell | Winner too late: creation blockhash expired | `0x3015b9d2…` [🐞](https://debug.barn.cow.fi/order/0x3015b9d29294aec0501033ad482247a949f9e73a3bc13129fec8058a43bc95bd) |
| 21:30:32 | wSOL → USX | buy | Winner too late: creation blockhash expired | `0xe28ad097…` [🐞](https://debug.barn.cow.fi/order/0xe28ad097f0759d6c20a3b630343dcd13327061b7b499c8e60c1486b3228d2e24) |
| 21:30:35 | wSOL → BP | buy | Winner too late: creation blockhash expired | `0xbebca979…` [🐞](https://debug.barn.cow.fi/order/0xbebca979a62f46a72a8125d2704d6291757e5e40fd45d1f54e159499c000c36c) |
| 21:30:35 | wSOL → ORCA | buy | Winner too late: creation blockhash expired | `0x720c0ced…` [🐞](https://debug.barn.cow.fi/order/0x720c0ced369d3f88b4c16774c6a08aad40bbea7054aabaf85bcba85c384223b9) |
| 21:30:36 | wSOL → Bonk | buy | Winner too late: creation blockhash expired | `0xdca225a0…` [🐞](https://debug.barn.cow.fi/order/0xdca225a01aedae06a36422098d367fc0bc8cbde4fb75f6b0624bf92a49d44b6e) |
| 21:30:36 | wSOL → GEOD | sell | Winner too late: creation blockhash expired | `0x61b74264…` [🐞](https://debug.barn.cow.fi/order/0x61b74264bb5a145f569f545d2786c2b4bb54a63961358c1de339834bfd92f182) |
| 21:30:37 | wSOL → Cupsey | sell | Winner too late: creation blockhash expired | `0x4c79e548…` [🐞](https://debug.barn.cow.fi/order/0x4c79e548df22c302a8255c9f6214cab0f1ff9ec72e3599a43f229b9b80cc6893) |
| 21:30:37 | wSOL → mSOL | sell | Winner too late: creation blockhash expired | `0xbb9439d2…` [🐞](https://debug.barn.cow.fi/order/0xbb9439d283ccf548efaa0eca8697d911b3fd6c4ee4046d02fbaffc3a6b20953f) |
| 21:30:41 | wSOL → JTO | sell | Winner too late: creation blockhash expired | `0xeecd20f4…` [🐞](https://debug.barn.cow.fi/order/0xeecd20f462b184f2a799b80fe311d8968d9542ba02b86361a2f2798c76f8d715) |
| 21:30:42 | wSOL → xHYPE | sell | Winner too late: creation blockhash expired | `0x1a453a8d…` [🐞](https://debug.barn.cow.fi/order/0x1a453a8d16e69dfadaa071f99505b986cd560f5a72c2317637cf78a31f6c2f20) |
| 21:30:44 | wSOL → eUSX | sell | Winner too late: creation blockhash expired | `0xe194fbb4…` [🐞](https://debug.barn.cow.fi/order/0xe194fbb407fba5c4ecaefa25d9e3f30c0190a242440fdd1358997db589cc09ad) |
| 21:30:45 | wSOL → JupSOL | buy | Winner too late: creation blockhash expired | `0x67560947…` [🐞](https://debug.barn.cow.fi/order/0x675609472e2da5501cdc083f09c2703716e8e894daa227441fc3e1d1e480f745) |
| 21:30:46 | wSOL → USDS | sell | Winner too late: creation blockhash expired | `0xf627ec35…` [🐞](https://debug.barn.cow.fi/order/0xf627ec35bfbb2bc6725456f5fcebb0a118859bb5b64971ef7d033ada72964c93) |
| 21:30:46 | wSOL → QQQx | sell | Winner too late: creation blockhash expired | `0x159a0474…` [🐞](https://debug.barn.cow.fi/order/0x159a0474e08bce8a3a0190cd74db6c8fc3b46654d6c442c536f8516743bf169c) |
| 21:30:47 | wSOL → MSFTx | sell | Winner too late: creation blockhash expired | `0xa7addab2…` [🐞](https://debug.barn.cow.fi/order/0xa7addab2f802c15b79ce85eea15dd003cf1459dc5efc2228688d626154b3dcd3) |
| 21:30:47 | wSOL → MEW | sell | Winner too late: creation blockhash expired | `0xb0e43624…` [🐞](https://debug.barn.cow.fi/order/0xb0e4362494fdf0187ce50a90f5a1817fad06419d4f0f1d72dae9d168fa8389b9) |
| 21:30:48 | wSOL → KMNO | buy | Winner too late: creation blockhash expired | `0x03ca6f49…` [🐞](https://debug.barn.cow.fi/order/0x03ca6f49c7beb59d29a21d2d25863b6b0c878e3c5343b8c66ef6615b210dcc98) |
| 21:30:50 | wSOL → GRASS | sell | Winner too late: creation blockhash expired | `0xc64ae32a…` [🐞](https://debug.barn.cow.fi/order/0xc64ae32ac5149661cc41082931e0de241f24b250e5f81a51a8eb157c50496824) |
| 21:31:06 | wSOL → HIGGS | sell | Winner too late: creation blockhash expired | `0xa3ec53f5…` [🐞](https://debug.barn.cow.fi/order/0xa3ec53f5ed6a20d4f5b9939cf85965def02f52f0e7601c78806739e07351ff91) |
| 21:31:06 | wSOL → ELON | sell | Winner too late: creation blockhash expired | `0x3d4b42c9…` [🐞](https://debug.barn.cow.fi/order/0x3d4b42c9af35aa96d290cd51eac9610aab1aa94ee0c0d449311dd38dbcc03128) |
| 21:31:09 | wSOL → hyUSD | buy | Winner too late: creation blockhash expired | `0x7b87c769…` [🐞](https://debug.barn.cow.fi/order/0x7b87c769b8d6d8b4527cedc101a087343e136c1434c826cdd87f301d94d1bdf7) |
| 21:31:09 | wSOL → GO | buy | Winner too late: creation blockhash expired | `0x00b25b86…` [🐞](https://debug.barn.cow.fi/order/0x00b25b868b94d4d8ff1883a3d4d2cc4ff543c71b2f4fa7e46f8565a8b6e72c24) |
| 21:31:10 | wSOL → BIRB | buy | Winner too late: creation blockhash expired | `0x44919c4b…` [🐞](https://debug.barn.cow.fi/order/0x44919c4b7611c77e1b83bb59b5504f87facda69bbfed8c9b555ed47d3df8f78f) |
| 21:31:12 | wSOL → PYTH | sell | Winner too late: creation blockhash expired | `0xf1c6d703…` [🐞](https://debug.barn.cow.fi/order/0xf1c6d703332eefaa2f307cb121cc6bc1497c68302b41bd22b577613b8f67e43f) |
| 21:31:12 | wSOL → wXRP | sell | Winner too late: creation blockhash expired | `0xce3e7140…` [🐞](https://debug.barn.cow.fi/order/0xce3e71401acab516e69fecb63dca637c16fbec192b34b8b1da944407cc52ed6e) |
| 21:31:14 | wSOL → MANIFEST | sell | Winner too late: creation blockhash expired | `0x94dbfbd8…` [🐞](https://debug.barn.cow.fi/order/0x94dbfbd8a2172a0d4e4c5a89462cb3b7665ba8dac98ca32c41b7b337a2ce4740) |
| 21:31:14 | wSOL → HOOKED | sell | Winner too late: creation blockhash expired | `0x35a9314d…` [🐞](https://debug.barn.cow.fi/order/0x35a9314d42e559cd0b2a4592a235374df6d06a48350282e1e2b0713523e1befa) |
| 21:31:15 | wSOL → neet | buy | Winner too late: creation blockhash expired | `0xd4f7b70a…` [🐞](https://debug.barn.cow.fi/order/0xd4f7b70ac94c30348de8a0e715a8beecd39854e2be9bf5b4eb03d247e585b0c9) |
| 21:31:16 | wSOL → SKR | buy | Winner too late: creation blockhash expired | `0xeae69d8b…` [🐞](https://debug.barn.cow.fi/order/0xeae69d8bb60ae64af590b612eeb08bf367c8b011050ed5b16d11fd9661e47642) |
| 21:31:17 | wSOL → aura | sell | Winner too late: creation blockhash expired | `0x86dbeade…` [🐞](https://debug.barn.cow.fi/order/0x86dbeade5bc47762e457da484eb43925fc4061554cd08884bb7c040904d935a6) |
| 21:31:18 | wSOL → xSOL | sell | Winner too late: creation blockhash expired | `0x26538a83…` [🐞](https://debug.barn.cow.fi/order/0x26538a839811ddb13e051edb60b01e9f1c2df6f66d7f85adf4706eff6f2dd62f) |
| 21:31:19 | wSOL → SPX | buy | Winner too late: creation blockhash expired | `0x2f74d562…` [🐞](https://debug.barn.cow.fi/order/0x2f74d56212b635fea7f17d4b71d04ef169f9df53e230fb5bdb85864b4c9f722a) |
| 21:31:20 | wSOL → ORE | sell | Winner too late: creation blockhash expired | `0xe2f23e2e…` [🐞](https://debug.barn.cow.fi/order/0xe2f23e2ea7c3ef93b1c88122b0a5805d7e9699aed3106eae47bd6809a7686f98) |
| 21:31:20 | wSOL → AVA | sell | Winner too late: creation blockhash expired | `0x1f127335…` [🐞](https://debug.barn.cow.fi/order/0x1f1273356972917fcdd673da853f2085de89fe0e9f89317f4c3f69f73b53e2f1) |
| 21:31:22 | wSOL → GEOD | buy | Winner too late: creation blockhash expired | `0x5723e3aa…` [🐞](https://debug.barn.cow.fi/order/0x5723e3aaadba91a9d82eb6c2d2d5375354c6f81773fc359e462820eb08a453f0) |
| 21:31:22 | wSOL → FO | sell | Winner too late: creation blockhash expired | `0xa634d1c4…` [🐞](https://debug.barn.cow.fi/order/0xa634d1c41dfc922fda601fe4db526bd5fb5e68f6094718c8fc196113369686d9) |
| 21:31:23 | wSOL → mSOL | buy | Winner too late: creation blockhash expired | `0x1e9a1a0a…` [🐞](https://debug.barn.cow.fi/order/0x1e9a1a0aa82a91719d0a5766908b923d6963fd4878066917ace620db05c43325) |
| 21:31:24 | wSOL → arc | sell | Winner too late: creation blockhash expired | `0x691b3fb9…` [🐞](https://debug.barn.cow.fi/order/0x691b3fb95e53e7ab75d91fd09d16ccc44c1fe7e243ff44e725a7a0848db51506) |
| 21:31:25 | wSOL → JTO | buy | Winner too late: creation blockhash expired | `0x522fd404…` [🐞](https://debug.barn.cow.fi/order/0x522fd404e6fe3a655f2a59f2fa3819e31fd0124207f9b7b614230c11ce81172a) |
| 21:31:27 | wSOL → xHYPE | buy | Winner too late: creation blockhash expired | `0xc2a2be5c…` [🐞](https://debug.barn.cow.fi/order/0xc2a2be5cbacda1f95db17ec834962a05982211ea2ede3b9d1e7a4e7d7ed27e59) |
| 21:31:29 | wSOL → eUSX | buy | Winner too late: creation blockhash expired | `0xacef551f…` [🐞](https://debug.barn.cow.fi/order/0xacef551f2fe8226c00d9abfeabb204366d938dd267bfc3b4d69fc907c71b36cb) |
| 21:31:30 | wSOL → METAx | sell | Winner too late: creation blockhash expired | `0x57455155…` [🐞](https://debug.barn.cow.fi/order/0x57455155383abe10486cfcd934a0fa82b67b648227a5f568a8d9bdb22e66bfbc) |
| 21:31:31 | wSOL → USDS | buy | Winner too late: creation blockhash expired | `0xe85c8db9…` [🐞](https://debug.barn.cow.fi/order/0xe85c8db9369357c8941d2d9602258bba304e4ebe3ad8d8b53364b47842d4ee35) |
| 21:31:32 | wSOL → Jotchua | sell | Winner too late: creation blockhash expired | `0x9fe21c56…` [🐞](https://debug.barn.cow.fi/order/0x9fe21c56c71fc1292481050f6369ff5f78ed66c1b9031db39bbb2c31afe7b65e) |
| 21:31:32 | wSOL → MEW | buy | Winner too late: creation blockhash expired | `0x7f2bdd17…` [🐞](https://debug.barn.cow.fi/order/0x7f2bdd175f5f3ec64715aa994b0e16a84b9896d83ac82f189c938c8e82902858) |
| 21:31:33 | wSOL → TRX | sell | Winner too late: creation blockhash expired | `0x726a3769…` [🐞](https://debug.barn.cow.fi/order/0x726a3769458432047d79536bcbc2dc6cfcf240a4d06384ff7fee43c6b2551035) |
| 21:31:33 | wSOL → GRIFFAIN | sell | Winner too late: creation blockhash expired | `0x820c64b6…` [🐞](https://debug.barn.cow.fi/order/0x820c64b6c7b90dcf474ec13b2115622138643ef3ec75aa50b19e7255312b9754) |
| 21:31:35 | wSOL → GRASS | buy | Winner too late: creation blockhash expired | `0xdbe26f32…` [🐞](https://debug.barn.cow.fi/order/0xdbe26f3218c832651675bef0480843eca3a0e095d660efae28d8ba4a37da9e34) |
| 21:32:36 | wSOL → AVA | buy | Winner too late: creation blockhash expired | `0x7749f587…` [🐞](https://debug.barn.cow.fi/order/0x7749f58721c8638e9f9928d81f59fa6b6c3c67d7f7c8c0ab5860f86d86629af5) |
| 21:32:44 | wSOL → DOGE-1 | sell | Winner too late: creation blockhash expired | `0xc53446e9…` [🐞](https://debug.barn.cow.fi/order/0xc53446e9700db6d2313cfcaebe6df281ad904e1837ad58c1a90736ba089f1fae) |
| 21:32:45 | wSOL → pippin | sell | Winner too late: creation blockhash expired | `0xfc6e5ad9…` [🐞](https://debug.barn.cow.fi/order/0xfc6e5ad976bda592699a7a561f7cb495037acef7d6c842720234667916aab3e3) |
| 21:32:45 | wSOL → ACT | sell | Winner too late: creation blockhash expired | `0x89d45c26…` [🐞](https://debug.barn.cow.fi/order/0x89d45c263d44773ea6ff030e6d619111ac2cad57528dc68eb7831901dfa73aa0) |
| 21:32:47 | wSOL → RIV | sell | Winner too late: creation blockhash expired | `0x120692a2…` [🐞](https://debug.barn.cow.fi/order/0x120692a2239b1b4708ec930208ad3dba8964dafea08eae1c6a689deafaa259c3) |
| 21:32:47 | wSOL → AAPLx | sell | Winner too late: creation blockhash expired | `0x42e49d23…` [🐞](https://debug.barn.cow.fi/order/0x42e49d23903ae8d97195a2b2bb4c6055d8d9021297114fd89094dc31b7ec1958) |
| 21:32:48 | wSOL → HOOKED | buy | Winner too late: creation blockhash expired | `0xe2459241…` [🐞](https://debug.barn.cow.fi/order/0xe24592415e379d292a9dd3cba55641e4cf051e257c399289577ebb6b95c5bd75) |
| 21:32:48 | wSOL → PYTH | buy | Winner too late: creation blockhash expired | `0x6807127f…` [🐞](https://debug.barn.cow.fi/order/0x6807127ff3ba3c3ac641e73054a0f786c5e0bff09275472ae7e7396aaee225ba) |
| 21:32:49 | wSOL → POPCAT | sell | Winner too late: creation blockhash expired | `0x790d243b…` [🐞](https://debug.barn.cow.fi/order/0x790d243b451223012628833d442d5caf8a4efcc81271d0b65cdfb6cc56e693db) |
| 21:32:49 | wSOL → ZBCN | sell | Winner too late: creation blockhash expired | `0xdb823ba9…` [🐞](https://debug.barn.cow.fi/order/0xdb823ba92e8e68cccefd3212d686f5c2793d8f38d2e13726852113ea0e9e13ed) |
| 21:32:49 | wSOL → xSOL | buy | Winner too late: creation blockhash expired | `0x24d7176d…` [🐞](https://debug.barn.cow.fi/order/0x24d7176df3b889cf7a569f1bc2df6ab6b299e57af64f386bd8c5e655b96a4601) |
| 21:32:49 | wSOL → PEAQ | sell | Winner too late: creation blockhash expired | `0x42f4a093…` [🐞](https://debug.barn.cow.fi/order/0x42f4a093e813d6c83601a02644d5571d7ade7d45db11fffbc8075c0246f6d666) |
| 21:32:50 | wSOL → aura | buy | Winner too late: creation blockhash expired | `0xcdfda438…` [🐞](https://debug.barn.cow.fi/order/0xcdfda4388cc427269fc7d6e4c7c0fb99f3a109aac09c0e44423a460d801bbcc1) |
| 21:32:50 | wSOL → MADE | sell | Winner too late: creation blockhash expired | `0x8128b929…` [🐞](https://debug.barn.cow.fi/order/0x8128b9298453365729f9b423212227bc567b1f4aab322f65558fcba9af122e3f) |
| 21:32:51 | wSOL → arc | buy | Winner too late: creation blockhash expired | `0xa3253648…` [🐞](https://debug.barn.cow.fi/order/0xa32536481babcb4009da6f8d7438140e2d142e77418c32f7ae30a4682abbaa8c) |
| 21:32:52 | wSOL → HOODx | sell | Winner too late: creation blockhash expired | `0xb6c0bf47…` [🐞](https://debug.barn.cow.fi/order/0xb6c0bf472f4bec2a3d01585fdc8b66daae4dd92139e50166555b08cc3eb85e6b) |
| 21:32:54 | wSOL → wXRP | buy | Winner too late: creation blockhash expired | `0xc36a9808…` [🐞](https://debug.barn.cow.fi/order/0xc36a9808d462132f2b42908bd17a14a0ec5fa14e91284f76c40bc79f370233ec) |
| 21:32:54 | wSOL → KINS | sell | Winner too late: creation blockhash expired | `0x635cbce9…` [🐞](https://debug.barn.cow.fi/order/0x635cbce9f4365265a6e0afafc63b68bf88bcf96d9d9dab801d67ed3ade94613f) |
| 21:32:57 | wSOL → COINx | sell | Winner too late: creation blockhash expired | `0x7e0f5c06…` [🐞](https://debug.barn.cow.fi/order/0x7e0f5c060c9d6387b577d5ce077b93885852b2e0791117cc4b9a69a184abb868) |
| 21:32:58 | wSOL → DRAM | sell | Winner too late: creation blockhash expired | `0x5dfb2c1b…` [🐞](https://debug.barn.cow.fi/order/0x5dfb2c1b87eb12361399951d7e07d0f63039ca7d777eba8ff62cc3d97d204251) |
| 21:33:00 | wSOL → swordcat | sell | Winner too late: creation blockhash expired | `0x5a57e6d0…` [🐞](https://debug.barn.cow.fi/order/0x5a57e6d000e1095ed4e7ab0e0560a6d810baab69117687311945a7babe7f292d) |
| 21:33:00 | wSOL → GRIFFAIN | buy | Winner too late: creation blockhash expired | `0x9f814cfd…` [🐞](https://debug.barn.cow.fi/order/0x9f814cfd34e5bda5e0846e8fe8075c886ee8a617eb548d6d7d776dc98ff592ed) |
| 21:33:01 | wSOL → VINE | sell | Winner too late: creation blockhash expired | `0xea301091…` [🐞](https://debug.barn.cow.fi/order/0xea30109119c9457df49b94fb3d9c2e961dc5d2b06c316aaf9a67a3328106865e) |
| 21:33:05 | wSOL → TRX | buy | Winner too late: creation blockhash expired | `0xcbb263b1…` [🐞](https://debug.barn.cow.fi/order/0xcbb263b126e6c49e6bbd8e711c128ea067e2fcf396d8a783f16a9b11d1dad15f) |
| 21:33:06 | wSOL → PSOL | sell | Winner too late: creation blockhash expired | `0xd26a48d3…` [🐞](https://debug.barn.cow.fi/order/0xd26a48d3ffc2cc0fede7610d2e2c9c813477010e55d0d1d8ccbce902b3fb2abe) |
| 21:33:08 | wSOL → HNT | sell | Winner too late: creation blockhash expired | `0xee31b867…` [🐞](https://debug.barn.cow.fi/order/0xee31b8676c2b4ef0cf823b11497f2e849fd43d28fe02b6ba91685362409a325b) |
| 21:33:10 | wSOL → ZEREBRO | sell | Winner too late: creation blockhash expired | `0x5a473c41…` [🐞](https://debug.barn.cow.fi/order/0x5a473c41384653b9f4b141b4d007034f75af994899aa5f9fe928d7f31c072274) |
| 21:33:10 | wSOL → CRAWL | sell | Winner too late: creation blockhash expired | `0x5cbf4392…` [🐞](https://debug.barn.cow.fi/order/0x5cbf43921c339f155c523f8901235420bd5cc8f1fd5218d1e059f92d76ed15e4) |
| 21:33:12 | wSOL → ORE | buy | Winner too late: creation blockhash expired | `0x562fdd9b…` [🐞](https://debug.barn.cow.fi/order/0x562fdd9b44f5714a82668fb1706a9be1d28cde193876e44706f48dc022ea84f6) |
| 21:33:17 | wSOL → DJT | sell | Winner too late: creation blockhash expired | `0xe81b2e48…` [🐞](https://debug.barn.cow.fi/order/0xe81b2e48b4d9b9340ca2631c54f647b0bf0d436bd5229ae9721cd19774b2e191) |
| 21:33:22 | wSOL → RENDER | sell | Winner too late: creation blockhash expired | `0xbb079d71…` [🐞](https://debug.barn.cow.fi/order/0xbb079d718e36b7422302583f2024e063cc63250aadaee0c494a77feaa4e80255) |
| 21:33:29 | wSOL → ACT | buy | Winner too late: creation blockhash expired | `0xac51737b…` [🐞](https://debug.barn.cow.fi/order/0xac51737b3029e1d080ddada0289524afb3dbd146ed2401d2ed5846e170aad24d) |
| 21:33:29 | wSOL → jellyjelly | sell | Winner too late: creation blockhash expired | `0x4863d57b…` [🐞](https://debug.barn.cow.fi/order/0x4863d57b986cfb897434b87e8e647c69b81a6803e2cb595015610ec4dc78eb41) |
| 21:33:30 | wSOL → pippin | buy | Winner too late: creation blockhash expired | `0xe04b8a0d…` [🐞](https://debug.barn.cow.fi/order/0xe04b8a0d0acbe66b2ecfe66eb68e5b198c5412a13d7efce993a235d85dd3d18d) |
| 21:33:31 | wSOL → TBB | sell | Winner too late: creation blockhash expired | `0x58dbe1fd…` [🐞](https://debug.barn.cow.fi/order/0x58dbe1fd46afea2a09f010b2e46ecb426e581d8230d89ae9a88a03c6329a5f3b) |
| 21:33:32 | wSOL → MISTAKE | sell | Winner too late: creation blockhash expired | `0xea198ff3…` [🐞](https://debug.barn.cow.fi/order/0xea198ff36f79c195087cd95ff072ef492f3aea0edbe182f29bfefa47e78910d6) |
| 21:33:34 | wSOL → GMEx | sell | Winner too late: creation blockhash expired | `0xd5fd2536…` [🐞](https://debug.barn.cow.fi/order/0xd5fd2536c2865cac8b1e4dd0c6b9ebc0162fa9462f10f8c1241ff26cfe736512) |
| 21:33:34 | wSOL → POPCAT | buy | Winner too late: creation blockhash expired | `0xde6b4281…` [🐞](https://debug.barn.cow.fi/order/0xde6b4281302546de0d4baff8dbeee96a2bc781fa583e60040808cb11738a0680) |
| 21:33:34 | wSOL → GOOGLx | sell | Winner too late: creation blockhash expired | `0x5cb5fc2b…` [🐞](https://debug.barn.cow.fi/order/0x5cb5fc2b592949c5fa3a7f66b851eb733d17683270f66f98907d5e0e7d69d4eb) |
| 21:33:35 | wSOL → ZBCN | buy | Winner too late: creation blockhash expired | `0x77f08719…` [🐞](https://debug.barn.cow.fi/order/0x77f08719044225cb7e267e5cb1d51c41bf195005c03869e1696e601999a3cf00) |
| 21:33:35 | wSOL → PERPSPAD | sell | Winner too late: creation blockhash expired | `0x6c893164…` [🐞](https://debug.barn.cow.fi/order/0x6c8931643ec91aa795dbaafe1f879fc2020a969c44036772e26183c68efbaf6e) |
| 21:33:36 | wSOL → PEAQ | buy | Winner too late: creation blockhash expired | `0x5f20c99a…` [🐞](https://debug.barn.cow.fi/order/0x5f20c99af82951b2fd12ab8e2246e7311628cc5d7ba63b9201e8bdaba108be78) |
| 21:33:36 | wSOL → knightcat | sell | Winner too late: creation blockhash expired | `0xbb3e6b6c…` [🐞](https://debug.barn.cow.fi/order/0xbb3e6b6c7d4554e5716e384d762b03c77c58a521baf59cbb77f05e8378c0a4db) |
| 21:33:37 | wSOL → ALCH | sell | Winner too late: creation blockhash expired | `0x36e18912…` [🐞](https://debug.barn.cow.fi/order/0x36e189127b61a22d370ca0704c2fa01ef8c43a0744b38f3ab7098ed07b516032) |
| 21:33:38 | wSOL → CHILLHOUSE | sell | Winner too late: creation blockhash expired | `0xad2e8a09…` [🐞](https://debug.barn.cow.fi/order/0xad2e8a091990ed0e659ea4096ebe2174cdaf62142e3ffeb33fd232e49f176769) |
| 21:33:38 | wSOL → three | sell | Winner too late: creation blockhash expired | `0xd54d7d56…` [🐞](https://debug.barn.cow.fi/order/0xd54d7d566a9440a748bf823afc67f2e45b4890e0a168e5fc72fc098370079637) |
| 21:33:39 | wSOL → PYTHIA | sell | Winner too late: creation blockhash expired | `0xb6e58b9e…` [🐞](https://debug.barn.cow.fi/order/0xb6e58b9e5b48b91373d7a3e5f8aea9137442256b668b4aa692bb1f726a7211e9) |
| 21:33:40 | wSOL → LBTC | sell | Winner too late: creation blockhash expired | `0xc8818d04…` [🐞](https://debug.barn.cow.fi/order/0xc8818d04aa17c997814b35be54eba64e799761a9e50a7dbe37ff08463e07f05b) |
| 21:33:43 | wSOL → GOAT | sell | Winner too late: creation blockhash expired | `0xee04cfd2…` [🐞](https://debug.barn.cow.fi/order/0xee04cfd23c8963fe94a8e18d4f96193fc6ffd4fe911b51de04b6cb6a13f9351e) |
| 21:33:43 | wSOL → CX | sell | Winner too late: creation blockhash expired | `0x49823eac…` [🐞](https://debug.barn.cow.fi/order/0x49823eac19b2932ee01269f0b1f96a684446837614a9782058d929317dd8b5dc) |
| 21:33:45 | wSOL → SANC | sell | Winner too late: creation blockhash expired | `0xd75ca915…` [🐞](https://debug.barn.cow.fi/order/0xd75ca915727856dd38e52833171a9ec328f84ade1c76f8f84241384b8568bf97) |
| 21:33:46 | wSOL → 2Z | sell | Winner too late: creation blockhash expired | `0x4df2c64f…` [🐞](https://debug.barn.cow.fi/order/0x4df2c64fdf818e90a1434052079e4137bfbb9b1d7fe5f3f71c85762388ee5b58) |
| 21:33:47 | wSOL → VINE | buy | Winner too late: creation blockhash expired | `0x89c57cf6…` [🐞](https://debug.barn.cow.fi/order/0x89c57cf668abd585e6773b9ccb8a86fa81f661da34932980470170ada8b47743) |
| 21:33:48 | wSOL → ALON | sell | Winner too late: creation blockhash expired | `0x0755927f…` [🐞](https://debug.barn.cow.fi/order/0x0755927f89ca49e153ed88ea67aa65eb0d6c98f3f59bbfa3b179bef7aa864de8) |
| 21:33:52 | wSOL → HNT | buy | Winner too late: creation blockhash expired | `0x40abb9bd…` [🐞](https://debug.barn.cow.fi/order/0x40abb9bdf3503eefae73a60608412739964bb30dc406ad88135308ea61de7516) |
| 21:33:53 | wSOL → ZEREBRO | buy | Winner too late: creation blockhash expired | `0x8d01fb3e…` [🐞](https://debug.barn.cow.fi/order/0x8d01fb3ec9ddc686d7cbe228d645d02bbd3aac0454e1757830aed84268427cf0) |
| 21:33:53 | wSOL → PSOL | buy | Winner too late: creation blockhash expired | `0xb2e85c96…` [🐞](https://debug.barn.cow.fi/order/0xb2e85c9682a1ae333312ee3b5004d4a1ee5f69decc8f10ebd54b8959db0d56fe) |
| 21:33:55 | wSOL → xBTC | sell | Winner too late: creation blockhash expired | `0x91f50498…` [🐞](https://debug.barn.cow.fi/order/0x91f5049890d84293f1708f737f3741288a31572fcb72b5986aab309c98840c49) |
| 21:33:56 | wSOL → CHILLGUY | sell | Winner too late: creation blockhash expired | `0x55440075…` [🐞](https://debug.barn.cow.fi/order/0x554400755ebdc23812e3117a6c7012c439a110ce5d5fab4ccdc1ea017e696072) |
| 21:34:01 | wSOL → META | sell | Winner too late: creation blockhash expired | `0x8fdfe1b1…` [🐞](https://debug.barn.cow.fi/order/0x8fdfe1b15ec3527413fba337d7d837692c14fd55622b4c78b5208fefa4161107) |
| 21:34:07 | wSOL → RENDER | buy | Winner too late: creation blockhash expired | `0x6eabfe54…` [🐞](https://debug.barn.cow.fi/order/0x6eabfe54642fb87b93fbe6d38f644d335766f856fb7c4e0a2e271247afae8162) |
| 21:34:12 | wSOL → GOLD | sell | Winner too late: creation blockhash expired | `0xe90732f4…` [🐞](https://debug.barn.cow.fi/order/0xe90732f429a61ee5371e4dfa76be5443c5094166e981623a40a1df964e506738) |
| 21:34:14 | wSOL → jellyjelly | buy | Winner too late: creation blockhash expired | `0x57a77551…` [🐞](https://debug.barn.cow.fi/order/0x57a77551793ad3d8e1dacaffd7f5c5388ad234e877ce901ca8a70ad839b589b7) |
| 21:34:15 | wSOL → MOODENG | sell | Winner too late: creation blockhash expired | `0xe4bcfa24…` [🐞](https://debug.barn.cow.fi/order/0xe4bcfa24d7e0529a6e3deeeb95b153f8c1a60f6fc2e579079e39cd89b127f9f8) |
| 21:34:16 | wSOL → STRCx | sell | Winner too late: creation blockhash expired | `0xaba926c3…` [🐞](https://debug.barn.cow.fi/order/0xaba926c3f10bac981e09f4d575bf09ce6c854c024ed4ea490bbb293b1c8969ff) |
| 21:34:17 | wSOL → BC | sell | Winner too late: creation blockhash expired | `0xc91b7371…` [🐞](https://debug.barn.cow.fi/order/0xc91b73711363d94545c956d4b965af1a721fa7eee0c9f27076c70725644e3b3a) |
| 21:34:18 | wSOL → READY | sell | Winner too late: creation blockhash expired | `0x3aed5541…` [🐞](https://debug.barn.cow.fi/order/0x3aed5541e5d511af80751fda1ee8e25a7bc55e4ff78477ed58996b6a260bd030) |
| 21:34:19 | wSOL → CALI | sell | Winner too late: creation blockhash expired | `0x37d522a2…` [🐞](https://debug.barn.cow.fi/order/0x37d522a23068491f43475e944f7d518f8a2421fe1a3aea125c1c3bf3b5efdcf8) |
| 21:34:20 | wSOL → SLX | sell | Winner too late: creation blockhash expired | `0x9aa47109…` [🐞](https://debug.barn.cow.fi/order/0x9aa4710976bfdc0a2d8de6d4207795826821573bf73e0ba2d352c71690ae9a8a) |
| 21:34:20 | wSOL → Chonketha | sell | Winner too late: creation blockhash expired | `0xdc90ea8b…` [🐞](https://debug.barn.cow.fi/order/0xdc90ea8b100af8b4db5f9673e1bd70d950b86f56e6a0eb903fa958928f607a7e) |
| 21:34:21 | wSOL → PERPSPAD | buy | Winner too late: creation blockhash expired | `0x860c292c…` [🐞](https://debug.barn.cow.fi/order/0x860c292c817b9d3a9e422c253dc419d2859e7fe0986f08600778b5b4f559fcc6) |
| 21:34:21 | wSOL → MCDx | sell | Winner too late: creation blockhash expired | `0x42505d71…` [🐞](https://debug.barn.cow.fi/order/0x42505d719a0c924acbace605a07ff2a7a2df72af076b8fec33086b40057413fa) |
| 21:34:22 | wSOL → HOOD | sell | Winner too late: creation blockhash expired | `0xc3f4b2ae…` [🐞](https://debug.barn.cow.fi/order/0xc3f4b2ae0cdba391b39797ef26c348f27c032e538568e4a9ba80dd77a259c314) |
| 21:34:22 | wSOL → ALCH | buy | Winner too late: creation blockhash expired | `0x3da3c41c…` [🐞](https://debug.barn.cow.fi/order/0x3da3c41c6bfff59ac686f5582a3693dc9b2a89a3044a166703d13b954c9fbfee) |
| 21:34:23 | wSOL → AAVE | sell | Winner too late: creation blockhash expired | `0xce14f5e3…` [🐞](https://debug.barn.cow.fi/order/0xce14f5e30e7e8aa62c49178366e93826547c5cdc0cdfa142bb064919762775bb) |
| 21:34:28 | wSOL → PYTHIA | buy | Winner too late: creation blockhash expired | `0x420c40bf…` [🐞](https://debug.barn.cow.fi/order/0x420c40bff970480c1dd2f768ad6405664e842280a41f1976b9ce5362117ba475) |
| 21:34:28 | wSOL → CX | buy | Winner too late: creation blockhash expired | `0x2453bfd1…` [🐞](https://debug.barn.cow.fi/order/0x2453bfd1158525d223630c2d2dbe4cabc83efce3eb7bf26c7f7cfe0151165493) |
| 21:34:28 | wSOL → GOAT | buy | Winner too late: creation blockhash expired | `0x9a5b8494…` [🐞](https://debug.barn.cow.fi/order/0x9a5b8494d8ac2334a00a0de9e7331c0329f6aec96b91c77aeb4125f359cbb505) |
| 21:34:29 | wSOL → WOJAK | sell | Winner too late: creation blockhash expired | `0x6044e754…` [🐞](https://debug.barn.cow.fi/order/0x6044e7542d21a43160126e043e13df05dc14a2e35ab4e7c13ef85065152a8ce4) |
| 21:34:31 | wSOL → SANC | buy | Winner too late: creation blockhash expired | `0x13303208…` [🐞](https://debug.barn.cow.fi/order/0x133032088693d6e14f1786a5fce8fed24f5ca6ee6ad3a6706b34d89b709e35d8) |
| 21:34:32 | wSOL → CODEC | sell | Winner too late: creation blockhash expired | `0x6e2bdbec…` [🐞](https://debug.barn.cow.fi/order/0x6e2bdbecac8ee51167688981fa209e03056f1e25bc11fbb4cd3f81d4c3fcc71c) |
| 21:34:32 | wSOL → HIMS | sell | Winner too late: creation blockhash expired | `0xac69d95d…` [🐞](https://debug.barn.cow.fi/order/0xac69d95de68271da6046294107a30722457f09e5ac4fcdd3b98df65a86fa75ed) |
| 21:34:32 | wSOL → ALON | buy | Winner too late: creation blockhash expired | `0x1bd66eb6…` [🐞](https://debug.barn.cow.fi/order/0x1bd66eb6cf1de22c60ec4824059354f3b52bade2a329d676b032c2df386b9c68) |
| 21:34:34 | wSOL → 2Z | buy | Winner too late: creation blockhash expired | `0xaf5648d0…` [🐞](https://debug.barn.cow.fi/order/0xaf5648d07f60f0b106d7f47131a959f0dbf88fed58da926e83d4688dba82c88e) |
| 21:34:37 | wSOL → XAUt0 | sell | Winner too late: creation blockhash expired | `0x04f14bc3…` [🐞](https://debug.barn.cow.fi/order/0x04f14bc397ba71ca10fde6f05e50f6a8c17352c6b66b2e6d31ef6c15cef009f4) |
| 21:34:37 | wSOL → NOS | sell | Winner too late: creation blockhash expired | `0x2067cb3c…` [🐞](https://debug.barn.cow.fi/order/0x2067cb3c506834dae84105a30188c97d8cfea100c93401a70e1caaa8ff4ab16f) |
| 21:34:39 | wSOL → xBTC | buy | Winner too late: creation blockhash expired | `0xfea7b145…` [🐞](https://debug.barn.cow.fi/order/0xfea7b1454575048e0c7d2d743cfa3961f936448516f0ad2be35d918a4ac9df7d) |
| 21:34:40 | wSOL → Pnut | sell | Winner too late: creation blockhash expired | `0x766af1b2…` [🐞](https://debug.barn.cow.fi/order/0x766af1b2a6d3d831f3c0278f514caa070d88834c0c00660e240e87eed3afdea6) |
| 21:34:41 | wSOL → CHILLGUY | buy | Winner too late: creation blockhash expired | `0xdcc24040…` [🐞](https://debug.barn.cow.fi/order/0xdcc24040fba96c8ffb246e9fdd8022f2ee4470785e91d28e95397500e84e968a) |
| 21:34:45 | wSOL → META | buy | Winner too late: creation blockhash expired | `0x9c53532a…` [🐞](https://debug.barn.cow.fi/order/0x9c53532ac51665c06271cbb5f4a5e1cd262efce3cd8fd7d1a9e704c8afc1ef8f) |
| 21:34:50 | wSOL → CRED | sell | Winner too late: creation blockhash expired | `0xe97caf14…` [🐞](https://debug.barn.cow.fi/order/0xe97caf14403f6902c1163298a5ed2b7fc67b8710cd96ff6070699721d1bbf75a) |
| 21:34:56 | wSOL → GRND | sell | Winner too late: creation blockhash expired | `0x22f81ae7…` [🐞](https://debug.barn.cow.fi/order/0x22f81ae7d659ccd4853a504a339796e031544127864de0b3291f70457afc73d3) |
| 21:34:58 | wSOL → Ban | sell | Winner too late: creation blockhash expired | `0x5f3e87f1…` [🐞](https://debug.barn.cow.fi/order/0x5f3e87f1b27a7974df346d0d82d474b661ed766290cdd96e15a57efd568a2078) |
| 21:35:00 | wSOL → MOODENG | buy | Winner too late: creation blockhash expired | `0x1dc060f1…` [🐞](https://debug.barn.cow.fi/order/0x1dc060f1feebb3ca7054558f5b8e3c686e23636dd8026cc6704d947549a674d0) |
| 21:35:01 | wSOL → SQUIRE | sell | Winner too late: creation blockhash expired | `0x435fdee0…` [🐞](https://debug.barn.cow.fi/order/0x435fdee0302017d01720d46e34903a4aa4db3395c1e654dd160ff602e0233d2f) |
| 21:35:02 | wSOL → BC | buy | Winner too late: creation blockhash expired | `0x85eafd4a…` [🐞](https://debug.barn.cow.fi/order/0x85eafd4a5dbbed6d98aff89a1041794e5f8688254baaee6f4b4299ea78b52f69) |
| 21:35:02 | wSOL → PLTRx | sell | Winner too late: creation blockhash expired | `0xe0e3ebb4…` [🐞](https://debug.barn.cow.fi/order/0xe0e3ebb40482cff837f22b2ce7641b6cc608141423cea3b7a331384fd76056b2) |
| 21:35:04 | wSOL → BORG | sell | Winner too late: creation blockhash expired | `0x802af60e…` [🐞](https://debug.barn.cow.fi/order/0x802af60e7600e617004cfa935112a076ad0ab94b697916bcf8d7ec9e9afdfad5) |
| 21:35:05 | wSOL → SLX | buy | Winner too late: creation blockhash expired | `0x13db4ac6…` [🐞](https://debug.barn.cow.fi/order/0x13db4ac66b23130e14e87e06ca11d5244325c1e3ed2480709a85e84bfa60eb9b) |
| 21:35:06 | wSOL → MSTR | sell | Winner too late: creation blockhash expired | `0xf4f81627…` [🐞](https://debug.barn.cow.fi/order/0xf4f81627d85720352c3b0497ae36df9ecaf3e39fe1e5b567e33e5e4859ad4a32) |
| 21:35:06 | wSOL → PUMPCADE | sell | Winner too late: creation blockhash expired | `0x3f679c53…` [🐞](https://debug.barn.cow.fi/order/0x3f679c53dea01bfd9befe8432f71d5bd6b1a2e1158f358fbca90e2a9dbe10cd6) |
| 21:35:07 | wSOL → GIGA | sell | Winner too late: creation blockhash expired | `0xf107e9ed…` [🐞](https://debug.barn.cow.fi/order/0xf107e9edae690b4aa0e785afb65be34cbe300080e1eeed66f0181e19cced03ea) |
| 21:35:07 | wSOL → INF | sell | Winner too late: creation blockhash expired | `0xbbfdd0e5…` [🐞](https://debug.barn.cow.fi/order/0xbbfdd0e5d7f63d0df626de28229d329c11f5a296a06c6edf9bd08f62406b6513) |
| 21:35:09 | wSOL → Tokabu | sell | Winner too late: creation blockhash expired | `0x660fbcd1…` [🐞](https://debug.barn.cow.fi/order/0x660fbcd1301928424b96eb751effb87e9f2c567ef1fc412c690d551f4f1743c7) |
| 21:35:09 | wSOL → AAVE | buy | Winner too late: creation blockhash expired | `0x776e93a5…` [🐞](https://debug.barn.cow.fi/order/0x776e93a5f402500bc42a8931328eb0b23873affaa1f7bc56bedeeb8d948b9a8d) |
| 21:35:12 | wSOL → WSOLP | sell | Winner too late: creation blockhash expired | `0x780ef2ef…` [🐞](https://debug.barn.cow.fi/order/0x780ef2ef428c95be8725a7edf7077f20fb6308b67b431eb53d23c2fb811dafb3) |
| 21:35:13 | wSOL → testicle | sell | Winner too late: creation blockhash expired | `0x9d5f38f1…` [🐞](https://debug.barn.cow.fi/order/0x9d5f38f18324ae303ce02a0df74507aed4325695f46b0ac526f497c34638424e) |
| 21:35:15 | wSOL → DREGG | sell | Winner too late: creation blockhash expired | `0xdab0bf08…` [🐞](https://debug.barn.cow.fi/order/0xdab0bf0895910c2c99fc6c088ad471068028f8d34747ab0fd4b5dc7b53c6bbae) |
| 21:35:16 | wSOL → CTM | sell | Winner too late: creation blockhash expired | `0xb45a65be…` [🐞](https://debug.barn.cow.fi/order/0xb45a65be9d76c20721f760e47ad319830249e2a6fc921482079fbe61078adc6a) |
| 21:35:17 | wSOL → MPLX | sell | Winner too late: creation blockhash expired | `0x794fba96…` [🐞](https://debug.barn.cow.fi/order/0x794fba968c2c12972f63677a8f4be1e2e9602714c479bd1f1ff667e2b086a8d7) |
| 21:35:19 | wSOL → HOTBOT | sell | Winner too late: creation blockhash expired | `0xe12ba96d…` [🐞](https://debug.barn.cow.fi/order/0xe12ba96de1a681505c41bea0720b9df41e18e2b33b4c14682179788a99ae3ebe) |
| 21:35:19 | wSOL → BURNIE | sell | Winner too late: creation blockhash expired | `0x54cd5dc7…` [🐞](https://debug.barn.cow.fi/order/0x54cd5dc7f7d0034727a899dc80f6ba2f5eba2e9d9f7dcb0503091a52c4b092b6) |
| 21:35:20 | wSOL → KLED | sell | Winner too late: creation blockhash expired | `0xc1f90880…` [🐞](https://debug.barn.cow.fi/order/0xc1f908809e20c763db9ac95dd0478fb0d47407b4dc813793de4b333e0d560ba2) |
| 21:35:21 | wSOL → slopcannon | sell | Winner too late: creation blockhash expired | `0x947d5c76…` [🐞](https://debug.barn.cow.fi/order/0x947d5c7651e01cbd9dbc037b1218f775c33719f45dc4abc73883f764cd9de2e4) |
| 21:35:22 | wSOL → XAUt0 | buy | Winner too late: creation blockhash expired | `0xb8e7a934…` [🐞](https://debug.barn.cow.fi/order/0xb8e7a934dc0addc4d74f26a9dc22f802a365886d8c931c52e0b1079bc2c13279) |
| 21:35:26 | wSOL → NOS | buy | Winner too late: creation blockhash expired | `0xbe313a0a…` [🐞](https://debug.barn.cow.fi/order/0xbe313a0a47b2e91ee392a4f239f45b437d14fff15f0b3873862f2fa495870488) |
| 21:35:27 | wSOL → PST | sell | Winner too late: creation blockhash expired | `0x996f6ead…` [🐞](https://debug.barn.cow.fi/order/0x996f6eadc94e6b527053ffe46b6c44315879f6ab148670e9ee17276b35560d61) |
| 21:35:28 | wSOL → Pnut | buy | Winner too late: creation blockhash expired | `0xb473ebec…` [🐞](https://debug.barn.cow.fi/order/0xb473ebec2c64279819777aa1b3dfddb474f28de541806cb0751d8e63234bc32e) |
| 21:35:29 | wSOL → TTWO | sell | Winner too late: creation blockhash expired | `0x03cdaed9…` [🐞](https://debug.barn.cow.fi/order/0x03cdaed9749cfa0a16f20a17ed307f27effc4227a9e89f69a4d691b5ab352435) |
| 21:35:33 | wSOL → swarms | sell | Winner too late: creation blockhash expired | `0xd393c983…` [🐞](https://debug.barn.cow.fi/order/0xd393c983c554f5f9f38a2cdac7f2ede538429336805bf3151e14b09a58ed2cf8) |
| 21:35:39 | wSOL → CRED | buy | Winner too late: creation blockhash expired | `0xb2be44b2…` [🐞](https://debug.barn.cow.fi/order/0xb2be44b241cf7ba983af7ecd6cc72ae8bf515d395a9c9895fb3e5fdb0a5ed051) |
| 21:35:45 | wSOL → FARTBOY | sell | Winner too late: creation blockhash expired | `0xd16954ef…` [🐞](https://debug.barn.cow.fi/order/0xd16954ef66ff24ddbf91c801266e4dcd7e78449573c051ca68a47ba1b82246e0) |
| 21:35:46 | wSOL → Ban | buy | Winner too late: creation blockhash expired | `0x79bbd348…` [🐞](https://debug.barn.cow.fi/order/0x79bbd34833845af0b084f92821d8c01fe28ce9d5f0e24b15151941ddcfe700d5) |
| 21:35:48 | wSOL → LMAO! | sell | Winner too late: creation blockhash expired | `0x9d8d8e0f…` [🐞](https://debug.barn.cow.fi/order/0x9d8d8e0f71acb03b2810593e667279257ee33c889bed75b3e2f08b0b375bacc3) |
| 21:35:50 | wSOL → PAYAI | sell | Winner too late: creation blockhash expired | `0x42efc3df…` [🐞](https://debug.barn.cow.fi/order/0x42efc3df632ec2dbe0ba3f5f5b6fcb66851d00e6a3c9a61dd8557fc39238c64f) |
| 21:35:50 | wSOL → reUSD | sell | Winner too late: creation blockhash expired | `0x036693ad…` [🐞](https://debug.barn.cow.fi/order/0x036693ad176c3feb16392f840e4d23ed2acfb5d1872aefbc08e78e19bb035dcd) |
| 21:35:51 | wSOL → HeavyPulp | sell | Winner too late: creation blockhash expired | `0xfb9a1d53…` [🐞](https://debug.barn.cow.fi/order/0xfb9a1d53d3cf46d7e2ea7359399869563312f91a18d9103bc7ed918c899376ea) |
| 21:35:52 | wSOL → BORG | buy | Winner too late: creation blockhash expired | `0x0c8823aa…` [🐞](https://debug.barn.cow.fi/order/0x0c8823aafeae1baf47e91b5c9ad24882319cd4726bdc687a897d226995bbd139) |
| 21:35:54 | wSOL → bSOL | sell | Winner too late: creation blockhash expired | `0x158a139d…` [🐞](https://debug.barn.cow.fi/order/0x158a139ddf7c4a993abaaf89fd5ccf810fc308803f7e183b7a9185029bc60ebd) |
| 21:35:55 | wSOL → HEEBOO | sell | Winner too late: creation blockhash expired | `0x21125b37…` [🐞](https://debug.barn.cow.fi/order/0x21125b37ccd5193ffbe870e3ae0c418d43d5a8d2ca2e4bb87d918c9c24b4c1e0) |
| 21:35:55 | wSOL → MOS | sell | Winner too late: creation blockhash expired | `0x75e8b7e7…` [🐞](https://debug.barn.cow.fi/order/0x75e8b7e7f9e8eaa2476f12813bcec0668d034905b158607db6ac22a54ab831b8) |
| 21:35:55 | wSOL → GIGA | buy | Winner too late: creation blockhash expired | `0x5731c390…` [🐞](https://debug.barn.cow.fi/order/0x5731c39031effc86c6e981f99e011a24c9a31c272d8254a2c78d5dfb23fa9979) |
| 21:35:56 | wSOL → INF | buy | Winner too late: creation blockhash expired | `0x037f744c…` [🐞](https://debug.barn.cow.fi/order/0x037f744c2a77dfbb1c96a6bd84667fe3fbc3c63b45eb8ae80fcf1c5ebb408fd0) |
| 21:35:58 | wSOL → unc | sell | Winner too late: creation blockhash expired | `0xbbc018e2…` [🐞](https://debug.barn.cow.fi/order/0xbbc018e2eba136a8ee39abec2cec3590c0196067440195baaacfc5fe6a0b9556) |
| 21:35:58 | wSOL → Tokabu | buy | Winner too late: creation blockhash expired | `0x93135de8…` [🐞](https://debug.barn.cow.fi/order/0x93135de89d3ecacf02e9b2d2ee4b71d3fa8aeb018337c14ffdcf6cea9cf9d31d) |
| 21:35:59 | wSOL → MUSHU | sell | Winner too late: creation blockhash expired | `0x0e3a21c8…` [🐞](https://debug.barn.cow.fi/order/0x0e3a21c8a0898f0a4560fc476f362c85ce65b6c20ae6fd3cd0ec8027220c7c06) |
| 21:36:00 | wSOL → SNAP | sell | Winner too late: creation blockhash expired | `0xc9509b69…` [🐞](https://debug.barn.cow.fi/order/0xc9509b696ad56d009eaabd1e57216d431ab80cc83e1daae45ab70ce19b2fd235) |
| 21:36:01 | wSOL → ME | sell | Winner too late: creation blockhash expired | `0xd8d5a142…` [🐞](https://debug.barn.cow.fi/order/0xd8d5a142cc9728672c5bef3ba0088622120301fedec467ac3efd26ffcebe4d5a) |
| 21:36:02 | wSOL → MPLX | buy | Winner too late: creation blockhash expired | `0x764dca21…` [🐞](https://debug.barn.cow.fi/order/0x764dca214d8c71615b9526bbe95890d8fc96658fe7357d31917473044b0035a4) |
| 21:36:04 | wSOL → darwin | sell | Winner too late: creation blockhash expired | `0x8859b234…` [🐞](https://debug.barn.cow.fi/order/0x8859b2345dccb24da6f46b2eb7f5021e15ffdc71d1a5f30e52c19efb396eb225) |
| 21:36:05 | wSOL → VIRTUAL | sell | Winner too late: creation blockhash expired | `0x1814d41e…` [🐞](https://debug.barn.cow.fi/order/0x1814d41ed41b514081d14acb1932df0f31d45a01ce7f4079de21c1cd34f77bfa) |
| 21:36:08 | wSOL → BMT | sell | Winner too late: creation blockhash expired | `0x4ecca388…` [🐞](https://debug.barn.cow.fi/order/0x4ecca38899eeb25a866065724fd179738fabef93dc2570e0888bb56056a5812b) |
| 21:36:08 | wSOL → KLED | buy | Winner too late: creation blockhash expired | `0x054b6162…` [🐞](https://debug.barn.cow.fi/order/0x054b616220dba1554d9cd42edbaf75155d70085c5c339f8555a39b36218e39b0) |
| 21:36:10 | wSOL → HODL | sell | Winner too late: creation blockhash expired | `0xf3146a2b…` [🐞](https://debug.barn.cow.fi/order/0xf3146a2bab8e491a79bb9fa1968d6adf62ce811be816f77a2fb549e83cc13cf2) |
| 21:36:11 | wSOL → ARX | sell | Winner too late: creation blockhash expired | `0xbca01d08…` [🐞](https://debug.barn.cow.fi/order/0xbca01d08e95bd9ed1109a568769b65f6576c3852ff82c40bbbb034f3c8431c16) |
| 21:36:12 | wSOL → PST | buy | Winner too late: creation blockhash expired | `0x2b5e3bec…` [🐞](https://debug.barn.cow.fi/order/0x2b5e3becc90147219eff494adc4d93589e451b6fc91c2d2f59cd251f89573d0e) |
| 21:36:14 | wSOL → WBTC | sell | Winner too late: creation blockhash expired | `0x4d52b572…` [🐞](https://debug.barn.cow.fi/order/0x4d52b5726b108c42ee4aee6424fa453712c445b2e40ae581473b6e1862e72a65) |
| 21:36:15 | wSOL → hSOL | sell | Winner too late: creation blockhash expired | `0x0f9dc450…` [🐞](https://debug.barn.cow.fi/order/0x0f9dc45007373f380d5bc8a1335db4490687bc05f781b88363b1f6273f8291aa) |
| 21:36:16 | wSOL → RUSH | sell | Winner too late: creation blockhash expired | `0xe439acc1…` [🐞](https://debug.barn.cow.fi/order/0xe439acc1a3a624f7189007f0f605ffbb3bc033d552813fd553a38a3f758745fb) |
| 21:36:21 | wSOL → swarms | buy | Winner too late: creation blockhash expired | `0xe82fd2c4…` [🐞](https://debug.barn.cow.fi/order/0xe82fd2c45222b5eba5fb02fed5e3c10bfa128ec3c3c60667e7bce389ca69d0d2) |
| 21:36:24 | wSOL → GEOM | sell | Winner too late: creation blockhash expired | `0x81051a55…` [🐞](https://debug.barn.cow.fi/order/0x81051a55e91db30a3aa0115b273100509b946a59a1b472cb977277040fc61f04) |
| 21:36:31 | wSOL → SOLANGELES | sell | Winner too late: creation blockhash expired | `0x6c9bb1af…` [🐞](https://debug.barn.cow.fi/order/0x6c9bb1af0a1d31f0378a7c8e44de55296a64cbfd7626391b6a6371ab614bcd31) |
| 21:36:33 | wSOL → APE | sell | Winner too late: creation blockhash expired | `0xa27c560d…` [🐞](https://debug.barn.cow.fi/order/0xa27c560d10b45d2bb68d88ad5799ca6e0fe7e274fe23d7a9da43dbab144e378d) |
| 21:36:33 | wSOL → FARTBOY | buy | Winner too late: creation blockhash expired | `0xc647f1eb…` [🐞](https://debug.barn.cow.fi/order/0xc647f1eb7aec9662ad392a4bee4084597257565afdff0285e0af8a146ef6ddb9) |
| 21:36:37 | wSOL → Bert | sell | Winner too late: creation blockhash expired | `0x88cc4270…` [🐞](https://debug.barn.cow.fi/order/0x88cc427080b13fce0b5d9fed779a403c56e82f9400ae55dd25c7c05a3d019939) |
| 21:36:37 | wSOL → PAYAI | buy | Winner too late: creation blockhash expired | `0x575fb2ec…` [🐞](https://debug.barn.cow.fi/order/0x575fb2ec9dd4695e9c5fd80cb549e7d99e7672c3e2677a00925e764162b96f53) |
| 21:36:38 | wSOL → FWOG | sell | Winner too late: creation blockhash expired | `0xc2880480…` [🐞](https://debug.barn.cow.fi/order/0xc2880480381152a93410f1ea3ebf1092e916328497f37211ed3501364bd38a18) |
| 21:36:39 | wSOL → HEEBOO | buy | Winner too late: creation blockhash expired | `0xbd59a94d…` [🐞](https://debug.barn.cow.fi/order/0xbd59a94d3087df7c3efea5db3ccf846c7adb68a141021a962131adc5b0a447e9) |
| 21:36:41 | wSOL → Verse | sell | Winner too late: creation blockhash expired | `0xa1d08b84…` [🐞](https://debug.barn.cow.fi/order/0xa1d08b8413153e3a7ee0fc2b210b332301ab79239ef27f40feffb38d6696f3d3) |
| 21:36:41 | wSOL → AMC | sell | Winner too late: creation blockhash expired | `0xb5d8552d…` [🐞](https://debug.barn.cow.fi/order/0xb5d8552db4acd8888d4f3d5a4cbb42c9a3bde34560e07c742a788a79853bb15e) |
| 21:36:41 | wSOL → BOBO | sell | Winner too late: creation blockhash expired | `0x27ab657a…` [🐞](https://debug.barn.cow.fi/order/0x27ab657abd2e85cf9c8c6906eeceb856ba1c09660180ea0177e7763c1ce0f631) |
| 21:36:43 | wSOL → Anon | sell | Winner too late: creation blockhash expired | `0x84062fcf…` [🐞](https://debug.barn.cow.fi/order/0x84062fcf462b13c3a1ab5e0124b3c2fd8c206978bab451fd02116a5c786da3c9) |
| 21:36:43 | wSOL → bSOL | buy | Winner too late: creation blockhash expired | `0x967d27ad…` [🐞](https://debug.barn.cow.fi/order/0x967d27adf8beba60378651ce8fb81d3a91be73ddedc5b780a4793562275f3222) |
| 21:36:45 | wSOL → USDY | sell | Winner too late: creation blockhash expired | `0xbc2fdc5a…` [🐞](https://debug.barn.cow.fi/order/0xbc2fdc5ab0dd80ff3455f3fb96c87835ee179f7794fc40bad1c3f734ae4f6579) |
| 21:36:45 | wSOL → AMZNx | sell | Winner too late: creation blockhash expired | `0xe5ef757d…` [🐞](https://debug.barn.cow.fi/order/0xe5ef757d0cf9e3d0e8f71c04b7adb40b821c0899171b3c864f2a4f72c06d7cbd) |
| 21:36:48 | wSOL → ME | buy | Winner too late: creation blockhash expired | `0x6ce87a46…` [🐞](https://debug.barn.cow.fi/order/0x6ce87a463d316ab1bd91ae9f44cc0269d7683c21b7efde93f0f176dec48a1998) |
| 21:36:48 | wSOL → MUSHU | buy | Winner too late: creation blockhash expired | `0xae38425d…` [🐞](https://debug.barn.cow.fi/order/0xae38425d7e0333d3800609f9e884125419cc7788218f629394b994869a07ab54) |
| 21:36:49 | wSOL → NKE | sell | Winner too late: creation blockhash expired | `0x6336bcde…` [🐞](https://debug.barn.cow.fi/order/0x6336bcde43e865d20f19c1a614d21bc787e7a464fba23a84fac0f4a0662efbae) |
| 21:36:49 | wSOL → Clude | sell | Winner too late: creation blockhash expired | `0x181f9bfc…` [🐞](https://debug.barn.cow.fi/order/0x181f9bfc03553994a2bcbb06a23048bbb32c7a674620f3ee5d7746893abc73e5) |
| 21:36:49 | wSOL → VIRTUAL | buy | Winner too late: creation blockhash expired | `0x27cad903…` [🐞](https://debug.barn.cow.fi/order/0x27cad90312a5922136e752c9f85d2fe33de81ca844c002db1ed703b48b18c0d3) |
| 21:36:52 | wSOL → BMT | buy | Winner too late: creation blockhash expired | `0xf0ce5656…` [🐞](https://debug.barn.cow.fi/order/0xf0ce565678c9146bd04501a769ec38a322c621c975249761ac61ad031a2a3df4) |
| 21:36:53 | wSOL → MON | sell | Winner too late: creation blockhash expired | `0x8e27c73e…` [🐞](https://debug.barn.cow.fi/order/0x8e27c73e25f532d9d1b4bdeec9aaee14a832e263029d7a8f3007939c55992a60) |
| 21:36:55 | wSOL → ENA | sell | Winner too late: creation blockhash expired | `0x783b964f…` [🐞](https://debug.barn.cow.fi/order/0x783b964f531939f393c09a051d8cf685e3cc0e95c670ee84618f0370fd5f0ae5) |
| 21:36:56 | wSOL → ZERO | sell | Winner too late: creation blockhash expired | `0x63f94765…` [🐞](https://debug.barn.cow.fi/order/0x63f947653b6dbe2ac89ee6c635748b08b5ffd075dddcbb710e921f4741f56664) |
| 21:36:58 | wSOL → hSOL | buy | Winner too late: creation blockhash expired | `0x82002b06…` [🐞](https://debug.barn.cow.fi/order/0x82002b06ae09a1ed23a2aae142352f04247f8f69c096c5b00f0be3892c1e2ab5) |
| 21:37:01 | wSOL → WBTC | buy | Winner too late: creation blockhash expired | `0x33e757b6…` [🐞](https://debug.barn.cow.fi/order/0x33e757b6881a1c97c01a95e6efa2efd6b552143f583d20cc17005bdbb58ac028) |
| 21:37:03 | wSOL → RUSH | buy | Winner too late: creation blockhash expired | `0xc6085060…` [🐞](https://debug.barn.cow.fi/order/0xc608506023b906228f64ba139c36cd8d476d727ae3eba355c39a3982e5b1919b) |
| 21:37:05 | wSOL → BNB | sell | Winner too late: creation blockhash expired | `0xcb9bbdf9…` [🐞](https://debug.barn.cow.fi/order/0xcb9bbdf958dbbf2339b93e4f274ed5acbe34661b2be230cd7d417e8965551e23) |
| 21:37:07 | wSOL → USDUC | sell | Winner too late: creation blockhash expired | `0x9c8aca85…` [🐞](https://debug.barn.cow.fi/order/0x9c8aca85bdfbcdfa20c4d97ff8c8b8f6b0d42714193ef01cbbd57d7652f66eef) |
| 21:37:17 | wSOL → PENGUIN | sell | Winner too late: creation blockhash expired | `0xf1c39d58…` [🐞](https://debug.barn.cow.fi/order/0xf1c39d5826183bb12e86549abfc8145515c29db9edd296d24fb33dcdfb94e5dd) |
| 21:37:18 | wSOL → APE | buy | Winner too late: creation blockhash expired | `0x2f1df9a4…` [🐞](https://debug.barn.cow.fi/order/0x2f1df9a4a1e130826b9aa0e3c5435ea0bb553b62b895cf01ad48069e69d73ab5) |
| 21:37:22 | wSOL → Bert | buy | Winner too late: creation blockhash expired | `0xaf319f4a…` [🐞](https://debug.barn.cow.fi/order/0xaf319f4aaeea16eea696cfdefd0d6fd80e73c4bc71a8033ebcf658839863c1bd) |
| 21:37:23 | wSOL → FWOG | buy | Winner too late: creation blockhash expired | `0x802df0af…` [🐞](https://debug.barn.cow.fi/order/0x802df0afcf3bf65ef494e240491c80d90dd430a51434ca5f289c53d2a0ebc2cb) |
| 21:37:25 | wSOL → Chud | sell | Winner too late: creation blockhash expired | `0xb855e637…` [🐞](https://debug.barn.cow.fi/order/0xb855e6378bcdf31fa25140dd57a628e7becb7fea5e5a8e3f0122fcd57e6217bc) |
| 21:37:26 | wSOL → PONKE | sell | Winner too late: creation blockhash expired | `0xde9c49c1…` [🐞](https://debug.barn.cow.fi/order/0xde9c49c15fbdde6debf4ac7d64e758b00e9036093f8c5434694c30692be4349a) |
| 21:37:27 | wSOL → NPC | sell | Winner too late: creation blockhash expired | `0x025d63f0…` [🐞](https://debug.barn.cow.fi/order/0x025d63f00798f8170657b977081813333cd9644f006c3745c2ea759242c11157) |
| 21:37:27 | wSOL → Anon | buy | Winner too late: creation blockhash expired | `0x4aacd423…` [🐞](https://debug.barn.cow.fi/order/0x4aacd423d3f587ac45e12b5c6f808a5299f4f203bd64cef896458fa04e9ddc53) |
| 21:37:29 | wSOL → CLAW | sell | Winner too late: creation blockhash expired | `0x2fc9591b…` [🐞](https://debug.barn.cow.fi/order/0x2fc9591b820e8e56bffd65d872bde2bd362c108614287a4828ddc5f493cb2c1a) |
| 21:37:30 | wSOL → USDY | buy | Winner too late: creation blockhash expired | `0xc7d5968b…` [🐞](https://debug.barn.cow.fi/order/0xc7d5968be6723d8bc0ff973ffbc6a3292fc6527043c84432017f81333a5eac14) |
| 21:37:30 | wSOL → GP | sell | Winner too late: creation blockhash expired | `0x8293f5fd…` [🐞](https://debug.barn.cow.fi/order/0x8293f5fd44200e85335ff8ba5c7ab167ccaee5e4aebb849a05bb3abaf2866195) |
| 21:37:32 | wSOL → WOULD | sell | Winner too late: creation blockhash expired | `0x9f4d7680…` [🐞](https://debug.barn.cow.fi/order/0x9f4d7680c5a10e1ad21975c8a3e6c52ef1a17536dd8373ce73ff1fe4f4147bd9) |
| 21:37:33 | wSOL → DBR | sell | Winner too late: creation blockhash expired | `0x7e8307f8…` [🐞](https://debug.barn.cow.fi/order/0x7e8307f8f37f7e379453a39165915a08aa67c00cf2cd9c4525f8f09071bc605a) |
| 21:37:34 | wSOL → COPX | sell | Winner too late: creation blockhash expired | `0x7445b044…` [🐞](https://debug.barn.cow.fi/order/0x7445b044b32fdef4e24f8a7385fc0774c5359eb0d7baad24012470bb88f1a4c7) |
| 21:37:36 | wSOL → MON | buy | Winner too late: creation blockhash expired | `0xef19ab60…` [🐞](https://debug.barn.cow.fi/order/0xef19ab60ca05204f71c66cb72c774bf23e0171907d41f984c3eb2b04758c29d3) |
| 21:37:37 | wSOL → ENA | buy | Winner too late: creation blockhash expired | `0x66129851…` [🐞](https://debug.barn.cow.fi/order/0x66129851d5e528e53c80cb4f7c5b6d4a828f087a358861cb9cb153fc265897af) |
| 21:37:38 | wSOL → RHEA | sell | Winner too late: creation blockhash expired | `0x7c6196a7…` [🐞](https://debug.barn.cow.fi/order/0x7c6196a722b64a0e60cf45d1fd4c6673ce427f72ba731dc8c874c24fc62e7045) |
| 21:37:39 | wSOL → ALTSZN | sell | Winner too late: creation blockhash expired | `0xd583919a…` [🐞](https://debug.barn.cow.fi/order/0xd583919a2e0fdec7cb4f155531b1fb213680aaddba011a89da9e784df6080cd3) |
| 21:37:41 | wSOL → RAWR | sell | Winner too late: creation blockhash expired | `0xeca3947a…` [🐞](https://debug.barn.cow.fi/order/0xeca3947abade6bef2a7fadac614595c0a77d82996ceb6279d8d3fba1cbdb945b) |
| 21:37:46 | wSOL → DKNG | sell | Winner too late: creation blockhash expired | `0x19cc0042…` [🐞](https://debug.barn.cow.fi/order/0x19cc0042c0989df4205d34ffe4f670bad8bd1b85389e4bfcd3fd06125956153b) |
| 21:37:47 | wSOL → 67 | sell | Winner too late: creation blockhash expired | `0x953bc6e0…` [🐞](https://debug.barn.cow.fi/order/0x953bc6e02b384b265f92f0707635e6b43309e966d2cd24d6eee7153aa6f34b9f) |
| 21:37:49 | wSOL → BNB | buy | Winner too late: creation blockhash expired | `0x1bfeef75…` [🐞](https://debug.barn.cow.fi/order/0x1bfeef752433d6a2e88f89fbcb1265915164906539ca8089c308485cece82ff2) |
| 21:37:51 | wSOL → BP | sell | Winner too late: creation blockhash expired | `0x2e06dd6c…` [🐞](https://debug.barn.cow.fi/order/0x2e06dd6c88f2c75a3af544e70d64788d811fa40428a55b20580a132d032688d7) |
| 21:38:06 | wSOL → BABA | sell | Winner too late: creation blockhash expired | `0x57f3f277…` [🐞](https://debug.barn.cow.fi/order/0x57f3f277b23ba4ce56494ae9366d7682b5c11ec274afaeac1373a502d21d334e) |
| 21:38:09 | wSOL → Chud | buy | Winner too late: creation blockhash expired | `0x15ff4d99…` [🐞](https://debug.barn.cow.fi/order/0x15ff4d99b505fbaaa8f92cb8e538f0e9bcae74db4f618a95fe758fd89822d92d) |
| 21:38:10 | wSOL → PONKE | buy | Winner too late: creation blockhash expired | `0x716b252e…` [🐞](https://debug.barn.cow.fi/order/0x716b252ea605dd21dfc07b95de4c741a527cc8597902223d4c95f4cc3984ebef) |
| 21:38:10 | wSOL → NPC | buy | Winner too late: creation blockhash expired | `0x2cfc8b5f…` [🐞](https://debug.barn.cow.fi/order/0x2cfc8b5f67b6ca307d51a9b1a147d6d96d754d7c3bc0d4e417f542eed84e4b82) |
| 21:38:12 | wSOL → MELANIA | sell | Winner too late: creation blockhash expired | `0x9fd851d5…` [🐞](https://debug.barn.cow.fi/order/0x9fd851d5a3a45cb126ae8149648d5fd053aa49ab350ca652dc5016f18338a9ba) |
| 21:38:13 | wSOL → GP | buy | Winner too late: creation blockhash expired | `0x70d7b861…` [🐞](https://debug.barn.cow.fi/order/0x70d7b86169473f6077c8d009243c278cefd293e1b6b5550c6a3b1846d440762f) |
| 21:38:15 | wSOL → WOULD | buy | Winner too late: creation blockhash expired | `0x176951eb…` [🐞](https://debug.barn.cow.fi/order/0x176951eb4d94f76fafdad5f6abe900406536d87f11d902f4502fbbe5d3f20e3f) |
| 21:38:16 | wSOL → DBR | buy | Winner too late: creation blockhash expired | `0x6bbcb599…` [🐞](https://debug.barn.cow.fi/order/0x6bbcb599ccc7a11f2f67bce31e83773f5d740915abfbc20a11371a1d84bafcd3) |
| 21:38:19 | wSOL → DOOD | sell | Winner too late: creation blockhash expired | `0xaa333175…` [🐞](https://debug.barn.cow.fi/order/0xaa333175173fa49f5e815b9edd8ae942ad6e6cfa41ae5365de46e58f80ff1963) |
| 21:38:20 | wSOL → IBM | sell | Winner too late: creation blockhash expired | `0xfcc7f4bd…` [🐞](https://debug.barn.cow.fi/order/0xfcc7f4bd80c662ae057832f95b199dca22b46f9d458222dc9d138966031333dc) |
| 21:38:23 | wSOL → RHEA | buy | Winner too late: creation blockhash expired | `0xd8fad741…` [🐞](https://debug.barn.cow.fi/order/0xd8fad741bec00b911a53cf41c83b514896c776549a026bc5af29eebb0071021a) |
| 21:38:27 | wSOL → Percolator | sell | Winner too late: creation blockhash expired | `0x68533d9a…` [🐞](https://debug.barn.cow.fi/order/0x68533d9a3e1d13c4aa9f3f0c87a18271098d74de46ab7efdd242096b612cbe5d) |
| 21:38:30 | wSOL → SAPLING | sell | Winner too late: creation blockhash expired | `0xbe385110…` [🐞](https://debug.barn.cow.fi/order/0xbe385110a7cc231360c67d673ea8936b93bb5939cb735bbe0dd180c7d5593bb6) |
| 21:38:34 | wSOL → stSOL | sell | Winner too late: creation blockhash expired | `0xcfb3d3dc…` [🐞](https://debug.barn.cow.fi/order/0xcfb3d3dc918d02df0a5ff002f476d0c74a90378014fe0902dae68e8e8250cf92) |
| 21:38:51 | wSOL → W | sell | Winner too late: creation blockhash expired | `0x0242f713…` [🐞](https://debug.barn.cow.fi/order/0x0242f713b11ac4e20a76a40d0ba00577e2461e1d0a79b1da9b0678832ed79193) |
| 21:38:54 | wSOL → IO | sell | Winner too late: creation blockhash expired | `0xfce682bf…` [🐞](https://debug.barn.cow.fi/order/0xfce682bfcfbef8a3bc93a0420166d8f1a6feaf8579e864027d07173c592f06b3) |
| 21:38:56 | wSOL → INTCx | sell | Winner too late: creation blockhash expired | `0x554a4cb6…` [🐞](https://debug.barn.cow.fi/order/0x554a4cb63c536b43b809988a599fefbc7b33157b798db2ea24c75a27928f6e9b) |
| 21:38:57 | wSOL → Machi | sell | Winner too late: creation blockhash expired | `0xdb3fbad8…` [🐞](https://debug.barn.cow.fi/order/0xdb3fbad8766cba10a8443118cc1853daacb937f37f9d02f09d43e7ffd7c35e35) |
| 21:39:00 | wSOL → INTC | sell | Winner too late: creation blockhash expired | `0xab736c38…` [🐞](https://debug.barn.cow.fi/order/0xab736c38c23191ec1d92702c86816611dd5482dc296e5a654854c030dd98774f) |
| 21:39:05 | wSOL → DOOD | buy | Winner too late: creation blockhash expired | `0xe881b28c…` [🐞](https://debug.barn.cow.fi/order/0xe881b28c3bddbc19521f8efecd59a6bc40cf11b2812abf66e1acbd82a4bf51d5) |
| 21:39:18 | wSOL → stSOL | buy | Winner too late: creation blockhash expired | `0x10414b6d…` [🐞](https://debug.barn.cow.fi/order/0x10414b6de70d9d9ee0526f7d7d90bc26bea0a795ede89a7152113f82c028aea9) |
| 21:39:35 | wSOL → W | buy | Winner too late: creation blockhash expired | `0x0dfd1b1e…` [🐞](https://debug.barn.cow.fi/order/0x0dfd1b1e2309b5be4802e39ecf097c7a6f7ed48e03b01994ef388f575742be1f) |
| 21:39:39 | wSOL → IO | buy | Winner too late: creation blockhash expired | `0x5e8fa97a…` [🐞](https://debug.barn.cow.fi/order/0x5e8fa97ae8759b22d5feded07d93704b9b0cb313fc60d58be7b8160b9c35b568) |
| 21:39:42 | wSOL → MORI | sell | Winner too late: creation blockhash expired | `0x7b1d4b2b…` [🐞](https://debug.barn.cow.fi/order/0x7b1d4b2bb1843950f85856dc4fc00b1ac6473dfe3f0cbdb2fd3411805d99768b) |
| 21:39:50 | wSOL → OGDOGE | sell | Winner too late: creation blockhash expired | `0xf3986548…` [🐞](https://debug.barn.cow.fi/order/0xf3986548672c55ecf5d27b6f09f3d9c1bf1b1532e228b2d6f94a31c6a49b6373) |
| 21:40:00 | wSOL → TSUKI | sell | Winner too late: creation blockhash expired | `0x51235766…` [🐞](https://debug.barn.cow.fi/order/0x512357669e19207e6aa880522ee61c8640811f7f53fe6ea6c18f3a599d7bdf61) |
| 21:40:26 | wSOL → MORI | buy | Winner too late: creation blockhash expired | `0x3416ab41…` [🐞](https://debug.barn.cow.fi/order/0x3416ab412d1918f4379683a762fd25151a8186e1faeddda7e1791264f262f7b6) |
| 21:40:42 | wSOL → TSUKI | buy | Winner too late: creation blockhash expired | `0x1dc6e16e…` [🐞](https://debug.barn.cow.fi/order/0x1dc6e16e559b1e7e935963e215e09923deee2c4c01ff4c410eefa39994b44dee) |
