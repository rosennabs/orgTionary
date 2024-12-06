require("dotenv").config({ path: "../.env" }); //  path to point to your root directory

const { Pool } = require("pg"); //run npm install pg


const db = new Pool({
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
  connectionString: process.env.DATABASE_URL,
 
});



module.exports = db;
