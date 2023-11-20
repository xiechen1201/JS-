// 11 枚举类型的详解和应用技巧

/* const obj = {
  a: 1,
  b: 2
};
for (const key in obj) {
  console.log(key, obj[key]);
} */

/* 
    枚举：enumeration
    关键字 enum

    枚举的定义？
    枚举是将一组无序的，极度相关的数据集合在一起声明存储，类似于对象
*/

// 当前枚举的类型是 Numbers，当前枚举取值的方式 Number.x
// TS 枚举的功能默认给 a b c d 添加一个自增的数字为值
// 数字并不是 a b c d 的索引！！！ 枚举代替的是无序
/* enum Numbers {
  a, // 0
  b, // 1
  c, // 2
  d // 3
}
console.log(Numbers.a, Numbers.b); */

// 和这样定义有什么区别？
/* const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}; */

/* 
    枚举既可以当一种类型，也可以当作一种存储方式 
*/

/* enum Numbers {
  a, // 0
  b, // 1
  c, // 2
  d // 3
} */

// 编译为

/* 
    var Numbers;
    (function (Numbers) {
        // 使用立即执行函数形成独立的作用域
        // 双向赋值
        Numbers[Numbers["a"] = 0] = "a";
        Numbers[Numbers["b"] = 1] = "b";
        Numbers[Numbers["c"] = 2] = "c";
        Numbers[Numbers["d"] = 3] = "d"; // 3
    })(Numbers || (Numbers = {}));

    // 结果：{ '0': 'a', '1': 'b', '2': 'c', '3': 'd', a: 0, b: 1, c: 2, d: 3 }
*/

// ============
/* enum Numbers {
  a = 1,
  b,
  c,
  d
} */

// 编译为

/* 
    var Numbers;
    (function (Numbers) {
        Numbers[Numbers["a"] = 1] = "a";
        Numbers[Numbers["b"] = 2] = "b";
        Numbers[Numbers["c"] = 3] = "c";
        Numbers[Numbers["d"] = 4] = "d";
    })(Numbers || (Numbers = {}));
*/

// ============
/* enum Numbers {
  a,
  b,
  c,
  d  = 1
} */

// 编译为

/* 
    var Numbers;
    (function (Numbers) {
        Numbers[Numbers["a"] = 0] = "a";
        Numbers[Numbers["b"] = 1] = "b";
        Numbers[Numbers["c"] = 2] = "c";
        Numbers[Numbers["d"] = 1] = "d";
    })(Numbers || (Numbers = {}));
*/

// ============
/* enum Numbers {
  a = 1,
  b,
  c = 5,
  d
} */

// 编译为

/* 
    var Numbers;
    (function (Numbers) {
        Numbers[Numbers["a"] = 1] = "a";
        Numbers[Numbers["b"] = 2] = "b";
        Numbers[Numbers["c"] = 5] = "c";
        Numbers[Numbers["d"] = 6] = "d";
    })(Numbers || (Numbers = {}));
*/

// ==============

/* 
    这么做有什么用呢？
    1、可以作为一个唯一的标识，使用枚举管理一系列极度相关的数据，枚举作为变量访问数据，避免了项目中大量的使用字符串
    2、可以限定只能使用枚举的值
*/

/* 
    枚举的命名规则：大驼峰 ｜ 全大写下滑线
    枚举中的变量：大驼峰 ｜ 全大写 ｜ 小驼峰
    变量之间用 ，隔开，= 号赋值
*/

/* enum StyleTypes {
  PRIMARY = "blue",
  SUCCESS = "green",
  DANGER = "red",
  WRAN = "orange"
}

// 错误🙅
// const buttonPrimary: StyleTypes = "bule";
// 使用枚举进行维护，限定只能使用 StyleTypes 类型的属性
const buttonPrimary: StyleTypes = StyleTypes.PRIMARY; */

/* const styleTypes = {
  PRIMARY: "blue",
  SUCCESS: "green",
  DANGER: "red",
  WRAN: "orange"
};
// buttonPrimary 是一个 string 类型：const buttonPrimary: string
let buttonPrimary = styleTypes.PRIMARY;
buttonPrimary = styleTypes.SUCCESS;
buttonPrimary = "pink"; */

/* 
    枚举的好处总结：
    1、对一组相关数据的存取
    2、严格限定了变量只能被赋值为枚举中的数据
    3、极大可能性避免了程序中出现字符串或者其他常量
*/

/* const BASE_URL = "http://localhost:8080";
const BASE_API = "http://localhost:3000"; */

// ==============

/* // 不需要给枚举进行赋值，因为值不需要参与运算，只是用来做分支比较
interface ITodo {
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
  id: 0,
  content: "",
  completed: false
};

function setTodo(type: TodoSet, value: TypeTodoValue): TypeTodoValue {
  switch (type) {
    case TodoSet.ID:
      todo.id = <number>value;
      break;
    case TodoSet.CONTENT:
      todo.content = <string>value;
      break;
    case TodoSet.COMPLETED:
      todo.completed = <boolean>value;
      break;
  }
  return value;
}

setTodo(TodoSet.ID, 1);
setTodo(TodoSet.CONTENT, "This is my first todotodo."); */