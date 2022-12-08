<template>
  <h1>RefsDemo.vue</h1>
  <p>{{ test }}</p>
  <p>{{ number }}</p>
</template>

<script setup>
import { isRef, unref, reactive, toRef, toRefs, ref } from "vue";

const test = reactive({
  number: 1,
});

let { number } = test;

setTimeout(() => {
//   test.number = 10;
  number = 20;
}, 1000);

/**
 * 1、ref()
 * 返回一个响应的可变的 Ref 对象，他有一个属性 .value 指向原本的值
 * 如果 ref() 接收一个对象，则会使用 reactive 创建一个深度的响应式对象
 *  */

const person = ref({
  name: "张三",
  info: {
    age: 60,
  },
});
console.log(person.value);

/**
 * 1、toRef
 * toRef 可以将 reactive 的响应式对象结构出来，且不会丢失响应式
 * 适用于单独取出某个响应式对象属性的时候
 *
 * 2、toRefs
 * toRefs 可以将多个属性结构出来，且不丢失响应式
 *
 * 3、unref
 *  */

const state = reactive({
  name: "张三",
  age: 30,
});
const nameRef = toRef(state, "name");
nameRef.value = "李四";

console.log(state);
console.log(state.name);
console.log(nameRef.value);

const stateRefs = toRefs(state);
console.log(stateRefs);

console.log(isRef(nameRef), isRef(state.name));
console.log(unref(nameRef));
</script>
