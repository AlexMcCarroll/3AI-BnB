const Browser = require('zombie');
var mongoose = require('mongoose')
var expect  = require('chai').expect;
var request = require('request');
mongoose.connect('mongodb://localhost/aaairbnb');


Browser.localhost('localhost', 3000);

describe('AAAIRBnB', function() {

  const browser = new Browser();

  describe ('Index', function() {
    before(function(done) {
      browser.visit('/', done);
    });
      it('status', function(done){
          request('http://localhost:3000/', function(error, response, body) {
              expect(response.statusCode).to.equal(200);
            done();
          });
      });

      it('shows title', function(){
        browser.assert.text('h1', "AAAIR-BNB");
      });
  });

  describe ('Advertising rooms page opens', function() {
    before(function(done) {
        browser
          .pressButton("Advertise your nest...", done);
        });

    it('has a form to enter room details', function() {
      browser.assert.elements('form');
      browser.assert.element('form input[name=title]');
      browser.assert.element('form textarea[name=description]');
      browser.assert.element('form input[name=price]');
      browser.assert.element('form input[name=location]');
      browser.assert.element('form input[name=date_from]');
      browser.assert.element('form input[name=date_to]');
      browser.assert.element('form input[name=contact_name]');
      browser.assert.element('form input[name=contact_number]');
    });
  });

  describe('add a room adds a room', function() {
    before(function(done) {
        browser.visit('/addroom', function() {
        browser.fill('title', 'title');
        browser.fill('description', 'description');
        browser.fill('price', '20');
        browser.fill('location', 'london');
        // browser.fill('date_from', '1')
        // browser.fill('date_to', 'misery-land')
        browser.fill('contact_name', 'John');
        browser.fill('contact_number', '0198790');
        browser.pressButton('Submit', done);
      });
    });
  });


})
