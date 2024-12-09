const express = require("express");
const router = express.Router();
const { fetchGlossary } = require('../queries/glossaryData');

router.get('/glossarydata', async (req, res) => {
  try {
    const glossaryData = await fetchGlossary();
    res.status(200).json(glossaryData);
  }
  catch (error) {
    console.error("Error fetching glossary data from db: ", error);
    res.status(500).json( {error: "Internal Server Error" });
  }
});


router.get("/test-connection", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res
      .status(200)
      .json({
        message: "Database connection successful",
        timestamp: result.rows[0],
      });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    res.status(500).json({ error: "Failed to connect to the database" });
  }
});

// router.post('/newword', async (req, res) => {
//   try {
//     const glossaryData = await saveNewWord(req.body);
//     //console.log(glossaryData);
//     res.status(200).json(glossaryData);
//   } catch (error) {
//     console.error("Error saving new word to db: ", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

module.exports = router;