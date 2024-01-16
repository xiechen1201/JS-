// 11 枚举类型的详解和应用技巧

/* 
    什么是枚举？
    随机、无序的、进行抽取。
*/

/* const obj = {
  a: 1,
  b: 2
};

for (const key in obj) {
  console.log(key, obj[key]);
} */

/* 
    枚举，enumeration，关键字 enum

    定义：是将一组无序的，但是极度相关的数据集合在一起声明存储，类似于对象。
*/

// 当前枚举的类型是 numbers，当前枚举取值的方式是 number.x
/* enum Numbers {
  a,
  b,
  c,
  d
}
console.log(Numbers.a); // 0
console.log(Numbers.b); // 1
console.log(Numbers.c); // 2
console.log(Numbers.d); // 3 */
// 这是枚举给它们添加的默认值，并不是索引！

// ============

// 和下面的定义方式有什么区别呢？
/* const Numbers = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}; */

// 枚举既可以当一种类型，也可以充当一种存储方式！

// ==========

/* enum Numbers {
  a,
  b,
  c,
  d
} */

/* 
    编译的结果：

    var Numbers;
    (function (Numbers) {
        Numbers[Numbers["a"] = 0] = "a";
        Numbers[Numbers["b"] = 1] = "b";
        Numbers[Numbers["c"] = 2] = "c";
        Numbers[Numbers["d"] = 3] = "d";
    })(Numbers || (Numbers = {}));

    { '0': 'a', '1': 'b', '2': 'c', '3': 'd', a: 0, b: 1, c: 2, d: 3 }
*/

// ==========

// 如果枚举的值是数字，那么就会按照数组进行自增
/* enum Numbers {
  a = 1,
  b,
  c,
  d
}
console.log(Numbers); 
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', a: 1, b: 2, c: 3, d: 4 } */

/* enum Numbers {
  a,
  b,
  c,
  d = 1
}
console.log(Numbers); 
// { '0': 'a', '1': 'd', '2': 'c', a: 0, b: 1, c: 2, d: 1 } */

/* enum Numbers {
  a = 1,
  b,
  c = 3,
  d
}
console.log(Numbers);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', a: 1, b: 2, c: 3, d: 4 } */

// =========

/* 
    1、枚举可以作为一个唯一的标识，在经常会在项目中写一个字符串，如果项目迭代就需要全篇的去更改这个字符串。可以使用枚举进行管理，让枚举作为一个变量的方式去访问值，避免了大量使用字符串的情况。
    2、限定了只能使用枚举内部的值

    枚举的命名：大驼峰、全大写、下划线分割单词
    枚举的变量：全大写、大驼峰、小驼峰
    变量之间使用逗号分隔，使用等号赋值
*/

/* enum StyleTypes {
  primary = "blue",
  success = "green",
  danger = "red",
  waring = "orange"
}

// 枚举类型限定了 btnPrimary 只能使用 StyleTypes.x 的枚举内容
const btnPrimary: StyleTypes = "blue"; // ❌不能将类型“"blue"”分配给类型“StyleTypes”
const btnPrimary2: StyleTypes = StyleTypes.primary; */

// 如果使用对象的方式表示枚举的结构：
/* const StyleTypes = {
  primary: "blue",
  success: "green",
  danger: "red",
  waring: "orange"
};
const btnPrimary: StyleTypes = "blue"; // ❌“StyleTypes”表示值，但在此处用作类型。 */

// 如果之间进行赋值，那么 btnPrimary 是 string 类型：
/* const StyleTypes = {
  primary: "blue",
  success: "green",
  danger: "red",
  waring: "orange"
};
// 推断：const brnPrimary: string
let brnPrimary = StyleTypes.primary;
brnPrimary = "123"; // 可以随意的更改！ */

/* 
    总结：
        1、枚举最大的好处是对一组相关数据的存取
        2、严格限定了变量只能被赋值枚举中的数据
        3、极大可能性的避免了程序中出现字符串或者其他常量
*/

// ==============

/* const BASE_URL = "http://localhost:8080";
const BASE_API = "http://localhost:3000" */

// =============

// 使用之前的 Todo 案例举例

/* interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

type TypeTodoValue = number | string | boolean;

enum TodoSet {
  ID,
  CONTENT,
  COMPLETED
}

const todo: ITodo = {
  id: 1,
  content: "",
  completed: false
};

function setTodo(type: TodoSet, value: TypeTodoValue) {
  // switch (typeof value) {
  //   case "number":
  //     todo.id = value;
  //     break;
  //   case "string":
  //     todo.content = value;
  //     break;
  //   case "boolean":
  //     todo.completed = value;
  //     break;
  // }
  // return value;

  switch (type) {
    case TodoSet.ID:
      todo.id = value as number;
      break;
    case TodoSet.CONTENT:
      todo.content = value as string;
      break;
    case TodoSet.COMPLETED:
      todo.completed = value as boolean;
      break;
  }

  console.log(todo);
}

setTodo(TodoSet.ID, 1);
setTodo(TodoSet.CONTENT, "this is my first todo.");
setTodo(TodoSet.COMPLETED, true);
 */