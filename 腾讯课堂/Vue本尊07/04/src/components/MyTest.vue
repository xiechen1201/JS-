<template>
  <div>
    {{ myNum }}
    {{ arr }}
    <button @click="setNum">点击</button>
  </div>
</template>

<script>
import { Demo } from "../myFunction";

export default {
  name: "MyTest",
  props: {
    num: Number,
    arr: Array,
    str: String,
    bool: Boolean,
    obj: Object,
    setNum: Function,
    a: Number,
    b: Number,
    demo: Demo
  },
  computed: {
    myNum() {
      // 字符串拼接
      return this.num + 1;
    }
  },
  mounted() {
    console.log(this.arr);
    console.log(this.str);
    console.log(this.bool);
    console.log(this.obj);
    console.log(this.a, this.b);
    console.log(this.demo)
  }
};
</script>
