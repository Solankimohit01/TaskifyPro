// import express from "express";
// import { register, login } from "../controllers/authController.js";
// import { authorization, protect } from "../middleware/authMiddleware.js";

// const router=express.Router();
// router.post("/register", register);
// router.post("/login", login);
// router.post("/logout", (req, res)=>{
//     res.json({message: "Logout Successful"});
// });

// router.get("/me", protect, (req,res)=>{
//     res.status(200).json({
//         user:req.user
//     })
// })

// // router.get("/")

// export default router;

// import express from "express";
// import { register, login, logout, getMe } from "../controllers/authController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Public routes
// router.post("/register", register);
// router.post("/login", login);

// // Protected routes
// router.post("/logout", protect, logout);
// router.get("/me", protect, getMe);

// export default router;

import express from "express";
import { register, login, getMe } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* ---------- Public Routes ---------- */
router.post("/register", register);
router.post("/login", login);

/* ---------- Protected Routes ---------- */
router.get("/me", protect, getMe);

export default router;
