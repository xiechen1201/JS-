<template>
  <div class="tab">
    <div class="nav">
      <div
        v-for="(value, key) in navData"
        :key="key"
        :class="['nav-item', { active: key === currentTab }]"
        @click="setCurrentTab(key)">
        {{ value }}
      </div>
    </div>
    <div class="component">
      <keep-alive exclude="List" include="Intro">
      <component :is="currentComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { Intro, Article, List } from "./components/AsyncComponents.js";
import Loding from "./components/Loding.vue";

export default {
  components: {
    Loding,
    Intro,
    Article,
    List
  },
  data() {
    return {
      currentTab: "intro",
      navData: {
        intro: "Intro",
        article: "Article",
        list: "List"
      }
    };
  },
  computed: {
    currentComponent() {
      switch (this.currentTab) {
        case "intro":
          return Intro;
        case "article":
          return Article;
        case "list":
          return List;
      }
    }
  },
  methods: {
    setCurrentTab(key) {
      this.currentTab = key;
    }
  }
};
</script>

<style scoped>
.tab {
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  margin: 50px auto;
}

.nav {
  height: 50px;
  border-bottom: 1px solid #000;
}

.nav-item {
  float: left;
  width: 33.33%;
  height: 100%;
  text-align: center;
  line-height: 50px;
}

.active {
  background-color: #000;
  color: #fff;
}

.component {
  padding: 30px;
  box-sizing: border-box;
}
</style>
