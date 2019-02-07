const express = require('express');
const app = express();
const path = require('path');
const server = app.listen(1337); 
const io = require('socket.io').listen(server); 
var count = 0

app.use(express.static(path.join(__dirname, "views")));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

io.on('connection', function(socket) {
    socket.on('button_push', function(){
        console.log("button is pushed")
        count++
        socket.emit('increase_one', {number: count});
    });

    socket.on('reset_push', function() {
        count = 0
        socket.emit('reset_to', {number: count});
    });
});
