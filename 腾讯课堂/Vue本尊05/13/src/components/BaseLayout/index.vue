<template>
  <div class="container">
    <header class="base-header">
      <slot name="baseHeader">Header</slot>
    </header>
    <footer class="base-footer">
      <slot name="baseFooter">Footer</slot>
    </footer>
    <aside class="base-sidbar">
      <slot name="baseSideBar">SideBar</slot>
    </aside>
    <main class="base-main">
      <slot>Mian</slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "BaseLayout"
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}

.base-header,
.base-footer,
.base-sidbar,
.base-main {
  position: fixed;
  left: 0;
}

.base-header {
  top: 0;
  width: 100%;
  height: 60px;
  background-color: sandybrown;
}

.base-footer {
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #ddd;
}

.base-sidbar {
  top: 0;
  width: 200px;
  height: 100%;
  padding: 90px 10px;
  box-sizing: border-box;
  background-color: #eee;
  z-index: -1;
}

.base-main {
  top: 0;
  width: 100%;
  height: 100%;
  padding: 90px 10px;
  background-color: antiquewhite;
  margin-left: 200px;
  z-index: -1;
}
</style>
