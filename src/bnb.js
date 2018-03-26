function BnB() {
  this._rooms = [];

  BnB.prototype.addRoom = function (room) {
    this._rooms.push(room);
  };
}
