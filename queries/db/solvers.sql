-- Per-solver competition and settlement stats for auctions that contained
-- at least one order placed in the session window.
WITH session_uids AS (
    SELECT array_agg(uid) AS uids
    FROM solana.orders
    WHERE creation_timestamp >= '{{start}}'::timestamptz
      AND creation_timestamp <  '{{end}}'::timestamptz
),
session_auctions AS (
    SELECT a.id
    FROM solana.competition_auctions a, session_uids s
    WHERE a.order_uids && s.uids
),
bids AS (
    SELECT
        ps.solver,
        count(*)                                        AS solutions,
        count(DISTINCT ps.auction_id)                   AS auctions_bid,
        count(*) FILTER (WHERE ps.is_winner)            AS wins,
        count(*) FILTER (WHERE ps.filtered_out)         AS filtered_out,
        sum(ps.score) FILTER (WHERE ps.is_winner)       AS winning_score
    FROM solana.proposed_solutions ps
    JOIN session_auctions a ON a.id = ps.auction_id
    GROUP BY ps.solver
),
executions AS (
    SELECT
        se.solver,
        count(*)                                        AS executions,
        count(*) FILTER (WHERE se.outcome = 'landed')   AS landed,
        count(*) FILTER (WHERE se.outcome = 'rejected') AS rejected,
        count(*) FILTER (WHERE se.outcome = 'timeout')  AS timeout,
        count(*) FILTER (WHERE se.outcome IS NULL)      AS pending,
        avg(se.end_slot - se.start_slot) FILTER (WHERE se.outcome = 'landed') AS avg_slots_to_land
    FROM solana.settlement_executions se
    JOIN session_auctions a ON a.id = se.auction_id
    GROUP BY se.solver
),
traded AS (
    SELECT s.solver, count(DISTINCT t.order_uid) AS orders_traded
    FROM solana.trades t
    JOIN solana.settlements s
        ON s.tx_signature = t.tx_signature AND s.instruction_index = t.instruction_index
    JOIN solana.orders o ON o.uid = t.order_uid
    WHERE o.creation_timestamp >= '{{start}}'::timestamptz
      AND o.creation_timestamp <  '{{end}}'::timestamptz
    GROUP BY s.solver
)
SELECT
    encode(coalesce(b.solver, e.solver, t.solver), 'hex') AS solver,
    coalesce(b.solutions, 0)     AS solutions,
    coalesce(b.auctions_bid, 0)  AS auctions_bid,
    coalesce(b.wins, 0)          AS wins,
    coalesce(b.filtered_out, 0)  AS filtered_out,
    b.winning_score::text        AS winning_score,
    coalesce(e.executions, 0)    AS executions,
    coalesce(e.landed, 0)        AS landed,
    coalesce(e.rejected, 0)      AS rejected,
    coalesce(e.timeout, 0)       AS timeout,
    coalesce(e.pending, 0)       AS pending,
    round(e.avg_slots_to_land, 1)::float AS avg_slots_to_land,
    coalesce(t.orders_traded, 0) AS orders_traded
FROM bids b
FULL JOIN executions e ON e.solver = b.solver
FULL JOIN traded t     ON t.solver = coalesce(b.solver, e.solver)
ORDER BY orders_traded DESC, wins DESC;
