为什么出现？

1、传统网页开发

HTML+JS+CSS

问题：项目复杂大，单纯的 JS 文件不符合要求，代码拆分为模块相互引用

如果模块非常的多，项目饮用非常多的模块，每次引入就会产生 HTTP 请求，这样不合理，加载速度慢很多

工具管理模块

![img](../imgs/WX20221124-144040.png)

```html
<!-- index.html -->
<script src="header.js"></script>
<script src="footer.js"></script>
```

```js
// header.js
(function () {
  // 创建元素
})();
```

```js
// footer.js
(function () {
  // 创建元素
})();
```

问题：

1、index.html 页面加载很多 JS 文件，网页加载速度变慢

2、有些变量的来源混乱

3、JS 引入顺序错误难定位

希望不引入其他文件只要 index.js 文件

import 模块化引入其他 JS 文件

webpack 会翻译 import 语法，浏览器可以识别

<br>
<br>

Webpack 模块打包工具，把模块文件接收处理成几个静态资源文件，数量大大减少

webpack 功能：懒加载、代码分割、Tree Shaking