const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  plugins: [new CleanWebpackPlugin(['dist'])],
  //define entry point
  entry: './src/js/ping-pong-interface.js',
  devtool: 'inline-source-map',
  // define output point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    //rules is a property to hold all loaders
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      }
    ]
  }
};
