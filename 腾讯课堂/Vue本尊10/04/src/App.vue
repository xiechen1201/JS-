<template>
  <div class="">
    <GrandFather />
  </div>
</template>

<script>
import { getCurrentInstance, inject } from "vue";
import GrandFather from "./components/GrandFather.vue";

export default {
  components: {
    GrandFather
  },
  setup() {}
};
</script>

<style lang="scss" scoped></style>
