# Solana QoS report: 2026-10-16-19-16-token-universe__test_03_jupiter

Prod, orders created between `2026-10-16T19:16:39.030Z` and `2026-10-16T20:22:20.314Z`. Data fetched 2026-10-16T20:29:18+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 241 |
| Orders executed | **170** (70.5%) |
| Sponsored orders never created on-chain | 71 (29.5%) |
| Traders | 30 |
| Settlement txs | 170 |

## Scenario

160 of 247 scenario rows completed. 0 retries, 14 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 19:16:39 | 1 | 1 | sell 0.005 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 15s | 1 |  |
| 19:16:54 | 2 | 1 | sell 95.2 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump → SOL | filled | 10s | 1 |  |
| 19:16:39 | 3 | 2 | sell 0.005 SOL → Ai66LHZG9MCzg1WKdawwqduVAXpNDUuV8M3uyq5ppump | filled | 15s | 1 |  |
| 19:16:53 | 4 | 2 | sell 8.43 Ai66LHZG9MCzg1WKdawwqduVAXpNDUuV8M3uyq5ppump → SOL | filled | 21s | 1 |  |
| 19:16:39 | 5 | 3 | sell 0.005 SOL → 3ZLekZYq2qkZiSpnSvabjit34tUkjSwD1JFuW9as9wBG | filled | 15s | 1 |  |
| 19:16:54 | 6 | 3 | sell 0.103 3ZLekZYq2qkZiSpnSvabjit34tUkjSwD1JFuW9as9wBG → SOL | filled | 10s | 1 |  |
| 19:16:39 | 7 | 4 | sell 0.005 SOL → Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump | filled | 15s | 1 |  |
| 19:16:54 | 8 | 4 | sell 35.3 Hg5Ja55T5wESq4vyFoiVCMeHXtGyVA69X2UHq8hgpump → SOL | filled | 5s | 1 |  |
| 19:16:39 | 9 | 5 | sell 0.005 SOL → CbcyNo7m1amFWqEQm2m4PLv1UNvpcL3C1Ujm6AkzpKoU | filled | 15s | 1 |  |
| 19:16:54 | 10 | 5 | sell 205 CbcyNo7m1amFWqEQm2m4PLv1UNvpcL3C1Ujm6AkzpKoU → SOL | filled | 5s | 1 |  |
| 19:16:39 | 11 | 6 | sell 0.005 SOL → WXMRyRZhsa19ety5erZhHg4N3xj3EVN92u94422teJp | filled | 15s | 1 |  |
| 19:16:54 | 12 | 6 | sell 0.000912 WXMRyRZhsa19ety5erZhHg4N3xj3EVN92u94422teJp → SOL | filled | 5s | 1 |  |
| 19:16:39 | 13 | 7 | sell 0.005 SOL → 7VertkgF9KLhxxJXHX6uaWuoYZTP9LdGj2bWmVXVpump | filled | 15s | 1 |  |
| 19:16:54 | 14 | 7 | sell 91.6 7VertkgF9KLhxxJXHX6uaWuoYZTP9LdGj2bWmVXVpump → SOL | filled | 5s | 1 |  |
| 19:16:39 | 15 | 8 | sell 0.005 SOL → sUSDai6Y3GxysDEtA9BVcEFTaog6UZpYUVxJiMhAKYE | failed | 44s | 1 | main expired |
| 19:17:23 | 16 | 8 | sell 0.44 sUSDai6Y3GxysDEtA9BVcEFTaog6UZpYUVxJiMhAKYE → SOL | failed | 44s | 1 | acquire sUSDai6Y3GxysDEtA9BVcEFTaog6UZpYUVxJiMhAKYE expired |
| 19:16:39 | 17 | 9 | sell 0.005 SOL → PEPEqnuuCDbBC89p1u9vpnP1KQ2oj1xTcQBsjt9X55m | failed | 44s | 1 | main expired |
| 19:17:24 | 18 | 9 | sell 127000 PEPEqnuuCDbBC89p1u9vpnP1KQ2oj1xTcQBsjt9X55m → SOL | filled | 43s | 2 |  |
| 19:16:39 | 19 | 10 | sell 0.005 SOL → DoGEV7LASBkQbibMc5k5vKnTZoMg423GpJ5QtJEGfm7R | filled | 16s | 1 |  |
| 19:16:55 | 20 | 10 | sell 5.82 DoGEV7LASBkQbibMc5k5vKnTZoMg423GpJ5QtJEGfm7R → SOL | filled | 14s | 1 |  |
| 19:16:39 | 21 | 11 | sell 0.005 SOL → EicWvteVi2fWepEzS3FYWsnuPoP6caZfjnKqNvydLjCH | filled | 15s | 1 |  |
| 19:16:55 | 22 | 11 | sell 0.135 EicWvteVi2fWepEzS3FYWsnuPoP6caZfjnKqNvydLjCH → SOL | filled | 14s | 1 |  |
| 19:16:40 | 23 | 12 | sell 0.005 SOL → CbyTNf7UPzvewHh4Zp6umogM2RWahhmGRJWLJnPwpump | failed | 40s | 1 | main expired |
| 19:17:20 | 24 | 12 | sell 358 CbyTNf7UPzvewHh4Zp6umogM2RWahhmGRJWLJnPwpump → SOL | failed | 44s | 1 | acquire CbyTNf7UPzvewHh4Zp6umogM2RWahhmGRJWLJnPwpump expired |
| 19:16:40 | 25 | 13 | sell 0.005 SOL → DvdmEnztCmXwBnAbedD48XVGZJSxq31zNvnyftXdpump | failed | 41s | 1 | main expired |
| 19:17:20 | 26 | 13 | sell 302 DvdmEnztCmXwBnAbedD48XVGZJSxq31zNvnyftXdpump → SOL | failed | 44s | 1 | acquire DvdmEnztCmXwBnAbedD48XVGZJSxq31zNvnyftXdpump expired |
| 19:16:40 | 27 | 14 | sell 0.005 SOL → LBTCgU4b3wsFKsPwBn1rRZDx5DoFutM6RPiEt1TPDsY | filled | 16s | 1 |  |
| 19:16:56 | 28 | 14 | sell 5.9e-06 LBTCgU4b3wsFKsPwBn1rRZDx5DoFutM6RPiEt1TPDsY → SOL | filled | 15s | 1 |  |
| 19:16:40 | 29 | 15 | sell 0.005 SOL → GY9mZfyPpxXxBXBxS2hB2XjhP3kfUsywTvgveozxpump | filled | 16s | 1 |  |
| 19:16:56 | 30 | 15 | sell 1510 GY9mZfyPpxXxBXBxS2hB2XjhP3kfUsywTvgveozxpump → SOL | filled | 15s | 1 |  |
| 19:16:40 | 31 | 16 | sell 0.005 SOL → Ax5dAamJPeuaLpFUzs9FdcpoUhHDcxyjPzxCJQidjups | failed | 41s | 1 | main expired |
| 19:17:21 | 32 | 16 | sell 263 Ax5dAamJPeuaLpFUzs9FdcpoUhHDcxyjPzxCJQidjups → SOL | failed | 43s | 1 | acquire Ax5dAamJPeuaLpFUzs9FdcpoUhHDcxyjPzxCJQidjups expired |
| 19:16:40 | 33 | 17 | sell 0.005 SOL → 3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 | filled | 16s | 1 |  |
| 19:16:56 | 34 | 17 | sell 0.463 3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 → SOL | filled | 15s | 1 |  |
| 19:16:40 | 35 | 18 | sell 0.005 SOL → 9aqmJjCnnMQv42TXLk921ceUkN35nea2QP969n1caqjj | filled | 11s | 1 |  |
| 19:16:51 | 36 | 18 | sell 392 9aqmJjCnnMQv42TXLk921ceUkN35nea2QP969n1caqjj → SOL | filled | 8s | 1 |  |
| 19:16:40 | 37 | 19 | sell 0.005 SOL → 5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump | filled | 16s | 1 |  |
| 19:16:56 | 38 | 19 | sell 162 5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump → SOL | filled | 15s | 1 |  |
| 19:16:40 | 39 | 20 | sell 0.005 SOL → BXoHJddsWJLHtAopeiSbKUSELsu8hSFMs8baGMDkpump | filled | 11s | 1 |  |
| 19:16:51 | 40 | 20 | sell 131 BXoHJddsWJLHtAopeiSbKUSELsu8hSFMs8baGMDkpump → SOL | filled | 8s | 1 |  |
| 19:16:40 | 41 | 21 | sell 0.005 SOL → 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz | failed | 41s | 1 | main expired |
| 19:17:21 | 42 | 21 | sell 15300 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz → SOL | failed | 44s | 1 | acquire 39ahtL8ynzE4amH26J29C93PA5172V3ft9UuUcqQS8fz expired |
| 19:16:41 | 43 | 22 | sell 0.005 SOL → DoVAVzViX8Bjy3r15nwikSaSbzE6dV4ovd28aWpJpump | filled | 16s | 1 |  |
| 19:16:57 | 44 | 22 | sell 383 DoVAVzViX8Bjy3r15nwikSaSbzE6dV4ovd28aWpJpump → SOL | filled | 15s | 1 |  |
| 19:16:41 | 45 | 23 | sell 0.005 SOL → 7M3gDRgozcumFsiTeXwjB8cYxpg7Q9R7rH7rkw2Fpump | filled | 11s | 1 |  |
| 19:16:52 | 46 | 23 | sell 192 7M3gDRgozcumFsiTeXwjB8cYxpg7Q9R7rH7rkw2Fpump → SOL | filled | 9s | 1 |  |
| 19:16:41 | 47 | 24 | sell 0.005 SOL → 8k4sBtEeK4pf26noKqApv8NBTnuSJcbdwpKYknk5PbAA | filled | 11s | 1 |  |
| 19:16:52 | 48 | 24 | sell 261 8k4sBtEeK4pf26noKqApv8NBTnuSJcbdwpKYknk5PbAA → SOL | filled | 9s | 1 |  |
| 19:16:41 | 49 | 25 | sell 0.005 SOL → taoC6xyv2v8tDLcev4uaGUgV4vdQsWJrGft2kcBRrBY | filled | 16s | 1 |  |
| 19:16:57 | 50 | 25 | sell 0.00179 taoC6xyv2v8tDLcev4uaGUgV4vdQsWJrGft2kcBRrBY → SOL | filled | 15s | 1 |  |
| 19:16:41 | 51 | 26 | sell 0.005 SOL → 2zCo6bUowJMvr89ajxuWsPadAqJ2F9akCkxumNsSdgsL | filled | 16s | 1 |  |
| 19:16:57 | 52 | 26 | sell 0.235 2zCo6bUowJMvr89ajxuWsPadAqJ2F9akCkxumNsSdgsL → SOL | filled | 15s | 1 |  |
| 19:16:41 | 53 | 27 | sell 0.005 SOL → C8fU5GdfAt5mnw2RK7HE6XJGFNxHpaskZMkXxdm88888 | filled | 16s | 1 |  |
| 19:16:58 | 54 | 27 | sell 2.27 C8fU5GdfAt5mnw2RK7HE6XJGFNxHpaskZMkXxdm88888 → SOL | filled | 15s | 1 |  |
| 19:16:41 | 55 | 28 | sell 0.005 SOL → 5GgRAEmv8ZxF2PR5hY72Qs5x1bnQ6UK2RbTPoqJ3wSwW | failed | 41s | 1 | main expired |
| 19:17:22 | 56 | 28 | sell 0.000116 5GgRAEmv8ZxF2PR5hY72Qs5x1bnQ6UK2RbTPoqJ3wSwW → SOL | failed | 44s | 1 | acquire 5GgRAEmv8ZxF2PR5hY72Qs5x1bnQ6UK2RbTPoqJ3wSwW expired |
| 19:16:41 | 57 | 29 | sell 0.005 SOL → 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan | failed | 41s | 1 | main expired |
| 19:17:22 | 58 | 29 | sell 207 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan → SOL | failed | 44s | 1 | acquire 6sXzcNzDk8x4Atcee6vv25iw5bLyg8mLJRtVhwM8Kgan expired |
| 19:16:41 | 59 | 30 | sell 0.005 SOL → HzYCHqAN2uoHGRnL9v2ChCfFQX3bvJuJd5zu2Hd5MZQy | failed | 41s | 1 | main expired |
| 19:17:23 | 60 | 30 | sell 346 HzYCHqAN2uoHGRnL9v2ChCfFQX3bvJuJd5zu2Hd5MZQy → SOL | failed | 44s | 1 | acquire HzYCHqAN2uoHGRnL9v2ChCfFQX3bvJuJd5zu2Hd5MZQy expired |
| 19:17:03 | 61 | 1 | sell 0.005 SOL → MSTRdWXMeZxdE8osAQy3fA4rvTY5rgummDSMEx6U7Nz | filled | 14s | 1 |  |
| 19:17:17 | 62 | 1 | sell 0.00314 MSTRdWXMeZxdE8osAQy3fA4rvTY5rgummDSMEx6U7Nz → SOL | filled | 8s | 1 |  |
| 19:17:14 | 63 | 2 | sell 0.005 SOL → avaxGHCq3T7hoxd73oY2KY9hJSTaeMibXvHy5KNzh5D | filled | 9s | 1 |  |
| 19:17:23 | 64 | 2 | sell 0.0485 avaxGHCq3T7hoxd73oY2KY9hJSTaeMibXvHy5KNzh5D → SOL | filled | 6s | 1 |  |
| 19:17:04 | 65 | 3 | sell 0.005 SOL → H4KUxsEgCp2yDpFvyDuGM5k6XevSKKrrKUxZ3Zr6nyJc | filled | 8s | 1 |  |
| 19:17:12 | 66 | 3 | sell 489 H4KUxsEgCp2yDpFvyDuGM5k6XevSKKrrKUxZ3Zr6nyJc → SOL | filled | 13s | 1 |  |
| 19:16:58 | 67 | 4 | sell 0.005 SOL → uniHfuPhEQSrtpzXpJZDCSq53yaejKKpNhFUiKoHKHV | filled | 9s | 1 |  |
| 19:17:08 | 68 | 4 | sell 0.0668 uniHfuPhEQSrtpzXpJZDCSq53yaejKKpNhFUiKoHKHV → SOL | filled | 8s | 1 |  |
| 19:16:59 | 69 | 5 | sell 0.005 SOL → Morpho2VPeTr2E1Jx6monxCzF7mqwUnjz74RdwLXYyP | filled | 14s | 1 |  |
| 19:17:13 | 70 | 5 | sell 0.205 Morpho2VPeTr2E1Jx6monxCzF7mqwUnjz74RdwLXYyP → SOL | filled | 9s | 1 |  |
| 19:16:59 | 71 | 6 | sell 0.005 SOL → UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids | failed | 36s | 1 | main expired |
| 19:17:36 | 72 | 6 | sell 2250 UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids → SOL | failed | 42s | 1 | acquire UpBBfyC75u3kxDGWmmmW2yauk9YY3CqZhdt1KUDkids expired |
| 19:16:59 | 73 | 7 | sell 0.005 SOL → 8nPoBHiBM6pybxMws9PA2JRb9BjkppBfqcZGmot4DMBC | failed | 36s | 1 | main expired |
| 19:17:36 | 74 | 7 | sell 1830 8nPoBHiBM6pybxMws9PA2JRb9BjkppBfqcZGmot4DMBC → SOL | failed | 42s | 1 | acquire 8nPoBHiBM6pybxMws9PA2JRb9BjkppBfqcZGmot4DMBC expired |
| 19:18:07 | 75 | 8 | sell 0.005 SOL → CJMihkPYswa3k6az9SUbepjKnkJQ6KWpGG5p9qW9n7NV | failed | 2s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 19:18:09 | 76 | 8 | sell 1040 CJMihkPYswa3k6az9SUbepjKnkJQ6KWpGG5p9qW9n7NV → SOL | filled | 32s | 2 |  |
| 19:18:06 | 77 | 9 | sell 0.005 SOL → 4N4DnNo3qpPks9aQCkcWkzoir8tnvT6diS4TnnZibonk | failed | 36s | 1 | main expired |
| 19:18:43 | 78 | 9 | sell 136 4N4DnNo3qpPks9aQCkcWkzoir8tnvT6diS4TnnZibonk → SOL | failed | 43s | 1 | acquire 4N4DnNo3qpPks9aQCkcWkzoir8tnvT6diS4TnnZibonk expired |
| 19:17:10 | 79 | 10 | sell 0.005 SOL → 3Dgwn5E7H5a8k6iGrz3qirkaJqUaJrKHEZ2xPcLRpump | filled | 9s | 1 |  |
| 19:17:19 | 80 | 10 | sell 656 3Dgwn5E7H5a8k6iGrz3qirkaJqUaJrKHEZ2xPcLRpump → SOL | filled | 8s | 1 |  |
| 19:17:09 | 81 | 11 | sell 0.005 SOL → StargWr5r6r8gZSjmEKGZ1dmvKWkj79r2z1xqjFstar | failed | 39s | 1 | main expired |
| 19:17:47 | 82 | 11 | sell 214 StargWr5r6r8gZSjmEKGZ1dmvKWkj79r2z1xqjFstar → SOL | failed | 43s | 1 | acquire StargWr5r6r8gZSjmEKGZ1dmvKWkj79r2z1xqjFstar expired |
| 19:18:04 | 83 | 12 | sell 0.005 SOL → CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 | failed | 36s | 1 | main expired |
| 19:18:40 | 84 | 12 | sell 2130 CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 → SOL | failed | 44s | 1 | acquire CdhZy8wrRxNxoV8HtoByXKN7mvS46avtuZ1b39tKfx7 expired |
| 19:18:04 | 85 | 13 | sell 0.005 SOL → CscZaq5twomhUkvCY8Jdd1tge32L4Yj9FbkFFEZQpump | failed | 36s | 1 | main expired |
| 19:18:40 | 86 | 13 | sell 1830 CscZaq5twomhUkvCY8Jdd1tge32L4Yj9FbkFFEZQpump → SOL | failed | 44s | 1 | acquire CscZaq5twomhUkvCY8Jdd1tge32L4Yj9FbkFFEZQpump expired |
| 19:17:11 | 87 | 14 | sell 0.005 SOL → suifhC9gU1VbJAPYPTBkHJyyyStKGLLYPVDTmPoqbvA | filled | 22s | 1 |  |
| 19:17:33 | 88 | 14 | sell 0.465 suifhC9gU1VbJAPYPTBkHJyyyStKGLLYPVDTmPoqbvA → SOL | filled | 24s | 1 |  |
| 19:17:10 | 89 | 15 | sell 0.005 SOL → 8nnaeWCw8mUypcGAgbmSuzAT85uWx4UN12adDrMhXrGF | filled | 13s | 1 |  |
| 19:17:24 | 90 | 15 | sell 306 8nnaeWCw8mUypcGAgbmSuzAT85uWx4UN12adDrMhXrGF → SOL | filled | 44s | 2 |  |
| 19:18:04 | 91 | 16 | sell 0.005 SOL → RACEyWiM2ztEZcJx2AHXU2eWjhxU57x3vXn92b39dLD | failed | 37s | 1 | main expired |
| 19:18:41 | 92 | 16 | sell 0.00127 RACEyWiM2ztEZcJx2AHXU2eWjhxU57x3vXn92b39dLD → SOL | failed | 44s | 1 | acquire RACEyWiM2ztEZcJx2AHXU2eWjhxU57x3vXn92b39dLD expired |
| 19:17:11 | 93 | 17 | sell 0.005 SOL → NFLX7qV57zuVxCoHy3s1jiGZyALraLNwttbxdvmYJLJ | failed | 35s | 1 | main expired |
| 19:17:46 | 94 | 17 | sell 0.00696 NFLX7qV57zuVxCoHy3s1jiGZyALraLNwttbxdvmYJLJ → SOL | failed | 42s | 1 | acquire NFLX7qV57zuVxCoHy3s1jiGZyALraLNwttbxdvmYJLJ expired |
| 19:16:59 | 95 | 18 | sell 0.005 SOL → BZFYNPeQAEW3HWQ4DNsTVahC1n4ZjTgn6jB2nnBbB96W | filled | 9s | 1 |  |
| 19:17:08 | 96 | 18 | sell 243 BZFYNPeQAEW3HWQ4DNsTVahC1n4ZjTgn6jB2nnBbB96W → SOL | filled | 8s | 1 |  |
| 19:17:11 | 97 | 19 | sell 0.005 SOL → SV151D5pjygAKA8aJJcKzm4wFnRX5G92Fye94jQJk7g | failed | 39s | 1 | main expired |
| 19:17:51 | 98 | 19 | sell 1.58 SV151D5pjygAKA8aJJcKzm4wFnRX5G92Fye94jQJk7g → SOL | failed | 43s | 1 | acquire SV151D5pjygAKA8aJJcKzm4wFnRX5G92Fye94jQJk7g expired |
| 19:17:00 | 99 | 20 | sell 0.005 SOL → GtDZKAqvMZMnti46ZewMiXCa4oXF4bZxwQPoKzXPFxZn | filled | 9s | 1 |  |
| 19:17:09 | 100 | 20 | sell 2860 GtDZKAqvMZMnti46ZewMiXCa4oXF4bZxwQPoKzXPFxZn → SOL | filled | 9s | 1 |  |
| 19:18:05 | 101 | 21 | sell 0.005 SOL → 5VnbrKp28Qs9CAH6PyZdxBNvLxZcbeX3YBsozgWnpump | filled | 8s | 1 |  |
| 19:18:13 | 102 | 21 | sell 1250 5VnbrKp28Qs9CAH6PyZdxBNvLxZcbeX3YBsozgWnpump → SOL | filled | 10s | 1 |  |
| 19:17:12 | 103 | 22 | sell 0.005 SOL → F4K2SbLNgyz9gzNqT8bPeLpRkxy4oMA9twaffUDdZtB6 | filled | 14s | 1 |  |
| 19:17:25 | 104 | 22 | sell 1040 F4K2SbLNgyz9gzNqT8bPeLpRkxy4oMA9twaffUDdZtB6 → SOL | failed | 37s | 1 | main expired |
| 19:17:01 | 105 | 23 | sell 0.005 SOL → 3VPoXaRcXxju8qgkVRN87UuXZxbdBD7zyaXPDqqmpump | filled | 9s | 1 |  |
| 19:17:10 | 106 | 23 | sell 594 3VPoXaRcXxju8qgkVRN87UuXZxbdBD7zyaXPDqqmpump → SOL | filled | 10s | 1 |  |
| 19:17:01 | 107 | 24 | sell 0.005 SOL → 55Vr2VpSwxsDkB6uGGHAvRv86K6zax2Zb4TT8ivwDEzW | filled | 9s | 1 |  |
| 19:17:10 | 108 | 24 | sell 2950 55Vr2VpSwxsDkB6uGGHAvRv86K6zax2Zb4TT8ivwDEzW → SOL | filled | 21s | 2 |  |
| 19:17:12 | 109 | 25 | sell 0.005 SOL → qntUzPUsJ51abNP7VYNxkmsQ4RnvEZAhavUxsCxpxH4 | filled | 23s | 1 |  |
| 19:17:35 | 110 | 25 | sell 0.00195 qntUzPUsJ51abNP7VYNxkmsQ4RnvEZAhavUxsCxpxH4 → SOL | filled | 56s | 1 |  |
| 19:17:12 | 111 | 26 | sell 0.005 SOL → HooDYv5RewLRiMLnEVq3VJqdqxhuE6c5eYvqejMC3e9A | filled | 13s | 1 |  |
| 19:17:26 | 112 | 26 | sell 0.0045 HooDYv5RewLRiMLnEVq3VJqdqxhuE6c5eYvqejMC3e9A → SOL | filled | 12s | 1 |  |
| 19:17:13 | 113 | 27 | sell 0.005 SOL → poNSfquKq512ApeYjVghwViSun4x1MhCqHVH2Paq4jN | filled | 31s | 1 |  |
| 19:17:43 | 114 | 27 | sell 1.42 poNSfquKq512ApeYjVghwViSun4x1MhCqHVH2Paq4jN → SOL | filled | 10s | 1 |  |
| 19:18:06 | 115 | 28 | sell 0.005 SOL → 6ZnCkq5t8XG4q42b5JiVvU6hV5cZFaNdSBoFq5E7Vf9q | filled | 8s | 1 |  |
| 19:18:15 | 116 | 28 | sell 59.1 6ZnCkq5t8XG4q42b5JiVvU6hV5cZFaNdSBoFq5E7Vf9q → SOL | filled | 12s | 1 |  |
| 19:18:07 | 117 | 29 | sell 0.005 SOL → GoADAwux19tGxb3W4ykPzZz8p5JCSYaxBRpuW7s9pump | filled | 8s | 1 |  |
| 19:18:15 | 118 | 29 | sell 853 GoADAwux19tGxb3W4ykPzZz8p5JCSYaxBRpuW7s9pump → SOL | filled | 11s | 1 |  |
| 19:18:07 | 119 | 30 | sell 0.005 SOL → G5W6LwkLeoj6rZqBP1y3KT8k6Cz6rXGJmMNU3TArXtXw | failed | 36s | 1 | main expired |
| 19:18:43 | 120 | 30 | sell 1280 G5W6LwkLeoj6rZqBP1y3KT8k6Cz6rXGJmMNU3TArXtXw → SOL | failed | 43s | 1 | acquire G5W6LwkLeoj6rZqBP1y3KT8k6Cz6rXGJmMNU3TArXtXw expired |
| 19:17:25 | 121 | 1 | sell 0.005 SOL → BLKKYfF41c6xRPrtX1rdYbxLE1xxEdZUnxQsB5hcZ8Nf | failed | 37s | 1 | main expired |
| 19:18:01 | 122 | 1 | sell 0.000455 BLKKYfF41c6xRPrtX1rdYbxLE1xxEdZUnxQsB5hcZ8Nf → SOL | failed | 43s | 1 | acquire BLKKYfF41c6xRPrtX1rdYbxLE1xxEdZUnxQsB5hcZ8Nf expired |
| 19:17:29 | 123 | 2 | sell 0.005 SOL → CortexFv3fRcLKTgACr7aLqckGh5eP7TP3z9JHoKqMc6 | filled | 8s | 1 |  |
| 19:17:37 | 124 | 2 | sell 14 CortexFv3fRcLKTgACr7aLqckGh5eP7TP3z9JHoKqMc6 → SOL | filled | 11s | 1 |  |
| 19:17:26 | 125 | 3 | sell 0.005 SOL → 2uxaYT1fVrp6Fg2BrxQcyKSW91hefM6dG9krpbeDiirT | filled | 12s | 1 |  |
| 19:17:38 | 126 | 3 | sell 0.445 2uxaYT1fVrp6Fg2BrxQcyKSW91hefM6dG9krpbeDiirT → SOL | filled | 7s | 1 |  |
| 19:17:16 | 127 | 4 | sell 0.005 SOL → 4mS5JinFf5f1GCr5K2MRLgQiu95ifd4X763Uhj2Ypump | failed | 37s | 1 | main expired |
| 19:17:53 | 128 | 4 | sell 214 4mS5JinFf5f1GCr5K2MRLgQiu95ifd4X763Uhj2Ypump → SOL | failed | 44s | 1 | acquire 4mS5JinFf5f1GCr5K2MRLgQiu95ifd4X763Uhj2Ypump expired |
| 19:17:23 | 129 | 5 | sell 0.005 SOL → CreiuhfwdWCN5mJbMJtA9bBpYQrQF2tCBuZwSPWfpump | filled | 7s | 1 |  |
| 19:17:29 | 130 | 5 | sell 920 CreiuhfwdWCN5mJbMJtA9bBpYQrQF2tCBuZwSPWfpump → SOL | filled | 8s | 1 |  |
| 19:18:18 | 131 | 6 | sell 0.005 SOL → EzfgjvkSwthhgHaceR3LnKXUoRkP6NUhfghdaHAj1tUv | filled | 14s | 1 |  |
| 19:18:32 | 132 | 6 | sell 1.95 EzfgjvkSwthhgHaceR3LnKXUoRkP6NUhfghdaHAj1tUv → SOL | filled | 7s | 1 |  |
| 19:18:18 | 133 | 7 | sell 0.005 SOL → ondohH8Vssxiqcy5u6Efi4AYN17KZrzQtv2a91dnrgW | filled | 7s | 1 |  |
| 19:18:25 | 134 | 7 | sell 1.03 ondohH8Vssxiqcy5u6Efi4AYN17KZrzQtv2a91dnrgW → SOL | filled | 6s | 1 |  |
| 19:18:42 | 135 | 8 | sell 0.005 SOL → iNTCy1qTsUEZQe3DSocLz1ZXXai34Gdw8THQh5rxFaF | filled | 16s | 1 |  |
| 19:18:58 | 136 | 8 | sell 0.00463 iNTCy1qTsUEZQe3DSocLz1ZXXai34Gdw8THQh5rxFaF → SOL | filled | 11s | 1 |  |
| 19:19:26 | 137 | 9 | sell 0.005 SOL → 4ChT49V1iazP2XUGtycGkEsS6pRMqvGfUbqvRC9Z91ZT | filled | 25s | 1 |  |
| 19:19:51 | 138 | 9 | sell 2960 4ChT49V1iazP2XUGtycGkEsS6pRMqvGfUbqvRC9Z91ZT → SOL | filled | 4s | 1 |  |
| 19:17:27 | 139 | 10 | sell 0.005 SOL → LMT3i1BHgixFqPUgcyteJhnEz2dpy9i3cYy4pi9BoeV | filled | 13s | 1 |  |
| 19:17:39 | 140 | 10 | sell 0.000965 LMT3i1BHgixFqPUgcyteJhnEz2dpy9i3cYy4pi9BoeV → SOL | filled | 22s | 1 |  |
| 19:18:30 | 141 | 11 | sell 0.005 SOL → CZEB3WNZuF2Yz1z2H81RcCk8T7fsw82KB33zqamASVsg | filled | 6s | 1 |  |
| 19:18:37 | 142 | 11 | sell 0.000519 CZEB3WNZuF2Yz1z2H81RcCk8T7fsw82KB33zqamASVsg → SOL | filled | 16s | 1 |  |
| 19:19:24 | 143 | 12 | sell 0.005 SOL → FMqh9mqR6drPZqqW6wPqLHxX4rqNDWGhYLaMfoaJpump | failed | 2013s | 1 | main timeout |
| 19:52:57 | 144 | 12 | sell 2560 FMqh9mqR6drPZqqW6wPqLHxX4rqNDWGhYLaMfoaJpump → SOL | failed | 43s | 1 | acquire FMqh9mqR6drPZqqW6wPqLHxX4rqNDWGhYLaMfoaJpump expired |
| 19:19:24 | 145 | 13 | sell 0.005 SOL → DLGRpmkMGr7J4KD1xR5x2XjaGeQH64PLFQkyxNNSpump | failed | 2012s | 1 | main timeout |
| 19:52:57 | 146 | 13 | sell 201 DLGRpmkMGr7J4KD1xR5x2XjaGeQH64PLFQkyxNNSpump → SOL | failed | 43s | 1 | acquire DLGRpmkMGr7J4KD1xR5x2XjaGeQH64PLFQkyxNNSpump expired |
| 19:17:57 | 147 | 14 | sell 0.005 SOL → 6dX5M8DY6VTFtVRX5yzWn9RE4MkJTyoAVbAodk6cpump | filled | 7s | 1 |  |
| 19:18:05 | 148 | 14 | sell 195 6dX5M8DY6VTFtVRX5yzWn9RE4MkJTyoAVbAodk6cpump → SOL | filled | 17s | 1 |  |
| 19:18:07 | 149 | 15 | sell 0.005 SOL → CSRRgTwf9o5KLgguS2M16aEAhV5PUUzfshrAAQ8opump | failed | 36s | 1 | main expired |
| 19:18:44 | 150 | 15 | sell 199 CSRRgTwf9o5KLgguS2M16aEAhV5PUUzfshrAAQ8opump → SOL | failed | 43s | 1 | acquire CSRRgTwf9o5KLgguS2M16aEAhV5PUUzfshrAAQ8opump expired |
| 19:19:25 | 151 | 16 | sell 0.005 SOL → HyDKNdnhZNVYQMruBevbNsUWruA9STmAQrS4srXApump | filled | 4s | 1 |  |
| 19:19:29 | 152 | 16 | sell 199 HyDKNdnhZNVYQMruBevbNsUWruA9STmAQrS4srXApump → SOL | filled | 7s | 1 |  |
| 19:18:28 | 153 | 17 | sell 0.005 SOL → y1AZt42vceCmStjW4zetK3VoNarC1VxJ5iDjpiupump | filled | 7s | 1 |  |
| 19:18:35 | 154 | 17 | sell 26 y1AZt42vceCmStjW4zetK3VoNarC1VxJ5iDjpiupump → SOL | filled | 11s | 1 |  |
| 19:17:16 | 155 | 18 | sell 0.005 SOL → JDzPbXboQYWVmdxXS3LbvjM52RtsV1QaSv2AzoCiai2o | failed | 38s | 1 | main expired |
| 19:17:54 | 156 | 18 | sell 3.57 JDzPbXboQYWVmdxXS3LbvjM52RtsV1QaSv2AzoCiai2o → SOL | filled | 47s | 2 |  |
| 19:18:34 | 157 | 19 | sell 0.005 SOL → DKu9kykSfbN5LBfFXtNNDPaX35o4Fv6vJ9FKk7pZpump | filled | 7s | 1 |  |
| 19:18:41 | 158 | 19 | sell 54.8 DKu9kykSfbN5LBfFXtNNDPaX35o4Fv6vJ9FKk7pZpump → SOL | filled | 10s | 1 |  |
| 19:17:18 | 159 | 20 | sell 0.005 SOL → 4K1m7gAMDKzrxQn68yuZAd767w57Fw7Ykw69dG3umeta | filled | 12s | 1 |  |
| 19:17:30 | 160 | 20 | sell 17.1 4K1m7gAMDKzrxQn68yuZAd767w57Fw7Ykw69dG3umeta → SOL | filled | 29s | 1 |  |
| 19:18:23 | 161 | 21 | sell 0.005 SOL → DpBzjtgGLF7QA9Ug3eUVGbnqa6j3jvYBn1XuQuktvfhm | filled | 11s | 1 |  |
| 19:18:35 | 162 | 21 | sell 6470 DpBzjtgGLF7QA9Ug3eUVGbnqa6j3jvYBn1XuQuktvfhm → SOL | filled | 7s | 1 |  |
| 19:18:02 | 163 | 22 | sell 0.005 SOL → FeR8VBqNRSUD5NtXAj2n3j1dAHkZHfyDktKuLXD4pump | filled | 9s | 1 |  |
| 19:18:11 | 164 | 22 | sell 9.44 FeR8VBqNRSUD5NtXAj2n3j1dAHkZHfyDktKuLXD4pump → SOL | filled | 11s | 1 |  |
| 19:17:19 | 165 | 23 | sell 0.005 SOL → HsprHxBRgiVaQdRf3TnKNuZZtaX9JUSPgMFdAkk6pump | failed | 37s | 1 | main expired |
| 19:17:56 | 166 | 23 | sell 287 HsprHxBRgiVaQdRf3TnKNuZZtaX9JUSPgMFdAkk6pump → SOL | failed | 43s | 1 | acquire HsprHxBRgiVaQdRf3TnKNuZZtaX9JUSPgMFdAkk6pump expired |
| 19:17:31 | 167 | 24 | sell 0.005 SOL → HKZDfZnkHZxd9agRDNPyDv4iT6LmAurJnpRtj9wpump | filled | 12s | 1 |  |
| 19:17:43 | 168 | 24 | sell 175 HKZDfZnkHZxd9agRDNPyDv4iT6LmAurJnpRtj9wpump → SOL | filled | 27s | 2 |  |
| 19:18:31 | 169 | 25 | sell 0.005 SOL → 8ZHE4ow1a2jjxuoMfyExuNamQNALv5ekZhsBn5nMDf5e | filled | 11s | 1 |  |
| 19:18:42 | 170 | 25 | sell 145 8ZHE4ow1a2jjxuoMfyExuNamQNALv5ekZhsBn5nMDf5e → SOL | filled | 10s | 1 |  |
| 19:17:37 | 171 | 26 | sell 0.005 SOL → XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM | filled | 11s | 1 |  |
| 19:17:48 | 172 | 26 | sell 0.00464 XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM → SOL | filled | 10s | 1 |  |
| 19:17:54 | 173 | 27 | sell 0.005 SOL → ATBR4i19gcQ31Rfr7ymA2XvkCQEAkNFGBtVKTmdqpump | filled | 6s | 1 |  |
| 19:18:00 | 174 | 27 | sell 1190 ATBR4i19gcQ31Rfr7ymA2XvkCQEAkNFGBtVKTmdqpump → SOL | filled | 9s | 1 |  |
| 19:18:27 | 175 | 28 | sell 0.005 SOL → 4TyZGqRLG3VcHTGMcLBoPUmqYitMVojXinAmkL8xpump | filled | 11s | 1 |  |
| 19:18:38 | 176 | 28 | sell 1660 4TyZGqRLG3VcHTGMcLBoPUmqYitMVojXinAmkL8xpump → SOL | filled | 7s | 1 |  |
| 19:18:25 | 177 | 29 | sell 0.005 SOL → J1Wpmugrooj1yMyQKrdZ2vwRXG5rhfx3vTnYE39gpump | filled | 6s | 1 |  |
| 19:18:32 | 178 | 29 | sell 19.3 J1Wpmugrooj1yMyQKrdZ2vwRXG5rhfx3vTnYE39gpump → SOL | filled | 11s | 1 |  |
| 19:19:26 | 179 | 30 | sell 0.005 SOL → DN4L5JE9VuGpMt1SsEWqyybUqyrYuWuywmTq7Q5GVDFK | failed | 2010s | 1 | main timeout |
| 19:52:57 | 180 | 30 | sell 1 DN4L5JE9VuGpMt1SsEWqyybUqyrYuWuywmTq7Q5GVDFK → SOL | failed | 43s | 1 | acquire DN4L5JE9VuGpMt1SsEWqyybUqyrYuWuywmTq7Q5GVDFK expired |
| 19:18:44 | 181 | 1 | sell 0.005 SOL → 2nP9yKQNSGQy851iyawDvBkzkK2R2aqKArQCKc2gpump | filled | 9s | 1 |  |
| 19:18:54 | 182 | 1 | sell 1230 2nP9yKQNSGQy851iyawDvBkzkK2R2aqKArQCKc2gpump → SOL | filled | 2048s | 2 |  |
| 19:17:49 | 183 | 2 | sell 0.005 SOL → 8Jx8AAHj86wbQgUTjGuj6GTTL5Ps3cqxKRTvpaJApump | filled | 7s | 1 |  |
| 19:17:56 | 184 | 2 | sell 703 8Jx8AAHj86wbQgUTjGuj6GTTL5Ps3cqxKRTvpaJApump → SOL | filled | 7s | 1 |  |
| 19:17:45 | 185 | 3 | sell 0.005 SOL → 2c1KjiyQow66QfsnCtoyuqfo3AuxgpBMEoAq5oiiXqdu | failed | 37s | 1 | main expired |
| 19:18:21 | 186 | 3 | sell 669 2c1KjiyQow66QfsnCtoyuqfo3AuxgpBMEoAq5oiiXqdu → SOL | failed | 43s | 1 | acquire 2c1KjiyQow66QfsnCtoyuqfo3AuxgpBMEoAq5oiiXqdu expired |
| 19:18:37 | 187 | 4 | sell 0.005 SOL → 8G5ayEsJF4Q7FEWEGeF4jtnUWZBEKCqhySTFQf9Ppump | filled | 7s | 1 |  |
| 19:18:44 | 188 | 4 | sell 1130 8G5ayEsJF4Q7FEWEGeF4jtnUWZBEKCqhySTFQf9Ppump → SOL | filled | 6s | 1 |  |
| 19:17:37 | 189 | 5 | sell 0.005 SOL → utLyQQCPvjuCc6zeaXdsFeEC3JNdxKS3vxaZWoGdoge | filled | 11s | 1 |  |
| 19:17:48 | 190 | 5 | sell 338 utLyQQCPvjuCc6zeaXdsFeEC3JNdxKS3vxaZWoGdoge → SOL | filled | 10s | 1 |  |
| 19:18:39 | 191 | 6 | sell 0.005 SOL → GvUCjmWSXA5hrTh9smmNA1AU55YCtP9mDLQcrKA1pump | filled | 6s | 1 |  |
| 19:18:46 | 192 | 6 | sell 474 GvUCjmWSXA5hrTh9smmNA1AU55YCtP9mDLQcrKA1pump → SOL | filled | 12s | 1 |  |
| 19:18:31 | 193 | 7 | sell 0.005 SOL → stke7uu3fXHsGqKVVjKnkmj65LRPVrqr4bLG2SJg7rh | failed | 35s | 1 | main expired |
| 19:19:06 | 194 | 7 | sell 0.0043 stke7uu3fXHsGqKVVjKnkmj65LRPVrqr4bLG2SJg7rh → SOL | failed | 42s | 1 | acquire stke7uu3fXHsGqKVVjKnkmj65LRPVrqr4bLG2SJg7rh expired |
| 19:19:08 | 195 | 8 | sell 0.005 SOL → BsbsB3WLq7vbY5En3MBCAsTrcwaCxNKY2Mp5pGuLpump | failed | 35s | 1 | main expired |
| 19:19:44 | 196 | 8 | sell 726 BsbsB3WLq7vbY5En3MBCAsTrcwaCxNKY2Mp5pGuLpump → SOL | failed | 1993s | 1 | acquire BsbsB3WLq7vbY5En3MBCAsTrcwaCxNKY2Mp5pGuLpump timeout |
| 19:19:55 | 197 | 9 | sell 0.005 SOL → 5Jr9hGmJgxBRjjF8XGcGgQzXUdsbpZNNMpigEv8Wpump | failed | 1982s | 1 | main timeout |
| 19:52:57 | 198 | 9 | sell 139 5Jr9hGmJgxBRjjF8XGcGgQzXUdsbpZNNMpigEv8Wpump → SOL | filled | 8s | 1 |  |
| 19:18:01 | 199 | 10 | sell 0.005 SOL → 9PR7nCP9DpcUotnDPVLUBUZKu5WAYkwrCUx9wDnSpump | filled | 9s | 1 |  |
| 19:18:10 | 200 | 10 | sell 7.97 9PR7nCP9DpcUotnDPVLUBUZKu5WAYkwrCUx9wDnSpump → SOL | filled | 11s | 1 |  |
| 19:18:53 | 201 | 11 | sell 0.005 SOL → 4SnKwnz6DyagftnFqdxsvWvehrcbEDhxmmXNQk2Jpump | failed | 36s | 1 | main expired |
| 19:19:29 | 202 | 11 | sell 365 4SnKwnz6DyagftnFqdxsvWvehrcbEDhxmmXNQk2Jpump → SOL | failed | 2008s | 1 | acquire 4SnKwnz6DyagftnFqdxsvWvehrcbEDhxmmXNQk2Jpump timeout |
| 19:53:40 | 203 | 12 | sell 0.005 SOL → 9BVn3Y8tPghbnGuuuxoj2mGekqgSQV1M7nALF7brpump | failed | 323s | 1 | main timeout |
| 19:59:03 | 204 | 12 | sell 1440 9BVn3Y8tPghbnGuuuxoj2mGekqgSQV1M7nALF7brpump → SOL | failed | 43s | 1 | acquire 9BVn3Y8tPghbnGuuuxoj2mGekqgSQV1M7nALF7brpump expired |
| 19:53:40 | 205 | 13 | sell 0.005 SOL → NV2RYH954cTJ3ckFUpvfqaQXU4ARqqDH3562nFSpump | failed | 323s | 1 | main timeout |
| 19:59:03 | 206 | 13 | sell 1550 NV2RYH954cTJ3ckFUpvfqaQXU4ARqqDH3562nFSpump → SOL | filled | 10s | 1 |  |
| 19:18:22 | 207 | 14 | sell 0.005 SOL → Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump | filled | 11s | 1 |  |
| 19:18:34 | 208 | 14 | sell 117 Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump → SOL | filled | 26s | 2 |  |
| 19:19:27 | 209 | 15 | sell 0.005 SOL → HcfnJxLov6tY8i1dq9uYRRZKCvxADPpovcfkyXzdpump | filled | 10s | 1 |  |
| 19:19:37 | 210 | 15 | sell 174 HcfnJxLov6tY8i1dq9uYRRZKCvxADPpovcfkyXzdpump → SOL | filled | 10s | 1 |  |
| 19:19:36 | 211 | 16 | sell 0.005 SOL → FQgtfugBdpFN7PZ6NdPrZpVLDBrPGxXesi4gVu3vErhY | filled | 7s | 1 |  |
| 19:19:43 | 212 | 16 | sell 26.5 FQgtfugBdpFN7PZ6NdPrZpVLDBrPGxXesi4gVu3vErhY → SOL | filled | 7s | 1 |  |
| 19:18:46 | 213 | 17 | sell 0.005 SOL → 9oxGicd5KXNcthYM6yD23X9zcznQVnHjrAEN38fFpump | filled | 12s | 1 |  |
| 19:18:58 | 214 | 17 | sell 594 9oxGicd5KXNcthYM6yD23X9zcznQVnHjrAEN38fFpump → SOL | filled | 11s | 1 |  |
| 19:18:41 | 215 | 18 | sell 0.005 SOL → AGdGTQa8iRnSx4fQJehWo4Xwbh1bzTazs55R6Jwupump | failed | 36s | 1 | main expired |
| 19:19:17 | 216 | 18 | sell 1640 AGdGTQa8iRnSx4fQJehWo4Xwbh1bzTazs55R6Jwupump → SOL | failed | 2025s | 1 | acquire AGdGTQa8iRnSx4fQJehWo4Xwbh1bzTazs55R6Jwupump expired |
| 19:18:50 | 217 | 19 | sell 0.005 SOL → 2bpT3ksMdwdZ6DuHyq3FDUr7HDwvZ5DRZoT1fUPALJaH | filled | 8s | 1 |  |
| 19:18:59 | 218 | 19 | sell 129 2bpT3ksMdwdZ6DuHyq3FDUr7HDwvZ5DRZoT1fUPALJaH → SOL | filled | 11s | 1 |  |
| 19:17:59 | 219 | 20 | sell 0.005 SOL → rxczFZFvzksquCazjtv9vtEBYW7q4SwiqXkzBcw8NFW | failed | 37s | 1 | main expired |
| 19:18:37 | 220 | 20 | sell 206 rxczFZFvzksquCazjtv9vtEBYW7q4SwiqXkzBcw8NFW → SOL | failed | 45s | 1 | acquire rxczFZFvzksquCazjtv9vtEBYW7q4SwiqXkzBcw8NFW expired |
| 19:18:42 | 221 | 21 | sell 0.005 SOL → 9ckR7pPPvyPadACDTzLwK2ZAEeUJ3qGSnzPs8bVaHrSy | filled | 17s | 1 |  |
| 19:18:59 | 222 | 21 | sell 0.493 9ckR7pPPvyPadACDTzLwK2ZAEeUJ3qGSnzPs8bVaHrSy → SOL | filled | 11s | 1 |  |
| 19:18:22 | 223 | 22 | sell 0.005 SOL → HeC2xWqGT9gPfdvaMuqxPo2bUQ1XgY5wRtnrwTEHpump | filled | 10s | 1 |  |
| 19:18:32 | 224 | 22 | sell 1000 HeC2xWqGT9gPfdvaMuqxPo2bUQ1XgY5wRtnrwTEHpump → SOL | filled | 7s | 1 |  |
| 19:18:39 | 225 | 23 | sell 0.005 SOL → vRseBFqTy9QLmmo5qGiwo74AVpdqqMTnxPqWoWMpump | filled | 6s | 1 |  |
| 19:18:46 | 226 | 23 | sell 23.9 vRseBFqTy9QLmmo5qGiwo74AVpdqqMTnxPqWoWMpump → SOL | filled | 12s | 1 |  |
| 19:18:10 | 227 | 24 | sell 0.005 SOL → 3P6WB3hifQ9Z38Ja5qNuaETkgstJUWmP6vf58aYupump | failed | 35s | 1 | main expired |
| 19:18:45 | 228 | 24 | sell 32.6 3P6WB3hifQ9Z38Ja5qNuaETkgstJUWmP6vf58aYupump → SOL | failed | 43s | 1 | acquire 3P6WB3hifQ9Z38Ja5qNuaETkgstJUWmP6vf58aYupump expired |
| 19:18:52 | 229 | 25 | sell 0.005 SOL → TSPXcLV76s6V2zDiZQ18kBfcbnjaE2ZzNT3ga2Pd99v | filled | 9s | 1 |  |
| 19:19:01 | 230 | 25 | sell 0.000875 TSPXcLV76s6V2zDiZQ18kBfcbnjaE2ZzNT3ga2Pd99v → SOL | filled | 8s | 1 |  |
| 19:17:59 | 231 | 26 | sell 0.005 SOL → 4SoQ8UkWfeDH47T56PA53CZCeW4KytYCiU65CwBWoJUt | failed | 37s | 1 | main expired |
| 19:18:36 | 232 | 26 | sell 0.896 4SoQ8UkWfeDH47T56PA53CZCeW4KytYCiU65CwBWoJUt → SOL | failed | 41s | 1 | acquire 4SoQ8UkWfeDH47T56PA53CZCeW4KytYCiU65CwBWoJUt expired |
| 19:18:09 | 233 | 27 | sell 0.005 SOL → D6xWgRCSHoMEB5fqPwk3p6Stxirn5ytm2WwboSTTx4oE | filled | 24s | 1 |  |
| 19:18:33 | 234 | 27 | sell 709 D6xWgRCSHoMEB5fqPwk3p6Stxirn5ytm2WwboSTTx4oE → SOL | filled | 13s | 1 |  |
| 19:53:02 | 235 | 1 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 19:18:03 | 236 | 2 | sell 0.005 SOL → HTmQz7My6MehV7bjhJ6jde8nDND1yvsz68d24LP7YgUQ | failed | 2s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HTmQz7My6MehV7bjhJ6jde8nDND1yvsz68d24LP7YgUQ is unsupported: Token-2022 transfer fee |
| 19:19:04 | 237 | 3 | sell 0.005 SOL → 4MMQY9bwkxxTtsK3W227Q5ABT6yFY8Pmn9Ze7wmAXKY8 | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 4MMQY9bwkxxTtsK3W227Q5ABT6yFY8Pmn9Ze7wmAXKY8 is unsupported: Token-2022 transfer fee |
| 19:18:50 | 238 | 4 | sell 0.005 SOL → HuAXPyDWDaMYFKuwQHpqL1oPnj93zdzWmtvFGzCeCUa7 | failed | 1s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HuAXPyDWDaMYFKuwQHpqL1oPnj93zdzWmtvFGzCeCUa7 is unsupported: Token-2022 transfer fee |
| 19:17:58 | 239 | 5 | sell 0.005 SOL → 8RNUw4N655VSrZKuhGdywhbSMDTrheguFPfxbpE2NZHQ | failed | 1s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 8RNUw4N655VSrZKuhGdywhbSMDTrheguFPfxbpE2NZHQ is unsupported: Token-2022 transfer fee |
| 19:18:58 | 240 | 6 | sell 0.005 SOL → ZesMGYmokFiEuDvNzWeMhB7jxF6eUW8c512vwSKSTNK | failed | 1s | 0 | main error: 400 Bad Request: UnsupportedToken: Token ZesMGYmokFiEuDvNzWeMhB7jxF6eUW8c512vwSKSTNK is unsupported: Token-2022 transfer fee |
| 19:19:48 | 241 | 7 | sell 0.005 SOL → 72yxYmhLgDGwdyi2b9GjDynBB6VuG3kDxNKqDbzXh5bi | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 72yxYmhLgDGwdyi2b9GjDynBB6VuG3kDxNKqDbzXh5bi is unsupported: Token-2022 transfer fee |
| 19:52:57 | 242 | 8 | sell 0.005 SOL → 8t5C4AWDg4CroMChxdo7rG2e8nJM31QG2GG7Czx9X7x2 | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 8t5C4AWDg4CroMChxdo7rG2e8nJM31QG2GG7Czx9X7x2 is unsupported: Token-2022 transfer fee |
| 19:53:05 | 243 | 9 | sell 0.005 SOL → E4Ap4icMLwKot8rkkTbq5JkS5kZxt5XCE3yfxbzYBjHx | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token E4Ap4icMLwKot8rkkTbq5JkS5kZxt5XCE3yfxbzYBjHx is unsupported: Token-2022 transfer fee |
| 19:18:21 | 244 | 10 | sell 0.005 SOL → 7MCgYMzq3fov6oERdtTMAYbN2U9LZrrSYS1MBhjixZFr | failed | 1s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 7MCgYMzq3fov6oERdtTMAYbN2U9LZrrSYS1MBhjixZFr is unsupported: Token-2022 transfer fee |
| 19:52:57 | 245 | 11 | sell 0.005 SOL → 7ioeSgzfSKHMnpgfPpgRFsekMBGiu9oi6t6GeqYtNbbh | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 7ioeSgzfSKHMnpgfPpgRFsekMBGiu9oi6t6GeqYtNbbh is unsupported: Token-2022 transfer fee |
| 19:59:47 | 246 | 12 | sell 0.005 SOL → FjTfaSH861nVcbAxdFAHTvhoSL4kyR6wgTWynuJkapht | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token FjTfaSH861nVcbAxdFAHTvhoSL4kyR6wgTWynuJkapht is unsupported: Token-2022 transfer fee |
| 19:59:14 | 247 | 13 | sell 0.005 SOL → PrekqLJvJ3qVdXmBGDiexvwUTF4rLFDa6HWS4HJbw9S | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token PrekqLJvJ3qVdXmBGDiexvwUTF4rLFDa6HWS4HJbw9S is unsupported: Token-2022 transfer fee |

