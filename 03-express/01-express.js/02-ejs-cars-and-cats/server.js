var express = require("express");
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
})

app.get('/cars', function(req, res) {
    res.render('cars');
})

app.get('/newcars', function(req, res) {
    res.render('newcars');
})

app.get('/cats', function(req, res) {
    res.render('cats');
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.listen(8000)
