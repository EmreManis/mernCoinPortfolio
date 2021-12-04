const express = require("express");
const mongoose = require("mongoose");

const coinListRoutes = require("./routes/coinList-routes");
const transactionRoutes = require("./routes/transactions-routes");
const userRoutes = require("./routes/users-routes");

const HttpError = require("./models/http-error");
//test

const app = express();

app.use(express.json());

app.use("/home", transactionRoutes, coinListRoutes, userRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

mongoose
  .connect(
    "mongodb+srv://testUser:12345@cluster0.61uwf.mongodb.net/auth?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });

