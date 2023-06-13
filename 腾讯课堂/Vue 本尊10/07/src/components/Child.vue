<template>
  <div class="">This is Child component!</div>
  <h1 ref="h1Ref">{{ state.title }}</h1>
  <button @click="setTitle">Set title</button>
</template>

<script>
import { ref, reactive, nextTick } from "vue";

export default {
  setup() {
    const h1Ref = ref(null);
    const state = reactive({
      title: "This is title."
    });
    const setTitle = async () => {
      state.title = "这是标题.";

      /* nextTick(() => {
        console.log(h1Ref.value);
      }); */

      // 也可以 await 执行
      await nextTick();
      console.log(h1Ref.value);
    };

    return {
      h1Ref,
      state,
      setTitle
    };
  }
};
</script>

<style lang="scss" scoped></style>
