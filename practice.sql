CREATE TABLE STUDENT(
name VARCHAR(100),
student_id INT PRIMARY KEY,
city VARCHAR(100),
marks int
);

INSERT INTO STUDENT(name,student_id,city,marks)
VALUES
("Ajitesh",101,"Hisar",90),
("Dipin",102,"Patiala",92),
("Om",103,"Barwala",89);

SELECT * FROM STUDENT;

-- STORED PROCEDURE

DELIMITER //

CREATE PROCEDURE GetStudentName(IN id INT)
BEGIN
SELECT name from STUDENT WHERE student_id=id;
END
 
// DELIMITER ;

CALL GetStudentName(101);

ALTER TABLE STUDENT
MODIFY marks INT check (marks<101);

update STUDENT
SET marks=74 WHERE student_id=102;

SELECT * FROM STUDENT;

CREATE TABLE RESULT (
    result_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    subject VARCHAR(50),
    grade CHAR(2),
    FOREIGN KEY (student_id) REFERENCES STUDENT(student_id)
);

INSERT INTO RESULT(student_id,subject,grade)
VALUES
(101,"COMPUTERS","A+"),
(102,"SCIENCE","B-"),
(103,"MATHS","A");

SELECT * FROM RESULT;

INSERT INTO STUDENT (name,student_id,city,marks)
VALUES
("ANKUSHA",201,"Ludhiana",81);

-- INNER JOIN

SELECT *
FROM STUDENT
INNER JOIN RESULT
ON STUDENT.student_id=RESULT.student_id;

-- LEFT JOIN

SELECT * FROM STUDENT as s
LEFT JOIN RESULT as r
ON s.student_id=r.student_id;


DELETE FROM STUDENT WHERE student_id=212;

-- OUTER JOIN

SELECT * FROM STUDENT as s
LEFT JOIN RESULT as r
ON s.student_id=r.student_id
UNION
SELECT * FROM STUDENT as s
RIGHT JOIN RESULT as r
ON s.student_id=r.student_id;

CREATE TABLE ATTENDANCE (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    subject VARCHAR(50),
    total_classes INT,
    attended_classes INT,
    FOREIGN KEY (student_id) REFERENCES STUDENT(student_id)
);

INSERT INTO ATTENDANCE (student_id, subject, total_classes, attended_classes) VALUES
(101, 'COMPUTERS', 40, 38),
(102, 'SCIENCE', 40, 30),
(103, 'MATHS', 40, 37),
(101, 'ENGLISH', 40, 35),
(102, 'MATHS', 40, 28),
(103, 'SCIENCE', 40, 36);

SELECT * FROM ATTENDANCE;

SELECT student_id, SUM(attended_classes) AS total_attended
FROM ATTENDANCE
GROUP BY student_id

HAVING (total_attended>60);

REVOKE INSERT ON employees FROM Ajitesh;

GRANT ALL PRIVILEGES ON employees TO Ajitesh;
