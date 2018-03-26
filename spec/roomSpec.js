describe("Room", function() {
  var room;

  beforeEach(function() {
    room = new Room("title", "description", 40.00, "20-04-2018", "30-04-2018");
  });

  describe("room specifications", function() {

    it("has a title", function() {
      expect(room._title).toBe("title")
    });

    it("has a description", function() {
      expect(room._description).toBe("description")
    });

    it("has a price", function() {
      expect(room._price).toBe(40.00)
    });

    it("has a dateFrom", function() {
      expect(room._dateFrom).toBe("20-04-2018")
    });

    it("has a dateTo", function() {
      expect(room._dateTo).toBe("30-04-2018")
    });
  })

})
