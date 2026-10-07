#!/usr/bin/env python3
"""Token-2022 scenarios, one per mint extension, from token-universe/universe.csv.

Picks the most traded tokens that carry each extension, sizes the rows from Jupiter prices and writes the CSVs plus
README.md next to this script. Rerun after `pnpm sim build-token-universe` to refresh.

    python3 scenarios/token-2022/generate.py [--min-volume 1e6] [--per-file 20]
"""
from __future__ import annotations

import argparse
import csv
import json
import math
import urllib.request
from datetime import date
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
SOL = "So11111111111111111111111111111111111111112"
DOCS = "https://solana.com/docs/tokens/extensions/"
SPL_DOCS = "https://www.solana-program.com/docs/token-2022/extensions"

SOL_IN = 0.01  # SOL sold into each token
SELL_BACK = 0.6  # share of it sold back to SOL; cleanup sells the rest
BUY_SOL = 0.004  # SOL worth of token bought back with a BUY (exact-out) row, when barn has a buy route
SELF_EVERY = 4  # every n-th token is self-paid, the rest sponsored
MIN_LIQUIDITY = 50_000
MIN_RECENT_SHARE = 0.05  # the last 30 days must carry this share of the 90-day volume: drops faded launches

# Every mint extension worth a file: what it does, where to read about it, how barn treats it.
# `match` picks the tokens from universe.csv's `extensions` column.
EXTENSIONS = [
    {
        "file": "metadata-only", "title": "Metadata only (metadata pointer + token metadata)",
        "match": lambda exts: not exts,
        "what": "Name, symbol and URI live on the mint itself instead of a separate Metaplex account. It doesn't touch "
                "transfers. The most common Token-2022 shape: pump.fun and most new launches.",
        "link": DOCS + "metadata",
        "barn": "Tradable.",
    },
    {
        "file": "transfer-hook-unset", "title": "Transfer hook, no hook program set",
        "match": lambda exts: "transferHook(none)" in exts,
        "what": "Every transfer calls a program the issuer chooses (allowlists, royalties, compliance). These mints carry "
                "the extension with no program set, so transfers behave normally, but the issuer can set one later.",
        "link": DOCS + "transfer-hook",
        "barn": "Tradable while unset. With a program set, every settlement transfer would run the issuer's code; "
                "no relevant token has one, so barn's handling of that is untested.",
    },
    {
        "file": "permanent-delegate", "title": "Permanent delegate",
        "match": lambda exts: "permanentDelegate(set)" in exts,
        "what": "An authority that can transfer or burn tokens from any account of this mint, forever: issuer "
                "clawback for regulated stablecoins and tokenized stocks.",
        "link": DOCS + "permanent-delegate",
        "barn": "Tradable. A risk rather than a blocker (BE-344): the issuer can move tokens out of the settlement buffer.",
    },
    {
        "file": "confidential-transfer", "title": "Confidential transfers",
        "match": lambda exts: "confidentialTransferMint" in exts,
        "what": "Accounts can opt in to encrypted balances and amounts, proved with zero-knowledge proofs. The public "
                "balance and plain transfers keep working, which is all settlement uses.",
        "link": DOCS + "confidential-transfer",
        "barn": "Tradable.",
    },
    {
        "file": "mint-close-authority", "title": "Mint close authority",
        "match": lambda exts: "mintCloseAuthority" in exts,
        "what": "An authority can close the mint account once supply is zero, to reclaim its rent. No effect on transfers.",
        "link": DOCS + "close-mint",
        "barn": "Tradable.",
    },
    {
        "file": "default-account-state", "title": "Default account state",
        "match": lambda exts: any(e.startswith("defaultAccountState") for e in exts),
        "what": "Sets the state new token accounts start in. `frozen` means the issuer must thaw each account before it "
                "can hold tokens (KYC gating). Every relevant mint uses `initialized`, so accounts work immediately.",
        "link": DOCS + "default-state",
        "barn": "Tradable when `initialized`. The backend's mint rules reject `frozen`: the settlement couldn't pay "
                "into a new account.",
    },
    {
        "file": "pausable", "title": "Pausable",
        "match": lambda exts: any(e.startswith("pausableConfig") for e in exts),
        "what": "An authority can pause every transfer, mint and burn of the token at once (an emergency stop, used by "
                "xStocks). All relevant mints are running.",
        "link": DOCS + "pausable",
        "barn": "Tradable while running. While paused, transfers fail, so orders can't settle until it resumes "
                "(untested: no relevant mint is paused).",
    },
    {
        "file": "scaled-ui-amount", "title": "Scaled UI amount",
        "match": lambda exts: "scaledUiAmountConfig" in exts,
        "what": "Displayed balances are the raw amount times a multiplier the issuer can change, to reflect stock splits "
                "and dividends (xStocks). Raw amounts on chain don't change. Watch the amounts: sim sizes rows in UI "
                "units from prices, so a multiplier far from 1 skews them (the 60% sell-back leaves room).",
        "link": DOCS + "scaled-ui-amount",
        "barn": "Tradable.",
    },
    {
        "file": "transfer-fee-zero", "title": "Transfer fee config at 0 bps",
        "match": lambda exts: "transferFeeConfig(0bps)" in exts,
        "what": "A transfer fee is configured but set to 0 bps, so recipients get the full amount. The fee authority can "
                "raise it; a new fee takes effect two epochs after it's set.",
        "link": DOCS + "transfer-fees",
        "barn": "Tradable since early Oct 2026 (rejected before). A fee raised later would make the token unsupported.",
    },
]
REJECTED = {
    "file": "transfer-fee-rejected", "title": "Transfer fee above 0 bps (expected rejections)",
    "match": lambda exts: any(e.startswith("transferFeeConfig(") and e != "transferFeeConfig(0bps)" for e in exts),
    "what": "Each transfer withholds a fee (in bps, up to a cap) in the recipient's account for the issuer to harvest. "
            "A settlement transfer would deliver less than the order was signed for.",
    "link": DOCS + "transfer-fees",
    "barn": "Rejected at the quote with UnsupportedToken. Every row is expected to fail, so nothing is spent.",
}
UNUSED = [  # extensions no relevant token carries: documented, nothing to test
    ("Interest-bearing", DOCS + "interest-bearing-tokens",
     "Displayed balance accrues interest at a rate the issuer sets; raw amounts don't change."),
    ("Non-transferable", SPL_DOCS + "#non-transferable-tokens",
     "Soulbound: tokens can't move after minting, so they can't be traded at all."),
    ("Transfer hook with a program set", DOCS + "transfer-hook",
     "Every transfer runs the issuer's program. Barn's handling is untested: no relevant token has one."),
    ("Group and member pointers", DOCS + "group-member",
     "Link a mint to a collection (like NFT collections). No effect on transfers. The universe hides them like metadata."),
]
ACCOUNT_LEVEL = [  # set on a holder's token account, not on the mint: not covered by these scenarios
    ("Immutable owner", DOCS + "immutable-owner", "Default on associated token accounts; nothing to test."),
    ("Required memo on transfer", DOCS + "memo-transfer", "Incoming transfers need a memo instruction first."),
    ("CPI guard", DOCS + "cpi-guard", "Limits what programs can do with the account through cross-program invocations."),
]


