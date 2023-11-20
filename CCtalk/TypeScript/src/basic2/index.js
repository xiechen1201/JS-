"use strict";
// 02类型的注释和 any 类型的特点
/*
    类型的注解（注释）：
    1、显示类型定义：手动的指定变量的类型
    2、类型的推断：通过赋值让 TS 对变量进行类型推断
    3、隐式的 any：如果没有定义类型，且无法进行类型推断，且非严格模式，那么隐式注解为 any
*/
/*
    显式的类型定义
    类型为什么写在变量的后面？
    首先这是一种显式类型定义的方式
*/
/* let a: number = 1;
// 不能将类型“string”分配给类型“number”。
a = "abc" */
// 如果不显示的进行类型定义，鼠标放上去就是 number，这就是类型推断，通过赋值推断出 a 的类型
/* let a = 1;
a = "abc"; */
// 这样写类型会变成 any，所以要指明 a 的类型
/* let a;
a = 1; */
// 如果变量放在前面，就无法识别定义的是 number 还是 a
/* let number a = 1; */
// 隐式的 any
// 导致参数可以是任何的类型，默认情况下会进行保存，可以更改 ts 的配置文件 "strict": false, 表示非严格模式
// 不建议更改 TS 的配置文件，因为我们使用 TS 就是为了更好的进行约束
/* function plus(a, b) {
  return a + b;
}
plus(1, 2); */
/* function plus(a: number, b: number) {
  return a + b;
}
plus(1, 2); */
// any 属于退回到 JS 中的编写模式
/* function plus(a: any, b: any) {
  return a + b;
}
plus(1, 2);
plus(1, "2"); */
/*
    any 一个叫任意的类型，一种可以使 TS 代码退换到 JS 代码编写的方案，不存在任何的类型检查
    any 的作用：
*/
// 1、any 类型的数据可以赋值给任何类型的变量
/* let a: number;
let b: object = { a: 1 };
a = b;
 */
/* let a: number;
let b: any = { a: 1 };
a = b; */
// 2、可以任意访问对象属性
/* let obj = {
  a: 1
};
console.log(obj.b); */
/* let obj: any = {
  a: 1
};
console.log(obj.b); */
// 3、可以给对象进行属性的追加
/* let obj = {
  a: 1
};
obj.b = 2; */
/* let obj: any = {
  a: 1
};
obj.b = 2; */
// 4、变量定义但是不赋值，默认就是 any 类型
// any 类型的变量被任何类型的变量赋值
/* let a;
let b = 1;
a = b; */
// 5、隐式的 any 类型在严格模式下，是不被允许的
/* function plus(a, b) {
  return a + b;
}
plus(1, 2); */
/* function plus(a: any, b: any) {
  return a + b;
}
plus(1, 2);
plus(1, "2");
 */
// 以上的书写方式都和原来 JS 的写法一致，any 要谨慎使用，any 是不得已而为之的兜底类型
// 默认情况下不会对箭头函数编译为 ES5，需要更改配置文件为 target: "es5"
/* const plus = (a: number, b: number) => {
  return a + b;
}; */
// 不能不赋值的情况下赋值为 undefined
/* let a: string = undefined; */
// 不能把 null 赋值为 object 类型
/* let b: object = null; */
