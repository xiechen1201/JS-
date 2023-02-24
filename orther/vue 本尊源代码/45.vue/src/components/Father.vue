<template>
  <div>
    <h2>I am father!!!</h2>
    <son></son>
  </div>
</template>

<script>

import Son from './Son';

export default {
  name: 'Father',
  components: {
    Son
  },
  // props: {
  //   gfAge: Number
  // },
  // emits: ['changeAge'],
  // setup (props, ctx) {
  //   const changeAge = (num) => {
  //     ctx.emit('changeAge', num);
  //   }

  //   return {
  //     changeAge
  //   }
  // }
}

</script>

<style lang="scss" scoped>

</style>