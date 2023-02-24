<template>
  <div>
    <input 
      type="checkbox"
      :checked="todo.completed"
      @change="toggleTodo(todo.id)"
    />
    <span :class="{ completed: todo.completed }">{{ todo.content }}</span>
    <button @click="removeTodo(todo.id)">REMOVE</button>
  </div>
</template>
<script setup>
  const { inject } = Vue;

  const props = defineProps({
    todo: Object
  });

  const {
    toggleTodo,
    removeTodo
  } = inject('todoMethods');
</script>
<style>
  .completed {
    text-decoration: line-through;
  }
</style>