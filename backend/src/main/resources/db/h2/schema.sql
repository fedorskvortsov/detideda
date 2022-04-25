CREATE SEQUENCE joke_sequence;

CREATE TABLE jokes (
    id      INTEGER DEFAULT joke_sequence.nextval PRIMARY KEY,
    message VARCHAR(255),
    author  VARCHAR(65)
);