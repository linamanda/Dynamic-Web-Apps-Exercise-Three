const express = require("express");
const router = express.Router();

router.get("/", (reg, res) => {
  res.send(`
    <h1>About Page</h1>
    <p>This is the about page</p>
    <p><a href="/about/me">Learn about me</a></p>
  `);
});

router.get("/me", (reg, res) => {
  res.send(`
    <h1>About Me</h1>
    <p>Information about me...</p>
    <p><a href="/about">Go back to about page</a></p>
  `);
});

module.exports = router;
