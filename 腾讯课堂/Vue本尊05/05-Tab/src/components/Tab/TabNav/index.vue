<template>
  <div class="tab-nav">
    <nav-item
      v-for="(item, index) in navData"
      :key="item.key"
      :nav-item="item"
      :my-index="index"
      :current-index="tabIndex"
      :nav-len="navData.length">
    </nav-item>
  </div>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  name: "tab-nav",
  props: ["tabIndex", "navData"],
  components: {
    NavItem
  }
};
</script>

<style lang="scss" scoped>
.tab-nav {
  height: 50px;
  border-bottom: 1px solid #000;
}
</style>
