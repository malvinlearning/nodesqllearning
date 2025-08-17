if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ quiet: true });

}

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // necessary on Railway
  },
});

module.exports = pool;
