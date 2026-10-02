# VictoriaLogs queries (barn)

Run these with the CoW-Barn MCP (`victorialogs_query`) or the VictoriaLogs UI, with
`start`/`end` set to the session window. Save the results under
`sessions/<name>/logs/`.

All queries use `container:"solana-autopilot-staging"`.

## 1. Find the session window

Orders that entered an auction for the first time, in 30-minute buckets:

```
container:"solana-autopilot-staging" AND _msg:"new orders in auction" AND parsed.fields.added:!"[]"
| unroll by (parsed.fields.added)
| stats by (parsed.fields.added) min(_time) first_seen
| stats by (first_seen:30m) count() orders | sort by (first_seen)
```

## 2. `seed_orders.txt`: order UIDs (one per line)

```
container:"solana-autopilot-staging" AND _msg:"new orders in auction" AND parsed.fields.added:!"[]"
| unroll by (parsed.fields.added)
| stats by (parsed.fields.added) min(_time) first_seen
| sort by (first_seen) | format "<parsed.fields.added>" as u | fields u
```

Also add the orders that were always filtered (they never enter an auction):

```
container:"solana-autopilot-staging" AND _msg:"filtered orders" AND parsed.fields.reason:!"in_flight"
| unroll by (parsed.fields.orders) | stats by (parsed.fields.orders, parsed.fields.reason) count()
```

`qos.py fetch` expands the seeds to every order of the same owners in the window,
so the seeds don't need to be complete.

## 3. `creation_expired.txt`: sponsored orders whose creation tx expired

```
container:"solana-autopilot-staging" AND _msg:"sponsored creation expired, dropping the order"
| stats by (parsed.fields.order_uid) count() | format "<parsed.fields.order_uid>" as u | fields u
```

## 4. `competition.json`: per-driver competition stats

Counts per message, driver and solver:

```
container:"solana-autopilot-staging" AND _msg:in("proposed solution","winner","executing solution",
  "settlement submitted","settlement observed on chain","settlement rejected before submission",
  "settlement failed","settlement missed its deadline","solve failed","solve missed the deadline",
  "skipping winner, sponsored creations unavailable")
| stats by (_msg, parsed.fields.driver, parsed.fields.solver) count() n | sort by (_msg, n desc)
```

Error kinds:

```
container:"solana-autopilot-staging" AND _msg:in("settlement rejected before submission",
  "settlement failed","solve failed","skipping winner, sponsored creations unavailable")
| extract_regexp `kind\\":\\"(?P<kind>[A-Za-z]+)` from parsed.fields.err
| extract_regexp `Caused by:\s+(?P<cause>.+)` from parsed.fields.err
| stats by (_msg, parsed.fields.driver, kind, cause) count() n | sort by (_msg, n desc)
```

Driver name to solver pubkey (to fill `solvers.json`):

```
container:"solana-autopilot-staging" AND _msg:in("winner","executing solution")
| stats by (parsed.spans.auction.auction_id, parsed.fields.solution)
    max(parsed.fields.solver) solver, max(parsed.fields.driver) driver
| stats by (solver, driver) count() wins
```

Filter reasons:

```
container:"solana-autopilot-staging" AND _msg:in("sponsored creation expired, dropping the order","filtered orders")
| stats by (_msg, parsed.fields.reason) count() n
```

Copy the numbers into `competition.json`, using the same shape as
`sessions/2026-10-02-kaffee/logs/competition.json`.

## 5. Jupiter rate limiting

`jupiter_quotes.txt`: per-order Jupiter quote attempts, for orders that hit a rate limit:

```
container:"solana-jupiter-staging-solve" AND _msg:in("quote failed","solved","swap does not satisfy order","no solution for swap")
| format if (_msg:"quote failed") "1" as rl | format if (_msg:"solved") "1" as ok
| stats by (parsed.spans.solve.order) count() attempts, count(rl) rate_limited, count(ok) solved, min(_time) first, max(_time) last
| filter rate_limited:>0 | sort by (first)
| format "<parsed.spans.solve.order> <attempts> <rate_limited> <solved> <first> <last>" as l | fields l
```

`jupiter_quotes_timeline.json`: per-5-minute attempts by result:

```
container:"solana-jupiter-staging-solve" AND _msg:in("quote failed","solved","swap does not satisfy order","no solution for swap")
| stats by (_time:5m, _msg) count() n | sort by (_time)
```

Check that `quote failed` is only rate limiting:

```
container:~"solana-jupiter" AND _msg:"quote failed" | stats by (container, parsed.fields.err) count()
```
