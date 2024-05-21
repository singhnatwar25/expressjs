const express = require("express");
const app = express();
const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/favicon.ico'));



app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get('/favicon.ico', (req, res) => {
    res.status(404).send('No favicon available');
});


app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;