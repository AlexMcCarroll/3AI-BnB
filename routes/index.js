var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Room = require('../models/room');

mongoose.connect('mongodb://localhost/aaairbnb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


//
// //show rooms on rooms ejs
// router.get('/addroom', function (req, res) {
//     res.render('addroom');
// });
//
// //add rooms
// router.post('/addroom', function (req, res) {
//   // get data from view and add it to mongo db
//   Room(req.body).save(function(err,data){
//     console.log(data);
//     if (err) throw err;
//   })
//   res.redirect('/rooms');
// });
//
//
//
// //show all rooms
// router.get('/rooms', function (req, res) {
//   Room.find({}, function(err, propAll){
//     console.log(propAll);
//     if (err) throw err;
//   res.render('rooms', {'propAll': propAll});
//   });
// });

module.exports = router;
