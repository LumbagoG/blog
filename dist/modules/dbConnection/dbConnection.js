"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
/**
 * Create connection to MongoDB
 * @returns {Promise<void>}
 */
const dbConnection = async () => {
  await mongoose_1.default.connect(config_1.default.get("mongoUri"));
};
exports.default = dbConnection();
//# sourceMappingURL=dbConnection.js.map
