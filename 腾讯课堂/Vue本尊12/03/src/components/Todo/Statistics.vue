<template>
  <p>总数：{{ count }}</p>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
});
</script>

<style lang="scss" scoped></style>
