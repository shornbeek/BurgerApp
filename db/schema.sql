-- -- Drops the todolist if it exists currently --
-- DROP DATABASE IF EXISTS db_burger;
-- -- Creates the "todolist" database --
-- CREATE DATABASE db_burger;


CREATE DATABASE IF NOT EXISTS  `burgers_db`;

USE `burgers_db`;

/* Create a burgers table */
CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255 ) NOT NULL,
	`devoured` BOOLEAN,
	`date` TIMESTAMP,

	PRIMARY KEY ( `id` ) 
);