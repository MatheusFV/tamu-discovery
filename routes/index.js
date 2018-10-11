var express = require('express');
var DiscoveryController = require('./../modules/discovery/discoveryController.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/discover', function(req, res, next) {
    DiscoveryController.discoverDevices(req, res)
});

module.exports = router;
