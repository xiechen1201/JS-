// 03 显示类型定义和类型推断

/* 
    三个基本类型
        字符串：string
        数字：number
        布尔类型：boolean 
*/

/* 
    说起类型定义，不得不介绍强类型语言。
    静态语言为什么需要类型定义变量？
        静态语言变量在定义的时候要确定某种类型才能在内存中分配相应类型的空间

        int a = 1;
        开辟一个 int 类型的空间
        a 作为标志符
        a 的类型为 int 类型
        将 1 赋值给 a（将 1 存储到这个空间内）

    TS 不是真正的静态语言，因为 TS 的类型定义不是为了在内存中分配相应数据类型的空间
    TS 的定义类型作用：是为了编译为 JS 代码之前进行静态类型检查
    这就是 TS 和静态类型语言的区别。
 */

// ========

// 如何显示类型定义？

/* let str1: string = "hello TS!";
let num1: number = 100;
let bool1: boolean = true; */

// ========

// TS 具有类型推断
// 根据 = 后面的表达式计算机的结果的类型对变量类型进行推断

/* let str2 = "hello TS!";
let num2 = 100;
let bool2 = true; */

/* let n1 = 100;
let n2 = 123;
let num2 = n1 + n2; // 推断 */

/* let bool2 = true; */

// ============

/* 
    深层的含义：
    为什么 TS 没有像 Java 一样的 char、String 类型呢？
    答：TS 的类型是为了做静态类型的检查用的，不是为了在内存中开辟相应数据类型空间的，所以没有必要分的那么细，而且如何分配空间是 JS 的事情。TS 编译的本质是将 TS 代码转换为 JS 代码执行，所以 TS 的基本数据类型都沿用了 JS typeof 关键字返回的数据类型。
    console.log(typeof "hello TS!");
*/

/* 
    为什么 TS 没有像 Java 一样的整形和浮点型？
    答：Java 的整形与浮点型是为了静态类型检查与分配相应的内存空间，在 TS 中设计整形、浮点型只能做静态类型检查，而 JS 中并没有对其进行类型的划分，那么 TS 划分意义就不大了。
    因为根据 JS 的业务场景来说，对整形和浮点型的区分并没有相应的要求！
    所以，ts 中没有必要针对数字类型进行再划分。
*/

/* 
    为什么 TS 的基本数据类型定义都是小写？
    string 而不是 String
    答：TS 的基本类型定义都是直接沿用 JS typeof 返回的数据类型写法
    TS 中也可以定义 String Number Boolean 只是意义不同！
*/

/* let str1: string = "abc";
let strObj: String = new String("123");
let strObj2: Object = new String("123"); // 依然可以，因为 String 对象的顶层是 Object */

/* let strObj3: Number = new String("123"); // ❌类型“String”缺少类型“Number”中的以下属性 */

// 我们也可以自己写一个类
/* class Person {
  constructor() {}
}

let p: Person = new Person(); */

// =======

/* 
    什么时候使用显示类型定义？什么时候使用类型推断？
    答案：类型推断是省略类型显示定义的方式，不需要显式定义类型也会得出正确的类型 
    如果你有在代码层面明确类型展示的目的，就要使用显式类型定义。

    let a: number = 100; // 就是想让大家都知道这是一个 number 的类型。

    但是在一般情况下，TS 可以进行明确的类型断定，就不再需要进行显式类型定义了！
    特别是在变量定义和初始化的时候。
*/