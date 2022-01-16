const express = require("express");

const { check } = require("express-validator");

const transactionsControllers = require("../controllers/transactions-controllers");

const router = express.Router();

router.get("/transaction",  check("userId").not().isEmpty(), transactionsControllers.getPortfolioByUserId);

router.delete("/transaction",check("id").not().isEmpty(), transactionsControllers.deleteCoinById)

router.post(
  "/transaction",
  [ 
    check("userId").not().isEmpty(),
    check("coin").not().isEmpty(),
    check("price").isNumeric(),
    check("quantity").isNumeric(),
  ],
  transactionsControllers.createPortfolio
); //adds coin to portfolio

module.exports = router;
