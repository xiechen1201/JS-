使用 Babel 处理 ES6 的代码？

ES6 语法在某些老版本的浏览器无法正常运行，使用 Babel 进行编译。

1、编写 ES6 代码

2、进行打包

3、发现代码并没有进行编译

这样的代码无法在部分老版本浏览器正常运行。

使用 Babel 把 ES6 转换为 ES5 代码，让浏览器正常执行。

解决？安装 babel-loader、babel-perest-env

虽然 let 箭头函数这类的语法进行了转换，可是 Promise 这样的对象并没有进行转换

解决？安装 @babel/polyfill

@babel/polyfill 主要给我们提供了 Promise 这样的方法，这样导致了我们编译后的文件非常的大

但是我们只引入了两个新特性，没必要都引入

配置按需引入 ES6 的新特性

## 进一步理解 Babel

当我们使用 @babel/polyfill 就是打一个补丁，当我们使用 Promise Map 这样的方法就可以使用这个补丁去实现 Promise 方法

就版本的浏览器没有新语法的 API，我们只能手写，但是网上搜到的写法不够权威，而且每次方法不存在都需要手写那就很麻烦，所以我们希望既能实现缺失的方法又比较权威标准，这个就是 corejs 库

corejs 库里面就有 Promise 这样的方法实现，我们只要使用了它就可以放心的编写 ES6+ 的代码

但是 corejs 无法转换生成器这样的语法，这个时候可以使用 regenerator 这个库，当我们把 corejs 和 regenerator 结合之后，我们所有的新语法就都能支持了，这就是 @babel/polyfill，它就是进行了汇总

但是整个文件引入 🈶 又太大，所以我们需要配置按需引入，而不再需要全部引入

按需引入又不知道从哪里按需引入，所以需要指定 corejs 的版本

但是 @babel/polyfill 又会造成全局变量的污染

```js
window.Promise = function () {
  // ...
};
```

用户在使用第三方代码库的时候，也在 window 上挂载 Promise 对象

这样就会产生冲突

如何解决？

安装 @babel/plugin-transform-runtime