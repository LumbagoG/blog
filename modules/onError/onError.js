/**
 * Module dependencies.
 */
const express = require("express");
const normalizePort = require("../normalizePort/normalizePort");

// App
const app = express();

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error) => {
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

module.exports = onError;
