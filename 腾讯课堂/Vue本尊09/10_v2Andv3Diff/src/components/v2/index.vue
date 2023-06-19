<template>
  <div>
    <TodoForm @add-todo="addTodo" />
    <TodoList
      :todo-list="todoList"
      @toggle-todo="toggleTodo"
      @remove-todo="removeTodo" />
  </div>
</template>

<script>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "TodoV2",
  components: {
    TodoForm,
    TodoList
  },
  data() {
    return {
      todoList: []
    };
  },
  methods: {
    addTodo(info) {
      this.todoList.push(info);
    },
    toggleTodo(id) {
      this.todoList.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      });
    },
    removeTodo(id) {
      this.todoList = this.todoList.filter((el) => el.id !== id);
    }
  }
};
</script>

<style></style>
