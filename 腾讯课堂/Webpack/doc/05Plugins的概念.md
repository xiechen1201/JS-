每次打包都需要删除 dist 目录，然后新建 index.html

1、安装 html-webpack-plugin

打包完成后，index 访问空白

如果什么都不做，默认生产一个 html 文件且引入，我想生成的 html 文件有一个 div 元素怎么办？

```js
plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
```

2、安装 clean-webpack-plugin

每次都需要手动删除 dist 文件夹，如何在每次打包的时候都自动清空呢？

```js
plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin()
  ],
```

帮助我们打包之前清空目录

## output 和 entry

如果没有配置 output.filename 的话，默认名字叫 main.js

找 entry 的 key 值为输出的名字

```js
{
    entry:"./index.js",
    // 全写
    // entry:{ main:"./index.js" }
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
  }
}
```
