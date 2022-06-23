// Imports modules
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Index');
});

// Export
module.exports = router;
