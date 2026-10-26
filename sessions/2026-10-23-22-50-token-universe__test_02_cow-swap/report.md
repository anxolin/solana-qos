# Solana QoS report: 2026-10-23-22-50-token-universe__test_02_cow-swap

Barn, orders created between `2026-10-23T22:52:46.036Z` and `2026-10-23T23:05:24.397Z`. Data fetched 2026-10-23T23:15:34+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 596 |
| Orders executed | **386** (64.8%) |
| Sponsored orders never created on-chain | 209 (35.1%) |
| Traders | 30 |
| Settlement txs | 386 |

## Scenario

344 of 558 scenario rows completed. 0 retries, 30 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 22:52:46 | 1 | 1 | sell 0.005 SOL → 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN | filled | 8s | 1 |  |
| 22:52:54 | 2 | 1 | sell 0.267 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN → SOL | filled | 13s | 1 |  |
| 22:52:46 | 3 | 2 | sell 0.005 SOL → DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF | filled | 8s | 1 |  |
| 22:52:54 | 4 | 2 | sell 0.0597 DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF → SOL | failed | 38s | 1 | main expired |
| 22:52:46 | 5 | 3 | sell 0.005 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | filled | 8s | 1 |  |
| 22:52:54 | 6 | 3 | sell 0.000681 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu → SOL | filled | 8s | 1 |  |
| 22:52:46 | 7 | 4 | sell 0.005 SOL → PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL | filled | 8s | 1 |  |
| 22:52:54 | 8 | 4 | sell 290 PerPsCe2SJ7Q25CN4R5TTX4fmBdmknE2hQmqCt96fHL → SOL | filled | 9s | 1 |  |
| 22:52:46 | 9 | 5 | sell 0.005 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 8s | 1 |  |
| 22:52:54 | 10 | 5 | sell 0.0029 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 → SOL | filled | 10s | 1 |  |
| 22:52:46 | 11 | 6 | sell 0.005 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | filled | 13s | 1 |  |
| 22:52:59 | 12 | 6 | sell 0.000917 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX → SOL | failed | 39s | 1 | main expired |
| 22:52:46 | 13 | 7 | sell 0.005 SOL → 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E | filled | 13s | 1 |  |
| 22:52:59 | 14 | 7 | sell 0.493 5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E → SOL | filled | 31s | 1 |  |
| 22:52:46 | 15 | 8 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 19s | 1 |  |
| 22:53:05 | 16 | 8 | sell 0.00128 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re → SOL | failed | 39s | 1 | main expired |
| 22:52:46 | 17 | 9 | sell 0.005 SOL → BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump | filled | 14s | 1 |  |
| 22:52:59 | 18 | 9 | sell 53.1 BCdwQBAn8dYB5YjTsoB6TdHAWokxv28k2oZUodERpump → SOL | filled | 11s | 1 |  |
| 22:52:46 | 19 | 10 | sell 0.005 SOL → SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH | filled | 14s | 1 |  |
| 22:52:59 | 20 | 10 | sell 0.000308 SNDKbwMUQvZhnLnxLduradgLHG5KrPuKwpnrkkGRhfH → SOL | filled | 11s | 1 |  |
| 22:52:46 | 21 | 11 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 14s | 1 |  |
| 22:53:00 | 22 | 11 | sell 149000 DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 → SOL | filled | 11s | 1 |  |
| 22:52:46 | 23 | 12 | sell 0.005 SOL → Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs | filled | 15s | 1 |  |
| 22:53:00 | 24 | 12 | sell 0.783 Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs → SOL | filled | 10s | 1 |  |
| 22:52:46 | 25 | 13 | sell 0.005 SOL → orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE | filled | 15s | 1 |  |
| 22:53:00 | 26 | 13 | sell 0.207 orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE → SOL | failed | 39s | 1 | main expired |
| 22:52:46 | 27 | 14 | sell 0.005 SOL → jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL | filled | 21s | 1 |  |
| 22:53:06 | 28 | 14 | sell 0.962 jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL → SOL | filled | 33s | 1 |  |
| 22:52:46 | 29 | 15 | sell 0.005 SOL → Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump | filled | 15s | 1 |  |
| 22:53:01 | 30 | 15 | sell 157 Ge87EtsjwRQbHaqQmKRno69RFTwh9bfSsm99XNxTpump → SOL | filled | 23s | 1 |  |
| 22:52:46 | 31 | 16 | sell 0.005 SOL → J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump | filled | 15s | 1 |  |
| 22:53:01 | 32 | 16 | sell 74.4 J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump → SOL | failed | 39s | 1 | main expired |
| 22:52:46 | 33 | 17 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 16s | 1 |  |
| 22:53:02 | 34 | 17 | sell 0.44 HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr → SOL | failed | 38s | 1 | main expired |
| 22:52:46 | 35 | 18 | sell 0.005 SOL → J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr | filled | 11s | 1 |  |
| 22:52:56 | 36 | 18 | sell 1.31 J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr → SOL | filled | 9s | 1 |  |
| 22:52:46 | 37 | 19 | sell 0.005 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 11s | 1 |  |
| 22:52:56 | 38 | 19 | sell 0.000482 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 → SOL | filled | 10s | 1 |  |
| 22:52:46 | 39 | 20 | sell 0.005 SOL → USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA | filled | 17s | 1 |  |
| 22:53:02 | 40 | 20 | sell 0.492 USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA → SOL | failed | 38s | 1 | main expired |
| 22:52:46 | 41 | 21 | sell 0.005 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | filled | 17s | 1 |  |
| 22:53:03 | 42 | 21 | sell 0.0014 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN → SOL | failed | 38s | 1 | main expired |
| 22:52:46 | 43 | 22 | sell 0.005 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | filled | 17s | 1 |  |
| 22:53:03 | 44 | 22 | sell 0.0186 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc → SOL | failed | 39s | 1 | main expired |
| 22:52:46 | 45 | 23 | sell 0.005 SOL → METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m | filled | 18s | 1 |  |
| 22:53:03 | 46 | 23 | sell 10 METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m → SOL | failed | 76s | 2 | main expired |
| 22:52:46 | 47 | 24 | sell 0.005 SOL → Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump | filled | 18s | 1 |  |
| 22:53:04 | 48 | 24 | sell 61.2 Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump → SOL | filled | 10s | 1 |  |
| 22:52:46 | 49 | 25 | sell 0.005 SOL → DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 | filled | 12s | 1 |  |
| 22:52:58 | 50 | 25 | sell 57.4 DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2 → SOL | filled | 14s | 1 |  |
| 22:52:46 | 51 | 26 | sell 0.005 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 12s | 1 |  |
| 22:52:58 | 52 | 26 | sell 0.00571 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | failed | 38s | 1 | main expired |
| 22:52:46 | 53 | 27 | sell 0.005 SOL → DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 | filled | 12s | 1 |  |
| 22:52:58 | 54 | 27 | sell 25.9 DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5 → SOL | failed | 38s | 1 | main expired |
| 22:52:46 | 55 | 28 | sell 0.005 SOL → nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 | filled | 13s | 1 |  |
| 22:52:58 | 56 | 28 | sell 0.836 nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7 → SOL | filled | 15s | 1 |  |
| 22:52:46 | 57 | 29 | sell 0.005 SOL → BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T | filled | 13s | 1 |  |
| 22:52:59 | 58 | 29 | sell 0.0173 BoTx8y9ynfdxf5ZjWtCoBVkff52qKA82ysaLU8ZM6d8T → SOL | filled | 11s | 1 |  |
| 22:52:46 | 59 | 30 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 13s | 1 |  |
| 22:52:58 | 60 | 30 | sell 0.00309 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm → SOL | failed | 35s | 1 | main expired |
| 22:53:07 | 61 | 1 | sell 0.005 SOL → KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS | filled | 13s | 1 |  |
| 22:53:20 | 62 | 1 | sell 14.2 KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS → SOL | failed | 42s | 1 | acquire KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS expired |
| 22:53:32 | 63 | 2 | sell 0.005 SOL → 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx | failed | 35s | 1 | main expired |
| 22:54:07 | 64 | 2 | sell 0.242 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx → SOL | failed | 44s | 1 | acquire 7ga6rtE9qSb3wdEiDCpTu2kHqoGVfT52jD8ign1rYTvx expired |
| 22:53:02 | 65 | 3 | sell 0.005 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | failed | 39s | 1 | main expired |
| 22:53:41 | 66 | 3 | sell 0.000655 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ → SOL | failed | 64s | 2 | main expired |
| 22:53:03 | 67 | 4 | sell 0.005 SOL → 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump | failed | 39s | 1 | main expired |
| 22:53:42 | 68 | 4 | sell 61.9 69LjZUUzxj3Cb3Fxeo1X4QpYEQTboApkhXTysPpbpump → SOL | failed | 56s | 2 | main expired |
| 22:53:04 | 69 | 5 | sell 0.005 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | filled | 10s | 1 |  |
| 22:53:14 | 70 | 5 | sell 0.00206 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 → SOL | failed | 41s | 1 | main expired |
| 22:53:38 | 71 | 6 | sell 0.005 SOL → PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b | filled | 12s | 1 |  |
| 22:53:50 | 72 | 6 | sell 10.9 PEAQjk7SRS6rXHVFFmpRr7zrC4g5ZuEebpwTxvaLr3b → SOL | filled | 18s | 1 |  |
| 22:53:30 | 73 | 7 | sell 0.005 SOL → CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn | failed | 34s | 1 | main expired |
| 22:54:04 | 74 | 7 | sell 5.93e-06 CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn → SOL | filled | 39s | 2 |  |
| 22:53:44 | 75 | 8 | sell 0.005 SOL → 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk | filled | 11s | 1 |  |
| 22:53:55 | 76 | 8 | sell 0.88 31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk → SOL | filled | 11s | 1 |  |
| 22:53:10 | 77 | 9 | sell 0.005 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | failed | 36s | 1 | main expired |
| 22:53:46 | 78 | 9 | sell 0.00147 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp → SOL | failed | 45s | 1 | acquire XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp expired |
| 22:53:10 | 79 | 10 | sell 0.005 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 36s | 1 | main expired |
| 22:53:47 | 80 | 10 | sell 0.00129 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | failed | 48s | 1 | acquire XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB expired |
| 22:53:10 | 81 | 11 | sell 0.005 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | failed | 36s | 1 | main expired |
| 22:53:47 | 82 | 11 | sell 0.00272 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu → SOL | filled | 60s | 2 |  |
| 22:53:10 | 83 | 12 | sell 0.005 SOL → TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo | failed | 37s | 1 | main expired |
| 22:53:47 | 84 | 12 | sell 0.0023 TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo → SOL | failed | 44s | 1 | acquire TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo expired |
| 22:53:40 | 85 | 13 | sell 0.005 SOL → 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw | filled | 12s | 1 |  |
| 22:53:51 | 86 | 13 | sell 0.433 59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw → SOL | filled | 15s | 1 |  |
| 22:53:39 | 87 | 14 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 37s | 1 |  |
| 22:54:16 | 88 | 14 | sell 2.33 EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm → SOL | filled | 7s | 1 |  |
| 22:53:24 | 89 | 15 | sell 0.005 SOL → SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 | failed | 35s | 1 | main expired |
| 22:53:59 | 90 | 15 | sell 30.3 SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 → SOL | failed | 44s | 1 | acquire SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3 expired |
| 22:53:40 | 91 | 16 | sell 0.005 SOL → SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH | filled | 17s | 1 |  |
| 22:53:57 | 92 | 16 | sell 0.00537 SATqS9DYpLQsM2z51P4QCoqJRHa5wboV4qjJerJRUSH → SOL | filled | 13s | 1 |  |
| 22:53:40 | 93 | 17 | sell 0.005 SOL → ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU | filled | 8s | 1 |  |
| 22:53:48 | 94 | 17 | sell 213 ZBCNpuD7YMXzTHB2fhGkGi78MNsHGLRXUhRewNRm9RU → SOL | failed | 34s | 1 | main expired |
| 22:53:06 | 95 | 18 | sell 0.005 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | failed | 39s | 1 | main expired |
| 22:53:44 | 96 | 18 | sell 0.00451 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg → SOL | failed | 43s | 1 | acquire XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg expired |
| 22:53:07 | 97 | 19 | sell 0.005 SOL → 7KEPApdbBMByrmqihz3bht2uMhFQcatjfSFQCKq66kH3 | failed | 38s | 1 | main expired |
| 22:53:45 | 98 | 19 | sell 87.9 7KEPApdbBMByrmqihz3bht2uMhFQcatjfSFQCKq66kH3 → SOL | filled | 37s | 2 |  |
| 22:53:40 | 99 | 20 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 36s | 1 | main expired |
| 22:54:16 | 100 | 20 | sell 0.00409 pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL → SOL | failed | 44s | 1 | acquire pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL expired |
| 22:53:41 | 101 | 21 | sell 0.005 SOL → C1MHyoTJpRTeS9AQCyspNVu2EWAYCZwmJ1jNkEArFP1f | filled | 21s | 1 |  |
| 22:54:02 | 102 | 21 | sell 3.48 C1MHyoTJpRTeS9AQCyspNVu2EWAYCZwmJ1jNkEArFP1f → SOL | failed | 39s | 1 | main expired |
| 22:53:42 | 103 | 22 | sell 0.005 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | failed | 37s | 1 | main expired |
| 22:54:19 | 104 | 22 | sell 0.00314 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ → SOL | filled | 57s | 2 |  |
| 22:54:20 | 105 | 23 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 12s | 1 |  |
| 22:54:31 | 106 | 23 | sell 479 ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 → SOL | filled | 8s | 1 |  |
| 22:53:14 | 107 | 24 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 28s | 1 |  |
| 22:53:42 | 108 | 24 | sell 0.000117 AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P → SOL | filled | 11s | 1 |  |
| 22:53:12 | 109 | 25 | sell 0.005 SOL → 8SMMso8Muv8d6i4WmMDthKt6TN1ysN6937sx3DKLXZqB | failed | 37s | 1 | main expired |
| 22:53:48 | 110 | 25 | sell 8.14 8SMMso8Muv8d6i4WmMDthKt6TN1ysN6937sx3DKLXZqB → SOL | failed | 60s | 2 | main expired |
| 22:53:36 | 111 | 26 | sell 0.005 SOL → 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 | failed | 95s | 1 | main timeout |
| 22:55:11 | 112 | 26 | sell 248 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 → SOL | failed | 45s | 1 | acquire 63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9 expired |
| 22:53:36 | 113 | 27 | sell 0.005 SOL → A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump | filled | 11s | 1 |  |
| 22:53:47 | 114 | 27 | sell 313 A13oRB9FFaiUjfi6LdCg6p9ka1u8SfGkUFs4SKvPpump → SOL | filled | 6s | 1 |  |
| 22:53:13 | 115 | 28 | sell 0.005 SOL → 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ | failed | 36s | 1 | main expired |
| 22:53:49 | 116 | 28 | sell 5.92e-06 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ → SOL | failed | 46s | 1 | acquire 5XZw2LKTyrfvfiskJ78AMpackRjPcyCif1WhUsPDuVqQ expired |
| 22:53:09 | 117 | 29 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 37s | 1 | main expired |
| 22:53:46 | 118 | 29 | sell 0.000666 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa → SOL | failed | 62s | 2 | main expired |
| 22:53:33 | 119 | 30 | sell 0.005 SOL → GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 | failed | 36s | 1 | main expired |
| 22:54:09 | 120 | 30 | sell 0.0325 GRNDYDpqwpCm6jVxpbh4xT5AM4r3p391qYsKTHqgaET2 → SOL | failed | 53s | 2 | main expired |
| 22:54:01 | 121 | 1 | sell 0.005 SOL → J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd | failed | 36s | 1 | main expired |
| 22:54:37 | 122 | 1 | sell 13.8 J6pQQ3FAcJQeWPPGppWRb4nM8jU3wLyYbRrLh7feMfvd → SOL | failed | 70s | 2 | main expired |
| 22:54:50 | 123 | 2 | sell 0.005 SOL → 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 | filled | 9s | 1 |  |
| 22:54:59 | 124 | 2 | sell 0.342 6UpQcMAb5xMzxc7ZfPaVMgx3KqsvKZdT5U718BzD5We2 → SOL | filled | 11s | 1 |  |
| 22:54:45 | 125 | 3 | sell 0.005 SOL → DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow | filled | 13s | 1 |  |
| 22:54:58 | 126 | 3 | sell 0.0252 DKNGQFNGQmoBdXSRGKJ8tTu7uPDasw5JDcfMmWniNfow → SOL | failed | 40s | 1 | main expired |
| 22:54:38 | 127 | 4 | sell 0.005 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | filled | 16s | 1 |  |
| 22:54:54 | 128 | 4 | sell 0.0024 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | failed | 39s | 1 | main expired |
| 22:53:55 | 129 | 5 | sell 0.005 SOL → 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC | filled | 33s | 1 |  |
| 22:54:28 | 130 | 5 | sell 0.471 3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC → SOL | filled | 12s | 1 |  |
| 22:54:08 | 131 | 6 | sell 0.005 SOL → GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A | failed | 37s | 1 | main expired |
| 22:54:45 | 132 | 6 | sell 0.000117 GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A → SOL | failed | 45s | 1 | acquire GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A expired |
| 22:54:43 | 133 | 7 | sell 0.005 SOL → GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump | failed | 39s | 1 | main expired |
| 22:55:22 | 134 | 7 | sell 385 GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump → SOL | failed | 43s | 1 | acquire GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump expired |
| 22:54:06 | 135 | 8 | sell 0.005 SOL → HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 | failed | 37s | 1 | main expired |
| 22:54:43 | 136 | 8 | sell 5.73 HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 → SOL | failed | 45s | 1 | acquire HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3 expired |
| 22:54:31 | 137 | 9 | sell 0.005 SOL → 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS | failed | 35s | 1 | main expired |
| 22:55:06 | 138 | 9 | sell 118 8XtRWb4uAAJFMP4QQhoYYCWR6XXb7ybcCdiqPwz9s5WS → SOL | filled | 56s | 2 |  |
| 22:54:35 | 139 | 10 | sell 0.005 SOL → CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu | filled | 16s | 1 |  |
| 22:54:50 | 140 | 10 | sell 7.59 CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu → SOL | failed | 35s | 1 | main expired |
| 22:54:47 | 141 | 11 | sell 0.005 SOL → H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump | filled | 7s | 1 |  |
| 22:54:54 | 142 | 11 | sell 219 H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump → SOL | filled | 8s | 1 |  |
| 22:54:32 | 143 | 12 | sell 0.005 SOL → Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu | filled | 13s | 1 |  |
| 22:54:45 | 144 | 12 | sell 38.3 Eg2ymQ2aQqjMcibnmTt8erC6Tvk9PVpJZCxvVPJz2agu → SOL | filled | 39s | 2 |  |
| 22:54:06 | 145 | 13 | sell 0.005 SOL → 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump | filled | 7s | 1 |  |
| 22:54:13 | 146 | 13 | sell 78 6NwarBvDkXhByqVp2Qkq5i9XbtA2B3Bwe8SWGu9vpump → SOL | filled | 11s | 1 |  |
| 22:54:23 | 147 | 14 | sell 0.005 SOL → 1zJX5gRnjLgmTpq5sVwkq69mNDQkCemqoasyjaPW6jm | filled | 12s | 1 |  |
| 22:54:36 | 148 | 14 | sell 46.8 1zJX5gRnjLgmTpq5sVwkq69mNDQkCemqoasyjaPW6jm → SOL | filled | 26s | 2 |  |
| 22:54:43 | 149 | 15 | sell 0.005 SOL → HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx | filled | 26s | 1 |  |
| 22:55:08 | 150 | 15 | sell 0.0168 HiMSSzzwkZkrXJ4PGVJRdtfLaANeAztjjcgk5Dxe7Lwx → SOL | failed | 37s | 1 | main expired |
| 22:54:10 | 151 | 16 | sell 0.005 SOL → METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta | failed | 37s | 1 | main expired |
| 22:54:47 | 152 | 16 | sell 0.0849 METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta → SOL | filled | 44s | 2 |  |
| 22:54:22 | 153 | 17 | sell 0.005 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | filled | 35s | 1 |  |
| 22:54:57 | 154 | 17 | sell 0.00453 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH → SOL | filled | 8s | 1 |  |
| 22:54:27 | 155 | 18 | sell 0.005 SOL → NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg | filled | 7s | 1 |  |
| 22:54:34 | 156 | 18 | sell 0.0141 NKEda5nHhNGgjrE9nDdMvaEmkmJ96qqxzBVZEcKmjSg → SOL | failed | 40s | 1 | main expired |
| 22:54:21 | 157 | 19 | sell 0.005 SOL → 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump | filled | 7s | 1 |  |
| 22:54:28 | 158 | 19 | sell 184 9Pfync3ejPC9eHqVzq3nYQJAhyhjqpnB9UsaSfLxpump → SOL | filled | 12s | 1 |  |
| 22:55:00 | 159 | 20 | sell 0.005 SOL → CzLTZppPdZtTjyq3WGpHLstoc3GLhu7zH5Zg6xUa6Gv5 | filled | 12s | 1 |  |
| 22:55:12 | 160 | 20 | sell 0.00575 CzLTZppPdZtTjyq3WGpHLstoc3GLhu7zH5Zg6xUa6Gv5 → SOL | filled | 20s | 1 |  |
| 22:54:41 | 161 | 21 | sell 0.005 SOL → 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 | filled | 8s | 1 |  |
| 22:54:49 | 162 | 21 | sell 2.28 72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1 → SOL | failed | 38s | 1 | main expired |
| 22:55:16 | 163 | 22 | sell 0.005 SOL → GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc | failed | 39s | 1 | main expired |
| 22:55:54 | 164 | 22 | sell 1.48 GbbesPbaYh5uiAZSYNXTc7w9jty1rpg3P9L4JeN4LkKc → SOL | filled | 25s | 2 |  |
| 22:54:39 | 165 | 23 | sell 0.005 SOL → bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 | failed | 33s | 1 | main expired |
| 22:55:12 | 166 | 23 | sell 0.00341 bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 → SOL | failed | 40s | 1 | acquire bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1 expired |
| 22:53:53 | 167 | 24 | sell 0.005 SOL → 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump | filled | 11s | 1 |  |
| 22:54:04 | 168 | 24 | sell 55.9 739dnZEG4yaBWFsY8L8ZwrfhGG6dhtCSercW8Umspump → SOL | filled | 36s | 2 |  |
| 22:54:48 | 169 | 25 | sell 0.005 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | failed | 37s | 1 | main expired |
| 22:55:25 | 170 | 25 | sell 0.00189 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg → SOL | failed | 44s | 1 | acquire Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg expired |
| 22:55:56 | 171 | 26 | sell 0.005 SOL → EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 | filled | 11s | 1 |  |
| 22:56:07 | 172 | 26 | sell 511 EpXtn6xGoZ4Y45vRjiDUHSCGbBoJD5FaEqZbF98YswH1 → SOL | filled | 7s | 1 |  |
| 22:53:53 | 173 | 27 | sell 0.005 SOL → BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin | filled | 11s | 1 |  |
| 22:54:04 | 174 | 27 | sell 13.1 BCNT4t3rv5Hva8RnUtJUJLnxzeFAabcYp8CghC1SmWin → SOL | filled | 11s | 1 |  |
| 22:54:35 | 175 | 28 | sell 0.005 SOL → RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE | filled | 8s | 1 |  |
| 22:54:43 | 176 | 28 | sell 0.0101 RBLXDGRD64AtRamHMFVcjqne3Ar7NLWtFtYNtsrf1cE → SOL | filled | 40s | 1 |  |
| 22:54:48 | 177 | 29 | sell 0.005 SOL → AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc | filled | 12s | 1 |  |
| 22:55:00 | 178 | 29 | sell 0.168 AMC1qwR9KhiyrQBRPrxnfo4JfMeMZqEBvt5tgTytNNoc → SOL | failed | 34s | 1 | main expired |
| 22:55:02 | 179 | 30 | sell 0.005 SOL → rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof | filled | 17s | 1 |  |
| 22:55:19 | 180 | 30 | sell 0.264 rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof → SOL | failed | 34s | 1 | main expired |
| 22:55:48 | 181 | 1 | sell 0.005 SOL → BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump | filled | 24s | 1 |  |
| 22:56:12 | 182 | 1 | sell 318 BcHEaaTCvycPwwsJ9yQTXdHP9X2gCLkznDbZ8VySpump → SOL | failed | 63s | 2 | main expired |
| 22:55:10 | 183 | 2 | sell 0.005 SOL → 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump | filled | 8s | 1 |  |
| 22:55:18 | 184 | 2 | sell 291 8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump → SOL | filled | 12s | 1 |  |
| 22:55:38 | 185 | 3 | sell 0.005 SOL → XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump | failed | 37s | 1 | main expired |
| 22:56:15 | 186 | 3 | sell 342 XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump → SOL | failed | 40s | 1 | acquire XkeTXo1125vz5H9svJpGiw4JvLbN8VmMu9cmMvspump expired |
| 22:55:33 | 187 | 4 | sell 0.005 SOL → BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp | filled | 12s | 1 |  |
| 22:55:44 | 188 | 4 | sell 0.00445 BABANGA4JE7Kkam4nTrALAwAVgsNJUuFJnnkF7S16BZp → SOL | failed | 37s | 1 | main expired |
| 22:54:40 | 189 | 5 | sell 0.005 SOL → DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw | failed | 38s | 1 | main expired |
| 22:55:18 | 190 | 5 | sell 0.00863 DRAMjSWR7HRfJKjRkvQWYL2bcaejaVhuxEcjf4pAY4Cw → SOL | failed | 56s | 2 | main expired |
| 22:55:30 | 191 | 6 | sell 0.005 SOL → AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 | filled | 13s | 1 |  |
| 22:55:43 | 192 | 6 | sell 0.00291 AavE1kKKnesPw4MuRJmJ9jZs9QzEE8CPxQ3ViczUDfc1 → SOL | failed | 37s | 1 | main expired |
| 22:56:05 | 193 | 7 | sell 0.005 SOL → he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A | failed | 38s | 1 | main expired |
| 22:56:44 | 194 | 7 | sell 0.00378 he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A → SOL | failed | 45s | 1 | acquire he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A expired |
| 22:55:28 | 195 | 8 | sell 0.005 SOL → 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T | failed | 37s | 1 | main expired |
| 22:56:06 | 196 | 8 | sell 1.42 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T → SOL | failed | 41s | 1 | acquire 9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T expired |
| 22:56:02 | 197 | 9 | sell 0.005 SOL → 3vgopg7xm3EWkXfxmWPUpcf7g939hecfqg18sLuXDzVt | filled | 7s | 1 |  |
| 22:56:10 | 198 | 9 | sell 36.7 3vgopg7xm3EWkXfxmWPUpcf7g939hecfqg18sLuXDzVt → SOL | filled | 13s | 1 |  |
| 22:55:25 | 199 | 10 | sell 0.005 SOL → HgBRWfYxEfvPhtqkaeymCQtHCrKE46qQ43pKe8HCpump | failed | 38s | 1 | main expired |
| 22:56:03 | 200 | 10 | sell 32.9 HgBRWfYxEfvPhtqkaeymCQtHCrKE46qQ43pKe8HCpump → SOL | filled | 48s | 2 |  |
| 22:55:02 | 201 | 11 | sell 0.005 SOL → B5WTLaRwaUQpKk7ir1wniNB6m5o8GgMrimhKMYan2R6B | filled | 12s | 1 |  |
| 22:55:15 | 202 | 11 | sell 610 B5WTLaRwaUQpKk7ir1wniNB6m5o8GgMrimhKMYan2R6B → SOL | filled | 12s | 1 |  |
| 22:55:24 | 203 | 12 | sell 0.005 SOL → 1NJMqVM4PadjuzYmeB7zV7q7DV8oB3ExaQCd9x6KsLz | filled | 20s | 1 |  |
| 22:55:44 | 204 | 12 | sell 0.0711 1NJMqVM4PadjuzYmeB7zV7q7DV8oB3ExaQCd9x6KsLz → SOL | failed | 62s | 2 | main expired |
| 22:54:24 | 205 | 13 | sell 0.005 SOL → A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump | filled | 12s | 1 |  |
| 22:54:36 | 206 | 13 | sell 99.4 A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump → SOL | failed | 35s | 1 | main expired |
| 22:55:02 | 207 | 14 | sell 0.005 SOL → BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p | filled | 8s | 1 |  |
| 22:55:10 | 208 | 14 | sell 22.9 BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p → SOL | failed | 38s | 1 | main expired |
| 22:55:46 | 209 | 15 | sell 0.005 SOL → 5g6wVay8NYQ5Tspo4irj9YqSFfQoPDW7apkX352N29PP | filled | 7s | 1 |  |
| 22:55:53 | 210 | 15 | sell 12.8 5g6wVay8NYQ5Tspo4irj9YqSFfQoPDW7apkX352N29PP → SOL | filled | 11s | 1 |  |
| 22:55:31 | 211 | 16 | sell 0.005 SOL → ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq | failed | 38s | 1 | main expired |
| 22:56:09 | 212 | 16 | sell 55.8 ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq → SOL | failed | 45s | 1 | acquire ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq expired |
| 22:55:05 | 213 | 17 | sell 0.005 SOL → SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz | filled | 35s | 1 |  |
| 22:55:40 | 214 | 17 | sell 0.0783 SNAPcESrvnH8yUdgeMF6xm1hym9b6hW6s8YeqeHdZFz → SOL | failed | 39s | 1 | main expired |
| 22:55:15 | 215 | 18 | sell 0.005 SOL → BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk | filled | 16s | 1 |  |
| 22:55:31 | 216 | 18 | sell 0.00217 BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk → SOL | failed | 44s | 1 | acquire BMKdM4yUxX12moFqVk195k7coMbaybd4RUKCUdm7D1Sk expired |
| 22:54:40 | 217 | 19 | sell 0.005 SOL → 6SjVTj1VGwFSXn7wEjwFm77LvACeTqB7sQUebYKX8Ds5 | filled | 12s | 1 |  |
| 22:54:53 | 218 | 19 | sell 231 6SjVTj1VGwFSXn7wEjwFm77LvACeTqB7sQUebYKX8Ds5 → SOL | filled | 13s | 1 |  |
| 22:55:33 | 219 | 20 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 17s | 1 |  |
| 22:55:49 | 220 | 20 | sell 0.427 A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 → SOL | failed | 38s | 1 | main expired |
| 22:55:27 | 221 | 21 | sell 0.005 SOL → RDDTGbhHwVXfyCvQMXzzowKjf5qrYBZAnehoXW83ooh | filled | 12s | 1 |  |
| 22:55:39 | 222 | 21 | sell 0.00307 RDDTGbhHwVXfyCvQMXzzowKjf5qrYBZAnehoXW83ooh → SOL | failed | 38s | 1 | main expired |
| 22:56:19 | 223 | 22 | sell 0.005 SOL → CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 | failed | 38s | 1 | main expired |
| 22:56:57 | 224 | 22 | sell 19.9 CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 → SOL | failed | 45s | 1 | acquire CrAr4RRJMBVwRsZtT62pEhfA9H5utymC2mVx8e7FreP2 expired |
| 22:55:53 | 225 | 23 | sell 0.005 SOL → zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k | failed | 39s | 1 | main expired |
| 22:56:31 | 226 | 23 | sell 583 zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k → SOL | failed | 44s | 1 | acquire zj1jpp7QMveWHLs61vL9KMZf254KvW7j4AAmBF8ry2k expired |
| 22:54:41 | 227 | 24 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 8s | 1 |  |
| 22:54:49 | 228 | 24 | sell 1060 MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 → SOL | filled | 12s | 1 |  |
| 22:56:09 | 229 | 25 | sell 0.005 SOL → AMD8XwJXgQ9WV45Wyj9yFLejxzf2J6VM1PJY8bJEjeES | filled | 21s | 1 |  |
| 22:56:30 | 230 | 25 | sell 0.000804 AMD8XwJXgQ9WV45Wyj9yFLejxzf2J6VM1PJY8bJEjeES → SOL | failed | 37s | 1 | main expired |
| 22:56:14 | 231 | 26 | sell 0.005 SOL → EN2nnxrg8uUi6x2sJkzNPd2eT6rB9rdSoQNNaENA4RZA | filled | 8s | 1 |  |
| 22:56:22 | 232 | 26 | sell 609 EN2nnxrg8uUi6x2sJkzNPd2eT6rB9rdSoQNNaENA4RZA → SOL | filled | 56s | 1 |  |
| 22:54:15 | 233 | 27 | sell 0.005 SOL → hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux | failed | 38s | 1 | main expired |
| 22:54:54 | 234 | 27 | sell 0.964 hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux → SOL | failed | 45s | 1 | acquire hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux expired |
| 22:55:24 | 235 | 28 | sell 0.005 SOL → 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump | filled | 11s | 1 |  |
| 22:55:35 | 236 | 28 | sell 65.7 6AJcP7wuLwmRYLBNbi825wgguaPsWzPBEHcHndpRpump → SOL | failed | 37s | 1 | main expired |
| 22:55:34 | 237 | 29 | sell 0.005 SOL → CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump | filled | 12s | 1 |  |
| 22:55:46 | 238 | 29 | sell 195 CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump → SOL | filled | 8s | 1 |  |
| 22:55:53 | 239 | 30 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 7s | 1 |  |
| 22:55:59 | 240 | 30 | sell 10.5 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr → SOL | failed | 37s | 1 | main expired |
| 22:57:15 | 241 | 1 | sell 0.005 SOL → PAYmo6moDF3Ro3X6bU2jwe2UdBnBhv8YjLgL1j4DxGu | filled | 33s | 1 |  |
| 22:57:48 | 242 | 1 | sell 57.5 PAYmo6moDF3Ro3X6bU2jwe2UdBnBhv8YjLgL1j4DxGu → SOL | filled | 13s | 1 |  |
| 22:55:30 | 243 | 2 | sell 0.005 SOL → 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump | failed | 37s | 1 | main expired |
| 22:56:07 | 244 | 2 | sell 8.12 61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump → SOL | filled | 44s | 2 |  |
| 22:56:56 | 245 | 3 | sell 0.005 SOL → CGEDT9QZDvvH5GmVkWJH2BXiMJqMJySC9ihWyr7Spump | filled | 28s | 1 |  |
| 22:57:24 | 246 | 3 | sell 281 CGEDT9QZDvvH5GmVkWJH2BXiMJqMJySC9ihWyr7Spump → SOL | filled | 11s | 1 |  |
| 22:56:21 | 247 | 4 | sell 0.005 SOL → 3iQL8BFS2vE7mww4ehAqQHAsbmRNCrPxizWAT2Zfyr9y | filled | 8s | 1 |  |
| 22:56:30 | 248 | 4 | sell 0.695 3iQL8BFS2vE7mww4ehAqQHAsbmRNCrPxizWAT2Zfyr9y → SOL | failed | 37s | 1 | main expired |
| 22:56:14 | 249 | 5 | sell 0.005 SOL → Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump | filled | 9s | 1 |  |
| 22:56:23 | 250 | 5 | sell 44.9 Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump → SOL | failed | 38s | 1 | main expired |
| 22:56:19 | 251 | 6 | sell 0.005 SOL → LinkhB3afbBKb2EQQu7s7umdZceV3wcvAUJhQAfQ23L | filled | 25s | 1 |  |
| 22:56:44 | 252 | 6 | sell 0.0384 LinkhB3afbBKb2EQQu7s7umdZceV3wcvAUJhQAfQ23L → SOL | failed | 38s | 1 | main expired |
| 22:57:28 | 253 | 7 | sell 0.005 SOL → 4qQeZ5LwSz6HuupUu8jCtgXyW1mYQcNbFAW1sWZp89HL | failed | 38s | 1 | main expired |
| 22:58:06 | 254 | 7 | sell 0.225 4qQeZ5LwSz6HuupUu8jCtgXyW1mYQcNbFAW1sWZp89HL → SOL | failed | 45s | 1 | acquire 4qQeZ5LwSz6HuupUu8jCtgXyW1mYQcNbFAW1sWZp89HL expired |
| 22:56:47 | 255 | 8 | sell 0.005 SOL → KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP | filled | 29s | 1 |  |
| 22:57:16 | 256 | 8 | sell 27.7 KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP → SOL | failed | 38s | 1 | main expired |
| 22:56:22 | 257 | 9 | sell 0.005 SOL → eL5fUxj2J4CiQsmW85k5FG9DvuQjjUoBHoQBi2Kpump | filled | 12s | 1 |  |
| 22:56:35 | 258 | 9 | sell 70.4 eL5fUxj2J4CiQsmW85k5FG9DvuQjjUoBHoQBi2Kpump → SOL | filled | 11s | 1 |  |
| 22:56:51 | 259 | 10 | sell 0.005 SOL → CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta | filled | 24s | 1 |  |
| 22:57:15 | 260 | 10 | sell 0.649 CREDBHvVqREBCAxMihzr8D1nepHMr2gmQoZWpmgGmeta → SOL | failed | 37s | 1 | main expired |
| 22:55:27 | 261 | 11 | sell 0.005 SOL → DvjbEsdca43oQcw2h3HW1CT7N3x5vRcr3QrvTUHnXvgV | filled | 8s | 1 |  |
| 22:55:35 | 262 | 11 | sell 312 DvjbEsdca43oQcw2h3HW1CT7N3x5vRcr3QrvTUHnXvgV → SOL | failed | 38s | 1 | main expired |
| 22:56:45 | 263 | 12 | sell 0.005 SOL → 8PzFWyLpCVEmbZmVJcaRTU5r69XKJx1rd7YGpWvnpump | filled | 25s | 1 |  |
| 22:57:10 | 264 | 12 | sell 216 8PzFWyLpCVEmbZmVJcaRTU5r69XKJx1rd7YGpWvnpump → SOL | filled | 8s | 1 |  |
| 22:55:11 | 265 | 13 | sell 0.005 SOL → CniPCE4b3s8gSUPhUiyMjXnytrEqUrMfSsnbBjLCpump | failed | 39s | 1 | main expired |
| 22:55:50 | 266 | 13 | sell 128 CniPCE4b3s8gSUPhUiyMjXnytrEqUrMfSsnbBjLCpump → SOL | failed | 43s | 1 | acquire CniPCE4b3s8gSUPhUiyMjXnytrEqUrMfSsnbBjLCpump expired |
| 22:55:48 | 267 | 14 | sell 0.005 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 21s | 1 |  |
| 22:56:08 | 268 | 14 | sell 0.492 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk → SOL | filled | 17s | 1 |  |
| 22:56:04 | 269 | 15 | sell 0.005 SOL → HUMA1821qVDKta3u2ovmfDQeW2fSQouSKE8fkF44wvGw | filled | 12s | 1 |  |
| 22:56:16 | 270 | 15 | sell 15.1 HUMA1821qVDKta3u2ovmfDQeW2fSQouSKE8fkF44wvGw → SOL | failed | 38s | 1 | main expired |
| 22:56:54 | 271 | 16 | sell 0.005 SOL → MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u | failed | 37s | 1 | main expired |
| 22:57:31 | 272 | 16 | sell 7.1 MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u → SOL | failed | 48s | 1 | acquire MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u expired |
| 22:56:18 | 273 | 17 | sell 0.005 SOL → 3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump | filled | 12s | 1 |  |
| 22:56:31 | 274 | 17 | sell 239 3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump → SOL | filled | 14s | 1 |  |
| 22:56:15 | 275 | 18 | sell 0.005 SOL → Tqj8yFmagrg7oorpQkVGYR52r96RFTamvWfth9bpump | filled | 30s | 1 |  |
| 22:56:44 | 276 | 18 | sell 764 Tqj8yFmagrg7oorpQkVGYR52r96RFTamvWfth9bpump → SOL | filled | 24s | 1 |  |
| 22:55:05 | 277 | 19 | sell 0.005 SOL → 463SK47VkB7uE7XenTHKiVcMtxRsfNE2X4Q9wByaURVA | filled | 12s | 1 |  |
| 22:55:17 | 278 | 19 | sell 127 463SK47VkB7uE7XenTHKiVcMtxRsfNE2X4Q9wByaURVA → SOL | filled | 7s | 1 |  |
| 22:56:28 | 279 | 20 | sell 0.005 SOL → USNv3NkKA27Dh4nsHJDPhW4VoEcTQmjoZyJt2dqdwFu | filled | 12s | 1 |  |
| 22:56:39 | 280 | 20 | sell 0.0033 USNv3NkKA27Dh4nsHJDPhW4VoEcTQmjoZyJt2dqdwFu → SOL | failed | 64s | 2 | main expired |
| 22:56:17 | 281 | 21 | sell 0.005 SOL → SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq | failed | 35s | 1 | main expired |
| 22:56:52 | 282 | 21 | sell 8.35 SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq → SOL | failed | 43s | 1 | acquire SLXdx4BUt2v9uJQNzWqSfzTJ9UKLUDsvxHFMEEdrfgq expired |
| 22:57:42 | 283 | 22 | sell 0.005 SOL → 5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC | failed | 38s | 1 | main expired |
| 22:58:20 | 284 | 22 | sell 22.7 5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC → SOL | filled | 48s | 2 |  |
| 22:57:15 | 285 | 23 | sell 0.005 SOL → CARSsxWPkpQWvfyRBwfGMGvysJBHdHGfE46X5MNgmeta | filled | 16s | 1 |  |
| 22:57:31 | 286 | 23 | sell 4.16 CARSsxWPkpQWvfyRBwfGMGvysJBHdHGfE46X5MNgmeta → SOL | failed | 44s | 1 | acquire CARSsxWPkpQWvfyRBwfGMGvysJBHdHGfE46X5MNgmeta expired |
| 22:55:01 | 287 | 24 | sell 0.005 SOL → 8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB | failed | 35s | 1 | main expired |
| 22:55:37 | 288 | 24 | sell 1010 8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB → SOL | filled | 38s | 2 |  |
| 22:57:07 | 289 | 25 | sell 0.005 SOL → G7iK3prSzAA4vzcJWvsLUEsdCqzR7PnMzJV61vSdFSNW | failed | 38s | 1 | main expired |
| 22:57:46 | 290 | 25 | sell 0.28 G7iK3prSzAA4vzcJWvsLUEsdCqzR7PnMzJV61vSdFSNW → SOL | failed | 45s | 1 | acquire G7iK3prSzAA4vzcJWvsLUEsdCqzR7PnMzJV61vSdFSNW expired |
| 22:57:18 | 291 | 26 | sell 0.005 SOL → Cy1GS2FqefgaMbi45UunrUzin1rfEmTUYnomddzBpump | failed | 39s | 1 | main expired |
| 22:57:57 | 292 | 26 | sell 337 Cy1GS2FqefgaMbi45UunrUzin1rfEmTUYnomddzBpump → SOL | failed | 69s | 2 | main expired |
| 22:55:39 | 293 | 27 | sell 0.005 SOL → XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ | failed | 39s | 1 | main expired |
| 22:56:18 | 294 | 27 | sell 0.00547 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ → SOL | failed | 44s | 1 | acquire XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ expired |
| 22:56:12 | 295 | 28 | sell 0.005 SOL → G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG | failed | 38s | 1 | main expired |
| 22:56:50 | 296 | 28 | sell 8.48 G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG → SOL | failed | 42s | 1 | acquire G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG expired |
| 22:55:54 | 297 | 29 | sell 0.005 SOL → ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY | filled | 12s | 1 |  |
| 22:56:05 | 298 | 29 | sell 12 ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY → SOL | filled | 16s | 1 |  |
| 22:56:36 | 299 | 30 | sell 0.005 SOL → HtTYHz1Kf3rrQo6AqDLmss7gq5WrkWAaXn3tupUZbonk | filled | 12s | 1 |  |
| 22:56:48 | 300 | 30 | sell 177 HtTYHz1Kf3rrQo6AqDLmss7gq5WrkWAaXn3tupUZbonk → SOL | filled | 16s | 1 |  |
| 22:58:01 | 301 | 1 | sell 0.005 SOL → 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump | filled | 25s | 1 |  |
| 22:58:26 | 302 | 1 | sell 10 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump → SOL | filled | 8s | 1 |  |
| 22:56:51 | 303 | 2 | sell 0.005 SOL → FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump | filled | 12s | 1 |  |
| 22:57:02 | 304 | 2 | sell 1090 FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump → SOL | failed | 38s | 1 | main expired |
| 22:57:35 | 305 | 3 | sell 0.005 SOL → 4nV5gNwwP68zUDat26ySChREqVaQaLudfJBkSgEzpump | filled | 16s | 1 |  |
| 22:57:51 | 306 | 3 | sell 90.6 4nV5gNwwP68zUDat26ySChREqVaQaLudfJBkSgEzpump → SOL | filled | 8s | 1 |  |
| 22:57:06 | 307 | 4 | sell 0.005 SOL → 9AvytnUKsLxPxFHFqS6VLxaxt5p6BhYNr53SD2Chpump | filled | 8s | 1 |  |
| 22:57:14 | 308 | 4 | sell 257 9AvytnUKsLxPxFHFqS6VLxaxt5p6BhYNr53SD2Chpump → SOL | failed | 37s | 1 | main expired |
| 22:57:01 | 309 | 5 | sell 0.005 SOL → WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk | failed | 38s | 1 | main expired |
| 22:57:38 | 310 | 5 | sell 75200 WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk → SOL | failed | 44s | 1 | acquire WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk expired |
| 22:57:22 | 311 | 6 | sell 0.005 SOL → Hh3oTaqDCKKfdBgsQEvxp9sUwyNf8x9qmKqEMLBWpump | filled | 11s | 1 |  |
| 22:57:33 | 312 | 6 | sell 319 Hh3oTaqDCKKfdBgsQEvxp9sUwyNf8x9qmKqEMLBWpump → SOL | filled | 11s | 1 |  |
| 22:58:51 | 313 | 7 | sell 0.005 SOL → HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd | failed | 36s | 1 | main expired |
| 22:59:27 | 314 | 7 | sell 109 HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd → SOL | failed | 45s | 1 | acquire HKJHsYJHMVK5VRyHHk5GhvzY9tBAAtPvDkZfDH6RLDTd expired |
| 22:57:54 | 315 | 8 | sell 0.005 SOL → GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump | failed | 38s | 1 | main expired |
| 22:58:32 | 316 | 8 | sell 50.5 GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump → SOL | failed | 43s | 1 | acquire GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump expired |
| 22:56:46 | 317 | 9 | sell 0.005 SOL → GMzuntWYJLpNuCizrSR7ZXggiMdDzTNiEmSNHHunpump | failed | 34s | 1 | main expired |
| 22:57:20 | 318 | 9 | sell 150 GMzuntWYJLpNuCizrSR7ZXggiMdDzTNiEmSNHHunpump → SOL | failed | 45s | 1 | acquire GMzuntWYJLpNuCizrSR7ZXggiMdDzTNiEmSNHHunpump expired |
| 22:57:53 | 319 | 10 | sell 0.005 SOL → x95HN3DWvbfCBtTjGm587z8suK3ec6cwQwgZNLbWKyp | filled | 16s | 1 |  |
| 22:58:09 | 320 | 10 | sell 518000000 x95HN3DWvbfCBtTjGm587z8suK3ec6cwQwgZNLbWKyp → SOL | failed | 37s | 1 | main expired |
| 22:56:13 | 321 | 11 | sell 0.005 SOL → 8wxkvAfEns76yBzu4MnbV7VnXWjg3iDPA9uwAQ6cpump | filled | 26s | 1 |  |
| 22:56:38 | 322 | 11 | sell 531 8wxkvAfEns76yBzu4MnbV7VnXWjg3iDPA9uwAQ6cpump → SOL | filled | 12s | 1 |  |
| 22:57:18 | 323 | 12 | sell 0.005 SOL → 4QsNTBKwHgyYUUHq9tDzk1CCVu7y5hK7z3GE9R36pump | filled | 16s | 1 |  |
| 22:57:34 | 324 | 12 | sell 192 4QsNTBKwHgyYUUHq9tDzk1CCVu7y5hK7z3GE9R36pump → SOL | filled | 12s | 1 |  |
| 22:56:34 | 325 | 13 | sell 0.005 SOL → CYPHuMmCL1GxJWa2tsPhLKykC7GrHJTCHwbXD4g5uawK | filled | 20s | 1 |  |
| 22:56:53 | 326 | 13 | sell 0.16 CYPHuMmCL1GxJWa2tsPhLKykC7GrHJTCHwbXD4g5uawK → SOL | failed | 38s | 1 | main expired |
| 22:56:25 | 327 | 14 | sell 0.005 SOL → bioJ9JTqW62MLz7UKHU69gtKhPpGi1BQhccj2kmSvUJ | filled | 11s | 1 |  |
| 22:56:37 | 328 | 14 | sell 17.6 bioJ9JTqW62MLz7UKHU69gtKhPpGi1BQhccj2kmSvUJ → SOL | failed | 37s | 1 | main expired |
| 22:56:54 | 329 | 15 | sell 0.005 SOL → H8xQ6poBjB9DTPMDTKWzWPrnxu4bDEhybxiouF8Ppump | filled | 20s | 1 |  |
| 22:57:15 | 330 | 15 | sell 354 H8xQ6poBjB9DTPMDTKWzWPrnxu4bDEhybxiouF8Ppump → SOL | failed | 44s | 1 | acquire H8xQ6poBjB9DTPMDTKWzWPrnxu4bDEhybxiouF8Ppump expired |
| 22:58:19 | 331 | 16 | sell 0.005 SOL → CcLd8HTAKLWtQHatqPwBQjtuCA72FNB9E1ckRTEzpump | filled | 8s | 1 |  |
| 22:58:27 | 332 | 16 | sell 146 CcLd8HTAKLWtQHatqPwBQjtuCA72FNB9E1ckRTEzpump → SOL | filled | 8s | 1 |  |
| 22:56:44 | 333 | 17 | sell 0.005 SOL → 7BgBvyjrZX1YKz4oh9mjb8ZScatkkwb8DzFx7LoiVkM3 | failed | 33s | 1 | main expired |
| 22:57:17 | 334 | 17 | sell 23 7BgBvyjrZX1YKz4oh9mjb8ZScatkkwb8DzFx7LoiVkM3 → SOL | failed | 59s | 2 | main expired |
| 22:57:08 | 335 | 18 | sell 0.005 SOL → 6nR8wBnfsmXfcdDr1hovJKjvFQxNSidN6XFyfAFZpump | failed | 37s | 1 | main expired |
| 22:57:46 | 336 | 18 | sell 55.8 6nR8wBnfsmXfcdDr1hovJKjvFQxNSidN6XFyfAFZpump → SOL | failed | 45s | 1 | acquire 6nR8wBnfsmXfcdDr1hovJKjvFQxNSidN6XFyfAFZpump expired |
| 22:55:24 | 337 | 19 | sell 0.005 SOL → AMjzRn1TBQwQfNAjHFeBb7uGbbqbJB7FzXAnGgdFPk6K | failed | 37s | 1 | main expired |
| 22:56:02 | 338 | 19 | sell 257 AMjzRn1TBQwQfNAjHFeBb7uGbbqbJB7FzXAnGgdFPk6K → SOL | filled | 26s | 2 |  |
| 22:57:44 | 339 | 20 | sell 0.005 SOL → FRySi8LPkuByB7VPSCCggxpewFUeeJiwEGRKKuhwpKcX | failed | 37s | 1 | main expired |
| 22:58:21 | 340 | 20 | sell 1780 FRySi8LPkuByB7VPSCCggxpewFUeeJiwEGRKKuhwpKcX → SOL | filled | 43s | 2 |  |
| 22:57:35 | 341 | 21 | sell 0.005 SOL → BLVxek8YMXUQhcKmMvrFTrzh5FXg8ec88Crp6otEaCMf | filled | 12s | 1 |  |
| 22:57:47 | 342 | 21 | sell 134 BLVxek8YMXUQhcKmMvrFTrzh5FXg8ec88Crp6otEaCMf → SOL | filled | 8s | 1 |  |
| 22:59:08 | 343 | 22 | sell 0.005 SOL → 3psH1Mj1f7yUfaD5gh6Zj7epE8hhrMkMETgv5TshQA4o | filled | 12s | 1 |  |
| 22:59:20 | 344 | 22 | sell 387 3psH1Mj1f7yUfaD5gh6Zj7epE8hhrMkMETgv5TshQA4o → SOL | filled | 11s | 1 |  |
| 22:58:15 | 345 | 23 | sell 0.005 SOL → MRNAzXzhNcaEXJPibHEn8cd4vyekCDiivTyEwswLUCT | filled | 21s | 1 |  |
| 22:58:37 | 346 | 23 | sell 0.00235 MRNAzXzhNcaEXJPibHEn8cd4vyekCDiivTyEwswLUCT → SOL | filled | 29s | 1 |  |
| 22:56:14 | 347 | 24 | sell 0.005 SOL → Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x | filled | 26s | 1 |  |
| 22:56:41 | 348 | 24 | sell 0.000955 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x → SOL | filled | 37s | 1 |  |
| 22:58:31 | 349 | 25 | sell 0.005 SOL → FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P | filled | 12s | 1 |  |
| 22:58:43 | 350 | 25 | sell 5.45 FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P → SOL | failed | 37s | 1 | main expired |
| 22:59:06 | 351 | 26 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 39s | 1 | main expired |
| 22:59:45 | 352 | 26 | sell 0.00417 hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT → SOL | failed | 42s | 1 | acquire hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT expired |
| 22:57:02 | 353 | 27 | sell 0.005 SOL → AWGCDT2gd8JadbYbYyZy1iKxfWokPNgrEQoU24zUpump | filled | 7s | 1 |  |
| 22:57:09 | 354 | 27 | sell 719 AWGCDT2gd8JadbYbYyZy1iKxfWokPNgrEQoU24zUpump → SOL | failed | 37s | 1 | main expired |
| 22:57:32 | 355 | 28 | sell 0.005 SOL → MRVLSjkR2ceUBukujaD3xCyHP1H3B2SzpsNTZF546jo | failed | 37s | 1 | main expired |
| 22:58:10 | 356 | 28 | sell 0.00181 MRVLSjkR2ceUBukujaD3xCyHP1H3B2SzpsNTZF546jo → SOL | failed | 42s | 1 | acquire MRVLSjkR2ceUBukujaD3xCyHP1H3B2SzpsNTZF546jo expired |
| 22:56:21 | 357 | 29 | sell 0.005 SOL → BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs | failed | 38s | 1 | main expired |
| 22:56:59 | 358 | 29 | sell 0.00374 BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs → SOL | filled | 52s | 2 |  |
| 22:57:04 | 359 | 30 | sell 0.005 SOL → 85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ | failed | 37s | 1 | main expired |
| 22:57:41 | 360 | 30 | sell 28.5 85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ → SOL | failed | 44s | 1 | acquire 85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ expired |
| 22:58:34 | 361 | 1 | sell 0.005 SOL → LLYuwZ33keFihgwoxXsBawy31AiRFLFSva32TYq5TvD | filled | 38s | 1 |  |
| 22:59:12 | 362 | 1 | sell 0.000419 LLYuwZ33keFihgwoxXsBawy31AiRFLFSva32TYq5TvD → SOL | failed | 41s | 1 | acquire LLYuwZ33keFihgwoxXsBawy31AiRFLFSva32TYq5TvD expired |
| 22:57:40 | 363 | 2 | sell 0.005 SOL → EmcxFTNVDqyLHp11NvwvLZ4D7LKGbG9i7B8RF7dwpump | failed | 39s | 1 | main expired |
| 22:58:19 | 364 | 2 | sell 942 EmcxFTNVDqyLHp11NvwvLZ4D7LKGbG9i7B8RF7dwpump → SOL | failed | 44s | 1 | acquire EmcxFTNVDqyLHp11NvwvLZ4D7LKGbG9i7B8RF7dwpump expired |
| 22:57:59 | 365 | 3 | sell 0.005 SOL → BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K | filled | 16s | 1 |  |
| 22:58:16 | 366 | 3 | sell 3.36 BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K → SOL | failed | 41s | 1 | main expired |
| 22:57:52 | 367 | 4 | sell 0.005 SOL → PFER6ENqP8r8NF3CqVt4mFowxsin3V5MLidBNQFCC3x | failed | 37s | 1 | main expired |
| 22:58:29 | 368 | 4 | sell 0.0176 PFER6ENqP8r8NF3CqVt4mFowxsin3V5MLidBNQFCC3x → SOL | failed | 44s | 1 | acquire PFER6ENqP8r8NF3CqVt4mFowxsin3V5MLidBNQFCC3x expired |
| 22:58:22 | 369 | 5 | sell 0.005 SOL → HeeBovJNKd27tQ6xkeP1dfSyTr8LyLwhJz9wfFTbPLEX | filled | 30s | 1 |  |
| 22:58:52 | 370 | 5 | sell 55.6 HeeBovJNKd27tQ6xkeP1dfSyTr8LyLwhJz9wfFTbPLEX → SOL | filled | 11s | 1 |  |
| 22:57:44 | 371 | 6 | sell 0.005 SOL → zGh48JtNHVBb5evgoZLXwgPD2Qu4MhkWdJLGDAupump | filled | 12s | 1 |  |
| 22:57:56 | 372 | 6 | sell 236 zGh48JtNHVBb5evgoZLXwgPD2Qu4MhkWdJLGDAupump → SOL | filled | 20s | 1 |  |
| 23:00:12 | 373 | 7 | sell 0.005 SOL → 7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj | filled | 17s | 1 |  |
| 23:00:29 | 374 | 7 | sell 0.00408 7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj → SOL | filled | 20s | 1 |  |
| 22:59:15 | 375 | 8 | sell 0.005 SOL → 6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx | failed | 38s | 1 | main expired |
| 22:59:53 | 376 | 8 | sell 383 6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx → SOL | failed | 44s | 1 | acquire 6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx expired |
| 22:58:05 | 377 | 9 | sell 0.005 SOL → BBKPiLM9KjdJW7oQSKt99RVWcZdhF6sEHRKnwqeBGHST | filled | 11s | 1 |  |
| 22:58:16 | 378 | 9 | sell 376 BBKPiLM9KjdJW7oQSKt99RVWcZdhF6sEHRKnwqeBGHST → SOL | filled | 8s | 1 |  |
| 22:58:46 | 379 | 10 | sell 0.005 SOL → Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump | failed | 38s | 1 | main expired |
| 22:59:24 | 380 | 10 | sell 28.9 Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump → SOL | failed | 53s | 2 | main expired |
| 22:56:50 | 381 | 11 | sell 0.005 SOL → 3wtGGWZ8wLWW6BqtC5rxmkHdqvM62atUcGTH4cw3pump | filled | 12s | 1 |  |
| 22:57:02 | 382 | 11 | sell 84.1 3wtGGWZ8wLWW6BqtC5rxmkHdqvM62atUcGTH4cw3pump → SOL | filled | 7s | 1 |  |
| 22:57:46 | 383 | 12 | sell 0.005 SOL → 7HgfXftRBBqsYtAEYcqjGLQrNJLL6Tww9ek4rE3Apump | filled | 8s | 1 |  |
| 22:57:54 | 384 | 12 | sell 356 7HgfXftRBBqsYtAEYcqjGLQrNJLL6Tww9ek4rE3Apump → SOL | filled | 25s | 1 |  |
| 22:57:31 | 385 | 13 | sell 0.005 SOL → DQnkBM4eYYMnVE8Qy2K3BB7uts1fh2EwBVktEz6jpump | filled | 7s | 1 |  |
| 22:57:38 | 386 | 13 | sell 91.3 DQnkBM4eYYMnVE8Qy2K3BB7uts1fh2EwBVktEz6jpump → SOL | filled | 11s | 1 |  |
| 22:57:14 | 387 | 14 | sell 0.005 SOL → WENAZ2WyPbmgvUcKfQ8hyMDfBQP9bZ65hsZ5KTFrRGZ | filled | 12s | 1 |  |
| 22:57:25 | 388 | 14 | sell 0.0802 WENAZ2WyPbmgvUcKfQ8hyMDfBQP9bZ65hsZ5KTFrRGZ → SOL | failed | 37s | 1 | main expired |
| 22:57:59 | 389 | 15 | sell 0.005 SOL → E1kvzJNxShvvWTrudokpzuc789vRiDXfXG3duCuY6ooE | failed | 37s | 1 | main expired |
| 22:58:36 | 390 | 15 | sell 24.7 E1kvzJNxShvvWTrudokpzuc789vRiDXfXG3duCuY6ooE → SOL | failed | 27s | 1 | main error: 404 Not Found: NoLiquidity: no route found |
| 22:58:35 | 391 | 16 | sell 0.005 SOL → HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump | filled | 8s | 1 |  |
| 22:58:43 | 392 | 16 | sell 11.4 HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump → SOL | filled | 12s | 1 |  |
| 22:58:16 | 393 | 17 | sell 0.005 SOL → CzLSujWBLFsSjncfkh59rUFqvafWcY5tzedWJSuypump | filled | 18s | 1 |  |
| 22:58:34 | 394 | 17 | sell 30.4 CzLSujWBLFsSjncfkh59rUFqvafWcY5tzedWJSuypump → SOL | filled | 12s | 1 |  |
| 22:58:31 | 395 | 18 | sell 0.005 SOL → PRVT6TB7uss3FrUd2D9xs2zqDBsa3GbMJMwCQsgmeta | failed | 39s | 1 | main expired |
| 22:59:10 | 396 | 18 | sell 1.8 PRVT6TB7uss3FrUd2D9xs2zqDBsa3GbMJMwCQsgmeta → SOL | filled | 50s | 2 |  |
| 22:56:28 | 397 | 19 | sell 0.005 SOL → 4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump | failed | 36s | 1 | main expired |
| 22:57:04 | 398 | 19 | sell 65.1 4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump → SOL | failed | 44s | 1 | acquire 4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump expired |
| 22:59:05 | 399 | 20 | sell 0.005 SOL → BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups | filled | 12s | 1 |  |
| 22:59:16 | 400 | 20 | sell 131 BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups → SOL | filled | 7s | 1 |  |
| 22:57:55 | 401 | 21 | sell 0.005 SOL → CTgiaZUK12kCcB8sosn4Nt2NZtzLgtPqDwyQyr2syATC | failed | 40s | 1 | main expired |
| 22:58:34 | 402 | 21 | sell 33.1 CTgiaZUK12kCcB8sosn4Nt2NZtzLgtPqDwyQyr2syATC → SOL | failed | 44s | 1 | acquire CTgiaZUK12kCcB8sosn4Nt2NZtzLgtPqDwyQyr2syATC expired |
| 22:59:31 | 403 | 22 | sell 0.005 SOL → 6yjNqPzTSanBWSa6dxVEgTjePXBrZ2FoHLDQwYwEsyM6 | failed | 36s | 1 | main expired |
| 23:00:07 | 404 | 22 | sell 400 6yjNqPzTSanBWSa6dxVEgTjePXBrZ2FoHLDQwYwEsyM6 → SOL | filled | 29s | 2 |  |
| 22:59:05 | 405 | 23 | sell 0.005 SOL → ACtfUWtgvaXrQGNMiohTusi5jcx5RJf5zwu9aAxkpump | filled | 12s | 1 |  |
| 22:59:17 | 406 | 23 | sell 1030 ACtfUWtgvaXrQGNMiohTusi5jcx5RJf5zwu9aAxkpump → SOL | failed | 34s | 1 | main expired |
| 22:57:17 | 407 | 24 | sell 0.005 SOL → 4ikwYoNvoGEwtMbziUyYBTz1zRM6nmxspsfw9G7Bpump | filled | 21s | 1 |  |
| 22:57:38 | 408 | 24 | sell 127 4ikwYoNvoGEwtMbziUyYBTz1zRM6nmxspsfw9G7Bpump → SOL | failed | 37s | 1 | main expired |
| 22:59:20 | 409 | 25 | sell 0.005 SOL → 42cXQvAAr7hcPBPWAS4ocVtDyeJ4Fa6gRR2uG4gppump | failed | 38s | 1 | main expired |
| 22:59:58 | 410 | 25 | sell 58.8 42cXQvAAr7hcPBPWAS4ocVtDyeJ4Fa6gRR2uG4gppump → SOL | filled | 25s | 2 |  |
| 23:00:27 | 411 | 26 | sell 0.005 SOL → SoLo9oxzLDpcq1dpqAgMwgce5WqkRDtNXK7EPnbmeta | filled | 17s | 1 |  |
| 23:00:44 | 412 | 26 | sell 0.54 SoLo9oxzLDpcq1dpqAgMwgce5WqkRDtNXK7EPnbmeta → SOL | filled | 4s | 1 |  |
| 22:57:46 | 413 | 27 | sell 0.005 SOL → 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump | filled | 8s | 1 |  |
| 22:57:53 | 414 | 27 | sell 60.9 74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump → SOL | failed | 38s | 1 | main expired |
| 22:58:52 | 415 | 28 | sell 0.005 SOL → C2omVhcvt3DDY77S2KZzawFJQeETZofgZ4eNWWkXpump | filled | 11s | 1 |  |
| 22:59:03 | 416 | 28 | sell 963 C2omVhcvt3DDY77S2KZzawFJQeETZofgZ4eNWWkXpump → SOL | filled | 12s | 1 |  |
| 22:57:51 | 417 | 29 | sell 0.005 SOL → dTzEP9JU2NRDPuWtM32gaVKip2fTHBqjheU1APBpump | filled | 8s | 1 |  |
| 22:57:59 | 418 | 29 | sell 372 dTzEP9JU2NRDPuWtM32gaVKip2fTHBqjheU1APBpump → SOL | filled | 19s | 1 |  |
| 22:58:26 | 419 | 30 | sell 0.005 SOL → 2oGLxYuNBJRcepT1mEV6KnETaLD7Bf6qq3CM6skasBfe | failed | 34s | 1 | main expired |
| 22:59:00 | 420 | 30 | sell 110 2oGLxYuNBJRcepT1mEV6KnETaLD7Bf6qq3CM6skasBfe → SOL | failed | 43s | 1 | acquire 2oGLxYuNBJRcepT1mEV6KnETaLD7Bf6qq3CM6skasBfe expired |
| 22:59:53 | 421 | 1 | sell 0.005 SOL → 69G8CpUVZAxbPMiEBrfCCCH445NwFxH6PzVL693Xpump | filled | 10s | 1 |  |
| 23:00:03 | 422 | 1 | sell 309 69G8CpUVZAxbPMiEBrfCCCH445NwFxH6PzVL693Xpump → SOL | failed | 36s | 1 | main expired |
| 22:59:03 | 423 | 2 | sell 0.005 SOL → 8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn | failed | 36s | 1 | main expired |
| 22:59:38 | 424 | 2 | sell 17.1 8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn → SOL | filled | 56s | 2 |  |
| 22:58:57 | 425 | 3 | sell 0.005 SOL → GvV7sFu6FHJsSVXfpG7xqFnWar3c7YkcC74rqe7Bpump | filled | 7s | 1 |  |
| 22:59:04 | 426 | 3 | sell 192 GvV7sFu6FHJsSVXfpG7xqFnWar3c7YkcC74rqe7Bpump → SOL | filled | 36s | 2 |  |
| 22:59:13 | 427 | 4 | sell 0.005 SOL → HBoNJ5v8g71s2boRivrHnfSB5MVPLDHHyVjruPfhGkvL | filled | 12s | 1 |  |
| 22:59:25 | 428 | 4 | sell 40200 HBoNJ5v8g71s2boRivrHnfSB5MVPLDHHyVjruPfhGkvL → SOL | filled | 19s | 1 |  |
| 22:59:03 | 429 | 5 | sell 0.005 SOL → RKLBnAXGqv31iZomqsuAWkQm1aqC7JwwvbCfzGdqAhz | filled | 25s | 1 |  |
| 22:59:28 | 430 | 5 | sell 0.00726 RKLBnAXGqv31iZomqsuAWkQm1aqC7JwwvbCfzGdqAhz → SOL | failed | 39s | 1 | main expired |
| 22:58:16 | 431 | 6 | sell 0.005 SOL → STREAMribRwybYpMmSYoCsQUdr6MZNXEqHgm7p1gu9M | filled | 8s | 1 |  |
| 22:58:25 | 432 | 6 | sell 51 STREAMribRwybYpMmSYoCsQUdr6MZNXEqHgm7p1gu9M → SOL | failed | 37s | 1 | main expired |
| 23:00:49 | 433 | 7 | sell 0.005 SOL → 8Ki8DpuWNxu9VsS3kQbarsCWMcFGWkzzA8pUPto9zBd5 | filled | 7s | 1 |  |
| 23:00:56 | 434 | 7 | sell 495 8Ki8DpuWNxu9VsS3kQbarsCWMcFGWkzzA8pUPto9zBd5 → SOL | filled | 7s | 1 |  |
| 23:00:37 | 435 | 8 | sell 0.005 SOL → GvEMgNT6GKiYTvg7TskDio6RKzQdCuhwmH55tVCLaJTe | filled | 7s | 1 |  |
| 23:00:44 | 436 | 8 | sell 0.491 GvEMgNT6GKiYTvg7TskDio6RKzQdCuhwmH55tVCLaJTe → SOL | filled | 10s | 1 |  |
| 22:58:24 | 437 | 9 | sell 0.005 SOL → ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs | failed | 34s | 1 | main expired |
| 22:58:58 | 438 | 9 | sell 1.86 ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs → SOL | failed | 43s | 1 | acquire ARXwZkNAtzPfdcoqQiduJn8EPv9fKiDfGn2KyggyDrFs expired |
| 23:00:17 | 439 | 10 | sell 0.005 SOL → vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7 | failed | 36s | 1 | main expired |
| 23:00:53 | 440 | 10 | sell 0.00383 vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7 → SOL | filled | 24s | 2 |  |
| 22:57:09 | 441 | 11 | sell 0.005 SOL → HfMbPyDdZH6QMaDDUokjYCkHxzjoGBMpgaUvpLWGbF5p | failed | 38s | 1 | main expired |
| 22:57:47 | 442 | 11 | sell 3.14 HfMbPyDdZH6QMaDDUokjYCkHxzjoGBMpgaUvpLWGbF5p → SOL | failed | 45s | 1 | acquire HfMbPyDdZH6QMaDDUokjYCkHxzjoGBMpgaUvpLWGbF5p expired |
| 22:58:19 | 443 | 12 | sell 0.005 SOL → Hax9LTgsQkze1YFychnBLtFH8gYbQKtKfWKKg2SP6gdD | failed | 35s | 1 | main expired |
| 22:58:54 | 444 | 12 | sell 123 Hax9LTgsQkze1YFychnBLtFH8gYbQKtKfWKKg2SP6gdD → SOL | failed | 42s | 1 | acquire Hax9LTgsQkze1YFychnBLtFH8gYbQKtKfWKKg2SP6gdD expired |
| 22:57:49 | 445 | 13 | sell 0.005 SOL → 2JcXacFwt9mVAwBQ5nZkYwCyXQkRcdsYrDXn6hj22SbP | filled | 17s | 1 |  |
| 22:58:06 | 446 | 13 | sell 508 2JcXacFwt9mVAwBQ5nZkYwCyXQkRcdsYrDXn6hj22SbP → SOL | filled | 34s | 1 |  |
| 22:58:03 | 447 | 14 | sell 0.005 SOL → 71Jvq4Epe2FCJ7JFSF7jLXdNk1Wy4Bhqd9iL6bEFELvg | filled | 15s | 1 |  |
| 22:58:18 | 448 | 14 | sell 330 71Jvq4Epe2FCJ7JFSF7jLXdNk1Wy4Bhqd9iL6bEFELvg → SOL | filled | 13s | 1 |  |
| 22:59:03 | 449 | 15 | sell 0.005 SOL → 5SVG3T9CNQsm2kEwzbRq6hASqh1oGfjqTtLXYUibpump | filled | 12s | 1 |  |
| 22:59:15 | 450 | 15 | sell 398 5SVG3T9CNQsm2kEwzbRq6hASqh1oGfjqTtLXYUibpump → SOL | failed | 44s | 1 | main expired |
| 22:58:56 | 451 | 16 | sell 0.005 SOL → DNhQZ1CE9qZ2FNrVhsCXwQJ2vZG8ufZkcYakTS5Jpump | filled | 11s | 1 |  |
| 22:59:06 | 452 | 16 | sell 209 DNhQZ1CE9qZ2FNrVhsCXwQJ2vZG8ufZkcYakTS5Jpump → SOL | filled | 12s | 1 |  |
| 22:58:45 | 453 | 17 | sell 0.005 SOL → H2c31USxu35MDkBrGph8pUDUnmzo2e4Rf4hnvL2Upump | filled | 8s | 1 |  |
| 22:58:53 | 454 | 17 | sell 452 H2c31USxu35MDkBrGph8pUDUnmzo2e4Rf4hnvL2Upump → SOL | failed | 36s | 1 | main expired |
| 23:00:00 | 455 | 18 | sell 0.005 SOL → 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z | filled | 24s | 1 |  |
| 23:00:24 | 456 | 18 | sell 2.97 3dQTr7ror2QPKQ3GbBCokJUmjErGg8kTJzdnYjNfvi3Z → SOL | filled | 4s | 1 |  |
| 22:57:49 | 457 | 19 | sell 0.005 SOL → 4nswj3o1Lo9iWYvvRJxUD8vbCy9ay7QQoXYcncHNbonk | filled | 21s | 1 |  |
| 22:58:09 | 458 | 19 | sell 1860 4nswj3o1Lo9iWYvvRJxUD8vbCy9ay7QQoXYcncHNbonk → SOL | filled | 11s | 1 |  |
| 22:59:23 | 459 | 20 | sell 0.005 SOL → SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz | filled | 10s | 1 |  |
| 22:59:34 | 460 | 20 | sell 302 SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz → SOL | filled | 10s | 1 |  |
| 22:59:18 | 461 | 21 | sell 0.005 SOL → 6D7NaB2xsLd7cauWu1wKk6KBsJohJmP2qZH9GEfVi5Ui | filled | 11s | 1 |  |
| 22:59:29 | 462 | 21 | sell 521 6D7NaB2xsLd7cauWu1wKk6KBsJohJmP2qZH9GEfVi5Ui → SOL | failed | 35s | 1 | main expired |
| 23:00:35 | 463 | 22 | sell 0.005 SOL → sSo14endRuUbvQaJS3dq36Q829a3A6BEfoeeRGJywEh | filled | 11s | 1 |  |
| 23:00:46 | 464 | 22 | sell 0.00383 sSo14endRuUbvQaJS3dq36Q829a3A6BEfoeeRGJywEh → SOL | filled | 7s | 1 |  |
| 22:59:51 | 465 | 23 | sell 0.005 SOL → Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ | failed | 35s | 1 | main expired |
| 23:00:27 | 466 | 23 | sell 0.00369 Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ → SOL | filled | 37s | 2 |  |
| 22:58:15 | 467 | 24 | sell 0.005 SOL → 2fUFhZyd47Mapv9wcfXh5gnQwFXtqcYu9xAN4THBpump | filled | 8s | 1 |  |
| 22:58:23 | 468 | 24 | sell 650 2fUFhZyd47Mapv9wcfXh5gnQwFXtqcYu9xAN4THBpump → SOL | failed | 38s | 1 | main expired |
| 23:00:23 | 469 | 25 | sell 0.005 SOL → LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp | filled | 33s | 1 |  |
| 23:00:57 | 470 | 25 | sell 0.00291 LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp → SOL | filled | 7s | 1 |  |
| 23:00:48 | 471 | 26 | sell 0.005 SOL → 65nTNuJGHme4PQvKQyJykKp1bJAkK4A8Q66sd2yBWugf | filled | 7s | 1 |  |
| 23:00:55 | 472 | 26 | sell 495000 65nTNuJGHme4PQvKQyJykKp1bJAkK4A8Q66sd2yBWugf → SOL | filled | 10s | 1 |  |
| 22:58:32 | 473 | 27 | sell 0.005 SOL → DeaKMzAeZja3Mh5okZE6WUvygLP3Lfuvm6Rg78HqXTz9 | filled | 8s | 1 |  |
| 22:58:40 | 474 | 27 | sell 393 DeaKMzAeZja3Mh5okZE6WUvygLP3Lfuvm6Rg78HqXTz9 → SOL | filled | 8s | 1 |  |
| 22:59:14 | 475 | 28 | sell 0.005 SOL → 3WPep4ufaToK1aS5s8BL9inzeUrt4DYaQCiic6ZkkC1U | filled | 11s | 1 |  |
| 22:59:26 | 476 | 28 | sell 15.3 3WPep4ufaToK1aS5s8BL9inzeUrt4DYaQCiic6ZkkC1U → SOL | filled | 7s | 1 |  |
| 22:58:18 | 477 | 29 | sell 0.005 SOL → ULwSJmmpxmnRfpu6BjnK6rprKXqD5jXUmPpS1FxHXFy | filled | 13s | 1 |  |
| 22:58:31 | 478 | 29 | sell 281 ULwSJmmpxmnRfpu6BjnK6rprKXqD5jXUmPpS1FxHXFy → SOL | filled | 8s | 1 |  |
| 22:59:42 | 479 | 30 | sell 0.005 SOL → 69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs | failed | 36s | 1 | main expired |
| 23:00:19 | 480 | 30 | sell 3630000 69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs → SOL | filled | 27s | 2 |  |
| 23:00:39 | 481 | 1 | sell 0.005 SOL → F6qoefQq4iCBLoNZ34RjEqHjHkD8vtmoRSdw9Nd55J1k | filled | 8s | 1 |  |
| 23:00:47 | 482 | 1 | sell 1330 F6qoefQq4iCBLoNZ34RjEqHjHkD8vtmoRSdw9Nd55J1k → SOL | filled | 7s | 1 |  |
| 23:00:34 | 483 | 2 | sell 0.005 SOL → AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR | filled | 10s | 1 |  |
| 23:00:45 | 484 | 2 | sell 111000000 AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR → SOL | filled | 10s | 1 |  |
| 22:59:40 | 485 | 3 | sell 0.005 SOL → URARfsinxCRw4JpvQhuT4CxavdZXZEMjv9ZwWmWpwag | filled | 13s | 1 |  |
| 22:59:53 | 486 | 3 | sell 0.0126 URARfsinxCRw4JpvQhuT4CxavdZXZEMjv9ZwWmWpwag → SOL | filled | 33s | 1 |  |
| 22:59:44 | 487 | 4 | sell 0.005 SOL → moonThZEkkTVoNB7v6YVCQiT56JYDZ1oN185ba3WizL | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 22:59:45 | 488 | 4 | sell 101 moonThZEkkTVoNB7v6YVCQiT56JYDZ1oN185ba3WizL → SOL | failed | 6s | 0 | acquire moonThZEkkTVoNB7v6YVCQiT56JYDZ1oN185ba3WizL quote failed: 404 Not Found: NoLiquidity: no route found |
| 23:00:07 | 489 | 5 | sell 0.005 SOL → Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP | filled | 8s | 1 |  |
| 23:00:15 | 490 | 5 | sell 1580 Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP → SOL | filled | 20s | 1 |  |
| 22:59:01 | 491 | 6 | sell 0.005 SOL → 9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM | filled | 11s | 1 |  |
| 22:59:12 | 492 | 6 | sell 29.5 9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM → SOL | filled | 23s | 1 |  |
| 23:01:04 | 493 | 7 | sell 0.005 SOL → WingsAYbfs4qnEgcw8jpSvetqp8XHM3GkKvow54WLcd | filled | 11s | 1 |  |
| 23:01:14 | 494 | 7 | sell 147 WingsAYbfs4qnEgcw8jpSvetqp8XHM3GkKvow54WLcd → SOL | filled | 10s | 1 |  |
| 23:00:55 | 495 | 8 | sell 0.005 SOL → 3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump | filled | 8s | 1 |  |
| 23:01:02 | 496 | 8 | sell 1080 3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump → SOL | filled | 7s | 1 |  |
| 22:59:41 | 497 | 9 | sell 0.005 SOL → LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg | filled | 20s | 1 |  |
| 23:00:01 | 498 | 9 | sell 0.00362 LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg → SOL | filled | 9s | 1 |  |
| 23:01:17 | 499 | 10 | sell 0.005 SOL → HQ7DaoiUxzC2K1Dr7KXRHccNtXvEYgNvoUextXe8dmBh | filled | 8s | 1 |  |
| 23:01:24 | 500 | 10 | sell 406 HQ7DaoiUxzC2K1Dr7KXRHccNtXvEYgNvoUextXe8dmBh → SOL | filled | 8s | 1 |  |
| 22:58:32 | 501 | 11 | sell 0.005 SOL → DLUNTKRQt7CrpqSX1naHUYoBznJ9pvMP65uCeWQgYnRK | filled | 17s | 1 |  |
| 22:58:49 | 502 | 11 | sell 38.6 DLUNTKRQt7CrpqSX1naHUYoBznJ9pvMP65uCeWQgYnRK → SOL | failed | 36s | 1 | main expired |
| 22:59:36 | 503 | 12 | sell 0.005 SOL → ATRLuHph8dxnPny4WSNW7fxkhbeivBrtWbY6BfB4xpLj | filled | 14s | 1 |  |
| 22:59:50 | 504 | 12 | sell 679 ATRLuHph8dxnPny4WSNW7fxkhbeivBrtWbY6BfB4xpLj → SOL | filled | 12s | 1 |  |
| 22:58:40 | 505 | 13 | sell 0.005 SOL → 4YK1njyeCkBuXG6phNtidJWKCbBhB659iwGkUJx98P5Z | filled | 8s | 1 |  |
| 22:58:48 | 506 | 13 | sell 137 4YK1njyeCkBuXG6phNtidJWKCbBhB659iwGkUJx98P5Z → SOL | failed | 37s | 1 | main expired |
| 22:58:31 | 507 | 14 | sell 0.005 SOL → J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD | failed | 38s | 1 | main expired |
| 22:59:09 | 508 | 14 | sell 0.227 J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD → SOL | failed | 45s | 1 | acquire J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD expired |
| 22:59:59 | 509 | 15 | sell 0.005 SOL → 4Zp52aF4hZi9fzH19xpbWKYKQvgLyCN67KFbrQDqeTKh | filled | 14s | 1 |  |
| 23:00:13 | 510 | 15 | sell 6.66 4Zp52aF4hZi9fzH19xpbWKYKQvgLyCN67KFbrQDqeTKh → SOL | filled | 8s | 1 |  |
| 22:59:18 | 511 | 16 | sell 0.005 SOL → 3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN | filled | 15s | 1 |  |
| 22:59:33 | 512 | 16 | sell 1500 3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN → SOL | filled | 10s | 1 |  |
| 22:59:29 | 513 | 17 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 36s | 1 |  |
| 23:00:05 | 514 | 17 | sell 0.439 euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA → SOL | filled | 11s | 1 |  |
| 23:00:28 | 515 | 18 | sell 0.005 SOL → 9WPTUkh8fKuCnepRWoPYLH3aK9gSjPHFDenBq2X1Czdp | filled | 8s | 1 |  |
| 23:00:35 | 516 | 18 | sell 1460 9WPTUkh8fKuCnepRWoPYLH3aK9gSjPHFDenBq2X1Czdp → SOL | filled | 11s | 1 |  |
| 22:58:21 | 517 | 19 | sell 0.005 SOL → CQSzJzwW5H1oyWrp6QhfUKYYwyovbSiVDKnAxNfb1tJC | failed | 38s | 1 | main expired |
| 22:58:59 | 518 | 19 | sell 1290 CQSzJzwW5H1oyWrp6QhfUKYYwyovbSiVDKnAxNfb1tJC → SOL | filled | 38s | 2 |  |
| 22:59:44 | 519 | 20 | sell 0.005 SOL → 5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp | filled | 9s | 1 |  |
| 22:59:53 | 520 | 20 | sell 727 5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp → SOL | filled | 9s | 1 |  |
| 23:00:04 | 521 | 21 | sell 0.005 SOL → 9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P | filled | 11s | 1 |  |
| 23:00:15 | 522 | 21 | sell 1050 9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P → SOL | filled | 14s | 1 |  |
| 23:00:53 | 523 | 22 | sell 0.005 SOL → 7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn | filled | 4s | 1 |  |
| 23:00:57 | 524 | 22 | sell 0.00327 7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn → SOL | filled | 7s | 1 |  |
| 23:01:03 | 525 | 23 | sell 0.005 SOL → AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP | filled | 7s | 1 |  |
| 23:01:11 | 526 | 23 | sell 20.6 AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP → SOL | filled | 7s | 1 |  |
| 22:59:01 | 527 | 24 | sell 0.005 SOL → AhhdRu5YZdjVkKR3wbnUDaymVQL2ucjMQ63sZ3LFHsch | filled | 11s | 1 |  |
| 22:59:12 | 528 | 24 | sell 0.407 AhhdRu5YZdjVkKR3wbnUDaymVQL2ucjMQ63sZ3LFHsch → SOL | failed | 37s | 1 | main expired |
| 23:01:04 | 529 | 25 | sell 0.005 SOL → HLptm5e6rTgh4EKgDpYFrnRHbjpkMyVdEeREEa2G7rf9 | filled | 7s | 1 |  |
| 23:01:11 | 530 | 25 | sell 16900 HLptm5e6rTgh4EKgDpYFrnRHbjpkMyVdEeREEa2G7rf9 → SOL | filled | 7s | 1 |  |
| 23:01:05 | 531 | 26 | sell 0.005 SOL → 8doS8nzmgVZEaACxALkbK5fZtw4UuoRp4Yt8NEaXfDMb | filled | 7s | 1 |  |
| 23:01:12 | 532 | 26 | sell 867 8doS8nzmgVZEaACxALkbK5fZtw4UuoRp4Yt8NEaXfDMb → SOL | filled | 7s | 1 |  |
| 22:58:48 | 533 | 27 | sell 0.005 SOL → UPTx1d24aBWuRgwxVnFmX4gNraj3QGFzL3QqBgxtWQG | failed | 37s | 1 | main expired |
| 22:59:25 | 534 | 27 | sell 288 UPTx1d24aBWuRgwxVnFmX4gNraj3QGFzL3QqBgxtWQG → SOL | failed | 66s | 2 | main expired |
| 22:59:32 | 535 | 28 | sell 0.005 SOL → FU1q8vJpZNUrmqsciSjp8bAKKidGsLmouB8CBdf8TKQv | filled | 7s | 1 |  |
| 22:59:39 | 536 | 28 | sell 134 FU1q8vJpZNUrmqsciSjp8bAKKidGsLmouB8CBdf8TKQv → SOL | failed | 37s | 1 | main expired |
| 22:58:39 | 537 | 29 | sell 0.005 SOL → FViMp5phQH2bX81S7Yyn1yXjj3BRddFBNcMCbTH8FCze | filled | 8s | 1 |  |
| 22:58:47 | 538 | 29 | sell 566000000 FViMp5phQH2bX81S7Yyn1yXjj3BRddFBNcMCbTH8FCze → SOL | failed | 2s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 23:00:46 | 539 | 30 | sell 0.005 SOL → MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac | filled | 13s | 1 |  |
| 23:00:59 | 540 | 30 | sell 15.2 MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac → SOL | filled | 7s | 1 |  |
| 23:00:54 | 541 | 1 | sell 0.005 SOL → 9dLuVbJMd4ZpTpFgmaFHAGSsFwVjtcnzFWaLAA1expHg | filled | 10s | 1 |  |
| 23:01:04 | 542 | 1 | sell 338 9dLuVbJMd4ZpTpFgmaFHAGSsFwVjtcnzFWaLAA1expHg → SOL | filled | 7s | 1 |  |
| 23:00:55 | 543 | 2 | sell 0.005 SOL → 25hAyBQfoDhfWx9ay6rarbgvWGwDdNqcHsXS3jQ3mTDJ | filled | 7s | 1 |  |
| 23:01:02 | 544 | 2 | sell 1700 25hAyBQfoDhfWx9ay6rarbgvWGwDdNqcHsXS3jQ3mTDJ → SOL | filled | 7s | 1 |  |
| 23:00:25 | 545 | 3 | sell 0.005 SOL → BANKJmvhT8tiJRsBSS1n2HryMBPvT5Ze4HU95DUAmeta | filled | 11s | 1 |  |
| 23:00:36 | 546 | 3 | sell 1.91 BANKJmvhT8tiJRsBSS1n2HryMBPvT5Ze4HU95DUAmeta → SOL | filled | 11s | 1 |  |
| 22:59:51 | 547 | 4 | sell 0.005 SOL → AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr | filled | 9s | 1 |  |
| 23:00:00 | 548 | 4 | sell 538 AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr → SOL | filled | 8s | 1 |  |
| 23:00:35 | 549 | 5 | sell 0.005 SOL → 947tEoG318GUmyjVYhraNRvWpMX7fpBTDQFBoJvSkSG3 | filled | 10s | 1 |  |
| 23:00:45 | 550 | 5 | sell 17.7 947tEoG318GUmyjVYhraNRvWpMX7fpBTDQFBoJvSkSG3 → SOL | filled | 13s | 1 |  |
| 22:59:36 | 551 | 6 | sell 0.005 SOL → GTH3wG3NErjwcf7VGCoXEXkgXSHvYhx5gtATeeM5JAS1 | filled | 10s | 1 |  |
| 22:59:46 | 552 | 6 | sell 40.1 GTH3wG3NErjwcf7VGCoXEXkgXSHvYhx5gtATeeM5JAS1 → SOL | failed | 36s | 1 | main expired |
| 23:01:24 | 553 | 7 | sell 0.005 SOL → 26KMQVgDUoB6rEfnJ51yAABWWJND8uMtpnQgsHQ64Udr | filled | 8s | 1 |  |
| 23:01:32 | 554 | 7 | sell 2070 26KMQVgDUoB6rEfnJ51yAABWWJND8uMtpnQgsHQ64Udr → SOL | filled | 7s | 1 |  |
| 23:01:09 | 555 | 8 | sell 0.005 SOL → 6n7Janary9fqzxKaJVrhL9TG2F61VbAtwUMu1YZscaQS | filled | 7s | 1 |  |
| 23:01:17 | 556 | 8 | sell 5050 6n7Janary9fqzxKaJVrhL9TG2F61VbAtwUMu1YZscaQS → SOL | filled | 7s | 1 |  |
| 23:00:10 | 557 | 9 | sell 0.005 SOL → AujTJJ7aMS8LDo3bFzoyXDwT3jBALUbu4VZhzZdTZLmG | filled | 11s | 1 |  |
| 23:00:21 | 558 | 9 | sell 596000 AujTJJ7aMS8LDo3bFzoyXDwT3jBALUbu4VZhzZdTZLmG → SOL | filled | 8s | 1 |  |

