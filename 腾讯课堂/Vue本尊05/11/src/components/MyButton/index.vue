<template>
  <button>
    <slot>defaultContent</slot>
  </button>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style></style>
