// 21 函数相关的类型分配和兼容

/* type TypeTest = (a: number, b: number) => number;

const test1: TypeTest = (a: number, b: number): number => {
  return a + b;
};

const test2: TypeTest = (a, b) => {
  return a + b;
}; */

/* 
    是否是多余的？
    确实多余的，为什么可以省略？

    你的函数的类型声明并没有在函数定义时进行
    实际上是在函数赋值的变量上进行了显式的类型定义

    TS 会对一个没有进行注解的函数进行类型推断
    如果不能直接推断的要素的类型（例如函数的参数，一般都是隐式的 any），那么就会匹配「变量」对应的类型。
    也就是说 TS 会对比「函数定义时的类型」是否和「变量显式定义的类型」相匹配

    也就是 (a, b) 和 TypeTest 进行匹配
*/

// ==================

/* // ❌参数“a”隐式具有“any”类型
const test3 = (a, b) => a + b; */

/* 

    如果直接写函数，TS 无法进行推断，只能进行隐式的 any
    因为无法明确参数的类型，返回值也就无法明确 
*/

// ==================

/* const test1: TypeTest = (a: number, b: number): number => {
  return a + b;
}; */

/* 
    为什么成立？
    函数的类型是明确的，TS 把函数推断的类型和 TypeTest 是相匹配的，所以就会认为定义函数时候的类型是多余的。

    如果不定义类型也是匹配的，这就是函数定义时的类型和变量定义是的类型的关系。
    不要搞混。
*/

// ===================

/*type TypeTest = (a: string, b: number) => number;

// ❌不能将类型“(a: number, b: number) => number”分配给类型“TypeTest”
 const test1: TypeTest = (a: number, b: number): number => {
  return a + b;
}; */

/* 
    string 和 number 是不兼容的类型。
    所以就要明白 (a: number, b: number): number => 和 TypeTest 是两个地方的定义
    
    函数的类型定义一定要兼容变量所接收的显式类型定义
    一旦类型不兼容，就意味着类型不能够覆盖
*/

// ===================

/* type TypeTest = (a: unknown, b: unknown) => void;
// ❌不能将类型“(a: number, b: number) => number”分配给类型“TypeTest”
const test1: TypeTest = (a: number, b: number): number => {
  return a + b;
};
test1(1, 2); */

/* 
    为什么不可以？
    未知的类型不能分配给具体的类型。
*/

// ===================

/* type TypeTest = (a: never, b: never) => void;

const test1: TypeTest = (a: number, b: number): number => {
  return a + b;
};
test1(1, 2); */

/* 
    never 类型为什么可以被分配？
    因为 never 本身就是没有可分配的类型。

    never 分配给其他的类型可以（这叫类型降级），never 不能被分配给其他类型，类型已经是 never 类型了就不可变了。
*/

/* 
    unknown 是未知类型，不是说没有类型，是有类型的，是可以分配类型的。
    never 是不可再分配类型的，所以不能把。。
*/

// ============

/* type TypeTest = (a: any, b: any) => void;

const test1: TypeTest = (a: number, b: number): number => {
  return a + b;
};
test1("1", 2); */

/* 
    any 是属于双向的，随便分配。
*/

// ===================

/* type TypeTest = (a: number, b: number) => void;

const test: TypeTest = (a: number, b: number): number => {
  return a + b;
};
test(1, 2); */

/* 
    为什么返回值的类型不匹配也可以呢？
    void 表示无返回类型
    变量的函数类型设置的是无返回类型，把有返回类型的定义分配一个无返回类型的定义
    相当于是覆盖了
*/

/* 
    如果反过来则不行！
*/

/* type TypeTest = (a: number, b: number) => number;

const test: TypeTest = (a: number, b: number): void => {
  return a + b;
}; */

// =====================

/* function test(a: number, b: number): void {
  return a + b;
} */

/* 
    类型推断和显式类型定义的冲突
    如果类型推断的结果和显式类型定义有冲突的情况下，一定报错。
    类型定义逻辑行不通
*/

// ===================

/* type TypeTest = (a: number, b: number) => void;

const test: TypeTest = (a: number, b: number): number => {
  return a + b;
}; */

/* 
    (a: number, b: number): number 分配给 TypeTest
    相当于 number 覆盖了 void

    和上面的区别是函数定义然后类型推断和 viod 产生了冲突。
*/

// =================

/* type TypeTest = (a: number, b: number) => void;
// ❌不能将类型“(a: string, b: string) => string”分配给类型“TypeTest”
const test: TypeTest = (a: string, b: string): string => {
  return a + b;
}; */

/* 
    参数的类型一定要吻合。
*/

// ========================

/* 
    如果已经明确的写了函数的签名，就不要在对函数类型进行定义，因为容易出错
*/
