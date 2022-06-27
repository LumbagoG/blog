"use strict";
exports.__esModule = true;
/**
 * Module dependencies.
 */
var express = require("express");
var dbConnection_js_1 = require("./modules/dbConnection/dbConnection.js");
var serverConnection_js_1 = require("./modules/serverConnection/serverConnection.js");
// Imports routes
var index_js_1 = require("./routes/index.js");
// App
var app = express();
// Connect to server
serverConnection_js_1["default"]
  .then(function () {
    return console.log("Server ok");
  })
  ["catch"](function (err) {
    return console.log("Error server: ".concat(err));
  });
// Connect to MongoDB
dbConnection_js_1["default"]
  .then(function () {
    return console.log("DB OK");
  })
  ["catch"](function (err) {
    return console.log("DB FAIL: ".concat(err));
  });
// Routes
app.use("/", index_js_1["default"]);
