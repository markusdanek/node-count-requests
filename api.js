var express = require('express');
var router = express.Router();
var counterA = require('./modules/counterA.js');
var counterB = require('./modules/counterB.js');
var counterC = require('./modules/counterC.js');

router.get('/a', function(req, res, next) {
    counterA.addCount();
    res.send(counterA.getCount() + ' /a');
});

router.get('/b', function(req, res, next) {
    counterB.addCount();
    res.send(counterB.getCount() + ' /b');
});

router.get('/c', function(req, res, next) {
    counterC.addCount();
    res.send(counterC.getCount() + ' /c');
});

module.exports = router;
