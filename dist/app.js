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
const express = require("express");
const dbConnection_js_1 = __importDefault(
  require("./modules/dbConnection/dbConnection.js")
);
const serverConnection_js_1 = __importDefault(
  require("./modules/serverConnection/serverConnection.js")
);
// Imports routes
const index_js_1 = __importDefault(require("./routes/index.js"));
// App
const app = express();
// Connect to server
serverConnection_js_1.default
  .then(() => console.log("Server ok"))
  .catch((err) => console.log(`Error server: ${err}`));
// Connect to MongoDB
dbConnection_js_1.default
  .then(() => console.log("DB OK"))
  .catch((err) => console.log(`DB FAIL: ${err}`));
// Routes
app.set("/", index_js_1.default);
//# sourceMappingURL=app.js.map
