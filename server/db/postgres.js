require('dotenv').config()
const dbHost = process.env.DB_HOST;
const { Pool } = require("pg");

const Pool = new Pool({
  user: "postgres",
  password: dbHost,
  host: process.env.DB_HOST,
  port: 5432,
  database: "ciphersqlstudio"
});

module.exports = Pool;