var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: { path: __dirname, filename: 'dist/bundle.js' },
  devtool: "cheap-module-source-map",
  libraryTarget: "umd",
  module: {
    loaders: [
      {
        test:  /\.jsx$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
};
