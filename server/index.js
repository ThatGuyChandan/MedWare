const express = require("express");
const app = express();
const port = 5000;
const con = require("./database");
const cors = require("cors");
const bodyParser = require("body-parser");

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to mySQL");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const { formType, name, countryCode, phoneNumber } = req.body;
  const sql =
    "INSERT INTO form (formType, name, countryCode, phoneNumber) VALUES (?, ?, ?, ?)";
  con.query(sql, [formType, name, countryCode, phoneNumber], (err, result) => {
    if (err) {
      res.status(500).send("Error saving data");
      throw err;
    }
    res.send("data added successfully");
  });
});

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
