const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

// baseConfig.plugins.push(new BundleAnalyzerPlugin({
//     // Port that will be used by in `server` mode to start HTTP server. 
//     analyzerPort: 4001
// }));

module.exports = merge(baseConfig, {
    devtool: false,
    mode: 'production',
    output: {
        publicPath: '/plumejs/'
    }
});