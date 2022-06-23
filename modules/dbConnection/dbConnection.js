// Imports
const mongoose = require('mongoose');
const config = require('config');

/**
 * Create and debug connection to MongoDb
 * @returns {Promise<void>}
 */
const dbConnection = async () => {
  await mongoose.connect(config.get('mongoUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = dbConnection();
