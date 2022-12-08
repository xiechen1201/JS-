Webpack 是什么？

<!-- ESModule 和 CommonJS 规范混用的时候 -->

Webpack 只知道模块相关的事情，他就是个模块打包 📦 工具

多个文件合并为一个文件，文件的代码是可以正常运行的！！！

最开始只支持 JS 的文件，慢慢的支持的类型越来越多

如果想要支持非 JS 文件类型，需要对 Webpack 进行配置，Webpack 默认支持 JS 文件

```js
const style = require("./index.css");
import App from "./App.vue";
```

<br>
<br>

webpack.config.js 是默认文件名不能更改，配置文件需要使用 CommonJS 规范，因为底层使用 Node 写的

执行 npx webpack ./index.js 命令指定了入口文件

如果直接执行 npx webpack 就不知道入口文件是谁了，会找 webpack.config.js 文件

webpack 只会找 webpack.config.js 文件

npx webpack --config webpack.test.js 告诉webpack你的配置文件

配置入口：

和 dist 文件是一样的，只是更改了名字

<br>
<br>

一般 src 文件夹的代码称源代码，webpack 打包 src 的代码为 dist 产出的代码，可以直接运行在浏览器中






