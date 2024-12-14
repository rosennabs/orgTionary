const sql = require("../connections/dbConnection");

// Determine environment
const isDevelopment = process.env.NODE_ENV === "development";

//Fetch all glossary data from db
async function fetchGlossary() {
  try {
    const data = isDevelopment
      ? await sql.query('SELECT * FROM healthcare_terms;')// For pg Pool in development
      : await sql`SELECT * FROM healthcare_terms;`;// For postgres in production
    
    return data.rows || data; // `.rows` for pg Pool, direct return for postgres
  }
  catch (err) {
    console.error("Error fetching glossary data:", err);
    throw err;
  }
} 

//Fetch all glossary data from db
// async function fetchGlossary() {

//   try {
//     const supabase = await createClient();
//     const data = await supabase.from('healthcare_terms').select();
//     console.log("Glossary data from supabase: ", data);
//     return data.rows;
//   }
//   catch (err) {
//     console.error("Error fetching glossary data:", err);
//     throw err;
//   }
// }



//Save new words to the db
// async function saveNewWord(data) {
//   const {
//     word,
//     definition,
//     does_not_mean,
//     example,
//     related_words } = data;

//   try {
//     const checkQuery = `
//   SELECT * FROM healthcare_terms
//   WHERE word = ${word};`;

//     const checkResult = await db.query(checkQuery);


//     //If word does not exist
//     if (checkResult.rows.length === 0) {
//       const insertQuery = `
//     INSERT INTO healthcare_terms (${word}, ${definition}, ${does_not_mean}, ${example}, ${related_words})
//     RETURNING *;
//     `;

//       const result = await db.query(insertQuery);
//       return result.rows[0]; //returns only the newly inserted data due to RETURNING * above
//     } else {
//       //Return the exisiting record if data already exists
//       return checkQuery.rows[0];
//     }
//   }
//   catch (error) {
//     console.error("Error inserting new data to db:", err);
//     throw error;
//   }
// };

module.exports = { fetchGlossary};
 