// 10 null undefined 和文字类型

/* 
    null 是什么？
    是一个空指针，代表引用类型的空值，类型是 object
*/

// 先不知道 obj 是个什么东西
/* let obj = null;
obj = {}; */

/* 
    undefined 是什么？
    表示未定义类型，代表原始值的空值，类型是 undefined
*/

/* let a = undefined; */

// let x: any
// 为什么是 any 类型。是因为 undefined 是 JS 系统中默认的空值占位符。
// 如果类型被推断为 undefiend 类型的话，会使后续赋值造成类型的不匹配。
/* let x = undefined; */

// 如果确实想要 undefined 类型
/* let x = void 0;
x = 1; // ❌不能将类型“1”分配给类型“undefined” */

/* let x:undefined = undefined;
x = 1; // ❌不能将类型“1”分配给类型“undefined” */

/* 
    所以不能将初始化为 undefined 类型的值进行显式类型定义为 undefined，因为后续无法赋值！
*/

// ========

/* let x = null;
x = {};
x = 1; */

/* let x: null = null;
x = {}; */

// 同理 null 也是如此！

// ========

// string 确实为 string 类型就不能赋值为 undefined 类型的值了，更上面的案例一致，只不过是反例

/* let str: string = null; // ❌不能将类型“null”分配给类型“string”
let str1: string = undefined; // ❌不能将类型“undefined”分配给类型“string” */

// 如果你想赋值一个空的值
/* let str: string;
str = "abc"; */

/* let obj: any;
obj = {}; */

// TS 系统是不可能将 undefined 和 null 推断为 undefined 和 null 类型的，如果这样推断后续是无法赋值一个其他类型的，所以只能推断为 any 类型。

// =========

/* interface IInfo {
  myName: string;
  myAge: number;
}

function printInfo(info: IInfo | null) {
  // ❌“info”可能为 “null”
  console.log(info.myName, info.myAge);
} */

/* interface IInfo {
  myName: string;
  myAge: number;
}

function printInfo(info: IInfo | null) {
  if (!info) return false;
  console.log(info.myName, info.myAge);
} */

// ===========

// 文字类型

// 不能赋值，因为是常量
/* const title = "hello";
title = "world";  */

// 如果 let 想要实现这样的效果，需要使用「文字类型」
/* let title: "hello" = "hello";
title = "hello"; // 只要满足文字类型的值即可
title = "world"; // ❌不能将类型“"world"”分配给类型“"hello"” */

// ===========

// 常用场景：
// 程序中应该少用字符串，因为要改需要全部改

/* let btnColor: "red" | "blue" | "green" = "red"; // 联合类型
btnColor = "black"; // ❌不能将类型“"black"”分配给类型“"red" | "blue" | "green"” */

// ===============================

// 使用类型别名

/* type TypeColor = "red" | "blue" | "green";
let btnColor: TypeColor = "red"; */

// ================================

// 返回值必须是 0 -1 1

/* type TypeCompare = 0 | 1 | -1;

function compare(a: number, b: number): TypeCompare {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0; 
} */

// =============

// 还可以是布尔类型

/* let b1: true = true;
b1 = false; // ❌不能将类型“false”分配给类型“true” */

// =========

/* type TypeMethod = "GET" | "POST";
function httpRequest(url: string, method: TypeMethod) {
  // xxx
}
httpRequest("/api/getData", "GET"); */

// =======

/* type TypeMethod = "GET" | "POST";
function httpRequest(url: string, method: TypeMethod) {
  // xxx
}

const requestInfo = {
  url: "/api/getData",
  method: "GET" as TypeMethod
};

// httpRequest(requestInfo.url, requestInfo.method);
// ❌类型“string”的参数不能赋给类型“TypeMethod”的参数
// 因为访问属性的时候，认为 method 是一个 string 类型

httpRequest(requestInfo.url, requestInfo.method); */
