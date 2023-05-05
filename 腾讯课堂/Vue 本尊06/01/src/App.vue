<template>
  <div class="side-bar">
    <tree-menu>
      <template v-for="item of menuData">
        <menu-item v-if="!item.children" :key="item.id">
          <a href="javascript:;">
            {{ item.title }}
          </a>
        </menu-item>
        <re-sub-menu v-else :key="item.id" :data="item"></re-sub-menu>
      </template>
    </tree-menu>
  </div>
</template>

<script setup>
import menuData from './data/menuData.js'
import ReSubMenu from './libs/jspp-ui/TreeMenu/ReSubMenu.vue'
</script>

<style lang="scss" scoped>
.side-bar {
  width: 300px;
}
</style>
