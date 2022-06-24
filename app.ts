/**
 * Module dependencies.
 */
import express from "express";
import dbConnection from "./modules/dbConnection/dbConnection";
import serverConnection from "./modules/serverConnection/serverConnection";

// Imports routes
const indexRouter = require("../routes/index");

// App
const app = express();

// Connect to server
serverConnection
    .then(() => console.log("Server ok"))
    .catch((err: any) => console.log(`Error server: ${err}`));

// Connect to MongoDB
dbConnection
  .then(() => console.log("DB OK"))
  .catch((err: any) => console.log(`DB FAIL: ${err}`));

// Routes
app.use("/", indexRouter);

// Export
module.exports = app;
