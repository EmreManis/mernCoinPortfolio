const HttpError = require("../models/http-error");

// Variable should start with lowercased letter
const DummyCoinList = [
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
];

const getTableBuilder = (req, res, next) => {
  try {
    res.json(DummyCoinList);
  } catch {
    throw new HttpError("Can not get the coin list !");
  }
};

exports.getTableBuilder = getTableBuilder;