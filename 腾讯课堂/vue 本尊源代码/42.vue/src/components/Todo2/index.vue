<template>
  <div>
    <todo-form
      @add-todo="addTodo"
    ></todo-form>
    <todo-list
      :todo-list="todoList"
      @toggle-todo="toggleTodo"
      @removeTodo="removeTodo"
    ></todo-list>
  </div>
</template>

<script>

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default {
  name: 'Todo2',
  components: {
    TodoForm,
    TodoList
  },
  data () {
    return {
      todoList: []
    }
  },
  methods: {
    addTodo (item) {
      this.todoList.push(item);
    },
    toggleTodo (id) {
      this.todoList = this.todoList.map(item => {
        item.id === id && (item.completed = !item.completed);
        return item;
      })
    },
    removeTodo (id) {
      this.todoList = this.todoList.filter(item => item.id !== id);
    }
  }
}
</script>

<style>

</style>