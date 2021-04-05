import Auth from "../model/auth.js";
import { generateToken } from "../utils/generateToken.js";
import { v4 as uuidv4 } from "uuid";
import resetPasswordModel from "../model/resetPasswordModel.js";
import resetPassword_mailer from "../mailers/forgetPassword_mailer.js";
import bcrypt from "bcrypt";

// @purpose: Register new user and get token
// @route:   POST /register
// @access   Public
export const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const userExists = await Auth.findOne({ email: email });

  if (userExists) {
    res.status(400);
    const err = new Error("User already exists");
    next(err);
  }
  const user = await Auth.create({
    name,
    email,
    password,
  });
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(404);
    const err = new Error("Invaid User data");
    next(err);
  }
};

// @purpose:   Auth user and get token
// @route:  POST /login
// @access  Public
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await Auth.findOne({ email: email });

  if (user && (await user.checkPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    const err = new Error("Invalid email or password");
    next(err);
  }
};

///   FORGET PASSWORD   ///

export const emailVerification = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await Auth.findOne({ email: email });
    const accessToken = uuidv4();
    const resetPassword = new resetPasswordModel({
      user: user._id,
      accessToken: accessToken,
      isValid: true,
    });

    await resetPassword.save();

    const resetPasswordReq = await resetPasswordModel
      .findOne({ user: user._id })
      .populate("user");
    console.log(resetPasswordReq);
    // Sending Mail
    resetPassword_mailer(resetPasswordReq);

    res.json({ accessToken: resetPassword.accessToken });
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export const passwordReset = async (req, res, next) => {
  const { password } = req.body;
  try {
    const resetPasswordToken = await resetPasswordModel.findOne({
      accessToken: req.params.token,
    });
    console.log(resetPasswordToken);
    if (resetPasswordToken.isValid) {
      const user = await (
        await Auth.findOne({ _id: resetPasswordToken.user })
      ).populate("User");
      if (user) {
        if (user && !(await user.checkPassword(password))) {
          user.password = password;
          user.save();

          // delete reset password token
          const resetPasswordInvalid = await resetPasswordModel.findOneAndUpdate(
            {
              accessToken: req.params.token,
            },
            { isValid: false },
            { new: true }
          );

          res.status(200);
          res.json({
            message: `${user.name} Password Reset successfully`,
            resetPasswordToken: resetPasswordInvalid,
          });
        } else {
          res.status(404);
          const err = new Error("Password cannot be same");
          next(err);
        }
      } else {
        res.status(404);
        const err = new Error("User not Found");
        next(err);
      }
    } else {
      res.json({
        message: `Token expired`,
      });
    }
  } catch (error) {
    res.status(404);
    next(error);
  }
};
