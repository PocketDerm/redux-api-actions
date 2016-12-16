var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js',
    library: "ReduxApiActions",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test:  /\.jsx$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ["es2015", "stage-1", "react"],
            plugins: ["add-module-exports"]
        }
      }
    ]
  },
};
