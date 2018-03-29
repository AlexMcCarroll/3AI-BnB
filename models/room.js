var mongoose = require('mongoose');
var Schema = mongoose.Schema

const RoomSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  date_from: Date,
  date_to: Date,
  contact_name: String,
  contact_number: String
});

module.exports = mongoose.model("Room", RoomSchema);
