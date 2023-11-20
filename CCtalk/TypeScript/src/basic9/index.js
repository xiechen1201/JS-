"use strict";
// 09 非空断言与类型断言
/*
    什么是类型断言？
    从程序员的立场出发，告诉 TS 类型结果是什么。明确的告诉 tS 类型的结果，不要进行推断。

    什么是非空断言？
    程序员告诉 TS 这个表达式的结果一定不为空，主要针对的是联合类型。
    string | undefined
    IUser | null

    断言在 JS 中的表现是什么？
    在 TS 编译的时候，会将所有断言都去掉，该加的判断会加
*/
/*
    推断出一个联合类型 const oBox: HTMLElement | null
*/
/* const oBox = document.getElementById("box");
// “oBox”可能为 “null”，所以要对进行进行断言，为了告诉 TS 不可能为 null
oBox.innerHTML = "Hello  TS";
 */
// 使用 ! 告诉 TS 不可能为 null，推断类型为 const oBox: HTMLElement
/* const oBox = document.getElementById("box")!;
oBox.innerHTML = "Hello  TS"; */
// 或者
// ! 表示非空断言符号
/* const oBox = document.getElementById("box");
oBox!.innerHTML = "Hello TS"; */
/* const arr = [
  {
    id: 1,
    name: "zhangsan"
  },
  {
    id: 2,
    name: "lisi"
  },
  {
    id: 3,
    name: "wangwu"
  }
];
// 'target' is possibly 'undefined'.
// 如果确定可以找到 item.id === 2 那么就使用断言
const target = arr.find(item => item.id === 2);
console.log(target!.id)
// 或者使用 ?.
console.log(target?.name) */
/*
    总结：
        非空断言解决的是：当前表达式返回的值断定是非空的（null 或者 undefined）
        ?. 有可能为空的时候，调用方法或访问属性
        !. 当你确定返回的值一定不是空的时候
*/
/*
    错误：
    1、“oCan”可能为 “null”，“null” 是没有属性可以访问的
    2、oCan 即使被断言为 HTMLElement，该对象内部也不存在 getContext() 方法
        类型“HTMLElement”上不存在属性“getContext”
*/
/* const oCan = document.getElementById("myCan");
const ctx = oCan!.getContext("2d"); */
// 要进行类型断言，因为 HTMLElement 对象是继承 HTMLCanvasElement 的
/* const oCan = document.getElementById("myCan") as HTMLCanvasElement;
console.dir(oCan)
const ctx = oCan!.getContext("2d"); */
// 或者使用
/* const oCan = <HTMLCanvasElement>document.getElementById("myCan");
const ctx = oCan!.getContext("2d"); */
/*
  总结：
  1、非空断言：oCan 不为 null 类型
  2、类型断言：告诉 TS 一定是什么类型，相当于强制类型转换，oCan 必须是 HTMLCanvasElement 才能访问原型中的 getContext 的方法

  使用断言一定要注意：程序员要 100% 确定当前表达式能返回类型准确的值（代码层面与代码运行层面的准确）
*/
/*
  对确定类型的值不能直接进行不符合当前值类型的断言
  非要把 number 断言为 string
  1、确定为 number 类型，让 1 as string 是违背逻辑操作的
  2、如果需要这样的操作，必须让 TS 不能够准确断定 1 的类型
    2.1 让 1 转换为 any 类型
    2.2 让 1 转换为未知的类型
    这两种操作方式都是类型释放的操作
*/
/* let a = 1 as string; */
// 不能将类型“number”分配给类型“string”
/* let a = 1 as any as string;
a = 2 */
// 不能将类型“number”分配给类型“string”
/* let a = 1 as unknown as string;
a = 2;
a = "abc"; */
/*
  任意类型和未知类型都可以被类型断言为其他类型
*/
/*
  obj 的 key 是 obj type 的 key

  需要明白：
  一对象的 key，key 不能单纯的认为是一个 string，要理解为 obj type 里面的索引类型
*/
/* const obj = {
  a: 1,
  b: 2
};

for (const key in obj) {
  // 必须让 key 必须是 obj 里面的 key
  console.log(obj[key]);
} */
/* const obj = {
  a: 1,
  b: 2
};

// obj 类型内的索引类型（key）
type TypeKey = keyof typeof obj

for (const key in obj) {
  console.log(obj[<TypeKey>key]);
  // 或者 obj[key as TypeKey]
} */
