// 33 extends 的系统学习

/* 
    条件类型
    通过三元来继承
*/

/* interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

type TodoArr = [number, string, boolean];

// 如果 T 继承于 Array，则返回 TodoArr 类型
type TodoReturnType<T> = T extends Array<any> ? TodoArr : ITodo;

// 传递一个空数组
function getData(id: number): TodoReturnType<[]> {
  return [1, "str", true];
} */

// =================================

/* 
    类型分配
*/

/* type User = {
  username: string;
  password: string;
};

type Admin = {
  username: string;
  password: string;
};

type Bool1 = Admin extends User ? true : false; // true
type Bool2 = User extends Admin ? true : false; // true */

/* 
    类型和类型之间不是继承关系，那么它一定是条件约束或者类型分配机制。

    (两个类型完全相同)
    也就是看 Admin 是否可以分配给 User，是一个兼容的问题 
*/

/* type User = {
  username: string;
  password: string;
};

type Admin = {
  username: string;
  password: string;
  passcode: number;
};

type Bool1 = Admin extends User ? true : false; // true
type Bool2 = User extends Admin ? true : false; // false */

/* 
    (两个类型不相同的时候)
    可以理解为包含关系并且全部包含，那么就是可以被分配
    User extends Admin 缺失 password 属性，所以不成立
*/

/* type Bool1 = "a" extends "a" ? true : false; // true
// 联合类型无法分配给单个类型
type Bool2 = "a" | "b" extends "a" ? true : false; // false
type Bool3 = "a" extends "a" | "b" ? true : false; // true */

/* 
  只有 a 被包含在 a b 中，那么 a 才能够被分配。
  要理解为 a b 包不包含 a，而不能理解为 a 包不包含 a b
*/

/* type Bool4<T> = T extends "a" | "b" ? true : false;
type Bool5 = Bool4<"b">; // true */

// ================================

/* 
  泛型中的联合类型涉及的类型分配律
*/

/* type Bool<T> = T extends "a" ? string : number;
type Bool2 = Bool<"a" | "b">; // string | number
type Bool3 = "a" | "b" extends "a" ? string : number; // number */

/* 
  泛型中的联合类型是不一样的。
  Bool<"a" | "b">
  Bool<"a"> ==> string
  Bool<"b"> ==> number
  泛型是需要分配的，泛型里面的联合类型是需要分配的。

  所以就会变成 string | number
*/

/* 
  never 可以分配给其他的类型
  其他类型不可以分配给 never 类型
*/
/* type Bool = never extends "a" ? string : number; // string */
/* type Bool2 = "a" extends never ? string : number; // number */

/* 
  一个泛型传入的是 never 的话，never 相当于是一个空的联合类型，这个时候就不会做类型检查，而是直接返回 never
*/
/* type Bool<T> = T extends "a" ? string : number;
type Bool2 = Bool<never>; // never */

// ====================================

/* 
  TS 的工具的类型分配
  exclude
  extract
  pick
*/

// 把 a 排除出去
// 把现有的类型排除出去，形成一个新的类型
/* type MyExclude<T, U> = T extends U ? never : T;
type res = MyExclude<"a" | "b", "a">; // "b" */

/* 
  错误的理解："a" | "b" extends "a" ? never : "a" | "b"
  正确的："a" extends "a" ? never : "a"; // never
        "b" extends "a" ? never : "b"; // "b"
        得到结果 never | "b"

        因为 never 类型无法分配，所以赋值为 "b"
*/

// ======

/* type MyExtract<T, U> = T extends U ? T : never;
type res = MyExtract<"a" | "b", "a">; // "a" */

/* 
  "a" extends "a" ? "a" : never; // "a"
  "b" extends "a" ? "b" : never; // never
  结果 "a" | never
*/

// ========

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type Res = MyPick<Todo, "content" | "completed">;

/* 
  K extends keyof T,相当于 K 必须是 Todo 里面，也就是 id content completed 
  [key in K]，key 约束为 K，也就是 "id" | "content" | "completed"
  T[key], value 约束为 number | string | boolean，也就是对应某个 key 的类型

  res 的结果：
  type Res = {
    content: string;
    completed: boolean;
  }
*/

export {};
