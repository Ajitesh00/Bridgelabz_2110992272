-- Leetcode 1068: Product Sales Analysis I

SELECT product_name, year, price
FROM Sales
LEFT JOIN product
on Sales.product_id=Product.product_id;