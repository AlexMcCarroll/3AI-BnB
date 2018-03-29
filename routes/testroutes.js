var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('testroutes', { hi: 'say hi to people', sum: (1+1)});
});

module.exports = router;
