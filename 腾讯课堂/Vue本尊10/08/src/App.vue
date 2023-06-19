<template>
  <div class="">
    <!-- <h1>{{ state.b.c }}</h1> -->
  </div>
</template>

<script>
import { reactive, isReactive, shallowReactive } from "vue";

export default {
  /* setup() {
    const data = {
      a: 1,
      b: {
        c: 2
      }
    };

    const state = reactive(data);
    console.log(state === data);
    console.log(state === reactive(state));
    console.log(isReactive(state));

    setTimeout(() => {
      state.b.c = 3;
    }, 500);

    return {
      state
    };
  } */

  /* setup() {
    const data = {
      a: 1,
      b: {
        c: 2
      }
    };

    const state = shallowReactive(data);
    console.log(isReactive(state))
    console.log(isReactive(state.b))

    setTimeout(() => {
      state.b.c = 3;
    }, 500);

    return {
      state
    };
  } */

  setup(){

  }
};
</script>

<style lang="scss" scoped></style>
