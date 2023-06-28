<template>
  <div>
    <input type="text" placeholder="请输入" v-model="todoText" />
    <button @click="setTodo">新 增</button>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";

const todoText = ref("");
const { addTodo } = inject("todoMethods");

const setTodo = () => {
  if (todoText.value.length !== 0) {
    addTodo(todoText.value);
  }
  todoText.value = "";
};
</script>

<style lang="scss" scoped></style>
