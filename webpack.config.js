const path = require('path')
const CleanWebpack = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const RootPlugin = require('html-webpack-root-plugin')

module.exports = {
  module: {
    rules: [
      // JAVASCRIPT RULES
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // CSS RULES
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // FONT RULES
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      // IMAGE LOADING
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ] // END OF RULES ARRAY
  },
  devServer: {
    contentBase: './dist/'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpack(),
    new HtmlPlugin({
      title: 'Missile Command'
    }),
    new RootPlugin()
  ]
}