def load(min_volume: float) -> tuple[list[dict], dict]:
    rows = []
    for r in csv.DictReader(open(ROOT / "token-universe" / "universe.csv")):
        if r["program"] != "token-2022":
            continue
        r["vol"], r["liq"] = float(r["volume_90d_usd"] or 0), float(r["liquidity_usd"] or 0)
        r["vol30"] = float(r["volume_30d_usd"] or 0)
        r["exts"] = r["extensions"].split()
        rows.append(r)
    rows.sort(key=lambda r: -r["vol30"])  # most traded now first; 90-day volume favours launches that have since faded
    relevant = [r for r in rows if r["vol"] >= min_volume and r["liq"] >= MIN_LIQUIDITY and r["vol30"] >= MIN_RECENT_SHARE * r["vol"]]
    return relevant, prices([SOL] + [r["mint"] for r in relevant])


def prices(mints: list[str]) -> dict:
    out = {}
    for i in range(0, len(mints), 50):
        req = urllib.request.Request("https://lite-api.jup.ag/price/v3?ids=" + ",".join(mints[i:i + 50]),
                                     headers={"User-Agent": "solana-qos"})
        body = json.load(urllib.request.urlopen(req, timeout=30))
        out.update({k: v["usdPrice"] for k, v in body.items() if v and v.get("usdPrice")})
    return out


