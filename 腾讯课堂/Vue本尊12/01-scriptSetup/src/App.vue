<template>
  <h1>{{ title }}</h1>
  <Child />
  <component :is="currtentComp === 'Child' ? Child : ChildTwo" />
  <button @click="switchComp">切 换</button>
  <div>
    <span>{{ a }}</span>
    <span> + </span>
    <span>{{ b }}</span>
    <span> = </span>
    <span>{{ a + b }}</span>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";

import Child from "./components/Child.vue";
import ChildTwo from "./components/ChildTwo.vue";

const currtentComp = ref("ChildTwo");
const switchComp = () => {
  currtentComp.value = currtentComp.value === "Child" ? "ChildTwo" : "Child";
};

const title = ref("This is title.");
const state = reactive({
  a: 1,
  b: 2
});
const { a, b } = toRefs(state);
</script>

<style lang="scss" scoped></style>
