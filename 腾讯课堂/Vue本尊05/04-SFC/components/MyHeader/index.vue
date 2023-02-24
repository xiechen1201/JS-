<template>
  <header>
    <my-search />
    <my-logo />
    <my-nav :nav-data="navData" />
    <my-user />
    <div style="clear: both"></div>
  </header>
</template>

<script>
import MyLogo from "../MyLogo/index.vue";
import MyNav from "../MyNav/index.vue";
import MyUser from "../MyUser/index.vue";

export default {
  name: "my-header",
  props: ["navData"],
  components: {
    MyLogo,
    MyNav,
    MyUser
  }
};
</script>

<style lang="scss" scoped>
header {
  border: 1px solid #333;
}
</style>
