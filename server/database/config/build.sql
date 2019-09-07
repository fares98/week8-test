BEGIN;

DROP TABLE IF EXISTS users, city cascade;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR,
  password text
);


CREATE TABLE city (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  country TEXT NOT NULL
);

INSERT INTO city (name, country) VALUES
  ('Gaza', 'Palestine'),
  ('London', 'UK'),
  ('New York', 'USA');

COMMIT;
