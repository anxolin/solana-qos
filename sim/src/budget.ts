import type { TradeRow } from "./scenario.js";
import { resolveMint } from "./tokens.js";
import { NATIVE_SOL, WSOL_MINT } from "./rpc.js";

/** Planning estimate supplied by the team; includes creation fees/rent, before refunds. */
export const ORDER_CREATION_LAMPORTS = 3_000_000n;

export function creationBudget(rows: TradeRow[], retries = 0, cleanup = true) {
  if (!Number.isInteger(retries) || retries < 0)
    throw new Error("--max-retries must be a non-negative integer");
  const attempts = retries + 1;
  const selfCosts = new Map<number, bigint>();
  const cleanupTokens = new Map<number, Set<string>>();
  let sponsoredCost = 0n;
  let acquisitions = 0;
  const add = (trader: number, mode: TradeRow["mode"], count: number) => {
    const cost = BigInt(count) * ORDER_CREATION_LAMPORTS;
    if (mode === "sponsored") sponsoredCost += cost;
    else selfCosts.set(trader, (selfCosts.get(trader) ?? 0n) + cost);
  };
  for (const row of rows) {
    const sell = resolveMint(row.type === "sell" ? row.token : row.otherToken);
    const buy = resolveMint(row.type === "sell" ? row.otherToken : row.token);
    const isSol = (mint: typeof sell) =>
      mint.equals(NATIVE_SOL) || mint.equals(WSOL_MINT);
    add(row.trader, row.mode, attempts);
    // Allow an acquisition for every non-SOL sell, even if earlier fills may supply it.
    if (!isSol(sell)) {
      acquisitions += attempts;
      add(row.trader, row.mode, attempts);
    }
    if (cleanup) {
      const tokens = cleanupTokens.get(row.trader) ?? new Set<string>();
      for (const mint of [sell, buy])
        if (!isSol(mint)) tokens.add(mint.toBase58());
      cleanupTokens.set(row.trader, tokens);
    }
  }
  let cleanupOrders = 0;
  for (const [trader, tokens] of cleanupTokens) {
    cleanupOrders += tokens.size * attempts;
    add(trader, "self", tokens.size * attempts);
  }
  const main = rows.length * attempts;
  const selfCost = [...selfCosts.values()].reduce(
    (sum, cost) => sum + cost,
    0n,
  );
  return {
    main,
    acquisitions,
    cleanup: cleanupOrders,
    creations: main + acquisitions + cleanupOrders,
    sponsoredCost,
    selfCost,
    selfCosts,
    total: sponsoredCost + selfCost,
  };
}
