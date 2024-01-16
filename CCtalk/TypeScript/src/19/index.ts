// TS 中函数的 this 问题

/* 
    this 的前置知识
*/

/* const obj = {
  a: 1,
  getA() {
    // 指向 obj
    return this.a; 
  }
}; */

/* const obj = {
  a: 1,
  getA: function () {
    // 指向 obj
    return this.a;
  }
}; */

/* const obj = {
  a: 1,
  getA: () => {
    // 指向全局
    // ❌包含箭头函数捕获 "this" 的全局值
    return this.a;
  }
}; */

// 在 "use strict" 的严格模式下，全局的 this 是 undefined

/* const obj = {
  a: 1,
  getA() {
    // 指向全局
    console.log(this);
    return this.a;
  }
};

const fn = obj.getA;
fn(); */

/* class Test {
  a = 1;

  // 编译到 Prototype
  getA1() {
    console.log(this);
  }

  // 编译到 instance
  getA2 = function () {
    // ❌"this" 隐式具有类型 "any"，因为它没有类型注释
    console.log(this);
  };

  // 编译到 instance
  getA3 = () => { 
    console.log(this);
  };
} */

/* 
    在 TS 中，类中的函数表达式（getA2 = function ()）是不会进行 this 类型注解的
    在类中，给类实例增加方法（getA3 = () =>），就可以使用箭头函数
*/

// =================

/* interface IObj {
  a: number;
  getA(this: IObj): void;
}

const obj: IObj = {
  a: 1,
  getA() {
    console.log(this.a);
  }
};
const fn = obj.getA;
// ❌类型为“void”的 "this" 上下文不能分配给类型为“IObj”的方法的 "this"
fn(); */

/* 
    严格模式下，this 肯定指向的是 undefined
    通过 interface 对函数的 this 进行限制
*/

// 这里没讲完？？？

// ====================

// 构造函数的问题

/* function Test(a) {
  // ❌"this" 隐式具有类型 "any"，因为它没有类型注释
  this.a = a;
}
// ❌其目标缺少构造签名的 "new" 表达式隐式具有 "any" 类型
new Test(1); */

/* 
    必须通过一个 interface 进行注解，在 TS 中不支持 ES5 构造函数的，必须手动定义构造器
*/

// =================

/* 
    给函数实例定义接口
    ES5 的方式
*/

/* interface ITest {
  a: number;
  getA(): number;
}

interface ITestConstructor {
  new (a: number): ITest;
  prototype: ITest;
}

const Test = function (this: ITest, a: number) {
  this.a = a;
} as unknown as ITestConstructor;

Test.prototype.getA = function () {
  return this.a;
};

const test = new Test(1);
console.log(test.getA); */

// ===================

/* class Test {
  a = 1;

  // 原型方法 Test.prototype.getA1
  getA1() {
    console.log(this.a);
  }

  // 实例方法 test.getA2
  getA2 = () => {
    console.log(this.a);
  };

  getA3 = function () {
    // ❌"this" 隐式具有类型 "any"，因为它没有类型注释
    console.log(this.a);
  };
} */

/* class Test {
  a = 1;

  // 原型方法 Test.prototype.getA1
  getA1() {
    console.log(this.a);
  }

  // 实例方法 test.getA2
  getA2 = () => {
    console.log(this.a);
  };

  // 定义一个类型
  getA3 = function (this: Test) {
    console.log(this.a);
  };
}
let test = new Test();
test.getA1();
test.getA2();
test.getA3(); */
