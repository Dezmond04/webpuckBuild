const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf.js");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devServer: {
    port: 8081,

    
        
    static: {
      directory: baseWebpackConfig.externals.paths.src,
      watch: true
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
});
module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
