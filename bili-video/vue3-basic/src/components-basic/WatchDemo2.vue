<template>
  <h2>WatchDemo2.vue</h2>
  <p>{{ count }}</p>
</template>

<script>
import { ref, computed, watchEffect, onBeforeUpdate, onMounted } from "vue";

export default {
  /**
   * 1、默认情况下，watchEffect 会比 onBeforeUpdate 先执行
   * watchEffect 的参数2 可以设置 watchEffect 什么时候执行
      watchEffect(() => {
        console.log(count.value);
      },{
        flush:"post"
      });
   * 
   * 
   * 2、首次页面加载的时候 watchEffect 会比 onMounted 先执行
   * 
   * 3、watchEffect 的调试
   * 
   *  */
  setup() {
    const count = ref(0);

    setTimeout(() => {
      count.value = 1;
    }, 2000);

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    watchEffect(
      () => {
        console.log(count.value);
      },
      {
        flush: "post",
        // 将在响应属性或引用作为依赖项被跟踪时被调用
        onTrack(e) {
          console.log(e);
        },
        // 将在侦听器回调被依赖项的变更触发时被调用
        onTrigger(e) {
          console.log(e);
        },
      }
    );

    onMounted(() => {
      console.log("onMounted");
    });

    return {
      count,
    };
  },
};
</script>
