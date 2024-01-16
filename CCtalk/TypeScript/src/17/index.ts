// 17 函数的参数相关内容

/* 
    函数剩余参数：
    也就是形参展开 test(...args)
*/

 // ❌Rest 参数“args”隐式具有 "any[]" 类型
/* function accumulate(...args){
    return Array.from(args).reduce((a, b) => a + b);
}
const result = accumulate(1, 2, 3, 4, 5); */

/* 
    TS 在绝大多数不接受隐式的 any，一定是希望你有一个具体的类型的
    ...args 参数必须放在最后
*/

/* function accumulate(...args: number[]) {
  return args.reduce((a, b) => a + b, 0);
}
const result = accumulate(1, 2, 3, 4, 5);
console.log(result) */

// ================

/* 
    数组：内部元素类型相同
    元祖：内部元素类型不同，且长度固定
*/

/* const arr = [1, 2, 3, 4, 5];
const arr2 = [1, "a", 2, "b", 3, "c"]; */

// =================

/* function accumulate(...args: (string | number)[]) {
  return args.reduce((pre, cur) => {
    if (typeof cur === "number" && typeof pre === "number") {
      pre += cur;
    }
    return pre;
  }, 0);
}

// 参数就相当于是元祖类型了
const result = accumulate(1, "a", 2, "b", 3, "c");
console.log(result); */

/* 
    如果函数的参数是一个数组，那么就简单很多了
    如果函数的参数是一个元祖类型，那么内部就要做相应的类型缩小。
*/

// ====================

/* 
    实参展开，常量断言
*/

/* const arr = [1, 2, 3];
arr[0] = 100; // 一定能改，没有问题 */

// 这样也没有问题，但问题是我想要做到数据展开如何做呢？
/* function sum(a: number, b: number, c: number) {
  return a + b + c;
}
const arr = [1, 2, 3];
const result = sum(arr[0], arr[1], arr[2]); */

// ============

/* function sum(a: number, b: number, c: number) {
  return a + b + c;
}
const arr = [1, 2, 3];
const result = sum(...arr); // ❌扩张参数必须具有元组类型或传递给 rest 参数 */

/* 
    传递 reset 参数
    function sum(...args: number[])
    是因为 args 是一个数组类型，已经明确了数据的类型

    如果非要使用下面的方式
    function sum(a: number, b: number, c: number)

    那么就要把 ...arr 和 sum 的参数进行匹配
    形参实际上就是一个数组，[a, b, c] 它就是 args
    但是现在的类型不明确
    args 在 TS 中必须是元祖类型（长度必须一致，类型要一一对应）
*/

// =================

/* function sum(a: number, b: number, c: number) {
  return a + b + c;
}
const arr = [1, 2, 3] as const;
// 或者
// const arr = <const>[1, 2, 3];
const result = sum(...arr); */

/* 
    const arr 表示不能重新给 arr 分配新的引用
    as const 是 TS 中的常量断言，表示不能修改元素、不能拓展元素
    这个时候 arr 就是 readonly 的数组类型

    args 是希望有一个元祖的特性，就是不能拓展数组

    一个数组被实参展开，这个数组必须是 readonly 的数组
*/

// ============================

/* 
    可选参数

    ? 就表示参数是可选参数
    就是在调用函数的时候不传递的参数
*/

/* function doWelcome(weclome: string, nickname: string, tag?: string) {
  console.log(`欢迎 ${weclome} 来到这里，他的昵称是 ${nickname}，他的标签是 ${tag ?? "无"}`);
}
doWelcome("xiechen", "youlixiang"); */

/* 
    参数默认值
*/

/* function doWelcome(weclome: string, nickname: string, tag: string = "无") {
  console.log(`欢迎 ${weclome} 来到这里，他的昵称是 ${nickname}，他的标签是 ${tag}`);
}
doWelcome("xiechen", "youlixiang"); */
