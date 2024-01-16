// 26 条件类型和相关约束

/* interface ITodObj {
  id: number;
  content: string;
  completed: boolean;
}

const todoObj: ITodObj = {
  id: 1,
  content: "",
  completed: false
};

type TypeTodoArr = [number, string, boolean];

const todoArr: TypeTodoArr = [1, "", false];

type TypeSetTodoReturn<K> = K extends keyof ITodObj ? ITodObj : TypeTodoArr;

// K 的类型只能是 id、content、completed
// id、content、completed 的某一个 key 的类型给到 K
// 这个类型作为 ITodObj[K] 的某一个 key 拿到 number\string\boolean 的类型

// 调用 setTodo(1, "id") ==> 找到 K 的 id 属性 ==> 然后通过 ITodObj[K] 找到 id 的值类型 ==> number ==> V
function setTodo<V extends ITodObj[K], K extends keyof ITodObj>(value: V, key: K): TypeSetTodoReturn<K>;
function setTodo<V extends ITodObj[keyof ITodObj], K extends undefined>(
  value: V,
  key?: undefined
): TypeSetTodoReturn<K>;
function setTodo(val: any, key: any) {
  if (!key) {
    switch (typeof val) {
      case "number":
        todoArr[0] = val;
        break;
      case "string":
        todoArr[1] = val;
        break;
      case "boolean":
        todoArr[2] = val;
        break;
    }

    return todoArr;
  }

  (todoObj as any)[key] = val;
  return todoObj;
}

setTodo(1, "id");
setTodo("todo", "content");
setTodo(true);

console.log(todoObj);
console.log(todoArr); */

// =================================

/* function test(a: number, b: number): number {
  return a + b;
}
// 获取函数的返回值类型
type TypeTestReturn = ReturnType<typeof test>; // type TypeTestReturn = number */

// ==========================

// 模拟一个 ReturnType 的实现

/* // extends 很想等于的意思
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// infer R 表示告诉 T 涉及到的是一个 R，这个 R 是什么都可以，相当于泛型一样，只不过必须放在 infer 后面
//也就是说告诉涉及到一个返回值，具体是什么返回值还不知道，只有当 MyReturnType<T> 返回出来才知道

type TypeTestReturn = MyReturnType<typeof test>; // type TypeTestReturn = number

function test(a: number, b: number): number {
  return a + b;
} */

/* 
    ReturnType<typeof test> 
    其实就是 
    T extends (...args: any[]) => infer R ? R : any; 
    的语法。

    infer R 
*/

// ===============================

/* 
type TypeArr<T> = T extends number | string ? T[] : never;
type MyArr1 = TypeArr<number | string>; // type MyArr1 = string[] | number[]
 */

type TypeArr<T> = [T] extends [number] | [string] ? T[] : never;
type MyArr1 = TypeArr<number | string>;
// 这样就相当于是 [number | string] extends [number] | [string]
// 是无法满足需求的，就成了大范围匹配小范围了
type MyArr2 = TypeArr<number>;
type MyArr3 = TypeArr<string>;
