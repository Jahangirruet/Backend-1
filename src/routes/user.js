import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/', userController.getAllUsers);
//router.get('/:id', userController.getUserById);

// Add more routes for user creation, update, and deletion

export default router;