'use strict';
exports.__esModule = true;
// Imports modules
var express_1 = require('express');
var router = express_1['default'].Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Index');
});
// Export
exports['default'] = router;
