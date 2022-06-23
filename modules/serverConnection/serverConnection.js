/**
 * Module dependencies.
 */
const http = require("http");
const express = require("express");
const normalizePort = require("../normalizePort/normalizePort");
const onListening = require("../onListening/onListening");
const onError = require("../onError/onError");

const app = express();

/**
 * Get por and transfer to express
 */
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create server
 */
const server = http.createServer(app);

/**
 * Create connect to server
 * @returns {Promise<void>}
 */
const serverConnection = async () => {
  try {
    server.listen(port, () => console.log(`Server started on port ${port}`));
    server.on("listening", onListening);
    server.on("error", onError);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

module.exports = serverConnection();
