<template>
  <div class="app">
    <div class="article-box">
      <h1 class="title">{{ title }}</h1>
      <p>{{ author }} - <span class="date-time">{{ dateTime }}</span></p>
      <p class="content">{{ content }}</p>
    </div>
  </div>
</template>

<script>

// const { h, defineAsyncComponent } = Vue;

// const List1 = defineAsyncComponent(() => import('./components/List/List1'));
// const List2 = defineAsyncComponent(() => import('./components/List/List2'));
// const List3 = defineAsyncComponent(() => import('./components/List/List3'));

// const List = {
//   1: List1,
//   2: List2,
//   3: List3
// }

export default {
  name: 'App',
  // render () {
  //   return h(
  //     'h' + this.level,
  //     {},
  //     'h' + this.level
  //   );
  // },
  // render () {
  //   return h(List[this.managerNo]);
  // },
  // computed: {
  //   currentComponent () {
  //     switch (this.manageNo) {
  //       case 1:
  //         return List1;
  //       case 2:
  //         return List2;
  //       case 3:
  //         return List3;
  //       default:
  //         break;
  //     }
  //   }
  // },
  data () {
    return {
      title: 'This is TITLE',
      author: 'Xiaoyesensen',
      dateTime: '2022-04-17',
      content: 'This is CONTENT.',
      level: 2,
      managerNo: 1
    }
  }
}
</script>

<style lang="scss" scoped>
 
</style>