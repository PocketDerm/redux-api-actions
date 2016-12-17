module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    filename: 'dist/redux-api-actions.js',
    library: 'redux-api-actions',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
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
