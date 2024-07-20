USE kalki;

SELECT * FROM customers WHERE customerId=12;

delimiter //
CREATE PROCEDURE getCustomerById(id INT) -- precompiled
BEGIN
 SELECT * FROM customers WHERE customerid=id;

END;
/
delimiter ;


CALL getCustomerById(24);

-- get city as return
delimiter //
CREATE PROCEDURE getCustomerCityById(id INT,OUT city varchar(50)) 
BEGIN
 SELECT customers.City INTO city FROM customers WHERE customerid=id;

END;
/
delimiter ;

call getCustomerCityById(15, @city);
SELECT @city;

DROP PROCEDURE getCustomerCityById;
