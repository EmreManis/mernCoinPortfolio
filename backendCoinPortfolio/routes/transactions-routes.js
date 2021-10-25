const express = require("express");

const transactionsControllers = require('../controllers/transactions-controllers');

const router = express.Router();

router.get("/portfolio/:uid", transactionsControllers.getPortfolioById);

// router.post("/transaction/:coinName", transactionsControllers.createPortfolio);

module.exports = router;
