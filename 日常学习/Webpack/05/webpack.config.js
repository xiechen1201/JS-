const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  // webpack 打包入口
  entry: "./src/index.js",
  // webpack 打包后生成的文件和文件夹
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // 配置模块
  module: {
    rules: [
      // 处理样式
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
      // 处理图片
      {
        test: /\.(png|jp?g|gif)/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs/",
            // 大于 20480kb 的时候生成单独的图片
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
    new CleanWebpackPlugin()
  ],
};
