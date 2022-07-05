/**
 * Module dependencies.
 */
import express from "express";
import config from "config";
import http from "http";
import cors from 'cors';

// Imports modules
import { dbConnection } from "./modules/dbConnection/dbConnection";
import { serverConnection } from "./modules/serverConnection/serverConnection";
import onListening from "./modules/onListening/onListening";
import normalizePort from "./modules/normalizePort/normalizePort";
import onError from "./modules/onError/onError";

// Imports routes
import indexRouter from "./routes/index";
import registerRoutes from "./routes/register.routes";

// App
const app = express();

// Server
const server = http.createServer(app);

// Port
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

// Cors
app.use(cors())


// Routes
app.use("/", indexRouter);
app.use("/reg", registerRoutes);
