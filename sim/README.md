# sim: scripted Solana trade sessions

These commands play a CSV of trades on barn with up to N wallets derived from one mnemonic. They write a session folder that
`../qos.py` turns into a report, so the same scenario can be replayed before and after a backend change.

**This spends real SOL.** Barn trades mainnet assets.

## Setup

### 1. Create a wallet

```sh
cd ~/code/cow/solana-qos/sim && pnpm install
pnpm sim new-wallet          # prints a new 12-word mnemonic, the funder address and the first traders
```

- **One mnemonic covers every account.** Account 0 (`m/44'/501'/0'/0'`) is the **funder**, and trader *n* is account
  *n*. They're the same addresses Phantom or Solflare show if you import the mnemonic there.
- **Store the mnemonic in a password manager.** Anyone with it controls the funds.
- **Use a dedicated mnemonic for testing,** never your personal wallet.
- **Don't use `solana-keygen new` to make it.** Its printed pubkey is the seed's root key, not account 0, so you'd
  fund the wrong address. To reuse a mnemonic you already have, run `pnpm sim wallets` to see the right addresses.

### 2. Configure

Create `sim/.env`, which is git-ignored and loaded automatically by `pnpm sim`:

```sh
MNEMONIC="word1 word2 … word12"
RPC_URL="https://…"   # a paid RPC (Helius, Triton, QuickNode…); the public one rate-limits
```

Exported environment variables work too and take precedence. `SOLANA_RPC_URL` is accepted as an alias for `RPC_URL`.

### 3. Fund the funder

Send SOL from any wallet to the funder address. A session needs about `traders × --sol-funding-per-trader`, plus fees.
Most of it comes back at cleanup:
- 25 traders at 0.1 SOL is about 2.5 SOL
- the smoke test is about 0.1 SOL

Check the balances with:

```sh
pnpm sim wallets --traders 1-25
```

## Commands

```sh
# 1. Make a scenario (no wallet needed): 25 traders over 10 minutes, budgeted for 0.1 SOL each
pnpm sim generate-trade-session --traders 25 --duration 10 --sol-amount-per-trader 0.1 --seed 1 \
  --self-ratio 0.2 -o ../scenarios/kaffee-25x10.csv

# 2. Check it: quotes every row, shows funding and expected spend per trader, trades nothing
pnpm sim simulate-trade-session ../scenarios/kaffee-25x10.csv --dry-run

# 3. Play it: fund → trade → cleanup → report
pnpm sim simulate-trade-session ../scenarios/kaffee-25x10.csv --sol-funding-per-trader 0.1 --report

# Recover funds if a run was interrupted (or after --no-cleanup)
pnpm sim cleanup-trade-session --traders 1-25

# Addresses and balances
pnpm sim wallets --traders 1-25

# A new mnemonic for testing
pnpm sim new-wallet
```

### simulate-trade-session flags

| Flag | Default | |
|---|---|---|
| `--sol-funding-per-trader` | 0.1 | Each trader is topped up to this; traders already at it are skipped |
| `--max-total-sol` | 3 | Refuses to fund more than this in total |
| `--session` | `<date>-<scenario>` | Folder under `../sessions/` |
| `--max-retries` | 1 | Re-quote and retry an order that expires (new uid each time) |
| `--order-validity` | 300 | Order lifetime in seconds |
| `--slippage-bps` | quoted | Override the signed slippage |
| `--dry-run` | | Quote only |
| `--no-cleanup` | | Leave tokens and SOL in the trader wallets |
| `--report` | | Run `qos.py fetch` and `report` afterwards |
| `--env` | staging | `prod` must be passed explicitly |
| `-y` | | Skip the confirmation prompt |

## Scenario CSV

```
trader,time,type,amount,token,other_token,mode,note
1,0,sell,0.01,SOL,USDC,sponsored,swapper
2,90,buy,1,JUP,USDC,,rotator
```

| Column | Meaning |
|---|---|
| `trader` | Wallet number (1 = first account after the funder) |
| `time` | Seconds after the start when this trader begins the flow |
| `type` | `sell` or `buy` |
| `amount` | Amount of `token`, in human units |
| `token` | What `amount` refers to: the sell token for sells, the buy token for buys. A symbol from `universe.json` or `../tokens.json`, or an address. `SOL` is native SOL, `wSOL` the wrapped mint |
| `other_token` | The buy token for sells, the sell token for buys |
| `mode` | `sponsored` (default, gasless) or `self` (the trader pays fees and rent) |
| `note` | Free text (the generator writes the persona) |

Lines starting with `#` are comments.

## What a row does

1. **Acquire:** if the trader doesn't hold enough of the sell token, place a BUY of the missing amount, paid with SOL, and
   wait for it to fill. Buy rows acquire the quoted maximum sell amount plus 3%. Skipped when selling SOL.
2. **Main order:** placed as soon as the acquisition fills, then polled until fulfilled, expired or timed out.
   Expired orders are re-quoted and retried up to `--max-retries` times.

Rows for the same trader run in order, and a row waits for the trader's previous one. Different traders run in parallel.

Sponsored orders follow the orderbook's template:
- create the wSOL ATA, transfer and sync-native (only when selling SOL)
- approve the settlement state PDA
- create the buy ATA (paid by the funder; skipped for native SOL buys)
- `CreateOrder`

The backend's funder is the fee payer. Native SOL buys are sponsored when the deployment supports them
(services#4990). Otherwise they fall back to self-paid, and the journal records `forcedSelf`.

## Cleanup

For each trader:
1. Sell every token to native SOL (self-paid).
2. Unwrap wSOL and close empty token accounts.
3. Send `ReclaimOrder` for finished order PDAs (rent goes back to whoever paid it).
4. Sweep all SOL to the funder.

It's safe to re-run. Tokens with no route are reported and left behind.

## Output

`../sessions/<name>/`:
- `meta.json`: window and scenario
- `logs/seed_orders.txt`: every uid placed. `qos.py fetch` reads it.
- `sim/journal.jsonl`: one event per step: `placed`, `final` (status and seconds), `retry`, `place_error`, `row_failed`, `cleanup_done`

## Generator

- **Personas:** `swapper` (SOL ↔ stables), `degen` (memecoin buys and later sells), `rotator` (token → token, buys paid in
  USDC), `buyer` (buy orders). `--mix` picks the blend: `mixed`, `stables`, `memes` or `rotation`.
- **Prices:** from Jupiter for the tokens in `universe.json`.
- **Budget:** each trader's plan, including acquisitions, stays within `--sol-amount-per-trader` minus a 0.02 SOL
  reserve for fees and rent.
- **Holdings:** later rows sell what earlier rows bought.
- **Timing:**
  - flows for one trader are at least 75s apart
  - start times are random but fixed by `--seed`
  - every flow starts within `--duration`; the run itself lasts longer because of setup and cleanup

## Tests

`pnpm test` checks:
- wallet derivation against `solana-keygen`
- CSV validation and amount conversion
- generator rules: determinism, budget, spacing, native SOL payouts, and that a token is only sold after it was acquired

Never use the test mnemonic (`abandon … about`) for real funds: it's public.
