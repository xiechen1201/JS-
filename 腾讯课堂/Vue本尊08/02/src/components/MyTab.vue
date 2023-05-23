<template>
  <div
    v-nav-change="{
      tabClass: 'tab-item',
      activeClass: 'active',
      currentIndex
    }">
    <!-- :class="['tab-item', { active: index === currentIndex }]" -->
    <a
      v-for="(item, index) of tabData"
      :key="item.id"
      class="tab-item"
      href="javascript:;"
      @click="onClickTabItem(index)">
      {{ item.title }}
    </a>
  </div>
  <div>
    <p>{{ tabContent }}</p>
  </div>
</template>

<script>
import navChange from "../directives/navChange";

export default {
  name: "MyTab",
  directives: {
    navChange
  },
  props: {
    initialIndex: [String, Number],
    tabData: Array
  },
  data() {
    return {
      currentIndex: this.initialIndex
    };
  },
  computed: {
    tabContent() {
      return this.tabData[this.currentIndex].content;
    }
  },
  methods: {
    onClickTabItem(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  text-decoration: none;
  color: #000;
}
</style>
