USE kalki;

SELECT * FROM customers;

-- RENAME TABLE customers TO customersrenamed;
RENAME TABLE customersrenamed TO customers;


CREATE VIEW CustomerInfo
AS
SELECT CustomerID,CustomerName,customers.City,customers.Country FROM customers;

SELECT * FROM customerInfo WHERE city="Berlin";
SELECT Country,COUNT(*)AS Total FROM customerInfo GROUP BY Country;

--- change the view name
RENAME table customerinfo TO customerinforenamed;
RENAME table customerinforenamed TO customerinfo;

DROP VIEW customerinfo;

CREATE OR REPLACE VIEW customerinfo
as
SELECT CustomerID,CustomerName,customers.Country FROM customers;


SELECT* FROM products;
SELECT * FROM categories;

CREATE VIEW ProductsCategories
AS 
SELECT products.ProductID,products.ProductName,categories.CategoryName,categories.Description FROM products
INNER JOIN categories 
ON products.categoryId=categories.CategoryID;

SELECT * FROM ProductsCategories;



