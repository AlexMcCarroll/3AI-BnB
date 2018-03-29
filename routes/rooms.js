var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Room = require('../models/room');
mongoose.connect('mongodb://localhost/aaairbnb');

// /* GET home page. */
//show all rooms
router.get('/', function(req, res) {
  Room.find({}, function(err, propAll) {
    console.log(propAll);
    if (err) throw err;
    res.render('rooms', {
      'propAll': propAll
    });
  });
});

//Goes to add room form
router.get('/add', function(req, res) {
  res.render('addroom');
});

// Posts add rooms form and goes back to get /room
router.post('/add', function(req, res) {
  // get data from view and add it to mongo db
  Room(req.body).save(function(err, data) {
    // console.log(data);
    if (err) throw err;
  })
  res.redirect('/rooms');
});

module.exports = router;
