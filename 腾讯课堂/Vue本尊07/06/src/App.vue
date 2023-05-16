<template>
  <my-demo :count="count" :status="status" v-bind="article" />
  <my-button btn-type="primary">Click</my-button>
</template>

<script>
import MyDemo from "./components/MyDemo.vue";
import MyButton from "./components/MyButton.vue";

export default {
  name: "App",
  components: {
    MyDemo,
    MyButton
  },
  data() {
    return {
      count: 0,
      status: 0,
      article: {
        title: "This is my title",
        content: "This is my content"
      }
    };
  }
};
</script>
