create table tache (
    id int not null primary key auto_increment, 
    name varchar(255) not null,
    description text,
    date datetime not null,
    priority int not null,
    finished boolean not null,
    is_coordination_spe boolean not null
);

create table reunion (
    id int not null primary key auto_increment, 
    name varchar(255) not null,
    description text,
    date datetime not null,
    place varchar(255)
);

