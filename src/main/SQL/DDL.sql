CREATE DATABASE AUTOMATE_MY_DINNER

CREATE USER 'AUTOMATE_MY_DINNER'@'localhost';

GRANT ALL PRIVILEGES ON AUTOMATE_MY_DINNER.* TO 'automate_my_dinner'@'localhost' IDENTIFIED BY 'automate_my_dinner';

CREATE TABLE MEALS(
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  NAME TEXT NOT NULL,
  RECIPE TEXT NOT NULL,
  INGREDIENTS TEXT NOT NULL
);

CREATE TABLE RECIPIENTS(
  EMAIL VARCHAR(100) NOT NULL PRIMARY KEY
);