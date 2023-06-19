<template>
  <div></div>
</template>

<script>
import { computed, reactive, readonly } from "vue";

export default {
  setup() {
    const data = {
      a: 1,
      b: 2,
      c: {
        d: 4
      }
    };

    const state = reactive(data);

    const result = computed(() => state.a + state.b);

    console.log(result)

    // const result = computed({
    //   get: () => {
    //     return state.a + state.b;
    //   },
    //   set(newVal) {
    //     console.log(newVal)
    //   }
    // });

    // console.log(result.value);
  }
};
</script>

<style lang="scss" scoped></style>
