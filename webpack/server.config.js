const { merge } = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, '../docs'),
    compress: true,
    hot: true,
    port: 4002,
    open: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/' },
        { from: /./, to: '/' }
      ]
    }
  }
});
