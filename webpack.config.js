var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // JS 执行入口文件
  entry: './src/main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        // 排除 node_modules 目录下的文件，node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader'],
        exclude:path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  devtool: 'source-map', // 输出 source-map 方便直接调试 ES6 源码
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist')
    port: 8090
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.css', '.sass']
  }
};
