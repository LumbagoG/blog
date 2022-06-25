'use strict';
var __importDefault = (this && this.__importDefault) || function(mod) {
  return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
/**
 * Module dependencies.
 */
const express_1 = __importDefault(require('express'));
const dbConnection_mjs_1 = __importDefault(
    require('./modules/dbConnection/dbConnection.mjs'));
const serverConnection_mjs_1 = __importDefault(
    require('./modules/serverConnection/serverConnection.mjs'));
// Imports routes
const index_mjs_1 = __importDefault(require('./routes/index.mjs'));
// App
const app = (0, express_1.default)();
// Connect to server
serverConnection_mjs_1.default.then(() => console.log('Server ok')).
catch((err) => console.log(`Error server: ${err}`));
// Connect to MongoDB
dbConnection_mjs_1.default.then(() => console.log('DB OK')).
catch((err) => console.log(`DB FAIL: ${err}`));
// Routes
app.use('/', index_mjs_1.default);
//# sourceMappingURL=app.mjs.map
