var path = require('path')
var webpack = require('webpack')

var UglifyJSPlugin = webpack.optimize.UglifyJsPlugin
var DefinePlugin = webpack.DefinePlugin
var AggressiveMergingPlugin = webpack.optimize.AggressiveMergingPlugin

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../../docs'),
    filename: 'index.js',
    umdNamedDefine: true
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
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
              limit: 32 * 1024
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new DefinePlugin({
      'DEBUG': '0',
      'process.env.NODE_ENV': '"production"'
    }),
    new AggressiveMergingPlugin(),
    new UglifyJSPlugin({
      mangle: {
        // Skip mangling these
        except: ['exports', 'require']
      },
      sourceMap: true
    })
  ]
}