### Rows without an order

4 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 2 | DITH → SOL, SOL → MF | no route found |
| NoLiquidity | acquire | 1 | SOL → MF | no route found |
| BlockhashExpired | main | 1 | $TOAD → SOL | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 596 (503 main, 93 acquire). Cleanup placed 27 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 23:01:49 | 1 | xavier → SOL (native) | Executed | `0xbe85759c…` [🐞](https://debug.barn.cow.fi/order/0xbe85759c09bce3e626b9508aa1b0dea638a43bf5aced05559fb1d57640ffe117) |
| 23:01:50 | 1 | KMNO → SOL (native) | Executed | `0x49369f11…` [🐞](https://debug.barn.cow.fi/order/0x49369f11d56b51fedf4a1d252a6f02e88867dc8882c3f5b23d9e9a04f6a71712) |
| 23:01:50 | 1 | 2Z → SOL (native) | Executed | `0x4746e3a1…` [🐞](https://debug.barn.cow.fi/order/0x4746e3a151593a1deb1722ef8b1747eb42b1b143e0ef87d8c882c2fe425fbb8e) |
| 23:01:50 | 1 | Jotchua → SOL (native) | Executed | `0x75a7edc5…` [🐞](https://debug.barn.cow.fi/order/0x75a7edc536efe9540724ab4f9a6efae724fff4637999f90aae03764f5d3de811) |
| 23:01:50 | 1 | LLY → SOL (native) | Executed | `0x1ec37c10…` [🐞](https://debug.barn.cow.fi/order/0x1ec37c10aa02a48ed4b280a2a280270f8d59df7a0e45ccb3089fe314810ae139) |
| 23:01:54 | 2 | DJT → SOL (native) | Executed | `0x68864317…` [🐞](https://debug.barn.cow.fi/order/0x6886431736f1e7c5f99e8fcfc9a53e3c60ad5d3099260fea8f7ec227985b3337) |
| 23:01:54 | 2 | three → SOL (native) | Executed | `0xd68a68ce…` [🐞](https://debug.barn.cow.fi/order/0xd68a68ce5864b9c215c6dc4b61bc239eae8799f6dd95d0cb0e7e18d143dbd2cd) |
| 23:01:58 | 3 | IO → SOL (native) | Executed | `0x72528555…` [🐞](https://debug.barn.cow.fi/order/0x7252855562a3f78f307f4da93ddf24cb6ae5a5e1aea29485b2e92639ce5a1ebc) |
| 23:01:58 | 3 | BURNIE → SOL (native) | Executed | `0x99c2d3b1…` [🐞](https://debug.barn.cow.fi/order/0x99c2d3b16c3e168f34a50a208974ddfeb377551bf4dc1d9868f87bbb0e633a66) |
| 23:01:58 | 3 | DKNG → SOL (native) | Executed | `0x99942da6…` [🐞](https://debug.barn.cow.fi/order/0x99942da610b2ec10bbecee12c25fc04b24bb71e7a2663f8f453f0d3772d237b0) |
| 23:01:59 | 3 | QQQx → SOL (native) | Executed | `0xf566d709…` [🐞](https://debug.barn.cow.fi/order/0xf566d7090a5b94d8c32136eaa53585abd35d07670dc769e8a092ca4b04310900) |
| 23:02:14 | 12 | ATR → SOL (native) | Executed | `0xcc6edc62…` [🐞](https://debug.barn.cow.fi/order/0xcc6edc62a610d0522110271fc355c93e1493de1c0922391ce3899dcef3229601) |
| 23:02:14 | 12 | INJ → SOL (native) | Executed | `0xc921e915…` [🐞](https://debug.barn.cow.fi/order/0xc921e91584633370f63e28d5e64a56b06f05016699c716e57860b2edf2e350d1) |
| 23:02:32 | 23 | BOME → SOL (native) | Executed | `0xe4cdb78a…` [🐞](https://debug.barn.cow.fi/order/0xe4cdb78a65736b2f75f04895fe8611529413647c8a75c978c10eb84f642e1460) |
| 23:02:40 | 28 | VINE → SOL (native) | Executed | `0x44d2e1c9…` [🐞](https://debug.barn.cow.fi/order/0x44d2e1c9b1b7ca5f52fa1dfebbadd7241dd3e98ac2b9539e2b09b8951af0487e) |
| 23:03:32 | 29 | BNB → SOL (native) | Executed | `0x55093726…` [🐞](https://debug.barn.cow.fi/order/0x55093726b7f45eaaac1695ef1c7fe61688fe0a3e8228236682328d35a02124d4) |
| 23:03:32 | 29 | $TOAD → SOL (native) | Executed | `0x7f60c8bb…` [🐞](https://debug.barn.cow.fi/order/0x7f60c8bb4a1f03bc5355133a706be931ee8423086656d34a9b4205fe20bcdadd) |
| 23:03:32 | 29 | AMC → SOL (native) | Executed | `0x1e222d5b…` [🐞](https://debug.barn.cow.fi/order/0x1e222d5be896a5326e1215ee354dbd094dc11f06a33c59cc27ee39582a38a159) |
| 23:03:38 | 4 | VIRTUAL → SOL (native) | Executed | `0x3cbd6bbe…` [🐞](https://debug.barn.cow.fi/order/0x3cbd6bbef49827f8a892f18ab4b9b8d93887eb05777954a2c84416db153ffa39) |
| 23:03:39 | 4 | 67 → SOL (native) | Executed | `0xa539df3d…` [🐞](https://debug.barn.cow.fi/order/0xa539df3d2cdd52d99035852af17e2fa5d3191830bcd6617587dd85c23bb9a5d9) |
| 23:03:39 | 4 | CODEC → SOL (native) | Executed | `0x0e035ed1…` [🐞](https://debug.barn.cow.fi/order/0x0e035ed1d7ee27c2de5bdf2fa55a4700244d690f944c6b4ae3a8481d53989c77) |
| 23:03:39 | 4 | PLTRx → SOL (native) | Executed | `0x5a74343a…` [🐞](https://debug.barn.cow.fi/order/0x5a74343a84df75883de63534fa5964a815ca5ea692b95bf4d2c6d5a72ca15264) |
| 23:03:40 | 4 | BABA → SOL (native) | Executed | `0xd5afb6ac…` [🐞](https://debug.barn.cow.fi/order/0xd5afb6ace61c429391ea7339fef45ee3432caccc0f2ad6e046995653c7daf876) |
| 23:03:41 | 5 | CHILLGUY → SOL (native) | Executed | `0x642e89a4…` [🐞](https://debug.barn.cow.fi/order/0x642e89a4e22466308449ddfa0310e98e5022181daee2c9eb66cbc5cf590da4ae) |
| 23:03:41 | 5 | MCDx → SOL (native) | Executed | `0x06dcd9bb…` [🐞](https://debug.barn.cow.fi/order/0x06dcd9bbbea4bd59c06010a0c6f4e355b942ee952bffb28a455ba465e3e70099) |
| 23:03:42 | 5 | DRAM → SOL (native) | Executed | `0x3b7874c1…` [🐞](https://debug.barn.cow.fi/order/0x3b7874c1781a8b5429d81cd404bdc927e2191489816954cf77f34a6eb0be6b78) |
| 23:03:42 | 5 | RKLB → SOL (native) | Executed | `0x061c9478…` [🐞](https://debug.barn.cow.fi/order/0x061c94782c222b62aadb5405a2090971fb3e6a0a1c3827984fafec5d019357c8) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 386 | 64.8% |
| expired: never created on-chain (winner found, creation blockhash expired) | 209 | 35.1% |
| expired | 1 | 0.2% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 6s | 11s | 20s | 52s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 386 | 100.0% | 386 | 86,926 | 6s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 441 | 438 | 413 | 94.3% | 10 | 14 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 8 |
| jupiter-solve: FailedToCreate | 2 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 5
- Orders filtered for `unfunded_sell_token_account`: 140 times
- Orders filtered for `in_flight`: 17 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 596 | 386 | 64.8% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → WEN | 3 | 1 | 33.3% |
| wSOL → MPLX | 2 | 2 | 100.0% |
| wSOL → QQQx | 2 | 1 | 50.0% |
| wSOL → CODEC | 2 | 1 | 50.0% |
| wSOL → HOODx | 2 | 0 | 0.0% |
| wSOL → DARK | 2 | 1 | 50.0% |
| wSOL → KMNO | 2 | 1 | 50.0% |
| wSOL → BNB | 2 | 1 | 50.0% |
| wSOL → TSLAx | 2 | 0 | 0.0% |
| wSOL → AAPLx | 2 | 0 | 0.0% |
| wSOL → COINx | 2 | 1 | 50.0% |
| wSOL → TTWO | 2 | 0 | 0.0% |
| wSOL → RHEA | 2 | 1 | 50.0% |
| wSOL → WBTC | 2 | 0 | 0.0% |
| wSOL → SKR | 2 | 0 | 0.0% |
| wSOL → xBTC | 2 | 1 | 50.0% |
| wSOL → xHYPE | 2 | 0 | 0.0% |
| wSOL → GRND | 2 | 1 | 50.0% |
| wSOL → GIGA | 2 | 0 | 0.0% |
| wSOL → PSOL | 2 | 0 | 0.0% |
| wSOL → MSTRx | 2 | 1 | 50.0% |
| wSOL → CLAW | 2 | 2 | 100.0% |
| wSOL → 2Z | 2 | 1 | 50.0% |
| wSOL → PYTH | 2 | 0 | 0.0% |
| wSOL → GOLD | 2 | 0 | 0.0% |
| wSOL → META | 2 | 1 | 50.0% |
| wSOL → HNT | 2 | 0 | 0.0% |
| wSOL → KLED | 2 | 2 | 100.0% |
| wSOL → ALON | 2 | 1 | 50.0% |
| wSOL → PUMPCADE | 2 | 2 | 100.0% |
| wSOL → bSOL | 2 | 0 | 0.0% |
| wSOL → DRAM | 2 | 1 | 50.0% |
| wSOL → CHILLHOUSE | 2 | 0 | 0.0% |
| wSOL → AMZNx | 2 | 0 | 0.0% |
| wSOL → GME | 2 | 1 | 50.0% |
| wSOL → pwease | 2 | 0 | 0.0% |
| wSOL → IBM | 2 | 1 | 50.0% |
| wSOL → TRX | 2 | 1 | 50.0% |
| wSOL → INJ | 2 | 2 | 100.0% |
| wSOL → SOLCEX | 2 | 1 | 50.0% |
| wSOL → Bert | 2 | 1 | 50.0% |
| wSOL → Anon | 2 | 0 | 0.0% |
| wSOL → arc | 2 | 1 | 50.0% |
| wSOL → ZEUS | 2 | 0 | 0.0% |
| wSOL → DREGG | 2 | 0 | 0.0% |
| wSOL → KOx | 2 | 0 | 0.0% |
| wSOL → Jotchua | 2 | 2 | 100.0% |
| wSOL → BULLSHIT | 2 | 0 | 0.0% |
| wSOL → hSOL | 2 | 0 | 0.0% |
| wSOL → BIRB | 2 | 0 | 0.0% |
| wSOL → SLX | 2 | 0 | 0.0% |
| wSOL → MON | 2 | 0 | 0.0% |
| wSOL → bonkSOL | 2 | 1 | 50.0% |
| wSOL → DADDY | 2 | 0 | 0.0% |
| wSOL → USO | 2 | 2 | 100.0% |
| wSOL → Old Slerf | 2 | 1 | 50.0% |
| wSOL → dreams | 2 | 0 | 0.0% |
| wSOL → ME | 2 | 0 | 0.0% |
| wSOL → Tokabu | 2 | 1 | 50.0% |
| wSOL → W | 2 | 0 | 0.0% |
| wSOL → NST | 2 | 0 | 0.0% |
| wSOL → Clash | 2 | 0 | 0.0% |
| wSOL → PBTC | 2 | 0 | 0.0% |
| wSOL → CARS | 2 | 1 | 50.0% |
| wSOL → MOBY | 2 | 1 | 50.0% |
| wSOL → Cake | 2 | 0 | 0.0% |
| wSOL → MRVL | 2 | 0 | 0.0% |
| wSOL → ZERO | 2 | 0 | 0.0% |
| wSOL → PONKE | 2 | 1 | 50.0% |
| wSOL → NATIX | 2 | 1 | 50.0% |
| wSOL → PFE | 2 | 0 | 0.0% |
| wSOL → ACT | 2 | 0 | 0.0% |
| wSOL → BITCOIN | 2 | 0 | 0.0% |
| wSOL → DITH | 2 | 1 | 50.0% |
| wSOL → TAI | 2 | 0 | 0.0% |
| wSOL → STAN | 2 | 1 | 50.0% |
| wSOL → ARX | 2 | 0 | 0.0% |
| wSOL → PUPS | 2 | 0 | 0.0% |
| wSOL → ISC | 2 | 0 | 0.0% |
| wSOL → UMBRA | 2 | 1 | 50.0% |
| wSOL → LLY | 2 | 1 | 50.0% |
| wSOL → pippin | 2 | 1 | 50.0% |
| wSOL → UPT | 2 | 1 | 50.0% |
| wSOL → READY | 2 | 0 | 0.0% |
| wSOL → RAGEGUY | 2 | 2 | 100.0% |
| wSOL → ZEREBRO | 2 | 1 | 50.0% |
| wSOL → hyloSOL | 2 | 0 | 0.0% |
| wSOL → RETARDIO | 2 | 0 | 0.0% |
| wSOL → TBB | 2 | 1 | 50.0% |
| wSOL → Chud | 2 | 1 | 50.0% |
| wSOL → USA | 2 | 1 | 50.0% |
| wSOL → dSOL | 2 | 1 | 50.0% |
| wSOL → vSOL | 2 | 1 | 50.0% |
| wSOL → TRUMP | 1 | 1 | 100.0% |
| wSOL → DJT | 1 | 1 | 100.0% |
| wSOL → METAx | 1 | 1 | 100.0% |
| wSOL → PERPSPAD | 1 | 1 | 100.0% |
| wSOL → SKHY | 1 | 1 | 100.0% |
| wSOL → MSFTx | 1 | 1 | 100.0% |
| wSOL → hyUSD | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → MANIFEST | 1 | 1 | 100.0% |
| wSOL → SNDK | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → GRASS | 1 | 1 | 100.0% |
| wSOL → ORCA | 1 | 1 | 100.0% |
| wSOL → JTO | 1 | 1 | 100.0% |
| wSOL → TripleT | 1 | 1 | 100.0% |
| wSOL → Jimothy | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| wSOL → SPX | 1 | 1 | 100.0% |
| wSOL → MU | 1 | 1 | 100.0% |
| wSOL → USDS | 1 | 1 | 100.0% |
| wSOL → GOOGLx | 1 | 1 | 100.0% |
| wSOL → GMEx | 1 | 1 | 100.0% |
| wSOL → Buttcoin | 1 | 1 | 100.0% |
| wSOL → aura | 1 | 1 | 100.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → DBR | 1 | 1 | 100.0% |
| wSOL → NOS | 1 | 1 | 100.0% |
| wSOL → BOT | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| TRUMP → SOL (native) | 1 | 1 | 100.0% |
| DJT → SOL (native) | 1 | 0 | 0.0% |
| METAx → SOL (native) | 1 | 1 | 100.0% |
| PERPSPAD → SOL (native) | 1 | 1 | 100.0% |
| SKHY → SOL (native) | 1 | 1 | 100.0% |
| SPX → SOL (native) | 1 | 1 | 100.0% |
| MU → SOL (native) | 1 | 1 | 100.0% |
| aura → SOL (native) | 1 | 1 | 100.0% |
| DBR → SOL (native) | 1 | 0 | 0.0% |
| CRCLx → SOL (native) | 1 | 0 | 0.0% |
| NOS → SOL (native) | 1 | 1 | 100.0% |
| INF → SOL (native) | 1 | 0 | 0.0% |
| BOT → SOL (native) | 1 | 1 | 100.0% |
| MSFTx → SOL (native) | 1 | 0 | 0.0% |
| hyUSD → SOL (native) | 1 | 1 | 100.0% |
| MANIFEST → SOL (native) | 1 | 1 | 100.0% |
| SNDK → SOL (native) | 1 | 1 | 100.0% |
| Bonk → SOL (native) | 1 | 1 | 100.0% |
| GRASS → SOL (native) | 1 | 1 | 100.0% |
| ORCA → SOL (native) | 1 | 0 | 0.0% |
| TripleT → SOL (native) | 1 | 0 | 0.0% |
| Jimothy → SOL (native) | 1 | 1 | 100.0% |
| EURC → SOL (native) | 1 | 0 | 0.0% |
| USDS → SOL (native) | 1 | 0 | 0.0% |
| GOOGLx → SOL (native) | 1 | 0 | 0.0% |
| GMEx → SOL (native) | 1 | 0 | 0.0% |
| Buttcoin → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MCDx | 1 | 1 | 100.0% |
| GLDx → SOL (native) | 1 | 0 | 0.0% |
| JTO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| MCDx → SOL (native) | 1 | 0 | 0.0% |
| wSOL → TOAD | 1 | 1 | 100.0% |
| wSOL → PEAQ | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| MPLX → SOL (native) | 1 | 0 | 0.0% |
| wSOL → PST | 1 | 1 | 100.0% |
| wSOL → ZBCN | 1 | 1 | 100.0% |
| wSOL → RUSH | 1 | 1 | 100.0% |
| wSOL → APE | 1 | 1 | 100.0% |
| XAUt0 → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GP | 1 | 1 | 100.0% |
| TOAD → SOL (native) | 1 | 1 | 100.0% |
| ZBCN → SOL (native) | 1 | 0 | 0.0% |
| PEAQ → SOL (native) | 1 | 1 | 100.0% |
| PST → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BC | 1 | 1 | 100.0% |
| GP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → eUSX | 1 | 1 | 100.0% |
| RUSH → SOL (native) | 1 | 1 | 100.0% |
| APE → SOL (native) | 1 | 0 | 0.0% |
| CODEC → SOL (native) | 1 | 0 | 0.0% |
| BC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Cupsey | 1 | 1 | 100.0% |
| QQQx → SOL (native) | 1 | 0 | 0.0% |
| DARK → SOL (native) | 1 | 1 | 100.0% |
| RHEA → SOL (native) | 1 | 0 | 0.0% |
| Cupsey → SOL (native) | 1 | 1 | 100.0% |
| BNB → SOL (native) | 1 | 0 | 0.0% |
| $WIF → SOL (native) | 1 | 1 | 100.0% |
| COINx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → KET | 1 | 1 | 100.0% |
| wSOL → STRCx | 1 | 1 | 100.0% |
| wSOL → FWOG | 1 | 1 | 100.0% |
| wSOL → NKE | 1 | 1 | 100.0% |
| GRND → SOL (native) | 1 | 0 | 0.0% |
| eUSX → SOL (native) | 1 | 1 | 100.0% |
| KET → SOL (native) | 1 | 1 | 100.0% |
| CLAW → SOL (native) | 1 | 1 | 100.0% |
| BOME → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SANC | 1 | 1 | 100.0% |
| xBTC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RBLX | 1 | 1 | 100.0% |
| FWOG → SOL (native) | 1 | 0 | 0.0% |
| wSOL → PLTRx | 1 | 1 | 100.0% |
| wSOL → ROUTER | 1 | 1 | 100.0% |
| NKE → SOL (native) | 1 | 0 | 0.0% |
| wSOL → ENA | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → HIMS | 1 | 1 | 100.0% |
| wSOL → DKNG | 1 | 1 | 100.0% |
| wSOL → LMAO! | 1 | 1 | 100.0% |
| wSOL → AMC | 1 | 1 | 100.0% |
| ENA → SOL (native) | 1 | 0 | 0.0% |
| MEW → SOL (native) | 1 | 1 | 100.0% |
| KLED → SOL (native) | 1 | 1 | 100.0% |
| RBLX → SOL (native) | 1 | 1 | 100.0% |
| SANC → SOL (native) | 1 | 0 | 0.0% |
| wSOL → wXRP | 1 | 1 | 100.0% |
| ROUTER → SOL (native) | 1 | 1 | 100.0% |
| PLTRx → SOL (native) | 1 | 0 | 0.0% |
| LMAO! → SOL (native) | 1 | 1 | 100.0% |
| MSTRx → SOL (native) | 1 | 1 | 100.0% |
| STRCx → SOL (native) | 1 | 1 | 100.0% |
| wXRP → SOL (native) | 1 | 1 | 100.0% |
| PUMPCADE → SOL (native) | 1 | 1 | 100.0% |
| AMC → SOL (native) | 1 | 0 | 0.0% |
| wSOL → COPX | 1 | 1 | 100.0% |
| wSOL → RENDER | 1 | 1 | 100.0% |
| wSOL → NPC | 1 | 1 | 100.0% |
| wSOL → Pepe | 1 | 1 | 100.0% |
| DKNG → SOL (native) | 1 | 0 | 0.0% |
| wSOL → TSUKI | 1 | 1 | 100.0% |
| wSOL → SNAP | 1 | 1 | 100.0% |
| HIMS → SOL (native) | 1 | 0 | 0.0% |
| 2Z → SOL (native) | 1 | 0 | 0.0% |
| NPC → SOL (native) | 1 | 0 | 0.0% |
| wSOL → WOJAK | 1 | 1 | 100.0% |
| COPX → SOL (native) | 1 | 1 | 100.0% |
| Pepe → SOL (native) | 1 | 1 | 100.0% |
| TSUKI → SOL (native) | 1 | 1 | 100.0% |
| WOJAK → SOL (native) | 1 | 1 | 100.0% |
| META → SOL (native) | 1 | 1 | 100.0% |
| RENDER → SOL (native) | 1 | 0 | 0.0% |
| wSOL → VINE | 1 | 1 | 100.0% |
| wSOL → RDDT | 1 | 1 | 100.0% |
| wSOL → DOOD | 1 | 1 | 100.0% |
| wSOL → AAVE | 1 | 1 | 100.0% |
| wSOL → BABA | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → USDUC | 1 | 1 | 100.0% |
| VINE → SOL (native) | 1 | 0 | 0.0% |
| DOOD → SOL (native) | 1 | 0 | 0.0% |
| DRAM → SOL (native) | 1 | 0 | 0.0% |
| RDDT → SOL (native) | 1 | 0 | 0.0% |
| SNAP → SOL (native) | 1 | 0 | 0.0% |
| AAVE → SOL (native) | 1 | 0 | 0.0% |
| BABA → SOL (native) | 1 | 0 | 0.0% |
| wSOL → EDEL | 1 | 1 | 100.0% |
| USDUC → SOL (native) | 1 | 1 | 100.0% |
| ALON → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USDv | 1 | 1 | 100.0% |
| USDY → SOL (native) | 1 | 0 | 0.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| EDEL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MOODENG | 1 | 1 | 100.0% |
| wSOL → MADE | 1 | 1 | 100.0% |
| POPCAT → SOL (native) | 1 | 0 | 0.0% |
| wSOL → HAROLD | 1 | 1 | 100.0% |
| GME → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HUMA | 1 | 1 | 100.0% |
| MOODENG → SOL (native) | 1 | 1 | 100.0% |
| MADE → SOL (native) | 1 | 1 | 100.0% |
| INJ → SOL (native) | 1 | 0 | 0.0% |
| USDv → SOL (native) | 1 | 1 | 100.0% |
| wSOL → AMD | 1 | 1 | 100.0% |
| HAROLD → SOL (native) | 1 | 1 | 100.0% |
| TRX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SOLANGELES | 1 | 1 | 100.0% |
| wSOL → SQUIRE | 1 | 1 | 100.0% |
| wSOL → CHILLGUY | 1 | 1 | 100.0% |
| wSOL → BRK.Bx | 1 | 1 | 100.0% |
| wSOL → KINS | 1 | 1 | 100.0% |
| HUMA → SOL (native) | 1 | 0 | 0.0% |
| wSOL → BP | 1 | 1 | 100.0% |
| wSOL → LINK | 1 | 1 | 100.0% |
| SOLCEX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → VIRTUAL | 1 | 1 | 100.0% |
| SQUIRE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → UFD | 1 | 1 | 100.0% |
| CHILLGUY → SOL (native) | 1 | 0 | 0.0% |
| wSOL → BIO | 1 | 1 | 100.0% |
| VIRTUAL → SOL (native) | 1 | 0 | 0.0% |
| AMD → SOL (native) | 1 | 0 | 0.0% |
| wSOL → CYPH | 1 | 1 | 100.0% |
| UFD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → KORI | 1 | 1 | 100.0% |
| BIO → SOL (native) | 1 | 0 | 0.0% |
| Jotchua → SOL (native) | 1 | 0 | 0.0% |
| BP → SOL (native) | 1 | 1 | 100.0% |
| SOLANGELES → SOL (native) | 1 | 1 | 100.0% |
| arc → SOL (native) | 1 | 1 | 100.0% |
| Bert → SOL (native) | 1 | 1 | 100.0% |
| KINS → SOL (native) | 1 | 1 | 100.0% |
| LINK → SOL (native) | 1 | 0 | 0.0% |
| wSOL → Percolator | 1 | 1 | 100.0% |
| wSOL → GRIFFAIN | 1 | 1 | 100.0% |
| BRK.Bx → SOL (native) | 1 | 1 | 100.0% |
| KORI → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ALPHA | 1 | 1 | 100.0% |
| wSOL → three | 1 | 1 | 100.0% |
| wSOL → CRED | 1 | 1 | 100.0% |
| CYPH → SOL (native) | 1 | 0 | 0.0% |
| wSOL → BURNIE | 1 | 1 | 100.0% |
| wSOL → Clude | 1 | 1 | 100.0% |
| ALPHA → SOL (native) | 1 | 1 | 100.0% |
| three → SOL (native) | 1 | 0 | 0.0% |
| USO → SOL (native) | 1 | 0 | 0.0% |
| wSOL → 67 | 1 | 1 | 100.0% |
| Clude → SOL (native) | 1 | 0 | 0.0% |
| Percolator → SOL (native) | 1 | 1 | 100.0% |
| 67 → SOL (native) | 1 | 0 | 0.0% |
| wSOL → PAYAI | 1 | 1 | 100.0% |
| CRED → SOL (native) | 1 | 0 | 0.0% |
| GRIFFAIN → SOL (native) | 1 | 0 | 0.0% |
| wSOL → crypto | 1 | 1 | 100.0% |
| wSOL → nub | 1 | 1 | 100.0% |
| wSOL → HODL | 1 | 1 | 100.0% |
| BURNIE → SOL (native) | 1 | 1 | 100.0% |
| WEN → SOL (native) | 1 | 0 | 0.0% |
| wSOL → DJI6930 | 1 | 1 | 100.0% |
| HODL → SOL (native) | 1 | 1 | 100.0% |
| nub → SOL (native) | 1 | 1 | 100.0% |
| bonkSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BELIEVE | 1 | 1 | 100.0% |
| wSOL → BOBO | 1 | 1 | 100.0% |
| DJI6930 → SOL (native) | 1 | 1 | 100.0% |
| crypto → SOL (native) | 1 | 0 | 0.0% |
| Old Slerf → SOL (native) | 1 | 0 | 0.0% |
| wSOL → retire | 1 | 1 | 100.0% |
| wSOL → swarms | 1 | 1 | 100.0% |
| wSOL → RKC | 1 | 1 | 100.0% |
| BELIEVE → SOL (native) | 1 | 1 | 100.0% |
| PAYAI → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SPSC | 1 | 1 | 100.0% |
| wSOL → mini | 1 | 1 | 100.0% |
| wSOL → BITTY | 1 | 1 | 100.0% |
| BOBO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → $HACHI | 1 | 1 | 100.0% |
| swarms → SOL (native) | 1 | 0 | 0.0% |
| RKC → SOL (native) | 1 | 1 | 100.0% |
| retire → SOL (native) | 1 | 1 | 100.0% |
| BITTY → SOL (native) | 1 | 1 | 100.0% |
| wSOL → IO | 1 | 1 | 100.0% |
| wSOL → Pnut | 1 | 1 | 100.0% |
| wSOL → GOR | 1 | 1 | 100.0% |
| wSOL → GHOST | 1 | 1 | 100.0% |
| mini → SOL (native) | 1 | 1 | 100.0% |
| $HACHI → SOL (native) | 1 | 0 | 0.0% |
| SPSC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RNT | 1 | 1 | 100.0% |
| wSOL → MRNA | 1 | 1 | 100.0% |
| GHOST → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GOAT | 1 | 1 | 100.0% |
| wSOL → STREAM | 1 | 1 | 100.0% |
| GOR → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HEGE | 1 | 1 | 100.0% |
| wSOL → ALTSZN | 1 | 1 | 100.0% |
| wSOL → HEEBOO | 1 | 1 | 100.0% |
| IO → SOL (native) | 1 | 0 | 0.0% |
| RNT → SOL (native) | 1 | 0 | 0.0% |
| STREAM → SOL (native) | 1 | 0 | 0.0% |
| Pnut → SOL (native) | 1 | 1 | 100.0% |
| ALTSZN → SOL (native) | 1 | 1 | 100.0% |
| MOBY → SOL (native) | 1 | 0 | 0.0% |
| wSOL → MELANIA | 1 | 1 | 100.0% |
| HEGE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SOLNIC | 1 | 1 | 100.0% |
| wSOL → SOLC | 1 | 1 | 100.0% |
| GOAT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ALCH | 1 | 1 | 100.0% |
| MRNA → SOL (native) | 1 | 1 | 100.0% |
| PONKE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → $TOAD | 1 | 1 | 100.0% |
| wSOL → DOLAN | 1 | 1 | 100.0% |
| SOLNIC → SOL (native) | 1 | 1 | 100.0% |
| MELANIA → SOL (native) | 1 | 0 | 0.0% |
| ALCH → SOL (native) | 1 | 1 | 100.0% |
| NATIX → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Shoggoth | 1 | 1 | 100.0% |
| DOLAN → SOL (native) | 1 | 0 | 0.0% |
| SOLC → SOL (native) | 1 | 0 | 0.0% |
| wSOL → BULLISH | 1 | 1 | 100.0% |
| HEEBOO → SOL (native) | 1 | 1 | 100.0% |
| Shoggoth → SOL (native) | 1 | 0 | 0.0% |
| wSOL → ZAUTH | 1 | 1 | 100.0% |
| wSOL → VCHF | 1 | 1 | 100.0% |
| wSOL → AUDIO | 1 | 1 | 100.0% |
| BULLISH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SIGMA | 1 | 1 | 100.0% |
| wSOL → RKLB | 1 | 1 | 100.0% |
| wSOL → URANUS | 1 | 1 | 100.0% |
| wSOL → unc | 1 | 1 | 100.0% |
| ZAUTH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → boden | 1 | 1 | 100.0% |
| VCHF → SOL (native) | 1 | 0 | 0.0% |
| AUDIO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PURPE | 1 | 1 | 100.0% |
| wSOL → GIKO | 1 | 1 | 100.0% |
| URANUS → SOL (native) | 1 | 1 | 100.0% |
| unc → SOL (native) | 1 | 0 | 0.0% |
| wSOL → SC | 1 | 1 | 100.0% |
| wSOL → MOTHER | 1 | 1 | 100.0% |
| boden → SOL (native) | 1 | 1 | 100.0% |
| STAN → SOL (native) | 1 | 1 | 100.0% |
| SIGMA → SOL (native) | 1 | 0 | 0.0% |
| wSOL → SCS | 1 | 1 | 100.0% |
| PURPE → SOL (native) | 1 | 1 | 100.0% |
| GIKO → SOL (native) | 1 | 1 | 100.0% |
| RKLB → SOL (native) | 1 | 0 | 0.0% |
| SC → SOL (native) | 1 | 0 | 0.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| RAGEGUY → SOL (native) | 1 | 1 | 100.0% |
| wSOL → tremp | 1 | 1 | 100.0% |
| MOTHER → SOL (native) | 1 | 1 | 100.0% |
| SCS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → WHALES | 1 | 1 | 100.0% |
| wSOL → ATR | 1 | 1 | 100.0% |
| tremp → SOL (native) | 1 | 0 | 0.0% |
| wSOL → URA | 1 | 1 | 100.0% |
| pippin → SOL (native) | 1 | 0 | 0.0% |
| wSOL → lanternSOL | 1 | 1 | 100.0% |
| wSOL → $michi | 1 | 1 | 100.0% |
| WHALES → SOL (native) | 1 | 0 | 0.0% |
| ATR → SOL (native) | 1 | 1 | 100.0% |
| UMBRA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SOLAMA | 1 | 1 | 100.0% |
| UPT → SOL (native) | 1 | 0 | 0.0% |
| URA → SOL (native) | 1 | 1 | 100.0% |
| $michi → SOL (native) | 1 | 1 | 100.0% |
| wSOL → xavier | 1 | 1 | 100.0% |
| SOLAMA → SOL (native) | 1 | 1 | 100.0% |
| lanternSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ZAMA | 1 | 1 | 100.0% |
| xavier → SOL (native) | 1 | 0 | 0.0% |
| wSOL → BORG | 1 | 1 | 100.0% |
| wSOL → USEDCAR | 1 | 1 | 100.0% |
| EUROP → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HARAMBE | 1 | 1 | 100.0% |
| wSOL → $BEER | 1 | 1 | 100.0% |
| wSOL → stSOL | 1 | 1 | 100.0% |
| TBB → SOL (native) | 1 | 1 | 100.0% |
| ZAMA → SOL (native) | 1 | 1 | 100.0% |
| HARAMBE → SOL (native) | 1 | 1 | 100.0% |
| USEDCAR → SOL (native) | 1 | 1 | 100.0% |
| ZEREBRO → SOL (native) | 1 | 1 | 100.0% |
| $BEER → SOL (native) | 1 | 1 | 100.0% |
| wSOL → LST | 1 | 1 | 100.0% |
| BORG → SOL (native) | 1 | 1 | 100.0% |
| Chud → SOL (native) | 1 | 1 | 100.0% |
| wSOL → AVICI | 1 | 1 | 100.0% |
| wSOL → SOLO | 1 | 1 | 100.0% |
| wSOL → SELFIE | 1 | 1 | 100.0% |
| stSOL → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GUAC | 1 | 1 | 100.0% |
| wSOL → CHAT | 1 | 1 | 100.0% |
| SELFIE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → sSOL | 1 | 1 | 100.0% |
| AVICI → SOL (native) | 1 | 1 | 100.0% |
| wSOL → sUSD.infra | 1 | 1 | 100.0% |
| USA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SHIB | 1 | 1 | 100.0% |
| SOLO → SOL (native) | 1 | 1 | 100.0% |
| sUSD.infra → SOL (native) | 1 | 1 | 100.0% |
| GUAC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MNGO | 1 | 1 | 100.0% |
| sSOL → SOL (native) | 1 | 1 | 100.0% |
| SHIB → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RBT | 1 | 1 | 100.0% |
| wSOL → LOCKIN | 1 | 1 | 100.0% |
| CHAT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JSOL | 1 | 1 | 100.0% |
| wSOL → HEEHEE | 1 | 1 | 100.0% |
| wSOL → BILLY | 1 | 1 | 100.0% |
| RBT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MANEKI | 1 | 1 | 100.0% |
| dSOL → SOL (native) | 1 | 1 | 100.0% |
| LOCKIN → SOL (native) | 1 | 1 | 100.0% |
| LST → SOL (native) | 1 | 1 | 100.0% |
| JSOL → SOL (native) | 1 | 1 | 100.0% |
| MNGO → SOL (native) | 1 | 1 | 100.0% |
| BILLY → SOL (native) | 1 | 1 | 100.0% |
| MANEKI → SOL (native) | 1 | 1 | 100.0% |
| wSOL → AURY | 1 | 1 | 100.0% |
| wSOL → WINGS | 1 | 1 | 100.0% |
| wSOL → DUKO | 1 | 1 | 100.0% |
| HEEHEE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → $WAFFLES | 1 | 1 | 100.0% |
| wSOL → Hobbes | 1 | 1 | 100.0% |
| vSOL → SOL (native) | 1 | 1 | 100.0% |
| AURY → SOL (native) | 1 | 1 | 100.0% |
| DUKO → SOL (native) | 1 | 1 | 100.0% |
| $WAFFLES → SOL (native) | 1 | 1 | 100.0% |
| WINGS → SOL (native) | 1 | 1 | 100.0% |
| Hobbes → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SLOTH | 1 | 1 | 100.0% |
| wSOL → HAMMY | 1 | 1 | 100.0% |
| SLOTH → SOL (native) | 1 | 1 | 100.0% |
| HAMMY → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 22 | 16 | 72.7% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 22 | 14 | 63.6% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 22 | 16 | 72.7% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 22 | 15 | 68.2% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 21 | 14 | 66.7% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 21 | 12 | 57.1% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 21 | 14 | 66.7% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 21 | 12 | 57.1% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 21 | 16 | 76.2% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 20 | 13 | 65.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 20 | 10 | 50.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 20 | 15 | 75.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 20 | 14 | 70.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 20 | 12 | 60.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 20 | 16 | 80.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 20 | 11 | 55.0% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 20 | 10 | 50.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 19 | 11 | 57.9% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 19 | 14 | 73.7% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 19 | 14 | 73.7% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 19 | 13 | 68.4% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 19 | 13 | 68.4% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 19 | 12 | 63.2% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 19 | 12 | 63.2% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 19 | 10 | 52.6% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 19 | 15 | 78.9% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 18 | 12 | 66.7% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 18 | 11 | 61.1% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 18 | 9 | 50.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 18 | 10 | 55.6% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 207 | 0 |
| Creation tx rejected: blockhash not found | 2 | 0 |
| Expired without a fill: sell balance or approval too low | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 22:52:55 | DJT → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xe8adc4df…` [🐞](https://debug.barn.cow.fi/order/0xe8adc4dfeecc9114f8a47c7a6caccde217573538f5678089c2c95b65f79cd5ca) |
| 22:53:00 | DBR → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x1937b7f7…` [🐞](https://debug.barn.cow.fi/order/0x1937b7f736f174b286085a6eeb9981a8472f89d3df6e662f2410407e37c49b5d) |
| 22:53:00 | CRCLx → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x672e5b63…` [🐞](https://debug.barn.cow.fi/order/0x672e5b6375e490dd60f4256bd8e26d0de165d9402b984d11abe8967199806ddf) |
| 22:53:01 | INF → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x0ae791b9…` [🐞](https://debug.barn.cow.fi/order/0x0ae791b94d07b4ca22c034161d4a6005c506c3c13bc66f41900b1180587b61ba) |
| 22:53:01 | MSFTx → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x32ef7e49…` [🐞](https://debug.barn.cow.fi/order/0x32ef7e497e5ac20f661a22a33a816ebfe3fad2a4dab21497d874765eff1683d6) |
| 22:53:04 | ORCA → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x7b5a56c8…` [🐞](https://debug.barn.cow.fi/order/0x7b5a56c81b6d1e5e671fc9c750b1f92cba0db712429c0363afabc973517d07b5) |
| 22:53:04 | TripleT → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xa7b9694c…` [🐞](https://debug.barn.cow.fi/order/0xa7b9694ca060ae5594f71e71ef9db4e0d4213653fa5cce9d90384e6a683e7cb2) |
| 22:53:05 | EURC → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xba74e53e…` [🐞](https://debug.barn.cow.fi/order/0xba74e53ea47a52dc2fd49467e0fa31a51ca1f2ccfb35fb566055543f1bcd063d) |
| 22:53:06 | USDS → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xa309c15d…` [🐞](https://debug.barn.cow.fi/order/0xa309c15d20ec82d62e4311b5a30fe4bc56fb79c57acfe3884f6f33aa97ea2cd3) |
| 22:53:06 | GOOGLx → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x3b7758f4…` [🐞](https://debug.barn.cow.fi/order/0x3b7758f4c34cd1b3acff7d8392646b08a394e64ed3ef0a1ea51e284030d50a59) |
| 22:53:06 | wSOL → QQQx | market sell | Winner too late: creation blockhash expired | `0x72451270…` [🐞](https://debug.barn.cow.fi/order/0x724512705bdcfcae299d88aa3405b22c177661325d055bbf17865c5a7572189d) |
| 22:53:06 | GMEx → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xa63b83e5…` [🐞](https://debug.barn.cow.fi/order/0xa63b83e5ab0bdd44001c67c9c18b355a20172ebe13b9ea672b845dfdaf1d738a) |
| 22:53:07 | wSOL → CODEC | market sell | Winner too late: creation blockhash expired | `0xcacfcf3f…` [🐞](https://debug.barn.cow.fi/order/0xcacfcf3f00460a7cb7ccc5ab186f0e054f45af1e87756c6660a451c090922e57) |
| 22:53:08 | GLDx → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xfa161fdc…` [🐞](https://debug.barn.cow.fi/order/0xfa161fdc7e0a748f8fa63eed08dc716e1c7a8c8a9c6ced24bc4ae7fc0881aad5) |
| 22:53:09 | wSOL → HOODx | market sell | Winner too late: creation blockhash expired | `0x7583926e…` [🐞](https://debug.barn.cow.fi/order/0x7583926e0419e75c17345659c9e66dc7af9ec2e5e03c9223c8f5fcd8cbcdae84) |
| 22:53:10 | wSOL → DARK | market sell | Winner too late: creation blockhash expired | `0xb1fb4bbf…` [🐞](https://debug.barn.cow.fi/order/0xb1fb4bbf92569b330c856810db65e35821019be7c6180133dff1e04e506d78c7) |
| 22:53:12 | wSOL → BNB | market sell | Winner too late: creation blockhash expired | `0x93cc49a9…` [🐞](https://debug.barn.cow.fi/order/0x93cc49a9ec52b97434322415c7def57003e1a1c960de7b93ec8ec524834953f2) |
| 22:53:13 | wSOL → TSLAx | market sell | Winner too late: creation blockhash expired | `0x550bce75…` [🐞](https://debug.barn.cow.fi/order/0x550bce756f921fdcada64f3b30d84cd98b31dcd5d27b1ca279bc7b28e38fff71) |
| 22:53:13 | wSOL → AAPLx | market sell | Winner too late: creation blockhash expired | `0xecc5e5cd…` [🐞](https://debug.barn.cow.fi/order/0xecc5e5cd8babae7b21ef89b9bb0e182e57605afa7da1d441ecc286ad0363c784) |
| 22:53:13 | wSOL → COINx | market sell | Winner too late: creation blockhash expired | `0xae1d6a76…` [🐞](https://debug.barn.cow.fi/order/0xae1d6a76235efba08eaf5971b6ea08f041351382e8838024e424c8fca52e27a8) |
| 22:53:13 | wSOL → TTWO | market sell | Winner too late: creation blockhash expired | `0xefca2787…` [🐞](https://debug.barn.cow.fi/order/0xefca278712ffd46f25e2d69705c68385ca5a0ed5c5425b34f33f63bd562e3af0) |
| 22:53:14 | wSOL → RHEA | market sell | Winner too late: creation blockhash expired | `0xc64750a4…` [🐞](https://debug.barn.cow.fi/order/0xc64750a466bfa86029908d8a4b8bcb9db2fd75254aac236454114dcdfd5bfc8f) |
| 22:53:16 | wSOL → WBTC | market sell | Winner too late: creation blockhash expired | `0x537fc8c3…` [🐞](https://debug.barn.cow.fi/order/0x537fc8c3b07049209db008fda4e30b09566d9b44dfe55ff42c591b1be98a9967) |
| 22:53:22 | MCDx → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xc216e2cf…` [🐞](https://debug.barn.cow.fi/order/0xc216e2cfda2233591633d1225e69cc1e95256bfc4d81d838187151290b4458db) |
| 22:53:25 | wSOL → SKR | market sell | Winner too late: creation blockhash expired | `0x273cd4a9…` [🐞](https://debug.barn.cow.fi/order/0x273cd4a901ecc829d258bad713f2d2f2e9c601db73002ba4a391e9d63a88259b) |
| 22:53:28 | wSOL → KMNO | market sell | Winner too late: creation blockhash expired | `0xe542cbf0…` [🐞](https://debug.barn.cow.fi/order/0xe542cbf077b6c0a2964711dd22d1b5f1c71ecafc06160eb471806cc1c66f09c2) |
| 22:53:32 | wSOL → xBTC | market sell | Winner too late: creation blockhash expired | `0x1365b355…` [🐞](https://debug.barn.cow.fi/order/0x1365b355c96611f0a30990f56f2c5f0a07a24fc32cdcdaf00538c1e36c3c2337) |
| 22:53:33 | wSOL → xHYPE | market sell | Winner too late: creation blockhash expired | `0x94599e67…` [🐞](https://debug.barn.cow.fi/order/0x94599e672a652688b650882df5a315e82e8320fbb07812fe51c60b58c279cb93) |
| 22:53:35 | wSOL → GRND | market sell | Winner too late: creation blockhash expired | `0xd5a92092…` [🐞](https://debug.barn.cow.fi/order/0xd5a92092bceb52f2a4c70fe278212fa8d88711b90435c6df9b9fc20c140c38a6) |
| 22:53:38 | wSOL → GIGA | market sell | Expired without a fill: sell balance or approval too low | `0x5cb45c91…` [🐞](https://debug.barn.cow.fi/order/0x5cb45c910bbd92deae0033d686fc777d1aa07d18929c4831516e66656b58e370) |
| 22:53:41 | MPLX → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xf92e8bb0…` [🐞](https://debug.barn.cow.fi/order/0xf92e8bb08c63255536ca64c01f21710e1aa753c245f068996fe27767f8bb8125) |
| 22:53:43 | wSOL → PSOL | market sell | Winner too late: creation blockhash expired | `0x156b0dc6…` [🐞](https://debug.barn.cow.fi/order/0x156b0dc644cf310c3352914a3f458c6995fdf9b01a4a7400ba98b4240188ee9f) |
| 22:53:45 | wSOL → MSTRx | market sell | Winner too late: creation blockhash expired | `0xa7856085…` [🐞](https://debug.barn.cow.fi/order/0xa7856085fb2af6e4d3bde23baaa6e89a68f5dbea3d2ab4d0bf9a0b18ae0e10b2) |
| 22:53:49 | ZBCN → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x337b6dab…` [🐞](https://debug.barn.cow.fi/order/0x337b6dab3209799374f5a059e4f780d775a4d62526a50738fc20e0587092ef28) |
| 22:53:53 | wSOL → HOODx | market sell | Winner too late: creation blockhash expired | `0x739064df…` [🐞](https://debug.barn.cow.fi/order/0x739064df0fd986da48ea77307d275e34c26fc54643f56dc06944c2791b49d73d) |
| 22:53:56 | wSOL → TSLAx | market sell | Winner too late: creation blockhash expired | `0x6e72e979…` [🐞](https://debug.barn.cow.fi/order/0x6e72e979be7d8f7af287318d7516c19465251e461a2107e641fa50232136dee3) |
| 22:53:57 | wSOL → AAPLx | market sell | Winner too late: creation blockhash expired | `0xa994ec06…` [🐞](https://debug.barn.cow.fi/order/0xa994ec069ca617039a7847b5b342e9e0c8d9e117a4f779301c6f67bcabf9bab4) |
| 22:53:57 | wSOL → TTWO | market sell | Winner too late: creation blockhash expired | `0x701e3f09…` [🐞](https://debug.barn.cow.fi/order/0x701e3f0977be399abfda1e75a5580f17424400942113eeefd0c93c0116a4a31f) |
| 22:54:00 | wSOL → WBTC | market sell | Winner too late: creation blockhash expired | `0xfda3c601…` [🐞](https://debug.barn.cow.fi/order/0xfda3c601cec371b18c67b1fc01a64e4106567faa31f952f02fd7eb9e77090abf) |
| 22:54:03 | APE → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x8d24d610…` [🐞](https://debug.barn.cow.fi/order/0x8d24d610eb2bdc5c74750cd4cb64a5fd25492f8c50b05cde8428b264495a5230) |
| 22:54:03 | wSOL → 2Z | market sell | Winner too late: creation blockhash expired | `0xa47a17eb…` [🐞](https://debug.barn.cow.fi/order/0xa47a17eb0aa4cf6abdd184c0ed0c42d3a48d8c7c7899559100ce5746e87c1117) |
| 22:54:04 | CODEC → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x6ca79f3e…` [🐞](https://debug.barn.cow.fi/order/0x6ca79f3ead483151ded1304a5e019022e4ebe4333d4f85537a417b508e800787) |
| 22:54:08 | wSOL → SKR | market sell | Winner too late: creation blockhash expired | `0xf8e817bf…` [🐞](https://debug.barn.cow.fi/order/0xf8e817bf185f84a453747deab0866d5af9b108c3e10593126c35f08124f14bef) |
| 22:54:08 | wSOL → PYTH | market sell | Winner too late: creation blockhash expired | `0x09aa5c9a…` [🐞](https://debug.barn.cow.fi/order/0x09aa5c9a15d9a85f3db2b6635d366ab6b91ffbdfd1d7671668b50da6406ab7f0) |
| 22:54:10 | wSOL → GOLD | market sell | Winner too late: creation blockhash expired | `0x2b1ce0f3…` [🐞](https://debug.barn.cow.fi/order/0x2b1ce0f383b1ffa73c8fa2b49fca107a616ac9749f14af755c10bd2e94f6994d) |
| 22:54:10 | QQQx → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x0693e737…` [🐞](https://debug.barn.cow.fi/order/0x0693e737d4748eeec172d974b22a2f0e344a052fb49fa49080292f6d1d3cb4d4) |
| 22:54:11 | wSOL → META | market sell | Winner too late: creation blockhash expired | `0x36fdf44b…` [🐞](https://debug.barn.cow.fi/order/0x36fdf44b705fe65f9e8c19e5512d9e1340885f986c06398e51a34fa3d4b46dd3) |
| 22:54:12 | RHEA → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xca5e1cfe…` [🐞](https://debug.barn.cow.fi/order/0xca5e1cfeb17741da6504ee62892f5781b98c11dab07fe48f2eb9d5a3201f9687) |
| 22:54:15 | wSOL → xHYPE | market sell | Winner too late: creation blockhash expired | `0x9f452af8…` [🐞](https://debug.barn.cow.fi/order/0x9f452af88e941fcc52aa779c28731064960c6297db170660df17960e46f2155c) |
| 22:54:16 | BNB → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x485464fe…` [🐞](https://debug.barn.cow.fi/order/0x485464fe66f63350941d9bab68a4c134f884aac421621a5a52ab5ec43623c1f3) |
| 22:54:17 | wSOL → HNT | market sell | Winner too late: creation blockhash expired | `0x7828c0bf…` [🐞](https://debug.barn.cow.fi/order/0x7828c0bf06dd402f5f97c4606f914dfa07b9dc29465670bd6f820fa92bc118eb) |
| 22:54:24 | wSOL → PSOL | market sell | Winner too late: creation blockhash expired | `0x6a07ccaf…` [🐞](https://debug.barn.cow.fi/order/0x6a07ccaf22529c5bd74f18a4833b2b3379a1ffd12fdc178d597bf85972e47f27) |
| 22:54:29 | GRND → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xc09a5c9b…` [🐞](https://debug.barn.cow.fi/order/0xc09a5c9b5aefa820e947e52663de8a2dfcf7a236c145ebbf0aa64b7431e4cd7e) |
| 22:54:33 | wSOL → ALON | market sell | Winner too late: creation blockhash expired | `0x38f6b7cf…` [🐞](https://debug.barn.cow.fi/order/0x38f6b7cf99910fda475ee07cc4233a4822548602fd6cd2608093a33c95150203) |
| 22:54:38 | FWOG → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x8247cb20…` [🐞](https://debug.barn.cow.fi/order/0x8247cb2087b5f4695b30d7ac6870da5566b53ebd9c225ee183d1c85c84544f33) |
| 22:54:41 | wSOL → bSOL | market sell | Winner too late: creation blockhash expired | `0xd927868b…` [🐞](https://debug.barn.cow.fi/order/0xd927868b5d755f572430a8feea9957a1e37ddb65ee52c186a78e9e6b3a0af2b9) |
| 22:54:42 | wSOL → DRAM | market sell | Winner too late: creation blockhash expired | `0xbc68d1d8…` [🐞](https://debug.barn.cow.fi/order/0xbc68d1d8a618a37bdf9f087161f49d4b711daa99345557aa20c99c1df498ad75) |
| 22:54:42 | NKE → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x3866eaca…` [🐞](https://debug.barn.cow.fi/order/0x3866eaca1a4f71ab51877098bd8afd239bc4f8262e9e2eb4a44465d9a6879da6) |
| 22:54:46 | wSOL → CHILLHOUSE | market sell | Winner too late: creation blockhash expired | `0x57650329…` [🐞](https://debug.barn.cow.fi/order/0x57650329a89bc799b1ff165da603f7fb2c92043f87fcf80f264e7af1c961cbf9) |
| 22:54:50 | wSOL → AMZNx | market sell | Winner too late: creation blockhash expired | `0xcf8efe6f…` [🐞](https://debug.barn.cow.fi/order/0xcf8efe6f8f4e35858a4ca4acdcd999c7a22c343fb03786f180a1ba485e26fa62) |
| 22:54:50 | ENA → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x6f7b7bc5…` [🐞](https://debug.barn.cow.fi/order/0x6f7b7bc5a3c20e0554b0721596bad71e012e167365094d5347dd864b27cc17f2) |
| 22:54:52 | wSOL → PYTH | market sell | Winner too late: creation blockhash expired | `0x8199904d…` [🐞](https://debug.barn.cow.fi/order/0x8199904de0f86db7ab79692c59c82ddc21b0131f6bc5717bb12a94fe80fcdb88) |
| 22:54:52 | SANC → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xaa74f05f…` [🐞](https://debug.barn.cow.fi/order/0xaa74f05f5d155c0366f14dd4d865221b2070faf771f09d75fc92a803a3b7b407) |
| 22:54:54 | wSOL → GOLD | market sell | Winner too late: creation blockhash expired | `0xc89b7d2a…` [🐞](https://debug.barn.cow.fi/order/0xc89b7d2a7ac5b77b1ef057b3faf6b157fa1a8ca2acdc4009893b80b90d1ba8ba) |
| 22:54:56 | PLTRx → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x08ceaec5…` [🐞](https://debug.barn.cow.fi/order/0x08ceaec517428378cce5376b18c435334b410a754bbd4c43ddabe777c808515c) |
| 22:55:02 | AMC → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x8d39584b…` [🐞](https://debug.barn.cow.fi/order/0x8d39584ba7fc62fb3fa5147ccac715c0779879f8d06c979932852bdf68d18b52) |
| 22:55:03 | wSOL → HNT | market sell | Winner too late: creation blockhash expired | `0xe9b4aaa8…` [🐞](https://debug.barn.cow.fi/order/0xe9b4aaa87b26a6b68e317a06a8348fcf7dd80db7ab2a2bbe782301579b6103fe) |
| 22:55:04 | wSOL → GME | market sell | Winner too late: creation blockhash expired | `0x4ae7e3a6…` [🐞](https://debug.barn.cow.fi/order/0x4ae7e3a647c5124990f38e4606f1dd0e275efa418e2c1f607bf683035d7f0d61) |
| 22:55:06 | DKNG → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x6a749cc7…` [🐞](https://debug.barn.cow.fi/order/0x6a749cc735fd32723ff0eadd21af9e2c762748a4d0b888642ecd3ce1d4d0ac1e) |
| 22:55:10 | HIMS → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x4c6017bc…` [🐞](https://debug.barn.cow.fi/order/0x4c6017bc76bab3482bebbb932fb557b976f5c4188652cc36ace0fad182cde0f7) |
| 22:55:11 | 2Z → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xd1aead6c…` [🐞](https://debug.barn.cow.fi/order/0xd1aead6caf5c9265dc55003d5bacf6c53c58fb2df9dfa87621f3769d0f78fffb) |
| 22:55:12 | NPC → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x64021700…` [🐞](https://debug.barn.cow.fi/order/0x6402170012fa3844de53e184494964d25f9eaeb6145dc600f4a523ad6bd233eb) |
| 22:55:13 | wSOL → pwease | market sell | Winner too late: creation blockhash expired | `0x8f8769c4…` [🐞](https://debug.barn.cow.fi/order/0x8f8769c4948dc2ac8bc11c7e87ab1839b89f67437f0a66a3ee1f6a200a591db3) |
| 22:55:18 | wSOL → TRX | market sell | Winner too late: creation blockhash expired | `0x46a73b45…` [🐞](https://debug.barn.cow.fi/order/0x46a73b4577dc6a8191bc669733a4af3bb6cf32b0e39404f9e26352047273a9ff) |
| 22:55:19 | wSOL → GIGA | market sell | Winner too late: creation blockhash expired | `0xe9262d91…` [🐞](https://debug.barn.cow.fi/order/0xe9262d91af07e17a53c633ee10103cbf03ff0f4c97c3e00d5610a6befb1b1a76) |
| 22:55:21 | RENDER → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x7a0dd8e1…` [🐞](https://debug.barn.cow.fi/order/0x7a0dd8e1ebf84ed670b438f288f9f21d7039fa6f58827d00c202f841eba62c34) |
| 22:55:21 | wSOL → bSOL | market sell | Winner too late: creation blockhash expired | `0x2217ed34…` [🐞](https://debug.barn.cow.fi/order/0x2217ed3454ac494bc74758cb13cfcc053eff7058b65a0f77ec01ba84ae71bc69) |
| 22:55:26 | wSOL → SOLCEX | market sell | Winner too late: creation blockhash expired | `0x38c6e0de…` [🐞](https://debug.barn.cow.fi/order/0x38c6e0dedde1d6f806d0728aaafbc656c9e1e8b985a4dd60d5b8257ea68f75a1) |
| 22:55:27 | wSOL → Bert | market sell | Winner too late: creation blockhash expired | `0x46526905…` [🐞](https://debug.barn.cow.fi/order/0x465269057274a6603c796d19f26ac30162eda3fdc7800f291998dab3f9d36849) |
| 22:55:30 | wSOL → CHILLHOUSE | market sell | Winner too late: creation blockhash expired | `0x2f75f3c0…` [🐞](https://debug.barn.cow.fi/order/0x2f75f3c01171e08c70df50c1ce853f768ed7143c0d89b498d7794b67c47ef1d0) |
| 22:55:30 | wSOL → Anon | market sell | Winner too late: creation blockhash expired | `0x715b5d33…` [🐞](https://debug.barn.cow.fi/order/0x715b5d33f2defceabefbaeed98678a877ff91271bfd511abb9b51ce3376178a9) |
| 22:55:32 | wSOL → arc | market sell | Winner too late: creation blockhash expired | `0xb4fe3c9b…` [🐞](https://debug.barn.cow.fi/order/0xb4fe3c9b7694176f76b2f178469ee8ab50da3d8c3a8000eddbca3af07fffd2fe) |
| 22:55:33 | wSOL → ZEUS | market sell | Winner too late: creation blockhash expired | `0x69ee0eb2…` [🐞](https://debug.barn.cow.fi/order/0x69ee0eb26cfa7fd3b009bd864063e61c7e033c3362a6f3a815ff13e573cde0bd) |
| 22:55:34 | wSOL → AMZNx | market sell | Winner too late: creation blockhash expired | `0xf556797c…` [🐞](https://debug.barn.cow.fi/order/0xf556797cc1694f4017923ff671bf653e0e416f7eb300e2a71adc7b551d384422) |
| 22:55:36 | VINE → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x4a79a676…` [🐞](https://debug.barn.cow.fi/order/0x4a79a676e968841ec0fc6643bca1a5c3bf5e5807689198a600cdb4e2aea3c6ba) |
| 22:55:37 | DOOD → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x8309e5dd…` [🐞](https://debug.barn.cow.fi/order/0x8309e5dd1a7a81b7ad8a59f0671172771be03803b6e0c30389650d429992c5b4) |
| 22:55:39 | DRAM → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x6d6dece5…` [🐞](https://debug.barn.cow.fi/order/0x6d6dece5bd2d268b15bfe62377f003f1b848b3fcf4d0c919f71a27589fa351f3) |
| 22:55:40 | wSOL → IBM | market sell | Winner too late: creation blockhash expired | `0xc33c84ea…` [🐞](https://debug.barn.cow.fi/order/0xc33c84ea3e67b428c2970ad6b52414d3222802a2a0cb691cd61c270c1999c458) |
| 22:55:40 | wSOL → DREGG | market sell | Winner too late: creation blockhash expired | `0x876e02a3…` [🐞](https://debug.barn.cow.fi/order/0x876e02a3e6793981d169fddcd2da97ff2df2bf6c91e93ccd2e5064faa55fdf3e) |
| 22:55:41 | RDDT → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x7488f5bf…` [🐞](https://debug.barn.cow.fi/order/0x7488f5bf3912ea34394950a57dab78c48fd6bdcf63b8a2fe6133dcd9f6ae0a64) |
| 22:55:41 | wSOL → KOx | market sell | Winner too late: creation blockhash expired | `0x09cbf872…` [🐞](https://debug.barn.cow.fi/order/0x09cbf8722fbb6cbf18ce89dba04f3c0c3c01638467a31bd49606e7137c9a6a82) |
| 22:55:42 | SNAP → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xb18ed05b…` [🐞](https://debug.barn.cow.fi/order/0xb18ed05b96f81c1f4c1d08b91b10c088c2c1f3d0b55a022de6616da29d675c82) |
| 22:55:44 | AAVE → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xcb9662d9…` [🐞](https://debug.barn.cow.fi/order/0xcb9662d9bd6fd60fb73af5e8fec37310f4dc720fa30b7d2949ec097d44386b40) |
| 22:55:46 | BABA → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x1bf0cad0…` [🐞](https://debug.barn.cow.fi/order/0x1bf0cad00af60a96b4810d2e755e0c47bb595f360e718eee771c52ba54daf1e8) |
| 22:55:51 | USDY → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xf47e4169…` [🐞](https://debug.barn.cow.fi/order/0xf47e4169781bfdeedeacc0a9d789ec6a098afddf20bd84202a1acdde27be7224) |
| 22:55:55 | wSOL → BULLSHIT | market sell | Winner too late: creation blockhash expired | `0xb7236ebe…` [🐞](https://debug.barn.cow.fi/order/0xb7236ebed35d02e74fc26d0a2dd490622447e1b2d6d1dc8e73a90770fd07a54d) |
| 22:55:58 | wSOL → pwease | market sell | Winner too late: creation blockhash expired | `0x019ad8ee…` [🐞](https://debug.barn.cow.fi/order/0x019ad8ee16782b79afd75fe0dbf3f6f042c67d48d6d3df7b8bc7d1a7bf74f9b4) |
| 22:56:01 | POPCAT → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x74acfc88…` [🐞](https://debug.barn.cow.fi/order/0x74acfc884e04bff8e445b44ba428449c1cf4f45ce41903b62a723793756f1e51) |
| 22:56:07 | wSOL → hSOL | market sell | Winner too late: creation blockhash expired | `0x43c84c0a…` [🐞](https://debug.barn.cow.fi/order/0x43c84c0a5b3b85aedbb5a3321cad74eba051361ee5c6e7a84ed67c2c653664c2) |
| 22:56:10 | INJ → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x52d061c0…` [🐞](https://debug.barn.cow.fi/order/0x52d061c06def48469854a8da00bf4f0895a3a852a32853b7fc37f6fbf33deca3) |
| 22:56:14 | wSOL → BIRB | market sell | Winner too late: creation blockhash expired | `0xfcb49118…` [🐞](https://debug.barn.cow.fi/order/0xfcb49118c304bcd63ddb148730ab48a2336ccaf43c09ec75bad5ca7d8e046136) |
| 22:56:15 | wSOL → Anon | market sell | Winner too late: creation blockhash expired | `0x822948e7…` [🐞](https://debug.barn.cow.fi/order/0x822948e7538939bd6a0c823d6966b69aa31ae9336a10f372c5b853a3a0ddc310) |
| 22:56:18 | wSOL → ZEUS | market sell | Winner too late: creation blockhash expired | `0xc411d047…` [🐞](https://debug.barn.cow.fi/order/0xc411d04713982def9e9bdb57da89e8443a85ced36fdc3f12393ac7765f866bf0) |
| 22:56:19 | HUMA → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xd1500f5f…` [🐞](https://debug.barn.cow.fi/order/0xd1500f5f153bc0ed86cf4f8813a1de65212e62a83b8297190c0477d563a17bcb) |
| 22:56:20 | wSOL → SLX | market sell | Winner too late: creation blockhash expired | `0x3d6d3493…` [🐞](https://debug.barn.cow.fi/order/0x3d6d349343d1655bb175337f7c9d730eb62eac8ffe74d45aa12b0898bd8a78e0) |
| 22:56:21 | wSOL → MON | market sell | Winner too late: creation blockhash expired | `0x2e8349f6…` [🐞](https://debug.barn.cow.fi/order/0x2e8349f6a2c34d812a8782ceb6eb8f0bb1e51d7eee9c6a37c8c40c4e52a82e07) |
| 22:56:23 | wSOL → bonkSOL | market sell | Winner too late: creation blockhash expired | `0x564be218…` [🐞](https://debug.barn.cow.fi/order/0x564be21839a97fa91f7dbf518a0b00774d18e85ea2b22e222c2217f2401500ca) |
| 22:56:24 | wSOL → DREGG | market sell | Winner too late: creation blockhash expired | `0x09ec5ca5…` [🐞](https://debug.barn.cow.fi/order/0x09ec5ca5bc8b91caf2d20eb2cf4645173b19fa684c8e06eb633187f09c5dadf8) |
| 22:56:26 | CHILLGUY → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xba2a80ad…` [🐞](https://debug.barn.cow.fi/order/0xba2a80ad35b9783982603e3bdc16ca7555f90381ed1dbbae0c7e9bfec7491f0d) |
| 22:56:27 | wSOL → KOx | market sell | Winner too late: creation blockhash expired | `0xaa604030…` [🐞](https://debug.barn.cow.fi/order/0xaa604030d9703d8430a46e99e08503c1ff9f0963907ce84fd8a8c8bc19399ebf) |
| 22:56:30 | wSOL → DADDY | market sell | Winner too late: creation blockhash expired | `0x493184a4…` [🐞](https://debug.barn.cow.fi/order/0x493184a4907cdc5d881e750317fef9928d1992a5ceb80ece836e221445efbfe3) |
| 22:56:32 | VIRTUAL → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xe59583d4…` [🐞](https://debug.barn.cow.fi/order/0xe59583d44eb89dab9e65644aa0cb26987eb858f45658a5a8ca4667f159b9b3a1) |
| 22:56:33 | AMD → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xce66e48f…` [🐞](https://debug.barn.cow.fi/order/0xce66e48fa555c57f667c5a75ff140c605048f9912682b665dcb6c95c34a33417) |
| 22:56:38 | BIO → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xf77c7255…` [🐞](https://debug.barn.cow.fi/order/0xf77c725572d40d397b08ddb9356d0398e8ff1d11d14f96e0d2bbd2d8cc034549) |
| 22:56:38 | Jotchua → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xa8b490b8…` [🐞](https://debug.barn.cow.fi/order/0xa8b490b81164a778c30dad6c72347e2d0397894c5f09ff49dc388f2e9a73439e) |
| 22:56:40 | wSOL → BULLSHIT | market sell | Winner too late: creation blockhash expired | `0x292d12fa…` [🐞](https://debug.barn.cow.fi/order/0x292d12fa7a344680ce4f68526997894628c4a07ff6c201a76fd010005fc3ed49) |
| 22:56:46 | wSOL → Old Slerf | market sell | Winner too late: creation blockhash expired | `0xa49ae162…` [🐞](https://debug.barn.cow.fi/order/0xa49ae162ed1d29c61ae1f7f3825d3a5251f60af8af33c23f3198982f030fcb5c) |
| 22:56:46 | LINK → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x439282c8…` [🐞](https://debug.barn.cow.fi/order/0x439282c8352dc5b57328090f57e2a49825c3f644e61f50f6143c496406f65706) |
| 22:56:48 | wSOL → dreams | market sell | Winner too late: creation blockhash expired | `0x0225dcc6…` [🐞](https://debug.barn.cow.fi/order/0x0225dcc696bde74c654a116c86fb817b0593580a780b3a9a0cba1947b926c52f) |
| 22:56:52 | wSOL → hSOL | market sell | Winner too late: creation blockhash expired | `0xe6063dd0…` [🐞](https://debug.barn.cow.fi/order/0xe6063dd0d772164199cddceeb3e4ee6794e888bf32ddfaa30a461cc4ca06abc3) |
| 22:56:55 | CYPH → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x9702d073…` [🐞](https://debug.barn.cow.fi/order/0x9702d07355d548ae48646471bd69dfd0b73b507a4aaa8f686a4e1c02d8ff51b9) |
| 22:56:56 | wSOL → ME | market sell | Winner too late: creation blockhash expired | `0x14b01ff3…` [🐞](https://debug.barn.cow.fi/order/0x14b01ff335b01ee428fcaaae6867de51010dbadf2d42b947ea2cbe1ba574a03f) |
| 22:56:58 | wSOL → BIRB | market sell | Winner too late: creation blockhash expired | `0xd6a646ca…` [🐞](https://debug.barn.cow.fi/order/0xd6a646ca780f29ec7366ee5ba637abc76dcf8690dc11075821d9029f12fde4f0) |
| 22:57:00 | wSOL → SLX | market sell | Winner too late: creation blockhash expired | `0xc7c8ca8d…` [🐞](https://debug.barn.cow.fi/order/0xc7c8ca8d6835b7f1ba311288ca86c53173fe9d1bf79424ea8dffe8c3bb6bb489) |
| 22:57:03 | wSOL → WEN | market sell | Winner too late: creation blockhash expired | `0x269b92fa…` [🐞](https://debug.barn.cow.fi/order/0x269b92fa61fa0590b063636bc853caa540c674b16374f5a08374579a3c8ce169) |
| 22:57:04 | three → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xccd07990…` [🐞](https://debug.barn.cow.fi/order/0xccd07990e451b439abfa445b285b7bbd946c99e6cce8e9e0c808d552ac6939ef) |
| 22:57:06 | wSOL → W | market sell | Winner too late: creation blockhash expired | `0xfa88b6ec…` [🐞](https://debug.barn.cow.fi/order/0xfa88b6ec403976ef28565fa55c0627b4df1c3062ba99c44b4a1ff63abd609798) |
| 22:57:07 | wSOL → MON | market sell | Winner too late: creation blockhash expired | `0xb14fcf76…` [🐞](https://debug.barn.cow.fi/order/0xb14fcf765af115603110148df5988555e6f7756f5a8d7c78751ba98f851fb120) |
| 22:57:08 | USO → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x5c67367e…` [🐞](https://debug.barn.cow.fi/order/0x5c67367e4bbaf01e3c87263c0d650a0ea663bb8c1db974dafbe3b07ac3ebc2b8) |
| 22:57:09 | wSOL → NST | market sell | Winner too late: creation blockhash expired | `0x8120b99e…` [🐞](https://debug.barn.cow.fi/order/0x8120b99e363584fdf5e3015b6311f69f01471e1a46cb3b1d64fc33dcccd961be) |
| 22:57:11 | wSOL → Clash | market sell | Winner too late: creation blockhash expired | `0xb14675ab…` [🐞](https://debug.barn.cow.fi/order/0xb14675ab643519498c5d874cb3fee29e4c0c124465f0817773f017a41ac855a8) |
| 22:57:11 | Clude → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xa810c649…` [🐞](https://debug.barn.cow.fi/order/0xa810c6497ae65f736a8744d8e510308f311e41cb36459f959664d8762b179c3b) |
| 22:57:12 | wSOL → PBTC | market sell | Winner too late: creation blockhash expired | `0x6bab92c2…` [🐞](https://debug.barn.cow.fi/order/0x6bab92c2eb9273560aab4d2e5bec4b7cc2496388e8551491bde0d2bcb0ba32ea) |
| 22:57:13 | wSOL → DADDY | market sell | Winner too late: creation blockhash expired | `0x3c25fc47…` [🐞](https://debug.barn.cow.fi/order/0x3c25fc47644dad1f17df3d90481f7fe76a0d499127ddc4d779f3edd96e2ee29d) |
| 22:57:16 | 67 → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xdd2951be…` [🐞](https://debug.barn.cow.fi/order/0xdd2951bea77e2766382ef8a3b5cad82ae6a6bc898eff35e6b0474e2d8b5e131a) |
| 22:57:17 | CRED → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xd9c99df9…` [🐞](https://debug.barn.cow.fi/order/0xd9c99df99e3d9b914b00299f3fa5ea81d68da16b4b3f7354597ac30f3f0cf64e) |
| 22:57:18 | GRIFFAIN → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x61191e15…` [🐞](https://debug.barn.cow.fi/order/0x61191e15323b3b8075be01c1d4b6343cb55ee45728c11837159e203d663ed4da) |
| 22:57:20 | wSOL → MOBY | market sell | Winner too late: creation blockhash expired | `0x1e43f88b…` [🐞](https://debug.barn.cow.fi/order/0x1e43f88b4148f99061455ed124f833d60df12e2551ee1e645d0f52f3f555393b) |
| 22:57:23 | wSOL → Tokabu | market sell | Winner too late: creation blockhash expired | `0xe92eaf75…` [🐞](https://debug.barn.cow.fi/order/0xe92eaf7593c828f9795f3a46f3f9bca5f06e898b98edd49e4ce0907c945525ac) |
| 22:57:27 | WEN → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x8663d5df…` [🐞](https://debug.barn.cow.fi/order/0x8663d5df89dc7e8257eba1807bdc81dbaba8e61b053a3fee804b3b4b5eca8930) |
| 22:57:28 | wSOL → dreams | market sell | Winner too late: creation blockhash expired | `0x0b4f5526…` [🐞](https://debug.barn.cow.fi/order/0x0b4f5526f969dd2c568b28dfe834dd107e375a878b5fb3f8c226335327b016e2) |
| 22:57:30 | wSOL → Cake | market sell | Winner too late: creation blockhash expired | `0xa131a504…` [🐞](https://debug.barn.cow.fi/order/0xa131a504a54c170aa592105ca9be66f6dd2eec4a67f51e5f4808e8e4e87f691f) |
| 22:57:34 | wSOL → MRVL | market sell | Winner too late: creation blockhash expired | `0xb038f270…` [🐞](https://debug.barn.cow.fi/order/0xb038f270e1d2ab056b979ade34ad14fc4b1e31d8a0ce5be2034904dba18b96d7) |
| 22:57:40 | wSOL → ME | market sell | Winner too late: creation blockhash expired | `0x2a332938…` [🐞](https://debug.barn.cow.fi/order/0x2a332938a09f364843630d6818796a7f5d6d57b9e2d87f68cd95526bc2548acb) |
| 22:57:40 | crypto → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x12c7d81f…` [🐞](https://debug.barn.cow.fi/order/0x12c7d81f28f4d74ae899d2bbbb372da33003c7ccd6df3d3fa3366f43591e4d83) |
| 22:57:40 | wSOL → CARS | market sell | Winner too late: creation blockhash expired | `0x9bfd900e…` [🐞](https://debug.barn.cow.fi/order/0x9bfd900e6362e480edb72b38fd0933436d7113bfa10618673234b2adc6d6e04e) |
| 22:57:41 | Old Slerf → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xd35cbb4a…` [🐞](https://debug.barn.cow.fi/order/0xd35cbb4aa7f4ae45b81586ef08f3dd99fab136427a069e00254e795bce8413af) |
| 22:57:42 | wSOL → ZERO | market sell | Winner too late: creation blockhash expired | `0x98246bf6…` [🐞](https://debug.barn.cow.fi/order/0x98246bf62e43644f58097011012acbee30ce9e297a317ba0a1b3ef15a985abce) |
| 22:57:44 | wSOL → PONKE | market sell | Winner too late: creation blockhash expired | `0x0b591190…` [🐞](https://debug.barn.cow.fi/order/0x0b59119019890f653985d4772a8861fe4dd12b4fd8cec81890109aa241a5e20b) |
| 22:57:45 | wSOL → NATIX | market sell | Winner too late: creation blockhash expired | `0x2d1d2c26…` [🐞](https://debug.barn.cow.fi/order/0x2d1d2c2621fbad7c4620a8f1f4dbff798fd3ff17e7079125422483dea8267dbd) |
| 22:57:47 | wSOL → WEN | market sell | Winner too late: creation blockhash expired | `0xb8fbdb8c…` [🐞](https://debug.barn.cow.fi/order/0xb8fbdb8ce9af1c04a9847321366b25953bb16cd2bd54275fb64084143aada432) |
| 22:57:50 | wSOL → W | market sell | Winner too late: creation blockhash expired | `0x7be31301…` [🐞](https://debug.barn.cow.fi/order/0x7be3130175e1ec2bd0c987311bd5e629c3e445d361ab61ffcbe574b5e15e9d9f) |
| 22:57:54 | wSOL → PFE | market sell | Winner too late: creation blockhash expired | `0x6c23c3d7…` [🐞](https://debug.barn.cow.fi/order/0x6c23c3d75e33d8bf43bbfe767ae3ff12478133d08be591b27a47ecec29067dd3) |
| 22:57:54 | wSOL → NST | market sell | Winner too late: creation blockhash expired | `0xc4743875…` [🐞](https://debug.barn.cow.fi/order/0xc4743875cd2197cff1615a1a2e106ee833e6f2c9e9289c31400ce961731d4bca) |
| 22:57:54 | wSOL → Clash | market sell | Winner too late: creation blockhash expired | `0x1ddf0715…` [🐞](https://debug.barn.cow.fi/order/0x1ddf071508dc9ee129e11fef139032a78a59dc6da6b733c5d5286947fd314a6b) |
| 22:57:56 | swarms → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xbd693b9b…` [🐞](https://debug.barn.cow.fi/order/0xbd693b9bcbbf415f80d6c61e56809d45a62a0d18a1d3771d79e68867520dc608) |
| 22:57:57 | wSOL → ACT | market sell | Winner too late: creation blockhash expired | `0xa0c2dcbf…` [🐞](https://debug.barn.cow.fi/order/0xa0c2dcbf066432b87c5d0198b5a11ad59ecbd87d310011d75280d316ea8de613) |
| 22:57:57 | wSOL → PBTC | market sell | Winner too late: creation blockhash expired | `0x99b58ba1…` [🐞](https://debug.barn.cow.fi/order/0x99b58ba1da834ada34bfc6bbfc4e644c4836d84e32bb48c3aa2e75950d08b6bc) |
| 22:57:57 | wSOL → BITCOIN | market sell | Winner too late: creation blockhash expired | `0x71e6954d…` [🐞](https://debug.barn.cow.fi/order/0x71e6954d1c63fa024af0fb9b982130bc59af9285b083c562c89f623598b5781a) |
| 22:58:01 | wSOL → DITH | market sell | Winner too late: creation blockhash expired | `0x5d47b542…` [🐞](https://debug.barn.cow.fi/order/0x5d47b54220a07dab839fbdd798a0b62e2779192502ee663d4b474d9ce59db629) |
| 22:58:11 | $HACHI → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xeac8d6a7…` [🐞](https://debug.barn.cow.fi/order/0xeac8d6a76a665592691b35943ad6e27a645b9d48fe0de7f278986c2f135018be) |
| 22:58:14 | wSOL → Cake | market sell | Winner too late: creation blockhash expired | `0x14c2c556…` [🐞](https://debug.barn.cow.fi/order/0x14c2c556628c5530eed6ceefed87769fb58df00d53db56a871116ffb58b6b3e9) |
| 22:58:19 | wSOL → MRVL | market sell | Winner too late: creation blockhash expired | `0x9319234c…` [🐞](https://debug.barn.cow.fi/order/0x9319234c5a13bbf0c9ca1d5f35b9c89e9a12464cb20aed5d59c1890217cae6c0) |
| 22:58:21 | wSOL → TAI | market sell | Winner too late: creation blockhash expired | `0xe260cace…` [🐞](https://debug.barn.cow.fi/order/0xe260cace96994a1576be22bfc2aecd2d3f5fce75136f4d11cff06063d067ef7f) |
| 22:58:23 | wSOL → STAN | market sell | Winner too late: creation blockhash expired | `0x2200072f…` [🐞](https://debug.barn.cow.fi/order/0x2200072fa182bc7e3b285bbdc32e42bbda1cad15ce9b5fb3c043ad2a4a50be83) |
| 22:58:24 | IO → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x9d74301a…` [🐞](https://debug.barn.cow.fi/order/0x9d74301a9a6814f8621578e0698107eff1e8071d8052d0acef7087f368ad35ea) |
| 22:58:24 | RNT → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xda311754…` [🐞](https://debug.barn.cow.fi/order/0xda3117545563dd0a7a581fc3a8fb37d1abdd2969be23b3ce7ca245ce743b9a62) |
| 22:58:25 | wSOL → ARX | market sell | Winner too late: creation blockhash expired | `0xf34952d5…` [🐞](https://debug.barn.cow.fi/order/0xf34952d5deaf116600765a212f4690f94f63b0678e1e75312e58c5dbd37e1072) |
| 22:58:27 | STREAM → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x29893784…` [🐞](https://debug.barn.cow.fi/order/0x29893784ee6bc90a57cab06688b2b099369ccd8c57124737b542cb1ca4242a0e) |
| 22:58:27 | wSOL → ZERO | market sell | Winner too late: creation blockhash expired | `0xc611193e…` [🐞](https://debug.barn.cow.fi/order/0xc611193e3fbc749ed3dc88172ba017edcc696cac14775df7bdca9ec54c3e853b) |
| 22:58:28 | wSOL → PUPS | market sell | Winner too late: creation blockhash expired | `0xd760ed44…` [🐞](https://debug.barn.cow.fi/order/0xd760ed44ecab30a06abcc4bf995615cb9b1762f501559407945184d67a835312) |
| 22:58:30 | MOBY → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x12a822a5…` [🐞](https://debug.barn.cow.fi/order/0x12a822a5d83556adabf33a8eeb0ee15a13acd7200200b7a8da7d532e147e55d4) |
| 22:58:33 | wSOL → ISC | market sell | Winner too late: creation blockhash expired | `0x039d5db4…` [🐞](https://debug.barn.cow.fi/order/0x039d5db472af44ecbd96c254e9ede96fcf4b1067b3afef65e046213710212bf0) |
| 22:58:33 | wSOL → UMBRA | market sell | Winner too late: creation blockhash expired | `0x19e83bde…` [🐞](https://debug.barn.cow.fi/order/0x19e83bdefebd44f3329609747228849283c87ab967748fe5d8abf06b5e6e6508) |
| 22:58:37 | wSOL → PFE | market sell | Winner too late: creation blockhash expired | `0x990ad3b6…` [🐞](https://debug.barn.cow.fi/order/0x990ad3b6ff88c5531a13670fd422610655f79c02cd41e8e1ac40ae83443a38ba) |
| 22:58:40 | wSOL → ACT | market sell | Winner too late: creation blockhash expired | `0x178d9078…` [🐞](https://debug.barn.cow.fi/order/0x178d9078a88d54c3c0110893b3056be09496d99b4b832f339b9cada9c3f1c48b) |
| 22:58:43 | wSOL → BITCOIN | market sell | Winner too late: creation blockhash expired | `0x2ca0c4c2…` [🐞](https://debug.barn.cow.fi/order/0x2ca0c4c25b021639e959ec39e109031c2f0c0d8586f04a626dbd5f9d88189685) |
| 22:58:45 | MELANIA → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x29874753…` [🐞](https://debug.barn.cow.fi/order/0x29874753d30a7bb8e74f73399a5fdb093175a73bbf89441ccdc14f76528cfd69) |
| 22:58:48 | wSOL → pippin | market sell | Winner too late: creation blockhash expired | `0x63c631e3…` [🐞](https://debug.barn.cow.fi/order/0x63c631e31e0b55180abb4e99aada708336efff16a92cf90747f96a1894606330) |
| 22:58:50 | DOLAN → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x5671f3e4…` [🐞](https://debug.barn.cow.fi/order/0x5671f3e4c7b848829f503c02cfec6212d85c5784f5a19c539e8a78afdc47a8c1) |
| 22:58:50 | wSOL → UPT | market sell | Winner too late: creation blockhash expired | `0x0f9f6194…` [🐞](https://debug.barn.cow.fi/order/0x0f9f6194646bf0d7dd3e221c1bd85181e6569ccc5fc3b3c23eb213f313ebcaa6) |
| 22:58:51 | SOLC → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xadac5016…` [🐞](https://debug.barn.cow.fi/order/0xadac5016ec57f2e040210f6e492b0e343b0ff36a43e9a8faf36456edd9d2449c) |
| 22:58:53 | wSOL → READY | market sell | Winner too late: creation blockhash expired | `0x031d44a2…` [🐞](https://debug.barn.cow.fi/order/0x031d44a27a88ed065069e2216ee85af5112576ec49cb8248fd3bcc893c15b2fa) |
| 22:58:55 | Shoggoth → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x184b8937…` [🐞](https://debug.barn.cow.fi/order/0x184b89372425facf09b6a7c675359e1223226c25aa9ca624877c514b217c2164) |
| 22:59:02 | wSOL → TAI | market sell | Winner too late: creation blockhash expired | `0xc914aa9b…` [🐞](https://debug.barn.cow.fi/order/0xc914aa9b4a9a04c592492a09a02e9e42d5ef559ad100dd6109e13cf7929bb2bb) |
| 22:59:04 | wSOL → ZEREBRO | market sell | Winner too late: creation blockhash expired | `0xef38f4dd…` [🐞](https://debug.barn.cow.fi/order/0xef38f4dd7500b81a1205f67fd306d6224edd0353218e698c57b8f47fcf676d49) |
| 22:59:06 | wSOL → ARX | market sell | Winner too late: creation blockhash expired | `0x047d199f…` [🐞](https://debug.barn.cow.fi/order/0x047d199f8babed9beb7d2c0568d1891aab8819c7df3365c31e47454515d1e01b) |
| 22:59:08 | wSOL → hyloSOL | market sell | Winner too late: creation blockhash expired | `0x9b941281…` [🐞](https://debug.barn.cow.fi/order/0x9b941281213ac7d3726ff182c6f71d6d6464c4b059bf1dc06439552ddf260eaa) |
| 22:59:09 | wSOL → PUPS | market sell | Winner too late: creation blockhash expired | `0x2265f0f8…` [🐞](https://debug.barn.cow.fi/order/0x2265f0f8de698ba10654079347e79315ad0affec69738b3f3037e9eca7131785) |
| 22:59:13 | VCHF → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xe0c60f94…` [🐞](https://debug.barn.cow.fi/order/0xe0c60f9467dcb883ceed84bf6253cd35a24f55f9bca0ad3f4a4f2a7ff14df9ec) |
| 22:59:17 | wSOL → RETARDIO | market sell | Winner too late: creation blockhash expired | `0xb7c4fabc…` [🐞](https://debug.barn.cow.fi/order/0xb7c4fabccfdd3b126264a9b06002f667fb9f0e680f7b39eaa7db28b9fa656afb) |
| 22:59:17 | wSOL → ISC | market sell | Winner too late: creation blockhash expired | `0x1446f051…` [🐞](https://debug.barn.cow.fi/order/0x1446f051bd8bce2a81efac25d15e4250ebac6f640c1ad36707ec1f7c4d0b1f90) |
| 22:59:18 | unc → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xb8b0a487…` [🐞](https://debug.barn.cow.fi/order/0xb8b0a4878b32e979d8331540496f2f019f79d1a3eb226156dc1d03b0fc47c6db) |
| 22:59:21 | wSOL → LLY | market sell | Winner too late: creation blockhash expired | `0x31935dcf…` [🐞](https://debug.barn.cow.fi/order/0x31935dcf016f2c69e2d8345548507b4b855bd21254707e108331793513421408) |
| 22:59:22 | wSOL → TBB | market sell | Winner too late: creation blockhash expired | `0xf78bf1b8…` [🐞](https://debug.barn.cow.fi/order/0xf78bf1b82651eff6a7c51cccec850d8807ca18511b3d22906aed67afc3ee37fa) |
| 22:59:24 | SIGMA → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x0f7e8fdf…` [🐞](https://debug.barn.cow.fi/order/0x0f7e8fdf23ce7b321517454806df78b6942cfa3514974c43064a3336a35ddaf4) |
| 22:59:29 | RKLB → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x8100cdbe…` [🐞](https://debug.barn.cow.fi/order/0x8100cdbe30ebc875dee522ff9227cfc2e75041b11e5b909d014c534ed445aac6) |
| 22:59:30 | SC → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xb921fd2b…` [🐞](https://debug.barn.cow.fi/order/0xb921fd2b52324014089e27df0c70c51eede47d1ebc02892684926e5fa20ca963) |
| 22:59:33 | wSOL → Chud | market sell | Winner too late: creation blockhash expired | `0x52ac955d…` [🐞](https://debug.barn.cow.fi/order/0x52ac955df7d22275eebda3eb7d8b14608098b8f2b2d2f3e3b7cfc55190513d3d) |
| 22:59:36 | wSOL → READY | market sell | Winner too late: creation blockhash expired | `0x9ee15f47…` [🐞](https://debug.barn.cow.fi/order/0x9ee15f47ec74d852df49eaa1c502898a6e5adc802c007b82a9c926aeee86e927) |
| 22:59:41 | tremp → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x86670e63…` [🐞](https://debug.barn.cow.fi/order/0x86670e633d17b19f5a33d40f4621cd9019fa50e9e2138bbafc4f5107b9ed5f1f) |
| 22:59:42 | pippin → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x2dcdc57a…` [🐞](https://debug.barn.cow.fi/order/0x2dcdc57ae8a3e36a8880123c1dbcfe84d3f3cc1fa97f7d13fb3d2840cd9a2f18) |
| 22:59:44 | wSOL → USA | market sell | Creation tx rejected: blockhash not found | `0x37f46f14…` [🐞](https://debug.barn.cow.fi/order/0x37f46f1472d4e11ed1c5e72cf435e302abaf2cb64df7d0ba4ca6450e72accaa5) |
| 22:59:48 | WHALES → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x430072ce…` [🐞](https://debug.barn.cow.fi/order/0x430072cec9c02241c97747ce5401900b61934d50663a280ad4f54e6e88bb9a40) |
| 22:59:53 | wSOL → dSOL | market sell | Winner too late: creation blockhash expired | `0x01708602…` [🐞](https://debug.barn.cow.fi/order/0x017086029b85dace87a9f208e3f0501359f81858062aaf4f4894fdf59bc2fca7) |
| 22:59:53 | wSOL → hyloSOL | market sell | Winner too late: creation blockhash expired | `0xee60470c…` [🐞](https://debug.barn.cow.fi/order/0xee60470c2d82d3b28ca2da8358ffabc948a7ba803ccca213510f4b8d4f60b932) |
| 22:59:54 | UPT → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x4e90d9aa…` [🐞](https://debug.barn.cow.fi/order/0x4e90d9aa069fc1603123fbc807a1fc94b655fdc94fa44be34f2fe9307cf51f93) |
| 23:00:01 | wSOL → RETARDIO | market sell | Winner too late: creation blockhash expired | `0xfd7f70d4…` [🐞](https://debug.barn.cow.fi/order/0xfd7f70d490fc7d36fa8a3c8371223113d3f3f0782369a5cfd7e50f22d2c5bbb3) |
| 23:00:04 | xavier → SOL (native) | market sell | Creation tx rejected: blockhash not found | `0xb4249723…` [🐞](https://debug.barn.cow.fi/order/0xb4249723097b6d5ce2d508cc366b3544b723cc22f4d006ea7d8a98bf3c218f41) |
| 23:00:18 | wSOL → vSOL | market sell | Winner too late: creation blockhash expired | `0xc581b854…` [🐞](https://debug.barn.cow.fi/order/0xc581b8544212ed05be082a7487a2f2b8efde2e6c67b5670fe69a26d09f451585) |
