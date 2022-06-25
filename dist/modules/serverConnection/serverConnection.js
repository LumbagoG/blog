"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const normalizePort_1 = __importDefault(require("../normalizePort/normalizePort"));
const onListening_1 = __importDefault(require("../onListening/onListening"));
const onError_1 = __importDefault(require("../onError/onError"));
const config_1 = __importDefault(require("config"));
const app = (0, express_1.default)();
/**
 * Get por and transfer to express
 */
const port = (0, normalizePort_1.default)(process.env.PORT || config_1.default.get("port"));
app.set("port", port);
/**
 * Create server
 */
const server = http_1.default.createServer(app);
/**
 * Create connect to server
 * @returns {Promise<void>}
 */
const serverConnection = async () => {
  try {
    server.listen(port, () => console.log(`Server started on port ${port}`));
    server.on("listening", onListening_1.default);
    server.on("error", onError_1.default);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};
exports.default = serverConnection();
//# sourceMappingURL=serverConnection.js.map
