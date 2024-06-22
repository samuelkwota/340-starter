-- Car_Type
CREATE TYPE car_type AS ENUM ('Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible');

-- Create Tables
CREATE TABLE account (
  account_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  account_type VARCHAR(50) DEFAULT 'User'
);

CREATE TABLE classification (
  classification_id SERIAL PRIMARY KEY,
  classification_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE inventory (
  inv_id SERIAL PRIMARY KEY,
  make VARCHAR(50) NOT NULL,
  model VARCHAR(50) NOT NULL,
  year INT NOT NULL,
  inv_description TEXT,
  inv_image VARCHAR(100),
  inv_thumbnail VARCHAR(100),
  classification_id INT REFERENCES classification(classification_id)
);

-- Populate Tables
INSERT INTO classification (classification_name) VALUES ('Sport'), ('Luxury'), ('Economy');

INSERT INTO inventory (make, model, year, inv_description, inv_image, inv_thumbnail, classification_id)
VALUES 
  ('GM', 'Hummer', 2021, 'A large vehicle with small interiors', '/images/hummer.jpg', '/images/hummer_thumb.jpg', 1),
  ('Toyota', 'Camry', 2020, 'A reliable sedan', '/images/camry.jpg', '/images/camry_thumb.jpg', 2);

-- Queries from Task One

--Insert a new record into the account table
INSERT INTO account (first_name, last_name, email, password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

--Modify the Tony Stark
UPDATE account
SET account_type = 'Admin'
WHERE email = 'tony@starkent.com';

-- Delete the Tony Stark record
DELETE FROM account
WHERE email = 'tony@starkent.com';

-- Modify GM Hummer description
UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE make = 'GM' AND model = 'Hummer';

-- Select make and model fields from inventory
SELECT inventory.make, inventory.model, classification.classification_name
FROM inventory
INNER JOIN classification ON inventory.classification_id = classification.classification_id
WHERE classification.classification_name = 'Sport';

-- Update inv_image and inv_thumbnail paths
UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');