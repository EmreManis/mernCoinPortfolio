const express = require("express");

const { check } = require("express-validator");

const transactionsControllers = require("../controllers/transactions-controllers");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.use(checkAuth);

router.get("/transaction",  check("userId").not().isEmpty(), transactionsControllers.getPortfolioByUserId);

router.delete("/transaction/delete",check("userId").not().isEmpty(), transactionsControllers.deleteCoinById)

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
