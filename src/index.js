import express from 'express'
const app = express();
import connectDB from "./db/db.js";
// import {app} from './app.js'



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


// const port = process.env.PORT || 8000;

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });


// try {
//   connection.connect();

//   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";

//   connection.query(sql, (err, rows, fields) => {
//     if (err) throw err;

//     console.log("1 record inserted");
//   });

//   connection.end();
// } catch (error) {
//   console.log("error", error);
//   throw error;
// }
