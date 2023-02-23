<template>
  <div>
    <h3>I am son!!!</h3>
    <p>My grand father's age is {{ age }}</p>
    <p>His height is {{ height }}cm.</p>
    <p>His weight is {{ weight }}kg.</p>
  </div>
</template>

<script>

const { inject, toRefs } = Vue;

export default {
  name: 'Son',
  // props: {
  //   gfAge: Number
  // },
  // emits: ['changeAge'],
  // setup (props, ctx) {
  //   ctx.emit('changeAge', 3);
  // }
  setup () {
    // let gfAge = inject('grandFatherAge', 80);
    // const gfBodyInfo = inject('grandFatherBodyInfo', {
    //   height: 170,
    //   weight: 60
    // });

    // return {
    //   gfAge,
    //   ...gfBodyInfo
    // }

    const gfInfo = inject('grandFatherInfo');
    const updateGrandFatherAge = inject('updateGrandFatherAge');

    // console.log(gfInfo);

    // gfInfo.age = 1000;

    updateGrandFatherAge(1000);

    return {
      ...toRefs(gfInfo)
    }
  }
}

</script>

<style lang="scss" scoped>

</style>