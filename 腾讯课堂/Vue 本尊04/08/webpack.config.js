const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  resolve: {
    alias: {
      vue$: "/node_modules/vue/dist/vue.esm.js"
    },
    modules: [path.resolve(__dirname, ""), path.resolve(__dirname, "node_modules")]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    })
  ]
};
