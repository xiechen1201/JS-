<template>
  <div class="tab">
    <div class="nav">
      <div
        v-for="(value, key) in navData"
        :key="key"
        :class="['nav-item', { 'active': key === currentTab }]"
        @click="setCurrentTab(key)"
      >{{ value }}</div>
    </div>

    <div class="component">
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>

import { Intro, Article, List } from './components/AsyncComponents';
import { reactive, toRefs, computed } from 'vue';

export default {
  name: 'App',
  setup () {
    const state = reactive({
      currentTab: 'intro',
      navData: {
        'intro': 'Intro',
        'list': 'List',
        'article': 'Article'
      }
    });

    const currentComponent = computed(() => {
      switch (state.currentTab) {
        case 'intro':
          return Intro;
        case 'list':
          return List;
        case 'article':
          return Article;
        default:
          break;
      }
    });

    const setCurrentTab = (tab) => {
      state.currentTab = tab;
    }

    return {
      ...toRefs(state),
      currentComponent,
      setCurrentTab
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab {
    width: 500px;
    height: 500px;
    border: 1px solid #000;
    margin: 50px auto;

    .nav {
      height: 50px;
      border-bottom: 1px solid #000;

      .nav-item {
        float: left;
        width: 33.33%;
        height: 100%;
        text-align: center;
        line-height: 50px;

        &.active {
          background-color: #000;
          color: #fff;
        }
      }
    }

    .component {
      padding: 30px;
      box-sizing: border-box;
    }
  }  
</style>