create table tarefa (
 	id int PRIMARY KEY AUTO_INCREMENT,
    titulo varchar(300) not null,
    descricao varchar(600)
);
create table genero (
 	id int PRIMARY KEY AUTO_INCREMENT,
    nome varchar(300) not null
);
create table produtora (
 	id int PRIMARY KEY AUTO_INCREMENT,
    nome varchar(300) not null
);