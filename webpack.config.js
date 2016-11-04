var path = require('path');

module.exports = {
  context: __dirname,
  entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loaders: 'babel' },
    ]
  }
};
