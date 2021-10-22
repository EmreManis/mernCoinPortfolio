const express = require("express");

const transactionsControllers = require('../controllers/transactions-controllers');

const router = express.Router();

router.get("/", transactionsControllers.getTableBuilder);

router.get("/portfolio/:uid", transactionsControllers.getPortfolioById);

module.exports = router;
