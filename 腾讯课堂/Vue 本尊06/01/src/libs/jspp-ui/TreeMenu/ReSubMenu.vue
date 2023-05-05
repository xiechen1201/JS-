<template>
  <sub-menu>
    <template #title>
      {{ data.title }}
    </template>
    <div v-for="c of data.children" :key="c.id">
      <menu-item v-if="!c.children">{{ c.title }}</menu-item>
      <re-sub-menu v-else :data="c"></re-sub-menu>
    </div>
  </sub-menu>
</template>

<script>
export default {
  name: 'ReSubMenu',
  props: {
    data: Object
  }
}
</script>

<style></style>
