// 13 一些难点与技巧

/* interface IComponent {
  type: "SIDE_BAR" | "MESSAGE_BOX";
  close?: () => void;
  hide?: () => void;
}

function setClose(componet:IComponent){
    componet.close()
    componet.hide()
} */

/* 
    接口拆分（接口颗粒化）：
    接口不是合并到一起写是最好的，要看可选属性到底和接口的关系是什么样子的？
    如果有和当前接口内部任意一种情况有冲突的时候，有潜在错误产生的时候，就要立马转变一种思路，然后拆分 interface
*/

/* interface ISideBar {
  type: "SIDE_BAR";
  hide: () => void;
}

interface IMessageBox {
  type: "MESSAGE_BOX";
  close: () => void;
}

// 如果想使用 componet 统一的传递这些属性，那么就要定一个 type
// 就算有很多的属性， type 就可以更加灵活一些
type IComponent = ISideBar | IMessageBox;

function setClose(componet: IComponent) {
  switch (componet.type) {
    case "SIDE_BAR":
      // 类型推断：componet: ISideBar
      componet.hide();
      break;
    case "MESSAGE_BOX":
      // 类型推断：componet: IMessageBox
      componet.close();
      break;
  }
}

setClose({ type: "SIDE_BAR", hide: () => console.log("隐藏") });
setClose({ type: "MESSAGE_BOX", close: () => console.log("关闭") }); */

/* 
    TS 可以通过 switch 来判断某种情况下属于什么类型的。
*/

// ===============

/* interface IArratLike {
  [index: number]: any;
  length: number;
  [key: string]: number | string | boolean | Function;
  push: typeof Array.prototype.push;
  slice: typeof Array.prototype.slice;
  splice: typeof Array.prototype.splice;
}

const arrLike: IArratLike = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
  a: 1,
  b: true,
  c: "abc",
  push: Array.prototype.push,
  slice: Array.prototype.slice,
  splice: Array.prototype.splice
};
 */

// ===============

/* 
    空合并运算符 ??
*/

/* 
let nameFromServer: string | undefined;
// const muName = nameFromServer ? nameFromServer : "xiechen";

const muName = nameFromServer ?? "xiechen";
// 编译为 const muName = nameFromServer !== null && nameFromServer !== void 0 ? nameFromServer : "xiechen";
 */

// ===============

// 组合式的联合类型

/* const obj = {
  a: 123,
  b: "abc",
  c: true
}; */

// key 和 value 如何随意交叉组合？

/* type TypeKey = "a" | "b" | "c";
type TypeValue = number | string | boolean;

type TypeObj = {
  [key in TypeKey]: TypeValue;
};

const obj: TypeObj = {
  a: 123,
  b: "abc",
  c: true
};

const obj1: TypeObj = {
  a: true,
  b: "abc",
  c: 123
};

// 错误❌：类型 "{ a: true; c: number; }" 中缺少属性 "b"，但类型 "TypeObj" 中需要该属性
const obj2: TypeObj = {
  a: true,
  c: 123
};
 */

/* let a = "name";
const obj = {
  // 属性名为 name
  [a]: 1,
  a: 2
};
 */

// ===============

/* 
    never 类型
    可以做到穷尽检查的，
    就是 TS 类型缩小到最后没有类型，通过 switch 进行类型缩小到 default 就是 never 类型

    类型分配穷尽了，never 类型来兜底
*/

/* // 错误❌：不能将类型“number”分配给类型“never”
let a: never = 1;
// 不能将非 never 的任何类型赋值给 never 类型
// 简单说就是没有类型，找不到类型，没有任何类型可以被分配 */

type TypeArg = number | string | boolean;

let b: never;

function doSth(v: TypeArg) {
  switch (typeof v) {
    case "number":
      return v.toFixed(2);
    case "string":
      return v.split("");
    case "boolean":
      return v.toString();
    default:
      // 推断为：v: never
      // 因为没有可以分配的类型了，就只能是 never 类型了
      //   b = v;
      throwError("没有可以分配的类型");
      break;
  }
}

function throwError(error: string): never {
  throw new Error(error);
}