### Rows without an order

14 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| UnsupportedToken | main | 13 | SOL → SI, SOL → GP, SOL → ALLINU, SOL → MASK, SOL → PURR, SOL → 🎒, SOL → WOW, SOL → SNDK, SOL → BTC, SOL → POLLY, SOL → CURVE, SOL → DIVI, SOL → NEURALINK | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| BlockhashExpired | main | 1 | SOL → LIKE | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 241 (199 main, 42 acquire). Cleanup placed 76 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 20:11:33 | 5 | PYTHIA → SOL (native) | Executed | `0x17ba6975…` [🐞](https://debug.cow.fi/order/0x17ba6975b4fc5c34a83fa9365e18f344b894213b029fd7d856acbffc22e64d78) |
| 20:11:33 | 5 | CHILLGUY → SOL (native) | Executed | `0x245bea95…` [🐞](https://debug.cow.fi/order/0x245bea9525a6d01422b6c4d9f5790e43a26857e837bb8442a3bed0eaef652503) |
| 20:11:34 | 5 | DRAM → SOL (native) | Executed | `0x81b2ef7b…` [🐞](https://debug.cow.fi/order/0x81b2ef7b35e3ece64ee6a1a4558b625cd19ea84ce323cb117bb92596c1ff3a87) |
| 20:11:34 | 5 | RKLB → SOL (native) | Executed | `0x61ebeb8e…` [🐞](https://debug.cow.fi/order/0x61ebeb8ebabc384f65f644e65d385a80046fd5da4e9cba20f328a289b3ad3b9d) |
| 20:11:34 | 5 | SKHY → SOL (native) | Executed | `0x8b1e5e48…` [🐞](https://debug.cow.fi/order/0x8b1e5e482242d558e3dbc5006fc10766a7941ef7ab25b1170a7edf209382a701) |
| 20:11:35 | 5 | e/acc → SOL (native) | Executed | `0x4e02b125…` [🐞](https://debug.cow.fi/order/0x4e02b1252ae7107b7cee26f05633b1166b0333002477632eeaca661a9e2e4bfe) |
| 20:11:35 | 4 | MF → SOL (native) | Executed | `0x95fb87f9…` [🐞](https://debug.cow.fi/order/0x95fb87f97c46ee555b1f6c2e1cd12bec018befe0393303324f4e16282dd117e1) |
| 20:11:35 | 4 | CODEC → SOL (native) | Executed | `0x743e4155…` [🐞](https://debug.cow.fi/order/0x743e415513e9f7aa1f72305975989387ad0709f2ac9f34ae051496c5359be35d) |
| 20:11:36 | 4 | baton → SOL (native) | Executed | `0x548b4c50…` [🐞](https://debug.cow.fi/order/0x548b4c50426fa2d72380ed7b079e18b2895a0b407c18988fb7eb1185c041c436) |
| 20:11:36 | 3 | COCKROACH → SOL (native) | Executed | `0x95c2a9b8…` [🐞](https://debug.cow.fi/order/0x95c2a9b8e767832e31aaf5a60031daf6b793da24182f616be4647ae6c0a8571d) |
| 20:11:36 | 3 | BURNIE → SOL (native) | Executed | `0xf6ec43c0…` [🐞](https://debug.cow.fi/order/0xf6ec43c0f16c763ae306d8ee06eb2f101ac5d54719130b4ba15626a6578d8c65) |
| 20:11:37 | 3 | URA → SOL (native) | Executed | `0xad978f24…` [🐞](https://debug.cow.fi/order/0xad978f246a972e1abdc21d8255d70adec865241af6ca277508b44f241414a4be) |
| 20:11:37 | 6 | PEAQ → SOL (native) | Executed | `0xbcd98bf6…` [🐞](https://debug.cow.fi/order/0xbcd98bf685abf1f8cf98df06e156c65ccf24547204e5611dfa17fd76adb3bb1a) |
| 20:11:38 | 6 | HODL → SOL (native) | Executed | `0x5f8f6d3c…` [🐞](https://debug.cow.fi/order/0x5f8f6d3c211276d6e285c9d378716045b4aefb8aaf6da9b7ba40bb746338ae29) |
| 20:11:38 | 7 | HAMMY → SOL (native) | Executed | `0x4fdb0c65…` [🐞](https://debug.cow.fi/order/0x4fdb0c65598f7ff596688a056f7db67b2c3c792d0d9d2e6788c0b2f9ff925407) |
| 20:11:39 | 7 | CHILLHOUSE → SOL (native) | Executed | `0xf9df00d2…` [🐞](https://debug.cow.fi/order/0xf9df00d2dac354eacd92b7e3d3230b03a741b82d1ba778d7c8f605143df7c917) |
| 20:11:39 | 7 | READY → SOL (native) | Executed | `0x030ce65b…` [🐞](https://debug.cow.fi/order/0x030ce65b68ee5d7e50028c1d417fd42bcb06801643ccb623db6eeab28193ee04) |
| 20:11:39 | 7 | Agency → SOL (native) | Executed | `0x11115533…` [🐞](https://debug.cow.fi/order/0x111155335e72d25c3d0b4e38a6f346c7970d517b00f079f3e458b4de7d565d8d) |
| 20:11:39 | 8 | GP → SOL (native) | Executed | `0x28c04c05…` [🐞](https://debug.cow.fi/order/0x28c04c054dc417847bdce88847b1f6f2bf4ecb0da105abd11bf2c0ec98c52916) |
| 20:11:40 | 8 | Anon → SOL (native) | Executed | `0x35322acc…` [🐞](https://debug.cow.fi/order/0x35322acc2a098ad077c74e3a4e69876623249748c511eba04351d516a3b16f27) |
| 20:11:40 | 8 | GRIFFAIN → SOL (native) | Executed | `0x41a0222a…` [🐞](https://debug.cow.fi/order/0x41a0222a942315f2abda473ff3aa4288abfbbeca45a7612271b69eb5d0025d44) |
| 20:11:40 | 9 | dreams → SOL (native) | Executed | `0x6c4530d4…` [🐞](https://debug.cow.fi/order/0x6c4530d46fc5162445bd829d72ee14c78678f5127de1fcf3c5f1dddb0b1ce707) |
| 20:11:41 | 9 | $BEER → SOL (native) | Executed | `0xc14652b3…` [🐞](https://debug.cow.fi/order/0xc14652b352cc542bb5bc598cecba91b924407a1b24633b752230c86af8b5634e) |
| 20:11:41 | 9 | lanternSOL → SOL (native) | Executed | `0x5fbe293b…` [🐞](https://debug.cow.fi/order/0x5fbe293b426ffa6432631213f22429cfd9f67c20d719b6d8e1d8134e544015fa) |
| 20:11:41 | 10 | $HACHI → SOL (native) | Executed | `0x9d2ed26e…` [🐞](https://debug.cow.fi/order/0x9d2ed26eb114cb75aaafe0dc83b7ae59756a692d2e02f1cbe0547d424eff240b) |
| 20:11:41 | 10 | CRED → SOL (native) | Executed | `0x1e922594…` [🐞](https://debug.cow.fi/order/0x1e922594ef19d5829b30055123b789a14b2fda63c98ad1631895560b28a73552) |
| 20:11:41 | 10 | knightcat → SOL (native) | Executed | `0x4777f9fa…` [🐞](https://debug.cow.fi/order/0x4777f9fa2e2599398d2d3c045d31517653c6ad77b8e9e119963ce74e3fb7c219) |
| 20:11:41 | 10 | SNDK → SOL (native) | Executed | `0x671540fa…` [🐞](https://debug.cow.fi/order/0x671540fa6a5c5bd87ea7bab950ef010a579689bbb19e3fd2e47b342de20e7a82) |
| 20:11:42 | 2 | arc → SOL (native) | Executed | `0x55eb4751…` [🐞](https://debug.cow.fi/order/0x55eb4751143ed94b8a6f1e589a3bf2869440efe29ed275475f8562ad69518a40) |
| 20:11:42 | 2 | ZERO → SOL (native) | Executed | `0x4a554cf6…` [🐞](https://debug.cow.fi/order/0x4a554cf607bcd3e4ceb1505f9d11fb005e0e8251cdac24521eb490e989e6f093) |
| 20:11:42 | 1 | SHIB → SOL (native) | Executed | `0x298402b5…` [🐞](https://debug.cow.fi/order/0x298402b5318b8b89b5c4d0644a36664f7bb49d868e25a592a56e6b28017ae691) |
| 20:11:42 | 1 | PAID → SOL (native) | Executed | `0xd9c4119f…` [🐞](https://debug.cow.fi/order/0xd9c4119f8b0b12d2963a1a7491458d756e829359dfa916e297907e08381faeee) |
| 20:16:04 | 11 | ALPHA → SOL (native) | Executed | `0xdc34b848…` [🐞](https://debug.cow.fi/order/0xdc34b848d3a57f86c1275bcb069dc7da26212e5f9c646636536172099b764977) |
| 20:16:06 | 11 | DOOD → SOL (native) | Executed | `0x986921a4…` [🐞](https://debug.cow.fi/order/0x986921a424f169734ba9281850ff5aa2cd3b4b9fc2ce37d0f1961a3682abcc2e) |
| 20:16:06 | 11 | LMAO! → SOL (native) | Executed | `0x6361907d…` [🐞](https://debug.cow.fi/order/0x6361907d2642ac6069d24a3d3cf337909cc533f2819e119823932e37bf9d677a) |
| 20:16:08 | 12 | TAI → SOL (native) | Executed | `0x865f80a0…` [🐞](https://debug.cow.fi/order/0x865f80a0c286098431c7fd23e53bd049cfc50ac5559887dff55a5525f22af5cb) |
| 20:16:08 | 12 | ATR → SOL (native) | Executed | `0x66d9b6fc…` [🐞](https://debug.cow.fi/order/0x66d9b6fc8c36a6dbaf82fa836df44dd2fd0af83a66449d63008d6581ae8b4230) |
| 20:16:09 | 12 | Percolator → SOL (native) | Executed | `0xa0baf09d…` [🐞](https://debug.cow.fi/order/0xa0baf09d7a77497f10a6a6f1b07f759531e59d29c48bc912f82493c6ab9b923d) |
| 20:16:09 | 13 | mini → SOL (native) | Executed | `0x0dde3f35…` [🐞](https://debug.cow.fi/order/0x0dde3f35f3e75f47f1400818177174b475dbf35f2406487b06adfe360850bfb0) |
| 20:16:09 | 13 | DOLAN → SOL (native) | Executed | `0x82034951…` [🐞](https://debug.cow.fi/order/0x8203495172a88a108b8f493a762204623357533add1bed3b9f58024240c7bee3) |
| 20:16:10 | 13 | Cupsey → SOL (native) | Executed | `0x36bc340f…` [🐞](https://debug.cow.fi/order/0x36bc340ffb8eaef1694ed69895fa9406f5913da3a112a0f66c7adf192fb46362) |
| 20:16:10 | 13 | ORCA → SOL (native) | Executed | `0x91ee75ce…` [🐞](https://debug.cow.fi/order/0x91ee75ceabc38076ebec3c325508092fc370ca1e48cf4d5b6a4e4f1fa686c4ea) |
| 20:16:17 | 14 | GOR → SOL (native) | Executed | `0xae8f5e49…` [🐞](https://debug.cow.fi/order/0xae8f5e499f4278785526a1057ada8a4d8375c4248d652d5729e33b078ce4a10e) |
| 20:16:18 | 14 | USDv → SOL (native) | Executed | `0xcd5922f2…` [🐞](https://debug.cow.fi/order/0xcd5922f2e8c2d1698b051f98c6a4113068b161eb6f6ce9bdd6e19856d66513e4) |
| 20:16:21 | 15 | EDEL → SOL (native) | Executed | `0xfcee21e0…` [🐞](https://debug.cow.fi/order/0xfcee21e006d40be23c9342ce2759ddb850a85e7197f88481d3c8876cf1df75f2) |
| 20:16:21 | 15 | HUMA → SOL (native) | Executed | `0x24ccf09e…` [🐞](https://debug.cow.fi/order/0x24ccf09e0d6d981f1bafaa0a95a7447e42c6b3f64af0949630ba5cc2befe79e0) |
| 20:16:22 | 15 | DITH → SOL (native) | Executed | `0xd17a4344…` [🐞](https://debug.cow.fi/order/0xd17a434449134f6a980a25745fd6470134327d1cf3408063df7b53a97a9b098c) |
| 20:16:22 | 15 | Tokabu → SOL (native) | Executed | `0xbde214f0…` [🐞](https://debug.cow.fi/order/0xbde214f025fa3f8411d458381da9712bcc00be9d1b574fe8cb61d241a9c1d359) |
| 20:16:22 | 15 | ELON → SOL (native) | Executed | `0x53c36ed0…` [🐞](https://debug.cow.fi/order/0x53c36ed0692fec612a8854f83da8c1edb3349c3420e8872f2c20562857008c1b) |
| 20:16:23 | 15 | Chonketha → SOL (native) | Executed | `0xb19d44e8…` [🐞](https://debug.cow.fi/order/0xb19d44e89a959ab9eb728149e93fc7239f50e4bf4d98346317e6754599741698) |
| 20:16:23 | 16 | ALCH → SOL (native) | Executed | `0xfa3ae2a9…` [🐞](https://debug.cow.fi/order/0xfa3ae2a9edc65df8e9b46331e8d958ef1763d458f0274d76de112ae2a15eb733) |
| 20:16:23 | 16 | META → SOL (native) | Executed | `0x07d7ac14…` [🐞](https://debug.cow.fi/order/0x07d7ac1469c7419b3a5d25cbd6324eeac4c47ce03d2319a2dd0a50233cb05398) |
| 20:16:24 | 16 | RUSH → SOL (native) | Executed | `0x34cdb622…` [🐞](https://debug.cow.fi/order/0x34cdb622ddef4b40593452096005f70b206c2c792d80351e4caeece22a9f1734) |
| 20:16:24 | 16 | ZAUTH → SOL (native) | Executed | `0xbf7369a7…` [🐞](https://debug.cow.fi/order/0xbf7369a79a2ae4c11530b2f65ecf52752a71801680182cbf5988faa1dc80e589) |
| 20:16:26 | 17 | Shoggoth → SOL (native) | Executed | `0x8aafc46d…` [🐞](https://debug.cow.fi/order/0x8aafc46db3fd1ef2a3a97b1e2b8656c77640526c6e2f6d4a6ff7bc6002242c7d) |
| 20:16:26 | 17 | BioLLM → SOL (native) | Executed | `0x6c03488d…` [🐞](https://debug.cow.fi/order/0x6c03488d0a393b44013c59ce36455fa15cd03e7eaa881dfe1b28cf4d65e654c5) |
| 20:16:29 | 18 | KINS → SOL (native) | Executed | `0x847e5257…` [🐞](https://debug.cow.fi/order/0x847e5257833311db67a050c2b141d5a43ee8c787a8d973005170a30722b4f265) |
| 20:16:29 | 18 | SI → SOL (native) | Executed | `0x59e2eb8e…` [🐞](https://debug.cow.fi/order/0x59e2eb8e690bcd4f8a38e51b27e919645aae4ad558d19577412ee1aaeefab8cb) |
| 20:16:30 | 19 | swordcat → SOL (native) | Executed | `0x05145f2d…` [🐞](https://debug.cow.fi/order/0x05145f2d057c684a1e558295938e744080e0bb39d9791ea82341e4ae7bfaf788) |
| 20:16:34 | 20 | CRAWL → SOL (native) | Executed | `0xf16de7dd…` [🐞](https://debug.cow.fi/order/0xf16de7dd5c94542637ffc7a0dcdc7856a1e544c58af397721c80f91c45c471c3) |
| 20:16:36 | 21 | darwin → SOL (native) | Executed | `0x7ab87370…` [🐞](https://debug.cow.fi/order/0x7ab8737008a44c47b1a76ef476c9808f044c55495f1611bc4fa5d478420d1f15) |
| 20:16:39 | 22 | Chud → SOL (native) | Executed | `0xbad5e820…` [🐞](https://debug.cow.fi/order/0xbad5e82026383d53ba0a64bd56fa2ed7335e77e0ee1ef28f3c0cbe0b30cde162) |
| 20:16:40 | 22 | sSOL → SOL (native) | Executed | `0xf31df8dc…` [🐞](https://debug.cow.fi/order/0xf31df8dcd5644ff5b3ee8f573c2ca858c5b8717b095ef71f92f08a7c54e83c63) |
| 20:16:40 | 22 | POD → SOL (native) | Executed | `0x1f87e77f…` [🐞](https://debug.cow.fi/order/0x1f87e77ffab3082ffbee13dcef8790a8ecc8a34120cb0596e5bdf336f6726335) |
| 20:16:40 | 22 | HIGGS → SOL (native) | Executed | `0x2f2e7749…` [🐞](https://debug.cow.fi/order/0x2f2e77491496be8682917d63a50a96598981e5df46b299df36228d6948cf79f6) |
| 20:16:41 | 23 | SI → SOL (native) | Executed | `0x92fef799…` [🐞](https://debug.cow.fi/order/0x92fef7990c04b73c3dd818c5b29b4bf0eb9686ff4a30c40f986686e99478fa02) |
| 20:16:45 | 24 | crypto → SOL (native) | Executed | `0xb1e5dc45…` [🐞](https://debug.cow.fi/order/0xb1e5dc45e1fc4a22a55ad1a1f2c2107038401bf8e0c6255f7ab4e8308dd47b3d) |
| 20:16:46 | 24 | Buttcoin → SOL (native) | Executed | `0x1466a92c…` [🐞](https://debug.cow.fi/order/0x1466a92c4ece2192d85cc06fc18a54cd8efef9e011a266ff8c023ba7bdfe2398) |
| 20:16:46 | 24 | CALI → SOL (native) | Executed | `0x397d82fc…` [🐞](https://debug.cow.fi/order/0x397d82fcd64f39f50fad0ba00b7bd77e1ded5df2f14a16973b0c4e4a74058144) |
| 20:19:10 | 27 | HNT → SOL (native) | Executed | `0x0fed37cd…` [🐞](https://debug.cow.fi/order/0x0fed37cddc28b00431fcba5a23e7a7a2b007cc64773fcc8dacc269f6615fbce0) |
| 20:19:10 | 27 | swarms → SOL (native) | Executed | `0x5a90af0c…` [🐞](https://debug.cow.fi/order/0x5a90af0cb147c6751175562a432ebf82defb1f2ed6c2a3b96d1efb32c12c9a6f) |
| 20:19:10 | 27 | Clude → SOL (native) | Executed | `0x33a1825c…` [🐞](https://debug.cow.fi/order/0x33a1825c641a0aaaf5daf20924e5f8cca3c8d4eff5cd25ec3b0240f7e55a7f5d) |
| 20:19:11 | 27 | TOAD → SOL (native) | Executed | `0x4d66740f…` [🐞](https://debug.cow.fi/order/0x4d66740f7d9141ac92a2b3dee22f5cb3bc51772290eb05c7eaff8c8d46e8d35e) |
| 20:19:15 | 29 | WOULD → SOL (native) | Executed | `0xd771c433…` [🐞](https://debug.cow.fi/order/0xd771c433d9f078b7385e47e065ba85bb666081a0a073da7d386aa47d8e0fae19) |
| 20:19:15 | 29 | OCTO → SOL (native) | Executed | `0xaa8a7c46…` [🐞](https://debug.cow.fi/order/0xaa8a7c46460e954c4794e9a8befd463557a3dcd5c768e11b177548fec2829df0) |
| 20:20:47 | 26 | SOLO → SOL (native) | Executed | `0x1e3bcba2…` [🐞](https://debug.cow.fi/order/0x1e3bcba27ea959f6fd90d768fb447ab0c67f310c769047ff19d7d42b699ce64f) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 170 | 70.5% |
| expired: never created on-chain (winner found, creation blockhash expired) | 71 | 29.5% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 5s | 7s | 10s | 51s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 28da…jxyN | 170 | 100.0% | 170 | 88,528 | 5s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 919 | 252 | 246 | 97.6% | 5 | 2 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 4 |
| jupiter-solve: PriorityFeeTooHigh | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 776 times
- Orders filtered for `in_flight`: 13 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0x8edb72fc822ff168ce66d6c4ade61567503f644242a62de5b35fbf6ea5560349`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 241 | 170 | 70.5% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → sUSDai | 2 | 0 | 0.0% |
| wSOL → PEPE | 2 | 1 | 50.0% |
| wSOL → biketyson | 2 | 0 | 0.0% |
| wSOL → pill | 2 | 0 | 0.0% |
| wSOL → MINI | 2 | 0 | 0.0% |
| wSOL → SI | 2 | 2 | 100.0% |
| wSOL → AUTON | 2 | 0 | 0.0% |
| wSOL → PAXG | 2 | 0 | 0.0% |
| wSOL → LUCKY99 | 2 | 0 | 0.0% |
| wSOL → TWEETCRAFT | 2 | 0 | 0.0% |
| SI → SOL (native) | 2 | 2 | 100.0% |
| wSOL → SHARTCOIN | 2 | 0 | 0.0% |
| wSOL → Human | 2 | 0 | 0.0% |
| wSOL → slopcannon | 2 | 2 | 100.0% |
| wSOL → STAR | 2 | 0 | 0.0% |
| wSOL → HOTBOT | 2 | 2 | 100.0% |
| wSOL → NFLX | 2 | 0 | 0.0% |
| wSOL → SV151 | 2 | 0 | 0.0% |
| wSOL → UDR | 2 | 0 | 0.0% |
| wSOL → FO | 2 | 1 | 50.0% |
| wSOL → GATO | 2 | 0 | 0.0% |
| wSOL → BLK | 2 | 0 | 0.0% |
| wSOL → MISTAKE | 2 | 2 | 100.0% |
| wSOL → Chiikawa | 2 | 0 | 0.0% |
| wSOL → MNT | 2 | 0 | 0.0% |
| wSOL → NFW | 2 | 0 | 0.0% |
| wSOL → X7 | 2 | 0 | 0.0% |
| wSOL → PLAGUE | 2 | 0 | 0.0% |
| wSOL → RACE | 2 | 0 | 0.0% |
| wSOL → KITTY | 2 | 0 | 0.0% |
| wSOL → STEALF | 2 | 0 | 0.0% |
| wSOL → RETARDIO | 2 | 0 | 0.0% |
| wSOL → CIGR | 2 | 0 | 0.0% |
| wSOL → GBACK | 2 | 2 | 100.0% |
| wSOL → STKESOL | 2 | 0 | 0.0% |
| wSOL → 114514 | 2 | 0 | 0.0% |
| wSOL → PsyopAnime | 2 | 2 | 100.0% |
| wSOL → Joby | 2 | 0 | 0.0% |
| wSOL → GTA | 2 | 0 | 0.0% |
| wSOL → world | 2 | 0 | 0.0% |
| wSOL → TCG | 2 | 0 | 0.0% |
| wSOL → WLD | 2 | 0 | 0.0% |
| wSOL → NYAN | 2 | 0 | 0.0% |
| wSOL → CATE | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| wSOL → wNEAR | 1 | 1 | 100.0% |
| wSOL → baton | 1 | 1 | 100.0% |
| wSOL → e/acc | 1 | 1 | 100.0% |
| wSOL → XMR | 1 | 1 | 100.0% |
| wSOL → Agency | 1 | 1 | 100.0% |
| wSOL → LIT | 1 | 1 | 100.0% |
| wSOL → DOGE | 1 | 1 | 100.0% |
| wSOL → ELON | 1 | 1 | 100.0% |
| wSOL → LBTC | 1 | 1 | 100.0% |
| wSOL → PRIME | 1 | 1 | 100.0% |
| wSOL → swordcat | 1 | 1 | 100.0% |
| wSOL → CRAWL | 1 | 1 | 100.0% |
| wSOL → HIGGS | 1 | 1 | 100.0% |
| wSOL → CRIME | 1 | 1 | 100.0% |
| wSOL → CALI | 1 | 1 | 100.0% |
| wSOL → TAO | 1 | 1 | 100.0% |
| wSOL → xBTC | 1 | 1 | 100.0% |
| wSOL → CTM | 1 | 1 | 100.0% |
| CRAWL → SOL (native) | 1 | 1 | 100.0% |
| CRIME → SOL (native) | 1 | 1 | 100.0% |
| CALI → SOL (native) | 1 | 1 | 100.0% |
| PAID → SOL (native) | 1 | 1 | 100.0% |
| wNEAR → SOL (native) | 1 | 1 | 100.0% |
| baton → SOL (native) | 1 | 1 | 100.0% |
| e/acc → SOL (native) | 1 | 1 | 100.0% |
| XMR → SOL (native) | 1 | 1 | 100.0% |
| Agency → SOL (native) | 1 | 1 | 100.0% |
| LIT → SOL (native) | 1 | 1 | 100.0% |
| DOGE → SOL (native) | 1 | 1 | 100.0% |
| ELON → SOL (native) | 1 | 1 | 100.0% |
| LBTC → SOL (native) | 1 | 1 | 100.0% |
| PRIME → SOL (native) | 1 | 1 | 100.0% |
| swordcat → SOL (native) | 1 | 1 | 100.0% |
| HIGGS → SOL (native) | 1 | 1 | 100.0% |
| TAO → SOL (native) | 1 | 1 | 100.0% |
| xBTC → SOL (native) | 1 | 1 | 100.0% |
| CTM → SOL (native) | 1 | 1 | 100.0% |
| wSOL → UNI | 1 | 1 | 100.0% |
| wSOL → SAPLING | 1 | 1 | 100.0% |
| wSOL → MORPHO | 1 | 1 | 100.0% |
| CATE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → nub | 1 | 1 | 100.0% |
| wSOL → MSTR | 1 | 1 | 100.0% |
| wSOL → COCKROACH | 1 | 1 | 100.0% |
| UNI → SOL (native) | 1 | 1 | 100.0% |
| SAPLING → SOL (native) | 1 | 1 | 100.0% |
| nub → SOL (native) | 1 | 1 | 100.0% |
| wSOL → knightcat | 1 | 1 | 100.0% |
| wSOL → SUI | 1 | 1 | 100.0% |
| wSOL → POD | 1 | 1 | 100.0% |
| wSOL → QNT | 1 | 1 | 100.0% |
| wSOL → HOOD | 1 | 1 | 100.0% |
| COCKROACH → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PONS | 1 | 1 | 100.0% |
| MORPHO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → AVAX | 1 | 1 | 100.0% |
| MSTR → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RAWR | 1 | 1 | 100.0% |
| knightcat → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PYTHIA | 1 | 1 | 100.0% |
| AVAX → SOL (native) | 1 | 1 | 100.0% |
| slopcannon → SOL (native) | 1 | 1 | 100.0% |
| POD → SOL (native) | 1 | 0 | 0.0% |
| HOOD → SOL (native) | 1 | 1 | 100.0% |
| wSOL → reUSD | 1 | 1 | 100.0% |
| wSOL → LMT | 1 | 1 | 100.0% |
| PYTHIA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → CX | 1 | 1 | 100.0% |
| RAWR → SOL (native) | 1 | 1 | 100.0% |
| SUI → SOL (native) | 1 | 1 | 100.0% |
| QNT → SOL (native) | 1 | 1 | 100.0% |
| wSOL → OGDOGE | 1 | 1 | 100.0% |
| wSOL → INTCx | 1 | 1 | 100.0% |
| CX → SOL (native) | 1 | 1 | 100.0% |
| reUSD → SOL (native) | 1 | 1 | 100.0% |
| PONS → SOL (native) | 1 | 1 | 100.0% |
| LMT → SOL (native) | 1 | 1 | 100.0% |
| OGDOGE → SOL (native) | 1 | 1 | 100.0% |
| INTCx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PENGUIN | 1 | 1 | 100.0% |
| wSOL → Machi | 1 | 1 | 100.0% |
| PENGUIN → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GEOM | 1 | 1 | 100.0% |
| PEPE → SOL (native) | 1 | 1 | 100.0% |
| HOTBOT → SOL (native) | 1 | 1 | 100.0% |
| Machi → SOL (native) | 1 | 1 | 100.0% |
| MISTAKE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Ban | 1 | 1 | 100.0% |
| wSOL → jellyjelly | 1 | 1 | 100.0% |
| wSOL → darwin | 1 | 1 | 100.0% |
| wSOL → BLUAI | 1 | 1 | 100.0% |
| wSOL → OCTO | 1 | 1 | 100.0% |
| wSOL → PYBOBO | 1 | 1 | 100.0% |
| Ban → SOL (native) | 1 | 1 | 100.0% |
| jellyjelly → SOL (native) | 1 | 1 | 100.0% |
| GEOM → SOL (native) | 1 | 1 | 100.0% |
| darwin → SOL (native) | 1 | 1 | 100.0% |
| OCTO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → LIKE | 1 | 1 | 100.0% |
| wSOL → FTX Token | 1 | 1 | 100.0% |
| wSOL → ONDO | 1 | 1 | 100.0% |
| BLUAI → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BELIEVE | 1 | 1 | 100.0% |
| wSOL → DOGE-1 | 1 | 1 | 100.0% |
| ONDO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → WOULD | 1 | 1 | 100.0% |
| wSOL → testicle | 1 | 1 | 100.0% |
| wSOL → FARTBOY | 1 | 1 | 100.0% |
| wSOL → COST | 1 | 1 | 100.0% |
| wSOL → MORI | 1 | 1 | 100.0% |
| WOULD → SOL (native) | 1 | 1 | 100.0% |
| FTX Token → SOL (native) | 1 | 1 | 100.0% |
| BELIEVE → SOL (native) | 1 | 1 | 100.0% |
| FO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → AVA | 1 | 1 | 100.0% |
| LIKE → SOL (native) | 1 | 1 | 100.0% |
| DOGE-1 → SOL (native) | 1 | 1 | 100.0% |
| FARTBOY → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HeavyPulp | 1 | 1 | 100.0% |
| testicle → SOL (native) | 1 | 1 | 100.0% |
| PYBOBO → SOL (native) | 1 | 1 | 100.0% |
| wSOL → WSOLP | 1 | 1 | 100.0% |
| wSOL → Verse | 1 | 1 | 100.0% |
| AVA → SOL (native) | 1 | 1 | 100.0% |
| wSOL → INTC | 1 | 1 | 100.0% |
| wSOL → USDu | 1 | 1 | 100.0% |
| MORI → SOL (native) | 1 | 1 | 100.0% |
| COST → SOL (native) | 1 | 1 | 100.0% |
| HeavyPulp → SOL (native) | 1 | 1 | 100.0% |
| WSOLP → SOL (native) | 1 | 1 | 100.0% |
| Verse → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BioLLM | 1 | 1 | 100.0% |
| GBACK → SOL (native) | 1 | 1 | 100.0% |
| wSOL → RIV | 1 | 1 | 100.0% |
| wSOL → tSpaceX | 1 | 1 | 100.0% |
| INTC → SOL (native) | 1 | 1 | 100.0% |
| BioLLM → SOL (native) | 1 | 1 | 100.0% |
| RIV → SOL (native) | 1 | 1 | 100.0% |
| USDu → SOL (native) | 1 | 1 | 100.0% |
| tSpaceX → SOL (native) | 1 | 1 | 100.0% |
| PsyopAnime → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ALLINDOGE | 1 | 1 | 100.0% |
| wSOL → MOS | 1 | 1 | 100.0% |
| wSOL → Chonketha | 1 | 1 | 100.0% |
| ALLINDOGE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BMT | 1 | 1 | 100.0% |
| Chonketha → SOL (native) | 1 | 1 | 100.0% |
| BMT → SOL (native) | 1 | 1 | 100.0% |
| MOS → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MUSHU | 1 | 1 | 100.0% |
| MUSHU → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Punch | 1 | 1 | 100.0% |
| Punch → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 10 | 8 | 80.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 9 | 7 | 77.8% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 9 | 6 | 66.7% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 9 | 7 | 77.8% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 9 | 9 | 100.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 9 | 6 | 66.7% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 8 | 8 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 8 | 6 | 75.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 8 | 6 | 75.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 8 | 8 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 8 | 6 | 75.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 8 | 4 | 50.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 8 | 4 | 50.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 8 | 4 | 50.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 8 | 0 | 0.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 8 | 8 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 8 | 2 | 25.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 8 | 4 | 50.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 8 | 6 | 75.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 8 | 6 | 75.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 8 | 6 | 75.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 8 | 6 | 75.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 8 | 7 | 87.5% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 8 | 6 | 75.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 8 | 8 | 100.0% |
| `Dy1CJYGtZBZBsAqe13BPSYqDy1pyrThHBi6g2zTVASd1` | 8 | 6 | 75.0% |
| `4SqtvDu46EtUmHrpwzvvzqUtA8FJD7tY3baar9XQU33g` | 8 | 8 | 100.0% |
| `5akdWDVyHEWgFASL9q18W1wvJcy546hL4EGfPF6Hiwrd` | 6 | 4 | 66.7% |
| `7wPqkLkFafKQZEkqFhbCP2c9vapCvxmbM7AcKRgMT8u6` | 6 | 4 | 66.7% |
| `AEZeUZRrPrAJ94wX66QCy4hwNYQyM4SR9tzQzUjg7UPX` | 6 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 71 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 19:16:45 | wSOL → sUSDai | market sell | Winner too late: creation blockhash expired | `0x1d1a2fa6…` [🐞](https://debug.cow.fi/order/0x1d1a2fa6aacb9d7a44d2deb189798aa756d9694ef9bc69f274929688835e5ddc) |
| 19:16:45 | wSOL → PEPE | market sell | Winner too late: creation blockhash expired | `0x22fe053e…` [🐞](https://debug.cow.fi/order/0x22fe053ea6f9e73d7ae37e0f23b12915635d804f1848ea29445f8a8f76e70339) |
| 19:16:46 | wSOL → biketyson | market sell | Winner too late: creation blockhash expired | `0xf92f48f0…` [🐞](https://debug.cow.fi/order/0xf92f48f0357ac89a7c606c7da0c0a6ab10bbc66364e1c9b438882030493fe266) |
| 19:16:46 | wSOL → pill | market sell | Winner too late: creation blockhash expired | `0x9a6ab47e…` [🐞](https://debug.cow.fi/order/0x9a6ab47e031ad658198bef5fca8850980a7c11735e25b596937b8d8777e6e2e4) |
| 19:16:46 | wSOL → MINI | market sell | Winner too late: creation blockhash expired | `0x313066dd…` [🐞](https://debug.cow.fi/order/0x313066ddb34c3da7e98c63d05adc50978b02daa6da00dc2b24ede4e8f7543ebd) |
| 19:16:47 | wSOL → AUTON | market sell | Winner too late: creation blockhash expired | `0x981cce70…` [🐞](https://debug.cow.fi/order/0x981cce7074bf688b8088ffc823cfeb3576a696192c57e594822a88505e5cfd18) |
| 19:16:47 | wSOL → PAXG | market sell | Winner too late: creation blockhash expired | `0x53acd28a…` [🐞](https://debug.cow.fi/order/0x53acd28a73dcabbe68cb7275d502ba77308847dd7351262b9604e1cb9395d41b) |
| 19:16:48 | wSOL → LUCKY99 | market sell | Winner too late: creation blockhash expired | `0x7eba6252…` [🐞](https://debug.cow.fi/order/0x7eba6252ce11390d591fb035b5da8a86ee95fc01431920f6bdfbe9677755aa2a) |
| 19:16:48 | wSOL → TWEETCRAFT | market sell | Winner too late: creation blockhash expired | `0x18ac9065…` [🐞](https://debug.cow.fi/order/0x18ac9065138f847f7c801a483512cc3434d71f0a9def1f8f6e76c75623382f5e) |
| 19:17:02 | wSOL → SHARTCOIN | market sell | Winner too late: creation blockhash expired | `0x3d896c3e…` [🐞](https://debug.cow.fi/order/0x3d896c3eb6dbac65f7ffd152147cc8ca55d989d2c2013dde17fe90d9f9e2f6fd) |
| 19:17:02 | wSOL → Human | market sell | Winner too late: creation blockhash expired | `0x2a971eea…` [🐞](https://debug.cow.fi/order/0x2a971eea3f8024a870e8baadf8e18811adb912985a4a51075ec935bf8217f902) |
| 19:17:10 | wSOL → STAR | market sell | Winner too late: creation blockhash expired | `0xc991db37…` [🐞](https://debug.cow.fi/order/0xc991db37fb20c5c7063025213c58a4a64c36cdfe2d6e1b30d9d39f5903d3161b) |
| 19:17:13 | wSOL → NFLX | market sell | Winner too late: creation blockhash expired | `0xe6383231…` [🐞](https://debug.cow.fi/order/0xe63832318906ad5105dd73397bd57c21f7b6ee007486cc6aa2de885e768e3a36) |
| 19:17:14 | wSOL → SV151 | market sell | Winner too late: creation blockhash expired | `0x11732019…` [🐞](https://debug.cow.fi/order/0x117320190b6143afb5dfe99221500c528f3182021b9d34f99cf5b1bf20fd9871) |
| 19:17:18 | wSOL → UDR | market sell | Winner too late: creation blockhash expired | `0xfd042b05…` [🐞](https://debug.cow.fi/order/0xfd042b0532b92577014f389f2a8f9945138a559a3c0fd15bc495aeb674273f79) |
| 19:17:19 | wSOL → FO | market sell | Winner too late: creation blockhash expired | `0x704fbe14…` [🐞](https://debug.cow.fi/order/0x704fbe14a2dc5b54074c5cbd36f5d20679c153b86cabdcaa3990a2366748fca9) |
| 19:17:21 | wSOL → GATO | market sell | Winner too late: creation blockhash expired | `0x45b14d6e…` [🐞](https://debug.cow.fi/order/0x45b14d6e915980c2f0db75159af5bf1a148796078905278fa94d575a8185dcb7) |
| 19:17:26 | wSOL → BLK | market sell | Winner too late: creation blockhash expired | `0x0b9a4d8e…` [🐞](https://debug.cow.fi/order/0x0b9a4d8edda91a322230d1323f6e880b18c6a309fd2ecdd8cee25d32f569973c) |
| 19:17:27 | POD → SOL (native) | market sell | Winner too late: creation blockhash expired | `0xac224730…` [🐞](https://debug.cow.fi/order/0xac2247301d6c9640726610fe330db8172755aae1b8eb17f6a706cdd6882c8c74) |
| 19:17:28 | wSOL → biketyson | market sell | Winner too late: creation blockhash expired | `0xf4db749d…` [🐞](https://debug.cow.fi/order/0xf4db749df851dac9a22273f1cdf4e1053056313ccd2950203d1eac19ac7f710f) |
| 19:17:28 | wSOL → pill | market sell | Winner too late: creation blockhash expired | `0xe04528a4…` [🐞](https://debug.cow.fi/order/0xe04528a414c7e7c548f3577be476468f052d18ba22f867cb6a99cfa7692814af) |
| 19:17:29 | wSOL → MINI | market sell | Winner too late: creation blockhash expired | `0x6829ce91…` [🐞](https://debug.cow.fi/order/0x6829ce91dacf3522e8f2ce144d12b185653840f5c56a702d6cf5c44ff43602d4) |
| 19:17:29 | wSOL → AUTON | market sell | Winner too late: creation blockhash expired | `0x4cb84e43…` [🐞](https://debug.cow.fi/order/0x4cb84e436607293d785971929aa9258922c892eeb62fda1d233ed685439cf2c6) |
| 19:17:30 | wSOL → PAXG | market sell | Winner too late: creation blockhash expired | `0x63f16e89…` [🐞](https://debug.cow.fi/order/0x63f16e89f27c0cc703abba6701646ada16a26c45c3bd74d011c7229e29cc9f46) |
| 19:17:31 | wSOL → LUCKY99 | market sell | Winner too late: creation blockhash expired | `0xac917627…` [🐞](https://debug.cow.fi/order/0xac9176278dd5a784ba06dcbe09e46538cf8e6956f37fb36badd97715d6c81684) |
| 19:17:31 | wSOL → TWEETCRAFT | market sell | Winner too late: creation blockhash expired | `0xa9ce02bc…` [🐞](https://debug.cow.fi/order/0xa9ce02bc48d6dc7e7037fb86d29ecf992a64825064a1a9d97938277e77acb42d) |
| 19:17:32 | wSOL → sUSDai | market sell | Winner too late: creation blockhash expired | `0x265f05da…` [🐞](https://debug.cow.fi/order/0x265f05da91f62dc8450e92517772f5245dfe37f7c17718df29daaf93f0006fe2) |
| 19:17:43 | wSOL → SHARTCOIN | market sell | Winner too late: creation blockhash expired | `0x83684f3c…` [🐞](https://debug.cow.fi/order/0x83684f3c95c4682140b6c1bd4c999bc79582462151d61fb806ab70e129786231) |
| 19:17:43 | wSOL → Human | market sell | Winner too late: creation blockhash expired | `0xbb035db5…` [🐞](https://debug.cow.fi/order/0xbb035db5e55281afdd608cb98fa7931e85a526f81a85acc2770abd880dee0bb9) |
| 19:17:46 | wSOL → Chiikawa | market sell | Winner too late: creation blockhash expired | `0x2e2e3e06…` [🐞](https://debug.cow.fi/order/0x2e2e3e06b497c77cd5cc76da47290f25ca2ffda602956a111e7c4f9f14583078) |
| 19:17:54 | wSOL → NFLX | market sell | Winner too late: creation blockhash expired | `0xcfe6dc16…` [🐞](https://debug.cow.fi/order/0xcfe6dc16bc3b31115538ade3722077a66b73621890db470d424b89fcfbb71d63) |
| 19:17:55 | wSOL → STAR | market sell | Winner too late: creation blockhash expired | `0xdd25f25f…` [🐞](https://debug.cow.fi/order/0xdd25f25f200d6b2824d217dd0f6803a07f124904a70596e6826818100c1a284f) |
| 19:17:58 | wSOL → SV151 | market sell | Winner too late: creation blockhash expired | `0x9f216c98…` [🐞](https://debug.cow.fi/order/0x9f216c98b968c1cfb2e68241f9678dca8ae1dccf5bf7036ca9948b027b2a79dc) |
| 19:18:01 | wSOL → MNT | market sell | Winner too late: creation blockhash expired | `0x3e2ba3f4…` [🐞](https://debug.cow.fi/order/0x3e2ba3f4bc319a2696f37b8378b9cbb50e50e8cc623ace28e1ad60222161e0bb) |
| 19:18:01 | wSOL → NFW | market sell | Winner too late: creation blockhash expired | `0xf21df8a5…` [🐞](https://debug.cow.fi/order/0xf21df8a58fe93be97c235d65b423b4291fb47f084247de8e2ddbd49be782d42a) |
| 19:18:01 | wSOL → UDR | market sell | Winner too late: creation blockhash expired | `0x8648a6eb…` [🐞](https://debug.cow.fi/order/0x8648a6ebf741062517c9a331778707f9f1b3b9f9bd866e2c6c9cefdbc8814d9b) |
| 19:18:05 | wSOL → GATO | market sell | Winner too late: creation blockhash expired | `0x716f7059…` [🐞](https://debug.cow.fi/order/0x716f7059d0c216ddfe4c3f85bf1e1cde665796190e607f194258200131ad9da3) |
| 19:18:06 | wSOL → X7 | market sell | Winner too late: creation blockhash expired | `0xd540e4e6…` [🐞](https://debug.cow.fi/order/0xd540e4e610889d4d00250bb1891a171a8b75573ecc8f5916a98f3ef052a90401) |
| 19:18:06 | wSOL → PLAGUE | market sell | Winner too late: creation blockhash expired | `0x786da68a…` [🐞](https://debug.cow.fi/order/0x786da68a7e9012d185ebbf07bc90fb3380aef9d2feaaec5de385c7d9d01b2b5e) |
| 19:18:07 | wSOL → RACE | market sell | Winner too late: creation blockhash expired | `0x1b7c1e5b…` [🐞](https://debug.cow.fi/order/0x1b7c1e5b96e6cc4b98a7f788aee6a2c3b37b3e2b1efcf2d4803bc4d6b08adbbe) |
| 19:18:08 | wSOL → KITTY | market sell | Winner too late: creation blockhash expired | `0xe29cdffb…` [🐞](https://debug.cow.fi/order/0xe29cdffbc1c339683fbfb2fbeb8e21440cd8dc99ce621f2565feecdfd7230257) |
| 19:18:09 | wSOL → STEALF | market sell | Winner too late: creation blockhash expired | `0xf6b93c97…` [🐞](https://debug.cow.fi/order/0xf6b93c97984ab52382245062496d654296eaa11d2abea550e081918536b25974) |
| 19:18:10 | wSOL → RETARDIO | market sell | Winner too late: creation blockhash expired | `0x8b366ad2…` [🐞](https://debug.cow.fi/order/0x8b366ad2de0825cf41fde08aaacc0336c85e383449d4e2a753a96ad12fb6da18) |
| 19:18:10 | wSOL → BLK | market sell | Winner too late: creation blockhash expired | `0x5e98944a…` [🐞](https://debug.cow.fi/order/0x5e98944a6accd2b8bb858c64c6ba68c1af4ba5b53817b95c4ccb89731f7eb73f) |
| 19:18:12 | wSOL → CIGR | market sell | Winner too late: creation blockhash expired | `0xdddab041…` [🐞](https://debug.cow.fi/order/0xdddab04136b07ac2465c12dd4b5139bbbc660836ffddad27aa1a0f2b9f0be7ec) |
| 19:18:29 | wSOL → Chiikawa | market sell | Winner too late: creation blockhash expired | `0xb92f44e0…` [🐞](https://debug.cow.fi/order/0xb92f44e0eec4023b861de9646a2798c1f023621fdbccb9ba6f9db105268b925c) |
| 19:18:32 | wSOL → STKESOL | market sell | Winner too late: creation blockhash expired | `0x1e1c4d87…` [🐞](https://debug.cow.fi/order/0x1e1c4d8799e0fff4df49091cf18da0187fdacb25cd9edba7c1d596001bec8346) |
| 19:18:43 | wSOL → 114514 | market sell | Winner too late: creation blockhash expired | `0x3023ecf0…` [🐞](https://debug.cow.fi/order/0x3023ecf09aab6443b9935fbb26d7ddb559268bdd9a8ffd2574e523bab56b93d5) |
| 19:18:44 | wSOL → MNT | market sell | Winner too late: creation blockhash expired | `0x25dfce15…` [🐞](https://debug.cow.fi/order/0x25dfce15ab296cb47cdd990f7915d2809ed4847e2b2e4bf80e880e394510838e) |
| 19:18:45 | wSOL → NFW | market sell | Winner too late: creation blockhash expired | `0x1685d73e…` [🐞](https://debug.cow.fi/order/0x1685d73ef452e1d124fa82d84c8ba6424b8796ac6d398d122ef48a739cbd72b7) |
| 19:18:48 | wSOL → X7 | market sell | Winner too late: creation blockhash expired | `0x4b11b75f…` [🐞](https://debug.cow.fi/order/0x4b11b75facddb4d7f4dc24bfcdd22296f3349c7f51b555dde6f50d2c5a5334dd) |
| 19:18:48 | wSOL → PLAGUE | market sell | Winner too late: creation blockhash expired | `0xc8fb3e08…` [🐞](https://debug.cow.fi/order/0xc8fb3e0886c4e9b1108fd7429c3e8eceecff8cf8e9c5e0a4226a2389c59da043) |
| 19:18:49 | wSOL → RACE | market sell | Winner too late: creation blockhash expired | `0x990d83c7…` [🐞](https://debug.cow.fi/order/0x990d83c78db0f56c1b679ac1dde8121a9962964b775590b6d76cf1097637171b) |
| 19:18:50 | wSOL → KITTY | market sell | Winner too late: creation blockhash expired | `0x12e19da9…` [🐞](https://debug.cow.fi/order/0x12e19da9345474fe007d95e5ce7c2e1a3fd37e7c8a47c52043d9b5fad8baee78) |
| 19:18:51 | wSOL → STEALF | market sell | Winner too late: creation blockhash expired | `0xdf3b1bb8…` [🐞](https://debug.cow.fi/order/0xdf3b1bb8b4cf87b9df65ab81413ad8b89708eaaca4c5fcfc70f3876cf728c708) |
| 19:18:51 | wSOL → RETARDIO | market sell | Winner too late: creation blockhash expired | `0x721129b2…` [🐞](https://debug.cow.fi/order/0x721129b21e29615bbe3b6d0f93e5f5b11a2a905bd4fb493c002cd8051805a124) |
| 19:18:53 | wSOL → CIGR | market sell | Winner too late: creation blockhash expired | `0xe980049e…` [🐞](https://debug.cow.fi/order/0xe980049e90abfb15d92f6b8a75249f3757fc9966d8ccff6248cfa9808e62cdab) |
| 19:18:54 | wSOL → Joby | market sell | Winner too late: creation blockhash expired | `0x6ffa6d47…` [🐞](https://debug.cow.fi/order/0x6ffa6d4729c38b9f5aaf209a16361c2121d57cf1b1c48bf812b1b84fb85803ed) |
| 19:19:09 | wSOL → GTA | market sell | Winner too late: creation blockhash expired | `0x41ad87bd…` [🐞](https://debug.cow.fi/order/0x41ad87bd4578cbc59af4ee6246c8c97fdb558f59b7d9627f6409a296a3b66910) |
| 19:19:13 | wSOL → STKESOL | market sell | Winner too late: creation blockhash expired | `0x26441ceb…` [🐞](https://debug.cow.fi/order/0x26441ceb3b1d1c45f3da13029c58877ea535006b943fdc99fac1e321e97cfc28) |
| 19:19:24 | wSOL → 114514 | market sell | Winner too late: creation blockhash expired | `0xd512b255…` [🐞](https://debug.cow.fi/order/0xd512b255635044ef8a39a1d5682d9c18ad5b813060d9697445d1097a8ea1f15e) |
| 19:19:24 | wSOL → world | market sell | Winner too late: creation blockhash expired | `0xc41c6bea…` [🐞](https://debug.cow.fi/order/0xc41c6bea185534607f68ace5a3905cf52a60d9c72388b585366f7e2193a6df34) |
| 19:19:25 | wSOL → TCG | market sell | Winner too late: creation blockhash expired | `0x80bd0439…` [🐞](https://debug.cow.fi/order/0x80bd043970f279459a5e5f0dfe564527fdac18e02719300e5bbbe153c9d89be1) |
| 19:19:27 | wSOL → WLD | market sell | Winner too late: creation blockhash expired | `0x8e179016…` [🐞](https://debug.cow.fi/order/0x8e1790162ad2d33312e761aeeeb80adadb5ac1aea5f7f1beaf92f2989d36b399) |
| 19:19:36 | wSOL → Joby | market sell | Winner too late: creation blockhash expired | `0x7cf97780…` [🐞](https://debug.cow.fi/order/0x7cf977809629481979a2d6f15239cc79a039b5e43d7e14128266a825151b1afa) |
| 19:19:50 | wSOL → GTA | market sell | Winner too late: creation blockhash expired | `0x8fac6753…` [🐞](https://debug.cow.fi/order/0x8fac67531a9add4a24cc496a9ca1c0d9f056643ab01cc99475a2b65d423204c8) |
| 19:53:05 | wSOL → TCG | market sell | Winner too late: creation blockhash expired | `0xe6a5be88…` [🐞](https://debug.cow.fi/order/0xe6a5be88c961d96e15ff8ad0d11a5e3a7d22e2c4e20bb4f814080a858991c6b0) |
| 19:53:05 | wSOL → WLD | market sell | Winner too late: creation blockhash expired | `0x3c39b755…` [🐞](https://debug.cow.fi/order/0x3c39b7557959ec578f58637dac032bdafd97a38d074a1bbeabe141450c119262) |
| 19:53:05 | wSOL → world | market sell | Winner too late: creation blockhash expired | `0x58fa0518…` [🐞](https://debug.cow.fi/order/0x58fa0518fb7cd62ab77036ac26f32ef241583d541ac7426e923c1dbf3b13dd77) |
| 19:53:41 | wSOL → NYAN | market sell | Winner too late: creation blockhash expired | `0xf011b3d9…` [🐞](https://debug.cow.fi/order/0xf011b3d90bd1668125b18b2865cc650f930dc576dab8e05ecb1b5e5aaab37ee4) |
| 19:59:11 | wSOL → NYAN | market sell | Winner too late: creation blockhash expired | `0xba129c26…` [🐞](https://debug.cow.fi/order/0xba129c269a60f98b3ce840cd1245243b5fd8e5ec5a86ffc83ccd1cac4758374b) |
