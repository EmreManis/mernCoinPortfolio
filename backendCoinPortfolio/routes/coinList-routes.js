const express = require("express");

const coinListControllers = require("../controllers/coinList-controllers");

const router = express.Router();

router.get("/coinList", coinListControllers.getTableBuilder);

module.exports = router;