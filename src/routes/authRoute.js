import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
} from "../controllers/authController.js"; //import the controller functions
import { protectRoute } from "../middleware/authMiddleware.js"; //import the protectRoute middleware

// Create a new router
const router = express.Router();

// Define the routes and the corresponding controller functions
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
// Protect the route using the protectRoute middleware
router.get("/check", protectRoute, checkAuth);

export default router;
