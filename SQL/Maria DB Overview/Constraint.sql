
SELECT * FROM student;

-- Primary Key 
CREATE TABLE student (
id int PRIMARY KEY,
NAME VARCHAR(50),
age INT
)

-- check 
CREATE TABLE student (
id int PRIMARY KEY,
NAME VARCHAR(50),
age INT,
CHECK  (age>=17)
)

SELECT * FROM student
-- auto increment
-- CREATE TABLE student(
-- id int PRIMARY KEY auto_increment,
-- NAME VARCHAR(50),
-- age INT,
-- CHECK  (age>=17)
-- )
-- INSERT INTO student(NAME,age) VALUES("Hari",21);
-- INSERT INTO student(NAME,age) VALUES("Geeta",22);
-- DELETE FROM student WHERE id=1

SELECT * FROM student;
-- Default value
CREATE TABLE student(
id int PRIMARY KEY auto_increment,
NAME VARCHAR(50),
age INT,
state VARCHAR(50) DEFAULT 'Uttarakhand'
CHECK  (age>=17)
)
INSERT INTO student(NAME,age)  VALUES("Atik",17);
INSERT INTO student(NAME,age,state)  VALUES("Monika",17,"Karnataka");

SELECT * FROM student
-- Not null 
-- CREATE TABLE student(
-- id int PRIMARY KEY auto_increment,
-- NAME VARCHAR(50) NOT null,
-- age INT NOT null,
-- state VARCHAR(50) DEFAULT 'Uttarakhand',
-- mobile VARCHAR(10)
-- CHECK  (age>=17)
-- )
-- INSERT INTO student(NAME,age,state,mobile)  VALUES("Chetana",21,"Karantaka",NULL);
-- INSERT INTO student(NAME,age,state,mobile)  VALUES(null,21,"Karantaka",null);

DROP TABLE student;
DROP TABLE Courses;
-- Foreign key
CREATE TABLE Courses(
StudentID INT NOT NULL,
CourseID INT NOT NULL,
CourseName VARCHAR(20),
YEAR INT,
PRIMARY KEY (CourseID),
FOREIGN KEY (StudentID) REFERENCES student(Id)
)

-- Delete Cascade
CREATE TABLE Courses(
StudentID INT NOT NULL,
CourseID INT NOT NULL,
CourseName VARCHAR(20),
YEAR INT,
PRIMARY KEY (CourseID),
FOREIGN KEY (StudentID) REFERENCES student(Id) ON DELETE CASCADE 
)

SELECT * FROM student;
SELECT * FROM Courses;
INSERT INTO courses VALUES(4,1,"IT",2024);
INSERT INTO courses VALUES(5,2,"CS",2024);

DELETE FROM student WHERE id=4
DELETE FROM courses WHERE StudentId=3;

DROP TABLE student; 
drop table courses;

USE sample;

CREATE TABLE student(
id INT 
)

SELECT * FROM student;

ALTER TABLE student 
ADD NAME VARCHAR(50);

ALTER TABLE student
ADD ag  INT;

ALTER TABLE student
DROP COLUMN ag

ALTER TABLE student
ADD age  INT;

ALTER TABLE student
modify COLUMN age TINYINT

ALTER TABLE student
rename COLUMN name TO firstname

ALTER TABLE student
ADD CONSTRAINT  PRIMARY KEY (id)

INSERT INTO student values(1,"name",21)

ALTER TABLE student
ADD CONSTRAINT check_age CHECK(age>=17)

INSERT INTO student VALUES(2,"name",15)

