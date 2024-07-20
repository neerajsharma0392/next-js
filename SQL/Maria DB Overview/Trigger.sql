USE sample;

create table sales (
id int auto_increment,
product varchar(200) not null,
quantity int not null default 0,
check(quantity>= 0),
primary key(id)
)

insert into sales(product,quantity) 
values('I Phone 13 Pro',200),
('Samsung Ultra',120),
('Oneplus 11R',250) 

SELECT * FROM sales;

delimiter //
CREATE TRIGGER before_sales_update
BEFORE update
ON sales FOR EACH ROW
BEGIN
  DECLARE errorMessage VARCHAR(200);
  SET errorMessage=CONCAT("The new quantity ", NEW.quantity,"cannot be 4 times greater than the current  quantity ",OLD.quantity);
  
  if NEW.quantity > OLD.quantity*4 then
    SIGNAL  SQLSTATE '45000'
    SET MESSAGE_TEXT=errorMessage;
  END if;  
  
  
END //
delimiter ;

SELECT * FROM sales;
UPDATE sales SET quantity=400 WHERE id =1;

