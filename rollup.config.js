const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const butternut = require('rollup-plugin-butternut')

module.exports = {
  entry: './src/client/index.js',
  dest: './dist/bundle.js',
  format: 'iife',
  plugins: [
    resolve({jsnext: true}),
    commonjs({include: 'node_modules/**'}),
    butternut()
  ],
  sourceMap: true
}
