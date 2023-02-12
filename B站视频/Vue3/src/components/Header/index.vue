<template>
  <header class="header">
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.44rem;
  background-color: #ed4040;
  text-align: center;
  line-height: 0.44rem;

  h1 {
    font-size: 0.18rem;
    color: #fff;
  }
}
</style>
