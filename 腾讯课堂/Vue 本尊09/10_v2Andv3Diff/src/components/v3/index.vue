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
import { ref } from "vue";

import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";

import { todoHook } from "@/hooks/index";

import { todoTypes } from "../../types/index";

export default {
  components: {
    TodoForm,
    TodoList
  },
  setup(props, ctx) {
    const [todoList, setTodoList] = todoHook();

    return {
      todoList,
      addTodo: (...args) => setTodoList(todoTypes.ADD_TODO, ...args),
      toggleTodo: (...args) => setTodoList(todoTypes.TOGGLE_TODO, ...args),
      removeTodo: (...args) => setTodoList(todoTypes.REMOVE_TODO, ...args)
    };

    /* const todoList = ref([]);

     const addTodo = (info) => {
      todoList.value.push(info);
    };

    const toggleTodo = (id) => {
      todoList.value.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      });
    };

    const removeTodo = (id) => {
      todoList.value = todoList.value.filter((el) => el.id !== id);
    }; 

    return {
      todoList,
      addTodo,
      toggleTodo,
      removeTodo
    };

    */
  }
};

/* export default {
  name: "TodoV3",
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
}; */
</script>

<style></style>
