var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var morgan = require('morgan');
var counterA = require('./modules/counterA.js');
var counterB = require('./modules/counterB.js');
var counterC = require('./modules/counterC.js');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/value', function(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(counterA.getCount() + ' /a' + '</br>');
    res.write(counterB.getCount() + ' /b' + '</br>');
    res.write(counterC.getCount() + ' /c' + '</br>');
    res.end();
    var ValueAll = counterA.getCount() + ' /a' + '\n' + counterB.getCount() + ' /b' + '\n' + counterC.getCount() + ' /c' + '\n';
    fs.writeFile('requests.txt', ValueAll, (err) => {
        if (err) throw err;
    });
});

app.use('/api', require('./api.js'));

var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listening at http://%s:%s", host, port);
});
