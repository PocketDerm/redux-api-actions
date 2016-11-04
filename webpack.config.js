var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loaders: 'babel', query: { presets: ['es2015'] } },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourceMap: false })
  ]
};
