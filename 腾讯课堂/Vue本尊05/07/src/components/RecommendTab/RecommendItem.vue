<template>
  <div
    :class="['recommend-item', { active: currentIndex === myIndex }]"
    @click="changeIndex">
    {{ item.title }}
  </div>
</template>

<script>
export default {
  name: "recommend-item",
  props: ["item", "myIndex", "currentIndex"],
  methods: {
    changeIndex() {
      this.$emit("change-index", this.myIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
.recommend-item {
  float: left;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;

  &.active {
    background-color: #000;
    color: #fff;
  }
}
</style>
