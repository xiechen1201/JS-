// 13 一些难点和技巧

/* 
    SIDE_BAR 对应 hide 方法
    MESSAGE_BOX 对应 close 方法
*/

/* interface IComponent {
  type: "SIDE_BAR" | "MESSAGE_BOX";
  hide?(): void;
  close?(): void;
}

// 问题：写接口的时候喜欢把看上去很多属性一致的情况下，更愿意合并到一起，这个想法本省没有错误，但是要具体问题具体分析，尤其是可选的属性！
function setClose(component: IComponent) {
  component.hide();
  component.close();
} */

// 是因为方法是可选的，所以可能调不到方法！

// ===================

// 拆分接口，或者接口颗粒化

// 使用拆分接口，接口不是合并到一起写才是最好的，让 interface 更加的颗粒化
// interface 是颗粒化的，使用类型别名去讲接口进行组合，让类型更加的灵活。

/* interface ISideBar {
  type: "SIDE_BAR";
  hide(): void;
}

interface IMessageBox {
  type: "MESSAGE_BOX";
  close(): void;
}

type TComponent = ISideBar | IMessageBox;

function setClose(component: TComponent) {
  switch (component.type) {
    case "SIDE_BAR":
      component.hide();
      break;
    case "MESSAGE_BOX":
      component.close();
      break;
  }
}

setClose({
  type: "SIDE_BAR",
  hide: () => {
    console.log("hide");
  }
}); */

// =================

// 如何定义伪数组？

// const arrLike: IArrayLike = {
//   0: 1,
//   1: 2,
//   2: 3,
//   a: 123,
//   b: true,
//   c: "abc",
//   length: 3,
//   push: Array.prototype.push,
//   slice: Array.prototype.slice,
//   splice: Array.prototype.splice
// };

// interface IArrayLike {
//   [index: number]: any;
//   [key: string]: string | number | boolean | Function;
//   length: number;
//   /* push: typeof Array.prototype.push;
//   slice: typeof Array.prototype.slice;
//   splice: typeof Array.prototype.splice; */
// }

// ==================

// 空合并运算符

/* let nameFormServer: string | undefined;
const myName = nameFormServer ? nameFormServer : "default"; */

// 更加简洁的方式，避免使用过多的三元运算
/* let nameFormServer: string | undefined;
const myName = nameFormServer ?? "default"; */

/* 
    编译的结果 
    const myName = nameFormServer !== null && nameFormServer !== void 0 ? nameFormServer : "default";
*/

// ====================

// 组合式的联合类型

/* let obj = {
  a: 1,
  b: "abc",
  c: true
}; */

// key 和 value 可以随意交叉组合的！

/* type TypeKey = "a" | "b" | "c"; // 任意一个或者多个座位 key 都可以
type TypeValue = string | number | boolean; //

type TypeObj = {
  [key in TypeKey]: TypeValue;
};

// 随意交叉没有问题
let obj: TypeObj = {
  a: "abc",
  b: true,
  c: 123
}; */

/* type TypeKey = "a" | "b" | "c";
type TypeValue = string | number | boolean;

type TypeObj = {
  [key in TypeKey]: TypeValue;
};

// ❌类型 "{ a: string; c: number; }" 中缺少属性 "b"，但类型 "TypeObj" 中需要该属性
// 因为 [key in TypeKey]，可以理解为对 TypeKey 的枚举，有点像 for...in...
// 所以如果缺少 b 属性，就会产生问题
//
let obj: TypeObj = {
  a: "abc",
  b: true,
  c: 123,
}; */

// ===========

/* let b = "name";
const obj = {
  a: 1, // 将 a 作为属性
  [b]: 2 // 将 b 对应的 name 作为 obj 的属性
};
console.log(obj['name']); // 2 */

// ===============

// never 类型，可以做到穷尽检查

/* 
  TS 通过类型缩小，到最后的时候没有类型，类型就是 never

  never 的类型就是没有类型，找不到类型，没有任何类型可以被分配。
*/

/* // 不能将非 never 类型的值分配给 never 类型
let a: never = 1; // ❌不能将类型“number”分配给类型“never” */

// ==========

// 例如总共有 10 个人，3 个人分一组，那么剩下的 1 个人就是 never 类型。

/* type TypeArg = number | string | boolean;

function doSomething(value: TypeArg) {
  switch (typeof value) {
    case "number":
      return value.toFixed(2);
    case "string":
      return value.split("");
    case "boolean":
      return value.toString();
    default:
      // 这里的 value 没有可分配的类型了
      // 推断：(parameter) value: never
      console.log(value);
      break;
  }
} */

type TypeArg = number | string | boolean;

let n: never;
function doSomething(value: TypeArg) {
  switch (typeof value) {
    case "number":
      return value.toFixed(2);
    case "string":
      return value.split("");
    case "boolean":
      return value.toString();
    default:
      // never 类型可以赋值给 never 类型
      n = value;
      console.log(value);
      break;
  }
}

/* 
  类型分配穷尽了，never 类型来兜底。
*/