def sig(x: float, n: int = 3) -> str:
    d = n - 1 - math.floor(math.log10(x))
    return f"{round(x, d):.{max(d, 0)}f}".rstrip("0").rstrip(".") if d > 0 else str(int(round(x, d)))


def usd(v: float) -> str:
    return f"${v / 1e9:.1f}B" if v >= 1e9 else f"${v / 1e6:.1f}M" if v >= 1e6 else f"${v / 1e3:.0f}k"


def tradable(r: dict, px: dict) -> bool:
    """Supported by CoW (barn quotes it, CoinGecko lists it) and priced above zero on Jupiter."""
    return r["cow_supported"] == "true" and r["barn"] in ("tradable", "sell-only") and px.get(r["mint"], 0) > 0


def header(ext: dict, picked: list[dict], qualifying: int, min_volume: float, sol_usd: float, body: str) -> str:
    return "\n".join([
        f"Token-2022: {ext['title']}.",
        f"What it is: {ext['what']}",
        f"Read more: {ext['link']}",
        f"Barn: {ext['barn']}",
        f"Tokens: {len(picked)} of {qualifying} relevant ones, by 30-day volume. Relevant: 90-day DEX volume >= {usd(min_volume)}, "
        f"last 30 days >= {MIN_RECENT_SHARE:.0%} of it (still traded), liquidity >= {usd(MIN_LIQUIDITY)}, CoinGecko-listed, Jupiter price > 0.",
        body,
        f"Generated {date.today().isoformat()} from token-universe/universe.csv, sized at SOL ≈ ${sol_usd:.2f}. "
        "Regenerate: python3 scenarios/token-2022/generate.py",
    ])


def write(name: str, comment: str, lines: list[tuple]) -> None:
    with open(HERE / f"{name}.csv", "w") as f:
        for line in comment.split("\n"):
            f.write(f"# {line}\n")
        f.write("trader,time,type,amount,token,other_token,mode,note\n")
        for row in lines:
            f.write(",".join(str(x).replace(",", ";") for x in row) + "\n")


def round_trips(picked: list[dict], px: dict, first: int = 1, prefix: str = "") -> list[tuple]:
    lines = []
    for i, r in enumerate(picked, start=first):
        price_sol = px[r["mint"]] / px[SOL]
        mode = "self" if i % SELF_EVERY == 0 else "sponsored"
        bundle = " ".join(r["exts"]) or "metadata only"
        tag = f"{prefix}{r['symbol']} {usd(r['vol30'])}/30d"
        lines += [
            (i, 0, "sell", SOL_IN, "SOL", r["mint"], mode, f"{tag}: SOL to token [{bundle}]"),
            (i, 1, "sell", sig(SOL_IN * SELL_BACK / price_sol), r["mint"], "SOL", mode, f"{tag}: {SELL_BACK:.0%} back to SOL"),
        ]
        if r["barn"] == "tradable":
            lines.append((i, 2, "buy", sig(BUY_SOL / price_sol), r["mint"], "SOL", mode, f"{tag}: BUY (exact-out) paying SOL"))
    return lines


