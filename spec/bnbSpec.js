describe('BnB', function(){
  var bnb;

  beforeEach(function(){
    bnb = new BnB();
  });

  describe('new bnb', function(){
    it('is initialized with an empty array', function(){
      expect(bnb._rooms).toEqual([]);
    })
  });

  describe('#addRoom', function(){
    it('adds the rooms to array', function(){
      room1 = new Room("title", "description", 40.00, "20-04-2018", "30-04-2018");
      bnb.addRoom(room1);
      expect(bnb._rooms).toEqual([room1]);
    });
  });

  describe('#listRooms', function(){
    it('shows a list of rooms', function(){
      room1 = new Room("title", "description", 40.00, "20-04-2018", "30-04-2018");
      bnb.addRoom(room1);
      expect(bnb.listRooms()).toEqual([room1]);
    });
  });
});
