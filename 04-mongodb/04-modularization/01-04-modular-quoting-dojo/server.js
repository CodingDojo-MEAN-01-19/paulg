var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
var path = require('path');

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/my_quotes_db')

//build Quote Schema
var QuoteSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    quote: { type: String, required: true, minlength: 3 },
    date: { type: Date, default: Date.now}
}, {timestamps: true });
mongoose.model('NewQuote', QuoteSchema);
var Quote = mongoose.model('NewQuote')
mongoose.Promise = global.Promise;

/* require('./server/config/database'); */
require('./server/config/routes')(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})