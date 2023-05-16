<template>
  <div>
    {{ myNum }}
    {{ arr }}
  </div>
</template>

<script>
export default {
  name: "MyTest",
  props: ["num", "arr", "str", "bool", "obj", "a", "b"],
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
  }
};
</script>
