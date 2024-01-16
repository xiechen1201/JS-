// 20 TS 中的特殊类型

/* 
    在 TS
    基元类型（原始值）：string | number | boolean | bigint | symbol | null | undefined
    非基元类型：object => Object | Boolean | String | Number | Array ...

    object 引用类型
    Object 和 object 的区别：
        Object => {} 是一种数据对象，指对象
        object 泛指引用类型
*/

/* // object 可以直接继承 Object 的原型
function test(obj: object) {
  obj.hasOwnProperty("name");
  obj.valueOf();
  obj.toString();
}
test(1);
test("string");
test(true);
test({ name: "John" });
test(function () {});
test([1, 2, 3]); */

// =======================

/* 
    any 和 unknow

    可以理解 unknow 是 any 类型的升级，或者 unknow 是 any 补充限制的一个新类型。

    any：任何类型，其类型的值可以参与任何的逻辑与运算。可以使 TS 回归到 JS 编码状态。
        any 实际上会屏蔽掉 TS 所有的静态类型检查。
*/

/* function test(a: any) {
  // 如果存在具体类型，是会报错的
  console.log(a.a);
  console.log(a + 1);
  console.log(a.split(","));
  console.log(a());
} */

/* 
    unknow 是一个未知的类型，TS 不知道该怎么分配类型的时候就是一个 unknow
    它的值是是接受类型断言的

    unknow 显然要比 any 类型更加严格一些
*/

/* function test(a: unknown) {
  // ❌“a”的类型为“未知”
  console.log(a + 1);

  // 通过断言进行类型转换
  console.log((a as number) + 1);
  console.log((a as string).split(","));
  console.log((a as Object).toString());
} */

/*
    unknow 不能确定具体的类型，就不能确定是否具有某个方法。
    赋值都没问题，但是执行方法就是不行。
    unknow 禁止方法调用或者函数执行，是因为可能产生异常。
*/

/* let a: unknown;
a = 1;
a = "string";
a = true;
a.toString(); // ❌“a”的类型为“未知”
a(); */

// ===============

/* // 不知道返回的是什么，无法调用方法
function test(jsonString: string): unknown {
  return JSON.parse(jsonString);
}
console.log(test("{name: 'John'}").toString()); // ❌对象的类型为 "unknown"
console.log(test("[1, 2, 3]")); */

/* // 可以进行类型断言
function test(jsonString: string): unknown {
  return JSON.parse(jsonString);
}

interface IJsonData {
  a: number;
  b: number;
}

console.log((test("{name: 'John'}") as object).toString());
console.log((test("[1, 2, 3]") as number[]).join("-")); */

// ====================

/* 
    never 理解为 TS 的底层类型，表示没有可分配的类型就是 never
    能定义 never 的类型的情况几乎没有

    通过 switch 把 a 的类型缩小
    类型缩小把 a 的类型分配完了，这个时候 a 就是 never
*/

// ❌函数缺少结束 return 语句，返回类型不包括 "undefined"
// 因为 default 的时候没有返回值
/* function doSth(a: number | string): number | string {
  switch (typeof a) {
    case "number":
      return a.toFixed(2);
    case "string":
      return a.repeat(2);
    default:
      // (parameter) a: never
      console.log(a);
      myError("错误");
      break;
  }
}

function myError(error: string) {
  throw new Error(error);
} */

/* function doSth(a: number | string): number | string {
  switch (typeof a) {
    case "number":
      return a.toFixed(2);
    case "string":
      return a.repeat(2);
    default:
      console.log(a);
      // 推断：function myError(error: string): never
      return myError("错误");
  }
}

// 设置返回值为 never 表示告诉 return myError("错误"); 没有可用的类型，当函数返回的类型是 never 的话，那么函数的返回值类型不会做约束
function myError(error: string): never {
  throw new Error(error);
} */

// ==================

/* 
    Function 可以作为类型
    存在的意义？
    不需要规定一个函数的参数、返回值的时候，那么就可以使用 Function
*/

/* function plus(a: number, b: number, callback: Function) {
  let res = a + b;
  typeof callback === "function" && callback(res);
}

// ❌参数“res”隐式具有“any”类型
plus(1, 2, function (res) {
  console.log(res);
}); */

/* 
    如果 noImplicitAny: true TS 永远不能接受隐式的 any 类型

    Function 类型实际上是 (param1: any, param2: any, ....) => void;
*/

/* type TypeCallback = (res: number) => void;

function plus(a: number, b: number, callback: TypeCallback) {
  let res = a + b;
  typeof callback === "function" && callback(res);
}

// 推断：(parameter) res: number
plus(1, 2, function (res) {
  console.log(res);
}); */