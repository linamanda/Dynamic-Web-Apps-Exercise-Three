const express = require("express");
const router = express.Router();

router.get("/", (reg, res) => {
  res.send(`
    <h1>About Page</h1>
    <p>This is the about page</p>
  `);
});

router.get("/me", (reg, res) => {
  res.send(`
    <h1>About Me</h1>
  `);
});

module.exports = router;
