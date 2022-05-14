const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode,
  entry: './src/index.js',

  // output for building/production phase
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              ['@babel/preset-react', {runtime: "automatic"}]
            ]
          }
        }
      }
    ]
  },

  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '/public')
    },
    compress: true,
    port: 9000,
  }
}