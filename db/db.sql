CREATE DATABASE cors_test;
DROP DATABASE cors_test;

\c cors_test

CREATE TABLE IF NOT EXISTS test(
    id SERIAL PRIMARY KEY,
    msg VARCHAR(100)
);
DROP TABLE test;

SELECT * FROM test;

\q

