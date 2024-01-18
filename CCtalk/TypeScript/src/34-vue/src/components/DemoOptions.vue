<template>
  <div class=""></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

export default defineComponent({
  emits: {
    setTodo<T extends keyof ITodo>(todo: ITodo, key: T): void {
      console.log(todo, key);
    }
  },
  mounted() {
    this.$emit("setTodo", { id: 1, content: "test", completed: false }, "1");
  },
  test(a, b) {
    return a + b;
  }
});
</script>

<style lang="scss" scoped></style>
