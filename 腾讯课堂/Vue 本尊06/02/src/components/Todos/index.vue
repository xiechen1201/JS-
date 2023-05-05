<template>
  <ul v-if="data.length">
    <todo-item
      v-for="item of data"
      :key="item.id"
      :item="item"
      @toggle-completed="onToggleCompleted"
      @remove-todo="onRemoveTodo"></todo-item>
  </ul>
  <p v-else>--当前暂无数据！--</p>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  props: ["data"],
  components: {
    TodoItem
  },
  methods: {
    onToggleCompleted(id) {
      this.$emit("toggleCompleted", id);
    },
    onRemoveTodo(id) {
      this.$emit("removeTodo", id);
    }
  }
};
</script>

<style></style>
