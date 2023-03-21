BEGIN TRANSACTION;

CREATE TABLE account_numbers
  (id TEXT PRIMARY KEY,
   acct TEXT,
   type TEXT NOT NULL,
   number TEXT NOT NULL UNIQUE,
   FOREIGN KEY(acct) REFERENCES accounts(id));

CREATE UNIQUE INDEX acct_type ON account_numbers(acct, type);
CREATE INDEX acct_type_number ON account_numbers(acct, type, number);

COMMIT;
