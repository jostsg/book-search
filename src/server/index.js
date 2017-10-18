const AssetsRoute = require('./routes/assets')
const Hapi = require('hapi')
const Hoek = require('hoek')
const IndexRoute = require('./routes')
const BooksRoute = require('./routes/books')
const BookRoute = require('./routes/book')
const path = require('path')
const server = new Hapi.Server()

server.connection({port: process.env.PORT || 3000, host: '0.0.0.0'})

server.register([
  require('vision'),
  require('inert')
], err => {
  Hoek.assert(!err, err)

  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'views',
    layout: true,
    layoutPath: path.join('views', 'layouts'),
  })

  server.route(IndexRoute.get('/'))
  server.route(BooksRoute.get('/books'))
  server.route(BookRoute.get('/book'))
  server.route(AssetsRoute.get('/assets/{param*}'))
})

module.exports.start = function () {
  server.start(err => {
    if (err) {
      throw err
    }
    console.log(`Server running at: ${server.info.uri}`)
  })
}
