// 05 对象类型与类型定义的技巧

/* 
    引用类型2: 对象类型 Object
*/

/* const obj = {
  myName: "xiechen",
  myAge: 22
};
console.log(obj.myName);
console.log(obj.myAge); */

// 不希望别人拓展我们的对象
// TS 会推断这个对象的类型，
/* const obj: { myName: String; myAge: number } = {
  myName: "xiechen",
  myAge: 22
};
obj.myHeight = 170; */

// 把类型抽离出去
// 如果不给 obj 定义类型，obj 也不是隐式 any，TS 会根据对象值进行类型的推断
// 如果你需要一个特定属性集合的 obj 定义的话，需要显式的给 obj 进行类型定义
// 为什么需要 TypeObj？1、为了规范对象的属性定义 2、类型的复用
// 这种对类型的定义可以复用到其他对象上
/* type TypeObj = {
  myName: string;
  myAge: number;
};

const obj: TypeObj = {
  myName: "xiechen",
  myAge: 22
};

const zhangsan: TypeObj = {
  myName: "zhangsan",
  myAge: 23
}; */

// 可选的属性，属性后面？表示该属性是可选的，让对象属性定义更加灵活
/* type TypeObj = {
  myName: String;
  myAge?: number;
};

const obj: TypeObj = {
  myName: "xiechen",
}; */

// 对数组进行定义
// 这样的类型定义是限制数组内部的元素可用的类型
/* let intArr: number[] = [1, 2, 3, 4, 5];
const infoArr: (string | number | boolean)[] = ["xiechen", 22, true]; */

// 如果必须要填写3个属性呢？对  ["xiechen", 22, true] 结构和数据类型一起进行约束
// 必须书写🈵️ 3 个属性
/* type TypeInfoArr = [string, number, boolean];
const infoArr: TypeInfoArr = ["xiechen", 22]; */

// 如何让属性可选？
// 是对数组的结构、类型一起进行定义
type TypeInfoArr = [string, number, boolean?];
const infoArr: TypeInfoArr = ["xiechen", 22];

