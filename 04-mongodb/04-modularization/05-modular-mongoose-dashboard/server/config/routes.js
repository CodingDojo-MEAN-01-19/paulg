const QuoteController = require('../controllers/quotes');

module.exports = function(app){
    app.get('/', QuoteController.index);
    app.get('/puppies/:id', QuoteController.display_one);
    app.get('/puppies/new', QuoteController.create);
    app.get('/puppies/edit/:id', QuoteController.edit);
    app.post('/puppies/new/create', QuoteController.display_all);
    app.post('/puppies/edit/:id/post', QuoteController.edit_post);
    app.post('/puppies/destroy/:id', QuoteController.destroy);
}