sourceMap 主要是方便我们对代码进行调试。

dist/main.js 文件 96 行报错

如何对应 src/index.js 的第一行？

```js
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "eval-source-map", // 对应源文件
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  }
};
```


