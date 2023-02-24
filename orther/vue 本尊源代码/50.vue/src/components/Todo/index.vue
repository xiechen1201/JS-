<template>
  <div>
    <TodoForm />
    <Statistics :count="todoCount" />
    <TodoList :todos="todoData" />
  </div>
</template>
<script setup>
  /**
   * form -> input  button
   * statistics -> count
   * todolist -> list
   *    item
   */
  import TodoForm from './TodoForm';
  import Statistics from './Statistics';
  import TodoList from './TodoList';

  import {
    useTodoList
  } from './todo';

  const { provide } = Vue;

  const {
    todoData,
    todoCount,
    addTodo,
    toggleTodo,
    removeTodo
  } = useTodoList();

  provide('todoMethods', {
    addTodo,
    toggleTodo,
    removeTodo
  })
</script>