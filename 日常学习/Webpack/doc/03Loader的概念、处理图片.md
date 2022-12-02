webpack 只能加载 JS 文件，其他文件需要配置，这就是 loader

安装 file-loader

npm install file-loader --save-dev

```js
// 配置模块
  module: {
    rules: [
      {
        test: /\.(png|jp?g|gif)/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  }
```

作用：

js 文件引入图片，file-loader 把图片移动到 dist 文件夹下，返回文件的名字路径

loader 告诉 webpack 遇到非 JS 文件如何处理


名字改变是一段 hash 值，不想改名？

使用 options.name 进行对 file-loader 配置

我想让图片放到一个 imgs 的文件夹下？

使用 options.outputPath 进行配置


mode 默认会使用生产环境，产出的代码会进行压缩


url-loader 和 file-loader 很类似，只不过返回的是 Base64 编码

如果图片比较大，生成 Base64 就会很大，所以加载 JS 文件就会变长，希望大图片不会转行为 Base64，小图片就继续使用 Base64（小图片没必要发送 http 请求）






