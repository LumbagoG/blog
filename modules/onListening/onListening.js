"use strict";
exports.__esModule = true;
/**
 * Module dependencies.
 */
var http = require("http");
var debug = require("debug");
var express = require("express");
var config = require("config");
var normalizePort_js_1 = require("../normalizePort/normalizePort.js");
// App
var app = express();
/**
 * Create HTTP server.
 */
var server = http.createServer(app);
/**
 * Get port from environment and store in Express.
 */
var port = (0, normalizePort_js_1["default"])(process.env.PORT || config.get("port"));
app.set("port", port);
/**
 * Event listener for HTTP server "listening" event.
 */
var onListening = function () {
    var address = server.address();
    var bind = typeof address === "string" ? "pipe " + address : "port " + address;
    debug("Listening on " + bind);
};
exports["default"] = onListening;
