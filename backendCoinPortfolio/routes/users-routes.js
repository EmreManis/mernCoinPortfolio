const express = require("express");

const userControllers = require("../controllers/user-controllers");

const router = express.Router();

router.post("/signup", userControllers.userSignUp);

router.post("/login", userControllers.userLogin);

module.exports = router;

