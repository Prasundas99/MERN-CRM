import express from "express";
import {
  loginUser,
  registerUser,
  emailVerification,
  passwordReset,
} from "../controller/authController.js";
const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

///  FOR RESET PASSWORD  ///
router.route("/email-verify").post(emailVerification);
router.route("/reset-password/:token").post(passwordReset);

export default router;
