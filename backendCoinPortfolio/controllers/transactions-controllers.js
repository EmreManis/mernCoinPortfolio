const HttpError = require("../models/http-error");

const { validationResult } = require("express-validator");

const Transaction = require("../models/transaction");

const getPortfolioByUserId = async (req, res, next) => {
  
  let userId = req.query.ID;
  let portf;
  try {
    portf = await Transaction.find({ userId: userId });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not get the transaction",
      500
    );
    return next(error);
  }

  if (portf.length == 0) {
    const error = new HttpError(
      "Couldnt find a portfolio for the provided id",
      404
    );
    return next(error);
  }
  res.json({ portf: portf.map((portf) => portf.toObject({ getters: true })) });
};

const deleteCoinById = async (req, res, next) => {
  const { id } = req.body;
  let coin;
  try {
    coin = await Transaction.findById(id);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong here, please try again later",
      500
    );
    next(error);
  }

  if (coin.userId !== req.userData.userId) {
    const error = new HttpError("You are not allowed to do this action", 401);
    return next(error);
  }

  try {
    await coin.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, please try again later",
      500
    );
    next(error);
  }

  res.status(200).json({ message: "Coin deleted" });
};

const createPortfolio = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data", 422);
  }

  const { userId, coin, price, quantity, date, fee, notes } = req.body;

  const createdCoin = new Transaction({
    userId,
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

exports.getPortfolioByUserId = getPortfolioByUserId;
exports.createPortfolio = createPortfolio;
exports.deleteCoinById = deleteCoinById;
