import config from "config";
import mongoose from "mongoose";

/**
 * Create connection to MongoDB
 * @returns {<void>}
 */
export async function dbConnection() {
  await mongoose.connect(config.get("mongoUri"));
}
