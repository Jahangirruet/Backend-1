import express from 'express'
import bodyParser from 'body-parser';
import userRoutes  from './routes/user.js';
import cors from 'cors';

const app = express();
import connectDB from "./models/db.js";
import 'dotenv/config'
//const port = 8080;
//require('dotenv').config()

const port = process.env.PORT


app.use(cors())
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', userRoutes);


app.listen(port, () => console.log(`Server listening on port ${port}`));

connectDB()