/**
 * Module dependencies.
 */
import * as http from "http";
import normalizePort from "../normalizePort/normalizePort.js";
import debug from "debug";
import {Application} from "express";
import config from "config";

// App
const express = require("express");
const app: Application = express();

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
