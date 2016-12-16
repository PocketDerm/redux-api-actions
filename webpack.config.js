var path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  devtool: "source-map",
  output: {
    path: __dirname,
    filename: 'dist/bundle.js',
    library: 'redux-api-actions',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test:  /\.jsx$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ["es2015"],
        }
      }
    ]
  },
  externals: {
      'superagent': {
          commonjs: 'superagent',
          commonjs2: 'superagent',
          amd: 'superagent',
          umd: 'superagent'
      },
      'babel-polyfill': {
          commonjs: 'babel-polyfill',
          commonjs2: 'babel-polyfill',
          amd: 'babel-polyfill',
          umd: 'babel-polyfill'
      },
      'bluebird': {
          commonjs: 'bluebird',
          commonjs2: 'bluebird',
          amd: 'bluebird',
          umd: 'bluebird'
      },
  },
};
