'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const config = require('config');
/**
 * Create connection to MongoDB
 * @returns {Promise<void>}
 */
const dbConnection = async () => {
  await mongoose.connect(config.get('mongoUri'));
};
exports.default = dbConnection();
//# sourceMappingURL=dbConnection.js.map
