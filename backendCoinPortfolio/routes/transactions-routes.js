const express = require("express");

const { check } = require("express-validator");

const transactionsControllers = require("../controllers/transactions-controllers");

const router = express.Router();

router.get("/portfolio/:uid", transactionsControllers.getPortfolioById);

router.post(
  "/transaction",
  [
    check("coin").not().isEmpty(),
    check("price").isNumeric(),
    check("quantity").isNumeric(),
  ],
  transactionsControllers.createPortfolio
); //adds coin to portfolio

module.exports = router;
