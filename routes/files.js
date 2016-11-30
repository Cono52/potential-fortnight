var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var File = require('../models/File.js');

/* GET /files listing. */
router.get('/', function(req, res, next) {
  File.find(function (err, files) {
    if (err) return next(err);
    res.json(files);
  });
});

module.exports = router;
