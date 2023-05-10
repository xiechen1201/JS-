<template>
  <div>
    <h1>Article</h1>
    <p>
      This is an article which describes how to use Dynamic component and
      Asynchronous component in Vue.
    </p>
  </div>
</template>

<script>
export default {
  name: "Article",
  mounted() {
    console.log("Article mounted!");
  },
  unmounted() {
    console.log("Article unmounted!");
  }
};
</script>

<style></style>
