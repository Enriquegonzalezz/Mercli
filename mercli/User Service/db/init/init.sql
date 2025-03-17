CREATE DATABASE IF NOT EXISTS prueba;
USE prueba;

CREATE TABLE IF NOT EXISTS user(
	id int auto_increment primary key,
    username varchar(500),
    email varchar(500),
    password varchar(500)
);