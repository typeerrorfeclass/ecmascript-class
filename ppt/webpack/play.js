var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },

      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!less-loader'
      },

      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },

      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 32 * 1024 * 1024
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ],

  devServer: {
    hot: true,
    port: 9000,
    historyApiFallback: true
  }
}
