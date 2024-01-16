// 22 对象类型相关的知识点

/* 
    给对象定义类型的方式称为「对象类型定义」
*/

/* const accountInfo: {
  accountNumber: string;
  accountName: string;
  balance: number;
  isValid: boolean;
} = {
  accountNumber: "123456789",
  accountName: "xiechen",
  balance: 100.23,
  isValid: true
}; */

// =================

// 经常写成接口或者类型别名的方式

/* type TypeAccountInfo = {
  accountNumber: string;
  accountName: string;
  balance: number;
  isValid: boolean;
};

const accountInfo: TypeAccountInfo = {
  accountNumber: "123456789",
  accountName: "xiechen",
  balance: 100.23,
  isValid: true
}; */

// =====================

// 类型显示定义和类型断言

/* interface IAccountInfo {
  accountNumber: string;
  accountName: string;
  balance: number;
  isValid: boolean;
}

const accountInfo: IAccountInfo = {
  accountNumber: "123456789",
  accountName: "xiechen",
  balance: 100.23,
  // isValid: true
}; */

/* 
    这样的写法写法严格，无论是多/少写一个属性都会报错。
    就相当于是吧 { accountNumber: "123456789", ...} 分配给 IAccountInfo 类型
    这是显式类型定义。
*/

// ==========================

/* interface IAccountInfo {
  accountNumber: string;
  accountName: string;
  balance: number;
  isValid: boolean;
}

const accountInfo = <IAccountInfo>{
  accountNumber: "123456789",
  accountName: "xiechen",
  balance: 100.23,
  // isValid: true;
  test: "123"
}; */

/* 
    类型断言，缺少属性却不会报错
    这是因为断言是将一个类型指定为一个类型，而不是通过数据推断分配给另一个类型！ 
    TS 类型推断在对象前提下，是不会强制要求必填属性的。
    但是属性的类型必须匹配，且不能增加未被 interface 定义的属性。

    推断的类型与 interface 数据重叠不能冲突（可以少，但是不能多）。
*/

// ===========================

// 只读属性

/* interface IAccountInfo {
  readonly accountNumber: string;
  readonly accountName: string;
  readonly info: {
    balance: number;
    comsumpton: number;
  };
  isValid: boolean;
}

const accountInfo: IAccountInfo = {
  accountNumber: "123456789",
  accountName: "xiechen",
  info: {
    balance: 100.23,
    comsumpton: 202.34
  },
  isValid: true
};

// ❌无法为“accountName”赋值，因为它是只读属性
accountInfo.accountName = "youlixiang";
// ❌无法为“info”赋值，因为它是只读属性
accountInfo.info = {};
accountInfo.info.balance = 1; */

/* 
    readonly 不能限制引用值内部属性的更改，和 const 一样
*/

// ===========================

// ## readonly

/* interface IAccountInfo1 {
  readonly accountNumber: string;
  readonly accountName: string;
  readonly info: {
    balance: number;
    comsumpton: number;
  };
  isValid: boolean;
}

interface IAccountInfo2 {
  accountNumber: string;
  accountName: string;
  info: {
    balance: number;
    comsumpton: number;
  };
  isValid: boolean;
}

const accountInfo2: IAccountInfo2 = {
  accountNumber: "123456789",
  accountName: "xiechen",
  info: {
    balance: 100.23,
    comsumpton: 202.34
  },
  isValid: true
};

const accountInfo1: IAccountInfo1 = accountInfo2;
// ❌无法为“accountName”赋值，因为它是只读属性
accountInfo1.accountName = "youlixiang"; */

/* 
    同样不可以，只是吧 accountInfo2 值赋值给了 accountInfo1 ，她指向的是同一个引用地址，操作的还是 accountInfo1，TS 找的是 accountInfo1
*/

// ===========================

// ## 索引签名

/* const arr: number[] = [1, 2, 3, 4, 5]; */

/* 
    数组本质上也是对象

    {
        0:1,
        1:2,
        2:3,
        3:4,
        4:5
    }
*/

/* interface INumberArr {
  [key: number]: number;
}

const arr: INumberArr = [1, 2, 3, 4, 5, "6"]; */

/* 
    同样不能出现字符串的 6
*/

// ========================

// 不常用
// 常用在对象上
/* interface IProps {
  id: number;
  name: string;
}

interface IPropArray {
  [key: number]: IProps;
}

// ❌不能将类型“number”分配给类型“IProps”
const arr: IPropArray = [{ id: 1, name: "zhangsan" }, 1]; */

// 或者

/* interface IProps {
  id: number;
  name: string;
}
const arr: IProps[] = [{ id: 1, name: "zhangsan" }, 1]; */

// =================

/* const obj = {
  id: 1,
  name: "zhangsan",
  height: 180,
  weight: 160
}; */

/* 
    唯一能确定的就是 key 是 string 类型
    这个时候就需要使用索引签名

    这种方式方便我们后期对属性进行拓展
*/

/* interface IProps {
  [key: string]: any;
}

const obj: IProps = {
  id: 1,
  name: "zhangsan",
  height: 180,
  weight: 160
}; */

// ===============

/* type TypeKey = "a" | "b" | "c";

interface IObject {
  // ❌索引签名参数类型不能为文本类型或泛型类型
  [key: TypeKey]: any;
} */

/* 
    这样的方式就表示 key 只能是 TypeKey 的其中一个。

    报错表示当前的签名不能是一种文本类型，因为接口可以给一个空对象进行定义的
*/

/* type TypeKey = "a" | "b" | "c";
type TypeObj = {
  // ❌索引签名参数类型不能为文本类型或泛型类型
  [key: TypeKey]: any;
}; */

// 只能写 in

/* type TypeKey = "a" | "b" | "c";
type TypeObj = {
  [key in TypeKey]: any;
};

const obj: TypeObj = {
  a: 1,
  b: 2,
  c: 3
}; */

/* 
    key 必须都要写，因为 [key in TypeKey] 是一种枚举
    枚举了 abc

    但是 interface 不行，因为接口可以定义一个空对象的。

    [key in TypeKey] 就相当于定义了一个对象
    记住，interface 不能使用 in 进行枚举 key
*/

/* type TypeKey = "a" | "b" | "c";
interface IObj {
  // ❌映射的类型可能不声明属性或方法
  [key in TypeKey]: any;
}

const obj: IObj = {
  a: 1,
  b: 2,
  c: 3
}; */

// ======================

// ## 类数组

/* interface IArrayLike {
  [key: number]: number;
  length: number;
}

const arrLike: IArrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
}; */

// ==============

// ## 拓展类型

/* // 多继承
interface A {
  a: number;
}
interface B {
  b: number;
}

interface C extends A, B {
  c: number;
}

let obj: C = {
  c: 1,
  a: 2,
  b: 3
}; */

// =========================

// ## 交叉类型

/* type A = {
  a: number;
};

type B = {
  b: number;
};

type C = A &
  B & {
    c: number;
  };

let obj: C = {
  c: 1,
  a: 2,
  b: 3
}; */
