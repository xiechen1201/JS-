// 24 泛型类、实现接口和 keyof

/* 
    在 class 中，所有的属性都应该是私有的，如果需要获取属性或者设置属性，都应该由公共的 get\set 方法来完成

    面向对象的封装性：
    1、public 公共，公开的属性或者方法（任意一方都可以访问）
    2、protected 子类可以访问的属性或者方法
    3、private 私有（只能在本类中访问）
*/

/* 
    在面向对象中，所有的公共方法都需要接口来进行规范
*/

import Todo from "./Todo";

const todoInstance1 = new Todo<string>(1, "eat", false);
const todoInstance2 = new Todo<string[]>(2, ["吃饭", "睡觉", "打豆豆"], false);
const todoInstance3 = new Todo<{ [key: string]: number }>(3, { sleep: 1, walking: 2 }, false);

console.log(todoInstance1);
console.log(todoInstance2);
console.log(todoInstance3);

console.log(todoInstance1.created());
console.log(todoInstance2.created());
console.log(todoInstance3.created());

console.log(todoInstance1.get());
console.log(todoInstance2.get());
console.log(todoInstance3.get());

// ==============================

/* 
    key 的类型必须是 todo 中的某个 key
    限制 key 必须是 todo 里面的 key
*/

function getTodoProp<T, K extends keyof T>(todo: T, key: K) {
  return todo[key];
}

const todo1 = todoInstance1.get();
const id = getTodoProp(todo1, "id");
console.log(id);
