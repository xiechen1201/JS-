<template>
  <div
    :class="{
      'nav-item': true,
      active: currentIndex === myIndex
    }"
    :style="{ width: 100 / navLen + '%' }">
    {{ navItem.itemTitle }}
  </div>
</template>

<script>
export default {
  props: ["navItem", "myIndex", "currentIndex", "navLen"]
};
</script>

<style lang="scss" scoped>
.nav-item {
  float: left;
  height: 100%;
  line-height: 50px;
  text-align: center;
  cursor: pointer;

  &.active {
    background-color: #000;
    color: #fff;
  }
}
</style>
