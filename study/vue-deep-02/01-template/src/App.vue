<template>
  <h1 v-once>{{ title }}</h1>
  <button @click="handleClick">更改title</button>
  <hr />
  <div v-html="htmlContent"></div>
</template>

<script>
export default {
  data() {
    return {
      title: "this is title",
      htmlContent: "<p>this is v-html</p>",
    };
  },
  methods: {
    handleClick() {
      console.log(this);
      this.title = new Date().getTime();
    },
  },
};
</script>

<style lang="scss" scoped></style>
