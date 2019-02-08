var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
var path = require('path');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/my_quotes_db')

// build Schemas
var MessageSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    message: { type: String, required: true, minlength: 3 },
    date: { type: Date, default: Date.now}
}, {timestamps: true });
mongoose.model('NewMessage', MessageSchema);
var Message = mongoose.model('NewMessage')


var CommentSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    message: { type: String, required: true, minlength: 3 },
    date: { type: Date, default: Date.now}
}, {timestamps: true });
mongoose.model('NewComment', CommentSchema);
var Comment = mongoose.model('NewComment')


// Routing
app.get('/', function(req, res) {
    Message.find({}, function(err, messages) {
        if (err) { console.log(err) }
            res.render('index', { messages });
    });
});


app.post('/message', function(req, res) {
    var curmessage = new Message({
        name: req.body.name, 
        message: req.body.message
    })
    curmessage.save( function(err) {
        if(err) {
            console.log('something went wrong - message');
        } else {
            console.log('successfully added a quote!')
        }
        res.redirect('/');
    });
});

app.post('/comment', function(req,res) {
    var messageId = req.params.id;
    Message.findOne({ _id: messageId }, function(err, message) {
        var newComment = new Comment({ name: req.body.name, text: req.body.comment });
        newComment._message = message._id;
        Message.update({ _id: message._id }, { $push: { _comments: newComment }}, function(err) {

        });
        newComment.save(function(err) {
            if (err) {
                console.log('something went wrong - comment');
            } else {
                console.log("comment added");
                res.redirect("/");
            }
        });
    });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})