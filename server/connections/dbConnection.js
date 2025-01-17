require("dotenv").config({ path: "../.env" }); //  path to point to your root directory
const { Pool } = require("pg"); //run npm install pg
const postgres = require("postgres");



// Determine environment
const isDevelopment = process.env.NODE_ENV === "development";

// Setup the database connection localhost || Supabase connection
const sql = isDevelopment
  ? new Pool ({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    })
  : postgres(process.env.DATABASE_URL, {
      ssl: "require", // Enforce SSL for production
    });

module.exports = sql;

