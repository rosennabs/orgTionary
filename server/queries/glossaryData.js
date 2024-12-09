const db = require("../connections/dbConnection");

//Fetch all glossary data from db
async function fetchGlossary() {
  try {
    const data = await db.query('SELECT * FROM healthcare_terms;');
    return data.rows;
  }
  catch (err) {
    console.error("Error fetching glossary data:", err);
    throw err;
  }
}


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
 