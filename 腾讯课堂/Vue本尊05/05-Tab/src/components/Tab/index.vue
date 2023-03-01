<template>
  <div class="tab">
    <tab-search :search-value="searchValue" @update:search-value="updateSearchValue"></tab-search>
    <tab-nav :tab-index="tabIndex" :nav-data="navData" @change-index="changeIndex"></tab-nav>
    <tab-page :page-data="pageData"></tab-page>
  </div>
</template>

<script>
import TabSearch from "./TabSearch/index.vue";
import TabNav from "./TabNav/index.vue";
import TabPage from "./TabPage/index.vue";

export default {
  name: "Tab",
  props: ["tabData"],
  components: {
    TabSearch,
    TabNav,
    TabPage
  },
  data() {
    return {
      tabIndex: this.tabData.intialIndex,
      searchValue: this.tabData.searchValue || this.tabData.data[this.tabData.intialIndex].title
    };
  },
  computed: {
    navData() {
      return this.tabData.data.map((el) => {
        return {
          id: el.id,
          itemTitle: el.itemTitle
        };
      });
    },
    pageData() {
      return this.tabData.data.find((el, index) => {
        if (index === this.tabIndex) {
          return {
            title: el.title,
            cotent: el.cotent
          };
        }
      });
    }
  },
  methods: {
    changeIndex(index) {
      this.tabIndex = index;
    },
    updateSearchValue(value) {
      this.tabData.data.some((el, index) => {
        if (el.title.includes(value) || el.content.includes(value)) {
          this.tabIndex = index;
          return true;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.tab {
  width: 500px;
  height: 550px;
  margin: 50px auto;
  border: 1px solid #333;
}
</style>
