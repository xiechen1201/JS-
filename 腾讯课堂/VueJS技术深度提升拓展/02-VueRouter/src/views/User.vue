<template>
  <div>
    <h2>{{ $route.params }}</h2>
    <h2>{{ id }}</h2>
    <RouterView />
  </div>
</template>

<script setup>
import {} from "vue";

const props = defineProps({
  id: [String, Number]
});

console.log(props);
</script>

<style scoped></style>
