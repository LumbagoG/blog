'use strict';
var __importDefault = (this && this.__importDefault) || function(mod) {
  return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
/**
 * Module dependencies.
 */
const express = require('express');
const config = require('config');
const normalizePort_js_1 = __importDefault(
    require('../normalizePort/normalizePort.js'));
// App
const app = express();
/**
 * Get port from environment and store in Express.
 */
const port = (0, normalizePort_js_1.default)(
    process.env.PORT || config.get('port'));
app.set('port', port);
/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error) => {
    if (error.syscall !== "listen")
        throw error;
    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
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
exports.default = onError;
//# sourceMappingURL=onError.js.map
