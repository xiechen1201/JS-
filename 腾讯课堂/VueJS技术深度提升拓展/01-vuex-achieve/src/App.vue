<template>
  <TodoList ref="TodoListRef" />
</template>

<script setup>
import { useStore } from "@/vuex";
import TodoList from "./components/TodoList";

const store = useStore();
console.log(store)
</script>

<style lang="scss" scoped></style>
