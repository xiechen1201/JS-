// 05 对象类型与类型定义的技巧

/* 
    引用类2:对象类型 Object
*/

// 在 JS 中的对象的使用
/* const obj = {
  myName: "xiechen",
  age: 23
};
console.log(obj.myName); */

// 需求，希望 obj 有固定的属性，后续的人无法拓展对象的属性，如何规范这个对象呢？
/* const obj: { myName: string; age: number } = {
  myName: "xiechen",
  age: 23
};
obj.height = 180; // ❌类型“{ myName: string; age: number; }”上不存在属性“height”
console.log(obj.myName); */
// 这样就规范了对象的属性、以及属性值的类型
// 因为 height 和定义对象的属性类型不匹配

// ========

// 定义的类型无法服用？
/* const obj: { myName: string; age: number } = {
  myName: "xiechen",
  age: 23
}; */

// 使用类型别名，把对象的类型进行复用
/* type User = { myName: string; age: number };

const obj: User = {
  myName: "xiechen",
  age: 23
}; */

// 如果不给 obj 定义类，那么 obj 也不是隐式的 any，ts 回根据对象的值进行类型的推断
// 如果你需要一个特定属性集合的 obj 的话，你需要需要显式的给 obj 进行类型定义
// 这种对类型的定义可以复用到其他对象上
// ♻️：const obj: { myName: string; age: number; }
/* const obj = {
  myName: "xiechen",
  age: 23
}; */

// ============

// 可选的属性

/* type TypeUser = {
  myName: string;
  myAge: number;
  married: boolean;
};

const obj: TypeUser = {
  myName: "xiechen",
  myAge: 23,
  married: true
}; */

// 如何灵活一些？
// 可选属性定义使用 ？来表示，married 属性可以写也可以不写
/* type TypeUser = {
  myName: string;
  myAge: number;
  married?: boolean;
};

const obj: TypeUser = {
  myName: "xiechen",
  myAge: 23
}; */

// =======

// 根据上面的方式，能不能对数组进行定义？
/* let intArr: number[] = [1, 2, 3]; */
// 但是 JS 数组元素的类型可能是不同的！

// 使用联合类型，表示任选其一
// ♻️const infoArr: (string | number | boolean)[]
/* const infoArr = ["xiechen", 23, true]; */

// 书写联合类型或者使用类型别名
/* const infoArr: (string | number | boolean)[] = ["xiechen", 23, true]; */

// 但是这样约束力不够，如何限制必须填写3项？
// 这样的类型定义方式是限制数组内部的元素可用什么类型
/* const infoArr: (string | number | boolean)[] = ["xiechen"]; */

// ===========

// 如何对数组的结构和数据类型一起进行约束？
// 这样的方式是对数组的结构和数据类型一起进行约束
/* type TypeInfoArr = [string, number, boolean];
const infoArr: TypeInfoArr = []; // ❌源具有 0 个元素，但目标需要 3 个 */

// 如何让这样的结构成立呢？
// 使用可选符合
/* type TypeInfoArr = [string?, number?, boolean?];
const infoArr: TypeInfoArr = ["xiechen"]; */
