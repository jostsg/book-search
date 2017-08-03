module.exports.get = function (path) {
  return {
    method: 'GET',
    path: path,
    config: {auth: false},
    handler: {
      directory: {
        path: 'dist'
      }
    }
  }
}
