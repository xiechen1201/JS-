<template>
  <ul class="my-nav">
    <nav-item v-for="item in navData" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  props: ["navData"],
  components: {
    NavItem
  }
};
</script>

<style lang="scss" scoped>
.my-nav {
  float: left;
  padding: 0 35px;
  margin: 0;
  list-style: none;
}
</style>
