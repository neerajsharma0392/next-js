CREATE DATABASE transactions;

USE transactions;

CREATE TABLE Employee(
empid INT PRIMARY KEY,
empname VARCHAR(50),
empage TINYINT,
city VARCHAR(15),
income int
)

CREATE TABLE Orders(
orderid INT PRIMARY KEY,
productname VARCHAR(50),
orderno INT,
orderdate datetime
)

-- SELECT CURTIME()

INSERT INTO employee VALUES(1,"Chetana",21,"Delhi",40000);
INSERT INTO employee VALUES(2,"Partha",20,"Bangalore",42000);

SELECT * FROM employee;
SELECT * FROM orders;

-- commit transaction
START TRANSACTION;

INSERT INTO employee VALUES(3,"Atik",19,"Pune",40000);
INSERT INTO orders VALUES(1,"IPhone",121,CURDATE());

COMMIT;

-- rollback transaction

START TRANSACTION;

DELETE FROM employee;

ROLLBACK;

SELECT * FROM employee WHERE empid=9;
-- savepoint
START TRANSACTION;
INSERT INTO employee VALUES(8,"Chetana",21,"Bangalore",30000);
SAVEPOINT my_savepoint;

INSERT INTO employee VALUES(9,"Rajmani",21,"Hyderabad",130000);
ROLLBACK TO SAVEPOINT my_savepoint;

COMMIT;