def funding(lines: list[tuple]) -> float:
    return 0.05 if any(l[2] == "buy" for l in lines) else 0.04


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--min-volume", type=float, default=1e6, help="minimum 90-day DEX volume in USD")
    ap.add_argument("--per-file", type=int, default=20, help="tokens per extension file")
    a = ap.parse_args()

    relevant, px = load(a.min_volume)
    sol_usd = px[SOL]
    index = []
    for ext in EXTENSIONS:
        candidates = [r for r in relevant if ext["match"](r["exts"])]
        ok = [r for r in candidates if tradable(r, px)]
        picked = ok[:a.per_file]
        lines = round_trips(picked, px)
        buys = sum(l[2] == "buy" for l in lines)
        body = (f"Each trader sells {SOL_IN} SOL into one token, then {SELL_BACK:.0%} of it back"
                f"{f'; {buys} tokens barn can also buy get a BUY (exact-out) row' if buys else ''}. "
                f"Every {SELF_EVERY}th trader is self-paid. Cleanup sells the rest.\n"
                f"Fund with --sol-funding-per-trader {funding(lines)}.")
        write(ext["file"], header(ext, picked, len(ok), a.min_volume, sol_usd, body), lines)
        index.append((ext, len(candidates), len(ok), picked))
        print(f"{ext['file']}.csv: {len(picked)} tokens ({len(ok)} qualify, {len(candidates)} relevant carry it)")

    # Expected rejections: every relevant token with a non-zero fee, quote-only, so all of them.
    rej = [r for r in relevant if REJECTED["match"](r["exts"])]
    lines = [(1, 0, "sell", 0.005, "SOL", r["mint"], "sponsored",
              f"{r['symbol']} {usd(r['vol30'])}/30d [{' '.join(r['exts'])}]: expected UnsupportedToken")
             for r in rej]
    body = "One trader quotes each token in turn. A row that gets past the quote means barn stopped rejecting that fee.\n" \
           "Fund with --sol-funding-per-trader 0.03."
    write(REJECTED["file"], header(REJECTED, rej, len(rej), a.min_volume, sol_usd, body).replace(
        ", CoinGecko-listed, Jupiter price > 0", ""), lines)
    index.append((REJECTED, len(rej), 0, rej))
    print(f"{REJECTED['file']}.csv: {len(rej)} tokens")

    # Token-2022 on both sides: sell one tradable Token-2022 token straight into another.
    t22 = [r for r in relevant if tradable(r, px)]
    pairs = [(t22[i], t22[i + 1]) for i in range(0, min(len(t22) - 1, 10), 2)]
    lines = []
    for i, (a_, b_) in enumerate(pairs, start=1):
        price_sol = px[a_["mint"]] / px[SOL]
        lines += [(i, 0, "sell", SOL_IN, "SOL", a_["mint"], "sponsored", f"setup: SOL to {a_['symbol']}"),
                  (i, 1, "sell", sig(SOL_IN * SELL_BACK / price_sol), a_["mint"], b_["mint"], "sponsored",
                   f"{a_['symbol']} to {b_['symbol']}: Token-2022 on both sides")]
    pair_ext = {"title": "Token-2022 to Token-2022", "what": "Both legs are Token-2022: the settlement transfers with "
                "the Token-2022 program on both sides, and the buy account is a Token-2022 account.",
                "link": DOCS.rstrip("/"), "barn": "Tradable when both tokens are."}
    write("token-2022-to-token-2022", header(pair_ext, [p for pr in pairs for p in pr], len(t22), a.min_volume, sol_usd,
          "Each trader buys the first token with SOL, then sells it straight into the second (the most traded tokens, paired).\n"
          "Fund with --sol-funding-per-trader 0.04."), lines)
    print(f"token-2022-to-token-2022.csv: {len(pairs)} pairs")

    # Smoke test: the two most traded tokens per extension, deduplicated, plus three expected rejections.
    seen, smoke = set(), []
    for ext, _, _, picked in index[:-1]:
        for r in [r for r in picked if r["mint"] not in seen][:2]:
            seen.add(r["mint"])
            smoke.append((ext["file"], r))
    lines = [l for i, (file, r) in enumerate(smoke, start=1) for l in round_trips([r], px, first=i, prefix=f"{file}: ")]
    n = len(smoke)
    for j, r in enumerate(rej[:3], start=n + 1):
        lines.append((j, 0, "sell", 0.005, "SOL", r["mint"], "sponsored",
                      f"transfer-fee-rejected: {r['symbol']} [{' '.join(r['exts'])}]: expected UnsupportedToken"))
    smoke_ext = {"title": "smoke test across every extension", "what": "The two most traded tokens of each extension file "
                 "(each token once), plus three tokens with a transfer fee that barn should reject. See README.md.",
                 "link": DOCS.rstrip("/"), "barn": "See each extension's file."}
    write("all", header(smoke_ext, [r for _, r in smoke], len(t22), a.min_volume, sol_usd,
          f"One trader per token: sell {SOL_IN} SOL in, {SELL_BACK:.0%} back, plus a BUY row where barn has a buy route.\n"
          "Fund with --sol-funding-per-trader 0.05."), lines)
    print(f"all.csv: {n} tokens + {min(3, len(rej))} expected rejections")

    readme(index, a.min_volume, sol_usd, len(relevant))


