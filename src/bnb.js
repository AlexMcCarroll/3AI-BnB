module.exports = function(){

function BnB() {
  this._rooms = [];

  BnB.prototype.addRoom = function (room) {
    this._rooms.push(room);
  };

  BnB.prototype.listRooms = function () {
    return this._rooms;
  }
}
