
CREATE DATABASE `wishlist_db`;
USE `wishlist_db`;

CREATE TABLE wishlist
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(500) NOT NULL,
	bought BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);