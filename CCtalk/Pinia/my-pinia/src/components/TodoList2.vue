<template>
  <div class="">
    <input type="text" v-model="todoText" />
    <button @click="addTodo">ADD</button>
    <ul>
      <li v-for="todo of store.todoList" :key="todo.id">
        <input
          type="checkbox"
          v-model="todo.completed"
          @click="store.toggleTodo(todo.id)" />
        <span
          :style="{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }">
          {{ todo.content }}
        </span>
        <button @click="store.removeTodo(todo.id)">REMOVE</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useStore from '@/stores/todolist2';

const store = useStore();
const todoText = ref('');

const addTodo = () => {
  store.addTodo({
    id: new Date().getTime(),
    content: todoText.value,
    completed: false
  });
};
</script>

<style lang="scss" scoped></style>
