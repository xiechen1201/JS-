<script setup lang="ts">
import { inject } from "vue";
import { key1 } from "./keys";

const a = inject<number>(key1, 100);
console.log(a);

defineExpose({
  test: function () {
    console.log("This is child test function.");
  }
});
</script>

<template></template>
