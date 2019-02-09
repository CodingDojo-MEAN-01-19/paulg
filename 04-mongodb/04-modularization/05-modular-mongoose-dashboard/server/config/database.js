var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
var reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');

// mongodb connection
mongoose.connect('mongodb://localhost:27017/puppies_db', { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log('MongoDB connected'));

console.log('database is running');

fs.readdirSync(modelsPath).forEach(file => {
    if(reg.test(file)){
        console.log('inside the the filesystem');
        require(path.join(modelsPath, file));
    }
});