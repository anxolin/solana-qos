# Solana QoS report: 2026-10-27-14-56-token-universe__test_02_cow-swap

Barn, orders created between `2026-10-27T14:56:28.717Z` and `2026-10-27T15:18:28.192Z`. Data fetched 2026-10-27T15:40:29+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 744 |
| Orders executed | **743** (99.9%) |
| Sponsored orders never created on-chain | 1 (0.1%) |
| Traders | 30 |
| Settlement txs | 743 |

## Scenario

542 of 558 scenario rows completed. 0 retries, 15 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 14:56:28 | 1 | 1 | sell 0.005 SOL → 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN | filled | 10s | 1 |  |
| 14:56:39 | 2 | 1 | sell 0.267 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN → SOL | filled | 20s | 2 |  |
| 14:56:32 | 3 | 2 | sell 0.005 SOL → DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF | filled | 7s | 1 |  |
| 14:56:39 | 4 | 2 | sell 0.0597 DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF → SOL | filled | 23s | 2 |  |
| 14:56:36 | 5 | 3 | sell 0.005 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | filled | 7s | 1 |  |
| 14:56:44 | 6 | 3 | sell 0.000681 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu → SOL | filled | 26s | 2 |  |
| 14:56:40 | 7 | 4 | sell 0.005 SOL → PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL | filled | 7s | 1 |  |
| 14:56:47 | 8 | 4 | sell 290 PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL → SOL | filled | 4s | 1 |  |
| 14:56:44 | 9 | 5 | sell 0.005 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 7s | 1 |  |
| 14:56:51 | 10 | 5 | sell 0.0029 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 → SOL | filled | 17s | 2 |  |
| 14:56:48 | 11 | 6 | sell 0.005 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | filled | 10s | 1 |  |
| 14:56:58 | 12 | 6 | sell 0.000917 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX → SOL | filled | 26s | 2 |  |
| 14:56:52 | 13 | 7 | sell 0.005 SOL → 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E | filled | 7s | 1 |  |
| 14:57:00 | 14 | 7 | sell 0.493 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E → SOL | failed | 7s | 0 | acquire 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 14:56:56 | 15 | 8 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 7s | 1 |  |
| 14:57:03 | 16 | 8 | sell 0.00128 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re → SOL | filled | 20s | 2 |  |
| 14:57:00 | 17 | 9 | sell 0.005 SOL → BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump | filled | 7s | 1 |  |
| 14:57:07 | 18 | 9 | sell 53.1 BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump → SOL | filled | 10s | 1 |  |
| 14:57:04 | 19 | 10 | sell 0.005 SOL → SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH | filled | 10s | 1 |  |
| 14:57:14 | 20 | 10 | sell 0.000308 SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH → SOL | filled | 17s | 2 |  |
| 14:57:08 | 21 | 11 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 10s | 1 |  |
| 14:57:19 | 22 | 11 | sell 149000 DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 → SOL | filled | 20s | 2 |  |
| 14:57:12 | 23 | 12 | sell 0.005 SOL → Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs | filled | 7s | 1 |  |
| 14:57:19 | 24 | 12 | sell 0.783 Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs → SOL | filled | 17s | 2 |  |
| 14:57:16 | 25 | 13 | sell 0.005 SOL → orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE | filled | 7s | 1 |  |
| 14:57:24 | 26 | 13 | sell 0.207 orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE → SOL | filled | 10s | 1 |  |
| 14:57:20 | 27 | 14 | sell 0.005 SOL → jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL | filled | 7s | 1 |  |
| 14:57:27 | 28 | 14 | sell 0.962 jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL → SOL | filled | 26s | 2 |  |
| 14:57:24 | 29 | 15 | sell 0.005 SOL → Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump | filled | 7s | 1 |  |
| 14:57:31 | 30 | 15 | sell 157 Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump → SOL | filled | 7s | 1 |  |
| 14:57:28 | 31 | 16 | sell 0.005 SOL → J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump | filled | 10s | 1 |  |
| 14:57:38 | 32 | 16 | sell 74.4 J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump → SOL | failed | 42s | 1 | main expired |
| 14:57:32 | 33 | 17 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 7s | 1 |  |
| 14:57:39 | 34 | 17 | sell 0.44 HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr → SOL | filled | 48s | 2 |  |
| 14:57:36 | 35 | 18 | sell 0.005 SOL → J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr | filled | 7s | 1 |  |
| 14:57:43 | 36 | 18 | sell 1.31 J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr → SOL | filled | 20s | 2 |  |
| 14:57:40 | 37 | 19 | sell 0.005 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 7s | 1 |  |
| 14:57:47 | 38 | 19 | sell 0.000482 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 → SOL | filled | 32s | 2 |  |
| 14:57:44 | 39 | 20 | sell 0.005 SOL → USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA | filled | 7s | 1 |  |
| 14:57:51 | 40 | 20 | sell 0.492 USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA → SOL | filled | 20s | 2 |  |
| 14:57:48 | 41 | 21 | sell 0.005 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | filled | 16s | 1 |  |
| 14:58:05 | 42 | 21 | sell 0.0014 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN → SOL | filled | 17s | 2 |  |
| 14:57:52 | 43 | 22 | sell 0.005 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | filled | 13s | 1 |  |
| 14:58:06 | 44 | 22 | sell 0.0186 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc → SOL | filled | 23s | 2 |  |
| 14:57:56 | 45 | 23 | sell 0.005 SOL → METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m | filled | 10s | 1 |  |
| 14:58:06 | 46 | 23 | sell 10 METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m → SOL | failed | 7s | 0 | acquire METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 14:58:00 | 47 | 24 | sell 0.005 SOL → Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump | filled | 10s | 1 |  |
| 14:58:11 | 48 | 24 | sell 61.2 Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump → SOL | filled | 13s | 1 |  |
| 14:58:04 | 49 | 25 | sell 0.005 SOL → DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 | filled | 13s | 1 |  |
| 14:58:17 | 50 | 25 | sell 57.4 DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 → SOL | filled | 4s | 1 |  |
| 14:58:08 | 51 | 26 | sell 0.005 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 14:58:10 | 52 | 26 | sell 0.00571 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | filled | 18s | 2 |  |
| 14:58:12 | 53 | 27 | sell 0.005 SOL → DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 | filled | 7s | 1 |  |
| 14:58:20 | 54 | 27 | sell 25.9 DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 → SOL | filled | 39s | 2 |  |
| 14:58:16 | 55 | 28 | sell 0.005 SOL → nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 | filled | 7s | 1 |  |
| 14:58:23 | 56 | 28 | sell 0.836 nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 → SOL | filled | 16s | 1 |  |
| 14:58:20 | 57 | 29 | sell 0.005 SOL → BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T | filled | 7s | 1 |  |
| 14:58:27 | 58 | 29 | sell 0.0173 BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T → SOL | filled | 26s | 2 |  |
| 14:58:24 | 59 | 30 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 10s | 1 |  |
| 14:58:34 | 60 | 30 | sell 0.00309 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm → SOL | failed | 7s | 0 | acquire 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 14:58:28 | 61 | 1 | sell 0.005 SOL → KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS | filled | 10s | 1 |  |
| 14:58:38 | 62 | 1 | sell 14.2 KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS → SOL | filled | 29s | 2 |  |
| 14:58:32 | 63 | 2 | sell 0.005 SOL → 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx | filled | 4s | 1 |  |
| 14:58:36 | 64 | 2 | sell 0.242 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx → SOL | filled | 7s | 1 |  |
| 14:58:36 | 65 | 3 | sell 0.005 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | filled | 7s | 1 |  |
| 14:58:43 | 66 | 3 | sell 0.000655 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ → SOL | filled | 23s | 2 |  |
| 14:58:40 | 67 | 4 | sell 0.005 SOL → 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump | filled | 7s | 1 |  |
| 14:58:47 | 68 | 4 | sell 61.9 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump → SOL | filled | 4s | 1 |  |
| 14:58:44 | 69 | 5 | sell 0.005 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | filled | 7s | 1 |  |
| 14:58:51 | 70 | 5 | sell 0.00206 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 → SOL | filled | 17s | 2 |  |
| 14:58:48 | 71 | 6 | sell 0.005 SOL → PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b | filled | 10s | 1 |  |
| 14:58:59 | 72 | 6 | sell 10.9 PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b → SOL | filled | 10s | 1 |  |
| 14:58:52 | 73 | 7 | sell 0.005 SOL → CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn | filled | 4s | 1 |  |
| 14:58:56 | 74 | 7 | sell 5.93e-06 CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn → SOL | filled | 23s | 2 |  |
| 14:58:56 | 75 | 8 | sell 0.005 SOL → 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk | filled | 7s | 1 |  |
| 14:59:04 | 76 | 8 | sell 0.88 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk → SOL | filled | 10s | 1 |  |
| 14:59:00 | 77 | 9 | sell 0.005 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | filled | 14s | 1 |  |
| 14:59:14 | 78 | 9 | sell 0.00147 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp → SOL | filled | 20s | 2 |  |
| 14:59:04 | 79 | 10 | sell 0.005 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 13s | 1 |  |
| 14:59:17 | 80 | 10 | sell 0.00129 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | failed | 7s | 0 | acquire XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 14:59:08 | 81 | 11 | sell 0.005 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | filled | 10s | 1 |  |
| 14:59:18 | 82 | 11 | sell 0.00272 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu → SOL | filled | 29s | 2 |  |
| 14:59:12 | 83 | 12 | sell 0.005 SOL → TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo | filled | 7s | 1 |  |
| 14:59:19 | 84 | 12 | sell 0.0023 TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo → SOL | filled | 33s | 2 |  |
| 14:59:16 | 85 | 13 | sell 0.005 SOL → 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw | filled | 10s | 1 |  |
| 14:59:26 | 86 | 13 | sell 0.433 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw → SOL | filled | 28s | 2 |  |
| 14:59:20 | 87 | 14 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 7s | 1 |  |
| 14:59:28 | 88 | 14 | sell 2.33 EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm → SOL | filled | 24s | 2 |  |
| 14:59:24 | 89 | 15 | sell 0.005 SOL → SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 | filled | 13s | 1 |  |
| 14:59:38 | 90 | 15 | sell 30.3 SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 → SOL | filled | 33s | 2 |  |
| 14:59:28 | 91 | 16 | sell 0.005 SOL → SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH | filled | 10s | 1 |  |
| 14:59:38 | 92 | 16 | sell 0.00537 SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH → SOL | filled | 43s | 2 |  |
| 14:59:32 | 93 | 17 | sell 0.005 SOL → ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU | filled | 4s | 1 |  |
| 14:59:36 | 94 | 17 | sell 213 ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU → SOL | filled | 36s | 2 |  |
| 14:59:36 | 95 | 18 | sell 0.005 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | filled | 7s | 1 |  |
| 14:59:43 | 96 | 18 | sell 0.00451 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg → SOL | filled | 20s | 2 |  |
| 14:59:40 | 97 | 19 | sell 0.005 SOL → 7KEPApdbBMByrmqihz3bht2uMhFQcatjfSFQCKq66kH3 | filled | 7s | 1 |  |
| 14:59:48 | 98 | 19 | sell 87.9 7KEPApdbBMByrmqihz3bht2uMhFQcatjfSFQCKq66kH3 → SOL | filled | 4s | 1 |  |
| 14:59:44 | 99 | 20 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 8s | 1 |  |
| 14:59:52 | 100 | 20 | sell 0.00409 pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL → SOL | filled | 27s | 2 |  |
| 14:59:48 | 101 | 21 | sell 0.005 SOL → C1MHyoTJpRTeS9AQCyspNVu2EWAYCZwmJ1jNkEArFP1f | filled | 23s | 1 |  |
| 15:00:11 | 102 | 21 | sell 3.48 C1MHyoTJpRTeS9AQCyspNVu2EWAYCZwmJ1jNkEArFP1f → SOL | filled | 7s | 1 |  |
| 14:59:52 | 103 | 22 | sell 0.005 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | filled | 7s | 1 |  |
| 14:59:59 | 104 | 22 | sell 0.00314 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ → SOL | filled | 20s | 2 |  |
| 14:59:56 | 105 | 23 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 7s | 1 |  |
| 15:00:03 | 106 | 23 | sell 479 ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 → SOL | filled | 10s | 1 |  |
| 15:00:00 | 107 | 24 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 10s | 1 |  |
| 15:00:10 | 108 | 24 | sell 0.000117 AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P → SOL | filled | 29s | 2 |  |
| 15:00:04 | 109 | 25 | sell 0.005 SOL → 8SMMso8Muv8d6i4WmMDthKt6TN1ysN6937sx3DKLXZqB | filled | 7s | 1 |  |
| 15:00:11 | 110 | 25 | sell 8.14 8SMMso8Muv8d6i4WmMDthKt6TN1ysN6937sx3DKLXZqB → SOL | filled | 23s | 2 |  |
| 15:00:08 | 111 | 26 | sell 0.005 SOL → 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 | filled | 11s | 1 |  |
| 15:00:19 | 112 | 26 | sell 248 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 → SOL | filled | 23s | 2 |  |
| 15:00:12 | 113 | 27 | sell 0.005 SOL → A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump | filled | 8s | 1 |  |
| 15:00:20 | 114 | 27 | sell 313 A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump → SOL | filled | 7s | 1 |  |
| 15:00:16 | 115 | 28 | sell 0.005 SOL → 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ | filled | 8s | 1 |  |
| 15:00:24 | 116 | 28 | sell 5.92e-06 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ → SOL | failed | 7s | 0 | acquire 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 15:00:20 | 117 | 29 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 19s | 1 |  |
| 15:00:40 | 118 | 29 | sell 0.000666 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa → SOL | filled | 29s | 2 |  |
| 15:00:24 | 119 | 30 | sell 0.005 SOL → GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 | filled | 17s | 1 |  |
| 15:00:41 | 120 | 30 | sell 0.0325 GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 → SOL | filled | 26s | 2 |  |
| 15:00:28 | 121 | 1 | sell 0.005 SOL → J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd | filled | 13s | 1 |  |
| 15:00:42 | 122 | 1 | sell 13.8 J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd → SOL | filled | 17s | 2 |  |
| 15:00:32 | 123 | 2 | sell 0.005 SOL → 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 | filled | 7s | 1 |  |
| 15:00:39 | 124 | 2 | sell 0.342 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 → SOL | filled | 30s | 2 |  |
| 15:00:36 | 125 | 3 | sell 0.005 SOL → DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow | filled | 7s | 1 |  |
| 15:00:43 | 126 | 3 | sell 0.0252 DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow → SOL | filled | 20s | 2 |  |
| 15:00:40 | 127 | 4 | sell 0.005 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | filled | 7s | 1 |  |
| 15:00:47 | 128 | 4 | sell 0.0024 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | filled | 42s | 2 |  |
| 15:00:44 | 129 | 5 | sell 0.005 SOL → 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC | filled | 10s | 1 |  |
| 15:00:54 | 130 | 5 | sell 0.471 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC → SOL | filled | 33s | 2 |  |
| 15:00:48 | 131 | 6 | sell 0.005 SOL → GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A | filled | 10s | 1 |  |
| 15:00:59 | 132 | 6 | sell 0.000117 GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A → SOL | filled | 20s | 2 |  |
| 15:00:52 | 133 | 7 | sell 0.005 SOL → GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump | filled | 7s | 1 |  |
| 15:00:59 | 134 | 7 | sell 385 GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump → SOL | filled | 7s | 1 |  |
| 15:00:56 | 135 | 8 | sell 0.005 SOL → HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 | filled | 7s | 1 |  |
| 15:01:03 | 136 | 8 | sell 5.73 HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 → SOL | filled | 23s | 2 |  |
| 15:01:00 | 137 | 9 | sell 0.005 SOL → 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS | filled | 8s | 1 |  |
| 15:01:09 | 138 | 9 | sell 118 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS → SOL | filled | 20s | 2 |  |
| 15:01:04 | 139 | 10 | sell 0.005 SOL → CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu | filled | 10s | 1 |  |
| 15:01:15 | 140 | 10 | sell 7.59 CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu → SOL | filled | 13s | 1 |  |
| 15:01:08 | 141 | 11 | sell 0.005 SOL → H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump | filled | 10s | 1 |  |
| 15:01:19 | 142 | 11 | sell 219 H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump → SOL | filled | 20s | 2 |  |
| 15:01:12 | 143 | 12 | sell 0.005 SOL → Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu | filled | 7s | 1 |  |
| 15:01:19 | 144 | 12 | sell 38.3 Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu → SOL | filled | 20s | 2 |  |
| 15:01:16 | 145 | 13 | sell 0.005 SOL → 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump | filled | 7s | 1 |  |
| 15:01:24 | 146 | 13 | sell 78 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump → SOL | filled | 10s | 1 |  |
| 15:01:20 | 147 | 14 | sell 0.005 SOL → 1zJX5gRnjLgmTpq5sVwkq69mNDQkCemqoasyjaPW6jm | filled | 7s | 1 |  |
| 15:01:28 | 148 | 14 | sell 46.8 1zJX5gRnjLgmTpq5sVwkq69mNDQkCemqoasyjaPW6jm → SOL | filled | 26s | 2 |  |
| 15:01:24 | 149 | 15 | sell 0.005 SOL → HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx | filled | 7s | 1 |  |
| 15:01:32 | 150 | 15 | sell 0.0168 HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx → SOL | filled | 20s | 2 |  |
| 15:01:28 | 151 | 16 | sell 0.005 SOL → METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta | filled | 17s | 1 |  |
| 15:01:45 | 152 | 16 | sell 0.0849 METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta → SOL | filled | 23s | 2 |  |
| 15:01:32 | 153 | 17 | sell 0.005 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | filled | 11s | 1 |  |
| 15:01:43 | 154 | 17 | sell 0.00453 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH → SOL | filled | 26s | 2 |  |
| 15:01:36 | 155 | 18 | sell 0.005 SOL → NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg | filled | 7s | 1 |  |
| 15:01:43 | 156 | 18 | sell 0.0141 NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg → SOL | filled | 26s | 2 |  |
| 15:01:40 | 157 | 19 | sell 0.005 SOL → 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump | filled | 7s | 1 |  |
| 15:01:47 | 158 | 19 | sell 184 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump → SOL | filled | 7s | 1 |  |
| 15:01:44 | 159 | 20 | sell 0.005 SOL → CzLTZppPdZtTjyq3WGpHLstoc3GLhu7zH5Zg6xUa6Gv5 | filled | 7s | 1 |  |
| 15:01:51 | 160 | 20 | sell 0.00575 CzLTZppPdZtTjyq3WGpHLstoc3GLhu7zH5Zg6xUa6Gv5 → SOL | filled | 23s | 2 |  |
| 15:01:48 | 161 | 21 | sell 0.005 SOL → 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 | filled | 13s | 1 |  |
| 15:02:02 | 162 | 21 | sell 2.28 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 → SOL | filled | 20s | 2 |  |
| 15:01:52 | 163 | 22 | sell 0.005 SOL → GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc | filled | 7s | 1 |  |
| 15:01:59 | 164 | 22 | sell 1.48 GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc → SOL | filled | 23s | 2 |  |
| 15:01:56 | 165 | 23 | sell 0.005 SOL → bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 | filled | 7s | 1 |  |
| 15:02:03 | 166 | 23 | sell 0.00341 bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 → SOL | filled | 20s | 2 |  |
| 15:02:00 | 167 | 24 | sell 0.005 SOL → 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump | filled | 7s | 1 |  |
| 15:02:07 | 168 | 24 | sell 55.9 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump → SOL | filled | 27s | 2 |  |
| 15:02:04 | 169 | 25 | sell 0.005 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | filled | 10s | 1 |  |
| 15:02:14 | 170 | 25 | sell 0.00189 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg → SOL | filled | 33s | 2 |  |
| 15:02:08 | 171 | 26 | sell 0.005 SOL → EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 | filled | 10s | 1 |  |
| 15:02:19 | 172 | 26 | sell 511 EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 → SOL | filled | 10s | 1 |  |
| 15:02:12 | 173 | 27 | sell 0.005 SOL → BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin | filled | 4s | 1 |  |
| 15:02:16 | 174 | 27 | sell 13.1 BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin → SOL | filled | 20s | 2 |  |
| 15:02:16 | 175 | 28 | sell 0.005 SOL → RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE | filled | 8s | 1 |  |
| 15:02:24 | 176 | 28 | sell 0.0101 RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE → SOL | filled | 20s | 2 |  |
| 15:02:20 | 177 | 29 | sell 0.005 SOL → AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc | filled | 7s | 1 |  |
| 15:02:27 | 178 | 29 | sell 0.168 AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc → SOL | filled | 39s | 2 |  |
| 15:02:24 | 179 | 30 | sell 0.005 SOL → rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof | filled | 10s | 1 |  |
| 15:02:34 | 180 | 30 | sell 0.264 rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof → SOL | filled | 20s | 2 |  |
| 15:02:28 | 181 | 1 | sell 0.005 SOL → BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump | filled | 10s | 1 |  |
| 15:02:38 | 182 | 1 | sell 318 BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump → SOL | filled | 26s | 2 |  |
| 15:02:32 | 183 | 2 | sell 0.005 SOL → 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump | filled | 4s | 1 |  |
| 15:02:36 | 184 | 2 | sell 291 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump → SOL | filled | 17s | 2 |  |
| 15:02:36 | 185 | 3 | sell 0.005 SOL → XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump | filled | 7s | 1 |  |
| 15:02:43 | 186 | 3 | sell 342 XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump → SOL | filled | 20s | 2 |  |
| 15:02:40 | 187 | 4 | sell 0.005 SOL → BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp | filled | 13s | 1 |  |
| 15:02:54 | 188 | 4 | sell 0.00445 BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp → SOL | filled | 20s | 2 |  |
| 15:02:44 | 189 | 5 | sell 0.005 SOL → DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw | filled | 10s | 1 |  |
| 15:02:54 | 190 | 5 | sell 0.00863 DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw → SOL | filled | 29s | 2 |  |
| 15:02:48 | 191 | 6 | sell 0.005 SOL → AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 | filled | 10s | 1 |  |
| 15:02:58 | 192 | 6 | sell 0.00291 AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 → SOL | filled | 20s | 2 |  |
| 15:02:52 | 193 | 7 | sell 0.005 SOL → he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A | filled | 4s | 1 |  |
| 15:02:56 | 194 | 7 | sell 0.00378 he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A → SOL | filled | 17s | 2 |  |
| 15:02:56 | 195 | 8 | sell 0.005 SOL → 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T | filled | 7s | 1 |  |
| 15:03:03 | 196 | 8 | sell 1.42 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T → SOL | filled | 4s | 1 |  |
| 15:03:00 | 197 | 9 | sell 0.005 SOL → 3vgopg7xm3EWkXfxmWPUpcf7g939hecfqg18sLuXDzVt | filled | 8s | 1 |  |
| 15:03:09 | 198 | 9 | sell 36.7 3vgopg7xm3EWkXfxmWPUpcf7g939hecfqg18sLuXDzVt → SOL | filled | 10s | 1 |  |
| 15:03:04 | 199 | 10 | sell 0.005 SOL → HgBRWfYxEfvPhtqkaeymCQtHCrKE46qQ43pKe8HCpump | filled | 7s | 1 |  |
| 15:03:11 | 200 | 10 | sell 32.9 HgBRWfYxEfvPhtqkaeymCQtHCrKE46qQ43pKe8HCpump → SOL | filled | 7s | 1 |  |
| 15:03:08 | 201 | 11 | sell 0.005 SOL → B5WTLaRwaUQpKk7ir1wniNB6m5o8GgMrimhKMYan2R6B | filled | 10s | 1 |  |
| 15:03:19 | 202 | 11 | sell 610 B5WTLaRwaUQpKk7ir1wniNB6m5o8GgMrimhKMYan2R6B → SOL | filled | 94s | 2 |  |
| 15:03:12 | 203 | 12 | sell 0.005 SOL → 1NJMqVM4PadjuzYmeB7zV7q7DV8oB3ExaQCd9x6KsLz | filled | 7s | 1 |  |
| 15:03:19 | 204 | 12 | sell 0.0711 1NJMqVM4PadjuzYmeB7zV7q7DV8oB3ExaQCd9x6KsLz → SOL | filled | 17s | 2 |  |
| 15:03:16 | 205 | 13 | sell 0.005 SOL → A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump | filled | 7s | 1 |  |
| 15:03:23 | 206 | 13 | sell 99.4 A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump → SOL | filled | 20s | 2 |  |
| 15:03:20 | 207 | 14 | sell 0.005 SOL → BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p | filled | 7s | 1 |  |
| 15:03:27 | 208 | 14 | sell 22.9 BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p → SOL | filled | 7s | 1 |  |
| 15:03:24 | 209 | 15 | sell 0.005 SOL → 5g6wVay8NYQ5Tspo4irj9YqSFfQoPDW7apkX352N29PP | filled | 10s | 1 |  |
| 15:03:34 | 210 | 15 | sell 12.8 5g6wVay8NYQ5Tspo4irj9YqSFfQoPDW7apkX352N29PP → SOL | filled | 17s | 2 |  |
| 15:03:28 | 211 | 16 | sell 0.005 SOL → ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq | filled | 4s | 1 |  |
| 15:03:32 | 212 | 16 | sell 55.8 ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq → SOL | filled | 7s | 1 |  |
| 15:03:32 | 213 | 17 | sell 0.005 SOL → SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz | filled | 5s | 1 |  |
| 15:03:37 | 214 | 17 | sell 0.0783 SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz → SOL | filled | 17s | 2 |  |
| 15:03:36 | 215 | 18 | sell 0.005 SOL → BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk | filled | 7s | 1 |  |
| 15:03:44 | 216 | 18 | sell 0.00217 BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk → SOL | filled | 30s | 2 |  |
| 15:03:40 | 217 | 19 | sell 0.005 SOL → 6SjVTj1VGwFSXn7wEjwFm77LvACeTqB7sQUebYKX8Ds5 | filled | 7s | 1 |  |
| 15:03:48 | 218 | 19 | sell 231 6SjVTj1VGwFSXn7wEjwFm77LvACeTqB7sQUebYKX8Ds5 → SOL | filled | 13s | 1 |  |
| 15:03:44 | 219 | 20 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 10s | 1 |  |
| 15:03:54 | 220 | 20 | sell 0.427 A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 → SOL | filled | 23s | 2 |  |
| 15:03:48 | 221 | 21 | sell 0.005 SOL → RDDTGbhHwVXfyCvQMXzzowKjf5qrYBZAnehoXW83ooh | filled | 10s | 1 |  |
| 15:03:58 | 222 | 21 | sell 0.00307 RDDTGbhHwVXfyCvQMXzzowKjf5qrYBZAnehoXW83ooh → SOL | filled | 30s | 2 |  |
| 15:03:52 | 223 | 22 | sell 0.005 SOL → CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 | filled | 7s | 1 |  |
| 15:03:59 | 224 | 22 | sell 19.9 CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 → SOL | filled | 20s | 2 |  |
| 15:03:56 | 225 | 23 | sell 0.005 SOL → zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k | filled | 7s | 1 |  |
| 15:04:03 | 226 | 23 | sell 583 zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k → SOL | filled | 4s | 1 |  |
| 15:04:00 | 227 | 24 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 7s | 1 |  |
| 15:04:07 | 228 | 24 | sell 1060 MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 → SOL | filled | 26s | 2 |  |
| 15:04:04 | 229 | 25 | sell 0.005 SOL → AMD8XwJXgQ9WV45Wyj9yFLejxzf2J6VM1PJY8bJEjeES | filled | 10s | 1 |  |
| 15:04:14 | 230 | 25 | sell 0.000804 AMD8XwJXgQ9WV45Wyj9yFLejxzf2J6VM1PJY8bJEjeES → SOL | filled | 20s | 2 |  |
| 15:04:08 | 231 | 26 | sell 0.005 SOL → EN2nnxrg8uUi6x2sJkzNPd2eT6rB9rdSoQNNaENA4RZA | filled | 10s | 1 |  |
| 15:04:18 | 232 | 26 | sell 609 EN2nnxrg8uUi6x2sJkzNPd2eT6rB9rdSoQNNaENA4RZA → SOL | filled | 23s | 2 |  |
| 15:04:12 | 233 | 27 | sell 0.005 SOL → hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux | filled | 4s | 1 |  |
| 15:04:16 | 234 | 27 | sell 0.964 hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux → SOL | filled | 13s | 1 |  |
| 15:04:16 | 235 | 28 | sell 0.005 SOL → 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump | filled | 7s | 1 |  |
| 15:04:23 | 236 | 28 | sell 65.7 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump → SOL | filled | 23s | 2 |  |
| 15:04:20 | 237 | 29 | sell 0.005 SOL → CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump | filled | 7s | 1 |  |
| 15:04:27 | 238 | 29 | sell 195 CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump → SOL | filled | 26s | 2 |  |
| 15:04:24 | 239 | 30 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 10s | 1 |  |
| 15:04:35 | 240 | 30 | sell 10.5 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr → SOL | filled | 17s | 2 |  |
| 15:04:28 | 241 | 1 | sell 0.005 SOL → PAYmo6moDF3Ro3X6bU2jwe2UdBnBhv8YjLgL1j4DxGu | filled | 10s | 1 |  |
| 15:04:38 | 242 | 1 | sell 57.5 PAYmo6moDF3Ro3X6bU2jwe2UdBnBhv8YjLgL1j4DxGu → SOL | filled | 3s | 1 |  |
| 15:04:32 | 243 | 2 | sell 0.005 SOL → 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump | filled | 7s | 1 |  |
| 15:04:39 | 244 | 2 | sell 8.12 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump → SOL | filled | 17s | 2 |  |
| 15:04:36 | 245 | 3 | sell 0.005 SOL → CGEDT9QZDvvH5GmVkWJH2BXiMJqMJySC9ihWyr7Spump | filled | 7s | 1 |  |
| 15:04:43 | 246 | 3 | sell 281 CGEDT9QZDvvH5GmVkWJH2BXiMJqMJySC9ihWyr7Spump → SOL | filled | 4s | 1 |  |
| 15:04:40 | 247 | 4 | sell 0.005 SOL → 3iQL8BFS2vE7mww4ehAqQHAsbmRNCrPxizWAT2Zfyr9y | filled | 7s | 1 |  |
| 15:04:47 | 248 | 4 | sell 0.695 3iQL8BFS2vE7mww4ehAqQHAsbmRNCrPxizWAT2Zfyr9y → SOL | filled | 23s | 2 |  |
| 15:04:44 | 249 | 5 | sell 0.005 SOL → Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump | filled | 7s | 1 |  |
| 15:04:51 | 250 | 5 | sell 44.9 Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump → SOL | filled | 16s | 2 |  |
| 15:04:48 | 251 | 6 | sell 0.005 SOL → LinkhB3afbBKb2EQQu7s7umdZceV3wcvAUJhQAfQ23L | filled | 4s | 1 |  |
| 15:04:52 | 252 | 6 | sell 0.0384 LinkhB3afbBKb2EQQu7s7umdZceV3wcvAUJhQAfQ23L → SOL | filled | 26s | 2 |  |
| 15:04:52 | 253 | 7 | sell 0.005 SOL → 4qQeZ5LwSz6HuupUu8jCtgXyW1mYQcNbFAW1sWZp89HL | filled | 4s | 1 |  |
| 15:04:56 | 254 | 7 | sell 0.225 4qQeZ5LwSz6HuupUu8jCtgXyW1mYQcNbFAW1sWZp89HL → SOL | filled | 20s | 2 |  |
| 15:04:56 | 255 | 8 | sell 0.005 SOL → KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP | filled | 7s | 1 |  |
| 15:05:03 | 256 | 8 | sell 27.7 KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP → SOL | filled | 4s | 1 |  |
| 15:05:00 | 257 | 9 | sell 0.005 SOL → eL5fUxj2J4CiQsmW85k5FG9DvuQjjUoBHoQBi2Kpump | filled | 7s | 1 |  |
| 15:05:07 | 258 | 9 | sell 70.4 eL5fUxj2J4CiQsmW85k5FG9DvuQjjUoBHoQBi2Kpump → SOL | failed | 17s | 1 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 15:05:04 | 259 | 10 | sell 0.005 SOL → CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta | filled | 10s | 1 |  |
| 15:05:14 | 260 | 10 | sell 0.649 CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta → SOL | filled | 20s | 2 |  |
| 15:05:08 | 261 | 11 | sell 0.005 SOL → DvjbEsdca43oQcw2h3HW1CT7N3x5vRcr3QrvTUHnXvgV | filled | 4s | 1 |  |
| 15:05:12 | 262 | 11 | sell 312 DvjbEsdca43oQcw2h3HW1CT7N3x5vRcr3QrvTUHnXvgV → SOL | filled | 26s | 2 |  |
| 15:05:12 | 263 | 12 | sell 0.005 SOL → 8PzFWyLpCVEmbZmVJcaRTU5r69XKJx1rd7YGpWvnpump | filled | 4s | 1 |  |
| 15:05:16 | 264 | 12 | sell 216 8PzFWyLpCVEmbZmVJcaRTU5r69XKJx1rd7YGpWvnpump → SOL | filled | 7s | 1 |  |
| 15:05:16 | 265 | 13 | sell 0.005 SOL → CniPCE4b3s8gSUPhUiyMjXnytrEqUrMfSsnbBjLCpump | filled | 7s | 1 |  |
| 15:05:23 | 266 | 13 | sell 128 CniPCE4b3s8gSUPhUiyMjXnytrEqUrMfSsnbBjLCpump → SOL | filled | 20s | 2 |  |
| 15:05:20 | 267 | 14 | sell 0.005 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 7s | 1 |  |
| 15:05:27 | 268 | 14 | sell 0.492 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk → SOL | filled | 26s | 2 |  |
| 15:05:24 | 269 | 15 | sell 0.005 SOL → HUMA1821qVDKta3u2ovmfDQeW2fSQouSKE8fkF44wvGw | filled | 10s | 1 |  |
| 15:05:34 | 270 | 15 | sell 15.1 HUMA1821qVDKta3u2ovmfDQeW2fSQouSKE8fkF44wvGw → SOL | filled | 17s | 2 |  |
| 15:05:28 | 271 | 16 | sell 0.005 SOL → MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u | filled | 7s | 1 |  |
| 15:05:35 | 272 | 16 | sell 7.1 MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u → SOL | filled | 17s | 2 |  |
| 15:05:32 | 273 | 17 | sell 0.005 SOL → 3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump | filled | 4s | 1 |  |
| 15:05:36 | 274 | 17 | sell 239 3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump → SOL | filled | 17s | 2 |  |
| 15:05:36 | 275 | 18 | sell 0.005 SOL → Tqj8yFmagrg7oorpQkVGYR52r96RFTamvWfth9bpump | filled | 7s | 1 |  |
| 15:05:43 | 276 | 18 | sell 764 Tqj8yFmagrg7oorpQkVGYR52r96RFTamvWfth9bpump → SOL | filled | 4s | 1 |  |
| 15:05:40 | 277 | 19 | sell 0.005 SOL → 463SK47VkB7uE7XenTHKiVcMtxRsfNE2X4Q9wByaURVA | filled | 7s | 1 |  |
| 15:05:47 | 278 | 19 | sell 127 463SK47VkB7uE7XenTHKiVcMtxRsfNE2X4Q9wByaURVA → SOL | filled | 16s | 1 |  |
| 15:05:44 | 279 | 20 | sell 0.005 SOL → USNv3NkKA27Dh4nsHJDPhW4VoEcTQmjoZyJt2dqdwFu | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 15:05:46 | 280 | 20 | sell 0.0033 USNv3NkKA27Dh4nsHJDPhW4VoEcTQmjoZyJt2dqdwFu → SOL | filled | 39s | 2 |  |
| 15:05:48 | 281 | 21 | sell 0.005 SOL → SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq | filled | 10s | 1 |  |
| 15:05:59 | 282 | 21 | sell 8.35 SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq → SOL | filled | 29s | 2 |  |
| 15:05:52 | 283 | 22 | sell 0.005 SOL → 5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC | filled | 7s | 1 |  |
| 15:05:59 | 284 | 22 | sell 22.7 5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC → SOL | filled | 29s | 2 |  |
| 15:05:56 | 285 | 23 | sell 0.005 SOL → CARSsxWPkpQWvfyRBwfGMGvysJBHdHGfE46X5MNgmeta | filled | 7s | 1 |  |
| 15:06:03 | 286 | 23 | sell 4.16 CARSsxWPkpQWvfyRBwfGMGvysJBHdHGfE46X5MNgmeta → SOL | filled | 20s | 2 |  |
| 15:06:00 | 287 | 24 | sell 0.005 SOL → 8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB | filled | 10s | 1 |  |
| 15:06:11 | 288 | 24 | sell 1010 8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB → SOL | failed | 7s | 0 | acquire 8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 15:06:04 | 289 | 25 | sell 0.005 SOL → G7iK3prSzAA4vzcJWvsLUEsdCqzR7PnMzJV61vSdFSNW | filled | 7s | 1 |  |
| 15:06:11 | 290 | 25 | sell 0.28 G7iK3prSzAA4vzcJWvsLUEsdCqzR7PnMzJV61vSdFSNW → SOL | filled | 13s | 1 |  |
| 15:06:08 | 291 | 26 | sell 0.005 SOL → Cy1GS2FqefgaMbi45UunrUzin1rfEmTUYnomddzBpump | filled | 10s | 1 |  |
| 15:06:18 | 292 | 26 | sell 337 Cy1GS2FqefgaMbi45UunrUzin1rfEmTUYnomddzBpump → SOL | filled | 23s | 2 |  |
| 15:06:12 | 293 | 27 | sell 0.005 SOL → XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ | filled | 7s | 1 |  |
| 15:06:19 | 294 | 27 | sell 0.00547 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ → SOL | filled | 30s | 2 |  |
| 15:06:16 | 295 | 28 | sell 0.005 SOL → G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG | filled | 7s | 1 |  |
| 15:06:23 | 296 | 28 | sell 8.48 G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG → SOL | filled | 21s | 2 |  |
| 15:06:20 | 297 | 29 | sell 0.005 SOL → ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY | filled | 7s | 1 |  |
| 15:06:27 | 298 | 29 | sell 12 ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY → SOL | filled | 26s | 2 |  |
| 15:06:24 | 299 | 30 | sell 0.005 SOL → HtTYHz1Kf3rrQo6AqDLmss7gq5WrkWAaXn3tupUZbonk | filled | 10s | 1 |  |
| 15:06:34 | 300 | 30 | sell 177 HtTYHz1Kf3rrQo6AqDLmss7gq5WrkWAaXn3tupUZbonk → SOL | filled | 7s | 1 |  |
| 15:06:28 | 301 | 1 | sell 0.005 SOL → 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump | filled | 10s | 1 |  |
| 15:06:39 | 302 | 1 | sell 10 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump → SOL | filled | 27s | 2 |  |
| 15:06:32 | 303 | 2 | sell 0.005 SOL → FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump | filled | 4s | 1 |  |
| 15:06:37 | 304 | 2 | sell 1090 FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump → SOL | filled | 7s | 1 |  |
| 15:06:36 | 305 | 3 | sell 0.005 SOL → 4nV5gNwwP68zUDat26ySChREqVaQaLudfJBkSgEzpump | filled | 7s | 1 |  |
| 15:06:43 | 306 | 3 | sell 90.6 4nV5gNwwP68zUDat26ySChREqVaQaLudfJBkSgEzpump → SOL | filled | 20s | 2 |  |
| 15:06:40 | 307 | 4 | sell 0.005 SOL → 9AvytnUKsLxPxFHFqS6VLxaxt5p6BhYNr53SD2Chpump | filled | 7s | 1 |  |
| 15:06:47 | 308 | 4 | sell 257 9AvytnUKsLxPxFHFqS6VLxaxt5p6BhYNr53SD2Chpump → SOL | filled | 26s | 2 |  |
| 15:06:44 | 309 | 5 | sell 0.005 SOL → WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk | filled | 7s | 1 |  |
| 15:06:51 | 310 | 5 | sell 75200 WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk → SOL | filled | 23s | 2 |  |
| 15:06:48 | 311 | 6 | sell 0.005 SOL → Hh3oTaqDCKKfdBgsQEvxp9sUwyNf8x9qmKqEMLBWpump | filled | 10s | 1 |  |
| 15:06:58 | 312 | 6 | sell 319 Hh3oTaqDCKKfdBgsQEvxp9sUwyNf8x9qmKqEMLBWpump → SOL | filled | 23s | 2 |  |
| 15:06:52 | 313 | 7 | sell 0.005 SOL → HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd | filled | 4s | 1 |  |
| 15:06:56 | 314 | 7 | sell 109 HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd → SOL | filled | 7s | 1 |  |
| 15:06:56 | 315 | 8 | sell 0.005 SOL → GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump | filled | 7s | 1 |  |
| 15:07:04 | 316 | 8 | sell 50.5 GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump → SOL | filled | 17s | 2 |  |
| 15:07:00 | 317 | 9 | sell 0.005 SOL → GMzuntWYJLpNuCizrSR7ZXggiMdDzTNiEmSNHHunpump | filled | 7s | 1 |  |
| 15:07:07 | 318 | 9 | sell 150 GMzuntWYJLpNuCizrSR7ZXggiMdDzTNiEmSNHHunpump → SOL | filled | 26s | 2 |  |
| 15:07:04 | 319 | 10 | sell 0.005 SOL → x95HN3DWvbfCBtTjGm587z8suK3ec6cwQwgZNLbWKyp | filled | 10s | 1 |  |
| 15:07:14 | 320 | 10 | sell 518000000 x95HN3DWvbfCBtTjGm587z8suK3ec6cwQwgZNLbWKyp → SOL | filled | 7s | 1 |  |
| 15:07:08 | 321 | 11 | sell 0.005 SOL → 8wxkvAfEns76yBzu4MnbV7VnXWjg3iDPA9uwAQ6cpump | filled | 19s | 1 |  |
| 15:07:28 | 322 | 11 | sell 531 8wxkvAfEns76yBzu4MnbV7VnXWjg3iDPA9uwAQ6cpump → SOL | filled | 4s | 1 |  |
| 15:07:12 | 323 | 12 | sell 0.005 SOL → 4QsNTBKwHgyYUUHq9tDzk1CCVu7y5hK7z3GE9R36pump | filled | 7s | 1 |  |
| 15:07:19 | 324 | 12 | sell 192 4QsNTBKwHgyYUUHq9tDzk1CCVu7y5hK7z3GE9R36pump → SOL | filled | 17s | 2 |  |
| 15:07:16 | 325 | 13 | sell 0.005 SOL → CYPHuMmCL1GxJWa2tsPhLKykC7GrHJTCHwbXD4g5uawK | filled | 7s | 1 |  |
| 15:07:23 | 326 | 13 | sell 0.16 CYPHuMmCL1GxJWa2tsPhLKykC7GrHJTCHwbXD4g5uawK → SOL | filled | 26s | 2 |  |
| 15:07:20 | 327 | 14 | sell 0.005 SOL → bioJ9JTqW62MLz7UKHU69gtKhPpGi1BQhccj2kmSvUJ | filled | 7s | 1 |  |
| 15:07:27 | 328 | 14 | sell 17.6 bioJ9JTqW62MLz7UKHU69gtKhPpGi1BQhccj2kmSvUJ → SOL | filled | 7s | 1 |  |
| 15:07:24 | 329 | 15 | sell 0.005 SOL → H8xQ6poBjB9DTPMDTKWzWPrnxu4bDEhybxiouF8Ppump | filled | 7s | 1 |  |
| 15:07:31 | 330 | 15 | sell 354 H8xQ6poBjB9DTPMDTKWzWPrnxu4bDEhybxiouF8Ppump → SOL | filled | 17s | 2 |  |
| 15:07:28 | 331 | 16 | sell 0.005 SOL → CcLd8HTAKLWtQHatqPwBQjtuCA72FNB9E1ckRTEzpump | filled | 4s | 1 |  |
| 15:07:32 | 332 | 16 | sell 146 CcLd8HTAKLWtQHatqPwBQjtuCA72FNB9E1ckRTEzpump → SOL | filled | 17s | 2 |  |
| 15:07:32 | 333 | 17 | sell 0.005 SOL → 7BgBvyjrZX1YKz4oh9mjb8ZScatkkwb8DzFx7LoiVkM3 | filled | 4s | 1 |  |
| 15:07:36 | 334 | 17 | sell 23 7BgBvyjrZX1YKz4oh9mjb8ZScatkkwb8DzFx7LoiVkM3 → SOL | filled | 21s | 2 |  |
| 15:07:36 | 335 | 18 | sell 0.005 SOL → 6nR8wBnfsmXfcdDr1hovJKjvFQxNSidN6XFyfAFZpump | filled | 7s | 1 |  |
| 15:07:43 | 336 | 18 | sell 55.8 6nR8wBnfsmXfcdDr1hovJKjvFQxNSidN6XFyfAFZpump → SOL | filled | 13s | 1 |  |
| 15:07:40 | 337 | 19 | sell 0.005 SOL → AMjzRn1TBQwQfNAjHFeBb7uGbbqbJB7FzXAnGgdFPk6K | filled | 7s | 1 |  |
| 15:07:47 | 338 | 19 | sell 257 AMjzRn1TBQwQfNAjHFeBb7uGbbqbJB7FzXAnGgdFPk6K → SOL | filled | 17s | 2 |  |
| 15:07:44 | 339 | 20 | sell 0.005 SOL → FRySi8LPkuByB7VPSCCggxpewFUeeJiwEGRKKuhwpKcX | filled | 10s | 1 |  |
| 15:07:54 | 340 | 20 | sell 1780 FRySi8LPkuByB7VPSCCggxpewFUeeJiwEGRKKuhwpKcX → SOL | filled | 10s | 1 |  |
| 15:07:48 | 341 | 21 | sell 0.005 SOL → BLVxek8YMXUQhcKmMvrFTrzh5FXg8ec88Crp6otEaCMf | filled | 10s | 1 |  |
| 15:07:58 | 342 | 21 | sell 134 BLVxek8YMXUQhcKmMvrFTrzh5FXg8ec88Crp6otEaCMf → SOL | filled | 7s | 1 |  |
| 15:07:52 | 343 | 22 | sell 0.005 SOL → 3psH1Mj1f7yUfaD5gh6Zj7epE8hhrMkMETgv5TshQA4o | filled | 4s | 1 |  |
| 15:07:56 | 344 | 22 | sell 387 3psH1Mj1f7yUfaD5gh6Zj7epE8hhrMkMETgv5TshQA4o → SOL | filled | 17s | 2 |  |
| 15:07:56 | 345 | 23 | sell 0.005 SOL → MRNAzXzhNcaEXJPibHEn8cd4vyekCDiivTyEwswLUCT | filled | 7s | 1 |  |
| 15:08:03 | 346 | 23 | sell 0.00235 MRNAzXzhNcaEXJPibHEn8cd4vyekCDiivTyEwswLUCT → SOL | filled | 23s | 2 |  |
| 15:08:00 | 347 | 24 | sell 0.005 SOL → Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x | filled | 7s | 1 |  |
| 15:08:07 | 348 | 24 | sell 0.000955 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x → SOL | filled | 17s | 2 |  |
| 15:08:04 | 349 | 25 | sell 0.005 SOL → FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P | filled | 7s | 1 |  |
| 15:08:11 | 350 | 25 | sell 5.45 FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P → SOL | filled | 20s | 2 |  |
| 15:08:08 | 351 | 26 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 4s | 1 |  |
| 15:08:12 | 352 | 26 | sell 0.00417 hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT → SOL | filled | 20s | 2 |  |
| 15:08:12 | 353 | 27 | sell 0.005 SOL → AWGCDT2gd8JadbYbYyZy1iKxfWokPNgrEQoU24zUpump | filled | 7s | 1 |  |
| 15:08:19 | 354 | 27 | sell 719 AWGCDT2gd8JadbYbYyZy1iKxfWokPNgrEQoU24zUpump → SOL | filled | 7s | 1 |  |
| 15:08:16 | 355 | 28 | sell 0.005 SOL → MRVLSjkR2ceUBukujaD3xCyHP1H3B2SzpsNTZF546jo | filled | 7s | 1 |  |
| 15:08:23 | 356 | 28 | sell 0.00181 MRVLSjkR2ceUBukujaD3xCyHP1H3B2SzpsNTZF546jo → SOL | filled | 26s | 2 |  |
| 15:08:20 | 357 | 29 | sell 0.005 SOL → BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs | filled | 7s | 1 |  |
| 15:08:27 | 358 | 29 | sell 0.00374 BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs → SOL | filled | 16s | 2 |  |
| 15:08:24 | 359 | 30 | sell 0.005 SOL → 85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ | filled | 7s | 1 |  |
| 15:08:31 | 360 | 30 | sell 28.5 85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ → SOL | filled | 26s | 2 |  |
| 15:08:28 | 361 | 1 | sell 0.005 SOL → LLYuwZ33keFihgwoxXsBawy31AiRFLFSva32TYq5TvD | filled | 7s | 1 |  |
| 15:08:35 | 362 | 1 | sell 0.000419 LLYuwZ33keFihgwoxXsBawy31AiRFLFSva32TYq5TvD → SOL | filled | 23s | 2 |  |
| 15:08:32 | 363 | 2 | sell 0.005 SOL → EmcxFTNVDqyLHp11NvwvLZ4D7LKGbG9i7B8RF7dwpump | filled | 4s | 1 |  |
| 15:08:36 | 364 | 2 | sell 942 EmcxFTNVDqyLHp11NvwvLZ4D7LKGbG9i7B8RF7dwpump → SOL | filled | 7s | 1 |  |
| 15:08:36 | 365 | 3 | sell 0.005 SOL → BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K | filled | 13s | 1 |  |
| 15:08:50 | 366 | 3 | sell 3.36 BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K → SOL | filled | 20s | 2 |  |
| 15:08:40 | 367 | 4 | sell 0.005 SOL → PFER6ENqP8r8NF3CqVt4mFowxsin3V5MLidBNQFCC3x | filled | 10s | 1 |  |
| 15:08:50 | 368 | 4 | sell 0.0176 PFER6ENqP8r8NF3CqVt4mFowxsin3V5MLidBNQFCC3x → SOL | filled | 20s | 2 |  |
| 15:08:44 | 369 | 5 | sell 0.005 SOL → HeeBovJNKd27tQ6xkeP1dfSyTr8LyLwhJz9wfFTbPLEX | filled | 10s | 1 |  |
| 15:08:54 | 370 | 5 | sell 55.6 HeeBovJNKd27tQ6xkeP1dfSyTr8LyLwhJz9wfFTbPLEX → SOL | filled | 23s | 2 |  |
| 15:08:48 | 371 | 6 | sell 0.005 SOL → zGh48JtNHVBb5evgoZLXwgPD2Qu4MhkWdJLGDAupump | filled | 4s | 1 |  |
| 15:08:52 | 372 | 6 | sell 236 zGh48JtNHVBb5evgoZLXwgPD2Qu4MhkWdJLGDAupump → SOL | filled | 20s | 2 |  |
| 15:08:52 | 373 | 7 | sell 0.005 SOL → 7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj | filled | 7s | 1 |  |
| 15:08:59 | 374 | 7 | sell 0.00408 7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj → SOL | filled | 20s | 2 |  |
| 15:08:56 | 375 | 8 | sell 0.005 SOL → 6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx | filled | 4s | 1 |  |
| 15:09:01 | 376 | 8 | sell 383 6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx → SOL | filled | 23s | 2 |  |
| 15:09:00 | 377 | 9 | sell 0.005 SOL → BBKPiLM9KjdJW7oQSKt99RVWcZdhF6sEHRKnwqeBGHST | filled | 10s | 1 |  |
| 15:09:10 | 378 | 9 | sell 376 BBKPiLM9KjdJW7oQSKt99RVWcZdhF6sEHRKnwqeBGHST → SOL | filled | 23s | 2 |  |
| 15:09:04 | 379 | 10 | sell 0.005 SOL → Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump | filled | 10s | 1 |  |
| 15:09:14 | 380 | 10 | sell 28.9 Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump → SOL | filled | 17s | 2 |  |
| 15:09:08 | 381 | 11 | sell 0.005 SOL → 3wtGGWZ8wLWW6BqtC5rxmkHdqvM62atUcGTH4cw3pump | filled | 10s | 1 |  |
| 15:09:18 | 382 | 11 | sell 84.1 3wtGGWZ8wLWW6BqtC5rxmkHdqvM62atUcGTH4cw3pump → SOL | filled | 4s | 1 |  |
| 15:09:12 | 383 | 12 | sell 0.005 SOL → 7HgfXftRBBqsYtAEYcqjGLQrNJLL6Tww9ek4rE3Apump | filled | 7s | 1 |  |
| 15:09:19 | 384 | 12 | sell 356 7HgfXftRBBqsYtAEYcqjGLQrNJLL6Tww9ek4rE3Apump → SOL | filled | 7s | 1 |  |
| 15:09:16 | 385 | 13 | sell 0.005 SOL → DQnkBM4eYYMnVE8Qy2K3BB7uts1fh2EwBVktEz6jpump | filled | 7s | 1 |  |
| 15:09:23 | 386 | 13 | sell 91.3 DQnkBM4eYYMnVE8Qy2K3BB7uts1fh2EwBVktEz6jpump → SOL | filled | 20s | 2 |  |
| 15:09:20 | 387 | 14 | sell 0.005 SOL → WENAZ2WyPbmgvUcKfQ8hyMDfBQP9bZ65hsZ5KTFrRGZ | filled | 7s | 1 |  |
| 15:09:27 | 388 | 14 | sell 0.0802 WENAZ2WyPbmgvUcKfQ8hyMDfBQP9bZ65hsZ5KTFrRGZ → SOL | failed | 20s | 1 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 15:09:24 | 389 | 15 | sell 0.005 SOL → E1kvzJNxShvvWTrudokpzuc789vRiDXfXG3duCuY6ooE | filled | 7s | 1 |  |
| 15:09:31 | 390 | 15 | sell 24.7 E1kvzJNxShvvWTrudokpzuc789vRiDXfXG3duCuY6ooE → SOL | filled | 29s | 2 |  |
| 15:09:28 | 391 | 16 | sell 0.005 SOL → HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump | filled | 10s | 1 |  |
| 15:09:38 | 392 | 16 | sell 11.4 HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump → SOL | filled | 20s | 2 |  |
| 15:09:32 | 393 | 17 | sell 0.005 SOL → CzLSujWBLFsSjncfkh59rUFqvafWcY5tzedWJSuypump | filled | 4s | 1 |  |
| 15:09:36 | 394 | 17 | sell 30.4 CzLSujWBLFsSjncfkh59rUFqvafWcY5tzedWJSuypump → SOL | filled | 17s | 2 |  |
| 15:09:36 | 395 | 18 | sell 0.005 SOL → PRVT6TB7uss3FrUd2D9xs2zqDBsa3GbMJMwCQsgmeta | filled | 10s | 1 |  |
| 15:09:46 | 396 | 18 | sell 1.8 PRVT6TB7uss3FrUd2D9xs2zqDBsa3GbMJMwCQsgmeta → SOL | filled | 20s | 2 |  |
| 15:09:40 | 397 | 19 | sell 0.005 SOL → 4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump | filled | 7s | 1 |  |
| 15:09:47 | 398 | 19 | sell 65.1 4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump → SOL | filled | 26s | 2 |  |
| 15:09:44 | 399 | 20 | sell 0.005 SOL → BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups | filled | 7s | 1 |  |
| 15:09:51 | 400 | 20 | sell 131 BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups → SOL | filled | 20s | 2 |  |
| 15:09:48 | 401 | 21 | sell 0.005 SOL → CTgiaZUK12kCcB8sosn4Nt2NZtzLgtPqDwyQyr2syATC | filled | 4s | 1 |  |
| 15:09:52 | 402 | 21 | sell 33.1 CTgiaZUK12kCcB8sosn4Nt2NZtzLgtPqDwyQyr2syATC → SOL | filled | 27s | 2 |  |
| 15:09:52 | 403 | 22 | sell 0.005 SOL → 6yjNqPzTSanBWSa6dxVEgTjePXBrZ2FoHLDQwYwEsyM6 | filled | 7s | 1 |  |
| 15:09:59 | 404 | 22 | sell 400 6yjNqPzTSanBWSa6dxVEgTjePXBrZ2FoHLDQwYwEsyM6 → SOL | filled | 7s | 1 |  |
| 15:09:56 | 405 | 23 | sell 0.005 SOL → ACtfUWtgvaXrQGNMiohTusi5jcx5RJf5zwu9aAxkpump | filled | 7s | 1 |  |
| 15:10:03 | 406 | 23 | sell 1030 ACtfUWtgvaXrQGNMiohTusi5jcx5RJf5zwu9aAxkpump → SOL | filled | 4s | 1 |  |
| 15:10:00 | 407 | 24 | sell 0.005 SOL → 4ikwYoNvoGEwtMbziUyYBTz1zRM6nmxspsfw9G7Bpump | filled | 8s | 1 |  |
| 15:10:08 | 408 | 24 | sell 127 4ikwYoNvoGEwtMbziUyYBTz1zRM6nmxspsfw9G7Bpump → SOL | filled | 4s | 1 |  |
| 15:10:04 | 409 | 25 | sell 0.005 SOL → 42cXQvAAr7hcPBPWAS4ocVtDyeJ4Fa6gRR2uG4gppump | filled | 10s | 1 |  |
| 15:10:14 | 410 | 25 | sell 58.8 42cXQvAAr7hcPBPWAS4ocVtDyeJ4Fa6gRR2uG4gppump → SOL | filled | 13s | 1 |  |
| 15:10:08 | 411 | 26 | sell 0.005 SOL → SoLo9oxzLDpcq1dpqAgMwgce5WqkRDtNXK7EPnbmeta | filled | 13s | 1 |  |
| 15:10:22 | 412 | 26 | sell 0.54 SoLo9oxzLDpcq1dpqAgMwgce5WqkRDtNXK7EPnbmeta → SOL | filled | 7s | 1 |  |
| 15:10:12 | 413 | 27 | sell 0.005 SOL → 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump | filled | 7s | 1 |  |
| 15:10:19 | 414 | 27 | sell 60.9 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump → SOL | filled | 10s | 1 |  |
| 15:10:16 | 415 | 28 | sell 0.005 SOL → C2omVhcvt3DDY77S2KZzawFJQeETZofgZ4eNWWkXpump | filled | 7s | 1 |  |
| 15:10:23 | 416 | 28 | sell 963 C2omVhcvt3DDY77S2KZzawFJQeETZofgZ4eNWWkXpump → SOL | filled | 7s | 1 |  |
| 15:10:20 | 417 | 29 | sell 0.005 SOL → dTzEP9JU2NRDPuWtM32gaVKip2fTHBqjheU1APBpump | filled | 10s | 1 |  |
| 15:10:30 | 418 | 29 | sell 372 dTzEP9JU2NRDPuWtM32gaVKip2fTHBqjheU1APBpump → SOL | filled | 7s | 1 |  |
| 15:10:24 | 419 | 30 | sell 0.005 SOL → 2oGLxYuNBJRcepT1mEV6KnETaLD7Bf6qq3CM6skasBfe | filled | 7s | 1 |  |
| 15:10:31 | 420 | 30 | sell 110 2oGLxYuNBJRcepT1mEV6KnETaLD7Bf6qq3CM6skasBfe → SOL | filled | 6s | 1 |  |
| 15:10:28 | 421 | 1 | sell 0.005 SOL → 69G8CpUVZAxbPMiEBrfCCCH445NwFxH6PzVL693Xpump | filled | 7s | 1 |  |
| 15:10:36 | 422 | 1 | sell 309 69G8CpUVZAxbPMiEBrfCCCH445NwFxH6PzVL693Xpump → SOL | filled | 6s | 1 |  |
| 15:10:32 | 423 | 2 | sell 0.005 SOL → 8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn | filled | 4s | 1 |  |
| 15:10:36 | 424 | 2 | sell 17.1 8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn → SOL | filled | 23s | 2 |  |
| 15:10:36 | 425 | 3 | sell 0.005 SOL → GvV7sFu6FHJsSVXfpG7xqFnWar3c7YkcC74rqe7Bpump | filled | 7s | 1 |  |
| 15:10:43 | 426 | 3 | sell 192 GvV7sFu6FHJsSVXfpG7xqFnWar3c7YkcC74rqe7Bpump → SOL | filled | 20s | 2 |  |
| 15:10:40 | 427 | 4 | sell 0.005 SOL → HBoNJ5v8g71s2boRivrHnfSB5MVPLDHHyVjruPfhGkvL | filled | 7s | 1 |  |
| 15:10:47 | 428 | 4 | sell 40200 HBoNJ5v8g71s2boRivrHnfSB5MVPLDHHyVjruPfhGkvL → SOL | filled | 17s | 2 |  |
| 15:10:44 | 429 | 5 | sell 0.005 SOL → RKLBnAXGqv31iZomqsuAWkQm1aqC7JwwvbCfzGdqAhz | filled | 10s | 1 |  |
| 15:10:55 | 430 | 5 | sell 0.00726 RKLBnAXGqv31iZomqsuAWkQm1aqC7JwwvbCfzGdqAhz → SOL | filled | 20s | 2 |  |
| 15:10:48 | 431 | 6 | sell 0.005 SOL → STREAMribRwybYpMmSYoCsQUdr6MZNXEqHgm7p1gu9M | filled | 7s | 1 |  |
| 15:10:55 | 432 | 6 | sell 51 STREAMribRwybYpMmSYoCsQUdr6MZNXEqHgm7p1gu9M → SOL | filled | 24s | 2 |  |
| 15:10:52 | 433 | 7 | sell 0.005 SOL → 8Ki8DpuWNxu9VsS3kQbarsCWMcFGWkzzA8pUPto9zBd5 | filled | 7s | 1 |  |
| 15:10:59 | 434 | 7 | sell 495 8Ki8DpuWNxu9VsS3kQbarsCWMcFGWkzzA8pUPto9zBd5 → SOL | filled | 23s | 2 |  |
| 15:10:56 | 435 | 8 | sell 0.005 SOL → GvEMgNT6GKiYTvg7TskDio6RKzQdCuhwmH55tVCLaJTe | filled | 10s | 1 |  |
| 15:11:06 | 436 | 8 | sell 0.491 GvEMgNT6GKiYTvg7TskDio6RKzQdCuhwmH55tVCLaJTe → SOL | filled | 20s | 2 |  |
| 15:11:00 | 437 | 9 | sell 0.005 SOL → ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs | filled | 7s | 1 |  |
| 15:11:07 | 438 | 9 | sell 1.86 ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs → SOL | filled | 27s | 2 |  |
| 15:11:04 | 439 | 10 | sell 0.005 SOL → vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7 | filled | 10s | 1 |  |
| 15:11:14 | 440 | 10 | sell 0.00383 vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7 → SOL | filled | 20s | 2 |  |
| 15:11:08 | 441 | 11 | sell 0.005 SOL → HfMbPyDdZH6QMaDDUokjYCkHxzjoGBMpgaUvpLWGbF5p | filled | 7s | 1 |  |
| 15:11:15 | 442 | 11 | sell 3.14 HfMbPyDdZH6QMaDDUokjYCkHxzjoGBMpgaUvpLWGbF5p → SOL | filled | 26s | 2 |  |
| 15:11:12 | 443 | 12 | sell 0.005 SOL → Hax9LTgsQkze1YFychnBLtFH8gYbQKtKfWKKg2SP6gdD | filled | 7s | 1 |  |
| 15:11:19 | 444 | 12 | sell 123 Hax9LTgsQkze1YFychnBLtFH8gYbQKtKfWKKg2SP6gdD → SOL | filled | 23s | 2 |  |
| 15:11:16 | 445 | 13 | sell 0.005 SOL → 2JcXacFwt9mVAwBQ5nZkYwCyXQkRcdsYrDXn6hj22SbP | filled | 7s | 1 |  |
| 15:11:23 | 446 | 13 | sell 508 2JcXacFwt9mVAwBQ5nZkYwCyXQkRcdsYrDXn6hj22SbP → SOL | filled | 4s | 1 |  |
| 15:11:20 | 447 | 14 | sell 0.005 SOL → 71Jvq4Epe2FCJ7JFSF7jLXdNk1Wy4Bhqd9iL6bEFELvg | filled | 7s | 1 |  |
| 15:11:27 | 448 | 14 | sell 330 71Jvq4Epe2FCJ7JFSF7jLXdNk1Wy4Bhqd9iL6bEFELvg → SOL | filled | 7s | 1 |  |
| 15:11:24 | 449 | 15 | sell 0.005 SOL → 5SVG3T9CNQsm2kEwzbRq6hASqh1oGfjqTtLXYUibpump | filled | 10s | 1 |  |
| 15:11:34 | 450 | 15 | sell 398 5SVG3T9CNQsm2kEwzbRq6hASqh1oGfjqTtLXYUibpump → SOL | filled | 18s | 2 |  |
| 15:11:28 | 451 | 16 | sell 0.005 SOL → DNhQZ1CE9qZ2FNrVhsCXwQJ2vZG8ufZkcYakTS5Jpump | filled | 13s | 1 |  |
| 15:11:42 | 452 | 16 | sell 209 DNhQZ1CE9qZ2FNrVhsCXwQJ2vZG8ufZkcYakTS5Jpump → SOL | filled | 7s | 1 |  |
| 15:11:32 | 453 | 17 | sell 0.005 SOL → H2c31USxu35MDkBrGph8pUDUnmzo2e4Rf4hnvL2Upump | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 15:11:34 | 454 | 17 | sell 452 H2c31USxu35MDkBrGph8pUDUnmzo2e4Rf4hnvL2Upump → SOL | filled | 18s | 2 |  |
| 15:11:36 | 455 | 18 | sell 0.005 SOL → 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z | filled | 7s | 1 |  |
| 15:11:43 | 456 | 18 | sell 2.97 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z → SOL | filled | 36s | 2 |  |
| 15:11:40 | 457 | 19 | sell 0.005 SOL → 4nswj3o1Lo9iWYvvRJxUD8vbCy9ay7QQoXYcncHNbonk | filled | 7s | 1 |  |
| 15:11:47 | 458 | 19 | sell 1860 4nswj3o1Lo9iWYvvRJxUD8vbCy9ay7QQoXYcncHNbonk → SOL | failed | 7s | 0 | acquire 4nswj3o1Lo9iWYvvRJxUD8vbCy9ay7QQoXYcncHNbonk error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 15:11:44 | 459 | 20 | sell 0.005 SOL → SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz | filled | 7s | 1 |  |
| 15:11:51 | 460 | 20 | sell 302 SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz → SOL | filled | 23s | 2 |  |
| 15:11:48 | 461 | 21 | sell 0.005 SOL → 6D7NaB2xsLd7cauWu1wKk6KBsJohJmP2qZH9GEfVi5Ui | filled | 10s | 1 |  |
| 15:11:58 | 462 | 21 | sell 521 6D7NaB2xsLd7cauWu1wKk6KBsJohJmP2qZH9GEfVi5Ui → SOL | filled | 30s | 2 |  |
| 15:11:52 | 463 | 22 | sell 0.005 SOL → sSo14endRuUbvQaJS3dq36Q829a3A6BEfoeeRGJywEh | filled | 4s | 1 |  |
| 15:11:56 | 464 | 22 | sell 0.00383 sSo14endRuUbvQaJS3dq36Q829a3A6BEfoeeRGJywEh → SOL | filled | 23s | 2 |  |
| 15:11:56 | 465 | 23 | sell 0.005 SOL → Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ | filled | 7s | 1 |  |
| 15:12:03 | 466 | 23 | sell 0.00369 Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ → SOL | filled | 26s | 2 |  |
| 15:12:00 | 467 | 24 | sell 0.005 SOL → 2fUFhZyd47Mapv9wcfXh5gnQwFXtqcYu9xAN4THBpump | filled | 7s | 1 |  |
| 15:12:07 | 468 | 24 | sell 650 2fUFhZyd47Mapv9wcfXh5gnQwFXtqcYu9xAN4THBpump → SOL | filled | 7s | 1 |  |
| 15:12:04 | 469 | 25 | sell 0.005 SOL → LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp | filled | 10s | 1 |  |
| 15:12:15 | 470 | 25 | sell 0.00291 LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp → SOL | filled | 17s | 2 |  |
| 15:12:08 | 471 | 26 | sell 0.005 SOL → 65nTNuJGHme4PQvKQyJykKp1bJAkK4A8Q66sd2yBWugf | filled | 10s | 1 |  |
| 15:12:19 | 472 | 26 | sell 495000 65nTNuJGHme4PQvKQyJykKp1bJAkK4A8Q66sd2yBWugf → SOL | filled | 10s | 1 |  |
| 15:12:12 | 473 | 27 | sell 0.005 SOL → DeaKMzAeZja3Mh5okZE6WUvygLP3Lfuvm6Rg78HqXTz9 | filled | 7s | 1 |  |
| 15:12:19 | 474 | 27 | sell 393 DeaKMzAeZja3Mh5okZE6WUvygLP3Lfuvm6Rg78HqXTz9 → SOL | filled | 17s | 2 |  |
| 15:12:16 | 475 | 28 | sell 0.005 SOL → 3WPep4ufaToK1aS5s8BL9inzeUrt4DYaQCiic6ZkkC1U | filled | 10s | 1 |  |
| 15:12:26 | 476 | 28 | sell 15.3 3WPep4ufaToK1aS5s8BL9inzeUrt4DYaQCiic6ZkkC1U → SOL | filled | 7s | 1 |  |
| 15:12:20 | 477 | 29 | sell 0.005 SOL → ULwSJmmpxmnRfpu6BjnK6rprKXqD5jXUmPpS1FxHXFy | filled | 7s | 1 |  |
| 15:12:27 | 478 | 29 | sell 281 ULwSJmmpxmnRfpu6BjnK6rprKXqD5jXUmPpS1FxHXFy → SOL | filled | 20s | 2 |  |
| 15:12:24 | 479 | 30 | sell 0.005 SOL → 69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs | filled | 10s | 1 |  |
| 15:12:34 | 480 | 30 | sell 3630000 69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs → SOL | filled | 20s | 2 |  |
| 15:12:28 | 481 | 1 | sell 0.005 SOL → F6qoefQq4iCBLoNZ34RjEqHjHkD8vtmoRSdw9Nd55J1k | filled | 7s | 1 |  |
| 15:12:35 | 482 | 1 | sell 1330 F6qoefQq4iCBLoNZ34RjEqHjHkD8vtmoRSdw9Nd55J1k → SOL | filled | 33s | 2 |  |
| 15:12:32 | 483 | 2 | sell 0.005 SOL → AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR | filled | 4s | 1 |  |
| 15:12:36 | 484 | 2 | sell 111000000 AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR → SOL | filled | 32s | 2 |  |
| 15:12:36 | 485 | 3 | sell 0.005 SOL → URARfsinxCRw4JpvQhuT4CxavdZXZEMjv9ZwWmWpwag | filled | 7s | 1 |  |
| 15:12:43 | 486 | 3 | sell 0.0126 URARfsinxCRw4JpvQhuT4CxavdZXZEMjv9ZwWmWpwag → SOL | filled | 30s | 2 |  |
| 15:12:40 | 487 | 4 | sell 0.005 SOL → moonThZEkkTVoNB7v6YVCQiT56JYDZ1oN185ba3WizL | failed | 0s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 15:12:42 | 488 | 4 | sell 101 moonThZEkkTVoNB7v6YVCQiT56JYDZ1oN185ba3WizL → SOL | failed | 7s | 0 | acquire moonThZEkkTVoNB7v6YVCQiT56JYDZ1oN185ba3WizL error: 404 Not Found: NoLiquidity: no route found |
| 15:12:44 | 489 | 5 | sell 0.005 SOL → Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP | filled | 10s | 1 |  |
| 15:12:54 | 490 | 5 | sell 1580 Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP → SOL | filled | 17s | 2 |  |
| 15:12:48 | 491 | 6 | sell 0.005 SOL → 9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM | filled | 4s | 1 |  |
| 15:12:52 | 492 | 6 | sell 29.5 9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM → SOL | filled | 17s | 2 |  |
| 15:12:52 | 493 | 7 | sell 0.005 SOL → WingsAYbfs4qnEgcw8jpSvetqp8XHM3GkKvow54WLcd | filled | 13s | 1 |  |
| 15:13:06 | 494 | 7 | sell 147 WingsAYbfs4qnEgcw8jpSvetqp8XHM3GkKvow54WLcd → SOL | filled | 7s | 1 |  |
| 15:12:56 | 495 | 8 | sell 0.005 SOL → 3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump | filled | 7s | 1 |  |
| 15:13:03 | 496 | 8 | sell 1080 3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump → SOL | filled | 26s | 2 |  |
| 15:13:00 | 497 | 9 | sell 0.005 SOL → LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg | filled | 7s | 1 |  |
| 15:13:07 | 498 | 9 | sell 0.00362 LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg → SOL | filled | 17s | 2 |  |
| 15:13:04 | 499 | 10 | sell 0.005 SOL → HQ7DaoiUxzC2K1Dr7KXRHccNtXvEYgNvoUextXe8dmBh | filled | 7s | 1 |  |
| 15:13:11 | 500 | 10 | sell 406 HQ7DaoiUxzC2K1Dr7KXRHccNtXvEYgNvoUextXe8dmBh → SOL | filled | 17s | 2 |  |
| 15:13:08 | 501 | 11 | sell 0.005 SOL → DLUNTKRQt7CrpqSX1naHUYoBznJ9pvMP65uCeWQgYnRK | filled | 4s | 1 |  |
| 15:13:12 | 502 | 11 | sell 38.6 DLUNTKRQt7CrpqSX1naHUYoBznJ9pvMP65uCeWQgYnRK → SOL | filled | 7s | 1 |  |
| 15:13:12 | 503 | 12 | sell 0.005 SOL → ATRLuHph8dxnPny4WSNW7fxkhbeivBrtWbY6BfB4xpLj | filled | 7s | 1 |  |
| 15:13:19 | 504 | 12 | sell 679 ATRLuHph8dxnPny4WSNW7fxkhbeivBrtWbY6BfB4xpLj → SOL | filled | 10s | 1 |  |
| 15:13:16 | 505 | 13 | sell 0.005 SOL → 4YK1njyeCkBuXG6phNtidJWKCbBhB659iwGkUJx98P5Z | filled | 7s | 1 |  |
| 15:13:24 | 506 | 13 | sell 137 4YK1njyeCkBuXG6phNtidJWKCbBhB659iwGkUJx98P5Z → SOL | filled | 21s | 2 |  |
| 15:13:20 | 507 | 14 | sell 0.005 SOL → J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD | filled | 10s | 1 |  |
| 15:13:30 | 508 | 14 | sell 0.227 J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD → SOL | filled | 27s | 2 |  |
| 15:13:24 | 509 | 15 | sell 0.005 SOL → 4Zp52aF4hZi9fzH19xpbWKYKQvgLyCN67KFbrQDqeTKh | filled | 10s | 1 |  |
| 15:13:34 | 510 | 15 | sell 6.66 4Zp52aF4hZi9fzH19xpbWKYKQvgLyCN67KFbrQDqeTKh → SOL | filled | 33s | 2 |  |
| 15:13:28 | 511 | 16 | sell 0.005 SOL → 3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN | filled | 4s | 1 |  |
| 15:13:32 | 512 | 16 | sell 1500 3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN → SOL | filled | 16s | 2 |  |
| 15:13:32 | 513 | 17 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 4s | 1 |  |
| 15:13:36 | 514 | 17 | sell 0.439 euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA → SOL | filled | 29s | 2 |  |
| 15:13:36 | 515 | 18 | sell 0.005 SOL → 9WPTUkh8fKuCnepRWoPYLH3aK9gSjPHFDenBq2X1Czdp | filled | 7s | 1 |  |
| 15:13:44 | 516 | 18 | sell 1460 9WPTUkh8fKuCnepRWoPYLH3aK9gSjPHFDenBq2X1Czdp → SOL | filled | 13s | 1 |  |
| 15:13:40 | 517 | 19 | sell 0.005 SOL → CQSzJzwW5H1oyWrp6QhfUKYYwyovbSiVDKnAxNfb1tJC | filled | 10s | 1 |  |
| 15:13:51 | 518 | 19 | sell 1290 CQSzJzwW5H1oyWrp6QhfUKYYwyovbSiVDKnAxNfb1tJC → SOL | filled | 17s | 2 |  |
| 15:13:44 | 519 | 20 | sell 0.005 SOL → 5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp | filled | 10s | 1 |  |
| 15:13:55 | 520 | 20 | sell 727 5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp → SOL | filled | 20s | 2 |  |
| 15:13:48 | 521 | 21 | sell 0.005 SOL → 9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P | filled | 10s | 1 |  |
| 15:13:58 | 522 | 21 | sell 1050 9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P → SOL | filled | 20s | 2 |  |
| 15:13:52 | 523 | 22 | sell 0.005 SOL → 7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn | filled | 4s | 1 |  |
| 15:13:56 | 524 | 22 | sell 0.00327 7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn → SOL | filled | 17s | 2 |  |
| 15:13:56 | 525 | 23 | sell 0.005 SOL → AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP | filled | 7s | 1 |  |
| 15:14:03 | 526 | 23 | sell 20.6 AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP → SOL | filled | 20s | 2 |  |
| 15:14:00 | 527 | 24 | sell 0.005 SOL → AhhdRu5YZdjVkKR3wbnUDaymVQL2ucjMQ63sZ3LFHsch | filled | 7s | 1 |  |
| 15:14:07 | 528 | 24 | sell 0.407 AhhdRu5YZdjVkKR3wbnUDaymVQL2ucjMQ63sZ3LFHsch → SOL | filled | 29s | 2 |  |
| 15:14:04 | 529 | 25 | sell 0.005 SOL → HLptm5e6rTgh4EKgDpYFrnRHbjpkMyVdEeREEa2G7rf9 | filled | 10s | 1 |  |
| 15:14:15 | 530 | 25 | sell 16900 HLptm5e6rTgh4EKgDpYFrnRHbjpkMyVdEeREEa2G7rf9 → SOL | filled | 20s | 2 |  |
| 15:14:08 | 531 | 26 | sell 0.005 SOL → 8doS8nzmgVZEaACxALkbK5fZtw4UuoRp4Yt8NEaXfDMb | filled | 10s | 1 |  |
| 15:14:19 | 532 | 26 | sell 867 8doS8nzmgVZEaACxALkbK5fZtw4UuoRp4Yt8NEaXfDMb → SOL | filled | 23s | 2 |  |
| 15:14:12 | 533 | 27 | sell 0.005 SOL → UPTx1d24aBWuRgwxVnFmX4gNraj3QGFzL3QqBgxtWQG | filled | 4s | 1 |  |
| 15:14:16 | 534 | 27 | sell 288 UPTx1d24aBWuRgwxVnFmX4gNraj3QGFzL3QqBgxtWQG → SOL | filled | 23s | 2 |  |
| 15:14:16 | 535 | 28 | sell 0.005 SOL → FU1q8vJpZNUrmqsciSjp8bAKKidGsLmouB8CBdf8TKQv | filled | 7s | 1 |  |
| 15:14:23 | 536 | 28 | sell 134 FU1q8vJpZNUrmqsciSjp8bAKKidGsLmouB8CBdf8TKQv → SOL | filled | 20s | 2 |  |
| 15:14:20 | 537 | 29 | sell 0.005 SOL → FViMp5phQH2bX81S7Yyn1yXjj3BRddFBNcMCbTH8FCze | filled | 7s | 1 |  |
| 15:14:27 | 538 | 29 | sell 566000000 FViMp5phQH2bX81S7Yyn1yXjj3BRddFBNcMCbTH8FCze → SOL | filled | 17s | 2 |  |
| 15:14:24 | 539 | 30 | sell 0.005 SOL → MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac | filled | 10s | 1 |  |
| 15:14:34 | 540 | 30 | sell 15.2 MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac → SOL | filled | 20s | 2 |  |
| 15:14:28 | 541 | 1 | sell 0.005 SOL → 9dLuVbJMd4ZpTpFgmaFHAGSsFwVjtcnzFWaLAA1expHg | filled | 7s | 1 |  |
| 15:14:35 | 542 | 1 | sell 338 9dLuVbJMd4ZpTpFgmaFHAGSsFwVjtcnzFWaLAA1expHg → SOL | filled | 17s | 2 |  |
| 15:14:32 | 543 | 2 | sell 0.005 SOL → 25hAyBQfoDhfWx9ay6rarbgvWGwDdNqcHsXS3jQ3mTDJ | filled | 4s | 1 |  |
| 15:14:36 | 544 | 2 | sell 1700 25hAyBQfoDhfWx9ay6rarbgvWGwDdNqcHsXS3jQ3mTDJ → SOL | filled | 23s | 2 |  |
| 15:14:36 | 545 | 3 | sell 0.005 SOL → BANKJmvhT8tiJRsBSS1n2HryMBPvT5Ze4HU95DUAmeta | filled | 7s | 1 |  |
| 15:14:43 | 546 | 3 | sell 1.91 BANKJmvhT8tiJRsBSS1n2HryMBPvT5Ze4HU95DUAmeta → SOL | filled | 23s | 2 |  |
| 15:14:40 | 547 | 4 | sell 0.005 SOL → AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr | filled | 7s | 1 |  |
| 15:14:47 | 548 | 4 | sell 538 AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr → SOL | filled | 26s | 2 |  |
| 15:14:44 | 549 | 5 | sell 0.005 SOL → 947tEoG318GUmyjVYhraNRvWpMX7fpBTDQFBoJvSkSG3 | filled | 10s | 1 |  |
| 15:14:55 | 550 | 5 | sell 17.7 947tEoG318GUmyjVYhraNRvWpMX7fpBTDQFBoJvSkSG3 → SOL | filled | 20s | 2 |  |
| 15:14:48 | 551 | 6 | sell 0.005 SOL → GTH3wG3NErjwcf7VGCoXEXkgXSHvYhx5gtATeeM5JAS1 | filled | 4s | 1 |  |
| 15:14:52 | 552 | 6 | sell 40.1 GTH3wG3NErjwcf7VGCoXEXkgXSHvYhx5gtATeeM5JAS1 → SOL | filled | 24s | 2 |  |
| 15:14:52 | 553 | 7 | sell 0.005 SOL → 26KMQVgDUoB6rEfnJ51yAABWWJND8uMtpnQgsHQ64Udr | filled | 7s | 1 |  |
| 15:14:59 | 554 | 7 | sell 2070 26KMQVgDUoB6rEfnJ51yAABWWJND8uMtpnQgsHQ64Udr → SOL | failed | 7s | 0 | acquire 26KMQVgDUoB6rEfnJ51yAABWWJND8uMtpnQgsHQ64Udr error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 15:14:56 | 555 | 8 | sell 0.005 SOL → 6n7Janary9fqzxKaJVrhL9TG2F61VbAtwUMu1YZscaQS | filled | 7s | 1 |  |
| 15:15:03 | 556 | 8 | sell 5050 6n7Janary9fqzxKaJVrhL9TG2F61VbAtwUMu1YZscaQS → SOL | filled | 20s | 2 |  |
| 15:15:00 | 557 | 9 | sell 0.005 SOL → AujTJJ7aMS8LDo3bFzoyXDwT3jBALUbu4VZhzZdTZLmG | filled | 7s | 1 |  |
| 15:15:07 | 558 | 9 | sell 596000 AujTJJ7aMS8LDo3bFzoyXDwT3jBALUbu4VZhzZdTZLmG → SOL | filled | 17s | 2 |  |

