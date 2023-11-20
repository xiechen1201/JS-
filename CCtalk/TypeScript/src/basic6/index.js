"use strict";
// 06 函数相关类型与 void 和 undefined
// 普通 JS 函数的方式，一个函数默认返回 undefined，undefined 是一个值、一个类型】也是一个变量
/* function test() {
  console.log("test");
  return "test";
}
const str = test(); */
// 无法推断出 a、b 的数据类型，程序是运行时候才能真正的知道结果是什么
// 报错的原因是 a b 类型不明确，导致无法认可返回的是数字，必须明确 a 和 b
/* function plus(a, b): number {
  return a + b;
} */
// 参数 a 隐式具有 any 类型，这句话不是说 a 和 b 被推断为 any 类型，是 a 和 b 无法被类型推断，所以退而求其次默认被隐式定义为 any 类型
// any 类型其实是将 TS 代码退回到 JS 代码的方案，如果不是迫不得已的情况下不可使用 any
// 在 TS 严格模式下，隐式的 any 类型默认是不被接受的
/* function plus(a: number, b: number): number {
  return a + b;
}
const result = plus(1, 2);
console.log(result); */
// 在 TS 中，函数的返回值一般都是可以推断的，因为你的参数是 number 类型，如果内部通过参数进行运算得出的结果是可以通过类型的数据进行运算的
// 1、通过参数参与返回值运算推断
// 2、通过函数内部变量与返回值运算的推断
/* function plus(a: number, b: number) {
  return a + b;
}
const result = plus(1, 2);
console.log(result); */
// void 表示没有返回值的意思
/* function test(a: string, b: string): void {
  console.log(a, b);
} */
// 可选参数
/* function printMyInfo(myName: string, myAge?: number): void {
  console.log(`我的名字是${myName}, 今年${myAge ? myAge : 0}岁！`);
}
printMyInfo("张三");
printMyInfo("张三", 18); */
/* function printMyInfo(myName: string, myAge?: number): void {
  // 这么判断比较麻烦
  if (myAge !== undefined) {
    console.log(myAge.toString());
  }
  console.log(`我的名字是${myName}, 今年${myAge ? myAge : 0}岁！`);
}
printMyInfo("张三");
printMyInfo("张三", 18); */
/* function printMyInfo(myName: string, myAge?: number): void {
  // myAge 是可选的参数，有可能是 undefined
  // ?. 如果 myAge 没有传递，那么就直接返回 undefined，如果传入了就调用 toString 返回字符串
  // 解决判断 undefine 的情况
  // 编译为 ES5 的语法：console.log(myAge === null || myAge === void 0 ? void 0 : myAge.toString());
  console.log(myAge?.toString());
  console.log(`我的名字是${myName}, 今年${myAge ? myAge : 0}岁！`);
}
printMyInfo("张三");
printMyInfo("张三", 18); */
/*
    void 0 ｜ void(0) | void 和 undefined
    void 0 == void(0) === void 100 === void "abc" === undefined
    但是 undefined 不是他们，
        1、因为 undefined 首先是一种类型，
            typeof(undefined)
        2、它是类型为 undefined 的值
        3、是 window 下面的一个属性
            window.undefined
            可读的，但是 IE7/8 是可写的
            局部作用于可以以 undefined 作为变量标识符然后进行赋值
            function test(){
                var undefined = 123;
                return undefined;
            }
        4、undefined 可以作为 JS 变量

        所以诞生了 void 0 ，反正 void 一定返回 undefined
*/
// 回调函数参数的类型
// 会自动进行类型推断
/* let arr = [1, 2, 3, 4, 5];

arr.forEach(function (num) {
  console.log(num);
}); */
/* type TypeCallback = (num: number) => void;

function test(callback: TypeCallback) {
  let a = 1;
  callback(a);
}

test(function (a) {
  console.log(a);
}); */
