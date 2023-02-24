<template>
  <div class="tab-page">
    <h1>{{ pageData.title }}</h1>
    <h1>{{ pageData.content }}</h1>
  </div>
</template>

<script>
export default {
  name: "tab-page",
  props: ["pageData"]
};
</script>

<style lang="scss" scoped>
.tab-page {
  width: 100%;
  height: 450px;
  padding: 25px;
  box-sizing: border-box;
}
</style>
