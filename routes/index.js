const express = require("express"); // functions as import
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
