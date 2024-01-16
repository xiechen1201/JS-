// 06 函数相关类型与 void 和 undefined

// JS 的函数
/* function test() {
  console.log("test");
  return "test";
}
const str = test(); */
// 如果函数没有返回值那么默认返回 undefined

// =======

// TS 中的函数
/* function plus(a, b): number {
  return a + b;
} */
// 通过现在的代码无法推断出 a b 的数据类型是什么，只有程序运行的时候才能确定类型
// 报错的原因是因为 a b 的类型不明确，在 JS 中任何数据类型都可以运算，现在的问题是 a b 的类型不明确，无法确定你返回的就是 number

// ==========

// ❌参数“a”隐式具有“any”类型
/* function plus(a, b): number {
  return a + b;
} */
// 参数a隐式具有 any 类型，这不叫推断！
// 这句话不是 a b 推断为 any 类型，是 a b 无法被类型推断，所以退而求其次默认被隐式定义为 any 类型
// any 类型其实是将 ts 代码退回到 JS 代码的方案
// 在 TS 严格模式下，隐式的 any 类型默认是不被接受的！

// ==========

// 定义 a b 的类型，或者显式的定义为 any 类型
/* function plus(a: number, b: number): number {
  return a + b;
}
const result = plus(1, 2); */

// 在 TS 中，返回值一般都是可以被推断的，一般两种情况：
// 1、通过参数参与返回值运算推断
// 2、通过函数内部变量参与返回值运行的推断
/* function plus(a: number, b: number) {
  return a + b;
}
const result = plus(1, 2); */

// ============

// 为什么有的框架的函数返回的是 void?
//

// 如果函数没有返回值，需要定义一个 void 类型
// void 就表示无返回值的意思
/* function test(a: string, b: string): void {
  console.log(a + b);
}  */

// =========

// 参数的可选值
/* function printMyInfo(myName: string, myAge: number): void {
  console.log(`我的名字是${myName}，我今年${myAge}岁啦！`);
}
printMyInfo("xiechen", 23); */

// 我不想让别人知道的我的年龄，需要定义为可选的参数
// 一般如果没有传递参数就是 undefined：我的名字是xiechen，我今年undefined岁啦
/* function printMyInfo(myName: string, myAge?: number): void {
  console.log(`我的名字是${myName}，我今年${myAge}岁啦！`);
}
printMyInfo("xiechen"); */

// 应该判断一下，通过可选参数决定内部的逻辑
/* function printMyInfo(myName: string, myAge?: number): void {
  console.log(`我的名字是${myName}，我今年${myAge ? myAge : "未知"}岁啦！`);
}
printMyInfo("xiechen"); */

// 或者进行更加复杂的逻辑的时候，使用 if 判断笔记麻烦
// 可以解决我们判断 undefined 的情况
/* function printMyInfo(myName: string, myAge?: number): void {
  if (myAge !== undefined) {
    console.log(`我的名字是${myName}，我今年${myAge}岁啦！`);
  }else{
    console.log("年龄未知！")
  }
}
printMyInfo("xiechen"); */

// 在 ES6 中有个新增的语法 ?. TS 是完全支持的
// myAge 是可选参数，有可能是 undefined，所以导致无法肯定是一个数字，并且调用 tostring
/* function printMyInfo(myName: string, myAge?: number): void {
  // 如果 myAge 为空，那么直接返回 undefined
  console.log(myAge?.toString());
}
printMyInfo("xiechen");
printMyInfo("张三", 18); */

// ===============

// 编译的结果
/* function printMyInfo(myName, myAge) {
     console.log(myAge === null || myAge === void 0 ? void 0 : myAge.toString());
}
printMyInfo("xiechen"); */

/* 
    void 0 ｜ void(0) | void * 与 undefined 的关系

    首先 void 0 === void(0) === void * 本质上都是 undefined 

    但是 undefined 不能倒过来说是它们，
    因为 undefined:
        1、是一种类型 typeof undefined
        2、是类型为 undefined 的值
        3、是 window 下的一个属性 window.undefined，只读的，但是 IE78 是可写的！
        4、undefined 可以作为 JS 的变量，局部作用于可以把 undefined 作为变量标志符并且可以进行赋值
            function test(){
                var undefined = 123;
                return undefined;
            }
            console.log(test(); // 123

        所以 undefined 有多么的不安全！

        如果判断 undefined === * 的时候，undefined 是一个变量的话那么就存在问题，所以诞生了 void 0

        只要有 void 就一定是 undefined
*/

// ===================

// 不需要显式声明的情况
// 回调函数参数的类型的问题

/* let arr = [1, 2, 3, 4, 5];
arr.forEach((num) => {
  console.log(num);
}); */

/* 
    在 forEach 的时候对于参数以及明确的定义了类型

    number 是根据 Array<number> 泛型来的

    (method) Array<number>.forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
*/

// 模仿一个

/* type TypeCallback = (num: number) => void;

function test(callbackfn: TypeCallback) {
  let a = 1;
  callbackfn(a);
}
test(function (a) {
  console.log(a);
}); */
