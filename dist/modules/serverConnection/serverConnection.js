"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const normalizePort_1 = __importDefault(
  require("../normalizePort/normalizePort")
);
const onListening_1 = __importDefault(require("../onListening/onListening"));
const onError_1 = __importDefault(require("../onError/onError"));
const app = (0, express_1.default)();
/**
 * Get por and transfer to express
 */
const port = (0, normalizePort_1.default)(process.env.PORT || "3000");
app.set("port", port);
/**
 * Create server
 */
const server = http_1.default.createServer(app);
/**
 * Create connect to server
 * @returns {Promise<void>}
 */
const serverConnection = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      server.listen(port, () => console.log(`Server started on port ${port}`));
      server.on("listening", onListening_1.default);
      server.on("error", onError_1.default);
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  });
exports.default = serverConnection();
//# sourceMappingURL=serverConnection.js.map
