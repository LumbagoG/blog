/**
 * Module dependencies.
 */
import { Application } from "express";
import normalizePort from "../normalizePort/normalizePort.js";
import config from "config";

// App
const express = require("express");
const app: Application = express();

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || config.get("port"));
app.set("port", port);

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error?: any): any => {
  if (error.syscall !== "listen") throw error;

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

export default onError;
