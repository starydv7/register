import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
} from "../controller/authController.js";

//router object
const router = express.Router();

//router object
//register ||method post
router.post("/register", registerController);

//LOGIN ||POST ||
router.post("/login", loginController);

//forgotPassword
router.post("/forgot-password", forgotPasswordController);

export default router;