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

router.post('/', function(req, res, next) {
  File.create(req.body, function (err, file) {
    if (err) return next(err);
    res.json(file);
  });
});

router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
