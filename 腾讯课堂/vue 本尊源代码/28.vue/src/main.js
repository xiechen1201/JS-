/**
 * ES6  ES2015
 * 
 * ES MODULE ES模块化   import export
 * 
 * script type="module"
 * 
 * import 
 * 
 * 初始化加载
 * 静态的导入：import xxx from './xxx'  依赖type="module"
 * 
 * 按需加载
 * 动态的导入：import('./xxx')  不依赖type="module"
 * 
 * script type="module":运行在支持ES2015标准的浏览器上 忽略 nomodule
 * script nomodule: 运行在不支持ES2015标准的浏览器上，忽略 type="module"
 * 
 */

// import { plus as computePlus, minus } from './utils';

// import utils from './utils';

// const { plus, minus } = utils;

// 命名空间 -> 对象
// import * as utils from './utils';

// const { plus, minus } = utils;

// import { plus, minus } from './utils';

// const res1 = plus(1, 2);
// const res2 = minus(1, 2);

// console.log(res1, res2);

// import './utils';

// import utils, { plus, minus } from './utils';

// import utils, * as computedMethods from './utils';

// const { a, b } = utils;
// const { plus, minus } = computedMethods;

// const res1 = plus(a, b);
// const res2 = minus(a, b);

// console.log(res1, res2);

// 动态的import
/**
 * 静态导入  import xxx from './xxx';
 * 动态导入  import()
 * 
 *    import关键字 ()不是调用方法
 *    typeof a  => typeof(a) 
 * 
 *    import 
 * 
 * 静态导入太多了，有一些不需要马上加载的模块
 * 
 * import './utils';
 * 
 * import('./utils');
 */

// import('./utils').then(module => {
//   const { a, b } = module.default;
//   const { plus, minus } = module;

//   const res1 = plus(a, b);
//   const res2 = minus(a, b);

//   console.log(res1, res2);
// });

(async () => {
  const { default: { a, b }, plus, minus } = await import('./utils');

  const res1 = plus(a, b);
  const res2 = minus(a, b);

  console.log(res1, res2);
})();
