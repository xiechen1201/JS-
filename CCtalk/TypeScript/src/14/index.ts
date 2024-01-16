// 14 函数签名

/* 
    什么是函数签名？
    就是函数类型定义。
*/

// 整个函数就是函数签名
// 这是在定义函数时进行的函数签名（函数声明）
/* function plus(a: number, b: number): number {
  return a + b;
} */

/* // 如果做函数类型的表达式呢？（在之前做定义）
// 表达了函数的结构是什么，类型是什么。
// 这就是一个签名
type TypePlus = (a: number, b: number) => number;

const plus: TypePlus = (a: number, b: number) => {
  return a + b;
}; */

// ====================

// 错误的写法

/* enum ComputedMethod {
  plus = "+",
  minus = "-"
}

type TypeComputedArgs = {
  a: number;
  b: number;
  method: ComputedMethod;
};

type TypeCallback = (a: number, b: number, method: ComputedMethod, res: number) => void;

function comuted({ a, b, method }: TypeComputedArgs, callback: TypeCallback) {
  let res = 0;
  switch (method) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
  }

  typeof callback === "function" && callback(a, b, method, res);
}

comuted({ a: 1, b: 2, method: ComputedMethod.plus }, (a, b, method, res) => {
  console.log(a, b, method, res);
}); */

/* 
    会回调函数进行了函数签名，但是设计变了，不要传递 callback 了，又该如何拿到 res 参数呢？
*/

// =======================

/* enum ComputedMethod {
  plus = "+",
  minus = "-"
}

type TypeComputedArgs = (a: number, b: number, method: ComputedMethod) => void;

const comuted: TypeComputedArgs = function (a, b, method) {
  let res = 0;
  switch (method) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
  }
};

comuted(1, 2, ComputedMethod.minus); */

// 照样可以允许，只是结果拿不到，可以进行更加复杂的签名

// ==================================

// 给函数增加静态属性（函数调用签名）

// 函数本身是对象，可以新增属性

/* enum ComputedMethod {
  plus = "+",
  minus = "-"
}

type TypeComputedArgs = {
  (a: number, b: number, method: ComputedMethod): void;
  result?: number; // 因为定义函数的时候没有改属性
};

const comuted: TypeComputedArgs = function (a, b, method) {
  let res = 0;
  switch (method) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
  }

  comuted.result = res;
  // ❌类型“TypeComputedArgs”上不存在属性“result”
};

comuted(1, 2, ComputedMethod.minus);
console.log(comuted.result); // -1 */

// 这种方式就是给函数增加一些属性，避免了函数没有办法调用 result 的情况。

// ==========================

// 构造函数签名

/* class Phone {
  constructor(public rom: number, public ram: number) {}
}

// 等同于

class Phone {
  public rom: number;
  public ram: number;

  constructor(rom: number, ram: number) {
    this.rom = rom;
    this.ram = ram;
  }
} */

// =======================

/* type TypeDressColor = "red" | "blue" | "green";

class Phone {
  constructor(public rom: number, public ram: number) {}
}

class Dress {
  constructor(public color: TypeDressColor, public size: number) {}
}

// 这两个类型代表的是类型的实例，也就是 new 出来的东西
type TypeProduct = Phone | Dress;

function getProduct(product: TypeProduct) {
    return new product()
    // ❌此表达式不可构造
} */

// 只能 constructor 进行签名

// ===================

/* type TypeDressColor = "red" | "blue" | "green";

class Phone {
  constructor(public rom: number, public ram: number) {}
}

class Dress {
  constructor(public color: TypeDressColor, public size: number) {}
}

// 这是对 constructor 的描述
type TypePhoneConstructor = new (rom: number, ram: number) => Phone;
type TypeDressConstructor = new (color: TypeDressColor, size: number) => Dress;
type TypeProduct = TypePhoneConstructor | TypeDressConstructor;

function getProduct(Product: TypeProduct) {
  switch (Product) {
    case Phone:
      return new Phone(12, 512);
    case Dress:
      return new Dress("red", 100);
  }
}

const instance = getProduct(Phone);
const instance2 = getProduct(Dress);
console.log(instance, instance2); */

/* 
    对于构造器的类型定义，要比普通函数的多出一个 new 关键字
*/