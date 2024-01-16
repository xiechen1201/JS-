// 28 类接口的定义与实现的规范

// 在类内部对类成员进行限制的一种方式

/* 
    参数也都是 number

    plus
    minus
    mul
    div

    公共的返回值 Number
*/

/* class Computed {
  // 索引签名的定义类型的方案
  [key: string]: number | ((...args: any[]) => number);
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  plus() {
    // return ''; // ❌类型“() => string”的属性“plus”不能赋给“string”索引类型“number | ((...args: any[]) => number)”
    return this.a + this.b;
  }

  minus() {
    return this.a - this.b;
  }

  mul() {
    return this.a * this.b;
  }

  div() {
    return this.a / this.b;
  }
} */

// ==================================

/* TodoList 案例 */

/* 
    getTodo(id) => todo | undefined
    addTodo(todo) => boolean
    toggleTodo(id) ==> boolean
    removeTodo(id) ==> boolean

    由接口对类实现方法的规范
    所有的公共方法都需要由接口进行规范
    一个类需要定义的公共方法一定需要由接口进行定义，类进行实现。
*/

interface ITodo {
  id: number;
  name: string;
  completed: boolean;
}

interface ITodoList {
  // 都是公共方法
  getTodo(id: number): ITodo | undefined;
  addTodo(todo: ITodo): boolean;
  toggleTodo(id: number): boolean;
  removeTodo(id: number): boolean;
}

// 告诉类如何实现
// 多实现 class TodoList implements ITodoList, ITodoList2
class TodoList implements ITodoList {
  todoList: ITodo[];

  constructor(todoList: ITodo[]) {
    this.todoList = todoList;
  }

  getTodo(id: number): ITodo | undefined {
    return this.todoList.find((todo) => todo.id === id);
  }

  addTodo(todo: ITodo): boolean {
    if (this.getTodo(todo.id)) {
      return false;
    }

    this.todoList.push(todo);
    return true;
  }
  toggleTodo(id: number): boolean {
    if (this.getTodo(id)) {
      return false;
    }

    this.todoList = this.todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    return true;
  }
  removeTodo(id: number): boolean {
    if (this.getTodo(id)) {
      return false;
    }

    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    return true;
  }
}

const todoList = new TodoList([]);
todoList.addTodo({ id: 1, name: "todo1", completed: false });
console.log(todoList.getTodo(1));
todoList.toggleTodo(1);
console.log(todoList.getTodo(1));