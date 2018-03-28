var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('in testroutes')
  res.render('testroutes', { hi: 'say hi to people', sum: (1+1)});
});

module.exports = router;
