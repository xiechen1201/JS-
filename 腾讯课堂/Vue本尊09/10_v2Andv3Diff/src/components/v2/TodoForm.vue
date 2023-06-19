<template>
  <div>
    <input type="text" placeholder="请输入内容" v-model="todoText" />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      todoText: ""
    };
  },
  emits: ["addTodo"],
  methods: {
    addTodo() {
      this.$emit("addTodo", {
        id: Date.now(),
        text: this.todoText,
        completed: false
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
