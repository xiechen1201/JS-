<template>
  <p>I am grand father SFC.</p>
  <Father />
</template>

<script>
import { provide, readonly, reactive } from "vue";
import Father from "./Father.vue";

export default {
  name: "GrandFather",
  components: {
    Father
  },
  setup() {
    /*  provide("grandFatherAge", readonly(83));
    provide("grandFatherBodyInfo", {
      height: 175,
      weight: 70
    }); */

    const state = reactive({
      age: 83,
      info: {
        height: 175,
        weight: 70
      }
    });

    // readonly 把响应式数据锁定，不能进行更改
    provide("grandFatherInfo", readonly(state));
  }
};
</script>
