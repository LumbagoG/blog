// Imports
const mongoose = require('mongoose');
const config = require('config');

/**
 * Create connection to MongoDB
 * @returns {Promise<void>}
 */
const dbConnection = async () => {
  await mongoose.connect(config.get('mongoUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = dbConnection();
