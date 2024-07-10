use sample;

show tables;

-- Read data from table 
select * from student;
select id as 'RollNo',name from student where age>=20 -- alias

-- Create for Crud operation
insert  into student(id,name,age) values(1,'Geeta',21);
insert into student values (2,'Monika',20);
insert into student(id,name) values (3,'Chetana');

insert into student(id,name,age) values(4,'Manas',20),
 (5,'Partha',22);
 
 -- clean all the data from table
 truncate table student;
 
 
 -- Delete data from the table
 delete from student where age=21;

-- select * from student where age =20
-- delete from student where age =20
 
 delete from 
 -- select * from 
 student where age=20
 
 insert into student(id,name,age) values (3,12341231,12341231);
 
 
 select * from student where age is null
 
 
 -- update data
 update  student
 set age= 21 where name='chetana'