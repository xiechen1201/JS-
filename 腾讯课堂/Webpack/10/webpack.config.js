const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devtool: "cheap-module-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // 使用了导出内容的话就进行导出
  optimization: {
    usedExports: true,
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
        test: /\.js/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // presets 同样是从左往右（从下往上）执行的
              // 也就是先执行 prest-react 在执行 preset-env
              presets: [
                [
                  "@babel/preset-env",
                  {
                    // 不要把所有的新特性全部引入
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        ],
        /* babel-loader 无法直接翻译为 ES5 的代码，babel-loader 只是将 webpack 建立连接，具体如何转换是需要 @babel/preset-env 处理  */
        // 排除 node_modules 文件夹
        exclude: /node_modules/,
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
