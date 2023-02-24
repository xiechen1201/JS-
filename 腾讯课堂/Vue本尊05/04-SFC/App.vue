<template>
  <my-header :nav-data="navData" />
</template>

<script>
import MyHeader from "./components/MyHeader/index.vue";

export default {
  components: {
    MyHeader
  },
  data() {
    return {
      navData: [
        {
          id: 1,
          title: "百度",
          link: "https:www.baidu.com"
        },
        {
          id: 2,
          title: "谷歌",
          link: "https:www.google.com"
        },
        {
          id: 3,
          title: "必应",
          link: "https:www.bing.com"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
