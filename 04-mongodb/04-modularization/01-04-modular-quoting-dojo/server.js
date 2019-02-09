var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app = express();


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './static')));
mongoose.connect('mongodb://localhost/my_quotes_db')
app.use(bodyParser.urlencoded({ extended: true }));



require('./server/config/database');
require('./server/config/routes')(app);


app.listen(8000, function() {
    console.log("listening on port 8000");
})