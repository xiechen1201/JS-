"use strict";
// 10 null undefined 和文字类型
/*
    null: 空指针，最初开始的时候就是代表一个引用类型的空值，类型为 object
    空指针：当前有指针但是没有指向堆内存的空间地址

    undefined: 未定义类型，代表原始值的空值，类型就是 undefined
*/
/* let obj = null;
obj = {}; */
/*
    a 是 any 类型，为什么？
    undefined 是 JS 中默认的空值占位符，如果类型推断为 undefined 类型会使后续赋值类型不匹配。
*/
/* var a = undefined; */
/* // 如果非要定义为 undefined 类型
let x = void 0;
// 不能将类型“1”分配给类型“undefined”
x = 1; */
/* let x: undefined = undefined;
x = 1; */
// 所以，不能将初始化为 undefined 类型的值显式类型定义为 undefined，因为后续无法进行赋值。
/* let x = null;
x = {};
x = 1; */
/* // 同理，null 也是如此
let x: null = null;
// 不能将类型“{}”分配给类型“null”
x = {}; */
// ==========
/*
    str 确定为 string 就不能赋值为 undefined 类型的值了
*/
/* // 不能将类型“null”分配给类型“string”
let str: string = null; */
/* let str: string;
str = "abc"; */
// TS 是不可能将 undefined 和 null 推断为  undefined 和 null 类型的，如果这样推断，后续是无法进行赋值一个其他类型的，所以只能推断为 any 类型
/* interface IInfo {
  myName: string;
  myAge: string;
}

function printInfo(info: IInfo | null) {
  // “info”可能为 “null”
  console.log(info.myName);
  console.log(info.myAge);
}
printInfo(); */
// ==========
/*
    文字类型
*/
/* const title = "abc";
title = "def"; */
/* let title: "abc" = "abc";
// 不能将类型“"def"”分配给类型“"abc"”
title = "def"; */
// 只要满足类型的值就可以
/* let title: "abc" = "abc";
title = "abc"; */
// 联合类型+文字类型 = 只能在以下 3 个中选择一个
/* let buttonColor: "red" | "blue" | "green";
buttonColor = "black";
 */
// 能不能写成一个 type，可以
/* type TypeButtonColor = "red" | "blue" | "green";
let buttonColor: TypeButtonColor; */
// ========
/* type TypeCompareReturn = -1 | 0 | 1;
function compare(a: number, b: number): TypeCompareReturn {
  return a > b ? 1 : a < b ? -1 : 0;
} */
// 只能赋值为 true
/* let bool1: true = true;
bool1 = false; */
/* type TypeHTTPMethods = "GET" | "POST" | "PUT" | "DELETE";

function httpRequest(url: string, methods: TypeHTTPMethods) {}
httpRequest("/api/getData", "DELETE");
// 类型“"a"”的参数不能赋给类型“TypeHTTPMethods”的参数
httpRequest("/api/getData", "a"); */
/* type TypeHTTPMethods = "GET" | "POST" | "PUT" | "DELETE";

function httpRequest(url: string, methods: TypeHTTPMethods) {}

const requestInfo = {
  url: "/api/getData",
  methods: "POST"
};

// 类型“string”的参数不能赋给类型“TypeHTTPMethods”的参数
// 会认为 requestInfo.methods 是一个 string 类型
httpRequest(requestInfo.url, requestInfo.methods); */
/* type TypeHTTPMethods = "GET" | "POST" | "PUT" | "DELETE";

function httpRequest(url: string, methods: TypeHTTPMethods) {}

interface IRequestInfo {
  url: string;
  methods: TypeHTTPMethods;
}

const requestInfo: IRequestInfo = {
  url: "/api/getData",
  methods: "POST"
};

httpRequest(requestInfo.url, requestInfo.methods); */
// 或者
/* type TypeHTTPMethods = "GET" | "POST" | "PUT" | "DELETE";

function httpRequest(url: string, methods: TypeHTTPMethods) {}

const requestInfo = {
  url: "/api/getData",
    methods: "POST" as TypeHTTPMethods
  // methods: <TypeHTTPMethods>"POST"
};

httpRequest(requestInfo.url, requestInfo.methods);
 */ 
