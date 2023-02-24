<template>
  <div>
    <my-button type="success" @click="doTest">Success</my-button>
    <my-badge type="danger">danger</my-badge>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    doTest () {
      this.$MyUI.test();
    },
    test1 () {
      console.log('test1');
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>