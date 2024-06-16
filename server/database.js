const { config } = require("dotenv");
const mysql = require("mysql2");
require("dotenv").config();
const con = mysql.createConnection({
  host: "localhost",
  database: process.env.Database,
  user: process.env.SqlUser,
  password: process.env.SqlPass,
});

module.exports = con;
