const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-eval-map",
};

module.exports = merge(prodConfig, baseConfig);
