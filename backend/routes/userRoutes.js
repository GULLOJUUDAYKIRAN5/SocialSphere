import express from "express";
import { getUsers, createUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);      // GET all users
router.post("/", createUser);   // Create user

export default router;
