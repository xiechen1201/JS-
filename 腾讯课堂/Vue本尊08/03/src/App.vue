<template>
  <div class="container">
    <div class="box" v-for="item of imageData" :key="item.id">
      <div class="img-box">
        <img v-lazy="item.src" :alt="item.title" />
      </div>
      <div class="content-box">
        <h1>{{ item.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      imageData: null
    };
  },
  async mounted() {
    const result = await axios.get("http://localhost:3000/imgs");
    this.imageData = result.data;
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  overflow: auto;
}
// .box {
//   height: 100px;
//   padding: 5px 10px;
//   box-sizing: border-box;
//   border-bottom: 1px solid #ededed;
// }
</style>
