// 27 类成员属性、方法、getter 和 setter

/* 
    类成员：
        构造器
        属性
        方法 => 普通方法 | getter,setter

    
    函数：本质上是一种数据类型，是语言语法层面上的存在  
    方法：一个容器内的函数（函数从功能层面上的一种描述）

    对象（类）内的函数都称为方法。

    外部独立的函数可以成为方法或者函数。
*/

/* class Test {
  a: number; // ❌属性“a”没有初始化表达式，且未在构造函数中明确赋值
  // 类成员属性在定义时候的初始化
  b: number = 2;
  c: number;
} */

/* 
    成员属性都需要在 constructor 内部赋值 
*/

// =============================================

/* class Test {
  // ! 表示该属性不需要初始化，其实就是非空断言。
  a!: number;
  b: number = 2;
  c: number;

  constructor(a: number, b: number, c: number) {
    this.c = c;
  }
} */

/* class Test {
  a!: number;
  b: number = 2;
  c: number;

  constructor(b: number, c: number, a?: number) {
    // this.a = a; // ❌不能将类型“number | undefined”分配给类型“number”
    // 在构造器中的类成员属性的初始化
    a && (this.a = a);
    this.c = c;
  }
} */

// ============================================

// 只读的

/* class Test {
  a!: number;
  readonly b: number = 2;
  c: number;

  constructor(b: number, c: number, a?: number) {
    a && (this.a = a);
    this.c = c;
  }

  test() {
    this.b = 200; // ❌无法为“b”赋值，因为它是只读属性
  }
}

const test = new Test(1, 2, 3);
this.b = 2000; // ❌元素隐式具有 "any" 类型，因为类型“typeof globalThis”没有索引签名 */

/* 
    readonly 表示在任何情况下，b 属性都不能进行重新赋值。
*/

// ============================================

// 基本的类演示

type TypeValidKey = "user" | "level";

type TypeValidInfo = {
  [key in TypeValidKey]: boolean;
};

class UserInfo {
  user: string;
  age!: number;
  level: number;
  isValid: boolean;

  constructor(user: string = "未知的", age?: number, level: number = 1, isValid: boolean = true) {
    this.user = user;
    age && (this.age = age);
    this.level = level;
    this.isValid = isValid;

    this.init();
  }

  // 1、有 getter 没有 setter 的情况，username 是只读的属性
  // 2、有 setter 但参数类型没有指定，采用 getter 函数的返回值类型

  // 成员属性的名字不能被 getter 函数使用
  // 属性获取的拦截器
  get username() {
    return `${this.user}(${this.level})`;
  }

  // 属性设置时的拦截器
  set username(user: string) {
    this.user = user;
  }

  init() {
    for (const key in this) {
      this.checkValidInfo(key as TypeValidKey);
    }
  }

  validInfo: TypeValidInfo = {
    user: false,
    level: false
  };

  // 类中定义的方法，都是在类的 prototype 上
  // 每次实例化的时候，这些方法都是不参与的
  checkValidInfo(key: TypeValidKey): TypeValidInfo {
    switch (key) {
      case "user":
        this.validInfo.user = this.user.length >= 6;
        break;
      case "level":
        this.validInfo.level = this.level >= 0 && this.level <= 12;
        break;
    }
    return this.validInfo;
  }
}

// adminInfo 是子类，UserInfo 是父类
class AdminInfo extends UserInfo {
  user: string;
  level: number;

  constructor(user: string = "未知的 Admin", level: number = 1, isValid: boolean = true) {
    super(user, undefined, level, isValid);

    this.user = user;
    this.level = level;
  }
}

let user = new AdminInfo("xiechen", 6, false);
console.log(user);

user.username = "xiechen1"; // 调用 setter 函数
console.log(user.username); // 调用 getter 函数
