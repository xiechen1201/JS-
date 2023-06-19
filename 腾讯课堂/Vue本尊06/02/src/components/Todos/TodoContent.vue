<template>
  <span :style="{ textDecoration: item.completed ? 'line-through' : '' }">
    {{ item.content }}
  </span>
</template>

<script>
export default {
  props: ["item"]
};
</script>
