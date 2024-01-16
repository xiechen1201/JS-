// 16 泛型约束

/* 
    函数中的泛型的约束
*/

/* function plus<T>(a: T, b: T): T {
  return a + b;
} */

// 不是所有的数据都有 length 属性
// 泛型 T 作为 getLength 的泛型参数的类型范围太大，某些数据类型上没有 .length 属性，导致程序无法进行 .length 的访问。
/* function getLength<T>(value: T): number {
  // ❌类型“T”上不存在属性“length”
  return value.length;
} */

// 如何限制 T，缩小范围，把泛型可以代表的数据类型限制到一定的范围。

// ==================

/* 
    想要将 T 代表的数据类型范围约束有 .length 属性的数据范围内
    泛型代表的数据类型的值对象必须含有 length 属性，并且数据类型是 number 类型
*/
/* function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}
getLength<number>(123); // ❌类型“number”不满足约束“{ length: number; }”
getLength<string>("123"); */

// ===================

/* 
    { length: 4 } 的类型并不是 T

*/

/* function getLength<T extends { length: number }>(value: T): T {
  const obj = { length: 4 };
  return obj;
  // ❌不能将类型“{ length: number; }”分配给类型“T”
} */

/* 
    执行的过程中，T 是定义函数的时候使用的，执行的时候才是传入一个 T。
    但是执行的过程中，T 已经没有作用了。
*/
/* function getLength<T extends { length: number }>(value: T): T {
  const obj: T = { length: 4 };
  return obj;
} */

// =======================

/* // 这样写没有意义
function test2<T extends any[]>(arr: T) {}

// 正确的写法
function test1<T>(arr: T[]) {} */

/* 
    约束是为了什么？
    约束是为了让范围的可代表类型的范围缩小，并不是给泛型指定类型
*/

// ==================

/* 
    泛型的联合类型
*/

/* function mergeArr<E>(arr1: E[], arr2: E[]): E[] {
  return [...arr1, ...arr2];
}

const arr = mergeArr([1, 2, 3], [4, 5, 6]);
const arr2 = mergeArr([1, 2, 3], ["a", "b", "c"]); // ❌不能将类型“string”分配给类型“number” */

/* 
    类型推断：根据第一个数组的元素类型推断 E 的数据类型为 number
    如果想要两个都支持，就需要使用联合类型
*/

/* function mergeArr<E>(arr1: E[], arr2: E[]): E[] {
  return [...arr1, ...arr2];
}

const arr = mergeArr([1, 2, 3], [4, 5, 6]);
const arr2 = mergeArr<number | string>([1, 2, 3], ["a", "b", "c"]);  */

// =====================

/* 
    [1, 2, 3] 
    ===>
    {
        0: 1,
        1: 2,
        2: 3
    }

    ["a", "b", "c"]
    ===>
    {
        0: "a",
        1: "b",
        2: "c"
    }

    [{id: 1, name:'zhangsan'}, {id:2, name:'李四'}]

    必须是可迭代的对象，才能做这样的数据转换
*/

/* interface IPerv<U> {
  [key: number]: U;
}

function createObj<T extends Iterable<any>, U>(value: T) {
  return [...value].reduce((pre: IPerv<U>, cur: U, index: number) => {
    pre[index] = cur;
    return pre;
  }, {});
}

const obj1 = createObj<number[], number>([1, 2, 3]);
const obj2 = createObj<string[], string>(["a", "b", "c"]);
const obj3 = createObj<string, string>("abc");

console.log(obj1);
console.log(obj2);
console.log(obj3);

const set = new Set();
set.add(1);
set.add(1);
console.log(set); */

const map = new Map<string, number>();
map.set("a", 1);
map.set("a", 2);
console.log(map);