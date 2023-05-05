<template>
  <button @click="onAddTodo">添加</button>
</template>

<script>
export default {
  methods: {
    onAddTodo() {
      this.$emit("addTodo");
    }
  }
};
</script>

<style></style>
