<template>
  <div>
    <div v-for="item of navData" :key="item" @click="currentTab = item">
      {{ item }}
    </div>
  </div>
  <div class="component">
    <component :is="currentTab" />
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import { Intro, Article, List } from "./components/AsyncComponents";

export default {
  components: {
    Intro,
    Article,
    List
  },
  setup() {
    const state = reactive({
      currentTab: "Intro",
      navData: {
        Intro: "Intro",
        Article: "Article",
        List: "List"
      }
    });

    return {
      ...toRefs(state)
    };
  }
};
</script>

<style lang="scss" scoped></style>
