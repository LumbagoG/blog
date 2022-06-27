/**
 * Module dependencies.
 */
import mongoose = require("mongoose");
import config = require("config");

/**
 * Create connection to MongoDB
 * @returns {Promise<void>}
 */
const dbConnection = async () => {
  await mongoose.connect(config.get("mongoUri"));
};

export default dbConnection();
