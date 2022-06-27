"use strict";
exports.__esModule = true;
/**
 * Module dependencies.
 */
var express = require("express");
var config = require("config");
var normalizePort_js_1 = require("../normalizePort/normalizePort.js");
// App
var app = express();
/**
 * Get port from environment and store in Express.
 */
var port = (0, normalizePort_js_1["default"])(process.env.PORT || config.get("port"));
app.set("port", port);
/**
 * Event listener for HTTP server "error" event.
 */
var onError = function (error) {
    if (error.syscall !== "listen")
        throw error;
    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};
exports["default"] = onError;
