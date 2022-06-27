"use strict";
exports.__esModule = true;
// Imports modules
var express = require("express");
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
    res.send("Index");
});
// Export
exports["default"] = router;
