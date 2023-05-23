<template>
  <my-tab :initial-index="initialIndex" :tab-data="tabData" />
</template>

<script>
import MyTab from "./components/MyTab.vue";

export default {
  name: "App",
  components: {
    MyTab
  },
  data() {
    return {
      initialIndex: 0,
      tabData: [
        {
          id: 1,
          title: "选项1",
          content: "内容1"
        },
        {
          id: 2,
          title: "选项2",
          content: "内容2"
        },
        {
          id: 3,
          title: "选项3",
          content: "内容3"
        }
      ]
    };
  }
};
</script>
