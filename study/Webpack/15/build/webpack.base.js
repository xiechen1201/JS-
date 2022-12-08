const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
      minSize: 2000,
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          filename: "vendors.js",
        },
        // default: {
        //   filename: "bundle.js",
        //   priority: -20,
        // },
      },
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
