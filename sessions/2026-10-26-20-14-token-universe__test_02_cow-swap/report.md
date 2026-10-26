# Solana QoS report: 2026-10-26-20-14-token-universe__test_02_cow-swap

Barn, orders created between `2026-10-26T20:14:52.854Z` and `2026-10-26T20:37:11.043Z`. Data fetched 2026-10-26T22:24:33+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 678 |
| Orders executed | **466** (68.7%) |
| Sponsored orders never created on-chain | 212 (31.3%) |
| Traders | 30 |
| Settlement txs | 466 |

## Scenario

335 of 558 scenario rows completed. 0 retries, 11 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 20:14:53 | 1 | 1 | sell 0.005 SOL → 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN | failed | 38s | 1 | main expired |
| 20:15:31 | 2 | 1 | sell 0.267 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN → SOL | filled | 56s | 2 |  |
| 20:14:56 | 3 | 2 | sell 0.005 SOL → DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF | failed | 36s | 1 | main expired |
| 20:15:32 | 4 | 2 | sell 0.0597 DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF → SOL | failed | 42s | 1 | acquire DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF expired |
| 20:15:00 | 5 | 3 | sell 0.005 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | failed | 36s | 1 | main expired |
| 20:15:36 | 6 | 3 | sell 0.000681 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu → SOL | failed | 7s | 0 | acquire Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:15:04 | 7 | 4 | sell 0.005 SOL → PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL | filled | 7s | 1 |  |
| 20:15:12 | 8 | 4 | sell 290 PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL → SOL | filled | 4s | 1 |  |
| 20:15:08 | 9 | 5 | sell 0.005 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 38s | 1 | main expired |
| 20:15:47 | 10 | 5 | sell 0.0029 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 → SOL | failed | 42s | 1 | acquire SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 expired |
| 20:15:12 | 11 | 6 | sell 0.005 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | failed | 35s | 1 | main expired |
| 20:15:47 | 12 | 6 | sell 0.000917 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX → SOL | filled | 29s | 2 |  |
| 20:15:16 | 13 | 7 | sell 0.005 SOL → 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E | failed | 35s | 1 | main expired |
| 20:15:52 | 14 | 7 | sell 0.493 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E → SOL | filled | 23s | 2 |  |
| 20:15:20 | 15 | 8 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 35s | 1 | main expired |
| 20:15:56 | 16 | 8 | sell 0.00128 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re → SOL | filled | 30s | 2 |  |
| 20:15:24 | 17 | 9 | sell 0.005 SOL → BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump | filled | 7s | 1 |  |
| 20:15:31 | 18 | 9 | sell 53.1 BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump → SOL | filled | 13s | 1 |  |
| 20:15:28 | 19 | 10 | sell 0.005 SOL → SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH | filled | 10s | 1 |  |
| 20:15:39 | 20 | 10 | sell 0.000308 SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH → SOL | filled | 37s | 2 |  |
| 20:15:32 | 21 | 11 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 36s | 1 | main expired |
| 20:16:08 | 22 | 11 | sell 149000 DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 → SOL | failed | 45s | 1 | acquire DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 expired |
| 20:15:36 | 23 | 12 | sell 0.005 SOL → Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs | filled | 4s | 1 |  |
| 20:15:41 | 24 | 12 | sell 0.783 Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs → SOL | filled | 20s | 2 |  |
| 20:15:40 | 25 | 13 | sell 0.005 SOL → orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE | failed | 35s | 1 | main expired |
| 20:16:15 | 26 | 13 | sell 0.207 orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE → SOL | failed | 42s | 1 | acquire orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE expired |
| 20:15:44 | 27 | 14 | sell 0.005 SOL → jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL | filled | 7s | 1 |  |
| 20:15:51 | 28 | 14 | sell 0.962 jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL → SOL | filled | 26s | 2 |  |
| 20:15:48 | 29 | 15 | sell 0.005 SOL → Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump | filled | 10s | 1 |  |
| 20:15:59 | 30 | 15 | sell 157 Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump → SOL | filled | 7s | 1 |  |
| 20:15:52 | 31 | 16 | sell 0.005 SOL → J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump | filled | 19s | 1 |  |
| 20:16:12 | 32 | 16 | sell 74.4 J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump → SOL | filled | 16s | 1 |  |
| 20:15:56 | 33 | 17 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 14s | 1 |  |
| 20:16:10 | 34 | 17 | sell 0.44 HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr → SOL | failed | 7s | 0 | acquire HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:16:00 | 35 | 18 | sell 0.005 SOL → J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr | filled | 7s | 1 |  |
| 20:16:08 | 36 | 18 | sell 1.31 J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr → SOL | failed | 41s | 1 | acquire J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr expired |
| 20:16:04 | 37 | 19 | sell 0.005 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 8s | 1 |  |
| 20:16:12 | 38 | 19 | sell 0.000482 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 → SOL | filled | 20s | 2 |  |
| 20:16:08 | 39 | 20 | sell 0.005 SOL → USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA | failed | 36s | 1 | main expired |
| 20:16:44 | 40 | 20 | sell 0.492 USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA → SOL | failed | 42s | 1 | acquire USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA expired |
| 20:16:13 | 41 | 21 | sell 0.005 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | failed | 39s | 1 | main expired |
| 20:16:51 | 42 | 21 | sell 0.0014 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN → SOL | failed | 42s | 1 | acquire XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN expired |
| 20:16:16 | 43 | 22 | sell 0.005 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | failed | 38s | 1 | main expired |
| 20:16:55 | 44 | 22 | sell 0.0186 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc → SOL | failed | 42s | 1 | acquire Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc expired |
| 20:16:20 | 45 | 23 | sell 0.005 SOL → METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m | failed | 35s | 1 | main expired |
| 20:16:56 | 46 | 23 | sell 10 METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m → SOL | failed | 42s | 1 | acquire METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m expired |
| 20:16:24 | 47 | 24 | sell 0.005 SOL → Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump | failed | 38s | 1 | main expired |
| 20:17:03 | 48 | 24 | sell 61.2 Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump → SOL | failed | 43s | 1 | acquire Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump expired |
| 20:16:28 | 49 | 25 | sell 0.005 SOL → DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 | filled | 7s | 1 |  |
| 20:16:35 | 50 | 25 | sell 57.4 DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 → SOL | filled | 17s | 2 |  |
| 20:16:32 | 51 | 26 | sell 0.005 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 35s | 1 | main expired |
| 20:17:08 | 52 | 26 | sell 0.00571 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | failed | 39s | 1 | acquire XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 expired |
| 20:16:36 | 53 | 27 | sell 0.005 SOL → DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 | failed | 35s | 1 | main expired |
| 20:17:12 | 54 | 27 | sell 25.9 DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 → SOL | failed | 42s | 1 | acquire DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 expired |
| 20:16:40 | 55 | 28 | sell 0.005 SOL → nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 | failed | 35s | 1 | main expired |
| 20:17:16 | 56 | 28 | sell 0.836 nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 → SOL | failed | 42s | 1 | acquire nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 expired |
| 20:16:44 | 57 | 29 | sell 0.005 SOL → BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T | failed | 35s | 1 | main expired |
| 20:17:19 | 58 | 29 | sell 0.0173 BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T → SOL | failed | 42s | 1 | acquire BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T expired |
| 20:16:48 | 59 | 30 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 35s | 1 | main expired |
| 20:17:23 | 60 | 30 | sell 0.00309 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm → SOL | filled | 46s | 2 |  |
| 20:16:52 | 61 | 1 | sell 0.005 SOL → KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS | failed | 35s | 1 | main expired |
| 20:17:28 | 62 | 1 | sell 14.2 KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS → SOL | filled | 48s | 2 |  |
| 20:16:56 | 63 | 2 | sell 0.005 SOL → 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx | filled | 10s | 1 |  |
| 20:17:06 | 64 | 2 | sell 0.242 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx → SOL | filled | 27s | 2 |  |
| 20:17:00 | 65 | 3 | sell 0.005 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | failed | 35s | 1 | main expired |
| 20:17:36 | 66 | 3 | sell 0.000655 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ → SOL | failed | 41s | 1 | acquire Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ expired |
| 20:17:04 | 67 | 4 | sell 0.005 SOL → 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump | filled | 7s | 1 |  |
| 20:17:11 | 68 | 4 | sell 61.9 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump → SOL | filled | 27s | 2 |  |
| 20:17:08 | 69 | 5 | sell 0.005 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | failed | 37s | 1 | main expired |
| 20:17:45 | 70 | 5 | sell 0.00206 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 → SOL | failed | 41s | 1 | acquire XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 expired |
| 20:17:12 | 71 | 6 | sell 0.005 SOL → PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b | filled | 10s | 1 |  |
| 20:17:23 | 72 | 6 | sell 10.9 PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b → SOL | filled | 21s | 2 |  |
| 20:17:16 | 73 | 7 | sell 0.005 SOL → CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn | filled | 10s | 1 |  |
| 20:17:27 | 74 | 7 | sell 5.93e-06 CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn → SOL | filled | 30s | 2 |  |
| 20:17:20 | 75 | 8 | sell 0.005 SOL → 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk | failed | 36s | 1 | main expired |
| 20:17:56 | 76 | 8 | sell 0.88 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk → SOL | failed | 41s | 1 | acquire 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk expired |
| 20:17:24 | 77 | 9 | sell 0.005 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | failed | 36s | 1 | main expired |
| 20:18:00 | 78 | 9 | sell 0.00147 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp → SOL | failed | 45s | 1 | acquire XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp expired |
| 20:17:28 | 79 | 10 | sell 0.005 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 35s | 1 | main expired |
| 20:18:04 | 80 | 10 | sell 0.00129 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | failed | 41s | 1 | acquire XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB expired |
| 20:17:32 | 81 | 11 | sell 0.005 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | failed | 35s | 1 | main expired |
| 20:18:08 | 82 | 11 | sell 0.00272 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu → SOL | failed | 41s | 1 | acquire Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu expired |
| 20:17:36 | 83 | 12 | sell 0.005 SOL → TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo | failed | 35s | 1 | main expired |
| 20:18:11 | 84 | 12 | sell 0.0023 TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo → SOL | failed | 41s | 1 | acquire TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo expired |
| 20:17:40 | 85 | 13 | sell 0.005 SOL → 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw | failed | 35s | 1 | main expired |
| 20:18:16 | 86 | 13 | sell 0.433 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw → SOL | failed | 41s | 1 | acquire 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw expired |
| 20:17:44 | 87 | 14 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 7s | 1 |  |
| 20:17:52 | 88 | 14 | sell 2.33 EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm → SOL | failed | 42s | 1 | acquire EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm expired |
| 20:17:48 | 89 | 15 | sell 0.005 SOL → SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 | failed | 35s | 1 | main expired |
| 20:18:24 | 90 | 15 | sell 30.3 SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 → SOL | failed | 41s | 1 | acquire SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 expired |
| 20:17:52 | 91 | 16 | sell 0.005 SOL → SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH | failed | 35s | 1 | main expired |
| 20:18:27 | 92 | 16 | sell 0.00537 SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH → SOL | failed | 42s | 1 | acquire SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH expired |
| 20:17:56 | 93 | 17 | sell 0.005 SOL → ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU | failed | 35s | 1 | main expired |
| 20:18:32 | 94 | 17 | sell 213 ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU → SOL | failed | 42s | 1 | acquire ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU expired |
| 20:18:00 | 95 | 18 | sell 0.005 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | failed | 35s | 1 | main expired |
| 20:18:35 | 96 | 18 | sell 0.00451 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg → SOL | failed | 41s | 1 | acquire XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg expired |
| 20:18:04 | 97 | 19 | sell 0.005 SOL → 7KEPApdbBMByrmqihz3bht2uMhFQcatjfSFQCKq66kH3 | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:18:06 | 98 | 19 | sell 87.9 7KEPApdbBMByrmqihz3bht2uMhFQcatjfSFQCKq66kH3 → SOL | failed | 7s | 0 | acquire 7KEPApdbBMByrmqihz3bht2uMhFQcatjfSFQCKq66kH3 error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 20:18:08 | 99 | 20 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 10s | 1 |  |
| 20:18:19 | 100 | 20 | sell 0.00409 pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL → SOL | filled | 23s | 2 |  |
| 20:18:12 | 101 | 21 | sell 0.005 SOL → C1MHyoTJpRTeS9AQCyspNVu2EWAYCZwmJ1jNkEArFP1f | filled | 10s | 1 |  |
| 20:18:22 | 102 | 21 | sell 3.48 C1MHyoTJpRTeS9AQCyspNVu2EWAYCZwmJ1jNkEArFP1f → SOL | filled | 23s | 2 |  |
| 20:18:16 | 103 | 22 | sell 0.005 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | failed | 35s | 1 | main expired |
| 20:18:52 | 104 | 22 | sell 0.00314 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ → SOL | failed | 41s | 1 | acquire XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ expired |
| 20:18:20 | 105 | 23 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 7s | 1 |  |
| 20:18:27 | 106 | 23 | sell 479 ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 → SOL | filled | 13s | 1 |  |
| 20:18:24 | 107 | 24 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 19s | 1 |  |
| 20:18:44 | 108 | 24 | sell 0.000117 AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P → SOL | filled | 27s | 2 |  |
| 20:18:28 | 109 | 25 | sell 0.005 SOL → 8SMMso8Muv8d6i4WmMDthKt6TN1ysN6937sx3DKLXZqB | filled | 10s | 1 |  |
| 20:18:39 | 110 | 25 | sell 8.14 8SMMso8Muv8d6i4WmMDthKt6TN1ysN6937sx3DKLXZqB → SOL | filled | 17s | 2 |  |
| 20:18:32 | 111 | 26 | sell 0.005 SOL → 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 | filled | 10s | 1 |  |
| 20:18:42 | 112 | 26 | sell 248 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 → SOL | filled | 21s | 2 |  |
| 20:18:36 | 113 | 27 | sell 0.005 SOL → A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump | filled | 7s | 1 |  |
| 20:18:43 | 114 | 27 | sell 313 A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump → SOL | filled | 10s | 1 |  |
| 20:18:40 | 115 | 28 | sell 0.005 SOL → 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ | filled | 7s | 1 |  |
| 20:18:48 | 116 | 28 | sell 5.92e-06 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ → SOL | filled | 30s | 2 |  |
| 20:18:44 | 117 | 29 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 7s | 1 |  |
| 20:18:52 | 118 | 29 | sell 0.000666 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa → SOL | filled | 26s | 2 |  |
| 20:18:48 | 119 | 30 | sell 0.005 SOL → GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 | failed | 35s | 1 | main expired |
| 20:19:24 | 120 | 30 | sell 0.0325 GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 → SOL | failed | 41s | 1 | acquire GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 expired |
| 20:18:52 | 121 | 1 | sell 0.005 SOL → J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd | failed | 35s | 1 | main expired |
| 20:19:28 | 122 | 1 | sell 13.8 J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd → SOL | failed | 42s | 1 | acquire J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd expired |
| 20:18:56 | 123 | 2 | sell 0.005 SOL → 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 | failed | 36s | 1 | main expired |
| 20:19:32 | 124 | 2 | sell 0.342 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 → SOL | failed | 42s | 1 | acquire 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 expired |
| 20:19:00 | 125 | 3 | sell 0.005 SOL → DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow | failed | 35s | 1 | main expired |
| 20:19:35 | 126 | 3 | sell 0.0252 DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow → SOL | failed | 42s | 1 | acquire DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow expired |
| 20:19:04 | 127 | 4 | sell 0.005 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | failed | 35s | 1 | main expired |
| 20:19:40 | 128 | 4 | sell 0.0024 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | failed | 42s | 1 | acquire XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 expired |
| 20:19:08 | 129 | 5 | sell 0.005 SOL → 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC | failed | 35s | 1 | main expired |
| 20:19:44 | 130 | 5 | sell 0.471 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC → SOL | failed | 42s | 1 | acquire 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC expired |
| 20:19:12 | 131 | 6 | sell 0.005 SOL → GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:19:14 | 132 | 6 | sell 0.000117 GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A → SOL | filled | 33s | 2 |  |
| 20:19:16 | 133 | 7 | sell 0.005 SOL → GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump | filled | 7s | 1 |  |
| 20:19:24 | 134 | 7 | sell 385 GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump → SOL | filled | 7s | 1 |  |
| 20:19:20 | 135 | 8 | sell 0.005 SOL → HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 | filled | 7s | 1 |  |
| 20:19:27 | 136 | 8 | sell 5.73 HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 → SOL | filled | 20s | 2 |  |
| 20:19:24 | 137 | 9 | sell 0.005 SOL → 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS | filled | 7s | 1 |  |
| 20:19:31 | 138 | 9 | sell 118 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS → SOL | filled | 23s | 2 |  |
| 20:19:28 | 139 | 10 | sell 0.005 SOL → CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu | failed | 35s | 1 | main expired |
| 20:20:04 | 140 | 10 | sell 7.59 CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu → SOL | failed | 42s | 1 | acquire CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu expired |
| 20:19:32 | 141 | 11 | sell 0.005 SOL → H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump | filled | 11s | 1 |  |
| 20:19:43 | 142 | 11 | sell 219 H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump → SOL | filled | 18s | 2 |  |
| 20:19:36 | 143 | 12 | sell 0.005 SOL → Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu | filled | 4s | 1 |  |
| 20:19:41 | 144 | 12 | sell 38.3 Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu → SOL | filled | 21s | 2 |  |
| 20:19:40 | 145 | 13 | sell 0.005 SOL → 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump | filled | 8s | 1 |  |
| 20:19:48 | 146 | 13 | sell 78 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump → SOL | filled | 8s | 1 |  |
| 20:19:44 | 147 | 14 | sell 0.005 SOL → 1zJX5gRnjLgmTpq5sVwkq69mNDQkCemqoasyjaPW6jm | filled | 7s | 1 |  |
| 20:19:52 | 148 | 14 | sell 46.8 1zJX5gRnjLgmTpq5sVwkq69mNDQkCemqoasyjaPW6jm → SOL | filled | 36s | 2 |  |
| 20:19:48 | 149 | 15 | sell 0.005 SOL → HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx | failed | 36s | 1 | main expired |
| 20:20:24 | 150 | 15 | sell 0.0168 HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx → SOL | failed | 45s | 1 | acquire HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx expired |
| 20:19:52 | 151 | 16 | sell 0.005 SOL → METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta | failed | 35s | 1 | main expired |
| 20:20:28 | 152 | 16 | sell 0.0849 METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta → SOL | failed | 42s | 1 | acquire METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta expired |
| 20:19:56 | 153 | 17 | sell 0.005 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | failed | 36s | 1 | main expired |
| 20:20:32 | 154 | 17 | sell 0.00453 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH → SOL | failed | 42s | 1 | acquire Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH expired |
| 20:20:00 | 155 | 18 | sell 0.005 SOL → NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg | failed | 36s | 1 | main expired |
| 20:20:36 | 156 | 18 | sell 0.0141 NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg → SOL | failed | 41s | 1 | acquire NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg expired |
| 20:20:04 | 157 | 19 | sell 0.005 SOL → 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump | filled | 7s | 1 |  |
| 20:20:11 | 158 | 19 | sell 184 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump → SOL | filled | 7s | 1 |  |
| 20:20:08 | 159 | 20 | sell 0.005 SOL → CzLTZppPdZtTjyq3WGpHLstoc3GLhu7zH5Zg6xUa6Gv5 | filled | 11s | 1 |  |
| 20:20:19 | 160 | 20 | sell 0.00575 CzLTZppPdZtTjyq3WGpHLstoc3GLhu7zH5Zg6xUa6Gv5 → SOL | filled | 24s | 2 |  |
| 20:20:12 | 161 | 21 | sell 0.005 SOL → 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 | failed | 35s | 1 | main expired |
| 20:20:48 | 162 | 21 | sell 2.28 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 → SOL | failed | 42s | 1 | acquire 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 expired |
| 20:20:16 | 163 | 22 | sell 0.005 SOL → GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc | failed | 36s | 1 | main expired |
| 20:20:52 | 164 | 22 | sell 1.48 GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc → SOL | failed | 41s | 1 | acquire GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc expired |
| 20:20:20 | 165 | 23 | sell 0.005 SOL → bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 | failed | 35s | 1 | main expired |
| 20:20:56 | 166 | 23 | sell 0.00341 bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 → SOL | failed | 42s | 1 | acquire bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 expired |
| 20:20:24 | 167 | 24 | sell 0.005 SOL → 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump | failed | 35s | 1 | main expired |
| 20:21:00 | 168 | 24 | sell 55.9 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump → SOL | failed | 42s | 1 | acquire 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump expired |
| 20:20:28 | 169 | 25 | sell 0.005 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | failed | 35s | 1 | main expired |
| 20:21:04 | 170 | 25 | sell 0.00189 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg → SOL | failed | 41s | 1 | acquire Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg expired |
| 20:20:32 | 171 | 26 | sell 0.005 SOL → EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 | filled | 10s | 1 |  |
| 20:20:43 | 172 | 26 | sell 511 EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 → SOL | filled | 10s | 1 |  |
| 20:20:36 | 173 | 27 | sell 0.005 SOL → BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin | filled | 7s | 1 |  |
| 20:20:44 | 174 | 27 | sell 13.1 BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin → SOL | filled | 17s | 2 |  |
| 20:20:40 | 175 | 28 | sell 0.005 SOL → RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE | failed | 36s | 1 | main expired |
| 20:21:16 | 176 | 28 | sell 0.0101 RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE → SOL | failed | 41s | 1 | acquire RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE expired |
| 20:20:44 | 177 | 29 | sell 0.005 SOL → AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc | failed | 35s | 1 | main expired |
| 20:21:20 | 178 | 29 | sell 0.168 AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc → SOL | failed | 44s | 1 | acquire AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc expired |
| 20:20:48 | 179 | 30 | sell 0.005 SOL → rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof | filled | 7s | 1 |  |
| 20:20:56 | 180 | 30 | sell 0.264 rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof → SOL | filled | 23s | 2 |  |
| 20:20:52 | 181 | 1 | sell 0.005 SOL → BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump | filled | 10s | 1 |  |
| 20:21:03 | 182 | 1 | sell 318 BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump → SOL | filled | 21s | 2 |  |
| 20:20:56 | 183 | 2 | sell 0.005 SOL → 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump | filled | 4s | 1 |  |
| 20:21:00 | 184 | 2 | sell 291 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump → SOL | filled | 17s | 2 |  |
| 20:21:00 | 185 | 3 | sell 0.005 SOL → XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump | filled | 7s | 1 |  |
| 20:21:08 | 186 | 3 | sell 342 XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump → SOL | filled | 10s | 1 |  |
| 20:21:04 | 187 | 4 | sell 0.005 SOL → BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp | failed | 35s | 1 | main expired |
| 20:21:40 | 188 | 4 | sell 0.00445 BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp → SOL | failed | 42s | 1 | acquire BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp expired |
| 20:21:08 | 189 | 5 | sell 0.005 SOL → DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw | failed | 35s | 1 | main expired |
| 20:21:43 | 190 | 5 | sell 0.00863 DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw → SOL | failed | 41s | 1 | acquire DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw expired |
| 20:21:13 | 191 | 6 | sell 0.005 SOL → AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 | failed | 35s | 1 | main expired |
| 20:21:48 | 192 | 6 | sell 0.00291 AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 → SOL | failed | 42s | 1 | acquire AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 expired |
| 20:21:17 | 193 | 7 | sell 0.005 SOL → he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A | failed | 35s | 1 | main expired |
| 20:21:52 | 194 | 7 | sell 0.00378 he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A → SOL | failed | 41s | 1 | acquire he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A expired |
| 20:21:20 | 195 | 8 | sell 0.005 SOL → 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T | filled | 7s | 1 |  |
| 20:21:27 | 196 | 8 | sell 1.42 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T → SOL | filled | 23s | 2 |  |
| 20:21:24 | 197 | 9 | sell 0.005 SOL → 3vgopg7xm3EWkXfxmWPUpcf7g939hecfqg18sLuXDzVt | filled | 7s | 1 |  |
| 20:21:31 | 198 | 9 | sell 36.7 3vgopg7xm3EWkXfxmWPUpcf7g939hecfqg18sLuXDzVt → SOL | filled | 19s | 1 |  |
| 20:21:28 | 199 | 10 | sell 0.005 SOL → HgBRWfYxEfvPhtqkaeymCQtHCrKE46qQ43pKe8HCpump | filled | 10s | 1 |  |
| 20:21:38 | 200 | 10 | sell 32.9 HgBRWfYxEfvPhtqkaeymCQtHCrKE46qQ43pKe8HCpump → SOL | filled | 17s | 2 |  |
| 20:21:32 | 201 | 11 | sell 0.005 SOL → B5WTLaRwaUQpKk7ir1wniNB6m5o8GgMrimhKMYan2R6B | filled | 10s | 1 |  |
| 20:21:43 | 202 | 11 | sell 610 B5WTLaRwaUQpKk7ir1wniNB6m5o8GgMrimhKMYan2R6B → SOL | filled | 20s | 2 |  |
| 20:21:36 | 203 | 12 | sell 0.005 SOL → 1NJMqVM4PadjuzYmeB7zV7q7DV8oB3ExaQCd9x6KsLz | failed | 35s | 1 | main expired |
| 20:22:11 | 204 | 12 | sell 0.0711 1NJMqVM4PadjuzYmeB7zV7q7DV8oB3ExaQCd9x6KsLz → SOL | failed | 41s | 1 | acquire 1NJMqVM4PadjuzYmeB7zV7q7DV8oB3ExaQCd9x6KsLz expired |
| 20:21:40 | 205 | 13 | sell 0.005 SOL → A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump | filled | 7s | 1 |  |
| 20:21:47 | 206 | 13 | sell 99.4 A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump → SOL | filled | 23s | 2 |  |
| 20:21:44 | 207 | 14 | sell 0.005 SOL → BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p | filled | 7s | 1 |  |
| 20:21:52 | 208 | 14 | sell 22.9 BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p → SOL | filled | 27s | 2 |  |
| 20:21:48 | 209 | 15 | sell 0.005 SOL → 5g6wVay8NYQ5Tspo4irj9YqSFfQoPDW7apkX352N29PP | filled | 7s | 1 |  |
| 20:21:55 | 210 | 15 | sell 12.8 5g6wVay8NYQ5Tspo4irj9YqSFfQoPDW7apkX352N29PP → SOL | filled | 24s | 2 |  |
| 20:21:52 | 211 | 16 | sell 0.005 SOL → ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq | filled | 10s | 1 |  |
| 20:22:03 | 212 | 16 | sell 55.8 ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq → SOL | filled | 16s | 1 |  |
| 20:21:56 | 213 | 17 | sell 0.005 SOL → SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz | failed | 35s | 1 | main expired |
| 20:22:32 | 214 | 17 | sell 0.0783 SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz → SOL | failed | 42s | 1 | acquire SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz expired |
| 20:22:00 | 215 | 18 | sell 0.005 SOL → BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk | failed | 35s | 1 | main expired |
| 20:22:36 | 216 | 18 | sell 0.00217 BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk → SOL | failed | 42s | 1 | acquire BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk expired |
| 20:22:04 | 217 | 19 | sell 0.005 SOL → 6SjVTj1VGwFSXn7wEjwFm77LvACeTqB7sQUebYKX8Ds5 | filled | 7s | 1 |  |
| 20:22:12 | 218 | 19 | sell 231 6SjVTj1VGwFSXn7wEjwFm77LvACeTqB7sQUebYKX8Ds5 → SOL | filled | 7s | 1 |  |
| 20:22:08 | 219 | 20 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 36s | 1 | main expired |
| 20:22:45 | 220 | 20 | sell 0.427 A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 → SOL | failed | 42s | 1 | acquire A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 expired |
| 20:22:12 | 221 | 21 | sell 0.005 SOL → RDDTGbhHwVXfyCvQMXzzowKjf5qrYBZAnehoXW83ooh | failed | 36s | 1 | main expired |
| 20:22:48 | 222 | 21 | sell 0.00307 RDDTGbhHwVXfyCvQMXzzowKjf5qrYBZAnehoXW83ooh → SOL | failed | 42s | 1 | acquire RDDTGbhHwVXfyCvQMXzzowKjf5qrYBZAnehoXW83ooh expired |
| 20:22:16 | 223 | 22 | sell 0.005 SOL → CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:22:18 | 224 | 22 | sell 19.9 CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 → SOL | filled | 27s | 2 |  |
| 20:22:20 | 225 | 23 | sell 0.005 SOL → zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k | filled | 7s | 1 |  |
| 20:22:28 | 226 | 23 | sell 583 zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k → SOL | filled | 10s | 1 |  |
| 20:22:24 | 227 | 24 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 7s | 1 |  |
| 20:22:32 | 228 | 24 | sell 1060 MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 → SOL | filled | 27s | 2 |  |
| 20:22:28 | 229 | 25 | sell 0.005 SOL → AMD8XwJXgQ9WV45Wyj9yFLejxzf2J6VM1PJY8bJEjeES | failed | 35s | 1 | main expired |
| 20:23:04 | 230 | 25 | sell 0.000804 AMD8XwJXgQ9WV45Wyj9yFLejxzf2J6VM1PJY8bJEjeES → SOL | failed | 41s | 1 | acquire AMD8XwJXgQ9WV45Wyj9yFLejxzf2J6VM1PJY8bJEjeES expired |
| 20:22:32 | 231 | 26 | sell 0.005 SOL → EN2nnxrg8uUi6x2sJkzNPd2eT6rB9rdSoQNNaENA4RZA | filled | 13s | 1 |  |
| 20:22:46 | 232 | 26 | sell 609 EN2nnxrg8uUi6x2sJkzNPd2eT6rB9rdSoQNNaENA4RZA → SOL | filled | 21s | 2 |  |
| 20:22:36 | 233 | 27 | sell 0.005 SOL → hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux | filled | 7s | 1 |  |
| 20:22:43 | 234 | 27 | sell 0.964 hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux → SOL | filled | 34s | 2 |  |
| 20:22:40 | 235 | 28 | sell 0.005 SOL → 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump | filled | 10s | 1 |  |
| 20:22:51 | 236 | 28 | sell 65.7 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump → SOL | filled | 18s | 2 |  |
| 20:22:44 | 237 | 29 | sell 0.005 SOL → CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:22:46 | 238 | 29 | sell 195 CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump → SOL | filled | 21s | 2 |  |
| 20:22:48 | 239 | 30 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 10s | 1 |  |
| 20:22:59 | 240 | 30 | sell 10.5 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr → SOL | filled | 20s | 2 |  |
| 20:22:52 | 241 | 1 | sell 0.005 SOL → PAYmo6moDF3Ro3X6bU2jwe2UdBnBhv8YjLgL1j4DxGu | filled | 10s | 1 |  |
| 20:23:02 | 242 | 1 | sell 57.5 PAYmo6moDF3Ro3X6bU2jwe2UdBnBhv8YjLgL1j4DxGu → SOL | filled | 20s | 2 |  |
| 20:22:56 | 243 | 2 | sell 0.005 SOL → 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump | failed | 35s | 1 | main expired |
| 20:23:32 | 244 | 2 | sell 8.12 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump → SOL | failed | 42s | 1 | acquire 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump expired |
| 20:23:00 | 245 | 3 | sell 0.005 SOL → CGEDT9QZDvvH5GmVkWJH2BXiMJqMJySC9ihWyr7Spump | filled | 8s | 1 |  |
| 20:23:08 | 246 | 3 | sell 281 CGEDT9QZDvvH5GmVkWJH2BXiMJqMJySC9ihWyr7Spump → SOL | filled | 10s | 1 |  |
| 20:23:04 | 247 | 4 | sell 0.005 SOL → 3iQL8BFS2vE7mww4ehAqQHAsbmRNCrPxizWAT2Zfyr9y | filled | 7s | 1 |  |
| 20:23:11 | 248 | 4 | sell 0.695 3iQL8BFS2vE7mww4ehAqQHAsbmRNCrPxizWAT2Zfyr9y → SOL | filled | 27s | 2 |  |
| 20:23:08 | 249 | 5 | sell 0.005 SOL → Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump | filled | 10s | 1 |  |
| 20:23:19 | 250 | 5 | sell 44.9 Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump → SOL | filled | 17s | 2 |  |
| 20:23:12 | 251 | 6 | sell 0.005 SOL → LinkhB3afbBKb2EQQu7s7umdZceV3wcvAUJhQAfQ23L | filled | 10s | 1 |  |
| 20:23:23 | 252 | 6 | sell 0.0384 LinkhB3afbBKb2EQQu7s7umdZceV3wcvAUJhQAfQ23L → SOL | filled | 21s | 2 |  |
| 20:23:16 | 253 | 7 | sell 0.005 SOL → 4qQeZ5LwSz6HuupUu8jCtgXyW1mYQcNbFAW1sWZp89HL | failed | 35s | 1 | main expired |
| 20:23:52 | 254 | 7 | sell 0.225 4qQeZ5LwSz6HuupUu8jCtgXyW1mYQcNbFAW1sWZp89HL → SOL | failed | 42s | 1 | acquire 4qQeZ5LwSz6HuupUu8jCtgXyW1mYQcNbFAW1sWZp89HL expired |
| 20:23:20 | 255 | 8 | sell 0.005 SOL → KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP | filled | 7s | 1 |  |
| 20:23:27 | 256 | 8 | sell 27.7 KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP → SOL | filled | 26s | 2 |  |
| 20:23:24 | 257 | 9 | sell 0.005 SOL → eL5fUxj2J4CiQsmW85k5FG9DvuQjjUoBHoQBi2Kpump | filled | 7s | 1 |  |
| 20:23:31 | 258 | 9 | sell 70.4 eL5fUxj2J4CiQsmW85k5FG9DvuQjjUoBHoQBi2Kpump → SOL | filled | 21s | 2 |  |
| 20:23:28 | 259 | 10 | sell 0.005 SOL → CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta | filled | 10s | 1 |  |
| 20:23:38 | 260 | 10 | sell 0.649 CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta → SOL | filled | 24s | 2 |  |
| 20:23:32 | 261 | 11 | sell 0.005 SOL → DvjbEsdca43oQcw2h3HW1CT7N3x5vRcr3QrvTUHnXvgV | failed | 35s | 1 | main expired |
| 20:24:08 | 262 | 11 | sell 312 DvjbEsdca43oQcw2h3HW1CT7N3x5vRcr3QrvTUHnXvgV → SOL | failed | 41s | 1 | acquire DvjbEsdca43oQcw2h3HW1CT7N3x5vRcr3QrvTUHnXvgV expired |
| 20:23:36 | 263 | 12 | sell 0.005 SOL → 8PzFWyLpCVEmbZmVJcaRTU5r69XKJx1rd7YGpWvnpump | filled | 7s | 1 |  |
| 20:23:43 | 264 | 12 | sell 216 8PzFWyLpCVEmbZmVJcaRTU5r69XKJx1rd7YGpWvnpump → SOL | filled | 10s | 1 |  |
| 20:23:40 | 265 | 13 | sell 0.005 SOL → CniPCE4b3s8gSUPhUiyMjXnytrEqUrMfSsnbBjLCpump | failed | 35s | 1 | main expired |
| 20:24:16 | 266 | 13 | sell 128 CniPCE4b3s8gSUPhUiyMjXnytrEqUrMfSsnbBjLCpump → SOL | failed | 42s | 1 | acquire CniPCE4b3s8gSUPhUiyMjXnytrEqUrMfSsnbBjLCpump expired |
| 20:23:44 | 267 | 14 | sell 0.005 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 35s | 1 | main expired |
| 20:24:20 | 268 | 14 | sell 0.492 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk → SOL | failed | 42s | 1 | acquire USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk expired |
| 20:23:48 | 269 | 15 | sell 0.005 SOL → HUMA1821qVDKta3u2ovmfDQeW2fSQouSKE8fkF44wvGw | filled | 7s | 1 |  |
| 20:23:56 | 270 | 15 | sell 15.1 HUMA1821qVDKta3u2ovmfDQeW2fSQouSKE8fkF44wvGw → SOL | filled | 20s | 1 |  |
| 20:23:52 | 271 | 16 | sell 0.005 SOL → MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u | failed | 35s | 1 | main expired |
| 20:24:28 | 272 | 16 | sell 7.1 MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u → SOL | failed | 41s | 1 | acquire MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u expired |
| 20:23:56 | 273 | 17 | sell 0.005 SOL → 3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump | filled | 4s | 1 |  |
| 20:24:00 | 274 | 17 | sell 239 3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump → SOL | filled | 17s | 2 |  |
| 20:24:00 | 275 | 18 | sell 0.005 SOL → Tqj8yFmagrg7oorpQkVGYR52r96RFTamvWfth9bpump | filled | 7s | 1 |  |
| 20:24:07 | 276 | 18 | sell 764 Tqj8yFmagrg7oorpQkVGYR52r96RFTamvWfth9bpump → SOL | filled | 10s | 1 |  |
| 20:24:04 | 277 | 19 | sell 0.005 SOL → 463SK47VkB7uE7XenTHKiVcMtxRsfNE2X4Q9wByaURVA | filled | 7s | 1 |  |
| 20:24:12 | 278 | 19 | sell 127 463SK47VkB7uE7XenTHKiVcMtxRsfNE2X4Q9wByaURVA → SOL | filled | 26s | 2 |  |
| 20:24:08 | 279 | 20 | sell 0.005 SOL → USNv3NkKA27Dh4nsHJDPhW4VoEcTQmjoZyJt2dqdwFu | failed | 35s | 1 | main expired |
| 20:24:44 | 280 | 20 | sell 0.0033 USNv3NkKA27Dh4nsHJDPhW4VoEcTQmjoZyJt2dqdwFu → SOL | failed | 41s | 1 | acquire USNv3NkKA27Dh4nsHJDPhW4VoEcTQmjoZyJt2dqdwFu expired |
| 20:24:12 | 281 | 21 | sell 0.005 SOL → SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq | failed | 35s | 1 | main expired |
| 20:24:48 | 282 | 21 | sell 8.35 SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq → SOL | failed | 41s | 1 | acquire SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq expired |
| 20:24:16 | 283 | 22 | sell 0.005 SOL → 5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC | filled | 4s | 1 |  |
| 20:24:20 | 284 | 22 | sell 22.7 5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC → SOL | filled | 20s | 2 |  |
| 20:24:20 | 285 | 23 | sell 0.005 SOL → CARSsxWPkpQWvfyRBwfGMGvysJBHdHGfE46X5MNgmeta | failed | 33s | 1 | main expired |
| 20:24:53 | 286 | 23 | sell 4.16 CARSsxWPkpQWvfyRBwfGMGvysJBHdHGfE46X5MNgmeta → SOL | failed | 42s | 1 | acquire CARSsxWPkpQWvfyRBwfGMGvysJBHdHGfE46X5MNgmeta expired |
| 20:24:24 | 287 | 24 | sell 0.005 SOL → 8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB | filled | 7s | 1 |  |
| 20:24:31 | 288 | 24 | sell 1010 8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB → SOL | filled | 21s | 2 |  |
| 20:24:28 | 289 | 25 | sell 0.005 SOL → G7iK3prSzAA4vzcJWvsLUEsdCqzR7PnMzJV61vSdFSNW | filled | 10s | 1 |  |
| 20:24:39 | 290 | 25 | sell 0.28 G7iK3prSzAA4vzcJWvsLUEsdCqzR7PnMzJV61vSdFSNW → SOL | filled | 13s | 1 |  |
| 20:24:32 | 291 | 26 | sell 0.005 SOL → Cy1GS2FqefgaMbi45UunrUzin1rfEmTUYnomddzBpump | filled | 10s | 1 |  |
| 20:24:42 | 292 | 26 | sell 337 Cy1GS2FqefgaMbi45UunrUzin1rfEmTUYnomddzBpump → SOL | filled | 23s | 2 |  |
| 20:24:36 | 293 | 27 | sell 0.005 SOL → XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ | failed | 35s | 1 | main expired |
| 20:25:12 | 294 | 27 | sell 0.00547 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ → SOL | failed | 42s | 1 | acquire XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ expired |
| 20:24:40 | 295 | 28 | sell 0.005 SOL → G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG | failed | 36s | 1 | main expired |
| 20:25:16 | 296 | 28 | sell 8.48 G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG → SOL | failed | 42s | 1 | acquire G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG expired |
| 20:24:44 | 297 | 29 | sell 0.005 SOL → ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY | filled | 7s | 1 |  |
| 20:24:52 | 298 | 29 | sell 12 ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY → SOL | filled | 21s | 2 |  |
| 20:24:48 | 299 | 30 | sell 0.005 SOL → HtTYHz1Kf3rrQo6AqDLmss7gq5WrkWAaXn3tupUZbonk | filled | 10s | 1 |  |
| 20:24:59 | 300 | 30 | sell 177 HtTYHz1Kf3rrQo6AqDLmss7gq5WrkWAaXn3tupUZbonk → SOL | filled | 17s | 2 |  |
| 20:24:52 | 301 | 1 | sell 0.005 SOL → 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump | filled | 10s | 1 |  |
| 20:25:03 | 302 | 1 | sell 10 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump → SOL | filled | 17s | 2 |  |
| 20:24:56 | 303 | 2 | sell 0.005 SOL → FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump | filled | 7s | 1 |  |
| 20:25:03 | 304 | 2 | sell 1090 FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump → SOL | filled | 7s | 1 |  |
| 20:25:00 | 305 | 3 | sell 0.005 SOL → 4nV5gNwwP68zUDat26ySChREqVaQaLudfJBkSgEzpump | filled | 7s | 1 |  |
| 20:25:07 | 306 | 3 | sell 90.6 4nV5gNwwP68zUDat26ySChREqVaQaLudfJBkSgEzpump → SOL | filled | 17s | 2 |  |
| 20:25:04 | 307 | 4 | sell 0.005 SOL → 9AvytnUKsLxPxFHFqS6VLxaxt5p6BhYNr53SD2Chpump | failed | 36s | 1 | main expired |
| 20:25:40 | 308 | 4 | sell 257 9AvytnUKsLxPxFHFqS6VLxaxt5p6BhYNr53SD2Chpump → SOL | failed | 39s | 1 | acquire 9AvytnUKsLxPxFHFqS6VLxaxt5p6BhYNr53SD2Chpump expired |
| 20:25:08 | 309 | 5 | sell 0.005 SOL → WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk | filled | 7s | 1 |  |
| 20:25:16 | 310 | 5 | sell 75200 WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk → SOL | filled | 20s | 2 |  |
| 20:25:12 | 311 | 6 | sell 0.005 SOL → Hh3oTaqDCKKfdBgsQEvxp9sUwyNf8x9qmKqEMLBWpump | filled | 10s | 1 |  |
| 20:25:23 | 312 | 6 | sell 319 Hh3oTaqDCKKfdBgsQEvxp9sUwyNf8x9qmKqEMLBWpump → SOL | filled | 20s | 2 |  |
| 20:25:16 | 313 | 7 | sell 0.005 SOL → HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd | filled | 4s | 1 |  |
| 20:25:20 | 314 | 7 | sell 109 HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd → SOL | filled | 7s | 1 |  |
| 20:25:20 | 315 | 8 | sell 0.005 SOL → GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump | filled | 7s | 1 |  |
| 20:25:28 | 316 | 8 | sell 50.5 GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump → SOL | filled | 20s | 2 |  |
| 20:25:24 | 317 | 9 | sell 0.005 SOL → GMzuntWYJLpNuCizrSR7ZXggiMdDzTNiEmSNHHunpump | filled | 7s | 1 |  |
| 20:25:32 | 318 | 9 | sell 150 GMzuntWYJLpNuCizrSR7ZXggiMdDzTNiEmSNHHunpump → SOL | filled | 23s | 2 |  |
| 20:25:28 | 319 | 10 | sell 0.005 SOL → x95HN3DWvbfCBtTjGm587z8suK3ec6cwQwgZNLbWKyp | filled | 7s | 1 |  |
| 20:25:36 | 320 | 10 | sell 518000000 x95HN3DWvbfCBtTjGm587z8suK3ec6cwQwgZNLbWKyp → SOL | filled | 7s | 1 |  |
| 20:25:32 | 321 | 11 | sell 0.005 SOL → 8wxkvAfEns76yBzu4MnbV7VnXWjg3iDPA9uwAQ6cpump | failed | 35s | 1 | main expired |
| 20:26:08 | 322 | 11 | sell 531 8wxkvAfEns76yBzu4MnbV7VnXWjg3iDPA9uwAQ6cpump → SOL | failed | 42s | 1 | acquire 8wxkvAfEns76yBzu4MnbV7VnXWjg3iDPA9uwAQ6cpump expired |
| 20:25:36 | 323 | 12 | sell 0.005 SOL → 4QsNTBKwHgyYUUHq9tDzk1CCVu7y5hK7z3GE9R36pump | filled | 7s | 1 |  |
| 20:25:43 | 324 | 12 | sell 192 4QsNTBKwHgyYUUHq9tDzk1CCVu7y5hK7z3GE9R36pump → SOL | filled | 18s | 2 |  |
| 20:25:40 | 325 | 13 | sell 0.005 SOL → CYPHuMmCL1GxJWa2tsPhLKykC7GrHJTCHwbXD4g5uawK | failed | 36s | 1 | main expired |
| 20:26:16 | 326 | 13 | sell 0.16 CYPHuMmCL1GxJWa2tsPhLKykC7GrHJTCHwbXD4g5uawK → SOL | failed | 42s | 1 | acquire CYPHuMmCL1GxJWa2tsPhLKykC7GrHJTCHwbXD4g5uawK expired |
| 20:25:44 | 327 | 14 | sell 0.005 SOL → bioJ9JTqW62MLz7UKHU69gtKhPpGi1BQhccj2kmSvUJ | filled | 8s | 1 |  |
| 20:25:52 | 328 | 14 | sell 17.6 bioJ9JTqW62MLz7UKHU69gtKhPpGi1BQhccj2kmSvUJ → SOL | filled | 21s | 2 |  |
| 20:25:48 | 329 | 15 | sell 0.005 SOL → H8xQ6poBjB9DTPMDTKWzWPrnxu4bDEhybxiouF8Ppump | filled | 7s | 1 |  |
| 20:25:55 | 330 | 15 | sell 354 H8xQ6poBjB9DTPMDTKWzWPrnxu4bDEhybxiouF8Ppump → SOL | filled | 17s | 2 |  |
| 20:25:52 | 331 | 16 | sell 0.005 SOL → CcLd8HTAKLWtQHatqPwBQjtuCA72FNB9E1ckRTEzpump | filled | 8s | 1 |  |
| 20:26:00 | 332 | 16 | sell 146 CcLd8HTAKLWtQHatqPwBQjtuCA72FNB9E1ckRTEzpump → SOL | filled | 23s | 2 |  |
| 20:25:56 | 333 | 17 | sell 0.005 SOL → 7BgBvyjrZX1YKz4oh9mjb8ZScatkkwb8DzFx7LoiVkM3 | filled | 4s | 1 |  |
| 20:26:00 | 334 | 17 | sell 23 7BgBvyjrZX1YKz4oh9mjb8ZScatkkwb8DzFx7LoiVkM3 → SOL | filled | 17s | 2 |  |
| 20:26:00 | 335 | 18 | sell 0.005 SOL → 6nR8wBnfsmXfcdDr1hovJKjvFQxNSidN6XFyfAFZpump | filled | 7s | 1 |  |
| 20:26:08 | 336 | 18 | sell 55.8 6nR8wBnfsmXfcdDr1hovJKjvFQxNSidN6XFyfAFZpump → SOL | filled | 30s | 2 |  |
| 20:26:04 | 337 | 19 | sell 0.005 SOL → AMjzRn1TBQwQfNAjHFeBb7uGbbqbJB7FzXAnGgdFPk6K | filled | 8s | 1 |  |
| 20:26:12 | 338 | 19 | sell 257 AMjzRn1TBQwQfNAjHFeBb7uGbbqbJB7FzXAnGgdFPk6K → SOL | filled | 27s | 2 |  |
| 20:26:08 | 339 | 20 | sell 0.005 SOL → FRySi8LPkuByB7VPSCCggxpewFUeeJiwEGRKKuhwpKcX | failed | 35s | 1 | main expired |
| 20:26:44 | 340 | 20 | sell 1780 FRySi8LPkuByB7VPSCCggxpewFUeeJiwEGRKKuhwpKcX → SOL | failed | 7s | 0 | acquire FRySi8LPkuByB7VPSCCggxpewFUeeJiwEGRKKuhwpKcX error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:26:12 | 341 | 21 | sell 0.005 SOL → BLVxek8YMXUQhcKmMvrFTrzh5FXg8ec88Crp6otEaCMf | filled | 10s | 1 |  |
| 20:26:23 | 342 | 21 | sell 134 BLVxek8YMXUQhcKmMvrFTrzh5FXg8ec88Crp6otEaCMf → SOL | filled | 7s | 1 |  |
| 20:26:16 | 343 | 22 | sell 0.005 SOL → 3psH1Mj1f7yUfaD5gh6Zj7epE8hhrMkMETgv5TshQA4o | filled | 7s | 1 |  |
| 20:26:24 | 344 | 22 | sell 387 3psH1Mj1f7yUfaD5gh6Zj7epE8hhrMkMETgv5TshQA4o → SOL | filled | 21s | 2 |  |
| 20:26:20 | 345 | 23 | sell 0.005 SOL → MRNAzXzhNcaEXJPibHEn8cd4vyekCDiivTyEwswLUCT | failed | 35s | 1 | main expired |
| 20:26:56 | 346 | 23 | sell 0.00235 MRNAzXzhNcaEXJPibHEn8cd4vyekCDiivTyEwswLUCT → SOL | failed | 41s | 1 | acquire MRNAzXzhNcaEXJPibHEn8cd4vyekCDiivTyEwswLUCT expired |
| 20:26:24 | 347 | 24 | sell 0.005 SOL → Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x | filled | 7s | 1 |  |
| 20:26:32 | 348 | 24 | sell 0.000955 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x → SOL | filled | 61s | 2 |  |
| 20:26:28 | 349 | 25 | sell 0.005 SOL → FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P | filled | 10s | 1 |  |
| 20:26:39 | 350 | 25 | sell 5.45 FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P → SOL | filled | 23s | 2 |  |
| 20:26:32 | 351 | 26 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 35s | 1 | main expired |
| 20:27:08 | 352 | 26 | sell 0.00417 hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT → SOL | failed | 42s | 1 | acquire hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT expired |
| 20:26:36 | 353 | 27 | sell 0.005 SOL → AWGCDT2gd8JadbYbYyZy1iKxfWokPNgrEQoU24zUpump | filled | 7s | 1 |  |
| 20:26:44 | 354 | 27 | sell 719 AWGCDT2gd8JadbYbYyZy1iKxfWokPNgrEQoU24zUpump → SOL | filled | 10s | 1 |  |
| 20:26:40 | 355 | 28 | sell 0.005 SOL → MRVLSjkR2ceUBukujaD3xCyHP1H3B2SzpsNTZF546jo | failed | 36s | 1 | main expired |
| 20:27:16 | 356 | 28 | sell 0.00181 MRVLSjkR2ceUBukujaD3xCyHP1H3B2SzpsNTZF546jo → SOL | failed | 41s | 1 | acquire MRVLSjkR2ceUBukujaD3xCyHP1H3B2SzpsNTZF546jo expired |
| 20:26:44 | 357 | 29 | sell 0.005 SOL → BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs | filled | 7s | 1 |  |
| 20:26:52 | 358 | 29 | sell 0.00374 BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs → SOL | failed | 42s | 1 | acquire BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs expired |
| 20:26:48 | 359 | 30 | sell 0.005 SOL → 85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ | failed | 36s | 1 | main expired |
| 20:27:24 | 360 | 30 | sell 28.5 85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ → SOL | failed | 41s | 1 | acquire 85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ expired |
| 20:26:52 | 361 | 1 | sell 0.005 SOL → LLYuwZ33keFihgwoxXsBawy31AiRFLFSva32TYq5TvD | filled | 8s | 1 |  |
| 20:27:00 | 362 | 1 | sell 0.000419 LLYuwZ33keFihgwoxXsBawy31AiRFLFSva32TYq5TvD → SOL | filled | 20s | 2 |  |
| 20:26:56 | 363 | 2 | sell 0.005 SOL → EmcxFTNVDqyLHp11NvwvLZ4D7LKGbG9i7B8RF7dwpump | filled | 4s | 1 |  |
| 20:27:00 | 364 | 2 | sell 942 EmcxFTNVDqyLHp11NvwvLZ4D7LKGbG9i7B8RF7dwpump → SOL | filled | 7s | 1 |  |
| 20:27:00 | 365 | 3 | sell 0.005 SOL → BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K | failed | 35s | 1 | main expired |
| 20:27:36 | 366 | 3 | sell 3.36 BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K → SOL | failed | 42s | 1 | acquire BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K expired |
| 20:27:04 | 367 | 4 | sell 0.005 SOL → PFER6ENqP8r8NF3CqVt4mFowxsin3V5MLidBNQFCC3x | filled | 7s | 1 |  |
| 20:27:12 | 368 | 4 | sell 0.0176 PFER6ENqP8r8NF3CqVt4mFowxsin3V5MLidBNQFCC3x → SOL | filled | 20s | 2 |  |
| 20:27:08 | 369 | 5 | sell 0.005 SOL → HeeBovJNKd27tQ6xkeP1dfSyTr8LyLwhJz9wfFTbPLEX | failed | 35s | 1 | main expired |
| 20:27:44 | 370 | 5 | sell 55.6 HeeBovJNKd27tQ6xkeP1dfSyTr8LyLwhJz9wfFTbPLEX → SOL | failed | 7s | 0 | acquire HeeBovJNKd27tQ6xkeP1dfSyTr8LyLwhJz9wfFTbPLEX error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:27:12 | 371 | 6 | sell 0.005 SOL → zGh48JtNHVBb5evgoZLXwgPD2Qu4MhkWdJLGDAupump | filled | 10s | 1 |  |
| 20:27:23 | 372 | 6 | sell 236 zGh48JtNHVBb5evgoZLXwgPD2Qu4MhkWdJLGDAupump → SOL | filled | 20s | 2 |  |
| 20:27:16 | 373 | 7 | sell 0.005 SOL → 7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj | filled | 4s | 1 |  |
| 20:27:20 | 374 | 7 | sell 0.00408 7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj → SOL | filled | 23s | 2 |  |
| 20:27:20 | 375 | 8 | sell 0.005 SOL → 6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx | failed | 36s | 1 | main expired |
| 20:27:56 | 376 | 8 | sell 383 6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx → SOL | failed | 42s | 1 | acquire 6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx expired |
| 20:27:24 | 377 | 9 | sell 0.005 SOL → BBKPiLM9KjdJW7oQSKt99RVWcZdhF6sEHRKnwqeBGHST | filled | 7s | 1 |  |
| 20:27:32 | 378 | 9 | sell 376 BBKPiLM9KjdJW7oQSKt99RVWcZdhF6sEHRKnwqeBGHST → SOL | failed | 7s | 0 | acquire BBKPiLM9KjdJW7oQSKt99RVWcZdhF6sEHRKnwqeBGHST error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:27:28 | 379 | 10 | sell 0.005 SOL → Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump | filled | 10s | 1 |  |
| 20:27:39 | 380 | 10 | sell 28.9 Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump → SOL | filled | 17s | 2 |  |
| 20:27:32 | 381 | 11 | sell 0.005 SOL → 3wtGGWZ8wLWW6BqtC5rxmkHdqvM62atUcGTH4cw3pump | filled | 10s | 1 |  |
| 20:27:43 | 382 | 11 | sell 84.1 3wtGGWZ8wLWW6BqtC5rxmkHdqvM62atUcGTH4cw3pump → SOL | filled | 20s | 2 |  |
| 20:27:36 | 383 | 12 | sell 0.005 SOL → 7HgfXftRBBqsYtAEYcqjGLQrNJLL6Tww9ek4rE3Apump | filled | 7s | 1 |  |
| 20:27:44 | 384 | 12 | sell 356 7HgfXftRBBqsYtAEYcqjGLQrNJLL6Tww9ek4rE3Apump → SOL | filled | 7s | 1 |  |
| 20:27:40 | 385 | 13 | sell 0.005 SOL → DQnkBM4eYYMnVE8Qy2K3BB7uts1fh2EwBVktEz6jpump | filled | 4s | 1 |  |
| 20:27:44 | 386 | 13 | sell 91.3 DQnkBM4eYYMnVE8Qy2K3BB7uts1fh2EwBVktEz6jpump → SOL | filled | 23s | 2 |  |
| 20:27:44 | 387 | 14 | sell 0.005 SOL → WENAZ2WyPbmgvUcKfQ8hyMDfBQP9bZ65hsZ5KTFrRGZ | filled | 7s | 1 |  |
| 20:27:51 | 388 | 14 | sell 0.0802 WENAZ2WyPbmgvUcKfQ8hyMDfBQP9bZ65hsZ5KTFrRGZ → SOL | filled | 39s | 2 |  |
| 20:27:48 | 389 | 15 | sell 0.005 SOL → E1kvzJNxShvvWTrudokpzuc789vRiDXfXG3duCuY6ooE | failed | 36s | 1 | main expired |
| 20:28:24 | 390 | 15 | sell 24.7 E1kvzJNxShvvWTrudokpzuc789vRiDXfXG3duCuY6ooE → SOL | failed | 41s | 1 | acquire E1kvzJNxShvvWTrudokpzuc789vRiDXfXG3duCuY6ooE expired |
| 20:27:52 | 391 | 16 | sell 0.005 SOL → HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump | filled | 10s | 1 |  |
| 20:28:02 | 392 | 16 | sell 11.4 HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump → SOL | filled | 20s | 2 |  |
| 20:27:56 | 393 | 17 | sell 0.005 SOL → CzLSujWBLFsSjncfkh59rUFqvafWcY5tzedWJSuypump | filled | 7s | 1 |  |
| 20:28:04 | 394 | 17 | sell 30.4 CzLSujWBLFsSjncfkh59rUFqvafWcY5tzedWJSuypump → SOL | filled | 20s | 2 |  |
| 20:28:00 | 395 | 18 | sell 0.005 SOL → PRVT6TB7uss3FrUd2D9xs2zqDBsa3GbMJMwCQsgmeta | filled | 4s | 1 |  |
| 20:28:04 | 396 | 18 | sell 1.8 PRVT6TB7uss3FrUd2D9xs2zqDBsa3GbMJMwCQsgmeta → SOL | filled | 27s | 2 |  |
| 20:28:04 | 397 | 19 | sell 0.005 SOL → 4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump | failed | 36s | 1 | main expired |
| 20:28:40 | 398 | 19 | sell 65.1 4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump → SOL | failed | 41s | 1 | acquire 4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump expired |
| 20:28:08 | 399 | 20 | sell 0.005 SOL → BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups | failed | 35s | 1 | main expired |
| 20:28:44 | 400 | 20 | sell 131 BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups → SOL | failed | 44s | 1 | acquire BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups expired |
| 20:28:12 | 401 | 21 | sell 0.005 SOL → CTgiaZUK12kCcB8sosn4Nt2NZtzLgtPqDwyQyr2syATC | filled | 10s | 1 |  |
| 20:28:23 | 402 | 21 | sell 33.1 CTgiaZUK12kCcB8sosn4Nt2NZtzLgtPqDwyQyr2syATC → SOL | filled | 20s | 2 |  |
| 20:28:16 | 403 | 22 | sell 0.005 SOL → 6yjNqPzTSanBWSa6dxVEgTjePXBrZ2FoHLDQwYwEsyM6 | filled | 7s | 1 |  |
| 20:28:23 | 404 | 22 | sell 400 6yjNqPzTSanBWSa6dxVEgTjePXBrZ2FoHLDQwYwEsyM6 → SOL | filled | 10s | 1 |  |
| 20:28:20 | 405 | 23 | sell 0.005 SOL → ACtfUWtgvaXrQGNMiohTusi5jcx5RJf5zwu9aAxkpump | filled | 7s | 1 |  |
| 20:28:27 | 406 | 23 | sell 1030 ACtfUWtgvaXrQGNMiohTusi5jcx5RJf5zwu9aAxkpump → SOL | filled | 10s | 1 |  |
| 20:28:24 | 407 | 24 | sell 0.005 SOL → 4ikwYoNvoGEwtMbziUyYBTz1zRM6nmxspsfw9G7Bpump | filled | 7s | 1 |  |
| 20:28:32 | 408 | 24 | sell 127 4ikwYoNvoGEwtMbziUyYBTz1zRM6nmxspsfw9G7Bpump → SOL | filled | 7s | 1 |  |
| 20:28:28 | 409 | 25 | sell 0.005 SOL → 42cXQvAAr7hcPBPWAS4ocVtDyeJ4Fa6gRR2uG4gppump | filled | 10s | 1 |  |
| 20:28:38 | 410 | 25 | sell 58.8 42cXQvAAr7hcPBPWAS4ocVtDyeJ4Fa6gRR2uG4gppump → SOL | filled | 30s | 2 |  |
| 20:28:32 | 411 | 26 | sell 0.005 SOL → SoLo9oxzLDpcq1dpqAgMwgce5WqkRDtNXK7EPnbmeta | failed | 35s | 1 | main expired |
| 20:29:08 | 412 | 26 | sell 0.54 SoLo9oxzLDpcq1dpqAgMwgce5WqkRDtNXK7EPnbmeta → SOL | failed | 42s | 1 | acquire SoLo9oxzLDpcq1dpqAgMwgce5WqkRDtNXK7EPnbmeta expired |
| 20:28:36 | 413 | 27 | sell 0.005 SOL → 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump | filled | 4s | 1 |  |
| 20:28:40 | 414 | 27 | sell 60.9 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump → SOL | filled | 17s | 2 |  |
| 20:28:40 | 415 | 28 | sell 0.005 SOL → C2omVhcvt3DDY77S2KZzawFJQeETZofgZ4eNWWkXpump | filled | 7s | 1 |  |
| 20:28:47 | 416 | 28 | sell 963 C2omVhcvt3DDY77S2KZzawFJQeETZofgZ4eNWWkXpump → SOL | filled | 10s | 1 |  |
| 20:28:44 | 417 | 29 | sell 0.005 SOL → dTzEP9JU2NRDPuWtM32gaVKip2fTHBqjheU1APBpump | filled | 7s | 1 |  |
| 20:28:52 | 418 | 29 | sell 372 dTzEP9JU2NRDPuWtM32gaVKip2fTHBqjheU1APBpump → SOL | filled | 7s | 1 |  |
| 20:28:48 | 419 | 30 | sell 0.005 SOL → 2oGLxYuNBJRcepT1mEV6KnETaLD7Bf6qq3CM6skasBfe | failed | 35s | 1 | main expired |
| 20:29:24 | 420 | 30 | sell 110 2oGLxYuNBJRcepT1mEV6KnETaLD7Bf6qq3CM6skasBfe → SOL | failed | 41s | 1 | acquire 2oGLxYuNBJRcepT1mEV6KnETaLD7Bf6qq3CM6skasBfe expired |
| 20:28:52 | 421 | 1 | sell 0.005 SOL → 69G8CpUVZAxbPMiEBrfCCCH445NwFxH6PzVL693Xpump | filled | 10s | 1 |  |
| 20:29:03 | 422 | 1 | sell 309 69G8CpUVZAxbPMiEBrfCCCH445NwFxH6PzVL693Xpump → SOL | filled | 20s | 2 |  |
| 20:28:56 | 423 | 2 | sell 0.005 SOL → 8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn | filled | 4s | 1 |  |
| 20:29:00 | 424 | 2 | sell 17.1 8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn → SOL | filled | 20s | 2 |  |
| 20:29:00 | 425 | 3 | sell 0.005 SOL → GvV7sFu6FHJsSVXfpG7xqFnWar3c7YkcC74rqe7Bpump | filled | 7s | 1 |  |
| 20:29:07 | 426 | 3 | sell 192 GvV7sFu6FHJsSVXfpG7xqFnWar3c7YkcC74rqe7Bpump → SOL | filled | 13s | 1 |  |
| 20:29:04 | 427 | 4 | sell 0.005 SOL → HBoNJ5v8g71s2boRivrHnfSB5MVPLDHHyVjruPfhGkvL | filled | 7s | 1 |  |
| 20:29:12 | 428 | 4 | sell 40200 HBoNJ5v8g71s2boRivrHnfSB5MVPLDHHyVjruPfhGkvL → SOL | filled | 23s | 2 |  |
| 20:29:08 | 429 | 5 | sell 0.005 SOL → RKLBnAXGqv31iZomqsuAWkQm1aqC7JwwvbCfzGdqAhz | filled | 7s | 1 |  |
| 20:29:16 | 430 | 5 | sell 0.00726 RKLBnAXGqv31iZomqsuAWkQm1aqC7JwwvbCfzGdqAhz → SOL | filled | 17s | 2 |  |
| 20:29:12 | 431 | 6 | sell 0.005 SOL → STREAMribRwybYpMmSYoCsQUdr6MZNXEqHgm7p1gu9M | filled | 10s | 1 |  |
| 20:29:22 | 432 | 6 | sell 51 STREAMribRwybYpMmSYoCsQUdr6MZNXEqHgm7p1gu9M → SOL | filled | 20s | 2 |  |
| 20:29:16 | 433 | 7 | sell 0.005 SOL → 8Ki8DpuWNxu9VsS3kQbarsCWMcFGWkzzA8pUPto9zBd5 | filled | 4s | 1 |  |
| 20:29:20 | 434 | 7 | sell 495 8Ki8DpuWNxu9VsS3kQbarsCWMcFGWkzzA8pUPto9zBd5 → SOL | filled | 20s | 2 |  |
| 20:29:20 | 435 | 8 | sell 0.005 SOL → GvEMgNT6GKiYTvg7TskDio6RKzQdCuhwmH55tVCLaJTe | failed | 35s | 1 | main expired |
| 20:29:56 | 436 | 8 | sell 0.491 GvEMgNT6GKiYTvg7TskDio6RKzQdCuhwmH55tVCLaJTe → SOL | failed | 41s | 1 | acquire GvEMgNT6GKiYTvg7TskDio6RKzQdCuhwmH55tVCLaJTe expired |
| 20:29:25 | 437 | 9 | sell 0.005 SOL → ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs | failed | 35s | 1 | main expired |
| 20:29:59 | 438 | 9 | sell 1.86 ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs → SOL | failed | 42s | 1 | acquire ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs expired |
| 20:29:28 | 439 | 10 | sell 0.005 SOL → vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7 | failed | 35s | 1 | main expired |
| 20:30:04 | 440 | 10 | sell 0.00383 vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7 → SOL | filled | 20s | 2 |  |
| 20:29:32 | 441 | 11 | sell 0.005 SOL → HfMbPyDdZH6QMaDDUokjYCkHxzjoGBMpgaUvpLWGbF5p | failed | 35s | 1 | main expired |
| 20:30:07 | 442 | 11 | sell 3.14 HfMbPyDdZH6QMaDDUokjYCkHxzjoGBMpgaUvpLWGbF5p → SOL | failed | 42s | 1 | acquire HfMbPyDdZH6QMaDDUokjYCkHxzjoGBMpgaUvpLWGbF5p expired |
| 20:29:36 | 443 | 12 | sell 0.005 SOL → Hax9LTgsQkze1YFychnBLtFH8gYbQKtKfWKKg2SP6gdD | failed | 32s | 1 | main expired |
| 20:30:09 | 444 | 12 | sell 123 Hax9LTgsQkze1YFychnBLtFH8gYbQKtKfWKKg2SP6gdD → SOL | failed | 42s | 1 | acquire Hax9LTgsQkze1YFychnBLtFH8gYbQKtKfWKKg2SP6gdD expired |
| 20:29:40 | 445 | 13 | sell 0.005 SOL → 2JcXacFwt9mVAwBQ5nZkYwCyXQkRcdsYrDXn6hj22SbP | filled | 7s | 1 |  |
| 20:29:47 | 446 | 13 | sell 508 2JcXacFwt9mVAwBQ5nZkYwCyXQkRcdsYrDXn6hj22SbP → SOL | filled | 21s | 2 |  |
| 20:29:44 | 447 | 14 | sell 0.005 SOL → 71Jvq4Epe2FCJ7JFSF7jLXdNk1Wy4Bhqd9iL6bEFELvg | filled | 10s | 1 |  |
| 20:29:54 | 448 | 14 | sell 330 71Jvq4Epe2FCJ7JFSF7jLXdNk1Wy4Bhqd9iL6bEFELvg → SOL | filled | 7s | 1 |  |
| 20:29:48 | 449 | 15 | sell 0.005 SOL → 5SVG3T9CNQsm2kEwzbRq6hASqh1oGfjqTtLXYUibpump | filled | 10s | 1 |  |
| 20:29:59 | 450 | 15 | sell 398 5SVG3T9CNQsm2kEwzbRq6hASqh1oGfjqTtLXYUibpump → SOL | filled | 17s | 2 |  |
| 20:29:52 | 451 | 16 | sell 0.005 SOL → DNhQZ1CE9qZ2FNrVhsCXwQJ2vZG8ufZkcYakTS5Jpump | filled | 10s | 1 |  |
| 20:30:03 | 452 | 16 | sell 209 DNhQZ1CE9qZ2FNrVhsCXwQJ2vZG8ufZkcYakTS5Jpump → SOL | filled | 10s | 1 |  |
| 20:29:56 | 453 | 17 | sell 0.005 SOL → H2c31USxu35MDkBrGph8pUDUnmzo2e4Rf4hnvL2Upump | filled | 4s | 1 |  |
| 20:30:00 | 454 | 17 | sell 452 H2c31USxu35MDkBrGph8pUDUnmzo2e4Rf4hnvL2Upump → SOL | filled | 10s | 1 |  |
| 20:30:00 | 455 | 18 | sell 0.005 SOL → 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z | filled | 8s | 1 |  |
| 20:30:08 | 456 | 18 | sell 2.97 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z → SOL | filled | 24s | 2 |  |
| 20:30:04 | 457 | 19 | sell 0.005 SOL → 4nswj3o1Lo9iWYvvRJxUD8vbCy9ay7QQoXYcncHNbonk | failed | 35s | 1 | main expired |
| 20:30:40 | 458 | 19 | sell 1860 4nswj3o1Lo9iWYvvRJxUD8vbCy9ay7QQoXYcncHNbonk → SOL | failed | 42s | 1 | acquire 4nswj3o1Lo9iWYvvRJxUD8vbCy9ay7QQoXYcncHNbonk expired |
| 20:30:08 | 459 | 20 | sell 0.005 SOL → SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz | filled | 7s | 1 |  |
| 20:30:16 | 460 | 20 | sell 302 SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz → SOL | filled | 20s | 2 |  |
| 20:30:12 | 461 | 21 | sell 0.005 SOL → 6D7NaB2xsLd7cauWu1wKk6KBsJohJmP2qZH9GEfVi5Ui | filled | 10s | 1 |  |
| 20:30:23 | 462 | 21 | sell 521 6D7NaB2xsLd7cauWu1wKk6KBsJohJmP2qZH9GEfVi5Ui → SOL | filled | 21s | 2 |  |
| 20:30:16 | 463 | 22 | sell 0.005 SOL → sSo14endRuUbvQaJS3dq36Q829a3A6BEfoeeRGJywEh | failed | 35s | 1 | main expired |
| 20:30:52 | 464 | 22 | sell 0.00383 sSo14endRuUbvQaJS3dq36Q829a3A6BEfoeeRGJywEh → SOL | failed | 41s | 1 | acquire sSo14endRuUbvQaJS3dq36Q829a3A6BEfoeeRGJywEh expired |
| 20:30:20 | 465 | 23 | sell 0.005 SOL → Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ | failed | 35s | 1 | main expired |
| 20:30:56 | 466 | 23 | sell 0.00369 Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ → SOL | failed | 42s | 1 | acquire Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ expired |
| 20:30:24 | 467 | 24 | sell 0.005 SOL → 2fUFhZyd47Mapv9wcfXh5gnQwFXtqcYu9xAN4THBpump | filled | 10s | 1 |  |
| 20:30:34 | 468 | 24 | sell 650 2fUFhZyd47Mapv9wcfXh5gnQwFXtqcYu9xAN4THBpump → SOL | filled | 7s | 1 |  |
| 20:30:28 | 469 | 25 | sell 0.005 SOL → LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp | failed | 35s | 1 | main expired |
| 20:31:03 | 470 | 25 | sell 0.00291 LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp → SOL | failed | 41s | 1 | acquire LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp expired |
| 20:30:32 | 471 | 26 | sell 0.005 SOL → 65nTNuJGHme4PQvKQyJykKp1bJAkK4A8Q66sd2yBWugf | filled | 10s | 1 |  |
| 20:30:43 | 472 | 26 | sell 495000 65nTNuJGHme4PQvKQyJykKp1bJAkK4A8Q66sd2yBWugf → SOL | filled | 17s | 2 |  |
| 20:30:36 | 473 | 27 | sell 0.005 SOL → DeaKMzAeZja3Mh5okZE6WUvygLP3Lfuvm6Rg78HqXTz9 | filled | 4s | 1 |  |
| 20:30:40 | 474 | 27 | sell 393 DeaKMzAeZja3Mh5okZE6WUvygLP3Lfuvm6Rg78HqXTz9 → SOL | filled | 20s | 2 |  |
| 20:30:40 | 475 | 28 | sell 0.005 SOL → 3WPep4ufaToK1aS5s8BL9inzeUrt4DYaQCiic6ZkkC1U | filled | 7s | 1 |  |
| 20:30:47 | 476 | 28 | sell 15.3 3WPep4ufaToK1aS5s8BL9inzeUrt4DYaQCiic6ZkkC1U → SOL | filled | 23s | 2 |  |
| 20:30:44 | 477 | 29 | sell 0.005 SOL → ULwSJmmpxmnRfpu6BjnK6rprKXqD5jXUmPpS1FxHXFy | filled | 7s | 1 |  |
| 20:30:52 | 478 | 29 | sell 281 ULwSJmmpxmnRfpu6BjnK6rprKXqD5jXUmPpS1FxHXFy → SOL | filled | 26s | 2 |  |
| 20:30:48 | 479 | 30 | sell 0.005 SOL → 69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs | filled | 10s | 1 |  |
| 20:30:59 | 480 | 30 | sell 3630000 69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs → SOL | filled | 23s | 2 |  |
| 20:30:52 | 481 | 1 | sell 0.005 SOL → F6qoefQq4iCBLoNZ34RjEqHjHkD8vtmoRSdw9Nd55J1k | filled | 10s | 1 |  |
| 20:31:02 | 482 | 1 | sell 1330 F6qoefQq4iCBLoNZ34RjEqHjHkD8vtmoRSdw9Nd55J1k → SOL | filled | 17s | 2 |  |
| 20:30:56 | 483 | 2 | sell 0.005 SOL → AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR | filled | 4s | 1 |  |
| 20:31:00 | 484 | 2 | sell 111000000 AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR → SOL | filled | 20s | 2 |  |
| 20:31:00 | 485 | 3 | sell 0.005 SOL → URARfsinxCRw4JpvQhuT4CxavdZXZEMjv9ZwWmWpwag | filled | 7s | 1 |  |
| 20:31:08 | 486 | 3 | sell 0.0126 URARfsinxCRw4JpvQhuT4CxavdZXZEMjv9ZwWmWpwag → SOL | filled | 17s | 2 |  |
| 20:31:04 | 487 | 4 | sell 0.005 SOL → moonThZEkkTVoNB7v6YVCQiT56JYDZ1oN185ba3WizL | failed | 35s | 1 | main expired |
| 20:31:40 | 488 | 4 | sell 101 moonThZEkkTVoNB7v6YVCQiT56JYDZ1oN185ba3WizL → SOL | failed | 42s | 1 | acquire moonThZEkkTVoNB7v6YVCQiT56JYDZ1oN185ba3WizL expired |
| 20:31:08 | 489 | 5 | sell 0.005 SOL → Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP | filled | 10s | 1 |  |
| 20:31:19 | 490 | 5 | sell 1580 Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP → SOL | filled | 17s | 2 |  |
| 20:31:12 | 491 | 6 | sell 0.005 SOL → 9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM | failed | 35s | 1 | main expired |
| 20:31:48 | 492 | 6 | sell 29.5 9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM → SOL | failed | 42s | 1 | acquire 9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM expired |
| 20:31:16 | 493 | 7 | sell 0.005 SOL → WingsAYbfs4qnEgcw8jpSvetqp8XHM3GkKvow54WLcd | failed | 35s | 1 | main expired |
| 20:31:52 | 494 | 7 | sell 147 WingsAYbfs4qnEgcw8jpSvetqp8XHM3GkKvow54WLcd → SOL | failed | 41s | 1 | acquire WingsAYbfs4qnEgcw8jpSvetqp8XHM3GkKvow54WLcd expired |
| 20:31:20 | 495 | 8 | sell 0.005 SOL → 3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump | filled | 7s | 1 |  |
| 20:31:28 | 496 | 8 | sell 1080 3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump → SOL | filled | 23s | 2 |  |
| 20:31:24 | 497 | 9 | sell 0.005 SOL → LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg | failed | 36s | 1 | main expired |
| 20:32:00 | 498 | 9 | sell 0.00362 LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg → SOL | failed | 42s | 1 | acquire LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg expired |
| 20:31:28 | 499 | 10 | sell 0.005 SOL → HQ7DaoiUxzC2K1Dr7KXRHccNtXvEYgNvoUextXe8dmBh | filled | 7s | 1 |  |
| 20:31:35 | 500 | 10 | sell 406 HQ7DaoiUxzC2K1Dr7KXRHccNtXvEYgNvoUextXe8dmBh → SOL | filled | 24s | 2 |  |
| 20:31:32 | 501 | 11 | sell 0.005 SOL → DLUNTKRQt7CrpqSX1naHUYoBznJ9pvMP65uCeWQgYnRK | filled | 10s | 1 |  |
| 20:31:43 | 502 | 11 | sell 38.6 DLUNTKRQt7CrpqSX1naHUYoBznJ9pvMP65uCeWQgYnRK → SOL | filled | 10s | 1 |  |
| 20:31:36 | 503 | 12 | sell 0.005 SOL → ATRLuHph8dxnPny4WSNW7fxkhbeivBrtWbY6BfB4xpLj | failed | 36s | 1 | main expired |
| 20:32:12 | 504 | 12 | sell 679 ATRLuHph8dxnPny4WSNW7fxkhbeivBrtWbY6BfB4xpLj → SOL | failed | 42s | 1 | acquire ATRLuHph8dxnPny4WSNW7fxkhbeivBrtWbY6BfB4xpLj expired |
| 20:31:40 | 505 | 13 | sell 0.005 SOL → 4YK1njyeCkBuXG6phNtidJWKCbBhB659iwGkUJx98P5Z | filled | 10s | 1 |  |
| 20:31:51 | 506 | 13 | sell 137 4YK1njyeCkBuXG6phNtidJWKCbBhB659iwGkUJx98P5Z → SOL | filled | 17s | 2 |  |
| 20:31:44 | 507 | 14 | sell 0.005 SOL → J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD | failed | 35s | 1 | main expired |
| 20:32:20 | 508 | 14 | sell 0.227 J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD → SOL | failed | 41s | 1 | acquire J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD expired |
| 20:31:48 | 509 | 15 | sell 0.005 SOL → 4Zp52aF4hZi9fzH19xpbWKYKQvgLyCN67KFbrQDqeTKh | failed | 36s | 1 | main expired |
| 20:32:24 | 510 | 15 | sell 6.66 4Zp52aF4hZi9fzH19xpbWKYKQvgLyCN67KFbrQDqeTKh → SOL | failed | 41s | 1 | acquire 4Zp52aF4hZi9fzH19xpbWKYKQvgLyCN67KFbrQDqeTKh expired |
| 20:31:52 | 511 | 16 | sell 0.005 SOL → 3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN | filled | 10s | 1 |  |
| 20:32:03 | 512 | 16 | sell 1500 3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN → SOL | filled | 20s | 2 |  |
| 20:31:56 | 513 | 17 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 35s | 1 | main expired |
| 20:32:32 | 514 | 17 | sell 0.439 euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA → SOL | failed | 41s | 1 | acquire euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA expired |
| 20:32:00 | 515 | 18 | sell 0.005 SOL → 9WPTUkh8fKuCnepRWoPYLH3aK9gSjPHFDenBq2X1Czdp | filled | 7s | 1 |  |
| 20:32:08 | 516 | 18 | sell 1460 9WPTUkh8fKuCnepRWoPYLH3aK9gSjPHFDenBq2X1Czdp → SOL | filled | 13s | 1 |  |
| 20:32:04 | 517 | 19 | sell 0.005 SOL → CQSzJzwW5H1oyWrp6QhfUKYYwyovbSiVDKnAxNfb1tJC | filled | 7s | 1 |  |
| 20:32:11 | 518 | 19 | sell 1290 CQSzJzwW5H1oyWrp6QhfUKYYwyovbSiVDKnAxNfb1tJC → SOL | filled | 26s | 2 |  |
| 20:32:09 | 519 | 20 | sell 0.005 SOL → 5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp | filled | 8s | 1 |  |
| 20:32:16 | 520 | 20 | sell 727 5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp → SOL | filled | 27s | 2 |  |
| 20:32:12 | 521 | 21 | sell 0.005 SOL → 9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P | filled | 7s | 1 |  |
| 20:32:20 | 522 | 21 | sell 1050 9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P → SOL | filled | 23s | 2 |  |
| 20:32:16 | 523 | 22 | sell 0.005 SOL → 7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 20:32:18 | 524 | 22 | sell 0.00327 7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn → SOL | failed | 42s | 1 | acquire 7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn expired |
| 20:32:20 | 525 | 23 | sell 0.005 SOL → AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP | failed | 35s | 1 | main expired |
| 20:32:56 | 526 | 23 | sell 20.6 AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP → SOL | failed | 41s | 1 | acquire AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP expired |
| 20:32:24 | 527 | 24 | sell 0.005 SOL → AhhdRu5YZdjVkKR3wbnUDaymVQL2ucjMQ63sZ3LFHsch | failed | 35s | 1 | main expired |
| 20:32:59 | 528 | 24 | sell 0.407 AhhdRu5YZdjVkKR3wbnUDaymVQL2ucjMQ63sZ3LFHsch → SOL | failed | 42s | 1 | acquire AhhdRu5YZdjVkKR3wbnUDaymVQL2ucjMQ63sZ3LFHsch expired |
| 20:32:28 | 529 | 25 | sell 0.005 SOL → HLptm5e6rTgh4EKgDpYFrnRHbjpkMyVdEeREEa2G7rf9 | filled | 10s | 1 |  |
| 20:32:38 | 530 | 25 | sell 16900 HLptm5e6rTgh4EKgDpYFrnRHbjpkMyVdEeREEa2G7rf9 → SOL | filled | 20s | 2 |  |
| 20:32:32 | 531 | 26 | sell 0.005 SOL → 8doS8nzmgVZEaACxALkbK5fZtw4UuoRp4Yt8NEaXfDMb | filled | 10s | 1 |  |
| 20:32:43 | 532 | 26 | sell 867 8doS8nzmgVZEaACxALkbK5fZtw4UuoRp4Yt8NEaXfDMb → SOL | filled | 20s | 2 |  |
| 20:32:36 | 533 | 27 | sell 0.005 SOL → UPTx1d24aBWuRgwxVnFmX4gNraj3QGFzL3QqBgxtWQG | filled | 7s | 1 |  |
| 20:32:43 | 534 | 27 | sell 288 UPTx1d24aBWuRgwxVnFmX4gNraj3QGFzL3QqBgxtWQG → SOL | filled | 20s | 2 |  |
| 20:32:40 | 535 | 28 | sell 0.005 SOL → FU1q8vJpZNUrmqsciSjp8bAKKidGsLmouB8CBdf8TKQv | filled | 7s | 1 |  |
| 20:32:47 | 536 | 28 | sell 134 FU1q8vJpZNUrmqsciSjp8bAKKidGsLmouB8CBdf8TKQv → SOL | filled | 23s | 2 |  |
| 20:32:44 | 537 | 29 | sell 0.005 SOL → FViMp5phQH2bX81S7Yyn1yXjj3BRddFBNcMCbTH8FCze | filled | 7s | 1 |  |
| 20:32:52 | 538 | 29 | sell 566000000 FViMp5phQH2bX81S7Yyn1yXjj3BRddFBNcMCbTH8FCze → SOL | filled | 23s | 2 |  |
| 20:32:48 | 539 | 30 | sell 0.005 SOL → MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac | failed | 36s | 1 | main expired |
| 20:33:24 | 540 | 30 | sell 15.2 MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac → SOL | failed | 41s | 1 | acquire MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac expired |
| 20:32:52 | 541 | 1 | sell 0.005 SOL → 9dLuVbJMd4ZpTpFgmaFHAGSsFwVjtcnzFWaLAA1expHg | filled | 10s | 1 |  |
| 20:33:03 | 542 | 1 | sell 338 9dLuVbJMd4ZpTpFgmaFHAGSsFwVjtcnzFWaLAA1expHg → SOL | filled | 20s | 2 |  |
| 20:32:56 | 543 | 2 | sell 0.005 SOL → 25hAyBQfoDhfWx9ay6rarbgvWGwDdNqcHsXS3jQ3mTDJ | filled | 7s | 1 |  |
| 20:33:04 | 544 | 2 | sell 1700 25hAyBQfoDhfWx9ay6rarbgvWGwDdNqcHsXS3jQ3mTDJ → SOL | filled | 17s | 2 |  |
| 20:33:00 | 545 | 3 | sell 0.005 SOL → BANKJmvhT8tiJRsBSS1n2HryMBPvT5Ze4HU95DUAmeta | failed | 35s | 1 | main expired |
| 20:33:36 | 546 | 3 | sell 1.91 BANKJmvhT8tiJRsBSS1n2HryMBPvT5Ze4HU95DUAmeta → SOL | failed | 42s | 1 | acquire BANKJmvhT8tiJRsBSS1n2HryMBPvT5Ze4HU95DUAmeta expired |
| 20:33:04 | 547 | 4 | sell 0.005 SOL → AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr | filled | 7s | 1 |  |
| 20:33:11 | 548 | 4 | sell 538 AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr → SOL | filled | 26s | 2 |  |
| 20:33:08 | 549 | 5 | sell 0.005 SOL → 947tEoG318GUmyjVYhraNRvWpMX7fpBTDQFBoJvSkSG3 | filled | 10s | 1 |  |
| 20:33:18 | 550 | 5 | sell 17.7 947tEoG318GUmyjVYhraNRvWpMX7fpBTDQFBoJvSkSG3 → SOL | filled | 23s | 2 |  |
| 20:33:12 | 551 | 6 | sell 0.005 SOL → GTH3wG3NErjwcf7VGCoXEXkgXSHvYhx5gtATeeM5JAS1 | filled | 10s | 1 |  |
| 20:33:22 | 552 | 6 | sell 40.1 GTH3wG3NErjwcf7VGCoXEXkgXSHvYhx5gtATeeM5JAS1 → SOL | filled | 20s | 2 |  |
| 20:33:16 | 553 | 7 | sell 0.005 SOL → 26KMQVgDUoB6rEfnJ51yAABWWJND8uMtpnQgsHQ64Udr | filled | 4s | 1 |  |
| 20:33:20 | 554 | 7 | sell 2070 26KMQVgDUoB6rEfnJ51yAABWWJND8uMtpnQgsHQ64Udr → SOL | filled | 20s | 2 |  |
| 20:33:20 | 555 | 8 | sell 0.005 SOL → 6n7Janary9fqzxKaJVrhL9TG2F61VbAtwUMu1YZscaQS | filled | 4s | 1 |  |
| 20:33:24 | 556 | 8 | sell 5050 6n7Janary9fqzxKaJVrhL9TG2F61VbAtwUMu1YZscaQS → SOL | filled | 23s | 2 |  |
| 20:33:24 | 557 | 9 | sell 0.005 SOL → AujTJJ7aMS8LDo3bFzoyXDwT3jBALUbu4VZhzZdTZLmG | filled | 7s | 1 |  |
| 20:33:32 | 558 | 9 | sell 596000 AujTJJ7aMS8LDo3bFzoyXDwT3jBALUbu4VZhzZdTZLmG → SOL | filled | 23s | 2 |  |

