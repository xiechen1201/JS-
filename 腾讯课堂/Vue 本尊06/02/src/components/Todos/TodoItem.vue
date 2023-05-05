<template>
  <li>
    <todo-check :item="item" @todo-check="onTodoCheck"></todo-check>
    <todo-content :item="item"></todo-content>
    <todo-del :item="item" @remove-todo="onRemoveTodo"></todo-del>
  </li>
</template>

<script>
import TodoCheck from "./TodoCheck.vue";
import TodoContent from "./TodoContent.vue";
import TodoDel from "./TodoDel.vue";

export default {
  name: "TodoItem",
  components: {
    TodoCheck,
    TodoContent,
    TodoDel
  },
  props: ["item"],
  methods: {
    onTodoCheck(id) {
      this.$emit("toggleCompleted", id);
    },
    onRemoveTodo(id) {
      this.$emit("removeTodo", id);
    }
  }
};
</script>
