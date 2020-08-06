DROP DATABASE IF EXISTS api;

CREATE DATABASE api;

USE api;

CREATE TABLE restaurants (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  price varchar(5) NOT NULL,
  rating_label varchar(15),
  rating_score decimal(1, 1),
  description varchar(100),
  url_handle varchar(40) NOT NULL,
  category varchar(15) NOT NULL,
  neighborhood varchar(15) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id int AUTO_INCREMENT NOT NULL,
  url varchar(70) NOT NULL,
  restaurant_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (restaurant_id)
      REFERENCES restaurants(id)
);