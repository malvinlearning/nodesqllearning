const { Client } = require("pg");

const connectionString = process.argv[2] || process.env.DATABASE_URL;

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255)
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({ connectionString });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main().catch(err => console.error(err));
