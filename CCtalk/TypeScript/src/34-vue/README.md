# 34-vue

宏函数：

不是一个真正的函数，是一个逻辑的标志，是在解释或者编译的过程，形成真正的逻辑程序。

在 setup 中创建 props 有一个专门的宏函数 defineProps({})

运行时类型（基于运行时的定义）和编译时类型（基于类型的声明）。

```ts
const props = defineProps({
  a: {
    type: String
  }
});
```

例如 a 就会在运行的时候被检查。

```ts
// 决定能够是否通过编译
interface IProps {
  a: number;
}
const props = defineProps<IProps>();

console.log(props.a);
```
