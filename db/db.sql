CREATE DATABASE cors_test;
DROP DATABASE cors_test;

\c cors_test

CREATE TABLE IF NOT EXISTS test(
    msg SERIAL PRIMARY KEY
);
DROP TABLE test;

\q

