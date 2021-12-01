const express = require("express");

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

app.listen(5000);
