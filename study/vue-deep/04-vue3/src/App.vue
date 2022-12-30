<template>
  <span>{{ msg }}</span>
  <HelloWorld />
  <TodoList />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: "Hello Word",
    };
  },
};
</script>

<style scoped></style>
