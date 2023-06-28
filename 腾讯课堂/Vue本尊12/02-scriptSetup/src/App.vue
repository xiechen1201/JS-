<template>
  <div v-my-test>这是一个块级 DIV 元素</div>
  <Child ref="childRef" :content="content" @change-content="onChangeContent" />
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

import Child from "./components/Child.vue";

import myTest from "./directives/myTest";

const vMyTest = myTest;
const content = ref("This is content.");
const onChangeContent = () => {
  content.value = "这是内容。";
};

const childRef = ref(null);
onMounted(() => {
  console.log(childRef.value);
});
</script>

<style lang="scss" scoped></style>
