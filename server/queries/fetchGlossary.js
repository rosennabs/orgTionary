const db = require("../connections/dbConnection");

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

module.exports = { fetchGlossary };
