/**
 * Module dependencies.
 */
import http from "http";
import debug from "debug";
import express from "express";
import normalizePort from "../normalizePort/normalizePort";

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
const onListening = (): any => {
  const address = server.address();

  const bind =
      typeof address === "string" ? "pipe " + address : "port " + address;
  debug("Listening on " + bind);
};

export default onListening;
