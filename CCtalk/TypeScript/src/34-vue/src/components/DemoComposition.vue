<script setup lang="ts">
import { ref, type PropType, reactive, provide, onMounted } from "vue";
import { key1 } from "./keys";
import Child from "./Child.vue";

// 方式1
/* const props = defineProps({
  a: {
    type: String,
    default: "Hello"
  }
}); */

// 方式2
/* interface IProps {
  a: string;
}
const props = withDefaults(defineProps<IProps>(), {
  a: "Hello"
}); */

// 默认值为引用值
/* interface IProps {
  a: string;
}
const props = withDefaults(defineProps<IProps>(), {
  a: "Hello",
  b: () => ({})
}); */

// =====================

/* // 复杂类型
interface IObj {
  a: number;
  b: number;
}
// 尖角号是泛型的参数传递的地方
// <IObj>  其实就是对象类型
const props = defineProps<IObj>();  */

// =======================

/* interface IProps {
  id: number;
  content: string;
  completed: boolean;
}

// 让 Object 作为 IProps 容器定义类型
const props = defineProps({
  todo: Object as PropType<IProps>
}); */

// ===========

/* const emit = defineEmits(["update"]);
emit("update", { a: 1, b: 2, c: 3 }); */

/* const emit = defineEmits<{
  (event: "update", { a, b }: { a: number; b: number }): void;
}>();
emit("update", { a: 1, b: 2, c: 3 }); */

// ===============

/* const aRef = ref(10); // Ref<number>
console.log(aRef); */

// 什么时候一定要写类型呢？
/* const aRef = ref<string | number>(10); // Ref<string | number>
aRef.value = "hello";
console.log(aRef); */

// 如果不赋值就会被赋值为 any 类型
/* const aRef = ref(); // Ref<any>
aRef.value = 123;
aRef.value = "hello"; */

// ============= reactive =========

/* const state = reactive({
  id: 1,
  content: "购物",
  completed: false
});
console.log(state.completed); */

/* 
推断的结果：
const state: {
    id: number;
    content: string;
    completed: boolean;
} */

// ===========

/* interface IState {
  id: number;
  content: string;
  completed: boolean;
}

const state: IState = reactive({
  id: 1,
  content: "购物",
  completed: false,
  name: "张三"
}) ; */

/* 
  {
      id: number;
      content: string;
      completed: false;
      name: string;
  }

  可以分配给 IState 类型，因为这段内容是通过 reactive 函数执行推断出来的。
*/

// ==============

/* interface IState {
  id: number;
  content: string;
  completed: boolean;
}
// 给 reactive 传递泛型就可以得到约束
const state = reactive<IState>({
  id: 1,
  content: "购物",
  completed: false,
  name: "张三" // ❌对象字面量只能指定已知属性，并且“name”不在类型“IState”中
}); */

/* 
  function reactive<T>(data: T)
*/

// =======================

/* function handleChange(event: Event) {
  // 类型断言
  const target = event.target as HTMLInputElement;
  console.log(target.value);
} */

/* 
  尽量少用 Functon Object 的东西
  类型尽量具体化
*/

// =========================

/* provide(key1, 1); */

// =========================

/* const boxRef = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
  inputRef.value?.focus();
}); */

// ===========================

/* const childRef = ref<InstanceType<typeof Child> | null>(null);

onMounted(() => {
  childRef.value?.test();
}); */

</script>

<template>
  <div ref="boxRef"></div>
  <input type="text" ref="inputRef" />
  <Child ref="childRef" />
</template>
