// 12 类型缩小、流程分析和谓词

/* 
    类型缩小
*/

// 根据不同的类型完成一个任务
/* function test(a: string | string[] | number | boolean | null) {
  if (a) {
    if (typeof a === "string") {
      console.log(a.toLocaleUpperCase());
    } else if (typeof a === "object") {
      console.log(a.join("-"));
    } else if (typeof a === "number") {
      console.log(a.toFixed(2));
    } else if (typeof a === "boolean") {
      console.log(a.toString());
    } else {
      console.log("未知类型！");
    }
  } else {
    console.log("空值");
  }
} */

/* 
    类型缩小：
    也就是把 a 原本的联合类型缩小为 a 为 string 的单个类型，或者缩小为其他的类型。
    1、通过 typeof TS 是能够得知 if 块内数据的类型
    2、TS 通过真假值排除不符合条件的类型
    3、TS 通过 typeof 判定一个变量的类型
*/

// =============

// 使用 && 运算符
/* function test(a: string | string[] | number | boolean | null) {
  if (!a) {
    console.log("空值");
    return;
  }

  if (typeof a === "string") {
    console.log(a.toLocaleUpperCase());
  } else if (a && typeof a === "object") {
    console.log(a.join("-"));
  } else if (typeof a === "number") {
    console.log(a.toFixed(2));
  } else if (typeof a === "boolean") {
    console.log(a.toString());
  } else {
    console.log("未知类型！");
  }
}
 */

// ===============

/* interface ISideBar {
  hide(): void;
}

interface IModule {
  close(): void;
}

interface ITip {
  hide?(): void;
  close?(): void;
}

type TypeComponentOptions = ISideBar | IModule | ITip;

function setClose(componentOptons: TypeComponentOptions) {
  if ("hide" in componentOptons) {
    // ❌不能调用可能是“未定义”的对象
    // 因为 ITip 类型中 hide 是可选的。
    componentOptons.hide();
    return;
  }

  componentOptons.close();
} */

/* interface ISideBar {
  hide(): void;
}

interface IModule {
  close(): void;
}

interface ITip {
  hide?(): void;
  close?(): void;
}

type TypeComponentOptions = ISideBar | IModule | ITip;

function setClose(componentOptons: TypeComponentOptions) {
  if ("hide" in componentOptons) {
    (<ISideBar>componentOptons).hide();
    return;
  }

  // 推断 componentOptons: IModule | ITip
  // 如果是 ITip 类型，那么 close 有肯定就是未定义
  (<IModule>componentOptons).close();
} */

/* 
    in 可以缩小联合类型的类型范围，本质上就是排除绝不可能的类型。
*/

// =================

/* 
    instanceof 判定变量值是不是某个类的构造器的实例，通过 instanceof TS 能确定变量的类型。
*/

/* function printDate(date: Date | string) {
  if (date instanceof Date) {
    return formatDate(date);
  }
  return date;
}

function formatDate(date: Date) {
  const y = date.getFullYear();
  const m = addZero(date.getMonth() + 1);
  const d = addZero(date.getDate());

  function addZero(n: number) {
    return n < 10 ? "0" + n : n;
  }

  return y + "-" + m + "-" + d;
} */

// ==============

/* 
    三元运算

*/

/* let flag = false;
let count = 0;

// 推断：let a: boolean
let a = flag && plus(count);

function plus(count: number) {
  return ++count;
} */

/* 为啥是 boolean？
因为 && 没有通过，所以只能赋值为 boolean 类型 */

/* let flag = false;
let count = 0;

// 推断：let a: number | boolean
let a = flag ? plus(count) : flag;

function plus(count: number) {
  return ++count;
} */

/* 为啥是联合类型？
false 的情况下会返回 false，但是由于三元运算的时候是要对其进行判断的（flag），是会执行 if.else 流程的，所以如果是 false，那么 a 就是联合类型，如果是 true 的话，a 就是 number 类型。

如果是 ture 的话，就会变成 flag && plus(count) 形式的判断
*/

// ==============

/* let a: string | number | boolean;
a = true;

if (a) {
  a = "abc";
  console.log(a);
} else {
  a = 123;
  console.log(a);
}

// 推断：let a: string | number
console.log(a); */

/* 
    这是流程分析的问题
    TS 会根据 if 判断进行流程分析，判断 a 有可能产生的值类型，绝对不可能是 boolean
    因为 if 吧所有的情况全部包含了，最后就把值可能为 boolean 的情况排除了。
*/

// ==================

// 数字和字符串转换为数组
// 不知道 str 的类型

/* function isString(str: unknown) {
  return typeof str === "string";
}

function isNumber(num: unknown) {
  return typeof num === "number";
}

function formatArr(str: unknown): string[] {
  if (isString(str)) {
    // ❌str”的类型为“未知”
    // 理想的状态是，我判断 str 是 string 类型，那么这里的 str 就应该是 string 类型。
    // TS 无法通过 isString(str) 分析出是不是 true，所以只能通过 str: unknow 来判断无法调用 .split() 方法
    return str.split(",");
  }

  if (isNumber(str)) {
    return str.toString().split(",");
  }

  return [];
} */

// 如果返回条件为真，那么判定 str 为 string 类型
/* function isString(str: unknown): str is string {
  return typeof str === "string";
}
// 如果返回条件为真，那么判定 num 为 number 类型
function isNumber(num: unknown): num is number {
  return typeof num === "number";
}

function formatArr(str: unknown): string[] {
  if (isString(str)) {
    // 推断：str: string
    return str.split(",");
  }

  if (isNumber(str)) {
    // 推断：str: number
    return str.toString().split(",");
  }

  return [];
}

formatArr("abc");
formatArr(123);
formatArr(true); */
/* 
    这就是谓词，实际上就是赋予了 typeof 的能力
*/
