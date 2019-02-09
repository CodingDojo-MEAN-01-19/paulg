const QuoteController = require('../controllers/quotes');


module.exports = function(app){
    app.get('/', QuoteController.index);
    app.post('/process', QuoteController.create);
    app.get('/quotes', QuoteController.display);
}