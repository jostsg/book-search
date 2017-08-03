const books = require('../models/books')

module.exports.get = function (path) {
  return {
    method: 'GET',
    path: path,
    handler: function (req, reply) {
      let pattern = req.query.q || ''
      let rs = books
        .filter(book =>
          ~book.name.toUpperCase().indexOf(pattern.toUpperCase())
        )

      reply.view('books', { books: rs })
    }
  }
}
