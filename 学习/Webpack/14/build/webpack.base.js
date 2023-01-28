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
  // optimization优化
  optimization: {
    // 使用了导出内容的话就进行导出
    usedExports: true,
    splitChunks: {
      // 默认为 async 表示只对异步代码进行分割，all 表示对同异步代码都进行分割
      chunks: "all",
      // 如果包大于 20k 就进行分割
      minSize: 2000,
      // 表示一个模块最少没使用 1 次，一般用在
      minChunks: 1,
      // 分割的名字由 cacheGroups 决定，打包同步代码的时候，通过 splitChunks 进行分割，webpack 就会 走 cacheGroups 的配置，更加精确的控制文件名
      cacheGroups: {
        vendors: {
          // 模块来自于 node_modules，名字就会拼接 vendors 前缀，例如 lodash
          test: /[\\\/]node_modules[\\\/]/,
          // 优先级，默认为0
          priority: -10,
          reuseExistingChunk: true,
          // lodash 是在哪里被引入的，如果是 index.js 那就是 main.js，可以通过 vendors 进行命名
          filename: "testName.js",
        },
        // default 是一个兜底的组，如果不满足上面的条件就会分配到 default 里面
        // default: {
        //   filename: "myTest.js",
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
