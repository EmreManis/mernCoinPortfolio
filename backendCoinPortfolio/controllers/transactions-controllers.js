const HttpError = require("../models/http-error");

const { validationResult } = require("express-validator");

const Transaction = require("../models/transaction");

const getPortfolioById = (req, res, next) => {
  const userId = req.params.uid;

  const portf = DummyPortfolio.find((p) => {
    return p.id === userId;
  });

  if (!portf) {
    throw new HttpError("Couldnt find a portfolio for the provided id", 404);
  }
  res.json({ portf });
};

const createPortfolio = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data", 422);
  }

  const { coin, price, quantity, date, fee, notes } = req.body;

  const createdCoin = new Transaction({
    coin,
    price,
    quantity,
    date,
    fee,
    notes,
  });

  try {
    await createdCoin.save();
  } catch (err) {
    const error = new HttpError(
      "Adding coin failed, please try again later",
      500
    );
    return next(error);
  }

  res.status(201).json({ createdCoin });
};

exports.getPortfolioById = getPortfolioById;
exports.createPortfolio = createPortfolio;
