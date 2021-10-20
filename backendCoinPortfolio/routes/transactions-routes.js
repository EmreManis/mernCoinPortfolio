const express = require("express");
const HttpError = require("../models/http-error");

const router = express.Router();

const DummyPortfolio = [
  {
    id: 'user1',
    portfolio: [
      {
        rank: "1",
        name: "Bitcoin",
        price: "$49.403.256",
        oneHour: "-1.14",
        daily: "1.40",
        weekly: "4.30",
        volume: "$50.000",
        mktCap: "$42.395.476.421",
        lastWeek: "graph",
      },
      {
        rank: "2",
        name: "Etherium",
        price: "$3.403.256",
        oneHour: "1.58",
        daily: "-4.40",
        weekly: "4.30",
        volume: "$50.473",
        mktCap: "$395.476.421",
        lastWeek: "graph",
      },
      {
        rank: "3",
        name: "Cona",
        price: "$3.403.256",
        oneHour: "1.58",
        daily: "-4.40",
        weekly: "4.30",
        volume: "$50.473",
        mktCap: "$395.476.421",
        lastWeek: "graph",
      }
    ]
  }
];

router.get("/", (req, res, next) => {
  console.log("Get request in tablebuilder");
  res.json({ message: "It works" });
});

router.get("/portfolio/:uid", (req, res, next) => {
  const userId = req.params.uid;

  const portf = DummyPortfolio.find(p => {
      return p.id === userId;
  });

  if(!portf) {
    throw new HttpError('Couldnt find a portfolio for the provided id', 404)
  }
  res.json({portf});
});

module.exports = router;