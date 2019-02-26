const router = require('express').Router();

const { bookController } = require('../controllers');


module.exports = router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .put('/:book_id', bookController.update)
  .get('/:book_id', bookController.show)
  .delete('/:book_id', bookController.destroy)
