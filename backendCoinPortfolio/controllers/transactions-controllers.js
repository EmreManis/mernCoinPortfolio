const HttpError = require("../models/http-error");

let DummyPortfolio = [
  {
    id: "user1",
    portfolio: [
      {
        name: "Bitcoin",
        price: "$49.403.256",
        quantity: "1",
        date: "11/11/21",
        fee: "",
        notes: "",
      },
      {
        name: "Etherium",
        price: "$3.403.256",
        quantity: "3",
        date: "11/11/21",
        fee: "4",
        notes: "",
      },
      {
        name: "Cona",
        price: "$3.403.256",
        quantity: "4",
        date: "11/11/21",
        fee: "",
        notes: "Some note added",
      },
    ],
  },
];

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

const createPortfolio = (req, res, next) => {
  const { name, price, quantity, date, fee, notes } = req.body;

  const addedCoin = {
    name,
    price,
    quantity,
    date,
    fee,
    notes,
  };

  const portf = DummyPortfolio.find((p) => {
    //logic will be change after db
    if (p.id === "user1") {
      return p.portfolio.push(addedCoin);
    }
  });
  res.status(201).json({ portf });
};

exports.getPortfolioById = getPortfolioById;
exports.createPortfolio = createPortfolio;
