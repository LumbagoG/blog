/**
 * Module dependencies.
 */
import { Application } from "express";
import serverConnection from "./modules/serverConnection/serverConnection";
import config from "config";
import * as http from "http";
import onListening from "./modules/onListening/onListening";
import indexRouter from "./routes/index";
import normalizePort from "./modules/normalizePort/normalizePort";
import onError from "./modules/onError/onError";
import { dbConnection } from "./modules/dbConnection/dbConnection";

// Express
const express = require("express");

// App
const app: Application = express();

const server = http.createServer(app);

const port = normalizePort(process.env.PORT || config.get("port"));
app.set("port", port);

// Connect to server
serverConnection(server, port, onListening, onError)
    .then(() => console.log("Server ok"))
    .catch((err: any) => console.log(`Error server: ${err}`));

// Connect to MongoDB
dbConnection()
    .then(() => console.log("DB OK"))
    .catch((err: any) => console.log(`DB FAIL: ${err}`));

// Routes
app.use("/", indexRouter);
