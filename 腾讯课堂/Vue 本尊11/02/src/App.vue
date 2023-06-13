<template>
  <div>
    <h1>{{ count1 }}</h1>
    <button @click="setCount1((count1) => count1.value + 2)">+</button>
    <button @click="setCount1(count1.value - 1)">-</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useState } from "./vue-hooks";

export default {
  setup() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(2);

    return {
      count1,
      setCount1
    };
  }
};
</script>

<style lang="scss" scoped></style>
