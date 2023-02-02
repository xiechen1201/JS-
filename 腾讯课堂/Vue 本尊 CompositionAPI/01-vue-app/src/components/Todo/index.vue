<template>
  <div class="">{{ todoText }}</div>
  <button @click="addTodo">新 增</button>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["addToto"]);
const todoText = ref("123");

const addTodo = function () {
  emit("addToto", {
    id: new Date().getTime(),
    content: todoText.value
  });
};
</script>

<style lang="scss" scoped></style>
