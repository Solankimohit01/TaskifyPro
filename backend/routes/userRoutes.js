import express from "express";
import { getAllUsers, updateUserRole } from "../controllers/userController.js";

const router = express.Router();

// GET /api/users → fetch all users
router.get("/", getAllUsers);

// PUT /api/users/:id/role → update role
router.put("/:id/role", updateUserRole);

export default router;
