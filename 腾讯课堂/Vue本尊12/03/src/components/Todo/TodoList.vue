<template>
  <ul>
    <TodoItem v-for="item of todos" :key="item.id" :todo="item" />
  </ul>
</template>

<script setup>
import TodoItem from "./TodoItem.vue";

defineProps({
  todos: Array,
  default: () => []
});
</script>

<style lang="scss" scoped></style>
