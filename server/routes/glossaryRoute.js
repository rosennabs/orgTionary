const express = require("express");
const router = express.Router();
const { fetchGlossary } = require('../queries/fetchGlossary');

router.get('/glossarydata', async (req, res) => {
  try {
    const glossaryData = await fetchGlossary();
    console.log(glossaryData);
    res.status(200).json(glossaryData);
  }
  catch (error) {
    console.error("Error fetching glossary data from db: ", error);
    res.status(500).json( {error: "Internal Server Error" });
  }
});

module.exports = router;