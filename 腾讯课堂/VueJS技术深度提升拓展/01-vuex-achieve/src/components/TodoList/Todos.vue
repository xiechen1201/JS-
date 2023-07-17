<template>
  <ul>
    <li v-for="item in $store.getters.filterTodos" :key="item.id">
      <input
        type="checkbox"
        :checked="item.isFinished"
        @change="toggleTodo(item.id)" />
      <span>{{ item }}</span>
      <button @click="removeTodo(item.id)">Remove</button>
    </li>
  </ul>
</template>

<script setup>
import {} from "vue";
import { useStore } from "vuex";

const store = useStore();
const toggleTodo = (id) => store.dispatch("toggleTodo", id);
const removeTodo = (id) => store.dispatch("removeTodo", id);
</script>

<style lang="scss" scoped>
input:checked + span {
  text-decoration: line-through;
}
</style>
