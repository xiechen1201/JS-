const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/dist/plugin");

console.log(VueLoaderPlugin)

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "dist"),
  },
  externals: {
    vue: "Vue",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.vue/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin.default(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "public/index.html"),
    }),
  ],
};
