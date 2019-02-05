var express = require("express");
var session = require('express-session');
var app = express();

app.use(session({
    secret: 'keepitsecretkeepitsafe',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.get('/', function (req, res) {
        if(!session.hasOwnProperty('count')) {
            session.count = 1;
        } else {
            session.count += 1;
    }
    
    res.render('index', {counter: session.count});
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.listen(8000)
