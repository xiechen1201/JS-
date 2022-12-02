const path = require("path");

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
};
