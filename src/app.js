import express from 'express'
import bodyParser from 'body-parser';
import userRoutes  from './routes/user.js';

const app = express();
import connectDB from "./models/db.js";
const port = 8080;



// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);

// Start server

app.listen(port, () => console.log(`Server listening on port ${port}`));


connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`⚙️ Server is running at port : ${port}`);
    })
})
.catch((err) => {
    console.log(" db connection failed !!! ", err);
})
