<template>
  <div class="">This is Home page!</div>
</template>

<script setup>
import { reactive, ref } from "vue";

const personInfo = reactive({
  name: "张三",
  age: 12
});

const tags = ref(["标签一", "标签二", "标签三"]);
console.log(personInfo);
console.log(tags);
</script>

<style scoped></style>
