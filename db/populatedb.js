#! /usr/bin/env node
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ quiet: true });

}


const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255)
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL, // ✅ use env var
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
