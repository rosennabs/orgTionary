require("dotenv").config({ path: "../.env" }); //  path to point to your root directory
const { Pool } = require("pg"); //run npm install pg
const postgres = require("postgres");



// Determine environment
const isDevelopment = process.env.NODE_ENV === "development";

// Setup the database connection
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


// require("dotenv").config({ path: "../.env" }); //  path to point to your root directory

// const { Pool } = require("pg"); //run npm install pg

// console.log("DATABASE_URL in production:", process.env.DATABASE_URL);

// // Configure the database connection dynamically
// const isDevelopment = process.env.NODE_ENV === "development";

// const db = new Pool(
//   isDevelopment
//     ? {
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASS,
//         database: process.env.DB_NAME,
//       }
//     : {
//         connectionString: process.env.DATABASE_URL, // Use connection string from Supabase in production
//         ssl: {
//           rejectUnauthorized: false, // Required for Supabase or similar services
//         },
//       }
// );

// module.exports = db;
