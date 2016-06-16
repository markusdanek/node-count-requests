var express = require('express');
var router = express.Router();

var counter = require('./counter.js');

router.get('/a', function(req, res, next) {
    counter.addCount();
    res.send(counter.getCount() + '/a');
});

router.get('/b', function(req, res, next) {
    counter.addCount();
    res.send(counter.getCount() + '/b');
});

router.get('/c', function(req, res, next) {
    counter.addCount();
    res.send(counter.getCount() + '/c');
});

module.exports = router;
