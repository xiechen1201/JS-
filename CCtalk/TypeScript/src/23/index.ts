// 23 泛型对象的应用

/* interface ITest {
  a: number;
  b: number;
}

const test: ITest = {
  a: 1,
  b: 2
}; */

/* 
    a b 不一定是 number
    使用 any 意义又不大
    有没有办法再使用的时候再传入类型呢？这就是泛型

    一个类型有没有一种可能让我们在定义的时候传递一个类似于变量的形参，
    使用这个类型的时候，传入对应这个形参的实参类型呢？
    这个定义方式就是泛型定义方式
*/

/* interface ITest<T> {
  a: T;
  b: T;
}

const test: ITest<string> = {
  a: 1,
  b: 2
}; */

/* 
    T 就是泛型形参类型
    string 就是泛型实参类型
*/

// ===========================

// ## 对象泛型+函数泛型的案例

/* 
    content 可以是 "睡觉" | ["吃饭", "睡觉"] | {sleep: 1, study: 2}
*/

/* interface ITodo<T> {
  id: number;
  content: T;
  completed: boolean;
}

// ITodo<T> 的 T 也不知道是什么类型，就需要通过函数的泛型
function createTodo<T>({ id, content, completed }: ITodo<T>) {
  return {
    id,
    content,
    completed
  };
}

// 泛型实参回限制泛型的变量的类型，不传就限制不住
const todo1 = createTodo<string>({
  id: 1,
  content: "睡觉",
  completed: false
});
const todo2 = createTodo<string[]>({
  id: 1,
  content: ["睡觉", "吃饭"],
  completed: false
});
const todo3 = createTodo<{ [key: string]: number }>({
  id: 1,
  content: {
    sleep: 1,
    study: 2
  },
  completed: false
});

const todoList: string[] = [];

function setTodo(todo: ITodo<string>): void;
function setTodo(todo: ITodo<string[]>): void;
function setTodo(todo: ITodo<{ [key: string]: number }>): void;
function setTodo<T>({ id, content, completed }: ITodo<T>) {
  if (typeof content === "string") {
    todoList.push(`${id} | ${content} | ${completed ? "completed" : "no completed"}`);
  } else if (Array.isArray(content)) {
    const _content = content.join(", ");
    todoList.push(`${id} | ${_content} | ${completed ? "completed" : "no completed"}`);
  } else if (Object.prototype.toString.call(content) === "[object Object]") {
    let _content = "";
    for (const key in content) {
      _content += `${key}: ${content[key]}, `;
    }

    todoList.push(`${id} | ${_content} | ${completed ? "completed" : "no completed"}`);
  }
}

setTodo(todo1);
setTodo(todo2);
setTodo(todo3);
console.log(todoList); */

// ======================