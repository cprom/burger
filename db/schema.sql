DROP DATABASE IF EXIST burger_db;
CREATE DATABASE burger_db;

use burger_db;

CREATE TABLE burgers (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(50),
  devoured BOOL
)