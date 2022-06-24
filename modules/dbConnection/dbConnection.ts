/**
 * Module dependencies.
 */
import mongoose from "mongoose";
import config from "config";

/**
 * Create connection to MongoDB
 * @returns {Promise<void>}
 */
const dbConnection = async () => {
  await mongoose.connect(config.get("mongoUri"));
};

export default dbConnection();
