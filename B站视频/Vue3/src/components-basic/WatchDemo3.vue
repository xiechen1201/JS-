<template>
  <h2>WatchDemo2.vue</h2>
</template>

<script>
import { watch, ref } from "vue";

export default {
  /**
   * watch 需要指定一个明确的数据和一个回调函数
   * 回调函数一定是监听的数据发送变化后才会执行
   *
   *
   *
   *  */
  setup() {
    const count = ref(0);
    const name = ref("张三");

    setTimeout(() => {
      count.value = 1;
      name.value = "李四";
    }, 1000);

    watch(count, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    // 同时监听多个值
    watch([count, name], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
  },
};
</script>
