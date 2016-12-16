var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js',
  },
  module: {
    loaders: [
      {
        test:  /\.jsx$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ["es2015"],
            plugins: ["add-module-exports", "transform-es2015-modules-umd"]
        }
      }
    ]
  },
};
