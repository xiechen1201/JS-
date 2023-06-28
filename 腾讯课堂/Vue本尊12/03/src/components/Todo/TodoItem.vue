<template>
  <div class="">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="toggleTodo(todo.id)" />
    <span :class="{ completed: todo.completed }">{{ todo.content }}</span>
    <button @click="removeTodo(todo.id)">删 除</button>
  </div>
</template>

<script setup>
import { inject } from "vue";

const props = defineProps({
  todo: Object,
  default: () => ({})
});
const { toggleTodo, removeTodo } = inject("todoMethods");
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
</style>
