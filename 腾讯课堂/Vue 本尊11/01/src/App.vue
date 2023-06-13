<template>
  <div class="">
    <h1>{{ count }}</h1>
    <button @click="plus(2)">Plus</button>
    <button @click="minus(1)">Minus</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);

    const plus = (num) => {
      count.value += num;
    };
    const minus = (num) => {
      count.value -= num;
    };

    return {
      count,
      plus,
      minus
    };
  }
};
</script>

<style lang="scss" scoped></style>
