// 03 显式类型定义和类型推断

/* 
    字符串类型：string
    数字类型：number
    布尔类型：boolean

    提到类型定义不得不提到强类型语言（静态语言），为什么要有类型化定义变量？
    静态语言在定义的时候要确定某种类型才能正确的内存中分配相应类型的空间

    例如
    int a = 1;
    1、开辟了一个 int 类型的空间
    2、a 作为标志符
    3、a 的类型为 int 类型
    4、1 赋值为 a（将 1 存储到这个空间中）

    TS 不是真正意义上的静态语言，因为 TS 的类型定义不是为了在内存中分配相应数据类型的空间
    TS 的定义类型作用是为了编译成 JS 代码之前进行静态类型检查，这就是和强类型语言的区别

    Java 整型：
    byte    1字节   8位
    short   2字节   16位
    int     4字节   32位
    long    8字节   64位

    浮点型：
    float   4字节   32位
    double  8字节   64位

    布尔型：
    boolean 4字节   32位
    
    字符型
    char    2字节   16位

    字符串
    String
*/

// 如何显示类型定义
/* let str1: string = "Hello TS";
let num1: number = 100;
let boo1: boolean = true; */

// 类型推断：根据 = 后面的表达式计算出的结果的类型对变量类型进行推断
/* let str2 = "Hello TS";
let num2 = 100;
let boo2 = true;

let n1 = 100;
let n2 = 200;
let n3 = n1 + n2;
console.log(n3); */

/* 
    为什么 TS 没有像 Java 一样的 char 和 String 类型呢？
    答：TS 的类型是为了做静态类型检查用的，不是为了在内存中开辟相应数据类型空间使用的。
    TS 编译的本质是将 TS 代码转换为 JS 代码执行，所以 TS 的基本数据类型都沿用了 JS 的 typeof 返回的数据类型
*/
/* console.log(typeof "Hello TS");
console.log(typeof 123);
console.log(typeof true); */

/* 
    为什么 TS 没有像 Java 一样的浮点型？
    答：Java 的整型和浮点型是为了静态类型检查与分配相应的内存的空间
    在 TS 中，设计整型、浮点型只能做静态类型检查，而 JS 并没有对其进行类型划分。
    因为根据 JS 的业务场景来说，对整型和浮点型的区分并没有相应的要求。
    所以，TS 没有必要争对数字类型进行再划分。
*/

/* 
    为什么 TS 的基本数据类型都是小写的？为什么不是 String 而是 string
    答：TS 的基本类型定义都是直接沿用 JS typeof 返回的数据类型写法，TS 中也可以定义 String、Number、Boolean 只是意义不同而已
*/
let str1: string = "abc";
let str2: String = new String("def");
let str3: Object = new String("def"); // 因为 String 的根类还是 Object

class Person {
  private name: string = "xiechen";
  private age: number = 22;
}

let person: Person = new Person();
console.log(person);


/* 
    什么时候使用显示类型定义和类型推断呢？
    答：类型推断是省略类型显示定义的方式，不需要显示定义类型，也会得出正确的类型
    如果你有在代码层面明确类型展示的目的，就要使用显示类型定义。
    但是在一般情况下，TS 可以进行明确的类型推断，就不再需要进行显示类型定义了，特别是在变量定义和初始化的时候。
*/

/* let a: number = 1; // 为了让别人一眼就知道这是一个 number 类型 */
