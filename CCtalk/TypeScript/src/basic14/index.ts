// 14 函数签名、调用与构造签名

/* 
    什么是函数签名？
    就是函数类型定义
*/

// 定义函数时进行的函数签名（函数声明就是函数签名）
/* function plus(a: number, b: number): number {
  return a + b;
} */

// 函数类型的表达式，定义一个函数的之前做一个事情
// 表达了一个函数的结构是什么、类型又是什么，里面各个类型是什么，这就是一个签名
/* type TypePlus = (a: number, b: number) => number;
const plus: TypePlus = (a, b) => a + b; */

// ===========

/* // 错误的写法
enum ComputeMethods {
  PLUS = "+",
  MINUS = "-",
  MULTIPLY = "*",
  DIVIDE = "/"
}

type TypeComputeArgs = {
  a: number;
  b: number;
  method: ComputeMethods;
};

type TypeCallback = (a: number, b: number, method: ComputeMethods, result: number) => void;

function compute({ a, b, method }: TypeComputeArgs, callback: TypeCallback) {
  let result = 0;
  switch (method) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      break;
  }

  typeof callback === "function" && callback(a, b, method, result);
}

compute(
  {
    a: 1,
    b: 2,
    method: ComputeMethods.DIVIDE
  },
  (a, b, method, result) => {
    console.log(a, b, method, result);
  }
);
 */

// 对回调函数进行了描述，进行了签名

// =====================

// 函数调用 签名

/* enum ComputeMethods {
  PLUS = "+",
  MINUS = "-",
  MULTIPLY = "*",
  DIVIDE = "/"
}

// type TypeCompute = (a: number, b: number, method: ComputeMethods) => void;
type TypeCompute = {
  // 匿名函数 
  (a: number, b: number, method: ComputeMethods): void;
  result?: number; // 给函数新增静态属性
};

const compute: TypeCompute = (a, b, method) => {
  let result = 0;
  switch (method) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      break;
  }

  // 如何得到函数的结果呢？
  compute.result = result;
};

compute(1, 2, ComputeMethods.MINUS);
console.log(compute.result) */

// 可以给函数新增属性，避免了无法调用 result 的情况

// ===================

// 构造签名

/* class Phone{
     constructor(public rom: number, public ram: number) {}
}

// 等同于

class Phone{
    constructor(rom:number, ram:number){
       this.rom =rom;
       this.ram =ram;
    }
} */

/* type TypeDressColor = "red" | "blue" | "yellow";

class Phone {
  constructor(public rom: number, public ram: number) {}
}

class Dress {
  constructor(public color: TypeDressColor, public size: number) {}
}

type TypeProduct = Phone | Dress;

// 要进行实例化不能这么传递
function getProduct(product: TypeProduct) {
    return new product()
} */

type TypeDressColor = "red" | "blue" | "yellow";

class Phone {
  constructor(public rom: number, public ram: number) {}
}

class Dress {
  constructor(public color: TypeDressColor, public size: number) {}
}

// 对于构造器比普通函数多出一个 new！！！
type TypePhoneConstructor = new (rom: number, ram: number) => Phone;
type TypeDressConstructor = new (color: TypeDressColor, size: number) => Dress;
type TypeProductConstructor = TypePhoneConstructor | TypeDressConstructor;

function getProduct(Product: TypeProductConstructor) {
  switch (Product) {
    case Phone:
      return new Product(1, 2);
    case Dress:
      return new Product("red", 1);
  }
}

const instance = getProduct(Phone);
console.log(instance);
