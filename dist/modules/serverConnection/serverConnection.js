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
const express = require("express");
const config = require("config");
const normalizePort_js_1 = __importDefault(
  require("../normalizePort/normalizePort.js")
);
const onListening_js_1 = __importDefault(
  require("../onListening/onListening.js")
);
const onError_js_1 = __importDefault(require("../onError/onError.js"));
const app = express();
/**
 * Get por and transfer to express
 */
const port = (0, normalizePort_js_1.default)(
  process.env.PORT || config.get("port")
);
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
    server.on("listening", onListening_js_1.default);
    server.on("error", onError_js_1.default);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};
exports.default = serverConnection();
//# sourceMappingURL=serverConnection.js.map
