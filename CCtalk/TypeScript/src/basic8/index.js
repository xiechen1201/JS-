"use strict";
// 08 接口类型、接口与类型别名比较使用
/*
    什么是接口？
    接口和日常中的插座没有区别，就是一种彼此可接入的规范，让彼此可以符合某一种标准进行定义

    接口 A {
        类型：三角口
        电源：220V
    }

    这就是接口
    interface 也就是一个标准

    interface MyInterface {}
    type Typename =  {}

    相比写法稍微不同，


    type 能做到的，interface 都能做到，interface 的命名也是大驼峰
*/
/* // 类型别名
type TypePlusArgs = {
  a: number;
  b: number;
};

// 接口定义
interface IPlusArgs {
  a: number;
  b: number;
}

function plus({ a, b }: TypePlusArgs): number {
  return a + b;
}

function plus2({ a, b }: IPlusArgs): number {
  return a + b;
}

plus({ a: 1, b: 2 }); */
/*
    光是定义类型的时候：数组、基本类型、元祖、联合类型、函数 => 类型别名就够了
    对象、类接口 => 接口

    一般来说定义对象都是使用 interface ，但是也可以使用 type 不过 interface 可以实现继承
*/
/*
    任意 key 的设置
    所有的 key 都是 number 类型
*/
/* type TypeObj = {
  // 无论什么 key 都必须满足 number 类型
  // key 一般都是 string 类型
  [key: string]: number;
};

const obj: TypeObj = {
  a: 1,
  b: 2,
  c: 3,
}; */
/* interface IObj {
  [key: string]: number;
}

const obj: IObj = {
  a: 1,
  b: 2,
  c: 3
}; */
// 定义函数的类型，约束 plus 定义为一个接受如下函数的方式
/* const plus = (a: number, b: number): number => {
  return a + b;
}; */
/* type TypePlus = (a: number, b: number) => number;
const plus: TypePlus = (a: number, b: number): number => {
  return a + b;
}; */
// 或者这样定义
/* type TypePlus = {
  (a: number, b: number): number;
}; */
/* interface IPlus {
  (a: number, b: number): number;
}
const plus: IPlus = (a: number, b: number): number => a + b; */
// 定义带函数的对象
/* type TypeObj = {
  a: number;
  getA(): number;
  setA?(a: number): void;
};

const obj: TypeObj = {
  a: 1,
  getA() {
    return this.a;
  },
  setA(a: number) {
    this.a = a;
  }
}; */
/* interface IObj {
  a: number;
  getA(): number;
  setA?(a: number): void;
}

const obj: IObj = {
  a: 1,
  getA() {
    return this.a;
  },
  setA(a: number) {
    this.a = a;
  }
}; */
/* // 交叉类型
type TypeUser = {
  id: number;
  username: string;
  password: string;
};

// 把 TypeUser 类型合并进来
type TypeAdmin = TypeUser & {
  loginKey: string;
  level: number;
};

const user1: TypeUser = {
  id: 1,
  username: "user1",
  password: " user1"
};

const admin1: TypeAdmin = {
  id: 1,
  username: "admin1",
  password: "admin1",
  loginKey: "key",
  level: 1
} */
/* interface IUser {
  id: number;
  username: string;
  password: string;
}

interface IAdmin extends IUser {
  loginKey: string;
  level: number;
}

const user1: IUser = {
  id: 1,
  username: "user1",
  password: " user1"
};

const admin1: IAdmin = {
  id: 1,
  username: "admin1",
  password: "admin1",
  loginKey: "key",
  level: 1
}; */
/*
    绝大多数情况下 type 和 interface 没有区别，interface 比 type 的语义化更好
*/
/*
    接口合并

    希望有一个是不是管理员的字段

    它们两个就会进行合并，但是我们又不能影响到被人的使用，所以 isAdmin 要定义为可选的
*/
/* interface IUser {
  id: number;
  username: string;
  password: string;
}

interface IUser {
  isAdmin?: boolean;
}

const admin1: IUser = {
  id: 1,
  username: "admin1",
  password: "admin1",
  isAdmin: true
}; */
/*
    类对接口的实现

    现在只是展示 interface 能干啥
*/
/* type TypeUser = {
  userName: string;
  age: number;
};

interface IUser {
  userName: string;
  getAge(): number;
  setAge(age: number): void;
}

class User implements IUser {
  public userName: string;
  private age: number;

  constructor({ userName, age }: TypeUser) {
    this.userName = userName;
    this.age = age;
  }
  getAge(): number {
    return this.age;
  }
  setAge(age: number): void {
    this.age = age;
  }
}

const user1 = new User({
  userName: "xiechen",
  age: 18
});

console.log(user1.userName);
console.log(user1.getAge()); */
/*
    总结：interface 和 type 能够在大部分情况下转换着使用，但是一般定义对象的时候 interfalce 比较多，因为可以继承

    但是 type 主要还是用于对基本类型、联合类型、函数、数组进行定义的比较多，interfce 局限于对象比较多

    虽然可以交叉类型，但是语义化并不好
*/
