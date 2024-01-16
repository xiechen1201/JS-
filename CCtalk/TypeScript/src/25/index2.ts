// 25 typeof 和 returnType 的应用

/* 
    类型访问：
    就是一个类型可以当作是一个变量来进行访问。
    通过值来获取这个值的类型。
*/

/* // 这是 TS 的方式
// 主要是获取一个值的类型
let a: number;
type TypeA = typeof a; // number

// 这是 JS 的方式
a = 10;
const res = typeof a; */

/* 
    typeof 是 TS 中的关键字，不是 JS 中的。
    只要使用 type 来接收，那么 typeof 就是 TS 定义的。
*/

// =================================

/* function plus(a: number, b: number): number {
  return a + b;
}
// 获取 plus 类型，typeof 就是用来进行类型访问的工具
// type TypePlus = (a: number, b: number) => number
type TypePlus = typeof plus; */

// ===================================

/* interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

const todo: ITodo = {
  id: 1,
  content: "吃饭",
  completed: false
};

type TypeTodo = typeof todo; // type TypeTodo = ITodo */

// ===================================

// ## 获取返回值

/* function plus(a: number, b: number): number {
  return a + b;
}
// 必须接收一个泛型
type TypePlusReturnType = ReturnType<typeof plus>; // number    */

/* 
    ReturnType<T> 是获取函数返回值的工具 
*/

// ===================================

// ## 获取类型中 key 的类型

/* interface IObj {
  a: number;
  b: string;
  c: boolean;
}
// 通过类型访问其 key 的类型
type TypeA = IObj["a"];
type TypeBC = IObj["b" | "c"];
type TypeUnion = "b" | "c";
type TypeBC2 = IObj[TypeUnion]; */

/* interface IObj {
  a: number;
  b: string;
  c: boolean;
}
// IObj 中所有的 key 
type TypeIObjKey = IObj[keyof IObj]; // type TypeIObjKey = string | number | boolean */

// ===================================

/* const todoList = [
  {
    id: 1,
    content: "吃饭",
    completed: false
  },
  {
    id: 2,
    content: "学习",
    completed: false
  }
];

// 如何获取项的类型
type TypeTodo = (typeof todoList)[number];
// value[number][key]
type TypeID = (typeof todoList)[number]["id"];
type TypeContent = (typeof todoList)[number]["content"];
type TypeCompleted = (typeof todoList)[number]["completed"]; */

/* 
    number 指的是「索引」！
    number ==> index 的类型
*/

// ===================================

/* function plus(a: string, b: string): string {
  return a + b;
}

function minus({ a, b }: { a: number; b: number }): number {
  return a - b;
}

function doCompute(
  fn1: (a: string, b: string) => string,
  fn2: ({ a, b }: { a: number; b: number }) => number,
  arg1: string,
  arg2: string,
  arg3: number,
  arg4: number
): string {
  return fn1(arg1, arg2) + fn2({ a: arg3, b: arg4 });
}

const res = doCompute(plus, minus, "1", "2", 3, 4);
console.log(res); */

/* 
    简化 fn1 fn2 的类型
*/

// ======================================

/* function plus(a: string, b: string): string {
    return a + b;
  }
  
  function minus({ a, b }: { a: number; b: number }): number {
    return a - b;
  }
  
  function doCompute(
    fn1: typeof plus,
    fn2: typeof minus,
    arg1: string,
    arg2: string,
    arg3: number,
    arg4: number
  ): string {
    return fn1(arg1, arg2) + fn2({ a: arg3, b: arg4 });
  }
  
  const res = doCompute(plus, minus, "1", "2", 3, 4);
  console.log(res); */

//  ========================

/* function plus(a: string, b: string): string {
  return a + b;
}

function minus({ a, b }: { a: number; b: number }): number {
  return a - b;
}

// 限制泛型必须是函数类型
function doCompute<T1 extends (...args: any) => any, T2 extends (...args: any) => any>(
  fn1: T1,
  fn2: T2,
  arg1: string,
  arg2: string,
  arg3: number,
  arg4: number
): ReturnType<T1> | ReturnType<T2> {
  const res1 = typeof fn1 === "function" ? fn1(arg1, arg2) : undefined;
  const res2 = typeof fn2 === "function" ? fn2({ a: arg3, b: arg4 }) : undefined;
  return res1 + res2;
}

const res = doCompute(plus, minus, "1", "2", 3, 4);
console.log(res); */
