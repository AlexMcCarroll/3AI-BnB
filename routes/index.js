var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Room = require('../models/room');

mongoose.connect('mongodb://localhost/aaairbnb');

/* GET home page. */
router.get('/', function(req, res, next) {
  Room.find({}, function(err, propAll) {
    console.log(propAll);
    if (err) throw err;
    res.render('index', {
      'propAll': propAll
    });
  });

});

module.exports = router;
