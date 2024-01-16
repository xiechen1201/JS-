// 15 泛型函数和泛型函数类型复用

/* 
    认识泛型：
    指泛指的类型，数据类型不明确的时的替代类型。

    泛型在定义的时候接收泛指的数据类型（定义的时候不知道具体的类型，使用的时候再指定明确的数据类型）的一种给定类型的方式。
*/

// 实现一个数组转字符串的方法
/* function arrToString(arr: string[], separator: string): string {
  return arr.join(separator);
}
const str = arrToString(["a", "b"], "-");
console.log(str); */

// 再实现一个数字数组转字符串
/* function arrToString(arr: string[], separator: string): string {
  return arr.join(separator);
}

function arrToString2(arr: number[], separator: string): string {
  return arr.join(separator);
}

const str = arrToString(["a", "b"], "-");
const str2 = arrToString2([100, 200], "-");
console.log(str);
console.log(str2); */

/* 
    问题：
        1、两个函数内部的逻辑完全一致，但是由于传递参数的类型不同，而导致了不得不定义两个函数去处理两个不同类型的数组。
    
    解决方案：
        1、用一种类型可以兼容两个类型的数组，使用 any，这样数组内的元素就可以是任意类型了
*/

/* function arrToString(arr: any[], separator: string): string {
  return arr.join(separator);
}

const str = arrToString(["a", "b"], "-");
const str2 = arrToString([100, 200], "-");
console.log(str);
console.log(str2); */

// ==========================

// 问题2:如果我想在使用函数的时候明确数组元素类型的话，any 就不好用了。
// 解决的目标：逻辑相同、类型不同的指定类型的函数
// 使用 any 类型会使函数的传参约束变小

/* function arrToString(arr: any[], separator: string): string {
  return arr.join(separator);
}

const str = arrToString(["a", "b"], "-");
const str2 = arrToString([100, 200], "-");
console.log(str);
console.log(str2); */

// =====================

/* 
    使用泛型来解决

    泛型是在函数定义的时候不明确类型的前提下，给出一个泛指的类型占位，再调用函数的时候明确泛型所对应的实际类型即可。

    泛型书写的位置：
        1、函数声明的，写在函数名后面
        2、函数表达式，写在表达式最前面
*/

/* // 方式1
const a = <E>(arr: E[], separator: string): string => {
  return arr.join(separator);
};

// 方式2
function arrToString<E>(arr: E[], separator: string): string {
  return arr.join(separator);
} */

// ==================

/* 
    调用函数的时候：
        在函数名后面跟泛型，传入具体的数据类型
*/

/* function arrToString<E>(arr: E[], separator: string): string {
  return arr.join(separator);
}

const str = arrToString<string>(["a", "b"], "-");
const str2 = arrToString<number>([100, 200], "-");
console.log(str);
console.log(str2); */

// ====================

/* 
    E 是什么？
    泛型的标志符，可以由任意的字符串或者字符进行表示
    场景的字符：
    T Type 类型 
    E Element 元素
    K Key
    V Value
    R Result 
    N Number
    S String
    U 其他

    多数情况使用字符表示即可，如果你想更加明确的话可以使用单词。 
*/

/* 
    基本上，最小限度使用 any 的情况，都可以考虑是否适用于泛型。

    泛型的好处：
        1、可以在不明确类型的时候，使用泛型来进行占位
        2、可以在调用函数的时候，对函数的参数进行类型的约束

    可以把泛型理解为类型参数化湿泛型的特征。
    定义的时候传入类型参数（泛型），调用函数的时候传递实际的类型。
*/

// ======================

/* 
    函数类型的复用

    让两个函数使用同一个函数签名

    类型复用的基础就是泛型，因为定义类型的时候，T 的类型是不明确的
*/

/* type TypePlus<T> = (a: T, b: T) => T;

const plusNumber: TypePlus<number> = (a, b) => {
  return a + b;
};

const plusString: TypePlus<string> = (a, b) => {
  return a + b;
};

const res1 = plusNumber(1, 2);
const res2 = plusString("a", "b"); */

// ==============

/* 
    多泛型+函数签名
*/

/* type TypePlus<T, U> = (a: T, b: U) => string;

const plusStringNumber: TypePlus<string, number> = function (a, b) {
  return (a + b).toString();
}; */

// ====================

/* function plus<T>(a: T, b: T): T {
  return a + b; // ❌运算符“+”不能应用于类型“T”和“T”
} */

/* 
    因为 T 可能不是 string、number 而是其他的 object
    这样就无法规定如何进行加号的运算。

    传入的泛型，在函数体内的逻辑中一定要可操作，否则你的泛型就是有问题的。
*/

// ===================

// 案例，请求数据

/* // ❌泛型类型“Promise<T>”需要 1 个类型参数 
async function getData(url: string): Promise<any> {
  const res = await fetch(url);
  return res.json();
}

getData("http://www.boredapi.com/api/activity/").then((res) => {
  console.log(res);
}); */

// Promise 需要一个泛型，所以我们必须提供这个泛型

// ===============================

/* interface ResultType {
  accessibility: number;
  activity: string;
  key: string;
  link: string;
  participants: number;
  price: number;
  type: string;
}

async function getData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}

getData<ResultType>("http://www.boredapi.com/api/activity/").then((res) => {
  // ❌类型“ResultType”上不存在属性“a”
  // 不能使用不存在的属性
  console.log(res.a);
}); */
