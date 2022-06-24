'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port))
    return val;
  if (port >= 0)
    return port;
  return false;
};
exports.default = normalizePort;
//# sourceMappingURL=normalizePort.js.map
