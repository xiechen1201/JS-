<template>
  <div>
    <!-- <my-test :num="1" :arr="[1, 2, 3, 4, 5]" :str="'123'" /> -->
    <my-test
      :num="num"
      :arr="arr"
      :str="str"
      :bool="bool"
      :obj="obj"
      v-bind="obj"
      :set-num="setNum"
      :demo="demo" />
  </div>
</template>

<script>
import MyTest from "./components/MyTest.vue";
import { Demo } from "./myFunction";

export default {
  name: "App",
  components: {
    MyTest
  },
  data() {
    return {
      num: 1,
      arr: [1, 2, 3, 4, 5],
      str: "123",
      bool: true,
      obj: {
        a: 1,
        b: 2
      },
      demo: new Demo()
    };
  },
  methods: {
    setNum() {
      this.num++;
    }
  }
};
</script>
