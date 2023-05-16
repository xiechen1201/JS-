<template>
  <my-article v-bind="article" />
</template>

<script>
import MyArticle from "./components/MyArticle.vue";

export default {
  name: "App",
  components: {
    MyArticle
  },
  data() {
    return {
      article: {
        title: "This is my title.",
        isRecom: true,
        status: 0,
        author: {
          name: "xiechen",
          website: "https://www.google.com",
          follows: 20000
        },
        content: "This is my content.",
        commentCount: 5,
        comments: [
          {
            id: 1,
            content: "This is my content 1.",
            dateTime: "2021/09/23 12:04:23"
          },
          {
            id: 2,
            content: "This is my content 1.",
            dateTime: "2021/09/23 12:04:23"
          },
          {
            id: 3,
            content: "This is my content 1.",
            dateTime: "2021/09/23 12:04:23"
          },
          {
            id: 4,
            content: "This is my content 1.",
            dateTime: "2021/09/23 12:04:23"
          },
          {
            id: 5,
            content: "This is my content 1.",
            dateTime: "2021/09/23 12:04:23"
          }
        ]
      }
    };
  }
};
</script>
