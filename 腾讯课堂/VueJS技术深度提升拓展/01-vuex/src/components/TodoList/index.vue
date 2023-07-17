<template>
  <div class="todo-list-wrapper">
    <TodoTab />
    <TodoForm />
    <Todos />
  </div>
</template>

<script setup>
import {} from "vue";
import TodoTab from "./TodoTab";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
</script>

<style lang="scss" scoped>
.todo-list-wrapper {
  margin: 50px auto;
  width: 400px;
}
</style>
