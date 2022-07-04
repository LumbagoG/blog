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
const http = __importStar(require("http"));
const normalizePort_js_1 = __importDefault(require("../normalizePort/normalizePort.js"));
const debug_1 = __importDefault(require("debug"));
const config_1 = __importDefault(require("config"));
// App
const express = require("express");
const app = express();
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Get port from environment and store in Express.
 */
const port = (0, normalizePort_js_1.default)(process.env.PORT || config_1.default.get("port"));
app.set("port", port);
/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
    const address = server.address();
    const bind = typeof address === "string" ? "pipe " + address : "port " + address;
    (0, debug_1.default)("Listening on " + bind);
};
exports.default = onListening;
