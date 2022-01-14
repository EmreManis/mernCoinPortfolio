const HttpError = require("../models/http-error");

const { validationResult } = require("express-validator");

const Transaction = require("../models/transaction");

const getPortfolioById = async (req, res, next) => {
  const userId = "u2";
  let portf;
  try {
    portf = await Transaction.find({userId: userId});
  } catch(err) {
    const error = new HttpError("Something went wrong, could not get the transaction");
    return next(error)
  } 
  

  if (!portf || portf.length == 0) {
    const error = new HttpError("Couldnt find a portfolio for the provided id", 404);
    return next(error)
  }
  console.log(portf);
  res.json({ portf: portf.map(portf => portf.toObject({ getters:true})) });
};

const createPortfolio = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data", 422);
  }

  const { userId ,coin, price, quantity, date, fee, notes } = req.body;

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

exports.getPortfolioById = getPortfolioById;
exports.createPortfolio = createPortfolio;
