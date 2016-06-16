var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var counter = require('./counter.js');
app.get('/value', function(req, res, next) {
    res.send('Count = ' + counter.getCount());
});

app.use('/api', require('./api.js'));

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listening at http://%s:%s", host, port);
});
