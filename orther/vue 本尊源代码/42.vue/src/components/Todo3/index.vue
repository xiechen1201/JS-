<template>
  <div>
    <todo-form
      @add-todo="setTodoList"
    ></todo-form>
    <todo-list
      :todo-list="todoList"
      @toggle-todo="setTodoList"
      @removeTodo="setTodoList"
    ></todo-list>
  </div>
</template>

<script>

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { todoHook } from '../../hooks';

// const { ref } = Vue;

export default {
  name: 'Todo2',
  components: {
    TodoForm,
    TodoList
  },
  setup () {

    // const todoList = ref([]);

    // const addTodo = (item) => {
    //   todoList.value.push(item);
    // }

    // const toggleTodo = (id) => {
    //   todoList.value = todoList.value.map(item => {
    //     item.id === id && (item.completed = !item.completed);
    //     return item;
    //   })
    // }

    // const removeTodo = (id) => {
    //   todoList.value = todoList.value.filter(item => item.id !== id);
    // }

    const [ todoList, setTodoList ] = todoHook();  

    return {
      todoList,
      setTodoList
      // addTodo,
      // toggleTodo,
      // removeTodo
    }
  }
  // data () {
  //   return {
  //     todoList: []
  //   }
  // },
  // methods: {
  //   addTodo (item) {
  //     this.todoList.push(item);
  //   },
  //   toggleTodo (id) {
  //     this.todoList = this.todoList.map(item => {
  //       item.id === id && (item.completed = !item.completed);
  //       return item;
  //     })
  //   },
  //   removeTodo (id) {
  //     this.todoList = this.todoList.filter(item => item.id !== id);
  //   }
  // }
}
</script>

<style>

</style>