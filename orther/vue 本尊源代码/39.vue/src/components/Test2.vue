<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ author }}</p>
    <p>{{ content }}</p>
  </div>
</template>

<script>

import testMixin from '../mixins/test';

export default {
  name: 'Test2',
  mixins: [
    testMixin
  ],
  data () {
    return {
      title: 'This is TITLE 2',
      content: 'This is CONTENT 2'
    }
  }
}
</script>

<style>

</style>