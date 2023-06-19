<template>
  <div>
    <todo-input @change-content="onChangeContent" ref="todoInput"></todo-input>
    <todo-btn @add-todo="onAddTodo"></todo-btn>
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoBtn from "./TodoBtn.vue";

export default {
  name: "TodoHeader",
  components: {
    TodoInput,
    TodoBtn
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    onChangeContent(content) {
      this.content = content;
    },
    onAddTodo() {
      this.$emit("addTodo", {
        id: new Date().getTime(),
        content: this.content,
        completed: false
      });
      this.$refs.todoInput.reset();
    }
  }
};
</script>

<style></style>
