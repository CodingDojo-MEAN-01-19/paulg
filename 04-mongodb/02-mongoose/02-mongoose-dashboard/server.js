var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
var path = require('path');

/* app.use(express.static(path.join(__dirname, './static'))); */
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/puppies_db')

//build puppy Schema
var PuppySchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    fur_color: { type: String, required: true, minlength: 3 }
}, {timestamps: true });
mongoose.model('NewPuppy', PuppySchema);
var Puppy = mongoose.model('NewPuppy')
mongoose.Promise = global.Promise;



// Routes
app.get('/', function(req, res) {
    Puppy.find({}, function(err, results) {
        if (err) { console.log(err) }
        res.render('index', {dogs: results});
    })
});

app.get('/puppies/:id', function(req,res) {
    Puppy.find({_id: req.params.id }, function(err, pupper) {
        if (err) { console.log(err) }
        res.render('show', {dog: pupper[0]})
    });
});

app.get('/puppies/new', function(req, res) {
    console.log('failure at puppies/new routing')
    res.render('new')
});

app.get('/puppies/edit/:id', function(req, res) {
    Puppy.find({_id: req.params.id }, function(err, pupper) {
        if (err) { console.log(err) }
        res.render('edit', {dog: pupper[0]})
    });
});

app.post('/puppies/new/create', function(req, res) {
    console.log("POST DATA", req.body);
    var curpup = new Puppy({name: req.body.name, fur_color: req.body.fur_color})
    curpup.save( function(err) {
        if(err) {
            console.log('something went wrong');
        } else {
            console.log('successfully added a puppy!')
        }
    res.redirect('/puppies/:id')
    });
});

app.post('/puppies/edit/:id/post', function(req, res) {
    Puppy.update({ _id: req.params.id }, req.body, function(err, result){
        if (err) { console.log(err); }
        res.redirect('/');
    });
});

app.post('/puppies/destroy/:id', function(req, res) {

    res.redirect('/')
});


// Setting our Server to Listen on Port: 8080
app.listen(8080, function() {
    console.log("listening on port 8080");
});