const express = require("express");

const { check } = require("express-validator");

const userControllers = require("../controllers/user-controllers");

const router = express.Router();

router.post(
  "/signup",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 5 }),
  ],
  userControllers.userSignUp
);

router.post("/login", userControllers.userLogin);

module.exports = router;
