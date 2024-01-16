// 08 接口类型、接口与类型别名比较

/* 
    什么是接口？
    和日常生活中的插口、电源没有区别，就是一种彼此可接入的规范，让彼此能够符合某一种标准进行定义。

    接口A{
        类型：三角口
        电源：220V
    }

    这就是一种规范！

    interface 也是一个标准
    interface MyInterface {}
    type MyType = {}

    写法稍微的不同！

    type 能做到的 interface 都可以做到，interface 的命名也是大驼峰！

    基本类型、数组、元祖、联合类型、函数等使用类型别名即可！
    对象、类使用接口即可！
*/

// 类型别名的方式
/* type TypePlusArgs = {
  a: number;
  b: number;
};
function plus({ a, b }: TypePlusArgs): number {
  return a + b;
} */

// 接口的方式
/* interface IPlusArg {
  a: number;
  b: number;
}
function plus({ a, b }: IPlusArg): number {
  return a + b;
} */

// ==========

// 对象的对比：任意 key 的设置
// 需求：约束比较简单，所有的 key 都是 number 类型

/* type TypeObj = {
  // 无论是什么 key 都必须满足是 number 类型
  // key 是个变量并不是明确的哪个键名，所以使用 []
  [key: string]: number;
};

const obj: TypeObj = {
  a: 1,
  b: 2,
  c: 3,
  d: "4"
}; */

/* interface IObj {
  [key: string]: number;
}

const obj: IObj = {
  a: 1,
  b: 2,
  c: 3,
  d: "4"
}; */

// ============

// 函数的对比

/* // 定义一个函数的类型，不能使用冒号
type TypePlus = (a: number, b: number) => number;
// 匿名定义的方式，两种相同
type TypePlus2 = {
  (a: number, b: number): number;
};

const plus: TypePlus = (a: number, b: number): number => {
  return a + b;
}; */

/* // 接口不能使用箭头函数的方式
interface IPlus {
  (a: number, b: number): number;
}
const plus: IPlus = (a: number, b: number): number => {
  return a + b;
}; */

// ===============

// 定义带函数的对象对比

/* type TypeObj = {
  a: number;
  getA?(): number;
  setA: (val: number) => void;
};
const obj: TypeObj = {
  a: 1,
  getA() {
    return this.a;
  },
  setA(val: number) {
    this.a = val;
  }
}; */

/* interface IObj {
  a: number;
  getA?(): number;
  setA: (val: number) => void;
}

const obj: IObj = {
  a: 1,
  getA() {
    return this.a;
  },
  setA(val: number) {
    this.a = val;
  }
}; */

// ============

// 继承对比
// admin 也是 user，admin 必须具有 user 的属性

/* type TypeUser = {
  id: number;
  username: string;
  password: string;
};
// 交叉类型
type TypeAdmin = TypeUser & {
  loginKey: string;
  level: number;
};

const user1: TypeUser = {
  id: 1,
  username: "user",
  password: "user"
};
const user2: TypeAdmin = {
  id: 101,
  username: "user",
  // password: "user",
  loginKey: "key",
  level: 1
}; */

/* interface IUser {
  id: number;
  username: string;
  password: string;
}
// 继承
interface IAdmin extends IUser {
  loginKey: string;
  level?: number;
}

const user1: IUser = {
  id: 1,
  username: "user",
  password: "user"
};
const user2: IAdmin = {
  id: 101,
  username: "user",
  password: "user",
  loginKey: "key",
  level: 1
}; */

// interface 比 type 的语义化更好

// ============

// 接口合并

/* interface IUser {
  id: number;
  username: string;
  password: string;
}
// 应该有一个是不是管理员的属性，但是又不想改 IUser，又想延用 IUser
// 再写一个，两个就会合并，然后定义可选属性
interface IUser {
  isAdmin?: boolean;
}

const user1: IUser = {
  id: 1,
  username: "user1",
  password: "user1"
};

const user2: IUser = {
  id: 1,
  username: "user1",
  password: "user1",
  isAdmin: true
}; */

// ===============

// 对类的约束和规范

/* type IUserArgs = {
  username: string;
  age: number;
};

interface IUser {
  username: string;
  getAge(): number;
  setAge(val: number): void;
}

// 根据接口实现类
class User implements IUser {
  public username: string;
  private age: number;

  constructor({ username, age }: IUserArgs) {
    this.username = username;
    this.age = age;
  }
  getAge(): number {
    return this.age;
  }
  setAge(val: number): void {
    this.age = val;
  }
}

const user1 = new User({
  username: "xiechen",
  age: 18
});
console.log(user1.username);
console.log(user1.getAge()); */

// =========

/* 
    总结：
    type 和 interface 在大部分的时候都可以转换着使用，但是在定义对的时候使用 interface 比较多，因为接口具有继承的机制，对于 type 主要还是对基本类型、函数、数组等定义的比较多一些。

    type 的交叉类型语义化不好，
*/
