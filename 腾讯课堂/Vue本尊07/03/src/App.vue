<template>
  <my-test ref="myTestRef"></my-test>
  <button @click="handleClick">click</button>
  <login-board></login-board>
</template>

<script>
import MyTest from "./components/MyTest/index.vue";
import LoginBoard from "./components/LoginBoard/index.vue";

export default {
  components: {
    MyTest,
    LoginBoard
  },
  beforeCreate() {
    console.log(this.$refs);
  },
  created() {
    console.log(this.$refs);
  },
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    handleClick() {
      console.log(this.$refs.myTestRef.count);
      this.$refs.myTestRef.addCount();
    }
  }
};
</script>
