DROP DATABASE IF EXISTS zagat;

CREATE DATABASE zagat;

USE zagat;

CREATE TABLE restaurants (
  id int AUTO_INCREMENT,
  name varchar(50) UNIQUE,
  price varchar(5),
  rating_label varchar(10),
  rating_score varchar(5),
  description varchar(100),
  url_handle varchar(100) UNIQUE,
  category varchar(20),
  neighborhood varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id int AUTO_INCREMENT,
  url varchar(70),
  restaurant_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (restaurant_id)
      REFERENCES restaurants(id)
);