/**
 * Module dependencies.
 */
const http = require("http");
const debug = require("debug")("observer:server");
const express = require("express");
const normalizePort = require("../normalizePort/normalizePort");

// App
const app = express();

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const address = server.address();

  const bind =
    typeof address === "string" ? "pipe " + address : "port " + address;
  debug("Listening on " + bind);
};

module.exports = onListening;
