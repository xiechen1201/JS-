const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {},
};

module.exports = merge(devConfig, baseConfig);
