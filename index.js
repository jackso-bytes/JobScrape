const express = require("express");
const app = express();
const port = 5501;

const bodyParser = require("body-parser");
const scrapers = require("./scrapers");

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/creators", async (req, res) => {
  const creators = jobData;
  res.send(creators);
});

app.post("/something", function (req, res) {
  console.log("hello world server side");
  res.send("POST request to homepage");
});

app.all;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
