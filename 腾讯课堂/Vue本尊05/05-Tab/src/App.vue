<template>
  <div>
    <!--在模版中调用组件应使用 kebab-case 的格式 -->
    <tab :tab-data="tabData"></tab>
  </div>
</template>

<script>
import Tab from "./components/Tab/index.vue";

export default {
  components: {
    Tab
  },
  data() {
    return {
      tabData: {
        intialIndex: 1,
        searchValue: "",
        data: [
          {
            id: 1,
            itemTitle: "Nav-1",
            title: "Title-1",
            content: "Nav-content-1"
          },
          {
            id: 2,
            itemTitle: "Nav-2",
            title: "Title-2",
            content: "Nav-content-2"
          },
          {
            id: 3,
            itemTitle: "Nav-3",
            title: "Title-3",
            content: "Nav-content-3"
          }
        ]
      }
    };
  }
};
</script>

<style></style>
