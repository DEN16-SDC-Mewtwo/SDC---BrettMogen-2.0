DROP DATABASE IF EXISTS overview;

CREATE DATABASE overview;

USE overview;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(29) NOT NULL,
  slogan varchar(120) NOT NULL,
  description varchar(508) NOT NULL,
  category varchar(18) NOT NULL,
  default_price varchar(8) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE product_features (
  id int NOT NULL AUTO_INCREMENT,
  product_id INT,
  feature varchar(25) NOT NULL,
  value varchar(30) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) references products(id)
);

CREATE TABLE product_styles (
  id int NOT NULL AUTO_INCREMENT,
  product_id INT,
  name varchar(28) NOT NULL,
  sale_price varchar(4) NOT NULL,
  original_price varchar(10) NOT NULL,
  dflt BOOLEAN,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) references products(id)
);

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  style_id INT,
  thumbnail_url varchar(154) NOT NULL,
  url varchar(153) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (style_id) references product_styles(id)
);

CREATE TABLE sku (
  id int NOT NULL AUTO_INCREMENT,
  style_id INT,
  size varchar(9) NOT NULL,
  quantity INT(2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (style_id) references product_styles(id)
);

CREATE TABLE related_products (
  id int NOT NULL AUTO_INCREMENT,
  product_id INT,
  related_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) references products(id),
  FOREIGN KEY (related_id) references products(id)
);

-- ALTER TABLE questions ADD INDEX product_id_index (product_id);

LOAD DATA LOCAL INFILE './product.csv'
INTO TABLE products
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

