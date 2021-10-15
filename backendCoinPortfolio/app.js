const express = require('express');
const bodyParser = require('body-parser');

const transactionRoutes = require('./routes/transactions-routes');

const app = express();

app.use('/home',transactionRoutes);

app.listen(5000);