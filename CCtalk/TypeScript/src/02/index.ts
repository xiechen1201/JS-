// 2 类型的注释与 any 类型的特点

/* 
    类型的注释（注解）：
    1、显式类型定义
        手动指定变量的类型
    2、类型的推断
        通过赋值让 TS 对变量进行类型推断
    3、隐式的 any 
        如果没有定义类型，且无法进行类型推断，且非 TS 的严格模式，那么隐式注解为 any
*/

// =======

// 显示的类型定义
/* let a: number = 1;
a = "abc"; // ❌不能将类型“string”分配给类型“number” */

// 这么写 a 就会变为 any 类型，我们的目标就是让类型明确
/* let a;
a = 1; */

/* 
    显式类型定义的类型为什么写在变量的后面？
    1、在 JS 中无法识别申请的类型 let number: a = 1;
    2、number a = 1; 在 JS 中是有作用域提示的
*/

// ========

// 类型推断：鼠标放在 a 的上面就会有类型的提示
/* let a = 1;
a = "abc"; // ❌不能将类型“string”分配给类型“number” */

// ========

// 隐式的 any 类型
// ❌参数“a”隐式具有“any”类型
/* function plus(a, b) {
  return a + b;
}
plus(1, 2);
plus("a", "v"); */

// 因为调用函数的时候传递的参数不一定是什么类型，如果是隐式 any 类型对于 TS 来说，这是不允许的！
// 更改配置文件 strict: false 即可解除警告！或者 noImplicitAny: false
// 但是不推荐，在 TS 中如果修改了配置文件来解决一些错误的提示，都是不好的行为，因为我们使用 TS 就是为了有更加好的类型推断！

// ===========

/* function plus(a: number, b: number) {
  return a + b;
}
plus(1, 2); */

// ==========

// 更改了配置文件后这还是一个隐式的 any 类型，只不过是不会报错了，但是我们可以定义为显示的 any 类型

/* function plus(a: any, b: any) {
  return a + b;
}
plus(1, 2); */

// any 类型属于退回到 JS 的编写模式中，尽可能的不坚持数据的类型

// =======

/* 
    any 类型：
    一个叫任意的类型
    是一种可以使 TS 代码退回到 JS 代码编写的方案，不存在任何静态的类型检查
*/

// 1、any 类型的数据可以赋值给任何类型的变量
/* let a: number; */
/* let b = { a: 1 }; */
/* a = b; // ❌不能将类型“{ a: number; }”分配给类型“number” */

/* let a: number;
let b: any = { a: 1 };
a = b; */

// 2、any 类型可以任意访问对象属性
/* let obj = {
  a: 1
};
console.log(obj.b); // ❌类型“{ a: number; }”上不存在属性“b” */

/* let obj: any = {
  a: 1
};
console.log(obj.b); */

// 3、any 类型可以给对象进行属性的追加
/* let obj = {
  a: 1
};
obj.b = 2; // ❌类型“{ a: number; }”上不存在属性“b” */

/* let obj: any = {
  a: 1
};
obj.b = 2; */

// 4、any 类型可以被任何类型的变量赋值
/* let a: any;
let b = 1;
a = b; */

// 5、隐式的 any 类型在 TS 严格模式下（默认），是不被允许的！
// 显示的是可以的
/* function plus(a, b) { // ❌参数“a”隐式具有“any”类型
  return a + b;
}
plus(1, 2); */

/* function plus(a: any, b: any) {
  return a + b;
}
plus(1, 2); */

// any 是不得已而为之的编写方案

// ===============

// 编译问题

/* const plus = (a: number, b: number) => a + b; */

/* 
    编译的结果：
    const plus = (a, b) => a + b;

    还是 ES6 的语法，因为 TS 的配置文件默认为 ES6
    "target": "es2016"
    如果想要更改为 ES5，改为 "es5" 即可。

*/

// =========

/* let a:string = undefined; // ❌不能将类型“undefined”分配给类型“string” */

/* 
    开发者使用 JS 的思维默认就会赋值为一个 undefined 空数据。
    没有必要这么做，直接不赋值即可
*/

/* let a:string; */

// ========

// 推断为 let b: any
/* let b = null;
let c: Object = null; // ❌不能将类型“null”分配给类型“Object” */

/* 
    如果想要支持更改配置文件
    strictNullChecks: false // 取消对 undefined、null 进行严格检查

    依然不建议，因为没有必要。
*/