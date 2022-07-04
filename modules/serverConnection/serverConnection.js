"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create connect to server
 * @returns {Promise<void>}
 */
async function serverConnection(server, port, onListening, onError) {
    try {
        server.listen(port, () => console.log(`Server started on port ${port}`));
        server.on("listening", onListening);
        server.on("error", onError);
    }
    catch (e) {
        console.log(`Error: ${e}`);
    }
}
exports.default = serverConnection;
