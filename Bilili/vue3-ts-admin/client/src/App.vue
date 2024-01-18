<template>
  <MyHeader />
  <MySideBar />
  <MyPage />
  <MyFooter />
</template>

<script setup lang="ts">
import MyHeader from "./components/MyHeader.vue"; 
import MySideBar from "./components/MySideBar.vue";
import MyPage from "./components/MyPage.vue";
import MyFooter from "./components/MyFooter.vue";

let num: number = 123;
console.log(num);
</script>

<style scoped>
h1 {
  border: 1px solid #333;
}
</style>
