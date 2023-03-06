<template>
 <div>
   <!-- <MyButton>
    <span>click</span>
    <MyIcon />
  </MyButton> -->

  <MyButton />
  <ElButton />
 </div>
</template>

<script>
import MyButton from "./components/MyButton/index.vue";
import MyIcon from "./components/MyIcon/index.vue"
import ElButton from "./components/ElButton/index.vue"

export default {
  name: "App",
  components: {
    MyButton,
    MyIcon,
    ElButton
  }
};
</script>

<style></style>
