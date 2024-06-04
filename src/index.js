const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 8000;

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});


try {
  connection.connect();

  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";

  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;

    console.log("1 record inserted");
  });

  connection.end();
} catch (error) {
  console.log("error", error);
  throw error;
}
