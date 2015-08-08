var PORT=3000
ROOTDIR='build';
var logger = require('morgan');
var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.engine('html', require('consolidate').underscore);
app.set('view engine', 'html');
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(logger('dev'));
app.use(express.static(ROOTDIR));
app.use(function(req, res, next) {
    console.log('request to: ' + req.path);
    res.render('/');
    next();
});

app.listen(PORT);
