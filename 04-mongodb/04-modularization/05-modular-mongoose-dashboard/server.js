var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
var path = require('path');

/* app.use(express.static(path.join(__dirname, './static'))); */
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Setting our Server to Listen on Port: 8080
app.listen(8080, function() {
    console.log("listening on port 8080");
});