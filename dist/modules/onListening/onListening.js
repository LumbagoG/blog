'use strict';
var __importDefault = (this && this.__importDefault) || function(mod) {
  return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
/**
 * Module dependencies.
 */
const http_1 = __importDefault(require('http'));
const debug_1 = __importDefault(require('debug'));
const express_1 = __importDefault(require('express'));
const normalizePort_1 = __importDefault(
    require('../normalizePort/normalizePort'));
// App
const app = (0, express_1.default)();
/**
 * Create HTTP server.
 */
const server = http_1.default.createServer(app);
/**
 * Get port from environment and store in Express.
 */
const port = (0, normalizePort_1.default)(process.env.PORT || '3000');
app.set('port', port);
/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' +
      address;
  (0, debug_1.default)('Listening on ' + bind);
};
exports.default = onListening;
//# sourceMappingURL=onListening.js.map
