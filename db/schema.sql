DROP DATABASE IF EXISTS WhoDat_DB;
CREATE database WhoDat_DB;

USE WhoDat_DB;

CREATE TABLE user_info (
  id INT NOT NULL,
  firstname VARCHAR(100) NULL,
  lastname VARCHAR(100) NULL,
  email VARCHAR(320) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE blogs (
  id INT NOT NULL,
  title VARCHAR(320) NULL,
  body VARCHAR(MAX)

);