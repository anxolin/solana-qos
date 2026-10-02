-- One row per order placed in the session window, with its lifecycle summary.
-- Placeholders {{start}} and {{end}} are replaced by qos.py (timestamptz literals).
WITH session_orders AS (
    SELECT *
    FROM solana.orders
    WHERE creation_timestamp >= '{{start}}'::timestamptz
      AND creation_timestamp <  '{{end}}'::timestamptz
),
events AS (
    SELECT
        e.order_uid,
        min(e.timestamp) FILTER (WHERE e.label = 'ready')      AS first_ready,
        min(e.timestamp) FILTER (WHERE e.label = 'considered') AS first_considered,
        min(e.timestamp) FILTER (WHERE e.label = 'executing')  AS first_executing,
        min(e.timestamp) FILTER (WHERE e.label = 'traded')     AS traded_at,
        min(e.timestamp) FILTER (WHERE e.label = 'cancelled')  AS cancelled_at,
        count(*) FILTER (WHERE e.label = 'considered')         AS times_considered,
        count(*) FILTER (WHERE e.label = 'executing')          AS times_executing,
        count(*) FILTER (WHERE e.label = 'filtered')           AS times_filtered,
        count(*) FILTER (WHERE e.label = 'invalid')            AS times_invalid
    FROM solana.order_events e
    JOIN session_orders o ON o.uid = e.order_uid
    GROUP BY e.order_uid
),
trades AS (
    SELECT
        t.order_uid,
        sum(t.sell_amount) AS executed_sell,
        sum(t.buy_amount)  AS executed_buy,
        sum(t.fee_amount)  AS executed_fee,
        min(t.slot)        AS trade_slot,
        (array_agg(encode(s.solver, 'hex') ORDER BY t.slot))[1]       AS settling_solver,
        (array_agg(encode(t.tx_signature, 'hex') ORDER BY t.slot))[1] AS tx_signature
    FROM solana.trades t
    JOIN session_orders o ON o.uid = t.order_uid
    LEFT JOIN solana.settlements s
        ON s.tx_signature = t.tx_signature AND s.instruction_index = t.instruction_index
    GROUP BY t.order_uid
)
SELECT
    encode(o.uid, 'hex')                AS uid,
    encode(o.owner, 'hex')              AS owner,
    encode(o.sell_token, 'hex')         AS sell_token,
    encode(o.buy_token, 'hex')          AS buy_token,
    o.sell_amount::text                 AS sell_amount,
    o.buy_amount::text                  AS buy_amount,
    o.kind::text                        AS kind,
    o.partially_fillable,
    o.valid_to,
    o.creation_timestamp,
    (o.presigned_transaction IS NOT NULL) AS sponsored,
    o.last_valid_block_height,
    (p.order_uid IS NOT NULL)           AS pda_created,
    p.created_in_slot,
    p.is_reorged,
    p.cancellation_timestamp,
    encode(q.solver, 'hex')             AS quote_solver,
    q.buy_amount::text                  AS quote_buy_amount,
    q.sell_amount::text                 AS quote_sell_amount,
    e.first_ready,
    e.first_considered,
    e.first_executing,
    e.traded_at,
    e.cancelled_at,
    coalesce(e.times_considered, 0)     AS times_considered,
    coalesce(e.times_executing, 0)      AS times_executing,
    coalesce(e.times_filtered, 0)       AS times_filtered,
    coalesce(e.times_invalid, 0)        AS times_invalid,
    t.executed_sell::text               AS executed_sell,
    t.executed_buy::text                AS executed_buy,
    t.executed_fee::text                AS executed_fee,
    t.trade_slot,
    t.settling_solver,
    t.tx_signature
FROM session_orders o
LEFT JOIN solana.order_pda p   ON p.order_uid = o.uid
LEFT JOIN solana.order_quotes q ON q.order_uid = o.uid
LEFT JOIN events e             ON e.order_uid = o.uid
LEFT JOIN trades t             ON t.order_uid = o.uid
ORDER BY o.creation_timestamp;
