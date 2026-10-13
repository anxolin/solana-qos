# Jupiter test errors

2026-10-13 · Production · 09:10–10:04 UTC · Session: `2026-10-13-09-10-composite-jupiter-run`.

**52 main requests failed: 50 quote rejections and 2 unfilled orders.** Quote/expiry/timeout ownership is unknown; these aren't confirmed Jupiter defects.

All 50 quote rejections returned **`404 Not Found: NoLiquidity: no route found`**, before placement, so they have no order links.

| Error | Affected requests / evidence | Final outcome |
| --- | --- | --- |
| xStock exact-output quotes | 41 buys; rows 115–128, 144–156, 172–185 | No route; not placed |
| Other exact-output quotes | USDG: rows 13, 14, 21, 22; CATE: 83; EUROP: 93; PAXG: 99 | 7 requests; not placed |
| xStock fixed-input quotes | SOL→PLTRx: row 106; SOL→TCENTx: 141 | 2 requests; not placed. PLTRx later acquired successfully, so its route failure wasn't persistent |
| Early expiry | Row 55: sell 0.00020765 SPYx→e/acc; [order](https://debug.cow.fi/order/0xc6f82275f5cf373b483a467718f1842f37286da57f1bfadd611073cd7ed6e619) | `main expired` after 35s, before signed expiry at 09:45:37 UTC; zero execution |
| Timeout | Row 85: sell 0.0025 SOL→PAXG; [order](https://debug.cow.fi/order/0x4d6049c8f8d9bc5fab1d3e8dae675d41e59915f028a0532dad48c1708b6f4498) | `main timeout` after 220s including cancellation; finally cancelled, zero execution |
| Rent reclaim | Same PAXG order, trader 48 | `Error processing Instruction 0: missing required signature for instruction`; client cleanup simulation failed and reclaim was skipped. **0.00199136 SOL** remained at the final chain check; full simulation logs were truncated |
| Missing production evidence | Configured queries and exact-order search returned no records; available Solana log containers were staging only | Can't confirm Jupiter participation or explain expiry/timeout from backend logs |

The runner completed without code changes. No cleanup section was deferred; the skipped rent reclaim is still outstanding.
