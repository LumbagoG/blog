import { Server } from "http";

/**
 * Create connect to server
 * @returns {Promise<void>}
 */
export default async function serverConnection(
  server: Server,
  port: any,
  onListening: () => any,
  onError: (error?: any) => any
) {
  try {
    server.listen(port, () => console.log(`Server started on port ${port}`));
    server.on("listening", onListening);
    server.on("error", onError);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}
