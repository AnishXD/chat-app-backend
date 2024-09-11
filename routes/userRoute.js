import express from "express";
import { getOtherUsers, login, logout, register } from "../controllers/userController.js";
// import isAuthenticated from "../middleware/isAuthenticated.js"; // No longer needed

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(getOtherUsers); // Removed isAuthenticated middleware

export default router;
