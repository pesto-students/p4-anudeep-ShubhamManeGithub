CREATE TABLE cities (
	city VARCHAR (255),
    state VARCHAR (255),
    PRIMARY KEY (city)
);
INSERT INTO cities (city , state)
VALUE ("Pune", "Maharashtra"),
	  ("Mumbai", "Maharashtra"),
      ("Jaipur", "Rajastan"),
      ("Ahmadabad", "Gujrat");
      
SELECT * FROM cities; 
CREATE TABLE warehouses(
  	W_id INT ,
    W_name VARCHAR(30),
    W_location VARCHAR (20),
    PRIMARY KEY (W_id),
    FOREIGN KEY (W_location) REFERENCES cities(city)
);
DROP TABLE warehouses;
CREATE TABLE warehouses(
  	W_id INT ,
    W_name VARCHAR(30),
    W_location VARCHAR (20),
    PRIMARY KEY (W_id),
    FOREIGN KEY (W_location) REFERENCES cities(city)
);
INSERT INTO warehouses(W_id,W_name,W_location)
VALUE (101,"ABC Warehouse", "Pune"),
	  (102,"DEF Warehouse", "Mumbai"),
      (103,"GHI Warehouse", "Jaipur"),
      (104,"JKL Warehouse", "Ahmadabad");
SELECT * FROM warehouses;
SELECT * FROM warehouses
WHERE W_location LIKE "Mumbai";
SELECT * FROM warehouses
JOIN cities ON warehouses.W_location = cities.city;

 CREATE TABLE store(
    S_id INT,
    S_name VARCHAR (20),
    S_location VARCHAR (20),
    W_id INT,
    PRIMARY KEY (S_id),
    FOREIGN KEY (W_id) REFERENCES warehouses(W_id)
  );
  DROP TABLE store;
  CREATE TABLE store(
    S_id INT,
    S_name VARCHAR (20),
    S_location VARCHAR (20),
    W_id INT,
    PRIMARY KEY (S_id),
    FOREIGN KEY (W_id) REFERENCES warehouses(W_id)
  );

INSERT INTO store(S_id,S_name,S_location,W_id)
VALUES (1,"Store1","Pune",101),
       (2,"Store2","Pune",101),
       (3,"Store3","Pune",101),
       (4,"Store4","Mumbai",102),
       (5,"Store5","Jaipur",103),
       (6,"Store6","Ahmadabad",104),
       (7,"Store7","Mumbai",102);
       
SELECT * FROM store;
SELECT W_id, COUNT(W_id) FROM store
GROUP BY W_id;

SELECT W_name, COUNT(W_id) FROM store
GROUP BY W_id; 



