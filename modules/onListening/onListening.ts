/**
 * Module dependencies.
 */
import http = require("http");
import debug = require("debug");
import express = require("express");
import config = require("config");
import normalizePort from "../normalizePort/normalizePort.js";

// App
const app = express();

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || config.get("port"));
app.set("port", port);

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = (): any => {
  const address = server.address();

  const bind =
    typeof address === "string" ? "pipe " + address : "port " + address;
  debug("Listening on " + bind);
};

export default onListening;
