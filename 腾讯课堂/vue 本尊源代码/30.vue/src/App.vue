<template>
  <!-- <div ref="loginBox">
    <p v-if="showWhat === 'input'">
      Username: <input type="text" ref="myRef" />
    </p>
    <p v-else-if="showWhat === 'link'">
      <a href="https://www.google.com" ref="myRef">Google</a>
    </p>
    <p>
      Password: <input type="password" />
    </p>
  </div> -->
  <div>
    <!-- <my-list :data="myList" :page-count="5"></my-list> -->
    <!-- <my-test ref="myTest"></my-test>
    <button @click="handleClick">click</button> -->
    <login-board :needReset="true"></login-board>
  </div>
</template>

<script>
/**
 * ref -> reference 引用
 * 
 * 引用DOM节点、引用组件实例
 * 
 */

import MyTest from './components/MyTest';

import MyList from './components/MyList';

import LoginBoard from './components/LoginBoard';

export default {
  name: 'App',
  components: {
    MyList,
    MyTest,
    LoginBoard
  },
  data () {
    return {
      // showWhat: 'input'
      // myList: [
      //   {
      //     id: 1,
      //     text: 'Row 1'
      //   },
      //   {
      //     id: 2,
      //     text: 'Row 2'
      //   },
      //   {
      //     id: 3,
      //     text: 'Row 3'
      //   },
      //   {
      //     id: 4,
      //     text: 'Row 4'
      //   },
      //   {
      //     id: 5,
      //     text: 'Row 5'
      //   },
      //   {
      //     id: 6,
      //     text: 'Row 6'
      //   },
      //   {
      //     id: 7,
      //     text: 'Row 7'
      //   },
      //   {
      //     id: 8,
      //     text: 'Row 8'
      //   },
      //   {
      //     id: 9,
      //     text: 'Row 9'
      //   },
      //   {
      //     id: 10,
      //     text: 'Row 10'
      //   },
      //   {
      //     id: 11,
      //     text: 'Row 11'
      //   },
      //   {
      //     id: 12,
      //     text: 'Row 12'
      //   },
      //   {
      //     id: 13,
      //     text: 'Row 13'
      //   },
      //   {
      //     id: 14,
      //     text: 'Row 14'
      //   },
      // ]
    }
  },
  // beforeCreate () {
  //   console.log(this.$refs);
  // },
  // created () {
  //   console.log(this.$refs);
  // },
  // beforeMount () {
  //   console.log(this.$refs);
  // },
  mounted () {
    // console.log(this.$refs);

    // const oLink = document.createElement('a');
    // oLink.innerText = 'Google';
    // oLink.href = 'https://www.google.com';
    // this.$refs.myRef = oLink;

    // console.log(this.$refs.myRef);
    // this.showWhat = 'input';
    
    // this.$nextTick(() => {
    //   console.log(this.$refs.myRef);
    // });

    // this.$refs.myRef.focus();
    // console.log(this.$refs.loginBox.offsetHeight);
    // $refs本身并不是响应式的，所以不要在模板中使用
    // 不要在计算属性中访问
    // 不要尝试去更改ref, ref提供给你获取DOM节点或组件实例引用
    // console.log(this.$refs);
  },
  // methods: {
  //   handleClick () {
  //     this.$refs.myTest.count ++;
  //     console.log(this.$refs.myTest.count);
  //   }
  // }
}
</script>

<style>

</style>