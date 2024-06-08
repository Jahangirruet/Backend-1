import  User from '../models/user.js'

export const getAllUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(users);
    }
  });
};

export const getUserById = (req, res) => {
  const id = req.params.id;
  User.getById(id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  });
};

export default { getAllUsers, getUserById };


// Add more controller methods for user creation, update, and deletion