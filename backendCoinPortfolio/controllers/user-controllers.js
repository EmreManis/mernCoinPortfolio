const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

const userSignUp = async(req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data", 422);
  }
  const { email, password } = req.body;

  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    throw new HttpError("Could not create user. Please try again", 422);
  }

  const createdUser = new User({
    email,
    password: hashedPassword,
  });

  if (createdUser) {
    const err = new HttpError("Signing up failed. User already existing", 422);
    return next(err);
  }

  try {
    await createdUser.save();
  } catch (err) {
    throw new HttpError("Could not save the user. Please try again", 500);
  }

  res.status(201).json({ user: createdUser });
};

const userLogin = async(req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    throw new HttpError("Logging in failed. Please try again", 500);
  }

  if (!existingUser) {
    throw new HttpError(
      "Could not find the creadentials. Could not you log in",
      401
    );
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    throw new HttpError(
      "Could not log you in, please check your credentials and try again",
      500
    );
  }

  if (!isValidPassword) {
    throw new HttpError(
      "Could not find the credentials, coult not log you in",
      401
    );
  }

  res.status(201).json({ message: "Logged in" });
};

exports.userSignUp = userSignUp;
exports.userLogin = userLogin;
