<template>
  <h1>App SFC File.</h1>
</template>

<script setup>
import { getCurrentInstance } from "vue";

const { ctx } = getCurrentInstance();
console.log(ctx);
</script>
