"use strict";
exports.__esModule = true;
/**
 * Normalize a port into a number, string, or false.
 */
var normalizePort = function (val) {
    var port = parseInt(val, 10);
    if (isNaN(port))
        return val;
    if (port >= 0)
        return port;
    return false;
};
exports["default"] = normalizePort;
