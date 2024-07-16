USE kalki;


SELECT * FROM products;

SELECT * FROM suppliers;

SELECT * FROM categories;
-- 
-- inner join
SELECT p.ProductName,s.SupplierName,p.Price,c.CategoryName 
FROM products p
inner JOIN suppliers s ON p.supplierId=s.supplierid
INNER JOIN categories c ON p.categoryId=c.categoryid

-- left join 
SELECT * FROM customers;
SELECT * FROM orders WHERE customerid=1;

SELECT * 
FROM customers
LEFT JOIN orders ON customers.customerid=orders.CustomerID


-- right join 
SELECT * 
FROM orders
right JOIN customers ON customers.customerid=orders.CustomerID ORDER BY customers.customerid


-- cross join 
SELECT COUNT(*) FROM customers; -- 91
select COUNT(*) FROM orders; -- 196
SELECT 91*196 -- 17836

SELECT COUNT(*) FROM
customers CROSS JOIN orders


-- union
SELECT city FROM customers
union
SELECT  City FROM suppliers;

SELECT city FROM customers
UNION all
SELECT  City FROM suppliers
ORDER BY city 


USE sample

CREATE TABLE customers(
id int PRIMARY KEY,
NAME VARCHAR(50) NOT NULL,
mobileno VARCHAR(10)NOT null UNIQUE
)

SELECT * FROM customers 
INSERT INTO customers values(1,"Ahmad","1234567890");
INSERT INTO customers VALUES(2,"Chetana",null);


SHOW INDEXES FROM customers;


