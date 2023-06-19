<template>
  <!--  <div class="">{{ state }}</div>
  <div>{{ a }}</div> -->
</template>

<script>
import { ref, isRef, toRef, reactive, toRefs, shallowRef } from "vue";

export default {
  /*setup() { 
    const count = ref(0);
    console.log(count.value);
    console.log(isRef(count));

    const state = reactive({
      a: 1,
      b: 2
    });

    const a = toRef(state, "a");
    a.value = 3;
    console.log(a);

    const data = toRefs(state);
    console.log(data);

    return {
      state,
      a
    };
  } */

  /* setup() {
    const count = ref(0);
    const state = reactive({ count });

    console.log(count, state.count); // ref， 0

    setTimeout(() => {
      count.value = 3;

      console.log(count, state.count); // ref， 3
    }, 1000);

  } */

  /* setup() {
    const count = ref(0);
    const state = reactive([count]);

    console.log(state[0].value)
  } */

  setup() {
    const obj = {
      count: ref(0)
    };

    const obj2 = shallowRef({
      a: 1,
      b: {
        c: 2
      }
    });
  }
};
</script>

<style lang="scss" scoped></style>
