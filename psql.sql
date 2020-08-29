
DROP TABLE IF EXISTS photos;

DROP TABLE IF EXISTS restaurants;

DROP TABLE IF EXISTS categories;

DROP TABLE IF EXISTS neighborhoods;


CREATE TABLE IF NOT EXISTS neighborhoods (
  nid SERIAL,
  n_name varchar(70),
  PRIMARY KEY (nid)
);

CREATE TABLE IF NOT EXISTS categories (
  cid SERIAL,
  c_name varchar (20),
  PRIMARY KEY (cid)
);

CREATE TABLE restaurants (
  rid SERIAL,
  name varchar(70),
  price varchar(5),
  rating_score varchar(3),
  rating_label varchar(10),
  description varchar(170),
  category int,
  neighborhood int,
  PRIMARY KEY (rid),
  FOREIGN KEY (category) REFERENCES categories(cid),
  FOREIGN KEY (neighborhood) REFERENCES neighborhoods(nid)
);

CREATE TABLE photos (
  pid SERIAL,
  restaurant_id int,
  url  varchar(70),
  PRIMARY KEY (pid),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(rid)
);
