// Imports modules
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const dbConnection = require('./modules/dbConnection/dbConnection');

// Imports routes
const indexRouter = require('./routes/index');

// App
const app = express();

// Connect to mongoDb
dbConnection.then(() => console.log('DB OK')).
catch((err) => console.log(`DB FAIL: ${err}`));

// Routes
app.use('/', indexRouter);

// Export
module.exports = app;
