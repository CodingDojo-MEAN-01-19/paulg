var express = require("express");
var app = express();
var path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
})

app.use(express.static("static"))
app.get('/cats/:urlid', function(req, res) {

    var catid = req.params.urlid
    console.log(catid)
    var catinfo = [
        {id: 01, name: "Mittens", age: "3", weight: "12 lbs", food: "Salmon skin", sleep: "Under the blankets"}, 
        {id: 02, name: "Gregory", age: "8", weight: "6 lbs", food: "Sushi", sleep: "On top of the refrigerator"}, 
        {id: 03, name: "Meatball", age: "<1", weight: "9 lbs", food: "Cream cheese", sleep: "Near the window, in the sun"}
    ];
    for (var i in catinfo) {
        if (catinfo[i].id == catid){
            var currcat = catinfo[i]
        }
    }
    res.render('cat', {cat: currcat});
})


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.listen(8000)
