-- Leetcode 1581: Customer Who Visited But Did Not Make Any Transactions

SELECT customer_id, count(customer_id)as count_no_trans
FROM (SELECT customer_id
FROM (SELECT customer_id,transaction_id
FROM Visits
LEFT JOIN Transactions
ON Visits.visit_id=Transactions.visit_id) as temp
WHERE transaction_id IS NULL) as temp1
GROUP BY customer_id;