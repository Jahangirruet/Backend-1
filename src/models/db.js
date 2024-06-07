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


export default connectDB