def readme(index: list, min_volume: float, sol_usd: float, relevant: int) -> None:
    out = ["# Token-2022 scenarios", "",
           "One scenario per mint extension, generated by `generate.py` from `token-universe/universe.csv` "
           f"({date.today().isoformat()}). A token is relevant with at least {usd(min_volume)} of 90-day DEX volume, of "
           f"which at least {MIN_RECENT_SHARE:.0%} in the last 30 days (so launches that have since died drop out), and "
           f"{usd(MIN_LIQUIDITY)} of liquidity ({relevant} Token-2022 tokens). Positive scenarios also need a CoinGecko "
           "listing and a Jupiter price above zero.", "",
           "Tokens carry extensions as bundles, so one token can show up in several files: xStocks carry pausable, "
           "scaled UI amount, default account state, permanent delegate, confidential transfers and an empty transfer "
           "hook; the stablecoins (USDG, PYUSD, CASH) add mint close authority and a 0-bps transfer fee.", "",
           "| Extension | What it does | Barn | Relevant tokens | Tested | File |", "|---|---|---|---:|---:|---|"]
    for ext, carry, ok, picked in index:
        out.append(f"| [{ext['title']}]({ext['link']}) | {ext['what']} | {ext['barn']} | {carry} | {len(picked)} | "
                   f"[{ext['file']}.csv]({ext['file']}.csv) |")
    out += ["", "Also: [`all.csv`](all.csv), a smoke test with the top two tokens per extension, and "
            "[`token-2022-to-token-2022.csv`](token-2022-to-token-2022.csv), Token-2022 on both sides of an order. "
            "And [`xstocks.csv`](xstocks.csv): every xStock (42 tokenized stocks and ETFs), hand-built, not regenerated by this script.", "",
            "## Extensions no relevant token uses", "",
            "Documented so they aren't missed; there's nothing liquid to test them with.", ""]
    out += [f"- [{n}]({l}): {d}" for n, l, d in UNUSED]
    out += ["", "## Account extensions", "",
            "These live on a holder's token account, not on the mint, so the token picks don't cover them.", ""]
    out += [f"- [{n}]({l}): {d}" for n, l, d in ACCOUNT_LEVEL]
    out += ["", "## Regenerate", "", "```",
            "cd sim && pnpm sim build-token-universe   # refresh token-universe/ (barn quotes, extensions, volume)",
            "cd .. && python3 scenarios/token-2022/generate.py [--min-volume 1e6] [--per-file 20]", "```", ""]
    (HERE / "README.md").write_text("\n".join(out))
    print("README.md")


if __name__ == "__main__":
    main()
