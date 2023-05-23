<template>
  <div>
    <div class="box box1" v-my-show="visible1"></div>
    <div class="box box2" v-my-if="visible2"></div>
    <button @click="visible1 = !visible1">Show/Hide</button>
    <button @click="visible2 = !visible2">Add/Remove</button>
  </div>
</template>

<script>
import { myShow, myIf } from "./directives/index";

export default {
  name: "App",
  components: {},
  /* directives: {
    myShow,
    myIf
  }, */
  data() {
    return {
      visible1: true,
      visible2: true
    };
  },
  methods: {}
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
}
.box1 {
  background-color: orange;
}
.box2 {
  background-color: green;
}
</style>
