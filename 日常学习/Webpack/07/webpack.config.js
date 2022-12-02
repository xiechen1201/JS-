const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "eval-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
    proxy: {
      "/api": "http://www.baidu.com",
    },
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jp?g|gif)/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs/",
            limit: 20480,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
