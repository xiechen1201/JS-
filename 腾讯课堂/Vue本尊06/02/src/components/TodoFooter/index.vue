<template>
  <div>
    <todo-info></todo-info>
    <todo-clear @removeAll="onRemoveAll"></todo-clear>
  </div>
</template>

<script>
import TodoInfo from "./TodoInfo.vue";
import TodoClear from "./TodoClear.vue";

export default {
  components: {
    TodoInfo,
    TodoClear
  },
  methods: {
    onRemoveAll() {
      this.$emit("removeAll");
    }
  }
};
</script>

<style></style>
