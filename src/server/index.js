/* global process */
'use strict';

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 4000;

app.get('/ping', function (req, res, done) {
    console.log(req.body);
    res.send('pong');
});

app.use('/bower_components', express.static('./bower_components'));
app.use('/app', express.static('./src/client/app'));
app.use('/*', express.static('./src/client'));

app.listen(port, function () {
  console.log('CompAdr.com running on ' + port);
});