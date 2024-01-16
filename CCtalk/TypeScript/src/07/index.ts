// 07 联合类型

/* 
    联合类型 union type
*/

// 先看案例，这是一段正常的代码
/* function test(a: number) {
  console.log(a.toString());
} */

// =========

// 如果是可选类型那么就会出问题
/* function test(a?: number) {
  console.log(a.toString()); // ❌“a”可能为“未定义”
} */
// 为什么 a 可以定义为 number，又可以定义为可选呢?为什么是 undefined 呢？
// 这是因为 a 被推断为联合类型 a: number | undefined，实际上就是根据可选参数隐式的加上一个 undefined 的类型
// number | undefined 这就是联合类型或者可选类型！
// 总结：本质上在不同的函数调用形式下，参数可能出现不同的类型，特别是可选参数，参数变量往往会被 TS 隐式的增加 undefined 类型，所以程序代码使用参数的时候，要排除参数是 undefiend 类型的情况！

/* function test(a?: number) {
  console.log(a?.toString()); // ❌“a”可能为“未定义”
} */

// ==========

// 反面说，我们在定义类型的时候可以定义更包容的类型形式，这样的类型形式之一就是联合类型！
// string | number

/* let a: string | number;
a = 1;
a = "1"; */

/* let a: string | number = "1";
a = 1; */

// 只要静态定义类型后，后续如何赋值都可以！
// 联合类型允许在其后的赋值过程中，可以使用联合类型中的任意类型
// 联合类型可以很好的避免类型转换的问题

// ==========

// 对其进行规范
/* const todo: { id: number; content: string; completed: boolean } = {
  id: 1,
  content: "",
  completed: false
};
 */

// 这样的方式成为类型别名
// 要求：1、首字母大写（大驼峰） 2、推荐在类型名称前加上 Type（根据公司要求）
/* type TypeTodo = { id: number; content: string; completed: boolean };
const todo: TypeTodo = {
  id: 1,
  content: "",
  completed: false
}; */

/* 
    类型别名的基本形式：
    type TypeName = {}
    type TypeName = []
    type TypeName = string | number
*/

// =========

// value 不知道是什么类型
/* type TypeTodo = { id: number; content: string; completed: boolean };
const todo: TypeTodo = {
  id: 1,
  content: "",
  completed: false
};
function setTodo(value: number | string | boolean) {
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

// =============

// 函数的返回值和参数的类型一致，所以可以提取类型

/* type TypeTodo = { id: number; content: string; completed: boolean };
type TypeTodoValue = number | string | boolean;

const todo: TypeTodo = {
  id: 1,
  content: "",
  completed: false
};
function setTodo(value: TypeTodoValue): TypeTodoValue {
    // 类型缩小
    // 通过逻辑让类型缩小
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

// =========

/* 
    一个更加复杂的案例:
    content 可以是 string | [“吃饭”, "睡觉", "学习"] 

*/
/* type TypeTodo = {
  id: number;
  content: string | string[];
  completed: boolean;
};
type TypeTodoValue = number | string | string[] | boolean;

const todo: TypeTodo = {
  id: 0,
  content: "",
  completed: false
};

function setTodo(value: TypeTodoValue): TypeTodoValue {
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
    case "object":
      if (Array.isArray(value)) {
        todo.content = value.join(", ");
      }
      break;
  }
  return value;
}
setTodo(["吃饭", "睡觉", "学习"]);
console.log(todo);
 */