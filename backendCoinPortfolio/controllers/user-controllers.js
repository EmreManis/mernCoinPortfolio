const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

const userSignUp = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please check your data",
      422
    );
    next(error);
  }
  const { email, password } = req.body;

  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Could not create user. Please try again", 422);
    next(error);
  }

  const createdUser = new User({
    email,
    password: hashedPassword,
  });

  let existingUser;
  try{
    existingUser = await User.findOne({email: email});
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      'User exists already, please login instead.',
      422
    );
    return next(error);
  }

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      "Could not save the user. Please try again",
      500
    );
    next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      "private_key_dont_share",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Signing up failed. Please try again later",
      500
    );
    next(error);
  }
  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Logging in failed. Please try again", 500);
    next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Could not find the creadentials. Could not you log in",
      403
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Could not log you in, please check your credentials and try again",
      500
    );
    next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Could not find the credentials, coult not log you in",
      403
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      "private_key_dont_share",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Login in failed. Please try again later",
      500
    );
    next(error);
  }
  res
    .status(201)
    .json({ userId: existingUser.id, email: existingUser.email, token: token });

};

exports.userSignUp = userSignUp;
exports.userLogin = userLogin;
