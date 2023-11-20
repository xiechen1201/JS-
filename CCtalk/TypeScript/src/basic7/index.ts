// 07 联合类型与类型别名

/* 
    union type
*/

// 正常来说，这样写是没有问题的
/* function test(a: number) {
  console.log(a.toString());
} */

// 如果 a 是可选的，那么就会有问题，因为 a 可能是不会进行传递的
/* function test(a?: number) {
  console.log(a.toString());
}
test();
test(1); */

// 为什么可以定义为 undefined 呢？为什么都是 undefined 了还可以定义为可选类型呢？
//  a: number | undefined
// 实际上会根据可选参数来隐式的添加上一个类型 undefined ,这就是联合类型（可选类型），也就是可以自 number 和 undefined 之间选择一个

/* 
    本质上在不同的函数调用形式下，参数可能出现不同的类型，特别是可选参数，参数变量往往会被 TS 隐式的增加 undefined 类型，所以在程序代码使用参数的时候要排除参数是 undefined 类型的情况。
*/
/* function test(a?: number) {
  console.log(a?.toString());
}
test();
test(1); */

/* 
    反面说，根据这样的情况我们在定义类型的时候可以定义更包容的类型的形式，这种类型形式之一就是联合类型。
    string ｜ number
*/
/* let a: string | number;
a = 1;
a = "1"; */

// 静态定义为联合类型后，怎么样进行重新赋值都是没有任何问题的
/* let a: string | number = 1;
a = "1"; */

/* 
    联合类型允许你在其后的赋值过程中，可以使用联合类型中任意的类型
    联合类型可以很好的避免类型转换的问题
    是为了有一个更加包容的类型的选择
*/

// 这种定义的方式称为类型别名
/* 
  1、首写字母大写（大驼峰）
  2、推荐在类型名称前加上 Type（根据公司要求书写）

  type TypeName = []
*/

// 对对象的属性进行定义
/* type TypeTodo = { id: number; content: string; completed: boolean };
const todo: TypeTodo = {
  id: 1,
  content: "",
  completed: false
}; */

// ==========

/* type TypeTodo = { id: number; content: string; completed: boolean };
const todo: TypeTodo = {
  id: 1,
  content: "",
  completed: false
};

// 想要更改 TODO 的内容，但是不知道更改什么内容，如何根据类型来确定呢？
// 返回值也可以是联合类型（不显示定义会进行类型推断）
function setTodo(value: number | string | boolean): number | string | boolean {
  switch (typeof value) {
    case "number":
      todo.id = value;
      break;
    case "string":
      todo.content = value;
      break;
    case "boolean":
      todo.completed = value;
      break;
  }

  return value;
} */

/* // 所以我们可以定义一个类型别名
type TypeTodoValue = number | string | boolean;
type TypeTodo = { id: number; content: string; completed: boolean };

const todo: TypeTodo = {
  id: 1,
  content: "",
  completed: false
};

function setTodo(value: TypeTodoValue): TypeTodoValue {
  // 类型缩小
  switch (typeof value) {
    case "number":
      todo.id = value;
      break;
    case "string":
      todo.content = value;
      break;
    case "boolean":
      todo.completed = value;
      break;
  }

  return value;
}

const id = setTodo(2);
console.log(id); */

/* // content 可以是 string、arrray => [吃饭，睡觉] => "吃饭，睡觉，学习"
type TypeTodo = { id: number; content: string | string[]; completed: boolean };
type TypeTodoValue = number | string | string[] | boolean;

const todo: TypeTodo = {
  id: 0,
  content: "",
  completed: false
};

function setTodo(value: TypeTodoValue): TypeTodoValue {
  // 类型缩小
  switch (typeof value) {
    case "number":
      todo.id = value;
      break;
    case "string":
      todo.content = value;
      break;
    case "boolean":
      todo.completed = value;
      break;
  }

  if (Array.isArray(value)) {
    todo.content = value.join(", ");
  }

  return value;
}
 */