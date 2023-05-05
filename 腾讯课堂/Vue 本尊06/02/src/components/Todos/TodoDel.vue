<template>
  <button @click="onRemoveTodo">删除</button>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    onRemoveTodo() {
      this.$emit("removeTodo", this.item.id);
    }
  }
};
</script>
