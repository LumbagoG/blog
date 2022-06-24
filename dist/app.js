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
const express_1 = __importDefault(require("express"));
const dbConnection_1 = __importDefault(
  require("./modules/dbConnection/dbConnection")
);
const serverConnection_1 = __importDefault(
  require("./modules/serverConnection/serverConnection")
);
// Imports routes
const index_1 = __importDefault(require("./routes/index"));
// App
const app = (0, express_1.default)();
// Connect to server
serverConnection_1.default
  .then(() => console.log("Server ok"))
  .catch((err) => console.log(`Error server: ${err}`));
// Connect to MongoDB
dbConnection_1.default
  .then(() => console.log("DB OK"))
  .catch((err) => console.log(`DB FAIL: ${err}`));
// Routes
app.use("/", index_1.default);
//# sourceMappingURL=app.js.map
