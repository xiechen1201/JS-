<template>
  <div class="">
    <a
      href="javascript:;"
      :class="{ active: $store.state.filter === 'all' }"
      @click="setFilter('all')">
      All
    </a>
    <a
      href="javascript:;"
      :class="{ active: $store.state.fFilter === 'finished' }"
      @click="setFilter('finished')">
      Finished
    </a>
    <a
      href="javascript:;"
      :class="{ active: $store.state.filter === 'unfinish' }"
      @click="setFilter('unfinish')">
      Unfinish
    </a>
  </div>
</template>

<script setup>
import {} from "vue";
import { useStore } from "vuex";

// 任何模版中，都可以直接使用 $store 对象

const store = useStore();
// 直接在组件中掉用 mutation
const setFilter = (filter) => store.commit("setFilter", filter);
</script>

<style lang="scss" scoped>
a {
  margin-right: 15px;
  text-decoration: none;
  color: #000;
}
.active {

}
</style>
