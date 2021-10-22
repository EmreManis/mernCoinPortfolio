const HttpError = require("../models/http-error");


const getPortfolioById = (req, res, next) => {
  const userId = req.params.uid;

  // const portf = DummyPortfolio.find((p) => {
  //   return p.id === userId;
  // });

  // if (!portf) {
  //   throw new HttpError("Couldnt find a portfolio for the provided id", 404);
  // }
  // res.json({ portf });
};

// const createPortfolio = (req, res ,next) => {
//   const {name, price, } = req.body;

// };

exports.getPortfolioById = getPortfolioById;

