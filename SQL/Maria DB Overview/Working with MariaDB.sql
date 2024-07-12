
-- select your database first
-------------************************************_--------------------
SELECT * FROM Customers
SELECT DISTINCT city FROM customers

SELECT * FROM customers WHERE city="Berlin" or city="Mannheim"
SELECT * FROM customers WHERE country="Germany" AND city="Berlin"
SELECT * FROM customers WHERE country="Germany" AND city IN ("Berlin","Mannheim")
SELECT COUNT(*) FROM customers WHERE country="Germany"

SELECT * FROM customers ORDER BY Country ASC
SELECT * FROM customers ORDER BY Country DESC
SELECT * FROM customers ORDER BY Country,postalcode ASC

SELECT COUNT(*) FROM customers WHERE NOT country="Germany";

SELECT * FROM customers WHERE contactName LIKE 'mi%'
SELECT * FROM customers WHERE contactName LIKE '%ab%'
SELECT * FROM customers WHERE postalcode LIKE '120_'
SELECT * FROM customers WHERE postalcode LIKE '12_%'

SELECT * from customers WHERE customerid BETWEEN 1 AND 10; 

-- aggregation 
select COUNT(*) FROM customers;
SELECT MIN(price) FROM products;
SELECT max(price) FROM products;

SELECT SUM(price) FROM products;
SELECT avg(price) FROM products;
-- Grouping 

SELECT country, COUNT(*)as total FROM customers GROUP BY country HAVING total>5
SELECT * FROM customers LIMIT 5 

-- pagination
SELECT * FROM customers LIMIT 5 OFFSET 10

-------------************************************_--------------------



