新建 math.js 文件写两个方法，进行打包

打包后 math.js 里面的方法全部都被打包进去了。

源代码只使用了 add 方法，如果业务逻辑非常多就打包了非常多的无用代码。

使用 Tree Shaking 进行优化，没有用到的代码进行移除

只支持 ESModule 这样的模块化，不支持 CommonJS 规范。

ESModule：静态引入的，编译时引入（代码还没运行就要知道引入了哪些资源）

```js
// index.js

const flag = true;

if (flag) {
  // 正常运行
  const { add } = require("./math.js");
  // 发生报错
  import { add } from "./math.js";
}
```

CommonJS：动态引入，执行时引入

所以 CommonJS 无法进行 Tree Shaking

package.json

```js
import "@babel/ployfile";
```

没有导入导出任何东西

webpack Tree Shaking 不处理上面的内容

```json
"sidEffects": ["@babel/ployfile","*.css"]
```

false 表示对所有模块进行分析

```json
"sidEffects": false
```
