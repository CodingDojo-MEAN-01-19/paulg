var express = require("express");
var app = express()

app.get('/', function(req, res) {
    res.send("<h4>Hello Express</h4>");
})

app.use(express.static(__dirname + "/static"));

app.listen(8000)
