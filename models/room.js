var mongoose = require('mongoose');
var Schema = mongoose.Schema

const RoomSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number
});

module.exports = mongoose.model("Room", RoomSchema);
