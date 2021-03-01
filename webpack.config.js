const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/dist/plugin').default
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const babelConfig = {
  cacheDirectory: true,
  presets: [],
  plugins: []
}

module.exports = {
  mode: 'development',
  entry: './examples/index.js',
  module: {
    rules: [
      {
        test: /\.(vue)$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/],
              happyPackMode: false
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelConfig
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                sourceMap: true,
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'examples/index.html',
      filename: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json'],
    alias: {
      'ori': resolve(__dirname, './components')
    }
  },
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }],
    },
    disableHostCheck: true,
    hot: true,
    open: true
  }
}
