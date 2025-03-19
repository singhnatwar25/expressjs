
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");

const app = express();

// Favicon serve karega
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Static files serve karne ke liye
app.use(express.static(path.join(__dirname, "public")));

// Root URL par index.html serve karega
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`);
});

// Export the Express API
module.exports = app;
