const port = process.env.PORT || 8000;

import mysql from 'mysql';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

const connectDB = async () => {
    try {
        await connection.connect();
        console.log("Connected to MySQL")
    } catch (err) {
        console.log("Error", err)
    }
}
// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";
// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection FAILED ", error);
//         process.exit(1)
//     }
// }

export default connectDB