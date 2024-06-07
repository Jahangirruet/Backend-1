import  connectDB  from './db.js';

const User = (id, name, email) => {
    this.id = id;
    this.name = name;
    this.email = email;
  };
  
  User.getAll = (callback) => {
    connectDB('SELECT * FROM users', (err, rows) => {
      if (err) {
        callback(err);
      } else {
        callback(null, rows);
      }
    });
  };
  
  User.getById = (id, callback) => {
    connection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
      if (err) {
        callback(err);
      } else {
        callback(null, rows[0]);
      }
    });
  };
  
  // Add more methods for user creation, update, and deletion
  
  export default User;