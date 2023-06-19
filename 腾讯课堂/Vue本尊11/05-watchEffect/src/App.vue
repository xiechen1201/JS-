<template>
  <div class="">
    {{ title }}
    <button @click="setTitle('这是标题。')">设置标题</button>
  </div>
</template>

<script>
import { watchEffect } from "vue";
import { useState } from "./hooks";

export default {
  setup() {
    const [title, setTitle] = useState("This is title.");
    let t = null;
    let count = 0;

    function getData(title) {
      console.log("getData")
      t = setTimeout(() => {
        console.log("网络请求成功" + count);
      }, 3000);
    }

    watchEffect((onCleanup) => {
      getData(title.value);

      onCleanup(() => {
        count++;
        console.log("onCleanup");
        clearTimeout(t);
      });
    });

    return {
      title,
      setTitle
    };
  }
};
</script>

<style lang="scss" scoped></style>
