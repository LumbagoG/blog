"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const config_1 = __importDefault(require("config"));
const mongoose_1 = __importDefault(require("mongoose"));

/**
 * Create connection to MongoDB
 * @returns {<void>}
 */
async function dbConnection() {
  await mongoose_1.default.connect(config_1.default.get("mongoUri"));
}

exports.dbConnection = dbConnection;
