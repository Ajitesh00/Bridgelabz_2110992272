-- Leetcode 1251: Average Selling Price

SELECT p.product_id, IFNULL(Round(Sum(price*units)/Sum(units),2),0) as average_price
FROM Prices as p
LEFT JOIN UnitsSold as u
ON p.product_id=u.product_id AND u.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY p.product_id;