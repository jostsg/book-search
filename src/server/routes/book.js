const books = require('../models/books')

module.exports.get = function (path) {
  return {
    method: 'GET',
    path: path,
    handler: function (req, reply) {
      reply.view('book', {
        book: books.find(book => book.id === req.query.id)
      })
    }
  }
}
