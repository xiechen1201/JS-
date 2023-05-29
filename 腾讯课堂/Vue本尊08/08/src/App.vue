<template>
  <!-- <MyButton type="success"> Add btn </MyButton>
  <MyBadge type="danger"> Danger </MyBadge> -->
  <Test1 />
  <!-- <Test2 /> -->
</template>

<script>
import Test1 from './components/Test1.vue';
import Test2 from './components/Test2.vue';

export default {
  name: "App",
  components:{
    Test1,
    Test2
  }
};
</script>

<style scoped></style>
