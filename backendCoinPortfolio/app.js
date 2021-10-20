const express = require('express');
const bodyParser = require('body-parser');

const transactionRoutes = require('./routes/transactions-routes');

const app = express();

app.use('/home',transactionRoutes);

app.use((error, req, res, next) =>{
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occured!'})
})

app.listen(5000);