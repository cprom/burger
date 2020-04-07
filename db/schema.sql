  
  use burger_db;

  create table burgers(
    id int primary key auto_increment,
    burger_name varchar(30) not null,
    devoured boolean,
  );