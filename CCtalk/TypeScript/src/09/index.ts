// 09 类型断言和非空断言

/* 
    什么是类型断言？
    从程序猿的立场出发，告诉 TS 类型结果是什么（就是说明确的告诉 TS 这个类型是什么，你不要给我推断，推断的结果不算数，以我的为准）

    什么是非空断言？
    程序猿告诉 TS 这个表达式的结果一定不为空，主要针对的是联合类型。
    string | undefined
    IUser | null
    调用方法的时候就会有问题！

    断言在 JS 中的表现是什么？
    在 TS 编译的时候会把所有的断言去掉，该加的判断会加
*/

// ========

// 得出的结果就是一个联合类型
/*  // ♻️const OBox: HTMLElement | null
const OBox = document.getElementById("#box"); 
OBox.innerText = "test"; // ❌“OBox”可能为 “null”  */

// 这个时候就要进行非空断言，告诉 TS 不可能为 null
// 使用 ！
// ♻️const OBox: HTMLElement
/* const OBox = document.getElementById("#box")!; 
OBox.innerText = "test"; */

// 或者
/* const OBox = document.getElementById("#box"); 
OBox!.innerText = "test"; */

// ========

// 找到其中一个 item

/* const arr = [
  {
    id: 1,
    name: "张三"
  },
  {
    id: 2,
    name: "李四"
  },
  {
    id: 3,
    name: "王五"
  }
];
const target = arr.find((item) => item.id === 2)!;
console.log(target.id); // 使用非空断言
console.log(target?.id); // 或者使用 ?.
console.log(target && target.id); // 或者使用 && */

/* 
    总结：
    非空断言解决的是，当前表达式返回的值断定是非空的！null ｜ undefined
    ?. 的使用：有可能为空的时候，调用方法或者访问属性（相当于做了一个判断）
    !. 的使用：当你确定返回的值一定不是空的时候
*/

// ==============

/* const oCan = document.getElementById("myCan");
// 产生两个错误：
// ❌“oCan”可能为 “null”
// ❌类型“HTMLElement”上不存在属性“getContext”
// 被推断为 HTMLElement 类型，HTMLElement 对象内不存在 getContext() 方法
const ctx = oCan.getContext("2d"); */

// 进行非空断言
/* const oCan = document.getElementById("myCan")!;
const ctx = oCan.getContext("2d"); */

// 类型断言
// 因为 getContext 属于 HTMLCanvasElement 上的一个方法
/* const oCan = document.getElementById("myCan") as HTMLCanvasElement;
const ctx = oCan.getContext("2d"); */

// 或者
// 相当于强制类型转换，只是这么理解！
/* const oCan = <HTMLCanvasElement>document.getElementById("myCan");
const ctx = oCan.getContext("2d"); */

/* 
    总结：
    非空断言：oCan 不为 bull 类型
    类型断言：告诉 TS 一定是什么类型，相当于强制类型转换
            oCan 必须是 HTMLCanvasElement 才能调用其原型上的 getContext 方法！

    使用断言一定要注意，程序猿要百分之百确定，当前表达式能返回类型准确的值（代码层面和代码运行层面的准确）
*/

// ==============

// 对确定类型的值不能直接进行不符合当前值类型断言！
// 为什么？1 确定为 number 类型，让 1 作为 string 类型是违背逻辑操作的！
/* let a = 1 as string; */

/* 
    如果需要这样的操作，必须让 TS 不能够准确断定这个 1 的类型
    1、让 1 转换为 any 类型
    2、让 1 转换为 unknown 类型
    这两种操作方式都是类型释放的操作！
*/
/* let a = 1 as string; */

/* let a = 1 as any as string;
a = 2; // ❌不能将类型“number”分配给类型“string” */

/* let a = 1 as unknown as string;
a = 2; // ❌不能将类型“number”分配给类型“string” */

/* 
    任意类型和未知类型都可以被类型断言为其他类型！
*/

// ================

/* const obj = {
  a: 1,
  b: 2
};

for (const key in obj) {
  // ❌元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型 "{ a: number; b: number; }"
  // ❌在类型 "{ a: number; b: number; }" 上找不到具有类型为 "string" 的参数的索引签名
  console.log(obj[key]);
} */

/* 
    obj 内的 key 是 obj type 的 key
    a b 的键本身是 string 类型，但是 key 是属于 obj type 的 key，它是有更加深层的类型的
    所以必须要让 key 成为 obj type 内部的 key

    也就说一个对象内部的 key，这个 key 不能单纯的理解为是一个 string 类型，要理解为 obj type 内部的索引类型
*/

/* const obj = {
  a: 1,
  b: 2
};

type TypeKey = keyof typeof obj; // obj 类型内的索引类型（key）

for (const key in obj) {
  // 把字符串 key 强制转换为 TypeKey
  console.log(obj[key as TypeKey]);
} */