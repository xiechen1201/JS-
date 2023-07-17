<template>
  <div class="">
    <RouterLink :to="{ name: 'User', params: { id: 'test' } }">
      User page.
    </RouterLink>
    <router-view />
  </div>
</template>

<script setup>
import {} from "vue";
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
