var express = require("express");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keepitsecretkeepitsafe',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60000}
}));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.render('index');
})

app.post('/process', function (req, res) {
    req.session.firstname = req.body.firstname;
    req.session.lastname = req.body.lastname;
    req.session.dojolocation = req.body.dojolocation;
    req.session.favlanguage = req.body.favlanguage;
    req.session.comment = req.body.comment;
    res.redirect('/result');
});

app.get('/result', function (req, res) {
    var forminfo = {name: req.session.name, favlanguage: req.session.favlanguage, location: req.session.location, comment: req.session.comment}
    res.render('result', {info: forminfo} )
})

app.listen(8000)
