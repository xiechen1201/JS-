// import { defineStore } from 'pinia';
import { defineStore } from '../pinia';
import { ref } from 'vue';

const store = defineStore('todolist2', () => {
  const todoList = ref([]);
  const count = todoList.value.length;

  function addTodo(todo) {
    todoList.value.unshift(todo);
  }
  function toggleTodo(id) {
    todoList.value = this.todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }
  function removeTodo(id) {
    todoList.value = this.todoList.filter((todo) => todo.id !== id);
  }

  return {
    todoList,
    count,
    addTodo,
    toggleTodo,
    removeTodo
  };
});

export default store;
