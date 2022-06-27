/**
 * Module dependencies.
 */
import http = require("http");
import express = require("express");
import config = require("config");
import normalizePort from "../normalizePort/normalizePort.js";
import onListening from "../onListening/onListening.js";
import onError from "../onError/onError.js";

const app = express();

/**
 * Get por and transfer to express
 */
const port = normalizePort(process.env.PORT || config.get("port"));
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

export default serverConnection();
