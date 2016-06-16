var express = require('express');
var router = express.Router();

var counter = require('./counter.js');

router.get('/a', function(req, res, next) {
    counter.addCount();
    res.send('API Called');
});

router.get('/b', function(req, res, next) {
    counter.addCount();
    res.send('API Called');
});

router.get('/c', function(req, res, next) {
    counter.addCount();
    res.send('API Called');
});

module.exports = router;
