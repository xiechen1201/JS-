<template>
  <ul>
    <h1>{{ listTitle }}</h1>
    <slot />
  </ul>
</template>

<script>
export default {
  name: "MyListContainer",
  props: {
    listTitle: {
      type: String,
      default: "My list"
    }
  }
};
</script>
