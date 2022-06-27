"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const http = require("http");
const debug = require("debug");
const express = require("express");
const config = require("config");
const normalizePort_js_1 = __importDefault(
  require("../normalizePort/normalizePort.js")
);
// App
const app = express();
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Get port from environment and store in Express.
 */
const port = (0, normalizePort_js_1.default)(
  process.env.PORT || config.get("port")
);
app.set("port", port);
/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
    const address = server.address();
    const bind = typeof address === "string" ? "pipe " + address : "port " + address;
 'Listening on 'ng on " + bind);
};
exports.default = onListening;
//# sourceMappingURL=onListening.js.map
