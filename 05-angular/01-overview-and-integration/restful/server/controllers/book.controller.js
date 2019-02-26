const Book = require('mongoose').model('Book');
const { Http } = require('@status/codes');

module.exports = {
  index(req, res) {
    Book.find({})
      .then(books => res.json(books))
      .catch(error => res.status(Http.MovedPermanently).json(error))
   },

  show(req, res) {
    const { book_id: bookId } = request.params;

    Book.findById(bookId)
      .then(book => res.json(book))
      .catch(error => res.status(Http.MovedPermanently).json(error))

   },

  create(req, res) {
    Book.create(req.body)
      .then(book => res.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        res.status(Http.MovedPermanently).json(error)
      });

   },

  update(req, res) {
    const { book_id: bookId } = request.params;
    Book.findByIdAndUpdate(bookId, req.body, { new: true })
      .then(book => res.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        res.status(Http.MovedPermanently).json(error)
      });
   },

  destroy(req, res) {
    const { book_id: bookId } = request.params;

    Book.findByIdAndRemove(bookId)
      .then(book => res.json(book))
      .catch(error => res.status(Http.MovedPermanently).json(error))
   }

}
