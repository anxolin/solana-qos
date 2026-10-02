-- Auction-level view: how many auctions included session orders, and how many
-- had any bid / a winner / a landed settlement.
WITH session_uids AS (
    SELECT array_agg(uid) AS uids
    FROM solana.orders
    WHERE creation_timestamp >= '{{start}}'::timestamptz
      AND creation_timestamp <  '{{end}}'::timestamptz
),
session_auctions AS (
    SELECT a.id, cardinality(a.order_uids) AS orders_in_auction
    FROM solana.competition_auctions a, session_uids s
    WHERE a.order_uids && s.uids
)
SELECT
    count(*)                                             AS auctions,
    round(avg(sa.orders_in_auction), 2)::float           AS avg_orders_per_auction,
    count(*) FILTER (WHERE EXISTS (
        SELECT 1 FROM solana.proposed_solutions ps WHERE ps.auction_id = sa.id))
                                                         AS auctions_with_bids,
    count(*) FILTER (WHERE EXISTS (
        SELECT 1 FROM solana.proposed_solutions ps WHERE ps.auction_id = sa.id AND ps.is_winner))
                                                         AS auctions_with_winner,
    count(*) FILTER (WHERE EXISTS (
        SELECT 1 FROM solana.settlement_executions se WHERE se.auction_id = sa.id AND se.outcome = 'landed'))
                                                         AS auctions_settled
FROM session_auctions sa;
