const { v4: uuid } = require("uuid");

const HttpError = require("../models/http-error");

const DummyUsers = [
  {
    id: "u1",
    email: "test@test.com",
    password: "test",
  },
];

const userSignUp = (req, res, next) => {
  const { email, password } = req.body;

  const createdUser = {
    id: uuid(),
    email,
    password,
  };

  DummyUsers.push(createdUser);

  res.status(201).json({ user: createdUser });
};

const userLogin = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DummyUsers.find((u) => u.email === email);
  if(!identifiedUser || identifiedUser.password !== password) {
      throw new HttpError("Could not identify user, credentials seem to be wrong", 401);
  }

  res.status(201).json({message: "Logged in"});
};

exports.userSignUp = userSignUp;
exports.userLogin = userLogin;
