const express = require('express');
// require('dotenv').config();
const cors = require('cors');

const app = express();

const userRoutes = require('./userRoutes');
const transactionRoutes = require('./transactionRoutes');

app.use(cors());
app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);

module.exports = app;