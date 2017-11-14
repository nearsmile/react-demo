var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
  publicPath: '/dist/',
  progress: true,
  stats: {
    colors: true
  }
});

server.app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

server.listen(5000, function () {
  console.log('正常启动5000端口')
});
