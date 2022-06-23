/**
 * Module dependencies.
 */
const express = require("express");
const dbConnection = require("./modules/dbConnection/dbConnection");
const serverConnection = require("./modules/serverConnection/serverConnection");

// Imports routes
const indexRouter = require("./routes/index");

// App
const app = express();

// Connect to server
serverConnection
  .then(() => console.log("Server ok"))
  .catch((err) => console.log(`Error server: ${err}`));

// Connect to MongoDB
dbConnection
  .then(() => console.log("DB OK"))
  .catch((err) => console.log(`DB FAIL: ${err}`));

// Routes
app.use("/", indexRouter);

// Export
module.exports = app;