### Rows without an order

11 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | acquire | 5 | SOL → METAx, SOL → EURC, SOL → NATIX, SOL → HEEBOO, SOL → GHOST | the transaction's blockhash is no longer valid, sign a fresh one |
| BlockhashExpired | main | 5 | SOL → DARK, SOL → GOLD, SOL → MON, SOL → USDUC, SOL → JSOL | the transaction's blockhash is no longer valid, sign a fresh one |
| SellAmountDoesNotCoverFee | acquire | 1 | SOL → DARK | the quoted amount does not cover the execution cost |

Scenario orders: 678 (444 main, 234 acquire). Cleanup placed 7 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 20:34:30 | 3 | BURNIE → SOL (native) | Executed | `0xc3de4217…` [🐞](https://debug.barn.cow.fi/order/0xc3de4217a4ed5a1fee57baeef3e7dc2dfb6d9c29c4a9bc319139279b3c212532) |
| 20:34:38 | 9 | GHOST → SOL (native) | Executed | `0x82f9b6ee…` [🐞](https://debug.barn.cow.fi/order/0x82f9b6ee64d19402329f38740cf4504b62a3ed4e1a738b1e7870a0b4e154a920) |
| 20:34:45 | 14 | $WIF → SOL (native) | Executed | `0x4cbe12d6…` [🐞](https://debug.barn.cow.fi/order/0x4cbe12d6181c34d99fa09da3dde93a689ac4520a8481e0facdaa195ec74c2f0d) |
| 20:34:49 | 17 | EURC → SOL (native) | Executed | `0xd2e539db…` [🐞](https://debug.barn.cow.fi/order/0xd2e539db3b036dafd0694a33b3b376d3ecd62fc41ceacf1f55d313a76e6180d5) |
| 20:34:51 | 18 | SPX → SOL (native) | Executed | `0x5ee4498b…` [🐞](https://debug.barn.cow.fi/order/0x5ee4498bceb9bcd418b2a01e723f0c52abc17bdd82f6e24e91f7a84a1a7c54cc) |
| 20:34:55 | 21 | BELIEVE → SOL (native) | Executed | `0xa338e972…` [🐞](https://debug.barn.cow.fi/order/0xa338e97203376cf043d0173e8d75b7e927dc2737c8bc7367babf48a3c88d57ae) |
| 20:35:10 | 29 | bonkSOL → SOL (native) | Executed | `0x3e15b5a7…` [🐞](https://debug.barn.cow.fi/order/0x3e15b5a7f25475ca63029056d16cc3dab6177d552b9a02b223103e361085671d) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 466 | 68.7% |
| expired: never created on-chain (winner found, creation blockhash expired) | 212 | 31.3% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 6s | 7s | 41s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 466 | 100.0% | 466 | 67,285 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 476 | 476 | 473 | 99.4% | 3 | 15 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 3 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `in_flight`: 4 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 678 | 466 | 68.7% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → WEN | 4 | 4 | 100.0% |
| wSOL → TRUMP | 2 | 1 | 50.0% |
| wSOL → DJT | 2 | 0 | 0.0% |
| wSOL → SKHY | 2 | 0 | 0.0% |
| wSOL → MSFTx | 2 | 1 | 50.0% |
| wSOL → hyUSD | 2 | 1 | 50.0% |
| wSOL → GLDx | 2 | 1 | 50.0% |
| wSOL → SNDK | 2 | 2 | 100.0% |
| wSOL → Bonk | 2 | 0 | 0.0% |
| wSOL → GRASS | 2 | 2 | 100.0% |
| wSOL → ORCA | 2 | 0 | 0.0% |
| wSOL → JTO | 2 | 2 | 100.0% |
| wSOL → SPX | 2 | 1 | 50.0% |
| wSOL → MU | 2 | 2 | 100.0% |
| wSOL → USDS | 2 | 0 | 0.0% |
| wSOL → GOOGLx | 2 | 0 | 0.0% |
| wSOL → GMEx | 2 | 0 | 0.0% |
| wSOL → MPLX | 2 | 0 | 0.0% |
| wSOL → Buttcoin | 2 | 0 | 0.0% |
| wSOL → aura | 2 | 2 | 100.0% |
| wSOL → CRCLx | 2 | 0 | 0.0% |
| wSOL → DBR | 2 | 0 | 0.0% |
| wSOL → NOS | 2 | 0 | 0.0% |
| wSOL → BOT | 2 | 0 | 0.0% |
| wSOL → INF | 2 | 1 | 50.0% |
| wSOL → KMNO | 2 | 1 | 50.0% |
| wSOL → xHYPE | 2 | 2 | 100.0% |
| wSOL → QQQx | 2 | 0 | 0.0% |
| wSOL → CODEC | 2 | 2 | 100.0% |
| wSOL → MCDx | 2 | 0 | 0.0% |
| wSOL → PEAQ | 2 | 2 | 100.0% |
| wSOL → xBTC | 2 | 2 | 100.0% |
| wSOL → GP | 2 | 0 | 0.0% |
| wSOL → AAPLx | 2 | 0 | 0.0% |
| wSOL → TSLAx | 2 | 0 | 0.0% |
| wSOL → COINx | 2 | 0 | 0.0% |
| wSOL → TTWO | 2 | 0 | 0.0% |
| wSOL → PST | 2 | 0 | 0.0% |
| wSOL → $WIF | 2 | 1 | 50.0% |
| wSOL → SKR | 2 | 0 | 0.0% |
| wSOL → RUSH | 2 | 0 | 0.0% |
| wSOL → ZBCN | 2 | 0 | 0.0% |
| wSOL → HOODx | 2 | 0 | 0.0% |
| wSOL → PSOL | 2 | 2 | 100.0% |
| wSOL → APE | 2 | 2 | 100.0% |
| wSOL → MSTRx | 2 | 0 | 0.0% |
| wSOL → XAUt0 | 2 | 2 | 100.0% |
| wSOL → RHEA | 2 | 2 | 100.0% |
| wSOL → GIGA | 2 | 2 | 100.0% |
| wSOL → WBTC | 2 | 2 | 100.0% |
| wSOL → BNB | 2 | 2 | 100.0% |
| wSOL → GRND | 2 | 0 | 0.0% |
| wSOL → 2Z | 2 | 0 | 0.0% |
| wSOL → wXRP | 2 | 0 | 0.0% |
| wSOL → DKNG | 2 | 0 | 0.0% |
| wSOL → PLTRx | 2 | 0 | 0.0% |
| wSOL → eUSX | 2 | 0 | 0.0% |
| wSOL → PYTH | 2 | 2 | 100.0% |
| wSOL → ALON | 2 | 2 | 100.0% |
| wSOL → SANC | 2 | 0 | 0.0% |
| wSOL → LMAO! | 2 | 2 | 100.0% |
| wSOL → PUMPCADE | 2 | 2 | 100.0% |
| wSOL → KLED | 2 | 2 | 100.0% |
| wSOL → HIMS | 2 | 0 | 0.0% |
| wSOL → META | 2 | 0 | 0.0% |
| wSOL → STRCx | 2 | 0 | 0.0% |
| wSOL → NKE | 2 | 0 | 0.0% |
| wSOL → COPX | 2 | 2 | 100.0% |
| wSOL → ENA | 2 | 0 | 0.0% |
| wSOL → TRX | 2 | 0 | 0.0% |
| wSOL → bSOL | 2 | 0 | 0.0% |
| wSOL → CLAW | 2 | 0 | 0.0% |
| wSOL → AMZNx | 2 | 0 | 0.0% |
| wSOL → BC | 2 | 2 | 100.0% |
| wSOL → RBLX | 2 | 0 | 0.0% |
| wSOL → AMC | 2 | 0 | 0.0% |
| wSOL → RENDER | 2 | 2 | 100.0% |
| wSOL → Jotchua | 2 | 2 | 100.0% |
| wSOL → WOJAK | 2 | 2 | 100.0% |
| wSOL → BABA | 2 | 0 | 0.0% |
| wSOL → DRAM | 2 | 0 | 0.0% |
| wSOL → AAVE | 2 | 0 | 0.0% |
| wSOL → hSOL | 2 | 0 | 0.0% |
| wSOL → Anon | 2 | 2 | 100.0% |
| wSOL → Bert | 2 | 2 | 100.0% |
| wSOL → Pepe | 2 | 2 | 100.0% |
| wSOL → INJ | 2 | 0 | 0.0% |
| wSOL → FWOG | 2 | 2 | 100.0% |
| wSOL → NPC | 2 | 2 | 100.0% |
| wSOL → EDEL | 2 | 2 | 100.0% |
| wSOL → SNAP | 2 | 0 | 0.0% |
| wSOL → IBM | 2 | 0 | 0.0% |
| wSOL → USDY | 2 | 0 | 0.0% |
| wSOL → RDDT | 2 | 0 | 0.0% |
| wSOL → MEW | 2 | 2 | 100.0% |
| wSOL → AMD | 2 | 0 | 0.0% |
| wSOL → SQUIRE | 2 | 2 | 100.0% |
| wSOL → HNT | 2 | 2 | 100.0% |
| wSOL → VINE | 2 | 2 | 100.0% |
| wSOL → POPCAT | 2 | 2 | 100.0% |
| wSOL → PAYAI | 2 | 2 | 100.0% |
| wSOL → arc | 2 | 0 | 0.0% |
| wSOL → VIRTUAL | 2 | 2 | 100.0% |
| wSOL → CHILLGUY | 2 | 2 | 100.0% |
| wSOL → LINK | 2 | 2 | 100.0% |
| wSOL → Cake | 2 | 0 | 0.0% |
| wSOL → GRIFFAIN | 2 | 2 | 100.0% |
| wSOL → UFD | 2 | 2 | 100.0% |
| wSOL → CRED | 2 | 2 | 100.0% |
| wSOL → DOOD | 2 | 0 | 0.0% |
| wSOL → pwease | 2 | 0 | 0.0% |
| wSOL → USDv | 2 | 0 | 0.0% |
| wSOL → ME | 2 | 0 | 0.0% |
| wSOL → BP | 2 | 2 | 100.0% |
| wSOL → TSUKI | 2 | 2 | 100.0% |
| wSOL → USO | 2 | 0 | 0.0% |
| wSOL → SLX | 2 | 0 | 0.0% |
| wSOL → PONKE | 2 | 2 | 100.0% |
| wSOL → CARS | 2 | 0 | 0.0% |
| wSOL → GME | 2 | 2 | 100.0% |
| wSOL → MOBY | 2 | 2 | 100.0% |
| wSOL → KOx | 2 | 0 | 0.0% |
| wSOL → BIRB | 2 | 0 | 0.0% |
| wSOL → MOODENG | 2 | 2 | 100.0% |
| wSOL → KORI | 2 | 2 | 100.0% |
| wSOL → Pnut | 2 | 2 | 100.0% |
| wSOL → BOBO | 2 | 2 | 100.0% |
| wSOL → 67 | 2 | 0 | 0.0% |
| wSOL → HODL | 2 | 2 | 100.0% |
| wSOL → ACT | 2 | 2 | 100.0% |
| wSOL → dreams | 2 | 2 | 100.0% |
| WEN → SOL (native) | 2 | 2 | 100.0% |
| wSOL → SOLANGELES | 2 | 0 | 0.0% |
| wSOL → nub | 2 | 2 | 100.0% |
| wSOL → CYPH | 2 | 0 | 0.0% |
| wSOL → BIO | 2 | 2 | 100.0% |
| wSOL → Tokabu | 2 | 2 | 100.0% |
| wSOL → ALTSZN | 2 | 2 | 100.0% |
| wSOL → Old Slerf | 2 | 2 | 100.0% |
| wSOL → Clash | 2 | 2 | 100.0% |
| wSOL → SOLCEX | 2 | 2 | 100.0% |
| wSOL → boden | 2 | 2 | 100.0% |
| wSOL → MRNA | 2 | 0 | 0.0% |
| wSOL → BRK.Bx | 2 | 2 | 100.0% |
| wSOL → MELANIA | 2 | 2 | 100.0% |
| wSOL → hyloSOL | 2 | 0 | 0.0% |
| wSOL → MRVL | 2 | 0 | 0.0% |
| wSOL → bonkSOL | 2 | 1 | 50.0% |
| wSOL → W | 2 | 0 | 0.0% |
| wSOL → LLY | 2 | 2 | 100.0% |
| wSOL → IO | 2 | 0 | 0.0% |
| wSOL → PFE | 2 | 2 | 100.0% |
| wSOL → retire | 2 | 2 | 100.0% |
| wSOL → stSOL | 2 | 2 | 100.0% |
| wSOL → RETARDIO | 2 | 0 | 0.0% |
| wSOL → pippin | 2 | 2 | 100.0% |
| wSOL → ALPHA | 2 | 2 | 100.0% |
| wSOL → DJI6930 | 2 | 2 | 100.0% |
| wSOL → DITH | 2 | 0 | 0.0% |
| wSOL → ALCH | 2 | 2 | 100.0% |
| wSOL → GOAT | 2 | 2 | 100.0% |
| wSOL → UMBRA | 2 | 2 | 100.0% |
| wSOL → DADDY | 2 | 0 | 0.0% |
| wSOL → URANUS | 2 | 0 | 0.0% |
| wSOL → BITCOIN | 2 | 2 | 100.0% |
| wSOL → TBB | 2 | 2 | 100.0% |
| wSOL → SOLO | 2 | 0 | 0.0% |
| wSOL → swarms | 2 | 2 | 100.0% |
| wSOL → PUPS | 2 | 0 | 0.0% |
| wSOL → xavier | 2 | 2 | 100.0% |
| wSOL → ZEREBRO | 2 | 2 | 100.0% |
| wSOL → PURPE | 2 | 2 | 100.0% |
| wSOL → RKLB | 2 | 2 | 100.0% |
| wSOL → STREAM | 2 | 2 | 100.0% |
| wSOL → LOCKIN | 2 | 2 | 100.0% |
| wSOL → sUSD.infra | 2 | 0 | 0.0% |
| wSOL → ARX | 2 | 0 | 0.0% |
| wSOL → vSOL | 2 | 1 | 50.0% |
| wSOL → PBTC | 2 | 0 | 0.0% |
| wSOL → TAI | 2 | 0 | 0.0% |
| wSOL → mini | 2 | 2 | 100.0% |
| wSOL → SIGMA | 2 | 2 | 100.0% |
| wSOL → BORG | 2 | 2 | 100.0% |
| wSOL → SPSC | 2 | 0 | 0.0% |
| wSOL → SCS | 2 | 2 | 100.0% |
| wSOL → SC | 2 | 2 | 100.0% |
| wSOL → sSOL | 2 | 0 | 0.0% |
| wSOL → dSOL | 2 | 0 | 0.0% |
| wSOL → LST | 2 | 0 | 0.0% |
| wSOL → RBT | 2 | 2 | 100.0% |
| wSOL → SOLNIC | 2 | 2 | 100.0% |
| wSOL → GIKO | 2 | 2 | 100.0% |
| wSOL → HEGE | 2 | 2 | 100.0% |
| wSOL → USA | 2 | 2 | 100.0% |
| wSOL → SHIB | 2 | 2 | 100.0% |
| wSOL → GUAC | 2 | 2 | 100.0% |
| wSOL → URA | 2 | 2 | 100.0% |
| wSOL → MF | 2 | 0 | 0.0% |
| wSOL → HARAMBE | 2 | 2 | 100.0% |
| wSOL → AUDIO | 2 | 0 | 0.0% |
| wSOL → WINGS | 2 | 0 | 0.0% |
| wSOL → BILLY | 2 | 2 | 100.0% |
| wSOL → lanternSOL | 2 | 0 | 0.0% |
| wSOL → SLOTH | 2 | 2 | 100.0% |
| wSOL → ATR | 2 | 0 | 0.0% |
| wSOL → DOLAN | 2 | 2 | 100.0% |
| wSOL → ISC | 2 | 0 | 0.0% |
| wSOL → ZAMA | 2 | 0 | 0.0% |
| wSOL → MOTHER | 2 | 2 | 100.0% |
| wSOL → EUROP | 2 | 0 | 0.0% |
| wSOL → STAN | 2 | 2 | 100.0% |
| wSOL → $michi | 2 | 2 | 100.0% |
| wSOL → USEDCAR | 2 | 2 | 100.0% |
| wSOL → AURY | 2 | 0 | 0.0% |
| wSOL → VCHF | 2 | 0 | 0.0% |
| wSOL → DUKO | 2 | 2 | 100.0% |
| wSOL → $WAFFLES | 2 | 2 | 100.0% |
| wSOL → UPT | 2 | 2 | 100.0% |
| wSOL → tremp | 2 | 2 | 100.0% |
| wSOL → $TOAD | 2 | 2 | 100.0% |
| wSOL → MNGO | 2 | 0 | 0.0% |
| wSOL → HEEHEE | 2 | 2 | 100.0% |
| wSOL → MANEKI | 2 | 2 | 100.0% |
| wSOL → AVICI | 2 | 0 | 0.0% |
| wSOL → SOLAMA | 2 | 2 | 100.0% |
| wSOL → CHAT | 2 | 2 | 100.0% |
| wSOL → WHALES | 2 | 2 | 100.0% |
| wSOL → HAMMY | 2 | 2 | 100.0% |
| wSOL → Hobbes | 2 | 2 | 100.0% |
| wSOL → $BEER | 2 | 2 | 100.0% |
| wSOL → METAx | 1 | 0 | 0.0% |
| wSOL → PERPSPAD | 1 | 1 | 100.0% |
| PERPSPAD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MANIFEST | 1 | 1 | 100.0% |
| MANIFEST → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Jimothy | 1 | 1 | 100.0% |
| GRASS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TripleT | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| Jimothy → SOL (native) | 1 | 1 | 100.0% |
| JTO → SOL (native) | 1 | 1 | 100.0% |
| SNDK → SOL (native) | 1 | 1 | 100.0% |
| MSFTx → SOL (native) | 1 | 1 | 100.0% |
| hyUSD → SOL (native) | 1 | 1 | 100.0% |
| GLDx → SOL (native) | 1 | 1 | 100.0% |
| TRUMP → SOL (native) | 1 | 1 | 100.0% |
| TripleT → SOL (native) | 1 | 1 | 100.0% |
| MU → SOL (native) | 1 | 1 | 100.0% |
| aura → SOL (native) | 1 | 1 | 100.0% |
| xHYPE → SOL (native) | 1 | 1 | 100.0% |
| CODEC → SOL (native) | 1 | 1 | 100.0% |
| PEAQ → SOL (native) | 1 | 1 | 100.0% |
| xBTC → SOL (native) | 1 | 1 | 100.0% |
| INF → SOL (native) | 1 | 1 | 100.0% |
| KMNO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| BOME → SOL (native) | 1 | 1 | 100.0% |
| PSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TOAD | 1 | 1 | 100.0% |
| APE → SOL (native) | 1 | 1 | 100.0% |
| TOAD → SOL (native) | 1 | 1 | 100.0% |
| RHEA → SOL (native) | 1 | 1 | 100.0% |
| GIGA → SOL (native) | 1 | 1 | 100.0% |
| XAUt0 → SOL (native) | 1 | 1 | 100.0% |
| BNB → SOL (native) | 1 | 1 | 100.0% |
| WBTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CHILLHOUSE | 1 | 1 | 100.0% |
| wSOL → GOLD | 1 | 1 | 100.0% |
| CHILLHOUSE → SOL (native) | 1 | 1 | 100.0% |
| GOLD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Cupsey | 1 | 1 | 100.0% |
| PYTH → SOL (native) | 1 | 1 | 100.0% |
| ALON → SOL (native) | 1 | 1 | 100.0% |
| Cupsey → SOL (native) | 1 | 1 | 100.0% |
| PUMPCADE → SOL (native) | 1 | 1 | 100.0% |
| LMAO! → SOL (native) | 1 | 1 | 100.0% |
| wSOL → KET | 1 | 1 | 100.0% |
| KLED → SOL (native) | 1 | 1 | 100.0% |
| KET → SOL (native) | 1 | 1 | 100.0% |
| COPX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MADE | 1 | 1 | 100.0% |
| MADE → SOL (native) | 1 | 1 | 100.0% |
| BC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → DREGG | 1 | 1 | 100.0% |
| RENDER → SOL (native) | 1 | 1 | 100.0% |
| DREGG → SOL (native) | 1 | 1 | 100.0% |
| WOJAK → SOL (native) | 1 | 1 | 100.0% |
| Jotchua → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HAROLD | 1 | 1 | 100.0% |
| HAROLD → SOL (native) | 1 | 1 | 100.0% |
| Anon → SOL (native) | 1 | 1 | 100.0% |
| Bert → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ZEUS | 1 | 1 | 100.0% |
| Pepe → SOL (native) | 1 | 1 | 100.0% |
| FWOG → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ROUTER | 1 | 1 | 100.0% |
| NPC → SOL (native) | 1 | 1 | 100.0% |
| ZEUS → SOL (native) | 1 | 1 | 100.0% |
| EDEL → SOL (native) | 1 | 1 | 100.0% |
| ROUTER → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BULLSHIT | 1 | 1 | 100.0% |
| wSOL → MON | 1 | 1 | 100.0% |
| BULLSHIT → SOL (native) | 1 | 1 | 100.0% |
| MON → SOL (native) | 1 | 1 | 100.0% |
| MEW → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USDUC | 1 | 1 | 100.0% |
| SQUIRE → SOL (native) | 1 | 1 | 100.0% |
| USDUC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BURNIE | 1 | 1 | 100.0% |
| VINE → SOL (native) | 1 | 1 | 100.0% |
| HNT → SOL (native) | 1 | 1 | 100.0% |
| BURNIE → SOL (native) | 1 | 1 | 100.0% |
| POPCAT → SOL (native) | 1 | 1 | 100.0% |
| PAYAI → SOL (native) | 1 | 1 | 100.0% |
| VIRTUAL → SOL (native) | 1 | 1 | 100.0% |
| CHILLGUY → SOL (native) | 1 | 1 | 100.0% |
| LINK → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Percolator | 1 | 1 | 100.0% |
| Percolator → SOL (native) | 1 | 1 | 100.0% |
| GRIFFAIN → SOL (native) | 1 | 1 | 100.0% |
| UFD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HUMA | 1 | 1 | 100.0% |
| CRED → SOL (native) | 1 | 1 | 100.0% |
| wSOL → KINS | 1 | 1 | 100.0% |
| HUMA → SOL (native) | 1 | 1 | 100.0% |
| KINS → SOL (native) | 1 | 1 | 100.0% |
| BP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NST | 1 | 1 | 100.0% |
| TSUKI → SOL (native) | 1 | 1 | 100.0% |
| PONKE → SOL (native) | 1 | 1 | 100.0% |
| NST → SOL (native) | 1 | 1 | 100.0% |
| GME → SOL (native) | 1 | 1 | 100.0% |
| wSOL → three | 1 | 1 | 100.0% |
| MOBY → SOL (native) | 1 | 1 | 100.0% |
| three → SOL (native) | 1 | 1 | 100.0% |
| MOODENG → SOL (native) | 1 | 1 | 100.0% |
| KORI → SOL (native) | 1 | 1 | 100.0% |
| Pnut → SOL (native) | 1 | 1 | 100.0% |
| wSOL → READY | 1 | 1 | 100.0% |
| READY → SOL (native) | 1 | 1 | 100.0% |
| BOBO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → $HACHI | 1 | 1 | 100.0% |
| $HACHI → SOL (native) | 1 | 1 | 100.0% |
| HODL → SOL (native) | 1 | 1 | 100.0% |
| ACT → SOL (native) | 1 | 1 | 100.0% |
| dreams → SOL (native) | 1 | 1 | 100.0% |
| nub → SOL (native) | 1 | 1 | 100.0% |
| Tokabu → SOL (native) | 1 | 1 | 100.0% |
| BIO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NATIX | 1 | 0 | 0.0% |
| Old Slerf → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BELIEVE | 1 | 1 | 100.0% |
| ALTSZN → SOL (native) | 1 | 1 | 100.0% |
| BELIEVE → SOL (native) | 1 | 1 | 100.0% |
| Clash → SOL (native) | 1 | 1 | 100.0% |
| SOLCEX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Clude | 1 | 1 | 100.0% |
| boden → SOL (native) | 1 | 1 | 100.0% |
| Clude → SOL (native) | 1 | 1 | 100.0% |
| BRK.Bx → SOL (native) | 1 | 1 | 100.0% |
| MELANIA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ZERO | 1 | 1 | 100.0% |
| ZERO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HEEBOO | 1 | 0 | 0.0% |
| LLY → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GHOST | 1 | 1 | 100.0% |
| PFE → SOL (native) | 1 | 1 | 100.0% |
| stSOL → SOL (native) | 1 | 1 | 100.0% |
| retire → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RKC | 1 | 1 | 100.0% |
| RKC → SOL (native) | 1 | 1 | 100.0% |
| pippin → SOL (native) | 1 | 1 | 100.0% |
| ALPHA → SOL (native) | 1 | 1 | 100.0% |
| DJI6930 → SOL (native) | 1 | 1 | 100.0% |
| ALCH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Chud | 1 | 1 | 100.0% |
| GOAT → SOL (native) | 1 | 1 | 100.0% |
| UMBRA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → unc | 1 | 1 | 100.0% |
| Chud → SOL (native) | 1 | 1 | 100.0% |
| wSOL → crypto | 1 | 1 | 100.0% |
| unc → SOL (native) | 1 | 1 | 100.0% |
| crypto → SOL (native) | 1 | 1 | 100.0% |
| BITCOIN → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BULLISH | 1 | 1 | 100.0% |
| wSOL → BITTY | 1 | 1 | 100.0% |
| BULLISH → SOL (native) | 1 | 1 | 100.0% |
| swarms → SOL (native) | 1 | 1 | 100.0% |
| BITTY → SOL (native) | 1 | 1 | 100.0% |
| TBB → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RAGEGUY | 1 | 1 | 100.0% |
| RAGEGUY → SOL (native) | 1 | 1 | 100.0% |
| ZEREBRO → SOL (native) | 1 | 1 | 100.0% |
| xavier → SOL (native) | 1 | 1 | 100.0% |
| RKLB → SOL (native) | 1 | 1 | 100.0% |
| PURPE → SOL (native) | 1 | 1 | 100.0% |
| LOCKIN → SOL (native) | 1 | 1 | 100.0% |
| STREAM → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GOR | 1 | 1 | 100.0% |
| wSOL → ZAUTH | 1 | 1 | 100.0% |
| GOR → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Shoggoth | 1 | 1 | 100.0% |
| mini → SOL (native) | 1 | 1 | 100.0% |
| ZAUTH → SOL (native) | 1 | 1 | 100.0% |
| Shoggoth → SOL (native) | 1 | 1 | 100.0% |
| SIGMA → SOL (native) | 1 | 1 | 100.0% |
| vSOL → SOL (native) | 1 | 1 | 100.0% |
| BORG → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RNT | 1 | 1 | 100.0% |
| SCS → SOL (native) | 1 | 1 | 100.0% |
| RNT → SOL (native) | 1 | 1 | 100.0% |
| SC → SOL (native) | 1 | 1 | 100.0% |
| SOLNIC → SOL (native) | 1 | 1 | 100.0% |
| RBT → SOL (native) | 1 | 1 | 100.0% |
| GIKO → SOL (native) | 1 | 1 | 100.0% |
| HEGE → SOL (native) | 1 | 1 | 100.0% |
| GUAC → SOL (native) | 1 | 1 | 100.0% |
| USA → SOL (native) | 1 | 1 | 100.0% |
| SHIB → SOL (native) | 1 | 1 | 100.0% |
| URA → SOL (native) | 1 | 1 | 100.0% |
| HARAMBE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SOLC | 1 | 1 | 100.0% |
| SOLC → SOL (native) | 1 | 1 | 100.0% |
| BILLY → SOL (native) | 1 | 1 | 100.0% |
| SLOTH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SELFIE | 1 | 1 | 100.0% |
| DOLAN → SOL (native) | 1 | 1 | 100.0% |
| SELFIE → SOL (native) | 1 | 1 | 100.0% |
| MOTHER → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JSOL | 1 | 0 | 0.0% |
| STAN → SOL (native) | 1 | 1 | 100.0% |
| $michi → SOL (native) | 1 | 1 | 100.0% |
| USEDCAR → SOL (native) | 1 | 1 | 100.0% |
| DUKO → SOL (native) | 1 | 1 | 100.0% |
| $WAFFLES → SOL (native) | 1 | 1 | 100.0% |
| UPT → SOL (native) | 1 | 1 | 100.0% |
| tremp → SOL (native) | 1 | 1 | 100.0% |
| $TOAD → SOL (native) | 1 | 1 | 100.0% |
| HEEHEE → SOL (native) | 1 | 1 | 100.0% |
| MANEKI → SOL (native) | 1 | 1 | 100.0% |
| SOLAMA → SOL (native) | 1 | 1 | 100.0% |
| HAMMY → SOL (native) | 1 | 1 | 100.0% |
| CHAT → SOL (native) | 1 | 1 | 100.0% |
| WHALES → SOL (native) | 1 | 1 | 100.0% |
| Hobbes → SOL (native) | 1 | 1 | 100.0% |
| $BEER → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 29 | 25 | 86.2% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 27 | 22 | 81.5% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 27 | 20 | 74.1% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 25 | 19 | 76.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 25 | 17 | 68.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 25 | 18 | 72.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 24 | 15 | 62.5% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 24 | 19 | 79.2% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 23 | 17 | 73.9% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 23 | 18 | 78.3% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 23 | 17 | 73.9% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 23 | 17 | 73.9% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 23 | 19 | 82.6% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 23 | 14 | 60.9% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 22 | 14 | 63.6% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 22 | 14 | 63.6% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 22 | 16 | 72.7% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 22 | 14 | 63.6% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 22 | 17 | 77.3% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 21 | 12 | 57.1% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 21 | 11 | 52.4% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 21 | 13 | 61.9% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 21 | 13 | 61.9% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 21 | 15 | 71.4% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 21 | 14 | 66.7% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 21 | 12 | 57.1% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 20 | 12 | 60.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 20 | 16 | 80.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 19 | 10 | 52.6% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 18 | 6 | 33.3% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 212 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 20:14:53 | wSOL → TRUMP | market sell | Winner too late: creation blockhash expired | `0x34d252fb…` [🐞](https://debug.barn.cow.fi/order/0x34d252fb70c0da8286196fac9f314f55f96a0e9a899a43c5f6f2d3d9cf5ed419) |
| 20:14:57 | wSOL → DJT | market sell | Winner too late: creation blockhash expired | `0x4f5db27b…` [🐞](https://debug.barn.cow.fi/order/0x4f5db27b2c09746b92ada46c0872d7e2f0b235a99d3114e73223b166cc806455) |
| 20:15:02 | wSOL → METAx | market sell | Winner too late: creation blockhash expired | `0xebc2a1e7…` [🐞](https://debug.barn.cow.fi/order/0xebc2a1e7afec47af8752e4a5059193edc593ca0e81a0459e64113ec9f035ddba) |
| 20:15:09 | wSOL → SKHY | market sell | Winner too late: creation blockhash expired | `0xff12b5de…` [🐞](https://debug.barn.cow.fi/order/0xff12b5de359ace040ef55469eb6446d5d62b20af9c6ab61849475eab4672f31e) |
| 20:15:13 | wSOL → MSFTx | market sell | Winner too late: creation blockhash expired | `0x4fb471aa…` [🐞](https://debug.barn.cow.fi/order/0x4fb471aa580b661ff8c657f5e009c2026d80960c9af59ad445acd97f66c00411) |
| 20:15:17 | wSOL → hyUSD | market sell | Winner too late: creation blockhash expired | `0xeaa405c5…` [🐞](https://debug.barn.cow.fi/order/0xeaa405c59ac71cda13c0847c9de57dad6ef4b53b5774536e3fb030309f7ed1b3) |
| 20:15:21 | wSOL → GLDx | market sell | Winner too late: creation blockhash expired | `0x8d163270…` [🐞](https://debug.barn.cow.fi/order/0x8d163270a0f9c16566a1f4f7d30409456469304509655279e257ba881363c450) |
| 20:15:33 | wSOL → Bonk | market sell | Winner too late: creation blockhash expired | `0x1438c072…` [🐞](https://debug.barn.cow.fi/order/0x1438c07265850a42751e20b57735a4dbdb9d687b79c06611a5a548ed15e2345b) |
| 20:15:39 | wSOL → DJT | market sell | Winner too late: creation blockhash expired | `0xeedc2265…` [🐞](https://debug.barn.cow.fi/order/0xeedc226526c1c5fa9e215b9ebec5bd13ad3eb9fc7b5533a1c24b8cdd65d99cd5) |
| 20:15:41 | wSOL → ORCA | market sell | Winner too late: creation blockhash expired | `0x1f682ebf…` [🐞](https://debug.barn.cow.fi/order/0x1f682ebf9832e1883fcebd0a0d23c875271fa74c0ea78dac13acfc0a37e07c2b) |
| 20:15:53 | wSOL → SKHY | market sell | Winner too late: creation blockhash expired | `0xaaba0089…` [🐞](https://debug.barn.cow.fi/order/0xaaba0089c41cb5d1bca444d2c41c7d5a2bb272f62277197bcb81b343d3c0034b) |
| 20:16:09 | wSOL → USDS | market sell | Winner too late: creation blockhash expired | `0x53ecc782…` [🐞](https://debug.barn.cow.fi/order/0x53ecc782aa73bcc70e9aaf86dae46bcdb03e1efd2f84be55a39e474242fb0a4b) |
| 20:16:14 | wSOL → GOOGLx | market sell | Winner too late: creation blockhash expired | `0x30196d3d…` [🐞](https://debug.barn.cow.fi/order/0x30196d3d27aee00d35a0172e3b28432c055aaa38981e03a43852ac4c4adf906b) |
| 20:16:15 | wSOL → SPX | market sell | Winner too late: creation blockhash expired | `0xf924e0e0…` [🐞](https://debug.barn.cow.fi/order/0xf924e0e0a9ef8cb770065c8395e9fc48ee3f6e006a57826e82e27e97cb2af6b4) |
| 20:16:15 | wSOL → Bonk | market sell | Winner too late: creation blockhash expired | `0x6834b648…` [🐞](https://debug.barn.cow.fi/order/0x6834b648f61305dffb6258f199e891da94ee4c3fc0e19ef2267e5f2bbb365f50) |
| 20:16:17 | wSOL → GMEx | market sell | Winner too late: creation blockhash expired | `0x82168e17…` [🐞](https://debug.barn.cow.fi/order/0x82168e17d95e1f9faacc87702b39120c80de3b86fca5230db295e8caa2236e5c) |
| 20:16:21 | wSOL → MPLX | market sell | Winner too late: creation blockhash expired | `0x32011ef8…` [🐞](https://debug.barn.cow.fi/order/0x32011ef8265ba65d6835c20d84795ac4d3e427043aaf92222d9b5d424e344324) |
| 20:16:22 | wSOL → ORCA | market sell | Winner too late: creation blockhash expired | `0x6a89b961…` [🐞](https://debug.barn.cow.fi/order/0x6a89b961d2041cd9bbe8c22dc0d67e731b47515d33d2ad092516d1cb01a45045) |
| 20:16:25 | wSOL → Buttcoin | market sell | Winner too late: creation blockhash expired | `0xf9384047…` [🐞](https://debug.barn.cow.fi/order/0xf9384047b340fd27997a3a4bc9a9595ba1f4b55df2fc99ba2b218ef53326ec2e) |
| 20:16:33 | wSOL → CRCLx | market sell | Winner too late: creation blockhash expired | `0x1c040909…` [🐞](https://debug.barn.cow.fi/order/0x1c0409095c6a3779b0a9a3a5f4c85cfad521499f7f886234ba631cc0fb5716f0) |
| 20:16:37 | wSOL → DBR | market sell | Winner too late: creation blockhash expired | `0x3dbc5013…` [🐞](https://debug.barn.cow.fi/order/0x3dbc5013a95087f2a1eea4ac19b02a6e52743cb5ffb2e4d1206c533850e68a81) |
| 20:16:41 | wSOL → NOS | market sell | Winner too late: creation blockhash expired | `0x487cb86b…` [🐞](https://debug.barn.cow.fi/order/0x487cb86bfef058a5f3ead96a7387180b20b6b5ace5050021180482589f980643) |
| 20:16:45 | wSOL → BOT | market sell | Winner too late: creation blockhash expired | `0xab2df58b…` [🐞](https://debug.barn.cow.fi/order/0xab2df58b3e7ed91524752623cce186bb62301be63874bf4bdf063483c7f6f0c0) |
| 20:16:49 | wSOL → INF | market sell | Winner too late: creation blockhash expired | `0x49566a77…` [🐞](https://debug.barn.cow.fi/order/0x49566a77ee9fa5a6407c93186ac25622412c4234c733dc7df1a993e04c3054c1) |
| 20:16:51 | wSOL → USDS | market sell | Winner too late: creation blockhash expired | `0xca5716d7…` [🐞](https://debug.barn.cow.fi/order/0xca5716d79750b46c00683fe2e45e9e4f655a3a96b1b075c192c9d4fbafd6a736) |
| 20:16:53 | wSOL → KMNO | market sell | Winner too late: creation blockhash expired | `0x90df741d…` [🐞](https://debug.barn.cow.fi/order/0x90df741d6cd966e228eb5c09eb7de0f191c33cde56218348585f2f02661c21ec) |
| 20:16:58 | wSOL → GOOGLx | market sell | Winner too late: creation blockhash expired | `0x20025307…` [🐞](https://debug.barn.cow.fi/order/0x20025307b5b044bb712620d4c58f8a0644d80f2134f0636e3af06d0bc8b67aac) |
| 20:17:01 | wSOL → QQQx | market sell | Winner too late: creation blockhash expired | `0xe3c13cfb…` [🐞](https://debug.barn.cow.fi/order/0xe3c13cfb60fbd086613bfab2923af2d3d1009f545ac7c74a207a477de1f392cd) |
| 20:17:02 | wSOL → GMEx | market sell | Winner too late: creation blockhash expired | `0x7e27baa3…` [🐞](https://debug.barn.cow.fi/order/0x7e27baa3aab4055fb932897cb5cb87be25e1d5c33ccf015fe859bb8c5729eede) |
| 20:17:03 | wSOL → MPLX | market sell | Winner too late: creation blockhash expired | `0x3a670bb7…` [🐞](https://debug.barn.cow.fi/order/0x3a670bb7e38813b67e4cfcb16e888053163b6131b0efcac0f7356ce5004f4b46) |
| 20:17:09 | wSOL → MCDx | market sell | Winner too late: creation blockhash expired | `0x4b2ec220…` [🐞](https://debug.barn.cow.fi/order/0x4b2ec220f460765307878a8b46f888fd9727840ccda4735e619dd930ecb63e10) |
| 20:17:09 | wSOL → Buttcoin | market sell | Winner too late: creation blockhash expired | `0x90dda233…` [🐞](https://debug.barn.cow.fi/order/0x90dda233dca53f92c1c713edbc6cda070ccc62c9d565032359a7bfc07f271fb5) |
| 20:17:15 | wSOL → CRCLx | market sell | Winner too late: creation blockhash expired | `0x02305511…` [🐞](https://debug.barn.cow.fi/order/0x02305511dfaaa8f015925139c6356fcf6ea3c8631382e7bdf1195928b1e37536) |
| 20:17:19 | wSOL → DBR | market sell | Winner too late: creation blockhash expired | `0xfe14b8fb…` [🐞](https://debug.barn.cow.fi/order/0xfe14b8fb89653efc9662c8abd8378b69fad12ee28d64048f339b50f545896a43) |
| 20:17:21 | wSOL → GP | market sell | Winner too late: creation blockhash expired | `0x01b3451e…` [🐞](https://debug.barn.cow.fi/order/0x01b3451ef8c73106c60fadc7b6b2d188a73c5525870d2a971ad5119972828f05) |
| 20:17:22 | wSOL → NOS | market sell | Winner too late: creation blockhash expired | `0xd9672937…` [🐞](https://debug.barn.cow.fi/order/0xd9672937f37e9c3bada88b86ca4212ea886f5d0c43d5c4c4da17549c9810094f) |
| 20:17:25 | wSOL → AAPLx | market sell | Winner too late: creation blockhash expired | `0x6157f142…` [🐞](https://debug.barn.cow.fi/order/0x6157f142046334ec590c6fa78b9042322c6f76d3ff87a775317a3d130caef984) |
| 20:17:26 | wSOL → BOT | market sell | Winner too late: creation blockhash expired | `0x2f7dce8d…` [🐞](https://debug.barn.cow.fi/order/0x2f7dce8d5fca7ba54808a01558a67a2dd1a658f51e86d52a2ee5cf91adb17e1e) |
| 20:17:29 | wSOL → TSLAx | market sell | Winner too late: creation blockhash expired | `0x890a49be…` [🐞](https://debug.barn.cow.fi/order/0x890a49be2666e8ce34af518a3830297d9ad3dacb2de2f032ace67572bd8ea6e4) |
| 20:17:33 | wSOL → COINx | market sell | Winner too late: creation blockhash expired | `0x010d2930…` [🐞](https://debug.barn.cow.fi/order/0x010d2930e8dd2bf738fa9d2b88065114eb0120864913d80a22fd64bb1d580951) |
| 20:17:37 | wSOL → TTWO | market sell | Winner too late: creation blockhash expired | `0x8fb81e81…` [🐞](https://debug.barn.cow.fi/order/0x8fb81e81760f759d237f9dad161dd8af0b5243a86be2c772ce33cccb324e59b1) |
| 20:17:41 | wSOL → PST | market sell | Winner too late: creation blockhash expired | `0x739e9045…` [🐞](https://debug.barn.cow.fi/order/0x739e904548ed8042ad0d06a4a62337c158b6e3e68bb3dc985ee7fd90d5f21c49) |
| 20:17:43 | wSOL → QQQx | market sell | Winner too late: creation blockhash expired | `0x4ce6bfd1…` [🐞](https://debug.barn.cow.fi/order/0x4ce6bfd19f7bad89396d23bda979b5d2dc7bce96c7f8b79db5c2e1d9893b9108) |
| 20:17:49 | wSOL → SKR | market sell | Winner too late: creation blockhash expired | `0x77fbca1a…` [🐞](https://debug.barn.cow.fi/order/0x77fbca1a39c8d2d4fbfbc98a7a03f561b428db91c7fbe41171a78ae4dc945bec) |
| 20:17:52 | wSOL → MCDx | market sell | Winner too late: creation blockhash expired | `0x488483f9…` [🐞](https://debug.barn.cow.fi/order/0x488483f906c65dc56a6494c5b7e6926728c2eed0262212694c5b56b993683107) |
| 20:17:53 | wSOL → RUSH | market sell | Winner too late: creation blockhash expired | `0x59128ead…` [🐞](https://debug.barn.cow.fi/order/0x59128eadc11035fc43dceebacd5029c57436b42ed107244c006e1a66066ffe2b) |
| 20:17:57 | wSOL → ZBCN | market sell | Winner too late: creation blockhash expired | `0x50f6b0b2…` [🐞](https://debug.barn.cow.fi/order/0x50f6b0b293b8642157d68b3468aceaa527cc5024e48256ce57ef69995f444d4b) |
| 20:17:59 | wSOL → $WIF | market sell | Winner too late: creation blockhash expired | `0x1d1f98f9…` [🐞](https://debug.barn.cow.fi/order/0x1d1f98f961a42598dd0d9c5554903062db30bd8af76a541618823c0ceabf48e0) |
| 20:18:01 | wSOL → HOODx | market sell | Winner too late: creation blockhash expired | `0x77a44634…` [🐞](https://debug.barn.cow.fi/order/0x77a44634a5edaacdd39b811c62f7b0a80a10054459ff5df29ad292cef8c9ec8d) |
| 20:18:03 | wSOL → GP | market sell | Winner too late: creation blockhash expired | `0x2cace854…` [🐞](https://debug.barn.cow.fi/order/0x2cace8541af3d9f56ce7c8537542c9633933607a8129c41773deaa2a8f80fb49) |
| 20:18:07 | wSOL → AAPLx | market sell | Winner too late: creation blockhash expired | `0x245629fd…` [🐞](https://debug.barn.cow.fi/order/0x245629fde3ce96fcbeacda6a65cb71edbc67de252586e5bddd5d34cf74f8cf77) |
| 20:18:11 | wSOL → TSLAx | market sell | Winner too late: creation blockhash expired | `0xe433e2d4…` [🐞](https://debug.barn.cow.fi/order/0xe433e2d4f5329a8ae7b39299a834195b1cfa38fdb8e6b89b688aa6392d80a668) |
| 20:18:15 | wSOL → COINx | market sell | Winner too late: creation blockhash expired | `0xc4bf90ed…` [🐞](https://debug.barn.cow.fi/order/0xc4bf90ed310a20ba9357f42dfad3984e26b982a3db711d27ade589d5888b0fe9) |
| 20:18:17 | wSOL → MSTRx | market sell | Winner too late: creation blockhash expired | `0x93d9a04a…` [🐞](https://debug.barn.cow.fi/order/0x93d9a04a356c8ddfca8fe800e7d478da751b7b19042474dedbb6708ed4e8adbd) |
| 20:18:18 | wSOL → TTWO | market sell | Winner too late: creation blockhash expired | `0x021cd1fd…` [🐞](https://debug.barn.cow.fi/order/0x021cd1fdac529d9bb0876168171fa10e48f93b71e99c92d21c3e8023c61c3ce5) |
| 20:18:22 | wSOL → PST | market sell | Winner too late: creation blockhash expired | `0xcc56259d…` [🐞](https://debug.barn.cow.fi/order/0xcc56259d257e6eda4e910f47679a5e8778f3d712ddceb021f7796a07481774ea) |
| 20:18:30 | wSOL → SKR | market sell | Winner too late: creation blockhash expired | `0x8cc11519…` [🐞](https://debug.barn.cow.fi/order/0x8cc11519e684e54f4bfc84b4ecaa7d9e74b20f7a9f7920968771949425d4ce05) |
| 20:18:34 | wSOL → RUSH | market sell | Winner too late: creation blockhash expired | `0x1dbbc3fe…` [🐞](https://debug.barn.cow.fi/order/0x1dbbc3fe7a571256221414556c4099ca70e9704221f1745881f71873a86a50de) |
| 20:18:39 | wSOL → ZBCN | market sell | Winner too late: creation blockhash expired | `0x69ae9e6a…` [🐞](https://debug.barn.cow.fi/order/0x69ae9e6a111c5628290274ee84369a3a41829e0ee3ad2713acc95110f8daac0c) |
| 20:18:42 | wSOL → HOODx | market sell | Winner too late: creation blockhash expired | `0x12d26998…` [🐞](https://debug.barn.cow.fi/order/0x12d26998616075b496303da7b1f82ff3b2fc9c6a4175c89d0c82d482e2c9ac57) |
| 20:18:49 | wSOL → GRND | market sell | Winner too late: creation blockhash expired | `0x8dce82e6…` [🐞](https://debug.barn.cow.fi/order/0x8dce82e6d656823ec18ce118224b05e6d24ee0370e0058399940df0f1f2f1f77) |
| 20:18:53 | wSOL → 2Z | market sell | Winner too late: creation blockhash expired | `0x8d0e0209…` [🐞](https://debug.barn.cow.fi/order/0x8d0e02098ec4a2fe5a460d8a16c5b69f10eef0daf591ab07c0d070ea2dc0533d) |
| 20:18:57 | wSOL → wXRP | market sell | Winner too late: creation blockhash expired | `0x2fe97859…` [🐞](https://debug.barn.cow.fi/order/0x2fe978590840aa48ce0ae78ddcacd1711b77e8e51269ff6854c750db81925a8d) |
| 20:18:59 | wSOL → MSTRx | market sell | Winner too late: creation blockhash expired | `0xd7374239…` [🐞](https://debug.barn.cow.fi/order/0xd73742390feb02a0625400da678c265ed8460f73bf9ad0fb1ae7423632bb2250) |
| 20:19:01 | wSOL → DKNG | market sell | Winner too late: creation blockhash expired | `0x01e879d4…` [🐞](https://debug.barn.cow.fi/order/0x01e879d4b48c4618dae71833b9ff1179e52b987369ad213e6deba342db160873) |
| 20:19:05 | wSOL → PLTRx | market sell | Winner too late: creation blockhash expired | `0x3b2bd895…` [🐞](https://debug.barn.cow.fi/order/0x3b2bd89552db0ce1596e37c9f2513849a7f5311bb9d4e5983473538d79903040) |
| 20:19:09 | wSOL → eUSX | market sell | Winner too late: creation blockhash expired | `0x5b41810f…` [🐞](https://debug.barn.cow.fi/order/0x5b41810f9dba917e24fe8aa84950e01837243969224f5b53e6b11766b2200f26) |
| 20:19:29 | wSOL → SANC | market sell | Winner too late: creation blockhash expired | `0xa9e4a858…` [🐞](https://debug.barn.cow.fi/order/0xa9e4a8586d4d09e4a937bc42920ffaf42fc1bf25c7878f3aed536e287e2824a5) |
| 20:19:31 | wSOL → GRND | market sell | Winner too late: creation blockhash expired | `0x8f4b6c8f…` [🐞](https://debug.barn.cow.fi/order/0x8f4b6c8fdd03930e58661a0bc4d3dabe5ce574ccb53f0a9784786f4650967655) |
| 20:19:35 | wSOL → 2Z | market sell | Winner too late: creation blockhash expired | `0x28f0bf2b…` [🐞](https://debug.barn.cow.fi/order/0x28f0bf2b90d01f5b641a4eed5caf688ed3bd983bc8e558d820a96d695c5d610c) |
| 20:19:39 | wSOL → wXRP | market sell | Winner too late: creation blockhash expired | `0xcfb6359c…` [🐞](https://debug.barn.cow.fi/order/0xcfb6359c0c38887d3446ac371f6eb83b20d051afba53202064a0c15239aeda05) |
| 20:19:43 | wSOL → DKNG | market sell | Winner too late: creation blockhash expired | `0xe7165544…` [🐞](https://debug.barn.cow.fi/order/0xe7165544c4c51f6ea8e2719e2c83b76dcb17efff37fe73bb3bc54e98fbf5ce83) |
| 20:19:47 | wSOL → PLTRx | market sell | Winner too late: creation blockhash expired | `0x474f7cb4…` [🐞](https://debug.barn.cow.fi/order/0x474f7cb455c134357f782fc6809cc75b124175d46bc14fd325a43eed7959833e) |
| 20:19:50 | wSOL → HIMS | market sell | Winner too late: creation blockhash expired | `0x2d87e70b…` [🐞](https://debug.barn.cow.fi/order/0x2d87e70b5eb9f9aed28d9380499d36c15b46397bbf6822f061d59201c95a0d82) |
| 20:19:51 | wSOL → eUSX | market sell | Winner too late: creation blockhash expired | `0x6b4ea437…` [🐞](https://debug.barn.cow.fi/order/0x6b4ea4377ee6d58063ae5ef7209b009f3a15da3bfe9e677dcab79134d5b5b4ae) |
| 20:19:53 | wSOL → META | market sell | Winner too late: creation blockhash expired | `0xc93715d2…` [🐞](https://debug.barn.cow.fi/order/0xc93715d22e1a9e873471be05af025959661f7329adede32a80284a08200f3580) |
| 20:19:57 | wSOL → STRCx | market sell | Winner too late: creation blockhash expired | `0x164de2a8…` [🐞](https://debug.barn.cow.fi/order/0x164de2a88fb4bd21d28095614630d9809b1fab9e67fc9c8485707a15b38c11a0) |
| 20:20:01 | wSOL → NKE | market sell | Winner too late: creation blockhash expired | `0xad34bace…` [🐞](https://debug.barn.cow.fi/order/0xad34bacece82500f9f567be808390f0a2d7cb3418abc59d1c4d9e4d02d2ff545) |
| 20:20:11 | wSOL → SANC | market sell | Winner too late: creation blockhash expired | `0xadab1d6d…` [🐞](https://debug.barn.cow.fi/order/0xadab1d6da787e62f052e2fa9df25319275c7c3d24e7836e31116bc5d71b5f142) |
| 20:20:13 | wSOL → ENA | market sell | Winner too late: creation blockhash expired | `0x4ab7362e…` [🐞](https://debug.barn.cow.fi/order/0x4ab7362ed2c7f80ec313b7a329c1aa5f8b098ab83feca62bd9f64d249909d999) |
| 20:20:17 | wSOL → TRX | market sell | Winner too late: creation blockhash expired | `0x24271928…` [🐞](https://debug.barn.cow.fi/order/0x24271928521aee450ba20515a9c0529b986e9762df4cb32c14168d11ff7bec95) |
| 20:20:21 | wSOL → bSOL | market sell | Winner too late: creation blockhash expired | `0xb30c4aec…` [🐞](https://debug.barn.cow.fi/order/0xb30c4aec98530340135d817a5c5d84ae3f0bd78a9dcd39457a273b4ae7e9a86c) |
| 20:20:25 | wSOL → CLAW | market sell | Winner too late: creation blockhash expired | `0x25715024…` [🐞](https://debug.barn.cow.fi/order/0x257150244c69f25e374dab110af27dd4e8406a653b39b7d40e91797f254abb44) |
| 20:20:29 | wSOL → AMZNx | market sell | Winner too late: creation blockhash expired | `0x0c893cc3…` [🐞](https://debug.barn.cow.fi/order/0x0c893cc3c532f883d64645b716a127548812953571c82a593b13649ac65ca8f2) |
| 20:20:31 | wSOL → HIMS | market sell | Winner too late: creation blockhash expired | `0x94ef43cf…` [🐞](https://debug.barn.cow.fi/order/0x94ef43cfe282eab8d2105fd2c4bae0a25c41a6407fad8c4f278197dae8a01ccb) |
| 20:20:35 | wSOL → META | market sell | Winner too late: creation blockhash expired | `0x96460509…` [🐞](https://debug.barn.cow.fi/order/0x96460509bba84e4664ca4df3c15b7084b8665bcbbc1ef3d0131586f470975ec8) |
| 20:20:39 | wSOL → STRCx | market sell | Winner too late: creation blockhash expired | `0x6cb84d5b…` [🐞](https://debug.barn.cow.fi/order/0x6cb84d5bc109bced804ff37cc5508c3b01fedc963b7a3ea1149ce0c348f17758) |
| 20:20:41 | wSOL → RBLX | market sell | Winner too late: creation blockhash expired | `0x4cef445c…` [🐞](https://debug.barn.cow.fi/order/0x4cef445cea1040ce8862266f84859511c65fad90801000dcf9e05abf5e41f4c9) |
| 20:20:43 | wSOL → NKE | market sell | Winner too late: creation blockhash expired | `0x73b28279…` [🐞](https://debug.barn.cow.fi/order/0x73b28279acb750d59730db00708afbca2c3ca6b15ddcdbabe0be9fe1206afba0) |
| 20:20:45 | wSOL → AMC | market sell | Winner too late: creation blockhash expired | `0x2d4e9b3c…` [🐞](https://debug.barn.cow.fi/order/0x2d4e9b3cf6422db67c1b38654099d3cbb4d2e484733e86d6c44fcd8636afacd6) |
| 20:20:55 | wSOL → ENA | market sell | Winner too late: creation blockhash expired | `0xf24ab888…` [🐞](https://debug.barn.cow.fi/order/0xf24ab888b57eaeab45bb8f24a6914d02810f33aba781954ce796ec23dfc69308) |
| 20:20:59 | wSOL → TRX | market sell | Winner too late: creation blockhash expired | `0x05ef2db8…` [🐞](https://debug.barn.cow.fi/order/0x05ef2db88afcd9207f67267b6f9b844eda59bf229fcd84c6510cf4927cf42dd7) |
| 20:21:03 | wSOL → bSOL | market sell | Winner too late: creation blockhash expired | `0x0c1a0d02…` [🐞](https://debug.barn.cow.fi/order/0x0c1a0d028bda7a124cf36fcdeb1390b0ea9791fa1a7cef0c31638a74337aaea7) |
| 20:21:05 | wSOL → BABA | market sell | Winner too late: creation blockhash expired | `0x93bfc482…` [🐞](https://debug.barn.cow.fi/order/0x93bfc482c01a07fae42fc943d1a91499ac5850a1a304997363cd0a3189bc1f4f) |
| 20:21:07 | wSOL → CLAW | market sell | Winner too late: creation blockhash expired | `0x422f27b2…` [🐞](https://debug.barn.cow.fi/order/0x422f27b2a6ddb61d7e575e1e0288ea544ccea98d6611046ccaf588cdbd778f1e) |
| 20:21:09 | wSOL → DRAM | market sell | Winner too late: creation blockhash expired | `0x78455d4b…` [🐞](https://debug.barn.cow.fi/order/0x78455d4b2c0feeb78d3f96ee8a8eba399b4ae317980c173259c9454c525d3c39) |
| 20:21:11 | wSOL → AMZNx | market sell | Winner too late: creation blockhash expired | `0x96daf337…` [🐞](https://debug.barn.cow.fi/order/0x96daf337a609bcf01264b7c11cd268029cc0a0a35bb73518a7cf95b5538638a2) |
| 20:21:13 | wSOL → AAVE | market sell | Winner too late: creation blockhash expired | `0x3d2b1cf9…` [🐞](https://debug.barn.cow.fi/order/0x3d2b1cf9a1cb8cbbfe79a72c97acf12c01383dcbf6061fee75b559c1828b0241) |
| 20:21:17 | wSOL → hSOL | market sell | Winner too late: creation blockhash expired | `0x33e2c275…` [🐞](https://debug.barn.cow.fi/order/0x33e2c275f8e91d9fa6c08dcb960eff52711693778ff04397cac805ae4e6a545b) |
| 20:21:23 | wSOL → RBLX | market sell | Winner too late: creation blockhash expired | `0x9ba5ace7…` [🐞](https://debug.barn.cow.fi/order/0x9ba5ace77efbc3aa848af418c9ffffb9b57d1a6ba78f8774f89059b38beb155e) |
| 20:21:26 | wSOL → AMC | market sell | Winner too late: creation blockhash expired | `0x1ccd6712…` [🐞](https://debug.barn.cow.fi/order/0x1ccd6712a7c8ca9fbc1fd0a0b2df6330b3b4522f28b5f09ea35de895e0ada0c5) |
| 20:21:37 | wSOL → INJ | market sell | Winner too late: creation blockhash expired | `0x4027750b…` [🐞](https://debug.barn.cow.fi/order/0x4027750b1d1d90c9d8cc4b8351a0cf0117f591e5ac81164fddebb1a37760d1a9) |
| 20:21:46 | wSOL → BABA | market sell | Winner too late: creation blockhash expired | `0x274ac51a…` [🐞](https://debug.barn.cow.fi/order/0x274ac51aa3524f42d5d920ece738289547ece31e7f69693e0ed49295eaf772f2) |
| 20:21:50 | wSOL → DRAM | market sell | Winner too late: creation blockhash expired | `0x40f7ef0d…` [🐞](https://debug.barn.cow.fi/order/0x40f7ef0dc80d637e642fe035afc03b3b9b403793f1e0cd6cc310188c99270468) |
| 20:21:55 | wSOL → AAVE | market sell | Winner too late: creation blockhash expired | `0x8151bd76…` [🐞](https://debug.barn.cow.fi/order/0x8151bd76cb9bf2bb2bb1225f8148a64948c09a79beb8dbb01fd7155f9dc5a9c0) |
| 20:21:57 | wSOL → SNAP | market sell | Winner too late: creation blockhash expired | `0x828a85f1…` [🐞](https://debug.barn.cow.fi/order/0x828a85f112c7ef7d7be31b71c6b05162d9f3bedeaae50f9e4e181e5103c92e75) |
| 20:21:59 | wSOL → hSOL | market sell | Winner too late: creation blockhash expired | `0x8f52c1f3…` [🐞](https://debug.barn.cow.fi/order/0x8f52c1f3f06b56c796ac6188b2f8ef7e7c7525836bcbaa3bf9e5b41c1315307d) |
| 20:22:01 | wSOL → IBM | market sell | Winner too late: creation blockhash expired | `0x75f19bdc…` [🐞](https://debug.barn.cow.fi/order/0x75f19bdc1f244118958ec53bcf6bf4ec41e3dcb90c1d11c887e693e7d0339d30) |
| 20:22:10 | wSOL → USDY | market sell | Winner too late: creation blockhash expired | `0xff01b302…` [🐞](https://debug.barn.cow.fi/order/0xff01b302686f98a5ab0a34c1bdfeffce045c15f9d300d4f1b2a7c36cde275f64) |
| 20:22:13 | wSOL → RDDT | market sell | Winner too late: creation blockhash expired | `0x0fbc2fa8…` [🐞](https://debug.barn.cow.fi/order/0x0fbc2fa858d3410d11efd05a218321c31a1345a3b6d8f9aa0226ddad1e6f1bda) |
| 20:22:18 | wSOL → INJ | market sell | Winner too late: creation blockhash expired | `0xf7b195ac…` [🐞](https://debug.barn.cow.fi/order/0xf7b195ac313b6cabfe8a7d4414d14ccd8952c28c2c4121ed04b6227877bb87fd) |
| 20:22:29 | wSOL → AMD | market sell | Winner too late: creation blockhash expired | `0x0fd65016…` [🐞](https://debug.barn.cow.fi/order/0x0fd65016b139106f33aeb8d595758ffd8ae5cb5ab5cb9770db9ba65f637cd111) |
| 20:22:39 | wSOL → SNAP | market sell | Winner too late: creation blockhash expired | `0x17a5afc8…` [🐞](https://debug.barn.cow.fi/order/0x17a5afc81de9d86b03507ce0fa6efccc4fac942501ddb8b164d3656ace96c942) |
| 20:22:42 | wSOL → IBM | market sell | Winner too late: creation blockhash expired | `0x562b300c…` [🐞](https://debug.barn.cow.fi/order/0x562b300cdd115b1e1a53d2725e3b075e739f7dfb3e35309d07dc3b9c3d16ac06) |
| 20:22:52 | wSOL → USDY | market sell | Winner too late: creation blockhash expired | `0xad604375…` [🐞](https://debug.barn.cow.fi/order/0xad60437558088026051cf5c8858ec8c71729749042c3380c54fdc538fb2fb2fd) |
| 20:22:55 | wSOL → RDDT | market sell | Winner too late: creation blockhash expired | `0xe02a89de…` [🐞](https://debug.barn.cow.fi/order/0xe02a89ded776b01561437a0fe0082b6879ce214f899310ca3bfcf8166137a0e4) |
| 20:22:57 | wSOL → arc | market sell | Winner too late: creation blockhash expired | `0x472f742b…` [🐞](https://debug.barn.cow.fi/order/0x472f742b8e0af6eea4a5ac68249383de12fe27b226acf6a93ad7ce9cd1ffea6a) |
| 20:23:11 | wSOL → AMD | market sell | Winner too late: creation blockhash expired | `0xcf868317…` [🐞](https://debug.barn.cow.fi/order/0xcf868317b70e211387b6e09c9277fb89d1d8348c369961f859682b5605023732) |
| 20:23:17 | wSOL → Cake | market sell | Winner too late: creation blockhash expired | `0xa6bea0d3…` [🐞](https://debug.barn.cow.fi/order/0xa6bea0d3c4b6a618d40303eada7b99f33414d5cf6db8937854e1c5f02ece7f2a) |
| 20:23:33 | wSOL → DOOD | market sell | Winner too late: creation blockhash expired | `0x9d80f57d…` [🐞](https://debug.barn.cow.fi/order/0x9d80f57df3e84cda962a2c9559bcbaae24a7bd8b23471dfc769d9628dc9458e7) |
| 20:23:39 | wSOL → arc | market sell | Winner too late: creation blockhash expired | `0xafe8d885…` [🐞](https://debug.barn.cow.fi/order/0xafe8d885fa32630316b069655fc5ca6ec014dcf7652c958bbb1dd350354a4000) |
| 20:23:41 | wSOL → pwease | market sell | Winner too late: creation blockhash expired | `0x72c2fb26…` [🐞](https://debug.barn.cow.fi/order/0x72c2fb266752fcc48d6650a37a1c86c2a50b8deb87d02a0e669bd0c5856ac155) |
| 20:23:45 | wSOL → USDv | market sell | Winner too late: creation blockhash expired | `0xc7954a6b…` [🐞](https://debug.barn.cow.fi/order/0xc7954a6b4396cdc7bc9427e8b0e080ba089a4d0b3abdc61100dc2276df59e6f0) |
| 20:23:53 | wSOL → ME | market sell | Winner too late: creation blockhash expired | `0xc5acb2ae…` [🐞](https://debug.barn.cow.fi/order/0xc5acb2ae0b1fb5108d674abb0ea500b75023da6f38b1720c903c1876d782b411) |
| 20:23:58 | wSOL → Cake | market sell | Winner too late: creation blockhash expired | `0x94e213e7…` [🐞](https://debug.barn.cow.fi/order/0x94e213e7a28b346a1794896ee475d02cfba3099070abc3590b527e5b9e8cc8c5) |
| 20:24:09 | wSOL → USO | market sell | Winner too late: creation blockhash expired | `0xfe0a8370…` [🐞](https://debug.barn.cow.fi/order/0xfe0a8370d1b62e3b2a186e8e40cae9ef1b757cf7bfbc56aabf4a4af68c4d282b) |
| 20:24:13 | wSOL → SLX | market sell | Winner too late: creation blockhash expired | `0xef87d812…` [🐞](https://debug.barn.cow.fi/order/0xef87d8127e3038411ade35d4fedbd83c2b80484e5ee2f635dcd70af9321001bd) |
| 20:24:15 | wSOL → DOOD | market sell | Winner too late: creation blockhash expired | `0x3d5a1c4a…` [🐞](https://debug.barn.cow.fi/order/0x3d5a1c4ab33da7c7d3ebf1b53e7e6cd1f17fb044e8bd1d07831baf7959ba2831) |
| 20:24:21 | wSOL → CARS | market sell | Winner too late: creation blockhash expired | `0x2d222323…` [🐞](https://debug.barn.cow.fi/order/0x2d2223238d630114815ed9b00df1641785dd0880045018d235db2bd8a528388e) |
| 20:24:23 | wSOL → pwease | market sell | Winner too late: creation blockhash expired | `0xa00f4847…` [🐞](https://debug.barn.cow.fi/order/0xa00f484733977a24db98c76ecd5d5e82e362c0809bf4068478ce909e3a1164cf) |
| 20:24:27 | wSOL → USDv | market sell | Winner too late: creation blockhash expired | `0xc5b205d8…` [🐞](https://debug.barn.cow.fi/order/0xc5b205d8d96118ac7059a7b0a48e382ae5ab82cfa4a10cff4e5ae6b53f6efdca) |
| 20:24:35 | wSOL → ME | market sell | Winner too late: creation blockhash expired | `0x7b542ca3…` [🐞](https://debug.barn.cow.fi/order/0x7b542ca36b909ab0ff6d01b82cecf4fe1813c913356559a69ef09e6d66087b68) |
| 20:24:37 | wSOL → KOx | market sell | Winner too late: creation blockhash expired | `0xf9775ff2…` [🐞](https://debug.barn.cow.fi/order/0xf9775ff29977d80261926bd20c41136c545d3d752791b596416083d58a4933b0) |
| 20:24:41 | wSOL → BIRB | market sell | Winner too late: creation blockhash expired | `0x85effff6…` [🐞](https://debug.barn.cow.fi/order/0x85effff6b5bc8a2183f76d9aa99b12f097f81afbf00b7264fd6735a0bb854ec1) |
| 20:24:50 | wSOL → USO | market sell | Winner too late: creation blockhash expired | `0x453097de…` [🐞](https://debug.barn.cow.fi/order/0x453097de96d63e5fa8cb590af04c07dc67aba58fb2e8ab19d18730ab515f4ae5) |
| 20:24:54 | wSOL → SLX | market sell | Winner too late: creation blockhash expired | `0x3f7b4231…` [🐞](https://debug.barn.cow.fi/order/0x3f7b42316dc348eccfeef3e30b0d6a17b745e1e5d57e4d5ddbfc4c0b1f833b1a) |
| 20:25:00 | wSOL → CARS | market sell | Winner too late: creation blockhash expired | `0x995ba601…` [🐞](https://debug.barn.cow.fi/order/0x995ba601436957af43868f031da4725d403e8d89a0947431707e5b0ed5d4d5e6) |
| 20:25:05 | wSOL → 67 | market sell | Winner too late: creation blockhash expired | `0xa5e79e00…` [🐞](https://debug.barn.cow.fi/order/0xa5e79e00b9cd69b64aacd2bd37f8911b5e0470751d9edf6d4f18c97bebf5af7f) |
| 20:25:19 | wSOL → KOx | market sell | Winner too late: creation blockhash expired | `0xbb729077…` [🐞](https://debug.barn.cow.fi/order/0xbb729077fd66743865dd55f1faa187fd35c7895d615f21b686a0daff83190128) |
| 20:25:23 | wSOL → BIRB | market sell | Winner too late: creation blockhash expired | `0xe30950c8…` [🐞](https://debug.barn.cow.fi/order/0xe30950c820213b3f3bba0db23dc56eba09724921f5f15ebb905b7e61b1e09aa1) |
| 20:25:33 | wSOL → SOLANGELES | market sell | Winner too late: creation blockhash expired | `0xbe8eed45…` [🐞](https://debug.barn.cow.fi/order/0xbe8eed4558086bef4f9869d3b043ac90e53058f7fb050f924fabe7c4e1a6fa8d) |
| 20:25:41 | wSOL → CYPH | market sell | Winner too late: creation blockhash expired | `0x78281a02…` [🐞](https://debug.barn.cow.fi/order/0x78281a0294ea0e5463fe694d5fcf2b08330c391267edbe86e457a45f9a13b114) |
| 20:25:47 | wSOL → 67 | market sell | Winner too late: creation blockhash expired | `0xd5dd1061…` [🐞](https://debug.barn.cow.fi/order/0xd5dd10610ad4441c304e567ada66fb84d0b15b89c80670232bd641cb42529768) |
| 20:26:09 | wSOL → NATIX | market sell | Winner too late: creation blockhash expired | `0x20439776…` [🐞](https://debug.barn.cow.fi/order/0x20439776fe87fe81ca2984630126764637b10cdbb3ff339b6ca50fc62162b029) |
| 20:26:15 | wSOL → SOLANGELES | market sell | Winner too late: creation blockhash expired | `0xa821a280…` [🐞](https://debug.barn.cow.fi/order/0xa821a280ff21d0051b76b5698135391115e84aecb24684a55fd718d68783854d) |
| 20:26:21 | wSOL → MRNA | market sell | Winner too late: creation blockhash expired | `0x6f953950…` [🐞](https://debug.barn.cow.fi/order/0x6f953950b96babd724b61cfbf76573bade1fa852a627b7876e3fbf698e6ac243) |
| 20:26:23 | wSOL → CYPH | market sell | Winner too late: creation blockhash expired | `0xd4b05ce1…` [🐞](https://debug.barn.cow.fi/order/0xd4b05ce1b39a58df65acdd7cd2ee9887b629926c6c1bb49c4c3b7bcb7c591e6c) |
| 20:26:33 | wSOL → hyloSOL | market sell | Winner too late: creation blockhash expired | `0xb5a93996…` [🐞](https://debug.barn.cow.fi/order/0xb5a939965879ae964086407b0d2072b43efe67e5b37982b77726227e1b389cdb) |
| 20:26:41 | wSOL → MRVL | market sell | Winner too late: creation blockhash expired | `0xeefd272e…` [🐞](https://debug.barn.cow.fi/order/0xeefd272e335036625275ad4600049566e1dde754570127afb4090f0466c826d7) |
| 20:26:49 | wSOL → W | market sell | Winner too late: creation blockhash expired | `0x1eab7667…` [🐞](https://debug.barn.cow.fi/order/0x1eab7667326b793387eeca70f76c4fc220c370d601f32a27c9064dcb5c65fb2c) |
| 20:26:59 | wSOL → bonkSOL | market sell | Winner too late: creation blockhash expired | `0x4e4d9589…` [🐞](https://debug.barn.cow.fi/order/0x4e4d9589e3cc61bd4f7cd6623d2e2d194850ff3c67276b520185ca6a9a549cd5) |
| 20:27:01 | wSOL → IO | market sell | Winner too late: creation blockhash expired | `0xe777ad06…` [🐞](https://debug.barn.cow.fi/order/0xe777ad062175088b9fb90bdeb9ccb7a9d43f3267f105609e02a7614108419b2c) |
| 20:27:03 | wSOL → MRNA | market sell | Winner too late: creation blockhash expired | `0x556f3149…` [🐞](https://debug.barn.cow.fi/order/0x556f31498d8f91ecfb27a6d1df36a35ad4c26090e008dc8cac614a0af73e4c94) |
| 20:27:09 | wSOL → HEEBOO | market sell | Winner too late: creation blockhash expired | `0xc24d65c2…` [🐞](https://debug.barn.cow.fi/order/0xc24d65c2c5f55a8a5cc9d45a31ef1aa4f9f9279995d888b1391540eb9676037d) |
| 20:27:15 | wSOL → hyloSOL | market sell | Winner too late: creation blockhash expired | `0xf3a1aa8e…` [🐞](https://debug.barn.cow.fi/order/0xf3a1aa8ebacb79901cacb7190309a1896401c7d076cae0d7e0dc136767d8e752) |
| 20:27:21 | wSOL → RETARDIO | market sell | Winner too late: creation blockhash expired | `0xdbf6130d…` [🐞](https://debug.barn.cow.fi/order/0xdbf6130dd8426c2e858cd5537eeee1198c26c06672467ac06513572f470cb6d7) |
| 20:27:23 | wSOL → MRVL | market sell | Winner too late: creation blockhash expired | `0xb7145631…` [🐞](https://debug.barn.cow.fi/order/0xb7145631877a9bbd85f7253faade8a5084b7eb532a20f303b33c1790a5f8074a) |
| 20:27:31 | wSOL → W | market sell | Winner too late: creation blockhash expired | `0xb337d5da…` [🐞](https://debug.barn.cow.fi/order/0xb337d5da402abf3bffe1904ca4b61e8f01548fc963fe0ee84f549d70e660cce3) |
| 20:27:43 | wSOL → IO | market sell | Winner too late: creation blockhash expired | `0xbb5b0dc1…` [🐞](https://debug.barn.cow.fi/order/0xbb5b0dc1984f6250b8fbffcf1c40e988755b175f17ea79f6dbc7f79a9aa4c0f1) |
| 20:27:49 | wSOL → DITH | market sell | Winner too late: creation blockhash expired | `0x853f16b6…` [🐞](https://debug.barn.cow.fi/order/0x853f16b6463762740db768c616505e6d928886a0039eed524949a8cf70534606) |
| 20:28:03 | wSOL → RETARDIO | market sell | Winner too late: creation blockhash expired | `0x898cc991…` [🐞](https://debug.barn.cow.fi/order/0x898cc991d59a383991eefe9a8b4e78f96b69815b094a3e18e174122c204fcecb) |
| 20:28:05 | wSOL → DADDY | market sell | Winner too late: creation blockhash expired | `0x041f262b…` [🐞](https://debug.barn.cow.fi/order/0x041f262b9f63f9d21eaf8af8a0a27325fb96a38d522549b2a435fef0e8c58d77) |
| 20:28:09 | wSOL → URANUS | market sell | Winner too late: creation blockhash expired | `0xeb7e590a…` [🐞](https://debug.barn.cow.fi/order/0xeb7e590ad84fe883c927471a797dcf9b988c925ee4bb517935548cc6e45062f2) |
| 20:28:31 | wSOL → DITH | market sell | Winner too late: creation blockhash expired | `0x8ae66d9a…` [🐞](https://debug.barn.cow.fi/order/0x8ae66d9a2b55d2e0669afdff7c77dc9566187adae8f6d1cebef9347476adb53c) |
| 20:28:33 | wSOL → SOLO | market sell | Winner too late: creation blockhash expired | `0x0e71b306…` [🐞](https://debug.barn.cow.fi/order/0x0e71b30695d7183df42c618359f291ab4abc6ee0ac48807c36b911de7a3b05f9) |
| 20:28:47 | wSOL → DADDY | market sell | Winner too late: creation blockhash expired | `0xeba0ab97…` [🐞](https://debug.barn.cow.fi/order/0xeba0ab97ed392ca588bf74e274dbafefaff8bc8262bcffed36a1cea8fda218ad) |
| 20:28:49 | wSOL → PUPS | market sell | Winner too late: creation blockhash expired | `0x7b02de2f…` [🐞](https://debug.barn.cow.fi/order/0x7b02de2f7fbf66325a7b366c82ec39097ad3f487e8e4508c20774a2df7096e0d) |
| 20:28:51 | wSOL → URANUS | market sell | Winner too late: creation blockhash expired | `0x850a0c3e…` [🐞](https://debug.barn.cow.fi/order/0x850a0c3ef1eb1f1fbd2929d8f16c3cf81b2137ae0147ff1372c41a21f73c865a) |
| 20:29:15 | wSOL → SOLO | market sell | Winner too late: creation blockhash expired | `0x541923da…` [🐞](https://debug.barn.cow.fi/order/0x541923dac9f1f650dbc516a6402dcb469ce80347f096268847e4cf8ed37972c8) |
| 20:29:21 | wSOL → sUSD.infra | market sell | Winner too late: creation blockhash expired | `0x8e68bc27…` [🐞](https://debug.barn.cow.fi/order/0x8e68bc27458657bb0eec7f5b5c3e547a2b6bd963e3cdc7f323ee968b050488e0) |
| 20:29:25 | wSOL → ARX | market sell | Winner too late: creation blockhash expired | `0xbe22622c…` [🐞](https://debug.barn.cow.fi/order/0xbe22622c1e7406fe833b72da030342e2eee15ea1e898d1007016bdddd1305b76) |
| 20:29:29 | wSOL → vSOL | market sell | Winner too late: creation blockhash expired | `0xc938a84e…` [🐞](https://debug.barn.cow.fi/order/0xc938a84e1dcfa863bb9378298d157ea56b47405b075be68decf7315a57a6b411) |
| 20:29:30 | wSOL → PUPS | market sell | Winner too late: creation blockhash expired | `0xa0c928d5…` [🐞](https://debug.barn.cow.fi/order/0xa0c928d59b6e4fd31106b41ae6fb28d527bb71285f766ba5081de4ed2e9600bc) |
| 20:29:33 | wSOL → PBTC | market sell | Winner too late: creation blockhash expired | `0xf688ae5e…` [🐞](https://debug.barn.cow.fi/order/0xf688ae5ef802f22879dbd6c466287bf1fd8b1807a75da141d7f064608b865afa) |
| 20:29:37 | wSOL → TAI | market sell | Winner too late: creation blockhash expired | `0x784d4537…` [🐞](https://debug.barn.cow.fi/order/0x784d45374035d6900e9adb6f0687f8aa38135df9d6a09ee2760cfc178b644ad2) |
| 20:30:03 | wSOL → sUSD.infra | market sell | Winner too late: creation blockhash expired | `0xe1d808a7…` [🐞](https://debug.barn.cow.fi/order/0xe1d808a76d4f664903e917b709b3d8858a6af3b876ce8014c8fadf2f645291eb) |
| 20:30:05 | wSOL → SPSC | market sell | Winner too late: creation blockhash expired | `0x3156fd84…` [🐞](https://debug.barn.cow.fi/order/0x3156fd844fe22338325f485db807c78401c6cd75c61d0e162d7465908b509c00) |
| 20:30:06 | wSOL → ARX | market sell | Winner too late: creation blockhash expired | `0x2924a022…` [🐞](https://debug.barn.cow.fi/order/0x2924a02275364c42a2c889ec0edd387a4faf7da73bafc4f240427b87d3fbb5eb) |
| 20:30:14 | wSOL → PBTC | market sell | Winner too late: creation blockhash expired | `0xb336d56a…` [🐞](https://debug.barn.cow.fi/order/0xb336d56a7caa76b8299ab364b60fe8246f6b7f75748e840f5a63a09565aa970a) |
| 20:30:16 | wSOL → TAI | market sell | Winner too late: creation blockhash expired | `0xd6cfd045…` [🐞](https://debug.barn.cow.fi/order/0xd6cfd04537dc26d3a6543eb4f38426c89bc8ff78a949581d4073a5dfcfb43761) |
| 20:30:17 | wSOL → sSOL | market sell | Winner too late: creation blockhash expired | `0x3b5fffec…` [🐞](https://debug.barn.cow.fi/order/0x3b5fffec4fd1969d1de4fee4a8c69421816c7aed74acc74e1167967ff278e6bc) |
| 20:30:21 | wSOL → dSOL | market sell | Winner too late: creation blockhash expired | `0x047ebc7d…` [🐞](https://debug.barn.cow.fi/order/0x047ebc7db8155f72ea0ff8db393235bef469007c3793916f8b1af5ccc22bafa6) |
| 20:30:29 | wSOL → LST | market sell | Winner too late: creation blockhash expired | `0x7a7ebc9c…` [🐞](https://debug.barn.cow.fi/order/0x7a7ebc9c121cb9834573a7124527461f5419ea78efa6cb2de857a8d9c3f325d1) |
| 20:30:47 | wSOL → SPSC | market sell | Winner too late: creation blockhash expired | `0xe58c17bf…` [🐞](https://debug.barn.cow.fi/order/0xe58c17bfbc3f7982cc74a0a24295b29848b557771b4760bad4688854b930dd34) |
| 20:30:58 | wSOL → sSOL | market sell | Winner too late: creation blockhash expired | `0x778ad04f…` [🐞](https://debug.barn.cow.fi/order/0x778ad04f7659e274e0c6a7cedc1efd94ffa3d796a951b5317370eee63e0b31f2) |
| 20:31:03 | wSOL → dSOL | market sell | Winner too late: creation blockhash expired | `0x96e3da23…` [🐞](https://debug.barn.cow.fi/order/0x96e3da230290a9dad5dec01672b077b1cfacd91791e24ce3bbff69dc07a00da0) |
| 20:31:05 | wSOL → MF | market sell | Winner too late: creation blockhash expired | `0x45746e12…` [🐞](https://debug.barn.cow.fi/order/0x45746e124cc1883e843ec48741f18e7c8e3aea68e04d5b85cb419f0382e92c66) |
| 20:31:11 | wSOL → LST | market sell | Winner too late: creation blockhash expired | `0x189d32e1…` [🐞](https://debug.barn.cow.fi/order/0x189d32e1afca488d0a18126994a4ecb909842aed9c1538267f333aef6a6d0a51) |
| 20:31:13 | wSOL → AUDIO | market sell | Winner too late: creation blockhash expired | `0x95273100…` [🐞](https://debug.barn.cow.fi/order/0x952731007cb68459395703ec2583d7b127c377f51a3d37e4c0df1d585c877390) |
| 20:31:17 | wSOL → WINGS | market sell | Winner too late: creation blockhash expired | `0xcccfb19b…` [🐞](https://debug.barn.cow.fi/order/0xcccfb19b26673be7f4c1ffc17c3ac2849e14142afb2f209baf4d9c0a17419f63) |
| 20:31:25 | wSOL → lanternSOL | market sell | Winner too late: creation blockhash expired | `0x905a5a7b…` [🐞](https://debug.barn.cow.fi/order/0x905a5a7b7ee952282e3c6eced8f888bc2c30399677ddd9e8b9552dafa5d804a8) |
| 20:31:37 | wSOL → ATR | market sell | Winner too late: creation blockhash expired | `0x4c7d49b9…` [🐞](https://debug.barn.cow.fi/order/0x4c7d49b9046b35fd4f43272563b724b59e284569fc1e22eeba530bc5eb50a201) |
| 20:31:45 | wSOL → ISC | market sell | Winner too late: creation blockhash expired | `0x7f9d4237…` [🐞](https://debug.barn.cow.fi/order/0x7f9d42373f40063dc89867bcfaa1cb5682467d6e3f295b24f344667786c37eff) |
| 20:31:46 | wSOL → MF | market sell | Winner too late: creation blockhash expired | `0x1f2ef43f…` [🐞](https://debug.barn.cow.fi/order/0x1f2ef43f9041603c206a53b0a14c38aceeb5c3730abc3ad2f45b79ba5f0f5e3f) |
| 20:31:49 | wSOL → ZAMA | market sell | Winner too late: creation blockhash expired | `0xfd6c514c…` [🐞](https://debug.barn.cow.fi/order/0xfd6c514cb549c3413a5878e06b5e148573d17b55d471856795af67edadf70939) |
| 20:31:55 | wSOL → AUDIO | market sell | Winner too late: creation blockhash expired | `0x0628e699…` [🐞](https://debug.barn.cow.fi/order/0x0628e6998100313dbabae393d38677b0e6cb7184a3d72b40dbfbbfcdd5045eb1) |
| 20:31:57 | wSOL → EUROP | market sell | Winner too late: creation blockhash expired | `0x77550f36…` [🐞](https://debug.barn.cow.fi/order/0x77550f36c7d4aa92b2f44dccc2b957623f332a5d875154f27ee1b7480c1f01cf) |
| 20:31:59 | wSOL → WINGS | market sell | Winner too late: creation blockhash expired | `0x5161ba7b…` [🐞](https://debug.barn.cow.fi/order/0x5161ba7bc71fd90929465a1d20457c354c90f46750dad8a48c000c040f320254) |
| 20:32:07 | wSOL → lanternSOL | market sell | Winner too late: creation blockhash expired | `0x4f614b39…` [🐞](https://debug.barn.cow.fi/order/0x4f614b3924f8b45f66e36cacfe809ff2d2dbb9c17e94e9e630c2f0ce93660fa9) |
| 20:32:19 | wSOL → ATR | market sell | Winner too late: creation blockhash expired | `0x80293346…` [🐞](https://debug.barn.cow.fi/order/0x80293346f98b9ca4633b68d664a341ba30e83b5d863cf75311cb2b1bbcb28a93) |
| 20:32:21 | wSOL → AURY | market sell | Winner too late: creation blockhash expired | `0x7c6516fe…` [🐞](https://debug.barn.cow.fi/order/0x7c6516feaba6b1d66fb57696b3e773692b683930ec108635d0ae8f3e8971d8f9) |
| 20:32:25 | wSOL → VCHF | market sell | Winner too late: creation blockhash expired | `0x99d026c4…` [🐞](https://debug.barn.cow.fi/order/0x99d026c4226127e2f97f7c68280b343436fab82f2dd03e40e851804e6fcde73a) |
| 20:32:25 | wSOL → JSOL | market sell | Winner too late: creation blockhash expired | `0x51b2b8c1…` [🐞](https://debug.barn.cow.fi/order/0x51b2b8c14956d1efe5e007d23ecfc1b43ccb962939f38c88501611ec081a68b9) |
| 20:32:26 | wSOL → ISC | market sell | Winner too late: creation blockhash expired | `0xdc961fed…` [🐞](https://debug.barn.cow.fi/order/0xdc961fed75226bfa172d816d8228211523bcec5397659735b859021a89df2056) |
| 20:32:31 | wSOL → ZAMA | market sell | Winner too late: creation blockhash expired | `0xc1959fdd…` [🐞](https://debug.barn.cow.fi/order/0xc1959fdd7d7de4930ab0a53599005a15baab08c8359e82203a82c9088013629e) |
| 20:32:38 | wSOL → EUROP | market sell | Winner too late: creation blockhash expired | `0x096a0215…` [🐞](https://debug.barn.cow.fi/order/0x096a0215fdd8eeb8d3c82f6c08292dca94f5b9996084abbeca14ca1271d18504) |
| 20:32:49 | wSOL → MNGO | market sell | Winner too late: creation blockhash expired | `0x1ea9ba27…` [🐞](https://debug.barn.cow.fi/order/0x1ea9ba27276c1f01c4fb33118e2cda2e2965e8963979c6ba4e8fafd35dbe9a8a) |
| 20:33:01 | wSOL → AVICI | market sell | Winner too late: creation blockhash expired | `0x4fc9cf1a…` [🐞](https://debug.barn.cow.fi/order/0x4fc9cf1a28a987ba4f6fa223016a326e4397808a9e3c49f0bed6fceb5f988db9) |
| 20:33:03 | wSOL → AURY | market sell | Winner too late: creation blockhash expired | `0x1cb6986c…` [🐞](https://debug.barn.cow.fi/order/0x1cb6986c99e4aa8db10e5030aac88c9382c56ad220bb2e57233debbaa32a27f9) |
| 20:33:06 | wSOL → VCHF | market sell | Winner too late: creation blockhash expired | `0xaa088cc6…` [🐞](https://debug.barn.cow.fi/order/0xaa088cc6b7a182b93f9278c2bdaf356d9f5ec97008e729b04513ecba203567d1) |
| 20:33:31 | wSOL → MNGO | market sell | Winner too late: creation blockhash expired | `0x15a9a007…` [🐞](https://debug.barn.cow.fi/order/0x15a9a0070a74df9f7f6c56b85e7ec080353655019cef11be1d2c9ab4e13f8d4f) |
| 20:33:42 | wSOL → AVICI | market sell | Winner too late: creation blockhash expired | `0x51dea0b3…` [🐞](https://debug.barn.cow.fi/order/0x51dea0b3f0609c9cca9ea1e40c2a85fa5db170f133ee9ba29225d893c19d603c) |
