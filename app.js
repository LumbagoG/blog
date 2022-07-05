"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const express_1 = __importDefault(require("express"));
const serverConnection_1 = __importDefault(require("./modules/serverConnection/serverConnection"));
const config_1 = __importDefault(require("config"));
const http = __importStar(require("http"));
const onListening_1 = __importDefault(require("./modules/onListening/onListening"));
const index_1 = __importDefault(require("./routes/index"));
const normalizePort_1 = __importDefault(require("./modules/normalizePort/normalizePort"));
const onError_1 = __importDefault(require("./modules/onError/onError"));
const dbConnection_1 = require("./modules/dbConnection/dbConnection");
// Express
// const express = require("express");
// App
const app = (0, express_1.default)();
const server = http.createServer(app);
const port = (0, normalizePort_1.default)(process.env.PORT || config_1.default.get("port"));
app.set("port", port);
// Connect to server
(0, serverConnection_1.default)(server, port, onListening_1.default, onError_1.default)
    .then(() => console.log("Server ok"))
    .catch((err) => console.log(`Error server: ${err}`));
// Connect to MongoDB
(0, dbConnection_1.dbConnection)()
    .then(() => console.log("DB OK"))
    .catch((err) => console.log(`DB FAIL: ${err}`));
// Routes
app.use("/", index_1.default);
