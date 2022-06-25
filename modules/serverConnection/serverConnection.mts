/**
 * Module dependencies.
 */
import http from "http";
import express from "express";
import normalizePort from "../normalizePort/normalizePort.mjs";
import onListening from "../onListening/onListening.mjs";
import onError from "../onError/onError.mjs";
import config from "config";

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
