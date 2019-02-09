var mongoose = require('mongoose');
var { Schema } = mongoose;

var PuppySchema = new Schema({
    name:  { type: String, required: true, minlength: 3},
    fur_color: { type: String, required: true, minlength: 3 }
}, {timestamps: true });
mongoose.model('NewPuppy', PuppySchema);
mongoose.Promise = global.Promise;
var Puppy = mongoose.model('NewPuppy')

module.exports = { Puppy }