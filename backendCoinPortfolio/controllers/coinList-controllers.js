const HttpError = require("../models/http-error");

const dummyCoinList = [
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
  },
];

const WebSocketClient = require("websocket").client;


const http = require("http");
const webSocketServer = require("websocket").server;
const server = http.createServer();
server.listen(8000);
const wsServer = new webSocketServer({
  httpServer: server,
});
wsServer.on("request", req => {
  const connection = req.accept(null, req.origin);
  console.log("listening on port 8000");
})

const getTableBuilder = (req, res, next) => {
  try {
    res.json(dummyCoinList);
  } catch {
    throw new HttpError("Can not get the coin list !");
  }

  const interval = "1m";
  const symbol = "btcusd";
  const socket = `wss://stream.binance.com:9443/ws/${symbol}t@kline_${interval}`;

  var client = new WebSocketClient();

  client.on("connectFailed", function (error) {
    console.log("Connect Error: " + error.toString());
  });

  client.on("connect", function (connection) {
    console.log("WebSocket Client Connected");
    connection.on("error", function (error) {
      console.log("Connection Error: " + error.toString());
    });
    connection.on("close", function () {
      console.log("echo-protocol Connection Closed");
    });
    connection.on("message", function (message) {
      console.log(message);
      // logic will be implemented here
    });
  });

  client.connect(socket, () => {
    console.log("connected");
  });
};

exports.getTableBuilder = getTableBuilder;
