<template>
  <h2>WatchDemo.vue</h2>
  <p>{{ superSentence }}</p>
  <p>{{ superSentence2 }}</p>
</template>

<script>
import { ref, computed, watchEffect } from "vue";

export default {
  /**
   * 1、computed
   * computed 从 getter 返回一个新的值
   * computed 也可以传递一个对象包含 get、set 方法，来拦截对属性的操作
   *
   * 2、watchEffect
   * watchEffect 函数的处理函数会立即执行，他会响应式的追踪它的依赖数据。
   * watchEffect 不需要指定你要监听的数据，他会自动收集响应依赖
   * 当依赖的数据发生变化，watchEffect 会执行它的回调函数
   * 当组件卸载的时候会自动销毁监听
   * watchEffect 函数会返回一个具柄函数，当你调用这个具柄函数的时候会立即停止监听
   *
   * 3、副作用失效
   * watchEffect 仅会在其同步执行期间，才追踪依赖。在使用异步回调时，只有在第一个 await 正常工作前访问到的属性才会被追踪。
   *
   *  */
  setup() {
    const sentence = ref("欢迎来到Vue3");
    const superSentence = computed(() => "小明，" + sentence.value);
    const superSentence2 = computed({
      get() {
        return "动态计算的值";
      },
      set() {
        console.log("修改 superSentence2 的值");
      },
    });

    const count = ref(0);

    setTimeout(() => {
      count.value = 1;
    }, 2000);

    const stop = watchEffect(async (onInvalidate) => {
      console.log(count.value);

      // const data = await getDate();
      // 例如输入框防抖操作，可以在 onInvalidate 拦截 watchEffect 的监听
      // 在打印 console.log(count.value); 之前执行
      onInvalidate(() => {
        console.log("onInvalidate is triggered");
      });
    });
    stop();

    return {
      superSentence,
      superSentence2,
    };
  },
};
</script>
