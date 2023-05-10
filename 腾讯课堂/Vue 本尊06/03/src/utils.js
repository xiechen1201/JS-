export function test() {
  console.log(123);
}

export function plus(a, b) {}

// 这不是导出一个对象，而是导出一个模块，里面含有某些对象、属性
// export { plus };
