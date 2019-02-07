const express = require('express');
const app = express();
const path = require('path');
const server = app.listen(1337); 
const io = require('socket.io').listen(server); 


app.use(express.static(path.join(__dirname, "views")));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

io.on('connection', function(socket) {
    socket.on('updated_message', function(data){
        socket.emit('updated_message', {msg: "You emitted the following information to the server: {firstname: " + data.firstname + ", lastname: " + data.lastname + ", dojolocation: " + data.dojolocation + ", favlanguage: " + data.favlanguage + ", comment: " + data.comment});
        socket.emit('random_number', {number: Math.floor(Math.random()*100)});
    });
});
