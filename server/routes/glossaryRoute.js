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