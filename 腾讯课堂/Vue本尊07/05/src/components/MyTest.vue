<template>
  <div>
    {{ myNum }}
    <button @click="addSuperNum">Add</button>
  </div>
</template>

<script>
import { Demo } from "../myFunction";

export default {
  name: "MyTest",
  props: {
    num: {
      type: Number,
      default: 100
    },
    arr: Array,
    str: String,
    bool: Boolean,
    obj: Object,
    setNum: Function,
    a: Number,
    b: Number,
    demo: Demo
  },
  data() {
    return {
      myNum: this.num
    };
  },
  methods: {
    addSuperNum() {
      this.myNum++;
    }
  }
};
</script>
