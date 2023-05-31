<template>
  <TodoV2 />
  <hr />
  <TodoV3 />
</template>

<script>
import TodoV2 from "./components/v2/index.vue";
import TodoV3 from "./components/v3/index.vue";

export default {
  components: {
    TodoV2,
    TodoV3
  }
};
</script>

<style></style>
