// 18 函数重载的概念和应用

/* 
    函数重载：
    对参数和返回值的多样化设置（前提同一个函数）

    作用：将一组参数和返回值对应，执行函数的时候 TS 会去选择重载哪一个重载函数的参数与返回值是匹配的，但是 TS 的函数重载只能对返回值和参数是否匹配进行检查，而不能定义多个同名函数的不同逻辑
*/

/* function plus(a: number, b: number): number {
  return a + b;
}
function plus(a: string, b: string): string {
  return a + b;
} */

/* 
    逻辑重复，如何一个方法去解决？
*/

/* // 签名函数
function plus(a: number, b: number): number;
function plus(a: string, b: string): string;
// 实现函数，any 没有什么实际意义，但是不写又不行，除非更改配置文件 noImplicitAny: false
function plus(a, b): any {
  return a + b;
}
plus("1", "2");
plus(1, 2);
plus("1", 2); // ❌没有与此调用匹配的重载 */

/* 
    重载函数的本质还是能够规范你传递参数！
*/

// ================

// 如果使用联合类型解决上面的问题可行吗？

/* type TypeVar = number | string;

function plus(a: TypeVar, b: TypeVar): TypeVar {
  return a + b; // ❌运算符“+”不能应用于类型“TypeVar”和“TypeVar”
} */

/* 
    场景：参数以及返回值需要一一对应而不是联合选择其中的这种需求，一定要使用函数重载来进行参数和返回值的限制
*/

// =================

/* 
  设置元素的显示与否
  display: block/none;
  opacity: 1 | 0
*/

/* function setStyle(element: HTMLElement, property: "display", value: "block" | "none"): void;
function setStyle(element: HTMLElement, property: "opacity", value: "1" | "0"): void;
function setStyle(element: any, property: any, value: any) {
  element.style[property] = value;
}

setStyle(1, "display", "block");
setStyle(document.getElementById("#box")!, "display", "block"); */

/* 
  这就是一一对应的原则
*/

// =======================

/* type TypeTodoKey = "id" | "content" | "completed";

type TypeTodo = {
  // 表示 key 一定是 TypeTodoKey 中的任意一个
  [key in TypeTodoKey]: any; 
};

let todo: TypeTodo = {
  id: 1,
  content: "",
  completed: false
};

function setTodo(type: "id", value: number): void;
function setTodo(type: "content", value: string): void;
function setTodo(type: "completed", value: boolean): void;
function setTodo(type: "id" | "content" | "completed", value: number | string | boolean) {
  todo[type] = value;
}

setTodo("id", 123);
setTodo("content", "This is test content.");
setTodo("completed", true);
console.log(todo); */

// ===========================

/* 
  需求创建 img 或者 a，并且给元素设置 src 和 href 属性
*/

enum TypeTag {
  IMG = "img",
  A = "a"
}

enum TypeAttr {
  SRC = "src",
  HREF = "href"
}

function creatEl(tag: TypeTag.IMG, attr: TypeAttr.SRC, value: string): HTMLElement;
function creatEl(tag: TypeTag.A, attr: TypeAttr.HREF, value: string): HTMLElement;
function creatEl(tag: TypeTag, attr: TypeAttr, value: string): HTMLElement {
  let oDom = document.createElement(tag);
  (oDom as any)[attr] = value;
  return oDom;
}

console.log(creatEl(TypeTag.IMG, TypeAttr.SRC, "./img.jpg"));
