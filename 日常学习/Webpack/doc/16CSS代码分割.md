设置 CSS 样式后进行打包发现并没有 CSS 文件，CSS 代码被打包进了 JS 文件。

一般项目开发，我们并不希望 CSS 代码混入到 JS 文件中，想让 CSS 文件单独存在

```json
// 告诉 Webpack 代码摇晃的时候不用管 .css 文件
"sidEffects": ["*.css"]
```