const baseConfig = require("./webpack.base");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-eval-map",
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  // plugins: [new MiniCssExtractPlugin()],
};

module.exports = merge(prodConfig, baseConfig);
