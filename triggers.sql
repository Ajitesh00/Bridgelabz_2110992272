-- sql
CREATE TABLE children (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age > 0),
    email VARCHAR(100) UNIQUE NOT NULL
);

DELIMITER //

CREATE TRIGGER checkAge
BEFORE INSERT ON children
FOR EACH ROW
BEGIN
    IF NEW.age <= 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Age must be greater than 0';
    END IF;
END;
//

DELIMITER ;


INSERT INTO children(name, age, email) VALUES ('Ajitesh', 21, "ajiteshmadhu09@gmail.com");
INSERT INTO children(name, age, email) VALUES ('Dipin', 0, "dipinrajput@gmail.com");