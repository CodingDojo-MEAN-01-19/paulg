var mongoose = require('mongoose');
var Puppy = mongoose.model('NewPuppy');

module.exports = {
    
    index: function(req, res) {
        Puppy.find({}, function(err, results) {
            if (err) { console.log(err) }
            res.render('index', {dogs: results});
        })
    },

    create: function(req, res) {
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
    },

    display_all: function(req, res) {
        console.log('failure at puppies/new routing')
        res.render('new')
    },

    display_one: function(req,res) {
        Puppy.find({_id: req.params.id }, function(err, pupper) {
            if (err) { console.log(err) }
            res.render('show', {dog: pupper[0]})
        });
    },

    edit_push: function(req, res) {
        Puppy.update({ _id: req.params.id }, req.body, function(err, result){
            if (err) { console.log(err); }
            res.redirect('/');
        });
    },

    edit: function(req, res) {
        Puppy.find({_id: req.params.id }, function(err, pupper) {
            if (err) { console.log(err) }
            res.render('edit', {dog: pupper[0]})
        });
    },

    destroy: function(req, res) {
        res.redirect('/')
    }
    
}