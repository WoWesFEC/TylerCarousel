drop database if exists Wowes;

create database Wowes;

use Wowes;



create table items (

  id int primary key,
  image varchar(512),
  name text,
  rating tinyint,
  category text

);





