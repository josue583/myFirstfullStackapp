import express from 'express';
import { createUser, deleteUser, getAllusers, getSingleuser, updateUser } from '../controller/userController.js'; // Import function

const router = express.Router();

router.post('/user', createUser); // Route to handle user creation
router.get("/getUser",getAllusers)// Router to displat all user information
router.get("/user/:id",getSingleuser);//Router to display a single user
router.put("/update/user/:id",updateUser)// user update
router.delete("/delete/user/:id",deleteUser)

export default router;