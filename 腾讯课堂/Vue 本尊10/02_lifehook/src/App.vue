<template>
  <div class="">
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
import {
  ref,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered
} from "vue";

export default {
  setup() {
    const count = ref(0);

    setTimeout(() => {
      count.value = 1;
    }, 1000);

    console.log("setup");

    onBeforeMount(() => console.log("onBeforeMount"));

    onMounted(() => console.log("onMounted"));

    onBeforeUpdate(() => console.log("onBeforeUpdate"));

    onUpdated(() => console.log("onUpdated"));

    watchEffect(
      () => {
        const a = count.value;
        console.log(">>>>watchEffect");
      },
      {
        flush: "post"
      }
    );

    onErrorCaptured((e) => {
      console.log(e);
    });

    // 当组件渲染的时候会执行，可以进行 debugger 调试
    onRenderTracked((e) => {
      // debugger
    });

    // 和 onRenderTracked 一样，但是是在重新渲染的时候执行
    onRenderTriggered((e) => {});

    return {
      count
    };
  }
};
</script>

<style lang="scss" scoped></style>
