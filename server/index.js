const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const con = require("./database");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
// const xlxs = require("xlsx");
// const path = require("path");
// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to mySQL");
});

app.get("/excel-data", async (req, res) => {
  const sql = "SELECT * from form";
  con.query(sql, async (err, result) => {
    if (err) {
      res.status(500).send("Error fetching data");
      throw err;
    }
    //  else {
    //   const workbook = xlxs.utils.book_new();       //storing locally
    //   const worksheet = xlxs.utils.json_to_sheet(result);
    //   xlxs.utils.book_append_sheet(workbook, worksheet, "MedWare");
    //   const filepath = path.join(__dirname, "excelData.xlsx");
    //   xlxs.writeFile(workbook, filepath);
    //   res.send(result);
    // }
    try {
      const response = await axios.post(
        "https://sheetdb.io/api/v1/y3tdgolx3wv2p",
        result
      );
      res.json({ message: "Sheet updated successfully", data: response.data });
    } catch (error) {
      console.error("Error updating sheet:", error);
      res.status(500).send("Error updating sheet");
    }
  });
});

app.post("/submit", (req, res) => {
  // console.log(req.body);
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
