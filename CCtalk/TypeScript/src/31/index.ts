// 31 鸭子类型、抽象类与接口

/* 
    需求：
    地图类型
        百度地图
        高德地图

    行为
        定位
        搜索
*/

/* abstract class CommonMap {
  abstract locate(): void;
  abstract search(): void;

  getConfig() {
    if (this instanceof BaiduMap) {
      console.log("www.baidu.com");
    } else if (this instanceof GaodeMap) {
      console.log("www.gaode.com");
    }
  }
}

class BaiduMap extends CommonMap {
  locate() {
    console.log("百度地图定位");
  }
  search() {
    console.log("百度地图搜索");
  }
}

class GaodeMap extends CommonMap {
  locate() {
    console.log("高德地图定位");
  }
  search() {
    console.log("高德地图搜索");
  }
}

// 好处：只要是地图类型必须实现这两个方法

const baiduM: CommonMap = new BaiduMap();
const gaodeM: CommonMap = new GaodeMap();

baiduM.locate();
baiduM.search();
baiduM.getConfig();

gaodeM.locate();
gaodeM.search();
gaodeM.getConfig();
 */
// =========================================

/* 
    为什么要限制类型必须是 CommonMap 呢？
    const baiduM: CommonMap = new BaiduMap();
    const gaodeM: CommonMap = new GaodeMap();

    这样可以限制实例对象无法调用自身上的方法

    严格要求只要是公开对外的方法，必须是在抽象类中定义的。
*/

/* abstract class CommonMap {
  abstract locate(): void;
  abstract search(): void;

  getConfig() {
    if (this instanceof BaiduMap) {
      console.log("www.baidu.com");
    }
  }
}

class BaiduMap extends CommonMap {
  locate() {
    console.log("百度地图定位");
  }
  search() {
    console.log("百度地图搜索");
  }

  doSometh() {
    console.log("abc");
  }
}

let baiduM: CommonMap = new BaiduMap();
baiduM.doSometh(); // ❌类型“CommonMap”上不存在属性“doSometh” */

// =========================================

/* 
    TodoList ==> Duck

    {
        id:
        content:
        completed:
    }

*/

/* abstract class TodoList<T> {
  abstract todoList: T[];
  abstract getTodo(id: number): T | undefined;
  abstract addTodo(todo: T): boolean;
  abstract toggleTodo(id: number): void;
  abstract removeTodo(id: number): void;

  getTodoList() {
    return this.todoList;
  }
}

interface ISched {
  id: number;
  content: string;
  completed: boolean;
}

class TodaySched extends TodoList<ISched> {
  todoList: ISched[];

  constructor(todoList: ISched[]) {
    super();
    this.todoList = todoList;
  }

  getTodo(id: number): ISched | undefined {
    return this.todoList.find((todo) => todo.id === id);
  }
  addTodo(todo: ISched): boolean {
    const hasTodo = this.getTodo(todo.id);

    if (!hasTodo) {
      this.todoList.push(todo);
      return true;
    }
    return false;
  }
  toggleTodo(id: number): void {
    this.todoList = this.todoList.map((todo) => {
      todo.id === id && (todo.completed = !todo.completed);
      return todo;
    });
  }
  removeTodo(id: number): void {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }
}

const todaySched: TodoList<ISched> = new TodaySched([]);
todaySched.addTodo({ id: 1, content: "a", completed: false });
console.log(todaySched.getTodoList()); */

/* 
    抽象类主要：
        1、抽象方法
        2、书写具体自己的实现方法（也就是 getTodoList 方法），是可以被继承的
        3、不能被实例化

*/

// =========================================

// 使用接口进行定义

/* interface ISched {
  id: number;
  content: string;
  completed: boolean;
}

interface ITodoList<T> {
  todoList: T[];
  getTodo(id: number): T | undefined;
  addTodo(todo: T): boolean;
  toggleTodo(id: number): void;
  removeTodo(id: number): void;
}

class TodaySched implements ITodoList<ISched> {
  todoList: ISched[];

  constructor(todoList: ISched[]){
    this.todoList = todoList;
  }

  getTodo(id: number): ISched | undefined {
    throw new Error("Method not implemented.");
  }
  addTodo(todo: ISched): boolean {
    throw new Error("Method not implemented.");
  }
  toggleTodo(id: number): void {
    throw new Error("Method not implemented.");
  }
  removeTodo(id: number): void {
    throw new Error("Method not implemented.");
  }
} */

/* 
    无论是鸭子类型或者接口都可以当作是一个类型来使用，类就会被约束。
    可以规范类的书写，集成方法的定义。
*/

export {}