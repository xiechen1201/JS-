// 12 类型缩小、流程分析与谓词

/* 
    TS 会通过真假值排除不符合条件的类型，
    TS 同样可以通过 typeof 判定一个变量的类型
*/

// 根据类型完成一个任务
/* function test(a: string | string[] | number | boolean | null) {
  if (a) {
    // TS 可以通过 typeof 可以缩小 a 的数据类型，联合类型缩小为单个类型
    if (typeof a === "string") {
      console.log(a.toLocaleUpperCase());
    } else if (typeof a === "object") {
      console.log(a.join("-"));
    } else if (typeof a === "number") {
      console.log(a.toFixed(2));
    } else if (typeof a === "boolean") {
      console.log(a.toString());
    }else{
      console.log("类型");
    }
  } else {
    console.log("空值！");
  }
} */

// =================

/* interface ISidbar {
  hide: () => void; // 对应  hide: () => void;
  // hide(): void // 对应 hide(){}
}

// const obj: ISidbar = {
//   hide: () => {}
// };

interface IModal {
  close(): void;
}

interface ITip {
  close?(): void;
  hide?(): () => void;
}

type TypeComponentOptions = ISidbar | IModal | ITip;

function setClose(componentOptions: TypeComponentOptions) {
  // 通过 in 来缩小范围
  if ("hide" in componentOptions) {
    // 指明类型
    (<ISidbar>componentOptions).hide();
  }

  // 指明类型
  (<IModal>componentOptions).close();
} */

/* 
    in 可以缩小联合类型的类型范围
    本质上就是排除绝不可能的类型
*/

// =================

/* 
    instanceof 也可以缩小类型，可以判断变量是不是某个构造器的实例
    通过 instanceof TS 能够确定变量的类型
*/

/* function print(date: Date | string) {
  if (date instanceof Date) {
    return formatDate(date);
  }

  return date;
}

function formatDate(date: Date) {
  const y = date.getFullYear();
  const m = addZero(date.getMonth() + 1);
  const d = addZero(date.getDate());

  function addZero(num: number) {
    return num < 10 ? "0" + num : num;
  }

  return `${y}-${m}-${d}`;
}
 */

// =================

/* let flag = false;
let count = 0;

// flag 为 false，所以 a 就是 boolean 类型
// let a = flag && plus(count);

let a = flag ? plus(count) : flag;

function plus(count: number) {
  return ++count;
} */

// =================

/* let a: number | string | boolean;
a = true;

if (a) {
  a = "abc";
  console.log(a);
} else {
  a = 123;
  console.log(a);
}
// let a: string | number
console.log(a); */

// =================

/* 
    谓词：
    如果 return 后面的表达式是真，那么判定 str 就是 string 类型
    如果 return 后面的表达式是真，那么判定 num 就是 nunber 类型

    实际上就是赋予了 typeof 的能力
*/

function isString(str: unknown): str is string {
  return typeof str === "string";
}

function isNumber(num: unknown): num is number {
  return typeof num === "number";
}

function formatArr(str: unknown): string[] {
  if (isString(str)) {
    return str.split("");
  }

  if (isNumber(str)) {
    return str.toString().split("");
  }

  return [];
}

const result1 = formatArr(123);
const result2 = formatArr("abc");

console.log(result1);
console.log(result2);