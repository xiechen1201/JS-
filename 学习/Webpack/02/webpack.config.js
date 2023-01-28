const path = require("path");

module.exports = {
  // webpack 打包入口
  entry: "./src/index.js",
  // webpack 打包后生成的文件和文件夹
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
