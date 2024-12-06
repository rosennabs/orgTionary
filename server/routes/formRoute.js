const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/formvalues", async (req, res) => {
  try {
    const formValues = req.body;
    console.log(formValues);

    //make an api request to web3forms submitting form entries
    await axios.post('https://api.web3forms.com/submit', {
      access_key: 'dab878f7-aab6-4b05-ad47-18d466320add',
      ...formValues
    });

    res.status(200).json({ message: "Form submitted successfully!" });

  } catch (error) {
    console.error("Error submitting data to web3forms: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
