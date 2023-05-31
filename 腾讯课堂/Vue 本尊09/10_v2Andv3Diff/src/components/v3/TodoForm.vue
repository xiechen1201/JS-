<template>
  <div>
    <input type="text" placeholder="请输入内容" v-model="todoText" />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  emits: ["addTodo"],
  setup(props, ctx) {
    const todoText = ref("");
    const addTodo = () => {
      ctx.emit("addTodo", {
        id: Date.now(),
        text: todoText.value,
        completed: false
      });
    };

    return {
      todoText,
      addTodo
    };
  }
};

/* export default {
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
}; */
</script>

<style lang="scss" scoped></style>