### Rows without an order

15 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | acquire | 8 | SOL → hyUSD, SOL → MPLX, SOL → INF, SOL → TSLAx, SOL → WBTC, SOL → GME, SOL → SPSC, SOL → HAMMY | the transaction's blockhash is no longer valid, sign a fresh one |
| BlockhashExpired | main | 5 | SOL → CRCLx, UFD → SOL, SOL → USO, WEN → SOL, SOL → Shoggoth | the transaction's blockhash is no longer valid, sign a fresh one |
| NoLiquidity | main | 1 | SOL → MF | no route found |
| NoLiquidity | acquire | 1 | SOL → MF | no route found |

Scenario orders: 744 (543 main, 201 acquire). Cleanup placed 14 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 15:15:36 | 1 | JupSOL → SOL (native) | Executed | `0x6f0b24b7…` [🐞](https://debug.barn.cow.fi/order/0x6f0b24b7761d2e1ad8ea21da393374a3de2d0112cae9e3c5218dd94d0b85b10c) |
| 15:15:45 | 3 | BURNIE → SOL (native) | Executed | `0x647d1545…` [🐞](https://debug.barn.cow.fi/order/0x647d154556ac4114695f7603115cef66e6caf3d3cc90f44b7e0380fa1fe1f728) |
| 15:15:49 | 9 | UFD → SOL (native) | Executed | `0xfca8558e…` [🐞](https://debug.barn.cow.fi/order/0xfca8558ecad4a76318e1c0c1ea14af00e4e89e36c1ef9401c92d05d2c907a5f1) |
| 15:15:53 | 10 | TSLAx → SOL (native) | Executed | `0x4efed8a0…` [🐞](https://debug.barn.cow.fi/order/0x4efed8a039857ea8937df179b96852919fb5309a8479a23d870c21ed8d8bb4ca) |
| 15:15:58 | 14 | xSOL → SOL (native) | Executed | `0xd32d221c…` [🐞](https://debug.barn.cow.fi/order/0xd32d221c38abfd95ab9f10b47129e4bfd193b6871857d33742283bcd1727b7e6) |
| 15:15:59 | 14 | WEN → SOL (native) | Executed | `0x9e50918e…` [🐞](https://debug.barn.cow.fi/order/0x9e50918ee404f9bd6c02115c35d6226edb5cae8f5d099428f054fe5332cf02f8) |
| 15:16:02 | 16 | TripleT → SOL (native) | Executed | `0x49313f5c…` [🐞](https://debug.barn.cow.fi/order/0x49313f5c7a51d441b0f2dd9dce88c9e99f0f7e03a38baf560ef83088fe109159) |
| 15:16:05 | 19 | SPSC → SOL (native) | Executed | `0x1d5aabbf…` [🐞](https://debug.barn.cow.fi/order/0x1d5aabbfea9ec0c551da76ab9913a5e1edbddcab4e36785b9eee079898e7045f) |
| 15:16:06 | 19 | DARK → SOL (native) | Executed | `0x3f944fcd…` [🐞](https://debug.barn.cow.fi/order/0x3f944fcdb9b0b580c1f566270ed72333f6e2e7fa51044f42371a5aad511eb937) |
| 15:16:14 | 21 | BELIEVE → SOL (native) | Executed | `0x97f71aba…` [🐞](https://debug.barn.cow.fi/order/0x97f71abacc5e2ffb64aab3fab7559ed527fac6cf3e57af911393feb6b69ce083) |
| 15:16:17 | 23 | MPLX → SOL (native) | Executed | `0xe93f3e1b…` [🐞](https://debug.barn.cow.fi/order/0xe93f3e1b9e274810942d03cc3dc96a6f9a6fe15df62856536b219afc331baff4) |
| 15:16:18 | 24 | GME → SOL (native) | Executed | `0x60cfbc3a…` [🐞](https://debug.barn.cow.fi/order/0x60cfbc3a4b275405cd0129a75e2c43ce31f67eae74c39549e4f07b0f4a0d7715) |
| 15:16:26 | 28 | WBTC → SOL (native) | Executed | `0x7b469e3f…` [🐞](https://debug.barn.cow.fi/order/0x7b469e3fac959d6447c49c0fd443be7f942f482109a741afd4590a7fd3fd6dd3) |
| 15:16:28 | 30 | INF → SOL (native) | Executed | `0x0e5b9b06…` [🐞](https://debug.barn.cow.fi/order/0x0e5b9b068a03bd0eb6032ab30df88c0b348eeb4a35fe0e6339d9ca4902b8849d) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 743 | 99.9% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 0.1% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 6s | 8s | 79s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 743 | 100.0% | 743 | 89,175 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 782 | 782 | 757 | 96.8% | 11 | 29 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 11 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 253 times
- Orders filtered for `in_flight`: 8 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 744 | 743 | 99.9% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → WEN | 4 | 4 | 100.0% |
| wSOL → TRUMP | 2 | 2 | 100.0% |
| wSOL → DJT | 2 | 2 | 100.0% |
| wSOL → METAx | 2 | 2 | 100.0% |
| wSOL → SKHY | 2 | 2 | 100.0% |
| wSOL → MSFTx | 2 | 2 | 100.0% |
| wSOL → GLDx | 2 | 2 | 100.0% |
| wSOL → SNDK | 2 | 2 | 100.0% |
| wSOL → Bonk | 2 | 2 | 100.0% |
| wSOL → GRASS | 2 | 2 | 100.0% |
| wSOL → JTO | 2 | 2 | 100.0% |
| wSOL → EURC | 2 | 2 | 100.0% |
| wSOL → SPX | 2 | 2 | 100.0% |
| wSOL → MU | 2 | 2 | 100.0% |
| wSOL → USDS | 2 | 2 | 100.0% |
| wSOL → GOOGLx | 2 | 2 | 100.0% |
| wSOL → GMEx | 2 | 2 | 100.0% |
| wSOL → DBR | 2 | 2 | 100.0% |
| wSOL → BOT | 2 | 2 | 100.0% |
| wSOL → KMNO | 2 | 2 | 100.0% |
| wSOL → QQQx | 2 | 2 | 100.0% |
| wSOL → MCDx | 2 | 2 | 100.0% |
| wSOL → xBTC | 2 | 2 | 100.0% |
| wSOL → AAPLx | 2 | 2 | 100.0% |
| wSOL → COINx | 2 | 2 | 100.0% |
| wSOL → TTWO | 2 | 2 | 100.0% |
| wSOL → PST | 2 | 2 | 100.0% |
| wSOL → $WIF | 2 | 2 | 100.0% |
| wSOL → SKR | 2 | 2 | 100.0% |
| wSOL → RUSH | 2 | 2 | 100.0% |
| wSOL → ZBCN | 2 | 2 | 100.0% |
| wSOL → HOODx | 2 | 2 | 100.0% |
| wSOL → PSOL | 2 | 2 | 100.0% |
| wSOL → MSTRx | 2 | 2 | 100.0% |
| wSOL → XAUt0 | 2 | 2 | 100.0% |
| wSOL → RHEA | 2 | 2 | 100.0% |
| wSOL → GIGA | 2 | 2 | 100.0% |
| wSOL → BNB | 2 | 2 | 100.0% |
| wSOL → GRND | 2 | 2 | 100.0% |
| wSOL → 2Z | 2 | 2 | 100.0% |
| wSOL → wXRP | 2 | 2 | 100.0% |
| wSOL → DKNG | 2 | 2 | 100.0% |
| wSOL → PLTRx | 2 | 2 | 100.0% |
| wSOL → eUSX | 2 | 2 | 100.0% |
| wSOL → GOLD | 2 | 2 | 100.0% |
| wSOL → PYTH | 2 | 2 | 100.0% |
| wSOL → ALON | 2 | 2 | 100.0% |
| wSOL → LMAO! | 2 | 2 | 100.0% |
| wSOL → PUMPCADE | 2 | 2 | 100.0% |
| wSOL → KLED | 2 | 2 | 100.0% |
| wSOL → HIMS | 2 | 2 | 100.0% |
| wSOL → META | 2 | 2 | 100.0% |
| wSOL → STRCx | 2 | 2 | 100.0% |
| wSOL → NKE | 2 | 2 | 100.0% |
| wSOL → COPX | 2 | 2 | 100.0% |
| wSOL → ENA | 2 | 2 | 100.0% |
| wSOL → TRX | 2 | 2 | 100.0% |
| wSOL → bSOL | 2 | 2 | 100.0% |
| wSOL → CLAW | 2 | 2 | 100.0% |
| wSOL → AMZNx | 2 | 2 | 100.0% |
| wSOL → BC | 2 | 2 | 100.0% |
| wSOL → RBLX | 2 | 2 | 100.0% |
| wSOL → AMC | 2 | 2 | 100.0% |
| wSOL → RENDER | 2 | 2 | 100.0% |
| wSOL → Jotchua | 2 | 2 | 100.0% |
| wSOL → WOJAK | 2 | 2 | 100.0% |
| wSOL → DREGG | 2 | 2 | 100.0% |
| wSOL → BABA | 2 | 2 | 100.0% |
| wSOL → DRAM | 2 | 2 | 100.0% |
| wSOL → AAVE | 2 | 2 | 100.0% |
| wSOL → hSOL | 2 | 2 | 100.0% |
| wSOL → Pepe | 2 | 2 | 100.0% |
| wSOL → INJ | 2 | 2 | 100.0% |
| wSOL → FWOG | 2 | 2 | 100.0% |
| wSOL → EDEL | 2 | 2 | 100.0% |
| wSOL → SNAP | 2 | 2 | 100.0% |
| wSOL → IBM | 2 | 2 | 100.0% |
| wSOL → USDY | 2 | 2 | 100.0% |
| wSOL → RDDT | 2 | 2 | 100.0% |
| wSOL → MON | 2 | 2 | 100.0% |
| wSOL → MEW | 2 | 2 | 100.0% |
| wSOL → AMD | 2 | 2 | 100.0% |
| wSOL → SQUIRE | 2 | 2 | 100.0% |
| wSOL → VINE | 2 | 2 | 100.0% |
| wSOL → USDUC | 2 | 2 | 100.0% |
| wSOL → POPCAT | 2 | 2 | 100.0% |
| wSOL → arc | 2 | 2 | 100.0% |
| wSOL → VIRTUAL | 2 | 2 | 100.0% |
| wSOL → CHILLGUY | 2 | 2 | 100.0% |
| wSOL → LINK | 2 | 2 | 100.0% |
| wSOL → Cake | 2 | 2 | 100.0% |
| wSOL → UFD | 2 | 2 | 100.0% |
| wSOL → CRED | 2 | 2 | 100.0% |
| wSOL → DOOD | 2 | 2 | 100.0% |
| wSOL → pwease | 2 | 2 | 100.0% |
| wSOL → USDv | 2 | 2 | 100.0% |
| wSOL → HUMA | 2 | 2 | 100.0% |
| wSOL → ME | 2 | 2 | 100.0% |
| wSOL → BP | 2 | 2 | 100.0% |
| wSOL → SLX | 2 | 2 | 100.0% |
| wSOL → PONKE | 2 | 2 | 100.0% |
| wSOL → CARS | 2 | 2 | 100.0% |
| wSOL → MOBY | 2 | 2 | 100.0% |
| wSOL → KOx | 2 | 2 | 100.0% |
| wSOL → BIRB | 2 | 2 | 100.0% |
| wSOL → MOODENG | 2 | 2 | 100.0% |
| wSOL → Pnut | 2 | 2 | 100.0% |
| wSOL → BOBO | 2 | 2 | 100.0% |
| wSOL → 67 | 2 | 2 | 100.0% |
| wSOL → HODL | 2 | 2 | 100.0% |
| wSOL → ACT | 2 | 2 | 100.0% |
| wSOL → dreams | 2 | 2 | 100.0% |
| wSOL → nub | 2 | 2 | 100.0% |
| wSOL → CYPH | 2 | 2 | 100.0% |
| wSOL → Tokabu | 2 | 2 | 100.0% |
| wSOL → ALTSZN | 2 | 2 | 100.0% |
| wSOL → Old Slerf | 2 | 2 | 100.0% |
| wSOL → SOLCEX | 2 | 2 | 100.0% |
| wSOL → boden | 2 | 2 | 100.0% |
| wSOL → MRNA | 2 | 2 | 100.0% |
| wSOL → BRK.Bx | 2 | 2 | 100.0% |
| wSOL → MELANIA | 2 | 2 | 100.0% |
| wSOL → hyloSOL | 2 | 2 | 100.0% |
| wSOL → MRVL | 2 | 2 | 100.0% |
| wSOL → bonkSOL | 2 | 2 | 100.0% |
| wSOL → W | 2 | 2 | 100.0% |
| wSOL → LLY | 2 | 2 | 100.0% |
| wSOL → IO | 2 | 2 | 100.0% |
| wSOL → PFE | 2 | 2 | 100.0% |
| wSOL → HEEBOO | 2 | 2 | 100.0% |
| wSOL → retire | 2 | 2 | 100.0% |
| wSOL → stSOL | 2 | 2 | 100.0% |
| wSOL → RETARDIO | 2 | 2 | 100.0% |
| wSOL → GHOST | 2 | 2 | 100.0% |
| wSOL → pippin | 2 | 2 | 100.0% |
| wSOL → DJI6930 | 2 | 2 | 100.0% |
| wSOL → DITH | 2 | 2 | 100.0% |
| wSOL → ALCH | 2 | 2 | 100.0% |
| wSOL → GOAT | 2 | 2 | 100.0% |
| wSOL → UMBRA | 2 | 2 | 100.0% |
| wSOL → DADDY | 2 | 2 | 100.0% |
| wSOL → URANUS | 2 | 2 | 100.0% |
| wSOL → BITCOIN | 2 | 2 | 100.0% |
| wSOL → ZEREBRO | 2 | 2 | 100.0% |
| wSOL → RAGEGUY | 2 | 2 | 100.0% |
| wSOL → PURPE | 2 | 2 | 100.0% |
| wSOL → RKLB | 2 | 2 | 100.0% |
| wSOL → STREAM | 2 | 2 | 100.0% |
| wSOL → LOCKIN | 2 | 2 | 100.0% |
| wSOL → sUSD.infra | 2 | 2 | 100.0% |
| wSOL → ARX | 2 | 2 | 100.0% |
| wSOL → vSOL | 2 | 2 | 100.0% |
| wSOL → PBTC | 2 | 2 | 100.0% |
| wSOL → TAI | 2 | 2 | 100.0% |
| wSOL → SIGMA | 2 | 2 | 100.0% |
| wSOL → BORG | 2 | 2 | 100.0% |
| wSOL → SCS | 2 | 2 | 100.0% |
| wSOL → SC | 2 | 2 | 100.0% |
| wSOL → sSOL | 2 | 2 | 100.0% |
| wSOL → dSOL | 2 | 2 | 100.0% |
| wSOL → LST | 2 | 2 | 100.0% |
| wSOL → SOLNIC | 2 | 2 | 100.0% |
| wSOL → HEGE | 2 | 2 | 100.0% |
| wSOL → USA | 2 | 2 | 100.0% |
| wSOL → SHIB | 2 | 2 | 100.0% |
| wSOL → GUAC | 2 | 2 | 100.0% |
| wSOL → URA | 2 | 2 | 100.0% |
| wSOL → HARAMBE | 2 | 2 | 100.0% |
| wSOL → AUDIO | 2 | 2 | 100.0% |
| wSOL → BILLY | 2 | 2 | 100.0% |
| wSOL → lanternSOL | 2 | 2 | 100.0% |
| wSOL → SLOTH | 2 | 2 | 100.0% |
| wSOL → DOLAN | 2 | 2 | 100.0% |
| wSOL → ISC | 2 | 2 | 100.0% |
| wSOL → ZAMA | 2 | 2 | 100.0% |
| wSOL → MOTHER | 2 | 2 | 100.0% |
| wSOL → EUROP | 2 | 2 | 100.0% |
| wSOL → STAN | 2 | 2 | 100.0% |
| wSOL → $michi | 2 | 2 | 100.0% |
| wSOL → USEDCAR | 2 | 2 | 100.0% |
| wSOL → JSOL | 2 | 2 | 100.0% |
| wSOL → AURY | 2 | 2 | 100.0% |
| wSOL → VCHF | 2 | 2 | 100.0% |
| wSOL → DUKO | 2 | 2 | 100.0% |
| wSOL → $WAFFLES | 2 | 2 | 100.0% |
| wSOL → UPT | 2 | 2 | 100.0% |
| wSOL → tremp | 2 | 2 | 100.0% |
| wSOL → $TOAD | 2 | 2 | 100.0% |
| wSOL → MNGO | 2 | 2 | 100.0% |
| wSOL → HEEHEE | 2 | 2 | 100.0% |
| wSOL → MANEKI | 2 | 2 | 100.0% |
| wSOL → AVICI | 2 | 2 | 100.0% |
| wSOL → SOLAMA | 2 | 2 | 100.0% |
| wSOL → CHAT | 2 | 2 | 100.0% |
| wSOL → WHALES | 2 | 2 | 100.0% |
| wSOL → Hobbes | 2 | 2 | 100.0% |
| wSOL → $BEER | 2 | 2 | 100.0% |
| wSOL → PERPSPAD | 1 | 1 | 100.0% |
| PERPSPAD → SOL (native) | 1 | 1 | 100.0% |
| TRUMP → SOL (native) | 1 | 1 | 100.0% |
| DJT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → hyUSD | 1 | 1 | 100.0% |
| METAx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MANIFEST | 1 | 1 | 100.0% |
| SKHY → SOL (native) | 1 | 1 | 100.0% |
| MANIFEST → SOL (native) | 1 | 1 | 100.0% |
| MSFTx → SOL (native) | 1 | 1 | 100.0% |
| GLDx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ORCA | 1 | 1 | 100.0% |
| ORCA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Jimothy | 1 | 1 | 100.0% |
| SNDK → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TripleT | 1 | 1 | 100.0% |
| Jimothy → SOL (native) | 1 | 1 | 100.0% |
| Bonk → SOL (native) | 1 | 1 | 100.0% |
| GRASS → SOL (native) | 1 | 1 | 100.0% |
| JTO → SOL (native) | 1 | 1 | 100.0% |
| TripleT → SOL (native) | 1 | 0 | 0.0% |
| wSOL → MPLX | 1 | 1 | 100.0% |
| SPX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Buttcoin | 1 | 1 | 100.0% |
| wSOL → aura | 1 | 1 | 100.0% |
| USDS → SOL (native) | 1 | 1 | 100.0% |
| MU → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NOS | 1 | 1 | 100.0% |
| Buttcoin → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| aura → SOL (native) | 1 | 1 | 100.0% |
| GOOGLx → SOL (native) | 1 | 1 | 100.0% |
| GMEx → SOL (native) | 1 | 1 | 100.0% |
| EURC → SOL (native) | 1 | 1 | 100.0% |
| CRCLx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| NOS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → xHYPE | 1 | 1 | 100.0% |
| xHYPE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CODEC | 1 | 1 | 100.0% |
| BOT → SOL (native) | 1 | 1 | 100.0% |
| CODEC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PEAQ | 1 | 1 | 100.0% |
| KMNO → SOL (native) | 1 | 1 | 100.0% |
| DBR → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GP | 1 | 1 | 100.0% |
| QQQx → SOL (native) | 1 | 1 | 100.0% |
| PEAQ → SOL (native) | 1 | 1 | 100.0% |
| MCDx → SOL (native) | 1 | 1 | 100.0% |
| GP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TSLAx | 1 | 1 | 100.0% |
| xBTC → SOL (native) | 1 | 1 | 100.0% |
| AAPLx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → DARK | 1 | 1 | 100.0% |
| COINx → SOL (native) | 1 | 1 | 100.0% |
| PST → SOL (native) | 1 | 1 | 100.0% |
| $WIF → SOL (native) | 1 | 1 | 100.0% |
| DARK → SOL (native) | 1 | 1 | 100.0% |
| TTWO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → APE | 1 | 1 | 100.0% |
| ZBCN → SOL (native) | 1 | 1 | 100.0% |
| SKR → SOL (native) | 1 | 1 | 100.0% |
| HOODx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| BOME → SOL (native) | 1 | 1 | 100.0% |
| RUSH → SOL (native) | 1 | 1 | 100.0% |
| APE → SOL (native) | 1 | 1 | 100.0% |
| PSOL → SOL (native) | 1 | 1 | 100.0% |
| MSTRx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TOAD | 1 | 1 | 100.0% |
| wSOL → WBTC | 1 | 1 | 100.0% |
| TOAD → SOL (native) | 1 | 1 | 100.0% |
| RHEA → SOL (native) | 1 | 1 | 100.0% |
| XAUt0 → SOL (native) | 1 | 1 | 100.0% |
| GIGA → SOL (native) | 1 | 1 | 100.0% |
| 2Z → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CHILLHOUSE | 1 | 1 | 100.0% |
| DKNG → SOL (native) | 1 | 1 | 100.0% |
| wXRP → SOL (native) | 1 | 1 | 100.0% |
| BNB → SOL (native) | 1 | 1 | 100.0% |
| CHILLHOUSE → SOL (native) | 1 | 1 | 100.0% |
| GRND → SOL (native) | 1 | 1 | 100.0% |
| PLTRx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SANC | 1 | 1 | 100.0% |
| GOLD → SOL (native) | 1 | 1 | 100.0% |
| eUSX → SOL (native) | 1 | 1 | 100.0% |
| PYTH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Cupsey | 1 | 1 | 100.0% |
| SANC → SOL (native) | 1 | 1 | 100.0% |
| ALON → SOL (native) | 1 | 1 | 100.0% |
| Cupsey → SOL (native) | 1 | 1 | 100.0% |
| LMAO! → SOL (native) | 1 | 1 | 100.0% |
| PUMPCADE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → KET | 1 | 1 | 100.0% |
| KLED → SOL (native) | 1 | 1 | 100.0% |
| HIMS → SOL (native) | 1 | 1 | 100.0% |
| KET → SOL (native) | 1 | 1 | 100.0% |
| META → SOL (native) | 1 | 1 | 100.0% |
| STRCx → SOL (native) | 1 | 1 | 100.0% |
| NKE → SOL (native) | 1 | 1 | 100.0% |
| COPX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MADE | 1 | 1 | 100.0% |
| ENA → SOL (native) | 1 | 1 | 100.0% |
| TRX → SOL (native) | 1 | 1 | 100.0% |
| bSOL → SOL (native) | 1 | 1 | 100.0% |
| MADE → SOL (native) | 1 | 1 | 100.0% |
| CLAW → SOL (native) | 1 | 1 | 100.0% |
| BC → SOL (native) | 1 | 1 | 100.0% |
| AMZNx → SOL (native) | 1 | 1 | 100.0% |
| RBLX → SOL (native) | 1 | 1 | 100.0% |
| AMC → SOL (native) | 1 | 1 | 100.0% |
| WOJAK → SOL (native) | 1 | 1 | 100.0% |
| RENDER → SOL (native) | 1 | 1 | 100.0% |
| Jotchua → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Anon | 1 | 1 | 100.0% |
| DREGG → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HAROLD | 1 | 1 | 100.0% |
| Anon → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Bert | 1 | 1 | 100.0% |
| hSOL → SOL (native) | 1 | 1 | 100.0% |
| BABA → SOL (native) | 1 | 1 | 100.0% |
| HAROLD → SOL (native) | 1 | 1 | 100.0% |
| Bert → SOL (native) | 1 | 1 | 100.0% |
| AAVE → SOL (native) | 1 | 1 | 100.0% |
| DRAM → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NPC | 1 | 1 | 100.0% |
| NPC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ZEUS | 1 | 1 | 100.0% |
| ZEUS → SOL (native) | 1 | 1 | 100.0% |
| INJ → SOL (native) | 1 | 1 | 100.0% |
| FWOG → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ROUTER | 1 | 1 | 100.0% |
| SNAP → SOL (native) | 1 | 1 | 100.0% |
| ROUTER → SOL (native) | 1 | 1 | 100.0% |
| EDEL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BULLSHIT | 1 | 1 | 100.0% |
| IBM → SOL (native) | 1 | 1 | 100.0% |
| BULLSHIT → SOL (native) | 1 | 1 | 100.0% |
| USDY → SOL (native) | 1 | 1 | 100.0% |
| MON → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HNT | 1 | 1 | 100.0% |
| RDDT → SOL (native) | 1 | 1 | 100.0% |
| HNT → SOL (native) | 1 | 1 | 100.0% |
| MEW → SOL (native) | 1 | 1 | 100.0% |
| AMD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PAYAI | 1 | 1 | 100.0% |
| SQUIRE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BURNIE | 1 | 1 | 100.0% |
| PAYAI → SOL (native) | 1 | 1 | 100.0% |
| VINE → SOL (native) | 1 | 1 | 100.0% |
| BURNIE → SOL (native) | 1 | 1 | 100.0% |
| USDUC → SOL (native) | 1 | 1 | 100.0% |
| Pepe → SOL (native) | 1 | 1 | 100.0% |
| POPCAT → SOL (native) | 1 | 1 | 100.0% |
| arc → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GRIFFAIN | 1 | 1 | 100.0% |
| CHILLGUY → SOL (native) | 1 | 1 | 100.0% |
| GRIFFAIN → SOL (native) | 1 | 1 | 100.0% |
| VIRTUAL → SOL (native) | 1 | 1 | 100.0% |
| LINK → SOL (native) | 1 | 1 | 100.0% |
| Cake → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Percolator | 1 | 1 | 100.0% |
| Percolator → SOL (native) | 1 | 1 | 100.0% |
| CRED → SOL (native) | 1 | 1 | 100.0% |
| DOOD → SOL (native) | 1 | 1 | 100.0% |
| pwease → SOL (native) | 1 | 1 | 100.0% |
| wSOL → KINS | 1 | 1 | 100.0% |
| wSOL → TSUKI | 1 | 1 | 100.0% |
| KINS → SOL (native) | 1 | 1 | 100.0% |
| USDv → SOL (native) | 1 | 1 | 100.0% |
| BP → SOL (native) | 1 | 1 | 100.0% |
| HUMA → SOL (native) | 1 | 1 | 100.0% |
| ME → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USO | 1 | 1 | 100.0% |
| TSUKI → SOL (native) | 1 | 1 | 100.0% |
| USO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GME | 1 | 1 | 100.0% |
| wSOL → NST | 1 | 1 | 100.0% |
| SLX → SOL (native) | 1 | 1 | 100.0% |
| PONKE → SOL (native) | 1 | 1 | 100.0% |
| CARS → SOL (native) | 1 | 1 | 100.0% |
| NST → SOL (native) | 1 | 1 | 100.0% |
| wSOL → KORI | 1 | 1 | 100.0% |
| wSOL → three | 1 | 1 | 100.0% |
| KOx → SOL (native) | 1 | 1 | 100.0% |
| KORI → SOL (native) | 1 | 1 | 100.0% |
| MOBY → SOL (native) | 1 | 1 | 100.0% |
| three → SOL (native) | 1 | 1 | 100.0% |
| BIRB → SOL (native) | 1 | 1 | 100.0% |
| MOODENG → SOL (native) | 1 | 1 | 100.0% |
| wSOL → READY | 1 | 1 | 100.0% |
| READY → SOL (native) | 1 | 1 | 100.0% |
| BOBO → SOL (native) | 1 | 1 | 100.0% |
| Pnut → SOL (native) | 1 | 1 | 100.0% |
| 67 → SOL (native) | 1 | 1 | 100.0% |
| wSOL → $HACHI | 1 | 1 | 100.0% |
| WEN → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SOLANGELES | 1 | 1 | 100.0% |
| $HACHI → SOL (native) | 1 | 1 | 100.0% |
| HODL → SOL (native) | 1 | 1 | 100.0% |
| ACT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BIO | 1 | 1 | 100.0% |
| dreams → SOL (native) | 1 | 1 | 100.0% |
| BIO → SOL (native) | 1 | 1 | 100.0% |
| SOLANGELES → SOL (native) | 1 | 1 | 100.0% |
| nub → SOL (native) | 1 | 1 | 100.0% |
| CYPH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Clash | 1 | 1 | 100.0% |
| Tokabu → SOL (native) | 1 | 1 | 100.0% |
| ALTSZN → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NATIX | 1 | 1 | 100.0% |
| wSOL → BELIEVE | 1 | 1 | 100.0% |
| Clash → SOL (native) | 1 | 1 | 100.0% |
| Old Slerf → SOL (native) | 1 | 1 | 100.0% |
| NATIX → SOL (native) | 1 | 1 | 100.0% |
| SOLCEX → SOL (native) | 1 | 1 | 100.0% |
| BELIEVE → SOL (native) | 1 | 1 | 100.0% |
| boden → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Clude | 1 | 1 | 100.0% |
| BRK.Bx → SOL (native) | 1 | 1 | 100.0% |
| Clude → SOL (native) | 1 | 1 | 100.0% |
| MRNA → SOL (native) | 1 | 1 | 100.0% |
| MELANIA → SOL (native) | 1 | 1 | 100.0% |
| hyloSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ZERO | 1 | 1 | 100.0% |
| ZERO → SOL (native) | 1 | 1 | 100.0% |
| bonkSOL → SOL (native) | 1 | 1 | 100.0% |
| MRVL → SOL (native) | 1 | 1 | 100.0% |
| W → SOL (native) | 1 | 1 | 100.0% |
| LLY → SOL (native) | 1 | 1 | 100.0% |
| IO → SOL (native) | 1 | 1 | 100.0% |
| PFE → SOL (native) | 1 | 1 | 100.0% |
| retire → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ALPHA | 1 | 1 | 100.0% |
| HEEBOO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RKC | 1 | 1 | 100.0% |
| stSOL → SOL (native) | 1 | 1 | 100.0% |
| RETARDIO → SOL (native) | 1 | 1 | 100.0% |
| ALPHA → SOL (native) | 1 | 1 | 100.0% |
| RKC → SOL (native) | 1 | 1 | 100.0% |
| GHOST → SOL (native) | 1 | 1 | 100.0% |
| pippin → SOL (native) | 1 | 1 | 100.0% |
| DJI6930 → SOL (native) | 1 | 1 | 100.0% |
| DITH → SOL (native) | 1 | 1 | 100.0% |
| GOAT → SOL (native) | 1 | 1 | 100.0% |
| ALCH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Chud | 1 | 1 | 100.0% |
| wSOL → unc | 1 | 1 | 100.0% |
| Chud → SOL (native) | 1 | 1 | 100.0% |
| UMBRA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → crypto | 1 | 1 | 100.0% |
| URANUS → SOL (native) | 1 | 1 | 100.0% |
| unc → SOL (native) | 1 | 1 | 100.0% |
| DADDY → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TBB | 1 | 1 | 100.0% |
| crypto → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SOLO | 1 | 1 | 100.0% |
| BITCOIN → SOL (native) | 1 | 1 | 100.0% |
| wSOL → swarms | 1 | 1 | 100.0% |
| wSOL → BULLISH | 1 | 1 | 100.0% |
| swarms → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BITTY | 1 | 1 | 100.0% |
| TBB → SOL (native) | 1 | 1 | 100.0% |
| SOLO → SOL (native) | 1 | 1 | 100.0% |
| BULLISH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PUPS | 1 | 1 | 100.0% |
| wSOL → xavier | 1 | 1 | 100.0% |
| BITTY → SOL (native) | 1 | 1 | 100.0% |
| PUPS → SOL (native) | 1 | 1 | 100.0% |
| xavier → SOL (native) | 1 | 1 | 100.0% |
| ZEREBRO → SOL (native) | 1 | 1 | 100.0% |
| RAGEGUY → SOL (native) | 1 | 1 | 100.0% |
| PURPE → SOL (native) | 1 | 1 | 100.0% |
| RKLB → SOL (native) | 1 | 1 | 100.0% |
| STREAM → SOL (native) | 1 | 1 | 100.0% |
| LOCKIN → SOL (native) | 1 | 1 | 100.0% |
| wSOL → mini | 1 | 1 | 100.0% |
| sUSD.infra → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GOR | 1 | 1 | 100.0% |
| mini → SOL (native) | 1 | 1 | 100.0% |
| ARX → SOL (native) | 1 | 1 | 100.0% |
| GOR → SOL (native) | 1 | 1 | 100.0% |
| vSOL → SOL (native) | 1 | 1 | 100.0% |
| PBTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ZAUTH | 1 | 1 | 100.0% |
| TAI → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SPSC | 1 | 1 | 100.0% |
| wSOL → Shoggoth | 1 | 1 | 100.0% |
| ZAUTH → SOL (native) | 1 | 1 | 100.0% |
| Shoggoth → SOL (native) | 1 | 1 | 100.0% |
| SIGMA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RNT | 1 | 1 | 100.0% |
| SCS → SOL (native) | 1 | 1 | 100.0% |
| RNT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RBT | 1 | 1 | 100.0% |
| BORG → SOL (native) | 1 | 1 | 100.0% |
| sSOL → SOL (native) | 1 | 1 | 100.0% |
| SC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GIKO | 1 | 1 | 100.0% |
| RBT → SOL (native) | 1 | 1 | 100.0% |
| dSOL → SOL (native) | 1 | 1 | 100.0% |
| GIKO → SOL (native) | 1 | 1 | 100.0% |
| LST → SOL (native) | 1 | 1 | 100.0% |
| SOLNIC → SOL (native) | 1 | 1 | 100.0% |
| HEGE → SOL (native) | 1 | 1 | 100.0% |
| USA → SOL (native) | 1 | 1 | 100.0% |
| SHIB → SOL (native) | 1 | 1 | 100.0% |
| GUAC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → WINGS | 1 | 1 | 100.0% |
| AUDIO → SOL (native) | 1 | 1 | 100.0% |
| WINGS → SOL (native) | 1 | 1 | 100.0% |
| URA → SOL (native) | 1 | 1 | 100.0% |
| HARAMBE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SOLC | 1 | 1 | 100.0% |
| SOLC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ATR | 1 | 1 | 100.0% |
| lanternSOL → SOL (native) | 1 | 1 | 100.0% |
| ATR → SOL (native) | 1 | 1 | 100.0% |
| BILLY → SOL (native) | 1 | 1 | 100.0% |
| SLOTH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SELFIE | 1 | 1 | 100.0% |
| DOLAN → SOL (native) | 1 | 1 | 100.0% |
| MOTHER → SOL (native) | 1 | 1 | 100.0% |
| ZAMA → SOL (native) | 1 | 1 | 100.0% |
| EUROP → SOL (native) | 1 | 1 | 100.0% |
| SELFIE → SOL (native) | 1 | 1 | 100.0% |
| ISC → SOL (native) | 1 | 1 | 100.0% |
| STAN → SOL (native) | 1 | 1 | 100.0% |
| JSOL → SOL (native) | 1 | 1 | 100.0% |
| $michi → SOL (native) | 1 | 1 | 100.0% |
| USEDCAR → SOL (native) | 1 | 1 | 100.0% |
| AURY → SOL (native) | 1 | 1 | 100.0% |
| VCHF → SOL (native) | 1 | 1 | 100.0% |
| DUKO → SOL (native) | 1 | 1 | 100.0% |
| UPT → SOL (native) | 1 | 1 | 100.0% |
| $WAFFLES → SOL (native) | 1 | 1 | 100.0% |
| tremp → SOL (native) | 1 | 1 | 100.0% |
| $TOAD → SOL (native) | 1 | 1 | 100.0% |
| MNGO → SOL (native) | 1 | 1 | 100.0% |
| HEEHEE → SOL (native) | 1 | 1 | 100.0% |
| MANEKI → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HAMMY | 1 | 1 | 100.0% |
| AVICI → SOL (native) | 1 | 1 | 100.0% |
| SOLAMA → SOL (native) | 1 | 1 | 100.0% |
| CHAT → SOL (native) | 1 | 1 | 100.0% |
| WHALES → SOL (native) | 1 | 1 | 100.0% |
| Hobbes → SOL (native) | 1 | 1 | 100.0% |
| $BEER → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 30 | 30 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 29 | 29 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 29 | 29 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 28 | 28 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 27 | 27 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 27 | 27 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 27 | 27 | 100.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 26 | 26 | 100.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 26 | 26 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 26 | 26 | 100.0% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 26 | 26 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 25 | 25 | 100.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 25 | 25 | 100.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 25 | 25 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 24 | 24 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 24 | 24 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 24 | 24 | 100.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 24 | 23 | 95.8% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 24 | 24 | 100.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 24 | 24 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 23 | 23 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 23 | 23 | 100.0% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 23 | 23 | 100.0% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 23 | 23 | 100.0% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 23 | 23 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 22 | 22 | 100.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 22 | 22 | 100.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 22 | 22 | 100.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 22 | 22 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 21 | 21 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 14:57:45 | TripleT → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xe50a9093…` [🐞](https://debug.barn.cow.fi/order/0xe50a9093a6875a2f9003736b516f72c7fefeee1fc24d9f3fdc5ab014455ff752) |
