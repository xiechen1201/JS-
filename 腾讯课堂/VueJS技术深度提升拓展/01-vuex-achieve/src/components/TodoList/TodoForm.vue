<template>
  <div class="">
    <input
      type="text"
      placeholder="Please input text content..."
      v-model="inputRef" />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const inputRef = ref("");
const addTodo = () => {
  store.dispatch("addTodo", inputRef.value);
  inputRef.value = "";
};
</script>

<style lang="scss" scoped></style>
