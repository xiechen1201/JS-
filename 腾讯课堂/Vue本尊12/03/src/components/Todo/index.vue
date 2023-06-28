<template>
  <TodoForm />
  <Statistics :count="todoCount" />
  <TodoList :todos="todoData" />
</template>

<script setup>
import { provide } from "vue";

import TodoForm from "./TodoForm.vue";
import Statistics from "./Statistics.vue";
import TodoList from "./TodoList.vue";

import { useTodoList } from "./todo";

const { todoData, todoCount, addTodo, toggleTodo, removeTodo } = useTodoList();

provide("todoMethods", {
  addTodo,
  toggleTodo,
  removeTodo
});
</script>

<style lang="scss" scoped></style>
