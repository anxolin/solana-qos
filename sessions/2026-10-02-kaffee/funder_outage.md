# Funder outage: which never-created orders it explains

Funder (fee payer of sponsored creations): `6vFq2dRADQkpDAJK64Vm4JpEBygByRpjicwf4US9f9QW`

| Time (UTC) | Event |
|---|---|
| 13:10:37 | Last successful creation; balance drops to 0.0029 SOL (a creation needs ~0.0035: ATA rent 0.0015 + order PDA rent 0.002) |
| 13:12:30 → 13:25:21 | Driver `FailedToCreate`: `Transfer: insufficient lamports ~0.0007–0.0008, need 0.0015/0.0020`, and `InsufficientFundsForRent { account_index: 0 }` |
| 13:23–13:25 | 3 creation txs land on-chain and fail, paying fees (0.00079 → 0.00066 SOL) |
| 13:25:26 | Top-up +0.05 SOL |
| 13:26:04 | Top-up +1 SOL |

No sponsored creation succeeded between 13:10:37 and 13:25:26. Of the 19 orders
placed in that window, none executed: 18 expired and 1 was cancelled.

## The 61 orders never created on-chain

| Cause | Orders | Related to funder? |
|---|---|---|
| Funder `insufficient lamports` / rent error logged for the order | 11 | Yes (confirmed) |
| Placed during the outage; no creation attempt logged (6 had their winner skipped after the blockhash expired) | 9 | Yes (no creation could succeed then) |
| Creation tx rejected with `BlockhashNotFound` | 4 | No |
| Winner found, but the creation blockhash had already expired | 12 | No |
| No winning solution before the creation blockhash expired (~60–90s) | 25 | No |

**Related: 20. Not related: 41.**

Sources: driver `settle failed` errors joined to `settling orders` by auction/solution
(`logs/settle_failures.txt`), funder signatures and balances from RPC.

### Confirmed (funder error logged)

0x3e166e56, 0x789de6a6, 0xc3473c77, 0xe806e4ea, 0x65dcc90d, 0xfab21a5b, 0x8183ef7a,
0xf7cbdc7a, 0xff443cb4, 0xd4385101, 0x85796cc9

### Placed during the outage, no creation attempt logged

0x7b7c2d5a, 0x936ef044, 0x512bc543, 0xc3e1a235, 0x80bf628b, 0xd48da5ff, 0x0e1e8887,
0x79751ddc, 0x33f586df
