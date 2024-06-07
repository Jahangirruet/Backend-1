import express from 'express'
const app = express();
import connectDB from "./models/db.js";
const port = 8080;

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`⚙️ Server is running at port : ${port}`);
    })
})
.catch((err) => {
    console.log(" db connection failed !!! ", err);
})