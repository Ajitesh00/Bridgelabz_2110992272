CREATE TABLE STUDENT (
    student_id INT PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(100),
);

INSERT INTO STUDENT (student_id, name, city) VALUES
(101, 'Alice', 'New York'),
(102, 'Bob', 'Los Angeles'),
(103, 'Charlie', 'Chicago'),
(104, 'David', 'Houston'),
(105, 'Eve', 'Phoenix');

DELIMITER //
CREATE PROCEDURE GetStudentName(IN id INT)
BEGIN
    SELECT name FROM STUDENT WHERE student_id = id;
END //
DELIMITER ;
CALL GetStudentName(101);