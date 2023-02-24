<template>
  <li class="nav-item">
      <a :href="item.link" target="_blank">{{ item.title }}</a>
    </li>
</template>

<script>
export default {
 props: ["item"]
}
</script>

<style lang="scss" scoped>
.nav-item {
  float: left;
  padding: 0 15px;
}

</style>