<template>
  <div></div>
</template>

<script>

const { inject } = Vue;

export default {
  name: 'App',
  // data () {
  //   return {
  //     $http: 123,
  //     a: 234
  //   }
  // },
  // mounted () {
  //   this.$http();
  //   console.log(this.a);
  // },
  setup () {
    // 不推荐你直接获取应用 组件实例
    // const { proxy } = getCurrentInstance();
    // console.log(proxy.b);
    const { a, b, $http } = inject('globalProperties');
    console.log(a, b, $http);
  }
}
</script>