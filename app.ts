/**
 * Module dependencies.
 */
import express = require("express");
import dbConnection from "./modules/dbConnection/dbConnection.js";
import serverConnection from "./modules/serverConnection/serverConnection.js";

// Imports routes
import indexRouter from "./routes/index.js";

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
